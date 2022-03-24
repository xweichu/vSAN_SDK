(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136], {
    /***/
    "+u6b":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-base.directive.ts ***!
      \*************************************************************************************/

    /*! exports provided: ClrButtonBaseDirective */

    /***/
    function u6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonBaseDirective", function () {
        return ClrButtonBaseDirective;
      });
      /**
       * Use this class as base class for directive, which handles clr-button. It will help to link the rendered button with
       * the clr-button on which the directive is applied.
       */


      var ClrButtonBaseDirective = /*#__PURE__*/_createClass(function ClrButtonBaseDirective(clrButton) {
        _classCallCheck(this, ClrButtonBaseDirective);

        this.clrButton = clrButton;

        if (!clrButton) {
          return;
        } // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.


        if (!clrButton.name) {
          clrButton.name = Math.random().toString();
        }

        var directiveHolder = clrButton;
        directiveHolder.directives = directiveHolder.directives || [];
        directiveHolder.directives.push(this);
      });
      /***/

    },

    /***/
    "3io1":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/configurations/configurations.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ConfigurationsModule */

    /***/
    function io1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationsModule", function () {
        return ConfigurationsModule;
      });

      var ConfigurationsModule = /*#__PURE__*/_createClass(function ConfigurationsModule() {
        _classCallCheck(this, ConfigurationsModule);
      });
      /***/

    },

    /***/
    "9lKY":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/common/service/navigation/model/knowledge-base-id.ts ***!
      \***************************************************************************/

    /*! exports provided: KnowledgeBaseId */

    /***/
    function lKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KnowledgeBaseId", function () {
        return KnowledgeBaseId;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * IDs used in external KB link navigation
       */


      var KnowledgeBaseId = /*@__PURE__*/function (KnowledgeBaseId) {
        KnowledgeBaseId["PRECHECK_PCP"] = "83954";
        KnowledgeBaseId["VIRTUAL_OBJECTS"] = "2108319";
        KnowledgeBaseId["UPGRADE"] = "2148493";
        KnowledgeBaseId["PERFORMANCE_DIAGNOSTICS"] = "2148770";
        KnowledgeBaseId["SUPPORT_INSIGHT"] = "60206";
        return KnowledgeBaseId;
      }({});
      /***/

    },

    /***/
    "cMmx":
    /*!******************************************************!*\
      !*** ./src/app/vsan/common/util/vsan-dialog-util.ts ***!
      \******************************************************/

    /*! exports provided: VsanDialogUtil, VsanDialogProperties */

    /***/
    function cMmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDialogUtil", function () {
        return VsanDialogUtil;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDialogProperties", function () {
        return VsanDialogProperties;
      });
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanDialogUtil = /*@__PURE__*/function () {
        var VsanDialogUtil = /*#__PURE__*/_createClass(function VsanDialogUtil() {
          _classCallCheck(this, VsanDialogUtil);
        });

        VsanDialogUtil.CAPACITY_MANAGEMENT_DIALOG = {
          width: 800,
          height: 700
        };
        VsanDialogUtil.DELETE_VOLUME_DIALOG = {
          width: 500,
          height: 250
        };
        VsanDialogUtil.MIGRATE_VOLUME_DIALOG = {
          width: 1030,
          height: 710
        };
        VsanDialogUtil.REAPPLY_VOLUME_POLICY_DIALOG = {
          width: 700,
          height: 250
        };
        VsanDialogUtil.DUPLICATE_PCI_ID_MODEL_SELECTION_DIALOG = {
          width: 800,
          height: 500
        };
        VsanDialogUtil.HEALTH_RESTORE_ACTION_DIALOG = {
          width: 550,
          height: 250
        }; // Keep in sync with plugin.xml extension point

        VsanDialogUtil.CLUSTER_POWER_ON_DIALOG = {
          width: 600,
          height: 230
        };
        VsanDialogUtil.VM_IO_DIAGNOSTICS_METRICS_DIALOG = {
          width: 900,
          height: 700
        };
        VsanDialogUtil.VM_IO_DIAGNOSTICS_LATENCY_DIALOG = {
          width: 1000,
          height: 500
        };
        VsanDialogUtil.VM_IO_DIAGNOSTICS_DOM_OWNER_LATENCY_DIALOG = {
          width: 1000,
          height: 400
        };
        VsanDialogUtil.PERF_SVC_EDIT_ACTION_DIALOG = {
          width: 800,
          height: 450
        };
        VsanDialogUtil.PERF_SVC_ENABLE_ACTION_DIALOG = {
          width: 800,
          height: 250
        };
        VsanDialogUtil.CLAIM_DISKS_ACTION_DIALOG = {
          width: 1200,
          height: 650
        };
        VsanDialogUtil.VSAN_DISK_CLAIM_ACTION_DIALOG = {
          width: 670,
          height: 300
        };
        return VsanDialogUtil;
      }();

      var VsanDialogProperties = /*#__PURE__*/_createClass(function VsanDialogProperties() {
        _classCallCheck(this, VsanDialogProperties);
      });
      /***/

    },

    /***/
    "jkFw":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/inventory/inventory-browser.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: InventoryBrowserModule */

    /***/
    function jkFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryBrowserModule", function () {
        return InventoryBrowserModule;
      });

      var InventoryBrowserModule = /*#__PURE__*/_createClass(function InventoryBrowserModule() {
        _classCallCheck(this, InventoryBrowserModule);
      });
      /***/

    },

    /***/
    "jpQQ":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/common/model/inline-view-context-key.data.ts ***!
      \*******************************************************************/

    /*! exports provided: InlineViewContextKey */

    /***/
    function jpQQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InlineViewContextKey", function () {
        return InlineViewContextKey;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Hold the context keys used in the vsan overview tab by PersistentStorageService.
       * The context is required because in the overview page, the details view is opened inline w/o navigation.
       */


      var InlineViewContextKey = /*@__PURE__*/function () {
        var InlineViewContextKey = /*#__PURE__*/_createClass(function InlineViewContextKey() {
          _classCallCheck(this, InlineViewContextKey);
        });

        InlineViewContextKey.HEALTH_CHECK_CONTEXT_KEY = "__health_check_context__";
        InlineViewContextKey.SERVICES_CONTEXT_KEY = "__services_context__";
        InlineViewContextKey.FAULT_DOMAINS_CONTEXT_KEY = "__fault_domains_context__";
        InlineViewContextKey.RESYNCING_OBJECTS_CONTEXT_KEY = "__resyncing_objects_context__";
        return InlineViewContextKey;
      }();
      /***/

    },

    /***/
    "tsUx":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/external-link/external-link.directive.ts ***!
      \********************************************************************************/

    /*! exports provided: ExternalLinkDirective */

    /***/
    function tsUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalLinkDirective", function () {
        return ExternalLinkDirective;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @directive/clr-button-group/clr-button-base.directive */
      "+u6b");
      /**
       * Decorates a button or an anchor as external link. Requires one of the optional parameters articleId, helpId or url.
       *
       * @param external-link: Optional. Localization key of the text label of the external link. If omitted default label
       * will be used - "Learn more" for anchors or "Ask VMWare" for buttons.
       * @param articleId - Optional. Id of article in knowledge base.
       * @param helpId - Optional. Help id which will redirect to Knowledge Base.
       * @param url - Optional. External URL.
       */


      var ExternalLinkDirective = /*#__PURE__*/function (_directive_clr_button) {
        _inherits(ExternalLinkDirective, _directive_clr_button);

        var _super = _createSuper(ExternalLinkDirective);

        function ExternalLinkDirective(el, resolver, renderer, navigationService, // this variable will be initialized only if the host is clr-button
        clrButton) {
          var _this;

          _classCallCheck(this, ExternalLinkDirective);

          _this = _super.call(this, clrButton);
          _this.el = el;
          _this.resolver = resolver;
          _this.renderer = renderer;
          _this.navigationService = navigationService;
          _this.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
          _this.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
          _this.CONTAINER_CLASS = "icon-name-container";
          _this.NAVIGATION_EVENT_TYPE = "click";
          _this.LEAD_TO_NOWHERE_URL = "javascript://";
          _this.HTML_ELEMENT_SPAN_NAME = "span";
          _this.HTML_ELEMENT_ICON_NAME = "clr-icon";
          _this.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
          _this.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
          _this.ICON_SHAPE_ATTR_NAME = "shape";
          _this.ICON_SHAPE_ATTR_VALUE = "pop-out";
          _this.ICON_SIZE_ATTR_NAME = "size";
          _this.ICON_SIZE_ATTR_VALUE = "16";
          _this.ICON_CLASS_ATTR_NAME = "class";
          _this.ICON_CLASS_ATTR_VALUE = "link";
          _this.ICON_TITLE_ATTR_NAME = "title";
          _this.KB_URL = "http://kb.vmware.com/kb/";
          return _this;
        }

        _createClass(ExternalLinkDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var element = this.el.nativeElement; // continue only if element is HTML link or button

            if (!this.isLink(element) && !this.isButton(element)) {
              // element is clr-button, wait until html button for it is resolved - handled by resloveButton
              return;
            }

            this.prepareExternalLink(element);
          }
        }, {
          key: "resolveButton",
          value: function resolveButton(clrButton, button, index) {
            // only if element is clr-button. At this point the html button is already resolved. Apply on it.
            this.prepareExternalLink(button);
          }
        }, {
          key: "prepareExternalLink",
          value: function prepareExternalLink(element) {
            this.renderer.addClass(element, this.CONTAINER_CLASS);
            this.setText(element);

            if (this.isLink(element)) {
              this.decorateLink(element);
            } else {
              this.addLinkRole(element);
            }

            this.initializeNavigationHandler(element);
          }
        }, {
          key: "isButton",
          value: function isButton(element) {
            return element instanceof HTMLButtonElement;
          }
        }, {
          key: "isLink",
          value: function isLink(element) {
            return element instanceof HTMLAnchorElement;
          }
        }, {
          key: "setText",
          value: function setText(element) {
            var span = this.renderer.createElement(this.HTML_ELEMENT_SPAN_NAME);
            span.innerText = this.getText(element);
            this.renderer.appendChild(element, span);
            var icon = this.renderer.createElement(this.HTML_ELEMENT_ICON_NAME);
            icon.setAttribute(this.ICON_SHAPE_ATTR_NAME, this.ICON_SHAPE_ATTR_VALUE);
            icon.setAttribute(this.ICON_SIZE_ATTR_NAME, this.ICON_SIZE_ATTR_VALUE);
            icon.setAttribute(this.ICON_CLASS_ATTR_NAME, this.ICON_CLASS_ATTR_VALUE); // Set title of the icon for screen readers clarity

            icon.setAttribute(this.ICON_TITLE_ATTR_NAME, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.label.externalLink.icon"));
            this.renderer.appendChild(element, icon);
          }
        }, {
          key: "getText",
          value: function getText(element) {
            if (this.anchorText) {
              return this.anchorText;
            }

            var key = this.isButton(element) ? this.ASK_VMWARE_DEFAULT_TEXT_KEY : this.LEARN_MORE_DEFAULT_TEXT_KEY;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key);
          }
        }, {
          key: "decorateLink",
          value: function decorateLink(element) {
            var linkElement = element; // don't use href attribute. If omitted, the link will be not visualized properly.

            linkElement.href = this.LEAD_TO_NOWHERE_URL; // display link on same line

            linkElement.style.display = "inline-flex";
          }
        }, {
          key: "initializeNavigationHandler",
          value: function initializeNavigationHandler(element) {
            var _this2 = this;

            element.addEventListener(this.NAVIGATION_EVENT_TYPE, function () {
              if (_this2.helpId) {
                _this2.navigationService.askVMware(_this2.helpId);

                return;
              }

              if (_this2.articleId) {
                _this2.navigationService.navigateToAddress("".concat(_this2.KB_URL).concat(_this2.articleId));

                return;
              }

              if (_this2.url) {
                _this2.navigationService.navigateToAddress(_this2.url);
              }
            });
          } // Indicate external navigation by assigning "link" role

        }, {
          key: "addLinkRole",
          value: function addLinkRole(element) {
            this.renderer.setAttribute(element, this.HTML_ELEMENT_ROLE_ATTR_NAME, this.HTML_ELEMENT_ROLE_ATTR_VALUE);
          }
        }]);

        return ExternalLinkDirective;
      }(_directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__["ClrButtonBaseDirective"]);
      /***/

    },

    /***/
    "v8iv":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/common/component/search/search.module.ts ***!
      \***************************************************************/

    /*! exports provided: SearchModule */

    /***/
    function v8iv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
        return SearchModule;
      });

      var SearchModule = /*#__PURE__*/_createClass(function SearchModule() {
        _classCallCheck(this, SearchModule);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=136-es5.js.map