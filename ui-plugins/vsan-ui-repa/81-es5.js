(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81], {
    /***/
    "AS0s":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/dialog/select-clusters-dialog.component.ts ***!
      \********************************************************************************/

    /*! exports provided: SelectClustersDialogComponent */

    /***/
    function AS0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectClustersDialogComponent", function () {
        return SelectClustersDialogComponent;
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


      var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/validation/alert-type */
      "4KIt");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var SelectClustersDialogComponent = /*#__PURE__*/function () {
        function SelectClustersDialogComponent(configureSharedWitnessWorkflowBacking, sharedWitnessHostService, witnessHostService) {
          _classCallCheck(this, SelectClustersDialogComponent);

          this.configureSharedWitnessWorkflowBacking = configureSharedWitnessWorkflowBacking;
          this.sharedWitnessHostService = sharedWitnessHostService;
          this.witnessHostService = witnessHostService;
          this.loading = false;
          this.clustersRefs = [];
          this.validationMessages = [];
          this.witnessHostName = "";
          this.witnessHost = _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject; // Flag to track if currently selected host & clusters have been validated against backend

          this.skipWitnessValidation = false;
        }

        _createClass(SelectClustersDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _yield$Promise$all, _yield$Promise$all2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      this.loading = true;
                      _context.next = 4;
                      return Promise.all([this.configureSharedWitnessWorkflowBacking.getAssignedAndTwoNodeClusters(this.witnessHost), this.configureSharedWitnessWorkflowBacking.getWitnessHostNode(this.witnessHost).then(function (r) {
                        return r.name;
                      }), this.sharedWitnessHostService.getSharedWitnessLimits(this.witnessHost)]);

                    case 4:
                      _yield$Promise$all = _context.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                      this.twoNodeClusters = _yield$Promise$all2[0];
                      this.witnessHostName = _yield$Promise$all2[1];
                      this.sharedWitnessLimits = _yield$Promise$all2[2];
                      _context.next = 14;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](0);
                      this.validationMessages = [_context.t0];

                    case 14:
                      _context.prev = 14;
                      this.loading = false;
                      return _context.finish(14);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 11, 14, 17]]);
            }));
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged(clustersRefs) {
            // Upon changing the clusters selection we need to call the backend for validation
            this.resetValidation();
            this.clustersRefs = clustersRefs;
          }
        }, {
          key: "validate",
          value: function validate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.skipWitnessValidation) {
                        _context2.next = 4;
                        break;
                      }

                      _context2.next = 3;
                      return this.closeDialog();

                    case 3:
                      return _context2.abrupt("return");

                    case 4:
                      _context2.next = 6;
                      return this.validateCompatibility();

                    case 6:
                      if (this.hasValidationError()) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 9;
                      return this.closeDialog();

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var task;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.loading = true;
                      _context3.prev = 1;
                      _context3.next = 4;
                      return this.configureSharedWitnessWorkflowBacking.configureSharedWitnessHost(this.clustersRefs, this.witnessHost, null);

                    case 4:
                      task = _context3.sent;

                      _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].closeModalDialog(task);

                      _context3.next = 11;
                      break;

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](1);
                      this.validationMessages = [_context3.t0];

                    case 11:
                      _context3.prev = 11;
                      this.loading = false;
                      return _context3.finish(11);

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[1, 8, 11, 14]]);
            }));
          }
        }, {
          key: "validateCompatibility",
          value: function validateCompatibility() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.resetValidation();

                      if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].isEmpty(this.validationMessages)) {
                        _context4.next = 4;
                        break;
                      }

                      _context4.next = 4;
                      return this.validateSharedWitnessHost();

                    case 4:
                      if (!this.hasValidationError()) {
                        this.skipWitnessValidation = true;
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "resetValidation",
          value: function resetValidation() {
            this.infoMessage = null;
            this.validationMessages = [];
            this.skipWitnessValidation = false;
          }
        }, {
          key: "hasValidationError",
          value: function hasValidationError() {
            return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].isEmpty(this.validationMessages);
          }
        }, {
          key: "validateSharedWitnessHost",
          value: function validateSharedWitnessHost() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var witnessHostValidation, result;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.loading = true;
                      _context5.prev = 1;
                      _context5.next = 4;
                      return this.configureSharedWitnessWorkflowBacking.getValidateCurrentWitnessHost(this.clustersRefs, this.witnessHost);

                    case 4:
                      result = _context5.sent;
                      this.clustersValidationData = this.witnessHostService.updateClustersValidation(result.witnessValidationResult, this.clustersValidationData, this.twoNodeClusters.map(function (i) {
                        return i.cluster;
                      }));
                      witnessHostValidation = this.witnessHostService.handleSharedWitnessHostValidationResult(result);
                      _context5.next = 12;
                      break;

                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](1);
                      witnessHostValidation = this.witnessHostService.handleHostValidationError(_context5.t0);

                    case 12:
                      if ([_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING, _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].DANGER].includes(witnessHostValidation.validationAlertType)) {
                        this.validationMessages = witnessHostValidation.validationMessages;
                      } else if (_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].INFO === witnessHostValidation.validationAlertType) {
                        this.infoMessage = witnessHostValidation.validationMessages[0];
                      }

                      this.loading = false;

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[1, 9]]);
            }));
          }
        }]);

        return SelectClustersDialogComponent;
      }();
      /***/

    },

    /***/
    "E77Q":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/shared-witness-constants.ts ***!
      \************************************************************************/

    /*! exports provided: SharedWitnessConstants */

    /***/
    function E77Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedWitnessConstants", function () {
        return SharedWitnessConstants;
      });
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var SharedWitnessConstants = /*@__PURE__*/function (SharedWitnessConstants) {
        SharedWitnessConstants[SharedWitnessConstants["MAX_NUMBER_OF_SHARED_CLUSTERS"] = 64] = "MAX_NUMBER_OF_SHARED_CLUSTERS";
        SharedWitnessConstants[SharedWitnessConstants["CLUSTER_COMPONENTS_THRESHOLD_PERC"] = 0.9] = "CLUSTER_COMPONENTS_THRESHOLD_PERC";
        return SharedWitnessConstants;
      }({});
      /***/

    },

    /***/
    "KIz4":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/compatibility-cell.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CompatibilityCellComponent */

    /***/
    function KIz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompatibilityCellComponent", function () {
        return CompatibilityCellComponent;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _shared_witness_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared-witness-constants */
      "E77Q");

      var CompatibilityCellComponent = /*#__PURE__*/function () {
        function CompatibilityCellComponent() {
          _classCallCheck(this, CompatibilityCellComponent);

          this.isClusterWitnessedByCurrentHost = false;
        }

        _createClass(CompatibilityCellComponent, [{
          key: "showCompatibilityResult",
          value: function showCompatibilityResult() {
            return this.isSelected // Cluster is not selected, so validation doesn't matter
            && this.clusterValidationData;
          }
        }, {
          key: "getClusterValidationMessage",
          value: function getClusterValidationMessage() {
            if (!this.clusterValidationData.compatible) {
              return this.clusterValidationData.validationMessage;
            }

            if (this.clusterValidationData.componentsCount !== null) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.host.sharedWitness.reassign.wizard.selectClusters.validation.compatibleCluster", this.clusterValidationData.componentsCount);
            } // componentsCount may not be present if SW validation is not triggered. This happens when:
            // 1) Host is not a witness and
            // 2) There is a single robo cluster.


            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.host.sharedWitness.reassign.wizard.selectClusters.validation.compatibleCluster.noComponents");
          }
        }, {
          key: "getClusterValidationClass",
          value: function getClusterValidationClass() {
            return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].clrIconShapeClassMap[this.getClusterValidationShape()];
          }
        }, {
          key: "getClusterValidationShape",
          value: function getClusterValidationShape() {
            if (!this.clusterValidationData.compatible) {
              return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
            }

            return this.isReachingComponentsLimit() ? _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE : _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
          }
        }, {
          key: "isReachingComponentsLimit",
          value: function isReachingComponentsLimit() {
            return this.clusterValidationData.componentsCount > this.clusterValidationData.componentsLimit * _shared_witness_constants__WEBPACK_IMPORTED_MODULE_2__["SharedWitnessConstants"].CLUSTER_COMPONENTS_THRESHOLD_PERC;
          }
        }]);

        return CompatibilityCellComponent;
      }();
      /***/

    },

    /***/
    "Rojx":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/shared-witness-route-paths.ts ***!
      \**************************************************************************/

    /*! exports provided: SharedWitnessRoutePaths */

    /***/
    function Rojx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedWitnessRoutePaths", function () {
        return SharedWitnessRoutePaths;
      });
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var SharedWitnessRoutePaths = /*@__PURE__*/function (SharedWitnessRoutePaths) {
        SharedWitnessRoutePaths["ADD_CLUSTERS_WIZARD_FULL"] = "sharedWitnessWizard/addClusters";
        SharedWitnessRoutePaths["ADD_CLUSTERS_WIZARD"] = "addClusters";
        SharedWitnessRoutePaths["REASSIGN_WITNESS_WIZARD_FULL"] = "sharedWitnessWizard/reassignWitness";
        SharedWitnessRoutePaths["REASSIGN_WITNESS_WIZARD"] = "reassignWitness";
        SharedWitnessRoutePaths["SELECT_CLUSTERS_DIALOG_FULL"] = "sharedWitness/selectClusters";
        SharedWitnessRoutePaths["SELECT_CLUSTERS_DIALOG"] = "selectClusters";
        SharedWitnessRoutePaths["ADD_CLUSTERS_PRECHECK_DIALOG"] = "addClustersPrecheck";
        SharedWitnessRoutePaths["REASSIGN_WITNESS_PRECHECK_DIALOG"] = "reassignWitnessPrecheck";
        return SharedWitnessRoutePaths;
      }({});
      /***/

    },

    /***/
    "TTJl":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/select-clusters.component.ngfactory.js ***!
      \***********************************************************************************/

    /*! exports provided: RenderType_SelectClustersComponent, View_SelectClustersComponent_0, View_SelectClustersComponent_Host_0, SelectClustersComponentNgFactory */

    /***/
    function TTJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SelectClustersComponent", function () {
        return RenderType_SelectClustersComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SelectClustersComponent_0", function () {
        return View_SelectClustersComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SelectClustersComponent_Host_0", function () {
        return View_SelectClustersComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectClustersComponentNgFactory", function () {
        return SelectClustersComponentNgFactory;
      });
      /* harmony import */


      var _select_clusters_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-clusters.scss.shim.ngstyle */
      "hQ0K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
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


      var _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/component/cell/icon-item.component.ngfactory */
      "ErWV");
      /* harmony import */


      var _common_component_cell_icon_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/component/cell/icon-item.component */
      "yJ+k");
      /* harmony import */


      var _compatibility_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./compatibility-cell.component.ngfactory */
      "yM+/");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _compatibility_cell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./compatibility-cell.component */
      "KIz4");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/directive/clr-button-group/clr-button-group-common.directive */
      "Ju17");
      /* harmony import */


      var _select_clusters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./select-clusters.component */
      "ea+e");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SelectClustersComponent = [_select_clusters_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SelectClustersComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SelectClustersComponent,
        data: {}
      });

      function View_SelectClustersComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 45, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
          "disable-action": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          item: [0, "item"],
          selected: [1, "selected"],
          clrDgSelectable: [2, "clrDgSelectable"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 16777216, null, 2, 8, "clr-dg-cell", [["class", "cluster-name-cell"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, [[10, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 147456, [[11, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "vsan-icon-item", [], null, null, null, _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconItemComponent_0"], _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _common_component_cell_icon_item_component__WEBPACK_IMPORTED_MODULE_6__["IconItemComponent"], [], {
          label: [0, "label"],
          shape: [1, "shape"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 16777216, null, 2, 8, "clr-dg-cell", [["class", "current-witnesshost-cell"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, [[10, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, [[11, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 2, "vsan-icon-item", [], null, null, null, _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IconItemComponent_0"], _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _common_component_cell_icon_item_component__WEBPACK_IMPORTED_MODULE_6__["IconItemComponent"], [], {
          label: [0, "label"],
          shape: [1, "shape"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 16777216, null, 2, 10, "clr-dg-cell", [["class", "cluster-compatibility-cell no-vertical-padding"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 114688, [[10, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 147456, [[11, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 16777216, null, 0, 4, "vsan-compatibility-cell", [["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _compatibility_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_CompatibilityCellComponent_0"], _compatibility_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_CompatibilityCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_9__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__["ReferenceWatcher"]], {
          copyToClipboard: [0, "copyToClipboard"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 49152, null, 0, _compatibility_cell_component__WEBPACK_IMPORTED_MODULE_10__["CompatibilityCellComponent"], [], {
          clusterValidationData: [0, "clusterValidationData"],
          isClusterWitnessedByCurrentHost: [1, "isClusterWitnessedByCurrentHost"],
          isSelected: [2, "isSelected"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_3 = _ck(_v, 4, 0, _co.isClusterWitnessedByCurrentHost(_v.context.$implicit));

          _ck(_v, 3, 0, currVal_3);

          var currVal_4 = _v.context.$implicit;

          var currVal_5 = _co.isClusterWitnessedByCurrentHost(_v.context.$implicit);

          var currVal_6 = !_co.isClusterWitnessedByCurrentHost(_v.context.$implicit);

          _ck(_v, 6, 0, currVal_4, currVal_5, currVal_6);

          _ck(_v, 14, 0);

          var currVal_9 = _v.context.$implicit.cluster == null ? null : _v.context.$implicit.cluster.name;
          var currVal_10 = _v.context.$implicit.cluster == null ? null : _v.context.$implicit.cluster.primaryIconId;

          _ck(_v, 19, 0, currVal_9, currVal_10);

          _ck(_v, 24, 0);

          var currVal_13 = _v.context.$implicit.witnessHost == null ? null : _v.context.$implicit.witnessHost.name;
          var currVal_14 = _v.context.$implicit.witnessHost == null ? null : _v.context.$implicit.witnessHost.primaryIconId;

          _ck(_v, 29, 0, currVal_13, currVal_14);

          _ck(_v, 35, 0);

          var currVal_20 = true;

          _ck(_v, 41, 0, currVal_20);

          var currVal_21 = _co.clustersValidationData && _co.clustersValidationData[_v.context.$implicit.cluster.moRef.value];

          var currVal_22 = _co.isClusterWitnessedByCurrentHost(_v.context.$implicit);

          var currVal_23 = _co.selectedClustersAll.includes(_v.context.$implicit);

          _ck(_v, 42, 0, currVal_21, currVal_22, currVal_23);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_7 = true;
          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).signpost.length > 0;

          _ck(_v, 13, 0, currVal_7, currVal_8);

          var currVal_11 = true;
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).signpost.length > 0;

          _ck(_v, 23, 0, currVal_11, currVal_12);

          var currVal_15 = true;
          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).signpost.length > 0;

          _ck(_v, 34, 0, currVal_15, currVal_16);

          var currVal_17 = "hidden";
          var currVal_18 = "ellipsis";
          var currVal_19 = "nowrap";

          _ck(_v, 39, 0, currVal_17, currVal_18, currVal_19);
        });
      }

      function View_SelectClustersComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_11__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["id", "add-clusters-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n   ", "\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 16, "div", [["class", "progress-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "div", [["class", "progress"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, {
          "danger": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "progress", [], [[8, "value", 0], [8, "max", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 67, "clr-datagrid", [["class", "datagrid-compact"], ["id", "witness-host-clusters-list"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], [[null, "clrDgSelectedChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrDgSelectedChange" === en) {
            var pd_0 = (_co.selectedClustersAll = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrDgSelectedChange" === en) {
            var pd_1 = _co.clusterSelectionChanged($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          selected: [0, "selected"]
        }, {
          selectedChanged: "clrDgSelectedChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 16777216, null, null, 10, "clr-dg-column", [["class", "name-column"], ["id", "cluster-name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](62, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 16777216, null, null, 10, "clr-dg-column", [["class", "name-column"], ["id", "current-witness-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](73, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](74, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 16777216, null, null, 10, "clr-dg-column", [["id", "cluster-compatibility-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](85, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](86, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectClustersComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 16, "clr-button-group", [["class", "btn-link"]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_12__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"], ["id", "validate-clusters-compatibility"], ["name", "validate-clusters-compatibility"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.compatibilityValidate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 4243456, [[15, 4], [16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          type: [2, "type"],
          id: [3, "id"],
          disabled: [4, "disabled"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](106, 0, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](107, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 8, 0);

          var currVal_3 = "progress";

          var currVal_4 = _ck(_v, 14, 0, _co.isExceedingLimit());

          _ck(_v, 13, 0, currVal_3, currVal_4);

          var currVal_10 = _co.selectedClustersAll;

          _ck(_v, 37, 0, currVal_10);

          _ck(_v, 56, 0);

          _ck(_v, 68, 0);

          _ck(_v, 80, 0);

          var currVal_20 = _co.twoNodeClusters;

          _ck(_v, 89, 0, currVal_20);

          var currVal_22 = "btn btn-sm";
          var currVal_23 = "validate-clusters-compatibility";
          var currVal_24 = "button";
          var currVal_25 = "validate-clusters-compatibility";
          var currVal_26 = !_co.selectedClusters.length;

          _ck(_v, 105, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getAddClustersDescription();

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).forAttr;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.host.sharedWitness.addClusters.wizard.selectClusters.clustersAdded.label"));

          _ck(_v, 9, 0, currVal_2);

          var currVal_5 = _co.getAllSelectedClustersCount();

          var currVal_6 = _co.getMaxWitnessClusters();

          _ck(_v, 16, 0, currVal_5, currVal_6);

          var currVal_7 = _co.getSelectedClustersCountLabel();

          _ck(_v, 20, 0, currVal_7);

          var currVal_8 = true;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).detailService.isOpen;

          _ck(_v, 23, 0, currVal_8, currVal_9);

          var currVal_11 = true;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ariaSort;

          _ck(_v, 52, 0, currVal_11, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 61, 0, _ck(_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.host.sharedWitness.reassign.wizard.selectClusters.cluster.name"));

          _ck(_v, 61, 0, currVal_13);

          var currVal_14 = true;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ariaSort;

          _ck(_v, 64, 0, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 73, 0, _ck(_v, 74, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.host.sharedWitness.addClusters.wizard.selectClusters.cluster.witness"));

          _ck(_v, 73, 0, currVal_16);

          var currVal_17 = true;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ariaSort;

          _ck(_v, 76, 0, currVal_17, currVal_18);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 85, 0, _ck(_v, 86, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.host.sharedWitness.reassign.wizard.selectClusters.cluster.compatibility"));

          _ck(_v, 85, 0, currVal_19);

          var currVal_21 = true;

          _ck(_v, 92, 0, currVal_21);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 106, 0, _ck(_v, 107, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.host.sharedWitness.reassign.wizard.selectClusters.validateClusters.label"));

          _ck(_v, 106, 0, currVal_27);
        });
      }

      function View_SelectClustersComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-select-clusters", [], null, null, null, View_SelectClustersComponent_0, RenderType_SelectClustersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _select_clusters_component__WEBPACK_IMPORTED_MODULE_13__["SelectClustersComponent"], [], null, null)], null, null);
      }

      var SelectClustersComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-select-clusters", _select_clusters_component__WEBPACK_IMPORTED_MODULE_13__["SelectClustersComponent"], View_SelectClustersComponent_Host_0, {
        witnessLimits: "witnessLimits",
        clustersValidationData: "clustersValidationData",
        twoNodeClusters: "twoNodeClusters"
      }, {
        selectionChanged: "selectionChanged",
        validateCompatibility: "validateCompatibility"
      }, []);
      /***/

    },

    /***/
    "V8EJ":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/dialog/select-clusters-dialog.component.ngfactory.js ***!
      \******************************************************************************************/

    /*! exports provided: RenderType_SelectClustersDialogComponent, View_SelectClustersDialogComponent_0, View_SelectClustersDialogComponent_Host_0, SelectClustersDialogComponentNgFactory */

    /***/
    function V8EJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SelectClustersDialogComponent", function () {
        return RenderType_SelectClustersDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SelectClustersDialogComponent_0", function () {
        return View_SelectClustersDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SelectClustersDialogComponent_Host_0", function () {
        return View_SelectClustersDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectClustersDialogComponentNgFactory", function () {
        return SelectClustersDialogComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component.ngfactory */
      "0JAx");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component */
      "ACap");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_select_clusters_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/select-clusters.component.ngfactory */
      "TTJl");
      /* harmony import */


      var _common_select_clusters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/select-clusters.component */
      "ea+e");
      /* harmony import */


      var _select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./select-clusters-dialog.component */
      "AS0s");
      /* harmony import */


      var _generated_configure_shared_witness_workflow_backing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../generated/configure-shared-witness-workflow-backing */
      "lgfC");
      /* harmony import */


      var _generated_shared_witness_host_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../generated/shared-witness-host-service */
      "1EIX");
      /* harmony import */


      var _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/service/witness-validation.service */
      "+W3v");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SelectClustersDialogComponent = [];

      var RenderType_SelectClustersDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_SelectClustersDialogComponent,
        data: {}
      });

      function View_SelectClustersDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["alertType", "info"], ["id", "info-message"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_2__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"],
          isSmall: [3, "isSmall"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "info";
          var currVal_1 = _co.infoMessage;
          var currVal_2 = false;
          var currVal_3 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_SelectClustersDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 11, "vsan-edit-prompt", [], null, [[null, "alertMessagesChange"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.validationMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirm" === en) {
            var pd_1 = _co.validate() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EditPrompt_0"], _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EditPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          confirmText: [2, "confirmText"],
          alertMessages: [3, "alertMessages"],
          blockButton: [4, "blockButton"],
          blockContent: [5, "blockContent"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_SelectClustersDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 0, 2, "vsan-select-clusters", [], null, [[null, "selectionChanged"], [null, "validateCompatibility"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectionChanged" === en) {
            var pd_0 = _co.selectionChanged($event) !== false;
            ad = pd_0 && ad;
          }

          if ("validateCompatibility" === en) {
            var pd_1 = _co.validateCompatibility() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_select_clusters_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_SelectClustersComponent_0"], _common_select_clusters_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_SelectClustersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, null, 0, _common_select_clusters_component__WEBPACK_IMPORTED_MODULE_9__["SelectClustersComponent"], [], {
          witnessLimits: [0, "witnessLimits"],
          clustersValidationData: [1, "clustersValidationData"],
          twoNodeClusters: [2, "twoNodeClusters"]
        }, {
          selectionChanged: "selectionChanged",
          validateCompatibility: "validateCompatibility"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.host.sharedWitness.addClusters.dialog.title"));

          var currVal_1 = _co.witnessHostName;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 2, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.common.add"));

          var currVal_3 = _co.validationMessages;
          var currVal_4 = _co.loading || !(_co.clustersRefs == null ? null : _co.clustersRefs.length);
          var currVal_5 = _co.loading;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.infoMessage;

          _ck(_v, 8, 0, currVal_6);

          var currVal_7 = _co.sharedWitnessLimits;
          var currVal_8 = _co.clustersValidationData;
          var currVal_9 = _co.twoNodeClusters;

          _ck(_v, 11, 0, currVal_7, currVal_8, currVal_9);
        }, null);
      }

      function View_SelectClustersDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-select-clusters-dialog", [], null, null, null, View_SelectClustersDialogComponent_0, RenderType_SelectClustersDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SelectClustersDialogComponent"], [_generated_configure_shared_witness_workflow_backing__WEBPACK_IMPORTED_MODULE_11__["ConfigureSharedWitnessWorkflowBacking"], _generated_shared_witness_host_service__WEBPACK_IMPORTED_MODULE_12__["SharedWitnessHostService"], _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_13__["WitnessValidationService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var SelectClustersDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-select-clusters-dialog", _select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SelectClustersDialogComponent"], View_SelectClustersDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "ea+e":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/select-clusters.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SelectClustersComponent */

    /***/
    function eaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectClustersComponent", function () {
        return SelectClustersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2019-2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var SelectClustersComponent = /*#__PURE__*/function () {
        function SelectClustersComponent() {
          _classCallCheck(this, SelectClustersComponent);

          this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.validateCompatibility = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Selected clusters excluding ones witnessed by the current host

          this.selectedClusters = []; // Datagrid model for selection.

          this.selectedClustersAll = [];
        }

        _createClass(SelectClustersComponent, [{
          key: "isClusterWitnessedByCurrentHost",
          value: function isClusterWitnessedByCurrentHost(clusterData) {
            if (clusterData.witnessHost) {
              return _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].areEqual(clusterData.witnessHost.moRef, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject);
            }

            return false;
          }
        }, {
          key: "compatibilityValidate",
          value: function compatibilityValidate() {
            this.validateCompatibility.emit();
          }
        }, {
          key: "clusterSelectionChanged",
          value: function clusterSelectionChanged(clusters) {
            var _this = this;

            // Exclude already witnessed clusters
            this.selectedClusters = clusters.filter(function (c) {
              return !_this.isClusterWitnessedByCurrentHost(c);
            });
            var clustersRefs = this.selectedClusters.map(function (c) {
              return c.cluster.moRef;
            });
            this.selectionChanged.emit(clustersRefs);
          }
        }, {
          key: "getAllSelectedClustersCount",
          value: function getAllSelectedClustersCount() {
            return this.selectedClustersAll.length;
          }
        }, {
          key: "getAddClustersDescription",
          value: function getAddClustersDescription() {
            var maxComponentsPerCluster = this.witnessLimits && this.witnessLimits.maxComponentsPerCluster ? this.witnessLimits.maxComponentsPerCluster : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.na.label");
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.host.sharedWitness.addClusters.wizard.selectClusters.description", this.getMaxWitnessClustersLabel(), maxComponentsPerCluster);
          }
        }, {
          key: "getSelectedClustersCountLabel",
          value: function getSelectedClustersCountLabel() {
            var clustersCountKey = this.isExceedingLimit() ? "vsan.host.sharedWitness.addClusters.wizard.selectClusters.clustersAdded.count.exceeded" : "vsan.host.sharedWitness.addClusters.wizard.selectClusters.clustersAdded.count";
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString(clustersCountKey, this.getAllSelectedClustersCount(), this.getMaxWitnessClustersLabel());
          }
        }, {
          key: "isExceedingLimit",
          value: function isExceedingLimit() {
            return this.getAllSelectedClustersCount() > this.getMaxWitnessClusters();
          }
        }, {
          key: "getMaxWitnessClustersLabel",
          value: function getMaxWitnessClustersLabel() {
            return this.getMaxWitnessClusters() ? this.getMaxWitnessClusters() : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.na.label");
          }
        }, {
          key: "getMaxWitnessClusters",
          value: function getMaxWitnessClusters() {
            return this.witnessLimits && this.witnessLimits.maxWitnessClusters ? this.witnessLimits.maxWitnessClusters : 0;
          }
        }]);

        return SelectClustersComponent;
      }();
      /***/

    },

    /***/
    "hQ0K":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/select-clusters.scss.shim.ngstyle.js ***!
      \*********************************************************************************/

    /*! exports provided: styles */

    /***/
    function hQ0K(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n#witness-host-clusters-list[_ngcontent-%COMP%]   .name-column[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9zaGFyZWQtd2l0bmVzcy9jb21tb24vc2VsZWN0LWNsdXN0ZXJzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMS0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBWUg7QUU4Qkc7RUFDRyxnQ0FBQTtBRjVCTjtBRThCRzs7RUFHRyxnQ0FBQTtBRjdCTjtBRStCRztFQUNHLDhCQUFBO0FGN0JOO0FBakJHO0VBQ0csWUFYYztBQStCcEIiLCJmaWxlIjoic3JjL2FwcC92c2FuL3NoYXJlZC13aXRuZXNzL2NvbW1vbi9zZWxlY3QtY2x1c3RlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5LTIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlsc1wiO1xuXG4kbmFtZS1jb2x1bW4td2lkdGg6IDIwMHB4O1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMSAwIDByZW07XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbiN3aXRuZXNzLWhvc3QtY2x1c3RlcnMtbGlzdCB7XG4gICAubmFtZS1jb2x1bW4ge1xuICAgICAgd2lkdGg6ICRuYW1lLWNvbHVtbi13aWR0aDtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "mqPV":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/compatibility-cell.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function mqPV(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9zaGFyZWQtd2l0bmVzcy9jb21tb24vY29tcGF0aWJpbGl0eS1jZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUFDQTtFQUVHLGNBQUE7QUFBSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vc2hhcmVkLXdpdG5lc3MvY29tbW9uL2NvbXBhdGliaWxpdHktY2VsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbjpob3N0IHtcbiAgIC8vIFVzZWQgZGlzcGxheTogYmxvY2sgYXMgZmxleCBjb250cmFkaWN0cyB3aXRoIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHN0eWxlIHRoaXMgaXMgYXBwbGllZCB2aWEgdnNhbi1zaG93LXRpdGxlXG4gICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"];
      /***/
    },

    /***/
    "yM+/":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/compatibility-cell.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_CompatibilityCellComponent, View_CompatibilityCellComponent_0, View_CompatibilityCellComponent_Host_0, CompatibilityCellComponentNgFactory */

    /***/
    function yM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CompatibilityCellComponent", function () {
        return RenderType_CompatibilityCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CompatibilityCellComponent_0", function () {
        return View_CompatibilityCellComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CompatibilityCellComponent_Host_0", function () {
        return View_CompatibilityCellComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompatibilityCellComponentNgFactory", function () {
        return CompatibilityCellComponentNgFactory;
      });
      /* harmony import */


      var _compatibility_cell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./compatibility-cell.scss.shim.ngstyle */
      "mqPV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _compatibility_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./compatibility-cell.component */
      "KIz4");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CompatibilityCellComponent = [_compatibility_cell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CompatibilityCellComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CompatibilityCellComponent,
        data: {}
      });

      function View_CompatibilityCellComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "clr-icon", [], [[1, "shape", 0], [8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getClusterValidationShape();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "is-solid ", _co.getClusterValidationClass(), "");

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_CompatibilityCellComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompatibilityCellComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getClusterValidationShape();

          _ck(_v, 3, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _co.getClusterValidationMessage();

          _ck(_v, 6, 0, currVal_1);
        });
      }

      function View_CompatibilityCellComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.host.sharedWitness.addClusters.wizard.selectClusters.validation.alreadyAdded"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CompatibilityCellComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompatibilityCellComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CompatibilityCellComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.showCompatibilityResult() && !_co.isClusterWitnessedByCurrentHost;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.isClusterWitnessedByCurrentHost;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_CompatibilityCellComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-compatibility-cell", [], null, null, null, View_CompatibilityCellComponent_0, RenderType_CompatibilityCellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _compatibility_cell_component__WEBPACK_IMPORTED_MODULE_6__["CompatibilityCellComponent"], [], null, null)], null, null);
      }

      var CompatibilityCellComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-compatibility-cell", _compatibility_cell_component__WEBPACK_IMPORTED_MODULE_6__["CompatibilityCellComponent"], View_CompatibilityCellComponent_Host_0, {
        clusterValidationData: "clusterValidationData",
        isClusterWitnessedByCurrentHost: "isClusterWitnessedByCurrentHost",
        isSelected: "isSelected"
      }, {}, []);
      /***/

    },

    /***/
    "yzfy":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/shared-witness/common/shared-witness-common.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SharedWitnessCommonModule */

    /***/
    function yzfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedWitnessCommonModule", function () {
        return SharedWitnessCommonModule;
      });

      var SharedWitnessCommonModule = /*#__PURE__*/_createClass(function SharedWitnessCommonModule() {
        _classCallCheck(this, SharedWitnessCommonModule);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=81-es5.js.map