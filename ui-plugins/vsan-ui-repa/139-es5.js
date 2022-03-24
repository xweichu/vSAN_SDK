(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139], {
    /***/
    "1n89":
    /*!************************************************************************************************************!*\
      !*** ./src/app/vsan/faultdomains/actions/stretchedcluster/configure-stretched-cluster.module.ngfactory.js ***!
      \************************************************************************************************************/

    /*! exports provided: ConfigureStretchedClusterModuleNgFactory */

    /***/
    function n89(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureStretchedClusterModuleNgFactory", function () {
        return ConfigureStretchedClusterModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _configure_stretched_cluster_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./configure-stretched-cluster.module */
      "Ntbq");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */
      "No7X");
      /* harmony import */


      var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */
      "bIR2");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */
      "Wfa3");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */
      "PBGP");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/component/chart/performance/perf-chart-dialog.component.ngfactory */
      "vx4U");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/component/chart/performance/set-threshold-dialog.component.ngfactory */
      "Gg4+");
      /* harmony import */


      var _common_component_wizard_shared_pages_single_site_fault_domains_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../common/component/wizard/shared-pages/single-site-fault-domains-page.component.ngfactory */
      "ENph");
      /* harmony import */


      var _common_component_wizard_shared_pages_witness_host_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../common/component/wizard/shared-pages/witness-host-page.component.ngfactory */
      "9gp2");
      /* harmony import */


      var _common_component_wizard_shared_pages_witness_host_requirements_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../common/component/wizard/shared-pages/witness-host-requirements.component.ngfactory */
      "XIz6");
      /* harmony import */


      var _common_component_wizard_shared_pages_claim_disks_witness_host_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../common/component/wizard/shared-pages/claim-disks-witness-host-page.component.ngfactory */
      "VeT6");
      /* harmony import */


      var _common_component_wizard_shared_pages_fault_domains_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../common/component/wizard/shared-pages/fault-domains-page.component.ngfactory */
      "FiSP");
      /* harmony import */


      var _configure_stretched_cluster_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./configure-stretched-cluster.component.ngfactory */
      "S4iQ");
      /* harmony import */


      var _summary_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./summary-page.component.ngfactory */
      "m84J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../common/service/client/vpxd/vpxd-property-collector-client.service */
      "L7/z");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../common/service/client/vsan/vsan-vc-config-system.service */
      "yGTn");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../common/service/client/vpxd/vpxd-model-factory.service */
      "VM2Y");
      /* harmony import */


      var _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../common/service/client/vsan/vsan-model-factory.service */
      "gswu");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../../../generated/datacenter-inventory-service */
      "uoMP");
      /* harmony import */


      var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../../../generated/network-inventory-service */
      "Ot8i");
      /* harmony import */


      var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../../../generated/compute-inventory-service */
      "+xjW");
      /* harmony import */


      var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../../../generated/io-insight-inventory-service */
      "fhiF");
      /* harmony import */


      var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../../../generated/vsan-inventory-helper */
      "2HhS");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../../common/service/client/vsan/capability-system/vsan-capability.service */
      "jAET");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.service */
      "Tq4R");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker-intl.service */
      "rAFq");
      /* harmony import */


      var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../../../common/component/datetime-picker/localize-picker-labels */
      "EUIg");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker.component */
      "4D9t");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */
      "bMPK");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */
      "UiI2");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../../../common/component/chart/highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ../../../common/service/theme-listener.service */
      "AWEo");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../../../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../../../common/component/chart/highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../../../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../../../common/service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../../../common/component/capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ../../../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _common_component_diskmgmt_disks_property_retriever__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../../../common/component/diskmgmt/disks-property-retriever */
      "l0nN");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ng-drag-drop/src/services/ng-drag-drop.service */
      "ZbGM");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_54__);
      /* harmony import */


      var _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../../../common/service/witness-validation.service */
      "+W3v");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../../../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ../../../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ../../../common/component/action-button/action-button.module */
      "wQOa");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ../../../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ../../../common/component/cell/common-cells.module */
      "e724");
      /* harmony import */


      var _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ../../../common/component/search/search.module */
      "v8iv");
      /* harmony import */


      var _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ../../../common/component/inventory/inventory-browser.module */
      "jkFw");
      /* harmony import */


      var _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ../../../common/component/datagrid/tree-datagrid.module */
      "6BUe");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.module */
      "jRYl");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time.module */
      "KL2N");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time.module */
      "QX+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! ../../../common/component/datetime-picker/datetime-picker.module */
      "UaEa");
      /* harmony import */


      var _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! ../../../common/component/popup-list/popup-list.module */
      "JCZN");
      /* harmony import */


      var _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! ../../../common/component/navigation/vsan-breadcrumb.module */
      "U2P7");
      /* harmony import */


      var _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! ../../../common/vsan-common.module */
      "uDMx");
      /* harmony import */


      var _common_component_wizard_flow_wizard_module__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! ../../../common/component/wizard/flow-wizard.module */
      "pOC0");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! ../../../common/component/unavailable-view/unavailable-view.module */
      "YUlR");
      /* harmony import */


      var _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! ../../../common/component/chart/chart.module */
      "1+Dr");
      /* harmony import */


      var _common_component_diskmgmt_diskmgmt_common_module__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! ../../../common/component/diskmgmt/diskmgmt-common.module */
      "QcRc");
      /* harmony import */


      var ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! ng-drag-drop/src/ng-drag-drop.module */
      "xHUD");
      /* harmony import */


      var ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_81__);
      /* harmony import */


      var _common_component_wizard_shared_pages_wizard_shared_pages_module__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! ../../../common/component/wizard/shared-pages/wizard-shared-pages.module */
      "UhKm");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-format.class */
      "EFU/");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! ../../../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */
      "vRnr");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! ../../../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */
      "oRW+");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! ../../../common/component/chart/performance/perf-chart-dialog.component */
      "xuXY");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! ../../../common/component/chart/performance/set-threshold-dialog.component */
      "AYan");
      /* harmony import */


      var _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! ./configure-stretched-cluster.component */
      "IKmX");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var ConfigureStretchedClusterModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_configure_stretched_cluster_module__WEBPACK_IMPORTED_MODULE_1__["ConfigureStretchedClusterModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_lNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DeleteRangeConfirmDialogComponentNgFactory"], _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["PerfChartDialogComponentNgFactory"], _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SetThresholdDialogComponentNgFactory"], _common_component_wizard_shared_pages_single_site_fault_domains_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["SingleSiteFaultDomainsPageNgFactory"], _common_component_wizard_shared_pages_witness_host_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["WitnessHostPageComponentNgFactory"], _common_component_wizard_shared_pages_witness_host_requirements_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["WitnessHostRequirementsComponentNgFactory"], _common_component_wizard_shared_pages_claim_disks_witness_host_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ClaimDisksWitnessHostPageNgFactory"], _common_component_wizard_shared_pages_fault_domains_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["FaultDomainsPageComponentNgFactory"], _configure_stretched_cluster_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["ConfigureStretchedClusterWizardComponentNgFactory"], _summary_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["StretchedClusterSummaryPageComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_21__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_21__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_23__["VpxdPropertyCollectorClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_24__["VsanVcClusterConfigSystem"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_26__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_28__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_28__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_23__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_29__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_29__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_23__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_30__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_30__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_23__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_31__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_31__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_23__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_26__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_32__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_33__["IoInsightService"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_34__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_37__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_38__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_39__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_40__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_40__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_41__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_42__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_41__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_44__["HighchartsThemeService"], _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_44__["HighchartsThemeService"], [_common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_45__["ThemeListenerService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_46__["ReferenceWatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_47__["BarChartService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_47__["BarChartService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_44__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_48__["HighchartsPropertiesService"], _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_48__["HighchartsPropertiesService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_44__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_49__["PerfOrchestratorService"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_49__["PerfOrchestratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_50__["SpaceEfficiencyService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_50__["SpaceEfficiencyService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_51__["VsanCapacityService"], _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_51__["VsanCapacityService"], [_generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_52__["CapacityDataService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_47__["BarChartService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_50__["SpaceEfficiencyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_diskmgmt_disks_property_retriever__WEBPACK_IMPORTED_MODULE_53__["DisksPropertyRetriever"], _common_component_diskmgmt_disks_property_retriever__WEBPACK_IMPORTED_MODULE_53__["DisksPropertyRetriever"], [_common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_27__["DataServiceClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_25__["VpxdModelFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_54__["NgDragDropService"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_54__["NgDragDropService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_55__["WitnessValidationService"], _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_55__["WitnessValidationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_56__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_57__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_57__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_58__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_58__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_59__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_59__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_60__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_60__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_61__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_61__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_61__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_62__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_62__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_63__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_63__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_64__["SearchModule"], _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_64__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_65__["InventoryBrowserModule"], _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_65__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_66__["TreeDatagridModule"], _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_66__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_67__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_67__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_68__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_68__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_68__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_68__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_69__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_69__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_70__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_70__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_71__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_71__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_71__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_71__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_72__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_72__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_72__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_72__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_73__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_73__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_74__["PopupListModule"], _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_74__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_75__["VsanBreadcrumbModule"], _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_75__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_76__["VsanCommonModule"], _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_76__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_wizard_flow_wizard_module__WEBPACK_IMPORTED_MODULE_77__["FlowWizardModule"], _common_component_wizard_flow_wizard_module__WEBPACK_IMPORTED_MODULE_77__["FlowWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_78__["UnavailableViewModule"], _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_78__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_79__["VsanChartModule"], _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_79__["VsanChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_diskmgmt_diskmgmt_common_module__WEBPACK_IMPORTED_MODULE_80__["DiskmgmtCommonModule"], _common_component_diskmgmt_diskmgmt_common_module__WEBPACK_IMPORTED_MODULE_80__["DiskmgmtCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_81__["NgDragDropModule"], ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_81__["NgDragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_wizard_shared_pages_wizard_shared_pages_module__WEBPACK_IMPORTED_MODULE_82__["WizardSharedPagesModule"], _common_component_wizard_shared_pages_wizard_shared_pages_module__WEBPACK_IMPORTED_MODULE_82__["WizardSharedPagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _configure_stretched_cluster_module__WEBPACK_IMPORTED_MODULE_1__["ConfigureStretchedClusterModule"], _configure_stretched_cluster_module__WEBPACK_IMPORTED_MODULE_1__["ConfigureStretchedClusterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_56__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_83__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_73__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_72__["ROUTES"], function () {
          return [[{
            path: "addTimeRange",
            component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_84__["AddTimeRangeDialogComponent"]
          }, {
            path: "deleteTimeRange",
            component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_85__["DeleteRangeConfirmDialogComponent"]
          }], [{
            path: "expandChart",
            component: _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_86__["PerfChartDialogComponent"]
          }, {
            path: "setThreshold",
            component: _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_87__["SetThresholdDialogComponent"]
          }], [{
            path: "",
            component: _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_88__["ConfigureStretchedClusterWizardComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "IKmX":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/faultdomains/actions/stretchedcluster/configure-stretched-cluster.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ConfigureStretchedClusterWizardComponent */

    /***/
    function IKmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureStretchedClusterWizardComponent", function () {
        return ConfigureStretchedClusterWizardComponent;
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


      var _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/wizard/flow-wizard.component */
      "YxSn");
      /* harmony import */


      var _generated_configure_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/configure-stretched-cluster-service */
      "3rpZ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _summary_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./summary-page.component */
      "nV0e");
      /* harmony import */


      var _component_wizard_shared_pages_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @component/wizard/shared-pages/fault-domains-page.component */
      "mKD/");
      /* harmony import */


      var _component_wizard_shared_pages_witness_host_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @component/wizard/shared-pages/witness-host-page.component */
      "qt2f");
      /* harmony import */


      var _component_wizard_shared_pages_claim_disks_witness_host_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @component/wizard/shared-pages/claim-disks-witness-host-page.component */
      "7sC7");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/vsan-stretched-cluster-service */
      "bxEx");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _util_witness_host_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/witness-host.util */
      "tMpm");
      /* harmony import */


      var _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @generated/vsan-cluster-type */
      "ZIzF");

      var ConfigureStretchedClusterWizardComponent = /*#__PURE__*/function () {
        function ConfigureStretchedClusterWizardComponent(vsanConfigService) {
          var _this = this;

          _classCallCheck(this, ConfigureStretchedClusterWizardComponent);

          this.vsanConfigService = vsanConfigService;
          this.title = "";
          this.startingTaskProperty = "";
          this.services = [_generated_configure_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_3__["ConfigureStretchedClusterService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_10__["VsanConfigService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_9__["VsanStretchedClusterService"]];

          this.includeClaimDisksPage = function (hasDiskGroupsOnWitness, isWitnessDeployedFromOvf) {
            // Show the claim disks page in vSAN 1 cluster if it doesn't already have a disk group.
            return _util_witness_host_util__WEBPACK_IMPORTED_MODULE_11__["WitnessHostUtil"].isClaimDisksPageVisible(_generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_12__["VsanClusterType"].STRETCHED_CLUSTER, hasDiskGroupsOnWitness, isWitnessDeployedFromOvf, _this.isVsanMaxEnabled);
          };
        }

        _createClass(ConfigureStretchedClusterWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var changeWitnessContext, clusterRef;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      changeWitnessContext = _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].getModalContext();
                      clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject;
                      _context.next = 4;
                      return this.vsanConfigService.isVsanMaxEnabled(clusterRef);

                    case 4:
                      this.isVsanMaxEnabled = _context.sent;

                      if (changeWitnessContext) {
                        this.changeWitnessHost(clusterRef, changeWitnessContext);
                      } else {
                        this.configureStretchedCluster(clusterRef);
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "configureStretchedCluster",
          value: function configureStretchedCluster(clusterRef) {
            this.context = {
              clusterRef: clusterRef,
              isVsanMaxWorkflow: this.isVsanMaxEnabled
            };
            this.startingTaskProperty = "configureStretchedClusterTask";
            this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.title");
            this.pages = [new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["PageSet"]([_component_wizard_shared_pages_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_6__["FaultDomainsPageComponent"], _component_wizard_shared_pages_witness_host_page_component__WEBPACK_IMPORTED_MODULE_7__["WitnessHostPageComponent"]]), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["PageSet"]([_component_wizard_shared_pages_claim_disks_witness_host_page_component__WEBPACK_IMPORTED_MODULE_8__["ClaimDisksWitnessHostPage"]], this.includeClaimDisksPage), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["PageSet"]([_summary_page_component__WEBPACK_IMPORTED_MODULE_5__["StretchedClusterSummaryPageComponent"]])];
          }
        }, {
          key: "changeWitnessHost",
          value: function changeWitnessHost(clusterRef, stretchedClusterContext) {
            this.context = {
              clusterRef: clusterRef,
              preferredName: stretchedClusterContext.preferredDomain,
              currentWitnessHostRef: stretchedClusterContext.currentWitnessHost,
              isVsanMaxWorkflow: this.isVsanMaxEnabled
            };
            this.startingTaskProperty = "changeWitnessHostTask";
            this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.changeWitnessHost.title");
            this.pages = [new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["PageSet"]([_component_wizard_shared_pages_witness_host_page_component__WEBPACK_IMPORTED_MODULE_7__["WitnessHostPageComponent"]]), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["PageSet"]([_component_wizard_shared_pages_claim_disks_witness_host_page_component__WEBPACK_IMPORTED_MODULE_8__["ClaimDisksWitnessHostPage"]], this.includeClaimDisksPage), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["PageSet"]([_summary_page_component__WEBPACK_IMPORTED_MODULE_5__["StretchedClusterSummaryPageComponent"]])];
          }
        }]);

        return ConfigureStretchedClusterWizardComponent;
      }();
      /***/

    },

    /***/
    "Ntbq":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/faultdomains/actions/stretchedcluster/configure-stretched-cluster.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ConfigureStretchedClusterModule */

    /***/
    function Ntbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureStretchedClusterModule", function () {
        return ConfigureStretchedClusterModule;
      });
      /* harmony import */


      var _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configure-stretched-cluster.component */
      "IKmX");

      var routes = [{
        path: "",
        component: _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_0__["ConfigureStretchedClusterWizardComponent"]
      }];

      var ConfigureStretchedClusterModule = /*#__PURE__*/_createClass(function ConfigureStretchedClusterModule() {
        _classCallCheck(this, ConfigureStretchedClusterModule);
      });
      /***/

    },

    /***/
    "S4iQ":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/vsan/faultdomains/actions/stretchedcluster/configure-stretched-cluster.component.ngfactory.js ***!
      \***************************************************************************************************************/

    /*! exports provided: RenderType_ConfigureStretchedClusterWizardComponent, View_ConfigureStretchedClusterWizardComponent_0, View_ConfigureStretchedClusterWizardComponent_Host_0, ConfigureStretchedClusterWizardComponentNgFactory */

    /***/
    function S4iQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ConfigureStretchedClusterWizardComponent", function () {
        return RenderType_ConfigureStretchedClusterWizardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigureStretchedClusterWizardComponent_0", function () {
        return View_ConfigureStretchedClusterWizardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigureStretchedClusterWizardComponent_Host_0", function () {
        return View_ConfigureStretchedClusterWizardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigureStretchedClusterWizardComponentNgFactory", function () {
        return ConfigureStretchedClusterWizardComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_wizard_flow_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../common/component/wizard/flow-wizard.component.ngfactory */
      "QsXF");
      /* harmony import */


      var _common_component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/component/wizard/flow-wizard.component */
      "YxSn");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./configure-stretched-cluster.component */
      "IKmX");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../generated/vsan-config-service */
      "UKIB");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ConfigureStretchedClusterWizardComponent = [];

      var RenderType_ConfigureStretchedClusterWizardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ConfigureStretchedClusterWizardComponent,
        data: {}
      });

      function View_ConfigureStretchedClusterWizardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "vsan-flow-wizard", [], null, null, null, _common_component_wizard_flow_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_FlowWizardComponent_0"], _common_component_wizard_flow_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_FlowWizardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _common_component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["FlowWizardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"]], {
          startingTaskProperty: [0, "startingTaskProperty"],
          title: [1, "title"],
          contextProperties: [2, "contextProperties"],
          pageSets: [3, "pageSets"],
          services: [4, "services"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.startingTaskProperty;
          var currVal_1 = _co.title;
          var currVal_2 = _co.context;
          var currVal_3 = _co.pages;
          var currVal_4 = _co.services;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_ConfigureStretchedClusterWizardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "configure-stretched-cluster-wizard", [], null, null, null, View_ConfigureStretchedClusterWizardComponent_0, RenderType_ConfigureStretchedClusterWizardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_4__["ConfigureStretchedClusterWizardComponent"], [_generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_5__["VsanConfigService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ConfigureStretchedClusterWizardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("configure-stretched-cluster-wizard", _configure_stretched_cluster_component__WEBPACK_IMPORTED_MODULE_4__["ConfigureStretchedClusterWizardComponent"], View_ConfigureStretchedClusterWizardComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "m84J":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/faultdomains/actions/stretchedcluster/summary-page.component.ngfactory.js ***!
      \************************************************************************************************/

    /*! exports provided: RenderType_StretchedClusterSummaryPageComponent, View_StretchedClusterSummaryPageComponent_0, View_StretchedClusterSummaryPageComponent_Host_0, StretchedClusterSummaryPageComponentNgFactory */

    /***/
    function m84J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_StretchedClusterSummaryPageComponent", function () {
        return RenderType_StretchedClusterSummaryPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_StretchedClusterSummaryPageComponent_0", function () {
        return View_StretchedClusterSummaryPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_StretchedClusterSummaryPageComponent_Host_0", function () {
        return View_StretchedClusterSummaryPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StretchedClusterSummaryPageComponentNgFactory", function () {
        return StretchedClusterSummaryPageComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../common/component/wizard/wizard-summary-entry.component.ngfactory */
      "Nlf3");
      /* harmony import */


      var _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/component/wizard/wizard-summary-entry.component */
      "aF+6");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_pipe_FileSizePipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/pipe/FileSizePipe */
      "96Ie");
      /* harmony import */


      var _summary_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./summary-page.component */
      "nV0e");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_StretchedClusterSummaryPageComponent = [];

      var RenderType_StretchedClusterSummaryPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_StretchedClusterSummaryPageComponent,
        data: {}
      });

      function View_StretchedClusterSummaryPageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["\n            ", "\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.label;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_StretchedClusterSummaryPageComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["\n            ", "\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.label;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_StretchedClusterSummaryPageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 39, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 6, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "span", [["id", "preferred-domain-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 9, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 0, 4, "span", [["id", "preferred-hosts-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StretchedClusterSummaryPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 6, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](23, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, 0, 1, "span", [["id", "secondary-domain-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 9, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](31, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, 0, 4, "span", [["id", "secondary-hosts-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StretchedClusterSummaryPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.preferredName"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.preferredHosts"));

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = _co.preferredHosts;

          _ck(_v, 17, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 22, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.secondaryName"));

          _ck(_v, 22, 0, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 30, 0, _ck(_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.secondaryHosts"));

          _ck(_v, 30, 0, currVal_6);

          var currVal_7 = _co.secondaryHosts;

          _ck(_v, 36, 0, currVal_7);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.preferredName;

          _ck(_v, 7, 0, currVal_1);

          var currVal_5 = _co.secondaryName;

          _ck(_v, 26, 0, currVal_5);
        });
      }

      function View_StretchedClusterSummaryPageComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 2, "span", [["id", "claimed-cache-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.claimedCache"));

          _ck(_v, 1, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 1), _co.claimedCache()));

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_StretchedClusterSummaryPageComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 2, "span", [["id", "claimed-capacity-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.claimedCapacity"));

          _ck(_v, 1, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 1), _co.claimedCapacity()));

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_StretchedClusterSummaryPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_FileSizePipe__WEBPACK_IMPORTED_MODULE_5__["FileSizePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StretchedClusterSummaryPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 6, "vsan-summary-entry", [], null, null, null, _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SummaryPageEntryComponent_0"], _common_component_wizard_wizard_summary_entry_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SummaryPageEntryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 49152, null, 0, _common_component_wizard_wizard_summary_entry_component__WEBPACK_IMPORTED_MODULE_2__["SummaryPageEntryComponent"], [], {
          label: [0, "label"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 1, "span", [["id", "witness-host-entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StretchedClusterSummaryPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_StretchedClusterSummaryPageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.secondaryName;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.witnessHost"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_3 = _co.witnessHostDiskMapping;

          _ck(_v, 14, 0, currVal_3);

          var currVal_4 = _co.witnessHostDiskMapping;

          _ck(_v, 17, 0, currVal_4);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.witnessHostName;

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_StretchedClusterSummaryPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_StretchedClusterSummaryPageComponent_0, RenderType_StretchedClusterSummaryPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _summary_page_component__WEBPACK_IMPORTED_MODULE_6__["StretchedClusterSummaryPageComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var StretchedClusterSummaryPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _summary_page_component__WEBPACK_IMPORTED_MODULE_6__["StretchedClusterSummaryPageComponent"], View_StretchedClusterSummaryPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "nV0e":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/faultdomains/actions/stretchedcluster/summary-page.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: StretchedClusterSummaryPageComponent */

    /***/
    function nV0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StretchedClusterSummaryPageComponent", function () {
        return StretchedClusterSummaryPageComponent;
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


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/wizard/flow-metadata */
      "ZRZh");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");

      var StretchedClusterSummaryPageComponent = /*@__PURE__*/function () {
        var StretchedClusterSummaryPageComponent = /*#__PURE__*/function () {
          function StretchedClusterSummaryPageComponent() {
            _classCallCheck(this, StretchedClusterSummaryPageComponent);

            this.preferredHosts = [];
            this.secondaryHosts = [];
          }

          _createClass(StretchedClusterSummaryPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this2 = this;

              if (this.preferredDomains) {
                // configure cluster mode
                this.preferredDomains.forEach(function (item) {
                  var _this2$preferredHosts;

                  return (_this2$preferredHosts = _this2.preferredHosts).push.apply(_this2$preferredHosts, _toConsumableArray(item.isHost ? [item] : item.children));
                });
                this.secondaryDomains.forEach(function (item) {
                  var _this2$secondaryHosts;

                  return (_this2$secondaryHosts = _this2.secondaryHosts).push.apply(_this2$secondaryHosts, _toConsumableArray(item.isHost ? [item] : item.children));
                });
                this.preferredHosts.sort(function (h1, h2) {
                  return h1.label.localeCompare(h2.label);
                });
                this.secondaryHosts.sort(function (h1, h2) {
                  return h1.label.localeCompare(h2.label);
                });
              } // else change witness host mode

            }
          }, {
            key: "claimedCache",
            value: function claimedCache() {
              return _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtUtil"].lbaToBytes(this.witnessHostDiskMapping.ssd.capacity);
            }
          }, {
            key: "claimedCapacity",
            value: function claimedCapacity() {
              return this.witnessHostDiskMapping.nonSsd.reduce(function (sum, disk) {
                return sum += _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtUtil"].lbaToBytes(disk.capacity);
              }, 0);
            }
          }]);

          return StretchedClusterSummaryPageComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StretchedClusterSummaryPageComponent.prototype, "preferredName", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], StretchedClusterSummaryPageComponent.prototype, "preferredDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StretchedClusterSummaryPageComponent.prototype, "secondaryName", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], StretchedClusterSummaryPageComponent.prototype, "secondaryDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"])], StretchedClusterSummaryPageComponent.prototype, "witnessHost", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StretchedClusterSummaryPageComponent.prototype, "witnessHostName", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], StretchedClusterSummaryPageComponent.prototype, "witnessHostDiskMapping", void 0);
        StretchedClusterSummaryPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.title"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.summary.description"))], StretchedClusterSummaryPageComponent);
        return StretchedClusterSummaryPageComponent;
      }();
      /***/

    },

    /***/
    "tMpm":
    /*!*******************************************************!*\
      !*** ./src/app/vsan/common/util/witness-host.util.ts ***!
      \*******************************************************/

    /*! exports provided: WitnessHostUtil */

    /***/
    function tMpm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostUtil", function () {
        return WitnessHostUtil;
      });
      /* harmony import */


      var _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-cluster-type */
      "ZIzF");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var WitnessHostUtil = /*#__PURE__*/function () {
        function WitnessHostUtil() {
          _classCallCheck(this, WitnessHostUtil);
        }

        _createClass(WitnessHostUtil, null, [{
          key: "isClaimDisksPageVisible",
          value:
          /**
           * Used to check if the claim disks page for a witness host must be shown to the user in various wizards.
           */
          function isClaimDisksPageVisible(configType, hasClaimedDisks, isWitnessDeployedFromOvf, isVsanMaxWorkflow) {
            if (configType !== _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_0__["VsanClusterType"].STRETCHED_CLUSTER && configType !== _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_0__["VsanClusterType"].TWO_HOST_VSAN_CLUSTER) {
              return false;
            } // Show the claim disks page if it doesn't already have claimed disks or if it is deployed from OVF


            return isVsanMaxWorkflow && !hasClaimedDisks && !isWitnessDeployedFromOvf || !isVsanMaxWorkflow && !hasClaimedDisks;
          }
        }]);

        return WitnessHostUtil;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=139-es5.js.map