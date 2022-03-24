(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85], {
    /***/
    "0cwf":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/vm/io-diagnostics/io-diagnostics-common.module.ts ***!
      \************************************************************************/

    /*! exports provided: IoDiagnosticsCommonModule */

    /***/
    function cwf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IoDiagnosticsCommonModule", function () {
        return IoDiagnosticsCommonModule;
      });

      var IoDiagnosticsCommonModule = /*#__PURE__*/_createClass(function IoDiagnosticsCommonModule() {
        _classCallCheck(this, IoDiagnosticsCommonModule);
      });
      /***/

    },

    /***/
    "A5CE":
    /*!***************************************************!*\
      !*** ./src/app/vsan/common/util/modal-builder.ts ***!
      \***************************************************/

    /*! exports provided: ModalBuilder */

    /***/
    function A5CE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBuilder", function () {
        return ModalBuilder;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logger */
      "a0OL");
      /* harmony import */


      var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./platform */
      "RrEr");
      /* harmony import */


      var _vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vsan-util */
      "UODZ");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ModalBuilder = /*@__PURE__*/function () {
        var ModalBuilder = /*#__PURE__*/function () {
          function ModalBuilder(appId) {
            _classCallCheck(this, ModalBuilder);

            this.appId = appId;
            this.size = ModalBuilder.DEFAULT_SIZE; // When null, the modal dialog will be headless and the docked
            // view is expected to provide a title bar.

            this.title = null;
            this.accessibilityTitle = null;
            this.urlParams = {};
          }

          _createClass(ModalBuilder, [{
            key: "setDimensions",
            value: function setDimensions(dimensions) {
              if (!dimensions || dimensions.length !== 2) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("invalid modal dimensions", dimensions);

                dimensions = ModalBuilder.DEFAULT_SIZE;
              }

              return this.setSize(dimensions[ModalBuilder.WIDTH], dimensions[ModalBuilder.HEIGHT]);
            }
          }, {
            key: "setSize",
            value: function setSize(width, height) {
              this.size = [width, height];
              return this;
            }
          }, {
            key: "setUrlParameters",
            value: function setUrlParameters(params) {
              this.urlParams = params;
              return this;
            }
            /**
             * Set to null if the view provides its own title bar
             */

          }, {
            key: "setTitle",
            value: function setTitle(title) {
              this.title = title;
              return this;
            }
          }, {
            key: "setAccessibilityTitle",
            value: function setAccessibilityTitle(accessibilityTitle) {
              this.accessibilityTitle = accessibilityTitle;
              return this;
            }
            /**
             * Set explicit event target if it is changed before opening the modal.
             * For example when making a preceding request the event target is the XMLHttpRequest object.
             */

          }, {
            key: "setEventTarget",
            value: function setEventTarget(eventTarget) {
              this.eventTarget = eventTarget;
              return this;
            }
            /**
             * Opens a modal dialog and returns a promise to collect the result; On close the target element is focused.
             * @param context - any JS data object, can be retrieved by WebPlatform.getModalContext()
             * @returns {Promise<any>} - Invoked if the dialog invokes WebPlatform.closeModalDialog(arg)
             *       with non-null arg. The promise is never rejected.
             */

          }, {
            key: "open",
            value: function open(context) {
              var _this = this;

              return new Promise(function (accept) {
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement = _this.eventTarget ? _this.eventTarget : event && event.target ? event.target : null;

                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler = function (data) {
                  if (typeof data !== "undefined") {
                    // Deep copy of the object was required to resolve an issue with object's prototype overriding when
                    // passing complex objects in IE11/Edge; Keep it for safety.
                    accept(JSON.parse(JSON.stringify(data)));
                  } else if (_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement && _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus) {
                    // On cancel just focus the target element. Timeout is required as otherwise the focus may be
                    // consumed by the mouse click.
                    setTimeout(function () {
                      return _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus();
                    }, 100);
                  }
                };

                var actionUrl = "".concat(ModalBuilder.APP_URL, "?viewId=").concat(_this.appId);
                var separator = "?";

                for (var param in _this.urlParams) {
                  actionUrl += separator + param + "=" + _this.urlParams[param];
                  separator = "&";
                }

                _platform__WEBPACK_IMPORTED_MODULE_3__["WebPlatform"].openModalDialog(_this.title, actionUrl, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObjectUid, _this.size[0], _this.size[1], _this.title != null, _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler
                /* onClose */
                , context
                /* retrieve with Platform.getModalContext() */
                , _this.accessibilityTitle);
              });
            }
          }]);

          return ModalBuilder;
        }();

        ModalBuilder.WIDTH = 0;
        ModalBuilder.HEIGHT = 1;
        ModalBuilder.DEFAULT_SIZE = [1000, 530];
        ModalBuilder.WIZARD_XL = [1200, 700];
        ModalBuilder.APP_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repa && _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repaExtension ? "index.html" : "/ui/h5-vsan-ui/";
        return ModalBuilder;
      }();
      /***/

    },

    /***/
    "AVgZ":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/vm/io-diagnostics/action/run-instance-validation.ngfactory.js ***!
      \************************************************************************************/

    /*! exports provided: RenderType_RunInstanceValidation, View_RunInstanceValidation_0, View_RunInstanceValidation_Host_0, RunInstanceValidationNgFactory */

    /***/
    function AVgZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_RunInstanceValidation", function () {
        return RenderType_RunInstanceValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_RunInstanceValidation_0", function () {
        return View_RunInstanceValidation_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_RunInstanceValidation_Host_0", function () {
        return View_RunInstanceValidation_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunInstanceValidationNgFactory", function () {
        return RunInstanceValidationNgFactory;
      });
      /* harmony import */


      var _run_instance_validation_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./run-instance-validation.scss.shim.ngstyle */
      "CRKZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _run_instance_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./run-instance-validation */
      "nn6H");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_RunInstanceValidation = [_run_instance_validation_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_RunInstanceValidation = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_RunInstanceValidation,
        data: {}
      });

      function View_RunInstanceValidation_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-validation", [["id", "failed-checks-reasons"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alerts: [1, "alerts"],
          actionLinks: [2, "actionLinks"],
          allowClose: [3, "allowClose"],
          alertsExpanded: [4, "alertsExpanded"],
          allowExpandCollapse: [5, "allowExpandCollapse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "info";

          var currVal_1 = _co.getFailedChecksReasons();

          var currVal_2 = _co.getFailedChecksActionLinks();

          var currVal_3 = false;
          var currVal_4 = true;
          var currVal_5 = false;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_RunInstanceValidation_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-run-instance-validation", [], null, null, null, View_RunInstanceValidation_0, RenderType_RunInstanceValidation)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _run_instance_validation__WEBPACK_IMPORTED_MODULE_4__["RunInstanceValidation"], [], null, null)], null, null);
      }

      var RunInstanceValidationNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-run-instance-validation", _run_instance_validation__WEBPACK_IMPORTED_MODULE_4__["RunInstanceValidation"], View_RunInstanceValidation_Host_0, {
        failedChecks: "failedChecks",
        clsRef: "clsRef",
        onPerfServiceEnabled: "onPerfServiceEnabled"
      }, {}, []);
      /***/

    },

    /***/
    "CRKZ":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/vm/io-diagnostics/action/run-instance-validation.scss.shim.ngstyle.js ***!
      \********************************************************************************************/

    /*! exports provided: styles */

    /***/
    function CRKZ(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi92bS9pby1kaWFnbm9zdGljcy9hY3Rpb24vcnVuLWluc3RhbmNlLXZhbGlkYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBQTtBQUNBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvdnNhbi92bS9pby1kaWFnbm9zdGljcy9hY3Rpb24vcnVuLWluc3RhbmNlLXZhbGlkYXRpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbn0iXX0= */"];
      /***/
    },

    /***/
    "bKV4":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/validation/alert-action-link-util.ts ***!
      \****************************************************************************/

    /*! exports provided: AlertActionLinkUtil */

    /***/
    function bKV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertActionLinkUtil", function () {
        return AlertActionLinkUtil;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-dialog-util */
      "cMmx");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../vsan-routes */
      "w9V1");

      var AlertActionLinkUtil = /*#__PURE__*/function () {
        function AlertActionLinkUtil() {
          _classCallCheck(this, AlertActionLinkUtil);
        }

        _createClass(AlertActionLinkUtil, null, [{
          key: "getPerformanceServiceActionLink",
          value: function getPerformanceServiceActionLink(context, onDialogClose) {
            return {
              label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.services.performance.service.enable.action"),
              action: function action() {
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_1__["ModalBuilder"](_vsan_routes__WEBPACK_IMPORTED_MODULE_3__["VsanRoutes"].PERFORMANCE_CONFIG).setSize(_util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.height).open(context).then(onDialogClose);
              }
            };
          }
        }]);

        return AlertActionLinkUtil;
      }();
      /***/

    },

    /***/
    "cMmx":
    /*!******************************************************!*\
      !*** ./src/app/vsan/common/util/vsan-dialog-util.ts ***!
      \******************************************************/

    /*! exports provided: VsanDialogUtil, VsanDialogProperties */

    /***/
    function cMmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDialogUtil", function () {
        return VsanDialogUtil;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDialogProperties", function () {
        return VsanDialogProperties;
      });
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanDialogUtil = /*@__PURE__*/function () {
        var VsanDialogUtil = /*#__PURE__*/_createClass(function VsanDialogUtil() {
          _classCallCheck(this, VsanDialogUtil);
        });

        VsanDialogUtil.CAPACITY_MANAGEMENT_DIALOG = {
          width: 800,
          height: 700
        };
        VsanDialogUtil.DELETE_VOLUME_DIALOG = {
          width: 500,
          height: 250
        };
        VsanDialogUtil.MIGRATE_VOLUME_DIALOG = {
          width: 1030,
          height: 710
        };
        VsanDialogUtil.REAPPLY_VOLUME_POLICY_DIALOG = {
          width: 700,
          height: 250
        };
        VsanDialogUtil.DUPLICATE_PCI_ID_MODEL_SELECTION_DIALOG = {
          width: 800,
          height: 500
        };
        VsanDialogUtil.HEALTH_RESTORE_ACTION_DIALOG = {
          width: 550,
          height: 250
        }; // Keep in sync with plugin.xml extension point

        VsanDialogUtil.CLUSTER_POWER_ON_DIALOG = {
          width: 600,
          height: 230
        };
        VsanDialogUtil.VM_IO_DIAGNOSTICS_METRICS_DIALOG = {
          width: 900,
          height: 700
        };
        VsanDialogUtil.VM_IO_DIAGNOSTICS_LATENCY_DIALOG = {
          width: 1000,
          height: 500
        };
        VsanDialogUtil.VM_IO_DIAGNOSTICS_DOM_OWNER_LATENCY_DIALOG = {
          width: 1000,
          height: 400
        };
        VsanDialogUtil.PERF_SVC_EDIT_ACTION_DIALOG = {
          width: 800,
          height: 450
        };
        VsanDialogUtil.PERF_SVC_ENABLE_ACTION_DIALOG = {
          width: 800,
          height: 250
        };
        VsanDialogUtil.CLAIM_DISKS_ACTION_DIALOG = {
          width: 1200,
          height: 650
        };
        VsanDialogUtil.VSAN_DISK_CLAIM_ACTION_DIALOG = {
          width: 670,
          height: 300
        };
        return VsanDialogUtil;
      }();

      var VsanDialogProperties = /*#__PURE__*/_createClass(function VsanDialogProperties() {
        _classCallCheck(this, VsanDialogProperties);
      });
      /***/

    },

    /***/
    "nn6H":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/vm/io-diagnostics/action/run-instance-validation.ts ***!
      \**************************************************************************/

    /*! exports provided: RunInstanceValidation */

    /***/
    function nn6H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunInstanceValidation", function () {
        return RunInstanceValidation;
      });
      /* harmony import */


      var _generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-i-o-diagnostics-failed-check-type */
      "bYt0");
      /* harmony import */


      var _io_diagnostics_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../io-diagnostics.util */
      "tedp");
      /* harmony import */


      var _component_validation_alert_action_link_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/validation/alert-action-link-util */
      "bKV4");

      var RunInstanceValidation = /*#__PURE__*/function () {
        function RunInstanceValidation() {
          _classCallCheck(this, RunInstanceValidation);
        }

        _createClass(RunInstanceValidation, [{
          key: "getFailedChecksReasons",
          value: function getFailedChecksReasons() {
            return _io_diagnostics_util__WEBPACK_IMPORTED_MODULE_1__["IoDiagnosticsUtil"].getFailedChecksReasons(this.failedChecks);
          }
          /**
           * For each failed check return null or action (e.g., perf svc action).
           */

        }, {
          key: "getFailedChecksActionLinks",
          value: function getFailedChecksActionLinks() {
            var _this2 = this;

            var _a;

            return (_a = this.failedChecks) === null || _a === void 0 ? void 0 : _a.map(function (failedCheck) {
              return failedCheck.unsupportedType !== _generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_0__["VsanIODiagnosticsFailedCheckType"].PERF_SVC_DISABLED ? null : _component_validation_alert_action_link_util__WEBPACK_IMPORTED_MODULE_2__["AlertActionLinkUtil"].getPerformanceServiceActionLink({
                clusterRef: _this2.clsRef
              }, _this2.onPerfServiceEnabled);
            });
          }
        }]);

        return RunInstanceValidation;
      }();
      /***/

    },

    /***/
    "tedp":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/vm/io-diagnostics/io-diagnostics.util.ts ***!
      \***************************************************************/

    /*! exports provided: IoDiagnosticsUtil */

    /***/
    function tedp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IoDiagnosticsUtil", function () {
        return IoDiagnosticsUtil;
      });
      /* harmony import */


      var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/unavailable-view/unavailable-view-spec */
      "Hg5h");
      /* harmony import */


      var _generated_graph_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/graph-classes */
      "QieO");
      /* harmony import */


      var _generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/vsan-i-o-diagnostics-failed-check-type */
      "bYt0");
      /* harmony import */


      var _generated_vsan_io_latency_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/vsan-io-latency-type */
      "15ju");
      /* harmony import */


      var _util_dom_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/dom-util */
      "r+G3");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var IoDiagnosticsUtil = /*@__PURE__*/function () {
        var IoDiagnosticsUtil = /*#__PURE__*/function () {
          function IoDiagnosticsUtil() {
            _classCallCheck(this, IoDiagnosticsUtil);
          }

          _createClass(IoDiagnosticsUtil, null, [{
            key: "createDivElement",
            value: function createDivElement() {
              return document.createElement(IoDiagnosticsUtil.TAG_NAME);
            }
          }, {
            key: "attachUserEvents",
            value: function attachUserEvents(element, callback) {
              _util_dom_util__WEBPACK_IMPORTED_MODULE_4__["DomUtil"].onClick(element, callback);

              _util_dom_util__WEBPACK_IMPORTED_MODULE_4__["DomUtil"].onEnterKeyUp(element, callback);
            }
          }, {
            key: "isDomOwner",
            value: function isDomOwner(type) {
              return IoDiagnosticsUtil.DOM_OWNER_LATENCY_TYPES.includes(type);
            }
          }, {
            key: "isDomOwnerNode",
            value: function isDomOwnerNode(node) {
              return node && node.hasClass(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_1__["GraphClasses"].DOM_OWNER_NODE());
            }
          }, {
            key: "getUnsupportedClusterFailedCheck",
            value: function getUnsupportedClusterFailedCheck(ioInstanceResult) {
              var _a;

              var unsupportedClusterFailedCheck;

              if (ioInstanceResult && ((_a = ioInstanceResult.precheckResult.failedChecks) === null || _a === void 0 ? void 0 : _a.length)) {
                unsupportedClusterFailedCheck = ioInstanceResult.precheckResult.failedChecks.find(function (failedCheck) {
                  return IoDiagnosticsUtil.UNSUPPORTED_CLUSTER_TYPE.some(function (clsType) {
                    return clsType === failedCheck.unsupportedType;
                  });
                });
              }

              return unsupportedClusterFailedCheck;
            }
          }, {
            key: "createUnavailableViewSpec",
            value: function createUnavailableViewSpec(ioInstanceResult) {
              var unavailableViewSpec = null;
              var unsupportedClusterFailedCheck = IoDiagnosticsUtil.getUnsupportedClusterFailedCheck(ioInstanceResult);

              if (unsupportedClusterFailedCheck) {
                unavailableViewSpec = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_0__["UnavailableViewSpec"].IO_DIAGNOSTICS_NOT_SUPPORTED_CONFIG;
                unavailableViewSpec.statusLabel = unsupportedClusterFailedCheck.reason;
              }

              return unavailableViewSpec;
            }
          }, {
            key: "getFailedChecksReasons",
            value: function getFailedChecksReasons(failedChecks) {
              return failedChecks === null || failedChecks === void 0 ? void 0 : failedChecks.map(function (failedCheck) {
                return failedCheck.reason;
              });
            }
          }, {
            key: "getHostName",
            value: function getHostName(graphElementDetails) {
              return (graphElementDetails === null || graphElementDetails === void 0 ? void 0 : graphElementDetails.hostName) ? graphElementDetails.hostName : graphElementDetails === null || graphElementDetails === void 0 ? void 0 : graphElementDetails.hostUuid;
            }
          }, {
            key: "formatLatency",
            value: function formatLatency(latency) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].isUnset(latency) ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.na.label") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.grid.cell.latency", _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].localizeNumber(latency.toFixed(2)));
            }
          }, {
            key: "canRenderGraph",
            value: function canRenderGraph(graphElements) {
              return IoDiagnosticsUtil.hasEdges(graphElements) && IoDiagnosticsUtil.hasNodes(graphElements);
            }
          }, {
            key: "hasNoStats",
            value: function hasNoStats(graphElements) {
              return !IoDiagnosticsUtil.hasEdges(graphElements) && !IoDiagnosticsUtil.hasNodes(graphElements);
            }
          }, {
            key: "hasEdges",
            value: function hasEdges(graphElements) {
              var _a;

              return !!((_a = graphElements === null || graphElements === void 0 ? void 0 : graphElements.edges) === null || _a === void 0 ? void 0 : _a.length);
            }
          }, {
            key: "hasNodes",
            value: function hasNodes(graphElements) {
              var _a;

              return !!((_a = graphElements === null || graphElements === void 0 ? void 0 : graphElements.nodes) === null || _a === void 0 ? void 0 : _a.length);
            }
          }, {
            key: "getVmdkName",
            value: function getVmdkName(name) {
              return name.replace("\n", "");
            }
          }]);

          return IoDiagnosticsUtil;
        }();

        IoDiagnosticsUtil.TAG_NAME = "div";
        IoDiagnosticsUtil.DOM_OWNER_LATENCY_TYPES = [_generated_vsan_io_latency_type__WEBPACK_IMPORTED_MODULE_3__["VsanIoLatencyType"].DOM_OWNER, _generated_vsan_io_latency_type__WEBPACK_IMPORTED_MODULE_3__["VsanIoLatencyType"].PERF_DOM_OWNER, _generated_vsan_io_latency_type__WEBPACK_IMPORTED_MODULE_3__["VsanIoLatencyType"].CAPACITY_DOM_OWNER];
        IoDiagnosticsUtil.UNSUPPORTED_CLUSTER_TYPE = [_generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_2__["VsanIODiagnosticsFailedCheckType"].STRETCHED_CLUSTER, _generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_2__["VsanIODiagnosticsFailedCheckType"].NESTED_FAULT_DOMAIN, _generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_2__["VsanIODiagnosticsFailedCheckType"].COMPUTE_ONLY_CLUSTER, _generated_vsan_i_o_diagnostics_failed_check_type__WEBPACK_IMPORTED_MODULE_2__["VsanIODiagnosticsFailedCheckType"].VSAN_OBJECT_IN_REMOTE_DATASTORE];
        return IoDiagnosticsUtil;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=85-es5.js.map