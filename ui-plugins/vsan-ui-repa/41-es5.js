(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41], {
    /***/
    "+6+0":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-instance.component.ngfactory.js ***!
      \****************************************************************************************/

    /*! exports provided: RenderType_HistoricalInstanceComponent, View_HistoricalInstanceComponent_0, View_HistoricalInstanceComponent_Host_0, HistoricalInstanceComponentNgFactory */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HistoricalInstanceComponent", function () {
        return RenderType_HistoricalInstanceComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalInstanceComponent_0", function () {
        return View_HistoricalInstanceComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalInstanceComponent_Host_0", function () {
        return View_HistoricalInstanceComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalInstanceComponentNgFactory", function () {
        return HistoricalInstanceComponentNgFactory;
      });
      /* harmony import */


      var _historical_instance_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./historical-instance.scss.shim.ngstyle */
      "0jJ7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _historical_instance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./historical-instance.component */
      "RR1C");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HistoricalInstanceComponent = [_historical_instance_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HistoricalInstanceComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_HistoricalInstanceComponent,
        data: {}
      });

      function View_HistoricalInstanceComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "green-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:rect", [["class", "icon"], ["height", "15.1111"], ["rx", "7.55556"], ["stroke-width", "1"], ["width", "15.1111"], ["x", "0.444444"], ["y", "0.444444"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-icon-", _co.timestamp, "-green");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalInstanceComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 7, ":svg:svg", [["class", "blue-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:rect", [["class", "icon"], ["height", "15.1111"], ["rx", "7.55556"], ["stroke-width", "1"], ["width", "15.1111"], ["x", "0.444444"], ["y", "0.444444"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 0, ":svg:rect", [["fill", "#00567A"], ["height", "2"], ["id", "info_square"], ["width", "2"], ["x", "7"], ["y", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 0, ":svg:rect", [["fill", "#00567A"], ["height", "7"], ["id", "info_rect"], ["width", "2"], ["x", "7"], ["y", "6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-icon-", _co.timestamp, "-blue");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalInstanceComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "grey-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:rect", [["class", "icon"], ["height", "15.1111"], ["rx", "7.55556"], ["stroke-width", "1"], ["width", "15.1111"], ["x", "0.444444"], ["y", "0.444444"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-icon-", _co.timestamp, "-grey");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalInstanceComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "yellow-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:path", [["class", "icon"], ["d", "M9.00428 1.19524L15.039 13.6368C15.3609 14.3005 15.0848 15.0993 14.4246 15.4213C14.2435 15.5097 14.0448 15.5556 13.8435 15.5556H1.77408C1.04091 15.5556 0.444444 14.9592 0.444444 14.221C0.444444 14.0185 0.490334 13.8188 0.578592 13.6368L6.6133 1.19524C6.93488 0.532238 7.73043 0.257404 8.38993 0.579069C8.65749 0.709569 8.8739 0.926455 9.00428 1.19524Z"], ["stroke-width", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-icon-", _co.timestamp, "-yellow");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalInstanceComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "red-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:rect", [["class", "icon"], ["height", "15.1111"], ["rx", "1.55556"], ["stroke-width", "1"], ["width", "15.1111"], ["x", "0.444444"], ["y", "0.444444"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-icon-", _co.timestamp, "-red");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalInstanceComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "span", [["class", "title"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-", _co.timestamp, "-title");

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _co.formatTitle(_co.timestamp);

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_HistoricalInstanceComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](1, 0, null, null, 24, "div", [["class", "tooltip tooltip-md tooltip-bottom-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](3, 0, null, null, 18, "button", [["class", "item instance"]], [[8, "id", 0], [2, "selected", null], [2, "green-item", null], [2, "blue-item", null], [2, "yellow-item", null], [2, "red-item", null], [2, "grey-item", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onClick.emit(_co.timestamp) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_3__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_2__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalInstanceComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalInstanceComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalInstanceComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalInstanceComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalInstanceComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](23, 0, null, null, 1, "span", [["class", "tooltip-content"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](24, null, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalInstanceComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.isActive;

          _ck(_v, 5, 0, currVal_7);

          var currVal_8 = _co.status === _co.VsanHealthStatus.green;

          _ck(_v, 8, 0, currVal_8);

          var currVal_9 = _co.status === _co.VsanHealthStatus.info;

          _ck(_v, 11, 0, currVal_9);

          var currVal_10 = _co.status === _co.VsanHealthStatus.unknown;

          _ck(_v, 14, 0, currVal_10);

          var currVal_11 = _co.status === _co.VsanHealthStatus.yellow;

          _ck(_v, 17, 0, currVal_11);

          var currVal_12 = _co.status === _co.VsanHealthStatus.red;

          _ck(_v, 20, 0, currVal_12);

          var currVal_15 = _co.showTitle;

          _ck(_v, 28, 0, currVal_15);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-", _co.timestamp, "");

          var currVal_1 = _co.isActive;
          var currVal_2 = _co.status === _co.VsanHealthStatus.green;
          var currVal_3 = _co.status === _co.VsanHealthStatus.info;
          var currVal_4 = _co.status === _co.VsanHealthStatus.yellow;
          var currVal_5 = _co.status === _co.VsanHealthStatus.red;
          var currVal_6 = _co.status === _co.VsanHealthStatus.unknown;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instance-tooltip-", _co.timestamp, "");

          _ck(_v, 23, 0, currVal_13);

          var currVal_14 = _co.formatInstanceDetails(_co.timestamp);

          _ck(_v, 24, 0, currVal_14);
        });
      }

      function View_HistoricalInstanceComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-historical-instance", [], null, null, null, View_HistoricalInstanceComponent_0, RenderType_HistoricalInstanceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _historical_instance_component__WEBPACK_IMPORTED_MODULE_6__["HistoricalInstanceComponent"], [], null, null)], null, null);
      }

      var HistoricalInstanceComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-historical-instance", _historical_instance_component__WEBPACK_IMPORTED_MODULE_6__["HistoricalInstanceComponent"], View_HistoricalInstanceComponent_Host_0, {
        isActive: "isActive",
        status: "status",
        timestamp: "timestamp",
        showTitle: "showTitle"
      }, {
        onClick: "onClick"
      }, []);
      /***/

    },

    /***/
    "0Qc/":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/health/view/card/details-card.scss.shim.ngstyle.js ***!
      \*************************************************************************/

    /*! exports provided: styles */

    /***/
    function Qc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  overflow: hidden;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n[_nghost-%COMP%]   .central-spinner[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n.header-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  flex: 1 0 0rem;\n}\n.header-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-bottom: 0 !important;\n}\n.instances-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  background-color: var(--vsan-main-background-color);\n  border: 0.05rem solid var(--vsan-border-color);\n  border-radius: 0.15rem;\n  padding: 0.6rem;\n}\n.instances-info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.instances-info[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .instances-info[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.instances-info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\nclr-tabs[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], clr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-bottom: 0.3rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     .btn {\n  overflow: hidden;\n}\nclr-tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     clr-datagrid .datagrid-column-title {\n  display: inline-block;\n}\n.no-test-data[_ngcontent-%COMP%], .missing-instance-details-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n}\n.no-test-data[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.no-test-data[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.no-test-data[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .no-test-data[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.no-test-data[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.indented-content[_ngcontent-%COMP%] {\n  padding-left: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9jYXJkL2RldGFpbHMtY2FyZC5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTFFBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQU1BLGdCQUFBO0FBSUg7QUU2Qkc7RUFDRyxnQ0FBQTtBRjNCTjtBRTZCRzs7RUFHRyxnQ0FBQTtBRjVCTjtBRThCRztFQUNHLDhCQUFBO0FGNUJOO0FBakJHO0VBQ0csNkJBQUE7QUFtQk47QUFkQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0FBaUJIO0FBaEJHO0VBQ0csY0FBQTtBQWtCTjtBQWhCRztFQUNHLFNBQUE7QUFrQk47QUFkQTtFQUNHLG1CQUFBO0VBQ0EsMkJBQUE7QUFpQkg7QUFkQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtREdrQnFCO0VIakJyQiw4Q0dTVztFSFJYLHNCR3RCUTtFSHVCUixlRzFCTztBSDJDVjtBRVZHO0VBQ0csZ0NBQUE7QUZZTjtBRVZHOztFQUdHLGdDQUFBO0FGV047QUVURztFQUNHLDhCQUFBO0FGV047QUF2QkE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBMEJIO0FBekJHO0VBQ0csY0FBQTtBQTJCTjtBQXpCRztFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUEyQk47QUVsQ0c7RUFDRyxnQ0FBQTtBRm9DTjtBRWxDRzs7RUFHRyxnQ0FBQTtBRm1DTjtBRWpDRztFQUNHLDhCQUFBO0FGbUNOO0FBbkNNO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUdBLGdDQUFBO0FBbUNUO0FFcENHO0VBQ0ssK0JBQUE7QUZzQ1I7QUVwQ0c7RUFJRywrQkFBQTtBRm1DTjtBRWxDTTtFQUNHLCtCQUFBO0FGb0NUO0FFakNHO0VBRUcsK0JBQUE7QUZrQ047QUVoQ007RUFDRywrQkFBQTtBRmtDVDtBRS9CRztFQUNHLDZCQUFBO0FGaUNOO0FBaERNO0VBQ0csZ0JBQUE7QUFrRFQ7QUEvQ007RUFDRyxxQkFBQTtBQWlEVDtBQTVDQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBK0NIO0FBM0NHO0VBQ0csV0FBQTtFQUNBLFlBQUE7QUE4Q047QUV2Rkc7RUFDRyxnQ0FBQTtBRnlGTjtBRXZGRzs7RUFHRyxnQ0FBQTtBRndGTjtBRXRGRztFQUNHLDhCQUFBO0FGd0ZOO0FBbkRBO0VBQ0csb0JHbEZPO0FId0lWIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9jYXJkL2RldGFpbHMtY2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJHRhYi1iYXItaGVpZ2h0OiAkdnNhbi1saW5lLWhlaWdodC1tZDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKjM7XG4kc3RyaW5nLWNvbHVtbi13aWR0aDogMTQuNHJlbTsgLy8gfjMwMGlzaCBweFxuJGxhcmdlLXNpZ25wb3N0LXdpZHRoOiAzNy4ycmVtO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCBhdXRvO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG4gICAvLyBhbGlnbiBsb2FkaW5nIHNwaW5uZXIgaW4gdGhlIGNlbnRlciBvZiBkZXRhaWxzIHBhbmVsXG4gICAuY2VudHJhbC1zcGlubmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgfVxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgaDQge1xuICAgICAgZmxleDogMSAwIDByZW07XG4gICB9XG4gICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmluc3RhbmNlcy1pbmZvIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1tYWluO1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXI7XG4gICBib3JkZXItcmFkaXVzOiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTtcbiAgIHBhZGRpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG5jbHItdGFicyB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgLm5hdiB7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgIH1cbiAgIC5jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMSAwIDByZW07XG4gICAgICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbiAgICAgIC5hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZztcbiAgICAgICAgIC8vIEZpeCBtYXJnaW4tYm90dG9tIHRvIHVzZSBidXR0b24gZ3JvdXAgc3BhY2luZyBhcyB0aGlzIGlzIGEgY3VzdG9tIGRpdlxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJyaWRlIHRoZSBjbGFyaXR5IG92ZXJmbG93IHZpc2libGUsIHdoaWNoIGluIGNvbWJpbmF0aW9uIG9mIG1heCB3aWR0aCAxOHJlbVxuICAgICAgLy8gY2F1c2VzIGxvbmcgYnV0dG9ucyB0byBvdmVybGFwIHdpdGggdGhlIG5leHQgZWxlbWVudHMuXG4gICAgICA6Om5nLWRlZXAgLmJ0biB7XG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLy8gb3ZlcnJpZGUgZGVmYXVsdCBmbGV4IGRpc3BsYXkgc28gdGhhdCB2c2FuLXNob3ctdGl0bGUgZGlyZWN0aXZlIGNhbiBiZSBhcHBsaWVkXG4gICAgICA6Om5nLWRlZXAgY2xyLWRhdGFncmlkIC5kYXRhZ3JpZC1jb2x1bW4tdGl0bGUge1xuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgfVxufVxuXG4ubm8tdGVzdC1kYXRhLCAubWlzc2luZy1pbnN0YW5jZS1kZXRhaWxzLW1lc3NhZ2Uge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgYXV0bztcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vLXRlc3QtZGF0YSB7XG4gICBjbHItaWNvbiB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgIH1cbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4uaW5kZW50ZWQtY29udGVudCB7XG4gICBwYWRkaW5nLWxlZnQ6ICR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjtcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "0ReQ":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/health/action/remediate-action-constants.ts ***!
      \******************************************************************/

    /*! exports provided: RemediateActions */

    /***/
    function ReQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemediateActions", function () {
        return RemediateActions;
      });
      /* Copyright 2018-2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Holds the action ids from the cluster > monitor > health check page
       */


      var RemediateActions = /*@__PURE__*/function (RemediateActions) {
        RemediateActions[RemediateActions["RemediateClusterConfig"] = 0] = "RemediateClusterConfig";
        RemediateActions[RemediateActions["RemediateDedup"] = 1] = "RemediateDedup";
        RemediateActions[RemediateActions["UpgradeVsanDiskFormat"] = 2] = "UpgradeVsanDiskFormat";
        RemediateActions[RemediateActions["RepairClusterObjectsAction"] = 3] = "RepairClusterObjectsAction";
        RemediateActions[RemediateActions["PurgeInaccessSwapObjs"] = 4] = "PurgeInaccessSwapObjs";
        RemediateActions[RemediateActions["LoginVumIsoDepot"] = 5] = "LoginVumIsoDepot";
        RemediateActions[RemediateActions["EnablePerformanceServiceAction"] = 6] = "EnablePerformanceServiceAction";
        RemediateActions[RemediateActions["RemediateFileService"] = 7] = "RemediateFileService";
        RemediateActions[RemediateActions["EnableCeip"] = 8] = "EnableCeip";
        RemediateActions[RemediateActions["ClusterUpgrade"] = 9] = "ClusterUpgrade";
        RemediateActions[RemediateActions["RelayoutVsanObjects"] = 10] = "RelayoutVsanObjects";
        RemediateActions[RemediateActions["RemediateFileServiceImbalance"] = 11] = "RemediateFileServiceImbalance";
        return RemediateActions;
      }({});
      /***/

    },

    /***/
    "0jJ7":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-instance.scss.shim.ngstyle.js ***!
      \**************************************************************************************/

    /*! exports provided: styles */

    /***/
    function jJ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".title[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  line-height: 1.6rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  height: 1.68rem;\n  border-width: 0;\n  border-style: none;\n  border-top: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  background-color: transparent;\n  padding: 0;\n  justify-content: center;\n}\n.item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.item[_ngcontent-%COMP%]   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-fill);\n  stroke: var(--health-historical-green-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-fill);\n  stroke: var(--health-historical-blue-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-fill);\n  stroke: var(--health-historical-yellow-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-fill);\n  stroke: var(--health-historical-red-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-bg-color);\n  stroke: var(--vsan-status-unknown-border-color);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-details-color);\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-bg-color) !important;\n}\n.item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.item[_ngcontent-%COMP%]:focus.green-item {\n  border-bottom-color: var(--health-historical-green-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.blue-item {\n  border-bottom-color: var(--health-historical-blue-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.yellow-item {\n  border-bottom-color: var(--health-historical-yellow-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.red-item {\n  border-bottom-color: var(--health-historical-red-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.grey-item {\n  border-bottom-color: var(--vsan-status-unknown-border-color);\n}\n[_nghost-%COMP%] {\n  width: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  align-items: center;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  cursor: pointer;\n}\n.instance[_ngcontent-%COMP%] {\n  width: 1.2rem;\n}\n.instance.selected[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.instance[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  width: 0.8rem;\n  height: 0.8rem;\n  top: 0.2rem;\n  transition: width 0.2s cubic-bezier(0.38, 0.9, 0.8, 0.96), height 0.2s cubic-bezier(0.38, 0.9, 0.8, 0.96);\n  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));\n}\n.instance[_ngcontent-%COMP%]:active:not(.selected)   svg[_ngcontent-%COMP%] {\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-left: -0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oaXN0b3JpY2FsL2hpc3RvcmljYWwtaW5zdGFuY2Uuc2NzcyIsInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oaXN0b3JpY2FsL2hpc3RvcmljYWwtZGV0YWlscy1zaGFyZWQuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTDhDQTtFQUNHLGtCR3lFaUI7RUh4RWpCLG1CQUFBO0VBQ0EsZ0JHb0Z1QjtFSG5GdkIsbUJBQUE7QUQ1Qkg7QUMrQkE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFsRG1CO0VBbURuQixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FsRHNCO0VBbUR0QixvQ0FuRHNCO0VBb0R0Qiw2QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBRDVCSDtBQzhCRztFQUNHLGtCQUFBO0FENUJOO0FDNkJNO0VBbENILDhDQXJCZTtFQXVCWixrREF4QmM7QUQrQnBCO0FDNkJNO0VBdENILDZDQWpCYztFQW1CWCxpREFwQmE7QUQrQm5CO0FDNkJNO0VBMUNILCtDQWJnQjtFQWViLG1EQWhCZTtBRCtCckI7QUM2Qk07RUE5Q0gsNENBVGE7RUFXVixnREFaWTtBRCtCbEI7QUM2Qk07RUFsREgseUNBTGM7RUFPWCwrQ0FSYTtBRCtCbkI7QUNnQ1M7RUF6RE4sb0RBcEJxQjtBRGdEeEI7QUNpQ1M7RUE3RE4sbURBaEJvQjtBRCtDdkI7QUNrQ1M7RUFqRU4scURBWnNCO0FEOEN6QjtBQ21DUztFQXJFTixrREFSbUI7QUQ2Q3RCO0FDb0NTO0VBekVOLDhDQUpvQjtBRDRDdkI7QUN5Q1M7RUFqRk4sZ0VBa0ZvQztBRHZDdkM7QUMwQ1M7RUFyRk4sK0RBc0ZvQztBRHhDdkM7QUMyQ1M7RUF6Rk4saUVBMEZvQztBRHpDdkM7QUM0Q1M7RUE3Rk4sOERBOEZvQztBRDFDdkM7QUM2Q1M7RUFqR04sb0RBa0dvQztBRDNDdkM7QUNnREc7RUFDRyxhQUFBO0FEOUNOO0FDZ0RNO0VBQ0csK0RBaklXO0FEbUZwQjtBQ2lETTtFQUNHLDhEQWpJVTtBRGtGbkI7QUNrRE07RUFDRyxnRUFqSVk7QURpRnJCO0FDbURNO0VBQ0csNkRBaklTO0FEZ0ZsQjtBQ29ETTtFQUNHLDREQWpJVTtBRCtFbkI7QUFoR0E7RUFDRyxhQVI0QjtFQVM1QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFtR0g7QUFsR0c7RUFDRyxhQWR5QjtFQWV6QixlQUFBO0FBb0dOO0FBaEdBO0VBQ0csYUFwQjRCO0FBdUgvQjtBQWhHTTtFQUNHLGFBeEJzQjtFQXlCdEIsY0F4QnVCO0FBMEhoQztBQTlGRztFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFqQ2dCO0VBa0NoQixjSUVjO0VKRGQsV0FBQTtFQUNBLHlHQUFBO0VDSUgsb0RBQUE7QUQ4Rkg7QUE3Rk07RUFDRyxhQXZDb0I7RUF3Q3BCLGNBeENvQjtBQXVJN0I7QUExRkE7RUFDRyxzQkFBQTtFQUNBLG9CQUFBO0FBNkZIIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oaXN0b3JpY2FsL2hpc3RvcmljYWwtaW5zdGFuY2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIwLTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL2hpc3RvcmljYWwtZGV0YWlscy1zaGFyZWQuc2Nzc1wiO1xuXG4kaW5zdGFuY2UtaWNvbi13aWR0aDogMC44cmVtO1xuJHNlbGVjdGVkLWluc3RhbmNlLWljb24td2lkdGg6IDEuMnJlbTtcbiRzZWxlY3RlZC1pbnN0YW5jZS1pY29uLWhlaWdodDogMS4ycmVtO1xuJGNsaWNrZWQtaW5zdGFuY2UtaWNvbi1zaXplOiAwLjdyZW07XG5cbiRhbmltYXRpb24tZHVyYXRpb246IC4ycztcbiRhbmltYXRpb24tZWZmZWN0OiBjdWJpYy1iZXppZXIoLjM4LC45MCwuODAsLjk2KTtcblxuOmhvc3Qge1xuICAgd2lkdGg6ICRzZWxlY3RlZC1pbnN0YW5jZS1pY29uLXdpZHRoO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBidXR0b24ge1xuICAgICAgd2lkdGg6ICRzZWxlY3RlZC1pbnN0YW5jZS1pY29uLXdpZHRoO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgfVxufVxuXG4uaW5zdGFuY2Uge1xuICAgd2lkdGg6ICRzZWxlY3RlZC1pbnN0YW5jZS1pY29uLXdpZHRoO1xuXG4gICAmLnNlbGVjdGVkIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgICB3aWR0aDogJHNlbGVjdGVkLWluc3RhbmNlLWljb24td2lkdGg7XG4gICAgICAgICBoZWlnaHQ6ICRzZWxlY3RlZC1pbnN0YW5jZS1pY29uLWhlaWdodDtcbiAgICAgIH1cbiAgIH1cblxuICAgc3ZnIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIHdpZHRoOiAkaW5zdGFuY2UtaWNvbi13aWR0aDtcbiAgICAgIGhlaWdodDogJGljb24taGVpZ2h0O1xuICAgICAgdG9wOiAoJHNlbGVjdGVkLWljb24taGVpZ2h0IC0gJGljb24taGVpZ2h0KSAvIDI7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAkYW5pbWF0aW9uLWR1cmF0aW9uICRhbmltYXRpb24tZWZmZWN0LCBoZWlnaHQgJGFuaW1hdGlvbi1kdXJhdGlvbiAkYW5pbWF0aW9uLWVmZmVjdDtcbiAgICAgIC8vIEFkZCBzaGFkb3cgZWZmZWN0IHRvIHRoZSBpbnN0YW5jZSBzaGFwZVxuICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtc2hhZG93O1xuICAgfVxuICAgJjphY3RpdmU6bm90KC5zZWxlY3RlZCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgIHdpZHRoOiAkY2xpY2tlZC1pbnN0YW5jZS1pY29uLXNpemU7XG4gICAgICAgICBoZWlnaHQ6ICRjbGlja2VkLWluc3RhbmNlLWljb24tc2l6ZTtcbiAgICAgIH1cbiAgIH1cbn1cblxuLnRpdGxlIHtcbiAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICBtYXJnaW4tbGVmdDogLSgkaXRlbXMtaG9yaXpvbnRhbC1pbmRlbnRhdGlvbiAtICR2c2FuLWVsZW1lbnQtc3BhY2luZyk7XG59IiwiLyogQ29weXJpZ2h0IDIwMjAtMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJGl0ZW1zLWhvcml6b250YWwtaW5kZW50YXRpb246ICR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjtcbiRpdGVtcy10b3A6IDEuN3JlbTtcbiRpY29uLWhlaWdodDogJHZzYW4taWNvbi1zaXplLXNtO1xuJHNlbGVjdGVkLWljb24taGVpZ2h0OiAxLjJyZW07XG4kaWNvbi13cmFwcGVyLWhlaWdodDogMS42OHJlbTtcbiRwZXJpb2QtaWNvbi13aWR0aDogMS43cmVtO1xuJGJhY2stYnV0dG9uLXdpZHRoOiAkdnNhbi1sZztcbiR0b3AtYm90dG9tLWl0ZW0tYm9yZGVyOiAycHggJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiB0cmFuc3BhcmVudDtcblxuJGdyZWVuLWl0ZW0tc3Ryb2tlOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ncmVlbi1pdGVtLXN0cm9rZSk7XG4kZ3JlZW4taXRlbS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ncmVlbi1pdGVtLWZpbGwpO1xuJGdyZWVuLWl0ZW0taG92ZXItZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtZ3JlZW4taXRlbS1ob3Zlci1maWxsKTtcbiRncmVlbi1pdGVtLWFjdGl2ZS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ncmVlbi1pdGVtLWFjdGl2ZS1maWxsKTtcbiRibHVlLWl0ZW0tc3Ryb2tlOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ibHVlLWl0ZW0tc3Ryb2tlKTtcbiRibHVlLWl0ZW0tZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtYmx1ZS1pdGVtLWZpbGwpO1xuJGJsdWUtaXRlbS1ob3Zlci1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ibHVlLWl0ZW0taG92ZXItZmlsbCk7XG4kYmx1ZS1pdGVtLWFjdGl2ZS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ibHVlLWl0ZW0tYWN0aXZlLWZpbGwpO1xuJHllbGxvdy1pdGVtLXN0cm9rZTogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwteWVsbG93LWl0ZW0tc3Ryb2tlKTtcbiR5ZWxsb3ctaXRlbS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC15ZWxsb3ctaXRlbS1maWxsKTtcbiR5ZWxsb3ctaXRlbS1ob3Zlci1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC15ZWxsb3ctaXRlbS1ob3Zlci1maWxsKTtcbiR5ZWxsb3ctaXRlbS1hY3RpdmUtZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwteWVsbG93LWl0ZW0tYWN0aXZlLWZpbGwpO1xuJHJlZC1pdGVtLXN0cm9rZTogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtcmVkLWl0ZW0tc3Ryb2tlKTtcbiRyZWQtaXRlbS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1yZWQtaXRlbS1maWxsKTtcbiRyZWQtaXRlbS1ob3Zlci1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1yZWQtaXRlbS1ob3Zlci1maWxsKTtcbiRyZWQtaXRlbS1hY3RpdmUtZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtcmVkLWl0ZW0tYWN0aXZlLWZpbGwpO1xuJGdyZXktaXRlbS1zdHJva2U6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRncmV5LWl0ZW0tZmlsbDogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kZ3JleS1pdGVtLWhvdmVyLWZpbGw6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kZ3JleS1pdGVtLWFjdGl2ZS1maWxsOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcblxuQG1peGluIHN2Zy1lbGVtZW50LWNvbG9yKCRmaWxsLCAkc3Ryb2tlOiBcIlwiKSB7XG4gICBmaWxsOiAkZmlsbDtcbiAgIEBpZiAoJHN0cm9rZSAhPSBcIlwiKSB7XG4gICAgICBzdHJva2U6ICRzdHJva2U7XG4gICB9XG59XG5cbkBtaXhpbiBzdmctZWxlbWVudC1zaGFkb3coKSB7XG4gICAkc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggM3B4ICRzaGFkb3ctY29sb3IpO1xuICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDNweCAkc2hhZG93LWNvbG9yKTtcbn1cblxuLnRpdGxlIHtcbiAgIGZvbnQtc2l6ZTogJHZzYW4tZm9udC1zaXplLXhzO1xuICAgbGluZS1oZWlnaHQ6ICRpY29uLWhlaWdodCAqIDI7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLml0ZW0ge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGhlaWdodDogJGljb24td3JhcHBlci1oZWlnaHQ7XG4gICBib3JkZXItd2lkdGg6IDA7XG4gICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICBib3JkZXItdG9wOiAkdG9wLWJvdHRvbS1pdGVtLWJvcmRlcjtcbiAgIGJvcmRlci1ib3R0b206ICR0b3AtYm90dG9tLWl0ZW0tYm9yZGVyO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICBwYWRkaW5nOiAwO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgIHN2ZyB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAmLmdyZWVuLWl0ZW0gLmljb24ge1xuICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGdyZWVuLWl0ZW0tZmlsbCwgJGdyZWVuLWl0ZW0tc3Ryb2tlKTtcbiAgICAgIH1cblxuICAgICAgJi5ibHVlLWl0ZW0gLmljb24ge1xuICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGJsdWUtaXRlbS1maWxsLCAkYmx1ZS1pdGVtLXN0cm9rZSk7XG4gICAgICB9XG5cbiAgICAgICYueWVsbG93LWl0ZW0gLmljb24ge1xuICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJHllbGxvdy1pdGVtLWZpbGwsICR5ZWxsb3ctaXRlbS1zdHJva2UpO1xuICAgICAgfVxuXG4gICAgICAmLnJlZC1pdGVtIC5pY29uIHtcbiAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRyZWQtaXRlbS1maWxsLCAkcmVkLWl0ZW0tc3Ryb2tlKTtcbiAgICAgIH1cblxuICAgICAgJi5ncmV5LWl0ZW0gLmljb24ge1xuICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGdyZXktaXRlbS1maWxsLCAkZ3JleS1pdGVtLXN0cm9rZSk7XG4gICAgICB9XG4gICB9XG5cbiAgICY6aG92ZXIge1xuICAgICAgJjpub3QoOmFjdGl2ZSkgc3ZnIHtcbiAgICAgICAgICYuZ3JlZW4taXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkZ3JlZW4taXRlbS1ob3Zlci1maWxsKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi5ibHVlLWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGJsdWUtaXRlbS1ob3Zlci1maWxsKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi55ZWxsb3ctaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkeWVsbG93LWl0ZW0taG92ZXItZmlsbCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYucmVkLWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJHJlZC1pdGVtLWhvdmVyLWZpbGwpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLmdyZXktaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkZ3JleS1pdGVtLWhvdmVyLWZpbGwpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICAmOmFjdGl2ZTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICBzdmcge1xuICAgICAgICAgJi5ncmVlbi1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRncmVlbi1pdGVtLWFjdGl2ZS1maWxsICFpbXBvcnRhbnQpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLmJsdWUtaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkYmx1ZS1pdGVtLWFjdGl2ZS1maWxsICFpbXBvcnRhbnQpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLnllbGxvdy1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCR5ZWxsb3ctaXRlbS1hY3RpdmUtZmlsbCAhaW1wb3J0YW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi5yZWQtaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkcmVkLWl0ZW0tYWN0aXZlLWZpbGwgIWltcG9ydGFudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYuZ3JleS1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRncmV5LWl0ZW0tYWN0aXZlLWZpbGwgIWltcG9ydGFudCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgJi5ncmVlbi1pdGVtIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRncmVlbi1pdGVtLXN0cm9rZTtcbiAgICAgIH1cblxuICAgICAgJi5ibHVlLWl0ZW0ge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJsdWUtaXRlbS1zdHJva2U7XG4gICAgICB9XG5cbiAgICAgICYueWVsbG93LWl0ZW0ge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHllbGxvdy1pdGVtLXN0cm9rZTtcbiAgICAgIH1cblxuICAgICAgJi5yZWQtaXRlbSB7XG4gICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcmVkLWl0ZW0tc3Ryb2tlO1xuICAgICAgfVxuXG4gICAgICAmLmdyZXktaXRlbSB7XG4gICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkZ3JleS1pdGVtLXN0cm9rZTtcbiAgICAgIH1cbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "5EqT":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/periods/largest-period.ts ***!
      \***********************************************************************/

    /*! exports provided: LargestPeriod */

    /***/
    function EqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LargestPeriod", function () {
        return LargestPeriod;
      });
      /* harmony import */


      var _base_period__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-period */
      "TbBD");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _week_period__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./week-period */
      "VBSH");
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * The root of the tree of periods. It should be not included as a child in any other period.
       */


      var LargestPeriod = /*#__PURE__*/function (_base_period__WEBPACK) {
        _inherits(LargestPeriod, _base_period__WEBPACK);

        var _super = _createSuper(LargestPeriod);

        function LargestPeriod() {
          _classCallCheck(this, LargestPeriod);

          return _super.apply(this, arguments);
        }

        _createClass(LargestPeriod, [{
          key: "generateTitle",
          value: function generateTitle() {
            return "";
          }
        }, {
          key: "createChild",
          value: function createChild(id) {
            return new _week_period__WEBPACK_IMPORTED_MODULE_2__["WeekPeriod"](id);
          }
        }, {
          key: "getChildId",
          value: function getChildId(timestamp) {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].getFirstDayOfWeek(timestamp).getTime();
          }
        }, {
          key: "isLeaf",
          value: function isLeaf() {
            return false;
          }
        }]);

        return LargestPeriod;
      }(_base_period__WEBPACK_IMPORTED_MODULE_0__["BasePeriod"]);
      /***/

    },

    /***/
    "6boV":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/update/action/duplicate-pci-id-update-action.component.ts ***!
      \********************************************************************************/

    /*! exports provided: DuplicatePciIdUpdateActionComponent */

    /***/
    function boV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DuplicatePciIdUpdateActionComponent", function () {
        return DuplicatePciIdUpdateActionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-dialog-util */
      "cMmx");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../vsan-routes */
      "w9V1");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DuplicatePciIdUpdateActionComponent = /*#__PURE__*/function () {
        function DuplicatePciIdUpdateActionComponent() {
          _classCallCheck(this, DuplicatePciIdUpdateActionComponent);

          this.onModelSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(DuplicatePciIdUpdateActionComponent, [{
          key: "title",
          get: function get() {
            return !this.hasEditPermission ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.nopermissions") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.duplicatePciIdDevices.remediateAction.label");
          }
        }, {
          key: "openSelectDialog",
          value: function openSelectDialog() {
            var _this = this;

            var context = {
              clusterName: this.clusterName,
              clusterRef: this.clusterRef,
              isOpenedFromHealthCheck: true
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_1__["ModalBuilder"]("".concat(_vsan_routes__WEBPACK_IMPORTED_MODULE_4__["VsanRoutes"].UPDATE_VIEW, "/updateDuplicatePciIdDevices")).setSize(_util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].DUPLICATE_PCI_ID_MODEL_SELECTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].DUPLICATE_PCI_ID_MODEL_SELECTION_DIALOG.height).open(context).then(function (isConfigChanged) {
              if (isConfigChanged) {
                _this.onModelSelected.emit();
              }
            });
          }
        }]);

        return DuplicatePciIdUpdateActionComponent;
      }();
      /***/

    },

    /***/
    "7OKi":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/update/action/duplicate-pci-id-update-action.component.ngfactory.js ***!
      \******************************************************************************************/

    /*! exports provided: RenderType_DuplicatePciIdUpdateActionComponent, View_DuplicatePciIdUpdateActionComponent_0, View_DuplicatePciIdUpdateActionComponent_Host_0, DuplicatePciIdUpdateActionComponentNgFactory */

    /***/
    function OKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DuplicatePciIdUpdateActionComponent", function () {
        return RenderType_DuplicatePciIdUpdateActionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DuplicatePciIdUpdateActionComponent_0", function () {
        return View_DuplicatePciIdUpdateActionComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DuplicatePciIdUpdateActionComponent_Host_0", function () {
        return View_DuplicatePciIdUpdateActionComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DuplicatePciIdUpdateActionComponentNgFactory", function () {
        return DuplicatePciIdUpdateActionComponentNgFactory;
      });
      /* harmony import */


      var _update_catalog_action_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./update-catalog-action.scss.shim.ngstyle */
      "Yf4m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _duplicate_pci_id_update_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./duplicate-pci-id-update-action.component */
      "6boV");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DuplicatePciIdUpdateActionComponent = [_update_catalog_action_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DuplicatePciIdUpdateActionComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_DuplicatePciIdUpdateActionComponent,
        data: {}
      });

      function View_DuplicatePciIdUpdateActionComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "button", [["class", "btn btn-link btn-sm"], ["id", "update-duplicate-pci-id-devices"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openSelectDialog() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isDisabled || !_co.hasEditPermission;
          var currVal_1 = _co.title;

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.cluster.duplicatePciIdDevices.remediateAction.label"));

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_DuplicatePciIdUpdateActionComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-duplicate-pci-id-update-action", [], null, null, null, View_DuplicatePciIdUpdateActionComponent_0, RenderType_DuplicatePciIdUpdateActionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _duplicate_pci_id_update_action_component__WEBPACK_IMPORTED_MODULE_3__["DuplicatePciIdUpdateActionComponent"], [], null, null)], null, null);
      }

      var DuplicatePciIdUpdateActionComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-duplicate-pci-id-update-action", _duplicate_pci_id_update_action_component__WEBPACK_IMPORTED_MODULE_3__["DuplicatePciIdUpdateActionComponent"], View_DuplicatePciIdUpdateActionComponent_Host_0, {
        clusterName: "clusterName",
        clusterRef: "clusterRef",
        isDisabled: "isDisabled",
        hasEditPermission: "hasEditPermission"
      }, {
        onModelSelected: "onModelSelected"
      }, []);
      /***/

    },

    /***/
    "8YyJ":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/health/action/proactive-rebalance-action.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ProactiveRebalanceActionComponent */

    /***/
    function YyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProactiveRebalanceActionComponent", function () {
        return ProactiveRebalanceActionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ProactiveRebalanceActionComponent = /*#__PURE__*/function () {
        function ProactiveRebalanceActionComponent(healthMutationProvider, taskSvc, changeDetector) {
          var _this2 = this;

          _classCallCheck(this, ProactiveRebalanceActionComponent);

          this.healthMutationProvider = healthMutationProvider;
          this.taskSvc = taskSvc;
          this.changeDetector = changeDetector;
          this.onStopDiskRebalance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFinishDiskRebalance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isDisabled = false;

          this.startDiskRebalance = function () {
            _this2.healthMutationProvider.rebalanceCluster(_service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject).then(function (task) {
              _this2.taskSvc.getAwaitResult(task).then(function () {
                _this2.isRunning = false;

                _this2.onFinishDiskRebalance.emit(true);
              });
            })["catch"](function () {
              _this2.isRunning = false;
              _this2.errorMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.cluster.disk.rebalance.start.error");
            });

            _this2.isRunning = true;
            _this2.showConfirmationDlog = false;

            _this2.changeDetector.detectChanges();
          };

          this.stopDiskRebalance = function () {
            _this2.isStopping = true;

            _this2.healthMutationProvider.stopRebalanceCluster(_service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject).then(function (task) {
              _this2.taskSvc.getAwaitResult(task).then(function () {
                _this2.isRunning = false;
                _this2.isStopping = false;

                _this2.onStopDiskRebalance.emit(true);
              });
            })["catch"](function () {
              _this2.isStopping = false;
              _this2.errorMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.cluster.disk.rebalance.stop.error");
            });
          };
        }

        _createClass(ProactiveRebalanceActionComponent, [{
          key: "testData",
          get: function get() {
            return this._data;
          },
          set: function set(val) {
            this._data = val;
            /**
             * The actions is a 2-element array, start/stop balance action
             */

            this.isRunning = val.actions && val.actions.length > 1 ? val.actions[1].enabled : false;
          }
        }, {
          key: "startActionDisabled",
          get: function get() {
            /**
             * If the init value is disabled, then we should disable the start proactive button
             */
            return !this.testData || !this.testData.actions[0].enabled;
          }
        }, {
          key: "stopActionDisabled",
          get: function get() {
            /**
             * disable the stop proactive button when:
             * 1. the stop proactive button is disabled from the backend data
             * 2. no running disk rebalance task
             * 3. the rebalance task is stopping
             */
            return (!this.testData || !this.testData.actions[1].enabled) && !this.isRunning || this.isStopping;
          }
        }]);

        return ProactiveRebalanceActionComponent;
      }();
      /***/

    },

    /***/
    "8fTY":
    /*!***********************************************************!*\
      !*** ./src/app/vsan/health/health-details-card.module.ts ***!
      \***********************************************************/

    /*! exports provided: HealthDetailsCardModule */

    /***/
    function fTY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthDetailsCardModule", function () {
        return HealthDetailsCardModule;
      });

      var HealthDetailsCardModule = /*#__PURE__*/_createClass(function HealthDetailsCardModule() {
        _classCallCheck(this, HealthDetailsCardModule);
      });
      /***/

    },

    /***/
    "K5cP":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-test-details.component.ngfactory.js ***!
      \********************************************************************************************/

    /*! exports provided: RenderType_HistoricalTestDetailsComponent, View_HistoricalTestDetailsComponent_0, View_HistoricalTestDetailsComponent_Host_0, HistoricalTestDetailsComponentNgFactory */

    /***/
    function K5cP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HistoricalTestDetailsComponent", function () {
        return RenderType_HistoricalTestDetailsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalTestDetailsComponent_0", function () {
        return View_HistoricalTestDetailsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalTestDetailsComponent_Host_0", function () {
        return View_HistoricalTestDetailsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalTestDetailsComponentNgFactory", function () {
        return HistoricalTestDetailsComponentNgFactory;
      });
      /* harmony import */


      var _historical_test_details_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./historical-test-details.scss.shim.ngstyle */
      "oLLP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _historical_instance_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./historical-instance.component.ngfactory */
      "+6+0");
      /* harmony import */


      var _historical_instance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historical-instance.component */
      "RR1C");
      /* harmony import */


      var _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./historical-period.component.ngfactory */
      "WPra");
      /* harmony import */


      var _historical_period_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./historical-period.component */
      "O1Bv");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/directive/show-hide/show-hide.directive */
      "l+cV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _historical_test_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./historical-test-details.component */
      "k7EJ");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HistoricalTestDetailsComponent = [_historical_test_details_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HistoricalTestDetailsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_HistoricalTestDetailsComponent,
        data: {}
      });

      function View_HistoricalTestDetailsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "button", [["class", "back-button"], ["id", "back-button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.drillUp() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["<"]))], null, null);
      }

      function View_HistoricalTestDetailsComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-historical-instance", [], null, [[null, "onClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onClick" === en) {
            var pd_0 = _co.selectInstance($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _historical_instance_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HistoricalInstanceComponent_0"], _historical_instance_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HistoricalInstanceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _historical_instance_component__WEBPACK_IMPORTED_MODULE_3__["HistoricalInstanceComponent"], [], {
          isActive: [0, "isActive"],
          status: [1, "status"],
          timestamp: [2, "timestamp"],
          showTitle: [3, "showTitle"]
        }, {
          onClick: "onClick"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = (_co.selectedInstance == null ? null : _co.selectedInstance.timestamp) === _v.context.$implicit.timestamp;
          var currVal_1 = _v.context.$implicit.status;
          var currVal_2 = _v.context.$implicit.timestamp;

          var currVal_3 = _co.isInstanceTitleVisible(_v.context.$implicit.timestamp);

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_HistoricalTestDetailsComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](1, 0, null, null, 3, "vsan-historical-period", [], null, null, null, _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HistoricalPeriodComponent_0"], _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HistoricalPeriodComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 49152, null, 0, _historical_period_component__WEBPACK_IMPORTED_MODULE_5__["HistoricalPeriodComponent"], [], {
          id: [0, "id"],
          status: [1, "status"],
          details: [2, "details"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "show-", _co.getGroupPeriod(_v.parent.context.$implicit), "");

          var currVal_1 = _co.getGroupStatus(_v.parent.context.$implicit);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 2, 2, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.health.historical.graph.seemore", _v.parent.context.$implicit.instances.length.toString()));

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_HistoricalTestDetailsComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](1, 0, null, null, 3, "vsan-historical-period", [], null, null, null, _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HistoricalPeriodComponent_0"], _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HistoricalPeriodComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 49152, null, 0, _historical_period_component__WEBPACK_IMPORTED_MODULE_5__["HistoricalPeriodComponent"], [], {
          id: [0, "id"],
          status: [1, "status"],
          details: [2, "details"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "hide-", _co.getGroupPeriod(_v.parent.context.$implicit), "");

          var currVal_1 = _co.getGroupStatus(_v.parent.context.$implicit);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 2, 2, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.health.historical.graph.seeless", _v.parent.context.$implicit.instances.length.toString()));

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_HistoricalTestDetailsComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 10, "div", [["class", "instances-group"]], [[8, "id", 0], [2, "large-spacing", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 81920, null, 0, _common_directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], {
          state: [0, "state"],
          showTriggerElement: [1, "showTriggerElement"],
          hideTriggerElement: [2, "hideTriggerElement"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, [["showTrigger", 2]], null, 0, null, View_HistoricalTestDetailsComponent_5)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, [["hideTrigger", 2]], null, 0, null, View_HistoricalTestDetailsComponent_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.getGroupState(_v.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 7);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9);

          _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _v.context.$implicit.instances;

          _ck(_v, 5, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "instances-group-", _co.getGroupPeriod(_v.context.$implicit), "");

          var currVal_1 = _co.hasFewInstances();

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_HistoricalTestDetailsComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "div", [["class", "instances"], ["id", "instances"]], [[2, "large-spacing", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.instancesByStatus;

          _ck(_v, 3, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.hasFewInstances();

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalTestDetailsComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "vsan-historical-period", [], null, [[null, "onClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onClick" === en) {
            var pd_0 = _co.drillDown(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HistoricalPeriodComponent_0"], _historical_period_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HistoricalPeriodComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _historical_period_component__WEBPACK_IMPORTED_MODULE_5__["HistoricalPeriodComponent"], [], {
          id: [0, "id"],
          status: [1, "status"],
          title: [2, "title"],
          details: [3, "details"],
          tooltip: [4, "tooltip"]
        }, {
          onClick: "onClick"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](3, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.id;
          var currVal_1 = _v.context.$implicit.status;

          var currVal_2 = _v.context.$implicit.generateTitle();

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 3, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.health.historical.graph.seemore", _v.context.$implicit.propagatedInstancesCount));

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 4, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.health.historical.period.details", _v.context.$implicit.propagatedErrorInstancesCount, _v.context.$implicit.propagatedWarningInstancesCount));

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_HistoricalTestDetailsComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "div", [["class", "periods"], ["id", "periods"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.selectedPeriod.childPeriods;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_HistoricalTestDetailsComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "div", [["class", "instance-overview-wrapper"], ["id", "instance-overview-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 1, "div", [["class", "instance-overview"], ["id", "instance-overview"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getOverviewLabel(_co.selectedInstance);

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_HistoricalTestDetailsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](5, 0, null, null, 10, "div", [["class", "items-pane"], ["id", "items-pane"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalTestDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getPeriodToDrillUp(_co.selectedPeriod);

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.selectedPeriod == null ? null : _co.selectedPeriod.testInstances == null ? null : _co.selectedPeriod.testInstances.length;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _co.selectedPeriod == null ? null : _co.selectedPeriod.childPeriods == null ? null : _co.selectedPeriod.childPeriods.length;

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = _co.selectedInstance;

          _ck(_v, 14, 0, currVal_3);
        }, null);
      }

      function View_HistoricalTestDetailsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-historical-test-details", [], null, null, null, View_HistoricalTestDetailsComponent_0, RenderType_HistoricalTestDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _historical_test_details_component__WEBPACK_IMPORTED_MODULE_10__["HistoricalTestDetailsComponent"], [], null, null)], null, null);
      }

      var HistoricalTestDetailsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-historical-test-details", _historical_test_details_component__WEBPACK_IMPORTED_MODULE_10__["HistoricalTestDetailsComponent"], View_HistoricalTestDetailsComponent_Host_0, {
        overviewData: "overviewData",
        selectedInstanceTimestamp: "selectedInstanceTimestamp",
        isOverviewCorrelationsDisplayed: "isOverviewCorrelationsDisplayed",
        instances: "instances"
      }, {
        onInstanceSelect: "onInstanceSelect"
      }, []);
      /***/

    },

    /***/
    "KZme":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/health/model/health-silent-change.data.ts ***!
      \****************************************************************/

    /*! exports provided: HealthSilentChangeData */

    /***/
    function KZme(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthSilentChangeData", function () {
        return HealthSilentChangeData;
      });

      var HealthSilentChangeData = /*#__PURE__*/_createClass(function HealthSilentChangeData(isSilent) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, HealthSilentChangeData);

        this.isSilent = isSilent;
        this.settings = settings;
      });
      /***/

    },

    /***/
    "M1ny":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/health/action/proactive-rebalance-action.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_ProactiveRebalanceActionComponent, View_ProactiveRebalanceActionComponent_0, View_ProactiveRebalanceActionComponent_Host_0, ProactiveRebalanceActionComponentNgFactory */

    /***/
    function M1ny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ProactiveRebalanceActionComponent", function () {
        return RenderType_ProactiveRebalanceActionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ProactiveRebalanceActionComponent_0", function () {
        return View_ProactiveRebalanceActionComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ProactiveRebalanceActionComponent_Host_0", function () {
        return View_ProactiveRebalanceActionComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProactiveRebalanceActionComponentNgFactory", function () {
        return ProactiveRebalanceActionComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/directive/clr-button-group/clr-button-group-common.directive */
      "Ju17");
      /* harmony import */


      var _proactive_rebalance_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./proactive-rebalance-action.component */
      "8YyJ");
      /* harmony import */


      var _generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../generated/vsan-health-mutation-provider */
      "HuxE");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ProactiveRebalanceActionComponent = [];

      var RenderType_ProactiveRebalanceActionComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??crt"]({
        encapsulation: 2,
        styles: styles_ProactiveRebalanceActionComponent,
        data: {}
      });

      function View_ProactiveRebalanceActionComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 3, "clr-button", [["class", "btn btn-sm"], ["id", "start-disk-rebalance-btn"], ["name", "start-disk-rebalance-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.showConfirmationDlog = true) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](2, 4243456, [[1, 4], [2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"],
          disabled: [3, "disabled"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](3, 0, ["\n      ", "\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "start-disk-rebalance-btn";
          var currVal_2 = "start-disk-rebalance-btn";
          var currVal_3 = _co.startActionDisabled || _co.isDisabled;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = _co.testData.actions[0] == null ? null : _co.testData.actions[0].label;

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_ProactiveRebalanceActionComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 3, "clr-button", [["class", "btn btn-sm"], ["id", "stop-disk-rebalance-btn"], ["name", "stop-disk-rebalance-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.stopDiskRebalance() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](2, 4243456, [[1, 4], [2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"],
          disabled: [3, "disabled"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](3, 0, ["\n      ", "\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "stop-disk-rebalance-btn";
          var currVal_2 = "stop-disk-rebalance-btn";
          var currVal_3 = _co.stopActionDisabled || _co.isDisabled;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = _co.testData.actions[1] == null ? null : _co.testData.actions[1].label;

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_ProactiveRebalanceActionComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 27, "clr-modal", [], [[2, "open", null]], [[null, "clrModalOpenChange"], ["body", "keyup.escape"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("body:keyup.escape" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 3).close() !== false;
            ad = pd_0 && ad;
          }

          if ("clrModalOpenChange" === en) {
            var pd_1 = (_co.showConfirmationDlog = $event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ClrModal_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ClrModal"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](8704, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??du"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??du"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](3, 704512, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModal"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??du"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"]], {
          _open: [0, "_open"],
          staticBackdrop: [1, "staticBackdrop"]
        }, {
          _openChanged: "clrModalOpenChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](5, 0, null, 1, 2, "h3", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](9, 0, null, 2, 6, "div", [["class", "modal-body"]], [[1, "tabindex", 0]], [[null, "mousedown"], [null, "mouseup"]], function (_v, en, $event) {
          var ad = true;

          if ("mousedown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 10).mouseDown() !== false;
            ad = pd_0 && ad;
          }

          if ("mouseup" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 10).mouseUp() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](10, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModalBody"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](12, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](17, 0, null, 3, 9, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](19, 0, null, null, 2, "button", [["class", "btn btn-outline"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.showConfirmationDlog = false) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](20, null, ["", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](21, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](23, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.startDiskRebalance() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](24, null, ["", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](25, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.showConfirmationDlog;
          var currVal_2 = true;

          _ck(_v, 3, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 3)._open;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent, 0), "vsan.monitor.cluster.disk.rebalance.dlg.title"));

          _ck(_v, 6, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 10).tabindex;

          _ck(_v, 9, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent, 0), "vsan.monitor.cluster.disk.rebalance.warning"));

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 20, 0, _ck(_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent, 0), "vsan.common.cancel"));

          _ck(_v, 20, 0, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 24, 0, _ck(_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent, 0), "vsan.common.ok"));

          _ck(_v, 24, 0, currVal_7);
        });
      }

      function View_ProactiveRebalanceActionComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_4__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](1, 0, null, null, 2, "vsan-validation", [["id", "alert"]], null, [[null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onClosed" === en) {
            var pd_0 = (_co.errorMessage = null) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](2, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_6__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, {
          onClosed: "onClosed"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](5, 0, null, null, 16, "clr-button-group", [["class", "btn-link"]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](11, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??qud"](603979776, 1, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](13, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_7__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??qud"](603979776, 2, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, null, 1, null, View_ProactiveRebalanceActionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, null, 1, null, View_ProactiveRebalanceActionComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, null, 1, null, View_ProactiveRebalanceActionComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;

          _ck(_v, 2, 0, currVal_0);

          var currVal_2 = !_co.isRunning;

          _ck(_v, 17, 0, currVal_2);

          var currVal_3 = _co.isRunning;

          _ck(_v, 20, 0, currVal_3);

          var currVal_4 = _co.showConfirmationDlog;

          _ck(_v, 24, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_1 = true;

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_ProactiveRebalanceActionComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 1, "vsan-proactive-rebalance-action", [], null, null, null, View_ProactiveRebalanceActionComponent_0, RenderType_ProactiveRebalanceActionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](1, 49152, null, 0, _proactive_rebalance_action_component__WEBPACK_IMPORTED_MODULE_8__["ProactiveRebalanceActionComponent"], [_generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_9__["VsanHealthMutationProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_10__["TaskMonitorService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], null, null);
      }

      var ProactiveRebalanceActionComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??ccf"]("vsan-proactive-rebalance-action", _proactive_rebalance_action_component__WEBPACK_IMPORTED_MODULE_8__["ProactiveRebalanceActionComponent"], View_ProactiveRebalanceActionComponent_Host_0, {
        testData: "testData",
        isDisabled: "isDisabled"
      }, {
        onStopDiskRebalance: "onStopDiskRebalance",
        onFinishDiskRebalance: "onFinishDiskRebalance"
      }, []);
      /***/

    },

    /***/
    "O1Bv":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-period.component.ts ***!
      \****************************************************************************/

    /*! exports provided: HistoricalPeriodComponent */

    /***/
    function O1Bv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalPeriodComponent", function () {
        return HistoricalPeriodComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HistoricalPeriodComponent = /*#__PURE__*/function () {
        function HistoricalPeriodComponent() {
          _classCallCheck(this, HistoricalPeriodComponent);

          this.VsanHealthStatus = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"];
          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HistoricalPeriodComponent, [{
          key: "getItemClass",
          value: function getItemClass() {
            switch (this.status) {
              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"].green:
                return "green-item";

              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"].info:
                return "blue-item";

              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"].yellow:
                return "yellow-item";

              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"].red:
                return "red-item";

              default:
                return "grey-item";
            }
          }
        }]);

        return HistoricalPeriodComponent;
      }();
      /***/

    },

    /***/
    "P33C":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/periods/day-period.ts ***!
      \*******************************************************************/

    /*! exports provided: DayPeriod */

    /***/
    function P33C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayPeriod", function () {
        return DayPeriod;
      });
      /* harmony import */


      var _base_period__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-period */
      "TbBD");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * A period of one day.
       */


      var DayPeriod = /*#__PURE__*/function (_base_period__WEBPACK2) {
        _inherits(DayPeriod, _base_period__WEBPACK2);

        var _super2 = _createSuper(DayPeriod);

        function DayPeriod() {
          _classCallCheck(this, DayPeriod);

          return _super2.apply(this, arguments);
        }

        _createClass(DayPeriod, [{
          key: "createChild",
          value: function createChild(id) {
            return null;
          }
        }, {
          key: "generateTitle",
          value: function generateTitle() {
            return this.formatDate(_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].getStartOfTheDay(this.testInstances[0].timestamp));
          }
        }, {
          key: "getChildId",
          value: function getChildId(timestamp) {
            return null;
          }
        }, {
          key: "isLeaf",
          value: function isLeaf() {
            return true;
          }
        }]);

        return DayPeriod;
      }(_base_period__WEBPACK_IMPORTED_MODULE_0__["BasePeriod"]);
      /***/

    },

    /***/
    "RR1C":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-instance.component.ts ***!
      \******************************************************************************/

    /*! exports provided: HistoricalInstanceComponent */

    /***/
    function RR1C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalInstanceComponent", function () {
        return HistoricalInstanceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HistoricalInstanceComponent = /*#__PURE__*/function () {
        function HistoricalInstanceComponent() {
          _classCallCheck(this, HistoricalInstanceComponent);

          this.VsanHealthStatus = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"];
          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HistoricalInstanceComponent, [{
          key: "formatTitle",
          value: function formatTitle(timestamp) {
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].formatInstanceTitleTimestamp(timestamp);
          }
        }, {
          key: "formatInstanceDetails",
          value: function formatInstanceDetails(timestamp) {
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].formatInstanceTimestamp(timestamp);
          }
        }]);

        return HistoricalInstanceComponent;
      }();
      /***/

    },

    /***/
    "TbBD":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/periods/base-period.ts ***!
      \********************************************************************/

    /*! exports provided: BasePeriod */

    /***/
    function TbBD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePeriod", function () {
        return BasePeriod;
      });
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * A period of time. Each period should know its parent period, if it contains child periods + how to
       * build them, if it contains test instances, how to build its own title.
       * This class implements an element of a tree. Only the leafs hold instances.
       */


      var BasePeriod = /*#__PURE__*/function () {
        function BasePeriod(id) {
          _classCallCheck(this, BasePeriod);

          this.id = id;
          this.SHORT_DATE_OPTIONS = {
            month: "short",
            day: "numeric",
            hour12: false
          };
          /**
           * The status of the period. It is summarized status of all propagated test instances.
           */

          this.status = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].green;
          /**
           * The count of the test instances which are propagated through the period.
           */

          this.propagatedInstancesCount = 0;
          /**
           * The count of the test instances with red status which are propagated through the period.
           */

          this.propagatedErrorInstancesCount = 0;
          /**
           * The count of the test instances with yellow status which are propagated through the period.
           */

          this.propagatedWarningInstancesCount = 0;
          /**
           * The count of the test instances with info status which are propagated through the period.
           */

          this.propagatedInfoInstancesCount = 0;
          /**
           * References to children periods
           */

          this.childPeriods = [];
          /**
           * Propagated test instances. Only leafs may have test instances.
           */

          this.testInstances = [];
        }
        /**
         * Propagates the given test instace to test instances (if the period is a leaf) or to a child period. At the end of
         * loop the instance should be added to a leaf period.
         */


        _createClass(BasePeriod, [{
          key: "propagateTestInstance",
          value: function propagateTestInstance(testInstance) {
            this.updatePropagatedTestInstancesInfo(testInstance);

            if (!this.isLeaf()) {
              var child = this.getChild(testInstance);
              child.propagateTestInstance(testInstance);
            }

            if (this.isLeaf()) {
              this.testInstances.push(testInstance);
            }
          }
          /**
           * Checks if the period has a test instance in a given timestamp.
           */

        }, {
          key: "hasTestInstance",
          value: function hasTestInstance(timestamp) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(this.testInstances)) {
              return false;
            }

            return this.testInstances[0].timestamp <= timestamp && this.testInstances[this.testInstances.length - 1].timestamp >= timestamp;
          }
        }, {
          key: "updatePropagatedTestInstancesInfo",
          value: function updatePropagatedTestInstancesInfo(testInstance) {
            this.propagatedInstancesCount++; // update status information

            switch (testInstance.status) {
              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].red:
                this.propagatedErrorInstancesCount++;
                this.status = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].red;
                break;

              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].yellow:
                this.propagatedWarningInstancesCount++;

                if (this.status !== _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].red) {
                  this.status = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].yellow;
                }

                break;

              case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].info:
                this.propagatedInfoInstancesCount++;

                if (this.status !== _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].red && this.status !== _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].yellow) {
                  this.status = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_0__["VsanHealthStatus"].info;
                }

                break;
            }
          }
        }, {
          key: "getChild",
          value: function getChild(testInstance) {
            var childId = this.getChildId(testInstance.timestamp);
            var child = this.childPeriods.find(function (value) {
              return value.id === childId;
            });

            if (!child) {
              child = this.createChild(childId);
              child.parentPeriod = this;
              this.childPeriods.push(child);
            }

            return child;
          }
          /**
           * Returns a formatted date including only month and day of month
           */

        }, {
          key: "formatDate",
          value: function formatDate(date) {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].formatDate(date, this.SHORT_DATE_OPTIONS);
          }
        }]);

        return BasePeriod;
      }();
      /***/

    },

    /***/
    "U2+J":
    /*!**********************************************************!*\
      !*** ./src/app/vsan/common/service/telemetry.service.ts ***!
      \**********************************************************/

    /*! exports provided: TelemetryService, EventCategory */

    /***/
    function U2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TelemetryService", function () {
        return TelemetryService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventCategory", function () {
        return EventCategory;
      });
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /**
       * Introduces h5 client telemetry service. The telemetry base may be accessed at {@link http://url/q7n2}.
       * NOTE: The replication of logged event to the base may take up to 24 hours.
       */


      var TelemetryService = /*#__PURE__*/function () {
        function TelemetryService() {
          _classCallCheck(this, TelemetryService);

          this.EVENT_TYPE = "trackEvent"; // h5 client initializes global variable, which is used to handle telemetry.

          this.h5Window = window.parent;
          this.paq = this.h5Window._paq;

          if (!this.paq) {
            _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("Unable to initialize telemetry service");
          }
        }

        _createClass(TelemetryService, [{
          key: "logAction",
          value: function logAction(eventCategory, eventAction, eventName, value) {
            if (!this.paq) {
              _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("Telemetry service is not initialized. Entry is not collected.");

              return;
            }

            this.paq.push([this.EVENT_TYPE, EventCategory[eventCategory], eventAction, eventName, value]);
          }
        }]);

        return TelemetryService;
      }();
      /**
       * Category for the telemetry entry. To ease the search in the base, add "vsan_" prefix to all new categories.
       */


      var EventCategory = /*@__PURE__*/function (EventCategory) {
        EventCategory[EventCategory["VSAN_HEALTH"] = 0] = "VSAN_HEALTH";
        return EventCategory;
      }({});
      /***/

    },

    /***/
    "VBSH":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/periods/week-period.ts ***!
      \********************************************************************/

    /*! exports provided: WeekPeriod */

    /***/
    function VBSH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeekPeriod", function () {
        return WeekPeriod;
      });
      /* harmony import */


      var _base_period__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-period */
      "TbBD");
      /* harmony import */


      var _day_period__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./day-period */
      "P33C");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Represents one week. It may be only a part of the week, depending of children days.
       */


      var WeekPeriod = /*#__PURE__*/function (_base_period__WEBPACK3) {
        _inherits(WeekPeriod, _base_period__WEBPACK3);

        var _super3 = _createSuper(WeekPeriod);

        function WeekPeriod() {
          _classCallCheck(this, WeekPeriod);

          return _super3.apply(this, arguments);
        }

        _createClass(WeekPeriod, [{
          key: "createChild",
          value: function createChild(id) {
            return new _day_period__WEBPACK_IMPORTED_MODULE_1__["DayPeriod"](id);
          }
        }, {
          key: "generateTitle",
          value: function generateTitle() {
            if (!this.childPeriods || !this.childPeriods.length) {
              return "";
            }

            var firstDayTitle = this.childPeriods[0].generateTitle();
            var lastDayTitle = this.childPeriods[this.childPeriods.length - 1].generateTitle();
            return firstDayTitle === lastDayTitle ? firstDayTitle : "".concat(firstDayTitle, " - ").concat(lastDayTitle);
          }
        }, {
          key: "getChildId",
          value: function getChildId(timestamp) {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__["VsanDateTimeUtils"].getStartOfTheDay(timestamp).getTime();
          }
        }, {
          key: "isLeaf",
          value: function isLeaf() {
            return false;
          }
        }]);

        return WeekPeriod;
      }(_base_period__WEBPACK_IMPORTED_MODULE_0__["BasePeriod"]);
      /***/

    },

    /***/
    "VfaV":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/health/view/card/health-messages.scss.shim.ngstyle.js ***!
      \****************************************************************************/

    /*! exports provided: styles */

    /***/
    function VfaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.show-separate-links[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.show-separate-links[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9jYXJkL2hlYWx0aC1tZXNzYWdlcy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBQW5CQTtFQUNHLGlCQUFBO0FBc0JIO0FBckJHO0VBQ0csYUFBQTtFQUNBLFdBQUE7QUF1Qk4iLCJmaWxlIjoic3JjL2FwcC92c2FuL2hlYWx0aC92aWV3L2NhcmQvaGVhbHRoLW1lc3NhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4vLyBEaXNwbGF5IHRoZSBhY3Rpb24gbGlua3MgaW4gc2VwYXJhdGUgbGluZXMuXG4uc2hvdy1zZXBhcmF0ZS1saW5rcyB7XG4gICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgIC5hbGVydC1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxIDAgMDtcbiAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "W4V6":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/health/view/card/health-messages.component.ngfactory.js ***!
      \******************************************************************************/

    /*! exports provided: RenderType_HealthMessagesComponent, View_HealthMessagesComponent_0, View_HealthMessagesComponent_Host_0, HealthMessagesComponentNgFactory */

    /***/
    function W4V6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HealthMessagesComponent", function () {
        return RenderType_HealthMessagesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HealthMessagesComponent_0", function () {
        return View_HealthMessagesComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HealthMessagesComponent_Host_0", function () {
        return View_HealthMessagesComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthMessagesComponentNgFactory", function () {
        return HealthMessagesComponentNgFactory;
      });
      /* harmony import */


      var _health_messages_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./health-messages.scss.shim.ngstyle */
      "VfaV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _health_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./health-messages.component */
      "skYX");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HealthMessagesComponent = [_health_messages_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HealthMessagesComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_HealthMessagesComponent,
        data: {}
      });

      function View_HealthMessagesComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-validation", [], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"],
          allowExpandCollapse: [3, "allowExpandCollapse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getAlertType(_v.context.$implicit.alertType);

          var currVal_1 = _v.context.$implicit.message;
          var currVal_2 = false;
          var currVal_3 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_HealthMessagesComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 19, "clr-alert", [["class", "cause-issue-alert-message"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlert_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 245760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlert"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["??bb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          closable: [0, "closable"],
          _closed: [1, "_closed"],
          alertType: [2, "alertType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 14, "clr-alert-item", [["class", "alert-item"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlertItem_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlertItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 16777216, null, 0, 10, "div", [["class", "alert-text"], ["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertText"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], {
          copyToClipboard: [0, "copyToClipboard"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](13, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](15, 0, null, null, 1, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.getActionLinks(_v.context.$implicit)[0].action() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](16, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;
          var currVal_1 = false;

          var currVal_2 = _co.getAlertType(_v.context.$implicit.alertType);

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

          var currVal_6 = true;

          _ck(_v, 10, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = "hidden";
          var currVal_4 = "ellipsis";
          var currVal_5 = "nowrap";

          _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5);

          var currVal_7 = _v.context.$implicit.message;

          _ck(_v, 13, 0, currVal_7);

          var currVal_8 = _co.getActionLinks(_v.context.$implicit)[0].label;

          _ck(_v, 16, 0, currVal_8);
        });
      }

      function View_HealthMessagesComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "span", [["class", "alert-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 1, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _v.context.$implicit.action() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, null, ["\n                  ", "\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.label;

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_HealthMessagesComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 19, "clr-alert", [["class", "core-issue-alert-message"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlert_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 245760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlert"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["??bb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          closable: [0, "closable"],
          _closed: [1, "_closed"],
          alertType: [2, "alertType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 14, "clr-alert-item", [["class", "alert-item"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlertItem_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlertItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["??ba"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, 0, 10, "div", [["class", "show-separate-links"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](9, 16777216, null, null, 4, "span", [["class", "alert-text"], ["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertText"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], {
          copyToClipboard: [0, "copyToClipboard"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](13, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HealthMessagesComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;
          var currVal_1 = false;

          var currVal_2 = _co.getAlertType(_v.context.$implicit.alertType);

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

          var currVal_6 = true;

          _ck(_v, 12, 0, currVal_6);

          var currVal_8 = _co.getActionLinks(_v.context.$implicit);

          _ck(_v, 16, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_3 = "hidden";
          var currVal_4 = "ellipsis";
          var currVal_5 = "nowrap";

          _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5);

          var currVal_7 = _v.context.$implicit.message;

          _ck(_v, 13, 0, currVal_7);
        });
      }

      function View_HealthMessagesComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HealthMessagesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HealthMessagesComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.causedIssueMessages;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.coreIssueMessages;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_HealthMessagesComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HealthMessagesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HealthMessagesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.basicMessages;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.showHealthCorrelationMessages;

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_HealthMessagesComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-health-messages", [], null, null, null, View_HealthMessagesComponent_0, RenderType_HealthMessagesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _health_messages_component__WEBPACK_IMPORTED_MODULE_9__["HealthMessagesComponent"], [], null, null)], null, null);
      }

      var HealthMessagesComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-health-messages", _health_messages_component__WEBPACK_IMPORTED_MODULE_9__["HealthMessagesComponent"], View_HealthMessagesComponent_Host_0, {
        messages: "messages",
        showHealthCorrelationMessages: "showHealthCorrelationMessages"
      }, {
        onTestNavigation: "onTestNavigation"
      }, []);
      /***/

    },

    /***/
    "WPra":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-period.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_HistoricalPeriodComponent, View_HistoricalPeriodComponent_0, View_HistoricalPeriodComponent_Host_0, HistoricalPeriodComponentNgFactory */

    /***/
    function WPra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HistoricalPeriodComponent", function () {
        return RenderType_HistoricalPeriodComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalPeriodComponent_0", function () {
        return View_HistoricalPeriodComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalPeriodComponent_Host_0", function () {
        return View_HistoricalPeriodComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalPeriodComponentNgFactory", function () {
        return HistoricalPeriodComponentNgFactory;
      });
      /* harmony import */


      var _historical_period_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./historical-period.scss.shim.ngstyle */
      "qahP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _historical_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historical-period.component */
      "O1Bv");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HistoricalPeriodComponent = [_historical_period_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HistoricalPeriodComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_HistoricalPeriodComponent,
        data: {}
      });

      function View_HistoricalPeriodComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "green-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 34 16"], ["width", "34"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:path", [["class", "icon"], ["d", "M8 0.5H26C30.1421 0.5 33.5 3.85786 33.5 8C33.5 12.1421 30.1421 15.5 26 15.5H8C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5Z"], ["stroke-width", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "-green");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalPeriodComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "blue-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 34 16"], ["width", "34"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:path", [["class", "icon"], ["d", "M8 0.5H26C30.1421 0.5 33.5 3.85786 33.5 8C33.5 12.1421 30.1421 15.5 26 15.5H8C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5Z"], ["stroke-width", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "-blue");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalPeriodComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "yellow-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 34 16"], ["width", "34"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:path", [["class", "icon"], ["d", "M4.65985 0.5H27.3401C28.062 0.5 28.6814 1.01411 28.8145 1.72357L31.0645 13.7236C31.2375 14.6467 30.5294 15.5 29.5901 15.5H2.40985C1.47065 15.5 0.762459 14.6467 0.935544 13.7236L3.18554 1.72357C3.31857 1.01411 3.93803 0.5 4.65985 0.5Z"], ["stroke-width", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "-yellow");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalPeriodComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "red-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 32 16"], ["width", "32"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:path", [["class", "icon"], ["d", "M2 0.444444H30C30.8591 0.444444 31.5556 1.14089 31.5556 2V14C31.5556 14.8591 30.8591 15.5556 30 15.5556H2C1.14089 15.5556 0.444444 14.8591 0.444444 14V2C0.444444 1.14089 1.14089 0.444444 2 0.444444Z"], ["stroke-width", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "-red");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalPeriodComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, ":svg:svg", [["class", "grey-item"], ["fill", "none"], ["height", "16"], ["viewBox", "0 0 34 16"], ["width", "34"], ["xmlns", "http://www.w3.org/2000/svg"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, ":svg:path", [["class", "icon"], ["d", "M8 0.5H26C30.1421 0.5 33.5 3.85786 33.5 8C33.5 12.1421 30.1421 15.5 26 15.5H8C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5Z"], ["stroke-width", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "-grey");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_HistoricalPeriodComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "span", [["class", "tooltip-content"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-tooltip-", _co.id, "");

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _co.tooltip;

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_HistoricalPeriodComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "a", [["class", "title pointer"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onClick.emit() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "-title");

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _co.title;

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_HistoricalPeriodComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](1, 0, null, null, 26, "div", [["class", "tooltip tooltip-md tooltip-bottom-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](3, 0, null, null, 20, "button", [["class", "item period"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onClick.emit() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 1, "span", [["class", "instances-count"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_HistoricalPeriodComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "item period";

          var currVal_2 = _co.getItemClass();

          _ck(_v, 4, 0, currVal_1, currVal_2);

          var currVal_5 = _co.status === _co.VsanHealthStatus.green;

          _ck(_v, 10, 0, currVal_5);

          var currVal_6 = _co.status === _co.VsanHealthStatus.info;

          _ck(_v, 13, 0, currVal_6);

          var currVal_7 = _co.status === _co.VsanHealthStatus.yellow;

          _ck(_v, 16, 0, currVal_7);

          var currVal_8 = _co.status === _co.VsanHealthStatus.red;

          _ck(_v, 19, 0, currVal_8);

          var currVal_9 = _co.status === _co.VsanHealthStatus.unknown;

          _ck(_v, 22, 0, currVal_9);

          var currVal_10 = _co.tooltip;

          _ck(_v, 26, 0, currVal_10);

          var currVal_11 = _co.title;

          _ck(_v, 30, 0, currVal_11);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-", _co.id, "");

          _ck(_v, 3, 0, currVal_0);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "period-instances-count-", _co.id, "");

          _ck(_v, 6, 0, currVal_3);

          var currVal_4 = _co.details;

          _ck(_v, 7, 0, currVal_4);
        });
      }

      function View_HistoricalPeriodComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-historical-period", [], null, null, null, View_HistoricalPeriodComponent_0, RenderType_HistoricalPeriodComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _historical_period_component__WEBPACK_IMPORTED_MODULE_3__["HistoricalPeriodComponent"], [], null, null)], null, null);
      }

      var HistoricalPeriodComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-historical-period", _historical_period_component__WEBPACK_IMPORTED_MODULE_3__["HistoricalPeriodComponent"], View_HistoricalPeriodComponent_Host_0, {
        id: "id",
        status: "status",
        title: "title",
        details: "details",
        tooltip: "tooltip"
      }, {
        onClick: "onClick"
      }, []);
      /***/

    },

    /***/
    "eVcU":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/health/view/health-lazy-data-loading-util.ts ***!
      \*******************************************************************/

    /*! exports provided: HealthLazyDataLoadingUtil */

    /***/
    function eVcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthLazyDataLoadingUtil", function () {
        return HealthLazyDataLoadingUtil;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* Copyright 2019-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HealthLazyDataLoadingUtil = /*@__PURE__*/function () {
        var HealthLazyDataLoadingUtil = /*#__PURE__*/function () {
          function HealthLazyDataLoadingUtil() {
            _classCallCheck(this, HealthLazyDataLoadingUtil);
          }

          _createClass(HealthLazyDataLoadingUtil, null, [{
            key: "initLazyLoading",
            value:
            /**
             * Adds lazy loading functionality for provided object.
             * @param data - Data object
             * @param callbackFunction - Function which will load the data on request
             * @param callbackParams - Optional. Parameters for the callback function.
             */
            function initLazyLoading(data, callbackFunction, callbackParams) {
              data[HealthLazyDataLoadingUtil.CALLBACK_FUNCTION] = callbackFunction;
              data[HealthLazyDataLoadingUtil.CALLBACK_PARAMS] = callbackParams;
              data[HealthLazyDataLoadingUtil.PENDING_LOADING] = true;
            }
            /**
             * Loads data using the callback function. Data is loaded once. On further load the callback function is not
             * triggered.
             */

          }, {
            key: "load",
            value: function load(data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var callbackFunction, callbackParams;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (data) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return");

                      case 2:
                        callbackFunction = data[HealthLazyDataLoadingUtil.CALLBACK_FUNCTION];

                        if (callbackFunction) {
                          _context.next = 5;
                          break;
                        }

                        return _context.abrupt("return");

                      case 5:
                        if (data[HealthLazyDataLoadingUtil.PENDING_LOADING]) {
                          _context.next = 7;
                          break;
                        }

                        return _context.abrupt("return");

                      case 7:
                        callbackParams = data[HealthLazyDataLoadingUtil.CALLBACK_PARAMS];
                        data[HealthLazyDataLoadingUtil.PENDING_LOADING] = false;
                        _context.prev = 9;
                        _context.next = 12;
                        return callbackFunction.apply(callbackFunction, callbackParams);

                      case 12:
                        _context.next = 14;
                        return Promise.resolve();

                      case 14:
                        return _context.abrupt("return", _context.sent);

                      case 17:
                        _context.prev = 17;
                        _context.t0 = _context["catch"](9);
                        _context.next = 21;
                        return Promise.reject(_context.t0);

                      case 21:
                        return _context.abrupt("return", _context.sent);

                      case 22:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[9, 17]]);
              }));
            }
          }]);

          return HealthLazyDataLoadingUtil;
        }(); // following properties will be added to the object when the lazy loading is initialized. Keeping them with unusual
        // names will minimize the change to override existint property.


        HealthLazyDataLoadingUtil.CALLBACK_FUNCTION = "hldluCallbackFunction";
        HealthLazyDataLoadingUtil.CALLBACK_PARAMS = "hldluCallbackParams";
        HealthLazyDataLoadingUtil.PENDING_LOADING = "hldluPendingLoading";
        return HealthLazyDataLoadingUtil;
      }();
      /***/

    },

    /***/
    "fLgZ":
    /*!*************************************************************!*\
      !*** ./src/app/vsan/health/model/health-test-nav-params.ts ***!
      \*************************************************************/

    /*! exports provided: HealthTestNavParams */

    /***/
    function fLgZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthTestNavParams", function () {
        return HealthTestNavParams;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Model used for the health test navigation
       */


      var HealthTestNavParams = /*#__PURE__*/_createClass(function HealthTestNavParams(testId) {
        var timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, HealthTestNavParams);

        this.testId = testId;
        this.timestamp = timestamp;
      });
      /***/

    },

    /***/
    "hbBm":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/health/view/card/details-card.component.ngfactory.js ***!
      \***************************************************************************/

    /*! exports provided: RenderType_DetailsCardComponent, View_DetailsCardComponent_0, View_DetailsCardComponent_Host_0, DetailsCardComponentNgFactory */

    /***/
    function hbBm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DetailsCardComponent", function () {
        return RenderType_DetailsCardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DetailsCardComponent_0", function () {
        return View_DetailsCardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DetailsCardComponent_Host_0", function () {
        return View_DetailsCardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsCardComponentNgFactory", function () {
        return DetailsCardComponentNgFactory;
      });
      /* harmony import */


      var _details_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./details-card.scss.shim.ngstyle */
      "0Qc/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _health_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./health-messages.component.ngfactory */
      "W4V6");
      /* harmony import */


      var _health_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./health-messages.component */
      "skYX");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _historical_historical_test_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../historical/historical-test-details.component.ngfactory */
      "K5cP");
      /* harmony import */


      var _historical_historical_test_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../historical/historical-test-details.component */
      "k7EJ");
      /* harmony import */


      var _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../common/component/illustrated-message/illustrated-message.component.ngfactory */
      "hjgy");
      /* harmony import */


      var _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../common/component/illustrated-message/illustrated-message.component */
      "GNkU");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../common/directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _common_component_cell_health_test_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../common/component/cell/health-test-value.component.ngfactory */
      "x+vA");
      /* harmony import */


      var _common_component_cell_health_test_value_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../common/component/cell/health-test-value.component */
      "PJgh");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _update_action_hcl_database_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../update/action/hcl-database-update-action.component.ngfactory */
      "a9f/");
      /* harmony import */


      var _update_action_hcl_database_update_action_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../update/action/hcl-database-update-action.component */
      "yala");
      /* harmony import */


      var _generated_update_db_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../generated/update-db-service */
      "FVjF");
      /* harmony import */


      var _update_action_release_catalog_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../../update/action/release-catalog-update-action.component.ngfactory */
      "K5S9");
      /* harmony import */


      var _update_action_release_catalog_update_action_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../update/action/release-catalog-update-action.component */
      "GbrE");
      /* harmony import */


      var _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../common/directive/clr-button-group/clr-button-group-common.directive */
      "Ju17");
      /* harmony import */


      var _common_component_action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../common/component/action-button/button-group.directive */
      "Xbvm");
      /* harmony import */


      var _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../common/component/action-button/button-title.directive */
      "I0Pd");
      /* harmony import */


      var _action_proactive_rebalance_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../action/proactive-rebalance-action.component.ngfactory */
      "M1ny");
      /* harmony import */


      var _action_proactive_rebalance_action_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../action/proactive-rebalance-action.component */
      "8YyJ");
      /* harmony import */


      var _generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../../../generated/vsan-health-mutation-provider */
      "HuxE");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _update_action_duplicate_pci_id_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../../update/action/duplicate-pci-id-update-action.component.ngfactory */
      "7OKi");
      /* harmony import */


      var _update_action_duplicate_pci_id_update_action_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../../update/action/duplicate-pci-id-update-action.component */
      "6boV");
      /* harmony import */


      var _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../../common/directive/external-link/external-link.directive */
      "tsUx");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _details_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./details-card.component */
      "mhsP");
      /* harmony import */


      var _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../../../generated/vsan-health-property-provider */
      "6s13");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../../../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../../../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../../../common/service/telemetry.service */
      "U2+J");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../../../common/service/client/dataservice/data-service.service */
      "QIo8");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DetailsCardComponent = [_details_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DetailsCardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_DetailsCardComponent,
        data: {}
      });

      function View_DetailsCardComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "h4", [["id", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.data == null ? null : _co.data.testName;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_DetailsCardComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "button", [["class", "btn btn-sm btn-outline"], ["id", "silent-setting"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.switchSilentCheck() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isActionDisabled();

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _co.getSilenceRestoreAlertTitle();

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_DetailsCardComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 7, "div", [["class", "header-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isTestNameShown();

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.isSilnceCheckAvailable();

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-health-messages", [], null, [[null, "onTestNavigation"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onTestNavigation" === en) {
            var pd_0 = _co.navigateToHealthTest($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _health_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_HealthMessagesComponent_0"], _health_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_HealthMessagesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _health_messages_component__WEBPACK_IMPORTED_MODULE_4__["HealthMessagesComponent"], [], {
          messages: [0, "messages"],
          showHealthCorrelationMessages: [1, "showHealthCorrelationMessages"]
        }, {
          onTestNavigation: "onTestNavigation"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.testMessages;
          var currVal_1 = _co.showHealthCorrelationMessages;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "vsan-validation", [["id", "load-test-error"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_6__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.health.historical.details.test.data.error"));

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_DetailsCardComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 9, "div", [["class", "no-test-data"], ["id", "no-test-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "clr-icon", [["class", "is-solid"], ["shape", "minus-circle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.health.historical.details.test.data.missing"));

          _ck(_v, 7, 0, currVal_0);
        });
      }

      function View_DetailsCardComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-historical-test-details", [], null, [[null, "onInstanceSelect"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onInstanceSelect" === en) {
            var pd_0 = _co.instanceSelected($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _historical_historical_test_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_HistoricalTestDetailsComponent_0"], _historical_historical_test_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_HistoricalTestDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _historical_historical_test_details_component__WEBPACK_IMPORTED_MODULE_10__["HistoricalTestDetailsComponent"], [], {
          selectedInstanceTimestamp: [0, "selectedInstanceTimestamp"],
          instances: [1, "instances"]
        }, {
          onInstanceSelect: "onInstanceSelect"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.preselectTimestamp;
          var currVal_1 = _co.data.instances;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "vsan-illustrated-message", [], null, null, null, _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_IllustratedMessageComponent_0"], _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_IllustratedMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_12__["IllustratedMessageComponent"], [], {
          type: [0, "type"],
          message: [1, "message"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.IllustratedMessageType.MISSING_SELECTION;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.health.historical.details.select.instance"));

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "vsan-validation", [["id", "load-instance-details-error"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_6__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 0), "vsan.health.historical.details.test.instance.data.error"));

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_DetailsCardComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 9, "div", [["class", "no-test-data"], ["id", "no-instance-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "clr-icon", [["class", "is-solid"], ["shape", "minus-circle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 0), "vsan.health.historical.details.test.data.missing"));

          _ck(_v, 7, 0, currVal_0);
        });
      }

      function View_DetailsCardComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_DetailsCardComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 13, "clr-dg-column", [["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](5, {
          "string-column": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 770048, [[7, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dh"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??di"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 147456, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dh"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??di"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_15__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](13, 1, ["\n                              ", "\n                           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          var currVal_5 = _ck(_v, 5, 0, (_v.context.$implicit.columnType == null ? null : _v.context.$implicit.columnType.toString()) === "string");

          _ck(_v, 4, 0, currVal_5);

          _ck(_v, 6, 0);

          _ck(_v, 12, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 6).ariaSort;

          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _v.context.$implicit.columnLabel;

          _ck(_v, 13, 0, currVal_6);
        });
      }

      function View_DetailsCardComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 114688, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 14, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 147456, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_15__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                                 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, 0, 2, "vsan-health-test-value", [], null, null, null, _common_component_cell_health_test_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_HealthTestValueComponent_0"], _common_component_cell_health_test_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_HealthTestValueComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 49152, null, 0, _common_component_cell_health_test_value_component__WEBPACK_IMPORTED_MODULE_17__["HealthTestValueComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_18__["NavigationService"]], {
          valueCell: [0, "valueCell"],
          isVirtualObjectsLinkShown: [1, "isVirtualObjectsLinkShown"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                                 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_6 = _v.context.$implicit;

          var currVal_7 = _co.displayVirtualObjectNavigationLink();

          _ck(_v, 8, 0, currVal_6, currVal_7);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](2, "cell-", _v.parent.context.index, "-", _v.context.index, "");

          var currVal_1 = true;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 1).signpost.length > 0;
          var currVal_3 = "hidden";
          var currVal_4 = "ellipsis";
          var currVal_5 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        });
      }

      function View_DetailsCardComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 12, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](2, {
          "indented-content": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_15__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                                       "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](9, 0, null, 0, 2, "vsan-health-test-value", [], null, null, null, _common_component_cell_health_test_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_HealthTestValueComponent_0"], _common_component_cell_health_test_value_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_HealthTestValueComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 49152, null, 0, _common_component_cell_health_test_value_component__WEBPACK_IMPORTED_MODULE_17__["HealthTestValueComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_18__["NavigationService"]], {
          valueCell: [0, "valueCell"],
          isVirtualObjectsLinkShown: [1, "isVirtualObjectsLinkShown"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                                       "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_6 = _ck(_v, 2, 0, _v.context.first);

          _ck(_v, 1, 0, currVal_6);

          _ck(_v, 3, 0);

          _ck(_v, 7, 0);

          var currVal_7 = _v.context.$implicit;

          var currVal_8 = _co.displayVirtualObjectNavigationLink();

          _ck(_v, 10, 0, currVal_7, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](3, "cell-", _v.parent.parent.parent.context.index, "-", _v.parent.parent.context.index, "-", _v.context.index, "");

          var currVal_1 = true;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).signpost.length > 0;
          var currVal_3 = "hidden";
          var currVal_4 = "ellipsis";
          var currVal_5 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        });
      }

      function View_DetailsCardComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 8, "clr-dg-row-detail", [], [[2, "datagrid-row-flex", null], [2, "datagrid-row-detail", null], [2, "datagrid-container", null], [1, "id", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridRowDetail_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridRowDetail"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridRowDetail"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??de"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 15, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 1196032, [[10, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 16, {
          cells: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_DetailsCardComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                                 "]))], function (_ck, _v) {
          var currVal_4 = _v.parent.context.$implicit.rowValues;

          _ck(_v, 7, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = true;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 1).cells.length === 0;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 1).expand.expandableId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        });
      }

      function View_DetailsCardComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                                 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 2, null, View_DetailsCardComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridDetailRegisterer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIfExpanded"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??z"]], {
          expanded: [0, "expanded"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                              "]))], function (_ck, _v) {
          var currVal_0 = null;

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_DetailsCardComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 16, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??z"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??de"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??de"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??de"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??de"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 5488640, [[8, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??de"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??db"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 12, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 1196032, [[10, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 13, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 2, 1, null, View_DetailsCardComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_DetailsCardComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);

          var currVal_3 = _v.context.$implicit == null ? null : _v.context.$implicit.rowValues;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _v.context.$implicit.nestedRows;

          _ck(_v, 15, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      function View_DetailsCardComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 18, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, 1, ["\n                              ", "\n                           "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 2)], null, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent.parent.parent.parent, 0), "vsan.common.datagrid.item", _v.parent.parent.context.$implicit.rows == null ? null : _v.parent.parent.context.$implicit.rows.length.toString()));

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_DetailsCardComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 19, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, 1, ["\n                              ", "\n                           "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 2)], null, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent.parent.parent.parent, 0), "vsan.common.datagrid.items", _v.parent.parent.context.$implicit.rows ? _v.parent.parent.context.$implicit.rows.length.toString() : "0"));

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_DetailsCardComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 52, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 180224, [[4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"]], {
          tabContentId: [0, "tabContentId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 47, "section", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 2, null, View_DetailsCardComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](8, {
          tabIndex: 0,
          isInfoTab: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](10, 0, null, null, 40, "clr-datagrid", [], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cs"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cq"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cq"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cy"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cq"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??db"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??db"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](24, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cy"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??db"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 5, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 6, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 7, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 8, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??a"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cz"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](32, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cz"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 9, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 10, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](35, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](36, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](37, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??cw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n                           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 2, 1, null, View_DetailsCardComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                           "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 2, 1, null, View_DetailsCardComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                  "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "content-", _v.parent.context.index, "");

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _ck(_v, 8, 0, _v.parent.context.index, false);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent.parent.parent, 17);

          _ck(_v, 7, 0, currVal_1, currVal_2);

          var currVal_5 = _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.columns;

          _ck(_v, 40, 0, currVal_5);

          var currVal_6 = _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.rows;

          _ck(_v, 43, 0, currVal_6);

          var currVal_7 = (_v.parent.context.$implicit.rows == null ? null : _v.parent.context.$implicit.rows.length) == 1;

          _ck(_v, 46, 0, currVal_7);

          var currVal_8 = (_v.parent.context.$implicit.rows == null ? null : _v.parent.context.$implicit.rows.length) != 1;

          _ck(_v, 49, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_3 = true;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 24).detailService.isOpen;

          _ck(_v, 10, 0, currVal_3, currVal_4);
        });
      }

      function View_DetailsCardComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 14, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??w"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 180224, [[2, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 3, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 4, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 16777216, null, 0, 3, "button", [["clrTabLink", ""], ["role", "tab"], ["type", "button"]], [[1, "title", 0], [1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, [[3, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??eb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](10, null, ["\n                     ", "\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_DetailsCardComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n               "]))], function (_ck, _v) {
          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "link-", _v.context.index, "");

          _ck(_v, 8, 0, currVal_10);

          var currVal_12 = _v.context.index == 0;

          _ck(_v, 13, 0, currVal_12);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getTabTitle(_v.context.$implicit);

          var currVal_1 = false;
          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).addLinkClasses;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).addLinkClasses;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).ariaControls;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).tabLinkId;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).active;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).active;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).tabindex;

          _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_11 = _co.getTabTitle(_v.context.$implicit);

          _ck(_v, 10, 0, currVal_11);
        });
      }

      function View_DetailsCardComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_DetailsCardComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 12, "clr-tab-content", [["id", "content-info"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 180224, [[21, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"]], {
          tabContentId: [0, "tabContentId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 7, "section", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 2, null, View_DetailsCardComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](8, {
          tabIndex: 0,
          isInfoTab: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](10, 0, null, null, 0, "div", [["class", "description"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                  "]))], function (_ck, _v) {
          var currVal_0 = "content-info";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _ck(_v, 8, 0, "info", true);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent.parent.parent, 17);

          _ck(_v, 7, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _co.data == null ? null : _co.data.testDescription;

          _ck(_v, 10, 0, currVal_3);
        });
      }

      function View_DetailsCardComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 16, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??w"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 180224, [[2, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 20, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 21, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 16777216, null, 0, 5, "button", [["clrTabLink", ""], ["id", "link-info"], ["role", "tab"], ["type", "button"]], [[1, "title", 0], [1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, [[20, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??br"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??eb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](11, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_DetailsCardComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](15, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??v"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_10 = "link-info";

          _ck(_v, 8, 0, currVal_10);

          var currVal_12 = (_co.data == null ? null : _co.data.details == null ? null : _co.data.details.length) == 0;

          _ck(_v, 15, 0, currVal_12);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 7, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent.parent, 0), "vsan.monitor.health.info"));

          var currVal_1 = false;
          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).addLinkClasses;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).addLinkClasses;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).ariaControls;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).tabLinkId;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).active;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).active;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 8).tabindex;

          _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent.parent, 0), "vsan.monitor.health.info"));

          _ck(_v, 11, 0, currVal_11);
        });
      }

      function View_DetailsCardComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 18, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 15, "clr-tabs", [["class", "tab-container"]], [[2, "tabs-vertical", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrTabs_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??eb"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ec"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTabs"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??y"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??ea"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??eb"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 2, {
          tabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??lrTabsWillyWonka"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.selectedInstance == null ? null : _co.selectedInstance.details;

          _ck(_v, 13, 0, currVal_1);

          var currVal_2 = _co.selectedInstance || !_co.isHistoricalTestData;

          _ck(_v, 16, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 7).isVertical;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_DetailsCardComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 13, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hasLoadInstanceDetailsError;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.isHistoricalTestData && !_co.hasLoadInstanceDetailsError && !(_co.selectedInstance.details == null ? null : _co.selectedInstance.details.length);

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = !_co.hasLoadInstanceDetailsError && (!_co.isHistoricalTestData || (_co.selectedInstance.details == null ? null : _co.selectedInstance.details.length));

          _ck(_v, 12, 0, currVal_2);
        }, null);
      }

      function View_DetailsCardComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isHistoricalTestData && !_co.selectedInstance;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.selectedInstance;

          _ck(_v, 7, 0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hasLoadTestError;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.isHistoricalTestData && !_co.hasLoadTestError && !(_co.data.instances == null ? null : _co.data.instances.length);

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _co.isHistoricalTestData && !_co.hasLoadTestError && (_co.data == null ? null : _co.data.instances == null ? null : _co.data.instances.length);

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = !_co.loadingDetails && !_co.hasLoadTestError && (_co.data == null ? null : _co.data.instances == null ? null : _co.data.instances.length);

          _ck(_v, 15, 0, currVal_3);
        }, null);
      }

      function View_DetailsCardComponent_29(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "div", [["class", "loading-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 0, "div", [["class", "spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], null, null);
      }

      function View_DetailsCardComponent_31(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-validation", [], [[8, "id", 0]], [[null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onClosed" === en) {
            var pd_0 = (_co.alertMessage = null) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_6__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, {
          onClosed: "onClosed"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.alertMessage;

          _ck(_v, 1, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "alert-", _v.parent.context.tabIndex, "");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_DetailsCardComponent_33(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "vsan-hcl-database-update-action", [["btnClasses", "btn btn-sm btn-link"]], null, [[null, "updateComplete"], [null, "error"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("updateComplete" === en) {
            var pd_0 = _co.triggerRetestWithoutOnlineHealth() !== false;
            ad = pd_0 && ad;
          }

          if ("error" === en) {
            var pd_1 = _co.setErrorMessage($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _update_action_hcl_database_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_HclDatabaseUpdateAction_0"], _update_action_hcl_database_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_HclDatabaseUpdateAction"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 49152, null, 0, _update_action_hcl_database_update_action_component__WEBPACK_IMPORTED_MODULE_20__["HclDatabaseUpdateAction"], [_generated_update_db_service__WEBPACK_IMPORTED_MODULE_21__["UpdateDbService"]], {
          btnClasses: [0, "btnClasses"],
          isDisabled: [1, "isDisabled"]
        }, {
          updateComplete: "updateComplete",
          error: "error"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm btn-link";
          var currVal_1 = !_co.hasEditPermissions;

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_34(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "vsan-release-catalog-update-action", [["btnClasses", "btn btn-sm btn-link"]], null, [[null, "updateComplete"], [null, "error"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("updateComplete" === en) {
            var pd_0 = _co.triggerRetestWithoutOnlineHealth() !== false;
            ad = pd_0 && ad;
          }

          if ("error" === en) {
            var pd_1 = _co.setErrorMessage($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _update_action_release_catalog_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_VsanReleaseCatalogUpdateActionComponent_0"], _update_action_release_catalog_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_VsanReleaseCatalogUpdateActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 49152, null, 0, _update_action_release_catalog_update_action_component__WEBPACK_IMPORTED_MODULE_23__["VsanReleaseCatalogUpdateActionComponent"], [_generated_update_db_service__WEBPACK_IMPORTED_MODULE_21__["UpdateDbService"]], {
          btnClasses: [0, "btnClasses"],
          hasEditPermissions: [1, "hasEditPermissions"]
        }, {
          updateComplete: "updateComplete",
          error: "error"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm btn-link";
          var currVal_1 = _co.hasEditPermissions;

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_35(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](3, 0, null, null, 16, "clr-button-group", [["class", "btn-link"]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 22, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_24__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 23, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](14, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"], ["id", "capacity-management-config"], ["name", "capacity-management-config"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openCapacityManagementDialog() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 4243456, [[22, 4], [23, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](17, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_1 = "btn btn-sm";
          var currVal_2 = "capacity-management-config";
          var currVal_3 = "capacity-management-config";

          _ck(_v, 16, 0, currVal_1, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 3, 0, currVal_0);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.services.enforcereservation.action.title"));

          _ck(_v, 17, 0, currVal_4);
        });
      }

      function View_DetailsCardComponent_37(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 19, "clr-button-group", [["class", "btn-link"], ["vsan-button-group", ""]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 24, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 2, _common_component_action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_25__["ButtonGroupDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          maximumInlineActions: [0, "maximumInlineActions"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 25, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 26, {
          clrButtons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_24__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 27, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](14, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"], ["id", "automatic-rebalance"], ["name", "automatic-rebalance"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.navigateToServicesPage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 4243456, [[24, 4], [26, 4], [27, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"],
          disabled: [3, "disabled"]
        }, {
          _click: "click"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](17, 212992, [[25, 4]], 0, _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_26__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]], {
          title: [0, "title"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](18, 0, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "";

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = "btn btn-sm";
          var currVal_3 = "automatic-rebalance";
          var currVal_4 = "automatic-rebalance";

          var currVal_5 = _co.isActionDisabled(_co.data.actions[0]);

          _ck(_v, 16, 0, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.actionTitle(_co.data.actions[0]);

          _ck(_v, 17, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);

          var currVal_7 = _co.data.actions[0].label;

          _ck(_v, 18, 0, currVal_7);
        });
      }

      function View_DetailsCardComponent_38(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-proactive-rebalance-action", [], null, [[null, "onStopDiskRebalance"], [null, "onFinishDiskRebalance"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onStopDiskRebalance" === en) {
            var pd_0 = _co.triggerRetestWithoutOnlineHealth() !== false;
            ad = pd_0 && ad;
          }

          if ("onFinishDiskRebalance" === en) {
            var pd_1 = _co.triggerRetestWithoutOnlineHealth() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _action_proactive_rebalance_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_ProactiveRebalanceActionComponent_0"], _action_proactive_rebalance_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_ProactiveRebalanceActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _action_proactive_rebalance_action_component__WEBPACK_IMPORTED_MODULE_28__["ProactiveRebalanceActionComponent"], [_generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_29__["VsanHealthMutationProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_30__["TaskMonitorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          testData: [0, "testData"],
          isDisabled: [1, "isDisabled"]
        }, {
          onStopDiskRebalance: "onStopDiskRebalance",
          onFinishDiskRebalance: "onFinishDiskRebalance"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.data;
          var currVal_1 = !_co.hasEditPermissions;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_36(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.data.actions.length === 1;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.data.actions.length === 2;

          _ck(_v, 8, 0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_40(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-duplicate-pci-id-update-action", [], null, [[null, "onModelSelected"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onModelSelected" === en) {
            var pd_0 = _co.triggerRetestWithoutOnlineHealth() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _update_action_duplicate_pci_id_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["View_DuplicatePciIdUpdateActionComponent_0"], _update_action_duplicate_pci_id_update_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["RenderType_DuplicatePciIdUpdateActionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _update_action_duplicate_pci_id_update_action_component__WEBPACK_IMPORTED_MODULE_32__["DuplicatePciIdUpdateActionComponent"], [], {
          clusterName: [0, "clusterName"],
          clusterRef: [1, "clusterRef"],
          isDisabled: [2, "isDisabled"],
          hasEditPermission: [3, "hasEditPermission"]
        }, {
          onModelSelected: "onModelSelected"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterName;
          var currVal_1 = _co.clusterRef;

          var currVal_2 = _co.isActionDisabled(_co.data.actions[0]);

          var currVal_3 = _co.hasEditPermissions;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_DetailsCardComponent_39(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.data.actions && _co.data.actions.length === 1;

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_DetailsCardComponent_44(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.remediateBtnClick(_v.parent.context.$implicit.actionId) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 4243456, [[28, 4], [30, 4], [31, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          disabled: [1, "disabled"]
        }, {
          _click: "click"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 212992, [[29, 4]], 0, _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_26__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]], {
          title: [0, "title"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](4, 0, ["\n                  ", "\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm";

          var currVal_1 = _co.isDataDrivenActionDisabled(_v.parent.context.$implicit);

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _co.actionTitle(_v.parent.context.$implicit);

          _ck(_v, 3, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_3 = _v.parent.context.$implicit.label;

          _ck(_v, 4, 0, currVal_3);
        });
      }

      function View_DetailsCardComponent_43(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isActionSupported(_v.context.$implicit.actionId);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_DetailsCardComponent_42(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_43)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.data.actions;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_DetailsCardComponent_45(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 6, "clr-button", [["class", "btn btn-sm"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 4243456, [[28, 4], [30, 4], [31, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 212992, [[29, 4]], 0, _common_component_action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_26__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]], {
          title: [0, "title"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 4210688, null, 0, _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_33__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_18__["NavigationService"], [6, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButton"]]], {
          helpId: [0, "helpId"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm";

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 0), "vsan.common.askVMware"));

          _ck(_v, 3, 0, currVal_1);

          var currVal_2 = _co.data.helpId;

          _ck(_v, 5, 0, currVal_2);
        }, null);
      }

      function View_DetailsCardComponent_41(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 20, "clr-button-group", [["class", "btn-link"], ["vsan-button-group", ""]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["??dv"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 28, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 2, _common_component_action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_25__["ButtonGroupDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          maximumInlineActions: [0, "maximumInlineActions"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 29, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 30, {
          clrButtons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_24__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 31, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "";

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _co.displayDataDrivenActions(_v.parent.parent.context.isInfoTab);

          _ck(_v, 16, 0, currVal_2);

          var currVal_3 = _co.displayInfoTab(_v.parent.parent.context.isInfoTab);

          _ck(_v, 19, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_DetailsCardComponent_32(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 20, "div", [["class", "actions-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.displayHclDbUpToDateAction(_v.parent.context.isInfoTab);

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.displayReleaseCatalogUpToDateAction(_v.parent.context.isInfoTab);

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _co.displayDiskSpaceAction(_v.parent.context.isInfoTab);

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _co.displayDiskBalanceAction(_v.parent.context.isInfoTab);

          _ck(_v, 13, 0, currVal_3);

          var currVal_4 = _co.displayDeviceModelSelectAction(_v.parent.context.isInfoTab);

          _ck(_v, 16, 0, currVal_4);

          var currVal_5 = _v.parent.context.isInfoTab || _co.displayDataDrivenActions(_v.parent.context.isInfoTab);

          _ck(_v, 19, 0, currVal_5);
        }, null);
      }

      function View_DetailsCardComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.displayInfoTab(_v.context.isInfoTab) || _co.displayDataDrivenActions(_v.context.isInfoTab) || _co.displayHclDbUpToDateAction(_v.context.isInfoTab) || _co.displayReleaseCatalogUpToDateAction(_v.context.isInfoTab) || _co.displayDiskBalanceAction(_v.context.isInfoTab) || _co.displayDiskSpaceAction(_v.context.isInfoTab) || _co.displayDeviceModelSelectAction(_v.context.isInfoTab);

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_DetailsCardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_34__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](671088640, 1, {
          tabs: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_DetailsCardComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, [["warnings_actions", 2]], null, 0, null, View_DetailsCardComponent_30)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isTestNameShown() || _co.isSilnceCheckAvailable();

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.testMessages == null ? null : _co.testMessages.length;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = !_co.loadingTestInstances;

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = _co.loadingTestInstances || _co.loadingDetails;

          _ck(_v, 15, 0, currVal_3);
        }, null);
      }

      function View_DetailsCardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-health-details-card", [], null, null, null, View_DetailsCardComponent_0, RenderType_DetailsCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 114688, null, 0, _details_card_component__WEBPACK_IMPORTED_MODULE_35__["DetailsCardComponent"], [_generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_29__["VsanHealthMutationProvider"], _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_36__["VsanHealthPropertyProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_30__["TaskMonitorService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_37__["VsanCapabilityProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_38__["PermissionService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_18__["NavigationService"], _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_39__["TelemetryService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_40__["DataServiceClient"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_14__["ReferenceWatcher"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, null);
      }

      var DetailsCardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-health-details-card", _details_card_component__WEBPACK_IMPORTED_MODULE_35__["DetailsCardComponent"], View_DetailsCardComponent_Host_0, {
        isVirtualObjectsLinkShown: "isVirtualObjectsLinkShown",
        isDiskSpaceActionShown: "isDiskSpaceActionShown",
        hasEditPermissions: "hasEditPermissions",
        showTestName: "showTestName",
        isSilentCheck: "isSilentCheck",
        isOnlineTest: "isOnlineTest",
        silentCheckSupported: "silentCheckSupported",
        isVsphereHealth: "isVsphereHealth",
        isHistoricalTestData: "isHistoricalTestData",
        preselectTimestamp: "preselectTimestamp",
        showHealthCorrelationMessages: "showHealthCorrelationMessages",
        data: "data"
      }, {
        onRetest: "onRetest",
        onSilentChange: "onSilentChange",
        onHealthTestNavigation: "onHealthTestNavigation",
        onError: "onError"
      }, []);
      /***/

    },

    /***/
    "jiVK":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/health/model/health-retest-event.data.ts ***!
      \***************************************************************/

    /*! exports provided: HealthRetestEventData */

    /***/
    function jiVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthRetestEventData", function () {
        return HealthRetestEventData;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HealthRetestEventData = /*#__PURE__*/_createClass(function HealthRetestEventData() {
        var retestOnlineHealth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, HealthRetestEventData);

        this.retestOnlineHealth = retestOnlineHealth;
      });
      /***/

    },

    /***/
    "k7EJ":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-test-details.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: HistoricalTestDetailsComponent, VsanTestInstancesGroup */

    /***/
    function k7EJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalTestDetailsComponent", function () {
        return HistoricalTestDetailsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanTestInstancesGroup", function () {
        return VsanTestInstancesGroup;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _periods_week_period__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./periods/week-period */
      "VBSH");
      /* harmony import */


      var _periods_day_period__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./periods/day-period */
      "P33C");
      /* harmony import */


      var _periods_largest_period__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./periods/largest-period */
      "5EqT");
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");
      /* harmony import */


      var _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @directive/show-hide/show-hide.directive */
      "l+cV");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HistoricalTestDetailsComponent = /*#__PURE__*/function () {
        function HistoricalTestDetailsComponent() {
          _classCallCheck(this, HistoricalTestDetailsComponent);

          this.GROUPING_ELEMENTS_COUNT = 4; // display the periods if are at least this count. Otherwise try to drill up / down. The reason is we don't want
          // to have grouping of 1 period.

          this.MINIMUM_PERIODS_TO_DISPLAY = 2;
          this.FEW_INSTANCES_COUNT_THRESHOLD = 3; // these statuses may be in each group - green, yellow, red

          this.NEUTRAL_HEALTH_STATUSES = [_generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"].unknown, _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_1__["VsanHealthStatus"].info];
          this.instancesByStatus = [];
          this.isOverviewCorrelationsDisplayed = false;
          this.onInstanceSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HistoricalTestDetailsComponent, [{
          key: "selectedPeriod",
          get: function get() {
            return this._selectedPeriod;
          },
          set: function set(value) {
            this._selectedPeriod = value;

            if (!this._selectedPeriod || !this._selectedPeriod.testInstances) {
              this.instancesByStatus = [];
              return;
            }

            this.instancesByStatus = this.getInstancesByStatus(this._selectedPeriod.testInstances);
          }
        }, {
          key: "instances",
          set: function set(values) {
            var _this3 = this;

            this._instances = values;
            this.rootPeriod = null;

            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(values)) {
              this.rootPeriod = this.calculateRootPeriod(values[0].timestamp, values[values.length - 1].timestamp);
              values.forEach(function (instance) {
                return _this3.rootPeriod.propagateTestInstance(instance);
              });
            }

            if (this.selectedInstanceTimestamp) {
              this.preselectInstance(this.selectedInstanceTimestamp);
            } else {
              this.selectedPeriod = this.getPeriodToDrillDown(this.rootPeriod);
              this.selectPeriodLatestInstance(this.selectedPeriod);
            }
          }
        }, {
          key: "preselectInstance",
          value: function preselectInstance(timestamp) {
            var _ref;

            if (!this.rootPeriod) {
              return;
            }

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(this.rootPeriod.childPeriods)) {
              this.selectedPeriod = this.getPeriodToDrillDown(this.rootPeriod);
              this.selectInstance(this.selectedInstanceTimestamp);
              this.expandPreselectedInstanceGroup(timestamp);
              return;
            }

            var periods = (_ref = []).concat.apply(_ref, _toConsumableArray(this.rootPeriod.childPeriods));

            while (periods.length > 0) {
              var current = periods.pop();

              if (!(current instanceof _periods_day_period__WEBPACK_IMPORTED_MODULE_4__["DayPeriod"])) {
                periods.concat.apply(periods, _toConsumableArray(current.childPeriods));
                continue;
              }

              if (current.hasTestInstance(timestamp)) {
                this.selectedPeriod = current;
                this.expandPreselectedInstanceGroup(timestamp);
                this.selectInstance(timestamp);
                break;
              }
            }
          }
        }, {
          key: "expandPreselectedInstanceGroup",
          value: function expandPreselectedInstanceGroup(timestamp) {
            var instancesGroup = this.instancesByStatus.find(function (instance) {
              var _a;

              return (_a = instance === null || instance === void 0 ? void 0 : instance.instances) === null || _a === void 0 ? void 0 : _a.find(function (details) {
                return (details === null || details === void 0 ? void 0 : details.timestamp) === timestamp;
              });
            });

            if (instancesGroup) {
              instancesGroup.defaultExpandableGroupState = _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].SHOWN;
            }
          }
        }, {
          key: "getOverviewLabel",
          value: function getOverviewLabel(selectedInstance) {
            var instanceDate = _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].formatInstanceTimestamp(selectedInstance === null || selectedInstance === void 0 ? void 0 : selectedInstance.timestamp);

            if (this.isOverviewCorrelationsDisplayed) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].getString("vsan.health.historical.details.correlations.overview", instanceDate);
            }

            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].getString("vsan.health.historical.details.instance.overview", instanceDate, _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].getVsanHealthStatusText(selectedInstance === null || selectedInstance === void 0 ? void 0 : selectedInstance.status));
          }
        }, {
          key: "calculateRootPeriod",
          value: function calculateRootPeriod(firstTimestamp, lastTimestamp) {
            // root depends on timestamp of included instances
            // 1. if instances are for more than 7 days, the grouping should be by weeks. Root of week is LargestPeriod.
            if ((lastTimestamp - firstTimestamp) / _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__["VsanDateTimeUtils"].DAY_IN_MILLISECONDS >= _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__["VsanDateTimeUtils"].DAYS_IN_WEEK) {
              return new _periods_largest_period__WEBPACK_IMPORTED_MODULE_5__["LargestPeriod"]();
            } // 2. if instances are for more 24 hours, the grouping should be by days. Root is WeekPeriod.


            if ((lastTimestamp - firstTimestamp) / _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__["VsanDateTimeUtils"].HOUR_IN_MILLISECONDS > _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_2__["VsanDateTimeUtils"].HOURS_IN_DAY) {
              return new _periods_week_period__WEBPACK_IMPORTED_MODULE_3__["WeekPeriod"]();
            } // 3. if instances are for less than 24 hours, there should be no grouping. Root is DayPeriod.


            return new _periods_day_period__WEBPACK_IMPORTED_MODULE_4__["DayPeriod"]();
          }
        }, {
          key: "getPeriodToDrillDown",
          value: function getPeriodToDrillDown(period) {
            if (!period) {
              return null;
            }

            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(period.testInstances)) {
              return period;
            }

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(period.childPeriods)) {
              return null;
            }

            if (period.childPeriods.length >= this.MINIMUM_PERIODS_TO_DISPLAY) {
              return period;
            }

            return this.getPeriodToDrillDown(period.childPeriods[0]);
          }
        }, {
          key: "getPeriodToDrillUp",
          value: function getPeriodToDrillUp(period) {
            var parentPeriod = period.parentPeriod;

            if (!parentPeriod) {
              return null;
            }

            if (parentPeriod.childPeriods.length >= this.MINIMUM_PERIODS_TO_DISPLAY) {
              return parentPeriod;
            }

            return this.getPeriodToDrillUp(parentPeriod);
          }
        }, {
          key: "drillDown",
          value: function drillDown(period) {
            this.selectedPeriod = this.getPeriodToDrillDown(period);
            this.instancesByStatus = this.getInstancesByStatus(this.selectedPeriod.testInstances);
            this.selectPeriodLatestInstance(this.selectedPeriod);
          }
        }, {
          key: "drillUp",
          value: function drillUp() {
            var parentPeriod = this.getPeriodToDrillUp(this.selectedPeriod);

            if (parentPeriod) {
              this.selectedPeriod = parentPeriod;
              this.selectPeriodLatestInstance(this.selectedPeriod);
            }
          }
        }, {
          key: "getInstancesByStatus",
          value: function getInstancesByStatus(instances) {
            var result = [];

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(instances)) {
              return result;
            } // add first empty group


            result.push(new VsanTestInstancesGroup());
            var instancesLeft = instances.slice(0, instances.length);

            while (instancesLeft.length > 0) {
              var previousGroup = result[result.length - 1];
              var count = this.findCountOfFirstWithSameStatus(instancesLeft);

              if (count < this.GROUPING_ELEMENTS_COUNT) {
                // just add instances to the previous group
                previousGroup.instances = previousGroup.instances.concat(instancesLeft.splice(0, count));
                continue;
              } // should have expandable group:
              // 1. add first of instances to the previous group (start wrapper of the expandable group)


              previousGroup.instances.push(instancesLeft.splice(0, 1)[0]); // 2. create new group with all but first and last instance (expandable group)

              result.push(new VsanTestInstancesGroup(instancesLeft.splice(0, count - 2), true)); // 3. create new group with the last element (end wrapper of the expandable group)

              result.push(new VsanTestInstancesGroup(instancesLeft.splice(0, 1)));
            }

            return result;
          }
        }, {
          key: "findCountOfFirstWithSameStatus",
          value: function findCountOfFirstWithSameStatus(instances) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(instances)) {
              return 0;
            }

            var status = instances[0].status;

            for (var i = 1; i < instances.length; i++) {
              if (status !== instances[i].status) {
                return i;
              }
            } // all instances are with same status


            return instances.length;
          }
        }, {
          key: "selectInstance",
          value: function selectInstance(timestamp) {
            this.selectedInstance = this.findInstanceByTimestamp(timestamp);
            this.onInstanceSelect.emit(this.selectedInstance ? this.selectedInstance.timestamp : null);
          }
        }, {
          key: "selectPeriodLatestInstance",
          value: function selectPeriodLatestInstance(period) {
            if (!period || _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(this.selectedPeriod.testInstances)) {
              this.selectInstance(null);
              return;
            }

            var latestPeriodInstance = period.testInstances[period.testInstances.length - 1];
            this.selectInstance(latestPeriodInstance.timestamp);
          }
        }, {
          key: "findInstanceByTimestamp",
          value: function findInstanceByTimestamp(timestamp) {
            if (!timestamp || !this.selectedPeriod || !this.selectedPeriod.testInstances) {
              return null;
            }

            return this.selectedPeriod.testInstances.find(function (instance) {
              return instance.timestamp === timestamp;
            });
          }
        }, {
          key: "isInstanceTitleVisible",
          value: function isInstanceTitleVisible(timespamp) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(this.selectedPeriod.testInstances)) {
              return false;
            } // show for fist and last instance


            if (timespamp === this.selectedPeriod.testInstances[0].timestamp) {
              return true;
            }

            if (timespamp === this.selectedPeriod.testInstances[this.selectedPeriod.testInstances.length - 1].timestamp) {
              return true;
            }

            return false;
          }
        }, {
          key: "getGroupState",
          value: function getGroupState(group) {
            if (!this.hasStatusSwitches()) {
              return _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].DISABLED;
            }

            return group.isExpandable ? group.defaultExpandableGroupState : _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].DISABLED;
          }
        }, {
          key: "hasStatusSwitches",
          value: function hasStatusSwitches() {
            if (!this.selectedPeriod || _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(this.selectedPeriod.testInstances)) {
              return false;
            }

            var firstInstanceStatus = this.selectedPeriod.testInstances[0].status;
            return this.selectedPeriod.testInstances.some(function (instance) {
              return instance.status !== firstInstanceStatus;
            });
          }
        }, {
          key: "getGroupStatus",
          value: function getGroupStatus(group) {
            if (!group || _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(group.instances)) {
              return null;
            }

            return group.instances[0].status;
          }
        }, {
          key: "getGroupPeriod",
          value: function getGroupPeriod(group) {
            if (!group || _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].isEmpty(group.instances)) {
              return null;
            }

            return "".concat(group.instances[0].timestamp, "-").concat(group.instances[group.instances.length - 1].timestamp);
          }
        }, {
          key: "hasFewInstances",
          value: function hasFewInstances() {
            return this.selectedPeriod.propagatedInstancesCount <= this.FEW_INSTANCES_COUNT_THRESHOLD;
          }
        }]);

        return HistoricalTestDetailsComponent;
      }();

      var VsanTestInstancesGroup = /*#__PURE__*/_createClass(function VsanTestInstancesGroup() {
        var instances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var isExpandable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var defaultExpandableGroupState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].HIDDEN;

        _classCallCheck(this, VsanTestInstancesGroup);

        this.instances = instances;
        this.isExpandable = isExpandable;
        this.defaultExpandableGroupState = defaultExpandableGroupState;
      });
      /***/

    },

    /***/
    "l+cV":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/directive/show-hide/show-hide.directive.ts ***!
      \************************************************************************/

    /*! exports provided: ShowHideDirective, ShowHideState */

    /***/
    function lCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return ShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideState", function () {
        return ShowHideState;
      });
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * Applied on container it gives option to hide / show its content.
       *    - The trigger DOM elements for the actions are provided as parameters (i.e., TemplateRef).
       *    - The initial state of container is defined by the value of {@code state}.
       */


      var ShowHideDirective = /*#__PURE__*/function () {
        function ShowHideDirective(viewContainerRef, el, refWatcher) {
          var _this4 = this;

          _classCallCheck(this, ShowHideDirective);

          this.viewContainerRef = viewContainerRef;
          this.el = el;
          this.refWatcher = refWatcher;
          this.DISPLAY_HIDE = "none";
          this.DISPLAY_SHOW = "flex";
          this._state = ShowHideState.HIDDEN;

          this.showElement = function ($event) {
            // if click function is called because mouse click parameter will be set, otherwise will be null
            // set focus only if user clicks the trigger element, do not at inilialization
            _this4.prepareTrigger(_this4.hideTriggerElement, _this4.hideElement, !!$event);

            _this4.el.nativeElement.style.display = _this4.DISPLAY_SHOW;
          };

          this.hideElement = function ($event) {
            // if click function is called because mouse click parameter will be set, otherwise will be null
            // set focus only if user clicks the trigger element, do not at inilialization
            _this4.prepareTrigger(_this4.showTriggerElement, _this4.showElement, !!$event);

            _this4.el.nativeElement.style.display = _this4.DISPLAY_HIDE;
          };
        }

        _createClass(ShowHideDirective, [{
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(value) {
            var _this5 = this;

            if (value == null || value === this._state) {
              return;
            }

            this._state = value;
            this.refWatcher.setTimeout(function () {
              return _this5.onStateChanged();
            }, 0);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onStateChanged();
          }
        }, {
          key: "onStateChanged",
          value: function onStateChanged() {
            // schedule setup of the element
            switch (this.state) {
              case ShowHideState.DISABLED:
                this.disableFunctionality();
                break;

              case ShowHideState.SHOWN:
                this.showElement();
                break;

              case ShowHideState.HIDDEN:
                this.hideElement();
                break;
            }
          }
        }, {
          key: "disableFunctionality",
          value: function disableFunctionality() {
            this.viewContainerRef.clear();
            this.el.nativeElement.style.display = this.DISPLAY_SHOW;
          }
        }, {
          key: "prepareTrigger",
          value: function prepareTrigger(triggerElement, clickFunction, setFocus) {
            this.viewContainerRef.clear();
            var triggerElementViewRef = this.viewContainerRef.createEmbeddedView(triggerElement);
            var triggerNode = this.findTriggerDomNode(triggerElementViewRef);

            if (!triggerNode) {
              _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("Not able to find trigger DOM element in showTriggerElement or hideTriggerElement inputs.");

              return;
            }

            triggerNode.style.cursor = "pointer";
            triggerNode.onclick = clickFunction;

            if (setFocus) {
              var focusableElement = this.getFirstFocusableElement(triggerNode);

              if (focusableElement) {
                focusableElement.focus();
              }
            }
          }
          /**
           * Finds the first node element from the provided template
           */

        }, {
          key: "findTriggerDomNode",
          value: function findTriggerDomNode(triggerElementViewRef) {
            if (!triggerElementViewRef || _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(triggerElementViewRef.rootNodes)) {
              return null;
            }

            return triggerElementViewRef.rootNodes.find(this.isElementNode);
          }
        }, {
          key: "isElementNode",
          value: function isElementNode(node) {
            return node && node.nodeType === Node.ELEMENT_NODE;
          }
        }, {
          key: "getFirstFocusableElement",
          value: function getFirstFocusableElement(element) {
            if (this.isElementFocusable(element)) {
              return element;
            }

            if (element.children) {
              // tslint:disable-next-line:prefer-for-of
              for (var i = 0; i < element.children.length; i++) {
                var child = this.getFirstFocusableElement(element.children.item(i));

                if (this.isElementFocusable(child)) {
                  return child;
                }
              }
            }

            return null;
          }
        }, {
          key: "isElementFocusable",
          value: function isElementFocusable(element) {
            return element.tabIndex > -1;
          }
        }]);

        return ShowHideDirective;
      }();

      var ShowHideState = /*@__PURE__*/function (ShowHideState) {
        ShowHideState[ShowHideState["SHOWN"] = 0] = "SHOWN";
        ShowHideState[ShowHideState["HIDDEN"] = 1] = "HIDDEN";
        ShowHideState[ShowHideState["DISABLED"] = 2] = "DISABLED";
        return ShowHideState;
      }({});
      /***/

    },

    /***/
    "mhsP":
    /*!*****************************************************************!*\
      !*** ./src/app/vsan/health/view/card/details-card.component.ts ***!
      \*****************************************************************/

    /*! exports provided: DetailsCardComponent */

    /***/
    function mhsP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsCardComponent", function () {
        return DetailsCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/illustrated-message/illustrated-message.component */
      "GNkU");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/client/dataservice/data-service-property */
      "GENi");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _service_telemetry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/telemetry.service */
      "U2+J");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/vsan-dialog-util */
      "cMmx");
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../vsan-routes */
      "w9V1");
      /* harmony import */


      var _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../action/remediate-action-constants */
      "0ReQ");
      /* harmony import */


      var _model_health_retest_event_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../model/health-retest-event.data */
      "jiVK");
      /* harmony import */


      var _model_health_silent_change_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../model/health-silent-change.data */
      "KZme");
      /* harmony import */


      var _model_health_test_nav_params__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../model/health-test-nav-params */
      "fLgZ");
      /* harmony import */


      var _health_lazy_data_loading_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../health-lazy-data-loading-util */
      "eVcU");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DetailsCardComponent = /*#__PURE__*/function () {
        function DetailsCardComponent(healthMutationProvider, healthProvider, taskSvc, capabilityProvider, permissionService, navigationService, telemetryService, dataService, refWatcher) {
          var _this6 = this;

          _classCallCheck(this, DetailsCardComponent);

          this.healthMutationProvider = healthMutationProvider;
          this.healthProvider = healthProvider;
          this.taskSvc = taskSvc;
          this.capabilityProvider = capabilityProvider;
          this.permissionService = permissionService;
          this.navigationService = navigationService;
          this.telemetryService = telemetryService;
          this.dataService = dataService;
          this.refWatcher = refWatcher;
          this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"];
          this.VsanHealthUtil = _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_11__["VsanHealthUtil"];
          this.IllustratedMessageType = _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_2__["IllustratedMessageType"];
          this.GOTO_HELP_EVENT = "goto_help";
          this.EVENT_PARAM_NAME = "helpId";
          this.TEST_ID_SKYLINE = "com.vmware.vsan.health.test.advisor";
          this.HELP_ID_HCL_UPTODATE = "com.vmware.vsan.health.test.hcldbuptodate";
          this.HELP_ID_RELEASE_CATALOG_UPTODATE = "com.vmware.vsan.health.test.releasecataloguptodate";
          this.HELP_ID_DISK_BALANCE = "com.vmware.vsan.health.test.diskbalance";
          this.HELP_ID_DISK_SPACE = "com.vmware.vsan.health.test.diskspace";
          this.HELP_ID_SELECT_VCG_DEVICE_MODELS = "com.vmware.vsan.health.test.nvmeidentifiable";
          this.onRetest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSilentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onHealthTestNavigation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObject"].contextObject;
          this.isDiskSpaceActionShown = true;
          this.hasEditPermissions = false;
          this.showTestName = true;
          this.isSilentCheck = false;
          this.isOnlineTest = false;
          this.silentCheckSupported = false;
          this.hasStoragePermissions = false;

          this.isActionSupported = function (actionId) {
            return _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"][actionId] !== undefined;
          };

          this.getTabTitle = function (table) {
            return !!table.title ? table.title : _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.result");
          };

          this.navigateToServicesPage = function () {
            var context = {
              advancedOptionsExpanded: true
            };

            _this6.navigationService.navigateTo(_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["PlatformExtension"].CLUSTER_SERVICES, null, context);
          };

          this.navigateToVumClusterSettings = function () {
            _this6.navigationService.navigateTo(_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["PlatformExtension"].CLUSTER_UPDATES, _this6.clusterRef);
          };

          this.isActionDisabled = function (action) {
            if (!_this6.hasEditPermissions) {
              return true;
            }

            return action ? !action.enabled : false;
          };

          this.actionTitle = function (action) {
            if (!_this6.hasEditPermissions) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.common.nopermissions");
            }

            return action ? action.description : "";
          };

          this.isDataDrivenActionDisabled = function (action) {
            if (_this6.isPurgeInaccessibleVmSwapObjectsAction(action.actionId)) {
              return !action.enabled || !_this6.hasEditPermissions || !_this6.hasStoragePermissions;
            }

            return !action.enabled || !_this6.hasEditPermissions;
          };

          this.isPurgeInaccessibleVmSwapObjectsAction = function (actionId) {
            return _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"][actionId] === _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].PurgeInaccessSwapObjs;
          };
          /**
           * The action may 1: open a dialog 2: send request directly 3: navigate to another page
           * For #1&2 we will use eventemitter in the callback so parent component can take further
           * actions(refresh the page, reload some data, etc)
           */


          this.remediateBtnClick = function (actionId) {
            switch (_action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"][actionId]) {
              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].RemediateDedup:
                var params = {
                  isDedupAction: true,
                  title: _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.disk.format.remediate.title")
                };
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/remediateCluster").setSize(700, 300).open(params).then(_this6.refreshWhenTaskDone);
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].RemediateFileService:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/remediateCluster").setSize(700, 350).open({
                  title: _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.remediate.fileservice.config.dlg.title")
                }).then(_this6.refreshWhenTaskDone);
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].RemediateClusterConfig:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/remediateCluster").setSize(700, 350).open({
                  title: _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.remediate.cluster.config.dlg.title")
                }).then(_this6.refreshWhenTaskDone);
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].RepairClusterObjectsAction:
                _this6.healthMutationProvider.repairClusterObjectsImmediate(_this6.clusterRef).then(_this6.refreshWhenTaskDone)["catch"](function () {
                  _this6.alertMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.cluster.repair.error");
                });

                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].PurgeInaccessSwapObjs:
                if (_this6.isPurgeInaccessibleVmSwapObjectsSupported) {
                  new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/purgeInaccessibleSwapObjs").setSize(550, 220).open().then(_this6.refreshWhenTaskDone);
                } else {
                  new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/notSupportedAction").setSize(550, 180).open();
                }

                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].RelayoutVsanObjects:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/relayoutVsanObjects").setSize(600, 250).open().then(_this6.refreshWhenTaskDone);
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].UpgradeVsanDiskFormat:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("upgrade/upgrade").setSize(700, 350).open().then(_this6.refreshWhenTaskDone);
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].LoginVumIsoDepot:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/loginVumDepot").setSize(550, 290).open();
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].EnablePerformanceServiceAction:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"](_vsan_routes__WEBPACK_IMPORTED_MODULE_13__["VsanRoutes"].PERFORMANCE_CONFIG).setSize(_util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.height).open({
                  clusterRef: _this6.clusterRef
                }).then(_this6.refreshWhenTaskDone);
                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].EnableCeip:
                _this6.navigationService.navigateWithoutContextObject(_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["PlatformExtension"].CEIP_VIEW);

                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].ClusterUpgrade:
                _this6.navigateToVumClusterSettings();

                break;

              case _action_remediate_action_constants__WEBPACK_IMPORTED_MODULE_14__["RemediateActions"].RemediateFileServiceImbalance:
                new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/remediateFileServiceImbalance").setSize(700, 400).open({
                  clusterRef: _this6.clusterRef
                }).then(_this6.refreshWhenTaskDone);
                break;

              default:
                _util_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"].warn("Unknown actionId: " + actionId);

            }
          };

          this.refreshWhenTaskDone = function (task) {
            if (!task) {
              return;
            }

            _this6.taskSvc.getAwaitResult(task).then(function () {
              return _this6.triggerRetestWithoutOnlineHealth();
            });
          };
        }

        _createClass(DetailsCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loadDataHealthCapabilityAndPermissions();
                      _context2.next = 3;
                      return this.dataService.getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_4__["ClusterComputeResource"].name, _service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObject"].contextObject);

                    case 3:
                      this.clusterName = _context2.sent;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadDataHealthCapabilityAndPermissions",
          value: function loadDataHealthCapabilityAndPermissions() {
            var _this7 = this;

            // We only check IsPurgeInaccessibleVmSwapObjectsSupported at cluster level health check
            // because this action only exists at cluster level.
            if (_service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObjectUtils"].isCluster(_service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObject"].uid(this.clusterRef))) {
              Promise.all([this.capabilityProvider.getIsPurgeInaccessibleVmSwapObjectsSupported(this.clusterRef), this.capabilityProvider.getIsCapacityCustomizableThresholdsSupported(this.clusterRef)]).then(function (results) {
                _this7.isPurgeInaccessibleVmSwapObjectsSupported = results[0];
                _this7.isCapacityCustomizableThresholdsSupported = results[1];
              })["catch"](function (err) {
                _this7.alertMessage = err;
                _this7.isPurgeInaccessibleVmSwapObjectsSupported = false;
                _this7.isCapacityCustomizableThresholdsSupported = false;
              });
            }

            this.permissionService.hasPermissions(this.clusterRef, [_generated_privileges__WEBPACK_IMPORTED_MODULE_3__["Privileges"].CONFIG_STORAGE()]).then(function (result) {
              return _this7.hasStoragePermissions = result;
            })["catch"](function (err) {
              _this7.alertMessage = err;
              _this7.hasStoragePermissions = false;
            });
          }
        }, {
          key: "data",
          get: function get() {
            return this._data;
          },
          set: function set(value) {
            var _this8 = this;

            this.loadingTestInstances = true;
            this.selectedInstance = null;
            this.hasLoadTestError = false;
            this._data = value;

            if (value) {
              _health_lazy_data_loading_util__WEBPACK_IMPORTED_MODULE_18__["HealthLazyDataLoadingUtil"].load(this._data).then(function () {
                _this8.resetTabFocus();

                if (!_this8.isHistoricalTestData) {
                  _this8.initializeSelectedInstanceDetails();
                }

                _this8.loadingTestInstances = false;
              })["catch"](function (error) {
                _util_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"].error(error);

                _this8._data.instances = [];
                _this8.hasLoadTestError = true;
              })["finally"](function () {
                return _this8.loadingTestInstances = false;
              });
            }
          }
        }, {
          key: "resetTabFocus",
          value: function resetTabFocus() {
            if (this.tabs != null && this.tabs.length > 0) {
              // Reset initial state of first focused element due to correct re-initialization of clr-tabs functionality
              this.tabs.first.el.nativeElement.click(); // Move focus to the first tab

              this.tabs.first.el.nativeElement.focus();
            }
          }
        }, {
          key: "gotoAskMore",
          value: function gotoAskMore() {
            this.telemetryService.logAction(_service_telemetry_service__WEBPACK_IMPORTED_MODULE_7__["EventCategory"].VSAN_HEALTH, this.GOTO_HELP_EVENT, this.EVENT_PARAM_NAME, this.data.helpId);
            this.navigationService.askVMware(this.data && this.data.helpId);
          }
        }, {
          key: "testMessages",
          get: function get() {
            var _a, _b;

            return this.isHistoricalTestData ? (_a = this.selectedInstance) === null || _a === void 0 ? void 0 : _a.messages : (_b = this.data) === null || _b === void 0 ? void 0 : _b.messages;
          }
        }, {
          key: "openCapacityManagementDialog",
          value: function openCapacityManagementDialog() {
            var _this9 = this;

            var context = {
              clusterName: this.clusterName,
              // Having the old disk version/old format objects means that
              // the vSAN cluster is currently not in a very usable state which is not relevant in this case
              showOldFormatInfo: false
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"](_vsan_routes__WEBPACK_IMPORTED_MODULE_13__["VsanRoutes"].CAPACITY_MANAGEMENT).setSize(_util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__["VsanDialogUtil"].CAPACITY_MANAGEMENT_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__["VsanDialogUtil"].CAPACITY_MANAGEMENT_DIALOG.height).open(context).then(function (taskRef) {
              return _this9.refreshWhenTaskDone(taskRef);
            });
          }
        }, {
          key: "navigateToHealthTest",
          value: function navigateToHealthTest(testId) {
            var params = new _model_health_test_nav_params__WEBPACK_IMPORTED_MODULE_17__["HealthTestNavParams"](testId);

            if (this.isHistoricalTestData && this.selectedInstance) {
              params.timestamp = this.selectedInstance.timestamp;
            }

            this.onHealthTestNavigation.emit(params);
          }
        }, {
          key: "displayDataDrivenActions",
          value: function displayDataDrivenActions(isInfoTab) {
            var _this10 = this;

            var hasSupportedActions = this.data && this.data.actions && this.data.actions.length > 0 && this.data.actions.some(function (action) {
              return _this10.isActionSupported(action.actionId);
            });
            return hasSupportedActions && this.areTestActionsVisibleInTab(isInfoTab);
          }
        }, {
          key: "displayInfoTab",
          value: function displayInfoTab(isInfoTab) {
            return isInfoTab && this.data.testId !== this.TEST_ID_SKYLINE;
          }
        }, {
          key: "displayHclDbUpToDateAction",
          value: function displayHclDbUpToDateAction(isInfoTab) {
            var isHclDbUpToDateAction = this.data.helpId === this.HELP_ID_HCL_UPTODATE;
            return isHclDbUpToDateAction && this.areTestActionsVisibleInTab(isInfoTab);
          }
        }, {
          key: "displayReleaseCatalogUpToDateAction",
          value: function displayReleaseCatalogUpToDateAction(isInfoTab) {
            var isReleaseCatalogUpToDateAction = this.data.helpId === this.HELP_ID_RELEASE_CATALOG_UPTODATE;
            return isReleaseCatalogUpToDateAction && this.areTestActionsVisibleInTab(isInfoTab);
          }
        }, {
          key: "displayDiskBalanceAction",
          value: function displayDiskBalanceAction(isInfoTab) {
            var isDiskBalanceAction = this.data.helpId === this.HELP_ID_DISK_BALANCE;
            return isDiskBalanceAction && this.areTestActionsVisibleInTab(isInfoTab);
          }
        }, {
          key: "displayDiskSpaceAction",
          value: function displayDiskSpaceAction(isInfoTab) {
            var isDiskSpaceAction = this.data.helpId === this.HELP_ID_DISK_SPACE;
            return isDiskSpaceAction && this.isDiskSpaceActionShown && this.areTestActionsVisibleInTab(isInfoTab) && this.isCapacityCustomizableThresholdsSupported;
          }
        }, {
          key: "displayDeviceModelSelectAction",
          value: function displayDeviceModelSelectAction(isInfoTab) {
            var isDeviceModelSelectAction = this.data.helpId === this.HELP_ID_SELECT_VCG_DEVICE_MODELS;
            return isDeviceModelSelectAction && this.areTestActionsVisibleInTab(isInfoTab);
          }
        }, {
          key: "areTestActionsVisibleInTab",
          value: function areTestActionsVisibleInTab(isInfoTab) {
            // is not info tab OR is info tab without details
            return !this.isHistoricalTestData && (!isInfoTab || isInfoTab && !this.selectedInstance.details);
          }
        }, {
          key: "instanceSelected",
          value: function instanceSelected(instanceTimestamp) {
            this.initializeSelectedInstanceDetails(instanceTimestamp);
          }
        }, {
          key: "initializeSelectedInstanceDetails",
          value: function initializeSelectedInstanceDetails(instanceTimestamp) {
            var _this11 = this;

            this.hasLoadInstanceDetailsError = false;

            if (!this.data || !this.data.instances || !this.data.instances.length) {
              this.selectedInstance = null;
              return;
            }

            this.loadingDetails = true;
            var result = instanceTimestamp ? this.data.instances.find(function (instance) {
              return instance.timestamp === instanceTimestamp;
            }) : null;

            if (result || this.data.instances.length) {
              // do not force to select latest instance in historical mode. The historical-test-details component
              // will do this if needed
              this.selectedInstance = result || this.isHistoricalTestData ? result : this.data.instances[this.data.instances.length - 1];
            }

            _health_lazy_data_loading_util__WEBPACK_IMPORTED_MODULE_18__["HealthLazyDataLoadingUtil"].load(this.selectedInstance).then(function () {
              return _this11.refWatcher.setTimeout(function () {
                _this11.resetTabFocus();
              }, 0);
            })["catch"](function (e) {
              _util_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"].error(e);

              _this11.selectedInstance.details = [];
              _this11.hasLoadInstanceDetailsError = true;
            })["finally"](function () {
              return _this11.loadingDetails = false;
            });
          }
        }, {
          key: "isSilnceCheckAvailable",
          value: function isSilnceCheckAvailable() {
            return !this.isHistoricalTestData && this.silentCheckSupported && this.data && this.data.testId !== this.TEST_ID_SKYLINE;
          }
        }, {
          key: "switchSilentCheck",
          value: function switchSilentCheck() {
            if (this.isSilentCheck) {
              this.restoreAlert();
            } else {
              this.silenceAlert();
            }
          }
        }, {
          key: "silenceAlert",
          value: function silenceAlert() {
            var _this12 = this;

            var context = {
              testId: this.data.silenceTestId,
              isVsphereHealth: this.isVsphereHealth
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/markSilent").setSize(550, 300).open(context).then(function (silent) {
              if (silent) {
                _this12.isSilentCheck = silent;

                _this12.onSilentChange.emit(new _model_health_silent_change_data__WEBPACK_IMPORTED_MODULE_16__["HealthSilentChangeData"](true));
              }
            });
          }
        }, {
          key: "restoreAlert",
          value: function restoreAlert() {
            var _this13 = this;

            var context = {
              testId: this.data.testId,
              isOnlineTest: this.isOnlineTest
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_9__["ModalBuilder"]("healthActions/restoreAlert").setSize(_util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__["VsanDialogUtil"].HEALTH_RESTORE_ACTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_10__["VsanDialogUtil"].HEALTH_RESTORE_ACTION_DIALOG.height).open(context).then(function (settings) {
              _this13.healthProvider.setSilentChecks(_this13.clusterRef, _this13.isVsphereHealth, [], [_this13.data.silenceTestId]).then(function () {
                _this13.isSilentCheck = false;

                _this13.onSilentChange.emit(new _model_health_silent_change_data__WEBPACK_IMPORTED_MODULE_16__["HealthSilentChangeData"](false, settings));
              })["catch"](function () {
                _this13.onError.emit(_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.silent.error"));
              });
            });
          }
        }, {
          key: "getSilenceRestoreAlertTitle",
          value: function getSilenceRestoreAlertTitle() {
            return this.isSilentCheck ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.silent.restore.action.label") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.monitor.health.silent.action.label");
          }
        }, {
          key: "setErrorMessage",
          value: function setErrorMessage(error) {
            this.alertMessage = error;
          }
        }, {
          key: "isTestNameShown",
          value: function isTestNameShown() {
            return this.showTestName && this.data && (!!this.data.testName || !!this.data.testDescription);
          }
        }, {
          key: "displayVirtualObjectNavigationLink",
          value: function displayVirtualObjectNavigationLink() {
            return this.isVirtualObjectsLinkShown && !this.isHistoricalTestData;
          }
        }, {
          key: "triggerRetestWithoutOnlineHealth",
          value: function triggerRetestWithoutOnlineHealth() {
            this.onRetest.emit(new _model_health_retest_event_data__WEBPACK_IMPORTED_MODULE_15__["HealthRetestEventData"](false));
          }
        }]);

        return DetailsCardComponent;
      }();
      /***/

    },

    /***/
    "oLLP":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-test-details.scss.shim.ngstyle.js ***!
      \******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function oLLP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".title[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  line-height: 1.6rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  height: 1.68rem;\n  border-width: 0;\n  border-style: none;\n  border-top: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  background-color: transparent;\n  padding: 0;\n  justify-content: center;\n}\n.item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.item[_ngcontent-%COMP%]   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-fill);\n  stroke: var(--health-historical-green-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-fill);\n  stroke: var(--health-historical-blue-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-fill);\n  stroke: var(--health-historical-yellow-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-fill);\n  stroke: var(--health-historical-red-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-bg-color);\n  stroke: var(--vsan-status-unknown-border-color);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-details-color);\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-bg-color) !important;\n}\n.item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.item[_ngcontent-%COMP%]:focus.green-item {\n  border-bottom-color: var(--health-historical-green-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.blue-item {\n  border-bottom-color: var(--health-historical-blue-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.yellow-item {\n  border-bottom-color: var(--health-historical-yellow-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.red-item {\n  border-bottom-color: var(--health-historical-red-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.grey-item {\n  border-bottom-color: var(--vsan-status-unknown-border-color);\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  height: 7.2rem;\n  flex-direction: row;\n  position: relative;\n  overflow: hidden;\n  background-color: var(--vsan-background-color);\n  border: 0.05rem solid var(--vsan-border-color);\n  border-radius: 0.15rem;\n}\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  width: 0.9rem;\n  background-color: var(--vsan-link-color);\n  color: var(--vsan-background-color);\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.15rem 0 0 0.15rem;\n  border-width: 0;\n  cursor: pointer;\n}\n.items-pane[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 0rem;\n  flex-direction: column;\n  overflow: auto;\n  background-image: linear-gradient(var(--vsan-border-color), var(--vsan-border-color));\n  background-size: 0.05rem 0.05rem;\n  background-position-x: 0;\n  background-position-y: 2.54rem;\n  background-repeat: repeat-x;\n}\n.periods[_ngcontent-%COMP%], .instances[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  margin-top: 1.7rem;\n}\n.periods[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 1.7rem !important;\n}\n.periods[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.periods[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -1.4rem !important;\n}\n.periods[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.periods[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -1.4rem !important;\n}\n.periods[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.instances[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .instances-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.instances[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%], .instances-group[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.instances[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child), .instances-group[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.instances[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%], .instances-group[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.instances[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child), .instances-group[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.instances[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, .instances-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.instances.large-spacing[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .instances-group.large-spacing[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 4.8rem !important;\n}\n.instances.large-spacing[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%], .instances-group.large-spacing[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.instances.large-spacing[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child), .instances-group.large-spacing[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -4.5rem !important;\n}\n.instances.large-spacing[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%], .instances-group.large-spacing[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.instances.large-spacing[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child), .instances-group.large-spacing[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -4.5rem !important;\n}\n.instances.large-spacing[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, .instances-group.large-spacing[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.instances-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n.period-item-wrapper[_ngcontent-%COMP%], .instance-item-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  align-items: center;\n}\n.period-item-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .instance-item-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.instance[_ngcontent-%COMP%], .period[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  height: 1.2rem;\n  border-width: 0;\n  border-style: none;\n  background-color: transparent;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n}\n.instance[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .period[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  top: 0.2rem;\n  z-index: 100;\n}\n.period[_ngcontent-%COMP%] {\n  width: 1.7rem;\n}\n.timeline-labels[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n}\n.instance-overview-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  position: absolute;\n  bottom: 0.8rem;\n}\n.instance-overview[_ngcontent-%COMP%] {\n  padding-left: 0.6rem;\n  white-space: pre;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oaXN0b3JpY2FsL2hpc3RvcmljYWwtdGVzdC1kZXRhaWxzLnNjc3MiLCJzcmMvYXBwL3ZzYW4vaGVhbHRoL3ZpZXcvaGlzdG9yaWNhbC9oaXN0b3JpY2FsLWRldGFpbHMtc2hhcmVkLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUw4Q0E7RUFDRyxrQkd5RWlCO0VIeEVqQixtQkFBQTtFQUNBLGdCR29GdUI7RUhuRnZCLG1CQUFBO0FENUJIO0FDK0JBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBbERtQjtFQW1EbkIsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBbERzQjtFQW1EdEIsb0NBbkRzQjtFQW9EdEIsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUQ1Qkg7QUM4Qkc7RUFDRyxrQkFBQTtBRDVCTjtBQzZCTTtFQWxDSCw4Q0FyQmU7RUF1Qlosa0RBeEJjO0FEK0JwQjtBQzZCTTtFQXRDSCw2Q0FqQmM7RUFtQlgsaURBcEJhO0FEK0JuQjtBQzZCTTtFQTFDSCwrQ0FiZ0I7RUFlYixtREFoQmU7QUQrQnJCO0FDNkJNO0VBOUNILDRDQVRhO0VBV1YsZ0RBWlk7QUQrQmxCO0FDNkJNO0VBbERILHlDQUxjO0VBT1gsK0NBUmE7QUQrQm5CO0FDZ0NTO0VBekROLG9EQXBCcUI7QURnRHhCO0FDaUNTO0VBN0ROLG1EQWhCb0I7QUQrQ3ZCO0FDa0NTO0VBakVOLHFEQVpzQjtBRDhDekI7QUNtQ1M7RUFyRU4sa0RBUm1CO0FENkN0QjtBQ29DUztFQXpFTiw4Q0FKb0I7QUQ0Q3ZCO0FDeUNTO0VBakZOLGdFQWtGb0M7QUR2Q3ZDO0FDMENTO0VBckZOLCtEQXNGb0M7QUR4Q3ZDO0FDMkNTO0VBekZOLGlFQTBGb0M7QUR6Q3ZDO0FDNENTO0VBN0ZOLDhEQThGb0M7QUQxQ3ZDO0FDNkNTO0VBakdOLG9EQWtHb0M7QUQzQ3ZDO0FDZ0RHO0VBQ0csYUFBQTtBRDlDTjtBQ2dETTtFQUNHLCtEQWpJVztBRG1GcEI7QUNpRE07RUFDRyw4REFqSVU7QURrRm5CO0FDa0RNO0VBQ0csZ0VBaklZO0FEaUZyQjtBQ21ETTtFQUNHLDZEQWpJUztBRGdGbEI7QUNvRE07RUFDRyw0REFqSVU7QUQrRW5CO0FBakdBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUxnQjtFQU1oQixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0kwQ2dCO0VKekNoQiw4Q0lnQ1c7RUovQlgsc0JJQ1E7QUptR1g7QUFqR0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFJVE87RUpVUCx3Q0l1Q2U7RUp0Q2YsbUNJZ0NnQjtFSi9CaEIsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFvR0g7QUFqR0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUdBLHFGQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQXpDNEI7RUEwQzVCLDJCQUFBO0FBa0dIO0FBL0ZBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CSXRDTztFSnVDUCxxQkl2Q087RUp3Q1Asa0JDbkRTO0FEcUpaO0FHekZHO0VBQ0ssK0JBQUE7QUg0RlI7QUcxRkc7RUFJRywrQkFBQTtBSHlGTjtBR3hGTTtFQUNHLCtCQUFBO0FIMEZUO0FHdkZHO0VBRUcsK0JBQUE7QUh3Rk47QUd0Rk07RUFDRywrQkFBQTtBSHdGVDtBR3JGRztFQUNHLDZCQUFBO0FIdUZOO0FHNUdHO0VBQ0ssK0JBQUE7QUgrR1I7QUc3R0c7RUFJRywrQkFBQTtBSDRHTjtBRzNHTTtFQUNHLCtCQUFBO0FINkdUO0FHMUdHO0VBRUcsK0JBQUE7QUgyR047QUd6R007RUFDRywrQkFBQTtBSDJHVDtBR3hHRztFQUNHLDZCQUFBO0FIMEdOO0FHL0hHO0VBQ0ssK0JBQUE7QUhpSVI7QUcvSEc7RUFJRywrQkFBQTtBSDhITjtBRzdITTtFQUNHLCtCQUFBO0FIK0hUO0FHNUhHO0VBRUcsK0JBQUE7QUg2SE47QUczSE07RUFDRywrQkFBQTtBSDZIVDtBRzFIRztFQUNHLDZCQUFBO0FINEhOO0FBNUlBO0VBQ0csYUFBQTtFQUNBLGNBQUE7QUErSUg7QUE1SUE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUErSUg7QUE5SUc7RUFDRyxlQUFBO0FBZ0pOO0FBNUlBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNDbEZvQjtFRG1GcEIsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQStJSDtBQTdJRztFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlJc0NpQjtBSnlHdkI7QUEzSUE7RUFDRyxhQ2pHaUI7QUQrT3BCO0FBM0lBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQThJSDtBQTNJQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQS9HeUI7QUE2UDVCO0FBM0lBO0VBQ0csb0JJekdPO0VKMEdQLGdCQUFBO0FBOElIIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oaXN0b3JpY2FsL2hpc3RvcmljYWwtdGVzdC1kZXRhaWxzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMC0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi9oaXN0b3JpY2FsLWRldGFpbHMtc2hhcmVkLnNjc3NcIjtcblxuLy8gdGhlIGxpbmUgc2hvdWxkIHNwbGl0IHRoZSBpY29uIG9uIHR3byBlcXVhbCBwYXJ0cyAtIHBhZGRpbmcgb2YgdGhlIGljb24gZnJvbSB0aGUgdG9wICsgaGFsZiBpY29uIGhlaWdodC5cbiR0aW1lbGluZS12ZXJ0aWNhbC1hZGp1c3RtZW50OiAkaXRlbXMtdG9wICsgKCRpY29uLXdyYXBwZXItaGVpZ2h0IC8gMik7XG4kaW5zdGFuY2UtaWNvbnMtc3BhY2UtYmV0d2VlbjogMC42cmVtO1xuJGluc3RhbmNlLWljb25zLXNwYWNlLWJldHdlZW4tbGFyZ2U6IDQuOHJlbTtcbiRzY3JvbGxiYXItcmVzZXJ2ZWQtaGVpZ2h0OiAwLjhyZW07XG4kY29tcG9uZW50LWhlaWdodDogNy4ycmVtO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICBoZWlnaHQ6ICRjb21wb25lbnQtaGVpZ2h0O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyO1xuICAgYm9yZGVyLXJhZGl1czogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICB3aWR0aDogJGJhY2stYnV0dG9uLXdpZHRoO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJHZzYW4tbGluay1jb2xvcjtcbiAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGJvcmRlci1yYWRpdXM6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplIDAgMCAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTtcbiAgIGJvcmRlci13aWR0aDogMDtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW1zLXBhbmUge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMSAwcmVtO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIG92ZXJmbG93OiBhdXRvO1xuICAgLy8gYWRkIHRoZSBsaW5lIGJlaGluZCB0aGUgcGVyaW9kcyAvIGluc3RhbmNlcy4gSXQgaXMgZG9uZSB0aGlzIHdheSwgYmVjYXVzZSB3ZSBzaG91bGQgYmUgYWJsZSB0byBjaGFuZ2UgaXRzIGNvbG9yXG4gICAvLyBvbiB0aGVtZSBjaGFuZ2UuXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3IsICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTtcbiAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMDtcbiAgIGJhY2tncm91bmQtcG9zaXRpb24teTogJHRpbWVsaW5lLXZlcnRpY2FsLWFkanVzdG1lbnQ7XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi5wZXJpb2RzLCAuaW5zdGFuY2VzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBwYWRkaW5nLWxlZnQ6ICRpdGVtcy1ob3Jpem9udGFsLWluZGVudGF0aW9uO1xuICAgcGFkZGluZy1yaWdodDogJGl0ZW1zLWhvcml6b250YWwtaW5kZW50YXRpb247XG4gICBtYXJnaW4tdG9wOiAkaXRlbXMtdG9wO1xufVxuXG4ucGVyaW9kcyB7XG4gICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJHBlcmlvZC1pY29uLXdpZHRoKTtcbn1cblxuLmluc3RhbmNlcywgLmluc3RhbmNlcy1ncm91cCB7XG4gICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGluc3RhbmNlLWljb25zLXNwYWNlLWJldHdlZW4pO1xuICAgJi5sYXJnZS1zcGFjaW5nIHtcbiAgICAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZygkaW5zdGFuY2UtaWNvbnMtc3BhY2UtYmV0d2Vlbi1sYXJnZSk7XG4gICB9XG59XG5cbi5pbnN0YW5jZXMtZ3JvdXAge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4ucGVyaW9kLWl0ZW0td3JhcHBlciwgLmluc3RhbmNlLWl0ZW0td3JhcHBlciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICB9XG59XG5cbi5pbnN0YW5jZSwgLnBlcmlvZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgaGVpZ2h0OiAkc2VsZWN0ZWQtaWNvbi1oZWlnaHQ7XG4gICBib3JkZXItd2lkdGg6IDA7XG4gICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIHBhZGRpbmc6IDA7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgIHN2ZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICB0b3A6ICgkc2VsZWN0ZWQtaWNvbi1oZWlnaHQgLSAkaWNvbi1oZWlnaHQpIC8gMjtcbiAgICAgIHotaW5kZXg6ICR2c2FuLXotaW5kZXgtbGF5ZXItMTtcbiAgIH1cbn1cblxuLnBlcmlvZCB7XG4gICB3aWR0aDogJHBlcmlvZC1pY29uLXdpZHRoO1xufVxuXG4udGltZWxpbmUtbGFiZWxzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmluc3RhbmNlLW92ZXJ2aWV3LXdyYXBwZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgYm90dG9tOiAkc2Nyb2xsYmFyLXJlc2VydmVkLWhlaWdodDtcbn1cblxuLmluc3RhbmNlLW92ZXJ2aWV3IHtcbiAgIHBhZGRpbmctbGVmdDogJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xuICAgd2hpdGUtc3BhY2U6IHByZTsgLy8gYWRkIHNwYWNlcyBiZXR3ZWVuIHRleHQgYW5kIHBhcmFtZXRlcnMgcGFzc2VkIHRvIGl0LlxufSIsIi8qIENvcHlyaWdodCAyMDIwLTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbiRpdGVtcy1ob3Jpem9udGFsLWluZGVudGF0aW9uOiAkdnNhbi1uZXN0ZWQtaW5kZW50YXRpb247XG4kaXRlbXMtdG9wOiAxLjdyZW07XG4kaWNvbi1oZWlnaHQ6ICR2c2FuLWljb24tc2l6ZS1zbTtcbiRzZWxlY3RlZC1pY29uLWhlaWdodDogMS4ycmVtO1xuJGljb24td3JhcHBlci1oZWlnaHQ6IDEuNjhyZW07XG4kcGVyaW9kLWljb24td2lkdGg6IDEuN3JlbTtcbiRiYWNrLWJ1dHRvbi13aWR0aDogJHZzYW4tbGc7XG4kdG9wLWJvdHRvbS1pdGVtLWJvcmRlcjogMnB4ICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gdHJhbnNwYXJlbnQ7XG5cbiRncmVlbi1pdGVtLXN0cm9rZTogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtZ3JlZW4taXRlbS1zdHJva2UpO1xuJGdyZWVuLWl0ZW0tZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtZ3JlZW4taXRlbS1maWxsKTtcbiRncmVlbi1pdGVtLWhvdmVyLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWdyZWVuLWl0ZW0taG92ZXItZmlsbCk7XG4kZ3JlZW4taXRlbS1hY3RpdmUtZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtZ3JlZW4taXRlbS1hY3RpdmUtZmlsbCk7XG4kYmx1ZS1pdGVtLXN0cm9rZTogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtYmx1ZS1pdGVtLXN0cm9rZSk7XG4kYmx1ZS1pdGVtLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWJsdWUtaXRlbS1maWxsKTtcbiRibHVlLWl0ZW0taG92ZXItZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtYmx1ZS1pdGVtLWhvdmVyLWZpbGwpO1xuJGJsdWUtaXRlbS1hY3RpdmUtZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtYmx1ZS1pdGVtLWFjdGl2ZS1maWxsKTtcbiR5ZWxsb3ctaXRlbS1zdHJva2U6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXllbGxvdy1pdGVtLXN0cm9rZSk7XG4keWVsbG93LWl0ZW0tZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwteWVsbG93LWl0ZW0tZmlsbCk7XG4keWVsbG93LWl0ZW0taG92ZXItZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwteWVsbG93LWl0ZW0taG92ZXItZmlsbCk7XG4keWVsbG93LWl0ZW0tYWN0aXZlLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXllbGxvdy1pdGVtLWFjdGl2ZS1maWxsKTtcbiRyZWQtaXRlbS1zdHJva2U6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXJlZC1pdGVtLXN0cm9rZSk7XG4kcmVkLWl0ZW0tZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtcmVkLWl0ZW0tZmlsbCk7XG4kcmVkLWl0ZW0taG92ZXItZmlsbDogdmFyKC0taGVhbHRoLWhpc3RvcmljYWwtcmVkLWl0ZW0taG92ZXItZmlsbCk7XG4kcmVkLWl0ZW0tYWN0aXZlLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXJlZC1pdGVtLWFjdGl2ZS1maWxsKTtcbiRncmV5LWl0ZW0tc3Ryb2tlOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kZ3JleS1pdGVtLWZpbGw6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJGdyZXktaXRlbS1ob3Zlci1maWxsOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJGdyZXktaXRlbS1hY3RpdmUtZmlsbDogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG5cbkBtaXhpbiBzdmctZWxlbWVudC1jb2xvcigkZmlsbCwgJHN0cm9rZTogXCJcIikge1xuICAgZmlsbDogJGZpbGw7XG4gICBAaWYgKCRzdHJva2UgIT0gXCJcIikge1xuICAgICAgc3Ryb2tlOiAkc3Ryb2tlO1xuICAgfVxufVxuXG5AbWl4aW4gc3ZnLWVsZW1lbnQtc2hhZG93KCkge1xuICAgJHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDNweCAkc2hhZG93LWNvbG9yKTtcbiAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAzcHggJHNoYWRvdy1jb2xvcik7XG59XG5cbi50aXRsZSB7XG4gICBmb250LXNpemU6ICR2c2FuLWZvbnQtc2l6ZS14cztcbiAgIGxpbmUtaGVpZ2h0OiAkaWNvbi1oZWlnaHQgKiAyO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pdGVtIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBoZWlnaHQ6ICRpY29uLXdyYXBwZXItaGVpZ2h0O1xuICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgYm9yZGVyLXRvcDogJHRvcC1ib3R0b20taXRlbS1ib3JkZXI7XG4gICBib3JkZXItYm90dG9tOiAkdG9wLWJvdHRvbS1pdGVtLWJvcmRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgcGFkZGluZzogMDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICBzdmcge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgJi5ncmVlbi1pdGVtIC5pY29uIHtcbiAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRncmVlbi1pdGVtLWZpbGwsICRncmVlbi1pdGVtLXN0cm9rZSk7XG4gICAgICB9XG5cbiAgICAgICYuYmx1ZS1pdGVtIC5pY29uIHtcbiAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRibHVlLWl0ZW0tZmlsbCwgJGJsdWUtaXRlbS1zdHJva2UpO1xuICAgICAgfVxuXG4gICAgICAmLnllbGxvdy1pdGVtIC5pY29uIHtcbiAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCR5ZWxsb3ctaXRlbS1maWxsLCAkeWVsbG93LWl0ZW0tc3Ryb2tlKTtcbiAgICAgIH1cblxuICAgICAgJi5yZWQtaXRlbSAuaWNvbiB7XG4gICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkcmVkLWl0ZW0tZmlsbCwgJHJlZC1pdGVtLXN0cm9rZSk7XG4gICAgICB9XG5cbiAgICAgICYuZ3JleS1pdGVtIC5pY29uIHtcbiAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRncmV5LWl0ZW0tZmlsbCwgJGdyZXktaXRlbS1zdHJva2UpO1xuICAgICAgfVxuICAgfVxuXG4gICAmOmhvdmVyIHtcbiAgICAgICY6bm90KDphY3RpdmUpIHN2ZyB7XG4gICAgICAgICAmLmdyZWVuLWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGdyZWVuLWl0ZW0taG92ZXItZmlsbCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYuYmx1ZS1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRibHVlLWl0ZW0taG92ZXItZmlsbCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYueWVsbG93LWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJHllbGxvdy1pdGVtLWhvdmVyLWZpbGwpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLnJlZC1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRyZWQtaXRlbS1ob3Zlci1maWxsKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi5ncmV5LWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGdyZXktaXRlbS1ob3Zlci1maWxsKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgJjphY3RpdmU6bm90KC5zZWxlY3RlZCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgICYuZ3JlZW4taXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkZ3JlZW4taXRlbS1hY3RpdmUtZmlsbCAhaW1wb3J0YW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi5ibHVlLWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGJsdWUtaXRlbS1hY3RpdmUtZmlsbCAhaW1wb3J0YW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi55ZWxsb3ctaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkeWVsbG93LWl0ZW0tYWN0aXZlLWZpbGwgIWltcG9ydGFudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYucmVkLWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJHJlZC1pdGVtLWFjdGl2ZS1maWxsICFpbXBvcnRhbnQpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLmdyZXktaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkZ3JleS1pdGVtLWFjdGl2ZS1maWxsICFpbXBvcnRhbnQpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICYuZ3JlZW4taXRlbSB7XG4gICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkZ3JlZW4taXRlbS1zdHJva2U7XG4gICAgICB9XG5cbiAgICAgICYuYmx1ZS1pdGVtIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRibHVlLWl0ZW0tc3Ryb2tlO1xuICAgICAgfVxuXG4gICAgICAmLnllbGxvdy1pdGVtIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR5ZWxsb3ctaXRlbS1zdHJva2U7XG4gICAgICB9XG5cbiAgICAgICYucmVkLWl0ZW0ge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHJlZC1pdGVtLXN0cm9rZTtcbiAgICAgIH1cblxuICAgICAgJi5ncmV5LWl0ZW0ge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyZXktaXRlbS1zdHJva2U7XG4gICAgICB9XG4gICB9XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "qahP":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/health/view/historical/historical-period.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function qahP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".title[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  line-height: 1.6rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  height: 1.68rem;\n  border-width: 0;\n  border-style: none;\n  border-top: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  background-color: transparent;\n  padding: 0;\n  justify-content: center;\n}\n.item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.item[_ngcontent-%COMP%]   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-fill);\n  stroke: var(--health-historical-green-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-fill);\n  stroke: var(--health-historical-blue-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-fill);\n  stroke: var(--health-historical-yellow-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-fill);\n  stroke: var(--health-historical-red-item-stroke);\n}\n.item[_ngcontent-%COMP%]   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-bg-color);\n  stroke: var(--vsan-status-unknown-border-color);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-hover-fill);\n}\n.item[_ngcontent-%COMP%]:hover:not(:active)   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-details-color);\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.green-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-green-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.blue-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-blue-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.yellow-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-yellow-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.red-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--health-historical-red-item-active-fill) !important;\n}\n.item[_ngcontent-%COMP%]:active:not(.selected)   svg.grey-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  fill: var(--vsan-status-unknown-bg-color) !important;\n}\n.item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.item[_ngcontent-%COMP%]:focus.green-item {\n  border-bottom-color: var(--health-historical-green-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.blue-item {\n  border-bottom-color: var(--health-historical-blue-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.yellow-item {\n  border-bottom-color: var(--health-historical-yellow-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.red-item {\n  border-bottom-color: var(--health-historical-red-item-stroke);\n}\n.item[_ngcontent-%COMP%]:focus.grey-item {\n  border-bottom-color: var(--vsan-status-unknown-border-color);\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  align-items: center;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.period[_ngcontent-%COMP%] {\n  width: 1.7rem;\n}\n.period[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));\n}\n.instances-count[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  font-size: 0.55rem;\n  line-height: 0.8rem;\n  font-weight: 500;\n  color: #000000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oaXN0b3JpY2FsL2hpc3RvcmljYWwtcGVyaW9kLnNjc3MiLCJzcmMvYXBwL3ZzYW4vaGVhbHRoL3ZpZXcvaGlzdG9yaWNhbC9oaXN0b3JpY2FsLWRldGFpbHMtc2hhcmVkLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUw4Q0E7RUFDRyxrQkd5RWlCO0VIeEVqQixtQkFBQTtFQUNBLGdCR29GdUI7RUhuRnZCLG1CQUFBO0FENUJIO0FDK0JBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBbERtQjtFQW1EbkIsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBbERzQjtFQW1EdEIsb0NBbkRzQjtFQW9EdEIsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUQ1Qkg7QUM4Qkc7RUFDRyxrQkFBQTtBRDVCTjtBQzZCTTtFQWxDSCw4Q0FyQmU7RUF1Qlosa0RBeEJjO0FEK0JwQjtBQzZCTTtFQXRDSCw2Q0FqQmM7RUFtQlgsaURBcEJhO0FEK0JuQjtBQzZCTTtFQTFDSCwrQ0FiZ0I7RUFlYixtREFoQmU7QUQrQnJCO0FDNkJNO0VBOUNILDRDQVRhO0VBV1YsZ0RBWlk7QUQrQmxCO0FDNkJNO0VBbERILHlDQUxjO0VBT1gsK0NBUmE7QUQrQm5CO0FDZ0NTO0VBekROLG9EQXBCcUI7QURnRHhCO0FDaUNTO0VBN0ROLG1EQWhCb0I7QUQrQ3ZCO0FDa0NTO0VBakVOLHFEQVpzQjtBRDhDekI7QUNtQ1M7RUFyRU4sa0RBUm1CO0FENkN0QjtBQ29DUztFQXpFTiw4Q0FKb0I7QUQ0Q3ZCO0FDeUNTO0VBakZOLGdFQWtGb0M7QUR2Q3ZDO0FDMENTO0VBckZOLCtEQXNGb0M7QUR4Q3ZDO0FDMkNTO0VBekZOLGlFQTBGb0M7QUR6Q3ZDO0FDNENTO0VBN0ZOLDhEQThGb0M7QUQxQ3ZDO0FDNkNTO0VBakdOLG9EQWtHb0M7QUQzQ3ZDO0FDZ0RHO0VBQ0csYUFBQTtBRDlDTjtBQ2dETTtFQUNHLCtEQWpJVztBRG1GcEI7QUNpRE07RUFDRyw4REFqSVU7QURrRm5CO0FDa0RNO0VBQ0csZ0VBaklZO0FEaUZyQjtBQ21ETTtFQUNHLDZEQWpJUztBRGdGbEI7QUNvRE07RUFDRyw0REFqSVU7QUQrRW5CO0FBeEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBMkdIO0FBMUdHO0VBQ0csZUFBQTtBQTRHTjtBQXhHQTtFQUNHLGFDTmlCO0FEaUhwQjtBQTFHRztFQzRCQSxvREFBQTtBRGtGSDtBQXhHQTtFQUVHLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JJOEZpQjtFSjdGakIsbUJJWWlCO0VKWGpCLGdCSTBHMEI7RUp6RzFCLGNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlJNEdvQjtBSkZ2QiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vaGVhbHRoL3ZpZXcvaGlzdG9yaWNhbC9oaXN0b3JpY2FsLXBlcmlvZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL2hpc3RvcmljYWwtZGV0YWlscy1zaGFyZWQuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICB9XG59XG5cbi5wZXJpb2Qge1xuICAgd2lkdGg6ICRwZXJpb2QtaWNvbi13aWR0aDtcbiAgIHN2ZyB7XG4gICAgICAvLyBBZGQgc2hhZG93IGVmZmVjdCB0byB0aGUgcGVyaW9kIHNoYXBlXG4gICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1zaGFkb3c7XG4gICB9XG59XG5cbi5pbnN0YW5jZXMtY291bnQge1xuICAgLy8ga2VlcHMgdGhlIGNvdW50IG92ZXIgdGhlIGljb24uIElmIG9taXR0ZWQgdGhlIGNvdW50IHdpbGwgYmUgYWJvdmUgdGhlIGljb24uXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB3aWR0aDogMTAwJTtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgZm9udC1zaXplOiAkdnNhbi1mb250LXNpemUteHM7XG4gICBsaW5lLWhlaWdodDogJGljb24taGVpZ2h0O1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDtcbiAgIGNvbG9yOiAjMDAwMDAwO1xuICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICB6LWluZGV4OiAkdnNhbi16LWluZGV4LWxheWVyLTI7XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAyMC0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kaXRlbXMtaG9yaXpvbnRhbC1pbmRlbnRhdGlvbjogJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uO1xuJGl0ZW1zLXRvcDogMS43cmVtO1xuJGljb24taGVpZ2h0OiAkdnNhbi1pY29uLXNpemUtc207XG4kc2VsZWN0ZWQtaWNvbi1oZWlnaHQ6IDEuMnJlbTtcbiRpY29uLXdyYXBwZXItaGVpZ2h0OiAxLjY4cmVtO1xuJHBlcmlvZC1pY29uLXdpZHRoOiAxLjdyZW07XG4kYmFjay1idXR0b24td2lkdGg6ICR2c2FuLWxnO1xuJHRvcC1ib3R0b20taXRlbS1ib3JkZXI6IDJweCAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuIHRyYW5zcGFyZW50O1xuXG4kZ3JlZW4taXRlbS1zdHJva2U6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWdyZWVuLWl0ZW0tc3Ryb2tlKTtcbiRncmVlbi1pdGVtLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWdyZWVuLWl0ZW0tZmlsbCk7XG4kZ3JlZW4taXRlbS1ob3Zlci1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ncmVlbi1pdGVtLWhvdmVyLWZpbGwpO1xuJGdyZWVuLWl0ZW0tYWN0aXZlLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWdyZWVuLWl0ZW0tYWN0aXZlLWZpbGwpO1xuJGJsdWUtaXRlbS1zdHJva2U6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWJsdWUtaXRlbS1zdHJva2UpO1xuJGJsdWUtaXRlbS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1ibHVlLWl0ZW0tZmlsbCk7XG4kYmx1ZS1pdGVtLWhvdmVyLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWJsdWUtaXRlbS1ob3Zlci1maWxsKTtcbiRibHVlLWl0ZW0tYWN0aXZlLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLWJsdWUtaXRlbS1hY3RpdmUtZmlsbCk7XG4keWVsbG93LWl0ZW0tc3Ryb2tlOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC15ZWxsb3ctaXRlbS1zdHJva2UpO1xuJHllbGxvdy1pdGVtLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXllbGxvdy1pdGVtLWZpbGwpO1xuJHllbGxvdy1pdGVtLWhvdmVyLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXllbGxvdy1pdGVtLWhvdmVyLWZpbGwpO1xuJHllbGxvdy1pdGVtLWFjdGl2ZS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC15ZWxsb3ctaXRlbS1hY3RpdmUtZmlsbCk7XG4kcmVkLWl0ZW0tc3Ryb2tlOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1yZWQtaXRlbS1zdHJva2UpO1xuJHJlZC1pdGVtLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXJlZC1pdGVtLWZpbGwpO1xuJHJlZC1pdGVtLWhvdmVyLWZpbGw6IHZhcigtLWhlYWx0aC1oaXN0b3JpY2FsLXJlZC1pdGVtLWhvdmVyLWZpbGwpO1xuJHJlZC1pdGVtLWFjdGl2ZS1maWxsOiB2YXIoLS1oZWFsdGgtaGlzdG9yaWNhbC1yZWQtaXRlbS1hY3RpdmUtZmlsbCk7XG4kZ3JleS1pdGVtLXN0cm9rZTogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJGdyZXktaXRlbS1maWxsOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRncmV5LWl0ZW0taG92ZXItZmlsbDogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRncmV5LWl0ZW0tYWN0aXZlLWZpbGw6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuXG5AbWl4aW4gc3ZnLWVsZW1lbnQtY29sb3IoJGZpbGwsICRzdHJva2U6IFwiXCIpIHtcbiAgIGZpbGw6ICRmaWxsO1xuICAgQGlmICgkc3Ryb2tlICE9IFwiXCIpIHtcbiAgICAgIHN0cm9rZTogJHN0cm9rZTtcbiAgIH1cbn1cblxuQG1peGluIHN2Zy1lbGVtZW50LXNoYWRvdygpIHtcbiAgICRzaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAzcHggJHNoYWRvdy1jb2xvcik7XG4gICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggM3B4ICRzaGFkb3ctY29sb3IpO1xufVxuXG4udGl0bGUge1xuICAgZm9udC1zaXplOiAkdnNhbi1mb250LXNpemUteHM7XG4gICBsaW5lLWhlaWdodDogJGljb24taGVpZ2h0ICogMjtcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaXRlbSB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgaGVpZ2h0OiAkaWNvbi13cmFwcGVyLWhlaWdodDtcbiAgIGJvcmRlci13aWR0aDogMDtcbiAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgIGJvcmRlci10b3A6ICR0b3AtYm90dG9tLWl0ZW0tYm9yZGVyO1xuICAgYm9yZGVyLWJvdHRvbTogJHRvcC1ib3R0b20taXRlbS1ib3JkZXI7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIHBhZGRpbmc6IDA7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgc3ZnIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICYuZ3JlZW4taXRlbSAuaWNvbiB7XG4gICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkZ3JlZW4taXRlbS1maWxsLCAkZ3JlZW4taXRlbS1zdHJva2UpO1xuICAgICAgfVxuXG4gICAgICAmLmJsdWUtaXRlbSAuaWNvbiB7XG4gICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkYmx1ZS1pdGVtLWZpbGwsICRibHVlLWl0ZW0tc3Ryb2tlKTtcbiAgICAgIH1cblxuICAgICAgJi55ZWxsb3ctaXRlbSAuaWNvbiB7XG4gICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkeWVsbG93LWl0ZW0tZmlsbCwgJHllbGxvdy1pdGVtLXN0cm9rZSk7XG4gICAgICB9XG5cbiAgICAgICYucmVkLWl0ZW0gLmljb24ge1xuICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJHJlZC1pdGVtLWZpbGwsICRyZWQtaXRlbS1zdHJva2UpO1xuICAgICAgfVxuXG4gICAgICAmLmdyZXktaXRlbSAuaWNvbiB7XG4gICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkZ3JleS1pdGVtLWZpbGwsICRncmV5LWl0ZW0tc3Ryb2tlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgJjpob3ZlciB7XG4gICAgICAmOm5vdCg6YWN0aXZlKSBzdmcge1xuICAgICAgICAgJi5ncmVlbi1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRncmVlbi1pdGVtLWhvdmVyLWZpbGwpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLmJsdWUtaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkYmx1ZS1pdGVtLWhvdmVyLWZpbGwpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLnllbGxvdy1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCR5ZWxsb3ctaXRlbS1ob3Zlci1maWxsKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi5yZWQtaXRlbSAuaWNvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzdmctZWxlbWVudC1jb2xvcigkcmVkLWl0ZW0taG92ZXItZmlsbCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYuZ3JleS1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRncmV5LWl0ZW0taG92ZXItZmlsbCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgICY6YWN0aXZlOm5vdCguc2VsZWN0ZWQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgICAmLmdyZWVuLWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGdyZWVuLWl0ZW0tYWN0aXZlLWZpbGwgIWltcG9ydGFudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYuYmx1ZS1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRibHVlLWl0ZW0tYWN0aXZlLWZpbGwgIWltcG9ydGFudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgICYueWVsbG93LWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJHllbGxvdy1pdGVtLWFjdGl2ZS1maWxsICFpbXBvcnRhbnQpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAmLnJlZC1pdGVtIC5pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHN2Zy1lbGVtZW50LWNvbG9yKCRyZWQtaXRlbS1hY3RpdmUtZmlsbCAhaW1wb3J0YW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgJi5ncmV5LWl0ZW0gLmljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnLWVsZW1lbnQtY29sb3IoJGdyZXktaXRlbS1hY3RpdmUtZmlsbCAhaW1wb3J0YW50KTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAmLmdyZWVuLWl0ZW0ge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyZWVuLWl0ZW0tc3Ryb2tlO1xuICAgICAgfVxuXG4gICAgICAmLmJsdWUtaXRlbSB7XG4gICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYmx1ZS1pdGVtLXN0cm9rZTtcbiAgICAgIH1cblxuICAgICAgJi55ZWxsb3ctaXRlbSB7XG4gICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkeWVsbG93LWl0ZW0tc3Ryb2tlO1xuICAgICAgfVxuXG4gICAgICAmLnJlZC1pdGVtIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRyZWQtaXRlbS1zdHJva2U7XG4gICAgICB9XG5cbiAgICAgICYuZ3JleS1pdGVtIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRncmV5LWl0ZW0tc3Ryb2tlO1xuICAgICAgfVxuICAgfVxufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "skYX":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/health/view/card/health-messages.component.ts ***!
      \********************************************************************/

    /*! exports provided: HealthMessagesComponent */

    /***/
    function skYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthMessagesComponent", function () {
        return HealthMessagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _generated_health_message_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/health-message-type */
      "DBeh");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HealthMessagesComponent = /*#__PURE__*/function () {
        function HealthMessagesComponent() {
          _classCallCheck(this, HealthMessagesComponent);

          this.onTestNavigation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HealthMessagesComponent, [{
          key: "basicMessages",
          get: function get() {
            var _this14 = this;

            return this.messages.filter(function (m) {
              return !_this14.isCausedIssueBannerMessage(m) && !_this14.isCoreIssueBannerMessage(m);
            });
          }
        }, {
          key: "causedIssueMessages",
          get: function get() {
            var _this15 = this;

            return this.messages.filter(function (m) {
              return _this15.verifyMessage(m) && _this15.isCausedIssueBannerMessage(m) && _this15.hasTestData(m.coreIssueTest);
            }).map(function (m) {
              return m;
            });
          }
        }, {
          key: "coreIssueMessages",
          get: function get() {
            var _this16 = this;

            return this.messages.filter(function (m) {
              return _this16.verifyMessage(m) && _this16.isCoreIssueBannerMessage(m) && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(m === null || m === void 0 ? void 0 : m.causedIssuesTests) && !m.causedIssuesTests.some(function (t) {
                return !_this16.hasTestData(t);
              });
            }).map(function (m) {
              return m;
            });
          }
        }, {
          key: "verifyMessage",
          value: function verifyMessage(message) {
            return !!(message === null || message === void 0 ? void 0 : message.alertType) && !!(message === null || message === void 0 ? void 0 : message.message);
          }
        }, {
          key: "hasTestData",
          value: function hasTestData(basicTestData) {
            return !!(basicTestData === null || basicTestData === void 0 ? void 0 : basicTestData.testId) && !!(basicTestData === null || basicTestData === void 0 ? void 0 : basicTestData.testName);
          }
        }, {
          key: "getAlertType",
          value: function getAlertType(messageType) {
            switch (messageType) {
              case _generated_health_message_type__WEBPACK_IMPORTED_MODULE_1__["HealthMessageType"].INFO:
                return "info";

              case _generated_health_message_type__WEBPACK_IMPORTED_MODULE_1__["HealthMessageType"].WARNING:
                return "warning";

              default:
                return "";
            }
          }
        }, {
          key: "getActionLinks",
          value: function getActionLinks(healthMessage) {
            var _this17 = this;

            var links = [];

            if (this.isCausedIssueBannerMessage(healthMessage)) {
              var banner = healthMessage;
              var link = {
                label: banner.coreIssueTest.testName,
                action: function action() {
                  return _this17.onTestNavigation.emit(banner.coreIssueTest.testId);
                }
              };
              links.push(link);
            } else if (this.isCoreIssueBannerMessage(healthMessage)) {
              var _banner = healthMessage;

              _banner.causedIssuesTests.forEach(function (causedIssuesTest) {
                var link = {
                  label: causedIssuesTest.testName,
                  action: function action() {
                    return _this17.onTestNavigation.emit(causedIssuesTest.testId);
                  }
                };
                links.push(link);
              });
            }

            return links;
          }
        }, {
          key: "isCausedIssueBannerMessage",
          value: function isCausedIssueBannerMessage(healthMessage) {
            return healthMessage.coreIssueTest != null;
          }
        }, {
          key: "isCoreIssueBannerMessage",
          value: function isCoreIssueBannerMessage(healthMessage) {
            return healthMessage.causedIssuesTests != null;
          }
        }]);

        return HealthMessagesComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=41-es5.js.map