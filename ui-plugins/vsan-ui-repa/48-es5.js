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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48], {
    /***/
    "8UsJ":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/performance/model/expandable-perf-entity.ts ***!
      \******************************************************************/

    /*! exports provided: ExpandablePerfEntity */

    /***/
    function UsJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpandablePerfEntity", function () {
        return ExpandablePerfEntity;
      });
      /* harmony import */


      var _base_perf_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-perf-entity */
      "YGYr");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ExpandablePerfEntity = /*#__PURE__*/function (_base_perf_entity__WE) {
        _inherits(ExpandablePerfEntity, _base_perf_entity__WE);

        var _super = _createSuper(ExpandablePerfEntity);

        function ExpandablePerfEntity() {
          _classCallCheck(this, ExpandablePerfEntity);

          return _super.apply(this, arguments);
        }

        return _createClass(ExpandablePerfEntity);
      }(_base_perf_entity__WEBPACK_IMPORTED_MODULE_0__["BasePerfEntity"]);
      /***/

    },

    /***/
    "AWIs":
    /*!***********************************************************************************************!*\
      !*** ./src/app/vsan/performance/export/perf-chart-export-options-dialog.scss.shim.ngstyle.js ***!
      \***********************************************************************************************/

    /*! exports provided: styles */

    /***/
    function AWIs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.sub-entities-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.sub-entities-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .sub-entities-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.sub-entities-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.checkbox-container[_ngcontent-%COMP%] {\n  display: block;\n  -moz-column-count: 3;\n       column-count: 3;\n}\n.checkbox-container[_ngcontent-%COMP%]   .clr-form-control[_ngcontent-%COMP%] {\n  flex-direction: initial;\n  margin-bottom: 0.3rem;\n  margin-left: 0.15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS9leHBvcnQvcGVyZi1jaGFydC1leHBvcnQtb3B0aW9ucy1kaWFsb2cuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFjSDtBRThCRztFQUNHLGdDQUFBO0FGM0JOO0FFNkJHOztFQUdHLGdDQUFBO0FGNUJOO0FFOEJHO0VBQ0csOEJBQUE7QUY1Qk47QUFsQkE7RUFDRyxjQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0FBcUJIO0FBcEJHO0VBQ0csdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CR0NLO0FIcUJYIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS9leHBvcnQvcGVyZi1jaGFydC1leHBvcnQtb3B0aW9ucy1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIwIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHNcIjtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbn1cblxuLnN1Yi1lbnRpdGllcy1jb250YWluZXIge1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBjb2x1bW4tY291bnQ6IDM7XG4gICAuY2xyLWZvcm0tY29udHJvbCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuICAgICAgbWFyZ2luLWxlZnQ6ICR2c2FuLW91dGxpbmUtc2l6ZTtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "B+6k":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/performance/model/vm-disks-perf-entity.ts ***!
      \****************************************************************/

    /*! exports provided: VmDisksPerfEntity */

    /***/
    function B6k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VmDisksPerfEntity", function () {
        return VmDisksPerfEntity;
      });
      /* harmony import */


      var _base_perf_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-perf-entity */
      "YGYr");
      /* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VmDisksPerfEntity = /*#__PURE__*/function (_base_perf_entity__WE2) {
        _inherits(VmDisksPerfEntity, _base_perf_entity__WE2);

        var _super2 = _createSuper(VmDisksPerfEntity);

        function VmDisksPerfEntity() {
          _classCallCheck(this, VmDisksPerfEntity);

          return _super2.apply(this, arguments);
        }

        return _createClass(VmDisksPerfEntity);
      }(_base_perf_entity__WEBPACK_IMPORTED_MODULE_0__["BasePerfEntity"]);
      /***/

    },

    /***/
    "GCrU":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/performance/export/perf-chart-export-options-dialog.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PerfChartExportOptionsDialogComponent */

    /***/
    function GCrU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartExportOptionsDialogComponent", function () {
        return PerfChartExportOptionsDialogComponent;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _component_export_files_file_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/export/files/file-utils */
      "Ux+j");

      var PerfChartExportOptionsDialogComponent = /*@__PURE__*/function () {
        var PerfChartExportOptionsDialogComponent = /*#__PURE__*/function () {
          function PerfChartExportOptionsDialogComponent() {
            _classCallCheck(this, PerfChartExportOptionsDialogComponent);

            this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"];
            this.subEntities = new Map();
            this.graphs = new Map();
            this.showSubEntities = false;
            this.entityNames = new Set();
            this.graphNames = new Set();
          }

          _createClass(PerfChartExportOptionsDialogComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              var context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getModalContext();

              context.exportData.forEach(function (data) {
                if (data.subEntityName) {
                  _this.entityNames.add(data.subEntityName);

                  _this.subEntities.set(data.subEntityName, true);
                }

                _this.graphs.set(data.graphName, true);

                _this.graphNames.add(data.graphName);
              });
              this.showSubEntities = context.showSubEntities;

              if (this.showSubEntities) {
                _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].setModalDialogHeight(PerfChartExportOptionsDialogComponent.BIG_HEIGHT);
              }
            }
          }, {
            key: "onConfirm",
            value: function onConfirm() {
              var selectedSubEntities = new Set();
              this.subEntities.forEach(function (value, key) {
                if (value) {
                  selectedSubEntities.add(key);
                }
              });
              var selectedGraphs = new Set();
              this.graphs.forEach(function (value, key) {
                if (value) {
                  selectedGraphs.add(key);
                }
              });
              var result = {
                selectedSubEntities: Array.from(selectedSubEntities),
                selectedGraphs: Array.from(selectedGraphs)
              };

              _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].closeModalDialog(result);
            }
          }, {
            key: "escapeName",
            value: function escapeName(name) {
              return _component_export_files_file_utils__WEBPACK_IMPORTED_MODULE_1__["FileUtils"].escape(name);
            }
          }]);

          return PerfChartExportOptionsDialogComponent;
        }();

        PerfChartExportOptionsDialogComponent.BIG_HEIGHT = 400;
        return PerfChartExportOptionsDialogComponent;
      }();
      /***/

    },

    /***/
    "gRVR":
    /*!*************************************************************************************************!*\
      !*** ./src/app/vsan/performance/export/perf-chart-export-options-dialog.component.ngfactory.js ***!
      \*************************************************************************************************/

    /*! exports provided: RenderType_PerfChartExportOptionsDialogComponent, View_PerfChartExportOptionsDialogComponent_0, View_PerfChartExportOptionsDialogComponent_Host_0, PerfChartExportOptionsDialogComponentNgFactory */

    /***/
    function gRVR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerfChartExportOptionsDialogComponent", function () {
        return RenderType_PerfChartExportOptionsDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartExportOptionsDialogComponent_0", function () {
        return View_PerfChartExportOptionsDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartExportOptionsDialogComponent_Host_0", function () {
        return View_PerfChartExportOptionsDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartExportOptionsDialogComponentNgFactory", function () {
        return PerfChartExportOptionsDialogComponentNgFactory;
      });
      /* harmony import */


      var _perf_chart_export_options_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./perf-chart-export-options-dialog.scss.shim.ngstyle */
      "AWIs");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component.ngfactory */
      "0JAx");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component */
      "ACap");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _perf_chart_export_options_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./perf-chart-export-options-dialog.component */
      "GCrU");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerfChartExportOptionsDialogComponent = [_perf_chart_export_options_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerfChartExportOptionsDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_PerfChartExportOptionsDialogComponent,
        data: {}
      });

      function View_PerfChartExportOptionsDialogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 30, "clr-checkbox-container", [], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null], [1, "role", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrCheckboxContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrCheckboxContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 1228800, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckboxContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 2, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 3, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 4, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 5, {
          checkboxes: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](12, 0, null, 1, 17, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 6, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](18, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 19).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 19).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 24).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.subEntities.set(_v.context.$implicit, $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](24, 212992, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](26, 0, null, 1, 2, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](27, 212992, [[6, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 14, 0);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _co.escapeName(_v.context.$implicit), "");

          var currVal_15 = _co.subEntities.get(_v.context.$implicit);

          _ck(_v, 21, 0, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _co.escapeName(_v.context.$implicit), "");

          _ck(_v, 24, 0, currVal_16);

          _ck(_v, 27, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).addGrid();

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).role;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).toggle;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).toggle;

          _ck(_v, 12, 0, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassUntouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassTouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassPristine;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassDirty;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassValid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassInvalid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassPending;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 24).id;

          _ck(_v, 18, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 27).forAttr;

          _ck(_v, 26, 0, currVal_17);

          var currVal_18 = _v.context.$implicit;

          _ck(_v, 28, 0, currVal_18);
        });
      }

      function View_PerfChartExportOptionsDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 11, "div", [["class", "sub-entities-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 4, "div", [["class", "checkbox-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PerfChartExportOptionsDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.entityNames;

          _ck(_v, 9, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.perf.chart.exportOptions.selectVMDKs"));

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_PerfChartExportOptionsDialogComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 30, "clr-checkbox-container", [], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null], [1, "role", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrCheckboxContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrCheckboxContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 1228800, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckboxContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 7, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 8, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 9, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 10, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 11, {
          checkboxes: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](12, 0, null, 1, 17, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 12, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](18, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 19).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 19).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 24).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.graphs.set(_v.context.$implicit, $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](24, 212992, [[11, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](26, 0, null, 1, 2, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](27, 212992, [[12, 4], [7, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 14, 0);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _co.escapeName(_v.context.$implicit), "");

          var currVal_15 = _co.graphs.get(_v.context.$implicit);

          _ck(_v, 21, 0, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??inlineInterpolate"](1, "", _co.escapeName(_v.context.$implicit), "");

          _ck(_v, 24, 0, currVal_16);

          _ck(_v, 27, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).addGrid();

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5).role;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).toggle;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).toggle;

          _ck(_v, 12, 0, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassUntouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassTouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassPristine;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassDirty;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassValid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassInvalid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 23).ngClassPending;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 24).id;

          _ck(_v, 18, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 27).forAttr;

          _ck(_v, 26, 0, currVal_17);

          var currVal_18 = _v.context.$implicit;

          _ck(_v, 28, 0, currVal_18);
        });
      }

      function View_PerfChartExportOptionsDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 24, "vsan-edit-prompt", [], null, [[null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onConfirm" === en) {
            var pd_0 = _co.onConfirm() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_EditPrompt_0"], _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_EditPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"]
        }, {
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, 0, 18, "div", [["class", "dialog-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](9, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PerfChartExportOptionsDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](16, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](17, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](20, 0, null, null, 4, "div", [["class", "checkbox-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PerfChartExportOptionsDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.exportOptions.title"));

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 1, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.exportOptions.confirm.button"));

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_3 = _co.subEntities.size > 0 && _co.showSubEntities;

          _ck(_v, 14, 0, currVal_3);

          var currVal_5 = _co.graphNames;

          _ck(_v, 23, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.exportOptions.info"));

          _ck(_v, 10, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.perf.chart.exportOptions.selectMetrics"));

          _ck(_v, 17, 0, currVal_4);
        });
      }

      function View_PerfChartExportOptionsDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-perf-chart-export-options-dialog", [], null, null, null, View_PerfChartExportOptionsDialogComponent_0, RenderType_PerfChartExportOptionsDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 114688, null, 0, _perf_chart_export_options_dialog_component__WEBPACK_IMPORTED_MODULE_10__["PerfChartExportOptionsDialogComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PerfChartExportOptionsDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-perf-chart-export-options-dialog", _perf_chart_export_options_dialog_component__WEBPACK_IMPORTED_MODULE_10__["PerfChartExportOptionsDialogComponent"], View_PerfChartExportOptionsDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "lpuF":
    /*!************************************************************!*\
      !*** ./src/app/vsan/performance/model/host-disk-entity.ts ***!
      \************************************************************/

    /*! exports provided: HostDiskPerfEntity, DiskType */

    /***/
    function lpuF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HostDiskPerfEntity", function () {
        return HostDiskPerfEntity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskType", function () {
        return DiskType;
      });
      /* harmony import */


      var _base_perf_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-perf-entity */
      "YGYr");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HostDiskPerfEntity = /*#__PURE__*/function (_base_perf_entity__WE3) {
        _inherits(HostDiskPerfEntity, _base_perf_entity__WE3);

        var _super3 = _createSuper(HostDiskPerfEntity);

        function HostDiskPerfEntity() {
          _classCallCheck(this, HostDiskPerfEntity);

          return _super3.apply(this, arguments);
        }

        return _createClass(HostDiskPerfEntity);
      }(_base_perf_entity__WEBPACK_IMPORTED_MODULE_0__["BasePerfEntity"]);

      var DiskType = /*@__PURE__*/function (DiskType) {
        DiskType[DiskType["CACHE_DISK"] = 0] = "CACHE_DISK";
        DiskType[DiskType["CAPACITY_DISK"] = 1] = "CAPACITY_DISK";
        return DiskType;
      }({});
      /***/

    },

    /***/
    "lwrV":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/performance/util/perf-multi-entities-data-query.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: PerfMultiEntitesDataQueryService */

    /***/
    function lwrV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfMultiEntitesDataQueryService", function () {
        return PerfMultiEntitesDataQueryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../model/base-perf-entity */
      "YGYr");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _model_host_disk_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../model/host-disk-entity */
      "lpuF");
      /* harmony import */


      var _model_expandable_perf_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../model/expandable-perf-entity */
      "8UsJ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../model/nested-perf-entity */
      "ZZcQ");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../model/perf-monitor-view-type.model */
      "NvCx");
      /* harmony import */


      var _model_vm_disks_perf_entity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../model/vm-disks-perf-entity */
      "B+6k");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /**
       * The wrapper object of VsanPerfPropertyProvider,
       * use this object to transform each response object of the perf multi-entities requests to BasePerfEntity[]
       */


      var PerfMultiEntitesDataQueryService = /*#__PURE__*/function () {
        function PerfMultiEntitesDataQueryService(perfProvider, iscsiTargetProvider, ioInsightService, diskManagementService) {
          var _this2 = this;

          _classCallCheck(this, PerfMultiEntitesDataQueryService);

          this.perfProvider = perfProvider;
          this.iscsiTargetProvider = iscsiTargetProvider;
          this.ioInsightService = ioInsightService;
          this.diskManagementService = diskManagementService;

          this.parseIscsiTargets = function (iscsiTargets) {
            if (iscsiTargets === null || iscsiTargets.length === 0) {
              return [];
            }

            return iscsiTargets.filter(function (item) {
              return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].isEmpty(item.luns);
            }).map(function (item) {
              var target = new _model_expandable_perf_entity__WEBPACK_IMPORTED_MODULE_4__["ExpandablePerfEntity"]();
              target.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].CLUSTER_ISCSI_TARGET_ENTITY;
              target.entityName = item.alias;
              target.entityUuid = item.alias;

              if (item.luns) {
                target.children = item.luns.map(_this2.parseIscsiLun);
              }

              return target;
            });
          };

          this.parseIscsiLun = function (lunItem) {
            var lun = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
            lun.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].CLUSTER_ISCSI_LUN_ENTITY;
            lun.entityName = lunItem.alias ? lunItem.alias : _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.iscsi.performance.lun.name", lunItem.lunId);
            lun.entityUuid = lunItem.targetAlias + "|" + lunItem.lunId;
            return lun;
          };

          this.parseVirtualMachinesDiskData = function (vmDisksData) {
            var result = [];
            vmDisksData.forEach(function (diskData) {
              var vmDisksPerfEntity = new _model_vm_disks_perf_entity__WEBPACK_IMPORTED_MODULE_9__["VmDisksPerfEntity"]();
              vmDisksPerfEntity.entityName = diskData.entityLabelName;

              var vSCSIcontrollers = _this2.parseSCSIDiskData(diskData);

              vmDisksPerfEntity.entityUuid = diskData.vmUuid + diskData.entityLabelName;
              vmDisksPerfEntity.nestedPerfEntity = Array.from(vSCSIcontrollers.values());
              vmDisksPerfEntity.nestedPerfEntity.forEach(function (perfEntity) {
                perfEntity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].IO_INSIGHT_ENTITY;
              });
              result.push(vmDisksPerfEntity);
            });
            return result;
          };

          this.parseVirtualDisk = function (vmDisksData, isIoInsightSupported) {
            if (!vmDisksData.virtualDisks) {
              return [];
            }

            var vSCSIcontrollers = _this2.parseSCSIDiskData(vmDisksData);

            return vmDisksData.virtualDisks.map(function (disk) {
              var virtualDisk = _this2.createVirtualDiskEntity(disk);

              var controllerKey = "[" + disk.datastoreName + "] " + disk.vmdkPath;
              virtualDisk.combinedEntity = vSCSIcontrollers.get(controllerKey); // request IOInsight metrics if the feature is supported

              if (isIoInsightSupported) {
                virtualDisk.additionalConfigSpecId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].IO_INSIGHT_ENTITY;
              }

              return virtualDisk;
            });
          };

          this.createVirtualDiskEntity = function (disk) {
            var virtualDisk = new _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_6__["NestedPerfEntity"]();
            virtualDisk.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].VM_VIRTUAL_DISK_ENTITY;
            virtualDisk.vmdk = disk.vmdkPath;
            virtualDisk.entityUuid = disk.datastorePath + disk.vmdkPath;
            virtualDisk.entityName = disk.diskName;
            virtualDisk.icon = disk.icon;
            return virtualDisk;
          };

          this.parsePhysicalAdapters = function (adapters) {
            if (adapters === null || adapters.length === 0) {
              return [];
            }

            return adapters.map(function (item) {
              var adapter = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
              adapter.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_PHYSICAL_ADAPTER_ENTITY;
              adapter.entityName = item.deviceName;
              adapter.entityUuid = [item.hostUuid, item.deviceName].join("|");
              return adapter;
            });
          };

          this.parseVnics = function (adapters, isRdtChecksumSupported) {
            if (adapters === null || adapters.length === 0) {
              return [];
            }

            var vnicAggregationEntity;

            if (isRdtChecksumSupported) {
              vnicAggregationEntity = new _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_6__["NestedPerfEntity"]();
              vnicAggregationEntity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_NETWORK_ENTITY;
              vnicAggregationEntity.entityName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.virtualAdapter.title"); // the adapters belong to the same host, simply use the hostUuid from the first element.

              vnicAggregationEntity.entityUuid = adapters[0].hostUuid;
              vnicAggregationEntity.combinedEntity = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
              vnicAggregationEntity.combinedEntity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_RDT_NET_ENTITY;
              vnicAggregationEntity.combinedEntity.entityUuid = adapters[0].hostUuid;
              vnicAggregationEntity.combinedEntity.entityName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.virtualAdapter.title");
            } else {
              vnicAggregationEntity = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
              vnicAggregationEntity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_NETWORK_ENTITY;
              vnicAggregationEntity.entityName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.virtualAdapter.title"); // the adapters belong to the same host, simply use the hostUuid from the first element.

              vnicAggregationEntity.entityUuid = adapters[0].hostUuid;
            }

            var vmks = adapters.map(function (item) {
              var adapter = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
              adapter.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_VIRTUAL_ADAPTER_ENTITY;
              adapter.entityName = item.deviceName;
              adapter.entityUuid = [item.hostUuid, item.netStackInstanceKey, item.deviceName].join("|");
              return adapter;
            }); // put the aggregation at the top of the vmk adapters

            vmks.unshift(vnicAggregationEntity);
            return vmks;
          };

          this.parseDiskGroups = function (diskGroups) {
            if (diskGroups === null || diskGroups.length === 0) {
              return [];
            }

            return diskGroups.map(function (item) {
              var group = new _model_expandable_perf_entity__WEBPACK_IMPORTED_MODULE_4__["ExpandablePerfEntity"]();
              group.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_DISK_GROUP_ENTITY;
              group.entityName = item.diskGroupName;
              group.entityUuid = item.diskGroupUuid;
              group.children = _this2.getDisksFromDiskGroup(item);
              return group;
            });
          };

          this.getDisksFromDiskGroup = function (diskGroup) {
            var disks = [];

            if (!diskGroup) {
              return disks;
            }
            /**
             * every disk group has only one cache disk
             */


            if (diskGroup.cacheDisk) {
              var cacheDisk = new _model_host_disk_entity__WEBPACK_IMPORTED_MODULE_3__["HostDiskPerfEntity"]();
              cacheDisk.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_CACHE_DISK_ENTITY;
              cacheDisk.entityUuid = diskGroup.cacheDisk.diskUuid;
              cacheDisk.entityName = diskGroup.cacheDisk.diskName;
              cacheDisk.diskType = _model_host_disk_entity__WEBPACK_IMPORTED_MODULE_3__["DiskType"].CACHE_DISK;
              disks.push(cacheDisk);
            }
            /**
             * disk group has several capacity disks
             */


            if (diskGroup.capacityDisks && diskGroup.capacityDisks.length) {
              diskGroup.capacityDisks.forEach(function (capacityDisk) {
                var disk = new _model_host_disk_entity__WEBPACK_IMPORTED_MODULE_3__["HostDiskPerfEntity"]();
                disk.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].HOST_CAPACITY_DISK_ENTITY;
                disk.entityUuid = capacityDisk.diskUuid;
                disk.entityName = capacityDisk.diskName;
                disk.diskType = _model_host_disk_entity__WEBPACK_IMPORTED_MODULE_3__["DiskType"].CAPACITY_DISK;
                disks.push(disk);
              });
            }

            return disks;
          };
        }

        _createClass(PerfMultiEntitesDataQueryService, [{
          key: "queryEntitiesData",
          value: function queryEntitiesData(view, instance, requestIoInsightData, isRdtChecksumSupported, isVsanMaxEnabled) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      response = null;
                      _context.t0 = view;
                      _context.next = _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].CLUSTER_ISCSI ? 5 : _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].HOST_DISK ? 9 : _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].HOST_PHYSICAL_ADAPTER ? 12 : _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].HOST_VIRTUAL_ADAPTER ? 16 : _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].VM_VIRTUAL_DISK ? 20 : _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].CLUSTER_IO_INSIGHT ? 24 : _context.t0 === _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_8__["PerfMonitorViewType"].HOST_IO_INSIGHT ? 24 : 28;
                      break;

                    case 5:
                      _context.next = 7;
                      return this.iscsiTargetProvider.getIscsiTargets(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 7:
                      response = _context.sent;
                      return _context.abrupt("return", this.parseIscsiTargets(response));

                    case 9:
                      _context.next = 11;
                      return this.getDiskMappings(isVsanMaxEnabled);

                    case 11:
                      return _context.abrupt("return", _context.sent);

                    case 12:
                      _context.next = 14;
                      return this.perfProvider.getHostPhysicalAdapters(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 14:
                      response = _context.sent;
                      return _context.abrupt("return", this.parsePhysicalAdapters(response));

                    case 16:
                      _context.next = 18;
                      return this.perfProvider.getHostVirtualAdapters(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 18:
                      response = _context.sent;
                      return _context.abrupt("return", this.parseVnics(response, isRdtChecksumSupported));

                    case 20:
                      _context.next = 22;
                      return this.perfProvider.getVirtualMachineDiskData(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject, true);

                    case 22:
                      response = _context.sent;
                      return _context.abrupt("return", this.parseVirtualDisk(response, requestIoInsightData));

                    case 24:
                      _context.next = 26;
                      return this.ioInsightService.getVirtualMachinesDiskData(instance, _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 26:
                      response = _context.sent;
                      return _context.abrupt("return", this.parseVirtualMachinesDiskData(response));

                    case 28:
                      throw new Error("Unsupported multi-entities view detect in method queryEntitiesData(): " + view);

                    case 29:
                      _context.next = 34;
                      break;

                    case 31:
                      _context.prev = 31;
                      _context.t1 = _context["catch"](0);

                      _util_logger__WEBPACK_IMPORTED_MODULE_10__["Logger"].error("Unable to fetch perf entities.", _context.t1);

                    case 34:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 31]]);
            }));
          }
        }, {
          key: "parseSCSIDiskData",
          value: function parseSCSIDiskData(vmDisksData) {
            var vSCSIcontrollers = new Map();

            if (!vmDisksData.vscsiEntities) {
              return vSCSIcontrollers;
            }

            var vmUuid = vmDisksData.vmUuid;
            vmDisksData.vscsiEntities.forEach(function (entity) {
              var vscsi = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
              vscsi.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].VM_VIRTUAL_SCSI_ENTITY;
              vscsi.entityName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.vm.performance.virtualdisk.name", entity.busId, entity.position);
              vscsi.entityLabelName = entity.deviceName + " (" + vscsi.entityName + ")";
              vscsi.entityUuid = vmUuid + "|" + vscsi.entityName;
              vSCSIcontrollers.set(entity.vmdkName, vscsi);
            });
            return vSCSIcontrollers;
          }
        }, {
          key: "getDiskMappings",
          value: function getDiskMappings(isVsanMaxEnabled) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!isVsanMaxEnabled) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.t0 = this;
                      _context2.next = 4;
                      return this.diskManagementService.getSingleTierDisks(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 4:
                      _context2.t1 = _context2.sent;
                      return _context2.abrupt("return", _context2.t0.parseSingleTierDisks.call(_context2.t0, _context2.t1));

                    case 6:
                      _context2.t2 = this;
                      _context2.next = 9;
                      return this.diskManagementService.getDiskMappings(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 9:
                      _context2.t3 = _context2.sent;
                      return _context2.abrupt("return", _context2.t2.parseDiskGroups.call(_context2.t2, _context2.t3));

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "parseSingleTierDisks",
          value: function parseSingleTierDisks(disks) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].isEmpty(disks)) {
              return [];
            }

            return disks.map(function (item) {
              var entity = new _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_6__["NestedPerfEntity"]();
              entity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].VSAN_MAX_DISK_LSOM;
              entity.entityUuid = item.diskUuid;
              entity.entityName = item.diskName;
              entity.combinedEntity = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_1__["BasePerfEntity"]();
              entity.combinedEntity.entityId = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_7__["PerfChartDataConstants"].VSAN_MAX_DISK_SCSIFW;
              entity.combinedEntity.entityUuid = item.diskUuid;
              entity.combinedEntity.entityName = item.diskName;
              return entity;
            });
          }
        }]);

        return PerfMultiEntitesDataQueryService;
      }();
      /***/

    },

    /***/
    "qBAd":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/performance/performance-common.module.ts ***!
      \***************************************************************/

    /*! exports provided: PerformanceCommonModule */

    /***/
    function qBAd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceCommonModule", function () {
        return PerformanceCommonModule;
      });
      /* harmony import */


      var _export_perf_chart_export_options_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./export/perf-chart-export-options-dialog.component */
      "GCrU");

      var performanceRoutes = [{
        path: "exportOptions",
        component: _export_perf_chart_export_options_dialog_component__WEBPACK_IMPORTED_MODULE_0__["PerfChartExportOptionsDialogComponent"]
      }];

      var PerformanceCommonModule = /*#__PURE__*/_createClass(function PerformanceCommonModule() {
        _classCallCheck(this, PerformanceCommonModule);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=48-es5.js.map