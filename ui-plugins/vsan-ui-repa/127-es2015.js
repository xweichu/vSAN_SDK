(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

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

/***/ "2BwX":
/*!*************************************************************************!*\
  !*** ./src/app/vsan/common/service/flow/loading-indicator.decorator.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @service/flow/loading-flow-wrapper.data */ "dmSP");
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
    return (targetClass, propertyKey) => {
        Object.defineProperty(targetClass, propertyKey, {
            get: function () {
                if (Array.isArray(props.name)) {
                    return props.name.some((loaderName) => (new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, loaderName)).isLoading);
                }
                return (new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, props.name)).isLoading;
            },
        });
    };
}



/***/ }),

/***/ "7oHn":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/common/service/flow/error-handler.decorator.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @service/flow/loading-flow-wrapper.data */ "dmSP");
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
    return (targetClass, functionName, descriptor) => {
        (new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](targetClass, props.name)).errorHandler = descriptor.value;
    };
}



/***/ }),

/***/ "8V30":
/*!**************************************************************!*\
  !*** ./src/app/vsan/common/service/flow/loader.decorator.ts ***!
  \**************************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @service/flow/function-wrapper */ "7ZNc");
/* harmony import */ var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @service/flow/loading-flow-wrapper.data */ "dmSP");
/* harmony import */ var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/screen-reader-announcer.service */ "wnqS");
/* harmony import */ var _util_reflection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/reflection */ "bM2O");
/* harmony import */ var _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../vsan-app.module */ "Uag/");
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
    return (targetClass, functionName, descriptor) => {
        // Use the component name as tag in order easily find where the error was thrown.
        const tag = _util_reflection__WEBPACK_IMPORTED_MODULE_3__["Reflection"].getClassName(targetClass);
        const loaderName = params.name;
        const originalFn = descriptor.value;
        descriptor.value = function () {
            const loadingFlowWrapper = new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__["LoadingFlowWrapper"](this, loaderName);
            return (new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["FunctionWrapper"](originalFn))
                .preExecute(() => {
                loadingFlowWrapper.error = undefined;
                loadingFlowWrapper.incrementLoads();
                _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.preLoadSrMessage || params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADING);
            })
                .postExecute(() => {
                _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADED);
            })
                .onError((ex) => {
                processError(loadingFlowWrapper, tag, ex);
                const rethrow = shouldRethrow(loadingFlowWrapper, params);
                if (!rethrow) {
                    ex = invokeErrorHandler(loadingFlowWrapper, ex);
                }
                return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["ErrorContext"](rethrow, ex);
            })
                .finally(() => {
                loadingFlowWrapper.decrementLoads();
            })
                .invoke(loadingFlowWrapper.backingObject, arguments);
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
    _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__["GlobalLogger"].error(tag, ex);
    // Cache the error so it can be retrieved by @ErrorMessage decorated fields
    wrapper.error = ex;
}
/**
 * Invokes the error handler (if defined)
 */
function invokeErrorHandler(wrapper, ex) {
    const handler = wrapper.errorHandler;
    return !!handler
        ? handler.call(wrapper.backingObject, ex)
        : null;
}
/**
 * Reject the promise only if:
 * 1. there are no handlers declared
 * 2. the components has explicitly requested the error to be rethrown
 */
function shouldRethrow(wrapper, params) {
    return !wrapper.errorHandler && !wrapper.errorMessageGetter
        || !!params.rethrow;
}



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

/***/ "Xflx":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/common/pipe/virtual-objects/health-state-label.pipe.ts ***!
  \*****************************************************************************/
/*! exports provided: VirtualObjectHealthStateLabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectHealthStateLabelPipe", function() { return VirtualObjectHealthStateLabelPipe; });
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");

class VirtualObjectHealthStateLabelPipe {
    transform(state) {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__["VsanHealthUtil"].getVsanObjectHealthStatusText(state);
    }
}



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

/***/ "dmSP":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/common/service/flow/loading-flow-wrapper.data.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingFlowWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingFlowWrapper", function() { return LoadingFlowWrapper; });
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
let LoadingFlowWrapper = /*@__PURE__*/ (() => {
    class LoadingFlowWrapper {
        constructor(_backingObject, loaderName) {
            this._backingObject = _backingObject;
            this.loaderName = loaderName;
            this.loaderName = loaderName || LoadingFlowWrapper.DEFAULT_NAME;
            // Init all collections
            this.initCollection(LoadingFlowWrapper.ERROR_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.LOADS_COUNT_HOLDER);
        }
        initCollection(collectionName) {
            // Check first if the collection hasn't been initialized by another wrapper.
            // If so, do nothing as we don't want to override the data already set.
            if (!this.backingObject[collectionName]) {
                this.backingObject[collectionName] = [];
            }
        }
        /**
         * The original object which methods/properties were decorated
         */
        get backingObject() {
            return this._backingObject;
        }
        /**
         * Returns the thrown error
         */
        get error() {
            return this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName];
        }
        /**
         * Sets the thrown error
         */
        set error(val) {
            this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName] = val;
        }
        /**
         * Returns the number of active loading operations
         */
        get loadsCount() {
            return this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName];
        }
        /**
         * Returns true if there are running loader methods or promises.
         */
        get isLoading() {
            return !!this.loadsCount;
        }
        /**
         * Increase the number of active loading operations by one
         */
        incrementLoads() {
            // Initialize the counter if it hasn't been initialized yet
            if (!this.loadsCount) {
                this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] = 0;
            }
            this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] += 1;
        }
        /**
         * Decreases the number of active loading operations by one
         */
        decrementLoads() {
            this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] -= 1;
        }
        get errorHandler() {
            return this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName];
        }
        /**
         * Registers a new error handler.
         */
        set errorHandler(errorHandler) {
            if (!!this.errorHandler) {
                throw new Error(`ErrorHandler for loader "${this.loaderName}" already registered!`);
            }
            this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName] = errorHandler;
        }
        get errorMessageGetter() {
            return this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName];
        }
        set errorMessageGetter(getter) {
            if (!!this.errorMessageGetter) {
                throw new Error(`ErrorMessage for loader "${this.loaderName}" already registered!`);
            }
            this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName] = getter;
        }
    }
    LoadingFlowWrapper.ERROR_HOLDER = "__ex__";
    LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER = "__errorHandlers__";
    LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER = "__errorMessageGetters__";
    LoadingFlowWrapper.LOADS_COUNT_HOLDER = "__loadsCount__";
    LoadingFlowWrapper.DEFAULT_NAME = "default-loader";
    return LoadingFlowWrapper;
})();



/***/ }),

/***/ "e724":
/*!*******************************************************************!*\
  !*** ./src/app/vsan/common/component/cell/common-cells.module.ts ***!
  \*******************************************************************/
/*! exports provided: CommonCellsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCellsModule", function() { return CommonCellsModule; });
class CommonCellsModule {
}



/***/ }),

/***/ "jpQQ":
/*!*******************************************************************!*\
  !*** ./src/app/vsan/common/model/inline-view-context-key.data.ts ***!
  \*******************************************************************/
/*! exports provided: InlineViewContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineViewContextKey", function() { return InlineViewContextKey; });
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * Hold the context keys used in the vsan overview tab by PersistentStorageService.
 * The context is required because in the overview page, the details view is opened inline w/o navigation.
 */
let InlineViewContextKey = /*@__PURE__*/ (() => {
    class InlineViewContextKey {
    }
    InlineViewContextKey.HEALTH_CHECK_CONTEXT_KEY = "__health_check_context__";
    InlineViewContextKey.SERVICES_CONTEXT_KEY = "__services_context__";
    InlineViewContextKey.FAULT_DOMAINS_CONTEXT_KEY = "__fault_domains_context__";
    InlineViewContextKey.RESYNCING_OBJECTS_CONTEXT_KEY = "__resyncing_objects_context__";
    return InlineViewContextKey;
})();



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
//# sourceMappingURL=127-es2015.js.map