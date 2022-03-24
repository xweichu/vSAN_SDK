import os
import sys
import subprocess
import time

os.environ["VSAN_PYMO_SKIP_VC_CONN"] = "1"
if os.name == 'nt':
   # include vmw's python module into PATH, for windows only
   sys.path.append(os.environ["VMWARE_PYTHON_PATH"])
else:
   sys.path.append("/usr/lib/vmware/site-packages/")

import VCConnectionHelper

import six
if six.PY3:
   from http.cookies import SimpleCookie
else:
   from Cookie import SimpleCookie

# add the pypack path for importing pyVmomi module
sys.path.append(VCConnectionHelper.GetPyJackPath())
import pyVmomi
from pyVmomi import vim, Vim
import json
from pyMoVsan.VsanVcClusterUtil import FindAllVcClusters
from pyMoVsan.VsanHealthUtil import GetSSLConextForLocalhost
from pyVmomi.VmomiSupport import ResolveLinks
from pyMoVsan.VsanHealthHelpers import SoapStubAdapterForLocalhost, \
                                   GetRhttpproxyPorts

def ConnectToVC():
   certFile = '/etc/vmware-vpx/ssl/rui.crt'
   certKeyFile='/etc/vmware-vpx/ssl/rui.key'
   if os.name == 'nt':
      #include vmw's python module into PATH, for windows only
      sys.path.append(os.environ["VMWARE_PYTHON_PATH"])
      from cis.defaults import get_cis_config_dir
      certFile = os.path.join(get_cis_config_dir(), 'vmware-vpx', 'ssl', 'rui.crt')
      certKeyFile = os.path.join(get_cis_config_dir(), 'vmware-vpx', 'ssl', 'rui.key')

   version = pyVmomi.VmomiSupport.newestVersions.Get("vsan")
   conn = SoapStubAdapterForLocalhost(
      'localhost', port=GetRhttpproxyPorts(https=False),
      version = version,
      certFile = certFile,
      certKeyFile = certKeyFile,
      sslProxyPath = "/sdkTunnel"
   )
   si = vim.ServiceInstance('ServiceInstance', conn)
   content = si.content
   sm = content.sessionManager
   sm.LoginExtensionByCertificate(extensionKey = 'VirtualCenter')
   return (conn, si, content)

def ConnectToVsanClusterSystem(stub):
   sessionCookie = stub.cookie.split('"')[1]
   httpContext = pyVmomi.VmomiSupport.GetHttpContext()
   cookieObj = SimpleCookie()
   cookieObj["vmware_soap_session"] = sessionCookie
   httpContext["cookies"] = cookieObj
   hostname = stub.host.split(":")[0]

   version = pyVmomi.VmomiSupport.newestVersions.Get("vsan")
   vhStub = pyVmomi.SoapStubAdapter(host=hostname,
                                    version = version,
                                    path = "/vsanHealth",
                                    poolSize = 0,
                                    sslContext = GetSSLConextForLocalhost())
   vhStub.cookie = stub.cookie
   vcs = vim.cluster.VsanVcClusterConfigSystem('vsan-cluster-config-system',
                                               vhStub)
   return vcs

def ConvertCidToVsanUuid(cid):
   return "%s-%s-%s-%s-%s" % (cid[0:8],  # nnnnnnnn
                              cid[8:12], # nnnn
                              cid[12:16],# nnnn
                              cid[17:21],# nnnn
                              cid[21:33])# nnnnnnnnnnnn

def IsRemoteDatastoreOf(datastore, clusterUuid):
   aliasOf = datastore.info.aliasOf
   if aliasOf is None:
      return False
   return (ConvertCidToVsanUuid(aliasOf) != clusterUuid)

def GetVsanDatastores(cluster, clusterMap):
   clusterUuid = cluster.configurationEx.vsanConfigInfo.defaultConfig.uuid
   localDsList = []
   rdsList = []
   nonVsanDsList = []
   datastoreObjs = {}
   for ds in cluster.datastore:
      if ds.GetSummary().type == 'vsan':
         cid, aliasOf = (ds.info.containerId, ds.info.aliasOf)
         if aliasOf is None:
            aliasOf = cid
         datastoreObj = {}
         datastoreObj["name"] = ds.name
         datastoreObj["containerId"] = cid
         datastoreObj["moref"] = ds._moId
         datastoreObj["alias"] = aliasOf
         if clusterMap[ConvertCidToVsanUuid(aliasOf)]:
            datastoreObj["cluster_name"] = clusterMap[ConvertCidToVsanUuid(aliasOf)]
         if ConvertCidToVsanUuid(ds.info.containerId) == clusterUuid:
            datastoreObjs["default_datastore"] = datastoreObj
         if IsRemoteDatastoreOf(ds, clusterUuid):
            rdsList.append(datastoreObj)
         else:
            localDsList.append(datastoreObj)
      else:
         datastoreObj = {}
         datastoreObj["name"] = ds.name
         datastoreObj["moref"] = ds._moId
         nonVsanDsList.append(datastoreObj)
   datastoreObjs["local_datastores"] = localDsList
   datastoreObjs["remote_datastores"] = rdsList
   datastoreObjs["nonvsan_datastores"] = nonVsanDsList
   return datastoreObjs

def GetHostsDetails(hosts):
   hostObjs = []
   for host in hosts:
      hostObj = {}
      hostObj["name"] = host.name
      hostObj["moref"] = host._moId
      vsanHostConfig = host.config.vsanHostConfig
      hostObj["nodeuuid"] = vsanHostConfig.clusterInfo.nodeUuid
      hostObj["vsanIps"] = GetVsanIpForHost(host)
      hostObjs.append(hostObj)
   return hostObjs

def GetVsanIpForHost(host):
   vsanIp = []
   vnm = (host.configManager.virtualNicManager)
   cfg = vnm.QueryNetConfig(Vim.Host.VirtualNicManager.NicType.vsan)
   selectedVmknics = cfg.GetSelectedVnic()
   vmkNics = ResolveLinks(selectedVmknics, cfg)
   for r in vmkNics:
      vsanIp.append(r.spec.ip.ipAddress)
   return vsanIp

def fetchVsanClustersFromPC(clusters):
   from VsanClusterHealthSystemImpl import CollectMultiple
   clusterProps = CollectMultiple(
      content, clusters, ['configurationEx'])
   vsanEnabledClusters = [cluster for cluster in clusters \
      if cluster in clusterProps and \
      clusterProps[cluster]['configurationEx'].vsanConfigInfo.enabled]
   return vsanEnabledClusters

def GetVsanClients(nonVsanClusters, conn):
   vcs = ConnectToVsanClusterSystem(conn)
   vsanClients = []
   for cluster in nonVsanClusters:
      clusterConfig = vcs.GetConfigInfoEx(cluster)
      if clusterConfig.mode == "Mode_Compute":
         vsanClients.append(cluster)
   return vsanClients

def PopulateClusterObj(cls, clusterMap):
   clusterObj = {}
   clusterObj["name"] = cls.name
   clusterObj["moref"] = cls._moId
   clusterObj["uuid"] = cls.configurationEx.vsanConfigInfo.defaultConfig.uuid
   clusterObj["hosts"] = GetHostsDetails(cls.host)
   clusterObj["datastores"] = GetVsanDatastores(cls, clusterMap)
   return clusterObj

def GetClustersDetails(clusters, conn):
   clusterObjs = []
   clusterMap = {}
   vsanClusters = fetchVsanClustersFromPC(clusters)
   for cls in vsanClusters:
      clusterMap[cls.configurationEx.vsanConfigInfo.defaultConfig.uuid] = cls.name
   nonVsanClusters = list(set(clusters) - set(vsanClusters))
   vSanClientClusters = GetVsanClients(nonVsanClusters, conn)
   for cls in vsanClusters:
      clusterObj = PopulateClusterObj(cls, clusterMap)
      clusterObj["clusterType"] = "vSAN"
      clusterObjs.append(clusterObj)
   for cls in vSanClientClusters:
      clusterObj = PopulateClusterObj(cls, clusterMap)
      clusterObj["clusterType"] = "ComputeClient"
      clusterObjs.append(clusterObj)
   return clusterObjs

def GetVCenterDetails(content, conn):
   vCenterObj = {}
   vCenterObj["name"] = content.setting.QueryOptions(name="VirtualCenter.InstanceName")[0].value
   vCenterObj["instanceId"] = content.about.instanceUuid
   datacenterObjs = []
   datacenters = content.rootFolder.childEntity
   for dc in datacenters:
      datacenterObj = {}
      datacenterObj["name"] = dc.name
      datacenterObj["moref"] = dc._moId
      clusterObjs = []
      datacenterObj["clusters"] = GetClustersDetails(dc.hostFolder.childEntity, conn)
      datacenterObjs.append(datacenterObj)
   vCenterObj["datacenters"] = datacenterObjs
   return vCenterObj

def PrintClusterDetails(clusterObjs):
   for cluster in clusterObjs:
      print("subCluster: (%s)" % (cluster["clusterType"]))
      print("  %s -> %s ->% s" % (cluster["uuid"], cluster["name"], cluster["moref"]))
      hosts = cluster["hosts"]
      print("nodes:")
      for host in hosts:
         print("  %s -> %s -> %s" % (host["nodeuuid"], host["name"], host["vsanIps"]))
      print("datastores:")
      datastores = cluster["datastores"]
      local_datastores = datastores["local_datastores"]
      remote_datastores = datastores["remote_datastores"]
      for ds in local_datastores:
         print("  %s -> %s -> %s (%s)" % (ds["alias"], ds["name"], ds["moref"], "local"))
      for ds in remote_datastores:
         print("  %s -> %s -> %s -> %s (%s)" % (ds["alias"], ds["name"], ds["moref"], ds["cluster_name"], "remote"))
      print ("")

def PrintVcenterDetails(vCenterObj):
   print("vCenter -> %s -> %s" %(vCenterObj["name"], vCenterObj["instanceId"]))
   for dc in vCenterObj["datacenters"]:
      print("datacenter:")
      print(" %s -> %s" % (dc["name"], dc["moref"]))
      PrintClusterDetails(dc["clusters"])
      print("")
   print("")

startTime = time.time()
conn, si, content = ConnectToVC()
vCenter = {}
vCenter["vCenter"] = GetVCenterDetails(content, conn)
print("")
PrintVcenterDetails(vCenter["vCenter"])
print("=== Data in json format ===")
print(json.dumps(vCenter, indent=2))
print("Time taken for the script %s" % (time.time() - startTime))
