(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16], {
    /***/
    "eJ0f":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/component/dialog/prompt/prompt-question.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: QuestionPrompt */

    /***/
    function eJ0f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionPrompt", function () {
        return QuestionPrompt;
      });
      /* harmony import */


      var _prompt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt.component */
      "eCeK");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var QuestionPrompt = /*#__PURE__*/function (_prompt_component__WE) {
        _inherits(QuestionPrompt, _prompt_component__WE);

        var _super = _createSuper(QuestionPrompt);

        function QuestionPrompt(el, focusTrap) {
          var _this;

          _classCallCheck(this, QuestionPrompt);

          _this = _super.call(this, el, focusTrap);
          _this.confirmText = "vsan.common.yes";
          _this.cancelText = "vsan.common.no";
          return _this;
        }

        return _createClass(QuestionPrompt);
      }(_prompt_component__WEBPACK_IMPORTED_MODULE_0__["PromptComponent"]);
      /***/

    },

    /***/
    "upsi":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/dialog/prompt/prompt-question.component.ngfactory.js ***!
      \********************************************************************************************/

    /*! exports provided: RenderType_QuestionPrompt, View_QuestionPrompt_0, View_QuestionPrompt_Host_0, QuestionPromptNgFactory */

    /***/
    function upsi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuestionPrompt", function () {
        return RenderType_QuestionPrompt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuestionPrompt_0", function () {
        return View_QuestionPrompt_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuestionPrompt_Host_0", function () {
        return View_QuestionPrompt_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionPromptNgFactory", function () {
        return QuestionPromptNgFactory;
      });
      /* harmony import */


      var _prompt_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt.scss.shim.ngstyle */
      "i9CB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../validation/validation.component */
      "ie44");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _prompt_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./prompt-question.component */
      "eJ0f");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_QuestionPrompt = [_prompt_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_QuestionPrompt = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_QuestionPrompt,
        data: {}
      });

      function View_QuestionPrompt_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, "span", [["class", "separator"]], null, null, null, null, null))], null, null);
      }

      function View_QuestionPrompt_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 3, "span", [["class", "subtitle"], ["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_3__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "hidden";
          var currVal_1 = "ellipsis";
          var currVal_2 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _co.subtitle;

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_QuestionPrompt_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 24, "div", [["class", "prompt-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 12, "header", [["class", "title-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 16777216, null, null, 3, "h3", [["class", "title"], ["id", "vsan-dialog-title"], ["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_3__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](16, 0, null, null, 7, "button", [["class", "close"], ["id", "closeBtn"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.cancel() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](17, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](19, 0, null, null, 3, "clr-icon", [["shape", "close"], ["size", "24"]], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](20, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](21, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](22, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 6, 0);

          var currVal_4 = _co.subtitle;

          _ck(_v, 10, 0, currVal_4);

          var currVal_5 = _co.subtitle;

          _ck(_v, 13, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "hidden";
          var currVal_1 = "ellipsis";
          var currVal_2 = "nowrap";

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _co.title;

          _ck(_v, 7, 0, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.common.closeDialog", _co.title));

          _ck(_v, 16, 0, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 19, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.common.srMessage.close")), "");

          _ck(_v, 19, 0, currVal_7);
        });
      }

      function View_QuestionPrompt_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-validation", [], null, [[null, "alertsChange"], [null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.alertMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onClosed" === en) {
            var pd_1 = _co.clearAlerts() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_8__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alerts: [1, "alerts"],
          allowClose: [2, "allowClose"]
        }, {
          onClosed: "onClosed",
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertType;
          var currVal_1 = _co.alertMessages;
          var currVal_2 = _co.allowAlertClose;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_QuestionPrompt_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-lg central-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_QuestionPrompt_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 6, "div", [["class", "busy-indicator-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 3, "div", [["class", "progress loop"], ["id", "busy-indicator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 0, "progress", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, null);
      }

      function View_QuestionPrompt_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 12, "span", [["class", "busy-backdrop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](10, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.busyText;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.busyText;

          _ck(_v, 8, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.busyText;

          _ck(_v, 11, 0, currVal_2);
        });
      }

      function View_QuestionPrompt_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "button", [["id", "primary-btn"]], [[8, "className", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.confirm() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "btn btn-primary action-btn ", _co.confirmStyle, "");

          var currVal_1 = _co.blockButton;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), _co.confirmText));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_QuestionPrompt_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "button", [["class", "btn action-btn"], ["id", "secondary-btn"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.cancel() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](1, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](2, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](3, 1)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.common.closeDialog", _co.title));

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), _co.cancelText));

          _ck(_v, 2, 0, currVal_1);
        });
      }

      function View_QuestionPrompt_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "button", [["class", "btn action-btn"], ["id", "additional-btn"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.additionalAction() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n        ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.blockAdditionalButton;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), _co.additionalButtonText));

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_QuestionPrompt_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 10, "div", [["aria-labelledby", "vsan-dialog-title"], ["class", "prompt-body"], ["id", "prompt-body"], ["role", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](16, 0, null, null, 16, "div", [["class", "footer button-container"], ["id", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](18, 0, null, null, 7, "div", [["class", "button-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](27, 0, null, null, 4, "div", [["class", "button-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_QuestionPrompt_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.title;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.alertMessages && _co.alertMessages.length > 0;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _co.blockContent;

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _co.confirmText;

          _ck(_v, 21, 0, currVal_3);

          var currVal_4 = _co.cancelText;

          _ck(_v, 24, 0, currVal_4);

          var currVal_5 = _co.additionalButtonText;

          _ck(_v, 30, 0, currVal_5);
        }, null);
      }

      function View_QuestionPrompt_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-question-prompt", [], null, null, null, View_QuestionPrompt_0, RenderType_QuestionPrompt)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 114688, null, 0, _prompt_question_component__WEBPACK_IMPORTED_MODULE_10__["QuestionPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusTrapFactory"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var QuestionPromptNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-question-prompt", _prompt_question_component__WEBPACK_IMPORTED_MODULE_10__["QuestionPrompt"], View_QuestionPrompt_Host_0, {
        title: "title",
        subtitle: "subtitle",
        confirmText: "confirmText",
        confirmStyle: "confirmStyle",
        cancelText: "cancelText",
        additionalButtonText: "additionalButtonText",
        blockAdditionalButton: "blockAdditionalButton",
        alertMessages: "alertMessages",
        alertMessage: "alertMessage",
        alertType: "alertType",
        allowAlertClose: "allowAlertClose",
        blockButton: "blockButton",
        blockContent: "blockContent",
        busyText: "busyText"
      }, {
        alertMessagesChange: "alertMessagesChange",
        alertMessageChange: "alertMessageChange",
        onConfirm: "onConfirm",
        onCancel: "onCancel",
        onAdditionalAction: "onAdditionalAction"
      }, ["*"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=16-es5.js.map