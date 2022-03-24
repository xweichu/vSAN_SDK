(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "2e3P":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm2015/ngx-window-token.js ***!
  \********************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: ( /**
         * @return {?}
         */() => window) } : undefined);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "IbkX":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js ***!
  \**************************************************************/
/*! exports provided: ClipboardService, ClipboardDirective, ClipboardModule, ClipboardIfSupportedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-window-token */ "2e3P");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ClipboardService = /*@__PURE__*/ (() => {
    class ClipboardService {
        /**
         * @param {?} document
         * @param {?} window
         */
        constructor(document, window) {
            this.document = document;
            this.window = window;
            this.config = {};
            this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.copyResponse$ = this.copySubject.asObservable();
        }
        /**
         * @param {?} config
         * @return {?}
         */
        configure(config) {
            this.config = config;
        }
        /**
         * @return {?}
         */
        get isSupported() {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        isTargetValid(element) {
            if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                if (element.hasAttribute('disabled')) {
                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                }
                return true;
            }
            throw new Error('Target should be input or textarea');
        }
        /**
         * copyFromInputElement
         * @param {?} targetElm
         * @return {?}
         */
        copyFromInputElement(targetElm) {
            try {
                this.selectTarget(targetElm);
                /** @type {?} */
                const re = this.copyText();
                this.clearSelection(targetElm, this.window);
                return re && this.isCopySuccessInIE11();
            }
            catch (error) {
                return false;
            }
        }
        // this is for IE11 return true even if copy fail
        /**
         * @return {?}
         */
        isCopySuccessInIE11() {
            /** @type {?} */
            const clipboardData = this.window['clipboardData'];
            if (clipboardData && clipboardData.getData) {
                if (!clipboardData.getData('Text')) {
                    return false;
                }
            }
            return true;
        }
        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         * @param {?} content
         * @param {?=} container
         * @return {?}
         */
        copyFromContent(content, container = this.window.document.body) {
            // check if the temp textarea still belongs to the current container.
            // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
            if (this.tempTextArea && !container.contains(this.tempTextArea)) {
                this.destroy(this.tempTextArea.parentElement);
            }
            if (!this.tempTextArea) {
                this.tempTextArea = this.createTempTextArea(this.document, this.window);
                try {
                    container.appendChild(this.tempTextArea);
                }
                catch (error) {
                    throw new Error('Container should be a Dom element');
                }
            }
            this.tempTextArea.value = content;
            /** @type {?} */
            const toReturn = this.copyFromInputElement(this.tempTextArea);
            if (this.config.cleanUpAfterCopy) {
                this.destroy(this.tempTextArea.parentElement);
            }
            return toReturn;
        }
        // remove temporary textarea if any
        /**
         * @param {?=} container
         * @return {?}
         */
        destroy(container = this.window.document.body) {
            if (this.tempTextArea) {
                container.removeChild(this.tempTextArea);
                // removeChild doesn't remove the reference from memory
                this.tempTextArea = undefined;
            }
        }
        // select the target html input element
        /**
         * @private
         * @param {?} inputElement
         * @return {?}
         */
        selectTarget(inputElement) {
            inputElement.select();
            inputElement.setSelectionRange(0, inputElement.value.length);
            return inputElement.value.length;
        }
        /**
         * @private
         * @return {?}
         */
        copyText() {
            return this.document.execCommand('copy');
        }
        // Moves focus away from `target` and back to the trigger, removes current selection.
        /**
         * @private
         * @param {?} inputElement
         * @param {?} window
         * @return {?}
         */
        clearSelection(inputElement, window) {
            // tslint:disable-next-line:no-unused-expression
            inputElement && inputElement.focus();
            window.getSelection().removeAllRanges();
        }
        // create a fake textarea for copy command
        /**
         * @private
         * @param {?} doc
         * @param {?} window
         * @return {?}
         */
        createTempTextArea(doc, window) {
            /** @type {?} */
            const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
            /** @type {?} */
            let ta;
            ta = doc.createElement('textarea');
            // Prevent zooming on iOS
            ta.style.fontSize = '12pt';
            // Reset box model
            ta.style.border = '0';
            ta.style.padding = '0';
            ta.style.margin = '0';
            // Move element out of screen horizontally
            ta.style.position = 'absolute';
            ta.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            /** @type {?} */
            const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
            ta.style.top = yPosition + 'px';
            ta.setAttribute('readonly', '');
            return ta;
        }
        /**
         * Pushes copy operation response to copySubject, to provide global access
         * to the response.
         * @param {?} response
         * @return {?}
         */
        pushCopyReponse(response) {
            this.copySubject.next(response);
        }
    }
    /** @nocollapse */ ClipboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    return ClipboardService;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClipboardDirective {
    /**
     * @param {?} clipboardSrv
     */
    constructor(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clipboardSrv.destroy(this.container);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    }
    /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    handleResult(succeeded, copiedContent, event) {
        /** @type {?} */
        let response = {
            isSuccess: succeeded,
            event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyReponse(response);
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClipboardIfSupportedDirective {
    /**
     * @param {?} _clipboardService
     * @param {?} _viewContainerRef
     * @param {?} _templateRef
     */
    constructor(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClipboardModule {
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ })

}]);
//# sourceMappingURL=97-es2015.js.map