(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "+W3v":
/*!*******************************************************************!*\
  !*** ./src/app/vsan/common/service/witness-validation.service.ts ***!
  \*******************************************************************/
/*! exports provided: WitnessValidationService, WitnessHostValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WitnessValidationService", function() { return WitnessValidationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WitnessHostValidation", function() { return WitnessHostValidation; });
/* harmony import */ var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/validation/alert-type */ "4KIt");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");


/**
 * Provides validation for a selected witness host.
 */
class WitnessValidationService {
    handleSharedWitnessHostValidationResult(hostValidationData) {
        return this.handleHostValidationResult(hostValidationData, null, true);
    }
    handleSingleClusterWitnessValidationResult(hostValidationData, vsanConfig) {
        return this.handleHostValidationResult(hostValidationData, vsanConfig, false);
    }
    /**
     * Returns a single host level validation result.
     * @param hostValidationData - The java side validation result
     * @param vsanConfig - Contains the cluster's config. Used in single cluster scenarios like configure vSAN or HCI
     * @param aggregateClusterErrors - Whether to report the cluster level errors as a host level error or return an
     * aggregated error message.
     * This is needed in shared witness scenarios, in order to show a general error message at the top of the page.
     * We already show the per cluster error in the validation grid, so there is no information hiding.
     * In the single cluster scenarios we show the cluster error from backend as it is more informative.
     */
    handleHostValidationResult(hostValidationData, vsanConfig, aggregateClusterErrors) {
        // First check the basics: is a connected host, is not in mm, has configured nic, etc.
        let validationMessages = this.validateWitnessCandidate(hostValidationData);
        if (validationMessages) {
            return validationMessages;
        }
        // If all looks good, check if the shared witness host validation has passed
        validationMessages = this.validateSharedWitnessHost(hostValidationData, vsanConfig, aggregateClusterErrors);
        if (validationMessages) {
            return validationMessages;
        }
        // Validate some conditions, to be reported as warnings
        validationMessages = this.validateWarningConditions(hostValidationData.isEncrypted);
        if (validationMessages) {
            return validationMessages;
        }
        // Validate some minor conditions reported as infos
        if (hostValidationData.vLCMToBeDisabled) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].INFO, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.sharedWitness.assign.vLCM.warning")]);
        }
        // All is good, return validation success
        return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].SUCCESS, [
            _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.compatibleHostState"),
        ]);
    }
    // Checks the basic host properties, such as connection state, powered state, etc..
    validateWitnessCandidate(hostValidationResult) {
        if (hostValidationResult.isHostInTheSameCluster) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.internalHostSelectedError"),
            ]);
        }
        else if (hostValidationResult.isHostInVsanEnabledCluster) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.hostInVsanEnabledCluster"),
            ]);
        }
        else if (hostValidationResult.isHostDisconnected) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.disconnectedHostState"),
            ]);
        }
        else if (!hostValidationResult.isPoweredOn) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.notPoweredOnHostState"),
            ]);
        }
        else if (hostValidationResult.isHostInMaintenanceMode) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.maintenanceModeHostState"),
            ]);
        }
        else if (!hostValidationResult.hasVsanEnabledNic) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.noVsanNicEnabledOnHost"),
            ]);
        }
        else if (!hostValidationResult.isVsanMaxCompatible) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.vsanMax.hostNotSupported"),
            ]);
        }
        return null;
    }
    validateSharedWitnessHost(hostValidationData, vsanConfig, aggregateClusterErrors) {
        if (hostValidationData.isWitnessHost && !hostValidationData.isStretchedClusterSupported) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.featureNotSupportedOnHost"),
            ]);
        }
        if (hostValidationData.witnessValidationResult) {
            // Check if any API validation errors are returned for the witness host
            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(hostValidationData.witnessValidationResult.witnessHostValidationErrors)) {
                return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, hostValidationData.witnessValidationResult.witnessHostValidationErrors);
            }
            // Check if any API validation errors are returned for the clusters. Aggregate them to a single host error
            if (hostValidationData.witnessValidationResult.clustersValidation) {
                const clusterValidationResults = Object.values(hostValidationData.witnessValidationResult.clustersValidation);
                const clusterValidationError = clusterValidationResults
                    .find(result => !result.compatible);
                if (clusterValidationError) {
                    if (aggregateClusterErrors) {
                        return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [
                            _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.host.sharedWitness.reassign.wizard.selectClusters.validation.incompatibleClusters"),
                        ]);
                    }
                    else {
                        return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [clusterValidationError.validationMessage]);
                    }
                }
            }
        }
        // RDMA is not supported when shared witness host is used
        if ((vsanConfig === null || vsanConfig === void 0 ? void 0 : vsanConfig.enableRdma) && hostValidationData.isWitnessHost) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.sharedWitness.assign.rdma.error")]);
        }
        // Finally check that if a shared witness host (which don't support DIT) is used when the DiT encryption is
        // enabled
        if ((vsanConfig === null || vsanConfig === void 0 ? void 0 : vsanConfig.enableDataInTransitEncryption) && hostValidationData.isWitnessHost
            && !hostValidationData.isDitSharedWitnessInteroperabilitySupported) {
            /**
             * When Data-In-Transit Encryption is enabled, a shared witness host cannot be used.
             */
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.sharedWitness.assign.dit.error")]);
        }
        return null;
    }
    validateWarningConditions(isEncrypted) {
        if (isEncrypted) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].WARNING, [
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.hostIsEncrypted"),
            ]);
        }
        return null;
    }
    handleHostValidationError(error) {
        return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [error]);
    }
    updateClustersValidation(witnessValidationResult, clustersValidationData, twoNodeClusters) {
        if (!witnessValidationResult) {
            return clustersValidationData;
        }
        const validationData = witnessValidationResult.clustersValidation;
        if (!clustersValidationData) {
            // This is the first time we are doing the validation, just assign the result as is
            clustersValidationData = validationData;
            // If witness host validation is not passed cluster validation is null
        }
        else if (validationData) {
            // We need to only update the values, in case user deselected some of the clusters,
            // we are not getting them as part of the validation result, but still want to show the original errors
            for (const clusterData of twoNodeClusters) {
                const updatedValidationResult = validationData[clusterData.moRef.value];
                if (updatedValidationResult) {
                    clustersValidationData[clusterData.moRef.value] = updatedValidationResult;
                }
            }
        }
        return clustersValidationData;
    }
}
class WitnessHostValidation {
    constructor(validationAlertType, validationMessages) {
        this.validationAlertType = validationAlertType;
        this.validationMessages = validationMessages;
    }
}



/***/ }),

/***/ "+u6b":
/*!*************************************************************************************!*\
  !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-base.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: ClrButtonBaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrButtonBaseDirective", function() { return ClrButtonBaseDirective; });
/**
 * Use this class as base class for directive, which handles clr-button. It will help to link the rendered button with
 * the clr-button on which the directive is applied.
 */
class ClrButtonBaseDirective {
    constructor(clrButton) {
        this.clrButton = clrButton;
        if (!clrButton) {
            return;
        }
        // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.
        if (!clrButton.name) {
            clrButton.name = Math.random().toString();
        }
        const directiveHolder = clrButton;
        directiveHolder.directives = directiveHolder.directives || [];
        directiveHolder.directives.push(this);
    }
}



/***/ }),

/***/ "71Cv":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/shared-witness/shared-witness-clusters.module.ts ***!
  \***********************************************************************/
/*! exports provided: SharedWitnessClustersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWitnessClustersModule", function() { return SharedWitnessClustersModule; });
/* harmony import */ var _common_shared_witness_route_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/shared-witness-route-paths */ "Rojx");
/* harmony import */ var _dialog_select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog/select-clusters-dialog.component */ "AS0s");
/* harmony import */ var _view_shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/shared-witness-clusters.component */ "bDdj");



const routes = [
    {
        path: "",
        component: _view_shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_2__["SharedWitnessClustersComponent"],
    },
    {
        path: _common_shared_witness_route_paths__WEBPACK_IMPORTED_MODULE_0__["SharedWitnessRoutePaths"].SELECT_CLUSTERS_DIALOG,
        component: _dialog_select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SelectClustersDialogComponent"],
    },
];
class SharedWitnessClustersModule {
}



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

/***/ "I0Pd":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/common/component/action-button/button-title.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTitleDirective", function() { return ButtonTitleDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

/**
 * Attribute directive for detecting button title change and storing title.
 * Only used for clr-button in clr-button-group.
 * @title - The title of clr-button
 */
class ButtonTitleDirective {
    constructor(host) {
        this.host = host;
        this.titleChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
    }
    set title(value) {
        if (this._title !== value) {
            this.titleChange.next(value);
        }
        this._title = value;
    }
    get title() {
        return this._title;
    }
    get titleChangeEvent() {
        return this.titleChange.asObservable();
    }
    ngOnInit() {
        // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.
        if (!this.host.name) {
            this.host.name = Math.random().toString();
        }
    }
    ngOnDestroy() {
        this.titleChange.unsubscribe();
    }
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

/***/ "VWwW":
/*!*********************************************************************************!*\
  !*** ./src/app/vsan/shared-witness/shared-witness-clusters.module.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: SharedWitnessClustersModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWitnessClustersModuleNgFactory", function() { return SharedWitnessClustersModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_witness_clusters_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-witness-clusters.module */ "71Cv");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/directive/show-title/clipboard-icon.component.ngfactory */ "1zpS");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _view_shared_witness_clusters_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/shared-witness-clusters.component.ngfactory */ "oFHV");
/* harmony import */ var _dialog_select_clusters_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/select-clusters-dialog.component.ngfactory */ "V8EJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/service/witness-validation.service */ "+W3v");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pipe/common-pipe.module */ "yVHT");
/* harmony import */ var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/directive/common-directive.module */ "uf8S");
/* harmony import */ var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/component/validation/validation.module */ "90Ln");
/* harmony import */ var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/component/cell/common-cells.module */ "e724");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/component/dialog/prompt/prompt.module */ "usKm");
/* harmony import */ var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/component/action-button/action-button.module */ "wQOa");
/* harmony import */ var _common_shared_witness_common_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/shared-witness-common.module */ "yzfy");
/* harmony import */ var _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/component/unavailable-view/unavailable-view.module */ "YUlR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view/shared-witness-clusters.component */ "bDdj");
/* harmony import */ var _dialog_select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog/select-clusters-dialog.component */ "AS0s");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */

























var SharedWitnessClustersModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_shared_witness_clusters_module__WEBPACK_IMPORTED_MODULE_1__["SharedWitnessClustersModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _view_shared_witness_clusters_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SharedWitnessClustersComponentNgFactory"], _dialog_select_clusters_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SelectClustersDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_10__["WitnessValidationService"], _common_service_witness_validation_service__WEBPACK_IMPORTED_MODULE_10__["WitnessValidationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_12__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_12__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_15__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_15__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_18__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_18__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_19__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_19__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_shared_witness_common_module__WEBPACK_IMPORTED_MODULE_20__["SharedWitnessCommonModule"], _common_shared_witness_common_module__WEBPACK_IMPORTED_MODULE_20__["SharedWitnessCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_21__["UnavailableViewModule"], _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_21__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_witness_clusters_module__WEBPACK_IMPORTED_MODULE_1__["SharedWitnessClustersModule"], _shared_witness_clusters_module__WEBPACK_IMPORTED_MODULE_1__["SharedWitnessClustersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () { return [[{ path: "", component: _view_shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_23__["SharedWitnessClustersComponent"] }, { path: "selectClusters", component: _dialog_select_clusters_dialog_component__WEBPACK_IMPORTED_MODULE_24__["SelectClustersDialogComponent"] }]]; }, [])]); });




/***/ }),

/***/ "Xbvm":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/common/component/action-button/button-group.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonGroupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupDirective", function() { return ButtonGroupDirective; });
/**
 * Attribute directive used to dynamically arrange child buttons, align some horizontally and
 * put the others into the drop-down list, this directive also add title attribute to the buttons.
 * It can only used on clr-button-group and there should be clr-button in the button group.
 * @maximumInlineActions - The maximum value of inline buttons.
 */
let ButtonGroupDirective = /*@__PURE__*/ (() => {
    class ButtonGroupDirective {
        constructor(elRef) {
            this.elRef = elRef;
            // Set the maximum value to 10 to display all buttons inline when there is enough space.
            this._maximumInlineActions = 10;
            this._buttonTitleDirectives = [];
            this.updateButtonTitles = () => {
                const allButtons = this.getVisibleButtons().concat(this.getInMenuButtons());
                if (!allButtons.length) {
                    return;
                }
                // if there is a rendered button for the directive - update its title.
                this._buttonTitleDirectives.forEach(titleDirective => {
                    allButtons.forEach((button) => {
                        if (button.getAttribute("name") === titleDirective.host.name) {
                            button.title = titleDirective.title;
                        }
                    });
                });
            };
        }
        set maximumInlineActions(value) {
            if (!!value) {
                this._maximumInlineActions = value;
            }
        }
        set buttons(value) {
            this._buttonTitleDirectives = value;
            this._buttonTitleDirectives.forEach(titleDirective => {
                // Update button title when its title in directive changes.
                titleDirective.titleChangeEvent.subscribe(() => {
                    setTimeout(this.updateButtonTitles);
                });
            });
            // when action buttons with directive are changed (added / removed) some of them may go to the menu with
            // additional actions. There is no other way found to handle toggle menu event, but click on the toggle button.
            this.subscribeToggleButtonClick();
        }
        set clrButtons(btns) {
            this._btns = btns;
            this.updateInMenuButtons();
        }
        updateInMenuButtons() {
            const groupWithMenu = this._btns.length > this._maximumInlineActions;
            this._btns.forEach((btn, index) => {
                if (groupWithMenu) {
                    // When the number of buttons exceeds the maximum and the button overflows, place the button in the menu.
                    btn.inMenu = index >= this._maximumInlineActions - 1;
                }
                else {
                    btn.inMenu = false;
                }
            });
        }
        subscribeToggleButtonClick() {
            // If there is menu with additional buttons, find the toggle button and update button names on click.
            setTimeout(() => {
                const toggleButton = this.getToggleButton();
                // if there is a toggle button set function to handle the click event only once.
                if (toggleButton && !toggleButton.onclick) {
                    toggleButton.onclick = this.updateButtonTitles;
                }
            });
        }
        // the buttons are visible buttons in button group, toggle menu button
        getVisibleButtons() {
            return Array.from(this.elRef.nativeElement.querySelectorAll(ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR));
        }
        // inMenu buttons are rendered outside of the elRef, get them directly from the document
        getInMenuButtons() {
            return Array.from(this.elRef.nativeElement.ownerDocument.querySelectorAll(ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR));
        }
        getToggleButton() {
            return this.elRef.nativeElement.querySelector(ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR);
        }
    }
    ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR = "button.btn.dropdown-toggle";
    ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR = "button";
    ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR = "div.clr-button-group-menu > button";
    return ButtonGroupDirective;
})();



/***/ }),

/***/ "YUlR":
/*!***********************************************************************************!*\
  !*** ./src/app/vsan/common/component/unavailable-view/unavailable-view.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UnavailableViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableViewModule", function() { return UnavailableViewModule; });
class UnavailableViewModule {
}



/***/ }),

/***/ "bDdj":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/shared-witness/view/shared-witness-clusters.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SharedWitnessClustersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWitnessClustersComponent", function() { return SharedWitnessClustersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/unavailable-view/unavailable-view-spec */ "Hg5h");
/* harmony import */ var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/validation/alert-type */ "4KIt");
/* harmony import */ var _generated_privileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/privileges */ "JLRK");
/* harmony import */ var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @service/flow/error-message.decorator */ "puuD");
/* harmony import */ var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/flow/loader.decorator */ "8V30");
/* harmony import */ var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @service/flow/loading-indicator.decorator */ "2BwX");
/* harmony import */ var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @service/global-refresh.service */ "2U9H");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @service/navigation/navigation.service */ "Qw2S");
/* harmony import */ var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @service/screen-reader-announcer.service */ "wnqS");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @util/logger */ "a0OL");
/* harmony import */ var _util_modal_builder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @util/modal-builder */ "A5CE");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _common_shared_witness_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/shared-witness-constants */ "E77Q");
/* harmony import */ var _common_shared_witness_route_paths__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/shared-witness-route-paths */ "Rojx");

















let SharedWitnessClustersComponent = /*@__PURE__*/ (() => {
    class SharedWitnessClustersComponent {
        constructor(sharedWitnessService, stretchedClusterService, permissionService, navigationService, taskSvc, vsanCapabilityProvider) {
            this.sharedWitnessService = sharedWitnessService;
            this.stretchedClusterService = stretchedClusterService;
            this.permissionService = permissionService;
            this.navigationService = navigationService;
            this.taskSvc = taskSvc;
            this.vsanCapabilityProvider = vsanCapabilityProvider;
            this.addClustersActionTitle = "";
            this.isAddClustersActionDisabled = true;
            this.hasEditPermissions = false;
            this.selectedClusters = [];
            this._objectsCountFilterValue = [null, null];
            this.clusterObjectsCountFilter = new class {
                constructor() {
                    this.accepts = (item, low, high) => {
                        if (low !== null && item.componentsNumber < low) {
                            return false;
                        }
                        if (high !== null && item.componentsNumber > high) {
                            return false;
                        }
                        return true;
                    };
                }
            }();
            this.clusterNameFilter = new class {
                constructor() {
                    this.accepts = (item, search) => {
                        return item.cluster.name !== null && item.cluster.name.toLowerCase().indexOf(search) > -1;
                    };
                }
            }();
            this.thresholdFilterActionLink = {
                label: this.getComponentsThresholdFilterLabel(),
                action: () => this.filterClustersByComponentsThreshold(),
            };
            this.refreshOnTaskCompleted = (task) => {
                if (!task) {
                    return;
                }
                this.taskSvc.getAwaitResult(task).then(() => this.fetch());
            };
        }
        get objectsCountFilterValue() {
            return this._objectsCountFilterValue;
        }
        set objectsCountFilterValue(value) {
            this._objectsCountFilterValue = value;
            // Trigger model change for the label as it is inside content projection
            this.thresholdFilterActionLink.label = this.getComponentsThresholdFilterLabel();
        }
        ngOnInit() {
            this.fetch();
        }
        fetch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.resetData();
                const isSharedWitnessSupported = yield this.vsanCapabilityProvider.getIsSharedWitnessSupported(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].contextObject);
                if (!isSharedWitnessSupported) {
                    this.unavailableViewSpec = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_1__["UnavailableViewSpec"].SHARED_WITNESS_NOT_SUPPORTED;
                    return;
                }
                [this.clustersData, this.witnessLimits, this.hasEditPermissions] = yield Promise.all([
                    this.sharedWitnessService.getWitnessHostData(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].contextObject),
                    this.sharedWitnessService.getSharedWitnessLimits(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].contextObject),
                    this.permissionService.hasPermissions(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].contextObject, [_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].EDIT_CLUSTER()]),
                ]);
                this.updateSelection();
                this.componentsWarningThreshold = this.getComponentsWarningThreshold();
                this.ensureComponentsLimitAlert();
                this.updateActionsAvailability();
                if (!this.witnessLimits) {
                    this.alertType = _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING;
                    throw new Error(_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.sharedWitness.limits.query.error"));
                }
            });
        }
        resetData() {
            this.errorMessage = null;
            this.alertType = _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].DANGER;
            this.showComponentsLimitAlert = false;
            this.componentsLimitAlertType = _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING;
            this.componentsLimitAlertMessage = null;
        }
        updateActionsAvailability() {
            this.isAddClustersActionDisabled = false;
            this.addClustersActionTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.host.monitor.sharedWitnessClustersList.addClusters.title");
            if (!this.clustersData || !this.witnessLimits) {
                // The data is still not initialized, should not happen, just sanity check.
                return;
            }
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isNumericValue(this.witnessLimits.maxWitnessClusters) &&
                (this.clustersData.length >= this.witnessLimits.maxWitnessClusters)) {
                // The host already supports its max number of clusters
                this.isAddClustersActionDisabled = true;
                this.addClustersActionTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.host.monitor.sharedWitnessClustersList.addClusters.disabled.tooManyClusters", this.witnessLimits.maxWitnessClusters);
            }
            else if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isNumericValue(this.witnessLimits.maxComponentsPerCluster) &&
                (this.witnessLimits.maxComponentsPerCluster <= this.getCurrentMaxComponentsCount())) {
                // If we add even 1 cluster to this host, the components limit will be exceeded for some clusters.
                this.isAddClustersActionDisabled = true;
                this.addClustersActionTitle = _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.host.monitor.sharedWitnessClustersList.addClusters.disabled.notEnoughComponents");
            }
        }
        updateSelection() {
            // On reassign completed when data is fetched again clustersData may be empty
            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isEmpty(this.selectedClusters) && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isEmpty(this.clustersData)) {
                this.selectedClusters = this.clustersData.filter(c => this.selectedClusters.some(s => s.cluster.moRef.value === c.cluster.moRef.value));
            }
            else {
                this.selectedClusters = [];
            }
        }
        getCurrentMaxComponentsCount() {
            return this.clustersData.reduce((max, clusterData) => max = clusterData.componentsNumber > max
                ? clusterData.componentsNumber
                : max, 0);
        }
        getComponentsWarningThreshold() {
            if (!this.witnessLimits || !this.witnessLimits.maxComponentsPerCluster) {
                return 0;
            }
            return this.witnessLimits.maxComponentsPerCluster * _common_shared_witness_constants__WEBPACK_IMPORTED_MODULE_15__["SharedWitnessConstants"].CLUSTER_COMPONENTS_THRESHOLD_PERC;
        }
        ensureComponentsLimitAlert() {
            this.showComponentsLimitAlert = this.isAnyClusterReachingComponentsLimit();
            if (this.showComponentsLimitAlert) {
                const hasAnyClusterReachedComponentsLimit = this.clustersData.some(c => this.hasReachedComponentsLimit(c));
                this.componentsLimitAlertType = hasAnyClusterReachedComponentsLimit
                    ? _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].DANGER
                    : _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING;
                this.componentsLimitAlertMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString(hasAnyClusterReachedComponentsLimit
                    ? "vsan.host.monitor.sharedWitnessClustersList.clusters.warning.reachedLimit"
                    : "vsan.host.monitor.sharedWitnessClustersList.clusters.warning.reachingLimit");
            }
        }
        isAnyClusterReachingComponentsLimit() {
            return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isEmpty(this.clustersData) &&
                this.clustersData.some(c => this.isReachingComponentsLimit(c));
        }
        getReassignWitnessActionTitle() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString(this.selectedClusters.length
                ? "vsan.host.monitor.sharedWitnessClustersList.reassignWitness.title"
                : "vsan.host.monitor.sharedWitnessClustersList.reassignWitness.disabled.noSelection");
        }
        isReachingComponentsLimit(cluster) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isNumericValue(this.componentsWarningThreshold) &&
                cluster.componentsNumber >= this.componentsWarningThreshold;
        }
        getComponentsLimitLabel(cluster) {
            const localizationKey = this.hasReachedComponentsLimit(cluster)
                ? "vsan.host.monitor.sharedWitnessClustersList.cluster.warning.reachedLimit"
                : "vsan.host.monitor.sharedWitnessClustersList.cluster.warning.reachingLimit";
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString(localizationKey, this.witnessLimits.maxComponentsPerCluster);
        }
        getComponentsLimitShape(cluster) {
            return this.hasReachedComponentsLimit(cluster)
                ? _util_icon__WEBPACK_IMPORTED_MODULE_11__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE
                : _util_icon__WEBPACK_IMPORTED_MODULE_11__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
        }
        getComponentsLimitClass(cluster) {
            return _util_icon__WEBPACK_IMPORTED_MODULE_11__["Icon"].clrIconShapeClassMap[this.getComponentsLimitShape(cluster)];
        }
        hasReachedComponentsLimit(cluster) {
            return cluster.componentsNumber >= this.witnessLimits.maxComponentsPerCluster;
        }
        filterClustersByComponentsThreshold() {
            const minValue = this.isComponentsThresholdFilterApplied()
                ? null
                : this.componentsWarningThreshold;
            const maxValue = this.objectsCountFilterValue[1];
            this.objectsCountFilterValue = [minValue, maxValue];
        }
        getComponentsThresholdFilterLabel() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString(this.isComponentsThresholdFilterApplied()
                ? "vsan.host.monitor.sharedWitnessClustersList.clusters.warning.clearFilter"
                : "vsan.host.monitor.sharedWitnessClustersList.clusters.warning.applyFilter");
        }
        isComponentsThresholdFilterApplied() {
            return this.objectsCountFilterValue[0] === this.componentsWarningThreshold;
        }
        navigate(clusterRef) {
            this.navigationService.navigateTo(_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["PlatformExtension"].CLUSTER_FAULT_DOMAIN, clusterRef);
        }
        addClusters() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const eventTarget = event.target;
                let hasDiskGroups = false;
                try {
                    hasDiskGroups = yield this.stretchedClusterService.hasDiskGroups(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].contextObject);
                }
                catch (error) {
                    // Don't cancel add clusters dialog opening if disk groups is not fetched.
                    _util_logger__WEBPACK_IMPORTED_MODULE_12__["Logger"].error(error);
                }
                let appId = _common_shared_witness_route_paths__WEBPACK_IMPORTED_MODULE_16__["SharedWitnessRoutePaths"].ADD_CLUSTERS_WIZARD_FULL;
                let modalSize = _util_modal_builder__WEBPACK_IMPORTED_MODULE_13__["ModalBuilder"].WIZARD_XL;
                if (hasDiskGroups) {
                    appId = _common_shared_witness_route_paths__WEBPACK_IMPORTED_MODULE_16__["SharedWitnessRoutePaths"].SELECT_CLUSTERS_DIALOG_FULL;
                    modalSize = [700, 700];
                }
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_13__["ModalBuilder"](appId)
                    .setDimensions(modalSize)
                    .setEventTarget(eventTarget)
                    .open()
                    .then(this.refreshOnTaskCompleted);
            });
        }
        reassignWitness() {
            const context = {
                clustersData: this.selectedClusters.map(c => c.cluster),
                currentWitnessHost: _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].contextObject,
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_13__["ModalBuilder"](_common_shared_witness_route_paths__WEBPACK_IMPORTED_MODULE_16__["SharedWitnessRoutePaths"].REASSIGN_WITNESS_WIZARD_FULL)
                .setDimensions(_util_modal_builder__WEBPACK_IMPORTED_MODULE_13__["ModalBuilder"].WIZARD_XL)
                .open(context)
                .then(this.refreshOnTaskCompleted);
        }
        // Returns "a (out of max b)" label. If b is null, it is replaced by "--".
        getAssignedClustersValueLabel() {
            const naLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.na.label");
            const assignedClustersCount = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isEmpty(this.clustersData)
                ? this.clustersData.length
                : 0;
            const maxWitnessClusters = (this.witnessLimits && _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isNumericValue(this.witnessLimits.maxWitnessClusters))
                ? this.witnessLimits.maxWitnessClusters
                : naLabel;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.host.monitor.sharedWitnessClustersList.clusters.limit.value", assignedClustersCount, maxWitnessClusters);
        }
        getComponentsLimitValueLabel() {
            return this.witnessLimits && _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].isNumericValue(this.witnessLimits.maxComponentsPerCluster)
                ? this.witnessLimits.maxComponentsPerCluster
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_14__["VsanUiUtils"].getString("vsan.na.label");
        }
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_6__["LoadingIndicator"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SharedWitnessClustersComponent.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], SharedWitnessClustersComponent.prototype, "errorMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_10__["ScreenReaderAnnouncer"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], SharedWitnessClustersComponent.prototype, "srOnlyMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_7__["RefreshHandler"],
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_5__["Loader"])({
            srMessage: "vsan.host.monitor.sharedWitnessClustersList.title",
            srMessageType: _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_10__["SrMessageType"].PAGE_TITLE,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], SharedWitnessClustersComponent.prototype, "fetch", null);
    return SharedWitnessClustersComponent;
})();



/***/ }),

/***/ "bppN":
/*!***************************************************************************************!*\
  !*** ./src/app/vsan/shared-witness/view/shared-witness-clusters.scss.shim.ngstyle.js ***!
  \***************************************************************************************/
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
var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%]   .name-column[_ngcontent-%COMP%] {\n  width: 300px;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  align-items: center;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\nclr-datagrid[_ngcontent-%COMP%]   .cluster-components-cell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9zaGFyZWQtd2l0bmVzcy92aWV3L3NoYXJlZC13aXRuZXNzLWNsdXN0ZXJzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FIa0RHO0VBQ0csZ0NBQUE7QUZqQ047QUVtQ0c7O0VBR0csZ0NBQUE7QUZsQ047QUVvQ0c7RUFDRyw4QkFBQTtBRmxDTjtBQWZHO0VBQ0csWUFSYztBQTBCcEI7QUFoQkc7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBa0JOO0FFOEJHO0VBQ0ssK0JBQUE7QUY1QlI7QUU4Qkc7RUFJRywrQkFBQTtBRi9CTjtBRWdDTTtFQUNHLCtCQUFBO0FGOUJUO0FFaUNHO0VBRUcsK0JBQUE7QUZoQ047QUVrQ007RUFDRywrQkFBQTtBRmhDVDtBRW1DRztFQUNHLDZCQUFBO0FGakNOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9zaGFyZWQtd2l0bmVzcy92aWV3L3NoYXJlZC13aXRuZXNzLWNsdXN0ZXJzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJG5hbWUtY29sdW1uLXdpZHRoOiAzMDBweDtcblxuOmhvc3Qge1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbmNsci1kYXRhZ3JpZCB7XG4gICAubmFtZS1jb2x1bW4ge1xuICAgICAgd2lkdGg6ICRuYW1lLWNvbHVtbi13aWR0aDtcbiAgIH1cbiAgIC5jbHVzdGVyLWNvbXBvbmVudHMtY2VsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMSAwIDByZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgQGluY2x1ZGUgc2libGluZy1yaWdodC1zcGFjaW5nO1xuICAgfVxufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];




/***/ }),

/***/ "cMmx":
/*!******************************************************!*\
  !*** ./src/app/vsan/common/util/vsan-dialog-util.ts ***!
  \******************************************************/
/*! exports provided: VsanDialogUtil, VsanDialogProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanDialogUtil", function() { return VsanDialogUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanDialogProperties", function() { return VsanDialogProperties; });
/* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */
let VsanDialogUtil = /*@__PURE__*/ (() => {
    class VsanDialogUtil {
    }
    VsanDialogUtil.CAPACITY_MANAGEMENT_DIALOG = {
        width: 800,
        height: 700,
    };
    VsanDialogUtil.DELETE_VOLUME_DIALOG = {
        width: 500,
        height: 250,
    };
    VsanDialogUtil.MIGRATE_VOLUME_DIALOG = {
        width: 1030,
        height: 710,
    };
    VsanDialogUtil.REAPPLY_VOLUME_POLICY_DIALOG = {
        width: 700,
        height: 250,
    };
    VsanDialogUtil.DUPLICATE_PCI_ID_MODEL_SELECTION_DIALOG = {
        width: 800,
        height: 500,
    };
    VsanDialogUtil.HEALTH_RESTORE_ACTION_DIALOG = {
        width: 550,
        height: 250,
    };
    // Keep in sync with plugin.xml extension point
    VsanDialogUtil.CLUSTER_POWER_ON_DIALOG = {
        width: 600,
        height: 230,
    };
    VsanDialogUtil.VM_IO_DIAGNOSTICS_METRICS_DIALOG = {
        width: 900,
        height: 700,
    };
    VsanDialogUtil.VM_IO_DIAGNOSTICS_LATENCY_DIALOG = {
        width: 1000,
        height: 500,
    };
    VsanDialogUtil.VM_IO_DIAGNOSTICS_DOM_OWNER_LATENCY_DIALOG = {
        width: 1000,
        height: 400,
    };
    VsanDialogUtil.PERF_SVC_EDIT_ACTION_DIALOG = {
        width: 800,
        height: 450,
    };
    VsanDialogUtil.PERF_SVC_ENABLE_ACTION_DIALOG = {
        width: 800,
        height: 250,
    };
    VsanDialogUtil.CLAIM_DISKS_ACTION_DIALOG = {
        width: 1200,
        height: 650,
    };
    VsanDialogUtil.VSAN_DISK_CLAIM_ACTION_DIALOG = {
        width: 670,
        height: 300,
    };
    return VsanDialogUtil;
})();
class VsanDialogProperties {
}



/***/ }),

/***/ "oFHV":
/*!*****************************************************************************************!*\
  !*** ./src/app/vsan/shared-witness/view/shared-witness-clusters.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_SharedWitnessClustersComponent, View_SharedWitnessClustersComponent_0, View_SharedWitnessClustersComponent_Host_0, SharedWitnessClustersComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SharedWitnessClustersComponent", function() { return RenderType_SharedWitnessClustersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SharedWitnessClustersComponent_0", function() { return View_SharedWitnessClustersComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SharedWitnessClustersComponent_Host_0", function() { return View_SharedWitnessClustersComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWitnessClustersComponentNgFactory", function() { return SharedWitnessClustersComponentNgFactory; });
/* harmony import */ var _shared_witness_clusters_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-witness-clusters.scss.shim.ngstyle */ "bppN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/unavailable-view/unavailable-view.component.ngfactory */ "Kfm7");
/* harmony import */ var _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/unavailable-view/unavailable-view.component */ "hlBw");
/* harmony import */ var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/service/task-monitor-service */ "81c+");
/* harmony import */ var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/service/navigation/navigation.service */ "Qw2S");
/* harmony import */ var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../generated/hci-quickstart-status-service */ "KbWe");
/* harmony import */ var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../generated/vsan-perf-property-provider */ "Oyqh");
/* harmony import */ var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/component/validation/validation.component.ngfactory */ "fdDr");
/* harmony import */ var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component/validation/validation.component */ "ie44");
/* harmony import */ var _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component/cell/health-status-cell.component.ngfactory */ "xcCc");
/* harmony import */ var _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component/cell/health-status-cell.component */ "2TcV");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/directive/show-title/show-title.directive */ "XpuD");
/* harmony import */ var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/directive/icon-title/icon-title.directive */ "wLY2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/directive/clr-button-group/clr-button-group-common.directive */ "Ju17");
/* harmony import */ var _common_component_action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/component/action-button/button-group.directive */ "Xbvm");
/* harmony import */ var _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/component/action-button/button-title.directive */ "I0Pd");
/* harmony import */ var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/pipe/LocalizationPipe */ "jOVY");
/* harmony import */ var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/directive/reactive-forms/autofocus-control.directive */ "KYLT");
/* harmony import */ var _shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared-witness-clusters.component */ "bDdj");
/* harmony import */ var _generated_shared_witness_host_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../generated/shared-witness-host-service */ "1EIX");
/* harmony import */ var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../generated/vsan-stretched-cluster-service */ "bxEx");
/* harmony import */ var _generated_permission_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../generated/permission-service */ "B+sv");
/* harmony import */ var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../generated/vsan-capability-provider */ "y/yc");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */




























var styles_SharedWitnessClustersComponent = [_shared_witness_clusters_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SharedWitnessClustersComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SharedWitnessClustersComponent, data: {} });

function View_SharedWitnessClustersComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "busy-backdrop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "spinner spinner-lg central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_SharedWitnessClustersComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_3__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_6__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_7__["VsanPerfPropertyProvider"]], { unavailableViewSpec: [0, "unavailableViewSpec"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.unavailableViewSpec; _ck(_v, 1, 0, currVal_0); }, null); }
function View_SharedWitnessClustersComponent_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "shared-witness-errors"]], null, [[null, "onClosed"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onClosed" === en)) {
                var pd_0 = ((_co.errorMessage = null) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_9__["ValidationComponent"], [], { alertType: [0, "alertType"], alert: [1, "alert"], allowClose: [2, "allowClose"] }, { onClosed: "onClosed" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.alertType; var currVal_1 = _co.errorMessage; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null);
}
function View_SharedWitnessClustersComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "components-threshold-filter"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_9__["ValidationComponent"], [], { alertType: [0, "alertType"], alert: [1, "alert"], actionLink: [2, "actionLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.componentsLimitAlertType; var currVal_1 = _co.componentsLimitAlertMessage; var currVal_2 = _co.thresholdFilterActionLink; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SharedWitnessClustersComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_11__["HealthStatusCell"], [], { iconClass: [0, "iconClass"], shape: [1, "shape"], label: [2, "label"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getComponentsLimitClass(_v.parent.context.$implicit); var currVal_1 = _co.getComponentsLimitShape(_v.parent.context.$implicit); var currVal_2 = _co.getComponentsLimitLabel(_v.parent.context.$implicit); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SharedWitnessClustersComponent_7(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 37, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[8, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], { item: [0, "item"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { dgCells: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[10, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { cells: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 13, "clr-dg-cell", [["class", "cluster-name-cell"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { signpost: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_15__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_16__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 1, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.navigate(((_v.context.$implicit.cluster == null) ? null : _v.context.$implicit.cluster.moRef)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["\n                  ", "\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 16777216, null, 2, 10, "clr-dg-cell", [["class", "cluster-components-cell no-vertical-padding"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { signpost: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SharedWitnessClustersComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); _ck(_v, 12, 0); _ck(_v, 16, 0); _ck(_v, 27, 0); var currVal_14 = _co.isReachingComponentsLimit(_v.context.$implicit); _ck(_v, 35, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = true; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = true; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0); var currVal_6 = "hidden"; var currVal_7 = "ellipsis"; var currVal_8 = "nowrap"; _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = ((_v.context.$implicit.cluster == null) ? null : _v.context.$implicit.cluster.primaryIconId); _ck(_v, 18, 0, currVal_9); var currVal_10 = ((_v.context.$implicit.cluster == null) ? null : _v.context.$implicit.cluster.name); _ck(_v, 23, 0, currVal_10); var currVal_11 = true; var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).signpost.length > 0); _ck(_v, 26, 0, currVal_11, currVal_12); var currVal_13 = _v.context.$implicit.componentsNumber; _ck(_v, 32, 0, currVal_13); });
}
function View_SharedWitnessClustersComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 139, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 30, "clr-stack-view", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrStackView_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrStackView"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackView"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 1, 12, "clr-stack-block", [], [[2, "stack-block", null], [2, "stack-block-expanded", null], [2, "stack-block-expandable", null], [2, "stack-block-changed", null], [2, "on-focus", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrStackBlock_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrStackBlock"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackBlock"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackBlock"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 3, "clr-stack-label", [["id", "clustersLimitLabel"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 1, 2, "clr-stack-content", [["id", "clustersLimitValue"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 1, 12, "clr-stack-block", [], [[2, "stack-block", null], [2, "stack-block-expanded", null], [2, "stack-block-expandable", null], [2, "stack-block-changed", null], [2, "on-focus", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrStackBlock_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrStackBlock"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackBlock"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackBlock"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 3, "clr-stack-label", [["id", "componentsLimitLabel"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 1, 2, "clr-stack-content", [["id", "componentsLimitValue"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 27, "clr-button-group", [["class", "btn-link"], ["vsan-button-group", ""]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { buttons: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_18__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { clrButtons: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 2, _common_component_action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_19__["ButtonGroupDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { maximumInlineActions: [0, "maximumInlineActions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { buttons: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { clrButtons: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 5, "clr-button", [["class", "btn btn-sm"], ["id", "add-clusters-action"], ["name", "add-clusters-action"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.addClusters() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 4243456, [[1, 4], [2, 4], [4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"]], { classNames: [0, "classNames"], name: [1, "name"], id: [2, "id"], disabled: [3, "disabled"] }, { _click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 212992, [[3, 4]], 0, _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_20__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButton"]], { title: [0, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](58, 0, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](59, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 5, "clr-button", [["class", "btn btn-sm"], ["id", "reassign-witness-action"], ["name", "reassign-witness-action"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.reassignWitness() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 4243456, [[1, 4], [2, 4], [4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"]], { classNames: [0, "classNames"], name: [1, "name"], id: [2, "id"], disabled: [3, "disabled"] }, { _click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 212992, [[3, 4]], 0, _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_20__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButton"]], { title: [0, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, 0, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](66, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 69, "clr-datagrid", [["id", "witness-host-clusters-list"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], [[null, "clrDgSelectedChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("clrDgSelectedChange" === en)) {
                var pd_0 = ((_co.selectedClusters = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], { selected: [0, "selected"] }, { selectedChanged: "clrDgSelectedChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { iterator: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { placeholder: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { columns: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { rows: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { headers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { rows: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 16777216, null, null, 14, "clr-dg-column", [["class", "name-column"], ["id", "cluster-name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 770048, [[7, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { projectedFilter: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 147456, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](107, 1, ["\n            ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](108, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, 0, 2, "clr-dg-string-filter", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_DatagridStringFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_DatagridStringFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["DatagridStringFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"]], { customStringFilter: [0, "customStringFilter"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[11, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["DatagridStringFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 16777216, null, null, 15, "clr-dg-column", [["id", "cluster-components-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 770048, [[7, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { projectedFilter: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 147456, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](123, 1, ["\n            ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](124, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, 0, 3, "clr-dg-numeric-filter", [], null, [[null, "clrFilterValueChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("clrFilterValueChange" === en)) {
                var pd_0 = ((_co.objectsCountFilterValue = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_DatagridNumericFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_DatagridNumericFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["DatagridNumericFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverToggleService"]], { customNumericFilter: [0, "customNumericFilter"], value: [1, "value"] }, { filterValueChange: "clrFilterValueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[12, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["DatagridNumericFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, 1, 3, "clr-dg-placeholder", [], [[2, "datagrid-placeholder-container", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDatagridPlaceholder_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDatagridPlaceholder"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 49152, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridPlaceholder"], [_clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](133, 0, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](134, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 409600, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { rawItems: [0, "rawItems"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !!_co.errorMessage; _ck(_v, 3, 0, currVal_0); _ck(_v, 10, 0); _ck(_v, 24, 0); var currVal_15 = _co.showComponentsLimitAlert; _ck(_v, 38, 0, currVal_15); var currVal_17 = ""; _ck(_v, 50, 0, currVal_17); var currVal_18 = "btn btn-sm"; var currVal_19 = "add-clusters-action"; var currVal_20 = "add-clusters-action"; var currVal_21 = (_co.isAddClustersActionDisabled || !_co.hasEditPermissions); _ck(_v, 56, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.addClustersActionTitle; _ck(_v, 57, 0, currVal_22); var currVal_24 = "btn btn-sm"; var currVal_25 = "reassign-witness-action"; var currVal_26 = "reassign-witness-action"; var currVal_27 = (!((_co.selectedClusters == null) ? null : _co.selectedClusters.length) || !_co.hasEditPermissions); _ck(_v, 63, 0, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_28 = _co.getReassignWitnessActionTitle(); _ck(_v, 64, 0, currVal_28); var currVal_32 = _co.selectedClusters; _ck(_v, 83, 0, currVal_32); _ck(_v, 101, 0); var currVal_36 = _co.clusterNameFilter; _ck(_v, 110, 0, currVal_36); _ck(_v, 117, 0); var currVal_40 = _co.clusterObjectsCountFilter; var currVal_41 = _co.objectsCountFilterValue; _ck(_v, 126, 0, currVal_40, currVal_41); var currVal_44 = _co.clustersData; _ck(_v, 137, 0, currVal_44); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = true; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).expanded; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).expandable; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).getChangedValue; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onStackLabelFocus; _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.clusters.limit.label")); _ck(_v, 14, 0, currVal_6); var currVal_7 = _co.getAssignedClustersValueLabel(); _ck(_v, 19, 0, currVal_7); var currVal_8 = true; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).expanded; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).expandable; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).getChangedValue; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onStackLabelFocus; _ck(_v, 22, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.components.limit.label")); _ck(_v, 28, 0, currVal_13); var currVal_14 = _co.getComponentsLimitValueLabel(); _ck(_v, 33, 0, currVal_14); var currVal_16 = true; _ck(_v, 40, 0, currVal_16); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _ck(_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.addClusters.label")); _ck(_v, 58, 0, currVal_23); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 65, 0, _ck(_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.reassignWitness.label")); _ck(_v, 65, 0, currVal_29); var currVal_30 = true; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).detailService.isOpen; _ck(_v, 69, 0, currVal_30, currVal_31); var currVal_33 = true; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ariaSort; _ck(_v, 98, 0, currVal_33, currVal_34); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 107, 0, _ck(_v, 108, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.cluster.name")); _ck(_v, 107, 0, currVal_35); var currVal_37 = true; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).ariaSort; _ck(_v, 114, 0, currVal_37, currVal_38); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 123, 0, _ck(_v, 124, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.cluster.components")); _ck(_v, 123, 0, currVal_39); var currVal_42 = true; _ck(_v, 131, 0, currVal_42); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 133, 0, _ck(_v, 134, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.host.monitor.sharedWitnessClustersList.clusters.no.result")); _ck(_v, 133, 0, currVal_43); });
}
function View_SharedWitnessClustersComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.unavailableViewSpec; _ck(_v, 3, 0, currVal_0); var currVal_1 = !_co.unavailableViewSpec; _ck(_v, 6, 0, currVal_1); }, null); }
function View_SharedWitnessClustersComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_21__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "h5", [["vsan-auto-focus", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_22__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"]], { appAutoFocus: [0, "appAutoFocus"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SharedWitnessClustersComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ""; _ck(_v, 4, 0, currVal_0); var currVal_2 = _co.loading; _ck(_v, 9, 0, currVal_2); var currVal_3 = !_co.loading; _ck(_v, 12, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.host.monitor.sharedWitnessClustersList.title")); _ck(_v, 5, 0, currVal_1); }); }
function View_SharedWitnessClustersComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-shared-witness-clusters", [], null, null, null, View_SharedWitnessClustersComponent_0, RenderType_SharedWitnessClustersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_23__["SharedWitnessClustersComponent"], [_generated_shared_witness_host_service__WEBPACK_IMPORTED_MODULE_24__["SharedWitnessHostService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_25__["VsanStretchedClusterService"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_26__["PermissionService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__["TaskMonitorService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_27__["VsanCapabilityProvider"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SharedWitnessClustersComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-shared-witness-clusters", _shared_witness_clusters_component__WEBPACK_IMPORTED_MODULE_23__["SharedWitnessClustersComponent"], View_SharedWitnessClustersComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "tsUx":
/*!********************************************************************************!*\
  !*** ./src/app/vsan/common/directive/external-link/external-link.directive.ts ***!
  \********************************************************************************/
/*! exports provided: ExternalLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkDirective", function() { return ExternalLinkDirective; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @directive/clr-button-group/clr-button-base.directive */ "+u6b");


/**
 * Decorates a button or an anchor as external link. Requires one of the optional parameters articleId, helpId or url.
 *
 * @param external-link: Optional. Localization key of the text label of the external link. If omitted default label
 * will be used - "Learn more" for anchors or "Ask VMWare" for buttons.
 * @param articleId - Optional. Id of article in knowledge base.
 * @param helpId - Optional. Help id which will redirect to Knowledge Base.
 * @param url - Optional. External URL.
 */
class ExternalLinkDirective extends _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__["ClrButtonBaseDirective"] {
    constructor(el, resolver, renderer, navigationService, 
    // this variable will be initialized only if the host is clr-button
    clrButton) {
        super(clrButton);
        this.el = el;
        this.resolver = resolver;
        this.renderer = renderer;
        this.navigationService = navigationService;
        this.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
        this.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
        this.CONTAINER_CLASS = "icon-name-container";
        this.NAVIGATION_EVENT_TYPE = "click";
        this.LEAD_TO_NOWHERE_URL = "javascript://";
        this.HTML_ELEMENT_SPAN_NAME = "span";
        this.HTML_ELEMENT_ICON_NAME = "clr-icon";
        this.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
        this.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
        this.ICON_SHAPE_ATTR_NAME = "shape";
        this.ICON_SHAPE_ATTR_VALUE = "pop-out";
        this.ICON_SIZE_ATTR_NAME = "size";
        this.ICON_SIZE_ATTR_VALUE = "16";
        this.ICON_CLASS_ATTR_NAME = "class";
        this.ICON_CLASS_ATTR_VALUE = "link";
        this.ICON_TITLE_ATTR_NAME = "title";
        this.KB_URL = "http://kb.vmware.com/kb/";
    }
    ngAfterViewInit() {
        const element = this.el.nativeElement;
        // continue only if element is HTML link or button
        if (!this.isLink(element) && !this.isButton(element)) {
            // element is clr-button, wait until html button for it is resolved - handled by resloveButton
            return;
        }
        this.prepareExternalLink(element);
    }
    resolveButton(clrButton, button, index) {
        // only if element is clr-button. At this point the html button is already resolved. Apply on it.
        this.prepareExternalLink(button);
    }
    prepareExternalLink(element) {
        this.renderer.addClass(element, this.CONTAINER_CLASS);
        this.setText(element);
        if (this.isLink(element)) {
            this.decorateLink(element);
        }
        else {
            this.addLinkRole(element);
        }
        this.initializeNavigationHandler(element);
    }
    isButton(element) {
        return element instanceof HTMLButtonElement;
    }
    isLink(element) {
        return element instanceof HTMLAnchorElement;
    }
    setText(element) {
        const span = this.renderer.createElement(this.HTML_ELEMENT_SPAN_NAME);
        span.innerText = this.getText(element);
        this.renderer.appendChild(element, span);
        const icon = this.renderer.createElement(this.HTML_ELEMENT_ICON_NAME);
        icon.setAttribute(this.ICON_SHAPE_ATTR_NAME, this.ICON_SHAPE_ATTR_VALUE);
        icon.setAttribute(this.ICON_SIZE_ATTR_NAME, this.ICON_SIZE_ATTR_VALUE);
        icon.setAttribute(this.ICON_CLASS_ATTR_NAME, this.ICON_CLASS_ATTR_VALUE);
        // Set title of the icon for screen readers clarity
        icon.setAttribute(this.ICON_TITLE_ATTR_NAME, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.label.externalLink.icon"));
        this.renderer.appendChild(element, icon);
    }
    getText(element) {
        if (this.anchorText) {
            return this.anchorText;
        }
        const key = this.isButton(element) ? this.ASK_VMWARE_DEFAULT_TEXT_KEY : this.LEARN_MORE_DEFAULT_TEXT_KEY;
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key);
    }
    decorateLink(element) {
        const linkElement = element;
        // don't use href attribute. If omitted, the link will be not visualized properly.
        linkElement.href = this.LEAD_TO_NOWHERE_URL;
        // display link on same line
        linkElement.style.display = "inline-flex";
    }
    initializeNavigationHandler(element) {
        element.addEventListener(this.NAVIGATION_EVENT_TYPE, () => {
            if (this.helpId) {
                this.navigationService.askVMware(this.helpId);
                return;
            }
            if (this.articleId) {
                this.navigationService.navigateToAddress(`${this.KB_URL}${this.articleId}`);
                return;
            }
            if (this.url) {
                this.navigationService.navigateToAddress(this.url);
            }
        });
    }
    // Indicate external navigation by assigning "link" role
    addLinkRole(element) {
        this.renderer.setAttribute(element, this.HTML_ELEMENT_ROLE_ATTR_NAME, this.HTML_ELEMENT_ROLE_ATTR_VALUE);
    }
}



/***/ }),

/***/ "wQOa":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/common/component/action-button/action-button.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ActionButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonModule", function() { return ActionButtonModule; });
class ActionButtonModule {
}



/***/ })

}]);
//# sourceMappingURL=123-es2015.js.map