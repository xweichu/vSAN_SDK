(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42], {
    /***/
    "+Sd+":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/common/component/upgrade/upgrade.data.ts ***!
      \***************************************************************/

    /*! exports provided: UpgradeData, VsanUpgradeStatus */

    /***/
    function Sd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpgradeData", function () {
        return UpgradeData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanUpgradeStatus", function () {
        return VsanUpgradeStatus;
      });
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var UpgradeData = /*#__PURE__*/function () {
        function UpgradeData(diskData, upgradeStatus, hasOldVsanObject, latestVersion) {
          _classCallCheck(this, UpgradeData);

          var _a, _b, _c, _d, _e;

          this.diskData = diskData;
          this.upgradeStatus = upgradeStatus;
          this.hasOldVsanObject = hasOldVsanObject;
          this.latestVersion = latestVersion; // Populate the upgrade data, based on the input disks

          var versions = this.getVersions();
          this.upgradeDiskData = UpgradeDisksData.create(versions, latestVersion);
          this.hasPrecheckRunInformation = !!((_a = this.upgradeStatus) === null || _a === void 0 ? void 0 : _a.isPrecheck);
          this.isDataMovementRequired = this.upgradeDiskData && ((_b = this.upgradeStatus) === null || _b === void 0 ? void 0 : _b.isDataMovementRequired);
          this.isUpgraded = !this.upgradeDiskData.hasDisks || this.upgradeDiskData.minVersion >= this.latestVersion;
          this.hasPrecheckIssues = this.upgradeStatus && !this.upgradeStatus.inProgress && this.upgradeStatus.isPrecheck && !!((_c = this.upgradeStatus.issues) === null || _c === void 0 ? void 0 : _c.length);
          this.status = this.getStatus();
          this.isUpgradeInProgress = this.upgradeStatus && !this.upgradeStatus.isPrecheck && this.status === VsanUpgradeStatus.IN_PROGRESS;
          this.isAsyncPrecheckSupported = !!((_d = this.upgradeStatus) === null || _d === void 0 ? void 0 : _d.isAsyncPrecheckSupported);
          this.isUpToDate = this.getIsUpToDate();
          this.latestVersionAsString = (_e = this.latestVersion) === null || _e === void 0 ? void 0 : _e.toFixed(1);
          this.precheckStatus = this.getPrecheckStatus();
        }
        /**
         * Gets the disks versions, it is a simple map, key is vsan formatted version string,
         * value is the total count of disks which has this version.
         */


        _createClass(UpgradeData, [{
          key: "getVersions",
          value: function getVersions() {
            var versions = new Map(); // aggregate all host disk versions here.

            this.diskData.filter(function (disk) {
              return disk.disk.vsanDiskInfo;
            }).forEach(function (disk) {
              if (_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__["DiskMgmtDiskUtil"].isHealthy(disk)) {
                var formatVersion = _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__["DiskMgmtDiskUtil"].getFormatVersion(disk.diskStatus);

                var count = versions.get(formatVersion);

                if (count) {
                  versions.set(formatVersion, count + 1);
                } else {
                  versions.set(formatVersion, 1);
                }
              }
            });
            return versions;
          }
        }, {
          key: "getNewInstance",
          value: function getNewInstance(upgradeStatus) {
            return new UpgradeData(this.diskData, upgradeStatus, this.hasOldVsanObject, this.latestVersion);
          }
        }, {
          key: "getIsUpToDate",
          value: function getIsUpToDate() {
            if (!this.upgradeDiskData.hasDisks) {
              // No disks, nothing to check, so assume up to date.
              return true;
            }

            if (this.upgradeDiskData.minVersion >= this.latestVersion && this.upgradeDiskData.maxVersion >= this.latestVersion && !this.hasOldVsanObject) {
              return true;
            }

            return false;
          }
          /**
           * Gets formatted string for overall upgrade status.
           */

        }, {
          key: "getOverallUpgradeStatus",
          value: function getOverallUpgradeStatus(includeCompatibilityWarning) {
            var statusText;

            if (!this.upgradeDiskData.hasDisks) {
              // there are no claimed disks
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.upgrade.manage.no.data");
            } else if (this.upgradeDiskData.hasMixedDiskVersions) {
              // there are disks from different versions, show something like:
              // 4 of 12 disks on older version
              statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.mixed.upgradeSuggested", this.upgradeDiskData.olderNumOfDisks, this.upgradeDiskData.totalNumOfDisks);
              return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
            } else if (this.upgradeDiskData.minVersion === this.latestVersion && this.upgradeDiskData.maxVersion === this.latestVersion) {
              if (this.hasOldVsanObject) {
                // the disk format version is latest but there are objects with older version
                // display something like: "All 12 disk on 3.0 (latest) but with old VSAN objects
                statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestVersion.oldVsanObjects", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
                return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
              } else {
                // everything is latest, show something like: All 12 disks on 3.0 (latest)
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestVersion", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
              }
            } else if (this.upgradeDiskData.maxVersion > this.latestVersion) {
              if (this.hasOldVsanObject) {
                // the disk format version is latest or higher but there are objects with older version
                // display something like: "All 12 disk on 3.0 (latest) or higher but with old VSAN objects
                statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestOrHigherVersion.oldVsanObjects", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
                return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
              } else {
                // everything is latest or higher, show something like: All 12 disks on 3.0 (latest) or higher
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.latestOrHigherVersion", this.upgradeDiskData.totalNumOfDisks, this.latestVersionAsString);
              }
            } else {
              // all disks are on older versions, show something like:
              // All 12 disks on 2.0
              var minVersionAsString = this.upgradeDiskData.minVersion.toFixed(1);
              statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.singleVersion.upgradeSuggested", this.upgradeDiskData.totalNumOfDisks, minVersionAsString);
              return this.getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning);
            }
          }
        }, {
          key: "getUpgradeWithIssuesStatus",
          value: function getUpgradeWithIssuesStatus(statusText, includeCompatibilityWarning) {
            return includeCompatibilityWarning ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.compatibility.warning", statusText) : statusText;
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            if (!this.upgradeStatus) {
              // it probably means we don't have any information and we can't display anything
              // about prechecks or actual upgrade
              return VsanUpgradeStatus.UNKNOWN;
            } // NOTE: at least one of below conditions should be true, maybe here backend
            // miss one status which is for "not begin".


            if (this.upgradeStatus) {
              if (this.upgradeStatus.completed) {
                return VsanUpgradeStatus.COMPLETED;
              } else if (this.upgradeStatus.aborted) {
                return VsanUpgradeStatus.ABORTED;
              } else if (this.upgradeStatus.inProgress) {
                return VsanUpgradeStatus.IN_PROGRESS;
              }
            }

            return VsanUpgradeStatus.UNKNOWN;
          }
        }, {
          key: "getPrecheckStatus",
          value: function getPrecheckStatus() {
            if (!this.hasPrecheckRunInformation) {
              // show something like: "Run pre-check before upgrading.".
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.precheckSuggested");
            } else if (this.status === VsanUpgradeStatus.IN_PROGRESS) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.precheckInProgress");
            } else {
              if (this.status === VsanUpgradeStatus.ABORTED) {
                // show something like: "Pre-check was aborted."
                return this.getStatusLabelWithTime("vsan.manage.upgrade.precheckAborted");
              } else if (this.status === VsanUpgradeStatus.COMPLETED) {
                // prechecks passed successfully
                if (!this.upgradeStatus.issues || this.upgradeStatus.issues.length === 0) {
                  // No issues, display something like - "Ready to upgrade - precheck completed
                  // successfully."
                  return this.getStatusLabelWithTime("vsan.manage.upgrade.precheckCompletedOk");
                } else {
                  // Have issues, display something like - "Pre-check completed with issues."
                  return this.getStatusLabelWithTime("vsan.manage.upgrade.precheckCompletedWithErrors");
                }
              }
            }
          }
        }, {
          key: "getStatusLabelWithTime",
          value: function getStatusLabelWithTime(operationLabelKey) {
            var operationLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString(operationLabelKey);

            if (!this.upgradeStatus.lastOperationDate) {
              // There is no timestamp of the operation, append a dot.
              return operationLabel + ".";
            }

            var lastOperationTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].formatDate(this.upgradeStatus.lastOperationDate);

            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.upgrade.precheck.formatWithTime", operationLabel, lastOperationTime);
          }
        }]);

        return UpgradeData;
      }();

      var VsanUpgradeStatus = /*@__PURE__*/function (VsanUpgradeStatus) {
        VsanUpgradeStatus[VsanUpgradeStatus["UNKNOWN"] = -1] = "UNKNOWN";
        VsanUpgradeStatus[VsanUpgradeStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
        VsanUpgradeStatus[VsanUpgradeStatus["ABORTED"] = 1] = "ABORTED";
        VsanUpgradeStatus[VsanUpgradeStatus["COMPLETED"] = 2] = "COMPLETED";
        return VsanUpgradeStatus;
      }({});

      var UpgradeDisksData = /*#__PURE__*/function () {
        function UpgradeDisksData() {
          _classCallCheck(this, UpgradeDisksData);

          this.minVersion = Number.MAX_VALUE;
          this.totalVersionsInCluster = 0;
          this.maxVersion = Number.MIN_VALUE;
          this.totalNumOfDisks = 0;
          this.olderNumOfDisks = 0;
        }

        _createClass(UpgradeDisksData, null, [{
          key: "create",
          value: function create(versions, latestVersion) {
            var result = new UpgradeDisksData();
            versions.forEach(function (value, key) {
              var versionNum = parseInt(key, 10);

              if (result.minVersion > versionNum) {
                result.minVersion = versionNum;
                result.minVersionKey = key;
              }

              if (result.maxVersion < versionNum) {
                result.maxVersion = versionNum;
                result.maxVersionKey = key;
              }

              result.totalNumOfDisks += value;
              result.olderNumOfDisks += versionNum < latestVersion ? value : 0;
              result.totalVersionsInCluster++;
            });
            result.hasDisks = result.totalVersionsInCluster > 0;
            result.hasMixedDiskVersions = result.totalVersionsInCluster > 1 && result.olderNumOfDisks > 0;
            result.minVersionAsString = result.minVersion.toFixed(1);
            return result;
          }
        }]);

        return UpgradeDisksData;
      }();
      /***/

    },

    /***/
    "715e":
    /*!*********************************************************!*\
      !*** ./src/app/vsan/common/util/disk-mgmt-host.util.ts ***!
      \*********************************************************/

    /*! exports provided: DiskMgmtHostUtil */

    /***/
    function e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskMgmtHostUtil", function () {
        return DiskMgmtHostUtil;
      });
      /* harmony import */


      var _generated_host_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/host-data */
      "/V+g");
      /* harmony import */


      var _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/connection-state */
      "dOyF");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/disk-mgmt-disk-group.util */
      "GyAb");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _generated_availability_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/availability-state */
      "ARpS");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DiskMgmtHostUtil = /*@__PURE__*/function () {
        var DiskMgmtHostUtil = /*#__PURE__*/function () {
          function DiskMgmtHostUtil() {
            _classCallCheck(this, DiskMgmtHostUtil);
          }

          _createClass(DiskMgmtHostUtil, null, [{
            key: "getState",
            value: function getState(host) {
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
          }, {
            key: "getHealthKey",
            value: function getHealthKey(host) {
              var _iterator = _createForOfIteratorHelper(host.diskGroups),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var group = _step.value;

                  if (!_util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].isVsanDiskGroup(group)) {
                    continue;
                  }

                  var groupHealthKey = _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].getHealthKey(group);

                  if (groupHealthKey !== _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].HEALTHY_MSG_KEY) {
                    return groupHealthKey;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
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
          }, {
            key: "getDataMigrationPrecheckLabel",
            value: function getDataMigrationPrecheckLabel(clusterCapabilities) {
              return clusterCapabilities.isHostResourcePrecheckSupported ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.actions.goToPrecheckDataMigration.label") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.actions.precheckDiskGroupEvacuation.label");
            }
          }, {
            key: "getDisks",
            value: function getDisks(host, claimableState) {
              switch (claimableState) {
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE:
                  return host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].IN_USE_BY_VSAN].concat(host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ONLY_MANAGED_BY_VSAN]);

                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE:
                  return host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ELIGIBLE];

                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].NOT_USABLE:
                  return host.disks[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].INELIGIBLE];
              }
            }
          }, {
            key: "getPmemStorage",
            value: function getPmemStorage(host, claimableState) {
              switch (claimableState) {
                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE:
                  return host.pmemStorage[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ONLY_MANAGED_BY_VSAN];

                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE:
                  return host.pmemStorage[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].ELIGIBLE];

                case _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].NOT_USABLE:
                  return host.pmemStorage[_generated_availability_state__WEBPACK_IMPORTED_MODULE_5__["AvailabilityState"].INELIGIBLE];
              }
            }
          }, {
            key: "getClaimDistribution",
            value: function getClaimDistribution(host) {
              var claimDistribution = new Map();
              [_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE, _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE, _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].NOT_USABLE].forEach(function (claimableState) {
                return claimDistribution.set(claimableState, DiskMgmtHostUtil.getDistributionCount(host, claimableState));
              });
              return claimDistribution;
            }
          }, {
            key: "orderHostsByHealth",
            value: function orderHostsByHealth(hosts) {
              hosts.sort(function (h1, h2) {
                return DiskMgmtHostUtil.getHealthKeyOrderPriority(DiskMgmtHostUtil.getHealthKey(h1)) - DiskMgmtHostUtil.getHealthKeyOrderPriority(DiskMgmtHostUtil.getHealthKey(h2));
              });
            }
          }, {
            key: "getDistributionCount",
            value: function getDistributionCount(host, claimableState) {
              return DiskMgmtHostUtil.getDisks(host, claimableState).length + DiskMgmtHostUtil.getPmemStorage(host, claimableState).length;
            }
          }, {
            key: "getHealthKeyOrderPriority",
            value: function getHealthKeyOrderPriority(healthKey) {
              switch (healthKey) {
                case DiskMgmtHostUtil.UNHEALTHY_MSG_KEY:
                  return 1;

                case _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].LOCKED_MSG_KEY:
                  return 2;

                case DiskMgmtHostUtil.UNKNOWN_MSG_KEY:
                  return 3;

                case _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].UNMOUNTED_MSG_KEY:
                  return 4;

                case DiskMgmtHostUtil.HEALTHY_MSG_KEY:
                  return 5;

                default:
                  return Number.MAX_SAFE_INTEGER;
              }
            }
          }, {
            key: "getEligibleDiskCount",
            value: function getEligibleDiskCount(hostList) {
              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(hostList)) {
                return 0;
              }

              return hostList.filter(function (host) {
                return host.state === _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].connected;
              }).filter(function (host) {
                return !host.isWitnessHost;
              }).reduce(function (sum, host) {
                return sum += DiskMgmtHostUtil.getClaimDistribution(host).get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE);
              }, 0);
            }
          }]);

          return DiskMgmtHostUtil;
        }();

        DiskMgmtHostUtil.HEALTHY_MSG_KEY = "vsan.host.healthy";
        DiskMgmtHostUtil.UNHEALTHY_MSG_KEY = "vsan.host.unhealthy";
        DiskMgmtHostUtil.UNKNOWN_MSG_KEY = "vsan.host.unknown";
        /**
         * Returns unique group keys of a host, excluding unused group(represented as undefined)
         */

        DiskMgmtHostUtil.getGroupTypeKeys = function (host) {
          return host.diskGroups.map(function (group) {
            return _util_disk_mgmt_disk_group_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskGroupUtil"].getKey(group);
          }).filter(function (v, i, a) {
            return v && a.indexOf(v) === i;
          }); // removes empty and duplicate keys.
        };

        DiskMgmtHostUtil.getClaimedDisksLabel = function (host) {
          var claimDistribution = DiskMgmtHostUtil.getClaimDistribution(host);
          return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.manage.diskManagement.hostList.disksInUse.label", claimDistribution.get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE), claimDistribution.get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].IN_USE) + claimDistribution.get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["ClaimableState"].USABLE));
        };

        return DiskMgmtHostUtil;
      }();
      /***/

    },

    /***/
    "9lKY":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/common/service/navigation/model/knowledge-base-id.ts ***!
      \***************************************************************************/

    /*! exports provided: KnowledgeBaseId */

    /***/
    function lKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KnowledgeBaseId", function () {
        return KnowledgeBaseId;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * IDs used in external KB link navigation
       */


      var KnowledgeBaseId = /*@__PURE__*/function (KnowledgeBaseId) {
        KnowledgeBaseId["PRECHECK_PCP"] = "83954";
        KnowledgeBaseId["VIRTUAL_OBJECTS"] = "2108319";
        KnowledgeBaseId["UPGRADE"] = "2148493";
        KnowledgeBaseId["PERFORMANCE_DIAGNOSTICS"] = "2148770";
        KnowledgeBaseId["SUPPORT_INSIGHT"] = "60206";
        return KnowledgeBaseId;
      }({});
      /***/

    },

    /***/
    "GyAb":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/common/util/disk-mgmt-disk-group.util.ts ***!
      \***************************************************************/

    /*! exports provided: DiskMgmtDiskGroupUtil, DiskGroupKey, VsanDiskGroupLabelFormat */

    /***/
    function GyAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskMgmtDiskGroupUtil", function () {
        return DiskMgmtDiskGroupUtil;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskGroupKey", function () {
        return DiskGroupKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDiskGroupLabelFormat", function () {
        return VsanDiskGroupLabelFormat;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/disk-group-type */
      "PUJm");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _component_diskmgmt_model_storage_identifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/diskmgmt/model/storage-identifier */
      "vSc5");

      var DiskMgmtDiskGroupUtil = /*@__PURE__*/function () {
        var DiskMgmtDiskGroupUtil = /*#__PURE__*/function () {
          function DiskMgmtDiskGroupUtil() {
            _classCallCheck(this, DiskMgmtDiskGroupUtil);
          }

          _createClass(DiskMgmtDiskGroupUtil, null, [{
            key: "isVsanDiskGroup",
            value: function isVsanDiskGroup(diskGroup) {
              return [_generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH, _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].HYBRID].includes(diskGroup.diskGroupType);
            }
          }, {
            key: "isAllFlashDiskGroup",
            value: function isAllFlashDiskGroup(diskGroup) {
              return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH;
            }
          }, {
            key: "isVsanDirectDiskGroup",
            value: function isVsanDirectDiskGroup(diskGroup) {
              return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].VSAN_DIRECT;
            }
          }, {
            key: "isPmemDiskGroup",
            value: function isPmemDiskGroup(diskGroup) {
              return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].PMEM;
            }
          }, {
            key: "isVsanMaxSingleTier",
            value: function isVsanMaxSingleTier(diskGroup) {
              return diskGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].SINGLE_TIER;
            }
          }, {
            key: "isUnusedDiskGroup",
            value: function isUnusedDiskGroup(storageGroup) {
              return storageGroup.diskGroupType === _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].UNUSED;
            }
          }, {
            key: "getState",
            value: function getState(diskGroup) {
              if (!DiskMgmtDiskGroupUtil.isVsanDiskGroup(diskGroup)) {
                return "";
              }

              return diskGroup.isMounted ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.mounted") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.unmounted");
            }
          }, {
            key: "getHealthKey",
            value: function getHealthKey(group) {
              if (!DiskMgmtDiskGroupUtil.isVsanDiskGroup(group)) {
                return "";
              }

              if (group.isLocked) {
                return DiskMgmtDiskGroupUtil.LOCKED_MSG_KEY;
              }

              if (!group.isMounted) {
                return DiskMgmtDiskGroupUtil.UNMOUNTED_MSG_KEY;
              }

              return group.disks.every(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].isHealthy) ? DiskMgmtDiskGroupUtil.HEALTHY_MSG_KEY : DiskMgmtDiskGroupUtil.UNHEALTHY_MSG_KEY;
            }
          }, {
            key: "getKey",
            value: function getKey(group) {
              if (DiskMgmtDiskGroupUtil.isVsanDiskGroup(group) || DiskMgmtDiskGroupUtil.isVsanMaxSingleTier(group)) {
                return DiskGroupKey.VSAN;
              } else if (DiskMgmtDiskGroupUtil.isVsanDirectDiskGroup(group)) {
                return DiskGroupKey.VSAN_DIRECT;
              } else if (DiskMgmtDiskGroupUtil.isPmemDiskGroup(group)) {
                return DiskGroupKey.PMEM;
              }
            }
          }, {
            key: "getLabel",
            value: function getLabel(diskGroup, labelFormat) {
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
          }, {
            key: "getVsanLabel",
            value: function getVsanLabel(uuid, labelFormat) {
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
          }, {
            key: "getType",
            value: function getType(diskGroup) {
              switch (diskGroup.diskGroupType) {
                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].ALL_FLASH:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.allFlash");

                case _generated_disk_group_type__WEBPACK_IMPORTED_MODULE_1__["DiskGroupType"].HYBRID:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.diskGroup.type.hybrid");

                default:
                  return "";
              }
            }
          }, {
            key: "getAggregatedFsVersion",
            value: function getAggregatedFsVersion(diskGroup) {
              if (!DiskMgmtDiskGroupUtil.isVsanDiskGroup(diskGroup)) {
                return "";
              }

              var cacheDisk = diskGroup.disks.find(function (disk) {
                return disk.isMappedAsCache;
              });
              return cacheDisk ? _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].getFormatVersion(cacheDisk.diskStatus) : "";
            }
          }, {
            key: "getDataMigrationPrecheckLabel",
            value: function getDataMigrationPrecheckLabel(clusterCapabilities) {
              return clusterCapabilities.isDiskResourcePrecheckSupported ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.actions.goToPrecheckDataMigration.label") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.actions.precheckDiskGroupEvacuation.label");
            }
          }, {
            key: "findGroupByStorage",
            value: function findGroupByStorage(diskGroups, storage) {
              return diskGroups.find(function (group) {
                return group.disks && group.disks.some(function (disk) {
                  return _component_diskmgmt_model_storage_identifier__WEBPACK_IMPORTED_MODULE_3__["StorageIdentifier"].areEqual(disk, storage);
                }) || group.pmemStorage && group.pmemStorage.some(function (disk) {
                  return _component_diskmgmt_model_storage_identifier__WEBPACK_IMPORTED_MODULE_3__["StorageIdentifier"].areEqual(disk, storage);
                });
              });
            }
          }]);

          return DiskMgmtDiskGroupUtil;
        }();

        DiskMgmtDiskGroupUtil.HEALTHY_MSG_KEY = "vsan.host.healthy";
        DiskMgmtDiskGroupUtil.UNHEALTHY_MSG_KEY = "vsan.host.unhealthy";
        DiskMgmtDiskGroupUtil.LOCKED_MSG_KEY = "vsan.host.locked";
        DiskMgmtDiskGroupUtil.UNMOUNTED_MSG_KEY = "vsan.na.label";

        DiskMgmtDiskGroupUtil.getBreadcrumbPreselectedDiskGroup = function (host) {
          return (host === null || host === void 0 ? void 0 : host.isSingleTierEnabled) ? host.diskGroups[0] : null;
        };

        return DiskMgmtDiskGroupUtil;
      }();

      var DiskGroupKey = /*@__PURE__*/function (DiskGroupKey) {
        DiskGroupKey["VSAN"] = "vsan.manage.diskManagement.hostList.contributesTo.label.vsan";
        DiskGroupKey["VSAN_DIRECT"] = "vsan.manage.diskManagement.hostList.contributesTo.label.vsanDirect";
        DiskGroupKey["PMEM"] = "vsan.manage.diskManagement.hostList.contributesTo.label.pmem";
        return DiskGroupKey;
      }({});

      var VsanDiskGroupLabelFormat = /*@__PURE__*/function (VsanDiskGroupLabelFormat) {
        VsanDiskGroupLabelFormat[VsanDiskGroupLabelFormat["TYPE"] = 0] = "TYPE";
        VsanDiskGroupLabelFormat[VsanDiskGroupLabelFormat["UUID"] = 1] = "UUID";
        VsanDiskGroupLabelFormat[VsanDiskGroupLabelFormat["TYPE_AND_UUID"] = 2] = "TYPE_AND_UUID";
        return VsanDiskGroupLabelFormat;
      }({});
      /***/

    },

    /***/
    "Ndfo":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/common/component/upgrade/upgrade.service.ts ***!
      \******************************************************************/

    /*! exports provided: UpgradeService */

    /***/
    function Ndfo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpgradeService", function () {
        return UpgradeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_upgrade_upgrade_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/upgrade/upgrade.data */
      "+Sd+");
      /* harmony import */


      var _util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/disk-mgmt-host.util */
      "715e");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * Provides data for disks and objects format version.
       */


      var UpgradeService = /*#__PURE__*/function () {
        function UpgradeService(upgradePropertyProvider, upgradeMutationProvider, diskMgmtService) {
          _classCallCheck(this, UpgradeService);

          this.upgradePropertyProvider = upgradePropertyProvider;
          this.upgradeMutationProvider = upgradeMutationProvider;
          this.diskMgmtService = diskMgmtService;
        }

        _createClass(UpgradeService, [{
          key: "getUpgradeData",
          value: function getUpgradeData(clusterRef) {
            var _this = this;

            return new Promise(function (accept, reject) {
              _this.diskMgmtService.listHosts(clusterRef).then(function (hostDisksData) {
                accept(_this.getUpgradeOnlyData(clusterRef, hostDisksData));
              })["catch"](function (error) {
                return reject(error);
              });
            });
          }
        }, {
          key: "getUpgradeOnlyData",
          value: function getUpgradeOnlyData(clusterRef, hostDisks) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var claimedDisks, upgradeStatusData, hasOldVsanObject, latestVersion, _yield$Promise$all, _yield$Promise$all2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      claimedDisks = this.getClaimedDisks(hostDisks);

                      if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].isEmpty(claimedDisks)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", new _component_upgrade_upgrade_data__WEBPACK_IMPORTED_MODULE_1__["UpgradeData"](claimedDisks, null, null, null));

                    case 3:
                      _context.next = 5;
                      return Promise.all([this.getUpgradeStatus(clusterRef), this.hasOldFormatObjects(clusterRef), this.getLatestVsanVersion(clusterRef)]);

                    case 5:
                      _yield$Promise$all = _context.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                      upgradeStatusData = _yield$Promise$all2[0];
                      hasOldVsanObject = _yield$Promise$all2[1];
                      latestVersion = _yield$Promise$all2[2];
                      return _context.abrupt("return", new _component_upgrade_upgrade_data__WEBPACK_IMPORTED_MODULE_1__["UpgradeData"](claimedDisks, upgradeStatusData, hasOldVsanObject, latestVersion));

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getUpgradeStatus",
          value: function getUpgradeStatus(clusterRef) {
            return this.upgradePropertyProvider.getVsanUpgradeStatus(clusterRef);
          }
        }, {
          key: "hasOldFormatObjects",
          value: function hasOldFormatObjects(clusterRef) {
            return this.upgradePropertyProvider.getHasOldVsanObject(clusterRef);
          }
        }, {
          key: "getLatestVsanVersion",
          value: function getLatestVsanVersion(clusterRef) {
            return this.upgradePropertyProvider.getLatestVsanVersion(clusterRef);
          }
        }, {
          key: "isUpgradeNeeded",
          value: function isUpgradeNeeded(upgradeData) {
            if (upgradeData.upgradeDiskData.hasMixedDiskVersions) {
              // there are older disks
              return true;
            } else if (upgradeData.upgradeDiskData.minVersion >= upgradeData.latestVersion) {
              // disks are at latest version, check for old objects
              return upgradeData.hasOldVsanObject;
            } // All disks are on older versions


            return true;
          }
        }, {
          key: "precheckUpgrade",
          value: function precheckUpgrade(contextObject) {
            return this.upgradeMutationProvider.performUpgradePreflightAsyncCheck(contextObject);
          }
        }, {
          key: "getClaimedDisks",
          value: function getClaimedDisks(hostDisksData) {
            var disks = [];
            hostDisksData.forEach(function (host) {
              disks = disks.concat(_util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtHostUtil"].getDisks(host, _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_3__["ClaimableState"].IN_USE));
            });
            return disks;
          }
        }]);

        return UpgradeService;
      }();
      /***/

    },

    /***/
    "vSc5":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/storage-identifier.ts ***!
      \****************************************************************************/

    /*! exports provided: StorageIdentifier */

    /***/
    function vSc5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageIdentifier", function () {
        return StorageIdentifier;
      });
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * uuid is required for identification. Name is required for screen reader
       */


      var StorageIdentifier = /*#__PURE__*/function () {
        function StorageIdentifier(uuid, name) {
          _classCallCheck(this, StorageIdentifier);

          this.uuid = uuid;
          this.name = name;
        }

        _createClass(StorageIdentifier, null, [{
          key: "areEqual",
          value: function areEqual(value1, value2) {
            return value1 && value2 && value1.uuid === value2.uuid;
          }
        }]);

        return StorageIdentifier;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=42-es5.js.map