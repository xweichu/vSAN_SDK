(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52], {
    /***/
    "2xAL":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-disks.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ClaimDisksComponent */

    /***/
    function xAL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDisksComponent", function () {
        return ClaimDisksComponent;
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


      var _component_diskmgmt_model_claim_host_list_item_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-host-list-item.data */
      "pAkp");
      /* harmony import */


      var _component_diskmgmt_model_disks_claiming_config_info_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/diskmgmt/model/disks-claiming-config-info.data */
      "LBim");
      /* harmony import */


      var _component_diskmgmt_model_vendor_map_result_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/diskmgmt/model/vendor-map-result.data */
      "BNOn");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _generated_query_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/query-util */
      "onOt");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _generated_vsan_claim_host_disk_mappings_spec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/vsan-claim-host-disk-mappings-spec */
      "Ydj5");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimDisksComponent = /*@__PURE__*/function () {
        var ClaimDisksComponent = /*#__PURE__*/function () {
          function ClaimDisksComponent(dataService, disksPropertyRetriever, dataAccessService, vsanConfigService, capabilityProvider) {
            _classCallCheck(this, ClaimDisksComponent);

            this.dataService = dataService;
            this.disksPropertyRetriever = disksPropertyRetriever;
            this.dataAccessService = dataAccessService;
            this.vsanConfigService = vsanConfigService;
            this.capabilityProvider = capabilityProvider;
            this.DatastoreType = _generated_datastore_type__WEBPACK_IMPORTED_MODULE_7__["DatastoreType"];
            /**
             * Whether the component is used in single page dialog or a wizard.
             */

            this.isStandalone = true;
            this.configUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.disksClaimingConfigUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.configValid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.datastoreTypes = [];
            this.isManagedVmfsSupported = false;
            this.allHostsInCluster = [];
            this.disksByVendor = [];
            this.disksClaimingConfigInfo = new _component_diskmgmt_model_disks_claiming_config_info_data__WEBPACK_IMPORTED_MODULE_3__["DisksClaimingConfigInfo"]();
            this.useRecommendedClaimOptions = true;
          }

          _createClass(ClaimDisksComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _yield$Promise$all, _yield$Promise$all2;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.clusterRef = this.clusterRef || _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject;
                        _context.next = 3;
                        return Promise.all([this.queryHostDsProperties(), this.capabilityProvider.isManagedVmfsSupportedOnVc(this.clusterRef)]);

                      case 3:
                        _yield$Promise$all = _context.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        this.hostProperties = _yield$Promise$all2[0];
                        this.isManagedVmfsSupported = _yield$Promise$all2[1];
                        this.initializeDisksData();

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "queryHostDsProperties",
            value: function queryHostDsProperties() {
              return this.getPropertiesForHosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])(function (properties) {
                // group host properties by host
                var hostProperties = new Map();
                var hostKey = null;

                var _iterator = _createForOfIteratorHelper(properties),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var property = _step.value;

                    if (!property.resourceObject) {
                      continue;
                    }

                    hostKey = property.resourceObject.value;

                    if (!hostProperties.has(hostKey)) {
                      hostProperties.set(hostKey, []);
                    }

                    hostProperties.get(hostKey).push(property);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                return hostProperties;
              })).toPromise();
            }
          }, {
            key: "getPropertiesForHosts",
            value: function getPropertiesForHosts() {
              if (_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].repa) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["from"])(this.disksPropertyRetriever.getPropertiesForHosts(this.clusterRef));
              } else {
                // TODO (REPA) Delete once the JAVA is removed
                return this.dataAccessService.getPropertiesForRelatedObject(_service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].uid(this.clusterRef), [_generated_query_util__WEBPACK_IMPORTED_MODULE_6__["QueryUtil"].NAME_PROPERTY(), _generated_query_util__WEBPACK_IMPORTED_MODULE_6__["QueryUtil"].HOST_VERSION_PROPERTY(), _generated_query_util__WEBPACK_IMPORTED_MODULE_6__["QueryUtil"].PRIMARY_ICON_ID_PROPERTY(), _generated_query_util__WEBPACK_IMPORTED_MODULE_6__["QueryUtil"].VSAN_HOST_STORAGE_ADAPTER_DEVICES()], _generated_query_util__WEBPACK_IMPORTED_MODULE_6__["QueryUtil"].CLUSTER_HOST_PROPERTY(), _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObjectUtils"].CLUSTER);
              }
            }
          }, {
            key: "initializeDisksData",
            value: function initializeDisksData() {
              this.allHostsInCluster = this.getClusterHostsInInitialState();
              this.datastoreTypes = _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_14__["DiskMgmtUtil"].orderDatastoreTypes(this.getDatastoreTypes(this.allHostsInCluster));
              this.selectedDatastoreType = this.getInitialSelectedDatastoreType(this.datastoreTypes);
              this.disksClaimingConfigInfo.setInitialState(this.allHostsInCluster);
              this.disksByVendor = this.getDisksByVendor(this.getHostEligibleDisks());
              this.update();
            }
          }, {
            key: "getDatastoreTypes",
            value: function getDatastoreTypes(hosts) {
              var _ref;

              return Array.from(new Set((_ref = []).concat.apply(_ref, _toConsumableArray(hosts.map(function (host) {
                return host.availableDatastoreTypes;
              })))));
            }
          }, {
            key: "getInitialSelectedDatastoreType",
            value: function getInitialSelectedDatastoreType(datastoreTypes) {
              return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_15__["VsanUiUtils"].isEmpty(datastoreTypes) ? datastoreTypes[0] : _generated_datastore_type__WEBPACK_IMPORTED_MODULE_7__["DatastoreType"].VSAN;
            }
          }, {
            key: "getClusterHostsInInitialState",
            value: function getClusterHostsInInitialState() {
              var _this = this;

              var allHostsInCluster = [];
              this.hostProperties.forEach(function (hostProperties, hostKey) {
                allHostsInCluster.push(new _component_diskmgmt_model_claim_host_list_item_data__WEBPACK_IMPORTED_MODULE_2__["ClaimHostListItem"](hostProperties, _this.hostsClaimingData.get(hostKey), _this.useRecommendedClaimOptions));
              });
              return allHostsInCluster;
            }
          }, {
            key: "getHostEligibleDisks",
            value: function getHostEligibleDisks() {
              var disks = [];

              var _iterator2 = _createForOfIteratorHelper(this.allHostsInCluster),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var hostItem = _step2.value;

                  if (hostItem.eligibleDisks) {
                    disks = disks.concat(hostItem.eligibleDisks);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return disks;
            }
          }, {
            key: "update",
            value: function update() {
              this.updateParentItemsClaimOption();
              this.updateHostsClaimingSummary();
              this.updateUsedDisksInfo();
              this.configUpdated.emit(this.getDiskMappings());
            }
          }, {
            key: "updateParentItemsClaimOption",
            value: function updateParentItemsClaimOption() {
              var _iterator3 = _createForOfIteratorHelper(this.allHostsInCluster),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var host = _step3.value;
                  host.updateClaimOption(this.selectedDatastoreType);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var _iterator4 = _createForOfIteratorHelper(this.disksByVendor),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var disk = _step4.value;
                  disk.updateClaimOption(this.selectedDatastoreType);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          }, {
            key: "updateHostsClaimingSummary",
            value: function updateHostsClaimingSummary() {
              var _iterator5 = _createForOfIteratorHelper(this.allHostsInCluster),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var host = _step5.value;
                  host.updateDisksData();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }, {
            key: "updateUsedDisksInfo",
            value: function updateUsedDisksInfo() {
              this.disksClaimingConfigInfo.updateClaimingData(this.allHostsInCluster);
              this.disksClaimingConfigInfo = this.disksClaimingConfigInfo.clone();
              this.disksClaimingConfigUpdated.emit(this.disksClaimingConfigInfo);
            }
          }, {
            key: "getDisksByVendor",
            value: function getDisksByVendor(disks) {
              var _this2 = this;

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_15__["VsanUiUtils"].isEmpty(disks)) {
                return [];
              }

              var vendors = [];
              var vendorToDisks = new Map();
              disks.forEach(function (disk) {
                if (!disk) {
                  return;
                }

                var vendorDiskModelDisks = _this2.getVendorDisksByDiskModel(vendorToDisks, disk.model);

                if (vendorDiskModelDisks.size === 0) {
                  vendors.push(disk.model);
                }

                _this2.getVendorDisksByDiskType(vendorDiskModelDisks, disk.isFlash.toString()).push(disk);
              });
              return new _component_diskmgmt_model_vendor_map_result_data__WEBPACK_IMPORTED_MODULE_4__["VendorMapResult"](vendors, vendorToDisks).result;
            }
          }, {
            key: "getVendorDisksByDiskModel",
            value: function getVendorDisksByDiskModel(vendorToDisks, diskModel) {
              if (!vendorToDisks.has(diskModel)) {
                vendorToDisks.set(diskModel, new Map());
              }

              return vendorToDisks.get(diskModel);
            }
          }, {
            key: "getVendorDisksByDiskType",
            value: function getVendorDisksByDiskType(vendorDiskModelDisks, diskType) {
              if (!vendorDiskModelDisks.has(diskType)) {
                vendorDiskModelDisks.set(diskType, []);
              }

              return vendorDiskModelDisks.get(diskType);
            }
          }, {
            key: "getDiskMappings",
            value: function getDiskMappings() {
              var _this3 = this;

              var diskMappingSpecs = [];
              var isAllFlashSupported = this.isAllFlashSupportedOnEveryHost();
              this.allHostsInCluster.forEach(function (host) {
                var disksToClaim = host.getHostDisksToClaim();

                if (disksToClaim.length !== 0) {
                  diskMappingSpecs.push(_generated_vsan_claim_host_disk_mappings_spec__WEBPACK_IMPORTED_MODULE_8__["VsanClaimHostDiskMappingsSpec"].Factory.create(_this3.clusterRef, host.hostMor, disksToClaim, isAllFlashSupported));
                }
              });
              return diskMappingSpecs;
            }
          }, {
            key: "isAllFlashSupportedOnEveryHost",
            value: function isAllFlashSupportedOnEveryHost() {
              var allFlashSupported = true;

              var _iterator6 = _createForOfIteratorHelper(this.allHostsInCluster),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var host = _step6.value;
                  allFlashSupported = allFlashSupported && host.isAllFlashSupported;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              return allFlashSupported;
            }
          }, {
            key: "getDatastoreTypeLabel",
            value: function getDatastoreTypeLabel(datastoreType) {
              return _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_14__["DiskMgmtUtil"].getLocalizedDatastoreType(datastoreType);
            }
          }, {
            key: "changeDatastoreType",
            value: function changeDatastoreType(datastoreType) {
              this.selectedDatastoreType = datastoreType;
              this.update();
            }
          }]);

          return ClaimDisksComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_11__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ClaimDisksComponent.prototype, "loading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ClaimDisksComponent.prototype, "errorMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_10__["Loader"])({
          srMessage: "vsan.configure.claimDisksPage.title",
          srMessageType: _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_13__["SrMessageType"].PAGE_TITLE
        }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], ClaimDisksComponent.prototype, "ngOnInit", null);
        return ClaimDisksComponent;
      }();
      /***/

    },

    /***/
    "36Ri":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-pmem.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_ClaimForPmemComponent, View_ClaimForPmemComponent_0, View_ClaimForPmemComponent_Host_0, ClaimForPmemComponentNgFactory */

    /***/
    function Ri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimForPmemComponent", function () {
        return RenderType_ClaimForPmemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForPmemComponent_0", function () {
        return View_ClaimForPmemComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForPmemComponent_Host_0", function () {
        return View_ClaimForPmemComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForPmemComponentNgFactory", function () {
        return ClaimForPmemComponentNgFactory;
      });
      /* harmony import */


      var _claim_for_pmem_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./claim-for-pmem.scss.shim.ngstyle */
      "eJNu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validation/validation.component */
      "ie44");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _directive_reactive_forms_disable_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../directive/reactive-forms/disable-control.directive */
      "yMMd");
      /* harmony import */


      var _claim_for_pmem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./claim-for-pmem.component */
      "6oWG");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimForPmemComponent = [_claim_for_pmem_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ClaimForPmemComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ClaimForPmemComponent,
        data: {}
      });

      function View_ClaimForPmemComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "pmem-not-manageable"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = "danger";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.pmem.claim.olderVersionHosts"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimForPmemComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "pmem-limitation"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = "info";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.pmem.claim.limitation"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimForPmemComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-column", [["class", "host-name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_2 = "hostVersion";

          _ck(_v, 4, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.pmem.claim.hostVersion"));

          _ck(_v, 9, 0, currVal_3);
        });
      }

      function View_ClaimForPmemComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _co.hostVersions.get(_v.parent.context.$implicit.hostMor.value);

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForPmemComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 59, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[5, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[7, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForPmemComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 16777216, null, 2, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](38, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 16777216, null, 2, 12, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 0, 4, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid"], ["size", "18"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](58, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          var currVal_11 = !_co.isPmemManageableByVsanOnAllHosts;

          _ck(_v, 24, 0, currVal_11);

          _ck(_v, 27, 0);

          _ck(_v, 31, 0);

          _ck(_v, 35, 0);

          _ck(_v, 41, 0);

          _ck(_v, 45, 0);

          var currVal_27 = "is-solid";
          var currVal_28 = _v.context.$implicit.healthIconClass;

          _ck(_v, 48, 0, currVal_27, currVal_28);

          _ck(_v, 55, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _co.hostIcons.get(_v.context.$implicit.hostMor.value);

          _ck(_v, 18, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.hostName;

          _ck(_v, 21, 0, currVal_10);

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).signpost.length > 0;
          var currVal_14 = "hidden";
          var currVal_15 = "ellipsis";
          var currVal_16 = "nowrap";

          _ck(_v, 26, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

          var currVal_17 = _v.context.$implicit.name;

          _ck(_v, 32, 0, currVal_17);

          var currVal_18 = true;
          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).signpost.length > 0;

          _ck(_v, 34, 0, currVal_18, currVal_19);

          var currVal_20 = _v.context.$implicit.capacity;

          _ck(_v, 38, 0, currVal_20);

          var currVal_21 = true;
          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).signpost.length > 0;
          var currVal_23 = "hidden";
          var currVal_24 = "ellipsis";
          var currVal_25 = "nowrap";

          _ck(_v, 40, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

          var currVal_26 = _v.context.$implicit.healthIconShape;

          _ck(_v, 47, 0, currVal_26);

          var currVal_29 = _v.context.$implicit.healthStatus;

          _ck(_v, 52, 0, currVal_29);

          var currVal_30 = true;
          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).signpost.length > 0;

          _ck(_v, 54, 0, currVal_30, currVal_31);

          var currVal_32 = _v.context.$implicit.state;

          _ck(_v, 58, 0, currVal_32);
        });
      }

      function View_ClaimForPmemComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h5", [["id", "pmem-claim-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForPmemComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForPmemComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 19, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 16777216, null, 0, 7, "input", [["clrCheckbox", ""], ["name", "manage-pmem-by-vsan-toggle"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.managePmemByVsan = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = _co.toggle() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 81920, null, 0, _directive_reactive_forms_disable_control_directive__WEBPACK_IMPORTED_MODULE_12__["DisableControlDirective"], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], {
          disableControl: [0, "disableControl"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 1, 3, "label", [["id", "manage-pmem-by-vsan-toggle-label"]], [[2, "disable-action", null], [1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](30, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 96, "clr-datagrid", [], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 16777216, null, null, 10, "clr-dg-column", [["class", "host-name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 770048, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 147456, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](72, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](73, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForPmemComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 16777216, null, null, 10, "clr-dg-column", [["class", "storage-name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 770048, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 147456, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](88, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 770048, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 147456, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](99, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](100, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 770048, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 147456, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](111, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](112, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 770048, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 147456, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](123, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](124, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForPmemComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 409600, [[2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = !_co.isPmemManageableByVsanOnAllHosts;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _co.isPmemManageableByVsanOnAllHosts;

          _ck(_v, 10, 0, currVal_2);

          _ck(_v, 14, 0);

          var currVal_13 = "manage-pmem-by-vsan-toggle";
          var currVal_14 = _co.managePmemByVsan;

          _ck(_v, 21, 0, currVal_13, currVal_14);

          _ck(_v, 24, 0);

          var currVal_15 = !_co.isPmemManageableByVsanOnAllHosts;

          _ck(_v, 25, 0, currVal_15);

          _ck(_v, 28, 0);

          var currVal_23 = "hostName";

          _ck(_v, 67, 0, currVal_23);

          var currVal_25 = !_co.isPmemManageableByVsanOnAllHosts;

          _ck(_v, 76, 0, currVal_25);

          var currVal_28 = "name";

          _ck(_v, 82, 0, currVal_28);

          var currVal_32 = "capacity";

          _ck(_v, 94, 0, currVal_32);

          var currVal_36 = "healthStatus";

          _ck(_v, 106, 0, currVal_36);

          var currVal_40 = "state";

          _ck(_v, 118, 0, currVal_40);

          var currVal_42 = _co.eligiblePMemStorage;

          _ck(_v, 128, 0, currVal_42);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.description"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).toggle;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).toggle;

          _ck(_v, 12, 0, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).id;

          _ck(_v, 18, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

          var currVal_16 = !_co.isPmemManageableByVsanOnAllHosts;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).forAttr;

          _ck(_v, 27, 0, currVal_16, currVal_17);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _ck(_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.manageByVsan.label"));

          _ck(_v, 29, 0, currVal_18);

          var currVal_19 = true;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).detailService.isOpen;

          _ck(_v, 33, 0, currVal_19, currVal_20);

          var currVal_21 = true;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ariaSort;

          _ck(_v, 63, 0, currVal_21, currVal_22);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 72, 0, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.host"));

          _ck(_v, 72, 0, currVal_24);

          var currVal_26 = true;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).ariaSort;

          _ck(_v, 78, 0, currVal_26, currVal_27);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 87, 0, _ck(_v, 88, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.storage"));

          _ck(_v, 87, 0, currVal_29);

          var currVal_30 = true;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).ariaSort;

          _ck(_v, 90, 0, currVal_30, currVal_31);

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 99, 0, _ck(_v, 100, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.capacity"));

          _ck(_v, 99, 0, currVal_33);

          var currVal_34 = true;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).ariaSort;

          _ck(_v, 102, 0, currVal_34, currVal_35);

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 111, 0, _ck(_v, 112, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.health"));

          _ck(_v, 111, 0, currVal_37);

          var currVal_38 = true;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ariaSort;

          _ck(_v, 114, 0, currVal_38, currVal_39);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 123, 0, _ck(_v, 124, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.pmem.claim.state"));

          _ck(_v, 123, 0, currVal_41);
        });
      }

      function View_ClaimForPmemComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-claim-for-pmem", [], null, null, null, View_ClaimForPmemComponent_0, RenderType_ClaimForPmemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _claim_for_pmem_component__WEBPACK_IMPORTED_MODULE_13__["ClaimForPmemComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ClaimForPmemComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-claim-for-pmem", _claim_for_pmem_component__WEBPACK_IMPORTED_MODULE_13__["ClaimForPmemComponent"], View_ClaimForPmemComponent_Host_0, {
        allHostsInCluster: "allHostsInCluster"
      }, {
        update: "update"
      }, []);
      /***/

    },

    /***/
    "5wEe":
    /*!****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/perspective/disks-group-by-perspective.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: DisksGroupByPerspectiveComponent */

    /***/
    function wEe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksGroupByPerspectiveComponent", function () {
        return DisksGroupByPerspectiveComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/diskmgmt/perspective/disks-group-by-perspective */
      "4ro6");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DisksGroupByPerspectiveComponent = /*#__PURE__*/function () {
        function DisksGroupByPerspectiveComponent() {
          _classCallCheck(this, DisksGroupByPerspectiveComponent);

          this.changePerspective = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectedPerspective = _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_VENDOR;
          this.perspectives = [_component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_VENDOR, _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_HOST];
        }

        _createClass(DisksGroupByPerspectiveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePerspective.emit(this.selectedPerspective);
          }
        }, {
          key: "getPerspectiveLabel",
          value: function getPerspectiveLabel(perspective) {
            switch (perspective) {
              case _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_VENDOR:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.treeFilter.byVendor");

              case _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_HOST:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.treeFilter.byHost");

              default:
                return "";
            }
          }
        }]);

        return DisksGroupByPerspectiveComponent;
      }();
      /***/

    },

    /***/
    "69kW":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/disks-capacity-chart.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: DisksCapacityChartComponent */

    /***/
    function kW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksCapacityChartComponent", function () {
        return DisksCapacityChartComponent;
      });
      /* harmony import */


      var _component_chart_model_chart_section_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/chart/model/chart-section.data */
      "7oo9");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");

      var DisksCapacityChartComponent = /*@__PURE__*/function () {
        var DisksCapacityChartComponent = /*#__PURE__*/function () {
          function DisksCapacityChartComponent() {
            _classCallCheck(this, DisksCapacityChartComponent);
          }

          _createClass(DisksCapacityChartComponent, [{
            key: "disksClaiming",
            get: function get() {
              return this._disksClaiming;
            },
            set: function set(value) {
              this._disksClaiming = value;

              if (!this._disksClaiming) {
                return;
              }

              this.capacitySections = this.getCapacityChartData(this._disksClaiming);
              this.totalCapacity = this._disksClaiming.totalCapacity();
              this.usedOverallCapacity = this._disksClaiming.totalUsedCapacity();
            }
          }, {
            key: "usedCapacityLabel",
            get: function get() {
              return this.getCapacityLabel("vsan.dialog.semiAutoClaimDialog.totalClaimed", this.usedOverallCapacity);
            }
          }, {
            key: "freeCapacityLabel",
            get: function get() {
              return this.getCapacityLabel("vsan.dialog.semiAutoClaimDialog.unclaimedStorage", this.totalCapacity - this.usedOverallCapacity);
            }
          }, {
            key: "getCapacityLabel",
            value: function getCapacityLabel(labelKey, capacityValue) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.capacity.withLabel.format", _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString(labelKey), _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].formatFileSize(capacityValue), _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].localizeNumber(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].asPercentage(capacityValue, this.totalCapacity)));
            }
          }, {
            key: "getCapacityChartData",
            value: function getCapacityChartData(disksClaiming) {
              var _this4 = this;

              var vsanCapacityChartSection = new _component_chart_model_chart_section_data__WEBPACK_IMPORTED_MODULE_0__["ChartSectionData"](_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].getLocalizedStorage(_generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForStorage), disksClaiming.getClaimedCapacity(_generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForStorage), DisksCapacityChartComponent.VSAN_CAPACITY_SECTION_ID, true, _component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["BarChartService"].VSAN_CAPACITY_SECTION_COLOR);
              var vsanCacheChartSection = new _component_chart_model_chart_section_data__WEBPACK_IMPORTED_MODULE_0__["ChartSectionData"](_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].getLocalizedStorage(_generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForCache), disksClaiming.getClaimedCapacity(_generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForCache), DisksCapacityChartComponent.VSAN_CACHE_SECTION_ID, true, _component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["BarChartService"].VSAN_CACHE_SECTION_COLOR);
              var managedByVsanStorageChartSections = [];

              _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].MANAGED_BY_VSAN_CLAIM_OPTIONS.filter(function (claimOption) {
                return disksClaiming.getClaimedCapacity(claimOption) > 0;
              }).forEach(function (claimOption) {
                managedByVsanStorageChartSections.push(new _component_chart_model_chart_section_data__WEBPACK_IMPORTED_MODULE_0__["ChartSectionData"](_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].getLocalizedStorage(claimOption), disksClaiming.getClaimedCapacity(claimOption), _this4.getManagedByVsanChartId(claimOption), true, _this4.getManagedByVsanChartColor(claimOption)));
              });

              return [vsanCapacityChartSection, vsanCacheChartSection].concat(managedByVsanStorageChartSections);
            }
          }, {
            key: "getManagedByVsanChartId",
            value: function getManagedByVsanChartId(claimOption) {
              switch (claimOption) {
                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].VMFS:
                  return DisksCapacityChartComponent.VMFS_SECTION_ID;

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].PMEM:
                  return DisksCapacityChartComponent.PMEM_SECTION_ID;

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].SingleTier:
                  return DisksCapacityChartComponent.VSAN_MAX_SINGLE_TIER_SECTION_ID;
              }
            }
          }, {
            key: "getManagedByVsanChartColor",
            value: function getManagedByVsanChartColor(claimOption) {
              switch (claimOption) {
                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].VMFS:
                  return _component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["BarChartService"].VMFS_SECTION_COLOR;

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].PMEM:
                  return _component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["BarChartService"].PMEM_SECTION_COLOR;

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].SingleTier:
                  return _component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["BarChartService"].VSAN_CAPACITY_SECTION_COLOR;
              }
            }
          }]);

          return DisksCapacityChartComponent;
        }();

        DisksCapacityChartComponent.VSAN_CAPACITY_SECTION_ID = "vsan_capacity";
        DisksCapacityChartComponent.VSAN_CACHE_SECTION_ID = "vsan_cache";
        DisksCapacityChartComponent.VSAN_MAX_SINGLE_TIER_SECTION_ID = "vsan_max_single_tier";
        DisksCapacityChartComponent.VMFS_SECTION_ID = "vmfs";
        DisksCapacityChartComponent.PMEM_SECTION_ID = "pmem";
        return DisksCapacityChartComponent;
      }();
      /***/

    },

    /***/
    "6oWG":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-pmem.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ClaimForPmemComponent */

    /***/
    function oWG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForPmemComponent", function () {
        return ClaimForPmemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimForPmemComponent = /*#__PURE__*/function () {
        function ClaimForPmemComponent() {
          _classCallCheck(this, ClaimForPmemComponent);

          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isPmemManageableByVsanOnAllHosts = false;
          this.managePmemByVsan = false;
        }

        _createClass(ClaimForPmemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hostIcons = new Map(this.allHostsInCluster.map(function (host) {
              return [host.hostMor.value, host.image];
            }));
            this.isPmemManageableByVsanOnAllHosts = this.eligiblePMemStorage.every(function (storage) {
              return storage.isManageableByVsan;
            });

            if (this.isPmemManageableByVsanOnAllHosts) {
              this.managePmemByVsan = this.eligiblePMemStorage.every(function (storage) {
                return storage.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].PMEM;
              });
            } else {
              this.hostVersions = new Map(this.allHostsInCluster.map(function (host) {
                return [host.hostMor.value, host.version];
              }));
            }
          }
        }, {
          key: "toggle",
          value: function toggle() {
            var _this5 = this;

            this.eligiblePMemStorage.forEach(function (storage) {
              return storage.claimOption = _this5.managePmemByVsan ? _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].PMEM : _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim;
            });
            this.update.emit();
          }
        }, {
          key: "eligiblePMemStorage",
          get: function get() {
            var eligiblePMemStorage = [];
            this.allHostsInCluster.forEach(function (host) {
              host.eligiblePmemStorage.filter(function (storage) {
                return storage.canBeClaimedForPMem;
              }).forEach(function (storage) {
                return eligiblePMemStorage.push(storage);
              });
            });
            return eligiblePMemStorage;
          }
        }]);

        return ClaimForPmemComponent;
      }();
      /***/

    },

    /***/
    "731n":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan-direct.component.ngfactory.js ***!
      \*********************************************************************************************/

    /*! exports provided: RenderType_ClaimForVsanDirectComponent, View_ClaimForVsanDirectComponent_0, View_ClaimForVsanDirectComponent_Host_0, ClaimForVsanDirectComponentNgFactory */

    /***/
    function n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimForVsanDirectComponent", function () {
        return RenderType_ClaimForVsanDirectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForVsanDirectComponent_0", function () {
        return View_ClaimForVsanDirectComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForVsanDirectComponent_Host_0", function () {
        return View_ClaimForVsanDirectComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForVsanDirectComponentNgFactory", function () {
        return ClaimForVsanDirectComponentNgFactory;
      });
      /* harmony import */


      var _claim_for_vsan_direct_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./claim-for-vsan-direct.scss.shim.ngstyle */
      "nb98");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../datagrid/tree-column.component.ngfactory */
      "2xL0");
      /* harmony import */


      var _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../datagrid/tree-column.component */
      "UczD");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component.ngfactory */
      "2CYb");
      /* harmony import */


      var _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component */
      "8Y4q");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./perspective/disks-group-by-perspective.component.ngfactory */
      "fEff");
      /* harmony import */


      var _perspective_disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./perspective/disks-group-by-perspective.component */
      "5wEe");
      /* harmony import */


      var _claim_for_vsan_direct_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./claim-for-vsan-direct.component */
      "fIKf");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimForVsanDirectComponent = [_claim_for_vsan_direct_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ClaimForVsanDirectComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ClaimForVsanDirectComponent,
        data: {}
      });

      function View_ClaimForVsanDirectComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.totalCapacity"));

          var currVal_3 = _co.totalCapacityFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "capacity";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanDirectComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.host"));

          var currVal_3 = _co.hostNameFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "hostName";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanDirectComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.transportType"));

          var currVal_3 = _co.transportTypeFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "transportType";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanDirectComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.diskAdapter"));

          var currVal_3 = _co.diskAdapterFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "diskAdapter";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanDirectComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _v.parent.context.$implicit.data.capacity;

          _ck(_v, 6, 0, currVal_5);
        });
      }

      function View_ClaimForVsanDirectComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getHostIcon(_v.parent.parent.context.$implicit.data);

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ClaimForVsanDirectComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 9, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanDirectComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _co.getHostIcon(_v.parent.context.$implicit.data);

          _ck(_v, 8, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _v.parent.context.$implicit.data.hostName;

          _ck(_v, 9, 0, currVal_6);
        });
      }

      function View_ClaimForVsanDirectComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.data.transportType;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForVsanDirectComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.data.diskAdapter;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForVsanDirectComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 55, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-selected", null], [2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectTarget(_v.context.$implicit, $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 16, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_8__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "vsan-expand", [], null, null, null, _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_TreeExpanderComponent_0"], _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_TreeExpanderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_11__["TreeExpanderComponent"], [], {
          row: [0, "row"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, 2, 7, "clr-dg-cell", [["class", "claim-checkbox"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 16777216, null, 0, 1, "input", [["clrCheckbox", ""], ["name", "manage-vsan-direct-by-vsan-toggle"], ["type", "checkbox"]], [[8, "checked", 0], [8, "id", 0]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("blur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).triggerValidation() !== false;
            ad = pd_0 && ad;
          }

          if ("change" === en) {
            var pd_1 = _co.toggleClaiming(_v.context.$implicit.data) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 16777216, null, 2, 4, "clr-dg-cell", [["class", "text-nowrap"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanDirectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanDirectComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanDirectComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanDirectComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 19, 0, currVal_9);

          _ck(_v, 30, 0);

          _ck(_v, 35, 0);

          _ck(_v, 39, 0);

          var currVal_19 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_HOST;

          _ck(_v, 45, 0, currVal_19);

          var currVal_20 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_VENDOR;

          _ck(_v, 48, 0, currVal_20);

          var currVal_21 = _co.isStandalone;

          _ck(_v, 51, 0, currVal_21);

          var currVal_22 = _co.isStandalone;

          _ck(_v, 54, 0, currVal_22);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isRowSelected(_v.context.$implicit);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _v.context.$implicit.data.image;

          _ck(_v, 21, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.data.name;

          _ck(_v, 26, 0, currVal_11);

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).signpost.length > 0;

          _ck(_v, 29, 0, currVal_12, currVal_13);

          var currVal_14 = _v.context.$implicit.data.claimOption === _co.ClaimOption.VMFS;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).id;

          _ck(_v, 34, 0, currVal_14, currVal_15);

          var currVal_16 = true;
          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).signpost.length > 0;

          _ck(_v, 38, 0, currVal_16, currVal_17);

          var currVal_18 = _v.context.$implicit.data.initialDriveType;

          _ck(_v, 42, 0, currVal_18);
        });
      }

      function View_ClaimForVsanDirectComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["id", "vsan-direct-claim-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "vsan-disks-group-by-perspective", [["class", "clr-offset-8 clr-col-4"]], null, [[null, "changePerspective"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("changePerspective" === en) {
            var pd_0 = _co.changePerspective($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_DisksGroupByPerspectiveComponent_0"], _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_DisksGroupByPerspectiveComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, _perspective_disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_14__["DisksGroupByPerspectiveComponent"], [], null, {
          changePerspective: "changePerspective"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 99, "clr-datagrid", [["class", "datagrid-compact"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          loading: [0, "loading"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 16777216, null, null, 13, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, 1, 2, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](70, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](84, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanDirectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanDirectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanDirectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanDirectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanDirectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, 2, 8, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, 2, 3, "clr-dg-pagination", [], [[2, "pagination", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridPagination_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]], {
          pageSize: [0, "pageSize"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _pageSizeComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](112, 1, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 10, 0);

          var currVal_3 = _co.datagridLoading;

          _ck(_v, 29, 0, currVal_3);

          _ck(_v, 49, 0);

          var currVal_6 = _co.nameColumnTitle;
          var currVal_7 = _co.nameFilter;
          var currVal_8 = _co.datagrid;
          var currVal_9 = "name";

          _ck(_v, 56, 0, currVal_6, currVal_7, currVal_8, currVal_9);

          _ck(_v, 64, 0);

          _ck(_v, 76, 0);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 0, _ck(_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.driveType"));

          var currVal_16 = _co.driveTypeFilter;
          var currVal_17 = _co.datagrid;
          var currVal_18 = "driveTypeLabel";

          _ck(_v, 83, 0, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_19 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_HOST;

          _ck(_v, 89, 0, currVal_19);

          var currVal_20 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_VENDOR;

          _ck(_v, 92, 0, currVal_20);

          var currVal_21 = _co.isStandalone;

          _ck(_v, 95, 0, currVal_21);

          var currVal_22 = _co.isStandalone;

          _ck(_v, 98, 0, currVal_22);

          var currVal_23 = _co.datagrid.rows;

          _ck(_v, 102, 0, currVal_23);

          var currVal_26 = _co.ClaimDisksUtil.DISKS_PER_DATAGRID_PAGE;

          _ck(_v, 110, 0, currVal_26);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.dialog.semiAutoClaimDialog.confInfo.vmfs"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).detailService.isOpen;

          _ck(_v, 15, 0, currVal_1, currVal_2);

          var currVal_4 = true;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ariaSort;

          _ck(_v, 45, 0, currVal_4, currVal_5);

          var currVal_10 = true;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ariaSort;

          _ck(_v, 60, 0, currVal_10, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 69, 0, _ck(_v, 70, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.claimFor.vsanDirect"));

          _ck(_v, 69, 0, currVal_12);

          var currVal_13 = true;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ariaSort;

          _ck(_v, 72, 0, currVal_13, currVal_14);

          var currVal_24 = true;

          _ck(_v, 105, 0, currVal_24);

          var currVal_25 = true;

          _ck(_v, 109, 0, currVal_25);

          var currVal_27 = _co.footerLabel.getLabel(_co.selectedPerspective);

          _ck(_v, 112, 0, currVal_27);
        });
      }

      function View_ClaimForVsanDirectComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-claim-for-vsan-direct", [], null, null, null, View_ClaimForVsanDirectComponent_0, RenderType_ClaimForVsanDirectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _claim_for_vsan_direct_component__WEBPACK_IMPORTED_MODULE_15__["ClaimForVsanDirectComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ClaimForVsanDirectComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-claim-for-vsan-direct", _claim_for_vsan_direct_component__WEBPACK_IMPORTED_MODULE_15__["ClaimForVsanDirectComponent"], View_ClaimForVsanDirectComponent_Host_0, {
        allHostsInCluster: "allHostsInCluster",
        disksByVendor: "disksByVendor",
        isStandalone: "isStandalone"
      }, {
        update: "update"
      }, []);
      /***/

    },

    /***/
    "8FUb":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/accessibility/refocus-after-change.directive.ts ***!
      \***************************************************************************************/

    /*! exports provided: RefocusAfterChangeDirective */

    /***/
    function FUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RefocusAfterChangeDirective", function () {
        return RefocusAfterChangeDirective;
      });
      /**
       * A directive that handles onchange event for some input control and sets back the focus to it afterwards.
       */


      var RefocusAfterChangeDirective = /*#__PURE__*/function () {
        function RefocusAfterChangeDirective(el, refWatcher) {
          _classCallCheck(this, RefocusAfterChangeDirective);

          this.el = el;
          this.refWatcher = refWatcher;
        }

        _createClass(RefocusAfterChangeDirective, [{
          key: "processChange",
          value: function processChange(e) {
            var _this6 = this;

            this.refWatcher.setTimeout(function () {
              document.body.classList.add("user-tabbing");

              _this6.el.nativeElement.focus();
            }, 50);
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        }]);

        return RefocusAfterChangeDirective;
      }();
      /***/

    },

    /***/
    "8OsR":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ClaimForVsanComponent */

    /***/
    function OsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForVsanComponent", function () {
        return ClaimForVsanComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/datagrid/filter/function-filter */
      "vuPz");
      /* harmony import */


      var _component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/datagrid/tree-datagrid-view */
      "IX96");
      /* harmony import */


      var _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/diskmgmt/claim-disks-util */
      "S7F7");
      /* harmony import */


      var _component_diskmgmt_model_claim_disks_datagrid_footer_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-disks-datagrid-footer-label */
      "BAvr");
      /* harmony import */


      var _component_diskmgmt_model_claim_host_list_item_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-host-list-item.data */
      "pAkp");
      /* harmony import */


      var _component_diskmgmt_model_claim_vendor_list_item_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-vendor-list-item.data */
      "kBFi");
      /* harmony import */


      var _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @component/diskmgmt/model/drive-type.data */
      "Lguz");
      /* harmony import */


      var _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @component/diskmgmt/perspective/disks-group-by-perspective */
      "4ro6");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimForVsanComponent = /*@__PURE__*/function () {
        var ClaimForVsanComponent = /*#__PURE__*/function (_component_datagrid_t) {
          _inherits(ClaimForVsanComponent, _component_datagrid_t);

          var _super = _createSuper(ClaimForVsanComponent);

          function ClaimForVsanComponent() {
            var _this7;

            _classCallCheck(this, ClaimForVsanComponent);

            _this7 = _super.call(this, ClaimForVsanComponent.CHILD_FIELD);
            _this7.DisksGroupByPerspective = _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_8__["DisksGroupByPerspective"];
            _this7.ClaimDisksUtil = _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"];
            _this7.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            _this7.showWarning = false;

            _this7.claimFor = function (option) {
              var _iterator7 = _createForOfIteratorHelper(_this7.selectedTargets),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var target = _step7.value;
                  target.data.claimOption = option;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              _this7.update.emit();
            };

            _this7.getClaimOptions = function (data) {
              var claimOptions = _this7.getEligibleForVsanClaimOptions(data);

              if (!claimOptions) {
                return [];
              } // if the currently selected option is not Custom remove it
              // this option appears when child items posses different claim options


              if (data.claimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_9__["ClaimOption"].Custom && claimOptions.includes(_generated_claim_option__WEBPACK_IMPORTED_MODULE_9__["ClaimOption"].Custom)) {
                claimOptions.splice(claimOptions.indexOf(_generated_claim_option__WEBPACK_IMPORTED_MODULE_9__["ClaimOption"].Custom), 1);
              }

              return claimOptions;
            };

            _this7.localizeClaimOption = function (claimOption) {
              return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"].getLocalizedClaimOption(claimOption);
            };

            _this7.hasDriveTypeWarningImage = function (listData) {
              // In case we have vendor root item, then if all the child disks are
              // with the same marking, check if we should show the warning
              if (listData instanceof _component_diskmgmt_model_claim_vendor_list_item_data__WEBPACK_IMPORTED_MODULE_6__["ClaimVendorListItem"]) {
                var vendorItem = listData;

                if (vendorItem.areAllItemsMarkedTheSame() && _this7.shouldShowDriveTypeWarning(vendorItem)) {
                  return true;
                }
              } else if (_this7.shouldShowDriveTypeWarning(listData)) {
                return true;
              }

              return null;
            };

            _this7.shouldShowDriveTypeWarning = function (item) {
              if (item instanceof _component_diskmgmt_model_claim_host_list_item_data__WEBPACK_IMPORTED_MODULE_5__["ClaimHostListItem"]) {
                return false;
              }

              return item.markedAsFlash !== item.isFlash && item.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_9__["ClaimOption"].DoNotClaim;
            };

            _this7.getHostIcon = function (item) {
              return item.isRoot ? null : _util_icon__WEBPACK_IMPORTED_MODULE_11__["Icon"].HOST;
            };

            _this7.markSelectedItems = function (markAsFlash) {
              var _iterator8 = _createForOfIteratorHelper(_this7.selectedTargets),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var selectedRow = _step8.value;
                  selectedRow.data.markedAsFlash = markAsFlash;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              _this7.update.emit();

              _this7.showWarning = false;
            };

            _this7.markFlash = function () {
              _this7.markSelectedItems(true);
            };

            _this7.markHdd = function () {
              _this7.markSelectedItems(false);
            };

            _this7.markSelectedItemsAsFlash = function () {
              if (_this7.hasSelectedDisksForClaiming()) {
                _this7.warningTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("storage.adapters.devices.action.tagAsSsd");
                _this7.warningText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.markAsFlash.warning");
                _this7.warningConfirmationHandler = _this7.markFlash;
                _this7.showWarning = true;
              } else {
                _this7.markFlash();
              }
            };

            _this7.markSelectedItemsAsHdd = function () {
              if (_this7.hasSelectedDisksForClaiming()) {
                _this7.warningTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("storage.adapters.devices.action.untagAsSsd");
                _this7.warningText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.markAsHdd.warning");
                _this7.warningConfirmationHandler = _this7.markHdd;
                _this7.showWarning = true;
              } else {
                _this7.markHdd();
              }
            };

            _this7.hasSelectedDisksForClaiming = function () {
              var disksToClaimFound = _this7.selectedTargets.find(function (element) {
                return element.data.claimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_9__["ClaimOption"].DoNotClaim;
              });

              return !!disksToClaimFound;
            };

            _this7.changeClaimOption = function (item, event) {
              item.claimOption = event.target.value;

              _this7.update.emit();
            };

            _this7.changeDriveType = function (event) {
              _this7.changeDriveTypeEvent = event;

              if (event.target.value === _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_7__["DriveType"].FLASH.toString() || event.target.value === _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_7__["DriveType"].MARKED_AS_FLASH.toString()) {
                _this7.markSelectedItemsAsFlash();
              } else if (event.target.value === _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_7__["DriveType"].HDD.toString() || event.target.value === _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_7__["DriveType"].MARKED_AS_HDD.toString()) {
                _this7.markSelectedItemsAsHdd();
              }
            };

            _this7.cancelMarkAsAction = function () {
              _this7.showWarning = false; // When clicking a new option in the select dropdown list, even if we don't update its binding value,
              // its selected option will appear to change, which happens when the user cancels the "Mark as" action,
              // resetting it to avoid this kind of situation.

              _this7.changeDriveTypeEvent.target.value = _this7.selectedTargets[0].data.driveType;
            };

            _this7.nameFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.name;
            });
            _this7.driveTypeFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.driveTypeLabel;
            });
            _this7.totalCapacityFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.capacity;
            });
            _this7.hostNameFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.hostName;
            });
            _this7.transportTypeFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.transportType;
            });
            _this7.diskAdapterFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.diskAdapter;
            });
            _this7.multipleSelection = true;
            _this7.selectionChangeHandler = _this7.selectionChange;
            return _this7;
          }

          _createClass(ClaimForVsanComponent, [{
            key: "selectionChange",
            value: function selectionChange() {
              this.update.emit();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.datagridLoading = false;
              this.footerLabel = new _component_diskmgmt_model_claim_disks_datagrid_footer_label__WEBPACK_IMPORTED_MODULE_4__["ClaimDisksDatagridFooterLabel"](this.allHostsInCluster, this.disksByVendor);
            }
          }, {
            key: "changePerspective",
            value: function changePerspective(perspective) {
              this.selectedPerspective = perspective;

              _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"].changePerspective(this.selectedPerspective, this.datagrid, this.allHostsInCluster, this.disksByVendor);
            }
            /**
             * Skip vSAN Direct claim option
             */

          }, {
            key: "getEligibleForVsanClaimOptions",
            value: function getEligibleForVsanClaimOptions(data) {
              return data.possibleClaimOptions.filter(function (co) {
                return !_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_10__["DiskMgmtDiskUtil"].VSAN_DIRECT_CLAIM_OPTIONS.includes(co);
              });
            }
          }, {
            key: "onWarningDriveTypeTooltip",
            get: function get() {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.warning.markedNotClaimedDisk");
            }
          }, {
            key: "nameColumnTitle",
            get: function get() {
              return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"].getNameColumnTitle(this.selectedPerspective);
            }
          }, {
            key: "warningHeaderClass",
            get: function get() {
              return this.isStandalone ? "" : "warning-popup-header";
            }
          }, {
            key: "warningContentClass",
            get: function get() {
              return this.isStandalone ? "" : "warning-popup-content";
            }
          }]);

          return ClaimForVsanComponent;
        }(_component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_2__["TreeDatagridView"]);

        ClaimForVsanComponent.CHILD_FIELD = "eligibleDisksInDatastoreContext";
        return ClaimForVsanComponent;
      }();
      /***/

    },

    /***/
    "8nch":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/validation-panel.component.ngfactory.js ***!
      \****************************************************************************************/

    /*! exports provided: RenderType_ValidationPanelComponent, View_ValidationPanelComponent_0, View_ValidationPanelComponent_Host_0, ValidationPanelComponentNgFactory */

    /***/
    function nch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ValidationPanelComponent", function () {
        return RenderType_ValidationPanelComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ValidationPanelComponent_0", function () {
        return View_ValidationPanelComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ValidationPanelComponent_Host_0", function () {
        return View_ValidationPanelComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidationPanelComponentNgFactory", function () {
        return ValidationPanelComponentNgFactory;
      });
      /* harmony import */


      var _validation_panel_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validation-panel.scss.shim.ngstyle */
      "Wx1g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validation/validation.component */
      "ie44");
      /* harmony import */


      var _directive_on_modal_escape_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directive/on-modal-escape.directive */
      "F2uQ");
      /* harmony import */


      var _directive_focus_trap_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../directive/focus-trap.directive */
      "qN0k");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _validation_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./validation-panel.component */
      "zugg");
      /* harmony import */


      var _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../service/space-efficiency-service */
      "1Ga+");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ValidationPanelComponent = [_validation_panel_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ValidationPanelComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ValidationPanelComponent,
        data: {}
      });

      function View_ValidationPanelComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "aggregated-issue-container"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          actionLink: [2, "actionLink"],
          allowClose: [3, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.aggregatedIssueClass;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.dialog.semiAutoClaimDialog.aggregatedIssue"));

          var currVal_2 = _co.openIssueActionLink;
          var currVal_3 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_ValidationPanelComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "error-container"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "danger";
          var currVal_1 = _co.vsanErrors[0];
          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ValidationPanelComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "warning-container"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "warning";
          var currVal_1 = _co.vsanWarnings[0];
          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ValidationPanelComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [], null, [[null, "alertsChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.vsanErrors = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alerts: [1, "alerts"],
          allowClose: [2, "allowClose"],
          alertsExpanded: [3, "alertsExpanded"],
          allowExpandCollapse: [4, "allowExpandCollapse"]
        }, {
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "danger";
          var currVal_1 = _co.vsanErrors;
          var currVal_2 = false;
          var currVal_3 = true;
          var currVal_4 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_ValidationPanelComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [], null, [[null, "alertsChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.vsanWarnings = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alerts: [1, "alerts"],
          allowClose: [2, "allowClose"],
          alertsExpanded: [3, "alertsExpanded"],
          allowExpandCollapse: [4, "allowExpandCollapse"]
        }, {
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "warning";
          var currVal_1 = _co.vsanWarnings;
          var currVal_2 = false;
          var currVal_3 = true;
          var currVal_4 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_ValidationPanelComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [["class", "modal"], ["id", "issues-list-dialog"], ["vsan-focus-trap", ""], ["vsan-on-modal-escape", ""]], null, [[null, "onEscape"], ["document", "keyup.escape"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("document:keyup.escape" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).processEscape($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onEscape" === en) {
            var pd_1 = (_co.issuesListOpened = false) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _directive_on_modal_escape_directive__WEBPACK_IMPORTED_MODULE_4__["OnModalEscapeDirective"], [], null, {
          onEscape: "onEscape"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_focus_trap_directive__WEBPACK_IMPORTED_MODULE_5__["FocusTrapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 28, "div", [["aria-modal", "true"], ["class", "modal-dialog"], ["role", "dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 25, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "div", [["class", "modal-header issues-list-popup-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "h3", [["class", "modal-title"], ["id", "issues-list-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "modal-body"], ["id", "issues-list-content"]], [[1, "tabindex", 0]], [[null, "mousedown"], [null, "mouseup"]], function (_v, en, $event) {
          var ad = true;

          if ("mousedown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).mouseDown() !== false;
            ad = pd_0 && ad;
          }

          if ("mouseup" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).mouseUp() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrModalBody"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.issuesListOpened = false) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.vsanErrors && _co.vsanErrors.length;

          _ck(_v, 19, 0, currVal_2);

          var currVal_3 = _co.vsanWarnings && _co.vsanWarnings.length;

          _ck(_v, 22, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.dialog.semiAutoClaimDialog.claimingIssuesDialog.title"));

          _ck(_v, 11, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tabindex;

          _ck(_v, 15, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.close"));

          _ck(_v, 28, 0, currVal_4);
        });
      }

      function View_ValidationPanelComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["aria-hidden", "true"], ["class", "modal-backdrop opaque-backdrop fade in"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null);
      }

      function View_ValidationPanelComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ValidationPanelComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hasAggregatedIssue;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.hasErrors && !_co.hasAggregatedIssue;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _co.hasWarnings && !_co.hasAggregatedIssue;

          _ck(_v, 12, 0, currVal_2);

          var currVal_3 = _co.issuesListOpened;

          _ck(_v, 16, 0, currVal_3);

          var currVal_4 = _co.issuesListOpened;

          _ck(_v, 19, 0, currVal_4);
        }, null);
      }

      function View_ValidationPanelComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-validation-panel", [], null, null, null, View_ValidationPanelComponent_0, RenderType_ValidationPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _validation_panel_component__WEBPACK_IMPORTED_MODULE_10__["ValidationPanelComponent"], [_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_11__["SpaceEfficiencyService"]], null, null)], null, null);
      }

      var ValidationPanelComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-validation-panel", _validation_panel_component__WEBPACK_IMPORTED_MODULE_10__["ValidationPanelComponent"], View_ValidationPanelComponent_Host_0, {
        vsanConfigSpec: "vsanConfigSpec",
        disksClaimingConfigInfo: "disksClaimingConfigInfo",
        noSelectionIsError: "noSelectionIsError",
        hostsData: "hostsData"
      }, {
        isConfigAcceptable: "isConfigAcceptable"
      }, []);
      /***/

    },

    /***/
    "8qIs":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/vsan-disks-transport-type.data.ts ***!
      \****************************************************************************************/

    /*! exports provided: VsanDisksTransportTypeData */

    /***/
    function qIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDisksTransportTypeData", function () {
        return VsanDisksTransportTypeData;
      });
      /* Copyright 2017-2019 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanDisksTransportTypeData = /*#__PURE__*/function () {
        function VsanDisksTransportTypeData() {
          _classCallCheck(this, VsanDisksTransportTypeData);
        }

        _createClass(VsanDisksTransportTypeData, [{
          key: "storageAdapterDevices",
          set:
          /**
           * Host devices custom property.
           * Populated by the StorageAdaptersPropertyProvider.
           * [Model(property="vsanStorageAdapterDevices")]
           */
          function set(value
          /*com.vmware.vsphere.client.storage.adapters.StorageDeviceData*/
          ) {
            if (!value) {
              return;
            }

            this._deviceTransportMap = {};
            this._deviceAdapterMap = {}; // Updates the list of storage adapters.

            var _iterator9 = _createForOfIteratorHelper(value),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var deviceData = _step9.value;
                var deviceLun = deviceData.underlyingLun;
                var deviceUuid = deviceLun.uuid;
                this._deviceTransportMap[deviceUuid] = deviceData.transport;
                this._deviceAdapterMap[deviceUuid] = deviceData.adapter;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
          /**
           * Returns an array of transport types for the specified device.
           */

        }, {
          key: "getDeviceTransport",
          value: function getDeviceTransport(deviceUuid) {
            if (this._deviceTransportMap && this._deviceTransportMap.hasOwnProperty(deviceUuid)) {
              return this._deviceTransportMap[deviceUuid];
            }

            return null;
          }
          /**
           * Returns an array of transport types for the specified device.
           */

        }, {
          key: "getDeviceAdapter",
          value: function getDeviceAdapter(deviceUuid) {
            if (this._deviceAdapterMap && this._deviceAdapterMap.hasOwnProperty(deviceUuid)) {
              return this._deviceAdapterMap[deviceUuid];
            }

            return null;
          }
        }]);

        return VsanDisksTransportTypeData;
      }();
      /***/

    },

    /***/
    "AwlQ":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/vsan-pmem-storage-list-item.ts ***!
      \*************************************************************************************/

    /*! exports provided: VsanPmemStorageListItem */

    /***/
    function AwlQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanPmemStorageListItem", function () {
        return VsanPmemStorageListItem;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanPmemStorageListItem = /*#__PURE__*/function () {
        function VsanPmemStorageListItem(storage, hostName, hostMor) {
          _classCallCheck(this, VsanPmemStorageListItem);

          this.storage = storage;
          this.hostName = hostName;
          this.hostMor = hostMor;
          this._claimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim;
        }

        _createClass(VsanPmemStorageListItem, [{
          key: "uuid",
          get: function get() {
            return this.storage.uuid;
          }
        }, {
          key: "name",
          get: function get() {
            return this.storage.name;
          }
        }, {
          key: "capacity",
          get: function get() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(this.capacityNum);
          }
        }, {
          key: "capacityNum",
          get: function get() {
            return this.storage.capacity;
          }
        }, {
          key: "claimOption",
          get: function get() {
            return this._claimOption;
          },
          set: function set(newClaimOption) {
            if (newClaimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim && this._claimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim) {
              return;
            }

            if (newClaimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].PMEM && newClaimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim) {
              return;
            }

            this._claimOption = newClaimOption;
          }
        }, {
          key: "state",
          get: function get() {
            return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].localizeMountedState(this.storage.diskStatus);
          }
        }, {
          key: "isHealthy",
          get: function get() {
            return this.storage.diskStatus && this.storage.diskStatus.isDiskHealthy;
          }
        }, {
          key: "healthStatus",
          get: function get() {
            return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].getHealth(this.storage.diskStatus);
          }
        }, {
          key: "healthIconShape",
          get: function get() {
            return this.isHealthy ? _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE : _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
          }
        }, {
          key: "healthIconClass",
          get: function get() {
            return _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].clrIconShapeClassMap[this.healthIconShape];
          }
        }, {
          key: "isManageableByVsan",
          get: function get() {
            return this.storage.isManageableByVsan;
          }
        }, {
          key: "canBeClaimedForPMem",
          get: function get() {
            return this.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].PMEM || this.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim;
          }
        }]);

        return VsanPmemStorageListItem;
      }();
      /***/

    },

    /***/
    "BAvr":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/claim-disks-datagrid-footer-label.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ClaimDisksDatagridFooterLabel */

    /***/
    function BAvr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDisksDatagridFooterLabel", function () {
        return ClaimDisksDatagridFooterLabel;
      });
      /* harmony import */


      var _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/diskmgmt/perspective/disks-group-by-perspective */
      "4ro6");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ClaimDisksDatagridFooterLabel = /*#__PURE__*/function () {
        function ClaimDisksDatagridFooterLabel(disksByHost, disksByVendor) {
          _classCallCheck(this, ClaimDisksDatagridFooterLabel);

          this.disksByHost = disksByHost;
          this.disksByVendor = disksByVendor;
          this.groupByHostLabel = this.getHostsPerspectiveLabel(disksByHost);
          this.groupByVendorLabel = this.getVendorPerspectiveLabel(disksByVendor);
        }

        _createClass(ClaimDisksDatagridFooterLabel, [{
          key: "getLabel",
          value: function getLabel(perspective) {
            if (perspective === _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_0__["DisksGroupByPerspective"].DISKS_BY_HOST) {
              return this.groupByHostLabel;
            }

            return this.groupByVendorLabel;
          }
        }, {
          key: "getHostsPerspectiveLabel",
          value: function getHostsPerspectiveLabel(hostsInCluster) {
            var eligibleDisks = hostsInCluster.reduce(function (total, host) {
              var _a;

              return total + ((_a = host.eligibleDisksInDatastoreContext) === null || _a === void 0 ? void 0 : _a.length);
            }, 0);
            var hostsWithEligibleDisks = hostsInCluster.filter(function (host) {
              var _a;

              return ((_a = host.eligibleDisksInDatastoreContext) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }).length;
            return hostsWithEligibleDisks > 0 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.disk.semiAutoClaimDialog.hosts.datagrid.footer", hostsWithEligibleDisks, eligibleDisks) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.disk.semiAutoClaimDialog.noeligible.datagrid.footer");
          }
        }, {
          key: "getVendorPerspectiveLabel",
          value: function getVendorPerspectiveLabel(disksByVendor) {
            var eligibleDisks = disksByVendor.reduce(function (total, vendor) {
              var _a;

              return total + ((_a = vendor.eligibleDisksInDatastoreContext) === null || _a === void 0 ? void 0 : _a.length);
            }, 0);
            var vendorsWithEligibleDisks = disksByVendor.filter(function (vendor) {
              var _a;

              return ((_a = vendor.eligibleDisksInDatastoreContext) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }).length;
            return vendorsWithEligibleDisks > 0 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.disk.semiAutoClaimDialog.size.model.datagrid.footer", vendorsWithEligibleDisks, eligibleDisks) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.disk.semiAutoClaimDialog.noeligible.datagrid.footer");
          }
        }]);

        return ClaimDisksDatagridFooterLabel;
      }();
      /***/

    },

    /***/
    "BNOn":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/vendor-map-result.data.ts ***!
      \********************************************************************************/

    /*! exports provided: VendorMapResult */

    /***/
    function BNOn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorMapResult", function () {
        return VendorMapResult;
      });
      /* harmony import */


      var _component_diskmgmt_model_claim_vendor_list_item_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-vendor-list-item.data */
      "kBFi");
      /**
       * Disk mapping model between models and flash option.
       */


      var VendorMapResult = /*#__PURE__*/function () {
        function VendorMapResult(keys, result) {
          _classCallCheck(this, VendorMapResult);

          this.models = [];
          this.models = keys;
          this.items = result;
        }

        _createClass(VendorMapResult, [{
          key: "result",
          get: function get() {
            var result = [];

            var _iterator10 = _createForOfIteratorHelper(this.models),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var model = _step10.value;

                if (this.hasDisks(model, true.toString())) {
                  var ssdVendorItem = new _component_diskmgmt_model_claim_vendor_list_item_data__WEBPACK_IMPORTED_MODULE_0__["ClaimVendorListItem"]();
                  ssdVendorItem.eligibleDisks = this.getDisks(model, true.toString());
                  ssdVendorItem.name = model;
                  result.push(ssdVendorItem);
                }

                if (this.hasDisks(model, false.toString())) {
                  var nonSsdVendorItem = new _component_diskmgmt_model_claim_vendor_list_item_data__WEBPACK_IMPORTED_MODULE_0__["ClaimVendorListItem"]();
                  nonSsdVendorItem.eligibleDisks = this.getDisks(model, false.toString());
                  nonSsdVendorItem.name = model;
                  result.push(nonSsdVendorItem);
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            return result;
          }
        }, {
          key: "hasDisks",
          value: function hasDisks(diskModel, diskType) {
            return this.items.has(diskModel) && this.items.get(diskModel).has(diskType);
          }
        }, {
          key: "getDisks",
          value: function getDisks(diskModel, diskType) {
            return this.items.get(diskModel).get(diskType);
          }
        }]);

        return VendorMapResult;
      }();
      /***/

    },

    /***/
    "CFcp":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan-max.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ClaimForVsanMaxComponent */

    /***/
    function CFcp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForVsanMaxComponent", function () {
        return ClaimForVsanMaxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/datagrid/filter/function-filter */
      "vuPz");
      /* harmony import */


      var _component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/datagrid/tree-datagrid-view */
      "IX96");
      /* harmony import */


      var _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/diskmgmt/claim-disks-util */
      "S7F7");
      /* harmony import */


      var _component_diskmgmt_model_claim_disks_datagrid_footer_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-disks-datagrid-footer-label */
      "BAvr");
      /* harmony import */


      var _component_diskmgmt_model_vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @component/diskmgmt/model/vsan-disk-list-item */
      "raSY");
      /* harmony import */


      var _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @component/diskmgmt/perspective/disks-group-by-perspective */
      "4ro6");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimForVsanMaxComponent = /*@__PURE__*/function () {
        var ClaimForVsanMaxComponent = /*#__PURE__*/function (_component_datagrid_t2) {
          _inherits(ClaimForVsanMaxComponent, _component_datagrid_t2);

          var _super2 = _createSuper(ClaimForVsanMaxComponent);

          function ClaimForVsanMaxComponent() {
            var _this8;

            _classCallCheck(this, ClaimForVsanMaxComponent);

            _this8 = _super2.call(this, ClaimForVsanMaxComponent.CHILD_FIELD);
            _this8.DisksGroupByPerspective = _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_6__["DisksGroupByPerspective"];
            _this8.ClaimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__["ClaimOption"];
            _this8.ClaimDisksUtil = _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"];
            _this8.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            /*
             * Bellow this line >> Clarity column filters.
             */

            _this8.nameFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.name;
            });
            _this8.driveTypeFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.driveTypeLabel;
            });
            _this8.isVsanMaxCompatibleFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return "" + _this8.getIsVsanMaxCompatibleLabel(data);
            });
            _this8.totalCapacityFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.capacity;
            });
            _this8.hostNameFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.hostName;
            });
            _this8.transportTypeFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.transportType;
            });
            _this8.diskAdapterFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.diskAdapter;
            });
            return _this8;
          }

          _createClass(ClaimForVsanMaxComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.datagridLoading = false;
              this.footerLabel = new _component_diskmgmt_model_claim_disks_datagrid_footer_label__WEBPACK_IMPORTED_MODULE_4__["ClaimDisksDatagridFooterLabel"](this.disksByHost, this.disksByVendor);
            }
          }, {
            key: "changePerspective",
            value: function changePerspective(perspective) {
              this.groupByPerspective = perspective;

              _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"].changePerspective(this.groupByPerspective, this.datagrid, this.disksByHost, this.disksByVendor);
            }
          }, {
            key: "getHostIcon",
            value: function getHostIcon(data) {
              return data.isRoot ? null : _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].HOST;
            }
            /*
             * Toggle between Claimed/Unclaimed.
             * For vSAN MAX's MVP release we only claim disks for Single tier.
             */

          }, {
            key: "toggleClaiming",
            value: function toggleClaiming(data, target) {
              data.claimOption = target.checked ? _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__["ClaimOption"].SingleTier : _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__["ClaimOption"].DoNotClaim;
              data.markedAsFlash = data.isFlash;
              this.update.emit();
            }
          }, {
            key: "getIsVsanMaxCompatibleLabel",
            value: function getIsVsanMaxCompatibleLabel(data) {
              // For grouping by host we cannot have a root level information displayed as the disks can be mixed.
              if (this.groupByPerspective === _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_6__["DisksGroupByPerspective"].DISKS_BY_HOST && data.isRoot) {
                return undefined;
              }

              return this.getIsVsanMaxCompatible(data) ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_9__["VsanUiUtils"].getString("vsan.disk.list.vsanMax.compatible") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_9__["VsanUiUtils"].getString("vsan.disk.list.vsanMax.incompatible");
            }
          }, {
            key: "getIsVsanMaxCompatibleIconClass",
            value: function getIsVsanMaxCompatibleIconClass(data) {
              return this.getIsVsanMaxCompatible(data) ? _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].CLR_SUCCESS_ICON_CLASS : _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].CLR_WARN_ICON_CLASS;
            }
          }, {
            key: "getIsVsanMaxCompatibleIconShape",
            value: function getIsVsanMaxCompatibleIconShape(data) {
              return this.getIsVsanMaxCompatible(data) ? _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE : _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
            }
          }, {
            key: "getIsVsanMaxCompatible",
            value: function getIsVsanMaxCompatible(data) {
              if (data instanceof _component_diskmgmt_model_vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_5__["VsanDiskListItem"]) {
                return data.isVsanMaxCompatible;
              } else if (this.groupByPerspective === _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_6__["DisksGroupByPerspective"].DISKS_BY_VENDOR && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_9__["VsanUiUtils"].isEmpty(data.eligibleDisks)) {
                return data.eligibleDisks[0].isVsanMaxCompatible;
              }

              return false;
            }
          }]);

          return ClaimForVsanMaxComponent;
        }(_component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_2__["TreeDatagridView"]);

        ClaimForVsanMaxComponent.CHILD_FIELD = "eligibleDisksInDatastoreContext";
        return ClaimForVsanMaxComponent;
      }();
      /***/

    },

    /***/
    "F2uQ":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/common/directive/on-modal-escape.directive.ts ***!
      \********************************************************************/

    /*! exports provided: OnModalEscapeDirective */

    /***/
    function F2uQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnModalEscapeDirective", function () {
        return OnModalEscapeDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /**
       * Used to overwrite the "escape" key behavior.
       * Should be used when having a inline modal which needs to be closed on escape.
       */


      var OnModalEscapeDirective = /*#__PURE__*/function () {
        function OnModalEscapeDirective() {
          _classCallCheck(this, OnModalEscapeDirective);

          this.onEscape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(OnModalEscapeDirective, [{
          key: "processEscape",
          value: function processEscape(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.onEscape.emit();
          }
        }]);

        return OnModalEscapeDirective;
      }();
      /***/

    },

    /***/
    "LBim":
    /*!*****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/disks-claiming-config-info.data.ts ***!
      \*****************************************************************************************/

    /*! exports provided: DisksClaimingConfigInfo */

    /***/
    function LBim(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksClaimingConfigInfo", function () {
        return DisksClaimingConfigInfo;
      });
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_map_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/map-util */
      "VGG7");
      /* harmony import */


      var _component_diskmgmt_model_claimed_disks_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/diskmgmt/model/claimed-disks-data */
      "tQZf");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /**
       * Holds summary information about disks claiming.
       */


      var DisksClaimingConfigInfo = /*#__PURE__*/function () {
        function DisksClaimingConfigInfo() {
          _classCallCheck(this, DisksClaimingConfigInfo);

          this.resetAllFields();
        }

        _createClass(DisksClaimingConfigInfo, [{
          key: "setInitialState",
          value: function setInitialState(allHostsInCluster) {
            this.resetAllFields();

            var _iterator11 = _createForOfIteratorHelper(allHostsInCluster),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var host = _step11.value;
                this.oldClaimedCapacity += host.claimedCapacity;
                this.oldClaimedCache += host.claimedCache;
                this.oldUnclaimedStorage += host.unclaimedStorage;
                this.initializeHostManagedByVsanSummary(host);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }, {
          key: "updateClaimingData",
          value: function updateClaimingData(hostsClaimData) {
            var _this9 = this;

            this.setClaimingToInitialState();
            this.resetValidationResult();
            hostsClaimData.forEach(function (host) {
              _this9.newClaimedCapacity += host.capacityFor(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage);
              _this9.newClaimedCache += host.capacityFor(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForCache);
              _this9.newUnclaimedStorage -= host.capacityFor(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage);
              _this9.newUnclaimedStorage -= host.capacityFor(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForCache);
              _this9.newUnclaimedStorage -= host.getManagedByVsanClaimedSpace();

              _this9.addDisksToManagedByVsanClaimOptions(host); // determine it we are claiming hybrid groups or all flash only


              host.getHostDisksToClaim().forEach(function (disk) {
                if (disk.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage) {
                  _this9.claimAllFlash = disk.markedAsFlash;
                }
              });
            });
          }
        }, {
          key: "updateManagedClaimingData",
          value: function updateManagedClaimingData(claimOption, value) {
            var claimedDisksData = this.getManagedByVsanClaimOptionSummary(claimOption);
            claimedDisksData.newClaimedCapacity = value;
          }
        }, {
          key: "totalCapacity",
          value: function totalCapacity() {
            return this.newUnclaimedStorage + this.totalUsedCapacity();
          }
        }, {
          key: "totalUsedCapacity",
          value: function totalUsedCapacity() {
            return this.getClaimedCapacity(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage) + this.getClaimedCapacity(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForCache) + _util_map_util__WEBPACK_IMPORTED_MODULE_1__["MapUtil"].sum(this.claimedDisksSummary, function (claimedDisk) {
              return claimedDisk.newClaimedCapacity;
            });
          }
        }, {
          key: "resetValidationResult",
          value: function resetValidationResult() {
            this.mixedDiskClaiming = false;
            this.disksNotEquallySpread = false;
          }
        }, {
          key: "clone",
          value: function clone() {
            var disksClaiming = new DisksClaimingConfigInfo();
            disksClaiming.oldClaimedCapacity = this.oldClaimedCapacity;
            disksClaiming.oldClaimedCache = this.oldClaimedCache;
            disksClaiming.oldUnclaimedStorage = this.oldUnclaimedStorage;
            disksClaiming.newClaimedCapacity = this.newClaimedCapacity;
            disksClaiming.newClaimedCache = this.newClaimedCache;
            disksClaiming.newUnclaimedStorage = this.newUnclaimedStorage;
            disksClaiming.claimAllFlash = this.claimAllFlash;
            disksClaiming.mixedDiskClaiming = this.mixedDiskClaiming;
            disksClaiming.disksNotEquallySpread = this.disksNotEquallySpread;
            disksClaiming.claimedDisksSummary = this.claimedDisksSummary;
            return disksClaiming;
          }
        }, {
          key: "hasNewClaimedCapacity",
          value: function hasNewClaimedCapacity(claimOption) {
            return this.getClaimedCapacity(claimOption) - this.getOldClaimedCapacity(claimOption) > 0;
          }
          /**
           * Return already claimed capacity
           */

        }, {
          key: "getOldClaimedCapacity",
          value: function getOldClaimedCapacity(claimOption) {
            if (claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForCache) {
              return this.oldClaimedCache;
            } else if (claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage) {
              return this.oldClaimedCapacity;
            } else {
              return this.claimedDisksSummary.has(claimOption) ? this.claimedDisksSummary.get(claimOption).oldClaimedCapacity : 0;
            }
          }
          /**
           * Return already claimed capacity + newly claimed capacity
           */

        }, {
          key: "getClaimedCapacity",
          value: function getClaimedCapacity(claimOption) {
            switch (claimOption) {
              case _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForCache:
                return this.newClaimedCache;

              case _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage:
                return this.newClaimedCapacity;

              default:
                return this.claimedDisksSummary.has(claimOption) ? this.claimedDisksSummary.get(claimOption).newClaimedCapacity : 0;
            }
          }
          /**
           * Return the number of disks contributing to the given capacity option.
           * This is currently only used when vSAN MAX is enabled.
           * IMPORTANT:
           * This method currently only works for disks that are written to claimedDisksSummary map,
           * e.g. the vSAN 1 disks that are not considered, when populating it cannot be retrieved from this method.
           * Check the TODO at claimedDisksSummary's definition above.
           */

        }, {
          key: "getClaimedDiskCount",
          value: function getClaimedDiskCount(claimOption) {
            return this.claimedDisksSummary.has(claimOption) ? this.claimedDisksSummary.get(claimOption).newClaimedDisksCount : 0;
          }
        }, {
          key: "resetAllFields",
          value: function resetAllFields() {
            this.oldClaimedCapacity = 0;
            this.oldClaimedCache = 0;
            this.oldUnclaimedStorage = 0;
            this.newClaimedCapacity = 0;
            this.newClaimedCache = 0;
            this.newUnclaimedStorage = 0;
            this.claimAllFlash = false;
            this.mixedDiskClaiming = false;
            this.disksNotEquallySpread = false;
            this.claimedDisksSummary = new Map();
          }
        }, {
          key: "setClaimingToInitialState",
          value: function setClaimingToInitialState() {
            this.newClaimedCapacity = this.oldClaimedCapacity;
            this.newClaimedCache = this.oldClaimedCache;
            this.newUnclaimedStorage = this.oldUnclaimedStorage;
            this.claimAllFlash = false;
            this.resetClaimedDisksInManagedByVsanSummary();
          }
        }, {
          key: "initializeHostManagedByVsanSummary",
          value: function initializeHostManagedByVsanSummary(host) {
            var _iterator12 = _createForOfIteratorHelper(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskUtil"].MANAGED_BY_VSAN_CLAIM_OPTIONS),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var claimOption = _step12.value;
                var claimedDisksData = this.getManagedByVsanClaimOptionSummary(claimOption);
                var hostClaimOptionSummary = host.getClaimOptionSummary(claimOption);

                if (hostClaimOptionSummary) {
                  claimedDisksData.oldClaimedDisksCount += hostClaimOptionSummary.oldClaimedDisksCount;
                  claimedDisksData.oldClaimedCapacity += hostClaimOptionSummary.oldClaimedCapacity;
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
        }, {
          key: "addDisksToManagedByVsanClaimOptions",
          value: function addDisksToManagedByVsanClaimOptions(host) {
            var _iterator13 = _createForOfIteratorHelper(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskUtil"].MANAGED_BY_VSAN_CLAIM_OPTIONS),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var claimOption = _step13.value;
                var hostClaimOptionSummary = host.getClaimOptionSummary(claimOption);

                if (hostClaimOptionSummary) {
                  var claimedDisksSummary = this.claimedDisksSummary.get(claimOption);
                  claimedDisksSummary.newClaimedDisksCount += hostClaimOptionSummary.newClaimedDisksCount;
                  claimedDisksSummary.newClaimedCapacity += hostClaimOptionSummary.newClaimedCapacity;
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        }, {
          key: "getManagedByVsanClaimOptionSummary",
          value: function getManagedByVsanClaimOptionSummary(claimOption) {
            if (this.claimedDisksSummary.has(claimOption)) {
              return this.claimedDisksSummary.get(claimOption);
            }

            var claimedDisksSummary = new _component_diskmgmt_model_claimed_disks_data__WEBPACK_IMPORTED_MODULE_2__["ClaimedDisksData"]();
            this.claimedDisksSummary.set(claimOption, claimedDisksSummary);
            return claimedDisksSummary;
          }
        }, {
          key: "resetClaimedDisksInManagedByVsanSummary",
          value: function resetClaimedDisksInManagedByVsanSummary() {
            _util_map_util__WEBPACK_IMPORTED_MODULE_1__["MapUtil"].forEach(this.claimedDisksSummary, function (summary) {
              summary.newClaimedDisksCount = summary.oldClaimedDisksCount;
              summary.newClaimedCapacity = summary.oldClaimedCapacity;
            });
          }
        }]);

        return DisksClaimingConfigInfo;
      }();
      /***/

    },

    /***/
    "PD/w":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/claim-root-list-item.data.ts ***!
      \***********************************************************************************/

    /*! exports provided: ClaimRootListItem */

    /***/
    function PDW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimRootListItem", function () {
        return ClaimRootListItem;
      });
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _vsan_base_list_item_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vsan-base-list-item.data */
      "jNlN");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimRootListItem = /*#__PURE__*/function (_vsan_base_list_item_) {
        _inherits(ClaimRootListItem, _vsan_base_list_item_);

        var _super3 = _createSuper(ClaimRootListItem);

        function ClaimRootListItem() {
          var _this10;

          _classCallCheck(this, ClaimRootListItem);

          _this10 = _super3.apply(this, arguments);
          _this10.contextDatastoreType = _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__["DatastoreType"].VSAN;
          _this10._capacityNum = 0;
          return _this10;
        }

        _createClass(ClaimRootListItem, [{
          key: "eligibleDisks",
          get:
          /**
           * Return all eligible disk.
           */
          function get() {
            return this._eligibleDisks;
          }
          /**
           * Returns whether there are some eligible disks for claim by vsan on the host.
           */
          ,
          set: function set(disks) {
            this._eligibleDisks = disks;
            this.claimOption = this.getUpdatedClaimOption();
            this._capacityNum = 0;

            if (this.eligibleDisks) {
              var _iterator14 = _createForOfIteratorHelper(this.eligibleDisks),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var disk = _step14.value;
                  this._capacityNum += disk.capacityNum;
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          }
        }, {
          key: "hasEligibleDisks",
          get: function get() {
            var _a;

            return ((_a = this._eligibleDisks) === null || _a === void 0 ? void 0 : _a.length) > 0;
          }
        }, {
          key: "capacityNum",
          get: function get() {
            return this._capacityNum;
          }
          /**
           * Gets the claim option for the root item
           */

        }, {
          key: "claimOption",
          get: function get() {
            return this._claimOption;
          },
          set: function set(newValue) {
            this._claimOption = newValue;

            if (this._claimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].Custom) {
              this.updateChildrenClaimOption();
            }
          }
          /**
           * Updates the claim option for model's children:
           * Claim children when a model group is claimed.
           */

        }, {
          key: "updateChildrenClaimOption",
          value: function updateChildrenClaimOption() {
            if (!this.eligibleDisks) {
              return;
            }

            var _iterator15 = _createForOfIteratorHelper(this.eligibleDisksInDatastoreContext),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var disk = _step15.value;
                disk.claimOption = this.claimOption;
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }
          /**
           * Updates the claim option according to the children ones.
           */

        }, {
          key: "updateClaimOption",
          value: function updateClaimOption(datastoreType) {
            this.contextDatastoreType = datastoreType;
            this.claimOption = this.getUpdatedClaimOption();
          }
        }, {
          key: "getUpdatedClaimOption",
          value: function getUpdatedClaimOption() {
            var newClaimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].DoNotClaim;
            var disks = this.eligibleDisksInDatastoreContext;

            if (disks.length > 0) {
              newClaimOption = disks[0].claimOption;

              var _iterator16 = _createForOfIteratorHelper(disks),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var disk = _step16.value;

                  if (newClaimOption !== disk.claimOption) {
                    newClaimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].Custom;
                    break;
                  }
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }

            return newClaimOption;
          }
          /**
           * Return disks which can be claimed in the context of a datastore type.
           * That mean that these disks have to be eligible and not to be claimed for another datastore type already.
           */

        }, {
          key: "eligibleDisksInDatastoreContext",
          get: function get() {
            var _this11 = this;

            if (!this.eligibleDisks || !this.eligibleDisks.length) {
              return [];
            }

            return this.eligibleDisks.filter(function (disk) {
              switch (_this11.contextDatastoreType) {
                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__["DatastoreType"].VSAN:
                  return _this11.isDiskEligible(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].isClaimedForVsanDirect, _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].VSAN_CLAIM_OPTIONS, disk);

                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__["DatastoreType"].VSAN_DIRECT:
                  return _this11.isDiskEligible(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].isClaimedForVsan, _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_2__["DiskMgmtDiskUtil"].VSAN_DIRECT_CLAIM_OPTIONS, disk);

                default:
                  return false;
              }
            });
          }
        }, {
          key: "isDiskEligible",
          value: function isDiskEligible(isClaimedForOtherDsType, validDsTypeClaimOptions, disk) {
            var isNotClaimedForOtherDsType = !isClaimedForOtherDsType(disk.claimOption);
            var canBeClaimedForThatDsType = validDsTypeClaimOptions.some(function (claimOption) {
              return disk.possibleClaimOptions && disk.possibleClaimOptions.includes(claimOption);
            });
            return isNotClaimedForOtherDsType && canBeClaimedForThatDsType;
          }
        }]);

        return ClaimRootListItem;
      }(_vsan_base_list_item_data__WEBPACK_IMPORTED_MODULE_3__["VsanBaseListItem"]);
      /***/

    },

    /***/
    "Wx1g":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/validation-panel.scss.shim.ngstyle.js ***!
      \**************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Wx1g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".issues-list-popup-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L3ZhbGlkYXRpb24tcGFuZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQUVBO0VBQ0csV0FBQTtBQUFIIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L3ZhbGlkYXRpb24tcGFuZWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi5pc3N1ZXMtbGlzdC1wb3B1cC1oZWFkZXIge1xuICAgd2lkdGg6IDEwMCU7XG59Il19 */"];
      /***/
    },

    /***/
    "Xvjo":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-disks.component.ngfactory.js ***!
      \***********************************************************************************/

    /*! exports provided: RenderType_ClaimDisksComponent, View_ClaimDisksComponent_0, View_ClaimDisksComponent_Host_0, ClaimDisksComponentNgFactory */

    /***/
    function Xvjo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimDisksComponent", function () {
        return RenderType_ClaimDisksComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimDisksComponent_0", function () {
        return View_ClaimDisksComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimDisksComponent_Host_0", function () {
        return View_ClaimDisksComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDisksComponentNgFactory", function () {
        return ClaimDisksComponentNgFactory;
      });
      /* harmony import */


      var _claim_disks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./claim-disks.scss.shim.ngstyle */
      "mamk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validation/validation.component */
      "ie44");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _claim_for_vsan_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./claim-for-vsan.component.ngfactory */
      "a2Pd");
      /* harmony import */


      var _claim_for_vsan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./claim-for-vsan.component */
      "8OsR");
      /* harmony import */


      var _claim_for_vsan_max_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./claim-for-vsan-max.component.ngfactory */
      "xNd/");
      /* harmony import */


      var _claim_for_vsan_max_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./claim-for-vsan-max.component */
      "CFcp");
      /* harmony import */


      var _claim_for_vsan_direct_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./claim-for-vsan-direct.component.ngfactory */
      "731n");
      /* harmony import */


      var _claim_for_vsan_direct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./claim-for-vsan-direct.component */
      "fIKf");
      /* harmony import */


      var _claim_for_pmem_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./claim-for-pmem.component.ngfactory */
      "36Ri");
      /* harmony import */


      var _claim_for_pmem_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./claim-for-pmem.component */
      "6oWG");
      /* harmony import */


      var _disks_capacity_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./disks-capacity-chart.component.ngfactory */
      "rW98");
      /* harmony import */


      var _disks_capacity_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./disks-capacity-chart.component */
      "69kW");
      /* harmony import */


      var _validation_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./validation-panel.component.ngfactory */
      "8nch");
      /* harmony import */


      var _validation_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./validation-panel.component */
      "zugg");
      /* harmony import */


      var _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _claim_disks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./claim-disks.component */
      "2xAL");
      /* harmony import */


      var _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _disks_property_retriever__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./disks-property-retriever */
      "l0nN");
      /* harmony import */


      var _service_data_access_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../service/data-access.service */
      "WEh2");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../../generated/vsan-capability-provider */
      "y/yc");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimDisksComponent = [_claim_disks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ClaimDisksComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ClaimDisksComponent,
        data: {}
      });

      function View_ClaimDisksComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ClaimDisksComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "semi-auto-claim-validations"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_ClaimDisksComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_ClaimDisksComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[3, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimDisksComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 14);

          _ck(_v, 5, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 16777216, null, 0, 3, "button", [["clrTabLink", ""], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).activate() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.changeDatastoreType(_v.context.$implicit) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, [[2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimDisksComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", "datastore-type-" + _v.context.$implicit, "");

          _ck(_v, 8, 0, currVal_9);

          var currVal_11 = _v.context.$implicit === _co.selectedDatastoreType;

          _ck(_v, 13, 0, currVal_11);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;
          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).addLinkClasses;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).addLinkClasses;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ariaControls;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tabLinkId;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).active;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).active;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tabindex;

          _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _co.getDatastoreTypeLabel(_v.context.$implicit);

          _ck(_v, 10, 0, currVal_10);
        });
      }

      function View_ClaimDisksComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "clr-tabs", [], [[2, "tabs-vertical", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabs_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵec"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabs"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          tabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.datastoreTypes;

          _ck(_v, 10, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).isVertical;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ClaimDisksComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_ClaimDisksComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 14);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.datastoreTypes.length > 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.datastoreTypes.length < 2;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_ClaimDisksComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_ClaimDisksComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 18);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_ClaimDisksComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 16);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_ClaimDisksComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 20);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_ClaimDisksComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 22);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.selectedDatastoreType === _co.DatastoreType.VSAN;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.selectedDatastoreType === _co.DatastoreType.VSAN_DIRECT;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.selectedDatastoreType === _co.DatastoreType.PMEM;

          _ck(_v, 8, 0, currVal_2);
        }, null);
      }

      function View_ClaimDisksComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-claim-for-vsan", [], null, [[null, "update"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("update" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _claim_for_vsan_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClaimForVsanComponent_0"], _claim_for_vsan_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClaimForVsanComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _claim_for_vsan_component__WEBPACK_IMPORTED_MODULE_8__["ClaimForVsanComponent"], [], {
          allHostsInCluster: [0, "allHostsInCluster"],
          disksByVendor: [1, "disksByVendor"],
          isStandalone: [2, "isStandalone"]
        }, {
          update: "update"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.allHostsInCluster;
          var currVal_1 = _co.disksByVendor;
          var currVal_2 = _co.isStandalone;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimDisksComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-claim-for-vsan-max", [], null, [[null, "update"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("update" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _claim_for_vsan_max_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClaimForVsanMaxComponent_0"], _claim_for_vsan_max_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClaimForVsanMaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _claim_for_vsan_max_component__WEBPACK_IMPORTED_MODULE_10__["ClaimForVsanMaxComponent"], [], {
          disksByHost: [0, "disksByHost"],
          disksByVendor: [1, "disksByVendor"],
          isStandalone: [2, "isStandalone"]
        }, {
          update: "update"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.allHostsInCluster;
          var currVal_1 = _co.disksByVendor;
          var currVal_2 = _co.isStandalone;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimDisksComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-claim-for-vsan-direct", [], null, [[null, "update"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("update" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _claim_for_vsan_direct_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ClaimForVsanDirectComponent_0"], _claim_for_vsan_direct_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ClaimForVsanDirectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _claim_for_vsan_direct_component__WEBPACK_IMPORTED_MODULE_12__["ClaimForVsanDirectComponent"], [], {
          allHostsInCluster: [0, "allHostsInCluster"],
          disksByVendor: [1, "disksByVendor"],
          isStandalone: [2, "isStandalone"]
        }, {
          update: "update"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.allHostsInCluster;
          var currVal_1 = _co.disksByVendor;
          var currVal_2 = _co.isStandalone;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimDisksComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-claim-for-pmem", [], null, [[null, "update"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("update" === en) {
            var pd_0 = _co.update() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _claim_for_pmem_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClaimForPmemComponent_0"], _claim_for_pmem_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClaimForPmemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _claim_for_pmem_component__WEBPACK_IMPORTED_MODULE_14__["ClaimForPmemComponent"], [], {
          allHostsInCluster: [0, "allHostsInCluster"]
        }, {
          update: "update"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.allHostsInCluster;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_ClaimDisksComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "vsan-disks-capacity-chart", [], null, null, null, _disks_capacity_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DisksCapacityChartComponent_0"], _disks_capacity_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DisksCapacityChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _disks_capacity_chart_component__WEBPACK_IMPORTED_MODULE_16__["DisksCapacityChartComponent"], [], {
          disksClaiming: [0, "disksClaiming"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["dsType", 2]], null, 0, null, View_ClaimDisksComponent_13)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["vsan", 2]], null, 0, null, View_ClaimDisksComponent_20)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["vsanMax", 2]], null, 0, null, View_ClaimDisksComponent_21)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["vmfs", 2]], null, 0, null, View_ClaimDisksComponent_22)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["pmem", 2]], null, 0, null, View_ClaimDisksComponent_23)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "vsan-validation-panel", [["id", "validationContainer"]], null, [[null, "isConfigAcceptable"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("isConfigAcceptable" === en) {
            var pd_0 = _co.configValid.emit($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _validation_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_ValidationPanelComponent_0"], _validation_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_ValidationPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 573440, null, 0, _validation_panel_component__WEBPACK_IMPORTED_MODULE_18__["ValidationPanelComponent"], [_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_19__["SpaceEfficiencyService"]], {
          vsanConfigSpec: [0, "vsanConfigSpec"],
          disksClaimingConfigInfo: [1, "disksClaimingConfigInfo"],
          noSelectionIsError: [2, "noSelectionIsError"],
          hostsData: [3, "hostsData"]
        }, {
          isConfigAcceptable: "isConfigAcceptable"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.disksClaimingConfigInfo;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = !_co.vsanConfigSpec.isVsanMaxEnabled;

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = _co.vsanConfigSpec.isVsanMaxEnabled;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.vsanConfigSpec;
          var currVal_5 = _co.disksClaimingConfigInfo;
          var currVal_6 = _co.isStandalone;
          var currVal_7 = _co.allHostsInCluster;

          _ck(_v, 25, 0, currVal_4, currVal_5, currVal_6, currVal_7);
        }, null);
      }

      function View_ClaimDisksComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_20__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.loading;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.loading;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_ClaimDisksComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-claim-disks", [], null, null, null, View_ClaimDisksComponent_0, RenderType_ClaimDisksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _claim_disks_component__WEBPACK_IMPORTED_MODULE_21__["ClaimDisksComponent"], [_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_22__["DataServiceClient"], _disks_property_retriever__WEBPACK_IMPORTED_MODULE_23__["DisksPropertyRetriever"], _service_data_access_service__WEBPACK_IMPORTED_MODULE_24__["DataAccessService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_25__["VsanConfigService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_26__["VsanCapabilityProvider"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ClaimDisksComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-claim-disks", _claim_disks_component__WEBPACK_IMPORTED_MODULE_21__["ClaimDisksComponent"], View_ClaimDisksComponent_Host_0, {
        clusterRef: "clusterRef",
        isStandalone: "isStandalone",
        vsanConfigSpec: "vsanConfigSpec",
        hostsClaimingData: "hostsClaimingData"
      }, {
        configUpdated: "configUpdated",
        disksClaimingConfigUpdated: "disksClaimingConfigUpdated",
        configValid: "configValid"
      }, []);
      /***/

    },

    /***/
    "YY5P":
    /*!***************************************************!*\
      !*** ./src/app/generated/vsan-disk-claim-spec.ts ***!
      \***************************************************/

    /*! exports provided: VsanDiskClaimSpec */

    /***/
    function YY5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDiskClaimSpec", function () {
        return VsanDiskClaimSpec;
      });

      var VsanDiskClaimSpec;

      (function (VsanDiskClaimSpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (disk, claimOption, markedAsFlash) {
          return {
            disk: disk,
            claimOption: claimOption,
            markedAsFlash: markedAsFlash
          };
        };

        VsanDiskClaimSpec.Factory = Factory;
      })(VsanDiskClaimSpec || (VsanDiskClaimSpec = {})); //module VsanDiskClaimSpec

      /***/

    },

    /***/
    "Ydj5":
    /*!*****************************************************************!*\
      !*** ./src/app/generated/vsan-claim-host-disk-mappings-spec.ts ***!
      \*****************************************************************/

    /*! exports provided: VsanClaimHostDiskMappingsSpec */

    /***/
    function Ydj5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanClaimHostDiskMappingsSpec", function () {
        return VsanClaimHostDiskMappingsSpec;
      });

      var VsanClaimHostDiskMappingsSpec;

      (function (VsanClaimHostDiskMappingsSpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (clusterRef, hostRef, disks, isAllFlashSupported) {
          return {
            clusterRef: clusterRef,
            hostRef: hostRef,
            disks: disks,
            isAllFlashSupported: isAllFlashSupported
          };
        };

        VsanClaimHostDiskMappingsSpec.Factory = Factory;
      })(VsanClaimHostDiskMappingsSpec || (VsanClaimHostDiskMappingsSpec = {})); //module VsanClaimHostDiskMappingsSpec

      /***/

    },

    /***/
    "a2Pd":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_ClaimForVsanComponent, View_ClaimForVsanComponent_0, View_ClaimForVsanComponent_Host_0, ClaimForVsanComponentNgFactory */

    /***/
    function a2Pd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimForVsanComponent", function () {
        return RenderType_ClaimForVsanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForVsanComponent_0", function () {
        return View_ClaimForVsanComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForVsanComponent_Host_0", function () {
        return View_ClaimForVsanComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForVsanComponentNgFactory", function () {
        return ClaimForVsanComponentNgFactory;
      });
      /* harmony import */


      var _claim_for_vsan_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./claim-for-vsan.scss.shim.ngstyle */
      "zlqU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../datagrid/tree-column.component.ngfactory */
      "2xL0");
      /* harmony import */


      var _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../datagrid/tree-column.component */
      "UczD");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_accessibility_refocus_after_change_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directive/accessibility/refocus-after-change.directive */
      "8FUb");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component.ngfactory */
      "2CYb");
      /* harmony import */


      var _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component */
      "8Y4q");
      /* harmony import */


      var _directive_on_modal_escape_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../directive/on-modal-escape.directive */
      "F2uQ");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./perspective/disks-group-by-perspective.component.ngfactory */
      "fEff");
      /* harmony import */


      var _perspective_disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./perspective/disks-group-by-perspective.component */
      "5wEe");
      /* harmony import */


      var _claim_for_vsan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./claim-for-vsan.component */
      "8OsR");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimForVsanComponent = [_claim_for_vsan_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ClaimForVsanComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ClaimForVsanComponent,
        data: {}
      });

      function View_ClaimForVsanComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.totalCapacity"));

          var currVal_3 = _co.totalCapacityFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "capacity";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.host"));

          var currVal_3 = _co.hostNameFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "hostName";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.transportType"));

          var currVal_3 = _co.transportTypeFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "transportType";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.diskAdapter"));

          var currVal_3 = _co.diskAdapterFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "diskAdapter";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.claimOptionIcon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ClaimForVsanComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n               ", "\n            "]))], function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit == _v.parent.context.$implicit.data.claimOption;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _co.localizeClaimOption(_v.context.$implicit);

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_ClaimForVsanComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "clr-tooltip-content", [["clrSize", "lg"]], [[2, "tooltip-content", null], [4, "opacity", null], [1, "role", 0], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrTooltipContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrTooltipContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTooltipContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵei"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "span", [["id", "migration-mode-tooltip"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var currVal_5 = "lg";

          _ck(_v, 1, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;
          var currVal_1 = 1;
          var currVal_2 = "tooltip";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _co.onWarningDriveTypeTooltip;

          _ck(_v, 4, 0, currVal_6);
        });
      }

      function View_ClaimForVsanComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "clr-tooltip", [], [[2, "tooltip", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrTooltip_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrTooltip"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTooltip"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵei"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵei"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 3, "clr-icon", [["class", "is-warning"], ["clrTooltipTrigger", ""], ["shape", "warning"], ["tabindex", "0"]], [[2, "tooltip-trigger", null], [1, "aria-describedby", 0], [1, "role", 0]], [[null, "mouseenter"], [null, "focus"], [null, "mouseleave"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("mouseenter" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).showTooltip() !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).showTooltip() !== false;
            ad = pd_1 && ad;
          }

          if ("mouseleave" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).hideTooltip() !== false;
            ad = pd_2 && ad;
          }

          if ("blur" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).hideTooltip() !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTooltipTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵei"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var currVal_4 = null;

          _ck(_v, 13, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ariaDescribedBy;

          var currVal_3 = "button";

          _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3);
        });
      }

      function View_ClaimForVsanComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n               ", "\n            "]))], function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit === _v.parent.parent.context.$implicit.data.driveType;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _co.ClaimDisksUtil.getLocalizedDriveType(_v.context.$implicit);

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_ClaimForVsanComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 7, "select", [["clrSelect", ""], ["vsan-refocus-after-change", ""]], [[2, "clr-select", null], [8, "id", 0]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("blur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).triggerValidation() !== false;
            ad = pd_0 && ad;
          }

          if ("change" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).processChange($event) !== false;
            ad = pd_1 && ad;
          }

          if ("change" === en) {
            var pd_2 = _co.changeDriveType($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _directive_accessibility_refocus_after_change_directive__WEBPACK_IMPORTED_MODULE_10__["RefocusAfterChangeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _v.parent.context.$implicit.data.possibleDriveTypes;

          _ck(_v, 6, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_11__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _v.parent.context.$implicit.data.capacity;

          _ck(_v, 6, 0, currVal_5);
        });
      }

      function View_ClaimForVsanComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getHostIcon(_v.parent.parent.context.$implicit.data);

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ClaimForVsanComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 9, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_11__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _co.getHostIcon(_v.parent.context.$implicit.data);

          _ck(_v, 8, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _v.parent.context.$implicit.data.hostName;

          _ck(_v, 9, 0, currVal_6);
        });
      }

      function View_ClaimForVsanComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.data.transportType;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForVsanComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.data.diskAdapter;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForVsanComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 70, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-selected", null], [2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectTarget(_v.context.$implicit, $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 16, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_11__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "vsan-expand", [], null, null, null, _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TreeExpanderComponent_0"], _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TreeExpanderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_13__["TreeExpanderComponent"], [], {
          row: [0, "row"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, 2, 16, "clr-dg-cell", [["class", "dropdown-cell"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 16777216, null, 0, 7, "select", [["clrSelect", ""], ["vsan-refocus-after-change", ""]], [[2, "clr-select", null], [8, "id", 0]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("blur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).triggerValidation() !== false;
            ad = pd_0 && ad;
          }

          if ("change" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).processChange($event) !== false;
            ad = pd_1 && ad;
          }

          if ("change" === en) {
            var pd_2 = _co.changeClaimOption(_v.context.$implicit.data, $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _directive_accessibility_refocus_after_change_directive__WEBPACK_IMPORTED_MODULE_10__["RefocusAfterChangeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 16777216, null, 2, 10, "clr-dg-cell", [["class", "text-nowrap dropdown-cell"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 114688, [[14, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 147456, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 19, 0, currVal_9);

          _ck(_v, 30, 0);

          var currVal_14 = _co.isStandalone;

          _ck(_v, 35, 0, currVal_14);

          _ck(_v, 38, 0);

          var currVal_17 = _co.getClaimOptions(_v.context.$implicit.data);

          _ck(_v, 43, 0, currVal_17);

          _ck(_v, 48, 0);

          var currVal_20 = _co.hasDriveTypeWarningImage(_v.context.$implicit.data);

          _ck(_v, 53, 0, currVal_20);

          var currVal_21 = _v.context.$implicit.data.driveTypeLabel;

          _ck(_v, 56, 0, currVal_21);

          var currVal_22 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_HOST;

          _ck(_v, 60, 0, currVal_22);

          var currVal_23 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_VENDOR;

          _ck(_v, 63, 0, currVal_23);

          var currVal_24 = _co.isStandalone;

          _ck(_v, 66, 0, currVal_24);

          var currVal_25 = _co.isStandalone;

          _ck(_v, 69, 0, currVal_25);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isRowSelected(_v.context.$implicit);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _v.context.$implicit.data.image;

          _ck(_v, 21, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.data.name;

          _ck(_v, 26, 0, currVal_11);

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).signpost.length > 0;

          _ck(_v, 29, 0, currVal_12, currVal_13);

          var currVal_15 = true;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).id;

          _ck(_v, 37, 0, currVal_15, currVal_16);

          var currVal_18 = true;
          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).signpost.length > 0;

          _ck(_v, 47, 0, currVal_18, currVal_19);
        });
      }

      function View_ClaimForVsanComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "div", [["class", "modal"], ["id", "warning-dialog"], ["vsan-on-modal-escape", ""]], null, [[null, "onEscape"], ["document", "keyup.escape"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("document:keyup.escape" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).processEscape($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onEscape" === en) {
            var pd_1 = (_co.showWarning = false) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _directive_on_modal_escape_directive__WEBPACK_IMPORTED_MODULE_14__["OnModalEscapeDirective"], [], null, {
          onEscape: "onEscape"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 25, "div", [["class", "modal-dialog"], ["role", "dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 22, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h3", [["class", "modal-title"], ["id", "warning-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["id", "warning-text"]], [[8, "className", 0], [1, "tabindex", 0]], [[null, "mousedown"], [null, "mouseup"]], function (_v, en, $event) {
          var ad = true;

          if ("mousedown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).mouseDown() !== false;
            ad = pd_0 && ad;
          }

          if ("mouseup" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).mouseUp() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModalBody"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 9, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "button", [["class", "btn btn-outline"], ["id", "dismissal-button"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.cancelMarkAsAction() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](21, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["id", "confirmation-button"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.warningConfirmationHandler() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](25, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "modal-header ", _co.warningHeaderClass, "");

          _ck(_v, 7, 0, currVal_0);

          var currVal_1 = _co.warningTitle;

          _ck(_v, 10, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "modal-body ", _co.warningContentClass, "");

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tabindex;

          _ck(_v, 13, 0, currVal_2, currVal_3);

          var currVal_4 = _co.warningText;

          _ck(_v, 15, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _ck(_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.no"));

          _ck(_v, 20, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _ck(_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.yes"));

          _ck(_v, 24, 0, currVal_6);
        });
      }

      function View_ClaimForVsanComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["aria-hidden", "true"], ["class", "modal-backdrop opaque-backdrop fade in"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null);
      }

      function View_ClaimForVsanComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["id", "vsan-claim-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "vsan-disks-group-by-perspective", [["class", "clr-offset-8 clr-col-4"]], null, [[null, "changePerspective"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("changePerspective" === en) {
            var pd_0 = _co.changePerspective($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DisksGroupByPerspectiveComponent_0"], _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DisksGroupByPerspectiveComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, _perspective_disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_17__["DisksGroupByPerspectiveComponent"], [], null, {
          changePerspective: "changePerspective"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 99, "clr-datagrid", [["class", "datagrid-compact"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          loading: [0, "loading"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 16777216, null, null, 13, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, 1, 2, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](70, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](84, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, 2, 8, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, 2, 3, "clr-dg-pagination", [], [[2, "pagination", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridPagination_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]], {
          pageSize: [0, "pageSize"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _pageSizeComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](112, 1, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 10, 0);

          var currVal_3 = _co.datagridLoading;

          _ck(_v, 29, 0, currVal_3);

          _ck(_v, 49, 0);

          var currVal_6 = _co.nameColumnTitle;
          var currVal_7 = _co.nameFilter;
          var currVal_8 = _co.datagrid;
          var currVal_9 = "name";

          _ck(_v, 56, 0, currVal_6, currVal_7, currVal_8, currVal_9);

          _ck(_v, 64, 0);

          _ck(_v, 76, 0);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 0, _ck(_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.driveType"));

          var currVal_16 = _co.driveTypeFilter;
          var currVal_17 = _co.datagrid;
          var currVal_18 = "driveTypeLabel";

          _ck(_v, 83, 0, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_19 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_HOST;

          _ck(_v, 89, 0, currVal_19);

          var currVal_20 = _co.selectedPerspective == _co.DisksGroupByPerspective.DISKS_BY_VENDOR;

          _ck(_v, 92, 0, currVal_20);

          var currVal_21 = _co.isStandalone;

          _ck(_v, 95, 0, currVal_21);

          var currVal_22 = _co.isStandalone;

          _ck(_v, 98, 0, currVal_22);

          var currVal_23 = _co.datagrid.rows;

          _ck(_v, 102, 0, currVal_23);

          var currVal_26 = _co.ClaimDisksUtil.DISKS_PER_DATAGRID_PAGE;

          _ck(_v, 110, 0, currVal_26);

          var currVal_28 = _co.showWarning;

          _ck(_v, 118, 0, currVal_28);

          var currVal_29 = _co.showWarning;

          _ck(_v, 121, 0, currVal_29);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.dialog.semiAutoClaimDialog.confInfo.vsan"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).detailService.isOpen;

          _ck(_v, 15, 0, currVal_1, currVal_2);

          var currVal_4 = true;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ariaSort;

          _ck(_v, 45, 0, currVal_4, currVal_5);

          var currVal_10 = true;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ariaSort;

          _ck(_v, 60, 0, currVal_10, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 69, 0, _ck(_v, 70, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.claimFor"));

          _ck(_v, 69, 0, currVal_12);

          var currVal_13 = true;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ariaSort;

          _ck(_v, 72, 0, currVal_13, currVal_14);

          var currVal_24 = true;

          _ck(_v, 105, 0, currVal_24);

          var currVal_25 = true;

          _ck(_v, 109, 0, currVal_25);

          var currVal_27 = _co.footerLabel.getLabel(_co.selectedPerspective);

          _ck(_v, 112, 0, currVal_27);
        });
      }

      function View_ClaimForVsanComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-claim-for-vsan", [], null, null, null, View_ClaimForVsanComponent_0, RenderType_ClaimForVsanComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _claim_for_vsan_component__WEBPACK_IMPORTED_MODULE_18__["ClaimForVsanComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ClaimForVsanComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-claim-for-vsan", _claim_for_vsan_component__WEBPACK_IMPORTED_MODULE_18__["ClaimForVsanComponent"], View_ClaimForVsanComponent_Host_0, {
        allHostsInCluster: "allHostsInCluster",
        disksByVendor: "disksByVendor",
        isStandalone: "isStandalone"
      }, {
        update: "update"
      }, []);
      /***/

    },

    /***/
    "cBsf":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/disks-capacity-chart.scss.shim.ngstyle.js ***!
      \******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function cBsf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n#used-capacity-overview[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2Rpc2tzLWNhcGFjaXR5LWNoYXJ0LnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBY0g7QUFUQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkd1SDBCO0FIM0c3QiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9kaXNrbWdtdC9kaXNrcy1jYXBhY2l0eS1jaGFydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICAvLyBUaGUgdnNhbi1jYXBhY2l0eS1iYXItY2hhcnQgaGFzIHBhZGRpbmdzIG9uIHRvcCBhbmQgYm90dG9tIG9mIHRoZSBjaGFydCwgZHVlIHRvIHRoZSBoaWdoY2hhcnRzIGltcGxlbWVudGF0aW9uXG4gIC8vIFRodXMgbm8gY2hpbGQtYm90dG9tLXNwYWNpbmcgaXMgbmVlZGVkLlxufVxuXG4jdXNlZC1jYXBhY2l0eS1vdmVydmlldyB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0O1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "d4/t":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan-max.scss.shim.ngstyle.js ***!
      \****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function d4T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.name-column[_ngcontent-%COMP%] {\n  width: 14rem !important;\n}\n.compatibility-column[_ngcontent-%COMP%] {\n  width: 6.5rem !important;\n}\n.claim-column[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  width: 3.5rem !important;\n  flex: 0 0 auto;\n}\n.claim-column[_ngcontent-%COMP%]     .datagrid-column-title {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci12c2FuLW1heC5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTE9BO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVVIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBQWhCQTtFQUNHLHVCQUFBO0FBbUJIO0FBaEJBO0VBQ0csd0JBQUE7QUFtQkg7QUFmQTtFQUVHLGlCQXBCa0I7RUFxQmxCLHdCQUFBO0VBQ0EsY0FBQTtBQWlCSDtBQWhCRztFQUNHLHVCQUFBO0FBa0JOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci12c2FuLW1heC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEtMjAyMiBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJG5hbWUtY29sdW1uLXdpZHRoOiAxNHJlbTtcbiRjb21wYXRpYmlsaXR5LWNvbHVtbi13aWR0aDogNi41cmVtO1xuJGNsYWltLWNvbHVtbi13aWR0aDogMy41cmVtO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmcoJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nKTtcbn1cblxuLm5hbWUtY29sdW1uIHtcbiAgIHdpZHRoOiAkbmFtZS1jb2x1bW4td2lkdGggIWltcG9ydGFudDtcbn1cblxuLmNvbXBhdGliaWxpdHktY29sdW1uIHtcbiAgIHdpZHRoOiAkY29tcGF0aWJpbGl0eS1jb2x1bW4td2lkdGggIWltcG9ydGFudDtcbn1cblxuLy8gUGxhY2UgdGhlIFwiQ2xhaW1cIiBoZWFkZXIgaW4gdGhlIGNlbnRlciBvZiB0aGUgY29sdW1uLCB0byBhbGlnbiBpdCB3aXRoIHRoZSBjaGVja2JveC5cbi5jbGFpbS1jb2x1bW4ge1xuICAgLy8gT3ZlcnJpZGUgdGhlIHdpZHRoIHRvIGF2b2lkIGEgbG90IG9mIGV4dHJhIHNwYWNlIGFyb3VuZCB0aGUgaGVhZGVyLCBzaW5jZSB0aGlzIGlzIGEgc2hvcnQgY29sdW1uXG4gICBtaW4td2lkdGg6ICRjbGFpbS1jb2x1bW4td2lkdGg7XG4gICB3aWR0aDogJGNsYWltLWNvbHVtbi13aWR0aCAhaW1wb3J0YW50O1xuICAgZmxleDogMCAwIGF1dG87XG4gICA6Om5nLWRlZXAgLmRhdGFncmlkLWNvbHVtbi10aXRsZSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "eJNu":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-pmem.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function eJNu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  padding-left: 0.15rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-height: auto;\n}\nclr-datagrid[_ngcontent-%COMP%]   .host-name-column[_ngcontent-%COMP%] {\n  width: 8.4rem;\n}\nclr-datagrid[_ngcontent-%COMP%]   .storage-name-column[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n.clr-checkbox-wrapper[_ngcontent-%COMP%]   .clr-control-label[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci1wbWVtLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMTUE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEscUJHU1E7QUhDWDtBRTZCRztFQUNHLGdDQUFBO0FGM0JOO0FFNkJHOztFQUdHLGdDQUFBO0FGNUJOO0FFOEJHO0VBQ0csOEJBQUE7QUY1Qk47QUFkQTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtBQWlCSDtBQWZHO0VBQ0csYUFuQm1CO0FBb0N6QjtBQWRHO0VBQ0csWUF0QnNCO0FBc0M1QjtBQVpBO0VBQ0cscUJBQUE7QUFlSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9kaXNrbWdtdC9jbGFpbS1mb3ItcG1lbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAtMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJGhvc3QtbmFtZS1jb2x1bW4td2lkdGg6IDguNHJlbTtcbiRzdG9yYWdlLW5hbWUtY29sdW1uLXdpZHRoOiAxOHJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIC8vIEF2b2lkIHRyaW1taW5nIGFueSBvZiB0aGUgcGFnZSdzIGNvbnRlbnRcbiAgIHBhZGRpbmctbGVmdDogJHZzYW4tb3V0bGluZS1zaXplO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi8vIE91ciBkZWZhdWx0IHN0eWxlIGlzIHRvIGV4dGVuZCBjbGFyaXR5IGRhdGFnaXJkcyB0byB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLFxuLy8gYnV0IGluIHRoaXMgcGFydGljdWxhciBjYXNlIHdlIGRvbid0IHdhbnQgdG9cbmNsci1kYXRhZ3JpZCB7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi1oZWlnaHQ6IGF1dG87IC8vIFRoZSBjbGFyaXR5IG1pbi1oZWlnaHQgZml4IGludHJvZHVjZXMgZW1wdHkgc3BhY2UgaW5zaWRlIHRoZSBncmlkXG5cbiAgIC5ob3N0LW5hbWUtY29sdW1uIHtcbiAgICAgIHdpZHRoOiAkaG9zdC1uYW1lLWNvbHVtbi13aWR0aDtcbiAgIH1cblxuICAgLnN0b3JhZ2UtbmFtZS1jb2x1bW4ge1xuICAgICAgd2lkdGg6ICRzdG9yYWdlLW5hbWUtY29sdW1uLXdpZHRoO1xuICAgfVxufVxuXG4uY2xyLWNoZWNrYm94LXdyYXBwZXIgLmNsci1jb250cm9sLWxhYmVsIHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "fEff":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/perspective/disks-group-by-perspective.component.ngfactory.js ***!
      \**************************************************************************************************************/

    /*! exports provided: RenderType_DisksGroupByPerspectiveComponent, View_DisksGroupByPerspectiveComponent_0, View_DisksGroupByPerspectiveComponent_Host_0, DisksGroupByPerspectiveComponentNgFactory */

    /***/
    function fEff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DisksGroupByPerspectiveComponent", function () {
        return RenderType_DisksGroupByPerspectiveComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DisksGroupByPerspectiveComponent_0", function () {
        return View_DisksGroupByPerspectiveComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DisksGroupByPerspectiveComponent_Host_0", function () {
        return View_DisksGroupByPerspectiveComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksGroupByPerspectiveComponentNgFactory", function () {
        return DisksGroupByPerspectiveComponentNgFactory;
      });
      /* harmony import */


      var _disks_group_by_perspective_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./disks-group-by-perspective.scss.shim.ngstyle */
      "hEjE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./disks-group-by-perspective.component */
      "5wEe");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DisksGroupByPerspectiveComponent = [_disks_group_by_perspective_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DisksGroupByPerspectiveComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DisksGroupByPerspectiveComponent,
        data: {}
      });

      function View_DisksGroupByPerspectiveComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
          ngValue: [0, "ngValue"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          ngValue: [0, "ngValue"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n         ", "\n      "]))], function (_ck, _v) {
          var currVal_1 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit === _co.selectedPerspective;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _co.getPerspectiveLabel(_v.context.$implicit);

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_DisksGroupByPerspectiveComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 28, "clr-select-container", [["class", "horizontal-layout label-auto-size"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "label", [["for", "perspective-dropdown"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 16777216, null, 1, 10, "select", [["clrSelect", ""], ["id", "perspective-dropdown"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.selectedPerspective = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _co.changePerspective.emit(_co.selectedPerspective) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DisksGroupByPerspectiveComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 6, 0);

          var currVal_4 = "perspective-dropdown";

          _ck(_v, 15, 0, currVal_4);

          var currVal_15 = _co.selectedPerspective;

          _ck(_v, 22, 0, currVal_15);

          var currVal_16 = "perspective-dropdown";

          _ck(_v, 25, 0, currVal_16);

          var currVal_17 = _co.perspectives;

          _ck(_v, 28, 0, currVal_17);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).addGrid();

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).forAttr;

          _ck(_v, 14, 0, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.groupBy"));

          _ck(_v, 16, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending;

          var currVal_13 = true;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).id;

          _ck(_v, 19, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        });
      }

      function View_DisksGroupByPerspectiveComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-disks-group-by-perspective", [], null, null, null, View_DisksGroupByPerspectiveComponent_0, RenderType_DisksGroupByPerspectiveComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_7__["DisksGroupByPerspectiveComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var DisksGroupByPerspectiveComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-disks-group-by-perspective", _disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_7__["DisksGroupByPerspectiveComponent"], View_DisksGroupByPerspectiveComponent_Host_0, {}, {
        changePerspective: "changePerspective"
      }, []);
      /***/

    },

    /***/
    "fIKf":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan-direct.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ClaimForVsanDirectComponent */

    /***/
    function fIKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForVsanDirectComponent", function () {
        return ClaimForVsanDirectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/datagrid/filter/function-filter */
      "vuPz");
      /* harmony import */


      var _component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/datagrid/tree-datagrid-view */
      "IX96");
      /* harmony import */


      var _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/diskmgmt/claim-disks-util */
      "S7F7");
      /* harmony import */


      var _component_diskmgmt_model_claim_disks_datagrid_footer_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-disks-datagrid-footer-label */
      "BAvr");
      /* harmony import */


      var _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @component/diskmgmt/perspective/disks-group-by-perspective */
      "4ro6");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimForVsanDirectComponent = /*@__PURE__*/function () {
        var ClaimForVsanDirectComponent = /*#__PURE__*/function (_component_datagrid_t3) {
          _inherits(ClaimForVsanDirectComponent, _component_datagrid_t3);

          var _super4 = _createSuper(ClaimForVsanDirectComponent);

          function ClaimForVsanDirectComponent() {
            var _this12;

            _classCallCheck(this, ClaimForVsanDirectComponent);

            _this12 = _super4.call(this, ClaimForVsanDirectComponent.CHILD_FIELD);
            _this12.DisksGroupByPerspective = _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_5__["DisksGroupByPerspective"];
            _this12.ClaimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_6__["ClaimOption"];
            _this12.ClaimDisksUtil = _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"];
            _this12.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

            _this12.changePerspective = function (perspective) {
              _this12.selectedPerspective = perspective;

              _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"].changePerspective(_this12.selectedPerspective, _this12.datagrid, _this12.allHostsInCluster, _this12.disksByVendor);
            };

            _this12.getHostIcon = function (item) {
              return item.isRoot ? null : _util_icon__WEBPACK_IMPORTED_MODULE_7__["Icon"].HOST;
            };

            _this12.nameFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.name;
            });
            _this12.driveTypeFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.driveTypeLabel;
            });
            _this12.totalCapacityFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.capacity;
            });
            _this12.hostNameFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.hostName;
            });
            _this12.transportTypeFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.transportType;
            });
            _this12.diskAdapterFilter = new _component_datagrid_filter_function_filter__WEBPACK_IMPORTED_MODULE_1__["FunctionFilter"](function (data) {
              return data.diskAdapter;
            });
            _this12.multipleSelection = true;
            return _this12;
          }

          _createClass(ClaimForVsanDirectComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.datagridLoading = false;
              this.footerLabel = new _component_diskmgmt_model_claim_disks_datagrid_footer_label__WEBPACK_IMPORTED_MODULE_4__["ClaimDisksDatagridFooterLabel"](this.allHostsInCluster, this.disksByVendor);
            }
          }, {
            key: "nameColumnTitle",
            get: function get() {
              return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_3__["ClaimDisksUtil"].getNameColumnTitle(this.selectedPerspective);
            }
          }, {
            key: "toggleClaiming",
            value: function toggleClaiming(data) {
              data.claimOption = data.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_6__["ClaimOption"].DoNotClaim || data.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_6__["ClaimOption"].Custom ? _generated_claim_option__WEBPACK_IMPORTED_MODULE_6__["ClaimOption"].VMFS : _generated_claim_option__WEBPACK_IMPORTED_MODULE_6__["ClaimOption"].DoNotClaim;
              data.markedAsFlash = data.isFlash;
              this.update.emit();
            }
          }]);

          return ClaimForVsanDirectComponent;
        }(_component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_2__["TreeDatagridView"]);

        ClaimForVsanDirectComponent.CHILD_FIELD = "eligibleDisksInDatastoreContext";
        return ClaimForVsanDirectComponent;
      }();
      /***/

    },

    /***/
    "hEjE":
    /*!************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/perspective/disks-group-by-perspective.scss.shim.ngstyle.js ***!
      \************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function hEjE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L3BlcnNwZWN0aXZlL2Rpc2tzLWdyb3VwLWJ5LXBlcnNwZWN0aXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUFFQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9kaXNrbWdtdC9wZXJzcGVjdGl2ZS9kaXNrcy1ncm91cC1ieS1wZXJzcGVjdGl2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbn0iXX0= */"];
      /***/
    },

    /***/
    "kBFi":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/claim-vendor-list-item.data.ts ***!
      \*************************************************************************************/

    /*! exports provided: ClaimVendorListItem */

    /***/
    function kBFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimVendorListItem", function () {
        return ClaimVendorListItem;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _component_diskmgmt_model_claim_root_list_item_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-root-list-item.data */
      "PD/w");
      /* harmony import */


      var _model_drive_type_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../model/drive-type.data */
      "Lguz");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @component/diskmgmt/claim-disks-util */
      "S7F7");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimVendorListItem = /*#__PURE__*/function (_component_diskmgmt_m) {
        _inherits(ClaimVendorListItem, _component_diskmgmt_m);

        var _super5 = _createSuper(ClaimVendorListItem);

        function ClaimVendorListItem() {
          _classCallCheck(this, ClaimVendorListItem);

          return _super5.apply(this, arguments);
        }

        _createClass(ClaimVendorListItem, [{
          key: "name",
          get:
          /**
           * Gets the vendor's name
           */
          function get() {
            if (this._name) {
              return this._name;
            }

            this._name = this.getFirstEligibleItem().model;
            return this._name;
          },
          set: function set(newName) {
            this._name = newName;
          }
        }, {
          key: "image",
          get: function get() {
            return this.getFirstEligibleItem().image;
          }
        }, {
          key: "possibleClaimOptions",
          get: function get() {
            var isClaimForStorageAvailable = true;
            var isClaimForCacheAvailable = true;
            var isClaimForVMFSAvailable = true;
            var isDoNotClaimAvailable = true;

            var _iterator17 = _createForOfIteratorHelper(this.eligibleDisks),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var item = _step17.value;
                isClaimForCacheAvailable = isClaimForCacheAvailable && item.possibleClaimOptions.includes(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].ClaimForCache);
                isClaimForStorageAvailable = isClaimForStorageAvailable && item.possibleClaimOptions.includes(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].ClaimForStorage);
                isClaimForVMFSAvailable = isClaimForVMFSAvailable && item.possibleClaimOptions.includes(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].VMFS);
                isDoNotClaimAvailable = isDoNotClaimAvailable && item.possibleClaimOptions.includes(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            var claimOptions = [_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].Custom];

            if (isClaimForCacheAvailable) {
              claimOptions.push(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].ClaimForCache);
            }

            if (isClaimForStorageAvailable) {
              claimOptions.push(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].ClaimForStorage);
            }

            if (isClaimForVMFSAvailable) {
              claimOptions.push(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].VMFS);
            }

            if (isDoNotClaimAvailable) {
              claimOptions.push(_generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim);
            }

            return claimOptions;
          }
          /**
           * Return drive types that are valid for at least one disk.
           */

        }, {
          key: "possibleDriveTypes",
          get: function get() {
            if (!this.eligibleDisks || this.eligibleDisks.length === 0) {
              return [];
            }

            var types = [];
            this.eligibleDisks.forEach(function (disk) {
              var _types;

              (_types = types).push.apply(_types, _toConsumableArray(disk.possibleDriveTypes));
            }); // Remove duplicate types.

            types = Array.from(new Set(types));

            if (!this.areAllItemsMarkedTheSame()) {
              types.push(_model_drive_type_data__WEBPACK_IMPORTED_MODULE_3__["DriveType"].CUSTOM);
            }

            return types;
          }
          /**
           * Disk's capacity.
           */

        }, {
          key: "capacity",
          get: function get() {
            if (this._capacity) {
              return this._capacity;
            } // All disks must be with the same size


            var capacityNum = _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtUtil"].lbaToBytes(this.getFirstEligibleItem().disk.capacity) * this.eligibleDisks.length;
            this._capacity = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(capacityNum);
            return this._capacity;
          }
        }, {
          key: "vendor",
          get: function get() {
            return this.getFirstEligibleItem().vendor;
          }
        }, {
          key: "model",
          get: function get() {
            return this.getFirstEligibleItem().diskModel;
          }
        }, {
          key: "initialDriveType",
          get: function get() {
            return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_5__["ClaimDisksUtil"].getLocalizedDriveType(this.isFlash ? _model_drive_type_data__WEBPACK_IMPORTED_MODULE_3__["DriveType"].FLASH : _model_drive_type_data__WEBPACK_IMPORTED_MODULE_3__["DriveType"].HDD);
          }
          /**
           * Disk's drive type label.
           */

        }, {
          key: "driveTypeLabel",
          get: function get() {
            return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_5__["ClaimDisksUtil"].getLocalizedDriveType(this.driveType);
          }
          /**
           * Disk's drive type.
           */

        }, {
          key: "driveType",
          get: function get() {
            if (!this.areAllItemsMarkedTheSame()) {
              return _model_drive_type_data__WEBPACK_IMPORTED_MODULE_3__["DriveType"].CUSTOM;
            }

            return this.getFirstEligibleItem().driveType;
          }
        }, {
          key: "isFlash",
          get: function get() {
            return this.getFirstEligibleItem().isFlash;
          }
        }, {
          key: "isHdd",
          get: function get() {
            return this.getFirstEligibleItem().isHdd;
          }
        }, {
          key: "markedAsFlash",
          get: function get() {
            if (this.areAllItemsMarkedTheSame()) {
              return this.getFirstEligibleItem().markedAsFlash;
            }

            return false;
          }
          /**
           * Disk's transport type.
           */
          ,
          set: function set(newValue) {
            var _iterator18 = _createForOfIteratorHelper(this.eligibleDisksInDatastoreContext),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var disk = _step18.value;
                disk.markedAsFlash = newValue;
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
        }, {
          key: "transportType",
          get: function get() {
            return this.getFirstEligibleItem().transportType;
          }
        }, {
          key: "hostName",
          get: function get() {
            return this.getVendorHostLabel(this.eligibleDisksInDatastoreContext);
          }
        }, {
          key: "isMarkAsFlashAvailable",
          get: function get() {
            if (!this.areAllItemsMarkedTheSame()) {
              return true;
            }

            return !this.getFirstEligibleItem().markedAsFlash;
          }
        }, {
          key: "isMarkAsHddAvailable",
          get: function get() {
            if (!this.areAllItemsMarkedTheSame()) {
              return true;
            }

            return this.getFirstEligibleItem().markedAsFlash;
          }
        }, {
          key: "areAllItemsMarkedTheSame",
          value: function areAllItemsMarkedTheSame() {
            var markedAsSsd = this.getFirstEligibleItem().markedAsFlash;
            var areAllTheSame = true;

            var _iterator19 = _createForOfIteratorHelper(this.eligibleDisksInDatastoreContext),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var disk = _step19.value;

                if (markedAsSsd !== disk.markedAsFlash) {
                  areAllTheSame = false;
                  break;
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            return areAllTheSame;
          }
        }, {
          key: "getFirstEligibleItem",
          value: function getFirstEligibleItem() {
            return this.eligibleDisksInDatastoreContext[0];
          }
          /**
           * Calculates the host field for a bunch of disks. Used for nodes combining
           * multiple disks from different hosts where the 'host' property is needed.
           * The result could be something like:
           *  == If homogeneous distribution ==
           *     X disk(s) on Y host(s)
           *  == If heterogeneous distribution ==
           *     Mixed distribution
           */

        }, {
          key: "getVendorHostLabel",
          value: function getVendorHostLabel(disks) {
            var disksPerHosts = this.getDisksPerHosts(disks);
            return this.isMixedMode(disksPerHosts) ? this.getHeterogeneousDistributionLabel() : this.getHomogeneousDistributionLabel(disksPerHosts);
          }
        }, {
          key: "getDisksPerHosts",
          value: function getDisksPerHosts(disks) {
            var disksPerHosts = new Map();

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(disks)) {
              return disksPerHosts;
            }

            disks.forEach(function (disk) {
              if (!disksPerHosts.has(disk.hostName)) {
                disksPerHosts.set(disk.hostName, 0);
              }

              disksPerHosts.set(disk.hostName, disksPerHosts.get(disk.hostName) + 1);
            });
            return disksPerHosts;
          }
        }, {
          key: "isMixedMode",
          value: function isMixedMode(disksPerHosts) {
            return disksPerHosts.size > 0 ? !Array.from(disksPerHosts.values()).every(function (val, i, arr) {
              return val === arr[0];
            }) : false;
          }
        }, {
          key: "getHeterogeneousDistributionLabel",
          value: function getHeterogeneousDistributionLabel() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.vendorHosts.mixedDistribution");
          }
        }, {
          key: "getHomogeneousDistributionLabel",
          value: function getHomogeneousDistributionLabel(disksPerHosts) {
            var numOfHosts = disksPerHosts.size;
            var numDisksPerHost = numOfHosts > 0 ? disksPerHosts.values().next().value : 0;
            var labelKey = this.getHomogeneousDistributionLabelKey(numOfHosts, numDisksPerHost);
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(labelKey, numDisksPerHost, numOfHosts);
          }
        }, {
          key: "getHomogeneousDistributionLabelKey",
          value: function getHomogeneousDistributionLabelKey(numOfHosts, numDisksPerHost) {
            if (numDisksPerHost === 1) {
              return numOfHosts === 1 ? "vsan.dialog.semiAutoClaimDialog.vendorHosts.formatOneDisksOneHost" : "vsan.dialog.semiAutoClaimDialog.vendorHosts.formatOneDiskMultiHosts";
            } else {
              return numOfHosts === 1 ? "vsan.dialog.semiAutoClaimDialog.vendorHosts.formatMultiDisksOneHost" : "vsan.dialog.semiAutoClaimDialog.vendorHosts.formatMultiDisksMultiHosts";
            }
          }
        }]);

        return ClaimVendorListItem;
      }(_component_diskmgmt_model_claim_root_list_item_data__WEBPACK_IMPORTED_MODULE_2__["ClaimRootListItem"]);
      /***/

    },

    /***/
    "mamk":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-disks.scss.shim.ngstyle.js ***!
      \*********************************************************************************/

    /*! exports provided: styles */

    /***/
    function mamk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  position: relative;\n  padding-left: 0.15rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n[_nghost-%COMP%]   vsan-disks-capacity-chart[_ngcontent-%COMP%] {\n  min-height: 3.8rem;\n}\nvsan-validation-panel[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\nclr-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWRpc2tzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMS0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxxQkdRUTtBSEVYO0FFNEJHO0VBQ0csZ0NBQUE7QUYxQk47QUU0Qkc7O0VBR0csZ0NBQUE7QUYzQk47QUU2Qkc7RUFDRyw4QkFBQTtBRjNCTjtBQWpCRztFQUVHLGtCQWRrQjtBQWdDeEI7QUFkQTtFQUNHLGNBQUE7QUFpQkg7QUFkQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFpQkgiLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvZGlza21nbXQvY2xhaW0tZGlza3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbiRjYXBhY2l0eS1jaGFydC1oZWlnaHQ6IDMuOHJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIC8vIE5lZWRlZCBpbiBvcmRlciB0byBoYXZlIHRoZSBzcGlubmVyIHByb3Blcmx5IGNlbnRlcmVkXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAvLyBBdm9pZCB0cmltbWluZyBhbnkgb2YgdGhlIHBhZ2UncyBjb250ZW50XG4gICBwYWRkaW5nLWxlZnQ6ICR2c2FuLW91dGxpbmUtc2l6ZTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCR2c2FuLWVsZW1lbnQtc3BhY2luZyk7XG5cbiAgIHZzYW4tZGlza3MtY2FwYWNpdHktY2hhcnQge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoZSBjaGFydCBkb2Vzbid0IGZsaWNrZXIgd2hlbiBubyBkaXNrcyBhcmUgY2xhaW1lZC5cbiAgICAgIG1pbi1oZWlnaHQ6ICRjYXBhY2l0eS1jaGFydC1oZWlnaHQ7XG4gICB9XG59XG5cbnZzYW4tdmFsaWRhdGlvbi1wYW5lbCB7XG4gICBmbGV4OiAwIDAgYXV0bztcbn1cblxuY2xyLXRhYnMge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "nb98":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan-direct.scss.shim.ngstyle.js ***!
      \*******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function nb98(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-select-container[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\nclr-datagrid[_ngcontent-%COMP%]   .name-column[_ngcontent-%COMP%] {\n  width: 12rem;\n}\nclr-datagrid[_ngcontent-%COMP%]   .claim-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 0 !important;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci12c2FuLWRpcmVjdC5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEtBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVlIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBQWxCQTtFQUNHLGdCQUFBO0FBcUJIO0FBakJHO0VBQ0csWUFmYztBQW1DcEI7QUFsQkc7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBb0JOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci12c2FuLWRpcmVjdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAtMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJG5hbWUtY29sdW1uLXdpZHRoOiAxMnJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyk7XG59XG5cbmNsci1zZWxlY3QtY29udGFpbmVyIHtcbiAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbmNsci1kYXRhZ3JpZCB7XG4gICAubmFtZS1jb2x1bW4ge1xuICAgICAgd2lkdGg6ICRuYW1lLWNvbHVtbi13aWR0aDtcbiAgIH1cbiAgIC5jbGFpbS1jaGVja2JveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "onOt":
    /*!*****************************************!*\
      !*** ./src/app/generated/query-util.ts ***!
      \*****************************************/

    /*! exports provided: QueryUtil */

    /***/
    function onOt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryUtil", function () {
        return QueryUtil;
      });

      var QueryUtil;

      (function (QueryUtil) {
        function VC_CLUSTERS_PROPERTY() {
          return "allClusters";
        }

        QueryUtil.VC_CLUSTERS_PROPERTY = VC_CLUSTERS_PROPERTY;

        function SERVER_GUID_PROPERTY() {
          return "serverGuid";
        }

        QueryUtil.SERVER_GUID_PROPERTY = SERVER_GUID_PROPERTY;

        function NAME_PROPERTY() {
          return "name";
        }

        QueryUtil.NAME_PROPERTY = NAME_PROPERTY;

        function PRIMARY_ICON_ID_PROPERTY() {
          return "primaryIconId";
        }

        QueryUtil.PRIMARY_ICON_ID_PROPERTY = PRIMARY_ICON_ID_PROPERTY;

        function CLUSTER_PROPERTY() {
          return "cluster";
        }

        QueryUtil.CLUSTER_PROPERTY = CLUSTER_PROPERTY;

        function CLUSTER_HOST_PROPERTY() {
          return "host";
        }

        QueryUtil.CLUSTER_HOST_PROPERTY = CLUSTER_HOST_PROPERTY;

        function VM_PROPERTY() {
          return "vm";
        }

        QueryUtil.VM_PROPERTY = VM_PROPERTY;

        function HAS_PRIVILEGES() {
          return "hasPrivileges";
        }

        QueryUtil.HAS_PRIVILEGES = HAS_PRIVILEGES;

        function VM_COUNT_PROPERTY() {
          return "vm._length";
        }

        QueryUtil.VM_COUNT_PROPERTY = VM_COUNT_PROPERTY;

        function RESOURCE_POOL_PROPERTY() {
          return "resourcePool";
        }

        QueryUtil.RESOURCE_POOL_PROPERTY = RESOURCE_POOL_PROPERTY;

        function RESOURCE_POOL_OWNER_PROPERTY() {
          return "owner";
        }

        QueryUtil.RESOURCE_POOL_OWNER_PROPERTY = RESOURCE_POOL_OWNER_PROPERTY;

        function DATASTORE_PROPERTY() {
          return "datastore";
        }

        QueryUtil.DATASTORE_PROPERTY = DATASTORE_PROPERTY;

        function CLUSTER_HOST_COUNT_PROPERTY() {
          return "host._length";
        }

        QueryUtil.CLUSTER_HOST_COUNT_PROPERTY = CLUSTER_HOST_COUNT_PROPERTY;

        function HOST_VSAN_NODE_UUID_PROPERTY() {
          return "config.vsanHostConfig.clusterInfo.nodeUuid";
        }

        QueryUtil.HOST_VSAN_NODE_UUID_PROPERTY = HOST_VSAN_NODE_UUID_PROPERTY;

        function HOST_CONNECTION_STATE_PROPERTY() {
          return "runtime.connectionState";
        }

        QueryUtil.HOST_CONNECTION_STATE_PROPERTY = HOST_CONNECTION_STATE_PROPERTY;

        function HOST_MAINTENANCE_MODE_PROPERTY() {
          return "runtime.inMaintenanceMode";
        }

        QueryUtil.HOST_MAINTENANCE_MODE_PROPERTY = HOST_MAINTENANCE_MODE_PROPERTY;

        function HOST_QUARANTINE_MODE_PROPERTY() {
          return "runtime.inQuarantineMode";
        }

        QueryUtil.HOST_QUARANTINE_MODE_PROPERTY = HOST_QUARANTINE_MODE_PROPERTY;

        function HOST_VSAN_RUNTIME_INFO() {
          return "runtime.vsanRuntimeInfo";
        }

        QueryUtil.HOST_VSAN_RUNTIME_INFO = HOST_VSAN_RUNTIME_INFO;

        function WITNESS_HOST_RELATION() {
          return "witnessHost";
        }

        QueryUtil.WITNESS_HOST_RELATION = WITNESS_HOST_RELATION;

        function IS_WITNESS_HOST_PROPERTY() {
          return "isWitnessHost";
        }

        QueryUtil.IS_WITNESS_HOST_PROPERTY = IS_WITNESS_HOST_PROPERTY;

        function IS_WITNESS_VLCM_PROPERTY() {
          return "isVsanWitnessLifecycleManaged";
        }

        QueryUtil.IS_WITNESS_VLCM_PROPERTY = IS_WITNESS_VLCM_PROPERTY;

        function ALL_VSAN_HOSTS_RELATION() {
          return "allVsanHosts";
        }

        QueryUtil.ALL_VSAN_HOSTS_RELATION = ALL_VSAN_HOSTS_RELATION;

        function VSAN_PHYSICAL_DISK_VIRTUAL_MAPPING() {
          return "vsanPhysicalDiskVirtualMapping";
        }

        QueryUtil.VSAN_PHYSICAL_DISK_VIRTUAL_MAPPING = VSAN_PHYSICAL_DISK_VIRTUAL_MAPPING;

        function VSAN_HOST_STORAGE_ADAPTER_DEVICES() {
          return "vsanStorageAdapterDevices";
        }

        QueryUtil.VSAN_HOST_STORAGE_ADAPTER_DEVICES = VSAN_HOST_STORAGE_ADAPTER_DEVICES;

        function VM_DEVICES_PROPERTY() {
          return "config.hardware.device";
        }

        QueryUtil.VM_DEVICES_PROPERTY = VM_DEVICES_PROPERTY;

        function VM_NAMESPACE_CAPABILITY_METADATA() {
          return "namespaceCapabilityMetadata";
        }

        QueryUtil.VM_NAMESPACE_CAPABILITY_METADATA = VM_NAMESPACE_CAPABILITY_METADATA;

        function VM_PATH_NAME() {
          return "summary.config.vmPathName";
        }

        QueryUtil.VM_PATH_NAME = VM_PATH_NAME;

        function VM_HOST() {
          return "summary.runtime.host";
        }

        QueryUtil.VM_HOST = VM_HOST;

        function VM_VSAN_NODE_UUID_PROPERTY() {
          return "config.instanceUuid";
        }

        QueryUtil.VM_VSAN_NODE_UUID_PROPERTY = VM_VSAN_NODE_UUID_PROPERTY;

        function VSAN_ENABLED_PROPERTY() {
          return "configurationEx[@type='ClusterConfigInfoEx'].vsanConfigInfo.enabled";
        }

        QueryUtil.VSAN_ENABLED_PROPERTY = VSAN_ENABLED_PROPERTY;

        function HOST_VERSION_PROPERTY() {
          return "config.product.version";
        }

        QueryUtil.HOST_VERSION_PROPERTY = HOST_VERSION_PROPERTY;

        function HOST_VSAN_CONFIG_PROPERTY() {
          return "config.vsanHostConfig";
        }

        QueryUtil.HOST_VSAN_CONFIG_PROPERTY = HOST_VSAN_CONFIG_PROPERTY;

        function HOST_VSAN_ENABLED_PROPERTY() {
          return "config.vsanHostConfig.enabled";
        }

        QueryUtil.HOST_VSAN_ENABLED_PROPERTY = HOST_VSAN_ENABLED_PROPERTY;

        function VSAN_DISK_VERSION_PROPERTY_NAME() {
          return "vsanDiskVersionsData";
        }

        QueryUtil.VSAN_DISK_VERSION_PROPERTY_NAME = VSAN_DISK_VERSION_PROPERTY_NAME;

        function CLUSTER_VSAN_CONFIG_UUID_PROPERTY() {
          return "configurationEx[@type='ClusterConfigInfoEx'].vsanConfigInfo.defaultConfig.uuid";
        }

        QueryUtil.CLUSTER_VSAN_CONFIG_UUID_PROPERTY = CLUSTER_VSAN_CONFIG_UUID_PROPERTY;

        function CLUSTER_HA_ENABLED_PROPERTY() {
          return "configurationEx[@type='ClusterConfigInfoEx'].dasConfig.enabled";
        }

        QueryUtil.CLUSTER_HA_ENABLED_PROPERTY = CLUSTER_HA_ENABLED_PROPERTY;

        function CLUSTER_DPM_ENABLED_PROPERTY() {
          return "configurationEx[@type='ClusterConfigInfoEx'].dpmConfigInfo.enabled";
        }

        QueryUtil.CLUSTER_DPM_ENABLED_PROPERTY = CLUSTER_DPM_ENABLED_PROPERTY;

        function CLUSTER_DRS_ENABLED() {
          return "configuration.drsConfig";
        }

        QueryUtil.CLUSTER_DRS_ENABLED = CLUSTER_DRS_ENABLED;

        function VM_STORAGE_OBJECT_ID_PROPERTY() {
          return "config.vmStorageObjectId";
        }

        QueryUtil.VM_STORAGE_OBJECT_ID_PROPERTY = VM_STORAGE_OBJECT_ID_PROPERTY;

        function IS_POD_VM() {
          return "isPodVM";
        }

        QueryUtil.IS_POD_VM = IS_POD_VM;

        function DATASTORE_TYPE_PROPERTY() {
          return "summary.type";
        }

        QueryUtil.DATASTORE_TYPE_PROPERTY = DATASTORE_TYPE_PROPERTY;

        function DATASTORE_URL() {
          return "summary.url";
        }

        QueryUtil.DATASTORE_URL = DATASTORE_URL;

        function DATACENTER_RELATION() {
          return "dc";
        }

        QueryUtil.DATACENTER_RELATION = DATACENTER_RELATION;

        function DATASTORE_HOST_MOUNTS() {
          return "host";
        }

        QueryUtil.DATASTORE_HOST_MOUNTS = DATASTORE_HOST_MOUNTS;

        function DATASTORE_SUMMARY() {
          return "summary";
        }

        QueryUtil.DATASTORE_SUMMARY = DATASTORE_SUMMARY;

        function DATASTORE_SUMMARY_CAPACITY() {
          return "summary.capacity";
        }

        QueryUtil.DATASTORE_SUMMARY_CAPACITY = DATASTORE_SUMMARY_CAPACITY;

        function DATASTORE_SUMMARY_FREE_SPACE() {
          return "summary.freeSpace";
        }

        QueryUtil.DATASTORE_SUMMARY_FREE_SPACE = DATASTORE_SUMMARY_FREE_SPACE;

        function DATASTORE_CONTAINER_ID() {
          return "info.containerId";
        }

        QueryUtil.DATASTORE_CONTAINER_ID = DATASTORE_CONTAINER_ID;

        function DATASTORE_SERVER_HOSTS() {
          return "serverHosts";
        }

        QueryUtil.DATASTORE_SERVER_HOSTS = DATASTORE_SERVER_HOSTS;

        function PREFERRED_FD_PROPERTY() {
          return "preferredFaultDomain";
        }

        QueryUtil.PREFERRED_FD_PROPERTY = PREFERRED_FD_PROPERTY;

        function HOST_FAULT_DOMAIN() {
          return "config.vsanHostConfig.faultDomainInfo.name";
        }

        QueryUtil.HOST_FAULT_DOMAIN = HOST_FAULT_DOMAIN;

        function VM_IS_TEMPLATE() {
          return "config.template";
        }

        QueryUtil.VM_IS_TEMPLATE = VM_IS_TEMPLATE;

        function VM_POWER_STATE() {
          return "powerState";
        }

        QueryUtil.VM_POWER_STATE = VM_POWER_STATE;

        function VM_SWAP_STORAGE_OBJECT_ID() {
          return "config.swapStorageObjectId";
        }

        QueryUtil.VM_SWAP_STORAGE_OBJECT_ID = VM_SWAP_STORAGE_OBJECT_ID;

        function WCP_NAMESPACE() {
          return "workload";
        }

        QueryUtil.WCP_NAMESPACE = WCP_NAMESPACE;

        function TANZU_KUBERNETES_CLUSTER() {
          return "com.vmware.wcp.TanzuKubernetesCluster";
        }

        QueryUtil.TANZU_KUBERNETES_CLUSTER = TANZU_KUBERNETES_CLUSTER;

        function PARENT_PROPERTY() {
          return "parent";
        }

        QueryUtil.PARENT_PROPERTY = PARENT_PROPERTY;

        function VIRTUAL_NIC_PROPERTY() {
          return "config.network.vnic";
        }

        QueryUtil.VIRTUAL_NIC_PROPERTY = VIRTUAL_NIC_PROPERTY;

        function HOST_PNIC() {
          return "config.network.pnic";
        }

        QueryUtil.HOST_PNIC = HOST_PNIC;

        function HOST_PORTGROUP() {
          return "config.network.portgroup";
        }

        QueryUtil.HOST_PORTGROUP = HOST_PORTGROUP;

        function HOST_PROXY_SWITCH() {
          return "config.network.proxySwitch";
        }

        QueryUtil.HOST_PROXY_SWITCH = HOST_PROXY_SWITCH;

        function HOST_OPAQUE_NETWORK() {
          return "config.network.opaqueNetwork";
        }

        QueryUtil.HOST_OPAQUE_NETWORK = HOST_OPAQUE_NETWORK;

        function HOST_OPAQUE_SWITCH() {
          return "config.network.opaqueSwitch";
        }

        QueryUtil.HOST_OPAQUE_SWITCH = HOST_OPAQUE_SWITCH;

        function NETWORK_PROPERTY() {
          return "network";
        }

        QueryUtil.NETWORK_PROPERTY = NETWORK_PROPERTY;

        function ACTIVE_UPLINK_PORT_PROPERTY() {
          return "config.defaultPortConfig.uplinkTeamingPolicy.uplinkPortOrder.activeUplinkPort";
        }

        QueryUtil.ACTIVE_UPLINK_PORT_PROPERTY = ACTIVE_UPLINK_PORT_PROPERTY;

        function DISTRIBUTED_VIRTUAL_SWITCH_PROPERTY() {
          return "config.distributedVirtualSwitch";
        }

        QueryUtil.DISTRIBUTED_VIRTUAL_SWITCH_PROPERTY = DISTRIBUTED_VIRTUAL_SWITCH_PROPERTY;

        function HOST_VSANCONFIG_DISK_MAPPING_PROPERTY() {
          return "config.vsanHostConfig.storageInfo.diskMapping";
        }

        QueryUtil.HOST_VSANCONFIG_DISK_MAPPING_PROPERTY = HOST_VSANCONFIG_DISK_MAPPING_PROPERTY;

        function VSAN_HOST_CONFIG_NETWORKINFO_PORT_PROPERTY() {
          return "config.vsanHostConfig.networkInfo.port";
        }

        QueryUtil.VSAN_HOST_CONFIG_NETWORKINFO_PORT_PROPERTY = VSAN_HOST_CONFIG_NETWORKINFO_PORT_PROPERTY;

        function PMEM_STORAGE_UUID() {
          return "info.pmem.uuid";
        }

        QueryUtil.PMEM_STORAGE_UUID = PMEM_STORAGE_UUID;

        function PMEM_STORAGE_STATUS() {
          return "overallStatus";
        }

        QueryUtil.PMEM_STORAGE_STATUS = PMEM_STORAGE_STATUS;

        function IS_CLUSTER_VM_PROPERTY() {
          return "isClusterVM";
        }

        QueryUtil.IS_CLUSTER_VM_PROPERTY = IS_CLUSTER_VM_PROPERTY;

        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function () {
          return {};
        };

        QueryUtil.Factory = Factory;
      })(QueryUtil || (QueryUtil = {})); //module QueryUtil

      /***/

    },

    /***/
    "pAkp":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/claim-host-list-item.data.ts ***!
      \***********************************************************************************/

    /*! exports provided: ClaimHostListItem */

    /***/
    function pAkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimHostListItem", function () {
        return ClaimHostListItem;
      });
      /* harmony import */


      var _component_diskmgmt_model_claim_root_list_item_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/diskmgmt/model/claim-root-list-item.data */
      "PD/w");
      /* harmony import */


      var _component_diskmgmt_model_claimed_disks_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/diskmgmt/model/claimed-disks-data */
      "tQZf");
      /* harmony import */


      var _component_diskmgmt_model_vsan_pmem_storage_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/diskmgmt/model/vsan-pmem-storage-list-item */
      "AwlQ");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _generated_query_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/query-util */
      "onOt");
      /* harmony import */


      var _generated_vsan_disk_claim_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/vsan-disk-claim-spec */
      "YY5P");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_map_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/map-util */
      "VGG7");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./vsan-disk-list-item */
      "raSY");
      /* harmony import */


      var _vsan_disks_transport_type_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./vsan-disks-transport-type.data */
      "8qIs");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimHostListItem = /*#__PURE__*/function (_component_diskmgmt_m2) {
        _inherits(ClaimHostListItem, _component_diskmgmt_m2);

        var _super6 = _createSuper(ClaimHostListItem);

        function ClaimHostListItem(properties, claimingData, useRecommendedClaimOptions) {
          var _this13;

          _classCallCheck(this, ClaimHostListItem);

          _this13 = _super6.call(this);
          _this13._numberSsdDisks = 0;
          _this13._numberDataDisks = 0;
          _this13._allFlashDiskGroupExist = false;
          _this13._numSelectedCacheDisks = 0;
          _this13._numSelectedSsdDataDisks = 0;
          _this13._numSelectedHddDataDisks = 0;
          _this13._isValidConfiguration = true;
          _this13._claimedCapacity = 0;
          _this13._claimedCache = 0;
          _this13._hybridDiskGroupExist = false;
          _this13._isAllFlashSupported = false;

          var _iterator20 = _createForOfIteratorHelper(properties),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var property = _step20.value;

              switch (property.propertyName) {
                case _generated_query_util__WEBPACK_IMPORTED_MODULE_5__["QueryUtil"].NAME_PROPERTY():
                  _this13.name = property.value;
                  _this13.hostMor = _service_managed_object__WEBPACK_IMPORTED_MODULE_7__["ManagedObject"].create(property.resourceObject.type, property.resourceObject.value, property.resourceObject.serverGuid);

                  _this13.updateAllEligibleDisksHostName();

                  break;

                case _generated_query_util__WEBPACK_IMPORTED_MODULE_5__["QueryUtil"].HOST_VERSION_PROPERTY():
                  _this13.version = property.value;
                  break;

                case _generated_query_util__WEBPACK_IMPORTED_MODULE_5__["QueryUtil"].PRIMARY_ICON_ID_PROPERTY():
                  _this13.primaryIconId = property.value;
                  break;

                case _generated_query_util__WEBPACK_IMPORTED_MODULE_5__["QueryUtil"].VSAN_HOST_STORAGE_ADAPTER_DEVICES():
                  var transportTypeData = new _vsan_disks_transport_type_data__WEBPACK_IMPORTED_MODULE_14__["VsanDisksTransportTypeData"]();
                  transportTypeData.storageAdapterDevices = property.value;
                  _this13.deviceTransportData = transportTypeData;
                  break;
              }
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          _this13.setClaimingData(claimingData, useRecommendedClaimOptions);

          return _this13;
        }

        _createClass(ClaimHostListItem, [{
          key: "hostMor",
          get: function get() {
            return this._hostMor;
          },
          set: function set(value) {
            this._hostMor = value;
          }
        }, {
          key: "claimedCapacity",
          get: function get() {
            return this._claimedCapacity;
          },
          set: function set(value) {
            this._claimedCapacity = value;
          }
        }, {
          key: "claimedCache",
          get: function get() {
            return this._claimedCache;
          },
          set: function set(value) {
            this._claimedCache = value;
          }
        }, {
          key: "hybridDiskGroupExist",
          get: function get() {
            return this._hybridDiskGroupExist;
          }
          /**
           * Flag indicating whether all flash feature is supported.
           */

        }, {
          key: "isAllFlashSupported",
          get: function get() {
            return this._isAllFlashSupported;
          }
          /**
           * Set the host's name
           */

        }, {
          key: "name",
          get:
          /**
           * Gets the host's name
           */
          function get() {
            if (this._infoText) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.nameFormatted", this._name, this._infoText);
            }

            return this._name;
          },
          set: function set(value) {
            this._name = value;
          }
        }, {
          key: "setClaimingData",
          value: function setClaimingData(data, useRecommendedClaimOptions) {
            var _this14 = this;

            this._claimedDisksSummary = new Map();

            if (data != null) {
              var disks = [];

              var _iterator21 = _createForOfIteratorHelper(data.notInUseDisks),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var diskData = _step21.value;
                  var diskItem = new _vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_13__["VsanDiskListItem"](diskData, useRecommendedClaimOptions, data.isAllFlashAvailable);
                  diskItem.hostName = this._name;
                  diskItem.hostMor = this.hostMor;
                  disks.push(diskItem);
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              this.eligibleDisks = disks;
              this._isAllFlashSupported = data.isAllFlashAvailable;
              this._numberDataDisks = data.numNotInUseDataDisks;
              this._numberSsdDisks = data.numNotInUseSsdDisks;
              this._hybridDiskGroupExist = data.hybridDiskGroupExist;
              this._allFlashDiskGroupExist = data.allFlashDiskGroupExist;
              this._claimedCapacity = data.claimedCapacity;
              this._claimedCache = data.claimedCache;
              this.eligiblePmemStorage = data.notInUsePmemStorage.map(function (storage) {
                return new _component_diskmgmt_model_vsan_pmem_storage_list_item__WEBPACK_IMPORTED_MODULE_2__["VsanPmemStorageListItem"](storage, _this14._name, _this14.hostMor);
              });
              this.initializeManagedByVsanSummary(data.claimedDisksSummary);
              this.populateDisksTransportType();
            } else {
              this.eligibleDisks = null;
            }

            this.populateInfoText();
          }
        }, {
          key: "updateAllEligibleDisksHostName",
          value: function updateAllEligibleDisksHostName() {
            if (!this.eligibleDisks) {
              return;
            }

            var _iterator22 = _createForOfIteratorHelper(this.eligibleDisks),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var disk = _step22.value;
                disk.hostName = this._name;
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
          /**
           * Sets the transport data for the disks.
           */

        }, {
          key: "deviceTransportData",
          set: function set(values) {
            this._deviceTransportData = values;
            this.populateDisksTransportType();
          }
          /**
           * Sets the transport type of each eligible disk item.
           */

        }, {
          key: "populateDisksTransportType",
          value: function populateDisksTransportType() {
            if (this.eligibleDisks && this._deviceTransportData) {
              var _iterator23 = _createForOfIteratorHelper(this.eligibleDisks),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var item = _step23.value;
                  item.transport = this._deviceTransportData.getDeviceTransport(item.diskUuid);
                  item.diskAdapter = this._deviceTransportData.getDeviceAdapter(item.diskUuid);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }
          }
        }, {
          key: "possibleClaimOptions",
          get: function get() {
            var claimOptions = [_generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].Custom, _generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].DoNotClaim];

            if (this.contextDatastoreType === _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__["DatastoreType"].VSAN_DIRECT) {
              claimOptions.push(_generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].VMFS);
            }

            return claimOptions;
          }
        }, {
          key: "image",
          get: function get() {
            return this._isValidConfiguration ? this.primaryIconId : _util_icon__WEBPACK_IMPORTED_MODULE_10__["Icon"].HOST_ERROR;
          }
        }, {
          key: "numSelectedStorageHDDs",
          get: function get() {
            return this._numSelectedHddDataDisks;
          }
        }, {
          key: "numSelectedStorageSSDs",
          get: function get() {
            return this._numSelectedSsdDataDisks;
          }
        }, {
          key: "numSelectedCacheDisks",
          get: function get() {
            return this._numSelectedCacheDisks;
          }
        }, {
          key: "numSelectedManagedByVsanDisks",
          get: function get() {
            return _util_map_util__WEBPACK_IMPORTED_MODULE_11__["MapUtil"].sum(this._claimedDisksSummary, function (summary) {
              return summary.newClaimedDisksCount;
            });
          }
        }, {
          key: "getManagedByVsanClaimedSpace",
          value: function getManagedByVsanClaimedSpace() {
            return _util_map_util__WEBPACK_IMPORTED_MODULE_11__["MapUtil"].sum(this._claimedDisksSummary, function (summary) {
              return summary.newClaimedCapacity;
            });
          }
        }, {
          key: "getClaimOptionSummary",
          value: function getClaimOptionSummary(claimOption) {
            if (this._claimedDisksSummary.has(claimOption)) {
              return this._claimedDisksSummary.get(claimOption);
            } else {
              return null;
            }
          }
        }, {
          key: "numSelectedDisks",
          get: function get() {
            return this.numSelectedCacheDisks + this.numSelectedStorageHDDs + this.numSelectedStorageSSDs;
          }
          /**
           * Gets an error text when the host configuration is invalid
           */

        }, {
          key: "retrieveConfigErrorText",
          value: function retrieveConfigErrorText() {
            return this.retrieveConfigErrorTextInt();
          }
        }, {
          key: "retrieveConfigErrorTextInt",
          value: function retrieveConfigErrorTextInt() {
            // Cannot create/edit all-flash and hybrid groups at the same time
            if (this._numSelectedHddDataDisks !== 0 && this._numSelectedSsdDataDisks !== 0) {
              if ((this._hybridDiskGroupExist || this._allFlashDiskGroupExist) && this._numSelectedCacheDisks === 0) {
                // edit
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.mixedStorageDisks.edit", this.name);
              }

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.mixedStorageDisks.create", this.name);
            }

            var hybridSelection = this._numSelectedHddDataDisks !== 0;
            var numSelectedDataDisks = hybridSelection ? this._numSelectedHddDataDisks : this._numSelectedSsdDataDisks;

            if (this._numSelectedCacheDisks === 0 && numSelectedDataDisks === 0) {
              // no error
              return "";
            }

            if (numSelectedDataDisks === 0) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.noDataDisk", this.name);
            }

            if (this._numSelectedCacheDisks === 0) {
              if (this._hybridDiskGroupExist && hybridSelection || this._allFlashDiskGroupExist && !hybridSelection) {
                // no error
                return "";
              }

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.noSsd", this.name);
            }

            if (this._numSelectedCacheDisks > numSelectedDataDisks) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.moreSsd", this.name);
            } // no error


            return "";
          }
        }, {
          key: "capacityFor",
          value: function capacityFor(claimOption) {
            if (!this.eligibleDisks) {
              return 0;
            }

            var capacity = 0;

            var _iterator24 = _createForOfIteratorHelper(this.eligibleDisks),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var disk = _step24.value;

                if (disk.claimOption === claimOption) {
                  capacity += _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_9__["DiskMgmtUtil"].lbaToBytes(disk.disk.capacity);
                }
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return capacity;
          }
        }, {
          key: "unclaimedStorage",
          get: function get() {
            var capacity = 0;

            if (this.eligibleDisks) {
              this.eligibleDisks.forEach(function (disk) {
                return capacity += _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_9__["DiskMgmtUtil"].lbaToBytes(disk.disk.capacity);
              });
            }

            if (this.eligiblePmemStorage) {
              this.eligiblePmemStorage.forEach(function (storage) {
                return capacity += storage.capacityNum;
              });
            }

            return capacity;
          }
        }, {
          key: "updateDisksData",
          value: function updateDisksData() {
            var _this15 = this;

            this._numSelectedCacheDisks = 0;
            this._numSelectedHddDataDisks = 0;
            this._numSelectedSsdDataDisks = 0;
            this.resetClaimedDisksInManagedByVsanSummary();

            if (this.eligibleDisks) {
              var _iterator25 = _createForOfIteratorHelper(this.eligibleDisks),
                  _step25;

              try {
                var _loop = function _loop() {
                  var disk = _step25.value;

                  var claimOption = _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_8__["DiskMgmtDiskUtil"].MANAGED_BY_VSAN_CLAIM_OPTIONS.find(function (co) {
                    return co === disk.claimOption;
                  });

                  if (claimOption) {
                    _this15.addDiskToManagedByVsanClaimOption(disk.capacityNum, claimOption);
                  } else if (disk.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].ClaimForCache) {
                    _this15._numSelectedCacheDisks++;
                  } else if (disk.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].ClaimForStorage) {
                    if (disk.markedAsFlash) {
                      _this15._numSelectedSsdDataDisks++;
                    } else {
                      _this15._numSelectedHddDataDisks++;
                    }
                  }
                };

                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
            }

            if (this.eligiblePmemStorage) {
              var _iterator26 = _createForOfIteratorHelper(this.eligiblePmemStorage),
                  _step26;

              try {
                var _loop2 = function _loop2() {
                  var storage = _step26.value;

                  var claimOption = _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_8__["DiskMgmtDiskUtil"].MANAGED_BY_VSAN_CLAIM_OPTIONS.find(function (co) {
                    return co === storage.claimOption;
                  });

                  if (claimOption) {
                    _this15.addDiskToManagedByVsanClaimOption(storage.capacityNum, claimOption);
                  }
                };

                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }
            } // Update the flag responsible for the icon


            this._isValidConfiguration = !this.retrieveConfigErrorTextInt();
          }
        }, {
          key: "isEditGroupOperation",
          get: function get() {
            return this.numSelectedCacheDisks === 0 && (this.numSelectedStorageHDDs > 0 && this._hybridDiskGroupExist || this.numSelectedStorageSSDs > 0 && this._allFlashDiskGroupExist);
          }
        }, {
          key: "isCreateGroupOperation",
          get: function get() {
            return this.numSelectedCacheDisks > 0 && (this.numSelectedStorageHDDs > 0 || this.numSelectedStorageSSDs > 0);
          }
          /**
           * Populates the host's info text
           */

        }, {
          key: "populateInfoText",
          value: function populateInfoText() {
            if (this._hybridDiskGroupExist || this._allFlashDiskGroupExist) {
              this._infoText = "";

              var diskGroupExistText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.diskGroup");

              if (this._numberSsdDisks === 0 && this._numberDataDisks === 0) {
                this._infoText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.diskGroup.noDisks");
              }

              if (!this._infoText) {
                this._infoText = diskGroupExistText;
              }
            } else {
              if (this._numberSsdDisks === 0 && this._numberDataDisks === 0) {
                this._infoText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.hostError.noDisk");
              } else if (this._numberSsdDisks === 0) {
                this._infoText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.hostError.noSsd");
              }
            }
          }
        }, {
          key: "getHostDisksToClaim",
          value: function getHostDisksToClaim() {
            var diskSpecs = [];

            if (this.eligibleDisks) {
              this.eligibleDisks.forEach(function (disk) {
                if (disk.claimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].DoNotClaim) {
                  diskSpecs.push(_generated_vsan_disk_claim_spec__WEBPACK_IMPORTED_MODULE_6__["VsanDiskClaimSpec"].Factory.create(disk.disk, disk.claimOption, disk.markedAsFlash));
                }
              });
            }

            if (this.eligiblePmemStorage) {
              this.eligiblePmemStorage.forEach(function (pmemStorage) {
                if (pmemStorage.claimOption !== _generated_claim_option__WEBPACK_IMPORTED_MODULE_3__["ClaimOption"].DoNotClaim) {
                  diskSpecs.push(_generated_vsan_disk_claim_spec__WEBPACK_IMPORTED_MODULE_6__["VsanDiskClaimSpec"].Factory.create(null, pmemStorage.claimOption, false));
                }
              });
            }

            return diskSpecs;
          }
        }, {
          key: "availableDatastoreTypes",
          get: function get() {
            var isEligibleForVsan = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.eligibleDisks) && this.eligibleDisks.some(function (disk) {
              return disk.possibleClaimOptions.some(function (claimOption) {
                return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_8__["DiskMgmtDiskUtil"].VSAN_CLAIM_OPTIONS.includes(claimOption);
              });
            });
            var isEligibleForVsanDirect = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.eligibleDisks) && this.eligibleDisks.some(function (disk) {
              return disk.possibleClaimOptions.some(function (claimOption) {
                return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_8__["DiskMgmtDiskUtil"].VSAN_DIRECT_CLAIM_OPTIONS.includes(claimOption);
              });
            });
            var isEligibleForPmem = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.eligiblePmemStorage);
            return [isEligibleForVsan ? _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__["DatastoreType"].VSAN : null, isEligibleForVsanDirect ? _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__["DatastoreType"].VSAN_DIRECT : null, isEligibleForPmem ? _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__["DatastoreType"].PMEM : null].filter(function (datastoreType) {
              return datastoreType != null;
            });
          }
        }, {
          key: "initializeManagedByVsanSummary",
          value: function initializeManagedByVsanSummary(claimedDisksSummary) {
            var _this16 = this;

            var _iterator27 = _createForOfIteratorHelper(_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_8__["DiskMgmtDiskUtil"].MANAGED_BY_VSAN_CLAIM_OPTIONS),
                _step27;

            try {
              var _loop3 = function _loop3() {
                var claimOption = _step27.value;
                var newSummary = new _component_diskmgmt_model_claimed_disks_data__WEBPACK_IMPORTED_MODULE_1__["ClaimedDisksData"]();
                var hostClaimOptionSummary = claimedDisksSummary ? claimedDisksSummary.find(function (summary) {
                  return summary.claimOption === claimOption;
                }) : null;

                if (hostClaimOptionSummary) {
                  newSummary.oldClaimedDisksCount = hostClaimOptionSummary.claimedDisksCount;
                  newSummary.oldClaimedCapacity = hostClaimOptionSummary.claimedCapacity;
                }

                _this16._claimedDisksSummary.set(claimOption, newSummary);
              };

              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        }, {
          key: "resetClaimedDisksInManagedByVsanSummary",
          value: function resetClaimedDisksInManagedByVsanSummary() {
            _util_map_util__WEBPACK_IMPORTED_MODULE_11__["MapUtil"].forEach(this._claimedDisksSummary, function (summary) {
              summary.newClaimedDisksCount = 0;
              summary.newClaimedCapacity = 0;
            });
          }
        }, {
          key: "addDiskToManagedByVsanClaimOption",
          value: function addDiskToManagedByVsanClaimOption(capacity, claimOption) {
            this._claimedDisksSummary.get(claimOption).newClaimedDisksCount += 1;
            this._claimedDisksSummary.get(claimOption).newClaimedCapacity += capacity;
          }
        }]);

        return ClaimHostListItem;
      }(_component_diskmgmt_model_claim_root_list_item_data__WEBPACK_IMPORTED_MODULE_0__["ClaimRootListItem"]);
      /***/

    },

    /***/
    "qN0k":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/common/directive/focus-trap.directive.ts ***!
      \***************************************************************/

    /*! exports provided: FocusTrapDirective */

    /***/
    function qN0k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrapDirective", function () {
        return FocusTrapDirective;
      });
      /**
       * Attribute directive for enabling focus trap on element when it's rendered.
       */


      var FocusTrapDirective = /*#__PURE__*/function () {
        function FocusTrapDirective(el, focusTrap) {
          _classCallCheck(this, FocusTrapDirective);

          this.el = el;
          this.focusTrap = focusTrap;
        }

        _createClass(FocusTrapDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.focusTrap.create(this.el.nativeElement).focusInitialElement();
          }
        }]);

        return FocusTrapDirective;
      }();
      /***/

    },

    /***/
    "rW98":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/disks-capacity-chart.component.ngfactory.js ***!
      \********************************************************************************************/

    /*! exports provided: RenderType_DisksCapacityChartComponent, View_DisksCapacityChartComponent_0, View_DisksCapacityChartComponent_Host_0, DisksCapacityChartComponentNgFactory */

    /***/
    function rW98(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DisksCapacityChartComponent", function () {
        return RenderType_DisksCapacityChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DisksCapacityChartComponent_0", function () {
        return View_DisksCapacityChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DisksCapacityChartComponent_Host_0", function () {
        return View_DisksCapacityChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksCapacityChartComponentNgFactory", function () {
        return DisksCapacityChartComponentNgFactory;
      });
      /* harmony import */


      var _disks_capacity_chart_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./disks-capacity-chart.scss.shim.ngstyle */
      "cBsf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _chart_capacity_bar_chart_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chart/capacity-bar-chart/capacity-bar-chart.component.ngfactory */
      "rqyj");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _chart_capacity_bar_chart_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../chart/capacity-bar-chart/capacity-bar-chart.component */
      "VMKr");
      /* harmony import */


      var _chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../chart/highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../chart/highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _capacity_capacity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _chart_capacity_legend_capacity_legend_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../chart/capacity-legend/capacity-legend.component.ngfactory */
      "G4JX");
      /* harmony import */


      var _chart_capacity_legend_capacity_legend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../chart/capacity-legend/capacity-legend.component */
      "mgdW");
      /* harmony import */


      var _disks_capacity_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./disks-capacity-chart.component */
      "69kW");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DisksCapacityChartComponent = [_disks_capacity_chart_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DisksCapacityChartComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DisksCapacityChartComponent,
        data: {}
      });

      function View_DisksCapacityChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["id", "used-capacity-overview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["id", "used-overall-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["id", "free-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "vsan-capacity-bar-chart", [["id", "capacity-overview-bar-chart"]], null, [[null, "hoverBarChart"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("hoverBarChart" === en) {
            var pd_0 = (_co.hoveredSeries = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _chart_capacity_bar_chart_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CapacityBarChartComponent_0"], _chart_capacity_bar_chart_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CapacityBarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4767744, null, 0, _chart_capacity_bar_chart_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["CapacityBarChartComponent"], [_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_5__["HighchartsPropertiesService"], _chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__["BarChartService"], _chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_7__["HighchartsThemeService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], _capacity_capacity_service__WEBPACK_IMPORTED_MODULE_8__["VsanCapacityService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          sections: [0, "sections"],
          total: [1, "total"]
        }, {
          hoverBarChart: "hoverBarChart"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "vsan-capacity-legend", [["id", "capacity-legend"]], null, null, null, _chart_capacity_legend_capacity_legend_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_CapacityLegendComponent_0"], _chart_capacity_legend_capacity_legend_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_CapacityLegendComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, null, 0, _chart_capacity_legend_capacity_legend_component__WEBPACK_IMPORTED_MODULE_10__["CapacityLegendComponent"], [_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_8__["VsanCapacityService"], _chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__["BarChartService"]], {
          chartSectionData: [0, "chartSectionData"],
          used: [1, "used"],
          total: [2, "total"],
          hoveredSeries: [3, "hoveredSeries"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.capacitySections;
          var currVal_3 = _co.totalCapacity;

          _ck(_v, 12, 0, currVal_2, currVal_3);

          var currVal_4 = _co.capacitySections;
          var currVal_5 = _co.usedOverallCapacity;
          var currVal_6 = _co.totalCapacity;
          var currVal_7 = _co.hoveredSeries;

          _ck(_v, 16, 0, currVal_4, currVal_5, currVal_6, currVal_7);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.usedCapacityLabel;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.freeCapacityLabel;

          _ck(_v, 7, 0, currVal_1);
        });
      }

      function View_DisksCapacityChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-disks-capacity-chart", [], null, null, null, View_DisksCapacityChartComponent_0, RenderType_DisksCapacityChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _disks_capacity_chart_component__WEBPACK_IMPORTED_MODULE_11__["DisksCapacityChartComponent"], [], null, null)], null, null);
      }

      var DisksCapacityChartComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-disks-capacity-chart", _disks_capacity_chart_component__WEBPACK_IMPORTED_MODULE_11__["DisksCapacityChartComponent"], View_DisksCapacityChartComponent_Host_0, {
        disksClaiming: "disksClaiming"
      }, {}, []);
      /***/

    },

    /***/
    "tQZf":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/claimed-disks-data.ts ***!
      \****************************************************************************/

    /*! exports provided: ClaimedDisksData */

    /***/
    function tQZf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimedDisksData", function () {
        return ClaimedDisksData;
      });
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Claimed disk count and claimed disk space for a single claim option (old and new).
       */


      var ClaimedDisksData = /*#__PURE__*/_createClass(function ClaimedDisksData() {
        _classCallCheck(this, ClaimedDisksData);

        this.oldClaimedDisksCount = 0;
        this.oldClaimedCapacity = 0;
        this.newClaimedDisksCount = 0;
        this.newClaimedCapacity = 0;
      });
      /***/

    },

    /***/
    "xNd/":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan-max.component.ngfactory.js ***!
      \******************************************************************************************/

    /*! exports provided: RenderType_ClaimForVsanMaxComponent, View_ClaimForVsanMaxComponent_0, View_ClaimForVsanMaxComponent_Host_0, ClaimForVsanMaxComponentNgFactory */

    /***/
    function xNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimForVsanMaxComponent", function () {
        return RenderType_ClaimForVsanMaxComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForVsanMaxComponent_0", function () {
        return View_ClaimForVsanMaxComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimForVsanMaxComponent_Host_0", function () {
        return View_ClaimForVsanMaxComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimForVsanMaxComponentNgFactory", function () {
        return ClaimForVsanMaxComponentNgFactory;
      });
      /* harmony import */


      var _claim_for_vsan_max_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./claim-for-vsan-max.scss.shim.ngstyle */
      "d4/t");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../datagrid/tree-column.component.ngfactory */
      "2xL0");
      /* harmony import */


      var _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../datagrid/tree-column.component */
      "UczD");
      /* harmony import */


      var _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../cell/icon-item.component.ngfactory */
      "ErWV");
      /* harmony import */


      var _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../cell/icon-item.component */
      "yJ+k");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component.ngfactory */
      "2CYb");
      /* harmony import */


      var _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component */
      "8Y4q");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./perspective/disks-group-by-perspective.component.ngfactory */
      "fEff");
      /* harmony import */


      var _perspective_disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./perspective/disks-group-by-perspective.component */
      "5wEe");
      /* harmony import */


      var _claim_for_vsan_max_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./claim-for-vsan-max.component */
      "CFcp");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimForVsanMaxComponent = [_claim_for_vsan_max_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ClaimForVsanMaxComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ClaimForVsanMaxComponent,
        data: {}
      });

      function View_ClaimForVsanMaxComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.totalCapacity"));

          var currVal_3 = _co.totalCapacityFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "capacity";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanMaxComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.host"));

          var currVal_3 = _co.hostNameFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "hostName";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanMaxComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.transportType"));

          var currVal_3 = _co.transportTypeFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "transportType";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanMaxComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.diskAdapter"));

          var currVal_3 = _co.diskAdapterFilter;
          var currVal_4 = _co.datagrid;
          var currVal_5 = "diskAdapter";

          _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_ClaimForVsanMaxComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-icon-item", [], null, null, null, _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_IconItemComponent_0"], _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_8__["IconItemComponent"], [], {
          label: [0, "label"],
          iconClass: [1, "iconClass"],
          shape: [2, "shape"],
          isIconSolid: [3, "isIconSolid"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getIsVsanMaxCompatibleLabel(_v.parent.context.$implicit.data);

          var currVal_1 = _co.getIsVsanMaxCompatibleIconClass(_v.parent.context.$implicit.data);

          var currVal_2 = _co.getIsVsanMaxCompatibleIconShape(_v.parent.context.$implicit.data);

          var currVal_3 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_ClaimForVsanMaxComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_10__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _v.parent.context.$implicit.data.capacity;

          _ck(_v, 6, 0, currVal_5);
        });
      }

      function View_ClaimForVsanMaxComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getHostIcon(_v.parent.parent.context.$implicit.data);

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_ClaimForVsanMaxComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 12, "clr-dg-cell", [["class", "icon-name-container"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_10__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanMaxComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _co.getHostIcon(_v.parent.context.$implicit.data);

          _ck(_v, 8, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _v.parent.context.$implicit.data.hostName;

          _ck(_v, 11, 0, currVal_6);
        });
      }

      function View_ClaimForVsanMaxComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.data.transportType;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForVsanMaxComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.data.diskAdapter;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ClaimForVsanMaxComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 64, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-selected", null], [2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectTarget(_v.context.$implicit, $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 16, "clr-dg-cell", [["class", "name-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_10__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "vsan-expand", [], null, null, null, _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TreeExpanderComponent_0"], _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TreeExpanderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_13__["TreeExpanderComponent"], [], {
          row: [0, "row"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, 2, 7, "clr-dg-cell", [["class", "compatibility-column"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ClaimForVsanMaxComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 16777216, null, 2, 7, "clr-dg-cell", [["class", "claim-column centered-content"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 16777216, null, 0, 1, "input", [["clrCheckbox", ""], ["name", "claim-by-vsan-checkbox"], ["type", "checkbox"]], [[8, "checked", 0], [8, "id", 0]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("blur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).triggerValidation() !== false;
            ad = pd_0 && ad;
          }

          if ("change" === en) {
            var pd_1 = _co.toggleClaiming(_v.context.$implicit.data, $event.target) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 16777216, null, 2, 4, "clr-dg-cell", [["class", "text-nowrap"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](51, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanMaxComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanMaxComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanMaxComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_ClaimForVsanMaxComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 19, 0, currVal_9);

          _ck(_v, 30, 0);

          var currVal_14 = _co.getIsVsanMaxCompatibleLabel(_v.context.$implicit.data);

          _ck(_v, 35, 0, currVal_14);

          _ck(_v, 39, 0);

          _ck(_v, 44, 0);

          _ck(_v, 48, 0);

          var currVal_22 = _co.groupByPerspective == _co.DisksGroupByPerspective.DISKS_BY_HOST;

          _ck(_v, 54, 0, currVal_22);

          var currVal_23 = _co.groupByPerspective == _co.DisksGroupByPerspective.DISKS_BY_VENDOR;

          _ck(_v, 57, 0, currVal_23);

          var currVal_24 = _co.isStandalone;

          _ck(_v, 60, 0, currVal_24);

          var currVal_25 = _co.isStandalone;

          _ck(_v, 63, 0, currVal_25);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isRowSelected(_v.context.$implicit);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _v.context.$implicit.data.image;

          _ck(_v, 21, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.data.name;

          _ck(_v, 26, 0, currVal_11);

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).signpost.length > 0;

          _ck(_v, 29, 0, currVal_12, currVal_13);

          var currVal_15 = true;
          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).signpost.length > 0;

          _ck(_v, 38, 0, currVal_15, currVal_16);

          var currVal_17 = _v.context.$implicit.data.claimOption === _co.ClaimOption.SingleTier;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).id;

          _ck(_v, 43, 0, currVal_17, currVal_18);

          var currVal_19 = true;
          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).signpost.length > 0;

          _ck(_v, 47, 0, currVal_19, currVal_20);

          var currVal_21 = _v.context.$implicit.data.initialDriveType;

          _ck(_v, 51, 0, currVal_21);
        });
      }

      function View_ClaimForVsanMaxComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_14__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "vsan-disks-group-by-perspective", [["class", "clr-offset-8 clr-col-4"]], null, [[null, "changePerspective"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("changePerspective" === en) {
            var pd_0 = _co.changePerspective($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DisksGroupByPerspectiveComponent_0"], _perspective_disks_group_by_perspective_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DisksGroupByPerspectiveComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _perspective_disks_group_by_perspective_component__WEBPACK_IMPORTED_MODULE_16__["DisksGroupByPerspectiveComponent"], [], null, {
          changePerspective: "changePerspective"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 115, "clr-datagrid", [["class", "datagrid-compact"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          loading: [0, "loading"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 16777216, null, null, 13, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 1, 2, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 16777216, null, null, 14, "clr-dg-column", [["class", "compatibility-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](67, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 16777216, null, null, 10, "clr-dg-column", [["class", "claim-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](80, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](81, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, 1, 3, "vsan-tree-column", [], null, null, null, _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeColumnComponent_0"], _datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 49152, null, 0, _datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_6__["TreeColumnComponent"], [], {
          title: [0, "title"],
          filterObject: [1, "filterObject"],
          dataProvider: [2, "dataProvider"],
          dataField: [3, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](95, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanMaxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanMaxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanMaxComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanMaxComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ClaimForVsanMaxComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, 2, 8, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, 2, 3, "clr-dg-pagination", [], [[2, "pagination", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridPagination_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]], {
          pageSize: [0, "pageSize"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _pageSizeComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](123, 1, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 5, 0);

          var currVal_2 = _co.datagridLoading;

          _ck(_v, 24, 0, currVal_2);

          _ck(_v, 44, 0);

          var currVal_5 = _co.ClaimDisksUtil.getNameColumnTitle(_co.groupByPerspective);

          var currVal_6 = _co.nameFilter;
          var currVal_7 = _co.datagrid;
          var currVal_8 = "name";

          _ck(_v, 51, 0, currVal_5, currVal_6, currVal_7, currVal_8);

          _ck(_v, 59, 0);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 0, _ck(_v, 67, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.isVsanMaxCompatible"));

          var currVal_12 = _co.isVsanMaxCompatibleFilter;
          var currVal_13 = _co.datagrid;
          var currVal_14 = "isVsanMaxCompatible";

          _ck(_v, 66, 0, currVal_11, currVal_12, currVal_13, currVal_14);

          _ck(_v, 75, 0);

          _ck(_v, 87, 0);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 94, 0, _ck(_v, 95, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.driveType"));

          var currVal_21 = _co.driveTypeFilter;
          var currVal_22 = _co.datagrid;
          var currVal_23 = "driveTypeLabel";

          _ck(_v, 94, 0, currVal_20, currVal_21, currVal_22, currVal_23);

          var currVal_24 = _co.groupByPerspective == _co.DisksGroupByPerspective.DISKS_BY_HOST;

          _ck(_v, 100, 0, currVal_24);

          var currVal_25 = _co.groupByPerspective == _co.DisksGroupByPerspective.DISKS_BY_VENDOR;

          _ck(_v, 103, 0, currVal_25);

          var currVal_26 = _co.isStandalone;

          _ck(_v, 106, 0, currVal_26);

          var currVal_27 = _co.isStandalone;

          _ck(_v, 109, 0, currVal_27);

          var currVal_28 = _co.datagrid.rows;

          _ck(_v, 113, 0, currVal_28);

          var currVal_31 = _co.ClaimDisksUtil.DISKS_PER_DATAGRID_PAGE;

          _ck(_v, 121, 0, currVal_31);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).detailService.isOpen;

          _ck(_v, 10, 0, currVal_0, currVal_1);

          var currVal_3 = true;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ariaSort;

          _ck(_v, 40, 0, currVal_3, currVal_4);

          var currVal_9 = true;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ariaSort;

          _ck(_v, 55, 0, currVal_9, currVal_10);

          var currVal_15 = true;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ariaSort;

          _ck(_v, 71, 0, currVal_15, currVal_16);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 80, 0, _ck(_v, 81, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.claimFor.vsanMax"));

          _ck(_v, 80, 0, currVal_17);

          var currVal_18 = true;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).ariaSort;

          _ck(_v, 83, 0, currVal_18, currVal_19);

          var currVal_29 = true;

          _ck(_v, 116, 0, currVal_29);

          var currVal_30 = true;

          _ck(_v, 120, 0, currVal_30);

          var currVal_32 = _co.footerLabel.getLabel(_co.groupByPerspective);

          _ck(_v, 123, 0, currVal_32);
        });
      }

      function View_ClaimForVsanMaxComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-claim-for-vsan-max", [], null, null, null, View_ClaimForVsanMaxComponent_0, RenderType_ClaimForVsanMaxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _claim_for_vsan_max_component__WEBPACK_IMPORTED_MODULE_17__["ClaimForVsanMaxComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ClaimForVsanMaxComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-claim-for-vsan-max", _claim_for_vsan_max_component__WEBPACK_IMPORTED_MODULE_17__["ClaimForVsanMaxComponent"], View_ClaimForVsanMaxComponent_Host_0, {
        disksByHost: "disksByHost",
        disksByVendor: "disksByVendor",
        isStandalone: "isStandalone"
      }, {
        update: "update"
      }, []);
      /***/

    },

    /***/
    "zlqU":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-for-vsan.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function zlqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-select-container[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\nclr-datagrid[_ngcontent-%COMP%]   .name-column[_ngcontent-%COMP%] {\n  width: 12rem;\n}\nclr-datagrid[_ngcontent-%COMP%]   .dropdown-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci12c2FuLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMS0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBWUg7QUU4Qkc7RUFDRyxnQ0FBQTtBRjVCTjtBRThCRzs7RUFHRyxnQ0FBQTtBRjdCTjtBRStCRztFQUNHLDhCQUFBO0FGN0JOO0FBbEJBO0VBQ0csZ0JBQUE7QUFxQkg7QUFqQkc7RUFDRyxZQWZjO0FBbUNwQjtBQWxCRztFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBb0JOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLWZvci12c2FuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMC0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kbmFtZS1jb2x1bW4td2lkdGg6IDEycmVtO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmcoJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nKTtcbn1cblxuY2xyLXNlbGVjdC1jb250YWluZXIge1xuICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuY2xyLWRhdGFncmlkIHtcbiAgIC5uYW1lLWNvbHVtbiB7XG4gICAgICB3aWR0aDogJG5hbWUtY29sdW1uLXdpZHRoO1xuICAgfVxuICAgLmRyb3Bkb3duLWNlbGwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgfVxufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "zugg":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/validation-panel.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ValidationPanelComponent */

    /***/
    function zugg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidationPanelComponent", function () {
        return ValidationPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ValidationPanelComponent = /*#__PURE__*/function () {
        function ValidationPanelComponent(spaceEfficiencyService) {
          var _this17 = this;

          _classCallCheck(this, ValidationPanelComponent);

          this.spaceEfficiencyService = spaceEfficiencyService;
          this.noSelectionIsError = true;
          this.isConfigAcceptable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.vsanErrors = [];
          this.vsanWarnings = [];
          this.issuesListOpened = false;
          this.openIssueActionLink = {
            label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.showWarningDetails"),
            action: function action() {
              return _this17.issuesListOpened = true;
            }
          };
        }

        _createClass(ValidationPanelComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.validate();
          }
        }, {
          key: "validate",
          value: function validate() {
            if (!this.hostsData || !this.vsanConfigSpec) {
              return;
            }

            this.resetValidationResult();
            this.hostsData.forEach(function (host) {
              return host.updateDisksData();
            });
            this.validateAndFillErrorsAndWarnings();
            this.isConfigAcceptable.emit(!this.hasErrors);
          }
        }, {
          key: "resetValidationResult",
          value: function resetValidationResult() {
            this.vsanErrors = [];
            this.vsanWarnings = [];
            this.disksClaimingConfigInfo.resetValidationResult();
          }
        }, {
          key: "validateAndFillErrorsAndWarnings",
          value: function validateAndFillErrorsAndWarnings() {
            this.validateDiskClaiming();
            this.validateHostConfigs();
            this.validateEligibleDisks();

            if (this.vsanConfigSpec.isVsanMaxEnabled) {
              this.validateVsanMaxDiskClaiming();
            }

            this.vsanErrors = Array.from(new Set(this.vsanErrors));
            this.vsanWarnings = Array.from(new Set(this.vsanWarnings));
          }
        }, {
          key: "getHostsClaimingOverview",
          value: function getHostsClaimingOverview() {
            var numStorageSSDs = 0;
            var numStorageHDDs = 0;
            var numCacheSSDs = 0;
            var numManagedByVsanDisks = 0;
            var hasMixedStorageDisks = false;

            var _iterator28 = _createForOfIteratorHelper(this.hostsData),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var host = _step28.value;
                numStorageHDDs += host.numSelectedStorageHDDs;
                numStorageSSDs += host.numSelectedStorageSSDs;
                numCacheSSDs += host.numSelectedCacheDisks;
                numManagedByVsanDisks += host.numSelectedManagedByVsanDisks;

                if (numStorageHDDs !== 0 && numStorageSSDs !== 0) {
                  hasMixedStorageDisks = true;
                  break;
                }
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            return {
              noDisksAreSelected: !numCacheSSDs && !numStorageHDDs && !numStorageSSDs && !numManagedByVsanDisks,
              hasMixedStorageDisks: hasMixedStorageDisks,
              hasStorageHDDs: numStorageHDDs > 0
            };
          }
        }, {
          key: "validateDiskClaiming",
          value: function validateDiskClaiming() {
            var claims = this.getHostsClaimingOverview();

            if (claims.noDisksAreSelected) {
              // At least one disk should be claimed.
              if (this.noSelectionIsError) {
                this.vsanErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.noDisksSelected"));
              } else {
                this.vsanWarnings.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.noDisksSelected"));
              }
            } else if (claims.hasMixedStorageDisks) {
              // No mixed disk group creation.
              this.vsanErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.mixedStorageDisks"));
            } else if (this.spaceEfficiencyService.isOnlyAllFlashSupportedForClaimingDisks(this.vsanConfigSpec.spaceEfficiencyConfig) && claims.hasStorageHDDs) {
              // Only All-Flash disk groups in case of data efficiency.
              this.vsanErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.dataEfficiencyWithHdds", this.spaceEfficiencyService.toLabel(this.vsanConfigSpec.spaceEfficiencyConfig)));
            }
          }
        }, {
          key: "validateHostConfigs",
          value: function validateHostConfigs() {
            var _this18 = this;

            this.hostsData.forEach(function (hostItem) {
              var errorText = hostItem.retrieveConfigErrorText();

              if (errorText) {
                _this18.vsanErrors.push(errorText);
              }
            });
          }
        }, {
          key: "validateEligibleDisks",
          value: function validateEligibleDisks() {
            var _this19 = this;

            var firstItem = this.hostsData.find(function (host) {
              return host.hasEligibleDisks;
            });

            if (!firstItem) {
              return;
            } // Get the data for the first host, to validate that all hosts are claiming the same amount /vSAN case only/


            var numSelectedDisksPerHost = firstItem.numSelectedDisks;
            var numSelectedDiskGroups = firstItem.numSelectedCacheDisks;
            var createGroup = firstItem.isCreateGroupOperation;
            var editGroup = firstItem.isEditGroupOperation;
            this.hostsData.forEach(function (host) {
              if (!host.hasEligibleDisks) {
                return;
              }

              if (numSelectedDisksPerHost !== host.numSelectedDisks || numSelectedDiskGroups !== host.numSelectedCacheDisks) {
                // Add warning if the configuration is not optimum - not the same
                // amount of disk groups is selected for creation or some host are
                // claiming less disks than others)
                _this19.disksClaimingConfigInfo.disksNotEquallySpread = true;

                _this19.vsanWarnings.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.warning.notOptimumSelection"));
              }

              if (createGroup !== host.isCreateGroupOperation && editGroup !== host.isEditGroupOperation) {
                // Add warning that there is mixed mode - on some hosts
                // new disk groups will be created and on others - capacity
                // disks will be added to existing disk groups if any
                // NOTE: In the calculation the hosts with no selected disks
                // or hosts where there is no existing group where the
                // capacity disks will be added (there is an error for this)
                // are not taken into account.
                _this19.disksClaimingConfigInfo.mixedDiskClaiming = true;

                _this19.vsanWarnings.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.warning.mixedCreateEditMode"));
              }
            });
          }
        }, {
          key: "validateVsanMaxDiskClaiming",
          value: function validateVsanMaxDiskClaiming() {
            var _this20 = this;

            this.hostsData.filter(function (host) {
              var _a;

              return (_a = host.eligibleDisks) === null || _a === void 0 ? void 0 : _a.length;
            }).forEach(function (host) {
              var hasIncompatibleVsanMaxDisks = host.eligibleDisks.filter(function (disk) {
                return disk.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].SingleTier;
              }).some(function (disk) {
                return !disk.isVsanMaxCompatible;
              });

              if (hasIncompatibleVsanMaxDisks) {
                _this20.vsanWarnings.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.warning.vsanMaxIncompatibleDisks"));
              }
            });
          }
        }, {
          key: "hasAggregatedIssue",
          get: function get() {
            return this.vsanErrors.length + this.vsanWarnings.length > 1;
          }
        }, {
          key: "aggregatedIssueClass",
          get: function get() {
            return this.vsanErrors.length > 0 ? "danger" : "warning";
          }
        }, {
          key: "hasErrors",
          get: function get() {
            return this.vsanErrors.length > 0;
          }
        }, {
          key: "hasWarnings",
          get: function get() {
            return this.vsanWarnings.length > 0;
          }
        }]);

        return ValidationPanelComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=52-es5.js.map