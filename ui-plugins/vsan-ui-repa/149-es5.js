(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149], {
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
    "Asmh":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/health/action/health-actions.module.ngfactory.js ***!
      \***********************************************************************/

    /*! exports provided: HealthActionsModuleNgFactory */

    /***/
    function Asmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthActionsModuleNgFactory", function () {
        return HealthActionsModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _health_actions_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./health-actions.module */
      "enEu");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _vum_login_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vum-login-action.component.ngfactory */
      "RYsO");
      /* harmony import */


      var _not_supported_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./not-supported-action.component.ngfactory */
      "G2vh");
      /* harmony import */


      var _relayout_relayout_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./relayout/relayout-objects.component.ngfactory */
      "HDOc");
      /* harmony import */


      var _mark_silent_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mark-silent-health-action.component.ngfactory */
      "vM6x");
      /* harmony import */


      var _restore_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./restore-health-action.component.ngfactory */
      "TwKt");
      /* harmony import */


      var _remediate_cluster_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./remediate-cluster-config.component.ngfactory */
      "5e3F");
      /* harmony import */


      var _purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./purge-inaccessible-objects/purge-inaccessible-swap-objects-action.component.ngfactory */
      "YTBJ");
      /* harmony import */


      var _remediate_file_service_imbalance_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./remediate-file-service-imbalance.component.ngfactory */
      "WPoM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _vum_login_action_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./vum-login-action.component */
      "9KJB");
      /* harmony import */


      var _not_supported_action_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./not-supported-action.component */
      "IS3Q");
      /* harmony import */


      var _relayout_relayout_objects_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./relayout/relayout-objects.component */
      "1qPT");
      /* harmony import */


      var _mark_silent_health_action_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mark-silent-health-action.component */
      "lSeR");
      /* harmony import */


      var _restore_health_action_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./restore-health-action.component */
      "Zy9P");
      /* harmony import */


      var _remediate_cluster_config_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./remediate-cluster-config.component */
      "Dr0A");
      /* harmony import */


      var _purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./purge-inaccessible-objects/purge-inaccessible-swap-objects-action.component */
      "Wu7B");
      /* harmony import */


      var _remediate_file_service_imbalance_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./remediate-file-service-imbalance.component */
      "6Wi+");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var HealthActionsModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_health_actions_module__WEBPACK_IMPORTED_MODULE_1__["HealthActionsModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _vum_login_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["VumLoginDialogComponentNgFactory"], _not_supported_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["NotSupportedActionComponentNgFactory"], _relayout_relayout_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RelayoutVsanObjectsComponentNgFactory"], _mark_silent_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["MarkSilentHealthActionComponentNgFactory"], _restore_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RestoreHealthActionComponentNgFactory"], _remediate_cluster_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RemediateClusterConfigDialogComponentNgFactory"], _purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["PurgeInaccessibleSwapObjectsActionComponentNgFactory"], _remediate_file_service_imbalance_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RemediateFileServiceImbalanceComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_18__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_19__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_19__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_20__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_20__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_21__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_21__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_22__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_22__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_actions_module__WEBPACK_IMPORTED_MODULE_1__["HealthActionsModule"], _health_actions_module__WEBPACK_IMPORTED_MODULE_1__["HealthActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_18__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () {
          return [[{
            path: "loginVumDepot",
            component: _vum_login_action_component__WEBPACK_IMPORTED_MODULE_24__["VumLoginDialogComponent"]
          }, {
            path: "notSupportedAction",
            component: _not_supported_action_component__WEBPACK_IMPORTED_MODULE_25__["NotSupportedActionComponent"]
          }, {
            path: "relayoutVsanObjects",
            component: _relayout_relayout_objects_component__WEBPACK_IMPORTED_MODULE_26__["RelayoutVsanObjectsComponent"]
          }, {
            path: "markSilent",
            component: _mark_silent_health_action_component__WEBPACK_IMPORTED_MODULE_27__["MarkSilentHealthActionComponent"]
          }, {
            path: "restoreAlert",
            component: _restore_health_action_component__WEBPACK_IMPORTED_MODULE_28__["RestoreHealthActionComponent"]
          }, {
            path: "remediateCluster",
            component: _remediate_cluster_config_component__WEBPACK_IMPORTED_MODULE_29__["RemediateClusterConfigDialogComponent"]
          }, {
            path: "purgeInaccessibleSwapObjs",
            component: _purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component__WEBPACK_IMPORTED_MODULE_30__["PurgeInaccessibleSwapObjectsActionComponent"]
          }, {
            path: "remediateFileServiceImbalance",
            component: _remediate_file_service_imbalance_component__WEBPACK_IMPORTED_MODULE_31__["RemediateFileServiceImbalanceComponent"]
          }]];
        }, [])]);
      });
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
          var _this;

          _classCallCheck(this, ExternalLinkDirective);

          _this = _super.call(this, clrButton);
          _this.el = el;
          _this.resolver = resolver;
          _this.renderer = renderer;
          _this.navigationService = navigationService;
          _this.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
          _this.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
          _this.CONTAINER_CLASS = "icon-name-container";
          _this.NAVIGATION_EVENT_TYPE = "click";
          _this.LEAD_TO_NOWHERE_URL = "javascript://";
          _this.HTML_ELEMENT_SPAN_NAME = "span";
          _this.HTML_ELEMENT_ICON_NAME = "clr-icon";
          _this.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
          _this.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
          _this.ICON_SHAPE_ATTR_NAME = "shape";
          _this.ICON_SHAPE_ATTR_VALUE = "pop-out";
          _this.ICON_SIZE_ATTR_NAME = "size";
          _this.ICON_SIZE_ATTR_VALUE = "16";
          _this.ICON_CLASS_ATTR_NAME = "class";
          _this.ICON_CLASS_ATTR_VALUE = "link";
          _this.ICON_TITLE_ATTR_NAME = "title";
          _this.KB_URL = "http://kb.vmware.com/kb/";
          return _this;
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
            var _this2 = this;

            element.addEventListener(this.NAVIGATION_EVENT_TYPE, function () {
              if (_this2.helpId) {
                _this2.navigationService.askVMware(_this2.helpId);

                return;
              }

              if (_this2.articleId) {
                _this2.navigationService.navigateToAddress("".concat(_this2.KB_URL).concat(_this2.articleId));

                return;
              }

              if (_this2.url) {
                _this2.navigationService.navigateToAddress(_this2.url);
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

    }
  }]);
})();
//# sourceMappingURL=149-es5.js.map