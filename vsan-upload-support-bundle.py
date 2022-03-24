import logging
import os
import sys
from argparse import ArgumentParser, RawTextHelpFormatter

os.environ["VSAN_PYMO_SKIP_VC_CONN"] = "1"
if os.name == 'nt':
   #include vmw's python module into PATH, for windows only
   sys.path.append(os.environ["VMWARE_PYTHON_PATH"])
else:
   sys.path.append("/usr/lib/vmware/site-packages/")
import VCConnectionHelper
#add the pypack path for importing pyVmomi module
sys.path.append(VCConnectionHelper.GetPyJackPath())

from pyVmomi import vim, vmodl
from VsanPyVmomiProfiler import Profiler
from pyMoVsan.VsanSupportBundleHelper import ClusterConfiguration, ProxySettings, SRUploader

logging.basicConfig(stream=sys.stdout, level=logging.INFO)


class Command():

   def __init__(self):
      self.msg = "Collect specific VC and belonged hosts support bundle and then upload to VMware support bundle server"
      self.parser = ArgumentParser(formatter_class=RawTextHelpFormatter, usage=self.msg)
      self.parser.add_argument("-c", "--cluster", help="Cluster Managed Object Id", dest="clusterId", required=True)
      self.parser.add_argument("-sr", "--sr", help="SR number", dest="srNumber", required=True)
      self.parser.add_argument("-t", "--threads", type=int,
                               help="Thread number to collect host support bundle, default number is twice of host number",
                               dest="thread")
      self.parser.add_argument("-p", "--parallel", action="store_true", help="Run in parallel", dest="inParallel")
      self.parser.add_argument("-log", "--loglevel", help="Log level, value is info|debug, default value is info", dest="logLevel", default="info")
      self.parser.add_argument("-ph", "--proxy_server", help="Proxy server host", dest="proxyHost")
      self.parser.add_argument("-po", "--proxy_port", help="Proxy server port", dest="proxyPort")
      self.parser.add_argument("-uh", "--use_https", action="store_true", help="Use http protocal", dest="useHttps")

def runCommand():

   command = Command()
   args = command.parser.parse_args()
   # set log level
   logLevel=logging.INFO
   if args.logLevel == "debug":
      logLevel=logging.DEBUG
   rootLogger = logging.getLogger()
   rootLogger.setLevel(logLevel)
   try:
      formatter = logging.Formatter(
         fmt='%(asctime)s %(levelname)-s [%(thread)s] %(message)s',
         datefmt='%Y-%m-%dT%H:%M:%S')
      if rootLogger.handlers:
         handler = rootLogger.handlers[0]
         handler.setFormatter(formatter)
   except:
      logging.exception("Fail to set the format for rootLogger")
   logging.info("Start collect and upload VC and host support bundle...")
   clusterId = args.clusterId
   srNumber = args.srNumber
   poolSize = args.thread
   inParallel = args.inParallel
   bypassFTP = args.useHttps
   proxySettings = None
   if args.proxyHost and args.proxyPort:
      proxyUser = os.environ.get("PROXY_USER", None)
      proxyPass = os.environ.get("PROXY_PASS", None)
      proxySettings = ProxySettings(args.proxyHost, args.proxyPort, proxyUser, proxyPass)
   conn, si, content = VCConnectionHelper.ConnectToLocalVC()
   clusterConfig = ClusterConfiguration(conn, si, content)
   srUploader = SRUploader(clusterConfig, srNumber, proxySettings, poolSize, bypassFTP=bypassFTP, inParallel=inParallel)
   result = srUploader.uploadSupportBundle(clusterId)
   logging.debug("Collect and upload VC and host support bundle detail result => %s" % result)
   return result


def main():
   result = runCommand()
   overallResult = result.get("overall")
   logging.info("Collect and upload VC/host support bundle result is %s" % overallResult)
   if not overallResult:
      os._exit(1)
   else:
      return overallResult

if __name__ == "__main__":
   main()
