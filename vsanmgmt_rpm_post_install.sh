#!/bin/sh

# Copyright 2008-2015 VMware, Inc.  All rights reserved. -- VMware Confidential

# This is the post install/uninstall script for vsanmgmt RPM

#$VMWARE_PYTHON_BIN /usr/lib/vmware-vpx/vsan-health/vsanmgmt_remediate_xml.py "$@"
#ret=$?
#if [ $ret -ne 0 ]; then
#   echo "Failed to remediate xml files!"
#fi

#service-control --stop vmware-vpxd
#service-control --start vmware-vpxd

#exit $ret

IS_PHOTON=false
if [ ! -d "/usr/lib/vmware/site-packages/cis" ]; then
   IS_PHOTON=true
fi

# In Standalone mode, there is no service-control command that is packaged in
# VMware-visl-integration rpm. So it returns silently in Standalone mode.
if $IS_PHOTON ; then
   echo "vsanmgmt package post-script is called: $@"
   systemctl stop vmware-vsan.service
   systemctl start vmware-vsan.service
   exit 0
fi

exit 0
