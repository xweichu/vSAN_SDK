(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140], {
    /***/
    "2BwX":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loading-indicator.decorator.ts ***!
      \*************************************************************************/

    /*! exports provided: LoadingIndicator */

    /***/
    function BwX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function () {
        return LoadingIndicator;
      });
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This property decorator is supposed to be used along with the @Loader decorator.
       * As the @Loader decorator keeps track of all the active loading operations,
       * we can easily know if all the loading is completed. If there are any ongoing loading
       * operations, the property decorated with @LoadingIndicator will be set to "true", otherwise - it will be "false".
       * You can have as many properties decorated with @LoadingIndicator as you want, but they need to have different names.
       * The LoadingIndicator will show the loading state of the Loader methods with the same name.
       *
       * <pre>
       * @Loader()
       * loadDataSync(): any {
       *    // Load some data
       * }
       *
       * @Loader()
       * loadDataAsync(): Promise<any> {
       *    // Load some data
       * }
       *
       * @LoadingIndicator
       * isLoading: boolean; // The field will be set to "false" when the both the methods are complete and the Promise is resolved.
       * </pre>
       */


      function LoadingIndicator(props) {
        props = props || {};
        return function (targetClass, propertyKey) {
          Object.defineProperty(targetClass, propertyKey, {
            get: function get() {
              var _this = this;

              if (Array.isArray(props.name)) {
                return props.name.some(function (loaderName) {
                  return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](_this, loaderName).isLoading;
                });
              }

              return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, props.name).isLoading;
            }
          });
        };
      }
      /***/

    },

    /***/
    "2P5g":
    /*!**********************************************************************!*\
      !*** ./src/app/vsan/health/config/health-config.module.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: HealthConfigModuleNgFactory */

    /***/
    function P5g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthConfigModuleNgFactory", function () {
        return HealthConfigModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _health_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./health-config.module */
      "g4GE");
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


      var _historical_health_settings_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./historical-health-settings-dialog.component.ngfactory */
      "x79c");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _historical_health_settings_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./historical-health-settings-dialog.component */
      "+JE7");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var HealthConfigModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_health_config_module__WEBPACK_IMPORTED_MODULE_1__["HealthConfigModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _historical_health_settings_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HistoricalHealthSettingsDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_config_module__WEBPACK_IMPORTED_MODULE_1__["HealthConfigModule"], _health_config_module__WEBPACK_IMPORTED_MODULE_1__["HealthConfigModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
          return [[{
            path: "historicalHealthSettingsDialog",
            component: _historical_health_settings_dialog_component__WEBPACK_IMPORTED_MODULE_17__["HistoricalHealthSettingsDialogComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "7oHn":
    /*!*********************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/error-handler.decorator.ts ***!
      \*********************************************************************/

    /*! exports provided: ErrorHandler */

    /***/
    function oHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandler", function () {
        return ErrorHandler;
      });
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This property decorator is supposed to be used along with the @Loader decorator.
       * If an exception is thrown during the execution of the method decorated with @Loader
       * the ErrorHandler method will be invoked. You can define as many ErrorHandlers as you want,
       * but they must be with different names. The name can be provided as input to the decorator.
       * If a name is set to the ErrorHandler it will handle only the errors thrown by Loader functions
       * with the same name. If no name is passed to the ErrorHandler, it will handle only the errors
       * from Loader functions with no name.
       *
       * <pre>
       * // Example 1:
       * @Loader()
       * loadSyncData(): any {
       *    throw new Error("Failed to load sync data");
       * }
       *
       * @ErrorHandler()
       * handleError(err: any) {
       *    // handle the error.
       * }
       *...
       *
       * // Example 2
       *
       * @Loader({name: "data-loading-flow})
       * async loadAsyncData(): Promise<any> {
       *    return Promise.reject("Failed to load async data");
       * }
       *
       * @ErrorHandler({name: "data-loading-flow})
       * handleError(err: any) {
       *    // handle the error.
       * }
       * ...
       * </pre>
       */


      function ErrorHandler(props) {
        props = props || {};
        return function (targetClass, functionName, descriptor) {
          new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](targetClass, props.name).errorHandler = descriptor.value;
        };
      }
      /***/

    },

    /***/
    "8V30":
    /*!**************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loader.decorator.ts ***!
      \**************************************************************/

    /*! exports provided: Loader */

    /***/
    function V30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Loader", function () {
        return Loader;
      });
      /* harmony import */


      var _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/function-wrapper */
      "7ZNc");
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_reflection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/reflection */
      "bM2O");
      /* harmony import */


      var _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../vsan-app.module */
      "Uag/");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Method decorator that does the following:
       *  - watches for errors and if such appear:
       *       - the error is logged in the browser's console
       *       - the error is logged in the H5C server log
       *       - the related @ErrorMessage fields are populated
       *       - the related @ErrorHandler methods are invoked
       *  - Updates the @LoadingIndicator decorated fields
       *  - Invokes the screen reader service once the loading operation completes successfully
       */


      function Loader(params) {
        // If no params are passed, initialize the variable in order to avoid multiple null-checks
        params = params || {};
        return function (targetClass, functionName, descriptor) {
          // Use the component name as tag in order easily find where the error was thrown.
          var tag = _util_reflection__WEBPACK_IMPORTED_MODULE_3__["Reflection"].getClassName(targetClass);

          var loaderName = params.name;
          var originalFn = descriptor.value;

          descriptor.value = function () {
            var loadingFlowWrapper = new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__["LoadingFlowWrapper"](this, loaderName);
            return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["FunctionWrapper"](originalFn).preExecute(function () {
              loadingFlowWrapper.error = undefined;
              loadingFlowWrapper.incrementLoads();

              _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.preLoadSrMessage || params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADING);
            }).postExecute(function () {
              _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADED);
            }).onError(function (ex) {
              processError(loadingFlowWrapper, tag, ex);
              var rethrow = shouldRethrow(loadingFlowWrapper, params);

              if (!rethrow) {
                ex = invokeErrorHandler(loadingFlowWrapper, ex);
              }

              return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["ErrorContext"](rethrow, ex);
            })["finally"](function () {
              loadingFlowWrapper.decrementLoads();
            }).invoke(loadingFlowWrapper.backingObject, arguments);
          };
        };
      }
      /**
       * Handles the given error by:
       *  - logging the error in the browsers console
       *  - logging the error in the H5C backend log
       *  - updates all @ErrorMessage fields
       */


      function processError(wrapper, tag, ex) {
        // Log the error to the backend
        _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__["GlobalLogger"].error(tag, ex); // Cache the error so it can be retrieved by @ErrorMessage decorated fields


        wrapper.error = ex;
      }
      /**
       * Invokes the error handler (if defined)
       */


      function invokeErrorHandler(wrapper, ex) {
        var handler = wrapper.errorHandler;
        return !!handler ? handler.call(wrapper.backingObject, ex) : null;
      }
      /**
       * Reject the promise only if:
       * 1. there are no handlers declared
       * 2. the components has explicitly requested the error to be rethrown
       */


      function shouldRethrow(wrapper, params) {
        return !wrapper.errorHandler && !wrapper.errorMessageGetter || !!params.rethrow;
      }
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
              var _this2 = this;

              return new Promise(function (accept) {
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement = _this2.eventTarget ? _this2.eventTarget : event && event.target ? event.target : null;

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

                var actionUrl = "".concat(ModalBuilder.APP_URL, "?viewId=").concat(_this2.appId);
                var separator = "?";

                for (var param in _this2.urlParams) {
                  actionUrl += separator + param + "=" + _this2.urlParams[param];
                  separator = "&";
                }

                _platform__WEBPACK_IMPORTED_MODULE_3__["WebPlatform"].openModalDialog(_this2.title, actionUrl, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObjectUid, _this2.size[0], _this2.size[1], _this2.title != null, _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler
                /* onClose */
                , context
                /* retrieve with Platform.getModalContext() */
                , _this2.accessibilityTitle);
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
    "dmSP":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loading-flow-wrapper.data.ts ***!
      \***********************************************************************/

    /*! exports provided: LoadingFlowWrapper */

    /***/
    function dmSP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingFlowWrapper", function () {
        return LoadingFlowWrapper;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This class is used internally by the @Loader decorator and the decorators related to it.
       * It encapsulates the logic for accessing internal properties needed for the decorators to work.
       * The state of this class is kept in the "backingObject" passed to the constructor. This allows
       * the wrapper class to be easily recreated wherever it is needed without worrying about keeping its reference.
       *
       * <pre>
       * const obj: any = {};
       *
       * // Create a new LoadingFlowWrapper over obj
       * const wrapper1: LoadingFlowWrapper = new LoadingFlowWrapper(obj);
       * // Set the error field to "alabala" string
       * wrapper1.error = "alabala";
       *
       * // Create a new LoadingFlowWrapper over obj
       * const wrapper2: LoadingFlowWrapper = new LoadingFlowWrapper(obj);
       * console.log(wrapper2.error); // Prints "alabala" because the backing object is the same
       * </pre>
       */


      var LoadingFlowWrapper = /*@__PURE__*/function () {
        var LoadingFlowWrapper = /*#__PURE__*/function () {
          function LoadingFlowWrapper(_backingObject, loaderName) {
            _classCallCheck(this, LoadingFlowWrapper);

            this._backingObject = _backingObject;
            this.loaderName = loaderName;
            this.loaderName = loaderName || LoadingFlowWrapper.DEFAULT_NAME; // Init all collections

            this.initCollection(LoadingFlowWrapper.ERROR_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.LOADS_COUNT_HOLDER);
          }

          _createClass(LoadingFlowWrapper, [{
            key: "initCollection",
            value: function initCollection(collectionName) {
              // Check first if the collection hasn't been initialized by another wrapper.
              // If so, do nothing as we don't want to override the data already set.
              if (!this.backingObject[collectionName]) {
                this.backingObject[collectionName] = [];
              }
            }
            /**
             * The original object which methods/properties were decorated
             */

          }, {
            key: "backingObject",
            get: function get() {
              return this._backingObject;
            }
            /**
             * Returns the thrown error
             */

          }, {
            key: "error",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName];
            }
            /**
             * Sets the thrown error
             */
            ,
            set: function set(val) {
              this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName] = val;
            }
            /**
             * Returns the number of active loading operations
             */

          }, {
            key: "loadsCount",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName];
            }
            /**
             * Returns true if there are running loader methods or promises.
             */

          }, {
            key: "isLoading",
            get: function get() {
              return !!this.loadsCount;
            }
            /**
             * Increase the number of active loading operations by one
             */

          }, {
            key: "incrementLoads",
            value: function incrementLoads() {
              // Initialize the counter if it hasn't been initialized yet
              if (!this.loadsCount) {
                this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] = 0;
              }

              this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] += 1;
            }
            /**
             * Decreases the number of active loading operations by one
             */

          }, {
            key: "decrementLoads",
            value: function decrementLoads() {
              this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] -= 1;
            }
          }, {
            key: "errorHandler",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName];
            }
            /**
             * Registers a new error handler.
             */
            ,
            set: function set(errorHandler) {
              if (!!this.errorHandler) {
                throw new Error("ErrorHandler for loader \"".concat(this.loaderName, "\" already registered!"));
              }

              this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName] = errorHandler;
            }
          }, {
            key: "errorMessageGetter",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName];
            },
            set: function set(getter) {
              if (!!this.errorMessageGetter) {
                throw new Error("ErrorMessage for loader \"".concat(this.loaderName, "\" already registered!"));
              }

              this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName] = getter;
            }
          }]);

          return LoadingFlowWrapper;
        }();

        LoadingFlowWrapper.ERROR_HOLDER = "__ex__";
        LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER = "__errorHandlers__";
        LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER = "__errorMessageGetters__";
        LoadingFlowWrapper.LOADS_COUNT_HOLDER = "__loadsCount__";
        LoadingFlowWrapper.DEFAULT_NAME = "default-loader";
        return LoadingFlowWrapper;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=140-es5.js.map