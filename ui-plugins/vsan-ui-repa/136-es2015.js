(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

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

/***/ "3io1":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/common/component/configurations/configurations.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfigurationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsModule", function() { return ConfigurationsModule; });
class ConfigurationsModule {
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



/***/ })

}]);
//# sourceMappingURL=136-es2015.js.map