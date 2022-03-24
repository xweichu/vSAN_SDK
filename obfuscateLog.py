import os
import sys
import re
import time
import json
import gzip
import datetime
import six
import glob

def IsInVisor():
   try:
      return os.uname()[0].lower() == 'vmkernel'
   except Exception:
      return False

def getVsanHealthConfigDir():
   confdir = "/tmp"
   if not IsInVisor():
      confdir = '/etc/vmware-vsan-health'
      if os.name == 'nt':
         if 'VMWARE_CFG_DIR' not in os.environ:
            return None
         cfgDir = os.environ["VMWARE_CFG_DIR"]
         confdir = os.path.join(os.path.normpath(cfgDir), 'vsan-health')
   return confdir

ESX_LAST_COLLECTION_TS_LOC = "/tmp/vsanLastLogCollectionTime.json"
VC_LAST_COLLECTION_TS_LOC = os.path.join(getVsanHealthConfigDir(), "vsanLastLogCollectionTime.json")

# Convert a C-style printf to a regex
def makeRegEx(msg):
   msg = msg.strip()
   msg = msg.replace("%uuid", "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}")
   msg = msg.replace("%u", "\\d*")
   msg = msg.replace("%d", "-?\\d*")
   msg = msg.replace("%s", ".*")
   msg = re.sub(r"\%\d*\.?\d*f", "\\d*\\.\\d*", msg)
   msg = msg.replace("(", "\\(")
   msg = msg.replace(")", "\\)")
   msg = msg.replace(".", "\\.")
   if msg.endswith("\\n"):
      msg = msg[:-2]
   return msg

# We could use a proper option parser here
if len(sys.argv) < 3:
   raise Exception("Wrong usage! Pass obfuscation manifest filename as first param, and log category as second, then any files")

logCatalogFilename = sys.argv[1]
if not os.path.isfile(logCatalogFilename):
   raise Exception("%s is not a file" % logCatalogFilename)
logCategory = sys.argv[2]
if logCategory not in ['clomd', 'vsanvmk', 'vobd', 'vsanmgmt', 'vsanhealthservice', 'vpxd', 'vpxdprofile', 'vsanvp']:
   raise Exception("%s is not a proper log category" % logCategory)
logFiles = sys.argv[3:]

with open(logCatalogFilename) as fp:
   manifest = json.load(fp)

def IsTimestamp(string):
   for dateformat in ['%Y-%m-%dT%H:%M:%S.%fZ', '%Y-%m-%dT%H:%M:%S.%fZ:', '%Y-%m-%dT%H:%M:%SZ']:
      try:
         datetime.datetime.strptime(string, dateformat)
         return True
      except:
         continue
   return False

def getLastCollectionTs():
   lastCollectionTimeStamps = {}
   last_collection_ts_log = VC_LAST_COLLECTION_TS_LOC
   if IsInVisor():
      last_collection_ts_log = ESX_LAST_COLLECTION_TS_LOC

   if os.path.isfile(last_collection_ts_log):
      with open(last_collection_ts_log, 'r') as f:
         try:
            lastCollectionTimeStampsJson = f.read()
            lastCollectionTimeStamps = json.loads(lastCollectionTimeStampsJson)
         except:
            pass
   if IsInVisor():
      manifestTimeStampEpoch = lastCollectionTimeStamps.get("Storage:VSANObfuscateLogs")
   else:
      manifestTimeStampEpoch = lastCollectionTimeStamps.get(logCategory)

   lastCollectionTime = datetime.datetime.utcfromtimestamp(0).isoformat()
   if manifestTimeStampEpoch:
      lastCollectionTime = datetime.datetime.utcfromtimestamp(manifestTimeStampEpoch).isoformat()
   return lastCollectionTime

if logCategory not in manifest:
   sys.stderr.write("Category %s is not in manfiest" % logCategory)
   sys.exit()

msgs = manifest[logCategory].get('safe')
regExList = [makeRegEx(msg) for msg in msgs]
# It is faster to create a single regex matching all possibilities,
# but is also harder to debug. So keep both options
optimizeSpeed = True
if optimizeSpeed:
   regExList = [re.compile("(%s)" % "|".join(regExList))]
else:
   regExList = [re.compile(msg) for msg in regExList]

lastCollectionTime = getLastCollectionTs()

debug = False

t1 = time.time()
def processLog(prefix, io, debug = False):
   lastLineisValid = False
   lastLines = []
   for line in io.readlines():
      found = False
      logTimeStmp = line.split(" ", 1)[0]
      isTimeStamp = IsTimestamp(logTimeStmp)
      if lastLineisValid and not isTimeStamp:
         sys.stdout.write("%s" % (line))
         continue

      if lastLineisValid and isTimeStamp:
         lastLineisValid = False
      elif not lastLineisValid and not isTimeStamp and not lastLines:
         continue

      for regEx in regExList:
         m = re.search(regEx, line)
         if m:
            if debug:
               sys.stderr.write(
                  "Found a match! %s using %s" % (line, regEx))
            found = True
            break

      if found:
         if lastLines and not isTimeStamp:
            lastLineisValid = True
            lastLines.append(line)
            for storedLine in lastLines:
               sys.stdout.write("%s" % (storedLine))
         else:
            if logTimeStmp >= lastCollectionTime:
               lastLineisValid = True
               sys.stdout.write("%s%s" % (prefix, line))
            else:
               lastLineisValid = False
      else:
         if lastLineisValid:
            lastLines = []
         if isTimeStamp and (logTimeStmp >= lastCollectionTime):
            lastLines = [line]
         elif not isTimeStamp:
            lastLines.append(line)
         else:
            lastLines = []
            lastLineisValid = False
            if logTimeStmp >= lastCollectionTime:
               print("%sUNKNOWN LOG LINE, OBFUSCATED" % prefix)
         if debug:
            sys.stderr.write("UNKNOWN LOG LINE, OBFUSCATED: %s" % line)

def getLastModifiedTime(path):
   try:
      return os.path.getmtime(path)
   except OSError:
      return 0

if len(logFiles) == 0:
   # Read from stdin
   processLog("", sys.stdin)
else:
   # Iterate over all files, but check if they exist, support .gz or
   # plain text
   mode_rt = 'r' if 'nt' in os.name.lower() else 'rt'
   logFilesList = []
   for logFile in logFiles:
      if not os.path.isfile(logFile):
         #return all files matching pattern
         matchedFilePattern = glob.glob(logFile)
         logFilesList.extend(matchedFilePattern)
      else:
         logFilesList.append(logFile)

   logFilesList = sorted(logFilesList, key=getLastModifiedTime)

   for logFile in logFilesList:
      if not os.path.isfile(logFile):
         continue
      prefix = "%s: " % os.path.basename(logFile)
      if logFile.endswith('.gz'):
         with gzip.open(logFile, mode_rt) as fp:
            processLog(prefix, fp)
      else:
         with open(logFile, 'r') as fp:
            processLog(prefix, fp)

# We write without forced flushing, so do a final flush
sys.stdout.flush()
sys.stderr.flush()
if debug:
   t2 = time.time()
   # use sys.stderr to print to pass the PYLINT compile when build.
   sys.stderr.write("Took %.2fs" % (t2 - t1))

