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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58], {
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
    "5pvJ":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/datetime-picker/time-range-picker/time-range-picker.component.ngfactory.js ***!
      \******************************************************************************************************************/

    /*! exports provided: RenderType_VsanTimeRangePickerComponent, View_VsanTimeRangePickerComponent_0, View_VsanTimeRangePickerComponent_Host_0, VsanTimeRangePickerComponentNgFactory */

    /***/
    function pvJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_VsanTimeRangePickerComponent", function () {
        return RenderType_VsanTimeRangePickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VsanTimeRangePickerComponent_0", function () {
        return View_VsanTimeRangePickerComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VsanTimeRangePickerComponent_Host_0", function () {
        return View_VsanTimeRangePickerComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanTimeRangePickerComponentNgFactory", function () {
        return VsanTimeRangePickerComponentNgFactory;
      });
      /* harmony import */


      var _time_range_picker_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./time-range-picker.scss.shim.ngstyle */
      "YA++");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../datetime-picker.component.ngfactory */
      "Ey0u");
      /* harmony import */


      var _datetime_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../datetime-picker.component */
      "WlEE");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */
      "bMPK");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _pipe_VsanDateFormatterPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../pipe/VsanDateFormatterPipe */
      "4kIe");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _time_range_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./time-range-picker.component */
      "LvZx");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../service/performance-persistence.service */
      "D0Ma");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_VsanTimeRangePickerComponent = [_time_range_picker_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_VsanTimeRangePickerComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_VsanTimeRangePickerComponent,
        data: {}
      });

      function View_VsanTimeRangePickerComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onRealtimeClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](4, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](5, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled;

          var currVal_1 = true;
          var currVal_2 = "menuitem";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).setByDeprecatedDisabled ? "" : null;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).dropdownItemId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.realtime"));

          _ck(_v, 4, 0, currVal_6);
        });
      }

      function View_VsanTimeRangePickerComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSaveRangeClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], {
          disabledDeprecated: [0, "disabledDeprecated"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](4, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](5, 1)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_6 = _co.fromDateError || _co.toDateError || _co.hourIntervalInvalid;

          _ck(_v, 3, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled;

          var currVal_1 = true;
          var currVal_2 = "menuitem";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).setByDeprecatedDisabled ? "" : null;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).dropdownItemId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.save"));

          _ck(_v, 4, 0, currVal_7);
        });
      }

      function View_VsanTimeRangePickerComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, "div", [["class", "dropdown-divider"]], null, null, null, null, null))], null, null);
      }

      function View_VsanTimeRangePickerComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 7, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](5, 0, null, null, 0, "div", [["class", "spinner spinner-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](6, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](7, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled;

          var currVal_1 = true;
          var currVal_2 = "menuitem";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).setByDeprecatedDisabled ? "" : null;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 3).dropdownItemId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 6, 0, currVal_6);
        });
      }

      function View_VsanTimeRangePickerComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 18, "div", [["class", "saved-range-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 4, "button", [["clrDropdownItem", ""]], [[8, "title", 0], [2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSelectTimeRange(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](6, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 0, null, null, 9, "a", [["clrDropdownItem", ""], ["href", "javascript://"]], [[8, "title", 0], [2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onDeleteTimeRange(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](12, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](15, 0, null, null, 1, "clr-icon", [["class", "is-error"], ["shape", "remove"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.name;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).disabled;

          var currVal_2 = true;
          var currVal_3 = "menuitem";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).disabled;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).setByDeprecatedDisabled ? "" : null;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).dropdownItemId;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _v.context.$implicit.name;

          _ck(_v, 6, 0, currVal_7);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 8, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.common.dialogOpen.title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 8, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.btn.del.tooltip")))), "");

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 11).disabled;

          var currVal_10 = true;
          var currVal_11 = "menuitem";

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 11).disabled;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 11).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 11).setByDeprecatedDisabled ? "" : null;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 11).dropdownItemId;

          _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        });
      }

      function View_VsanTimeRangePickerComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 7, "clr-signpost-content", [["clrPosition", "right-bottom"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??h"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dg"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??df"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 2, "span", [["id", "real-time-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](5, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "]))], function (_ck, _v) {
          var currVal_3 = "right-bottom";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.perf.chart.timerange.realtime.info"));

          _ck(_v, 5, 0, currVal_4);
        });
      }

      function View_VsanTimeRangePickerComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 10, "clr-signpost", [], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??h"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dg"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??df"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??df"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 2, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_VsanTimeRangePickerComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var currVal_1 = null;

          _ck(_v, 9, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_VsanTimeRangePickerComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "span", [["class", "clr-subtext"], ["id", "hour-interval-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hourIntervalError;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VsanTimeRangePickerComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 27, "div", [["class", "clr-control-container clr-form-control hour-interval-container"]], [[2, "clr-error", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 21, "div", [["class", "clr-input-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](5, 0, null, null, 17, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??bc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??b"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??bd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 0, null, null, 6, "input", [["aria-describedby", "hour-interval-error"], ["class", "clr-input hour-interval-input"], ["id", "hour-interval"], ["max", "24"], ["min", "1"], ["name", "hour-interval"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 10).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 10).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_6 = (_co.hourInterval = $event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](16, 0, null, null, 4, "clr-icon", [["class", "clr-validate-icon"], ["shape", "exclamation-circle"]], [[8, "title", 0], [1, "aria-label", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](17, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](18, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](21, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](22, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_VsanTimeRangePickerComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 6, 0);

          var currVal_9 = "hour-interval";
          var currVal_10 = _co.hourInterval;

          _ck(_v, 12, 0, currVal_9, currVal_10);

          var currVal_14 = _co.hourIntervalInvalid;

          _ck(_v, 26, 0, currVal_14);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hourIntervalInvalid;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 6).forAttr;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).ngClassPending;

          _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 16, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.common.srMessage.error")), "");

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 16, 1, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.common.srMessage.error"));

          _ck(_v, 16, 0, currVal_11, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 21, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.hours.label"));

          _ck(_v, 21, 0, currVal_13);
        });
      }

      function View_VsanTimeRangePickerComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 11, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n   ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](3, 0, null, null, 2, "span", [["class", "formatted-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](4, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](6, null, ["\n   ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 0, null, null, 2, "span", [["class", "formatted-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](9, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.saved.from.label"));

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 1), _co.currentTimeRange.from, _co.DateFormat.NO_SECONDS));

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.saved.to.label"));

          _ck(_v, 6, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 1), _co.currentTimeRange.to, _co.DateFormat.NO_SECONDS));

          _ck(_v, 9, 0, currVal_3);
        });
      }

      function View_VsanTimeRangePickerComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 3, "vsan-datetime-picker", [["id", "from-date-input"]], null, [[null, "datetimeChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("datetimeChange" === en) {
            var pd_0 = (_co.fromDate = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DatetimePickerComponent_0"], _datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DatetimePickerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 114688, null, 0, _datetime_picker_component__WEBPACK_IMPORTED_MODULE_7__["DatetimePickerComponent"], [ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_8__["DateTimeAdapter"]], {
          label: [0, "label"],
          disabled: [1, "disabled"],
          errorMessage: [2, "errorMessage"],
          datetime: [3, "datetime"]
        }, {
          datetimeChange: "datetimeChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, null, 3, "vsan-datetime-picker", [["id", "to-date-input"]], null, [[null, "datetimeChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("datetimeChange" === en) {
            var pd_0 = (_co.toDate = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DatetimePickerComponent_0"], _datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DatetimePickerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 114688, null, 0, _datetime_picker_component__WEBPACK_IMPORTED_MODULE_7__["DatetimePickerComponent"], [ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_8__["DateTimeAdapter"]], {
          label: [0, "label"],
          disabled: [1, "disabled"],
          errorMessage: [2, "errorMessage"],
          datetime: [3, "datetime"]
        }, {
          datetimeChange: "datetimeChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.custom.from")), "");

          var currVal_1 = _co.hourIntervalInvalid;
          var currVal_2 = _co.fromDateError;
          var currVal_3 = _co.fromDate;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.custom.to")), "");

          var currVal_5 = _co.hourIntervalInvalid;
          var currVal_6 = _co.toDateError;
          var currVal_7 = _co.toDate;

          _ck(_v, 8, 0, currVal_4, currVal_5, currVal_6, currVal_7);
        }, null);
      }

      function View_VsanTimeRangePickerComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm query-button"], ["id", "query-data-by-range-btn"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onRefreshBtnClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.enabled || _co.fromDateError || _co.toDateError || _co.hourIntervalInvalid;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.timerange.btn.refresh.label"));

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_VsanTimeRangePickerComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_VsanDateFormatterPipe__WEBPACK_IMPORTED_MODULE_10__["VsanDateFormatterPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](3, 0, null, null, 2, "span", [["class", "clr-control-label"], ["id", "time-range-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](4, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, null, 51, "clr-dropdown", [], [[2, "dropdown", null], [2, "open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrDropdown_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??l"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??f"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??i"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??j"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??i"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??l"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??l"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??l"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??i"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??h"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](17, 0, null, 0, 5, "button", [["class", "dropdown-toggle btn btn-sm btn-link"], ["clrDropdownToggle", ""]], [[2, "dropdown-toggle", null], [2, "dropdown-item", null], [2, "expandable", null], [2, "active", null], [1, "aria-haspopup", 0], [1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 18).onDropdownTriggerClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](18, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??l"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](19, null, ["\n      ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](20, 0, null, null, 1, "clr-icon", [["shape", "caret down"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](21, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](24, 0, null, 0, 33, "clr-dropdown-menu", [["clrPosition", "bottom-left"]], [[1, "aria-label", 0], [2, "dropdown-menu", null], [1, "role", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrDropdownMenu_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrDropdownMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](25, 9617408, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??h"]], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownMenu"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??l"]], {
          position: [0, "position"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 1, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](27, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_VsanTimeRangePickerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](32, 0, null, 0, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onRangeLastXHoursClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](35, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](36, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](37, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](39, 0, null, 0, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onRangeCustomClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??t"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](42, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??e"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??r"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](43, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](44, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_VsanTimeRangePickerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_VsanTimeRangePickerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](50, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_VsanTimeRangePickerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_VsanTimeRangePickerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](56, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_VsanTimeRangePickerComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](61, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_VsanTimeRangePickerComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_VsanTimeRangePickerComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_VsanTimeRangePickerComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](70, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_VsanTimeRangePickerComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](73, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_14 = "bottom-left";

          _ck(_v, 25, 0, currVal_14);

          var currVal_15 = _co.realtimeSupported;

          _ck(_v, 30, 0, currVal_15);

          var currVal_30 = _co.allowSaving;

          _ck(_v, 47, 0, currVal_30);

          var currVal_31 = (_co.savedTimeRanges == null ? null : _co.savedTimeRanges.length) > 0 || _co.loading;

          _ck(_v, 50, 0, currVal_31);

          var currVal_32 = _co.loading;

          _ck(_v, 53, 0, currVal_32);

          var currVal_33 = _co.savedTimeRanges;

          _ck(_v, 56, 0, currVal_33);

          var currVal_34 = _co.isRealtime();

          _ck(_v, 61, 0, currVal_34);

          var currVal_35 = _co.currentPickerState == _co.RangePickerState.LAST_X_HOURS;

          _ck(_v, 64, 0, currVal_35);

          var currVal_36 = _co.currentPickerState == _co.RangePickerState.SAVED_RANGE;

          _ck(_v, 67, 0, currVal_36);

          var currVal_37 = _co.currentPickerState == _co.RangePickerState.CUSTOM_RANGE;

          _ck(_v, 70, 0, currVal_37);

          var currVal_38 = _co.currentPickerState == _co.RangePickerState.LAST_X_HOURS || _co.currentPickerState == _co.RangePickerState.CUSTOM_RANGE;

          _ck(_v, 73, 0, currVal_38);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.timerange.label"));

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 11).toggleService.open;

          _ck(_v, 7, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 18).isRootLevelToggle;

          var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 18).isRootLevelToggle;
          var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 18).isRootLevelToggle;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 18).active;

          var currVal_7 = "menu";

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 18).active;

          _ck(_v, 17, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _co.currentOptionLabel;

          _ck(_v, 19, 0, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 24, 0, _ck(_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.timerange.srMessage.dropdownMenu.label"));

          var currVal_11 = true;
          var currVal_12 = "menu";

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 25).isOffScreen;

          _ck(_v, 24, 0, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 35).disabled;

          var currVal_17 = true;
          var currVal_18 = "menuitem";

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 35).disabled;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 35).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 35).setByDeprecatedDisabled ? "" : null;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 35).dropdownItemId;

          _ck(_v, 32, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 36, 0, _ck(_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.timerange.last"));

          _ck(_v, 36, 0, currVal_22);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 42).disabled;

          var currVal_24 = true;
          var currVal_25 = "menuitem";

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 42).disabled;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 42).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 42).setByDeprecatedDisabled ? "" : null;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 42).dropdownItemId;

          _ck(_v, 39, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 43, 0, _ck(_v, 44, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.timerange.custom"));

          _ck(_v, 43, 0, currVal_29);
        });
      }

      function View_VsanTimeRangePickerComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-time-range-picker", [], null, null, null, View_VsanTimeRangePickerComponent_0, RenderType_VsanTimeRangePickerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 245760, null, 0, _time_range_picker_component__WEBPACK_IMPORTED_MODULE_12__["VsanTimeRangePickerComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__["VsanPerfPropertyProvider"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__["ReferenceWatcher"], _service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_14__["PerformancePersistenceService"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, null);
      }

      var VsanTimeRangePickerComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-time-range-picker", _time_range_picker_component__WEBPACK_IMPORTED_MODULE_12__["VsanTimeRangePickerComponent"], View_VsanTimeRangePickerComponent_Host_0, {
        currentTimeRange: "currentTimeRange",
        clusterRef: "clusterRef",
        fromDate: "fromDate",
        toDate: "toDate",
        hourInterval: "hourInterval",
        enabled: "enabled",
        allowSaving: "allowSaving",
        realtimeSupported: "realtimeSupported",
        currentPickerState: "currentPickerState"
      }, {
        changeRange: "changeRange",
        initRange: "initRange"
      }, []);
      /***/

    },

    /***/
    "D0Ma":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/service/performance-persistence.service.ts ***!
      \************************************************************************/

    /*! exports provided: PersistedSelection, PerformancePersistenceService */

    /***/
    function D0Ma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersistedSelection", function () {
        return PersistedSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformancePersistenceService", function () {
        return PerformancePersistenceService;
      });
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");

      var PersistedSelection = /*#__PURE__*/_createClass(function PersistedSelection() {
        _classCallCheck(this, PersistedSelection);
      });
      /**
       * Persist data which is needed between multiple performance views.
       */


      var PerformancePersistenceService = /*#__PURE__*/function () {
        function PerformancePersistenceService(storageService) {
          _classCallCheck(this, PerformancePersistenceService);

          this.storageService = storageService;
          /**
           * Cached time range selection is kept for 1 hour.
           */

          this.CACHE_DURATION_IN_MS = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_0__["VsanDateTimeUtils"].HOUR_IN_MILLISECONDS;
          this.CACHE_KEY = "performance-timerange-selection";
        }

        _createClass(PerformancePersistenceService, [{
          key: "saveSelection",
          value: function saveSelection(timeRange, state) {
            var expiresIn = new Date().getTime() + this.CACHE_DURATION_IN_MS;
            var fullTimeRangeData = {
              timeRange: timeRange,
              state: state
            };
            var savedObject = {
              fullTimeRangeSelection: fullTimeRangeData,
              expiresIn: expiresIn
            };
            this.storageService.set(this.CACHE_KEY, savedObject);
          }
        }, {
          key: "getPersistedSelection",
          value: function getPersistedSelection() {
            var persistedSelection = this.storageService.get(this.CACHE_KEY);

            if (persistedSelection == null || persistedSelection.fullTimeRangeSelection == null) {
              return null;
            }

            var isCacheExpired = this.clearCacheIfExpired(persistedSelection);

            if (isCacheExpired) {
              return null;
            }

            return persistedSelection.fullTimeRangeSelection;
          }
          /**
           * Check if deleted timeRange is persisted in the browser storage, if so then it should be removed as well.
           */

        }, {
          key: "onTimeRangeDeletion",
          value: function onTimeRangeDeletion(timeRange) {
            var persistedTimeRange = this.getPersistedSelection();

            if (persistedTimeRange != null && timeRange.name === persistedTimeRange.timeRange.name) {
              this.storageService.remove(this.CACHE_KEY);
            }
          }
        }, {
          key: "clearCacheIfExpired",
          value: function clearCacheIfExpired(persistedSelection) {
            var nowTimestamp = new Date().getTime(); // If more then 1 hour has passed, then delete persisted selection

            if (persistedSelection.expiresIn < nowTimestamp) {
              this.storageService.remove(this.CACHE_KEY);
              return true;
            }

            return false;
          }
        }]);

        return PerformancePersistenceService;
      }();
      /***/

    },

    /***/
    "LvZx":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/datetime-picker/time-range-picker/time-range-picker.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: VsanTimeRangePickerComponent */

    /***/
    function LvZx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanTimeRangePickerComponent", function () {
        return VsanTimeRangePickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _pipe_VsanDateFormatterPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @pipe/VsanDateFormatterPipe */
      "4kIe");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_time_range_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/time-range-util */
      "Ik1u");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _range_picker_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./range-picker-state */
      "jmcr");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanTimeRangePickerComponent = /*#__PURE__*/function () {
        function VsanTimeRangePickerComponent(perfProvider, // private cdRef: ChangeDetectorRef,
        refWatcher, perfPersistenceService) {
          _classCallCheck(this, VsanTimeRangePickerComponent);

          this.perfProvider = perfProvider;
          this.refWatcher = refWatcher;
          this.perfPersistenceService = perfPersistenceService; // high resolution auto refresh interval

          this.HR_AUTO_REFRESH_INTERVAL_MS = 30 * 1000; // high resolution time range hour interval

          this.HR_INTERVAL_HOUR = 1;
          this.RangePickerState = _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"];
          this.savedTimeRanges = [];
          this.hourIntervalError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.last.hourInterval.error");
          this.loading = false;
          this.DateFormat = _pipe_VsanDateFormatterPipe__WEBPACK_IMPORTED_MODULE_1__["DateFormat"];
          this.enabled = true;
          this.allowSaving = true;
          this._realtimeSupported = false;
          /**
           * Triggered as a result of time change because of user interaction
           */

          this.changeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          /**
           * Triggered as a result of time change because of automated process, i.e. set default value during initialization
           * of component
           */

          this.initRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        }

        _createClass(VsanTimeRangePickerComponent, [{
          key: "currentTimeRange",
          get: function get() {
            return this._currentTimeRange;
          },
          set: function set(value) {
            this._currentTimeRange = value;

            if (this._currentPickerState) {
              this._setTimerange(this._currentTimeRange);
            }
          }
        }, {
          key: "clusterRef",
          get: function get() {
            return this._clusterRef;
          },
          set: function set(value) {
            this._clusterRef = value;

            if (value) {
              this.fetch();
            }
          }
        }, {
          key: "fromDate",
          get: function get() {
            return this._fromDate;
          },
          set: function set(val) {
            this._fromDate = val;
            this.validate();
          }
        }, {
          key: "toDate",
          get: function get() {
            return this._toDate;
          },
          set: function set(val) {
            this._toDate = val;
            this.validate();
          }
        }, {
          key: "hourInterval",
          get: function get() {
            return this._hourInterval;
          },
          set: function set(value) {
            this._hourInterval = value;
            this.validate();
          }
        }, {
          key: "realtimeSupported",
          get: function get() {
            return this._realtimeSupported;
          },
          set: function set(val) {
            // change the picker state when user chooses top contributors or per vm charts
            // because in the 2 views we don't support realtime, but before user can select them the view supports realtime
            if (this.realtimeSupported && this.isRealtime() && !val) {
              this.currentPickerState = _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS;
            }

            this._realtimeSupported = val;
          }
        }, {
          key: "currentPickerState",
          get: function get() {
            return this._currentPickerState;
          },
          set: function set(value) {
            var _this = this;

            var noStateChange = this._currentPickerState === value;

            if (noStateChange || this.isUnsupportedState(value)) {
              return;
            }

            var isLeavingRealtime = this.isRealtime();

            if (isLeavingRealtime) {
              this.refWatcher.clearIntervals();
            }

            this._setCurrentPickerState(value);

            if (this.isRealtime()) {
              this.refWatcher.setInterval(function () {
                return _this.extendCurrentTimeRange();
              }, this.HR_AUTO_REFRESH_INTERVAL_MS);
              this._currentTimeRange = this.createTimeRange(this.createDefaultStartTime());
            }

            if (this.currentTimeRange) {
              this._setTimerange(this._currentTimeRange);

              this.changeRange.emit(this.currentTimeRange);
              this.validate();
            }
          }
          /*
          * Set persisted time range
          * */

        }, {
          key: "setTimerange",
          value: function setTimerange(timerange, state) {
            if (state === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].REAL_TIME && this.isUnsupportedState(state)) {
              // If there is a persisted time range for REAL_TIME,
              // but the current view doesn't support it, then use default time range.
              this.initDefaultPicker();
              return;
            }

            this._setTimerange(timerange);

            this._setCurrentPickerState(state);

            this.initRange.emit(this.currentTimeRange);
          }
        }, {
          key: "_setTimerange",
          value: function _setTimerange(timerange) {
            this._currentTimeRange = timerange;
            this.fromDate = new Date(this.currentTimeRange.from);
            this.toDate = new Date(this.currentTimeRange.to);

            if (this.currentPickerState === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS) {
              // Get difference between 'from' and 'to' date in hours
              this.hourInterval = (timerange.to - timerange.from) / _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__["VsanDateTimeUtils"].HOUR_IN_MILLISECONDS;
            }
          }
        }, {
          key: "_setCurrentPickerState",
          value: function _setCurrentPickerState(state) {
            if (this.isUnsupportedState(state)) {
              return;
            }

            this._currentPickerState = state;

            switch (state) {
              case _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].REAL_TIME:
                this.currentOptionLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.realtime");
                return;

              case _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS:
                this.currentOptionLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.last");
                break;

              case _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].CUSTOM_RANGE:
                this.currentOptionLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.custom");
                break;

              case _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].SAVED_RANGE:
                this.currentOptionLabel = this.currentTimeRange.name;
                break;

              default:
                _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].error("Unknown RangePickerState: " + state);

            }
          }
        }, {
          key: "isUnsupportedState",
          value: function isUnsupportedState(state) {
            return !this.realtimeSupported && state === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].REAL_TIME;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.currentTimeRange) {
              this._setTimerange(this._currentTimeRange);

              return;
            }

            this.initDefaultPicker();
          }
        }, {
          key: "initDefaultPicker",
          value: function initDefaultPicker() {
            if (!this.hourInterval) {
              this.hourInterval = 1;
            }

            if (!this.currentPickerState || this.isUnsupportedState(this.currentPickerState)) {
              this.currentPickerState = this.realtimeSupported ? _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].REAL_TIME : _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS;
            }

            this.fromDate = this.createDefaultStartTime();
            this.toDate = VsanTimeRangePickerComponent.createDefaultEndTime();

            if (!this.currentTimeRange) {
              this.setDefaultTimeRange();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.refWatcher.clearIntervals();
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this2 = this;

            this.loading = true;
            this.perfProvider.getSavedTimeRanges(this.clusterRef).then(function (result) {
              _this2.loading = false;
              _this2.savedTimeRanges = result;
            }, function (error) {
              _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].error("Cannot load saved time ranges: ", error);

              _this2.loading = false;
            });
          }
        }, {
          key: "isRealtime",
          value: function isRealtime() {
            return this.currentPickerState === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].REAL_TIME;
          }
        }, {
          key: "setDefaultTimeRange",
          value: function setDefaultTimeRange() {
            var defaultSelectedTimeStart = this.createDefaultStartTime();
            this.currentTimeRange = this.createTimeRange(defaultSelectedTimeStart);
            this.initRange.emit(this.currentTimeRange);
          }
        }, {
          key: "createDefaultStartTime",
          value: function createDefaultStartTime() {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__["VsanDateTimeUtils"].createNoSecondsDate(this.getHourInterval());
          }
        }, {
          key: "createTimeRange",
          value: function createTimeRange(startTime, endTime) {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__["VsanDateTimeUtils"].createTimeRange(this.currentPickerState, this.getHourInterval(), startTime, endTime);
          }
        }, {
          key: "getHourInterval",
          value: function getHourInterval() {
            return this.isRealtime() ? this.HR_INTERVAL_HOUR : this.hourInterval;
          }
          /**
           * Move the current time range to 30s later. Used for high-resolution charts
           */

        }, {
          key: "extendCurrentTimeRange",
          value: function extendCurrentTimeRange() {
            var range = this.currentTimeRange;

            if (!range) {
              return;
            }

            this.currentTimeRange = this.createTimeRange(new Date(range.from + this.HR_AUTO_REFRESH_INTERVAL_MS), new Date(range.to + this.HR_AUTO_REFRESH_INTERVAL_MS));
            this.changeRange.emit(this.currentTimeRange);
          }
        }, {
          key: "updateCurrentTimeRange",
          value: function updateCurrentTimeRange() {
            if (this.currentPickerState === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].CUSTOM_RANGE) {
              var startTime = new Date(this.fromDate);
              var endTime = new Date(this.toDate);
              this.currentTimeRange = this.createTimeRange(startTime, endTime);
            } else if (this.currentPickerState === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS) {
              /*
                 Have to reset the default because the time range is not correct
                 if user clicks the query button 30 minutes later after the page opened.
              */
              var defaultSelectedTimeStart = this.createDefaultStartTime();
              this.currentTimeRange = this.createTimeRange(defaultSelectedTimeStart);
            }
          }
        }, {
          key: "onRealtimeClick",
          value: function onRealtimeClick() {
            this.currentPickerState = _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].REAL_TIME;
          }
        }, {
          key: "onRangeLastXHoursClick",
          value: function onRangeLastXHoursClick() {
            this.currentPickerState = _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS;
          }
        }, {
          key: "onSelectTimeRange",
          value: function onSelectTimeRange(range) {
            this.currentTimeRange = range;

            this._setCurrentPickerState(_range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].SAVED_RANGE);

            this.changeRange.emit(range);
          }
        }, {
          key: "onRefreshBtnClick",
          value: function onRefreshBtnClick() {
            this.updateCurrentTimeRange();
            this.changeRange.emit(this.currentTimeRange);
          }
        }, {
          key: "onRangeCustomClick",
          value: function onRangeCustomClick() {
            this.currentPickerState = _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].CUSTOM_RANGE;
          }
        }, {
          key: "onDeleteTimeRange",
          value: function onDeleteTimeRange(range) {
            var _this3 = this;

            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_3__["ModalBuilder"]("datePicker/deleteTimeRange").setSize(500, 220).open({
              clusterRef: this.clusterRef,
              range: range
            }).then(function (timeRange) {
              var timeRangeIndex = _this3.savedTimeRanges.findIndex(function (savedTimeRange) {
                return _util_time_range_util__WEBPACK_IMPORTED_MODULE_4__["TimeRangeUtil"].areEqual(timeRange, savedTimeRange);
              });

              _this3.savedTimeRanges.splice(timeRangeIndex, 1);

              _this3.perfPersistenceService.onTimeRangeDeletion(timeRange);

              if (_this3.currentPickerState !== _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].SAVED_RANGE || !_util_time_range_util__WEBPACK_IMPORTED_MODULE_4__["TimeRangeUtil"].areEqual(_this3.currentTimeRange, timeRange)) {
                return;
              }

              if (_this3.savedTimeRanges.length === 0) {
                // Choose LAST when there is no custom time range.
                _this3.onRangeLastXHoursClick();
              } else {
                if (timeRangeIndex === _this3.savedTimeRanges.length) {
                  // The deleted time range is the last one, then choose the first one.
                  timeRangeIndex = 0;
                }

                _this3.onSelectTimeRange(_this3.savedTimeRanges[timeRangeIndex]);
              }
            });
          }
        }, {
          key: "onSaveRangeClick",
          value: function onSaveRangeClick() {
            var _this4 = this;

            this.updateCurrentTimeRange();
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_3__["ModalBuilder"]("datePicker/addTimeRange").setSize(500, 280).open({
              clusterRef: this.clusterRef,
              from: this.currentTimeRange.from,
              to: this.currentTimeRange.to
            }).then(function (range) {
              _this4.savedTimeRanges.push(range);

              _this4.onSelectTimeRange(range);
            });
          }
        }, {
          key: "validate",
          value: function validate() {
            this.fromDateError = "";
            this.toDateError = "";
            this.hourIntervalInvalid = false;

            if (this.currentPickerState === _range_picker_state__WEBPACK_IMPORTED_MODULE_7__["RangePickerState"].LAST_X_HOURS) {
              if (this._hourInterval <= 0 || this._hourInterval > 24 || _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isDecimal(this._hourInterval)) {
                this.hourIntervalInvalid = true;
                this.hourIntervalError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isDecimal(this._hourInterval) ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.last.hourInterval.decimal.error") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.last.hourInterval.error");
                return;
              } else {
                this.hourIntervalInvalid = false;
              }
            } else {
              if (!this.fromDate) {
                this.fromDateError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.custom.startTime.empty.error");
                return;
              }

              if (!this.toDate) {
                this.toDateError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.custom.endTime.empty.error");
                return;
              }

              var currentTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__["VsanDateTimeUtils"].createNoSecondsDate().getTime();

              var startTime = this.fromDate.getTime();
              var endTime = this.toDate.getTime();

              if (endTime - currentTime > 0) {
                // The end time can not be greater than the current time.
                this.toDateError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.custom.endTime.error");
              } else if (endTime - startTime <= 0) {
                // The end time should be greater than the start time.
                this.fromDateError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.custom.startTime.error");
              } else if ((endTime - startTime) / _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__["VsanDateTimeUtils"].HOUR_IN_MILLISECONDS > 24) {
                this.fromDateError = this.toDateError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.perf.chart.timerange.last.hourInterval.error");
              }
            }
          }
        }], [{
          key: "createDefaultEndTime",
          value: function createDefaultEndTime() {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_5__["VsanDateTimeUtils"].createNoSecondsDate();
          }
        }]);

        return VsanTimeRangePickerComponent;
      }();
      /***/

    },

    /***/
    "YA++":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/datetime-picker/time-range-picker/time-range-picker.scss.shim.ngstyle.js ***!
      \****************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function YA(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  min-height: 2.4rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\nclr-dropdown[_ngcontent-%COMP%] {\n  height: 1.2rem;\n}\nclr-dropdown[_ngcontent-%COMP%]   clr-dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 0.6rem;\n}\nclr-dropdown[_ngcontent-%COMP%]   clr-dropdown-menu[_ngcontent-%COMP%]   .saved-range-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nclr-dropdown[_ngcontent-%COMP%]   clr-dropdown-menu[_ngcontent-%COMP%]   .saved-range-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 0.6rem;\n  width: auto;\n}\n.query-button[_ngcontent-%COMP%] {\n  margin: 0rem;\n}\n.formatted-date[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.hour-interval-container[_ngcontent-%COMP%]   .hour-interval-input[_ngcontent-%COMP%] {\n  width: 3.6rem;\n}\nspan[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2RhdGV0aW1lLXBpY2tlci90aW1lLXJhbmdlLXBpY2tlci90aW1lLXJhbmdlLXBpY2tlci5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTE9BO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFSYTtBQWlCaEI7QUU0Q0c7RUFDSywrQkFBQTtBRjFDUjtBRTRDRztFQUlHLCtCQUFBO0FGN0NOO0FFOENNO0VBQ0csK0JBQUE7QUY1Q1Q7QUUrQ0c7RUFFRywrQkFBQTtBRjlDTjtBRWdETTtFQUNHLCtCQUFBO0FGOUNUO0FFaURHO0VBQ0csNkJBQUE7QUYvQ047QUF2QkE7RUFDRyxjR0RPO0FIMkJWO0FBeEJNO0VBQ0csaUJBQUE7QUEwQlQ7QUF4Qk07RUFDRyxhQUFBO0VBQ0EsOEJBQUE7QUEwQlQ7QUF6QlM7RUFDRyxpQkFBQTtFQUNBLFdBQUE7QUEyQlo7QUFyQkE7RUFDRyxZQUFBO0FBd0JIO0FBckJBO0VBQ0csa0JBQUE7QUF3Qkg7QUFwQkc7RUFDRyxhQXJDc0I7QUE0RDVCO0FBbkJBOztFQUVHLG1CQUFBO0FBc0JIIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2RhdGV0aW1lLXBpY2tlci90aW1lLXJhbmdlLXBpY2tlci90aW1lLXJhbmdlLXBpY2tlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTctMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJHBpY2tlci1oZWlnaHQ6IDIuNHJlbTsgLy8gdXNlIGEgYmlnIGhlaWdodCB0byByZXNlcnZlIHRoZSBzcGFjZSB0byBhdm9pZCBlcnJvciBiYW5uZXIgcHVzaGluZyBjb250ZW50IGRvd25cbiRyYW5nZS1kcm9wZG93bi1oZWlnaHQ6ICR2c2FuLWxpbmUtaGVpZ2h0LW1kO1xuJGhvdXItaW50ZXJ2YWwtaW5wdXQtd2lkdGg6IDMuNnJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgLy8gTWluaW11bSBoZWlnaHQgdG8gcmVzZXJ2ZSBvbmUgbGluZSBzcGFjZSBmb3IgaW5wdXQgZmlsZWQgZXJyb3IgbWVzc2FnZS5cbiAgIG1pbi1oZWlnaHQ6ICRwaWNrZXItaGVpZ2h0O1xuICAgQGluY2x1ZGUgc2libGluZy1yaWdodC1zcGFjaW5nO1xufVxuXG5jbHItZHJvcGRvd24ge1xuICAgaGVpZ2h0OiAkcmFuZ2UtZHJvcGRvd24taGVpZ2h0O1xuICAgY2xyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgIHBhZGRpbmc6IDAgJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xuICAgICAgfVxuICAgICAgLnNhdmVkLXJhbmdlLWNvbnRhaW5lciB7XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxufVxuXG4ucXVlcnktYnV0dG9uIHtcbiAgIG1hcmdpbjogMHJlbTtcbn1cblxuLmZvcm1hdHRlZC1kYXRlIHtcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmhvdXItaW50ZXJ2YWwtY29udGFpbmVyIHtcbiAgIC5ob3VyLWludGVydmFsLWlucHV0IHtcbiAgICAgIHdpZHRoOiAkaG91ci1pbnRlcnZhbC1pbnB1dC13aWR0aDtcbiAgIH1cbn1cblxuc3BhbixcbmxhYmVsIHtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
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
          var _this5;

          _classCallCheck(this, ExternalLinkDirective);

          _this5 = _super.call(this, clrButton);
          _this5.el = el;
          _this5.resolver = resolver;
          _this5.renderer = renderer;
          _this5.navigationService = navigationService;
          _this5.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
          _this5.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
          _this5.CONTAINER_CLASS = "icon-name-container";
          _this5.NAVIGATION_EVENT_TYPE = "click";
          _this5.LEAD_TO_NOWHERE_URL = "javascript://";
          _this5.HTML_ELEMENT_SPAN_NAME = "span";
          _this5.HTML_ELEMENT_ICON_NAME = "clr-icon";
          _this5.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
          _this5.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
          _this5.ICON_SHAPE_ATTR_NAME = "shape";
          _this5.ICON_SHAPE_ATTR_VALUE = "pop-out";
          _this5.ICON_SIZE_ATTR_NAME = "size";
          _this5.ICON_SIZE_ATTR_VALUE = "16";
          _this5.ICON_CLASS_ATTR_NAME = "class";
          _this5.ICON_CLASS_ATTR_VALUE = "link";
          _this5.ICON_TITLE_ATTR_NAME = "title";
          _this5.KB_URL = "http://kb.vmware.com/kb/";
          return _this5;
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
            var _this6 = this;

            element.addEventListener(this.NAVIGATION_EVENT_TYPE, function () {
              if (_this6.helpId) {
                _this6.navigationService.askVMware(_this6.helpId);

                return;
              }

              if (_this6.articleId) {
                _this6.navigationService.navigateToAddress("".concat(_this6.KB_URL).concat(_this6.articleId));

                return;
              }

              if (_this6.url) {
                _this6.navigationService.navigateToAddress(_this6.url);
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

    }
  }]);
})();
//# sourceMappingURL=58-es5.js.map