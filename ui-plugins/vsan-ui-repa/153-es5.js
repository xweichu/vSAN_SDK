(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153], {
    /***/
    "Hv5g":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/chart.module.ngfactory.js ***!
      \***********************************************************************/

    /*! exports provided: VsanChartModuleNgFactory */

    /***/
    function Hv5g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanChartModuleNgFactory", function () {
        return VsanChartModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart.module */
      "1+Dr");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./performance/perf-chart-dialog.component.ngfactory */
      "vx4U");
      /* harmony import */


      var _performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./performance/set-threshold-dialog.component.ngfactory */
      "Gg4+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _service_theme_listener_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../service/theme-listener.service */
      "AWEo");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _capacity_capacity_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _validation_validation_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../validation/validation.module */
      "90Ln");
      /* harmony import */


      var _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../unavailable-view/unavailable-view.module */
      "YUlR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./performance/perf-chart-dialog.component */
      "xuXY");
      /* harmony import */


      var _performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./performance/set-threshold-dialog.component */
      "AYan");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var VsanChartModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??cmf"](_chart_module__WEBPACK_IMPORTED_MODULE_1__["VsanChartModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["??CodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??blNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??dzNgFactory"], _directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_router_router_lNgFactory"], _performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PerfChartDialogComponentNgFactory"], _performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SetThresholdDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__["HighchartsThemeService"], _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__["HighchartsThemeService"], [_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_11__["ThemeListenerService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_13__["BarChartService"], _capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_13__["BarChartService"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_14__["HighchartsPropertiesService"], _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_14__["HighchartsPropertiesService"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_15__["PerfOrchestratorService"], _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_15__["PerfOrchestratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _capacity_capacity_service__WEBPACK_IMPORTED_MODULE_16__["VsanCapacityService"], _capacity_capacity_service__WEBPACK_IMPORTED_MODULE_16__["VsanCapacityService"], [_generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_17__["CapacityDataService"], _capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_13__["BarChartService"], _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_18__["SpaceEfficiencyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??bk"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??bk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??bm"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??bm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??lrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??lrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??lrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??lrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??ce"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??ce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??ch"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??ch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??dx"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["??dx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_19__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_20__["CommonPipeModule"], _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_20__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_21__["CommonDirectiveModule"], _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_21__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _validation_validation_module__WEBPACK_IMPORTED_MODULE_24__["ValidationModule"], _validation_validation_module__WEBPACK_IMPORTED_MODULE_24__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_25__["PromptModule"], _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_25__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_26__["UnavailableViewModule"], _unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_26__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["??angular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _chart_module__WEBPACK_IMPORTED_MODULE_1__["VsanChartModule"], _chart_module__WEBPACK_IMPORTED_MODULE_1__["VsanChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_19__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], function () {
          return [[{
            path: "expandChart",
            component: _performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_28__["PerfChartDialogComponent"]
          }, {
            path: "setThreshold",
            component: _performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_29__["SetThresholdDialogComponent"]
          }]];
        }, [])]);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=153-es5.js.map