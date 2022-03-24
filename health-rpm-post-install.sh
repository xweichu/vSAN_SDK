#!/bin/bash

VSANHEALTHLOG=/tmp/vsanhealthinst.log

echo "VSAN health post install start..." >> $VSANHEALTHLOG
usage() {
    echo $0 "[opt]"
    echo "-f | --force: Configure VSAN health service without prompt."
    echo "              If -f or --force is absent, prompt will show "
    echo "              during setup."
    echo "-s | --skip:  Skip restart vpxd and vsphere client. It's used for"
    echo "              VC update mode"
    echo "-h | --help: Show this help infomation"
    exit 1
}

SKIP_VSPHERE_CLIENT_RESTART=0
B_FORCE=0
while [ $# -gt 0 ]; do
    case "$1" in
	"-f" | "--force" )
	    B_FORCE=1
	    ;;
	"-s" | "--skip" )
	    SKIP_VSPHERE_CLIENT_RESTART=1
	    ;;
	"-h" | "--help" )
	    usage
	    ;;
	* )
	    usage
	    ;;
    esac
    shift
done

if [ $B_FORCE -eq 0 ]; then
    echo "Services 'vpxd' and  'vsphere-client' need to be restarted."
    echo "This will disrupt all ongoing sessions. Do you want to continue?"
    echo "[Yes/No]?"
    while [ "$yn" != "yes" -a "$yn" != "y" ]
    do
      read yn
      yn=$(echo $yn | tr '[:upper:]' '[:lower:]')
      if [ "$yn" == "n" -o "$yn" == "no" ]; then
          exit 0
      fi
    done
fi

NGCROOT=/usr/lib/vmware-vsphere-client
PYTHONPATH=/usr/lib/vmware/site-packages/:$PYTHONPATH python \
   /usr/lib/vmware-vpx/firstboot/vsanhealth_conf.py >> $VSANHEALTHLOG 2>&1
   /usr/lib/vmware-vpx/firstboot/vsanhealth_hcl.py --phase import >> $VSANHEALTHLOG 2>&1

# Directory access to the /storage/updatemgr directory for file services usage
# and other component access.
VSAN_UPDATEMGR_STORAGE_DIR=/storage/updatemgr/vsan
if [ ! -d "${VSAN_UPDATEMGR_STORAGE_DIR}" ]; then
   echo "Creating ${VSAN_UPDATEMGR_STORAGE_DIR} directory ..."
   mkdir -p "${VSAN_UPDATEMGR_STORAGE_DIR}"
fi
chown -hR vsan-health "${VSAN_UPDATEMGR_STORAGE_DIR}"

# In VC update mode, vpxd and vsphere client will be started by VC upgrader after
# finishing its installation. So don't need restrat vpxd here
if [ $SKIP_VSPHERE_CLIENT_RESTART -eq 0 ]; then
   /usr/lib/vmware-vmon/vmon-cli --restart vpxd
   service vsphere-client stop
   rm -rf $NGCROOT/server/work/*
   service vsphere-client start
fi
