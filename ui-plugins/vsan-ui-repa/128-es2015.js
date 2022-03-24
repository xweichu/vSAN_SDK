(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

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

/***/ "2C+1":
/*!******************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/virtual-objects.component.ts ***!
  \******************************************************************/
/*! exports provided: VirtualObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsComponent", function() { return VirtualObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @service/global-refresh.service */ "2U9H");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/logger */ "a0OL");
/* harmony import */ var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @service/screen-reader-announcer.service */ "wnqS");
/* harmony import */ var _service_navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @service/navigation/model/knowledge-base-id */ "9lKY");








let VirtualObjectsComponent = /*@__PURE__*/ (() => {
    class VirtualObjectsComponent {
        constructor(service, diskMgmtService, capabilityProvider, changeDetector) {
            this.service = service;
            this.diskMgmtService = diskMgmtService;
            this.capabilityProvider = capabilityProvider;
            this.changeDetector = changeDetector;
            this.KnowledgeBaseId = _service_navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_7__["KnowledgeBaseId"];
            this.virtualObjectsloading = true;
            // Enable Enums for direct use in html template.
            this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
            this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"];
            this.objectIdentitiesSupported = false;
            this.capabilityCheckLoading = true;
        }
        ngOnInit() {
            this.fetch();
        }
        fetch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.preselectContextData();
                yield this.getCapabilities();
                if (!this.objectIdentitiesSupported) {
                    return;
                }
                // Start loading the virtual objects data
                try {
                    this.virtualObjectsloading = true;
                    const clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_3__["ManagedObject"].contextObject;
                    [this.allItems, this.showWarning] = yield Promise.all([
                        this.service.listVirtualObjects(clusterRef, null),
                        this.diskMgmtService.hasNetworkPartitionsOrDisconnectedMembers(clusterRef),
                    ]);
                    this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.screenReader.message.page.loaded", _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.virtualObjects"));
                }
                catch (error) {
                    this.handleDataError(error);
                }
                finally {
                    this.virtualObjectsloading = false;
                    this.changeDetector.detectChanges();
                }
            });
        }
        preselectContextData() {
            const context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getNavigationData();
            if (context) {
                this.presentVirtualObjectUuids = context.presentVirtualObjectUuids;
                this.initialNameFilter = context.filterName;
                this.initialFilteredTypes = context.filterTypes;
                this.initialFilteredHealthStates = context.filterHealthStates;
            }
            else {
                this.presentVirtualObjectUuids = null;
                this.initialNameFilter = null;
                this.initialFilteredTypes = null;
                this.initialFilteredHealthStates = null;
            }
        }
        getCapabilities() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.capabilityCheckLoading = true;
                try {
                    this.objectIdentitiesSupported = yield this.capabilityProvider
                        .getIsObjectIdentitiesSupportedOnCluster(_service_managed_object__WEBPACK_IMPORTED_MODULE_3__["ManagedObject"].contextObject);
                }
                catch (error) {
                    this.handleDataError(error);
                }
                this.capabilityCheckLoading = false;
            });
        }
        handleDataError(error) {
            _util_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].debug("Error loading virtual objects data: " + error);
            this.generalError = error;
        }
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_6__["ScreenReaderAnnouncer"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], VirtualObjectsComponent.prototype, "srOnlyMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_4__["RefreshHandler"],
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], VirtualObjectsComponent.prototype, "fetch", null);
    return VirtualObjectsComponent;
})();



/***/ }),

/***/ "9lKY":
/*!***************************************************************************!*\
  !*** ./src/app/vsan/common/service/navigation/model/knowledge-base-id.ts ***!
  \***************************************************************************/
/*! exports provided: KnowledgeBaseId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseId", function() { return KnowledgeBaseId; });
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * IDs used in external KB link navigation
 */
var KnowledgeBaseId = /*@__PURE__*/ (function (KnowledgeBaseId) {
    KnowledgeBaseId["PRECHECK_PCP"] = "83954";
    KnowledgeBaseId["VIRTUAL_OBJECTS"] = "2108319";
    KnowledgeBaseId["UPGRADE"] = "2148493";
    KnowledgeBaseId["PERFORMANCE_DIAGNOSTICS"] = "2148770";
    KnowledgeBaseId["SUPPORT_INSIGHT"] = "60206";
    return KnowledgeBaseId;
})({});



/***/ }),

/***/ "A5CE":
/*!***************************************************!*\
  !*** ./src/app/vsan/common/util/modal-builder.ts ***!
  \***************************************************/
/*! exports provided: ModalBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBuilder", function() { return ModalBuilder; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "a0OL");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform */ "RrEr");
/* harmony import */ var _vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vsan-util */ "UODZ");
/* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */





let ModalBuilder = /*@__PURE__*/ (() => {
    class ModalBuilder {
        constructor(appId) {
            this.appId = appId;
            this.size = ModalBuilder.DEFAULT_SIZE;
            // When null, the modal dialog will be headless and the docked
            // view is expected to provide a title bar.
            this.title = null;
            this.accessibilityTitle = null;
            this.urlParams = {};
        }
        setDimensions(dimensions) {
            if (!dimensions || dimensions.length !== 2) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("invalid modal dimensions", dimensions);
                dimensions = ModalBuilder.DEFAULT_SIZE;
            }
            return this.setSize(dimensions[ModalBuilder.WIDTH], dimensions[ModalBuilder.HEIGHT]);
        }
        setSize(width, height) {
            this.size = [width, height];
            return this;
        }
        setUrlParameters(params) {
            this.urlParams = params;
            return this;
        }
        /**
         * Set to null if the view provides its own title bar
         */
        setTitle(title) {
            this.title = title;
            return this;
        }
        setAccessibilityTitle(accessibilityTitle) {
            this.accessibilityTitle = accessibilityTitle;
            return this;
        }
        /**
         * Set explicit event target if it is changed before opening the modal.
         * For example when making a preceding request the event target is the XMLHttpRequest object.
         */
        setEventTarget(eventTarget) {
            this.eventTarget = eventTarget;
            return this;
        }
        /**
         * Opens a modal dialog and returns a promise to collect the result; On close the target element is focused.
         * @param context - any JS data object, can be retrieved by WebPlatform.getModalContext()
         * @returns {Promise<any>} - Invoked if the dialog invokes WebPlatform.closeModalDialog(arg)
         *       with non-null arg. The promise is never rejected.
         */
        open(context) {
            return new Promise((accept) => {
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement = this.eventTarget ? this.eventTarget :
                    (event && event.target ? event.target : null);
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler = (data) => {
                    if (typeof data !== "undefined") {
                        // Deep copy of the object was required to resolve an issue with object's prototype overriding when
                        // passing complex objects in IE11/Edge; Keep it for safety.
                        accept(JSON.parse(JSON.stringify(data)));
                    }
                    else if (_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement && _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus) {
                        // On cancel just focus the target element. Timeout is required as otherwise the focus may be
                        // consumed by the mouse click.
                        setTimeout(() => _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus(), 100);
                    }
                };
                let actionUrl = `${ModalBuilder.APP_URL}?viewId=${this.appId}`;
                let separator = "?";
                for (const param in this.urlParams) {
                    actionUrl += separator + param + "=" + this.urlParams[param];
                    separator = "&";
                }
                _platform__WEBPACK_IMPORTED_MODULE_3__["WebPlatform"].openModalDialog(this.title, actionUrl, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObjectUid, this.size[0], this.size[1], this.title != null, _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler /* onClose */, context /* retrieve with Platform.getModalContext() */, this.accessibilityTitle);
            });
        }
    }
    ModalBuilder.WIDTH = 0;
    ModalBuilder.HEIGHT = 1;
    ModalBuilder.DEFAULT_SIZE = [1000, 530];
    ModalBuilder.WIZARD_XL = [1200, 700];
    ModalBuilder.APP_URL = (_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repa && _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repaExtension)
        ? "index.html"
        : "/ui/h5-vsan-ui/";
    return ModalBuilder;
})();



/***/ }),

/***/ "Ax3R":
/*!******************************************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/view/placement-details-dialog.component.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RenderType_PlacementDetailsDialogComponent, View_PlacementDetailsDialogComponent_0, View_PlacementDetailsDialogComponent_Host_0, PlacementDetailsDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PlacementDetailsDialogComponent", function() { return RenderType_PlacementDetailsDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsDialogComponent_0", function() { return View_PlacementDetailsDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsDialogComponent_Host_0", function() { return View_PlacementDetailsDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementDetailsDialogComponentNgFactory", function() { return PlacementDetailsDialogComponentNgFactory; });
/* harmony import */ var _placement_details_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placement-details-dialog.scss.shim.ngstyle */ "abBW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/validation/validation.component.ngfactory */ "fdDr");
/* harmony import */ var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/validation/validation.component */ "ie44");
/* harmony import */ var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/pipe/LocalizationPipe */ "jOVY");
/* harmony import */ var _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/dialog/prompt/prompt-info.component.ngfactory */ "ltW2");
/* harmony import */ var _common_component_dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/component/dialog/prompt/prompt-info.component */ "1jjW");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _common_component_placement_details_placement_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component/placement-details/placement-details.component.ngfactory */ "r2Mv");
/* harmony import */ var _common_component_placement_details_placement_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component/placement-details/placement-details.component */ "5I9o");
/* harmony import */ var _generated_physical_placement_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../generated/physical-placement-service */ "oAEp");
/* harmony import */ var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generated/vsan-config-service */ "UKIB");
/* harmony import */ var _placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./placement-details-dialog.component */ "dpey");
/* harmony import */ var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../generated/disk-management-service */ "a6dL");
/* harmony import */ var _generated_virtual_objects_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../generated/virtual-objects-service */ "1X12");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
















var styles_PlacementDetailsDialogComponent = [_placement_details_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PlacementDetailsDialogComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PlacementDetailsDialogComponent, data: {} });

function View_PlacementDetailsDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "host-netowrk-partitioning-warning"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], { alertType: [0, "alertType"], alert: [1, "alert"], allowClose: [2, "allowClose"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_0 = "warning"; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.virtualDisks.networkPartitionLabel")); var currVal_2 = false; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_PlacementDetailsDialogComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "vsan-info-prompt", [], null, [[null, "alertMessageChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("alertMessageChange" === en)) {
                var pd_0 = ((_co.error = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_InfoPrompt_0"], _common_component_dialog_prompt_prompt_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_InfoPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]], { title: [0, "title"], subtitle: [1, "subtitle"], alertMessage: [2, "alertMessage"] }, { alertMessageChange: "alertMessageChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 8, "div", [["class", "dialog-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "vsan-placement-details", [], null, null, null, _common_component_placement_details_placement_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_PlacementDetailsComponent_0"], _common_component_placement_details_placement_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_PlacementDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, null, 0, _common_component_placement_details_placement_details_component__WEBPACK_IMPORTED_MODULE_10__["PlacementDetailsComponent"], [_generated_physical_placement_service__WEBPACK_IMPORTED_MODULE_11__["PhysicalPlacementService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_12__["VsanConfigService"]], { isGrouped: [0, "isGrouped"], loadingObjects: [1, "loadingObjects"], selectedVirtualObjects: [2, "selectedVirtualObjects"], virtualObjects: [3, "virtualObjects"], clusterRef: [4, "clusterRef"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.title")); var currVal_1 = _co.subtitle; var currVal_2 = _co.error; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.hasNetworkPartitioning; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.isGrouped; var currVal_5 = _co.virtualObjectsLoading; var currVal_6 = _co.selectedVirtualObjects; var currVal_7 = _co.virtualObjects; var currVal_8 = _co.clusterRef; _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, null);
}
function View_PlacementDetailsDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-placement-details-dialog", [], null, null, null, View_PlacementDetailsDialogComponent_0, RenderType_PlacementDetailsDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PlacementDetailsDialogComponent"], [_generated_disk_management_service__WEBPACK_IMPORTED_MODULE_14__["DiskManagementService"], _generated_virtual_objects_service__WEBPACK_IMPORTED_MODULE_15__["VirtualObjectsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PlacementDetailsDialogComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-placement-details-dialog", _placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PlacementDetailsDialogComponent"], View_PlacementDetailsDialogComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "CqnQ":
/*!***************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/virtual-objects.module.ts ***!
  \***************************************************************/
/*! exports provided: VirtualObjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsModule", function() { return VirtualObjectsModule; });
/* harmony import */ var _virtual_objects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-objects.component */ "2C+1");
/* harmony import */ var _view_placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/placement-details-dialog.component */ "dpey");


const routes = [
    {
        path: "",
        component: _virtual_objects_component__WEBPACK_IMPORTED_MODULE_0__["VirtualObjectsComponent"],
    },
    {
        path: "physicalPlacementDialog",
        component: _view_placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__["PlacementDetailsDialogComponent"],
    },
];
class VirtualObjectsModule {
}



/***/ }),

/***/ "Ju17":
/*!*********************************************************************************************!*\
  !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-group-common.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: ClrButtonGroupCommonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrButtonGroupCommonDirective", function() { return ClrButtonGroupCommonDirective; });
/**
 * Applies on every clr-button-group and help to link the clr-button with directive applieds on it,  which extends
 * {@link ClrButtonBaseDirective}, to the actual rendered html button.
 */
class ClrButtonGroupCommonDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            const allButtons = this.elRef.nativeElement.querySelectorAll("button");
            // match button with clrButton and notify directives
            this.clrButtons.filter(clrButton => !!clrButton.directives)
                .forEach((clrButton, index) => {
                const buttonFound = this.findButtonByName(clrButton.name, allButtons);
                if (buttonFound) {
                    clrButton.directives.forEach(directive => {
                        directive.resolveButton(clrButton, buttonFound, index);
                    });
                }
            });
        });
    }
    findButtonByName(name, buttons) {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons.item(i).name === name) {
                return buttons.item(i);
            }
        }
        return null;
    }
}



/***/ }),

/***/ "NvCx":
/*!************************************************************************!*\
  !*** ./src/app/vsan/performance/model/perf-monitor-view-type.model.ts ***!
  \************************************************************************/
/*! exports provided: PerfMonitorViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfMonitorViewType", function() { return PerfMonitorViewType; });
/* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */
var PerfMonitorViewType = /*@__PURE__*/ (function (PerfMonitorViewType) {
    // Cluster
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_VM_CONSUMPTION"] = 0] = "CLUSTER_VM_CONSUMPTION";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION"] = 1] = "CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_VM_REMOTE_CONSUMPTION"] = 2] = "CLUSTER_VM_REMOTE_CONSUMPTION";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_BACKEND"] = 3] = "CLUSTER_BACKEND";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_ISCSI"] = 4] = "CLUSTER_ISCSI";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_FILE_SERVICE"] = 5] = "CLUSTER_FILE_SERVICE";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_IO_INSIGHT"] = 6] = "CLUSTER_IO_INSIGHT";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_PMEM"] = 7] = "CLUSTER_PMEM";
    PerfMonitorViewType[PerfMonitorViewType["CLUSTER_VSAN_DIRECT"] = 8] = "CLUSTER_VSAN_DIRECT";
    // Host
    PerfMonitorViewType[PerfMonitorViewType["HOST_VM_CONSUMPTION"] = 9] = "HOST_VM_CONSUMPTION";
    PerfMonitorViewType[PerfMonitorViewType["HOST_BACKEND"] = 10] = "HOST_BACKEND";
    PerfMonitorViewType[PerfMonitorViewType["HOST_DISK"] = 11] = "HOST_DISK";
    PerfMonitorViewType[PerfMonitorViewType["HOST_PHYSICAL_ADAPTER"] = 12] = "HOST_PHYSICAL_ADAPTER";
    PerfMonitorViewType[PerfMonitorViewType["HOST_VIRTUAL_ADAPTER"] = 13] = "HOST_VIRTUAL_ADAPTER";
    PerfMonitorViewType[PerfMonitorViewType["HOST_ISCSI"] = 14] = "HOST_ISCSI";
    PerfMonitorViewType[PerfMonitorViewType["HOST_IO_INSIGHT"] = 15] = "HOST_IO_INSIGHT";
    PerfMonitorViewType[PerfMonitorViewType["HOST_VSAN_DIRECT"] = 16] = "HOST_VSAN_DIRECT";
    PerfMonitorViewType[PerfMonitorViewType["HOST_PMEM"] = 17] = "HOST_PMEM";
    // Virtual Machine
    PerfMonitorViewType[PerfMonitorViewType["VM_CONSUMPTION"] = 18] = "VM_CONSUMPTION";
    PerfMonitorViewType[PerfMonitorViewType["VM_VIRTUAL_DISK"] = 19] = "VM_VIRTUAL_DISK";
    return PerfMonitorViewType;
})({});



/***/ }),

/***/ "a02k":
/*!*************************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/virtual-objects.module.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: VirtualObjectsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsModuleNgFactory", function() { return VirtualObjectsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _virtual_objects_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-objects.module */ "CqnQ");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/directive/show-title/clipboard-icon.component.ngfactory */ "1zpS");
/* harmony import */ var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */ "No7X");
/* harmony import */ var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */ "bIR2");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */ "Wfa3");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */ "PBGP");
/* harmony import */ var _virtual_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./virtual-objects.component.ngfactory */ "ub+y");
/* harmony import */ var _view_placement_details_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/placement-details-dialog.component.ngfactory */ "Ax3R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../generated/witness-candidate-inventory-service */ "96pA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/service/client/vpxd/vpxd-property-collector-client.service */ "L7/z");
/* harmony import */ var _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/service/client/vsan/vsan-vc-config-system.service */ "yGTn");
/* harmony import */ var _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/service/client/vpxd/vpxd-model-factory.service */ "VM2Y");
/* harmony import */ var _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/service/client/vsan/vsan-model-factory.service */ "gswu");
/* harmony import */ var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/service/client/dataservice/data-service.service */ "QIo8");
/* harmony import */ var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../generated/datacenter-inventory-service */ "uoMP");
/* harmony import */ var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../generated/network-inventory-service */ "Ot8i");
/* harmony import */ var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../generated/compute-inventory-service */ "+xjW");
/* harmony import */ var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../generated/io-insight-inventory-service */ "fhiF");
/* harmony import */ var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../generated/vsan-inventory-helper */ "2HhS");
/* harmony import */ var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../generated/io-insight-service */ "lBrK");
/* harmony import */ var _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../common/service/client/vsan/capability-system/vsan-capability.service */ "jAET");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-pick-datetime/dialog/dialog.service */ "Tq4R");
/* harmony import */ var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time-picker-intl.service */ "rAFq");
/* harmony import */ var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../common/component/datetime-picker/localize-picker-labels */ "EUIg");
/* harmony import */ var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time-picker.component */ "4D9t");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */ "bMPK");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */ "UiI2");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../common/component/virtual-objects-table/virtual-objects-table.service */ "LAuz");
/* harmony import */ var _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../common/component/virtual-objects-table/virtual-objects-table-state.service */ "eh32");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _common_component_virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../common/component/virtual-objects-table/actions/validation/virtual-objects-action-availability.service */ "Kdx0");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../common/pipe/common-pipe.module */ "yVHT");
/* harmony import */ var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../common/directive/common-directive.module */ "uf8S");
/* harmony import */ var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../common/component/validation/validation.module */ "90Ln");
/* harmony import */ var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../common/component/action-button/action-button.module */ "wQOa");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../common/component/dialog/prompt/prompt.module */ "usKm");
/* harmony import */ var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../common/component/cell/common-cells.module */ "e724");
/* harmony import */ var _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../common/component/search/search.module */ "v8iv");
/* harmony import */ var _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../common/component/inventory/inventory-browser.module */ "jkFw");
/* harmony import */ var _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../common/component/datagrid/tree-datagrid.module */ "6BUe");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-pick-datetime/dialog/dialog.module */ "jRYl");
/* harmony import */ var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time.module */ "KL2N");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time.module */ "QX+E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../common/component/datetime-picker/datetime-picker.module */ "UaEa");
/* harmony import */ var _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../common/component/popup-list/popup-list.module */ "JCZN");
/* harmony import */ var _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../common/component/navigation/vsan-breadcrumb.module */ "U2P7");
/* harmony import */ var _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../common/vsan-common.module */ "uDMx");
/* harmony import */ var _common_component_export_export_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../common/component/export/export.module */ "wi+p");
/* harmony import */ var _common_component_virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../common/component/virtual-objects-table/virtual-objects-table.module */ "ktFr");
/* harmony import */ var _common_component_placement_details_placement_details_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../common/component/placement-details/placement-details.module */ "zpoR");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-format.class */ "EFU/");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */ "vRnr");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */ "oRW+");
/* harmony import */ var _virtual_objects_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./virtual-objects.component */ "2C+1");
/* harmony import */ var _view_placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./view/placement-details-dialog.component */ "dpey");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */






































































var VirtualObjectsModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_virtual_objects_module__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_lNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DeleteRangeConfirmDialogComponentNgFactory"], _virtual_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["VirtualObjectsComponentNgFactory"], _view_placement_details_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["PlacementDetailsDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_14__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_14__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_16__["VpxdPropertyCollectorClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_17__["VsanVcClusterConfigSystem"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_19__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_20__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_21__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_21__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_16__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_20__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_22__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_22__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_16__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_20__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_23__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_23__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_16__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_20__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_24__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_24__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_16__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_18__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_19__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_20__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_25__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_26__["IoInsightService"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_27__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_30__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_32__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_33__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_33__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_34__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_35__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_34__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_37__["VirtualObjectsTableService"], _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_37__["VirtualObjectsTableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_38__["VirtualObjectsTableStateService"], _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_38__["VirtualObjectsTableStateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_39__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_39__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_40__["VirtualObjectsActionAvailabilityService"], _common_component_virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_40__["VirtualObjectsActionAvailabilityService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_41__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_42__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_42__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_43__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_43__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_44__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_44__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_45__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_45__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_47__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_47__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_48__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_48__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_49__["SearchModule"], _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_49__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_50__["InventoryBrowserModule"], _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_50__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_51__["TreeDatagridModule"], _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_51__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_53__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_53__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_53__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_53__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_54__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_54__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_55__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_55__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_56__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_56__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_56__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_56__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_57__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_57__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_57__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_57__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_58__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_58__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_59__["PopupListModule"], _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_59__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_60__["VsanBreadcrumbModule"], _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_60__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_61__["VsanCommonModule"], _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_61__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_export_export_module__WEBPACK_IMPORTED_MODULE_62__["ExportModule"], _common_component_export_export_module__WEBPACK_IMPORTED_MODULE_62__["ExportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_63__["VirtualObjectsTableModule"], _common_component_virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_63__["VirtualObjectsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_placement_details_placement_details_module__WEBPACK_IMPORTED_MODULE_64__["PlacementDetailsModule"], _common_component_placement_details_placement_details_module__WEBPACK_IMPORTED_MODULE_64__["PlacementDetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _virtual_objects_module__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectsModule"], _virtual_objects_module__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_41__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_65__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_58__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_57__["ROUTES"], function () { return [[{ path: "addTimeRange", component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_66__["AddTimeRangeDialogComponent"] }, { path: "deleteTimeRange", component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_67__["DeleteRangeConfirmDialogComponent"] }], [{ path: "", component: _virtual_objects_component__WEBPACK_IMPORTED_MODULE_68__["VirtualObjectsComponent"] }, { path: "physicalPlacementDialog", component: _view_placement_details_dialog_component__WEBPACK_IMPORTED_MODULE_69__["PlacementDetailsDialogComponent"] }]]; }, [])]); });




/***/ }),

/***/ "abBW":
/*!****************************************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/view/placement-details-dialog.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = [".dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.dialog-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.dialog-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.dialog-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi92aXJ0dWFsb2JqZWN0cy92aWV3L3BsYWNlbWVudC1kZXRhaWxzLWRpYWxvZy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vdmlydHVhbG9iamVjdHMvdmlldy9wbGFjZW1lbnQtZGV0YWlscy1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuLmRpYWxvZy1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];




/***/ }),

/***/ "cq5S":
/*!**************************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/virtual-objects.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi92aXJ0dWFsb2JqZWN0cy92aXJ0dWFsLW9iamVjdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUhrREc7RUFDRyxnQ0FBQTtBRmpDTjtBRW1DRzs7RUFHRyxnQ0FBQTtBRmxDTjtBRW9DRztFQUNHLDhCQUFBO0FGbENOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi92aXJ0dWFsb2JqZWN0cy92aXJ0dWFsLW9iamVjdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIwIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdHtcbiAgIC8vIFRvcCBsZXZlbCB2aWV3cyBpbmhlcml0IHRoZWlyIGRpc3BsYXkgc3R5bGVzIGZyb20gdnNhbi1yb290LWFwcFxuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];




/***/ }),

/***/ "dpey":
/*!********************************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/view/placement-details-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlacementDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementDetailsDialogComponent", function() { return PlacementDetailsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/virtual-objects-table/virtual-objects-type.util */ "wjnQ");
/* harmony import */ var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/flow/error-message.decorator */ "puuD");
/* harmony import */ var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service/flow/loader.decorator */ "8V30");
/* harmony import */ var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @service/flow/loading-indicator.decorator */ "2BwX");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @service/screen-reader-announcer.service */ "wnqS");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");








let PlacementDetailsDialogComponent = /*@__PURE__*/ (() => {
    class PlacementDetailsDialogComponent {
        constructor(diskMgmtService, virtualObjectService) {
            this.diskMgmtService = diskMgmtService;
            this.virtualObjectService = virtualObjectService;
            this.virtualObjects = [];
            this.selectedVirtualObjects = [];
            this.isGrouped = false;
            this.selectedVirtualMachines = [];
            this.handleVirtualObjects = (result) => {
                if (!result) {
                    return;
                }
                this.virtualObjects = this.filterVMs(result);
                this.selectedVirtualObjects = this.getSelectedVirtualObjects();
            };
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // Modal window - get the data from modal context
                const context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].getModalContext();
                this.clusterRef = context.clusterRef;
                this.virtualObjects = context.virtualObjects;
                this.selectedVirtualObjects = context.selectedVirtualObjects;
                this.isGrouped = context.isGrouped;
                this.selectedVirtualMachines = context.selectedVirtualMachines;
                yield this.loadData();
                this.updateSubTitle();
            });
        }
        loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const promises = [];
                if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].isEmpty(this.virtualObjects)) {
                    const listVirtualObjectsPromise = this.virtualObjectService
                        .listVirtualObjects(this.clusterRef, [])
                        .then(result => this.handleVirtualObjects(result));
                    promises.push(listVirtualObjectsPromise);
                }
                const hadNetworkPartitionsPromise = this.diskMgmtService
                    .hasNetworkPartitionsOrDisconnectedMembers(this.clusterRef)
                    .then(result => this.hasNetworkPartitioning = result);
                promises.push(hadNetworkPartitionsPromise);
                yield Promise.all(promises);
            });
        }
        filterVMs(virtualObjects) {
            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].isEmpty(this.selectedVirtualMachines)) {
                return virtualObjects.filter(virtualObject => this.selectedVirtualMachines
                    .some(selectedVM => _service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObject"].areEqual(selectedVM, virtualObject.vmRef)));
            }
            return virtualObjects;
        }
        getSelectedVirtualObjects() {
            const result = [];
            for (const virtualObject of this.virtualObjects) {
                if (!!virtualObject.children) {
                    result.push(...virtualObject.children);
                }
            }
            return result;
        }
        updateSubTitle() {
            if (this.selectedVirtualObjects.length === 1) {
                this.subtitle = _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectsTypeUtil"].getDisplayName(this.selectedVirtualObjects[0]);
            }
            else {
                this.subtitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.subtitle", this.selectedVirtualObjects.length);
            }
        }
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicator"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], PlacementDetailsDialogComponent.prototype, "virtualObjectsLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], PlacementDetailsDialogComponent.prototype, "error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])({
            srMessage: "vsan.monitor.cluster.virtualObjects.action.viewDetails.title",
            srMessageType: _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_6__["SrMessageType"].PAGE_TITLE,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], PlacementDetailsDialogComponent.prototype, "loadData", null);
    return PlacementDetailsDialogComponent;
})();



/***/ }),

/***/ "ub+y":
/*!****************************************************************************!*\
  !*** ./src/app/vsan/virtualobjects/virtual-objects.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_VirtualObjectsComponent, View_VirtualObjectsComponent_0, View_VirtualObjectsComponent_Host_0, VirtualObjectsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VirtualObjectsComponent", function() { return RenderType_VirtualObjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VirtualObjectsComponent_0", function() { return View_VirtualObjectsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VirtualObjectsComponent_Host_0", function() { return View_VirtualObjectsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsComponentNgFactory", function() { return VirtualObjectsComponentNgFactory; });
/* harmony import */ var _virtual_objects_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-objects.scss.shim.ngstyle */ "cq5S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/component/validation/validation.component.ngfactory */ "fdDr");
/* harmony import */ var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/component/validation/validation.component */ "ie44");
/* harmony import */ var _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/directive/external-link/external-link.directive */ "tsUx");
/* harmony import */ var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/service/navigation/navigation.service */ "Qw2S");
/* harmony import */ var _common_component_virtual_objects_table_virtual_objects_filterable_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/component/virtual-objects-table/virtual-objects-filterable-table.component.ngfactory */ "YPQJ");
/* harmony import */ var _common_component_virtual_objects_table_virtual_objects_filterable_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/component/virtual-objects-table/virtual-objects-filterable-table.component */ "O+sl");
/* harmony import */ var _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/component/virtual-objects-table/virtual-objects-table.service */ "LAuz");
/* harmony import */ var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/pipe/LocalizationPipe */ "jOVY");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/directive/reactive-forms/autofocus-control.directive */ "KYLT");
/* harmony import */ var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/service/task-monitor-service */ "81c+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _virtual_objects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./virtual-objects.component */ "2C+1");
/* harmony import */ var _generated_virtual_objects_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../generated/virtual-objects-service */ "1X12");
/* harmony import */ var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../generated/disk-management-service */ "a6dL");
/* harmony import */ var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../generated/vsan-capability-provider */ "y/yc");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */


















var styles_VirtualObjectsComponent = [_virtual_objects_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_VirtualObjectsComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_VirtualObjectsComponent, data: {} });

function View_VirtualObjectsComponent_1(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "validation-message"]], null, [[null, "onReload"], [null, "onClosed"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onReload" === en)) {
                var pd_0 = (_co.fetch() !== false);
                ad = (pd_0 && ad);
            }
            if (("onClosed" === en)) {
                var pd_1 = ((_co.generalError = null) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], { alert: [0, "alert"], allowReload: [1, "allowReload"] }, { onClosed: "onClosed", onReload: "onReload" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.generalError; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); }, null);
}
function View_VirtualObjectsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "host-error"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], { alertType: [0, "alertType"], alert: [1, "alert"], allowClose: [2, "allowClose"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = "warning"; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.virtualDisks.networkPartitionLabel")); var currVal_2 = false; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_VirtualObjectsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_4__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], [8, null]], { anchorText: [0, "anchorText"], articleId: [1, "articleId"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "vsan-virtual-objects-filterable-table", [["id", "virtual-objects-table"]], null, null, null, _common_component_virtual_objects_table_virtual_objects_filterable_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_VirtualObjectsFilterableTableComponent_0"], _common_component_virtual_objects_table_virtual_objects_filterable_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_VirtualObjectsFilterableTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _common_component_virtual_objects_table_virtual_objects_filterable_table_component__WEBPACK_IMPORTED_MODULE_7__["VirtualObjectsFilterableTableComponent"], [_common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_8__["VirtualObjectsTableService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { virtualObjects: [0, "virtualObjects"], initialFilteredHealthStates: [1, "initialFilteredHealthStates"], initiallyFilteredName: [2, "initiallyFilteredName"], initiallyFilteredTypes: [3, "initiallyFilteredTypes"], presentVirtualObjectUuids: [4, "presentVirtualObjectUuids"], loading: [5, "loading"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.link")); var currVal_2 = _co.KnowledgeBaseId.VIRTUAL_OBJECTS; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_3 = _co.allItems; var currVal_4 = _co.initialFilteredHealthStates; var currVal_5 = _co.initialNameFilter; var currVal_6 = _co.initialFilteredTypes; var currVal_7 = _co.presentVirtualObjectUuids; var currVal_8 = _co.virtualObjectsloading; _ck(_v, 11, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.header")); _ck(_v, 3, 0, currVal_0); }); }
function View_VirtualObjectsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner central-spinner"]], null, null, null, null, null))], null, null); }
function View_VirtualObjectsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "bold-no-selection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.objectIdentitiesNotSupported")); _ck(_v, 1, 0, currVal_0); }); }
function View_VirtualObjectsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "h5", [["vsan-auto-focus", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_11__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_12__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__["ReferenceWatcher"]], { appAutoFocus: [0, "appAutoFocus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ""; _ck(_v, 4, 0, currVal_0); var currVal_2 = _co.generalError; _ck(_v, 9, 0, currVal_2); var currVal_3 = (!_co.generalError && _co.showWarning); _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.objectIdentitiesSupported; _ck(_v, 15, 0, currVal_4); var currVal_5 = _co.capabilityCheckLoading; _ck(_v, 18, 0, currVal_5); var currVal_6 = (!_co.capabilityCheckLoading && !_co.objectIdentitiesSupported); _ck(_v, 22, 0, currVal_6); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.virtualObjects")); _ck(_v, 5, 0, currVal_1); }); }
function View_VirtualObjectsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-virtual-objects", [], null, null, null, View_VirtualObjectsComponent_0, RenderType_VirtualObjectsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _virtual_objects_component__WEBPACK_IMPORTED_MODULE_14__["VirtualObjectsComponent"], [_generated_virtual_objects_service__WEBPACK_IMPORTED_MODULE_15__["VirtualObjectsService"], _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_16__["DiskManagementService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_17__["VsanCapabilityProvider"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VirtualObjectsComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-virtual-objects", _virtual_objects_component__WEBPACK_IMPORTED_MODULE_14__["VirtualObjectsComponent"], View_VirtualObjectsComponent_Host_0, {}, {}, []);




/***/ })

}]);
//# sourceMappingURL=128-es2015.js.map