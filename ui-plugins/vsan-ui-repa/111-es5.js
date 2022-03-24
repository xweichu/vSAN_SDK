(function () {
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111], {
    /***/
    "+94D":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/performance-diagnostics.module.ts ***!
      \********************************************************************************/

    /*! exports provided: PerformanceDiagnosticsModule */

    /***/
    function D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceDiagnosticsModule", function () {
        return PerformanceDiagnosticsModule;
      });
      /* harmony import */


      var _view_performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view/performance-diagnostics.component */
      "3s6Q");

      var performanceDiagnosticsRoutes = [{
        path: "",
        component: _view_performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_0__["PerformanceDiagnosticsComponent"]
      }];

      var PerformanceDiagnosticsModule = /*#__PURE__*/_createClass(function PerformanceDiagnosticsModule() {
        _classCallCheck(this, PerformanceDiagnosticsModule);
      });
      /***/

    },

    /***/
    "1sVb":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/performance-diagnostics-feedback.scss.shim.ngstyle.js ***!
      \*********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function sVb(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".btn-icon[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#thumbs-up[_ngcontent-%COMP%], #thumbs-down[_ngcontent-%COMP%] {\n  cursor: pointer;\n  fill: var(--vsan-link-color);\n}\n#thumbs-up[_ngcontent-%COMP%]:hover, #thumbs-down[_ngcontent-%COMP%]:hover {\n  fill: var(--vsan-link-color-hover);\n}\n.alert-text[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.alert-text[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.alert-text[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.alert-text[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.alert-text[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.alert-text[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS1kaWFnbm9zdGljcy92aWV3L3BlcmZvcm1hbmNlLWRpYWdub3N0aWNzLWZlZWRiYWNrLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxVQUFBO0FBY0g7QUFYQTtFQUNHLGVBQUE7RUFDQSw0Qkd3RGU7QUgxQ2xCO0FBYkc7RUFDRyxrQ0d3RGtCO0FIekN4QjtBRXNDRztFQUNLLCtCQUFBO0FGbkNSO0FFcUNHO0VBSUcsK0JBQUE7QUZ0Q047QUV1Q007RUFDRywrQkFBQTtBRnJDVDtBRXdDRztFQUVHLCtCQUFBO0FGdkNOO0FFeUNNO0VBQ0csK0JBQUE7QUZ2Q1Q7QUUwQ0c7RUFDRyw2QkFBQTtBRnhDTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcGVyZm9ybWFuY2UtZGlhZ25vc3RpY3Mvdmlldy9wZXJmb3JtYW5jZS1kaWFnbm9zdGljcy1mZWVkYmFjay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTgtMjAyMCBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuLmJ0bi1pY29ue1xuICAgcGFkZGluZzogMDtcbn1cblxuI3RodW1icy11cCwgI3RodW1icy1kb3duIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGZpbGw6ICR2c2FuLWxpbmstY29sb3I7XG4gICAmOmhvdmVyIHtcbiAgICAgIGZpbGw6ICR2c2FuLWhvdmVyLWxpbmstY29sb3I7XG4gICB9XG59XG5cbi5hbGVydC10ZXh0IHtcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZztcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "2Que":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/performance-diagnostics.component.ngfactory.js ***!
      \**************************************************************************************************/

    /*! exports provided: RenderType_PerformanceDiagnosticsComponent, View_PerformanceDiagnosticsComponent_0, View_PerformanceDiagnosticsComponent_Host_0, PerformanceDiagnosticsComponentNgFactory */

    /***/
    function Que(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerformanceDiagnosticsComponent", function () {
        return RenderType_PerformanceDiagnosticsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerformanceDiagnosticsComponent_0", function () {
        return View_PerformanceDiagnosticsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerformanceDiagnosticsComponent_Host_0", function () {
        return View_PerformanceDiagnosticsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceDiagnosticsComponentNgFactory", function () {
        return PerformanceDiagnosticsComponentNgFactory;
      });
      /* harmony import */


      var _performance_diagnostics_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./performance-diagnostics.scss.shim.ngstyle */
      "DKEA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/component/unavailable-view/unavailable-view.component.ngfactory */
      "Kfm7");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/component/unavailable-view/unavailable-view.component */
      "hlBw");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../generated/hci-quickstart-status-service */
      "KbWe");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/directive/external-link/external-link.directive */
      "tsUx");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_time_range_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/component/datetime-picker/time-range-picker/time-range-picker.component.ngfactory */
      "5pvJ");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_time_range_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../common/component/datetime-picker/time-range-picker/time-range-picker.component */
      "LvZx");
      /* harmony import */


      var _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../common/service/performance-persistence.service */
      "D0Ma");
      /* harmony import */


      var _issues_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./issues-list.component.ngfactory */
      "MziP");
      /* harmony import */


      var _issues_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./issues-list.component */
      "rQ8Y");
      /* harmony import */


      var _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../common/component/chart/performance/perf-charts-container.component.ngfactory */
      "b7pI");
      /* harmony import */


      var _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../common/component/chart/performance/perf-charts-container.component */
      "RSFA");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _performance_diagnostics_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./performance-diagnostics-feedback.component.ngfactory */
      "Xi+H");
      /* harmony import */


      var _performance_diagnostics_feedback_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./performance-diagnostics-feedback.component */
      "as9e");
      /* harmony import */


      var _generated_performance_diagnostics_property_provider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../generated/performance-diagnostics-property-provider */
      "Iue0");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../common/directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./performance-diagnostics.component */
      "3s6Q");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _generated_ceip_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../../generated/ceip-service */
      "eoXN");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../../generated/vsan-capability-provider */
      "y/yc");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerformanceDiagnosticsComponent = [_performance_diagnostics_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerformanceDiagnosticsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerformanceDiagnosticsComponent,
        data: {}
      });

      function View_PerformanceDiagnosticsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "busy-backdrop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null);
      }

      function View_PerformanceDiagnosticsComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "configuration-falied-message"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowReload: [1, "allowReload"],
          allowClose: [2, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.configurationFailedMessage;
          var currVal_1 = false;
          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_8__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__["VsanPerfPropertyProvider"]], {
          unavailableViewSpec: [0, "unavailableViewSpec"],
          hasEditPrivilege: [1, "hasEditPrivilege"],
          clusterRef: [2, "clusterRef"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.disabledService;
          var currVal_1 = _co.hasEditPrivilege && _co.hasReadPolicyPrivilege;
          var currVal_2 = _co.clusterRef;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "validation-message"]], null, [[null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onClosed" === en) {
            var pd_0 = (_co.alertMessage = null) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowReload: [1, "allowReload"]
        }, {
          onClosed: "onClosed"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "no-permissions"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getString("vsan.perf.diagnosticts.nopermissions");

          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["id", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["id", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "a", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4210688, null, 0, _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_10__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], [8, null]], {
          anchorText: [0, "anchorText"],
          articleId: [1, "articleId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.cluster.monitor.performance.diagnostics.link"));

          var currVal_2 = _co.KnowledgeBaseId.PERFORMANCE_DIAGNOSTICS;

          _ck(_v, 7, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.cluster.monitor.performance.diagnostics.description"));

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_PerformanceDiagnosticsComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "button", [["clrDropdownItem", ""]], [[8, "title", 0], [2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onGoalChanged(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[3, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵr"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n                  ", "\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.title;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled;

          var currVal_2 = true;
          var currVal_3 = "menuitem";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).setByDeprecatedDisabled ? "" : null;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdownItemId;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _v.context.$implicit.title;

          _ck(_v, 6, 0, currVal_7);
        });
      }

      function View_PerformanceDiagnosticsComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "div", [["class", "filters-container"], ["id", "filters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["for", "goal"], ["id", "label-goal"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 26, "clr-dropdown", [["class", "range-dropdown"], ["id", "goal"]], [[2, "dropdown", null], [2, "open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDropdown_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵr"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵl"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵe"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵf"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵe"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdown"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdown"]], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵe"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵi"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵj"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵi"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵl"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵl"], [_clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵl"]], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵi"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 6, "button", [["class", "dropdown-toggle btn btn-sm btn-link"], ["clrDropdownToggle", ""]], [[2, "dropdown-toggle", null], [2, "dropdown-item", null], [2, "expandable", null], [2, "active", null], [1, "aria-haspopup", 0], [1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onDropdownTriggerClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdownTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵl"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["\n            ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "clr-icon", [["shape", "caret down"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_13__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 7, "clr-dropdown-menu", [["clrPosition", "bottom-left"]], [[1, "aria-label", 0], [2, "dropdown-menu", null], [1, "role", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ClrDropdownMenu_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ClrDropdownMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 9617408, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdownMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵh"]], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrDropdownMenu"]], _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ɵl"]], {
          position: [0, "position"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](28, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PerformanceDiagnosticsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "vsan-time-range-picker", [["aria-labelledby", "time-range-label"], ["id", "time-range-picker"], ["role", "group"]], null, [[null, "changeRange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("changeRange" === en) {
            var pd_0 = _co.requestDiagnosticsData($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_datetime_picker_time_range_picker_time_range_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_VsanTimeRangePickerComponent_0"], _common_component_datetime_picker_time_range_picker_time_range_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_VsanTimeRangePickerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 245760, [[1, 4], [2, 4]], 0, _common_component_datetime_picker_time_range_picker_time_range_picker_component__WEBPACK_IMPORTED_MODULE_17__["VsanTimeRangePickerComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__["VsanPerfPropertyProvider"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_18__["PerformancePersistenceService"]], {
          clusterRef: [0, "clusterRef"],
          enabled: [1, "enabled"]
        }, {
          changeRange: "changeRange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "goal";

          _ck(_v, 3, 0, currVal_1);

          var currVal_16 = "bottom-left";

          _ck(_v, 26, 0, currVal_16);

          var currVal_17 = _co.goals;

          _ck(_v, 31, 0, currVal_17);

          var currVal_18 = _co.clusterRef;
          var currVal_19 = !_co.loadingIssues;

          _ck(_v, 37, 0, currVal_18, currVal_19);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.perf.diagnostics.perspectiveLabel"));

          _ck(_v, 4, 0, currVal_2);

          var currVal_3 = true;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).toggleService.open;

          _ck(_v, 7, 0, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).isRootLevelToggle;

          var currVal_6 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).isRootLevelToggle;
          var currVal_7 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).isRootLevelToggle;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).active;

          var currVal_9 = "menu";

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).active;

          _ck(_v, 17, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.goal.title;

          _ck(_v, 19, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 25, 0, _ck(_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.perf.diagnostics.perspectiveLabel.srMessage.dropdownMenu.label"));

          var currVal_13 = true;
          var currVal_14 = "menu";

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isOffScreen;

          _ck(_v, 25, 0, currVal_12, currVal_13, currVal_14, currVal_15);
        });
      }

      function View_PerformanceDiagnosticsComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_8__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__["VsanPerfPropertyProvider"]], {
          unavailableViewSpec: [0, "unavailableViewSpec"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.noDataView;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["id", "summary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0], [8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_13__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.perf.diagnostics.summaryLabel"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.statusIconShape;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.statusIconClass, " is-solid");

          _ck(_v, 6, 0, currVal_1, currVal_2);

          var currVal_3 = _co.statusText;

          _ck(_v, 11, 0, currVal_3);
        });
      }

      function View_PerformanceDiagnosticsComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-issues-list", [["id", "issuesList"]], null, [[null, "selectIssue"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectIssue" === en) {
            var pd_0 = _co.onIssueSelected($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _issues_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_IssuesListComponent_0"], _issues_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_IssuesListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _issues_list_component__WEBPACK_IMPORTED_MODULE_20__["IssuesListComponent"], [], {
          data: [0, "data"],
          loading: [1, "loading"]
        }, {
          selectIssue: "selectIssue"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.issues;
          var currVal_1 = _co.loadingIssues;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "bold-no-selection"], ["id", "selection-warning-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.perf.diagnostic.noEntitySelectedLabel"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PerformanceDiagnosticsComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.selectedIssue || _co.isParentIssueSelected;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["alertType", "info"], ["id", "recommendation"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "info";

          var currVal_1 = _co.getSelectedIssueRecommendation();

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "vsan-perf-charts-container", [], [[8, "id", 0]], [[null, "clickShowAllLink"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clickShowAllLink" === en) {
            var pd_0 = _co.onShowAllMetricsLinkClicked(_v.context.$implicit.issue) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_22__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_23__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          isShowAllLinkVisible: [2, "isShowAllLinkVisible"],
          isEmptyChartsVisible: [3, "isEmptyChartsVisible"],
          data: [4, "data"]
        }, {
          clickShowAllLink: "clickShowAllLink"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _v.context.$implicit.issue == null ? null : _v.context.$implicit.issue.name;
          var currVal_2 = _v.context.$implicit.issue == null ? null : _v.context.$implicit.issue.description;

          var currVal_3 = _co.isShowAllLinkVisible(_v.context.$implicit);

          var currVal_4 = !_co.alertMessage;

          var currVal_5 = _ck(_v, 3, 0, _v.context.$implicit.data);

          _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "charts-container-", _v.context.index, "");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerformanceDiagnosticsComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-performance-diagnostics-feedback", [], null, [[null, "feedbackSubmit"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("feedbackSubmit" === en) {
            var pd_0 = _co.onFeedbackSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _performance_diagnostics_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_PerformanceDiagnosticsFeedbackComponent_0"], _performance_diagnostics_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_PerformanceDiagnosticsFeedbackComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _performance_diagnostics_feedback_component__WEBPACK_IMPORTED_MODULE_25__["PerformanceDiagnosticsFeedbackComponent"], [_generated_performance_diagnostics_property_provider__WEBPACK_IMPORTED_MODULE_26__["PerformanceDiagnosticsPropertyProvider"]], {
          selectedIssue: [0, "selectedIssue"],
          clusterRef: [1, "clusterRef"],
          transactionId: [2, "transactionId"]
        }, {
          feedbackSubmit: "feedbackSubmit"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.selectedIssue;
          var currVal_1 = _co.clusterRef;
          var currVal_2 = _co.transactionId;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["id", "parent-issue-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["id", "parent-issue-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.isRecommendationShown;

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = _co.chartsData;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.isPerfDiagnosticsFeedbackSupported;

          _ck(_v, 15, 0, currVal_4);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.parentIssueTitle;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.parentIssueDescription;

          _ck(_v, 6, 0, currVal_1);
        });
      }

      function View_PerformanceDiagnosticsComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "div", [["class", "details-container"], ["id", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.statusText && !_co.loadingIssues;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.hasDiagnosticsPermissions;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.issues && _co.issues.length && !_co.loadingIssues;

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = _co.selectedIssue && !_co.isParentIssueSelected;

          _ck(_v, 14, 0, currVal_3);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.hasDiagnosticsPermissions;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = !_co.noDataView;

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = _co.hasDiagnosticsPermissions;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.noDataView;

          _ck(_v, 15, 0, currVal_4);

          var currVal_5 = !_co.noDataView;

          _ck(_v, 18, 0, currVal_5);
        }, null);
      }

      function View_PerformanceDiagnosticsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_27__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          timeRangePicker: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
          timeRangePickerComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "h5", [["vsan-auto-focus", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_28__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_16__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "";

          _ck(_v, 6, 0, currVal_0);

          var currVal_2 = _co.loading;

          _ck(_v, 12, 0, currVal_2);

          var currVal_3 = _co.configurationFailedMessage;

          _ck(_v, 15, 0, currVal_3);

          var currVal_4 = !_co.loading && !_co.disabledService.allRequiredServicesAreEnabled;

          _ck(_v, 18, 0, currVal_4);

          var currVal_5 = !_co.loading && _co.isPerfEnabled && _co.isCeipEnabled;

          _ck(_v, 21, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.monitor.performance.diagnostics.title"));

          _ck(_v, 7, 0, currVal_1);
        });
      }

      function View_PerformanceDiagnosticsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-performance-diagnostics", [], null, null, null, View_PerformanceDiagnosticsComponent_0, RenderType_PerformanceDiagnosticsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_29__["PerformanceDiagnosticsComponent"], [_generated_performance_diagnostics_property_provider__WEBPACK_IMPORTED_MODULE_26__["PerformanceDiagnosticsPropertyProvider"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__["VsanPerfPropertyProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_30__["PermissionService"], _generated_ceip_service__WEBPACK_IMPORTED_MODULE_31__["CeipService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_32__["VsanCapabilityProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_18__["PerformancePersistenceService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PerformanceDiagnosticsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-performance-diagnostics", _performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_29__["PerformanceDiagnosticsComponent"], View_PerformanceDiagnosticsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "3s6Q":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/performance-diagnostics.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PerformanceDiagnosticsComponent */

    /***/
    function s6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceDiagnosticsComponent", function () {
        return PerformanceDiagnosticsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/performance/graph-metrics.data */
      "H1HU");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _component_datetime_picker_time_range_picker_range_picker_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/datetime-picker/time-range-picker/range-picker-state */
      "jmcr");
      /* harmony import */


      var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @component/unavailable-view/unavailable-view-spec */
      "Hg5h");
      /* harmony import */


      var _generated_perf_diagnostic_query_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/perf-diagnostic-query-spec */
      "CCTH");
      /* harmony import */


      var _generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/perf-diagnostic-type */
      "mLcX");
      /* harmony import */


      var _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/performance-object-type */
      "x6/S");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @navigation/model/knowledge-base-id */
      "9lKY");
      /* harmony import */


      var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../performance/model/perf-monitor-view-type.model */
      "NvCx");
      /* harmony import */


      var _model_aggregated_entity_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../model/aggregated-entity.data */
      "P8Sg");
      /* harmony import */


      var _model_diagnostics_issue_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../model/diagnostics-issue.data */
      "YceR");
      /* harmony import */


      var _model_single_issue_entity_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../model/single-issue-entity.data */
      "YOj4");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PerformanceDiagnosticsComponent = /*@__PURE__*/function () {
        var PerformanceDiagnosticsComponent = /*#__PURE__*/function () {
          function PerformanceDiagnosticsComponent(perfDiagnosticsProvider, perfProvider, permissionService, ceipService, capabilityProvider, taskSvc, navigationService, changeDetector, perfPersistenceService) {
            var _this = this;

            _classCallCheck(this, PerformanceDiagnosticsComponent);

            this.perfDiagnosticsProvider = perfDiagnosticsProvider;
            this.perfProvider = perfProvider;
            this.permissionService = permissionService;
            this.ceipService = ceipService;
            this.capabilityProvider = capabilityProvider;
            this.taskSvc = taskSvc;
            this.navigationService = navigationService;
            this.changeDetector = changeDetector;
            this.perfPersistenceService = perfPersistenceService;
            this.KnowledgeBaseId = _navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_10__["KnowledgeBaseId"];
            this.loading = true;
            this.loadingIssues = false;
            this.chartsData = [];
            this.isPerfDiagnosticsFeedbackSupported = false;
            this.hasEditPrivilege = false;
            this.hasReadPolicyPrivilege = false;
            this.disabledService = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewSpec"].PERF_DIAGNOSTICS_VIEW_DISABLED_SERVICES;
            this.configurationFailedMessage = null;
            this.getString = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString;
            /**
             * Request the exceptions definitions and cache them in the memory as they don"t change.
             */

            this.requestExceptionsData = function () {
              _this.loading = true;

              _this.perfDiagnosticsProvider.getPerformanceExceptionsData(_this.clusterRef).then(function (result) {
                // Cache result
                _this.entityTypes = result.performanceEntityTypes;
                _this.aggregatedEntityTypes = result.performanceAggregatedEntityTypes;
                _this.exceptionTypes = result.performanceExceptionIdToException;
                _this.loading = false;
                _this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.screenReader.message.page.loaded", _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.cluster.monitor.performance.diagnostics.title"));
              })["catch"](_this.handleError);
            };
            /**
             * Generic error handler
             */


            this.handleError = function (error) {
              _util_logger__WEBPACK_IMPORTED_MODULE_16__["Logger"].error("Unable to retrieve performance diagnostics data.", error);

              _this.alertMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.errorLoadingData");
              _this.loadingIssues = false;
              _this.loading = false;
            };
            /**
             * Loads the data about all entityRefIds in portions as the server API
             * does not support more than 256 IDs in a single request.
             */


            this.requestEntityInfos = function (entityRefIds) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var entityRefIdToEntityRefDataMap, notRequestedRefIds, ids, i, id, result, key;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(!entityRefIds || entityRefIds.length === 0)) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return");

                      case 2:
                        entityRefIdToEntityRefDataMap = {};
                        notRequestedRefIds = entityRefIds.slice(); // Load the data in portions

                      case 4:
                        if (!(notRequestedRefIds.length > 0)) {
                          _context.next = 20;
                          break;
                        }

                        ids = [];

                        for (i = 0; i < PerformanceDiagnosticsComponent.MAX_REQUEST && notRequestedRefIds.length > 0; ++i) {
                          id = notRequestedRefIds.shift();
                          ids.push(id);
                        }

                        _context.next = 9;
                        return this.perfDiagnosticsProvider.getPerfEntitiesInfo(this.clusterRef, ids);

                      case 9:
                        result = _context.sent;
                        _context.t0 = regeneratorRuntime.keys(result.entityRefIdToEntityRefData);

                      case 11:
                        if ((_context.t1 = _context.t0()).done) {
                          _context.next = 18;
                          break;
                        }

                        key = _context.t1.value;

                        if (result.entityRefIdToEntityRefData.hasOwnProperty(key)) {
                          _context.next = 15;
                          break;
                        }

                        return _context.abrupt("continue", 11);

                      case 15:
                        entityRefIdToEntityRefDataMap[key] = result.entityRefIdToEntityRefData[key];
                        _context.next = 11;
                        break;

                      case 18:
                        _context.next = 4;
                        break;

                      case 20:
                        return _context.abrupt("return", entityRefIdToEntityRefDataMap);

                      case 21:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            };

            this.onGoalChanged = function (goal) {
              _this.goal = goal;
            };

            this.createChartsDataFromSingleIssue = function (issue) {
              var metricName = issue.refData.metricName;
              var entityType = _this.entityTypes[metricName]; // The charts component works with an array of metrics so
              // if we have a single metrics objects, wrap it in an array

              var metrics = issue.metric;
              var graphs = entityType.graphs.map(function (graph) {
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].getGraphDefinition(graph);
              });
              var graphMetric = new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](metrics, graphs);
              var chartData = new ChartData();
              chartData.issue = issue;
              chartData.data = graphMetric;
              chartData.isShowAllDataAvailable = true;
              return [chartData];
            };

            this.createChartsDataFromAggregatedIssue = function (issue) {
              var aggregatedGraphMetricsMap = _this.aggregateGraphMetrics(issue);

              var chartsData = [];
              var chartTitles = new Set();

              if (issue.aggregatedEntity) {
                var entity = issue.aggregatedEntity;
                var id = entity.metric.entityRefId;
                var metrics = entity.metric;
                var metricName = PerformanceDiagnosticsComponent.AGGREGATED_METRIC_NAME;
                var rawGraphs = _this.aggregatedEntityTypes[metricName].graphs;
                var graphs = rawGraphs.map(function (graph) {
                  return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].getGraphDefinition(graph);
                });
                var data = new ChartData();
                data.issue = issue;
                data.isShowAllDataAvailable = false;
                data.data = new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](metrics, graphs, id);

                if (!!data.data.graphs && data.data.graphs.length > 0) {
                  // Show the aggregated chart only if we can draw it!
                  chartsData.push(data);
                  chartTitles.add(data.issue.name);
                }
              }

              for (var entityId in aggregatedGraphMetricsMap) {
                if (!aggregatedGraphMetricsMap.hasOwnProperty(entityId)) {
                  continue;
                }

                var entry = aggregatedGraphMetricsMap[entityId];

                var _data = new ChartData();

                _data.isShowAllDataAvailable = true;
                _data.issue = entry.issue;
                _data.data = new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](entry.metrics, entry.graphs, entityId); // Don't set the same title on each chart within the same entity

                if (chartTitles.has(_data.issue.name)) {
                  _data.issue.name = null;
                } else {
                  chartTitles.add(_data.issue.name);
                }

                chartsData.push(_data);
              }

              return chartsData;
            };
          }

          _createClass(PerformanceDiagnosticsComponent, [{
            key: "initializePersistedSelections",
            value: function initializePersistedSelections() {
              var _this2 = this;

              if (this.timeRangePickerComponent == null) {
                setTimeout(function () {
                  _this2.initializePersistedSelections();
                }, 1000);
                return;
              } // Try to get persisted selection.


              var persistedSelection = this.perfPersistenceService.getPersistedSelection();
              /*
               * If there is persisted time range selection, then wait for time-range-picker component
               * initialization and pass the cached range into it.
              * */

              if (persistedSelection != null) {
                var timeRange = persistedSelection.timeRange;
                var state = persistedSelection.state;

                if (this.timeRangePickerComponent.currentTimeRange.from !== timeRange.from || this.timeRangePickerComponent.currentTimeRange.to !== timeRange.to) {
                  this.timeRange = timeRange;
                  this.timeRangePickerComponent.setTimerange(this.timeRange, state);
                  this.timeRangePickerComponent.changeRange.emit(this.timeRange);
                }
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.initializePersistedSelections();
              this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_13__["ManagedObject"].contextObject; // Init predefined goals

              this.goals = [];
              this.goals.push(new Goal(_generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].iops, _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.iops")));
              this.goals.push(new Goal(_generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].tput, _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.throughput")));
              this.goals.push(new Goal(_generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].lat, _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.latency"))); // Select the first one

              this.goal = this.goals[0];
              this.fetch();
            }
          }, {
            key: "fetch",
            value: function fetch() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var promises, _yield$Promise$all, _yield$Promise$all2;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        promises = [this.perfProvider.getPerfServiceEnabled(this.clusterRef), this.ceipService.getCeipServiceEnabled(this.clusterRef), this.capabilityProvider.getIsPerfDiagnosticsFeedbackSupportedOnVc(this.clusterRef), this.permissionService.hasPermissions(this.clusterRef, [_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].EDIT_CLUSTER()]), this.permissionService.hasVcPermissions(this.clusterRef, [_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].READ_POLICIES()])];
                        _context2.prev = 1;
                        this.loading = true;
                        _context2.next = 5;
                        return Promise.all(promises);

                      case 5:
                        _yield$Promise$all = _context2.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5);
                        this.isPerfEnabled = _yield$Promise$all2[0];
                        this.isCeipEnabled = _yield$Promise$all2[1];
                        this.isPerfDiagnosticsFeedbackSupported = _yield$Promise$all2[2];
                        this.hasEditPrivilege = _yield$Promise$all2[3];
                        this.hasReadPolicyPrivilege = _yield$Promise$all2[4];
                        this.disabledService.setRequiredServiceStatus(_component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewSpec"].PERF_DISABLED, this.isPerfEnabled);
                        this.disabledService.setRequiredServiceStatus(_component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewSpec"].PERF_DIAGNOSTICS_VIEW_CEIP_DISABLED, this.isCeipEnabled);

                        if (this.disabledService.allRequiredServicesAreEnabled) {
                          this.requestData();
                        } else {
                          this.loading = false;
                        }

                        this.alertMessage = null;
                        _context2.next = 23;
                        break;

                      case 18:
                        _context2.prev = 18;
                        _context2.t0 = _context2["catch"](1);
                        this.loading = false;
                        this.alertMessage = _context2.t0;

                        _util_logger__WEBPACK_IMPORTED_MODULE_16__["Logger"].error(_context2.t0);

                      case 23:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[1, 18]]);
              }));
            }
          }, {
            key: "requestData",
            value: function requestData() {
              var _this3 = this;

              this.permissionService.hasPermissions(this.clusterRef, [_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].GLOBAL_DIAGNOSTICS()]).then(function (result) {
                _this3.hasDiagnosticsPermissions = result; // Request this data only once as it won"t change unless the vSAN service us upgraded on the server.

                _this3.requestExceptionsData();
              })["catch"](this.handleError);
            }
            /**
             * Requests performance diagnostics data and entity infos
             */

          }, {
            key: "requestDiagnosticsData",
            value: function requestDiagnosticsData(range) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this4 = this;

                var perfDiagnosticTaskRef, spec;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.perfPersistenceService.saveSelection(range, this.timeRangePickerComponent.currentPickerState);
                        this.timeRange = range;
                        this.loadingIssues = true;
                        this.issues = [];
                        this.chartsData = [];
                        this.selectedIssue = null;
                        this.noDataView = null;
                        spec = _generated_perf_diagnostic_query_spec__WEBPACK_IMPORTED_MODULE_6__["PerfDiagnosticQuerySpec"].Factory.create(range.from, range.to, this.goal.type);
                        _context3.prev = 8;
                        _context3.next = 11;
                        return this.perfDiagnosticsProvider.getPerformanceDiagnosticTask(this.clusterRef, spec);

                      case 11:
                        perfDiagnosticTaskRef = _context3.sent;
                        _context3.next = 14;
                        return this.taskSvc.getAwaitResult(perfDiagnosticTaskRef);

                      case 14:
                        this.transactionId = _context3.sent;
                        _context3.next = 22;
                        break;

                      case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3["catch"](8);
                        // No data is available when the error is thrown.
                        this.loadingIssues = false;
                        this.noDataView = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_17__["VsanDateTimeUtils"].isRecentTimeRange(this.timeRange) ? _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewSpec"].PERF_VIEW_NO_DATA : _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewSpec"].PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD;
                        return _context3.abrupt("return");

                      case 22:
                        this.perfDiagnosticsProvider.getPerformanceDiagnosticData(this.clusterRef, perfDiagnosticTaskRef, spec).then(function (result) {
                          _this4.alertMessage = null; // Save only unique issues

                          if (result && result.issues) {
                            result.issues.forEach(function (issue) {
                              var exceptionData = _this4.exceptionTypes[issue.exceptionId];

                              if (exceptionData) {
                                var issuePO = new _model_diagnostics_issue_data__WEBPACK_IMPORTED_MODULE_21__["DiagnosticIssue"](issue, exceptionData);

                                _this4.issues.push(issuePO);
                              }
                            });
                          }

                          if (result && result.entityRefIds) {
                            _this4.requestEntityInfos(result.entityRefIds).then(function (entityInfos) {
                              var issuesWithEntities = []; // Remove issues without entities as we
                              // cannot show information for them

                              _this4.issues.forEach(function (issue) {
                                issue.addEntities(_this4.entityTypes, entityInfos);

                                if (issue.issues.length > 0) {
                                  issuesWithEntities.push(issue);
                                }
                              });

                              _this4.issues = issuesWithEntities;

                              _this4.populateIssuesSummary(spec);

                              _this4.loadingIssues = false;
                            }, _this4.handleError);
                          } else {
                            _this4.populateIssuesSummary(spec);

                            _this4.loadingIssues = false;
                          }
                        }, this.handleError);

                      case 23:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[8, 17]]);
              }));
            }
            /**
             * Updates the summary label according to the retrieved issues.
             */

          }, {
            key: "populateIssuesSummary",
            value: function populateIssuesSummary(spec) {
              var startTime = PerformanceDiagnosticsComponent.formatDate(spec.startTime);
              var endTime = PerformanceDiagnosticsComponent.formatDate(spec.endTime);
              var perspective = this.getDiagnosticTypeLabel(spec.queryType);
              var issuesCount = this.issues == null ? 0 : this.issues.length;

              if (issuesCount === 0) {
                this.statusIconShape = _util_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
                this.statusIconClass = _util_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"].clrIconShapeClassMap[_util_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE];
                this.statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.noIssuesFoundLabel", startTime, endTime, perspective);
              } else {
                this.statusIconShape = _util_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
                this.statusIconClass = _util_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"].clrIconShapeClassMap[_util_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE];
                this.statusText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.foundIssuesLabel", issuesCount, startTime, endTime, perspective);
              }
            }
          }, {
            key: "getDiagnosticTypeLabel",
            value: function getDiagnosticTypeLabel(diagnosticType) {
              var result;

              switch (diagnosticType) {
                case _generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].eval:
                  result = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.eval");
                  break;

                case _generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].iops:
                  result = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.iops");
                  break;

                case _generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].tput:
                  result = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.throughput");
                  break;

                case _generated_perf_diagnostic_type__WEBPACK_IMPORTED_MODULE_7__["PerfDiagnosticType"].lat:
                  result = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnostics.perspective.latency");
                  break;

                default:
                  _util_logger__WEBPACK_IMPORTED_MODULE_16__["Logger"].error("Uknown diagnostic type: " + diagnosticType);

              }

              return result;
            }
            /**
             * Formats the given date in the "yMdjm" format (e.g. `9/3/2010, 12:05 PM` for `en-US`)
             */

          }, {
            key: "onIssueSelected",
            value: function onIssueSelected(issue) {
              this.selectedIssue = issue; // Do nothing for parent issues as they are just
              // logical groups and there is no charts defined for them

              if (this.isParentIssueSelected) {
                return;
              }

              if (issue instanceof _model_single_issue_entity_data__WEBPACK_IMPORTED_MODULE_22__["SingleIssueEntity"]) {
                this.chartsData = this.createChartsDataFromSingleIssue(issue);
              } else if (issue instanceof _model_aggregated_entity_data__WEBPACK_IMPORTED_MODULE_20__["AggregatedIssueEntity"]) {
                this.chartsData = this.createChartsDataFromAggregatedIssue(issue);
              } else {
                _util_logger__WEBPACK_IMPORTED_MODULE_16__["Logger"].error("Unknown issueEntity type: " + issue);
              }

              this.changeDetector.detectChanges();
            }
          }, {
            key: "onFeedbackSubmit",
            value: function onFeedbackSubmit(feedback) {
              this.selectedIssue.feedback = feedback;
            }
          }, {
            key: "aggregateGraphMetrics",
            value: function aggregateGraphMetrics(issue) {
              var _this5 = this;

              var aggregatedGraphMetricsMap = {};
              issue.entities.forEach(function (entity) {
                var id = entity.refData.entityRefId;
                var data = aggregatedGraphMetricsMap[id];

                if (!data) {
                  data = {
                    issue: undefined,
                    graphs: [],
                    metrics: undefined
                  };
                  aggregatedGraphMetricsMap[id] = data;
                }

                if (data) {
                  if (!data.issue) {
                    data.issue = entity;
                  }

                  if (data.graphs.length === 0) {
                    var metricName = entity.refData.metricName;
                    var entityType = _this5.entityTypes[metricName];
                    data.graphs = entityType.graphs.map(function (graph) {
                      return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].getGraphDefinition(graph);
                    });
                  }

                  if (data.metrics && entity.metric.entityRefId === data.metrics.entityRefId) {
                    var _data$metrics$metrics;

                    // aggregate the metrics series so we can have the entire chart
                    (_data$metrics$metrics = data.metrics.metricsSeries).push.apply(_data$metrics$metrics, _toConsumableArray(entity.metric.metricsSeries));
                  } else {
                    // Shallow copy metricsSeries to avoid multiple last series adding on each selection.
                    data.metrics = {
                      entityRefId: entity.metric.entityRefId,
                      timeStamps: entity.metric.timeStamps,
                      metricsCollectInterval: entity.metric.metricsCollectInterval,
                      metricsSeries: _toConsumableArray(entity.metric.metricsSeries)
                    };
                  }
                }
              });
              return aggregatedGraphMetricsMap;
            }
            /**
             * If the issue is a parent - return its name
             * If the issue is a child - return its parent"s name
             */

          }, {
            key: "parentIssueTitle",
            get: function get() {
              if (this.selectedIssue instanceof _model_diagnostics_issue_data__WEBPACK_IMPORTED_MODULE_21__["DiagnosticIssue"]) {
                return this.selectedIssue.name;
              } else {
                return this.selectedIssue.parentIssue.name;
              }
            }
            /**
             * If the issue is a parent - return its descriptions
             * If the issue is a child - return its parent"s description
             */

          }, {
            key: "parentIssueDescription",
            get: function get() {
              if (this.selectedIssue instanceof _model_diagnostics_issue_data__WEBPACK_IMPORTED_MODULE_21__["DiagnosticIssue"]) {
                return this.selectedIssue.description;
              } else {
                return this.selectedIssue.parentIssue.description;
              }
            }
          }, {
            key: "isParentIssueSelected",
            get: function get() {
              return this.selectedIssue instanceof _model_diagnostics_issue_data__WEBPACK_IMPORTED_MODULE_21__["DiagnosticIssue"];
            }
          }, {
            key: "isRecommendationShown",
            get: function get() {
              return this.selectedIssue && (this.selectedIssue instanceof _model_single_issue_entity_data__WEBPACK_IMPORTED_MODULE_22__["SingleIssueEntity"] || this.selectedIssue instanceof _model_aggregated_entity_data__WEBPACK_IMPORTED_MODULE_20__["AggregatedIssueEntity"]) && this.selectedIssue.recommendation && this.selectedIssue.recommendation.trim() !== "";
            }
          }, {
            key: "getSelectedIssueRecommendation",
            value: function getSelectedIssueRecommendation() {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.diagnosticts.recommendation", this.selectedIssue && this.selectedIssue.recommendation);
            }
          }, {
            key: "onShowAllMetricsLinkClicked",
            value: function onShowAllMetricsLinkClicked(issue) {
              var moRef = issue.refData.managedObjectRef;
              var objectType = issue.refData.performanceObjectType;
              var extensionId;
              var viewType;

              switch (objectType) {
                // Cluster
                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterVmConsumption:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].CLUSTER_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].CLUSTER_VM_CONSUMPTION;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterBackend:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].CLUSTER_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].CLUSTER_BACKEND;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterDomOwner:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].CLUSTER_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].CLUSTER_ISCSI;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterIoInsight:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].CLUSTER_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].CLUSTER_IO_INSIGHT;
                  break;
                // Host

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostBackend:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_BACKEND;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostVmConsumption:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_VM_CONSUMPTION;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostPnic:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_PHYSICAL_ADAPTER;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostVnic:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_VIRTUAL_ADAPTER;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostNet:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_VIRTUAL_ADAPTER;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].diskGroup:
                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].cacheDisk:
                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].capacityDisk:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_DISK;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostIoInsight:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].HOST_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].HOST_IO_INSIGHT;
                  break;
                // Virtual Machine

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].vm:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].VM_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].VM_CONSUMPTION;
                  break;

                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].virtualDisk:
                case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].vscsi:
                  extensionId = _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["PlatformExtension"].VM_PERFORMANCE;
                  viewType = _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"].VM_VIRTUAL_DISK;
                  break;

                default:
                  throw new Error("Unsupported PefrormanceObjectType: " + objectType);
              }

              var props = {
                timeRangeFrom: this.timeRange.from,
                timeRangeTo: this.timeRange.to,
                timeRangeName: this.timeRange.name,
                viewType: _performance_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_19__["PerfMonitorViewType"][viewType],
                pickerState: _component_datetime_picker_time_range_picker_range_picker_state__WEBPACK_IMPORTED_MODULE_4__["RangePickerState"][this.timeRangePicker.currentPickerState],
                pickerInterval: this.timeRangePicker.hourInterval,
                pickerFromDate: this.timeRangePicker.fromDate ? this.timeRangePicker.fromDate.toString() : null,
                entityUuid: issue.vsanUuid
              };
              this.navigationService.navigateTo(extensionId, moRef, props);
            }
          }, {
            key: "isLinkSupported",
            value: function isLinkSupported(type) {
              return [_generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterVmConsumption, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterBackend, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterDomOwner, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].clusterIoInsight, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostBackend, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostVmConsumption, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostPnic, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostVnic, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostNet, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].hostIoInsight, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].diskGroup, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].cacheDisk, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].capacityDisk, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].vm, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].virtualDisk, _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_8__["PerformanceObjectType"].vscsi].includes(type);
            }
          }, {
            key: "isShowAllLinkVisible",
            value: function isShowAllLinkVisible(chartData) {
              var issue = chartData.issue;
              return issue && issue.refData && !issue.refData.isEntityMissing && this.isLinkSupported(issue.refData.performanceObjectType) && chartData.isShowAllDataAvailable;
            }
          }], [{
            key: "formatDate",
            value: function formatDate(date) {
              var formatter = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](_util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getLocaleForDecimal());
              return formatter.transform(date, _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.common.datePipe.platform.format"));
            }
          }]);

          return PerformanceDiagnosticsComponent;
        }();

        PerformanceDiagnosticsComponent.MAX_REQUEST = 256;
        PerformanceDiagnosticsComponent.AGGREGATED_METRIC_NAME = "aggregate";
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_14__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PerformanceDiagnosticsComponent.prototype, "srOnlyMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_12__["RefreshHandler"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], PerformanceDiagnosticsComponent.prototype, "fetch", null);
        return PerformanceDiagnosticsComponent;
      }();
      /**
       * Represents the goal for which the exceptions data is loaded
       */


      var Goal = /*#__PURE__*/_createClass(function Goal(type, title) {
        _classCallCheck(this, Goal);

        this.type = type;
        this.title = title;
      });

      var ChartData = /*#__PURE__*/_createClass(function ChartData() {
        _classCallCheck(this, ChartData);
      });
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
    "9X52":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/performance-diagnostics.module.ngfactory.js ***!
      \******************************************************************************************/

    /*! exports provided: PerformanceDiagnosticsModuleNgFactory */

    /***/
    function X52(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceDiagnosticsModuleNgFactory", function () {
        return PerformanceDiagnosticsModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _performance_diagnostics_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./performance-diagnostics.module */
      "+94D");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/component/chart/performance/perf-chart-dialog.component.ngfactory */
      "vx4U");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/component/chart/performance/set-threshold-dialog.component.ngfactory */
      "Gg4+");
      /* harmony import */


      var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */
      "No7X");
      /* harmony import */


      var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */
      "bIR2");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */
      "Wfa3");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */
      "PBGP");
      /* harmony import */


      var _view_performance_diagnostics_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./view/performance-diagnostics.component.ngfactory */
      "2Que");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/service/theme-listener.service */
      "AWEo");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../common/component/capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../common/service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-property-collector-client.service */
      "L7/z");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-vc-config-system.service */
      "yGTn");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-model-factory.service */
      "VM2Y");
      /* harmony import */


      var _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-model-factory.service */
      "gswu");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../generated/datacenter-inventory-service */
      "uoMP");
      /* harmony import */


      var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../generated/network-inventory-service */
      "Ot8i");
      /* harmony import */


      var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../generated/compute-inventory-service */
      "+xjW");
      /* harmony import */


      var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../generated/io-insight-inventory-service */
      "fhiF");
      /* harmony import */


      var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../generated/vsan-inventory-helper */
      "2HhS");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../common/service/client/vsan/capability-system/vsan-capability.service */
      "jAET");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.service */
      "Tq4R");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker-intl.service */
      "rAFq");
      /* harmony import */


      var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../common/component/datetime-picker/localize-picker-labels */
      "EUIg");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker.component */
      "4D9t");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */
      "bMPK");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */
      "UiI2");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../common/service/browser-storage.service */
      "mJDh");
      /* harmony import */


      var _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../common/service/performance-persistence.service */
      "D0Ma");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../common/component/unavailable-view/unavailable-view.module */
      "YUlR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../common/component/chart/chart.module */
      "1+Dr");
      /* harmony import */


      var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ../common/component/action-button/action-button.module */
      "wQOa");
      /* harmony import */


      var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../common/component/cell/common-cells.module */
      "e724");
      /* harmony import */


      var _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ../common/component/search/search.module */
      "v8iv");
      /* harmony import */


      var _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ../common/component/inventory/inventory-browser.module */
      "jkFw");
      /* harmony import */


      var _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ../common/component/datagrid/tree-datagrid.module */
      "6BUe");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.module */
      "jRYl");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time.module */
      "KL2N");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time.module */
      "QX+E");
      /* harmony import */


      var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ../common/component/datetime-picker/datetime-picker.module */
      "UaEa");
      /* harmony import */


      var _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ../common/component/popup-list/popup-list.module */
      "JCZN");
      /* harmony import */


      var _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ../common/component/navigation/vsan-breadcrumb.module */
      "U2P7");
      /* harmony import */


      var _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ../common/vsan-common.module */
      "uDMx");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! ../common/component/chart/performance/perf-chart-dialog.component */
      "xuXY");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! ../common/component/chart/performance/set-threshold-dialog.component */
      "AYan");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */
      "vRnr");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */
      "oRW+");
      /* harmony import */


      var _view_performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! ./view/performance-diagnostics.component */
      "3s6Q");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-format.class */
      "EFU/");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var PerformanceDiagnosticsModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_performance_diagnostics_module__WEBPACK_IMPORTED_MODULE_1__["PerformanceDiagnosticsModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PerfChartDialogComponentNgFactory"], _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SetThresholdDialogComponentNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeContainerComponentNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["DeleteRangeConfirmDialogComponentNgFactory"], _view_performance_diagnostics_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["PerformanceDiagnosticsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"], _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"], [_common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_16__["ThemeListenerService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_17__["ReferenceWatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__["BarChartService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__["BarChartService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_19__["HighchartsPropertiesService"], _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_19__["HighchartsPropertiesService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_20__["PerfOrchestratorService"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_20__["PerfOrchestratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_21__["VsanCapacityService"], _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_21__["VsanCapacityService"], [_generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_22__["CapacityDataService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__["BarChartService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_23__["SpaceEfficiencyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_24__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_24__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_26__["VpxdPropertyCollectorClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_27__["VsanVcClusterConfigSystem"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_28__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_30__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_31__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_31__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_26__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_28__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_30__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_32__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_32__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_26__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_28__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_30__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_33__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_33__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_26__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_28__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_30__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_34__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_34__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_26__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_28__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_30__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_35__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_36__["IoInsightService"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_37__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_39__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_40__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_41__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_42__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_43__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_43__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_44__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_45__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_44__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_46__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_47__["PersistentStorageService"], _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_47__["PersistentStorageService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_48__["PerformancePersistenceService"], _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_48__["PerformancePersistenceService"], [_common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_47__["PersistentStorageService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_49__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_50__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_50__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_51__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_51__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_46__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_46__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_52__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_52__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_52__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_53__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_53__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_54__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_54__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_55__["UnavailableViewModule"], _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_55__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_56__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_56__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_56__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_56__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_57__["VsanChartModule"], _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_57__["VsanChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_58__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_58__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_59__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_59__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_60__["SearchModule"], _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_60__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_61__["InventoryBrowserModule"], _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_61__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_62__["TreeDatagridModule"], _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_62__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_39__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_39__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_63__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_63__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_64__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_64__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_64__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_64__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_65__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_65__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_66__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_66__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_67__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_67__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_67__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_67__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_68__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_68__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_69__["PopupListModule"], _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_69__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_70__["VsanBreadcrumbModule"], _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_70__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_71__["VsanCommonModule"], _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_71__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _performance_diagnostics_module__WEBPACK_IMPORTED_MODULE_1__["PerformanceDiagnosticsModule"], _performance_diagnostics_module__WEBPACK_IMPORTED_MODULE_1__["PerformanceDiagnosticsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_49__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_56__["ROUTES"], function () {
          return [[{
            path: "expandChart",
            component: _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_72__["PerfChartDialogComponent"]
          }, {
            path: "setThreshold",
            component: _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_73__["SetThresholdDialogComponent"]
          }], [{
            path: "addTimeRange",
            component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_74__["AddTimeRangeDialogComponent"]
          }, {
            path: "deleteTimeRange",
            component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_75__["DeleteRangeConfirmDialogComponent"]
          }], [{
            path: "",
            component: _view_performance_diagnostics_component__WEBPACK_IMPORTED_MODULE_76__["PerformanceDiagnosticsComponent"]
          }]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_77__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_68__["ɵ0"], [])]);
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
    "CCTH":
    /*!*********************************************************!*\
      !*** ./src/app/generated/perf-diagnostic-query-spec.ts ***!
      \*********************************************************/

    /*! exports provided: PerfDiagnosticQuerySpec */

    /***/
    function CCTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfDiagnosticQuerySpec", function () {
        return PerfDiagnosticQuerySpec;
      });

      var PerfDiagnosticQuerySpec;

      (function (PerfDiagnosticQuerySpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (startTime, endTime, queryType) {
          return {
            startTime: startTime,
            endTime: endTime,
            queryType: queryType
          };
        };

        PerfDiagnosticQuerySpec.Factory = Factory;
      })(PerfDiagnosticQuerySpec || (PerfDiagnosticQuerySpec = {})); //module PerfDiagnosticQuerySpec

      /***/

    },

    /***/
    "DKEA":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/performance-diagnostics.scss.shim.ngstyle.js ***!
      \************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function DKEA(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.filters-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.filters-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.filters-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.filters-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.filters-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.filters-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.details-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.details-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.details-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .details-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.details-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.details-container[_ngcontent-%COMP%]   #parent-issue-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.details-container[_ngcontent-%COMP%]   #selection-warning-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS1kaWFnbm9zdGljcy92aWV3L3BlcmZvcm1hbmNlLWRpYWdub3N0aWNzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FIa0RHO0VBQ0csZ0NBQUE7QUZqQ047QUVtQ0c7O0VBR0csZ0NBQUE7QUZsQ047QUVvQ0c7RUFDRyw4QkFBQTtBRmxDTjtBQWxCQTtFQUNHLGFBQUE7RUFHQSx1QkFBQTtBQW1CSDtBRWtDRztFQUNLLCtCQUFBO0FGaENSO0FFa0NHO0VBSUcsK0JBQUE7QUZuQ047QUVvQ007RUFDRywrQkFBQTtBRmxDVDtBRXFDRztFQUVHLCtCQUFBO0FGcENOO0FFc0NNO0VBQ0csK0JBQUE7QUZwQ1Q7QUV1Q0c7RUFDRyw2QkFBQTtBRnJDTjtBQWpDQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFvQ0g7QUVKRztFQUNHLGdDQUFBO0FGTU47QUVKRzs7RUFHRyxnQ0FBQTtBRktOO0FFSEc7RUFDRyw4QkFBQTtBRktOO0FBM0NHO0VBQ0csZ0JHZ0h1QjtBSG5FN0I7QUEzQ0c7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE2Q04iLCJmaWxlIjoic3JjL2FwcC92c2FuL3BlcmZvcm1hbmNlLWRpYWdub3N0aWNzL3ZpZXcvcGVyZm9ybWFuY2UtZGlhZ25vc3RpY3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE3LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4uZmlsdGVycy1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIC8vIFRoaXMgYWxpZ24gaXMgbmVlZGVkIGFzIHRoZSByYW5nZSBwaWNrZXIgaGVpZ2h0IGlzIDIuNHJlbSBhbmQgd2l0aG91dCB0aGlzLCB0aGUgZHJvcGRvd25cbiAgIC8vIGFwcGVhcnMgdG9vIGZhciBhd2F5KHNlZSBQUiAyNDM1MzcyKVxuICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmc7XG59XG5cbi5kZXRhaWxzLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG4gICAvLyBNYWtlIHRoZSBwYXJlbnQgaXNzdWUgYXBwZWFyIGFzIGhlYWRlclxuICAgI3BhcmVudC1pc3N1ZS1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ7XG4gICB9XG4gICAjc2VsZWN0aW9uLXdhcm5pbmctbWVzc2FnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMSAwIDByZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICB9XG59XG5cblxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
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
    "MziP":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/issues-list.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_IssuesListComponent, View_IssuesListComponent_0, View_IssuesListComponent_Host_0, IssuesListComponentNgFactory */

    /***/
    function MziP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_IssuesListComponent", function () {
        return RenderType_IssuesListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_IssuesListComponent_0", function () {
        return View_IssuesListComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_IssuesListComponent_Host_0", function () {
        return View_IssuesListComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuesListComponentNgFactory", function () {
        return IssuesListComponentNgFactory;
      });
      /* harmony import */


      var _issues_list_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./issues-list.scss.shim.ngstyle */
      "NSSe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_component_datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/component/datagrid/tree-expander.component.ngfactory */
      "2CYb");
      /* harmony import */


      var _common_component_datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/component/datagrid/tree-expander.component */
      "8Y4q");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/component/datagrid/tree-column.component.ngfactory */
      "2xL0");
      /* harmony import */


      var _common_component_datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/component/datagrid/tree-column.component */
      "UczD");
      /* harmony import */


      var _issues_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./issues-list.component */
      "rQ8Y");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_IssuesListComponent = [_issues_list_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_IssuesListComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_IssuesListComponent,
        data: {}
      });

      function View_IssuesListComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.data.helpUrl, "");

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.perf.diagnosticts.askVmware"));

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_IssuesListComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 28, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-selected", null], [2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onRowSelected(_v.context.$implicit, $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 7, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "vsan-expand", [], null, null, null, _common_component_datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TreeExpanderComponent_0"], _common_component_datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TreeExpanderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _common_component_datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_5__["TreeExpanderComponent"], [], {
          row: [0, "row"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 16777216, null, 2, 7, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 147456, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_IssuesListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          var currVal_6 = _v.context.$implicit;

          _ck(_v, 17, 0, currVal_6);

          _ck(_v, 21, 0);

          var currVal_10 = _v.context.$implicit.data.hasOwnProperty("helpUrl");

          _ck(_v, 26, 0, currVal_10);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isRowSelected(_v.context.$implicit);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;

          _ck(_v, 11, 0, currVal_4, currVal_5);

          var currVal_7 = _v.context.$implicit.data.name;

          _ck(_v, 18, 0, currVal_7);

          var currVal_8 = true;
          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).signpost.length > 0;

          _ck(_v, 20, 0, currVal_8, currVal_9);
        });
      }

      function View_IssuesListComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 71, "clr-datagrid", [["id", "issues"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          loading: [0, "loading"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 1, 3, "vsan-tree-column", [["id", "issue-column"]], null, null, null, _common_component_datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TreeColumnComponent_0"], _common_component_datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 49152, null, 0, _common_component_datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_9__["TreeColumnComponent"], [], {
          title: [0, "title"],
          dataProvider: [1, "dataProvider"],
          dataField: [2, "dataField"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](43, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 16777216, null, null, 14, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 1, 3, "vsan-tree-column", [["id", "more-column"]], null, null, null, _common_component_datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TreeColumnComponent_0"], _common_component_datagrid_tree_column_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TreeColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 49152, null, 0, _common_component_datagrid_tree_column_component__WEBPACK_IMPORTED_MODULE_9__["TreeColumnComponent"], [], {
          title: [0, "title"],
          dataProvider: [1, "dataProvider"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](59, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_IssuesListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, 2, 3, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](71, 1, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.loading;

          _ck(_v, 15, 0, currVal_2);

          _ck(_v, 35, 0);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 42, 0, _ck(_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.perf.diagnostics.issueNameColumn")), "");

          var currVal_6 = _co.datagrid;
          var currVal_7 = "name";

          _ck(_v, 42, 0, currVal_5, currVal_6, currVal_7);

          _ck(_v, 51, 0);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _ck(_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.perf.diagnostics.moreInfoColumn")), "");

          var currVal_11 = _co.datagrid;

          _ck(_v, 58, 0, currVal_10, currVal_11);

          var currVal_12 = _co.datagrid.rows;

          _ck(_v, 65, 0, currVal_12);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).detailService.isOpen;

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_3 = true;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ariaSort;

          _ck(_v, 31, 0, currVal_3, currVal_4);

          var currVal_8 = true;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ariaSort;

          _ck(_v, 47, 0, currVal_8, currVal_9);

          var currVal_13 = true;

          _ck(_v, 68, 0, currVal_13);

          var currVal_14 = _co.datagridFooterLabel;

          _ck(_v, 71, 0, currVal_14);
        });
      }

      function View_IssuesListComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-issues-list", [], null, null, null, View_IssuesListComponent_0, RenderType_IssuesListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _issues_list_component__WEBPACK_IMPORTED_MODULE_10__["IssuesListComponent"], [], null, null)], null, null);
      }

      var IssuesListComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-issues-list", _issues_list_component__WEBPACK_IMPORTED_MODULE_10__["IssuesListComponent"], View_IssuesListComponent_Host_0, {
        data: "data",
        loading: "loading"
      }, {
        selectIssue: "selectIssue"
      }, []);
      /***/

    },

    /***/
    "NSSe":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/issues-list.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function NSSe(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]   clr-datagrid[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS1kaWFnbm9zdGljcy92aWV3L2lzc3Vlcy1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUFDQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDSDtBQUNHO0VBQ0csY0FBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS1kaWFnbm9zdGljcy92aWV3L2lzc3Vlcy1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxNy0yMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgLy8gT3ZlcnJpZGUgY2xyLWRhdGFncmlkIGRpc3BsYXkgc2V0dGluZ3MsIGF0IHRoZSBkYXRhZ3JpZCBpbiB0aGlzIHZpZXcgaXMgbm90IG1lYW50IHRvIHN0cmV0Y2hcbiAgIGNsci1kYXRhZ3JpZCB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgIH1cbn0iXX0= */"];
      /***/
    },

    /***/
    "P8Sg":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/model/aggregated-entity.data.ts ***!
      \******************************************************************************/

    /*! exports provided: AggregatedIssueEntity */

    /***/
    function P8Sg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AggregatedIssueEntity", function () {
        return AggregatedIssueEntity;
      });
      /* harmony import */


      var _single_issue_entity_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-issue-entity.data */
      "YOj4");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_entity_ref_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/entity-ref-data */
      "vYE0");
      /* harmony import */


      var _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/entity-ref-type */
      "OTki");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Presentation object for AggregatedDiagnosticIssueEntity. Used in the issues grid.
       */


      var AggregatedIssueEntity = /*#__PURE__*/function () {
        function AggregatedIssueEntity() {
          _classCallCheck(this, AggregatedIssueEntity);
        }

        _createClass(AggregatedIssueEntity, [{
          key: "updateName",
          value:
          /**
           * Updates the entities name according to the other entities that it aggregates.
           */
          function updateName(aggregatedEntity, performanceEntityTypes) {
            if (!this.aggregatedRefIds || this.aggregatedRefIds.length === 0) {
              this.name = "";
            }

            if (this.aggregatedRefIds.length === 1 && aggregatedEntity.metricIdLabel) {
              var aggrregatedEntityName = AggregatedIssueEntity.getAggregatedEntityRefIdName(this.aggregatedRefIds[0]);

              if (aggregatedEntity.usingSingleMetricForAllEntities) {
                // now get the user friendly name for this metricId label
                var issue = this.entities[0];
                var vsanPerfEntityType = performanceEntityTypes[issue.refData.metricName];
                var metric = vsanPerfEntityType.graphs.reduce(function (prev, current, currentIndex) {
                  // The first index is 1. Create the new
                  // array on the first step of the reducing
                  if (currentIndex === 1) {
                    return [].concat(prev.metrics, current.metrics);
                  } else {
                    return prev.concat(current.metrics);
                  }
                }).find(function (metric) {
                  return metric.label === aggregatedEntity.metricIdLabel;
                });

                if (metric) {
                  this.name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregatedEntityForMetric", metric.name, aggrregatedEntityName);
                  return;
                }
              }
            }

            this.name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.multiEntityAggregation", AggregatedIssueEntity.getAggregatedEntityRefIdName(this.aggregatedRefIds[0]), AggregatedIssueEntity.getAggregatedEntityRefIdName(this.aggregatedRefIds[1]));
          }
        }], [{
          key: "create",
          value: function create(entity, // AggregatedDiagnosticIssueEntity
          performanceTypes, // A map containing entity types definitions
          entityRefIdToEntityRefDataMap, // A map containing entityRed id to entityRef data
          issue) {
            var result = new AggregatedIssueEntity(); // Casting to two different types because the two interfaces
            // don't extend each other.

            var diagnosticIssue = entity;
            var aggregatedIssue = entity;
            result.aggregatedRefIds = aggregatedIssue.aggregatedRefIds;
            result.recommendation = diagnosticIssue.recommendation;
            result.hasSingleEntityInside = aggregatedIssue.hasSingleEntityInside;
            result.parentIssue = issue;
            result.aggregatedEntity = _single_issue_entity_data__WEBPACK_IMPORTED_MODULE_0__["SingleIssueEntity"].create(aggregatedIssue.aggregatedEntity, entityRefIdToEntityRefDataMap, issue); // entityRefId is required for sending diagnostics feedback.

            result.refData = _generated_entity_ref_data__WEBPACK_IMPORTED_MODULE_2__["EntityRefData"].Factory.create(aggregatedIssue.aggregatedEntity.entityRefId, null, null, null, null, null, null, null);
            result.entities = [];
            aggregatedIssue.entities.forEach(function (childEntity) {
              var singleEntity = _single_issue_entity_data__WEBPACK_IMPORTED_MODULE_0__["SingleIssueEntity"].create(childEntity, entityRefIdToEntityRefDataMap, issue);

              if (singleEntity) {
                result.entities.push(singleEntity);
              }
            });

            if (result.entities.length === 0) {
              return null;
            }

            if (result.hasSingleEntityInside) {
              var firstEntity = result.entities[0];
              result.name = firstEntity.name;
              result.icon = firstEntity.icon;
            } else {
              result.updateName(aggregatedIssue, performanceTypes);
              result.icon = "";
            }

            return result;
          }
        }, {
          key: "getAggregatedEntityRefIdName",
          value: function getAggregatedEntityRefIdName(aggregatedRefId) {
            var name;

            switch (aggregatedRefId) {
              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].DISK_GROUP():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.diskGroup");
                break;

              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].CLUSTER():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.cluster");
                break;

              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].CAPACITY_DISK():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.capacityDisk");
                break;

              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].HOST_DOMCOMPMGR():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.hostDomCompMgr");
                break;

              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].HOST_DOMCLIENT():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.hostDomClient");
                break;

              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].CLUSTER_DOMCLIENT():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.clusterDomClient");
                break;

              case _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_3__["EntityRefType"].CACHE_DISK():
                name = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.aggregated.cacheDisk");
                break;

              default:
                name = aggregatedRefId;
                break;
            }

            return name;
          }
        }]);

        return AggregatedIssueEntity;
      }();
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
    "Xi+H":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/performance-diagnostics-feedback.component.ngfactory.js ***!
      \***********************************************************************************************************/

    /*! exports provided: RenderType_PerformanceDiagnosticsFeedbackComponent, View_PerformanceDiagnosticsFeedbackComponent_0, View_PerformanceDiagnosticsFeedbackComponent_Host_0, PerformanceDiagnosticsFeedbackComponentNgFactory */

    /***/
    function XiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerformanceDiagnosticsFeedbackComponent", function () {
        return RenderType_PerformanceDiagnosticsFeedbackComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerformanceDiagnosticsFeedbackComponent_0", function () {
        return View_PerformanceDiagnosticsFeedbackComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerformanceDiagnosticsFeedbackComponent_Host_0", function () {
        return View_PerformanceDiagnosticsFeedbackComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceDiagnosticsFeedbackComponentNgFactory", function () {
        return PerformanceDiagnosticsFeedbackComponentNgFactory;
      });
      /* harmony import */


      var _performance_diagnostics_feedback_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./performance-diagnostics-feedback.scss.shim.ngstyle */
      "1sVb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _performance_diagnostics_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./performance-diagnostics-feedback.component */
      "as9e");
      /* harmony import */


      var _generated_performance_diagnostics_property_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../generated/performance-diagnostics-property-provider */
      "Iue0");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerformanceDiagnosticsFeedbackComponent = [_performance_diagnostics_feedback_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerformanceDiagnosticsFeedbackComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerformanceDiagnosticsFeedbackComponent,
        data: {}
      });

      function View_PerformanceDiagnosticsFeedbackComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "feedback-item"], ["id", "feedback-acknowledgement"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.cluster.monitor.performance.diagnostics.feedback.acknowledgement"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PerformanceDiagnosticsFeedbackComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "feedback-item"], ["id", "feedback-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.feedbackError;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PerformanceDiagnosticsFeedbackComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-inline"], ["id", "busy-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_PerformanceDiagnosticsFeedbackComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 46, "clr-alert", [["id", "parent-issue-feedback"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrAlert_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵba"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵba"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrAlert"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵba"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], {
          closable: [0, "closable"],
          alertType: [1, "alertType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 41, "clr-alert-item", [["class", "alert-item"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrAlertItem_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrAlertItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrAlertItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵba"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 37, "span", [["class", "alert-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrAlertText"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "span", [["id", "feedback-ask"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 9, "button", [["class", "btn btn-icon btn-link"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.submitFeedback(true) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "clr-icon", [["class", "feedback-item"], ["id", "thumbs-up"], ["shape", "thumbs-up"], ["size", "23"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](20, {
          "is-solid": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "button", [["class", "btn btn-icon btn-link"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.submitFeedback(false) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](27, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "clr-icon", [["class", "feedback-item"], ["id", "thumbs-down"], ["shape", "thumbs-down"], ["size", "23"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](31, {
          "is-solid": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsFeedbackComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsFeedbackComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerformanceDiagnosticsFeedbackComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;
          var currVal_1 = "info";

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_4 = "feedback-item";

          var currVal_5 = _ck(_v, 20, 0, _co.selectedIssue.feedback);

          _ck(_v, 19, 0, currVal_4, currVal_5);

          var currVal_7 = "feedback-item";

          var currVal_8 = _ck(_v, 31, 0, _co.selectedIssue.feedback === false);

          _ck(_v, 30, 0, currVal_7, currVal_8);

          var currVal_9 = _co.selectedIssue.feedback !== undefined && !_co.feedbackError;

          _ck(_v, 38, 0, currVal_9);

          var currVal_10 = _co.feedbackError;

          _ck(_v, 41, 0, currVal_10);

          var currVal_11 = _co.feedbackSubmitting;

          _ck(_v, 44, 0, currVal_11);
        }, function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.monitor.performance.diagnostics.feedback.ask"));

          _ck(_v, 12, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.monitor.performance.diagnostics.feedback.thumbsUp"));

          _ck(_v, 15, 0, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _ck(_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.monitor.performance.diagnostics.feedback.thumbsDown"));

          _ck(_v, 26, 0, currVal_6);
        });
      }

      function View_PerformanceDiagnosticsFeedbackComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-performance-diagnostics-feedback", [], null, null, null, View_PerformanceDiagnosticsFeedbackComponent_0, RenderType_PerformanceDiagnosticsFeedbackComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _performance_diagnostics_feedback_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceDiagnosticsFeedbackComponent"], [_generated_performance_diagnostics_property_provider__WEBPACK_IMPORTED_MODULE_8__["PerformanceDiagnosticsPropertyProvider"]], null, null)], null, null);
      }

      var PerformanceDiagnosticsFeedbackComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-performance-diagnostics-feedback", _performance_diagnostics_feedback_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceDiagnosticsFeedbackComponent"], View_PerformanceDiagnosticsFeedbackComponent_Host_0, {
        selectedIssue: "selectedIssue",
        clusterRef: "clusterRef",
        transactionId: "transactionId"
      }, {
        feedbackSubmit: "feedbackSubmit"
      }, []);
      /***/

    },

    /***/
    "YOj4":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/model/single-issue-entity.data.ts ***!
      \********************************************************************************/

    /*! exports provided: SingleIssueEntity */

    /***/
    function YOj4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleIssueEntity", function () {
        return SingleIssueEntity;
      });
      /* harmony import */


      var _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/performance-object-type */
      "x6/S");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /**
       * Presentation object for SingleDiagnosticIssueEntity class. Used in the issues grid.
       */


      var SingleIssueEntity = /*#__PURE__*/function () {
        function SingleIssueEntity() {
          _classCallCheck(this, SingleIssueEntity);
        }

        _createClass(SingleIssueEntity, null, [{
          key: "create",
          value: function create(entity, // SingleDiagnosticIssueEntity
          entityRefIdToEntityRefDataMap, // A map containing entityRed id to entityRef data
          issue) {
            // Casting to two different types because the two interfaces
            // don't extend each other.
            var diagnosticIssue = entity;
            var singleIssue = entity;
            var result = new SingleIssueEntity();

            if (entityRefIdToEntityRefDataMap.hasOwnProperty(singleIssue.entityRefId)) {
              result.refData = entityRefIdToEntityRefDataMap[singleIssue.entityRefId];
              result.vsanUuid = result.refData.vsanUuid;
              result.icon = SingleIssueEntity.getIcon(result.refData);
              result.name = SingleIssueEntity.getEntityName(result.refData, result.vsanUuid);
              result.isEntityMissing = result.refData.isEntityMissing;
            }

            result.metric = singleIssue.metric;
            result.recommendation = diagnosticIssue.recommendation;
            result.parentIssue = issue;
            return result;
          }
        }, {
          key: "getIcon",
          value: function getIcon(refData) {
            var icon = "";

            if (refData.performanceObjectType == null) {
              return icon;
            }

            switch (refData.performanceObjectType) {
              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].cacheDisk:
                icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].VSAN_SSD_DISK_IMAGE;
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].capacityDisk:
                icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].VSAN_NON_SSD_DISK_IMAGE;
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].diskGroup:
                icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].DISK_GROUP_IMAGE;
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostBackend:
              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostVmConsumption:
                icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].HOST;
                break;
            }

            return icon;
          }
        }, {
          key: "getEntityName",
          value: function getEntityName(refData, vsanUuid) {
            var objectName;

            if (refData.performanceObjectType == null) {
              return refData.entityRefId;
            }

            switch (refData.performanceObjectType) {
              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostPnic:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingHostPnic", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.hostPnic", refData.managedObjectName, refData.objectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostVnic:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingHostVnic", vsanUuid);
                } else {
                  // The VNIC comes prefixed by its TCP layer
                  // https://opengrok.eng.vmware.com/source/xref/storage-main.perforce.1666/bora/vsan/pyvmodl/VsanPerformanceManager.py#1549
                  var vnicName = refData.objectName;

                  if (refData.objectName) {
                    vnicName = refData.objectName.split("|").pop();
                  }

                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.hostVnic", refData.managedObjectName, vnicName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostNet:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingHostNet", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.hostNet", refData.managedObjectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].virtualDisk:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingVmDisk", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.vmDisk", refData.managedObjectName, refData.objectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].cacheDisk:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingCacheDisk", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.cacheDisk", refData.managedObjectName, refData.objectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].capacityDisk:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingCapacityDisk", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.capacityDisk", refData.managedObjectName, refData.objectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].diskGroup:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingDiskGroup", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.diskGroup", refData.managedObjectName, refData.vsanUuid);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].clusterBackend:
                objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.vsanBackend");
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].clusterVmConsumption:
                objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.vsanVmConsumption");
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostBackend:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingHostVsanBackend", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.hostVsanBackend", refData.managedObjectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].hostVmConsumption:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingHostVmConsumption", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.hostVmConsumption", refData.managedObjectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].vm:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingVmVsanVmConsumption", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.vmVsanVmConsumption", refData.managedObjectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].vscsi:
                if (refData.isEntityMissing) {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.missingVscsi", vsanUuid);
                } else {
                  objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.entityType.vscsi", refData.managedObjectName, refData.objectName);
                }

                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].cmmds:
                objectName = refData.managedObjectName;
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].clomDiskStats:
                objectName = refData.managedObjectName;
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].clomHostStats:
                objectName = refData.managedObjectName;
                break;

              case _generated_performance_object_type__WEBPACK_IMPORTED_MODULE_0__["PerformanceObjectType"].clusterDomOwner:
                objectName = refData.managedObjectName;
                break;
            }

            if (!objectName) {
              objectName = refData.entityRefId;
            }

            if (refData.isEntityMissing) {
              objectName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.diagnostics.missingEntityFormat", objectName);
            }

            return objectName;
          }
        }]);

        return SingleIssueEntity;
      }();
      /***/

    },

    /***/
    "YceR":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/model/diagnostics-issue.data.ts ***!
      \******************************************************************************/

    /*! exports provided: DiagnosticIssue */

    /***/
    function YceR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiagnosticIssue", function () {
        return DiagnosticIssue;
      });
      /* harmony import */


      var _single_issue_entity_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-issue-entity.data */
      "YOj4");
      /* harmony import */


      var _aggregated_entity_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aggregated-entity.data */
      "P8Sg");
      /**
       * Presentation object for DiagnosticsException class. Used in the issues grid.
       */


      var DiagnosticIssue = /*#__PURE__*/function () {
        function DiagnosticIssue(diagnosticException, exceptionDefinition) {
          _classCallCheck(this, DiagnosticIssue);

          this.diagnosticException = diagnosticException;
          this.name = exceptionDefinition.message;
          this.description = exceptionDefinition.description;
          this.helpUrl = exceptionDefinition.exceptionUrl;
          this.issues = [];
        }

        _createClass(DiagnosticIssue, [{
          key: "addEntities",
          value: function addEntities(performanceEntityTypes, entityRefIdToEntityRefDataMap) {
            var _this6 = this;

            var issueEntities = [];
            this.diagnosticException.exceptionEntities.forEach(function (entity) {
              if ('aggregatedRefIds' in entity) {
                // AgregatedDiagnosticIssueEntity
                _this6.addAggregatedIssueEntity(entity, performanceEntityTypes, entityRefIdToEntityRefDataMap);
              } else {
                // SingleDiagnosticIssueEntity
                _this6.addSingleIssueEntity(entity, entityRefIdToEntityRefDataMap);
              }
            });
          }
        }, {
          key: "addAggregatedIssueEntity",
          value: function addAggregatedIssueEntity(entity, performanceEntityTypes, entityRefIdToEntityRefDataMap) {
            var aggregatedIssueEntity = entity;

            var aggregatedEntity = _aggregated_entity_data__WEBPACK_IMPORTED_MODULE_1__["AggregatedIssueEntity"].create(aggregatedIssueEntity, performanceEntityTypes, entityRefIdToEntityRefDataMap, this);

            if (aggregatedEntity) {
              this.issues.push(aggregatedEntity);
            }
          }
        }, {
          key: "addSingleIssueEntity",
          value: function addSingleIssueEntity(entity, entityRefIdToEntityRefDataMap) {
            var singleIssueEntity = entity;

            var singleEntity = _single_issue_entity_data__WEBPACK_IMPORTED_MODULE_0__["SingleIssueEntity"].create(singleIssueEntity, entityRefIdToEntityRefDataMap, this);

            if (singleEntity) {
              this.issues.push(singleEntity);
            }
          }
        }]);

        return DiagnosticIssue;
      }();
      /***/

    },

    /***/
    "aczy":
    /*!********************************************!*\
      !*** ./src/app/generated/feedback-spec.ts ***!
      \********************************************/

    /*! exports provided: FeedbackSpec */

    /***/
    function aczy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackSpec", function () {
        return FeedbackSpec;
      });

      var FeedbackSpec;

      (function (FeedbackSpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (transactionId, exceptionId, entityRefId) {
          return {
            transactionId: transactionId,
            exceptionId: exceptionId,
            entityRefId: entityRefId
          };
        };

        FeedbackSpec.Factory = Factory;
      })(FeedbackSpec || (FeedbackSpec = {})); //module FeedbackSpec

      /***/

    },

    /***/
    "as9e":
    /*!*************************************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/performance-diagnostics-feedback.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PerformanceDiagnosticsFeedbackComponent */

    /***/
    function as9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceDiagnosticsFeedbackComponent", function () {
        return PerformanceDiagnosticsFeedbackComponent;
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


      var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _generated_feedback_spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/feedback-spec */
      "aczy");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PerformanceDiagnosticsFeedbackComponent = /*#__PURE__*/function () {
        function PerformanceDiagnosticsFeedbackComponent(perfDiagnosticsProvider) {
          var _this7 = this;

          _classCallCheck(this, PerformanceDiagnosticsFeedbackComponent);

          this.perfDiagnosticsProvider = perfDiagnosticsProvider;
          this.feedbackSubmitting = false;
          this.feedbackError = null;
          this.feedbackSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          this.handleError = function (error) {
            _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].error(error);

            _this7.feedbackError = error;
            _this7.feedbackSubmitting = false;
          };
        }

        _createClass(PerformanceDiagnosticsFeedbackComponent, [{
          key: "selectedIssue",
          get: function get() {
            return this._selectedIssue;
          },
          set: function set(val) {
            if (this._selectedIssue === val) {
              return;
            }

            this.feedbackError = null;
            this._selectedIssue = val;
          }
        }, {
          key: "submitFeedback",
          value: function submitFeedback(feedbackValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var exceptionId, entityRefId, feedbackSpec;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.selectedIssue.feedback !== feedbackValue)) {
                        _context4.next = 16;
                        break;
                      }

                      this.feedbackSubmitting = true;
                      _context4.prev = 2;
                      exceptionId = this.selectedIssue.parentIssue.diagnosticException.exceptionId;
                      entityRefId = this.selectedIssue.refData.entityRefId;
                      feedbackSpec = _generated_feedback_spec__WEBPACK_IMPORTED_MODULE_3__["FeedbackSpec"].Factory.create(this.transactionId, exceptionId, entityRefId);
                      _context4.next = 8;
                      return this.perfDiagnosticsProvider.submitFeedbackForDiagnosisResult(this.clusterRef, feedbackSpec, feedbackValue);

                    case 8:
                      this.feedbackError = null;
                      this.feedbackSubmit.emit(feedbackValue);
                      this.feedbackSubmitting = false;
                      _context4.next = 16;
                      break;

                    case 13:
                      _context4.prev = 13;
                      _context4.t0 = _context4["catch"](2);
                      this.handleError(_util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].getString("vsan.cluster.monitor.performance.diagnostics.feedback.error"));

                    case 16:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[2, 13]]);
            }));
          }
        }]);

        return PerformanceDiagnosticsFeedbackComponent;
      }();
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
    "mLcX":
    /*!***************************************************!*\
      !*** ./src/app/generated/perf-diagnostic-type.ts ***!
      \***************************************************/

    /*! exports provided: PerfDiagnosticType */

    /***/
    function mLcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfDiagnosticType", function () {
        return PerfDiagnosticType;
      });

      var PerfDiagnosticType = /*@__PURE__*/function (PerfDiagnosticType) {
        PerfDiagnosticType["eval"] = "eval";
        PerfDiagnosticType["tput"] = "tput";
        PerfDiagnosticType["iops"] = "iops";
        PerfDiagnosticType["lat"] = "lat";
        return PerfDiagnosticType;
      }({});
      /***/

    },

    /***/
    "rQ8Y":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/performance-diagnostics/view/issues-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: IssuesListComponent */

    /***/
    function rQ8Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssuesListComponent", function () {
        return IssuesListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/component/datagrid/tree-datagrid-view */
      "IX96");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var IssuesListComponent = /*#__PURE__*/function (_common_component_dat) {
        _inherits(IssuesListComponent, _common_component_dat);

        var _super = _createSuper(IssuesListComponent);

        function IssuesListComponent() {
          var _this8;

          _classCallCheck(this, IssuesListComponent);

          _this8 = _super.call(this, "issues");
          _this8.selectIssue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this8;
        }

        _createClass(IssuesListComponent, [{
          key: "data",
          set: function set(data) {
            this.initData(data);
          }
        }, {
          key: "onRowSelected",
          value: function onRowSelected(target, event) {
            _get(_getPrototypeOf(IssuesListComponent.prototype), "selectTarget", this).call(this, target, event);

            this.selectIssue.emit(target.data);
          }
        }]);

        return IssuesListComponent;
      }(_common_component_datagrid_tree_datagrid_view__WEBPACK_IMPORTED_MODULE_1__["TreeDatagridView"]);
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
//# sourceMappingURL=111-es5.js.map