import os
import sys
os.environ["VSAN_PYMO_SKIP_VC_CONN"] = "1"

if os.name == 'nt':
   #include vmw's python module into PATH, for windows only
   sys.path.append(os.environ["VMWARE_PYTHON_PATH"])
else:
   sys.path.append("/usr/lib/vmware/site-packages/")
import VCConnectionHelper
import subprocess
from pyMoVsan.VsanHealthHelpers import GetRhttpsproxyPortFromExtension

rvcBin = '/usr/bin/rvc'

if os.name == 'nt':
   from cis.defaults import get_cis_install_dir
   rvcBin = os.path.join(get_cis_install_dir(), 'rvc', 'rvc.bat')

selectedMode = 'all'
if len(sys.argv) > 1:
   selectedMode = sys.argv[1]

conn, si, content = VCConnectionHelper.ConnectToLocalVC()

rhttpsProxyPort = GetRhttpsproxyPortFromExtension(content)
if rhttpsProxyPort == None:
   print("VSAN VC extension not properly registered, skipping...")
   exit()

#run RVC commands "vsan.perf.cluster_info" and "vsan.perf.stats_object_info" on
#all VSAN enabled clusters
if selectedMode == 'all' or selectedMode == 'rvc-perfsvc-information':
   if os.path.exists(rvcBin):
      os.environ['RVC_RBVMOMI_COOKIE'] = conn.cookie
      if os.name != 'nt' and 'HOME' not in os.environ:
         os.environ['HOME'] = '/root'
      vcHost = 'localhost'
      rvcEndpoint = 'vimhealth://' + vcHost + ':' + str(rhttpsProxyPort)

      #using nil to avoid echo
      rvcCmds = [
         'mark lh /%s' % vcHost,
         'mark crs /%s/*/computers/*' % vcHost,
         '/pc = _lh._connection.propertyCollector;nil',
         '/crsProps = pc.collectMultiple(_crs!, "configurationEx") rescue nil;nil',
         '/vsancrsKeys = crsProps.select{|crs,p| p["configurationEx"].vsanConfigInfo.enabled if crs.is_a?(RbVmomi::VIM::ClusterComputeResource)}.keys if crsProps != nil',
         '/vsancrs = _crs!.select{ |cr| vsancrsKeys.include? cr} if crsProps != nil; nil',
         '/vsancrs.each{ |cr| pp cr.name; rvc_exec("vsan.perf.cluster_info \'#{cr.rvc_path_str}\'"); \
         rvc_exec("vsan.perf.stats_object_info \'#{cr.rvc_path_str}\'")} if crsProps != nil'
      ]

      shellCmd = [rvcBin, '-a', rvcEndpoint]
      for rvcCmd in rvcCmds:
         shellCmd += [ '-c', rvcCmd ]
      shellCmd += ['-c', 'quit']

      subprocess.call(shellCmd)
