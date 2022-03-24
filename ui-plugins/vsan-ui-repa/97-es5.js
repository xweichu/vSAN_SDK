(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97], {
    /***/
    "2e3P":
    /*!********************************************************************!*\
      !*** ./node_modules/ngx-window-token/fesm2015/ngx-window-token.js ***!
      \********************************************************************/

    /*! exports provided: WINDOW */

    /***/
    function e3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW", function () {
        return WINDOW;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return window;
        }
      } : undefined);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/
    },

    /***/
    "IbkX":
    /*!**************************************************************!*\
      !*** ./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js ***!
      \**************************************************************/

    /*! exports provided: ClipboardService, ClipboardDirective, ClipboardModule, ClipboardIfSupportedDirective */

    /***/
    function IbkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
        return ClipboardService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function () {
        return ClipboardDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardModule", function () {
        return ClipboardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function () {
        return ClipboardIfSupportedDirective;
      });
      /* harmony import */


      var ngx_window_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-window-token */
      "2e3P");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ClipboardService = /*@__PURE__*/function () {
        var ClipboardService = /*#__PURE__*/function () {
          /**
           * @param {?} document
           * @param {?} window
           */
          function ClipboardService(document, window) {
            _classCallCheck(this, ClipboardService);

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


          _createClass(ClipboardService, [{
            key: "configure",
            value: function configure(config) {
              this.config = config;
            }
            /**
             * @return {?}
             */

          }, {
            key: "isSupported",
            get: function get() {
              return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
            }
            /**
             * @param {?} element
             * @return {?}
             */

          }, {
            key: "isTargetValid",
            value: function isTargetValid(element) {
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

          }, {
            key: "copyFromInputElement",
            value: function copyFromInputElement(targetElm) {
              try {
                this.selectTarget(targetElm);
                /** @type {?} */

                var re = this.copyText();
                this.clearSelection(targetElm, this.window);
                return re && this.isCopySuccessInIE11();
              } catch (error) {
                return false;
              }
            } // this is for IE11 return true even if copy fail

            /**
             * @return {?}
             */

          }, {
            key: "isCopySuccessInIE11",
            value: function isCopySuccessInIE11() {
              /** @type {?} */
              var clipboardData = this.window['clipboardData'];

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

          }, {
            key: "copyFromContent",
            value: function copyFromContent(content) {
              var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.window.document.body;

              // check if the temp textarea still belongs to the current container.
              // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
              if (this.tempTextArea && !container.contains(this.tempTextArea)) {
                this.destroy(this.tempTextArea.parentElement);
              }

              if (!this.tempTextArea) {
                this.tempTextArea = this.createTempTextArea(this.document, this.window);

                try {
                  container.appendChild(this.tempTextArea);
                } catch (error) {
                  throw new Error('Container should be a Dom element');
                }
              }

              this.tempTextArea.value = content;
              /** @type {?} */

              var toReturn = this.copyFromInputElement(this.tempTextArea);

              if (this.config.cleanUpAfterCopy) {
                this.destroy(this.tempTextArea.parentElement);
              }

              return toReturn;
            } // remove temporary textarea if any

            /**
             * @param {?=} container
             * @return {?}
             */

          }, {
            key: "destroy",
            value: function destroy() {
              var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.window.document.body;

              if (this.tempTextArea) {
                container.removeChild(this.tempTextArea); // removeChild doesn't remove the reference from memory

                this.tempTextArea = undefined;
              }
            } // select the target html input element

            /**
             * @private
             * @param {?} inputElement
             * @return {?}
             */

          }, {
            key: "selectTarget",
            value: function selectTarget(inputElement) {
              inputElement.select();
              inputElement.setSelectionRange(0, inputElement.value.length);
              return inputElement.value.length;
            }
            /**
             * @private
             * @return {?}
             */

          }, {
            key: "copyText",
            value: function copyText() {
              return this.document.execCommand('copy');
            } // Moves focus away from `target` and back to the trigger, removes current selection.

            /**
             * @private
             * @param {?} inputElement
             * @param {?} window
             * @return {?}
             */

          }, {
            key: "clearSelection",
            value: function clearSelection(inputElement, window) {
              // tslint:disable-next-line:no-unused-expression
              inputElement && inputElement.focus();
              window.getSelection().removeAllRanges();
            } // create a fake textarea for copy command

            /**
             * @private
             * @param {?} doc
             * @param {?} window
             * @return {?}
             */

          }, {
            key: "createTempTextArea",
            value: function createTempTextArea(doc, window) {
              /** @type {?} */
              var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
              /** @type {?} */

              var ta;
              ta = doc.createElement('textarea'); // Prevent zooming on iOS

              ta.style.fontSize = '12pt'; // Reset box model

              ta.style.border = '0';
              ta.style.padding = '0';
              ta.style.margin = '0'; // Move element out of screen horizontally

              ta.style.position = 'absolute';
              ta.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

              /** @type {?} */

              var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
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

          }, {
            key: "pushCopyReponse",
            value: function pushCopyReponse(response) {
              this.copySubject.next(response);
            }
          }]);

          return ClipboardService;
        }();
        /** @nocollapse */


        ClipboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({
          factory: function ClipboardService_Factory() {
            return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"], 8));
          },
          token: ClipboardService,
          providedIn: "root"
        });
        return ClipboardService;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClipboardDirective = /*#__PURE__*/function () {
        /**
         * @param {?} clipboardSrv
         */
        function ClipboardDirective(clipboardSrv) {
          _classCallCheck(this, ClipboardDirective);

          this.clipboardSrv = clipboardSrv;
          this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        } // tslint:disable-next-line:no-empty

        /**
         * @return {?}
         */


        _createClass(ClipboardDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clipboardSrv.destroy(this.container);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick(event) {
            if (!this.clipboardSrv.isSupported) {
              this.handleResult(false, undefined, event);
            } else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
              this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
            } else if (this.cbContent) {
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

        }, {
          key: "handleResult",
          value: function handleResult(succeeded, copiedContent, event) {
            /** @type {?} */
            var response = {
              isSuccess: succeeded,
              event: event
            };

            if (succeeded) {
              response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
              });
              this.cbOnSuccess.emit(response);
            } else {
              this.cbOnError.emit(response);
            }

            this.clipboardSrv.pushCopyReponse(response);
          }
        }]);

        return ClipboardDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClipboardIfSupportedDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _clipboardService
         * @param {?} _viewContainerRef
         * @param {?} _templateRef
         */
        function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
          _classCallCheck(this, ClipboardIfSupportedDirective);

          this._clipboardService = _clipboardService;
          this._viewContainerRef = _viewContainerRef;
          this._templateRef = _templateRef;
        }
        /**
         * @return {?}
         */


        _createClass(ClipboardIfSupportedDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._clipboardService.isSupported) {
              this._viewContainerRef.createEmbeddedView(this._templateRef);
            }
          }
        }]);

        return ClipboardIfSupportedDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClipboardModule = /*#__PURE__*/_createClass(function ClipboardModule() {
        _classCallCheck(this, ClipboardModule);
      });
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

      /***/

    }
  }]);
})();
//# sourceMappingURL=97-es5.js.map