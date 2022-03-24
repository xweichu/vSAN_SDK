(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "+Sd+":
/*!***************************************************************!*\
  !*** ./src/app/vsan/common/component/upgrade/upgrade.data.ts ***!
  \***************************************************************/
/*! exports provided: UpgradeData, VsanUpgradeStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeData", function() { return UpgradeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanUpgradeStatus", function() { return VsanUpgradeStatus; });
/* harmony import */ var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/disk-mgmt-disk.util */ "EW68");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");



class UpgradeData {
    constructor(diskData, upgradeStatus, hasOldVsanObject, latestVersion) {
        var _a, _b, _c, _d, _e;
        this.diskData = diskData;
        this.upgradeStatus = upgradeStatus;
        this.hasOldVsanObject = hasOldVsanObject;
        this.latestVersion = latestVersion;
        // Populate the upgrade data, based on the input disks
        const versions = this.getVersions();
        this.upgradeDiskData = UpgradeDisksData.create(versions, latestVersion);
        this.hasPrecheckRunInformation = !!((_a = this.upgradeStatus) === null || _a === void 0 ? void 0 : _a.isPrecheck);
        this.isDataMovementRequired = this.upgradeDiskData && ((_b = this.upgradeStatus) === null || _b === void 0 ? void 0 : _b.isDataMovementRequired);
        this.isUpgraded = !this.upgradeDiskData.hasDisks || (this.upgradeDiskData.minVersion >= this.latestVersion);
        this.hasPrecheckIssues = this.upgradeStatus && !this.upgradeStatus.inProgress && this.upgradeStatus.isPrecheck
            && !!((_c = this.upgradeStatus.issues) === null || _c === void 0 ? void 0 : _c.length);
        this.status = this.getStatus();
        this.isUpgradeInProgress =
            this.upgradeStatus && !this.upgradeStatus.isPrecheck && this.status === VsanUpgradeStatus.IN_PROGRESS;
        this.isAsyncPrecheckSupported = !!((_d = this.upgradeStatus) === null || _d === void 0 ? void 0 : _d.isAsyncPrecheckSupported);
        this.isUpToDate = this.getIsUpToDate();
        this.latestVersionAsString = (_e = this.latestVersion) === null || _e === void 0 ? void 0 : _e.toFixed(1);
        this.precheckStatus = this.getPrecheckStatus();
    }
    /**
     * Gets the disks versions, it is a simple map, key is vsan formatted version string,
     * value is the total count of disks which has this version.
     */
    getVersions() {
        const versions = new Map();
        // aggregate all host disk versions here.
        this.diskData.filter(disk => disk.disk.vsanDiskInfo).forEach(disk => {
            if (_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__["DiskMgmtDiskUtil"].isHealthy(disk)) {
                const formatVersion = _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__["DiskMgmtDiskUtil"].getFormatVersion(disk.diskStatus);
                const count = versions.get(formatVersion);
                if (count) {
                    versions.set(formatVersion, count + 1);
                }
                else {
                    versions.set(formatVersion, 1);
                }
            }
        });
        return versions;
    }
    getNewInstance(upgradeStatus) {
        return new UpgradeData(this.diskData, upgradeStatus, this.hasOldVsanObject, this.latestVersion);
    }
    getIsUpToDate() {
        if (!this.upgradeDiskData.hasDisks) {
            // No disks, nothing to check, so assume up to date.
            return true;
        }
        if (this.upgradeDiskData.minVersion >= this.latestVersion &&
            this.upgradeDiskData.maxVersion >= this.latestVersion &&
            !this.hasOldVsanObject) {
            return true;
        }
        return false;
    }
    /**
     * Gets formatted string for overall upgrade status.
     */
    getOverallUpgradeStatus(includeCompatibilityWarning) {
        let statusText;
        if (!this.upgradeDiskData.hasDisks) {
            // there are no claimed disks
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.upgrade.manage.no.data");
        }
        else if (this.upgradeDiskData.hasMixedDiskVersions) {
            // there are disks from different versions, show something like:
            // 4 of 12 disks on older version
            statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.mixed.upgradeSuggested", this.upgradeDiskData.olderNumOfDisks, this.upgradeDiskData.totalNumOfDisks);
            return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
        }
        else if (this.upgradeDiskData.minVersion === this.latestVersion &&
            this.upgradeDiskData.maxVersion === this.latestVersion) {
            if (this.hasOldVsanObject) {
                // the disk format version is latest but there are objects with older version
                // display something like: "All 12 disk on 3.0 (latest) but with old VSAN objects
                statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestVersion.oldVsanObjects", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
                return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
            }
            else {
                // everything is latest, show something like: All 12 disks on 3.0 (latest)
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestVersion", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
            }
        }
        else if (this.upgradeDiskData.maxVersion > this.latestVersion) {
            if (this.hasOldVsanObject) {
                // the disk format version is latest or higher but there are objects with older version
                // display something like: "All 12 disk on 3.0 (latest) or higher but with old VSAN objects
                statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestOrHigherVersion.oldVsanObjects", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
                return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
            }
            else {
                // everything is latest or higher, show something like: All 12 disks on 3.0 (latest) or higher
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestOrHigherVersion", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
            }
        }
        else {
            // all disks are on older versions, show something like:
            // All 12 disks on 2.0
            const minVersionAsString = this.upgradeDiskData.minVersion.toFixed(1);
            statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.singleVersion.upgradeSuggested", this.upgradeDiskData.totalNumOfDisks, minVersionAsString);
            return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
        }
    }
    getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning) {
        return includeCompatibilityWarning
            ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.compatibility.warning", statusText)
            : statusText;
    }
    getStatus() {
        if (!this.upgradeStatus) {
            // it probably means we don't have any information and we can't display anything
            // about prechecks or actual upgrade
            return VsanUpgradeStatus.UNKNOWN;
        }
        // NOTE: at least one of below conditions should be true, maybe here backend
        // miss one status which is for "not begin".
        if (this.upgradeStatus) {
            if (this.upgradeStatus.completed) {
                return VsanUpgradeStatus.COMPLETED;
            }
            else if (this.upgradeStatus.aborted) {
                return VsanUpgradeStatus.ABORTED;
            }
            else if (this.upgradeStatus.inProgress) {
                return VsanUpgradeStatus.IN_PROGRESS;
            }
        }
        return VsanUpgradeStatus.UNKNOWN;
    }
    getPrecheckStatus() {
        if (!this.hasPrecheckRunInformation) {
            // show something like: "Run pre-check before upgrading.".
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.precheckSuggested");
        }
        else if (this.status === VsanUpgradeStatus.IN_PROGRESS) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.precheckInProgress");
        }
        else {
            if (this.status === VsanUpgradeStatus.ABORTED) {
                // show something like: "Pre-check was aborted."
                return this.getStatusLabelWithTime("vsan.manage.upgrade.precheckAborted");
            }
            else if (this.status === VsanUpgradeStatus.COMPLETED) {
                // prechecks passed successfully
                if (!this.upgradeStatus.issues || this.upgradeStatus.issues.length === 0) {
                    // No issues, display something like - "Ready to upgrade - precheck completed
                    // successfully."
                    return this.getStatusLabelWithTime("vsan.manage.upgrade.precheckCompletedOk");
                }
                else {
                    // Have issues, display something like - "Pre-check completed with issues."
                    return this.getStatusLabelWithTime("vsan.manage.upgrade.precheckCompletedWithErrors");
                }
            }
        }
    }
    getStatusLabelWithTime(operationLabelKey) {
        const operationLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString(operationLabelKey);
        if (!this.upgradeStatus.lastOperationDate) {
            // There is no timestamp of the operation, append a dot.
            return operationLabel + ".";
        }
        const lastOperationTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].formatDate(this.upgradeStatus.lastOperationDate);
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.precheck.formatWithTime", operationLabel, lastOperationTime);
    }
}
var VsanUpgradeStatus = /*@__PURE__*/ (function (VsanUpgradeStatus) {
    VsanUpgradeStatus[VsanUpgradeStatus["UNKNOWN"] = -1] = "UNKNOWN";
    VsanUpgradeStatus[VsanUpgradeStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    VsanUpgradeStatus[VsanUpgradeStatus["ABORTED"] = 1] = "ABORTED";
    VsanUpgradeStatus[VsanUpgradeStatus["COMPLETED"] = 2] = "COMPLETED";
    return VsanUpgradeStatus;
})({});
class UpgradeDisksData {
    constructor() {
        this.minVersion = Number.MAX_VALUE;
        this.totalVersionsInCluster = 0;
        this.maxVersion = Number.MIN_VALUE;
        this.totalNumOfDisks = 0;
        this.olderNumOfDisks = 0;
    }
    static create(versions, latestVersion) {
        const result = new UpgradeDisksData();
        versions.forEach((value, key) => {
            const versionNum = parseInt(key, 10);
            if (result.minVersion > versionNum) {
                result.minVersion = versionNum;
                result.minVersionKey = key;
            }
            if (result.maxVersion < versionNum) {
                result.maxVersion = versionNum;
                result.maxVersionKey = key;
            }
            result.totalNumOfDisks += value;
            result.olderNumOfDisks += (versionNum < latestVersion)
                ? value
                : 0;
            result.totalVersionsInCluster++;
        });
        result.hasDisks = result.totalVersionsInCluster > 0;
        result.hasMixedDiskVersions = result.totalVersionsInCluster > 1 && result.olderNumOfDisks > 0;
        result.minVersionAsString = result.minVersion.toFixed(1);
        return result;
    }
}



/***/ }),

/***/ "715e":
/*!*********************************************************!*\
  !*** ./src/app/vsan/common/util/disk-mgmt-host.util.ts ***!
  \*********************************************************/
/*! exports provided: DiskMgmtHostUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskMgmtHostUtil", function() { return DiskMgmtHostUtil; });
/* harmony import */ var _generated_host_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/host-data */ "/V+g");
/* harmony import */ var _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/connection-state */ "dOyF");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/disk-mgmt-disk-group.util */ "GyAb");
/* harmony import */ var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/disk-mgmt.util */ "dSru");
/* harmony import */ var _generated_availability_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @generated/availability-state */ "ARpS");
/* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */






let DiskMgmtHostUtil = /*@__PURE__*/ (() => {
    class DiskMgmtHostUtil {
        static getState(host) {
            if (host.state === _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].notResponding) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.state.notResponding");
            }
            if (host.state === _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].disconnected) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.state.disconnected");
            }
            if (host.isInMaintenanceMode) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.state.inMaintenanceMode");
            }
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.state.connected");
        }
        static getHealthKey(host) {
            for (const group of host.diskGroups) {
                if (!_util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].isVsanDiskGroup(group)) {
                    continue;
                }
                const groupHealthKey = _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].getHealthKey(group);
                if (groupHealthKey !== _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].HEALTHY_MSG_KEY) {
                    return groupHealthKey;
                }
            }
            switch (host.healthStatus) {
                case _generated_host_data__WEBPACK_IMPORTED_MODULE_0__["HostData"].HealthStatus.HEALTHY:
                    return DiskMgmtHostUtil.HEALTHY_MSG_KEY;
                case _generated_host_data__WEBPACK_IMPORTED_MODULE_0__["HostData"].HealthStatus.UNHEALTHY:
                    return DiskMgmtHostUtil.UNHEALTHY_MSG_KEY;
                default:
                    return DiskMgmtHostUtil.UNKNOWN_MSG_KEY;
            }
        }
        static getDataMigrationPrecheckLabel(clusterCapabilities) {
            return clusterCapabilities.isHostResourcePrecheckSupported
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.actions.goToPrecheckDataMigration.label")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.actions.precheckDiskGroupEvacuation.label");
        }
        static getDisks(host, claimableState) {
            switch (claimableState) {
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE:
                    return host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].IN_USE_BY_VSAN]
                        .concat(host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ONLY_MANAGED_BY_VSAN]);
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE:
                    return host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ELIGIBLE];
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].NOT_USABLE:
                    return host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].INELIGIBLE];
            }
        }
        static getPmemStorage(host, claimableState) {
            switch (claimableState) {
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE:
                    return host.pmemStorage[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ONLY_MANAGED_BY_VSAN];
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE:
                    return host.pmemStorage[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ELIGIBLE];
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].NOT_USABLE:
                    return host.pmemStorage[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].INELIGIBLE];
            }
        }
        static getClaimDistribution(host) {
            const claimDistribution = new Map();
            [_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE, _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE, _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].NOT_USABLE].forEach(claimableState => claimDistribution.set(claimableState, DiskMgmtHostUtil.getDistributionCount(host, claimableState)));
            return claimDistribution;
        }
        static orderHostsByHealth(hosts) {
            hosts.sort((h1, h2) => {
                return DiskMgmtHostUtil.getHealthKeyOrderPriority(DiskMgmtHostUtil.getHealthKey(h1)) -
                    DiskMgmtHostUtil.getHealthKeyOrderPriority(DiskMgmtHostUtil.getHealthKey(h2));
            });
        }
        static getDistributionCount(host, claimableState) {
            return DiskMgmtHostUtil.getDisks(host, claimableState).length +
                DiskMgmtHostUtil.getPmemStorage(host, claimableState).length;
        }
        static getHealthKeyOrderPriority(healthKey) {
            switch (healthKey) {
                case DiskMgmtHostUtil.UNHEALTHY_MSG_KEY: return 1;
                case _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].LOCKED_MSG_KEY: return 2;
                case DiskMgmtHostUtil.UNKNOWN_MSG_KEY: return 3;
                case _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].UNMOUNTED_MSG_KEY: return 4;
                case DiskMgmtHostUtil.HEALTHY_MSG_KEY: return 5;
                default: return Number.MAX_SAFE_INTEGER;
            }
        }
        static getEligibleDiskCount(hostList) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(hostList)) {
                return 0;
            }
            return hostList
                .filter(host => host.state === _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].connected)
                .filter(host => !host.isWitnessHost)
                .reduce((sum, host) => sum +=
                DiskMgmtHostUtil.getClaimDistribution(host).get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE), 0);
        }
    }
    DiskMgmtHostUtil.HEALTHY_MSG_KEY = "vsan.host.healthy";
    DiskMgmtHostUtil.UNHEALTHY_MSG_KEY = "vsan.host.unhealthy";
    DiskMgmtHostUtil.UNKNOWN_MSG_KEY = "vsan.host.unknown";
    /**
     * Returns unique group keys of a host, excluding unused group(represented as undefined)
     */
    DiskMgmtHostUtil.getGroupTypeKeys = (host) => {
        return host.diskGroups
            .map(group => _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].getKey(group))
            .filter((v, i, a) => v && a.indexOf(v) === i); // removes empty and duplicate keys.
    };
    DiskMgmtHostUtil.getClaimedDisksLabel = (host) => {
        const claimDistribution = DiskMgmtHostUtil.getClaimDistribution(host);
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.diskManagement.hostList.disksInUse.label", claimDistribution.get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE), claimDistribution.get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE) + claimDistribution.get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE));
    };
    return DiskMgmtHostUtil;
})();



/***/ }),

/***/ "9lKY":
/*!***************************************************************************!*\
  !*** ./src/app/vsan/common/service/navigation/model/knowledge-base-id.ts ***!
  \***************************************************************************/
/*! exports provided: KnowledgeBaseId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseId", function() { return KnowledgeBaseId; });
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * IDs used in external KB link navigation
 */
var KnowledgeBaseId = /*@__PURE__*/ (function (KnowledgeBaseId) {
    KnowledgeBaseId["PRECHECK_PCP"] = "83954";
    KnowledgeBaseId["VIRTUAL_OBJECTS"] = "2108319";
    KnowledgeBaseId["UPGRADE"] = "2148493";
    KnowledgeBaseId["PERFORMANCE_DIAGNOSTICS"] = "2148770";
    KnowledgeBaseId["SUPPORT_INSIGHT"] = "60206";
    return KnowledgeBaseId;
})({});



/***/ }),

/***/ "GyAb":
/*!***************************************************************!*\
  !*** ./src/app/vsan/common/util/disk-mgmt-disk-group.util.ts ***!
  \***************************************************************/
/*! exports provided: DiskMgmtDiskGroupUtil, DiskGroupKey, VsanDiskGroupLabelFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskMgmtDiskGroupUtil", function() { return DiskMgmtDiskGroupUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskGroupKey", function() { return DiskGroupKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanDiskGroupLabelFormat", function() { return VsanDiskGroupLabelFormat; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/disk-group-type */ "PUJm");
/* harmony import */ var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/disk-mgmt-disk.util */ "EW68");
/* harmony import */ var _component_diskmgmt_model_storage_identifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/diskmgmt/model/storage-identifier */ "vSc5");




let DiskMgmtDiskGroupUtil = /*@__PURE__*/ (() => {
    class DiskMgmtDiskGroupUtil {
        static isVsanDiskGroup(diskGroup) {
            return [_generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH, _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].HYBRID].includes(diskGroup.diskGroupType);
        }
        static isAllFlashDiskGroup(diskGroup) {
            return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH;
        }
        static isVsanDirectDiskGroup(diskGroup) {
            return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].VSAN_DIRECT;
        }
        static isPmemDiskGroup(diskGroup) {
            return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].PMEM;
        }
        static isVsanMaxSingleTier(diskGroup) {
            return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].SINGLE_TIER;
        }
        static isUnusedDiskGroup(storageGroup) {
            return storageGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].UNUSED;
        }
        static getState(diskGroup) {
            if (!DiskMgmtDiskGroupUtil.isVsanDiskGroup(diskGroup)) {
                return "";
            }
            return diskGroup.isMounted
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.mounted")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.unmounted");
        }
        static getHealthKey(group) {
            if (!DiskMgmtDiskGroupUtil.isVsanDiskGroup(group)) {
                return "";
            }
            if (group.isLocked) {
                return DiskMgmtDiskGroupUtil.LOCKED_MSG_KEY;
            }
            if (!group.isMounted) {
                return DiskMgmtDiskGroupUtil.UNMOUNTED_MSG_KEY;
            }
            return group.disks.every(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].isHealthy)
                ? DiskMgmtDiskGroupUtil.HEALTHY_MSG_KEY
                : DiskMgmtDiskGroupUtil.UNHEALTHY_MSG_KEY;
        }
        static getKey(group) {
            if (DiskMgmtDiskGroupUtil.isVsanDiskGroup(group) || DiskMgmtDiskGroupUtil.isVsanMaxSingleTier(group)) {
                return DiskGroupKey.VSAN;
            }
            else if (DiskMgmtDiskGroupUtil.isVsanDirectDiskGroup(group)) {
                return DiskGroupKey.VSAN_DIRECT;
            }
            else if (DiskMgmtDiskGroupUtil.isPmemDiskGroup(group)) {
                return DiskGroupKey.PMEM;
            }
        }
        static getLabel(diskGroup, labelFormat) {
            switch (diskGroup.diskGroupType) {
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH:
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].HYBRID:
                    return DiskMgmtDiskGroupUtil.getVsanLabel(diskGroup.name, labelFormat);
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].VSAN_DIRECT:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.vsanDirect");
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].PMEM:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.pmem");
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].SINGLE_TIER:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.vsanMax");
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].UNUSED:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.ineligibleAndUnclaimed");
            }
        }
        static getVsanLabel(uuid, labelFormat) {
            switch (labelFormat) {
                case VsanDiskGroupLabelFormat.TYPE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.vsan");
                case VsanDiskGroupLabelFormat.TYPE_AND_UUID:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.vsan.uuid", uuid);
                case VsanDiskGroupLabelFormat.UUID:
                default:
                    return uuid;
            }
        }
        static getType(diskGroup) {
            switch (diskGroup.diskGroupType) {
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.allFlash");
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].HYBRID:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.hybrid");
                default:
                    return "";
            }
        }
        static getAggregatedFsVersion(diskGroup) {
            if (!DiskMgmtDiskGroupUtil.isVsanDiskGroup(diskGroup)) {
                return "";
            }
            const cacheDisk = diskGroup.disks.find(disk => disk.isMappedAsCache);
            return cacheDisk ? _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].getFormatVersion(cacheDisk.diskStatus) : "";
        }
        static getDataMigrationPrecheckLabel(clusterCapabilities) {
            return clusterCapabilities.isDiskResourcePrecheckSupported
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.actions.goToPrecheckDataMigration.label")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.actions.precheckDiskGroupEvacuation.label");
        }
        static findGroupByStorage(diskGroups, storage) {
            return diskGroups.find(group => (group.disks && group.disks.some(disk => _component_diskmgmt_model_storage_identifier__WEBPACK_IMPORTED_MODULE_3__["StorageIdentifier"].areEqual(disk, storage))) ||
                (group.pmemStorage && group.pmemStorage.some(disk => _component_diskmgmt_model_storage_identifier__WEBPACK_IMPORTED_MODULE_3__["StorageIdentifier"].areEqual(disk, storage))));
        }
    }
    DiskMgmtDiskGroupUtil.HEALTHY_MSG_KEY = "vsan.host.healthy";
    DiskMgmtDiskGroupUtil.UNHEALTHY_MSG_KEY = "vsan.host.unhealthy";
    DiskMgmtDiskGroupUtil.LOCKED_MSG_KEY = "vsan.host.locked";
    DiskMgmtDiskGroupUtil.UNMOUNTED_MSG_KEY = "vsan.na.label";
    DiskMgmtDiskGroupUtil.getBreadcrumbPreselectedDiskGroup = (host) => {
        return (host === null || host === void 0 ? void 0 : host.isSingleTierEnabled) ? host.diskGroups[0] : null;
    };
    return DiskMgmtDiskGroupUtil;
})();
var DiskGroupKey = /*@__PURE__*/ (function (DiskGroupKey) {
    DiskGroupKey["VSAN"] = "vsan.manage.diskManagement.hostList.contributesTo.label.vsan";
    DiskGroupKey["VSAN_DIRECT"] = "vsan.manage.diskManagement.hostList.contributesTo.label.vsanDirect";
    DiskGroupKey["PMEM"] = "vsan.manage.diskManagement.hostList.contributesTo.label.pmem";
    return DiskGroupKey;
})({});
var VsanDiskGroupLabelFormat = /*@__PURE__*/ (function (VsanDiskGroupLabelFormat) {
    VsanDiskGroupLabelFormat[VsanDiskGroupLabelFormat["TYPE"] = 0] = "TYPE";
    VsanDiskGroupLabelFormat[VsanDiskGroupLabelFormat["UUID"] = 1] = "UUID";
    VsanDiskGroupLabelFormat[VsanDiskGroupLabelFormat["TYPE_AND_UUID"] = 2] = "TYPE_AND_UUID";
    return VsanDiskGroupLabelFormat;
})({});



/***/ }),

/***/ "Ndfo":
/*!******************************************************************!*\
  !*** ./src/app/vsan/common/component/upgrade/upgrade.service.ts ***!
  \******************************************************************/
/*! exports provided: UpgradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeService", function() { return UpgradeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _component_upgrade_upgrade_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/upgrade/upgrade.data */ "+Sd+");
/* harmony import */ var _util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/disk-mgmt-host.util */ "715e");
/* harmony import */ var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/disk-mgmt.util */ "dSru");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");





/**
 * Provides data for disks and objects format version.
 */
class UpgradeService {
    constructor(upgradePropertyProvider, upgradeMutationProvider, diskMgmtService) {
        this.upgradePropertyProvider = upgradePropertyProvider;
        this.upgradeMutationProvider = upgradeMutationProvider;
        this.diskMgmtService = diskMgmtService;
    }
    getUpgradeData(clusterRef) {
        return new Promise((accept, reject) => {
            this.diskMgmtService.listHosts(clusterRef).then((hostDisksData) => {
                accept(this.getUpgradeOnlyData(clusterRef, hostDisksData));
            }).catch(error => reject(error));
        });
    }
    getUpgradeOnlyData(clusterRef, hostDisks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const claimedDisks = this.getClaimedDisks(hostDisks);
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].isEmpty(claimedDisks)) {
                // No disks claimed, no need to query upgrade status
                return new _component_upgrade_upgrade_data__WEBPACK_IMPORTED_MODULE_1__["UpgradeData"](claimedDisks, null, null, null);
            }
            let upgradeStatusData;
            let hasOldVsanObject;
            let latestVersion;
            [upgradeStatusData, hasOldVsanObject, latestVersion] = yield Promise.all([
                this.getUpgradeStatus(clusterRef),
                this.hasOldFormatObjects(clusterRef),
                this.getLatestVsanVersion(clusterRef),
            ]);
            return new _component_upgrade_upgrade_data__WEBPACK_IMPORTED_MODULE_1__["UpgradeData"](claimedDisks, upgradeStatusData, hasOldVsanObject, latestVersion);
        });
    }
    getUpgradeStatus(clusterRef) {
        return this.upgradePropertyProvider.getVsanUpgradeStatus(clusterRef);
    }
    hasOldFormatObjects(clusterRef) {
        return this.upgradePropertyProvider.getHasOldVsanObject(clusterRef);
    }
    getLatestVsanVersion(clusterRef) {
        return this.upgradePropertyProvider.getLatestVsanVersion(clusterRef);
    }
    isUpgradeNeeded(upgradeData) {
        if (upgradeData.upgradeDiskData.hasMixedDiskVersions) {
            // there are older disks
            return true;
        }
        else if (upgradeData.upgradeDiskData.minVersion >= upgradeData.latestVersion) {
            // disks are at latest version, check for old objects
            return upgradeData.hasOldVsanObject;
        }
        // All disks are on older versions
        return true;
    }
    precheckUpgrade(contextObject) {
        return this.upgradeMutationProvider.performUpgradePreflightAsyncCheck(contextObject);
    }
    getClaimedDisks(hostDisksData) {
        let disks = [];
        hostDisksData.forEach(host => {
            disks = disks.concat(_util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtHostUtil"].getDisks(host, _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_3__["ClaimableState"].IN_USE));
        });
        return disks;
    }
}



/***/ }),

/***/ "vSc5":
/*!****************************************************************************!*\
  !*** ./src/app/vsan/common/component/diskmgmt/model/storage-identifier.ts ***!
  \****************************************************************************/
/*! exports provided: StorageIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageIdentifier", function() { return StorageIdentifier; });
/* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * uuid is required for identification. Name is required for screen reader
 */
class StorageIdentifier {
    constructor(uuid, name) {
        this.uuid = uuid;
        this.name = name;
    }
    static areEqual(value1, value2) {
        return value1 && value2 && (value1.uuid === value2.uuid);
    }
}



/***/ })

}]);
//# sourceMappingURL=42-es2015.js.map