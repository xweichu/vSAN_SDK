#!/usr/bin/env python

"""
Copyright 2018 VMware, Inc.  All rights reserved.
-- VMware Confidential

"""
__author__ = "VMware, Inc"


import sys
import six
import os
import traceback
import logging

'''This file is a replication of vc-support command file for having the
vc-support in vsan-health process. When directly calling vc-support command line,
vCenter writes related vc-support infos into log file /var/log/vm-support.log,
which needs root privilege and the log file is hardcoded. Here we replicate the most
of codes in vc-support, but re-redict the vc-support logs into a customized log path.
'''


if os.name == 'posix':
   sys.path.append('/usr/lib/vmware/site-packages/')

LOG_FORMAT = "%(asctime)s %(levelname)s %(filename)s:%(lineno)s %(message)s"

def getLogFileHandler(fileName, level=logging.INFO, format=LOG_FORMAT):
   """Return preconfigured log file handler.
   """
   logFileHandler = logging.handlers.RotatingFileHandler(
      filename=fileName,
      maxBytes=1*1024*1024,
      backupCount=10
   )

   formatter = logging.Formatter(fmt=format)
   logFileHandler.setFormatter(formatter)

   logFileHandler.setLevel(level)

   return logFileHandler

def getLogStderrHandler(level=logging.WARNING, format=LOG_FORMAT):
   """Return console handler which logs to stderr.
   """
   logStderrHandler = logging.StreamHandler()
   formatter = logging.Formatter(fmt=format)
   logStderrHandler.setFormatter(formatter)
   logStderrHandler.setLevel(level)

   return logStderrHandler


def vc_support(sys_argv):
   try:
      from vmsupport.main import (run, getArgumentParser)
   except:
      from supportbundle.main import (run, getArgumentParser)

   try:
      log_file = sys_argv[0]
      logging.getLogger('').addHandler(getLogFileHandler(log_file, logging.INFO))
      logging.getLogger('').addHandler(getLogStderrHandler(logging.ERROR))
      parser = getArgumentParser()
      options = parser.parse_args(sys_argv[1:])
      run(options)
   except:
      print(traceback.format_exc())

if __name__ == "__main__":
   inp = six.moves.input()
   sys_argv = inp.split(',')
   vc_support(sys_argv)