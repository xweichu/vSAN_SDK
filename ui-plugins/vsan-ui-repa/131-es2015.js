(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

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

/***/ "6BUe":
/*!************************************************************************!*\
  !*** ./src/app/vsan/common/component/datagrid/tree-datagrid.module.ts ***!
  \************************************************************************/
/*! exports provided: TreeDatagridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDatagridModule", function() { return TreeDatagridModule; });
class TreeDatagridModule {
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

/***/ "JCZN":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/common/component/popup-list/popup-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: PopupListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupListModule", function() { return PopupListModule; });
class PopupListModule {
}



/***/ }),

/***/ "U2P7":
/*!****************************************************************************!*\
  !*** ./src/app/vsan/common/component/navigation/vsan-breadcrumb.module.ts ***!
  \****************************************************************************/
/*! exports provided: VsanBreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanBreadcrumbModule", function() { return VsanBreadcrumbModule; });
class VsanBreadcrumbModule {
}



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

/***/ "uDMx":
/*!***************************************************!*\
  !*** ./src/app/vsan/common/vsan-common.module.ts ***!
  \***************************************************/
/*! exports provided: VsanCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanCommonModule", function() { return VsanCommonModule; });
class VsanCommonModule {
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
//# sourceMappingURL=131-es2015.js.map