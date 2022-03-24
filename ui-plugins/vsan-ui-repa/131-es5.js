(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131], {
    /***/
    "0mRq":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/signpost-title/signpost-title.directive.ts ***!
      \**********************************************************************************/

    /*! exports provided: SignpostTitleDirective */

    /***/
    function mRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignpostTitleDirective", function () {
        return SignpostTitleDirective;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * Attribute directive for setting a custom title to the clr-icon inside a clr-signpost.
       * It also adds aria-label with the same value and aria-expanded="false" to the button, holding the icon.
       * Used for changing the title when a clr-icon is not explicitly added inside a clr-signpost.
       */


      var SignpostTitleDirective = /*#__PURE__*/function () {
        function SignpostTitleDirective(el, renderer) {
          _classCallCheck(this, SignpostTitleDirective);

          this.el = el;
          this.renderer = renderer;
          this.BUTTON_TAG_NAME = "button";
          this.CLR_ICON_TAG_NAME = "clr-icon";
          this.TITLE_ATTRIBUTE = "title";
          this.ARIA_EXPANDED_ATTRIBUTE = "aria-expanded";
          this.ARIA_LABEL_ATTRIBUTE = "aria-label";
        }

        _createClass(SignpostTitleDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this.signpostTitle) {
              return;
            }

            var signpostIcon = this.el.nativeElement.getElementsByTagName(this.CLR_ICON_TAG_NAME).item(0);

            if (signpostIcon) {
              this.renderer.setAttribute(signpostIcon, this.TITLE_ATTRIBUTE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this.signpostTitle));
            }

            var button = this.el.nativeElement.getElementsByTagName(this.BUTTON_TAG_NAME).item(0);

            if (button) {
              this.renderer.setAttribute(button, this.ARIA_EXPANDED_ATTRIBUTE, "false");
              this.renderer.setAttribute(button, this.ARIA_LABEL_ATTRIBUTE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this.signpostTitle));
            }
          }
        }]);

        return SignpostTitleDirective;
      }();
      /***/

    },

    /***/
    "6BUe":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/tree-datagrid.module.ts ***!
      \************************************************************************/

    /*! exports provided: TreeDatagridModule */

    /***/
    function BUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDatagridModule", function () {
        return TreeDatagridModule;
      });

      var TreeDatagridModule = /*#__PURE__*/_createClass(function TreeDatagridModule() {
        _classCallCheck(this, TreeDatagridModule);
      });
      /***/

    },

    /***/
    "A5CE":
    /*!***************************************************!*\
      !*** ./src/app/vsan/common/util/modal-builder.ts ***!
      \***************************************************/

    /*! exports provided: ModalBuilder */

    /***/
    function A5CE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBuilder", function () {
        return ModalBuilder;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logger */
      "a0OL");
      /* harmony import */


      var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./platform */
      "RrEr");
      /* harmony import */


      var _vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vsan-util */
      "UODZ");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ModalBuilder = /*@__PURE__*/function () {
        var ModalBuilder = /*#__PURE__*/function () {
          function ModalBuilder(appId) {
            _classCallCheck(this, ModalBuilder);

            this.appId = appId;
            this.size = ModalBuilder.DEFAULT_SIZE; // When null, the modal dialog will be headless and the docked
            // view is expected to provide a title bar.

            this.title = null;
            this.accessibilityTitle = null;
            this.urlParams = {};
          }

          _createClass(ModalBuilder, [{
            key: "setDimensions",
            value: function setDimensions(dimensions) {
              if (!dimensions || dimensions.length !== 2) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("invalid modal dimensions", dimensions);

                dimensions = ModalBuilder.DEFAULT_SIZE;
              }

              return this.setSize(dimensions[ModalBuilder.WIDTH], dimensions[ModalBuilder.HEIGHT]);
            }
          }, {
            key: "setSize",
            value: function setSize(width, height) {
              this.size = [width, height];
              return this;
            }
          }, {
            key: "setUrlParameters",
            value: function setUrlParameters(params) {
              this.urlParams = params;
              return this;
            }
            /**
             * Set to null if the view provides its own title bar
             */

          }, {
            key: "setTitle",
            value: function setTitle(title) {
              this.title = title;
              return this;
            }
          }, {
            key: "setAccessibilityTitle",
            value: function setAccessibilityTitle(accessibilityTitle) {
              this.accessibilityTitle = accessibilityTitle;
              return this;
            }
            /**
             * Set explicit event target if it is changed before opening the modal.
             * For example when making a preceding request the event target is the XMLHttpRequest object.
             */

          }, {
            key: "setEventTarget",
            value: function setEventTarget(eventTarget) {
              this.eventTarget = eventTarget;
              return this;
            }
            /**
             * Opens a modal dialog and returns a promise to collect the result; On close the target element is focused.
             * @param context - any JS data object, can be retrieved by WebPlatform.getModalContext()
             * @returns {Promise<any>} - Invoked if the dialog invokes WebPlatform.closeModalDialog(arg)
             *       with non-null arg. The promise is never rejected.
             */

          }, {
            key: "open",
            value: function open(context) {
              var _this = this;

              return new Promise(function (accept) {
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement = _this.eventTarget ? _this.eventTarget : event && event.target ? event.target : null;

                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler = function (data) {
                  if (typeof data !== "undefined") {
                    // Deep copy of the object was required to resolve an issue with object's prototype overriding when
                    // passing complex objects in IE11/Edge; Keep it for safety.
                    accept(JSON.parse(JSON.stringify(data)));
                  } else if (_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement && _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus) {
                    // On cancel just focus the target element. Timeout is required as otherwise the focus may be
                    // consumed by the mouse click.
                    setTimeout(function () {
                      return _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus();
                    }, 100);
                  }
                };

                var actionUrl = "".concat(ModalBuilder.APP_URL, "?viewId=").concat(_this.appId);
                var separator = "?";

                for (var param in _this.urlParams) {
                  actionUrl += separator + param + "=" + _this.urlParams[param];
                  separator = "&";
                }

                _platform__WEBPACK_IMPORTED_MODULE_3__["WebPlatform"].openModalDialog(_this.title, actionUrl, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObjectUid, _this.size[0], _this.size[1], _this.title != null, _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler
                /* onClose */
                , context
                /* retrieve with Platform.getModalContext() */
                , _this.accessibilityTitle);
              });
            }
          }]);

          return ModalBuilder;
        }();

        ModalBuilder.WIDTH = 0;
        ModalBuilder.HEIGHT = 1;
        ModalBuilder.DEFAULT_SIZE = [1000, 530];
        ModalBuilder.WIZARD_XL = [1200, 700];
        ModalBuilder.APP_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repa && _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repaExtension ? "index.html" : "/ui/h5-vsan-ui/";
        return ModalBuilder;
      }();
      /***/

    },

    /***/
    "JCZN":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/component/popup-list/popup-list.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PopupListModule */

    /***/
    function JCZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupListModule", function () {
        return PopupListModule;
      });

      var PopupListModule = /*#__PURE__*/_createClass(function PopupListModule() {
        _classCallCheck(this, PopupListModule);
      });
      /***/

    },

    /***/
    "U2P7":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/navigation/vsan-breadcrumb.module.ts ***!
      \****************************************************************************/

    /*! exports provided: VsanBreadcrumbModule */

    /***/
    function U2P7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanBreadcrumbModule", function () {
        return VsanBreadcrumbModule;
      });

      var VsanBreadcrumbModule = /*#__PURE__*/_createClass(function VsanBreadcrumbModule() {
        _classCallCheck(this, VsanBreadcrumbModule);
      });
      /***/

    },

    /***/
    "e724":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/common/component/cell/common-cells.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CommonCellsModule */

    /***/
    function e724(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonCellsModule", function () {
        return CommonCellsModule;
      });

      var CommonCellsModule = /*#__PURE__*/_createClass(function CommonCellsModule() {
        _classCallCheck(this, CommonCellsModule);
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
    "uDMx":
    /*!***************************************************!*\
      !*** ./src/app/vsan/common/vsan-common.module.ts ***!
      \***************************************************/

    /*! exports provided: VsanCommonModule */

    /***/
    function uDMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanCommonModule", function () {
        return VsanCommonModule;
      });

      var VsanCommonModule = /*#__PURE__*/_createClass(function VsanCommonModule() {
        _classCallCheck(this, VsanCommonModule);
      });
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

    },

    /***/
    "wQOa":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/action-button/action-button.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ActionButtonModule */

    /***/
    function wQOa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionButtonModule", function () {
        return ActionButtonModule;
      });

      var ActionButtonModule = /*#__PURE__*/_createClass(function ActionButtonModule() {
        _classCallCheck(this, ActionButtonModule);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=131-es5.js.map