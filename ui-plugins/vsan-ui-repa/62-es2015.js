(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "57pY":
/*!*********************************************************!*\
  !*** ./src/app/vsan/common/util/storage-size-metric.ts ***!
  \*********************************************************/
/*! exports provided: StorageSizeMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageSizeMetric", function() { return StorageSizeMetric; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * The supported storage size metrics
 */
let StorageSizeMetric = /*@__PURE__*/ (() => {
    class StorageSizeMetric {
        constructor(_value, _labelKey) {
            this._value = _value;
            this._labelKey = _labelKey;
        }
        get value() {
            return this._value;
        }
        toString() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this._labelKey);
        }
    }
    StorageSizeMetric.B = new StorageSizeMetric(1, "vsan.common.bytes");
    StorageSizeMetric.KB = new StorageSizeMetric(1024, "vsan.common.kilobytes");
    StorageSizeMetric.MB = new StorageSizeMetric(1024 * 1024, "vsan.common.megabytes");
    StorageSizeMetric.GB = new StorageSizeMetric(1024 * 1024 * 1024, "vsan.common.gigabytes");
    StorageSizeMetric.TB = new StorageSizeMetric(1024 * 1024 * 1024 * 1024, "vsan.common.terabytes");
    return StorageSizeMetric;
})();



/***/ }),

/***/ "Xflx":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/common/pipe/virtual-objects/health-state-label.pipe.ts ***!
  \*****************************************************************************/
/*! exports provided: VirtualObjectHealthStateLabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectHealthStateLabelPipe", function() { return VirtualObjectHealthStateLabelPipe; });
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");

class VirtualObjectHealthStateLabelPipe {
    transform(state) {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__["VsanHealthUtil"].getVsanObjectHealthStatusText(state);
    }
}



/***/ }),

/***/ "i1o7":
/*!*****************************************************!*\
  !*** ./src/app/vsan/common/util/vsan-iscsi-util.ts ***!
  \*****************************************************/
/*! exports provided: VsanIscsiUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanIscsiUtil", function() { return VsanIscsiUtil; });
/* harmony import */ var _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/affinity-site-location */ "6Yrg");
/* harmony import */ var _generated_iscsi_lun_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/iscsi-lun-status */ "pu2a");
/* harmony import */ var _generated_vsan_compliance_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/vsan-compliance-status */ "qYfg");
/* harmony import */ var _generated_vsan_iscsi_target_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/vsan-iscsi-target-config */ "EToA");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _util_storage_size_metric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/storage-size-metric */ "57pY");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */







var IscsiTargetAuthType = _generated_vsan_iscsi_target_config__WEBPACK_IMPORTED_MODULE_3__["VsanIscsiTargetConfig"].IscsiTargetAuthType;
var ObjectHealthStatus = _generated_vsan_iscsi_target_config__WEBPACK_IMPORTED_MODULE_3__["VsanIscsiTargetConfig"].ObjectHealthStatus;
/**
 * vSAN iSCSI utilities.
 */
let VsanIscsiUtil = /*@__PURE__*/ (() => {
    class VsanIscsiUtil {
        static getIscsiHomeLabel(status) {
            if (!status) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.na.label");
            }
            switch (status) {
                case _generated_vsan_iscsi_target_config__WEBPACK_IMPORTED_MODULE_3__["VsanIscsiTargetConfig"].ObjectHealthStatus.healthy:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("pbm.operationalState.healthy");
                case ObjectHealthStatus.transitionalHealthy:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("pbm.operationalState.healthyTransitional");
                case ObjectHealthStatus.transitionalUnhealthy:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("pbm.operationalState.unhealthyTransitional");
                case ObjectHealthStatus.unhealthy:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("pbm.operationalState.unhealthyDiskUnavailable");
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("pbm.complianceStatus.unknown");
            }
        }
        static getIscsiHomeIcon(status) {
            if (!status) {
                return "";
            }
            switch (status) {
                case ObjectHealthStatus.healthy:
                case ObjectHealthStatus.transitionalHealthy:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
                case ObjectHealthStatus.transitionalUnhealthy:
                case ObjectHealthStatus.unhealthy:
                default:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
            }
        }
        // Validate target iqn and initiator iqn.
        static validateIqn(iqn) {
            // Target iqn can be empty, and the backend will generate an iqn for it.
            if (!iqn) {
                return true;
            }
            if (iqn.length > 224) {
                return false;
            }
            return VsanIscsiUtil.IQN_EXP.test(iqn);
        }
        static validatePolicy(policy, emptyPolicyError) {
            if (!policy) {
                return emptyPolicyError;
            }
            if (!policy.hasVsanNamespace) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.edit.storagePolicy.homeObject.no.vsan.namespace");
            }
            if (!policy.isCompatible) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.edit.storagePolicy.homeObject.notCompliant");
            }
        }
        /**
         * Validate target alias and lun alias and return message.
         */
        static getAliasValidationMessage(alias) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getUtf8Length(alias) > VsanIscsiUtil.MAX_ALIAS_BYTE_LENGTH) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.target.dialog.alias.tooLong");
            }
            if (alias.indexOf("\"") > -1) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.target.dialog.alias.notValid");
            }
            return null;
        }
        static getLunIdValidationMessage(lunId) {
            if (lunId < VsanIscsiUtil.LUN_ID_MIN) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.dialog.id.negative");
            }
            if (lunId > VsanIscsiUtil.LUN_ID_MAX) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.dialog.id.notValid");
            }
            if (String(lunId).indexOf(".") > -1) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.dialog.id.not.integer");
            }
            return null;
        }
        static getLunPolicyValidationMessage(policy) {
            if (!policy.hasVsanNamespace) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.edit.storagePolicy.homeObject.no.vsan.namespace");
            }
            if (!policy.isCompatible) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.edit.storagePolicy.homeObject.notCompliant");
            }
            return null;
        }
        static getLunSizeValidationMessage(size, unit) {
            if (!size || !VsanIscsiUtil.POSITIVE_INTEGER_EXP.test(size.toString())) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.dialog.size.notPositive");
            }
            if ((size * unit) > VsanIscsiUtil.LUN_SIZE_MAX) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.dialog.size.maximum");
            }
            return null;
        }
        static getLunSizeHelperMessage(unit, minAllowedSize = 1) {
            const maxAllowedSize = (VsanIscsiUtil.LUN_SIZE_MAX) / unit.value;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.dialog.size.helper", minAllowedSize, maxAllowedSize, unit);
        }
        static getLunStateLabel(status) {
            switch (status) {
                case _generated_iscsi_lun_status__WEBPACK_IMPORTED_MODULE_1__["IscsiLunStatus"].Online:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.online.label");
                case _generated_iscsi_lun_status__WEBPACK_IMPORTED_MODULE_1__["IscsiLunStatus"].Offline:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.lun.offline.label");
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.na.label");
            }
        }
        static getComplianceIconClass(complianceStatus) {
            return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].clrIconShapeClassMap[VsanIscsiUtil.getComplianceShape(complianceStatus)]
                + " " + _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_SOLID_ICON_CLASS;
        }
        static getComplianceShape(complianceStatus) {
            switch (complianceStatus) {
                case _generated_vsan_compliance_status__WEBPACK_IMPORTED_MODULE_2__["VsanComplianceStatus"].COMPLIANT:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
                case _generated_vsan_compliance_status__WEBPACK_IMPORTED_MODULE_2__["VsanComplianceStatus"].OUT_OF_DATE:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
                case _generated_vsan_compliance_status__WEBPACK_IMPORTED_MODULE_2__["VsanComplianceStatus"].NOT_COMPLIANT:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
                case _generated_vsan_compliance_status__WEBPACK_IMPORTED_MODULE_2__["VsanComplianceStatus"].NOT_APPLICABLE:
                case _generated_vsan_compliance_status__WEBPACK_IMPORTED_MODULE_2__["VsanComplianceStatus"].UNKNOWN:
                default:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"].CLR_CIRCLE_ICON_SHAPE;
            }
        }
        static getComplianceLabel(complianceResult) {
            if (complianceResult.mismatch) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.pbm.complianceStatus.outOfDate");
            }
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.pbm.complianceStatus." + complianceResult.complianceStatus);
        }
        static getAuthenticationLabel(anthType) {
            switch (anthType) {
                case IscsiTargetAuthType.CHAP.toString():
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.target.authentication.chap");
                case IscsiTargetAuthType.CHAP_Mutual.toString():
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.target.authentication.mutualChap");
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.target.authentication.none");
            }
        }
        static getTargetLocationLabel(location, preferredDomainName = null, secondaryDomainName = null) {
            switch (location) {
                case _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_0__["AffinitySiteLocation"].PREFERRED_DOMAIN:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.target.dialog.location.option.preferred", preferredDomainName ? preferredDomainName : _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.na.label"));
                case _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_0__["AffinitySiteLocation"].NON_PREFERRED_DOMAIN:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.target.dialog.location.option.secondary", secondaryDomainName ? secondaryDomainName : _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.na.label"));
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.target.dialog.location.option.either");
            }
        }
        static getAllowedInitiatorsType(isGroup) {
            return isGroup ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.allowed.initiators.type.group") :
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.configure.iscsiTargets.allowed.initiators.type.initiator");
        }
    }
    VsanIscsiUtil.IQN_EXP = /^iqn\.[0-9]{4}\-(0[1-9]|1[0-2])\.[a-z0-9\-\.]+(\:[a-z0-9\-\.\:]*)?$/;
    VsanIscsiUtil.POSITIVE_INTEGER_EXP = /^\+?[1-9][0-9]*$/;
    VsanIscsiUtil.AUTHENTICATION_TYPES = [
        {
            label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.target.authentication.none"),
            id: IscsiTargetAuthType.NoAuth,
        },
        {
            label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.target.authentication.chap"),
            id: IscsiTargetAuthType.CHAP,
        },
        {
            label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.iscsi.target.authentication.mutualChap"),
            id: IscsiTargetAuthType.CHAP_Mutual,
        },
    ];
    // Pass -1 to the backend when the LUN id doesn't change.
    VsanIscsiUtil.UNCHANGED_NEW_LUN_ID_VALUE = -1;
    // Pass -1 to the backend when the LUN size doesn't change.
    VsanIscsiUtil.UNCHANGED_LUN_SIZE_VALUE = -1;
    VsanIscsiUtil.DEFAULT_PORT = 3260;
    // The maximum length of the target alias and LUN alias
    VsanIscsiUtil.MAX_ALIAS_BYTE_LENGTH = 127;
    VsanIscsiUtil.LUN_ID_MIN = 0;
    VsanIscsiUtil.LUN_ID_MAX = 255;
    VsanIscsiUtil.LUN_SIZE_MAX = 62 * _util_storage_size_metric__WEBPACK_IMPORTED_MODULE_5__["StorageSizeMetric"].TB.value;
    VsanIscsiUtil.TCP_PORT_MIN = 1025;
    VsanIscsiUtil.TCP_PORT_MAX = 65535;
    return VsanIscsiUtil;
})();



/***/ }),

/***/ "nX3e":
/*!**********************************************************************************!*\
  !*** ./src/app/vsan/common/pipe/virtual-objects/health-state-icon-shape.pipe.ts ***!
  \**********************************************************************************/
/*! exports provided: VirtualObjectHealthStateIconShapePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectHealthStateIconShapePipe", function() { return VirtualObjectHealthStateIconShapePipe; });
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");

class VirtualObjectHealthStateIconShapePipe {
    transform(state) {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__["VsanHealthUtil"].getVsanObjectHealthStatusIconShape(state);
    }
}



/***/ }),

/***/ "sYDn":
/*!**********************************************************************************!*\
  !*** ./src/app/vsan/common/pipe/virtual-objects/health-state-icon-class.pipe.ts ***!
  \**********************************************************************************/
/*! exports provided: VirtualObjectHealthStateIconClassPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectHealthStateIconClassPipe", function() { return VirtualObjectHealthStateIconClassPipe; });
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");

class VirtualObjectHealthStateIconClassPipe {
    transform(state) {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__["VsanHealthUtil"].getVsanObjectHealthStatusIconClass(state);
    }
}



/***/ })

}]);
//# sourceMappingURL=62-es2015.js.map