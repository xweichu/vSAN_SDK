(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107], {
    /***/
    "+u6b":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-base.directive.ts ***!
      \*************************************************************************************/

    /*! exports provided: ClrButtonBaseDirective */

    /***/
    function u6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonBaseDirective", function () {
        return ClrButtonBaseDirective;
      });
      /**
       * Use this class as base class for directive, which handles clr-button. It will help to link the rendered button with
       * the clr-button on which the directive is applied.
       */


      var ClrButtonBaseDirective = /*#__PURE__*/_createClass(function ClrButtonBaseDirective(clrButton) {
        _classCallCheck(this, ClrButtonBaseDirective);

        this.clrButton = clrButton;

        if (!clrButton) {
          return;
        } // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.


        if (!clrButton.name) {
          clrButton.name = Math.random().toString();
        }

        var directiveHolder = clrButton;
        directiveHolder.directives = directiveHolder.directives || [];
        directiveHolder.directives.push(this);
      });
      /***/

    },

    /***/
    "0oyP":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/hci/health/health-check-dialog.component.ts ***!
      \******************************************************************/

    /*! exports provided: HealthCheckDialogComponent */

    /***/
    function oyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthCheckDialogComponent", function () {
        return HealthCheckDialogComponent;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _health_model_health_tests_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../health/model/health-tests.data */
      "MCPo");

      var HealthCheckDialogComponent = /*#__PURE__*/function () {
        function HealthCheckDialogComponent(hciService, permissionService) {
          var _this = this;

          _classCallCheck(this, HealthCheckDialogComponent);

          this.hciService = hciService;
          this.permissionService = permissionService;
          this.alertMessages = [];
          this.hasEditClusterPermission = false;

          this.handleHealthData = function (result) {
            if (!result) {
              _this.handleError(null);

              return;
            }

            if (_this.displayGroup) {
              _this.groupTests = result.subtests.map(function (subtest) {
                return new _health_model_health_tests_data__WEBPACK_IMPORTED_MODULE_5__["HealthTests"](subtest, true);
              });
            } else {
              _this.testData = result.subtests.find(function (test) {
                return test.testName === _this.healthTest;
              });
            }

            _this.loading = false;
          };

          this.handleError = function (error) {
            if (error) {
              _util_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"].error(error);
            }

            _this.alertMessages = [_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.error.dataExtraction")];
            _this.loading = false;
          };

          this.getIconShape = function (test) {
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].getVsanHealthStatusIconShape(test.status);
          };

          this.getIconClass = function (test) {
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].getVsanHealthStatusIconClass(test.status);
          };
        }

        _createClass(HealthCheckDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.loading = true;

            var context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getModalContext();

            this.title = context.title;
            this.perspective = context.perspective;
            this.healthGroup = context.healthGroup;
            this.healthTest = context.healthTest;
            this.displayGroup = !this.healthTest;
            Promise.all([this.permissionService.hasPermissions(_service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject, [_generated_privileges__WEBPACK_IMPORTED_MODULE_4__["Privileges"].EDIT_CLUSTER()]), this.hciService.getHealthGroupData(_service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject, this.perspective, this.healthGroup)]).then(function (result) {
              _this2.hasEditClusterPermission = result[0];

              _this2.handleHealthData(result[1]);
            })["catch"](this.handleError);
          }
        }]);

        return HealthCheckDialogComponent;
      }();
      /***/

    },

    /***/
    "2Sfw":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/getting-started-view.component.ngfactory.js ***!
      \*************************************************************************************/

    /*! exports provided: RenderType_GettingStartedViewComponent, View_GettingStartedViewComponent_0, View_GettingStartedViewComponent_Host_0, GettingStartedViewComponentNgFactory */

    /***/
    function Sfw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_GettingStartedViewComponent", function () {
        return RenderType_GettingStartedViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_GettingStartedViewComponent_0", function () {
        return View_GettingStartedViewComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_GettingStartedViewComponent_Host_0", function () {
        return View_GettingStartedViewComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedViewComponentNgFactory", function () {
        return GettingStartedViewComponentNgFactory;
      });
      /* harmony import */


      var _getting_started_view_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getting-started-view.scss.shim.ngstyle */
      "VFD0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _hci_pman_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hci-pman.component.ngfactory */
      "zs0a");
      /* harmony import */


      var _hci_pman_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hci-pman.component */
      "46C6");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/component/health/health-check-item.component.ngfactory */
      "Dh4T");
      /* harmony import */


      var _common_component_health_health_check_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/component/health/health-check-item.component */
      "y2Kt");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _getting_started_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./getting-started-view.component */
      "KeN7");
      /* harmony import */


      var _generated_hci_quickstart_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../generated/hci-quickstart-service */
      "qWbg");
      /* harmony import */


      var _generated_hci_quickstart_validation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../generated/hci-quickstart-validation-service */
      "LxZ8");
      /* harmony import */


      var _generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../generated/hci-cluster-service */
      "9Yzj");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_GettingStartedViewComponent = [_getting_started_view_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_GettingStartedViewComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_GettingStartedViewComponent,
        data: {}
      });

      function View_GettingStartedViewComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm btn-outline"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.closeQuickstart() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.cluster.hci.gettingStartedPage.closeQuickstartButton.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "validation-message"]], null, [[null, "onReload"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onReload" === en) {
            var pd_0 = _co.fetch() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowReload: [1, "allowReload"],
          allowClose: [2, "allowClose"]
        }, {
          onReload: "onReload"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;
          var currVal_1 = true;
          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_GettingStartedViewComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["alertType", "info"], ["id", "vsan-quickstart-status-info"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = "info";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.cluster.hci.gettingStartedPage.notFinishedWarning.alarmsSuppressedInfo"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_GettingStartedViewComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.enabledServices;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_GettingStartedViewComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-hci-pman", [["class", "getting-started-view"]], null, null, null, _hci_pman_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_HciPmanComponent_0"], _hci_pman_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_HciPmanComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _hci_pman_component__WEBPACK_IMPORTED_MODULE_6__["HciPmanComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]], {
          pmanText: [0, "pmanText"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.hci.gettingStarted.clusterBasics.personalityManagerEnabledText"));

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_GettingStartedViewComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_GettingStartedViewComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["class", "card-text"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.AlertType.INFO;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.hci.gettingStarted.addHostsCard.vsanMaxSupported.info.text"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_GettingStartedViewComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.GettingStartedUtils.getHostsLabel(_co.basicClusterData);

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.hci.gettingStarted.addHostsCard.contentText"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "]))], null, null);
      }

      function View_GettingStartedViewComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_GettingStartedViewComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
          vsanHealthChecks: 0,
          enableNavigation: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 4, 0, _co.getVsanMaxHealthChecks(_co.addHostsCard), false);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 10);

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_GettingStartedViewComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "icon-name-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "clr-icon", [["class", "is-success is-solid"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.Icon.CLR_SUCCESS_STANDARD_ICON_SHAPE;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.hci.gettingStarted.addHostsCard.vsanMaxChecks.passed"));

          _ck(_v, 10, 0, currVal_1);
        });
      }

      function View_GettingStartedViewComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], null, null);
      }

      function View_GettingStartedViewComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_GettingStartedViewComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, {
          vsanHealthChecks: 0,
          enableNavigation: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _ck(_v, 8, 0, _co.getGenericHealthChecks(_co.addHostsCard), false);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 10);

          _ck(_v, 7, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.hci.gettingStarted.addHostsCard.otherChecks.label"));

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "card-block"], ["id", "vsan-max-enabled-checks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var tmp_1_0 = null;
          var currVal_1 = (tmp_1_0 = _co.getVsanMaxHealthChecks(_co.addHostsCard)) == null ? null : tmp_1_0.length;

          _ck(_v, 10, 0, currVal_1);

          var tmp_2_0 = null;
          var currVal_2 = !((tmp_2_0 = _co.getVsanMaxHealthChecks(_co.addHostsCard)) == null ? null : tmp_2_0.length);

          _ck(_v, 14, 0, currVal_2);

          var tmp_3_0 = null;
          var currVal_3 = (tmp_3_0 = _co.getGenericHealthChecks(_co.addHostsCard)) == null ? null : tmp_3_0.length;

          _ck(_v, 18, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.hci.gettingStarted.addHostsCard.hardwareChecks.label"));

          _ck(_v, 5, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], null, null);
      }

      function View_GettingStartedViewComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_GettingStartedViewComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
          vsanHealthChecks: 0,
          enableNavigation: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 4, 0, _co.addHostsCard == null ? null : _co.addHostsCard.validationData == null ? null : _co.addHostsCard.validationData.vsanHealthChecks, false);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 10);

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_GettingStartedViewComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_GettingStartedViewComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.GettingStartedUtils.getConfiguredClusterHeaderLabel(_co.basicClusterData);

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                  ", "\n               "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.GettingStartedUtils.getConfigureCardContentText(_co.configureClusterCard, _co.basicClusterData);

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [["class", "non-bullet-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "health-check-item", [], null, null, null, _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HealthCheckItem_0"], _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HealthCheckItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _common_component_health_health_check_item_component__WEBPACK_IMPORTED_MODULE_11__["HealthCheckItem"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]], {
          healthCheck: [0, "healthCheck"],
          canNavigateToHealthView: [1, "canNavigateToHealthView"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit;
          var currVal_1 = _co.basicClusterData.vsanEnabled;

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_GettingStartedViewComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.configureClusterCard.validationData.vsanHealthChecks;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_GettingStartedViewComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["class", "card-text"], ["id", "vsan-max-configure-warning"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.AlertType.WARNING;

          var currVal_1 = _co.getVsanMaxConfigurationWarningMessage();

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_GettingStartedViewComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 153, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "h5", [["vsan-auto-focus", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_14__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "div", [["id", "quickstart-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 130, "div", [["class", "cards-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 35, "div", [["class", "card"], ["id", "cluster-basics-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 10, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "span", [["class", "text-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](30, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 3, "clr-icon", [["class", "is-success is-solid"], ["shape", "success-standard"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 13, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 7, "div", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 5, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "button", [["class", "btn btn-sm"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.invokeEditCluster() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](56, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](57, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 46, "div", [["class", "card"], ["id", "add-hosts-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 9, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "span", [["class", "text-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](66, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](67, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_GettingStartedViewComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](71, {
          card: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 19, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 11, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 4, "button", [["class", "btn btn-sm"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.invokeAddHosts() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](99, {
          "btn-primary": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](100, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](101, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 2, "button", [["class", "btn btn-sm btn-outline"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.validateHosts() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](105, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 42, "div", [["class", "card"], ["id", "configure-cluster-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 8, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 1, "span", [["class", "text-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](114, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_GettingStartedViewComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](118, {
          card: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 16, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 7, "div", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 11, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 4, "button", [["class", "btn btn-sm"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.invokeConfigureWizard() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](142, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](143, {
          "btn-primary": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](144, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](145, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 2, "button", [["class", "btn btn-sm btn-outline"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.validateCluster() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](148, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](149, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "";

          _ck(_v, 6, 0, currVal_0);

          var currVal_2 = _co.showCloseQuickstartButton;

          _ck(_v, 10, 0, currVal_2);

          var currVal_4 = _co.alertMessage;

          _ck(_v, 17, 0, currVal_4);

          var currVal_5 = _co.showCloseQuickstartButton && _co.basicClusterData.vsanEnabled;

          _ck(_v, 20, 0, currVal_5);

          var currVal_8 = _co.enabledServices == null ? null : _co.enabledServices.length;

          _ck(_v, 46, 0, currVal_8);

          var currVal_9 = _co.basicClusterData.pmanEnabled;

          _ck(_v, 49, 0, currVal_9);

          var currVal_13 = _ck(_v, 71, 0, _co.addHostsCard);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 8);

          _ck(_v, 70, 0, currVal_13, currVal_14);

          var currVal_15 = _co.promptUserToEnableVsanMax();

          _ck(_v, 78, 0, currVal_15);

          var currVal_16 = _co.basicClusterData.totalHosts;

          _ck(_v, 81, 0, currVal_16);

          var currVal_17 = !_co.basicClusterData.totalHosts;

          _ck(_v, 84, 0, currVal_17);

          var currVal_18 = _co.showVsanMaxPrechecks();

          _ck(_v, 88, 0, currVal_18);

          var currVal_19 = !_co.basicClusterData.isVsanMaxEnabled;

          _ck(_v, 92, 0, currVal_19);

          var currVal_21 = "btn btn-sm";

          var currVal_22 = _ck(_v, 99, 0, !_co.addHostsCard.validateEnabled);

          _ck(_v, 98, 0, currVal_21, currVal_22);

          var currVal_27 = _ck(_v, 118, 0, _co.configureClusterCard);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 8);

          _ck(_v, 117, 0, currVal_27, currVal_28);

          var currVal_29 = _co.GettingStartedUtils.getConfiguredClusterHeaderLabel(_co.basicClusterData);

          _ck(_v, 124, 0, currVal_29);

          var currVal_30 = _co.GettingStartedUtils.getConfigureCardContentText(_co.configureClusterCard, _co.basicClusterData);

          _ck(_v, 129, 0, currVal_30);

          var currVal_31 = _co.configureClusterCard.validationData == null ? null : _co.configureClusterCard.validationData.vsanHealthChecks == null ? null : _co.configureClusterCard.validationData.vsanHealthChecks.length;

          _ck(_v, 132, 0, currVal_31);

          var currVal_32 = _co.basicClusterData.isVsanMaxEnabled && _co.isVsanMaxConfigurationInvalid();

          _ck(_v, 136, 0, currVal_32);

          var currVal_34 = "btn btn-sm";

          var currVal_35 = _ck(_v, 143, 0, _co.configureClusterCard.enabled);

          _ck(_v, 142, 0, currVal_34, currVal_35);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.title;

          _ck(_v, 7, 0, currVal_1);

          var currVal_3 = _co.text;

          _ck(_v, 14, 0, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _ck(_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.hci.gettingStarted.clusterBasics.title"));

          _ck(_v, 29, 0, currVal_6);

          var currVal_7 = _co.GettingStartedUtils.getClusterBasicsHeader(_co.enabledServices);

          _ck(_v, 41, 0, currVal_7);

          var currVal_10 = !_co.clusterBasicsCard.enabled;

          _ck(_v, 55, 0, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 56, 0, _ck(_v, 57, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.hci.gettingStarted.clusterBasics.launchButton.text"));

          _ck(_v, 56, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 0, _ck(_v, 67, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.hci.gettingStarted.addHostsCard.title"));

          _ck(_v, 66, 0, currVal_12);

          var currVal_20 = !_co.addHostsCard.enabled;

          _ck(_v, 97, 0, currVal_20);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 100, 0, _ck(_v, 101, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.hci.gettingStarted.addHostsCard.launchButton.text"));

          _ck(_v, 100, 0, currVal_23);

          var currVal_24 = !_co.addHostsCard.validateEnabled || _co.addHostsCard.validateInProgress;

          _ck(_v, 103, 0, currVal_24);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 104, 0, _ck(_v, 105, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.cluster.hci.gettingStartedPage.card.validate"));

          _ck(_v, 104, 0, currVal_25);

          var currVal_26 = _co.GettingStartedUtils.getConfigureClusterHeader(_co.configureClusterCard.isExtend);

          _ck(_v, 114, 0, currVal_26);

          var currVal_33 = !_co.configureClusterCard.enabled;

          _ck(_v, 141, 0, currVal_33);

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 144, 0, _ck(_v, 145, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.hci.gettingStarted.configureServicesCard.launchButton.text"));

          _ck(_v, 144, 0, currVal_36);

          var currVal_37 = !_co.configureClusterCard.validateEnabled || _co.configureClusterCard.validateInProgress;

          _ck(_v, 147, 0, currVal_37);

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 148, 0, _ck(_v, 149, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.cluster.hci.gettingStartedPage.card.validate"));

          _ck(_v, 148, 0, currVal_38);
        });
      }

      function View_GettingStartedViewComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-inline"]], null, null, null, null, null))], null, null);
      }

      function View_GettingStartedViewComponent_29(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-icon", [["class", "is-solid"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "is-solid";

          var currVal_2 = _co.getValidateResultIconClass(_v.parent.context.card);

          _ck(_v, 1, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getValidateResultIconShape(_v.parent.context.card);

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_GettingStartedViewComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.card.validateInProgress || _v.context.card.isConfigureOperationInProgress;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = !_v.context.card.validateInProgress && !_v.context.card.isConfigureOperationInProgress && _co.getValidateResultIconShape(_v.context.card);

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_GettingStartedViewComponent_31(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [["class", "non-bullet-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "health-check-item", [], null, null, null, _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HealthCheckItem_0"], _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HealthCheckItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _common_component_health_health_check_item_component__WEBPACK_IMPORTED_MODULE_11__["HealthCheckItem"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]], {
          healthCheck: [0, "healthCheck"],
          canNavigateToHealthView: [1, "canNavigateToHealthView"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;
          var currVal_1 = _v.parent.context.enableNavigation;

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_GettingStartedViewComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _v.context.vsanHealthChecks;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_GettingStartedViewComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GettingStartedViewComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["cardStateIcon", 2]], null, 0, null, View_GettingStartedViewComponent_27)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["validationResults", 2]], null, 0, null, View_GettingStartedViewComponent_30))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.loading;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.loading;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_GettingStartedViewComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-hci-getting-started", [["class", "getting-started-view"]], null, null, null, View_GettingStartedViewComponent_0, RenderType_GettingStartedViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _getting_started_view_component__WEBPACK_IMPORTED_MODULE_16__["GettingStartedViewComponent"], [_generated_hci_quickstart_service__WEBPACK_IMPORTED_MODULE_17__["HciQuickstartService"], _generated_hci_quickstart_validation_service__WEBPACK_IMPORTED_MODULE_18__["HciQuickstartValidationService"], _generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_19__["HciClusterService"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_14__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var GettingStartedViewComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-hci-getting-started", _getting_started_view_component__WEBPACK_IMPORTED_MODULE_16__["GettingStartedViewComponent"], View_GettingStartedViewComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "2hg0":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/hci/configure/dialog/configure-confirmation-dialog.component.ngfactory.js ***!
      \************************************************************************************************/

    /*! exports provided: RenderType_ConfigureConfirmationDialogComponent, View_ConfigureConfirmationDialogComponent_0, View_ConfigureConfirmationDialogComponent_Host_0, ConfigureConfirmationDialogComponentNgFactory */

    /***/
    function hg0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ConfigureConfirmationDialogComponent", function () {
        return RenderType_ConfigureConfirmationDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigureConfirmationDialogComponent_0", function () {
        return View_ConfigureConfirmationDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigureConfirmationDialogComponent_Host_0", function () {
        return View_ConfigureConfirmationDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureConfirmationDialogComponentNgFactory", function () {
        return ConfigureConfirmationDialogComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/component/dialog/prompt/prompt.component.ngfactory */
      "3rpD");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/component/dialog/prompt/prompt.component */
      "eCeK");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./configure-confirmation-dialog.component */
      "Kfmd");
      /* harmony import */


      var _generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../generated/hci-cluster-service */
      "9Yzj");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/service/client/dataservice/data-service.service */
      "QIo8");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ConfigureConfirmationDialogComponent = [];

      var RenderType_ConfigureConfirmationDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ConfigureConfirmationDialogComponent,
        data: {}
      });

      function View_ConfigureConfirmationDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.cluster.hci.configureHciCluster.dialog.lockdownModeText", _co.lockdownModeString));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ConfigureConfirmationDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "vsan-prompt", [], null, [[null, "onConfirm"], [null, "onCancel"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onConfirm" === en) {
            var pd_0 = _co.proceed() !== false;
            ad = pd_0 && ad;
          }

          if ("onCancel" === en) {
            var pd_1 = _co.close() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PromptComponent_0"], _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PromptComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__["PromptComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"],
          cancelText: [2, "cancelText"],
          blockButton: [3, "blockButton"],
          blockContent: [4, "blockContent"]
        }, {
          onConfirm: "onConfirm",
          onCancel: "onCancel"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ConfigureConfirmationDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.title;
          var currVal_1 = "vsan.common.continue";
          var currVal_2 = "vsan.common.cancel";
          var currVal_3 = _co.busy;
          var currVal_4 = _co.busy;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _co.showLockdownMode;

          _ck(_v, 10, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.cluster.hci.configureHciCluster.dialog.text"));

          _ck(_v, 6, 0, currVal_5);
        });
      }

      function View_ConfigureConfirmationDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-configure-confirmation", [], null, null, null, View_ConfigureConfirmationDialogComponent_0, RenderType_ConfigureConfirmationDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfigureConfirmationDialogComponent"], [_generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_7__["HciClusterService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_8__["DataServiceClient"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ConfigureConfirmationDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-configure-confirmation", _configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfigureConfirmationDialogComponent"], View_ConfigureConfirmationDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "3bCW":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/hci/configure/dialog/configure-warning-dialog.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ConfigureWarningDialogComponent */

    /***/
    function bCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureWarningDialogComponent", function () {
        return ConfigureWarningDialogComponent;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ConfigureWarningDialogComponent = /*#__PURE__*/function () {
        function ConfigureWarningDialogComponent() {
          _classCallCheck(this, ConfigureWarningDialogComponent);
        }

        _createClass(ConfigureWarningDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getModalContext().title;

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getModalContext().content) {
              this.content = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getModalContext().content;
              this.incompatibleNetworkConfig = true;
            } else {
              this.content = [_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.cluster.hci.configureHciCluster.warningDialog.text")];
            }
          }
        }]);

        return ConfigureWarningDialogComponent;
      }();
      /***/

    },

    /***/
    "46C6":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/hci-pman.component.ts ***!
      \***************************************************************/

    /*! exports provided: HciPmanComponent */

    /***/
    function C6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HciPmanComponent", function () {
        return HciPmanComponent;
      });
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _navigation_model_platform_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @navigation/model/platform-extension */
      "VhSB");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");

      var HciPmanComponent = /*#__PURE__*/function () {
        function HciPmanComponent(navigationService) {
          _classCallCheck(this, HciPmanComponent);

          this.navigationService = navigationService;
          this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_0__["Icon"];
        }

        _createClass(HciPmanComponent, [{
          key: "navigateToClusterImage",
          value: function navigateToClusterImage() {
            this.navigationService.navigateTo(_navigation_model_platform_extension__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].PMAN_CLUSTER_IMAGE, _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject, null);
          }
        }]);

        return HciPmanComponent;
      }();
      /***/

    },

    /***/
    "4Nty":
    /*!********************************************************!*\
      !*** ./src/app/vsan/common/util/reactive-form-util.ts ***!
      \********************************************************/

    /*! exports provided: ReactiveFormUtil */

    /***/
    function Nty(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormUtil", function () {
        return ReactiveFormUtil;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ReactiveFormUtil = /*@__PURE__*/function () {
        var ReactiveFormUtil = /*#__PURE__*/_createClass(function ReactiveFormUtil() {
          _classCallCheck(this, ReactiveFormUtil);
        });

        ReactiveFormUtil.FORM_CONTROLS_DELIMITER = ".";
        /*
         * Trigger validation on all controls in a form group and mark them as touched to display errors
         */

        ReactiveFormUtil.validateAllFormFields = function (formGroup) {
          formGroup.markAsTouched();
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            control.markAsTouched({
              onlySelf: true
            });

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              ReactiveFormUtil.validateAllFormFields(control);
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
              control.controls.forEach(function (childControl) {
                return ReactiveFormUtil.validateAllFormFields(childControl);
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              ReactiveFormUtil.validateControls([control]);
            }
          });
        };

        ReactiveFormUtil.validateControls = function (controls) {
          controls.forEach(function (control) {
            control.markAsTouched({
              onlySelf: true
            });
            control.updateValueAndValidity({
              onlySelf: false,
              emitEvent: true
            });
          });
        };
        /**
         * Trigger updateValueAndValidity() to call ValidatorFn and update validity of all controls in a form group.
         */


        ReactiveFormUtil.updateFormControlsValueAndValidity = function (formGroup) {
          Object.keys(formGroup.controls).forEach(function (control) {
            if (formGroup.get(control) instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              formGroup.get(control).updateValueAndValidity();
            }
          });
        };

        ReactiveFormUtil.getFormControlPath = function () {
          for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
            parts[_key] = arguments[_key];
          }

          return parts.join(ReactiveFormUtil.FORM_CONTROLS_DELIMITER);
        };

        return ReactiveFormUtil;
      }();
      /***/

    },

    /***/
    "6BUe":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/tree-datagrid.module.ts ***!
      \************************************************************************/

    /*! exports provided: TreeDatagridModule */

    /***/
    function BUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDatagridModule", function () {
        return TreeDatagridModule;
      });

      var TreeDatagridModule = /*#__PURE__*/_createClass(function TreeDatagridModule() {
        _classCallCheck(this, TreeDatagridModule);
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
              var _this3 = this;

              return new Promise(function (accept) {
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement = _this3.eventTarget ? _this3.eventTarget : event && event.target ? event.target : null;

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

                var actionUrl = "".concat(ModalBuilder.APP_URL, "?viewId=").concat(_this3.appId);
                var separator = "?";

                for (var param in _this3.urlParams) {
                  actionUrl += separator + param + "=" + _this3.urlParams[param];
                  separator = "&";
                }

                _platform__WEBPACK_IMPORTED_MODULE_3__["WebPlatform"].openModalDialog(_this3.title, actionUrl, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObjectUid, _this3.size[0], _this3.size[1], _this3.title != null, _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler
                /* onClose */
                , context
                /* retrieve with Platform.getModalContext() */
                , _this3.accessibilityTitle);
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
    "I0Pd":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/action-button/button-title.directive.ts ***!
      \*******************************************************************************/

    /*! exports provided: ButtonTitleDirective */

    /***/
    function I0Pd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonTitleDirective", function () {
        return ButtonTitleDirective;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * Attribute directive for detecting button title change and storing title.
       * Only used for clr-button in clr-button-group.
       * @title - The title of clr-button
       */


      var ButtonTitleDirective = /*#__PURE__*/function () {
        function ButtonTitleDirective(host) {
          _classCallCheck(this, ButtonTitleDirective);

          this.host = host;
          this.titleChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        }

        _createClass(ButtonTitleDirective, [{
          key: "title",
          get: function get() {
            return this._title;
          },
          set: function set(value) {
            if (this._title !== value) {
              this.titleChange.next(value);
            }

            this._title = value;
          }
        }, {
          key: "titleChangeEvent",
          get: function get() {
            return this.titleChange.asObservable();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
            // attribute of the markup button. Later the name is used to match the generated markup with the directive.
            if (!this.host.name) {
              this.host.name = Math.random().toString();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.titleChange.unsubscribe();
          }
        }]);

        return ButtonTitleDirective;
      }();
      /***/

    },

    /***/
    "JCZN":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/component/popup-list/popup-list.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PopupListModule */

    /***/
    function JCZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupListModule", function () {
        return PopupListModule;
      });

      var PopupListModule = /*#__PURE__*/_createClass(function PopupListModule() {
        _classCallCheck(this, PopupListModule);
      });
      /***/

    },

    /***/
    "Ju17":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-group-common.directive.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ClrButtonGroupCommonDirective */

    /***/
    function Ju17(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonGroupCommonDirective", function () {
        return ClrButtonGroupCommonDirective;
      });
      /**
       * Applies on every clr-button-group and help to link the clr-button with directive applieds on it,  which extends
       * {@link ClrButtonBaseDirective}, to the actual rendered html button.
       */


      var ClrButtonGroupCommonDirective = /*#__PURE__*/function () {
        function ClrButtonGroupCommonDirective(elRef) {
          _classCallCheck(this, ClrButtonGroupCommonDirective);

          this.elRef = elRef;
        }

        _createClass(ClrButtonGroupCommonDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this4 = this;

            setTimeout(function () {
              var allButtons = _this4.elRef.nativeElement.querySelectorAll("button"); // match button with clrButton and notify directives


              _this4.clrButtons.filter(function (clrButton) {
                return !!clrButton.directives;
              }).forEach(function (clrButton, index) {
                var buttonFound = _this4.findButtonByName(clrButton.name, allButtons);

                if (buttonFound) {
                  clrButton.directives.forEach(function (directive) {
                    directive.resolveButton(clrButton, buttonFound, index);
                  });
                }
              });
            });
          }
        }, {
          key: "findButtonByName",
          value: function findButtonByName(name, buttons) {
            for (var i = 0; i < buttons.length; i++) {
              if (buttons.item(i).name === name) {
                return buttons.item(i);
              }
            }

            return null;
          }
        }]);

        return ClrButtonGroupCommonDirective;
      }();
      /***/

    },

    /***/
    "KeN7":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/getting-started-view.component.ts ***!
      \***************************************************************************/

    /*! exports provided: GettingStartedViewComponent */

    /***/
    function KeN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedViewComponent", function () {
        return GettingStartedViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/validation/alert-type */
      "4KIt");
      /* harmony import */


      var _generated_hci_validation_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/hci-validation-data */
      "PDH/");
      /* harmony import */


      var _generated_hci_workflow_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/hci-workflow-state */
      "EqQr");
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* harmony import */


      var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_dom_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @util/dom-util */
      "r+G3");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../vsan-routes */
      "w9V1");
      /* harmony import */


      var _getting_started_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./getting-started.utils */
      "cTju");

      var GettingStartedViewComponent = /*@__PURE__*/function () {
        var GettingStartedViewComponent = /*#__PURE__*/function () {
          function GettingStartedViewComponent(hciQuickstartService, hciQuickstartValidationService, hciConfigureService, taskService, navigationService) {
            var _this5 = this;

            _classCallCheck(this, GettingStartedViewComponent);

            this.hciQuickstartService = hciQuickstartService;
            this.hciQuickstartValidationService = hciQuickstartValidationService;
            this.hciConfigureService = hciConfigureService;
            this.taskService = taskService;
            this.navigationService = navigationService;
            this.GettingStartedUtils = _getting_started_utils__WEBPACK_IMPORTED_MODULE_20__["GettingStartedUtils"];
            this.AlertType = _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_1__["AlertType"];
            this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_13__["Icon"];
            this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__["VsanUiUtils"].getString("vsan.cluster.hci.gettingStartedPage.title");
            this.showCloseQuickstartButton = false;
            this.isVsanMaxSupportedOnHosts = false;
            this.refreshStream = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();

            this.registerRefreshEvents = function () {
              window.addEventListener(GettingStartedViewComponent.MESSAGE, function (event) {
                if (event.data === GettingStartedViewComponent.REFRESH_EVENT_NAME) {
                  _this5.refresh();
                }
              }, false);

              _this5.refreshStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["auditTime"])(GettingStartedViewComponent.REFRESH_DEBOUNCE_MS)).subscribe(function () {
                _this5.fetch();
              });
            };
          }

          _createClass(GettingStartedViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.fetch();
              this.registerRefreshEvents();
            }
          }, {
            key: "fetch",
            value: function fetch() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = this;
                        _context.next = 3;
                        return this.hciQuickstartService.getGettingStartedData(_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject);

                      case 3:
                        _context.t1 = _context.sent;

                        _context.t0.handleCardsData.call(_context.t0, _context.t1);

                        this.validateCards();
                        this.updateConfigOperationInterval();
                        this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__["VsanUiUtils"].getString("vsan.screenReader.message.page.loaded", _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__["VsanUiUtils"].getString("vsan.cluster.hci.gettingStartedPage.title"));

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "handleCardsData",
            value: function handleCardsData(viewData) {
              this.basicClusterData = viewData.basicClusterData;
              this.title = viewData.header;
              this.text = viewData.text;
              this.enabledServices = _getting_started_utils__WEBPACK_IMPORTED_MODULE_20__["GettingStartedUtils"].getEnabledServices(this.basicClusterData);
              this.showCloseQuickstartButton = viewData.showCloseQuickstartButton;
              this.clusterBasicsCard = viewData.clusterBasicsCard;
              this.addHostsCard = viewData.addHostsCard;
              this.configureClusterCard = viewData.configureClusterCard; // Store this to be able to restore it after host are validated.

              this.originalConfigureCardEnabled = this.configureClusterCard.enabled;
              this.isExtend = viewData.extendCard;
            }
          }, {
            key: "updateConfigOperationInterval",
            value: function updateConfigOperationInterval() {
              if (this.configOperationTimer) {
                clearInterval(this.configOperationTimer);
              } else if (this.configureClusterCard.isConfigureOperationInProgress) {
                this.configOperationTimer = this.checkConfigOperationInProgress();
              }
            }
          }, {
            key: "validateCards",
            value: function validateCards() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!this.addHostsCard.validateEnabled) {
                          _context2.next = 5;
                          break;
                        }

                        _context2.next = 3;
                        return this.validateHosts();

                      case 3:
                        _context2.next = 8;
                        break;

                      case 5:
                        if (!this.configureClusterCard.validateEnabled) {
                          _context2.next = 8;
                          break;
                        }

                        _context2.next = 8;
                        return this.validateCluster();

                      case 8:
                        /* After the health checks are loaded and displayed in the second/third card. all the cards grow as
                         we keep them all with equal size. Unfortunately in some Chrome versions the cards are not rendered correctly
                         after their size is changed. This causes the buttons in the footer to not be clickable. For more info please
                         check bug https://bz3-prod-wwwd.eng.vmware.com/show_bug.cgi?id=2392360
                         The solution is to force the browser to redraw the problematic DOM elements.
                         */
                        // TO DO: Check if we still need this? The above mentioned PR has nothing to do with the comment.
                        _util_dom_util__WEBPACK_IMPORTED_MODULE_12__["DomUtil"].redraw(".card");

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "validateHosts",
            value: function validateHosts() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _yield$Promise$all, _yield$Promise$all2;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.addHostsCard.validateInProgress = true; // Disable the configure action, while hosts are being validated

                        this.configureClusterCard.enabled = false;
                        this.isVsanMaxSupportedOnHosts = false;
                        _context3.prev = 3;
                        _context3.next = 6;
                        return Promise.all([this.hciQuickstartValidationService.validateNotConfiguredHosts(_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject), this.hciQuickstartValidationService.validateVsanMaxHostsSupport(_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject)]);

                      case 6:
                        _yield$Promise$all = _context3.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        this.addHostsCard.validationData = _yield$Promise$all2[0];
                        this.isVsanMaxSupportedOnHosts = _yield$Promise$all2[1];

                        // If there are no errors in hosts validation, configure cluster card's enabled state should be reverted
                        if (_generated_hci_validation_data__WEBPACK_IMPORTED_MODULE_2__["HciValidationData"].Status.ERROR !== this.addHostsCard.validationData.status) {
                          this.configureClusterCard.enabled = this.originalConfigureCardEnabled;
                        }

                        _context3.next = 17;
                        break;

                      case 13:
                        _context3.prev = 13;
                        _context3.t0 = _context3["catch"](3);

                        _util_logger__WEBPACK_IMPORTED_MODULE_14__["Logger"].error(_context3.t0);

                        this.alertMessage = _context3.t0;

                      case 17:
                        _context3.prev = 17;
                        this.addHostsCard.validateInProgress = false;
                        return _context3.finish(17);

                      case 20:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[3, 13, 17, 20]]);
              }));
            }
          }, {
            key: "validateCluster",
            value: function validateCluster() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.configureClusterCard.validateInProgress = true;
                        _context4.prev = 1;
                        _context4.next = 4;
                        return this.hciQuickstartValidationService.validateCluster(_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject);

                      case 4:
                        this.configureClusterCard.validationData = _context4.sent;
                        _context4.next = 10;
                        break;

                      case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4["catch"](1);

                        _util_logger__WEBPACK_IMPORTED_MODULE_14__["Logger"].error(_context4.t0);

                      case 10:
                        _context4.prev = 10;

                        // TODO: Anyone that understands this, please add comment why this must happen here???
                        if (!this.configureClusterCard.isConfigureOperationInProgress && this.configOperationTimer) {
                          clearInterval(this.configOperationTimer);
                        }

                        this.configureClusterCard.validateInProgress = false;
                        return _context4.finish(10);

                      case 14:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this, [[1, 7, 10, 14]]);
              }));
            }
          }, {
            key: "showVsanMaxPrechecks",
            value: function showVsanMaxPrechecks() {
              return this.basicClusterData.isVsanMaxEnabled && this.basicClusterData.hciWorkflowState !== _generated_hci_workflow_state__WEBPACK_IMPORTED_MODULE_3__["HciWorkflowState"].INVALID && this.basicClusterData.hciWorkflowState !== _generated_hci_workflow_state__WEBPACK_IMPORTED_MODULE_3__["HciWorkflowState"].DONE && !this.addHostsCard.validateInProgress;
            }
          }, {
            key: "promptUserToEnableVsanMax",
            value: function promptUserToEnableVsanMax() {
              var _a, _b;

              return ((_a = this.basicClusterData) === null || _a === void 0 ? void 0 : _a.vsanEnabled) && this.basicClusterData.notConfiguredHosts > 0 && this.basicClusterData.hciWorkflowState === _generated_hci_workflow_state__WEBPACK_IMPORTED_MODULE_3__["HciWorkflowState"].IN_PROGRESS && !((_b = this.basicClusterData) === null || _b === void 0 ? void 0 : _b.isVsanMaxEnabled) && this.isVsanMaxSupportedOnHosts;
            }
          }, {
            key: "getVsanMaxHealthChecks",
            value: function getVsanMaxHealthChecks(card) {
              var _a, _b;

              return (_b = (_a = card === null || card === void 0 ? void 0 : card.validationData) === null || _a === void 0 ? void 0 : _a.vsanHealthChecks) === null || _b === void 0 ? void 0 : _b.filter(function (check) {
                return check.isHardwareCheck;
              });
            }
          }, {
            key: "getGenericHealthChecks",
            value: function getGenericHealthChecks(card) {
              var _a, _b;

              return (_b = (_a = card === null || card === void 0 ? void 0 : card.validationData) === null || _a === void 0 ? void 0 : _a.vsanHealthChecks) === null || _b === void 0 ? void 0 : _b.filter(function (check) {
                return !check.isHardwareCheck;
              });
            }
            /**
             * Checks if there are any vsan max related prechecks in error state in order to display
             * warning in the Configure cluster card
             */

          }, {
            key: "isVsanMaxConfigurationInvalid",
            value: function isVsanMaxConfigurationInvalid() {
              var _a;

              return ((_a = this.getVsanMaxHealthChecks(this.addHostsCard)) === null || _a === void 0 ? void 0 : _a.filter(function (check) {
                return check.status === _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].red;
              }).length) > 0;
            }
          }, {
            key: "getVsanMaxConfigurationWarningMessage",
            value: function getVsanMaxConfigurationWarningMessage() {
              return this.isExtend ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.vsanMaxWarning.extend") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.vsanMaxWarning.initial");
            }
          }, {
            key: "getValidateResultIconShape",
            value: function getValidateResultIconShape(card) {
              var _a, _b;

              if (((_a = card.validationData) === null || _a === void 0 ? void 0 : _a.status) === _generated_hci_validation_data__WEBPACK_IMPORTED_MODULE_2__["HciValidationData"].Status.ERROR) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_13__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
              } else if (((_b = card.validationData) === null || _b === void 0 ? void 0 : _b.status) === _generated_hci_validation_data__WEBPACK_IMPORTED_MODULE_2__["HciValidationData"].Status.PASSED) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_13__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
              } else {
                return null;
              }
            }
          }, {
            key: "getValidateResultIconClass",
            value: function getValidateResultIconClass(card) {
              var _a, _b;

              if (((_a = card.validationData) === null || _a === void 0 ? void 0 : _a.status) === _generated_hci_validation_data__WEBPACK_IMPORTED_MODULE_2__["HciValidationData"].Status.ERROR) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_13__["Icon"].CLR_ERROR_ICON_CLASS;
              } else if (((_b = card.validationData) === null || _b === void 0 ? void 0 : _b.status) === _generated_hci_validation_data__WEBPACK_IMPORTED_MODULE_2__["HciValidationData"].Status.PASSED) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_13__["Icon"].CLR_SUCCESS_ICON_CLASS;
              } else {
                return null;
              }
            }
          }, {
            key: "invokeEditCluster",
            value: function invokeEditCluster() {
              var actionEval = {
                action: {
                  label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_16__["VsanUiUtils"].getString("vsan.cluster.hci.clusterBasics.edit.action")
                }
              };
              this.navigationService.invokePlatformAction(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["PlatformExtension"].CLUSTER_EDIT, [_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObjectUid], null, actionEval);
            }
          }, {
            key: "invokeAddHosts",
            value: function invokeAddHosts() {
              this.navigationService.invokePlatformAction(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["PlatformExtension"].ADD_HOSTS, [_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObjectUid]);
            }
          }, {
            key: "invokeConfigureWizard",
            value: function invokeConfigureWizard() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var result;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        this.configureClusterCard.enabled = false;
                        _context5.next = 4;
                        return this.hciConfigureService.getConfigureWizardData(_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject);

                      case 4:
                        result = _context5.sent;
                        this.handleConfigureWizardData(result);
                        _context5.next = 12;
                        break;

                      case 8:
                        _context5.prev = 8;
                        _context5.t0 = _context5["catch"](0);
                        this.alertMessage = _context5.t0;

                        _util_logger__WEBPACK_IMPORTED_MODULE_14__["Logger"].error(_context5.t0);

                      case 12:
                        _context5.prev = 12;
                        this.configureClusterCard.enabled = true;
                        return _context5.finish(12);

                      case 15:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[0, 8, 12, 15]]);
              }));
            }
          }, {
            key: "handleConfigureWizardData",
            value: function handleConfigureWizardData(result) {
              var _this6 = this;

              if (result.openYesNoDialog) {
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("hciCluster/confirmationDialog").setSize(GettingStartedViewComponent.CONFIGURE_CONFIRM_DIALOG_WIDTH, GettingStartedViewComponent.CONFIGURE_CONFIRM_DIALOG_HEIGHT).open({
                  title: result.dialogText
                }).then(function () {
                  _this6.refresh();
                });
              } else if (result.openWarningDialog) {
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("hciCluster/warningDialog").setSize(GettingStartedViewComponent.CONFIGURE_WARNING_DIALOG_WIDTH, result.warningDialogContent && result.warningDialogContent.length ? GettingStartedViewComponent.CONFIGURE_WARNING_NETWORK_DIALOG_HEIGHT : GettingStartedViewComponent.CONFIGURE_WARNING_DIALOG_HEIGHT).open({
                  title: result.dialogText,
                  content: result.warningDialogContent
                }).then(function () {
                  _this6.refresh();
                });
              } else {
                var configureWizardContext = {
                  configureWizardData: result,
                  isVsanMaxSupportedOnHosts: this.isVsanMaxSupportedOnHosts
                };
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"](_vsan_routes__WEBPACK_IMPORTED_MODULE_19__["VsanRoutes"].HCI_CONFIGURE_WIZARD).setDimensions(_util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"].WIZARD_XL).open(configureWizardContext).then(function (task) {
                  // trigger refresh in order to disable the card until the task is done
                  _this6.fetch();

                  _this6.taskService.getAwaitResult(task).then(function () {
                    _this6.refresh();
                  });
                }); // catch is impossible
              }
            } // Repeatedly check if the operation has failed in order to avoid indefinite card loading.
            // If the operation has failed, refresh is be triggered.

          }, {
            key: "checkConfigOperationInProgress",
            value: function checkConfigOperationInProgress() {
              var _this7 = this;

              return setInterval(function () {
                _this7.hciQuickstartService.isConfigureOperationInProgress(_service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject).then(function (result) {
                  // when the operation is no longer in progress refresh is triggered
                  if (!result) {
                    _this7.refresh();

                    clearInterval(_this7.configOperationTimer);
                  }
                })["catch"](function () {
                  clearInterval(_this7.configOperationTimer);
                });
              }, GettingStartedViewComponent.CHECK_OPERATION_TIMEOUT_MS);
            }
          }, {
            key: "closeQuickstart",
            value: function closeQuickstart() {
              var _this8 = this;

              new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("hciCluster/dismissQuickstart").setSize(GettingStartedViewComponent.DISMISS_DIALOG_WIDTH, GettingStartedViewComponent.DISMISS_DIALOG_HEIGHT).open().then(function () {
                _this8.showCloseQuickstartButton = true;

                _this8.refresh();
              });
            }
          }, {
            key: "refresh",
            value: function refresh() {
              // The data fetch will not happen more than once every two seconds.
              // It will be triggered at the end of the interval.
              // This is done in order to prevent firing multiple data fetch requests
              // at the same time due to live and self refresh.
              this.refreshStream.next();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              window.removeEventListener(GettingStartedViewComponent.MESSAGE);

              if (this.configOperationTimer) {
                clearInterval(this.configOperationTimer);
              }
            }
          }]);

          return GettingStartedViewComponent;
        }();

        GettingStartedViewComponent.MESSAGE = "message";
        GettingStartedViewComponent.REFRESH_EVENT_NAME = "refreshQuickstart";
        GettingStartedViewComponent.DISMISS_DIALOG_WIDTH = 750;
        GettingStartedViewComponent.DISMISS_DIALOG_HEIGHT = 250;
        GettingStartedViewComponent.CONFIGURE_CONFIRM_DIALOG_WIDTH = 576;
        GettingStartedViewComponent.CONFIGURE_CONFIRM_DIALOG_HEIGHT = 250;
        GettingStartedViewComponent.CONFIGURE_WARNING_DIALOG_WIDTH = 700;
        GettingStartedViewComponent.CONFIGURE_WARNING_DIALOG_HEIGHT = 200;
        GettingStartedViewComponent.CONFIGURE_WARNING_NETWORK_DIALOG_HEIGHT = 270;
        GettingStartedViewComponent.REFRESH_DEBOUNCE_MS = 2000;
        GettingStartedViewComponent.CHECK_OPERATION_TIMEOUT_MS = 5000;
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_8__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GettingStartedViewComponent.prototype, "loading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GettingStartedViewComponent.prototype, "alertMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_11__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GettingStartedViewComponent.prototype, "srOnlyMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_9__["RefreshHandler"], Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_7__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], GettingStartedViewComponent.prototype, "fetch", null);
        return GettingStartedViewComponent;
      }();
      /***/

    },

    /***/
    "Kfmd":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/hci/configure/dialog/configure-confirmation-dialog.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ConfigureConfirmationDialogComponent */

    /***/
    function Kfmd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureConfirmationDialogComponent", function () {
        return ConfigureConfirmationDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/client/dataservice/data-service-property */
      "GENi");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ConfigureConfirmationDialogComponent = /*#__PURE__*/function () {
        function ConfigureConfirmationDialogComponent(hciClusterService, dataService) {
          var _this9 = this;

          _classCallCheck(this, ConfigureConfirmationDialogComponent);

          this.hciClusterService = hciClusterService;
          this.dataService = dataService;
          this.showLockdownMode = false;

          this.proceed = function () {
            _this9.hciClusterService.simpleClusterExtend(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject).then(function () {
              _this9.close();
            });
          };

          this.close = function () {
            _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].closeModalDialog(true);
          };
        }

        _createClass(ConfigureConfirmationDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var lockdownMode;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.busy = true;
                      this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getModalContext().title;
                      _context6.next = 4;
                      return this.dataService.getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["ClusterComputeResource"].hciConfig.hostConfigProfile.lockdownMode, _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 4:
                      lockdownMode = _context6.sent;
                      this.showLockdownMode = !("lockdownDisabled" === lockdownMode);

                      if (this.showLockdownMode) {
                        this.lockdownModeString = "lockdownNormal" === lockdownMode ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.configure.wizard.advancedOptions.host.options.lockdown.mode.normal") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.configure.wizard.advancedOptions.host.options.lockdown.mode.strict");
                      }

                      this.busy = false;

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ConfigureConfirmationDialogComponent;
      }();
      /***/

    },

    /***/
    "MCPo":
    /*!********************************************************!*\
      !*** ./src/app/vsan/health/model/health-tests.data.ts ***!
      \********************************************************/

    /*! exports provided: HealthTests */

    /***/
    function MCPo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthTests", function () {
        return HealthTests;
      });
      /* Copyright 2019-2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Data model used to display health tests summary cards.
       */


      var HealthTests = /*#__PURE__*/_createClass(function HealthTests(testData) {
        var isCollapsed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _classCallCheck(this, HealthTests);

        this.testData = testData;
        this.isCollapsed = isCollapsed;
      });
      /***/

    },

    /***/
    "QWJh":
    /*!*********************************************************!*\
      !*** ./src/app/vsan/hci/getting-started-view.module.ts ***!
      \*********************************************************/

    /*! exports provided: GettingStartedViewModule */

    /***/
    function QWJh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedViewModule", function () {
        return GettingStartedViewModule;
      });
      /* harmony import */


      var _health_health_check_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./health/health-check-dialog.component */
      "0oyP");
      /* harmony import */


      var _gettingstarted_getting_started_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gettingstarted/getting-started-view.component */
      "KeN7");
      /* harmony import */


      var _dismiss_dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dismiss/dismiss-quickstart-dialog.component */
      "W4qO");
      /* harmony import */


      var _configure_dialog_configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./configure/dialog/configure-warning-dialog.component */
      "3bCW");
      /* harmony import */


      var _configure_dialog_configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./configure/dialog/configure-confirmation-dialog.component */
      "Kfmd");

      var hciRoutes = [{
        path: "",
        component: _gettingstarted_getting_started_view_component__WEBPACK_IMPORTED_MODULE_1__["GettingStartedViewComponent"]
      }, {
        path: "warningDialog",
        component: _configure_dialog_configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfigureWarningDialogComponent"]
      }, {
        path: "confirmationDialog",
        component: _configure_dialog_configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfigureConfirmationDialogComponent"]
      }, {
        path: "healthCheckDialog",
        component: _health_health_check_dialog_component__WEBPACK_IMPORTED_MODULE_0__["HealthCheckDialogComponent"]
      }, {
        path: "dismissQuickstart",
        component: _dismiss_dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DismissQuickstartDialogComponent"]
      }];

      var GettingStartedViewModule = /*#__PURE__*/_createClass(function GettingStartedViewModule() {
        _classCallCheck(this, GettingStartedViewModule);
      });
      /***/

    },

    /***/
    "U2P7":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/navigation/vsan-breadcrumb.module.ts ***!
      \****************************************************************************/

    /*! exports provided: VsanBreadcrumbModule */

    /***/
    function U2P7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanBreadcrumbModule", function () {
        return VsanBreadcrumbModule;
      });

      var VsanBreadcrumbModule = /*#__PURE__*/_createClass(function VsanBreadcrumbModule() {
        _classCallCheck(this, VsanBreadcrumbModule);
      });
      /***/

    },

    /***/
    "VFD0":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/getting-started-view.scss.shim.ngstyle.js ***!
      \***********************************************************************************/

    /*! exports provided: styles */

    /***/
    function VFD0(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0rem;\n}\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -0.6rem;\n}\n.cards-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.cards-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.cards-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.cards-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.cards-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.cards-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.cards-container[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  min-height: 320px;\n  min-width: 310px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .spinner.spinner-inline[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  min-width: 1.2rem;\n}\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0rem 0.6rem 0rem 0rem;\n}\n.non-bullet-item[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oY2kvZ2V0dGluZ3N0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLXZpZXcuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUhrREc7RUFDRyxnQ0FBQTtBRmpDTjtBRW1DRzs7RUFHRyxnQ0FBQTtBRmxDTjtBRW9DRztFQUNHLDhCQUFBO0FGbENOO0FBbEJBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQXFCSDtBQXBCRztFQUNHLGdCQUFBO0FBc0JOO0FBcEJHO0VBQ0csU0FBQTtBQXNCTjtBQWxCQTtFQUNHLGFBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7QUFvQkg7QUVxQkc7RUFDSywrQkFBQTtBRm5CUjtBRXFCRztFQUlHLCtCQUFBO0FGdEJOO0FFdUJNO0VBQ0csK0JBQUE7QUZyQlQ7QUV3Qkc7RUFFRywrQkFBQTtBRnZCTjtBRXlCTTtFQUNHLCtCQUFBO0FGdkJUO0FFMEJHO0VBQ0csNkJBQUE7QUZ4Qk47QUFyQ0c7RUFDRyxrQkdSSTtBSCtDVjtBQW5DQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBc0NIO0FBckNHO0VBQ0csYUFBQTtFQUNBLDhCQUFBO0FBdUNOO0FBdENNO0VBQ0csYUdFVztFSERYLGNHQ1c7RUhBWCxpQkFBQTtBQXdDVDtBQXJDRztFQUNHLGNBQUE7QUF1Q047QUFwQ007RUFDRyw2QkFBQTtBQXNDVDtBQWpDQTtFQUNFLHFCQUFBO0FBb0NGIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oY2kvZ2V0dGluZ3N0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLXZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4udGl0bGUge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgaDMge1xuICAgICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgIH1cbiAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICB9XG59XG5cbi5jYXJkcy1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZztcbiAgIG1hcmdpbi10b3A6IC0kdnNhbi1lbGVtZW50LXNwYWNpbmc7IC8vIEFkZCB0b3AgbWFyZ2luIG9ubHkgd2hlbiBjYXJkcyBhcmUgd3JhcHBlZCB1bmRlciBvbmUgYW5vdGhlclxuICAgJj4uY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICB9XG59XG5cbi5jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgIG1pbi13aWR0aDogMzEwcHg7XG4gICAuY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGNsci1pY29uLCAuc3Bpbm5lci5zcGlubmVyLWlubGluZSB7XG4gICAgICAgICB3aWR0aDogJHZzYW4taWNvbi1zaXplLWxnO1xuICAgICAgICAgaGVpZ2h0OiAkdnNhbi1pY29uLXNpemUtbGc7XG4gICAgICAgICBtaW4td2lkdGg6ICR2c2FuLWljb24tc2l6ZS1sZztcbiAgICAgIH1cbiAgIH1cbiAgIC5jYXJkLWJsb2NrIHtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgfVxuICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgICBtYXJnaW46IDByZW0gJHZzYW4tZWxlbWVudC1zcGFjaW5nIDByZW0gMHJlbTtcbiAgICAgIH1cbiAgIH1cbn1cblxuLm5vbi1idWxsZXQtaXRlbSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "W4qO":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/hci/dismiss/dismiss-quickstart-dialog.component.ts ***!
      \*************************************************************************/

    /*! exports provided: DismissQuickstartDialogComponent */

    /***/
    function W4qO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DismissQuickstartDialogComponent", function () {
        return DismissQuickstartDialogComponent;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");

      var DismissQuickstartDialogComponent = /*#__PURE__*/_createClass(function DismissQuickstartDialogComponent(hciClusterService) {
        var _this10 = this;

        _classCallCheck(this, DismissQuickstartDialogComponent);

        this.hciClusterService = hciClusterService;

        this["continue"] = function () {
          _this10.busy = true;

          _this10.hciClusterService.abandonHciWorkflowCluster(_service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject).then(function () {
            _this10.busy = false;

            _this10.close(true);
          });
        };

        this.close = function () {
          var isDialogClosed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

          _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].closeModalDialog(isDialogClosed);
        };
      });
      /***/

    },

    /***/
    "Xbvm":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/action-button/button-group.directive.ts ***!
      \*******************************************************************************/

    /*! exports provided: ButtonGroupDirective */

    /***/
    function Xbvm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonGroupDirective", function () {
        return ButtonGroupDirective;
      });
      /**
       * Attribute directive used to dynamically arrange child buttons, align some horizontally and
       * put the others into the drop-down list, this directive also add title attribute to the buttons.
       * It can only used on clr-button-group and there should be clr-button in the button group.
       * @maximumInlineActions - The maximum value of inline buttons.
       */


      var ButtonGroupDirective = /*@__PURE__*/function () {
        var ButtonGroupDirective = /*#__PURE__*/function () {
          function ButtonGroupDirective(elRef) {
            var _this11 = this;

            _classCallCheck(this, ButtonGroupDirective);

            this.elRef = elRef; // Set the maximum value to 10 to display all buttons inline when there is enough space.

            this._maximumInlineActions = 10;
            this._buttonTitleDirectives = [];

            this.updateButtonTitles = function () {
              var allButtons = _this11.getVisibleButtons().concat(_this11.getInMenuButtons());

              if (!allButtons.length) {
                return;
              } // if there is a rendered button for the directive - update its title.


              _this11._buttonTitleDirectives.forEach(function (titleDirective) {
                allButtons.forEach(function (button) {
                  if (button.getAttribute("name") === titleDirective.host.name) {
                    button.title = titleDirective.title;
                  }
                });
              });
            };
          }

          _createClass(ButtonGroupDirective, [{
            key: "maximumInlineActions",
            set: function set(value) {
              if (!!value) {
                this._maximumInlineActions = value;
              }
            }
          }, {
            key: "buttons",
            set: function set(value) {
              var _this12 = this;

              this._buttonTitleDirectives = value;

              this._buttonTitleDirectives.forEach(function (titleDirective) {
                // Update button title when its title in directive changes.
                titleDirective.titleChangeEvent.subscribe(function () {
                  setTimeout(_this12.updateButtonTitles);
                });
              }); // when action buttons with directive are changed (added / removed) some of them may go to the menu with
              // additional actions. There is no other way found to handle toggle menu event, but click on the toggle button.


              this.subscribeToggleButtonClick();
            }
          }, {
            key: "clrButtons",
            set: function set(btns) {
              this._btns = btns;
              this.updateInMenuButtons();
            }
          }, {
            key: "updateInMenuButtons",
            value: function updateInMenuButtons() {
              var _this13 = this;

              var groupWithMenu = this._btns.length > this._maximumInlineActions;

              this._btns.forEach(function (btn, index) {
                if (groupWithMenu) {
                  // When the number of buttons exceeds the maximum and the button overflows, place the button in the menu.
                  btn.inMenu = index >= _this13._maximumInlineActions - 1;
                } else {
                  btn.inMenu = false;
                }
              });
            }
          }, {
            key: "subscribeToggleButtonClick",
            value: function subscribeToggleButtonClick() {
              var _this14 = this;

              // If there is menu with additional buttons, find the toggle button and update button names on click.
              setTimeout(function () {
                var toggleButton = _this14.getToggleButton(); // if there is a toggle button set function to handle the click event only once.


                if (toggleButton && !toggleButton.onclick) {
                  toggleButton.onclick = _this14.updateButtonTitles;
                }
              });
            } // the buttons are visible buttons in button group, toggle menu button

          }, {
            key: "getVisibleButtons",
            value: function getVisibleButtons() {
              return Array.from(this.elRef.nativeElement.querySelectorAll(ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR));
            } // inMenu buttons are rendered outside of the elRef, get them directly from the document

          }, {
            key: "getInMenuButtons",
            value: function getInMenuButtons() {
              return Array.from(this.elRef.nativeElement.ownerDocument.querySelectorAll(ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR));
            }
          }, {
            key: "getToggleButton",
            value: function getToggleButton() {
              return this.elRef.nativeElement.querySelector(ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR);
            }
          }]);

          return ButtonGroupDirective;
        }();

        ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR = "button.btn.dropdown-toggle";
        ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR = "button";
        ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR = "div.clr-button-group-menu > button";
        return ButtonGroupDirective;
      }();
      /***/

    },

    /***/
    "Xflx":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/pipe/virtual-objects/health-state-label.pipe.ts ***!
      \*****************************************************************************/

    /*! exports provided: VirtualObjectHealthStateLabelPipe */

    /***/
    function Xflx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectHealthStateLabelPipe", function () {
        return VirtualObjectHealthStateLabelPipe;
      });
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");

      var VirtualObjectHealthStateLabelPipe = /*#__PURE__*/function () {
        function VirtualObjectHealthStateLabelPipe() {
          _classCallCheck(this, VirtualObjectHealthStateLabelPipe);
        }

        _createClass(VirtualObjectHealthStateLabelPipe, [{
          key: "transform",
          value: function transform(state) {
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__["VsanHealthUtil"].getVsanObjectHealthStatusText(state);
          }
        }]);

        return VirtualObjectHealthStateLabelPipe;
      }();
      /***/

    },

    /***/
    "Yeo9":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/hci/health/health-check-dialog.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function Yeo9(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".sidenav[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  border: 0;\n}\nvsan-health-details-card[_ngcontent-%COMP%]     div.root-container {\n  border: none;\n}\nvsan-health-details-card[_ngcontent-%COMP%]     clr-tab-content section.content {\n  padding: 0.6rem 0 0 0 !important;\n}\nsection.sidenav-content[_ngcontent-%COMP%], section.nav-group.collapsible[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-top: 3px !important;\n  padding-bottom: 3px !important;\n}\n  button:focus {\n  outline: none;\n}\n  .sidenav .nav-group label {\n  padding: 0 0 0 0.6rem;\n}\n  .sidenav .collapsible label:after {\n  left: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oY2kvaGVhbHRoL2hlYWx0aC1jaGVjay1kaWFsb2cuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWVGO0FBVkc7RUFDRyxZQUFBO0FBYU47QUFWRztFQUVHLGdDQUFBO0FBV047QUFQQTs7RUFFRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQVVGO0FBTkE7RUFDRyxhQUFBO0FBU0g7QUFOQTtFQUNFLHFCQUFBO0FBU0Y7QUFOQTtFQUNFLFlHckJRO0FIOEJWIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oY2kvaGVhbHRoL2hlYWx0aC1jaGVjay1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuLnNpZGVuYXYge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbnZzYW4taGVhbHRoLWRldGFpbHMtY2FyZCB7XG4gICAvLyBSZW1vdmUgdGhlIGJvcmRlciBmcm9tIHRoZSBoZWFsdGggZGV0YWlscyBjYXJkXG4gICA6Om5nLWRlZXAgZGl2LnJvb3QtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgIH1cblxuICAgOjpuZy1kZWVwIGNsci10YWItY29udGVudCBzZWN0aW9uLmNvbnRlbnQge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBleHRyYSBwYWRkaW5nLCBzaW5jZSB0aGVyZSBpcyBubyBib3JkZXIsIG5vIG5lZWQgb2YgaXQuXG4gICAgICBwYWRkaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcgMCAwIDAgIWltcG9ydGFudDtcbiAgIH1cbn1cblxuc2VjdGlvbi5zaWRlbmF2LWNvbnRlbnQsXG5zZWN0aW9uLm5hdi1ncm91cC5jb2xsYXBzaWJsZSB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcHggIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgYnV0dG9uOmZvY3VzIHtcbiAgIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuc2lkZW5hdiAubmF2LWdyb3VwIGxhYmVsIHtcbiAgcGFkZGluZzogMCAwIDAgJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xufVxuXG46Om5nLWRlZXAgLnNpZGVuYXYgLmNvbGxhcHNpYmxlIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "YoEk":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/hci/configure/dialog/configure-warning-dialog.component.ngfactory.js ***!
      \*******************************************************************************************/

    /*! exports provided: RenderType_ConfigureWarningDialogComponent, View_ConfigureWarningDialogComponent_0, View_ConfigureWarningDialogComponent_Host_0, ConfigureWarningDialogComponentNgFactory */

    /***/
    function YoEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ConfigureWarningDialogComponent", function () {
        return RenderType_ConfigureWarningDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigureWarningDialogComponent_0", function () {
        return View_ConfigureWarningDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigureWarningDialogComponent_Host_0", function () {
        return View_ConfigureWarningDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureWarningDialogComponentNgFactory", function () {
        return ConfigureWarningDialogComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../common/component/dialog/prompt/prompt-info.component.ngfactory */
      "ltW2");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/component/dialog/prompt/prompt-info.component */
      "1jjW");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./configure-warning-dialog.component */
      "3bCW");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ConfigureWarningDialogComponent = [];

      var RenderType_ConfigureWarningDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ConfigureWarningDialogComponent,
        data: {}
      });

      function View_ConfigureWarningDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_2__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = "danger";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.cluster.hci.configureHciCluster.warningDialog.errorMessage"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ConfigureWarningDialogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ConfigureWarningDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "vsan-info-prompt", [["confirmText", "vsan.common.ok"]], null, null, null, _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_InfoPrompt_0"], _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_InfoPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"],
          isCallbackTriggerEnabled: [2, "isCallbackTriggerEnabled"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ConfigureWarningDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ConfigureWarningDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.title;
          var currVal_1 = "vsan.common.ok";
          var currVal_2 = true;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _co.incompatibleNetworkConfig;

          _ck(_v, 6, 0, currVal_3);

          var currVal_4 = _co.content;

          _ck(_v, 9, 0, currVal_4);
        }, null);
      }

      function View_ConfigureWarningDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-configure-warning", [], null, null, null, View_ConfigureWarningDialogComponent_0, RenderType_ConfigureWarningDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfigureWarningDialogComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ConfigureWarningDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-configure-warning", _configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfigureWarningDialogComponent"], View_ConfigureWarningDialogComponent_Host_0, {}, {}, []);
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
    "cTju":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/getting-started.utils.ts ***!
      \******************************************************************/

    /*! exports provided: GettingStartedUtils */

    /***/
    function cTju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedUtils", function () {
        return GettingStartedUtils;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_hci_workflow_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/hci-workflow-state */
      "EqQr");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var GettingStartedUtils = /*#__PURE__*/function () {
        function GettingStartedUtils() {
          _classCallCheck(this, GettingStartedUtils);
        }

        _createClass(GettingStartedUtils, null, [{
          key: "getEnabledServices",
          value: function getEnabledServices(basicClusterConfigData) {
            var result = [];

            if (basicClusterConfigData.drsEnabled) {
              result.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.basicConfigCard.services.drs"));
            }

            if (basicClusterConfigData.haEnabled) {
              result.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.basicConfigCard.services.ha"));
            }

            if (basicClusterConfigData.vsanEnabled) {
              result.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(basicClusterConfigData.isVsanMaxEnabled ? "vsan.hci.gettingStarted.basicConfigCard.services.vsanMax" : "vsan.hci.gettingStarted.basicConfigCard.services.vsan"));
            }

            if (basicClusterConfigData.isComputeOnlyCluster) {
              result.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.basicConfigCard.services.vsanComputeOnly"));
            }

            return result;
          }
        }, {
          key: "getClusterBasicsHeader",
          value: function getClusterBasicsHeader(enabledServices) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(enabledServices.length > 0 ? "vsan.hci.gettingStarted.basicConfigCard.contentHeader.selectedServices" : "vsan.hci.gettingStarted.basicConfigCard.contentHeader.noServices");
          }
        }, {
          key: "getConfigureClusterHeader",
          value: function getConfigureClusterHeader(isExtend) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(isExtend ? "vsan.hci.gettingStarted.configureServicesCard.titleInExtend" : "vsan.hci.gettingStarted.configureServicesCard.title");
          }
        }, {
          key: "getHostsLabel",
          value: function getHostsLabel(basicClusterConfigData) {
            if (basicClusterConfigData.notConfiguredHosts !== 0) {
              if (basicClusterConfigData.notConfiguredHosts === basicClusterConfigData.totalHosts) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.addHostsCard.notConfiguredHostsInTheCluster", basicClusterConfigData.notConfiguredHosts);
              } else {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.addHostsCard.hostsInTheClusterByType", basicClusterConfigData.totalHosts, basicClusterConfigData.notConfiguredHosts);
              }
            } else {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.addHostsCard.hostsInTheCluster", basicClusterConfigData.totalHosts);
            }
          }
        }, {
          key: "getConfiguredClusterHeaderLabel",
          value: function getConfiguredClusterHeaderLabel(configData) {
            if (configData.hciWorkflowState === _generated_hci_workflow_state__WEBPACK_IMPORTED_MODULE_1__["HciWorkflowState"].DONE && configData.notConfiguredHosts > 0) {
              return configData.notConfiguredHosts === 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.notConfiguredHostText") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.notConfiguredHostsText", configData.notConfiguredHosts);
            }

            return null;
          }
        }, {
          key: "getConfigureCardContentText",
          value: function getConfigureCardContentText(configureClusterCard, basicClusterConfigData) {
            if (configureClusterCard.validateEnabled && configureClusterCard.validationData) {
              // When validation has passed, only the validation result will be shown in the cluster card.
              return null;
            }

            if (basicClusterConfigData.drsEnabled && basicClusterConfigData.vsanEnabled) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.contentText.vMotionVsanTraffic");
            }

            if (basicClusterConfigData.drsEnabled) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.contentText.vMotionTraffic");
            }

            if (basicClusterConfigData.vsanEnabled) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.contentText.vSanTraffic");
            }

            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.hci.gettingStarted.configureServicesCard.contentText.default");
          }
        }]);

        return GettingStartedUtils;
      }();
      /***/

    },

    /***/
    "e724":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/common/component/cell/common-cells.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CommonCellsModule */

    /***/
    function e724(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonCellsModule", function () {
        return CommonCellsModule;
      });

      var CommonCellsModule = /*#__PURE__*/_createClass(function CommonCellsModule() {
        _classCallCheck(this, CommonCellsModule);
      });
      /***/

    },

    /***/
    "fnJr":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/hci/getting-started-view.module.ngfactory.js ***!
      \*******************************************************************/

    /*! exports provided: GettingStartedViewModuleNgFactory */

    /***/
    function fnJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedViewModuleNgFactory", function () {
        return GettingStartedViewModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _getting_started_view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getting-started-view.module */
      "QWJh");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _health_action_vum_login_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../health/action/vum-login-action.component.ngfactory */
      "RYsO");
      /* harmony import */


      var _health_action_not_supported_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../health/action/not-supported-action.component.ngfactory */
      "G2vh");
      /* harmony import */


      var _health_action_relayout_relayout_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../health/action/relayout/relayout-objects.component.ngfactory */
      "HDOc");
      /* harmony import */


      var _health_action_mark_silent_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../health/action/mark-silent-health-action.component.ngfactory */
      "vM6x");
      /* harmony import */


      var _health_action_restore_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../health/action/restore-health-action.component.ngfactory */
      "TwKt");
      /* harmony import */


      var _health_action_remediate_cluster_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../health/action/remediate-cluster-config.component.ngfactory */
      "5e3F");
      /* harmony import */


      var _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../health/action/purge-inaccessible-objects/purge-inaccessible-swap-objects-action.component.ngfactory */
      "YTBJ");
      /* harmony import */


      var _health_action_remediate_file_service_imbalance_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../health/action/remediate-file-service-imbalance.component.ngfactory */
      "WPoM");
      /* harmony import */


      var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */
      "No7X");
      /* harmony import */


      var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */
      "bIR2");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */
      "Wfa3");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */
      "PBGP");
      /* harmony import */


      var _gettingstarted_getting_started_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./gettingstarted/getting-started-view.component.ngfactory */
      "2Sfw");
      /* harmony import */


      var _configure_dialog_configure_warning_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./configure/dialog/configure-warning-dialog.component.ngfactory */
      "YoEk");
      /* harmony import */


      var _configure_dialog_configure_confirmation_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./configure/dialog/configure-confirmation-dialog.component.ngfactory */
      "2hg0");
      /* harmony import */


      var _health_health_check_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./health/health-check-dialog.component.ngfactory */
      "rbXl");
      /* harmony import */


      var _dismiss_dismiss_quickstart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./dismiss/dismiss-quickstart-dialog.component.ngfactory */
      "qeQT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../common/service/telemetry.service */
      "U2+J");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-property-collector-client.service */
      "L7/z");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-vc-config-system.service */
      "yGTn");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-model-factory.service */
      "VM2Y");
      /* harmony import */


      var _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-model-factory.service */
      "gswu");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../generated/datacenter-inventory-service */
      "uoMP");
      /* harmony import */


      var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../generated/network-inventory-service */
      "Ot8i");
      /* harmony import */


      var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../generated/compute-inventory-service */
      "+xjW");
      /* harmony import */


      var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../generated/io-insight-inventory-service */
      "fhiF");
      /* harmony import */


      var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../../generated/vsan-inventory-helper */
      "2HhS");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../common/service/client/vsan/capability-system/vsan-capability.service */
      "jAET");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.service */
      "Tq4R");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker-intl.service */
      "rAFq");
      /* harmony import */


      var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../common/component/datetime-picker/localize-picker-labels */
      "EUIg");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker.component */
      "4D9t");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */
      "bMPK");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */
      "UiI2");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../common/component/cell/common-cells.module */
      "e724");
      /* harmony import */


      var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ../common/component/action-button/action-button.module */
      "wQOa");
      /* harmony import */


      var _update_action_update_actions_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../update/action/update-actions.module */
      "G+D7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _health_action_health_actions_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../health/action/health-actions.module */
      "enEu");
      /* harmony import */


      var _common_component_illustrated_message_illustrated_message_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ../common/component/illustrated-message/illustrated-message.module */
      "LgXg");
      /* harmony import */


      var _health_health_details_card_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ../health/health-details-card.module */
      "8fTY");
      /* harmony import */


      var _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ../common/component/search/search.module */
      "v8iv");
      /* harmony import */


      var _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ../common/component/inventory/inventory-browser.module */
      "jkFw");
      /* harmony import */


      var _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ../common/component/datagrid/tree-datagrid.module */
      "6BUe");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.module */
      "jRYl");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time.module */
      "KL2N");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time.module */
      "QX+E");
      /* harmony import */


      var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ../common/component/datetime-picker/datetime-picker.module */
      "UaEa");
      /* harmony import */


      var _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ../common/component/popup-list/popup-list.module */
      "JCZN");
      /* harmony import */


      var _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! ../common/component/navigation/vsan-breadcrumb.module */
      "U2P7");
      /* harmony import */


      var _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! ../common/vsan-common.module */
      "uDMx");
      /* harmony import */


      var _common_component_health_health_check_item_module__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! ../common/component/health/health-check-item.module */
      "2Fdh");
      /* harmony import */


      var _health_action_vum_login_action_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! ../health/action/vum-login-action.component */
      "9KJB");
      /* harmony import */


      var _health_action_not_supported_action_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! ../health/action/not-supported-action.component */
      "IS3Q");
      /* harmony import */


      var _health_action_relayout_relayout_objects_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! ../health/action/relayout/relayout-objects.component */
      "1qPT");
      /* harmony import */


      var _health_action_mark_silent_health_action_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! ../health/action/mark-silent-health-action.component */
      "lSeR");
      /* harmony import */


      var _health_action_restore_health_action_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! ../health/action/restore-health-action.component */
      "Zy9P");
      /* harmony import */


      var _health_action_remediate_cluster_config_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! ../health/action/remediate-cluster-config.component */
      "Dr0A");
      /* harmony import */


      var _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! ../health/action/purge-inaccessible-objects/purge-inaccessible-swap-objects-action.component */
      "Wu7B");
      /* harmony import */


      var _health_action_remediate_file_service_imbalance_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! ../health/action/remediate-file-service-imbalance.component */
      "6Wi+");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */
      "vRnr");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */
      "oRW+");
      /* harmony import */


      var _gettingstarted_getting_started_view_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! ./gettingstarted/getting-started-view.component */
      "KeN7");
      /* harmony import */


      var _configure_dialog_configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! ./configure/dialog/configure-warning-dialog.component */
      "3bCW");
      /* harmony import */


      var _configure_dialog_configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! ./configure/dialog/configure-confirmation-dialog.component */
      "Kfmd");
      /* harmony import */


      var _health_health_check_dialog_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! ./health/health-check-dialog.component */
      "0oyP");
      /* harmony import */


      var _dismiss_dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! ./dismiss/dismiss-quickstart-dialog.component */
      "W4qO");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-format.class */
      "EFU/");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var GettingStartedViewModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_getting_started_view_module__WEBPACK_IMPORTED_MODULE_1__["GettingStartedViewModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _health_action_vum_login_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["VumLoginDialogComponentNgFactory"], _health_action_not_supported_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["NotSupportedActionComponentNgFactory"], _health_action_relayout_relayout_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RelayoutVsanObjectsComponentNgFactory"], _health_action_mark_silent_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["MarkSilentHealthActionComponentNgFactory"], _health_action_restore_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RestoreHealthActionComponentNgFactory"], _health_action_remediate_cluster_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RemediateClusterConfigDialogComponentNgFactory"], _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["PurgeInaccessibleSwapObjectsActionComponentNgFactory"], _health_action_remediate_file_service_imbalance_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RemediateFileServiceImbalanceComponentNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["OwlDateTimeContainerComponentNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["DeleteRangeConfirmDialogComponentNgFactory"], _gettingstarted_getting_started_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["GettingStartedViewComponentNgFactory"], _configure_dialog_configure_warning_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ConfigureWarningDialogComponentNgFactory"], _configure_dialog_configure_confirmation_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["ConfigureConfirmationDialogComponentNgFactory"], _health_health_check_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["HealthCheckDialogComponentNgFactory"], _dismiss_dismiss_quickstart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["DismissQuickstartDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_25__["TelemetryService"], _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_25__["TelemetryService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_26__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_26__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_28__["VpxdPropertyCollectorClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_29__["VsanVcClusterConfigSystem"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_31__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_32__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_33__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_33__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_28__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_32__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_34__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_34__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_28__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_32__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_35__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_35__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_28__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_32__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_36__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_36__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_28__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_31__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_32__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_37__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_38__["IoInsightService"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_39__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_41__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_42__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_43__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_44__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_45__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_45__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_46__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_47__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_46__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_48__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_48__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_48__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_49__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_49__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_49__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_50__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_51__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_51__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_52__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_52__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_53__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_53__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_54__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_54__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_55__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_55__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_56__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_56__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _update_action_update_actions_module__WEBPACK_IMPORTED_MODULE_57__["UpdateActionsModule"], _update_action_update_actions_module__WEBPACK_IMPORTED_MODULE_57__["UpdateActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_58__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_58__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_58__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_58__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_action_health_actions_module__WEBPACK_IMPORTED_MODULE_59__["HealthActionsModule"], _health_action_health_actions_module__WEBPACK_IMPORTED_MODULE_59__["HealthActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_illustrated_message_illustrated_message_module__WEBPACK_IMPORTED_MODULE_60__["IllustratedMessageModule"], _common_component_illustrated_message_illustrated_message_module__WEBPACK_IMPORTED_MODULE_60__["IllustratedMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_health_details_card_module__WEBPACK_IMPORTED_MODULE_61__["HealthDetailsCardModule"], _health_health_details_card_module__WEBPACK_IMPORTED_MODULE_61__["HealthDetailsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_62__["SearchModule"], _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_62__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_63__["InventoryBrowserModule"], _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_63__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_64__["TreeDatagridModule"], _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_64__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_41__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_41__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_65__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_65__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_66__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_66__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_66__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_66__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_67__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_67__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_68__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_68__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_69__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_69__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_69__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_69__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_70__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_70__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_71__["PopupListModule"], _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_71__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_72__["VsanBreadcrumbModule"], _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_72__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_73__["VsanCommonModule"], _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_73__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_health_health_check_item_module__WEBPACK_IMPORTED_MODULE_74__["HealthCheckItemModule"], _common_component_health_health_check_item_module__WEBPACK_IMPORTED_MODULE_74__["HealthCheckItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _getting_started_view_module__WEBPACK_IMPORTED_MODULE_1__["GettingStartedViewModule"], _getting_started_view_module__WEBPACK_IMPORTED_MODULE_1__["GettingStartedViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_50__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_58__["ROUTES"], function () {
          return [[{
            path: "loginVumDepot",
            component: _health_action_vum_login_action_component__WEBPACK_IMPORTED_MODULE_75__["VumLoginDialogComponent"]
          }, {
            path: "notSupportedAction",
            component: _health_action_not_supported_action_component__WEBPACK_IMPORTED_MODULE_76__["NotSupportedActionComponent"]
          }, {
            path: "relayoutVsanObjects",
            component: _health_action_relayout_relayout_objects_component__WEBPACK_IMPORTED_MODULE_77__["RelayoutVsanObjectsComponent"]
          }, {
            path: "markSilent",
            component: _health_action_mark_silent_health_action_component__WEBPACK_IMPORTED_MODULE_78__["MarkSilentHealthActionComponent"]
          }, {
            path: "restoreAlert",
            component: _health_action_restore_health_action_component__WEBPACK_IMPORTED_MODULE_79__["RestoreHealthActionComponent"]
          }, {
            path: "remediateCluster",
            component: _health_action_remediate_cluster_config_component__WEBPACK_IMPORTED_MODULE_80__["RemediateClusterConfigDialogComponent"]
          }, {
            path: "purgeInaccessibleSwapObjs",
            component: _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component__WEBPACK_IMPORTED_MODULE_81__["PurgeInaccessibleSwapObjectsActionComponent"]
          }, {
            path: "remediateFileServiceImbalance",
            component: _health_action_remediate_file_service_imbalance_component__WEBPACK_IMPORTED_MODULE_82__["RemediateFileServiceImbalanceComponent"]
          }], [{
            path: "addTimeRange",
            component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_83__["AddTimeRangeDialogComponent"]
          }, {
            path: "deleteTimeRange",
            component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_84__["DeleteRangeConfirmDialogComponent"]
          }], [{
            path: "",
            component: _gettingstarted_getting_started_view_component__WEBPACK_IMPORTED_MODULE_85__["GettingStartedViewComponent"]
          }, {
            path: "warningDialog",
            component: _configure_dialog_configure_warning_dialog_component__WEBPACK_IMPORTED_MODULE_86__["ConfigureWarningDialogComponent"]
          }, {
            path: "confirmationDialog",
            component: _configure_dialog_configure_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_87__["ConfigureConfirmationDialogComponent"]
          }, {
            path: "healthCheckDialog",
            component: _health_health_check_dialog_component__WEBPACK_IMPORTED_MODULE_88__["HealthCheckDialogComponent"]
          }, {
            path: "dismissQuickstart",
            component: _dismiss_dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_89__["DismissQuickstartDialogComponent"]
          }]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_90__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_70__["ɵ0"], [])]);
      });
      /***/

    },

    /***/
    "jkFw":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/inventory/inventory-browser.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: InventoryBrowserModule */

    /***/
    function jkFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryBrowserModule", function () {
        return InventoryBrowserModule;
      });

      var InventoryBrowserModule = /*#__PURE__*/_createClass(function InventoryBrowserModule() {
        _classCallCheck(this, InventoryBrowserModule);
      });
      /***/

    },

    /***/
    "qEXK":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/hci-pman.scss.shim.ngstyle.js ***!
      \***********************************************************************/

    /*! exports provided: styles */

    /***/
    function qEXK(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n.clr-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oY2kvZ2V0dGluZ3N0YXJ0ZWQvaGNpLXBtYW4uc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0FBY0g7QUFYQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0FBY0giLCJmaWxlIjoic3JjL2FwcC92c2FuL2hjaS9nZXR0aW5nc3RhcnRlZC9oY2ktcG1hbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLmNsci1yb3cge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMCBhdXRvO1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "qeQT":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/hci/dismiss/dismiss-quickstart-dialog.component.ngfactory.js ***!
      \***********************************************************************************/

    /*! exports provided: RenderType_DismissQuickstartDialogComponent, View_DismissQuickstartDialogComponent_0, View_DismissQuickstartDialogComponent_Host_0, DismissQuickstartDialogComponentNgFactory */

    /***/
    function qeQT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DismissQuickstartDialogComponent", function () {
        return RenderType_DismissQuickstartDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DismissQuickstartDialogComponent_0", function () {
        return View_DismissQuickstartDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DismissQuickstartDialogComponent_Host_0", function () {
        return View_DismissQuickstartDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DismissQuickstartDialogComponentNgFactory", function () {
        return DismissQuickstartDialogComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt.component.ngfactory */
      "3rpD");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt.component */
      "eCeK");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dismiss-quickstart-dialog.component */
      "W4qO");
      /* harmony import */


      var _generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../generated/hci-cluster-service */
      "9Yzj");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DismissQuickstartDialogComponent = [];

      var RenderType_DismissQuickstartDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_DismissQuickstartDialogComponent,
        data: {}
      });

      function View_DismissQuickstartDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "vsan-prompt", [], null, [[null, "onConfirm"], [null, "onCancel"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onConfirm" === en) {
            var pd_0 = _co["continue"]() !== false;
            ad = pd_0 && ad;
          }

          if ("onCancel" === en) {
            var pd_1 = _co.close() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PromptComponent_0"], _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PromptComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__["PromptComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"],
          confirmStyle: [2, "confirmStyle"],
          cancelText: [3, "cancelText"],
          blockButton: [4, "blockButton"],
          blockContent: [5, "blockContent"]
        }, {
          onConfirm: "onConfirm",
          onCancel: "onCancel"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, 0, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.cluster.hci.gettingStartedPage.closeQuickstart.title"));

          var currVal_1 = "vsan.common.continue";
          var currVal_2 = "btn-danger";
          var currVal_3 = "vsan.common.cancel";
          var currVal_4 = _co.busy;
          var currVal_5 = _co.busy;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.cluster.hci.gettingStartedPage.closeQuickstart.description"));

          _ck(_v, 5, 0, currVal_6);
        });
      }

      function View_DismissQuickstartDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-dismiss-quickstart", [], null, null, null, View_DismissQuickstartDialogComponent_0, RenderType_DismissQuickstartDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DismissQuickstartDialogComponent"], [_generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_6__["HciClusterService"]], null, null)], null, null);
      }

      var DismissQuickstartDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-dismiss-quickstart", _dismiss_quickstart_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DismissQuickstartDialogComponent"], View_DismissQuickstartDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "r+G3":
    /*!**********************************************!*\
      !*** ./src/app/vsan/common/util/dom-util.ts ***!
      \**********************************************/

    /*! exports provided: DomUtil */

    /***/
    function rG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomUtil", function () {
        return DomUtil;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Util methods for manipulating DOM
       */


      var DomUtil = /*#__PURE__*/function () {
        function DomUtil() {
          _classCallCheck(this, DomUtil);
        }

        _createClass(DomUtil, null, [{
          key: "onClick",
          value: function onClick(element, callback) {
            element.addEventListener("click", function () {
              return callback();
            });
          }
        }, {
          key: "onEnterKeyUp",
          value: function onEnterKeyUp(element, callback) {
            element.addEventListener("keyup", function (event) {
              // Handle "Enter" key on the keyboard
              if (event.keyCode === 13) {
                callback();
              }
            });
          }
        }, {
          key: "onMouseOver",
          value: function onMouseOver(element, callback) {
            element.addEventListener("mouseover", function () {
              return callback();
            });
          }
        }, {
          key: "onMouseOut",
          value: function onMouseOut(element, callback) {
            element.addEventListener("mouseout", function () {
              return callback();
            });
          }
          /**
           * Causes the DOM elements matching the given selector to be redrawn by the browser's layout enging.
           * This is useful when the browser fails to render some elements correctly and by redrawing them, this is fixed.
           */

        }, {
          key: "redraw",
          value: function redraw(selector) {
            setTimeout(function () {
              $(selector).hide().show(0);
            }, 100);
          }
        }, {
          key: "domElementExists",
          value: function domElementExists(elementName) {
            return !!document.getElementById(elementName);
          }
        }]);

        return DomUtil;
      }();
      /***/

    },

    /***/
    "rbXl":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/hci/health/health-check-dialog.component.ngfactory.js ***!
      \****************************************************************************/

    /*! exports provided: RenderType_HealthCheckDialogComponent, View_HealthCheckDialogComponent_0, View_HealthCheckDialogComponent_Host_0, HealthCheckDialogComponentNgFactory */

    /***/
    function rbXl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HealthCheckDialogComponent", function () {
        return RenderType_HealthCheckDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HealthCheckDialogComponent_0", function () {
        return View_HealthCheckDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HealthCheckDialogComponent_Host_0", function () {
        return View_HealthCheckDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthCheckDialogComponentNgFactory", function () {
        return HealthCheckDialogComponentNgFactory;
      });
      /* harmony import */


      var _health_check_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./health-check-dialog.scss.shim.ngstyle */
      "Yeo9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _health_view_card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../health/view/card/details-card.component.ngfactory */
      "hbBm");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _health_view_card_details_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../health/view/card/details-card.component */
      "mhsP");
      /* harmony import */


      var _generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../generated/vsan-health-mutation-provider */
      "HuxE");
      /* harmony import */


      var _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../generated/vsan-health-property-provider */
      "6s13");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/service/telemetry.service */
      "U2+J");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-info.component.ngfactory */
      "ltW2");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-info.component */
      "1jjW");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _health_check_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./health-check-dialog.component */
      "0oyP");
      /* harmony import */


      var _generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../generated/hci-cluster-service */
      "9Yzj");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HealthCheckDialogComponent = [_health_check_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HealthCheckDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HealthCheckDialogComponent,
        data: {}
      });

      function View_HealthCheckDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "vsan-health-details-card", [["class", "details-card"], ["id", "test-details"]], null, null, null, _health_view_card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DetailsCardComponent_0"], _health_view_card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DetailsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _health_view_card_details_card_component__WEBPACK_IMPORTED_MODULE_4__["DetailsCardComponent"], [_generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_5__["VsanHealthMutationProvider"], _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_6__["VsanHealthPropertyProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_7__["TaskMonitorService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_8__["VsanCapabilityProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_9__["PermissionService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"], _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_12__["DataServiceClient"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"]], {
          hasEditPermissions: [0, "hasEditPermissions"],
          showTestName: [1, "showTestName"],
          data: [2, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hasEditClusterPermission;
          var currVal_1 = false;
          var currVal_2 = _co.testData;

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_HealthCheckDialogComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-details-card", [["class", "details-card"]], null, null, null, _health_view_card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DetailsCardComponent_0"], _health_view_card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DetailsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _health_view_card_details_card_component__WEBPACK_IMPORTED_MODULE_4__["DetailsCardComponent"], [_generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_5__["VsanHealthMutationProvider"], _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_6__["VsanHealthPropertyProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_7__["TaskMonitorService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_8__["VsanCapabilityProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_9__["PermissionService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"], _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_11__["TelemetryService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_12__["DataServiceClient"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"]], {
          hasEditPermissions: [0, "hasEditPermissions"],
          showTestName: [1, "showTestName"],
          data: [2, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hasEditClusterPermission;
          var currVal_1 = false;
          var currVal_2 = _v.parent.context.$implicit.testData;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_HealthCheckDialogComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "div", [["class", "sidenav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 26, "section", [["class", "sidenav-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 23, "section", [["class", "nav-group collapsible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "input", [["type", "checkbox"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_v.context.$implicit.isCollapsed = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "label", [], [[8, "title", 0], [1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_14__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_14__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_14__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_14__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "clr-icon", [["size", "24"]], [[1, "shape", 0], [1, "class", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_14__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_15__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "span", [], [[8, "title", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthCheckDialogComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.isCollapsed;

          _ck(_v, 9, 0, currVal_8);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "check-", _v.context.index, "");

          _ck(_v, 14, 0, currVal_11);

          var currVal_16 = !_v.context.$implicit.isCollapsed;

          _ck(_v, 26, 0, currVal_16);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "check-", _v.context.index, "");

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending;

          _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.testData.testDescription, "");

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).forAttr;

          _ck(_v, 13, 0, currVal_9, currVal_10);

          var currVal_12 = _co.getIconShape(_v.context.$implicit.testData);

          var currVal_13 = "is-solid " + _co.getIconClass(_v.context.$implicit.testData);

          _ck(_v, 16, 0, currVal_12, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.testData.testName, "");

          _ck(_v, 21, 0, currVal_14);

          var currVal_15 = _v.context.$implicit.testData.testName;

          _ck(_v, 22, 0, currVal_15);
        });
      }

      function View_HealthCheckDialogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthCheckDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.groupTests;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_HealthCheckDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "vsan-info-prompt", [["confirmText", "vsan.common.ok"]], null, [[null, "alertMessagesChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.alertMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_InfoPrompt_0"], _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_InfoPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _common_component_dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_18__["InfoPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"],
          alertMessages: [2, "alertMessages"],
          blockContent: [3, "blockContent"]
        }, {
          alertMessagesChange: "alertMessagesChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HealthCheckDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HealthCheckDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.title;
          var currVal_1 = "vsan.common.ok";
          var currVal_2 = _co.alertMessages;
          var currVal_3 = _co.loading;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = !_co.loading && !_co.displayGroup;

          _ck(_v, 5, 0, currVal_4);

          var currVal_5 = !_co.loading && _co.displayGroup;

          _ck(_v, 8, 0, currVal_5);
        }, null);
      }

      function View_HealthCheckDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-health-check-dialog", [], null, null, null, View_HealthCheckDialogComponent_0, RenderType_HealthCheckDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _health_check_dialog_component__WEBPACK_IMPORTED_MODULE_20__["HealthCheckDialogComponent"], [_generated_hci_cluster_service__WEBPACK_IMPORTED_MODULE_21__["HciClusterService"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_9__["PermissionService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var HealthCheckDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-health-check-dialog", _health_check_dialog_component__WEBPACK_IMPORTED_MODULE_20__["HealthCheckDialogComponent"], View_HealthCheckDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "tsUx":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/external-link/external-link.directive.ts ***!
      \********************************************************************************/

    /*! exports provided: ExternalLinkDirective */

    /***/
    function tsUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalLinkDirective", function () {
        return ExternalLinkDirective;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @directive/clr-button-group/clr-button-base.directive */
      "+u6b");
      /**
       * Decorates a button or an anchor as external link. Requires one of the optional parameters articleId, helpId or url.
       *
       * @param external-link: Optional. Localization key of the text label of the external link. If omitted default label
       * will be used - "Learn more" for anchors or "Ask VMWare" for buttons.
       * @param articleId - Optional. Id of article in knowledge base.
       * @param helpId - Optional. Help id which will redirect to Knowledge Base.
       * @param url - Optional. External URL.
       */


      var ExternalLinkDirective = /*#__PURE__*/function (_directive_clr_button) {
        _inherits(ExternalLinkDirective, _directive_clr_button);

        var _super = _createSuper(ExternalLinkDirective);

        function ExternalLinkDirective(el, resolver, renderer, navigationService, // this variable will be initialized only if the host is clr-button
        clrButton) {
          var _this15;

          _classCallCheck(this, ExternalLinkDirective);

          _this15 = _super.call(this, clrButton);
          _this15.el = el;
          _this15.resolver = resolver;
          _this15.renderer = renderer;
          _this15.navigationService = navigationService;
          _this15.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
          _this15.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
          _this15.CONTAINER_CLASS = "icon-name-container";
          _this15.NAVIGATION_EVENT_TYPE = "click";
          _this15.LEAD_TO_NOWHERE_URL = "javascript://";
          _this15.HTML_ELEMENT_SPAN_NAME = "span";
          _this15.HTML_ELEMENT_ICON_NAME = "clr-icon";
          _this15.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
          _this15.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
          _this15.ICON_SHAPE_ATTR_NAME = "shape";
          _this15.ICON_SHAPE_ATTR_VALUE = "pop-out";
          _this15.ICON_SIZE_ATTR_NAME = "size";
          _this15.ICON_SIZE_ATTR_VALUE = "16";
          _this15.ICON_CLASS_ATTR_NAME = "class";
          _this15.ICON_CLASS_ATTR_VALUE = "link";
          _this15.ICON_TITLE_ATTR_NAME = "title";
          _this15.KB_URL = "http://kb.vmware.com/kb/";
          return _this15;
        }

        _createClass(ExternalLinkDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var element = this.el.nativeElement; // continue only if element is HTML link or button

            if (!this.isLink(element) && !this.isButton(element)) {
              // element is clr-button, wait until html button for it is resolved - handled by resloveButton
              return;
            }

            this.prepareExternalLink(element);
          }
        }, {
          key: "resolveButton",
          value: function resolveButton(clrButton, button, index) {
            // only if element is clr-button. At this point the html button is already resolved. Apply on it.
            this.prepareExternalLink(button);
          }
        }, {
          key: "prepareExternalLink",
          value: function prepareExternalLink(element) {
            this.renderer.addClass(element, this.CONTAINER_CLASS);
            this.setText(element);

            if (this.isLink(element)) {
              this.decorateLink(element);
            } else {
              this.addLinkRole(element);
            }

            this.initializeNavigationHandler(element);
          }
        }, {
          key: "isButton",
          value: function isButton(element) {
            return element instanceof HTMLButtonElement;
          }
        }, {
          key: "isLink",
          value: function isLink(element) {
            return element instanceof HTMLAnchorElement;
          }
        }, {
          key: "setText",
          value: function setText(element) {
            var span = this.renderer.createElement(this.HTML_ELEMENT_SPAN_NAME);
            span.innerText = this.getText(element);
            this.renderer.appendChild(element, span);
            var icon = this.renderer.createElement(this.HTML_ELEMENT_ICON_NAME);
            icon.setAttribute(this.ICON_SHAPE_ATTR_NAME, this.ICON_SHAPE_ATTR_VALUE);
            icon.setAttribute(this.ICON_SIZE_ATTR_NAME, this.ICON_SIZE_ATTR_VALUE);
            icon.setAttribute(this.ICON_CLASS_ATTR_NAME, this.ICON_CLASS_ATTR_VALUE); // Set title of the icon for screen readers clarity

            icon.setAttribute(this.ICON_TITLE_ATTR_NAME, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.label.externalLink.icon"));
            this.renderer.appendChild(element, icon);
          }
        }, {
          key: "getText",
          value: function getText(element) {
            if (this.anchorText) {
              return this.anchorText;
            }

            var key = this.isButton(element) ? this.ASK_VMWARE_DEFAULT_TEXT_KEY : this.LEARN_MORE_DEFAULT_TEXT_KEY;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key);
          }
        }, {
          key: "decorateLink",
          value: function decorateLink(element) {
            var linkElement = element; // don't use href attribute. If omitted, the link will be not visualized properly.

            linkElement.href = this.LEAD_TO_NOWHERE_URL; // display link on same line

            linkElement.style.display = "inline-flex";
          }
        }, {
          key: "initializeNavigationHandler",
          value: function initializeNavigationHandler(element) {
            var _this16 = this;

            element.addEventListener(this.NAVIGATION_EVENT_TYPE, function () {
              if (_this16.helpId) {
                _this16.navigationService.askVMware(_this16.helpId);

                return;
              }

              if (_this16.articleId) {
                _this16.navigationService.navigateToAddress("".concat(_this16.KB_URL).concat(_this16.articleId));

                return;
              }

              if (_this16.url) {
                _this16.navigationService.navigateToAddress(_this16.url);
              }
            });
          } // Indicate external navigation by assigning "link" role

        }, {
          key: "addLinkRole",
          value: function addLinkRole(element) {
            this.renderer.setAttribute(element, this.HTML_ELEMENT_ROLE_ATTR_NAME, this.HTML_ELEMENT_ROLE_ATTR_VALUE);
          }
        }]);

        return ExternalLinkDirective;
      }(_directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__["ClrButtonBaseDirective"]);
      /***/

    },

    /***/
    "uDMx":
    /*!***************************************************!*\
      !*** ./src/app/vsan/common/vsan-common.module.ts ***!
      \***************************************************/

    /*! exports provided: VsanCommonModule */

    /***/
    function uDMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanCommonModule", function () {
        return VsanCommonModule;
      });

      var VsanCommonModule = /*#__PURE__*/_createClass(function VsanCommonModule() {
        _classCallCheck(this, VsanCommonModule);
      });
      /***/

    },

    /***/
    "v8iv":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/common/component/search/search.module.ts ***!
      \***************************************************************/

    /*! exports provided: SearchModule */

    /***/
    function v8iv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
        return SearchModule;
      });

      var SearchModule = /*#__PURE__*/_createClass(function SearchModule() {
        _classCallCheck(this, SearchModule);
      });
      /***/

    },

    /***/
    "wQOa":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/action-button/action-button.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ActionButtonModule */

    /***/
    function wQOa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionButtonModule", function () {
        return ActionButtonModule;
      });

      var ActionButtonModule = /*#__PURE__*/_createClass(function ActionButtonModule() {
        _classCallCheck(this, ActionButtonModule);
      });
      /***/

    },

    /***/
    "zs0a":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/hci/gettingstarted/hci-pman.component.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: RenderType_HciPmanComponent, View_HciPmanComponent_0, View_HciPmanComponent_Host_0, HciPmanComponentNgFactory */

    /***/
    function zs0a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HciPmanComponent", function () {
        return RenderType_HciPmanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HciPmanComponent_0", function () {
        return View_HciPmanComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HciPmanComponent_Host_0", function () {
        return View_HciPmanComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HciPmanComponentNgFactory", function () {
        return HciPmanComponentNgFactory;
      });
      /* harmony import */


      var _hci_pman_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hci-pman.scss.shim.ngstyle */
      "qEXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _hci_pman_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hci-pman.component */
      "46C6");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HciPmanComponent = [_hci_pman_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HciPmanComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HciPmanComponent,
        data: {}
      });

      function View_HciPmanComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "clr-col-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "clr-icon", [["size", "24"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_4__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 15, "div", [["class", "clr-col-11"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "a", [["class", "card-link"], ["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.navigateToClusterImage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](23, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.Icon.CLR_CHECK_ICON_SHAPE;

          _ck(_v, 5, 0, currVal_0);

          var currVal_1 = _co.pmanText;

          _ck(_v, 13, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 0, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.hci.configureHciCluster.card.pmanClusterImageLabel"));

          _ck(_v, 18, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.hci.configureHciCluster.card.pmanClusterImageLink"));

          _ck(_v, 22, 0, currVal_3);
        });
      }

      function View_HciPmanComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-hci-pman", [["class", "getting-started-view"]], null, null, null, View_HciPmanComponent_0, RenderType_HciPmanComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _hci_pman_component__WEBPACK_IMPORTED_MODULE_5__["HciPmanComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]], null, null)], null, null);
      }

      var HciPmanComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-hci-pman", _hci_pman_component__WEBPACK_IMPORTED_MODULE_5__["HciPmanComponent"], View_HciPmanComponent_Host_0, {
        pmanText: "pmanText"
      }, {}, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=107-es5.js.map