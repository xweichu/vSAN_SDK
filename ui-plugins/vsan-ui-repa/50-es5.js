(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50], {
    /***/
    "3XD8":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/component/general-settings/utils/default-rekey-values.ts ***!
      \**************************************************************************************/

    /*! exports provided: DefaultRekeyValues */

    /***/
    function XD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultRekeyValues", function () {
        return DefaultRekeyValues;
      });
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DefaultRekeyValues = /*@__PURE__*/function (DefaultRekeyValues) {
        DefaultRekeyValues[DefaultRekeyValues["SIX_HOURS"] = 360] = "SIX_HOURS";
        DefaultRekeyValues[DefaultRekeyValues["TWELVE_HOURS"] = 720] = "TWELVE_HOURS";
        DefaultRekeyValues[DefaultRekeyValues["ONE_DAY"] = 1440] = "ONE_DAY";
        DefaultRekeyValues[DefaultRekeyValues["THREE_DAYS"] = 4320] = "THREE_DAYS";
        DefaultRekeyValues[DefaultRekeyValues["SEVEN_DAYS"] = 10080] = "SEVEN_DAYS";
        return DefaultRekeyValues;
      }({});
      /***/

    },

    /***/
    "AJMJ":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/general-settings/utils/rekey-interval.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: RekeyIntervalComponent */

    /***/
    function AJMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RekeyIntervalComponent", function () {
        return RekeyIntervalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/general-settings/utils/default-rekey-values */
      "3XD8");
      /* Copyright 2019-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var RekeyMode = /*@__PURE__*/function (RekeyMode) {
        RekeyMode[RekeyMode["DEFAULT"] = 0] = "DEFAULT";
        RekeyMode[RekeyMode["CUSTOM"] = 1] = "CUSTOM";
        return RekeyMode;
      }({});

      var RekeyIntervalComponent = /*@__PURE__*/function () {
        var RekeyIntervalComponent = /*#__PURE__*/function () {
          function RekeyIntervalComponent() {
            _classCallCheck(this, RekeyIntervalComponent);

            this.rekeyIntervalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
            this.rekeyDefaultValuesMap = [];
            this.RekeyMode = RekeyMode;
            this.DEFAULT_REKEY_HELPER_TEXT = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("configureVsan.settings.dataInTransitEncryption.rekey.mode.default.label");
            this.CUSTOM_REKEY_HELPER_TEXT = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("configureVsan.settings.dataInTransitEncryption.rekey.mode.custom.minutesLabel", RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MIN, RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MAX);
          }

          _createClass(RekeyIntervalComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.rekeyDefaultValuesMap = this.getRekeyDefaultIntervals();

                        if (this.isDataInTransitEncryptionEnabled) {
                          _context.next = 5;
                          break;
                        }

                        this.selectedRekeyMode = RekeyMode.DEFAULT;
                        this.resetDefaultRekeyInterval();
                        return _context.abrupt("return");

                      case 5:
                        this.selectedRekeyMode = this.isRekeyIntervalAmongDefaultValues(this.rekeyInterval) ? RekeyMode.DEFAULT : RekeyMode.CUSTOM;

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "onRekeyModeChange",
            value: function onRekeyModeChange() {
              if (this.isDefaultRekeyInterval()) {
                this.resetDefaultRekeyInterval();
              }
            }
          }, {
            key: "onRekeyIntervalChange",
            value: function onRekeyIntervalChange() {
              // Parse to number because when selection comes from dropdown list then value is of type string
              this.rekeyIntervalChange.emit(Number(this.rekeyInterval));
            }
          }, {
            key: "isDefaultRekeyInterval",
            value: function isDefaultRekeyInterval() {
              return Number(this.selectedRekeyMode) === RekeyMode.DEFAULT;
            }
          }, {
            key: "isCustomRekeyInterval",
            value: function isCustomRekeyInterval() {
              return Number(this.selectedRekeyMode) === RekeyMode.CUSTOM;
            }
          }, {
            key: "getRekeyDefaultIntervals",
            value: function getRekeyDefaultIntervals() {
              return [{
                name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.hours", 6),
                valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].SIX_HOURS
              }, {
                name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.hours", 12),
                valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].TWELVE_HOURS
              }, {
                name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.day"),
                valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].ONE_DAY
              }, {
                name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.days", 3),
                valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].THREE_DAYS
              }, {
                name: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.time.common.days", 7),
                valueInMinutes: _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].SEVEN_DAYS
              }];
            }
          }, {
            key: "resetDefaultRekeyInterval",
            value: function resetDefaultRekeyInterval() {
              this.rekeyInterval = _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].ONE_DAY;
              this.onRekeyIntervalChange();
            }
          }, {
            key: "isRekeyIntervalAmongDefaultValues",
            value: function isRekeyIntervalAmongDefaultValues(rekeyInterval) {
              return this.rekeyDefaultValuesMap.some(function (defaultRekeyValue) {
                return defaultRekeyValue.valueInMinutes === rekeyInterval;
              });
            }
          }]);

          return RekeyIntervalComponent;
        }(); // Min rekey interval is 30 minutes


        RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MIN = 30; // Max rekey interval is 7 days

        RekeyIntervalComponent.DATA_IN_TRANSIT_REKEY_MAX = _component_general_settings_utils_default_rekey_values__WEBPACK_IMPORTED_MODULE_3__["DefaultRekeyValues"].SEVEN_DAYS;
        return RekeyIntervalComponent;
      }();
      /***/

    },

    /***/
    "b8qf":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/common/component/general-settings/vsan-general-config.service.ts ***!
      \***************************************************************************************/

    /*! exports provided: VsanGeneralConfigService */

    /***/
    function b8qf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanGeneralConfigService", function () {
        return VsanGeneralConfigService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _general_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general-config.data */
      "lFJw");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");

      var VsanGeneralConfigService = /*#__PURE__*/function () {
        function VsanGeneralConfigService(encryptionProvider, permissionService, vsanConfigService, capabilityProvider, clusterPowerService) {
          _classCallCheck(this, VsanGeneralConfigService);

          this.encryptionProvider = encryptionProvider;
          this.permissionService = permissionService;
          this.vsanConfigService = vsanConfigService;
          this.capabilityProvider = capabilityProvider;
          this.clusterPowerService = clusterPowerService;
        }
        /**
         * Fetch the vSAN config settings for the given cluster ref
         */


        _createClass(VsanGeneralConfigService, [{
          key: "getVsanGeneralConfigData",
          value: function getVsanGeneralConfigData(clusterRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var vsanConfigSpec, vcCapabilitiesData, clusterCapabilitiesData, clusterPowerState, clusterPermissions, vcPermissions, kmipClusterData, _yield$Promise$all, _yield$Promise$all2;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Promise.all([this.vsanConfigService.getVsanConfigSpec(clusterRef), this.encryptionProvider.getKmipClusterData(clusterRef), this.capabilityProvider.getVcCapabilityData(clusterRef), this.capabilityProvider.getClusterCapabilityData(clusterRef), this.clusterPowerService.getPowerState(clusterRef), this.queryClusterPermissions(clusterRef), this.queryVcPermissions(clusterRef)]);

                    case 2:
                      _yield$Promise$all = _context2.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 7);
                      vsanConfigSpec = _yield$Promise$all2[0];
                      kmipClusterData = _yield$Promise$all2[1];
                      vcCapabilitiesData = _yield$Promise$all2[2];
                      clusterCapabilitiesData = _yield$Promise$all2[3];
                      clusterPowerState = _yield$Promise$all2[4];
                      clusterPermissions = _yield$Promise$all2[5];
                      vcPermissions = _yield$Promise$all2[6];
                      return _context2.abrupt("return", new _general_config_data__WEBPACK_IMPORTED_MODULE_2__["GeneralConfigData"](vsanConfigSpec, vcCapabilitiesData, clusterCapabilitiesData, clusterPowerState, kmipClusterData, clusterPermissions, vcPermissions));

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "queryClusterPermissions",
          value: function queryClusterPermissions(clusterRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var permissions, clusterPermissions, _i2, _Object$values, permission;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.permissionService.queryPermissions(clusterRef, this.clusterPermissionProperties);

                    case 3:
                      clusterPermissions = _context3.sent;
                      permissions = new Map(_toConsumableArray(Object.entries(clusterPermissions)));
                      _context3.next = 12;
                      break;

                    case 7:
                      _context3.prev = 7;
                      _context3.t0 = _context3["catch"](0);

                      _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug(_context3.t0);

                      permissions = new Map(); // In case of error during permissions' query, set all to true by default

                      for (_i2 = 0, _Object$values = Object.values(this.clusterPermissionProperties); _i2 < _Object$values.length; _i2++) {
                        permission = _Object$values[_i2];
                        permissions.set(permission, true);
                      }

                    case 12:
                      return _context3.abrupt("return", permissions);

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 7]]);
            }));
          }
        }, {
          key: "queryVcPermissions",
          value: function queryVcPermissions(clusterRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var vcRef, permissions, vcPermissions, _i3, _Object$keys, permission;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      vcRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].vcRoot(clusterRef.serverGuid);
                      _context4.prev = 1;
                      _context4.next = 4;
                      return this.permissionService.queryPermissions(vcRef, this.vcPermissionProperties);

                    case 4:
                      vcPermissions = _context4.sent;
                      permissions = new Map(_toConsumableArray(Object.entries(vcPermissions)));
                      _context4.next = 13;
                      break;

                    case 8:
                      _context4.prev = 8;
                      _context4.t0 = _context4["catch"](1);

                      _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].debug(_context4.t0);

                      permissions = new Map(); // In case of error during permissions' query, set all to true by default

                      for (_i3 = 0, _Object$keys = Object.keys(this.vcPermissionProperties); _i3 < _Object$keys.length; _i3++) {
                        permission = _Object$keys[_i3];
                        permissions.set(permission, true);
                      }

                    case 13:
                      return _context4.abrupt("return", permissions);

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 8]]);
            }));
          }
        }, {
          key: "clusterPermissionProperties",
          get: function get() {
            return [_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].EDIT_CLUSTER(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].CONFIG_STORAGE(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEYS(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_ENCRYPTION_POLICIES(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEY_SERVERS(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].SHALLOW_REKEY(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].SHUTDOWN_CLUSTER()];
          }
        }, {
          key: "vcPermissionProperties",
          get: function get() {
            return [_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].READ_POLICIES(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].GLOBAL_VCSERVER(), _generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].GLOBAL_SETTINGS()];
          }
        }]);

        return VsanGeneralConfigService;
      }();
      /***/

    },

    /***/
    "lFJw":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/general-settings/general-config.data.ts ***!
      \*******************************************************************************/

    /*! exports provided: GeneralConfigData */

    /***/
    function lFJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralConfigData", function () {
        return GeneralConfigData;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service.data */
      "yWEd");
      /* harmony import */


      var _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/general-settings/utils/rekey-interval.component */
      "AJMJ");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* Copyright 2016-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var GeneralConfigData = /*#__PURE__*/function () {
        function GeneralConfigData(vsanConfigSpec, vcCapabilityData, clusterCapabilityData, clusterPowerState, kmipClusterData, clusterPermissions, vcPermissions) {
          _classCallCheck(this, GeneralConfigData);

          this.vsanConfigSpec = vsanConfigSpec;
          this.vcCapabilityData = vcCapabilityData;
          this.clusterCapabilityData = clusterCapabilityData;
          this.clusterPowerState = clusterPowerState;

          if (kmipClusterData && kmipClusterData.availableKmipClusters) {
            this.availableKmipClusters = kmipClusterData.availableKmipClusters;
          }

          this.clusterPermissions = clusterPermissions;
          this.vcPermissions = vcPermissions;
          this.hasEncryptionPermissions = clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEYS()) && clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_ENCRYPTION_POLICIES()) && clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEY_SERVERS());
          this.hasDataInTransitEncryptionPermissions = clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].MANAGE_KEYS());
        }

        _createClass(GeneralConfigData, [{
          key: "diskClaimPolicyText",
          get: function get() {
            return this.vsanConfigSpec.autoClaimDisks ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.auto") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.manual");
          }
        }, {
          key: "diskClaimPolicies",
          get: function get() {
            return [_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.auto"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.diskClaimPolicy.manual")];
          }
        }, {
          key: "isSpaceEfficiencySupported",
          get: function get() {
            return this.clusterCapabilityData.isDeduplicationAndCompressionSupported || this.clusterCapabilityData.isCompressionOnlySupported;
          }
        }, {
          key: "wipeDiskText",
          get: function get() {
            if (!this.vsanConfigSpec.enableDataAtRestEncryption) {
              return "";
            }

            if (this.vsanConfigSpec.eraseDisksBeforeUse) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.encryptionState.enabled");
            } else {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.encryptionState.disabled");
            }
          }
        }, {
          key: "dataAtRestEncryptionServiceStatus",
          get: function get() {
            if (!this.clusterCapabilityData.isEncryptionSupported) {
              return _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].NOT_SUPPORTED;
            }

            return this.vsanConfigSpec.enableDataAtRestEncryption ? _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].ENABLED : _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].DISABLED;
          }
        }, {
          key: "rekeyEnabled",
          get: function get() {
            return this.vsanConfigSpec.kmipClusterId && this.clusterCapabilityData.isEncryptionSupported && this.dataAtRestEncryptionServiceStatus === _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"].ENABLED;
          }
        }, {
          key: "validateConfig",
          value: function validateConfig(vsanConfigSpec) {
            var validationErrors = [];

            if (vsanConfigSpec.enableDataAtRestEncryption && this.hasEncryptionPermissions) {
              // Validate whether encryption settings are complete
              if (!vsanConfigSpec.kmipClusterId) {
                validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.generalConfig.kmsNotSelected.warning"));
              }
            }

            if (vsanConfigSpec.enableDataInTransitEncryption && this.hasDataInTransitEncryptionPermissions) {
              var rekeyInterval = vsanConfigSpec.rekeyInterval;

              if (!rekeyInterval || rekeyInterval < _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MIN || rekeyInterval > _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MAX) {
                var error = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("configureVsan.settings.dataInTransitEncryption.rekey.rangeError", _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MIN, _component_general_settings_utils_rekey_interval_component__WEBPACK_IMPORTED_MODULE_2__["RekeyIntervalComponent"].DATA_IN_TRANSIT_REKEY_MAX);

                validationErrors.push(error);
              }
            }

            return validationErrors;
          }
        }, {
          key: "clone",
          value: function clone() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects({}, this);
          }
        }, {
          key: "isConfigChanged",
          value: function isConfigChanged(originalConfigSpec) {
            if (!Object.is(originalConfigSpec.enableDataInTransitEncryption, this.vsanConfigSpec.enableDataInTransitEncryption) || !Object.is(originalConfigSpec.enableDataAtRestEncryption, this.vsanConfigSpec.enableDataAtRestEncryption) || !Object.is(originalConfigSpec.spaceEfficiencyConfig, this.vsanConfigSpec.spaceEfficiencyConfig) || !Object.is(originalConfigSpec.autoClaimDisks, this.vsanConfigSpec.autoClaimDisks) || !Object.is(originalConfigSpec.enableRdma, this.vsanConfigSpec.enableRdma) || !Object.is(originalConfigSpec.advancedOptions.largeClusterSupportEnabled, this.vsanConfigSpec.advancedOptions.largeClusterSupportEnabled)) {
              return true;
            }

            if (originalConfigSpec.enableDataInTransitEncryption && !Object.is(originalConfigSpec.rekeyInterval, this.vsanConfigSpec.rekeyInterval)) {
              return true;
            }

            if (originalConfigSpec.enableDataAtRestEncryption) {
              if (!Object.is(originalConfigSpec.kmipClusterId, this.vsanConfigSpec.kmipClusterId) || !Object.is(originalConfigSpec.eraseDisksBeforeUse, this.vsanConfigSpec.eraseDisksBeforeUse)) {
                return true;
              }
            }

            if (originalConfigSpec.advancedOptions.capacityReservationConfig !== null) {
              if (!Object.is(originalConfigSpec.advancedOptions.capacityReservationConfig.vsanOperationReservation, this.vsanConfigSpec.advancedOptions.capacityReservationConfig.vsanOperationReservation) || !Object.is(originalConfigSpec.advancedOptions.capacityReservationConfig.hostFailureReservation, this.vsanConfigSpec.advancedOptions.capacityReservationConfig.hostFailureReservation)) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "cloneVsanConfigSpec",
          value: function cloneVsanConfigSpec() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects({}, this.vsanConfigSpec);
          }
        }]);

        return GeneralConfigData;
      }();
      /***/

    },

    /***/
    "yWEd":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/component/general-settings/service.data.ts ***!
      \************************************************************************/

    /*! exports provided: ServiceStatus */

    /***/
    function yWEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceStatus", function () {
        return ServiceStatus;
      });
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ServiceStatus = /*@__PURE__*/function (ServiceStatus) {
        ServiceStatus[ServiceStatus["UNKNOWN"] = -1] = "UNKNOWN";
        ServiceStatus[ServiceStatus["ENABLED"] = 0] = "ENABLED";
        ServiceStatus[ServiceStatus["DISABLED"] = 1] = "DISABLED";
        ServiceStatus[ServiceStatus["NOT_SUPPORTED"] = 2] = "NOT_SUPPORTED";
        return ServiceStatus;
      }({});
      /***/

    }
  }]);
})();
//# sourceMappingURL=50-es5.js.map