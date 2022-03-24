(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "3XD8":
/*!**************************************************************************************!*\
  !*** ./src/app/vsan/common/component/general-settings/utils/default-rekey-values.ts ***!
  \**************************************************************************************/
/*! exports provided: DefaultRekeyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRekeyValues", function() { return DefaultRekeyValues; });
/* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */
var DefaultRekeyValues = /*@__PURE__*/ (function (DefaultRekeyValues) {
    DefaultRekeyValues[DefaultRekeyValues["SIX_HOURS"] = 360] = "SIX_HOURS";
    DefaultRekeyValues[DefaultRekeyValues["TWELVE_HOURS"] = 720] = "TWELVE_HOURS";
    DefaultRekeyValues[DefaultRekeyValues["ONE_DAY"] = 1440] = "ONE_DAY";
    DefaultRekeyValues[DefaultRekeyValues["THREE_DAYS"] = 4320] = "THREE_DAYS";
    DefaultRekeyValues[DefaultRekeyValues["SEVEN_DAYS"] = 10080] = "SEVEN_DAYS";
    return DefaultRekeyValues;
})({});



/***/ }),

/***/ "AJMJ":
/*!******************************************************************************************!*\
  !*** ./src/app/vsan/common/component/general-settings/utils/rekey-interval.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RekeyIntervalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekeyIntervalComponent", function() { return RekeyIntervalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/general-settings/utils/default-rekey-values */ "3XD8");

/* Copyright 2019-2021 VMware, Inc. All rights reserved. -- VMware Confidential */



var RekeyMode = /*@__PURE__*/ (function (RekeyMode) {
    RekeyMode[RekeyMode["DEFAULT"] = 0] = "DEFAULT";
    RekeyMode[RekeyMode["CUSTOM"] = 1] = "CUSTOM";
    return RekeyMode;
})({});
let RekeyIntervalComponent = /*@__PURE__*/ (() => {
    class RekeyIntervalComponent {
        constructor() {
            this.rekeyIntervalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
            this.rekeyDefaultValuesMap = [];
            this.RekeyMode = RekeyMode;
            this.DEFAULT_REKEY_HELPER_TEXT = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("configureVsan.settings.dataInTransitEncryption.rekey.mode.default.label");
            this.CUSTOM_REKEY_HELPER_TEXT = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("configureVsan.settings.dataInTransitEncryption.rekey.mode.custom.minutesLabel", RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MIN, RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MAX);
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.rekeyDefaultValuesMap = this.getRekeyDefaultIntervals();
                if (!this.isDataInTransitEncryptionEnabled) {
                    this.selectedRekeyMode = RekeyMode.DEFAULT;
                    this.resetDefaultRekeyInterval();
                    return;
                }
                this.selectedRekeyMode =
                    this.isRekeyIntervalAmongDefaultValues(this.rekeyInterval) ? RekeyMode.DEFAULT : RekeyMode.CUSTOM;
            });
        }
        onRekeyModeChange() {
            if (this.isDefaultRekeyInterval()) {
                this.resetDefaultRekeyInterval();
            }
        }
        onRekeyIntervalChange() {
            // Parse to number because when selection comes from dropdown list then value is of type string
            this.rekeyIntervalChange.emit(Number(this.rekeyInterval));
        }
        isDefaultRekeyInterval() {
            return Number(this.selectedRekeyMode) === RekeyMode.DEFAULT;
        }
        isCustomRekeyInterval() {
            return Number(this.selectedRekeyMode) === RekeyMode.CUSTOM;
        }
        getRekeyDefaultIntervals() {
            return [
                {
                    name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.hours", 6),
                    valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].SIX_HOURS,
                },
                {
                    name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.hours", 12),
                    valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].TWELVE_HOURS,
                },
                {
                    name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.day"),
                    valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].ONE_DAY,
                },
                {
                    name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.days", 3),
                    valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].THREE_DAYS,
                },
                {
                    name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.days", 7),
                    valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].SEVEN_DAYS,
                },
            ];
        }
        resetDefaultRekeyInterval() {
            this.rekeyInterval = _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].ONE_DAY;
            this.onRekeyIntervalChange();
        }
        isRekeyIntervalAmongDefaultValues(rekeyInterval) {
            return this.rekeyDefaultValuesMap.some(defaultRekeyValue => defaultRekeyValue.valueInMinutes === rekeyInterval);
        }
    }
    // Min rekey interval is 30 minutes
    RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MIN = 30;
    // Max rekey interval is 7 days
    RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MAX = _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].SEVEN_DAYS;
    return RekeyIntervalComponent;
})();



/***/ }),

/***/ "b8qf":
/*!***************************************************************************************!*\
  !*** ./src/app/vsan/common/component/general-settings/vsan-general-config.service.ts ***!
  \***************************************************************************************/
/*! exports provided: VsanGeneralConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanGeneralConfigService", function() { return VsanGeneralConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _general_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-config.data */ "lFJw");
/* harmony import */ var _generated_privileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/privileges */ "JLRK");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/logger */ "a0OL");





class VsanGeneralConfigService {
    constructor(encryptionProvider, permissionService, vsanConfigService, capabilityProvider, clusterPowerService) {
        this.encryptionProvider = encryptionProvider;
        this.permissionService = permissionService;
        this.vsanConfigService = vsanConfigService;
        this.capabilityProvider = capabilityProvider;
        this.clusterPowerService = clusterPowerService;
    }
    /**
     * Fetch the vSAN config settings for the given cluster ref
     */
    getVsanGeneralConfigData(clusterRef) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let vsanConfigSpec;
            let vcCapabilitiesData;
            let clusterCapabilitiesData;
            let clusterPowerState;
            let clusterPermissions;
            let vcPermissions;
            let kmipClusterData;
            [
                vsanConfigSpec,
                kmipClusterData,
                vcCapabilitiesData,
                clusterCapabilitiesData,
                clusterPowerState,
                clusterPermissions,
                vcPermissions,
            ] = yield Promise.all([
                this.vsanConfigService.getVsanConfigSpec(clusterRef),
                this.encryptionProvider.getKmipClusterData(clusterRef),
                this.capabilityProvider.getVcCapabilityData(clusterRef),
                this.capabilityProvider.getClusterCapabilityData(clusterRef),
                this.clusterPowerService.getPowerState(clusterRef),
                this.queryClusterPermissions(clusterRef),
                this.queryVcPermissions(clusterRef)
            ]);
            return new _general_config_data__WEBPACK_IMPORTED_MODULE_2__["GeneralConfigData"](vsanConfigSpec, vcCapabilitiesData, clusterCapabilitiesData, clusterPowerState, kmipClusterData, clusterPermissions, vcPermissions);
        });
    }
    queryClusterPermissions(clusterRef) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let permissions;
            try {
                let clusterPermissions;
                clusterPermissions = yield this.permissionService.queryPermissions(clusterRef, this.clusterPermissionProperties);
                permissions = new Map([
                    ...Object.entries(clusterPermissions),
                ]);
            }
            catch (e) {
                _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug(e);
                permissions = new Map();
                // In case of error during permissions' query, set all to true by default
                for (const permission of Object.values(this.clusterPermissionProperties)) {
                    permissions.set(permission, true);
                }
            }
            return permissions;
        });
    }
    queryVcPermissions(clusterRef) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const vcRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].vcRoot(clusterRef.serverGuid);
            let permissions;
            try {
                const vcPermissions = yield this.permissionService.queryPermissions(vcRef, this.vcPermissionProperties);
                permissions = new Map([...Object.entries(vcPermissions)]);
            }
            catch (e) {
                _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug(e);
                permissions = new Map();
                // In case of error during permissions' query, set all to true by default
                for (const permission of Object.keys(this.vcPermissionProperties)) {
                    permissions.set(permission, true);
                }
            }
            return permissions;
        });
    }
    get clusterPermissionProperties() {
        return [
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].EDIT_CLUSTER(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].CONFIG_STORAGE(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEYS(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_ENCRYPTION_POLICIES(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEY_SERVERS(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].SHALLOW_REKEY(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].SHUTDOWN_CLUSTER(),
        ];
    }
    get vcPermissionProperties() {
        return [
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].READ_POLICIES(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].GLOBAL_VCSERVER(),
            _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].GLOBAL_SETTINGS(),
        ];
    }
}



/***/ }),

/***/ "lFJw":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/common/component/general-settings/general-config.data.ts ***!
  \*******************************************************************************/
/*! exports provided: GeneralConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralConfigData", function() { return GeneralConfigData; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.data */ "yWEd");
/* harmony import */ var _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/general-settings/utils/rekey-interval.component */ "AJMJ");
/* harmony import */ var _generated_privileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/privileges */ "JLRK");
/* Copyright 2016-2021 VMware, Inc. All rights reserved. -- VMware Confidential */




class GeneralConfigData {
    constructor(vsanConfigSpec, vcCapabilityData, clusterCapabilityData, clusterPowerState, kmipClusterData, clusterPermissions, vcPermissions) {
        this.vsanConfigSpec = vsanConfigSpec;
        this.vcCapabilityData = vcCapabilityData;
        this.clusterCapabilityData = clusterCapabilityData;
        this.clusterPowerState = clusterPowerState;
        if (kmipClusterData && kmipClusterData.availableKmipClusters) {
            this.availableKmipClusters = kmipClusterData.availableKmipClusters;
        }
        this.clusterPermissions = clusterPermissions;
        this.vcPermissions = vcPermissions;
        this.hasEncryptionPermissions = clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEYS())
            && clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_ENCRYPTION_POLICIES())
            && clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEY_SERVERS());
        this.hasDataInTransitEncryptionPermissions = clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEYS());
    }
    get diskClaimPolicyText() {
        return this.vsanConfigSpec.autoClaimDisks ?
            _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.auto")
            : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.manual");
    }
    get diskClaimPolicies() {
        return [
            _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.auto"),
            _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.manual"),
        ];
    }
    get isSpaceEfficiencySupported() {
        return this.clusterCapabilityData.isDeduplicationAndCompressionSupported
            || this.clusterCapabilityData.isCompressionOnlySupported;
    }
    get wipeDiskText() {
        if (!this.vsanConfigSpec.enableDataAtRestEncryption) {
            return "";
        }
        if (this.vsanConfigSpec.eraseDisksBeforeUse) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.encryptionState.enabled");
        }
        else {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.encryptionState.disabled");
        }
    }
    get dataAtRestEncryptionServiceStatus() {
        if (!this.clusterCapabilityData.isEncryptionSupported) {
            return _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].NOT_SUPPORTED;
        }
        return this.vsanConfigSpec.enableDataAtRestEncryption ? _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].ENABLED : _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].DISABLED;
    }
    get rekeyEnabled() {
        return this.vsanConfigSpec.kmipClusterId
            && this.clusterCapabilityData.isEncryptionSupported
            && this.dataAtRestEncryptionServiceStatus === _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].ENABLED;
    }
    validateConfig(vsanConfigSpec) {
        const validationErrors = [];
        if (vsanConfigSpec.enableDataAtRestEncryption && this.hasEncryptionPermissions) {
            // Validate whether encryption settings are complete
            if (!vsanConfigSpec.kmipClusterId) {
                validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.kmsNotSelected.warning"));
            }
        }
        if (vsanConfigSpec.enableDataInTransitEncryption && this.hasDataInTransitEncryptionPermissions) {
            const rekeyInterval = vsanConfigSpec.rekeyInterval;
            if (!rekeyInterval ||
                rekeyInterval < _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MIN ||
                rekeyInterval > _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MAX) {
                const error = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("configureVsan.settings.dataInTransitEncryption.rekey.rangeError", _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MIN, _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MAX);
                validationErrors.push(error);
            }
        }
        return validationErrors;
    }
    clone() {
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects({}, this);
    }
    isConfigChanged(originalConfigSpec) {
        if (!Object.is(originalConfigSpec.enableDataInTransitEncryption, this.vsanConfigSpec.enableDataInTransitEncryption)
            || !Object.is(originalConfigSpec.enableDataAtRestEncryption, this.vsanConfigSpec.enableDataAtRestEncryption)
            || !Object.is(originalConfigSpec.spaceEfficiencyConfig, this.vsanConfigSpec.spaceEfficiencyConfig)
            || !Object.is(originalConfigSpec.autoClaimDisks, this.vsanConfigSpec.autoClaimDisks)
            || !Object.is(originalConfigSpec.enableRdma, this.vsanConfigSpec.enableRdma)
            || !Object.is(originalConfigSpec.advancedOptions.largeClusterSupportEnabled, this.vsanConfigSpec.advancedOptions.largeClusterSupportEnabled)) {
            return true;
        }
        if (originalConfigSpec.enableDataInTransitEncryption &&
            !Object.is(originalConfigSpec.rekeyInterval, this.vsanConfigSpec.rekeyInterval)) {
            return true;
        }
        if (originalConfigSpec.enableDataAtRestEncryption) {
            if (!Object.is(originalConfigSpec.kmipClusterId, this.vsanConfigSpec.kmipClusterId)
                || !Object.is(originalConfigSpec.eraseDisksBeforeUse, this.vsanConfigSpec.eraseDisksBeforeUse)) {
                return true;
            }
        }
        if (originalConfigSpec.advancedOptions.capacityReservationConfig !== null) {
            if (!Object.is(originalConfigSpec.advancedOptions.capacityReservationConfig.vsanOperationReservation, this.vsanConfigSpec.advancedOptions.capacityReservationConfig.vsanOperationReservation)
                || !Object.is(originalConfigSpec.advancedOptions.capacityReservationConfig.hostFailureReservation, this.vsanConfigSpec.advancedOptions.capacityReservationConfig.hostFailureReservation)) {
                return true;
            }
        }
        return false;
    }
    cloneVsanConfigSpec() {
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects({}, this.vsanConfigSpec);
    }
}



/***/ }),

/***/ "yWEd":
/*!************************************************************************!*\
  !*** ./src/app/vsan/common/component/general-settings/service.data.ts ***!
  \************************************************************************/
/*! exports provided: ServiceStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatus", function() { return ServiceStatus; });
/* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */
var ServiceStatus = /*@__PURE__*/ (function (ServiceStatus) {
    ServiceStatus[ServiceStatus["UNKNOWN"] = -1] = "UNKNOWN";
    ServiceStatus[ServiceStatus["ENABLED"] = 0] = "ENABLED";
    ServiceStatus[ServiceStatus["DISABLED"] = 1] = "DISABLED";
    ServiceStatus[ServiceStatus["NOT_SUPPORTED"] = 2] = "NOT_SUPPORTED";
    return ServiceStatus;
})({});



/***/ })

}]);
//# sourceMappingURL=50-es2015.js.map