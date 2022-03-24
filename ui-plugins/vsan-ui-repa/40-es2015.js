(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "PbIg":
/*!**************************************************************!*\
  !*** ./src/app/vsan/file-services/shares/file-share-util.ts ***!
  \**************************************************************/
/*! exports provided: VsanFileShareUtils, FileShareEntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanFileShareUtils", function() { return VsanFileShareUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileShareEntityType", function() { return FileShareEntityType; });
/* harmony import */ var _generated_vsan_file_share_owner_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/vsan-file-share-owner-type */ "A+6S");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/vsan-file-share-protocol */ "A6b3");
/* harmony import */ var _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/vsan-file-share-nfs-security-type */ "x66q");
/* harmony import */ var _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/smb-encryption-option */ "sCPh");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _performance_model_file_share_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../performance/model/file-share-entity */ "Q/6j");
/* harmony import */ var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @generated/vsan-file-service-share-size */ "JJYf");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @util/logger */ "a0OL");
/* harmony import */ var _pipe_file_share_protocol_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pipe/file-share-protocol-pipe */ "bBJz");
/* Copyright 2019-2021 VMware, Inc. All rights reserved. -- VMware Confidential */











let VsanFileShareUtils = /*@__PURE__*/ (() => {
    class VsanFileShareUtils {
        /**
         * Get the string value of the file share owner type
         */
        static getShareOwnerType(type) {
            switch (type) {
                case _generated_vsan_file_share_owner_type__WEBPACK_IMPORTED_MODULE_0__["VsanFileShareOwnerType"].USER:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.col.owner.type.user");
                case _generated_vsan_file_share_owner_type__WEBPACK_IMPORTED_MODULE_0__["VsanFileShareOwnerType"].CNS:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.col.owner.type.cns");
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.common.unknown");
            }
        }
        static getShareProtocolLabel(protocol) {
            return new _pipe_file_share_protocol_pipe__WEBPACK_IMPORTED_MODULE_10__["FileShareProtocolPipe"]().transform(protocol);
        }
        static getExportPathLabel(protocol) {
            switch (protocol.toLocaleLowerCase()) {
                case "nfsv3":
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.grid.details.nfs3.path");
                case "nfsv4.1":
                case "nfsv4":
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.grid.details.nfs4.path");
                case "smb":
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.grid.details.smb.path");
            }
        }
        static getExportPathMenuLabel(protocol) {
            switch (protocol.toLocaleLowerCase()) {
                case "nfsv3":
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.nfs3");
                case "nfsv4.1":
                case "nfsv4":
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.nfs41");
                case "smb":
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.smb");
            }
        }
        static getProgressTitle(share) {
            if (share.isOverRedThreshold) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.title.error");
            }
            else if (share.isOverSoftQuota) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.title.warn");
            }
            else {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.title.info");
            }
        }
        static getProgressClass(share) {
            if (share.isOverRedThreshold) {
                return "error";
            }
            else if (share.isOverSoftQuota) {
                return "warn";
            }
            else {
                return "info";
            }
        }
        static getSecurityModeText(securityType) {
            if (securityType === _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileShareNfsSecurityType"].AUTH_SYS) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.authSys");
            }
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos");
        }
        static getKerberosText(securityType) {
            switch (securityType) {
                case _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileShareNfsSecurityType"].KRB5:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.krb5");
                case _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileShareNfsSecurityType"].KRB5I:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.krb5i");
                case _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileShareNfsSecurityType"].KRB5P:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.krb5p");
            }
        }
        static getSmbEncryptionText(smbEncryptionOption) {
            switch (smbEncryptionOption) {
                case _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_4__["SmbEncryptionOption"].DISABLED:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.smb.encryption.none");
                case _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_4__["SmbEncryptionOption"].MANDATORY:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.smb.mandatory");
            }
        }
        static getSmbAbeOptionText(enabled) {
            return enabled
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.smb.abe.enabled")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.smb.abe.disabled");
        }
        static getMmcCommand(share) {
            return VsanFileShareUtils.MMC_HEAD + share.fileServerFqdn;
        }
        static getShareIcon(share) {
            switch (share.managedBy) {
                case _generated_vsan_file_share_owner_type__WEBPACK_IMPORTED_MODULE_0__["VsanFileShareOwnerType"].CNS:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"].CNS_FILE_VOLUME;
                case _generated_vsan_file_share_owner_type__WEBPACK_IMPORTED_MODULE_0__["VsanFileShareOwnerType"].USER:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"].FOLDER;
                case _generated_vsan_file_share_owner_type__WEBPACK_IMPORTED_MODULE_0__["VsanFileShareOwnerType"].UNKNOWN:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"].EMPTY_ICON;
            }
        }
        /**
         * Get the perf entity for a file share. If smb share is not supported, then it's a 70 VC and we only support
         * nfs perf; If smb is supported but the smb protocol perf is not supported, then it's a 70u1 VC, and we
         * support nfs & vdfs perf; After 70u1 we support both smb & vdfs perf;
         *
         * @param share: file share object
         * @param isSmbShareSupported: if the smb share is supported (since 70u1 release).
         * @param isSmbProtocolPerfSupported: if the smb protocol layer performance is supported (since 70u2 release).
         */
        static getFileShareEntity(share, isSmbShareSupported, isSmbProtocolPerfSupported = false) {
            // Only display the NFS layer metrics if SMB is not supported, even it's a NFS share
            // Because the backend support for vdfs layer comes with SMB support
            if (!isSmbShareSupported) {
                return this.createFileShareEntity(share, FileShareEntityType.NFS);
            }
            const entity = this.createFileShareEntity(share, FileShareEntityType.VDFS);
            if (share.config.protocol !== _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_2__["VsanFileShareProtocol"].SMB) {
                entity.protocolEntity = this.createFileShareEntity(share, FileShareEntityType.NFS);
            }
            else if (isSmbProtocolPerfSupported) {
                entity.protocolEntity = this.createFileShareEntity(share, FileShareEntityType.SMB);
            }
            return entity;
        }
        static createFileShareEntity(share, entityType) {
            const entity = new _performance_model_file_share_entity__WEBPACK_IMPORTED_MODULE_6__["FileShareEntity"]();
            entity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].CLUSTER_FILE_SERVICE_ENTITY;
            entity.entityName = share.config.name;
            entity.entityLabelName = this.getFileShareEntityLabel(entityType);
            entity.entityUuid = this.getFileShareEntityUuid(share, entityType);
            entity.icon = VsanFileShareUtils.getShareIcon(share);
            return entity;
        }
        static getFileShareEntityUuid(share, entityType = FileShareEntityType.VDFS) {
            const baseEntityUuid = `${share.config.domainName}|${share.config.name}`;
            switch (entityType) {
                case FileShareEntityType.NFS:
                    return baseEntityUuid;
                case FileShareEntityType.SMB:
                    return `${baseEntityUuid}|smb`;
                case FileShareEntityType.VDFS:
                default:
                    return `${baseEntityUuid}|vdfs`;
            }
        }
        static getSizeLabel(size) {
            switch (size) {
                case _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_8__["VsanFileServiceShareSize"].GB:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.common.gigabytes");
                case _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_8__["VsanFileServiceShareSize"].MB:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.common.megabytes");
                case _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_8__["VsanFileServiceShareSize"].TB:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.common.terabytes");
                default:
                    _util_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"].error("unsupported size type: " + size);
                    return "";
            }
        }
        static getFileShareEntityLabel(entityType) {
            switch (entityType) {
                case FileShareEntityType.NFS:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.fileServices.nfs.section.title");
                case FileShareEntityType.SMB:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.fileServices.smb.section.title");
                case FileShareEntityType.VDFS:
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.fileServices.vdfs.section.title");
            }
        }
    }
    /**
     * Default soft quota (warning threshold) for file share
     */
    VsanFileShareUtils.FILE_SHARE_QUOTA_RED_THRESHOLD = 80;
    // File share fields
    VsanFileShareUtils.NAME_FIELD = "config.name";
    VsanFileShareUtils.LABELS_FIELD = "config.labels";
    VsanFileShareUtils.QUOTA_FIELD = "config.quota";
    VsanFileShareUtils.QUOTA_SIZE_FIELD = "config.quotaSize";
    VsanFileShareUtils.SOFT_QUOTA_FIELD = "config.softQuota";
    VsanFileShareUtils.SOFT_QUOTA_SIZE_FIELD = "config.softQuotaSize";
    VsanFileShareUtils.USED_CAPACITY_FIELD = "usedCapacity";
    VsanFileShareUtils.OWNER_TYPE_FIELD = "managedBy";
    VsanFileShareUtils.PROTOCOL_FIELD = "config.protocol";
    VsanFileShareUtils.POLICY_FIELD = "config.policyId";
    VsanFileShareUtils.USAGE_OVER_QUOTA_FIELD = "usageOverQuota";
    VsanFileShareUtils.INVALID_CHARS = /[\s~`!@#$%^&*(){}\[\];:"'<,.>?\\\/|+=]/;
    // allow space in the OU name
    VsanFileShareUtils.INVALID_OU_CHARS = /[\t\n\r\f\v~`!@#$%^&*(){}\[\];:"'<,.>?\\\/|+=]/;
    // MMC (Microsoft Management Console) is a windows command to manage the SMB file share
    // To get a full command, we need to append this in front of the file server FQDN
    VsanFileShareUtils.MMC_HEAD = "fsmgmt.msc /computer:\\\\";
    return VsanFileShareUtils;
})();
var FileShareEntityType = /*@__PURE__*/ (function (FileShareEntityType) {
    FileShareEntityType[FileShareEntityType["VDFS"] = 0] = "VDFS";
    FileShareEntityType[FileShareEntityType["NFS"] = 1] = "NFS";
    FileShareEntityType[FileShareEntityType["SMB"] = 2] = "SMB";
    return FileShareEntityType;
})({});



/***/ }),

/***/ "Q/6j":
/*!*************************************************************!*\
  !*** ./src/app/vsan/performance/model/file-share-entity.ts ***!
  \*************************************************************/
/*! exports provided: FileShareEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileShareEntity", function() { return FileShareEntity; });
/* harmony import */ var _base_perf_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-perf-entity */ "YGYr");
/* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

class FileShareEntity extends _base_perf_entity__WEBPACK_IMPORTED_MODULE_0__["BasePerfEntity"] {
}



/***/ }),

/***/ "bBJz":
/*!**************************************************************!*\
  !*** ./src/app/vsan/common/pipe/file-share-protocol-pipe.ts ***!
  \**************************************************************/
/*! exports provided: FileShareProtocolPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileShareProtocolPipe", function() { return FileShareProtocolPipe; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/vsan-file-share-protocol */ "A6b3");


/**
 * transform the file share protocol to string.
 * Currently this pipe is used in both File service and File service analytics feature
 */
class FileShareProtocolPipe {
    transform(protocol, ...args) {
        switch (protocol) {
            case _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_1__["VsanFileShareProtocol"].NFSv3:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.nfs3");
            case _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_1__["VsanFileShareProtocol"].NFSv4:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.nfs41");
            case _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_1__["VsanFileShareProtocol"].SMB:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.smb");
            default:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.nfsv3_and_nfsv41");
        }
    }
}



/***/ })

}]);
//# sourceMappingURL=40-es2015.js.map