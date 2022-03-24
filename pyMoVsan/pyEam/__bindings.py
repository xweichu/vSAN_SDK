# **********************************************************
# Copyright 2005-2021 VMware, Inc.  All rights reserved.
# -- VMware Confidential
# **********************************************************

# Keep the list in alphabetical order
knownBindings = [
    '_typeinfo_core',
    '_typeinfo_query',
    '_typeinfo_reflect',
    '_typeinfo_infra',
    '_typeinfo_vim',
    '_typeinfo_hbr',
    '_typeinfo_hmsdrs',
    '_typeinfo_hostd',
    '_typeinfo_vpx',
    '_typeinfo_vorb',
    '_typeinfo_dodo',
    '_typeinfo_imagefactory',
    '_typeinfo_imagebuilder',
    '_typeinfo_vpxapi',
    '_typeinfo_csi',
    '_typeinfo_nfc',
    '_typeinfo_sms',
    '_typeinfo_sps',
    '_typeinfo_integrity',
    '_typeinfo_sysimage',
    '_typeinfo_rbd',
    '_typeinfo_pbm',
    '_typeinfo_vasa',
    '_typeinfo_phonehome',
    '_typeinfo_cislicense',
    '_typeinfo_legacylicense',
    '_typeinfo_test',
    '_typeinfo_sso',
    '_typeinfo_ciscm',
    '_typeinfo_cisdata',
    '_typeinfo_dataservice',
    '_typeinfo_lookup',
    '_typeinfo_dp',
    '_typeinfo_vslm',
    '_typeinfo_vcint',
    '_typeinfo_vmomitest',
    '_typeinfo_vsm',
    '_typeinfo_eam',
    '_typeinfo_ciscommon.py',
    '_typeinfo_ciskvlocal.py',
    '_typeinfo_sca.py',
    '_typeinfo_ehp.py',
    '_typeinfo_idp.py',
]

for binding in knownBindings:
    try:
        __import__(binding, globals(), level=1)
    except ImportError:
        pass
