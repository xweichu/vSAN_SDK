#!/opt/vmware/bin/python

# Copyright 2015-2020 VMware, Inc. All rights reserved. -- VMware Confidential

'''
vsanhealth-vmon-apihealth.py --

Implementation of API health for VSAN health service.

'''

import os
import sys

import six
if six.PY3:
   from urllib.request import urlopen
   from urllib.error import URLError
else:
   from urllib2 import urlopen
   from urllib2 import URLError


sys.path.append(os.environ['VMWARE_PYTHON_PATH'])
from cis.vmonApiHealthUtil import VmonApiHealth
from cis.tools import get_install_parameter


def dumpServerThreadStack():
   import signal
   import time
   try:
      with open('/var/log/vmware/vsan-health/vmware-vsan-health.pid') as f:
         pid = int(f.readline())
      os.kill(pid, signal.SIGUSR1)
      # sleep some time waiting for thread dump finish
      time.sleep(10)
   except:
      pass

def checkVsanHealthRunning():
   try:
      rproxy_port = get_install_parameter('rhttpproxy.ext.port2',
                                          '443', quiet=True)
      vsanhealthUrl = 'https://localhost:%s/vsanHealth/service' % rproxy_port
      # Python version >= 2.7.9 supports creation of unverified SSL context
      # in both Windows and Linux.
      if os.name == 'posix' or sys.version_info >= (2, 7, 9):
         import ssl
         ssl._create_default_https_context = ssl._create_unverified_context
      urlopen(vsanhealthUrl, timeout=30)
      return True
   except URLError as e:
      # The VSAN health service hasn't been started up
      # only if the error code is 404, 503 or 504 ( i.e.
      # "Service Unavailable" or "timed out")
      # In any other case, it will return True since it's not
      # the VSAN health service startup issue
      if hasattr(e, 'code') and e.code in [404, 503, 504]:
         return False
      else:
         return True
   except Exception as ex:
      err = str(ex)
      if 'timed out' in err:
         dumpServerThreadStack()
      return False

def main():
   '''
   checks the VSAN health service pid file and the pid file should
   exist and be valid for a running VSAN health service.
   '''
   vmon_api_health = VmonApiHealth()
   health = 'GREEN' if checkVsanHealthRunning() else 'RED'
   vmon_api_health.communicate_and_exit(health)

if __name__ == '__main__':
    main()
