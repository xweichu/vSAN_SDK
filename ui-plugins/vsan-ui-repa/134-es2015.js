(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

/***/ "0YQt":
/*!************************************************************************************!*\
  !*** ./src/app/vsan/common/component/precheck/precheck-dialog.module.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: PrecheckDialogModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecheckDialogModuleNgFactory", function() { return PrecheckDialogModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _precheck_dialog_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precheck-dialog.module */ "giqO");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directive/show-title/clipboard-icon.component.ngfactory */ "1zpS");
/* harmony import */ var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */ "No7X");
/* harmony import */ var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */ "bIR2");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */ "Wfa3");
/* harmony import */ var _datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */ "PBGP");
/* harmony import */ var _pre_check_evacuation_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pre-check-evacuation-dialog.component.ngfactory */ "iCsC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../generated/witness-candidate-inventory-service */ "96pA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../service/client/vpxd/vpxd-property-collector-client.service */ "L7/z");
/* harmony import */ var _service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../service/client/vsan/vsan-vc-config-system.service */ "yGTn");
/* harmony import */ var _service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../service/client/vpxd/vpxd-model-factory.service */ "VM2Y");
/* harmony import */ var _service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../service/client/vsan/vsan-model-factory.service */ "gswu");
/* harmony import */ var _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../service/client/dataservice/data-service.service */ "QIo8");
/* harmony import */ var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../generated/datacenter-inventory-service */ "uoMP");
/* harmony import */ var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../generated/network-inventory-service */ "Ot8i");
/* harmony import */ var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../generated/compute-inventory-service */ "+xjW");
/* harmony import */ var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../generated/io-insight-inventory-service */ "fhiF");
/* harmony import */ var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../generated/vsan-inventory-helper */ "2HhS");
/* harmony import */ var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../generated/io-insight-service */ "lBrK");
/* harmony import */ var _service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../service/client/vsan/capability-system/vsan-capability.service */ "jAET");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-pick-datetime/dialog/dialog.service */ "Tq4R");
/* harmony import */ var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time-picker-intl.service */ "rAFq");
/* harmony import */ var _datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../datetime-picker/localize-picker-labels */ "EUIg");
/* harmony import */ var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time-picker.component */ "4D9t");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */ "bMPK");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */ "UiI2");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../virtual-objects-table/virtual-objects-table.service */ "LAuz");
/* harmony import */ var _virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../virtual-objects-table/virtual-objects-table-state.service */ "eh32");
/* harmony import */ var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../util/reference-watcher */ "gyvr");
/* harmony import */ var _virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../virtual-objects-table/actions/validation/virtual-objects-action-availability.service */ "Kdx0");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../pipe/common-pipe.module */ "yVHT");
/* harmony import */ var _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../directive/common-directive.module */ "uf8S");
/* harmony import */ var _validation_validation_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../validation/validation.module */ "90Ln");
/* harmony import */ var _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../action-button/action-button.module */ "wQOa");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../dialog/prompt/prompt.module */ "usKm");
/* harmony import */ var _cell_common_cells_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../cell/common-cells.module */ "e724");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../search/search.module */ "v8iv");
/* harmony import */ var _inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../inventory/inventory-browser.module */ "jkFw");
/* harmony import */ var _datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../datagrid/tree-datagrid.module */ "6BUe");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-pick-datetime/dialog/dialog.module */ "jRYl");
/* harmony import */ var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time.module */ "KL2N");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time.module */ "QX+E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../datetime-picker/datetime-picker.module */ "UaEa");
/* harmony import */ var _popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../popup-list/popup-list.module */ "JCZN");
/* harmony import */ var _navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../navigation/vsan-breadcrumb.module */ "U2P7");
/* harmony import */ var _vsan_common_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../vsan-common.module */ "uDMx");
/* harmony import */ var _export_export_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../export/export.module */ "wi+p");
/* harmony import */ var _virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../virtual-objects-table/virtual-objects-table.module */ "ktFr");
/* harmony import */ var _pre_check_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pre-check.module */ "yCpS");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-format.class */ "EFU/");
/* harmony import */ var _datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../datetime-picker/time-range-picker/add-time-range-dialog.component */ "vRnr");
/* harmony import */ var _datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../datetime-picker/time-range-picker/delete-range-confirm-dialog.component */ "oRW+");
/* harmony import */ var _pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pre-check-evacuation-dialog.component */ "iai2");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */




































































var PrecheckDialogModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_precheck_dialog_module__WEBPACK_IMPORTED_MODULE_1__["PrecheckDialogModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_lNgFactory"], _datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddTimeRangeDialogComponentNgFactory"], _datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DeleteRangeConfirmDialogComponentNgFactory"], _pre_check_evacuation_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["PreCheckEvacuationDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_13__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_13__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_15__["VpxdPropertyCollectorClient"], _service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_16__["VsanVcClusterConfigSystem"], _service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_17__["VpxdModelFactory"], _service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VsanModelFactory"], _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_19__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_20__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_20__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_15__["VpxdPropertyCollectorClient"], _service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_17__["VpxdModelFactory"], _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_19__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_21__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_21__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_15__["VpxdPropertyCollectorClient"], _service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_17__["VpxdModelFactory"], _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_19__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_22__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_22__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_15__["VpxdPropertyCollectorClient"], _service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_17__["VpxdModelFactory"], _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_19__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_23__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_23__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_15__["VpxdPropertyCollectorClient"], _service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_17__["VpxdModelFactory"], _service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VsanModelFactory"], _service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_19__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_24__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_25__["IoInsightService"], _service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_26__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_29__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_30__["OwlDateTimeIntl"], _datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_31__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_32__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_32__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_33__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_34__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_33__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_36__["VirtualObjectsTableService"], _virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_36__["VirtualObjectsTableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_37__["VirtualObjectsTableStateService"], _virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_37__["VirtualObjectsTableStateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_38__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_38__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_39__["VirtualObjectsActionAvailabilityService"], _virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_39__["VirtualObjectsActionAvailabilityService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_40__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_41__["CommonPipeModule"], _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_41__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_42__["CommonDirectiveModule"], _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_42__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _validation_validation_module__WEBPACK_IMPORTED_MODULE_43__["ValidationModule"], _validation_validation_module__WEBPACK_IMPORTED_MODULE_43__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_44__["ActionButtonModule"], _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_44__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_45__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_46__["PromptModule"], _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_46__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cell_common_cells_module__WEBPACK_IMPORTED_MODULE_47__["CommonCellsModule"], _cell_common_cells_module__WEBPACK_IMPORTED_MODULE_47__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _search_search_module__WEBPACK_IMPORTED_MODULE_48__["SearchModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_48__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_49__["InventoryBrowserModule"], _inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_49__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_50__["TreeDatagridModule"], _datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_50__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_51__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_51__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_53__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_53__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_54__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_54__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_55__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_55__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_55__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_55__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_56__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_56__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_56__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_56__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_57__["DatetimePickerModule"], _datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_57__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_58__["PopupListModule"], _popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_58__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_59__["VsanBreadcrumbModule"], _navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_59__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _vsan_common_module__WEBPACK_IMPORTED_MODULE_60__["VsanCommonModule"], _vsan_common_module__WEBPACK_IMPORTED_MODULE_60__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _export_export_module__WEBPACK_IMPORTED_MODULE_61__["ExportModule"], _export_export_module__WEBPACK_IMPORTED_MODULE_61__["ExportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_62__["VirtualObjectsTableModule"], _virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_62__["VirtualObjectsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pre_check_module__WEBPACK_IMPORTED_MODULE_63__["PrecheckModule"], _pre_check_module__WEBPACK_IMPORTED_MODULE_63__["PrecheckModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _precheck_dialog_module__WEBPACK_IMPORTED_MODULE_1__["PrecheckDialogModule"], _precheck_dialog_module__WEBPACK_IMPORTED_MODULE_1__["PrecheckDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_40__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_64__["OWL_DATE_TIME_FORMATS"], _datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_57__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_56__["ROUTES"], function () { return [[{ path: "addTimeRange", component: _datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_65__["AddTimeRangeDialogComponent"] }, { path: "deleteTimeRange", component: _datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_66__["DeleteRangeConfirmDialogComponent"] }], [{ path: "", component: _pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_67__["PreCheckEvacuationDialogComponent"] }]]; }, [])]); });




/***/ }),

/***/ "0mRq":
/*!**********************************************************************************!*\
  !*** ./src/app/vsan/common/directive/signpost-title/signpost-title.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: SignpostTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignpostTitleDirective", function() { return SignpostTitleDirective; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");

/**
 * Attribute directive for setting a custom title to the clr-icon inside a clr-signpost.
 * It also adds aria-label with the same value and aria-expanded="false" to the button, holding the icon.
 * Used for changing the title when a clr-icon is not explicitly added inside a clr-signpost.
 */
class SignpostTitleDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.BUTTON_TAG_NAME = "button";
        this.CLR_ICON_TAG_NAME = "clr-icon";
        this.TITLE_ATTRIBUTE = "title";
        this.ARIA_EXPANDED_ATTRIBUTE = "aria-expanded";
        this.ARIA_LABEL_ATTRIBUTE = "aria-label";
    }
    ngAfterViewInit() {
        if (!this.signpostTitle) {
            return;
        }
        const signpostIcon = this.el.nativeElement.getElementsByTagName(this.CLR_ICON_TAG_NAME).item(0);
        if (signpostIcon) {
            this.renderer.setAttribute(signpostIcon, this.TITLE_ATTRIBUTE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this.signpostTitle));
        }
        const button = this.el.nativeElement.getElementsByTagName(this.BUTTON_TAG_NAME).item(0);
        if (button) {
            this.renderer.setAttribute(button, this.ARIA_EXPANDED_ATTRIBUTE, "false");
            this.renderer.setAttribute(button, this.ARIA_LABEL_ATTRIBUTE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this.signpostTitle));
        }
    }
}



/***/ }),

/***/ "giqO":
/*!**************************************************************************!*\
  !*** ./src/app/vsan/common/component/precheck/precheck-dialog.module.ts ***!
  \**************************************************************************/
/*! exports provided: PrecheckDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecheckDialogModule", function() { return PrecheckDialogModule; });
/* harmony import */ var _component_precheck_pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/precheck/pre-check-evacuation-dialog.component */ "iai2");

const routes = [
    {
        path: "",
        component: _component_precheck_pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["PreCheckEvacuationDialogComponent"]
    }
];
class PrecheckDialogModule {
}



/***/ }),

/***/ "iCsC":
/*!***************************************************************************************************!*\
  !*** ./src/app/vsan/common/component/precheck/pre-check-evacuation-dialog.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: RenderType_PreCheckEvacuationDialogComponent, View_PreCheckEvacuationDialogComponent_0, View_PreCheckEvacuationDialogComponent_Host_0, PreCheckEvacuationDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PreCheckEvacuationDialogComponent", function() { return RenderType_PreCheckEvacuationDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PreCheckEvacuationDialogComponent_0", function() { return View_PreCheckEvacuationDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PreCheckEvacuationDialogComponent_Host_0", function() { return View_PreCheckEvacuationDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreCheckEvacuationDialogComponentNgFactory", function() { return PreCheckEvacuationDialogComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/prompt/prompt-info.component.ngfactory */ "ltW2");
/* harmony import */ var _dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/prompt/prompt-info.component */ "1jjW");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _pre_check_evacuation_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pre-check-evacuation-summary.component.ngfactory */ "gVbe");
/* harmony import */ var _pre_check_evacuation_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-check-evacuation-summary.component */ "bk1D");
/* harmony import */ var _generated_what_if_property_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../generated/what-if-property-provider */ "C0Wn");
/* harmony import */ var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../generated/vsan-capability-provider */ "y/yc");
/* harmony import */ var _pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pre-check-evacuation-dialog.component */ "iai2");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */









var styles_PreCheckEvacuationDialogComponent = [];
var RenderType_PreCheckEvacuationDialogComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PreCheckEvacuationDialogComponent, data: {} });

function View_PreCheckEvacuationDialogComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "vsan-info-prompt", [], null, null, null, _dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_InfoPrompt_0"], _dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_InfoPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_2__["InfoPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"]], { title: [0, "title"], subtitle: [1, "subtitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 2, "vsan-pre-check-evacuation-summary", [], null, [[null, "selectedDecommissionModeSummaryChanged"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("selectedDecommissionModeSummaryChanged" === en)) {
                var pd_0 = (_co.onDecommissionModeSummaryChanged($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _pre_check_evacuation_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PreCheckEvacuationSummaryComponent_0"], _pre_check_evacuation_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PreCheckEvacuationSummaryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _pre_check_evacuation_summary_component__WEBPACK_IMPORTED_MODULE_5__["PreCheckEvacuationSummaryComponent"], [_generated_what_if_property_provider__WEBPACK_IMPORTED_MODULE_6__["WhatIfPropertyProvider"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_7__["VsanCapabilityProvider"]], { hostMor: [0, "hostMor"], clusterId: [1, "clusterId"], evacuationEntityUuid: [2, "evacuationEntityUuid"], selectedDecommissionMode: [3, "selectedDecommissionMode"], isDecommissionModeChangeAllowed: [4, "isDecommissionModeChangeAllowed"] }, { selectedDecommissionModeSummaryChanged: "selectedDecommissionModeSummaryChanged" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.primaryTitle; var currVal_1 = _co.secondaryTitle; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.hostMor; var currVal_3 = _co.clusterId; var currVal_4 = _co.evacuationEntityUuid; var currVal_5 = _co.decommissionMode; var currVal_6 = _co.isDecommissionModeChangeAllowed; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null);
}
function View_PreCheckEvacuationDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-pre-check-evacuation-dialog", [], null, null, null, View_PreCheckEvacuationDialogComponent_0, RenderType_PreCheckEvacuationDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_8__["PreCheckEvacuationDialogComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PreCheckEvacuationDialogComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-pre-check-evacuation-dialog", _pre_check_evacuation_dialog_component__WEBPACK_IMPORTED_MODULE_8__["PreCheckEvacuationDialogComponent"], View_PreCheckEvacuationDialogComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "iai2":
/*!*****************************************************************************************!*\
  !*** ./src/app/vsan/common/component/precheck/pre-check-evacuation-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PreCheckEvacuationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreCheckEvacuationDialogComponent", function() { return PreCheckEvacuationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/logger */ "a0OL");
/* harmony import */ var _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/decommission-mode */ "yaIQ");
/* harmony import */ var _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/vsan-disk-mgmt-actions-util */ "g4ok");
/* harmony import */ var _component_precheck_pre_check_evacuation_dialog_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/precheck/pre-check-evacuation-dialog-size */ "4ogj");






class PreCheckEvacuationDialogComponent {
    constructor() {
        this.clusterId = "";
        this.evacuationEntityUuid = "";
        this.primaryTitle = "";
        this.secondaryTitle = "";
        this.isDecommissionModeChangeAllowed = true;
        this.onDecommissionModeSummaryChanged = (summary) => {
            // In case the precheck dialog doesn't show any objects, decrease the height
            if (_util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_4__["VsanDiskMgmtActionsUtil"].isPrecheckWithObjects(summary)) {
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].setModalDialogHeight(_component_precheck_pre_check_evacuation_dialog_size__WEBPACK_IMPORTED_MODULE_5__["PreCheckEvacuationDialogSize"].HEIGHT_WITH_OBJECTS);
            }
            else {
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].setModalDialogHeight(_component_precheck_pre_check_evacuation_dialog_size__WEBPACK_IMPORTED_MODULE_5__["PreCheckEvacuationDialogSize"].HEIGHT_WITHOUT_OBJECTS);
            }
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext();
            this.hostMor = context.hostMor;
            this.evacuationEntityUuid = context.objectUid;
            this.entityName = context.objectName;
            this.clusterId = context.clusterId;
            if (context.selectedDecommisionMode) {
                // Dialog is opened from the context of Enter Maintenance Mode and has preselected decommission mode
                // Showing the "Detailed report" dialog here, which doesn't allow changing the selected decommission mode
                this.isDecommissionModeChangeAllowed = false;
                this.primaryTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.detailedReport.title");
                switch (context.selectedDecommisionMode) {
                    case "evacuateAllData":
                        this.decommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__["DecommissionMode"].evacuateAllData;
                        this.secondaryTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.detailedReport.secondaryTitle.fullDataMigration");
                        break;
                    case "ensureObjectAccessibility":
                        this.decommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__["DecommissionMode"].ensureObjectAccessibility;
                        this.secondaryTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.detailedReport.secondaryTitle.ensureAccessibility");
                        break;
                    case "noAction":
                        this.decommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__["DecommissionMode"].noAction;
                        this.secondaryTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.detailedReport.secondaryTitle.noDataMigration");
                        break;
                    default:
                        _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].error("Unknown decommissionMode type passed: " + context.selectedDecommisionMode);
                        break;
                }
            }
            else {
                // Dialog is opened via Disk Management "Pre-check" action
                this.decommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__["DecommissionMode"].ensureObjectAccessibility;
                this.primaryTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.title");
                this.secondaryTitle = this.entityName;
            }
        });
    }
}



/***/ }),

/***/ "idV8":
/*!**********************************************************************!*\
  !*** ./src/app/vsan/common/component/datagrid/filter/base-filter.ts ***!
  \**********************************************************************/
/*! exports provided: BaseFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFilter", function() { return BaseFilter; });
/* harmony import */ var _tree_datagrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree-datagrid */ "zgjC");
/* Copyright 2017-2020 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * Abstract filter class that needs to be extended in order to implement custom filtration.
 * The class has a single abstract method that takes an object of type T and returns its
 * string representation.
 */
class BaseFilter {
    accepts(data, search) {
        // Handle correctly TreeDatagrid components
        if (data instanceof _tree_datagrid__WEBPACK_IMPORTED_MODULE_0__["TreeDatagridRow"]) {
            data = data.data;
        }
        let label = this.stringify(data);
        if (label) {
            // Compare ignoring the case
            return label.toLowerCase().indexOf(search.toLowerCase()) != -1;
        }
        else {
            return false;
        }
    }
    match(data, search) {
        return this.accepts(data, search);
    }
    stringify(data) {
        return data + "";
    }
}



/***/ }),

/***/ "jkFw":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/common/component/inventory/inventory-browser.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InventoryBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryBrowserModule", function() { return InventoryBrowserModule; });
class InventoryBrowserModule {
}



/***/ }),

/***/ "v8iv":
/*!***************************************************************!*\
  !*** ./src/app/vsan/common/component/search/search.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
class SearchModule {
}



/***/ }),

/***/ "zgjC":
/*!*****************************************************************!*\
  !*** ./src/app/vsan/common/component/datagrid/tree-datagrid.ts ***!
  \*****************************************************************/
/*! exports provided: TreeDatagrid, TreeDatagridRow, TreeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDatagrid", function() { return TreeDatagrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDatagridRow", function() { return TreeDatagridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeFilter", function() { return TreeFilter; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* Copyright 2016 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * Hierarchical data provider.
 * This is a additional structure to the Clarity Datagrid that supports hierarchical data rendering.
 */
class TreeDatagrid {
    /**
     * @param childItems lambda for extracting the children of a given data object
     * @param rootItems (optional) the initial data objects
     */
    constructor(childItems, rootItems) {
        this.childItems = childItems;
        /**
         * List of filters to be applied on the data.
         */
        this.filters = [];
        /**
         * Removes all items.
         */
        this.clear = () => this.rootItems = [];
        /**
         * Sets the given data objects as content.
         */
        this.refreshGrid = (rowData) => this.rootItems = rowData;
        this.collapseAll = () => this.rows.forEach(r => this.collapse(r));
        this.expandAll = () => this.rows.forEach(r => this.expand(r));
        this.rootItems = rootItems;
    }
    static forChildProperty(childField, rowData) {
        return new TreeDatagrid(item => item[childField], rowData);
    }
    set rootItems(value) {
        this.roots = value ? value : [];
        this.content = this.flatten(this.roots);
    }
    /**
     * root data objects
     */
    get rootItems() {
        return this.roots;
    }
    /**
     * The flat row structure consisting of the root objects and their children
     * in case the parents are expanded. Sorting and filtering are reflected here.
     */
    get rows() {
        return this.content;
    }
    /**
     * Registers a new filter in the data provider.
     * Initially the filter will accept all items.
     * The consumer can assign a predicate to the TreeFilter object
     * to add filtering rule. All registered filters' predicates are
     * evaluated using AND operator.
     */
    registerFilter() {
        let filter = new TreeFilter(() => this.content = this.flatten(this.rootItems));
        this.filters.push(filter);
        return filter;
    }
    unregisterFilter(value) {
        let index = this.filters.indexOf(value);
        if (index != -1) {
            this.filters.splice(index, 1);
        }
    }
    /**
     * Applies sorting comparator and direction for the data provider.
     */
    sort(comparator, ascending = true) {
        this.comparator = comparator;
        this.sortAscending = ascending;
        // refresh content, will expand all nodes
        this.content = this.flatten(this.rootItems);
    }
    expand(row) {
        if (row.isExpanded) {
            // already expanded
            return;
        }
        let rowIndex = this.content.indexOf(row);
        if (rowIndex == -1) {
            // row is filtered out
            return;
        }
        let flattenedChildren = this.flatten(this.childItems(row.data), row.depth + 1);
        if (flattenedChildren.length > 0) {
            this.content.splice(rowIndex + 1, 0, ...flattenedChildren);
        }
        row.isExpanded = true;
    }
    collapse(row) {
        if (!row.isExpanded) {
            // already collapsed
            row.isExpanded = false;
            return;
        }
        let rowIndex = this.content.indexOf(row);
        if (rowIndex == -1) {
            // row is filtered out
            return;
        }
        let removeCount = 0;
        for (let i = rowIndex + 1; i < this.content.length && row.depth < this.content[i].depth; i++) {
            removeCount++;
        }
        this.content.splice(rowIndex + 1, removeCount);
        row.isExpanded = false;
    }
    // returns flattened list of the specified items and their children (and their children);
    // sorting and filter are applied;
    // items are returned in expanded state
    flatten(items, depth = 0, parent) {
        if (!items) {
            return [];
        }
        let sortedItems = [...items];
        if (this.comparator) {
            sortedItems.sort((item1, item2) => (this.sortAscending ? 1 : -1) * this.comparator(item1, item2));
        }
        let result = [];
        for (let item of sortedItems) {
            let childItems = this.childItems(item);
            // flattened children, including their children
            let children = this.flatten(childItems, depth + 1, item);
            let filteredOut = false;
            for (let filter of this.filters) {
                // filter out items only if the filter is not applicable for the item or it's parent
                const matchFilter = filter.predicate(item) || (!!parent && filter.predicate(parent));
                if (!matchFilter) {
                    filteredOut = true;
                }
            }
            if (!filteredOut || children.length > 0) {
                let row = new TreeDatagridRow();
                row.data = item;
                row.toggle = () => row.isExpanded ? this.collapse(row) : this.expand(row);
                row.depth = depth;
                row.isExpanded = true;
                row.isExpandable = childItems && childItems.length > 0;
                result.push(row, ...children);
            }
        }
        return result;
    }
}
/**
 * Represents a single row in a flattened tree data provider.
 */
class TreeDatagridRow {
}
/**
 * Allows specifying filtering predicate for the data provider.
 * @see TreeDatagrid.registerFilter
 */
class TreeFilter {
    constructor(apply) {
        this.apply = apply;
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.clear();
    }
    clear() {
        this._predicate = (item) => true;
        this.apply();
    }
    set predicate(predicate) {
        if (!predicate) {
            this.clear();
        }
        else {
            this._predicate = predicate;
            this.apply();
        }
    }
    get predicate() {
        return this._predicate;
    }
    // Used by clarity filter
    isActive() {
        return this.changes.getValue();
    }
    // Used by clarity filter
    accepts(val) {
        return true;
    }
}



/***/ })

}]);
//# sourceMappingURL=134-es2015.js.map