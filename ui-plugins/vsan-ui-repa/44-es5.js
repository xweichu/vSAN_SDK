(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44], {
    /***/
    "++CK":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-flat.scss.shim.ngstyle.js ***!
      \*****************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function CK(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  position: relative;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.wide-column[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n.medium-column[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.placement-type[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: visible;\n}\n.raid-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-left: 0.6rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3BsYWNlbWVudC1kZXRhaWxzL3BsYWNlbWVudC1kZXRhaWxzLWZsYXQuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWNIO0FFNkJHO0VBQ0csZ0NBQUE7QUYzQk47QUU2Qkc7O0VBR0csZ0NBQUE7QUY1Qk47QUU4Qkc7RUFDRyw4QkFBQTtBRjVCTjtBQXBCQTtFQUNHLGdCQUFBO0FBdUJIO0FBcEJBO0VBQ0csZ0JBQUE7QUF1Qkg7QUFwQkE7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdUJIO0FBcEJBO0VBQ0csbUJBQUE7RUFDQSxtQkdYTztFSFlQLGdCR3lHMEI7QUhsRjdCIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3BsYWNlbWVudC1kZXRhaWxzL3BsYWNlbWVudC1kZXRhaWxzLWZsYXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIwIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi53aWRlLWNvbHVtbiB7XG4gICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWVkaXVtLWNvbHVtbiB7XG4gICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4ucGxhY2VtZW50LXR5cGUge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5yYWlkLWxhYmVsIHtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICBtYXJnaW4tbGVmdDogJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "/vX8":
    /*!*************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/pipe/component-state-icon-class.pipe.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComponentStateIconClassPipe */

    /***/
    function vX8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentStateIconClassPipe", function () {
        return ComponentStateIconClassPipe;
      });
      /* harmony import */


      var _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-component-state */
      "vCtO");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");

      var ComponentStateIconClassPipe = /*#__PURE__*/function () {
        function ComponentStateIconClassPipe() {
          _classCallCheck(this, ComponentStateIconClassPipe);
        }

        _createClass(ComponentStateIconClassPipe, [{
          key: "transform",
          value: function transform(state) {
            switch (state) {
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ACTIVE:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SUCCESS_ICON_CLASS;

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ACTIVE_STALE:
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ABSENT:
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ABSENT_RESYNC:
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].RECONFIG:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_ICON_CLASS;

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].DEGRADED:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_ICON_CLASS;

              default:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_HIGHLIGHT_ICON_CLASS;
            }
          }
        }]);

        return ComponentStateIconClassPipe;
      }();
      /***/

    },

    /***/
    "6TUJ":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-path.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PlacementDetailsPathComponent */

    /***/
    function TUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsPathComponent", function () {
        return PlacementDetailsPathComponent;
      });
      /* harmony import */


      var _generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/display-object-type */
      "YNij");

      var PlacementDetailsPathComponent = /*#__PURE__*/function () {
        function PlacementDetailsPathComponent() {
          _classCallCheck(this, PlacementDetailsPathComponent);

          this.isTooltipVisible = true;
        }

        _createClass(PlacementDetailsPathComponent, [{
          key: "getIsNoPermissionsVm",
          value: function getIsNoPermissionsVm(item) {
            return item.vmRef !== null && item.type.displayType === _generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].VM && !item.hasVmReadPermissions;
          }
        }]);

        return PlacementDetailsPathComponent;
      }();
      /***/

    },

    /***/
    "91rh":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/model/object-placement.ts ***!
      \***********************************************************************************/

    /*! exports provided: ObjectPlacement */

    /***/
    function rh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectPlacement", function () {
        return ObjectPlacement;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ObjectPlacement = /*#__PURE__*/function () {
        function ObjectPlacement(datastoreType) {
          _classCallCheck(this, ObjectPlacement);

          this.datastoreType = datastoreType;
        }

        _createClass(ObjectPlacement, [{
          key: "getNextLevelComponents",
          value: function getNextLevelComponents(placement) {
            var _this = this;

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(placement.children)) {
              return [placement];
            }

            var levelComponents = [];
            placement.children.forEach(function (child) {
              levelComponents.push.apply(levelComponents, _toConsumableArray(_this.getNextLevelComponents(child)));
            });
            return levelComponents;
          }
        }]);

        return ObjectPlacement;
      }();
      /***/

    },

    /***/
    "AsUN":
    /*!******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/physical-placement-property-box.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: PhysicalPlacementPropertyBoxComponent */

    /***/
    function AsUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhysicalPlacementPropertyBoxComponent", function () {
        return PhysicalPlacementPropertyBoxComponent;
      });
      /* harmony import */


      var _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-component-state */
      "vCtO");
      /* harmony import */


      var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @navigation/navigation.service */
      "Qw2S");

      var PhysicalPlacementPropertyBoxComponent = /*#__PURE__*/function () {
        function PhysicalPlacementPropertyBoxComponent(navigationService) {
          _classCallCheck(this, PhysicalPlacementPropertyBoxComponent);

          this.navigationService = navigationService;
          this.allowNavigation = false;
        }

        _createClass(PhysicalPlacementPropertyBoxComponent, [{
          key: "navigateToHost",
          value: function navigateToHost(hostRef) {
            this.navigationService.navigateTo(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].HOST_SUMMARY, hostRef);
          }
        }, {
          key: "componentStateLabelKey",
          value: function componentStateLabelKey(state) {
            switch (state) {
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ACTIVE:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.active";

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ACTIVE_STALE:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.activeStale";

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ABSENT:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.absent";

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ABSENT_RESYNC:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.absentResync";

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].DEGRADED:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.degraded";

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].RECONFIG:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.reconfig";

              default:
                return "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.unknown";
            }
          }
        }]);

        return PhysicalPlacementPropertyBoxComponent;
      }();
      /***/

    },

    /***/
    "EfTe":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-path.scss.shim.ngstyle.js ***!
      \*****************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function EfTe(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n}\n.path[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.path[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.path[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.path[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.path[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.path[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.path[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.path[_ngcontent-%COMP%]     .path-label {\n  max-width: 12.5rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3BsYWNlbWVudC1kZXRhaWxzL3BsYWNlbWVudC1kZXRhaWxzLXBhdGguc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLG9CQUFBO0VBQ0Esc0JBQUE7QUFjSDtBQVhBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0FBY0g7QUV3Q0c7RUFDSywrQkFBQTtBRnRDUjtBRXdDRztFQUlHLCtCQUFBO0FGekNOO0FFMENNO0VBQ0csNEJBQUE7QUZ4Q1Q7QUUyQ0c7RUFFRywrQkFBQTtBRjFDTjtBRTRDTTtFQUNHLDRCQUFBO0FGMUNUO0FFNkNHO0VBQ0csNkJBQUE7QUYzQ047QUE3Qkc7RUFDRyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQStCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9wbGFjZW1lbnQtZGV0YWlscy9wbGFjZW1lbnQtZGV0YWlscy1wYXRoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGF0aCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZygkdnNhbi1lbGVtZW50LXNwYWNpbmcvMik7XG5cbiAgIDo6bmctZGVlcCAucGF0aC1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyLjVyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "Iagu":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-path.component.ngfactory.js ***!
      \*******************************************************************************************************/

    /*! exports provided: RenderType_PlacementDetailsPathComponent, View_PlacementDetailsPathComponent_0, View_PlacementDetailsPathComponent_Host_0, PlacementDetailsPathComponentNgFactory */

    /***/
    function Iagu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PlacementDetailsPathComponent", function () {
        return RenderType_PlacementDetailsPathComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsPathComponent_0", function () {
        return View_PlacementDetailsPathComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsPathComponent_Host_0", function () {
        return View_PlacementDetailsPathComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsPathComponentNgFactory", function () {
        return PlacementDetailsPathComponentNgFactory;
      });
      /* harmony import */


      var _placement_details_path_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./placement-details-path.scss.shim.ngstyle */
      "EfTe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _virtual_objects_table_vm_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../virtual-objects-table/vm-cell.component.ngfactory */
      "y7Cl");
      /* harmony import */


      var _virtual_objects_table_vm_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../virtual-objects-table/vm-cell.component */
      "hsFi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _placement_details_path_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./placement-details-path.component */
      "6TUJ");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PlacementDetailsPathComponent = [_placement_details_path_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PlacementDetailsPathComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PlacementDetailsPathComponent,
        data: {}
      });

      function View_PlacementDetailsPathComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var currVal_0 = "caret right";

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PlacementDetailsPathComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "vsan-vm-cell", [], null, null, null, _virtual_objects_table_vm_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_VsanVmCell_0"], _virtual_objects_table_vm_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_VsanVmCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _virtual_objects_table_vm_cell_component__WEBPACK_IMPORTED_MODULE_5__["VsanVmCell"], [], {
          item: [0, "item"],
          isLink: [1, "isLink"],
          isTooltipVisible: [2, "isTooltipVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsPathComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit;
          var currVal_1 = false;
          var currVal_2 = _co.isTooltipVisible;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _v.context.index != _co.path.length - 1;

          _ck(_v, 7, 0, currVal_3);
        }, null);
      }

      function View_PlacementDetailsPathComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "path"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsPathComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.path;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsPathComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsPathComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.path;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsPathComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "virtual-objects-placement-details-path", [], null, null, null, View_PlacementDetailsPathComponent_0, RenderType_PlacementDetailsPathComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _placement_details_path_component__WEBPACK_IMPORTED_MODULE_7__["PlacementDetailsPathComponent"], [], null, null)], null, null);
      }

      var PlacementDetailsPathComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("virtual-objects-placement-details-path", _placement_details_path_component__WEBPACK_IMPORTED_MODULE_7__["PlacementDetailsPathComponent"], View_PlacementDetailsPathComponent_Host_0, {
        path: "path",
        isTooltipVisible: "isTooltipVisible"
      }, {}, []);
      /***/

    },

    /***/
    "PYpP":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-util.ts ***!
      \***********************************************************************************/

    /*! exports provided: PlacementDetailsUtil */

    /***/
    function PYpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsUtil", function () {
        return PlacementDetailsUtil;
      });
      /* harmony import */


      var _component_placement_details_model_managed_storage_object_placement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/placement-details/model/managed-storage-object-placement */
      "mcSG");
      /* harmony import */


      var _component_placement_details_model_vsan_object_placement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/placement-details/model/vsan-object-placement */
      "pK8m");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PlacementDetailsUtil = /*#__PURE__*/function () {
        function PlacementDetailsUtil() {
          _classCallCheck(this, PlacementDetailsUtil);
        }

        _createClass(PlacementDetailsUtil, null, [{
          key: "getPlacement",
          value: function getPlacement(uuid, components, virtualObjects, getPath) {
            var datastoreType = PlacementDetailsUtil.getPlacementsDatastoreType(components);

            switch (datastoreType) {
              case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN:
                var raidConfig = PlacementDetailsUtil.mergeSingleRaidConfig(components);
                return new _component_placement_details_model_vsan_object_placement__WEBPACK_IMPORTED_MODULE_1__["VsanObjectPlacement"](uuid, getPath(uuid), raidConfig, components);

              case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN_DIRECT:
                var iconId = PlacementDetailsUtil.getVirtualObjectByUid(components[0], virtualObjects).iconId;
                var label = components[0].label;
                return new _component_placement_details_model_managed_storage_object_placement__WEBPACK_IMPORTED_MODULE_0__["ManagedStorageObjectPlacement"](iconId, label, null, components[0], datastoreType);

              case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].PMEM:
                return new _component_placement_details_model_managed_storage_object_placement__WEBPACK_IMPORTED_MODULE_0__["ManagedStorageObjectPlacement"](null, null, getPath(uuid), components[0], datastoreType);
            }
          }
        }, {
          key: "getGroupUuid",
          value: function getGroupUuid(placement, isVsanMaxEnabled) {
            if (placement.datastoreType !== _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN) {
              return placement.host.nodeUuid + "_" + placement.datastoreType.toString();
            }

            return isVsanMaxEnabled ? placement.capacityDisk.nodeUuid : placement.cacheDisk.nodeUuid;
          }
        }, {
          key: "getPlacementsDatastoreType",
          value: function getPlacementsDatastoreType(placements) {
            if (placements.length > 1) {
              return _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN;
            }

            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].isEmpty(placements[0].children)) {
              return PlacementDetailsUtil.getPlacementsDatastoreType(placements[0].children);
            }

            return placements[0].datastoreType;
          }
          /**
           * Looks through the placement model and if only a single RAID config is found,
           * its children are flattened in the top level models to avoid unnecessary
           * expanding the single item.
           * Returns the raid config label if a single model is found or null in all other cases.
           */

        }, {
          key: "mergeSingleRaidConfig",
          value: function mergeSingleRaidConfig(models) {
            var configType;
            var raidIdx = -1;

            for (var i = 0; i < models.length; i++) {
              if (models[i].children) {
                if (raidIdx !== -1) {
                  // more than one RAID config, show as is
                  raidIdx = -1;
                  break;
                } else {
                  raidIdx = i;
                }
              }
            }

            if (raidIdx !== -1) {
              // Only 1 RAID config
              configType = models[raidIdx].label;
              models.splice.apply(models, [raidIdx, 1].concat(_toConsumableArray(models[raidIdx].children)));
            }

            return configType;
          }
        }, {
          key: "getVirtualObjectByUid",
          value: function getVirtualObjectByUid(placement, virtualObjects) {
            return virtualObjects.find(function (vo) {
              return vo.uid === placement.nodeUuid;
            });
          }
        }]);

        return PlacementDetailsUtil;
      }();
      /***/

    },

    /***/
    "a51F":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-flat.component.ngfactory.js ***!
      \*******************************************************************************************************/

    /*! exports provided: RenderType_PlacementDetailsFlatComponent, View_PlacementDetailsFlatComponent_0, View_PlacementDetailsFlatComponent_Host_0, PlacementDetailsFlatComponentNgFactory */

    /***/
    function a51F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PlacementDetailsFlatComponent", function () {
        return RenderType_PlacementDetailsFlatComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsFlatComponent_0", function () {
        return View_PlacementDetailsFlatComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsFlatComponent_Host_0", function () {
        return View_PlacementDetailsFlatComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsFlatComponentNgFactory", function () {
        return PlacementDetailsFlatComponentNgFactory;
      });
      /* harmony import */


      var _placement_details_flat_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./placement-details-flat.scss.shim.ngstyle */
      "++CK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component.ngfactory */
      "2CYb");
      /* harmony import */


      var _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component */
      "8Y4q");
      /* harmony import */


      var _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./placement-details-path.component.ngfactory */
      "Iagu");
      /* harmony import */


      var _placement_details_path_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./placement-details-path.component */
      "6TUJ");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./physical-placement-property-box.component.ngfactory */
      "lxEh");
      /* harmony import */


      var _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./physical-placement-property-box.component */
      "AsUN");
      /* harmony import */


      var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _placement_details_flat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./placement-details-flat.component */
      "pOAa");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PlacementDetailsFlatComponent = [_placement_details_flat_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PlacementDetailsFlatComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PlacementDetailsFlatComponent,
        data: {}
      });

      function View_PlacementDetailsFlatComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.type"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.componentState"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.host"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.faultDomain"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.cacheDisk"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 13, "clr-dg-column", [["class", "wide-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);

          var currVal_2 = _ck(_v, 12, 0, false);

          _ck(_v, 11, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_PlacementDetailsFlatComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.cacheDiskUUID"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 13, "clr-dg-column", [["class", "wide-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_2 = _ck(_v, 12, 0, _co.reducedColumns);

          _ck(_v, 11, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_PlacementDetailsFlatComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getDiskColumnLabel();

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getDiskUUIDColumnLabel();

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-expand", [], null, null, null, _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TreeExpanderComponent_0"], _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TreeExpanderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_6__["TreeExpanderComponent"], [], {
          row: [0, "row"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsFlatComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "raid-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                  (", ")\n               "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.data.raidConfig;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "virtual-objects-placement-details-path", [], null, null, null, _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PlacementDetailsPathComponent_0"], _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PlacementDetailsPathComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _placement_details_path_component__WEBPACK_IMPORTED_MODULE_8__["PlacementDetailsPathComponent"], [], {
          path: [0, "path"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.path;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.parent.context.$implicit.data.raidConfig;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PlacementDetailsFlatComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.data.iconId;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.iconId;

          _ck(_v, 3, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _v.parent.context.$implicit.data.label;

          _ck(_v, 6, 0, currVal_1);
        });
      }

      function View_PlacementDetailsFlatComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "physical-placement-property-box", [], null, null, null, _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PhysicalPlacementPropertyBoxComponent_0"], _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PhysicalPlacementPropertyBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__["PhysicalPlacementPropertyBoxComponent"], [_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]], {
          model: [0, "model"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsFlatComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "physical-placement-property-box", [], null, null, null, _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PhysicalPlacementPropertyBoxComponent_0"], _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PhysicalPlacementPropertyBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__["PhysicalPlacementPropertyBoxComponent"], [_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]], {
          model: [0, "model"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.host;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsFlatComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.host.faultDomain;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "physical-placement-property-box", [], null, null, null, _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PhysicalPlacementPropertyBoxComponent_0"], _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PhysicalPlacementPropertyBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__["PhysicalPlacementPropertyBoxComponent"], [_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]], {
          model: [0, "model"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.data.cacheDisk;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsFlatComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 9, "clr-dg-cell", [["class", "wide-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _v.parent.context.$implicit.data.cacheDisk;

          _ck(_v, 8, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_PlacementDetailsFlatComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.data.cacheDisk.nodeUuid;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 9, "clr-dg-cell", [["class", "wide-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _v.parent.context.$implicit.data.cacheDisk;

          _ck(_v, 8, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_PlacementDetailsFlatComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "physical-placement-property-box", [], null, null, null, _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PhysicalPlacementPropertyBoxComponent_0"], _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PhysicalPlacementPropertyBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__["PhysicalPlacementPropertyBoxComponent"], [_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]], {
          model: [0, "model"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.capacityDisk;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PlacementDetailsFlatComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.capacityDisk.nodeUuid;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsFlatComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 91, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 18, "clr-dg-cell", [["class", "wide-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], {
          copyToClipboard: [0, "copyToClipboard"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 10, "div", [["class", "placement-type"]], [[1, "title", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 16777216, null, 2, 9, "clr-dg-cell", [["class", "medium-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 16777216, null, 2, 9, "clr-dg-cell", [["class", "medium-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 16777216, null, 2, 9, "clr-dg-cell", [["class", "medium-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_PlacementDetailsFlatComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_PlacementDetailsFlatComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 16777216, null, 2, 9, "clr-dg-cell", [["class", "wide-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 16777216, null, 2, 9, "clr-dg-cell", [["class", "wide-column"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 114688, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 147456, [[16, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_14__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlacementDetailsFlatComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _v.context.$implicit.data;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          var currVal_9 = false;

          _ck(_v, 16, 0, currVal_9);

          var currVal_11 = _co.isExpandable(_v.context.$implicit);

          _ck(_v, 21, 0, currVal_11);

          var currVal_12 = _v.context.$implicit.data.path;

          _ck(_v, 24, 0, currVal_12);

          var currVal_13 = !_v.context.$implicit.data.path;

          _ck(_v, 27, 0, currVal_13);

          _ck(_v, 32, 0);

          _ck(_v, 36, 0);

          var currVal_19 = _v.context.$implicit.data.state;

          _ck(_v, 39, 0, currVal_19);

          _ck(_v, 43, 0);

          _ck(_v, 47, 0);

          var currVal_25 = _v.context.$implicit.data.host;

          _ck(_v, 50, 0, currVal_25);

          _ck(_v, 54, 0);

          _ck(_v, 58, 0);

          var currVal_31 = _v.context.$implicit.data.host && _v.context.$implicit.data.host.faultDomain;

          _ck(_v, 61, 0, currVal_31);

          var currVal_32 = !_co.isVsanMaxEnabled;

          _ck(_v, 65, 0, currVal_32);

          var currVal_33 = !_co.isVsanMaxEnabled;

          _ck(_v, 68, 0, currVal_33);

          _ck(_v, 71, 0);

          _ck(_v, 75, 0);

          var currVal_39 = _v.context.$implicit.data.capacityDisk;

          _ck(_v, 78, 0, currVal_39);

          _ck(_v, 82, 0);

          _ck(_v, 86, 0);

          var currVal_45 = _v.context.$implicit.data.capacityDisk;

          _ck(_v, 89, 0, currVal_45);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _v.context.$implicit.data.nodeUuid;

          _ck(_v, 18, 0, currVal_10);

          var currVal_14 = true;
          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).signpost.length > 0;
          var currVal_16 = "hidden";
          var currVal_17 = "ellipsis";
          var currVal_18 = "nowrap";

          _ck(_v, 31, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_20 = true;
          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).signpost.length > 0;
          var currVal_22 = "hidden";
          var currVal_23 = "ellipsis";
          var currVal_24 = "nowrap";

          _ck(_v, 42, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

          var currVal_26 = true;
          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).signpost.length > 0;
          var currVal_28 = "hidden";
          var currVal_29 = "ellipsis";
          var currVal_30 = "nowrap";

          _ck(_v, 53, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);

          var currVal_34 = true;
          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).signpost.length > 0;
          var currVal_36 = "hidden";
          var currVal_37 = "ellipsis";
          var currVal_38 = "nowrap";

          _ck(_v, 70, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38);

          var currVal_40 = true;
          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).signpost.length > 0;
          var currVal_42 = "hidden";
          var currVal_43 = "ellipsis";
          var currVal_44 = "nowrap";

          _ck(_v, 81, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44);
        });
      }

      function View_PlacementDetailsFlatComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 136, "clr-datagrid", [["id", "details-grid"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, null, 13, "clr-dg-column", [["class", "wide-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](41, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 16777216, null, null, 13, "clr-dg-column", [["class", "medium-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](56, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 16777216, null, null, 13, "clr-dg-column", [["class", "medium-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](71, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 16777216, null, null, 13, "clr-dg-column", [["class", "medium-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](86, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 16777216, null, null, 13, "clr-dg-column", [["class", "wide-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](107, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 16777216, null, null, 13, "clr-dg-column", [["class", "wide-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_PlacementDetailsFlatComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](122, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, 2, 7, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](131, 1, ["\n      ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, 2, 2, "clr-dg-pagination", [], [[2, "pagination", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridPagination_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](133, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]], {
          pageSize: [0, "pageSize"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _pageSizeComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 33, 0);

          var currVal_4 = _ck(_v, 41, 0, false);

          _ck(_v, 40, 0, currVal_4);

          _ck(_v, 48, 0);

          var currVal_7 = _ck(_v, 56, 0, _co.reducedColumns);

          _ck(_v, 55, 0, currVal_7);

          _ck(_v, 63, 0);

          var currVal_10 = _ck(_v, 71, 0, false);

          _ck(_v, 70, 0, currVal_10);

          _ck(_v, 78, 0);

          var currVal_13 = _ck(_v, 86, 0, _co.reducedColumns);

          _ck(_v, 85, 0, currVal_13);

          var currVal_14 = !_co.isVsanMaxEnabled;

          _ck(_v, 90, 0, currVal_14);

          var currVal_15 = !_co.isVsanMaxEnabled;

          _ck(_v, 93, 0, currVal_15);

          _ck(_v, 99, 0);

          var currVal_18 = _ck(_v, 107, 0, false);

          _ck(_v, 106, 0, currVal_18);

          _ck(_v, 114, 0);

          var currVal_21 = _ck(_v, 122, 0, _co.reducedColumns);

          _ck(_v, 121, 0, currVal_21);

          var currVal_22 = _co.detailsProvider.rows;

          _ck(_v, 126, 0, currVal_22);

          var currVal_26 = 20;

          _ck(_v, 133, 0, currVal_26);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).detailService.isOpen;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ariaSort;

          _ck(_v, 29, 0, currVal_2, currVal_3);

          var currVal_5 = true;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ariaSort;

          _ck(_v, 44, 0, currVal_5, currVal_6);

          var currVal_8 = true;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ariaSort;

          _ck(_v, 59, 0, currVal_8, currVal_9);

          var currVal_11 = true;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ariaSort;

          _ck(_v, 74, 0, currVal_11, currVal_12);

          var currVal_16 = true;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).ariaSort;

          _ck(_v, 95, 0, currVal_16, currVal_17);

          var currVal_19 = true;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).ariaSort;

          _ck(_v, 110, 0, currVal_19, currVal_20);

          var currVal_23 = true;

          _ck(_v, 128, 0, currVal_23);

          var currVal_24 = _co.footerText;

          _ck(_v, 131, 0, currVal_24);

          var currVal_25 = true;

          _ck(_v, 132, 0, currVal_25);
        });
      }

      function View_PlacementDetailsFlatComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["id", "header-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlacementDetailsFlatComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 3, 0);

          var currVal_2 = !(_co.detailsProvider == null ? null : _co.detailsProvider.rootItems == null ? null : _co.detailsProvider.rootItems.length);

          _ck(_v, 8, 0, currVal_2);

          var currVal_3 = _co.detailsProvider == null ? null : _co.detailsProvider.rootItems == null ? null : _co.detailsProvider.rootItems.length;

          _ck(_v, 12, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.virtualComponentsLabel"));

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_PlacementDetailsFlatComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "virtual-objects-placement-details-flat", [], null, null, null, View_PlacementDetailsFlatComponent_0, RenderType_PlacementDetailsFlatComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _placement_details_flat_component__WEBPACK_IMPORTED_MODULE_16__["PlacementDetailsFlatComponent"], [], null, null)], null, null);
      }

      var PlacementDetailsFlatComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("virtual-objects-placement-details-flat", _placement_details_flat_component__WEBPACK_IMPORTED_MODULE_16__["PlacementDetailsFlatComponent"], View_PlacementDetailsFlatComponent_Host_0, {
        vmRef: "vmRef",
        virtualObjects: "virtualObjects",
        data: "data",
        isVsanMaxEnabled: "isVsanMaxEnabled",
        reducedColumns: "reducedColumns"
      }, {}, []);
      /***/

    },

    /***/
    "ayaZ":
    /*!*************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/pipe/component-state-icon-shape.pipe.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComponentStateIconShapePipe */

    /***/
    function ayaZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentStateIconShapePipe", function () {
        return ComponentStateIconShapePipe;
      });
      /* harmony import */


      var _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-component-state */
      "vCtO");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");

      var ComponentStateIconShapePipe = /*#__PURE__*/function () {
        function ComponentStateIconShapePipe() {
          _classCallCheck(this, ComponentStateIconShapePipe);
        }

        _createClass(ComponentStateIconShapePipe, [{
          key: "transform",
          value: function transform(state) {
            switch (state) {
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ACTIVE:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ACTIVE_STALE:
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ABSENT:
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].ABSENT_RESYNC:
              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].RECONFIG:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;

              case _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_0__["VsanComponentState"].DEGRADED:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;

              default:
                _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("Unknown VsanComponentState state: " + state);

                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_INFO_STANDARD_ICON_SHAPE;
            }
          }
        }]);

        return ComponentStateIconShapePipe;
      }();
      /***/

    },

    /***/
    "lxEh":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/physical-placement-property-box.component.ngfactory.js ***!
      \****************************************************************************************************************/

    /*! exports provided: RenderType_PhysicalPlacementPropertyBoxComponent, View_PhysicalPlacementPropertyBoxComponent_0, View_PhysicalPlacementPropertyBoxComponent_Host_0, PhysicalPlacementPropertyBoxComponentNgFactory */

    /***/
    function lxEh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PhysicalPlacementPropertyBoxComponent", function () {
        return RenderType_PhysicalPlacementPropertyBoxComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PhysicalPlacementPropertyBoxComponent_0", function () {
        return View_PhysicalPlacementPropertyBoxComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PhysicalPlacementPropertyBoxComponent_Host_0", function () {
        return View_PhysicalPlacementPropertyBoxComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhysicalPlacementPropertyBoxComponentNgFactory", function () {
        return PhysicalPlacementPropertyBoxComponentNgFactory;
      });
      /* harmony import */


      var _physical_placement_property_box_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./physical-placement-property-box.scss.shim.ngstyle */
      "uVXB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _pipe_component_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pipe/component-state-icon-shape.pipe */
      "ayaZ");
      /* harmony import */


      var _pipe_component_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pipe/component-state-icon-class.pipe */
      "/vX8");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./physical-placement-property-box.component */
      "AsUN");
      /* harmony import */


      var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../service/navigation/navigation.service */
      "Qw2S");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PhysicalPlacementPropertyBoxComponent = [_physical_placement_property_box_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PhysicalPlacementPropertyBoxComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PhysicalPlacementPropertyBoxComponent,
        data: {}
      });

      function View_PhysicalPlacementPropertyBoxComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "clr-icon", [["class", "is-solid"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_4__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "state-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "is-solid";

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 1, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.model.state));

          _ck(_v, 3, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.model.state));

          _ck(_v, 2, 0, currVal_0);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 2), _co.componentStateLabelKey(_co.model.state)));

          _ck(_v, 11, 0, currVal_3);
        });
      }

      function View_PhysicalPlacementPropertyBoxComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_4__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model.iconId;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PhysicalPlacementPropertyBoxComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model.label;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PhysicalPlacementPropertyBoxComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "span", [], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.model.navigationTarget ? "highlight-text" : "";

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = !!_co.model.label;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 6);

          _ck(_v, 4, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model.nodeUuid;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PhysicalPlacementPropertyBoxComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model.label;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PhysicalPlacementPropertyBoxComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.navigateToHost(_co.model.navigationTarget) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !!_co.model.label;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 6);

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PhysicalPlacementPropertyBoxComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model.iconId;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.model.navigationTarget || !_co.allowNavigation;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.model.navigationTarget && _co.allowNavigation;

          _ck(_v, 9, 0, currVal_2);
        }, null);
      }

      function View_PhysicalPlacementPropertyBoxComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model.state;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.model.state;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PhysicalPlacementPropertyBoxComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](0, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](1, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 2), "vsan.common.unknown"));

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PhysicalPlacementPropertyBoxComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_component_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_5__["ComponentStateIconShapePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_component_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_6__["ComponentStateIconClassPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PhysicalPlacementPropertyBoxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["unknown_label", 2]], null, 0, null, View_PhysicalPlacementPropertyBoxComponent_9))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.model;

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_PhysicalPlacementPropertyBoxComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "physical-placement-property-box", [], null, null, null, View_PhysicalPlacementPropertyBoxComponent_0, RenderType_PhysicalPlacementPropertyBoxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_8__["PhysicalPlacementPropertyBoxComponent"], [_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]], null, null)], null, null);
      }

      var PhysicalPlacementPropertyBoxComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("physical-placement-property-box", _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_8__["PhysicalPlacementPropertyBoxComponent"], View_PhysicalPlacementPropertyBoxComponent_Host_0, {
        model: "model",
        allowNavigation: "allowNavigation"
      }, {}, []);
      /***/

    },

    /***/
    "mcSG":
    /*!***************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/model/managed-storage-object-placement.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ManagedStorageObjectPlacement */

    /***/
    function mcSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagedStorageObjectPlacement", function () {
        return ManagedStorageObjectPlacement;
      });
      /* harmony import */


      var _component_placement_details_model_object_placement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/placement-details/model/object-placement */
      "91rh");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ManagedStorageObjectPlacement = /*#__PURE__*/function (_component_placement_) {
        _inherits(ManagedStorageObjectPlacement, _component_placement_);

        var _super = _createSuper(ManagedStorageObjectPlacement);

        function ManagedStorageObjectPlacement(iconId, label, path, child, datastoreType) {
          var _this2;

          _classCallCheck(this, ManagedStorageObjectPlacement);

          _this2 = _super.call(this, datastoreType);
          _this2.iconId = iconId;
          _this2.label = label;
          _this2.path = path;
          _this2.child = child;
          return _this2;
        }

        _createClass(ManagedStorageObjectPlacement, [{
          key: "lastLevelComponents",
          get: function get() {
            return this.getNextLevelComponents(this.child);
          }
        }, {
          key: "host",
          get: function get() {
            return this.child.host;
          }
        }, {
          key: "capacityDisk",
          get: function get() {
            return this.child.capacityDisk;
          }
        }]);

        return ManagedStorageObjectPlacement;
      }(_component_placement_details_model_object_placement__WEBPACK_IMPORTED_MODULE_0__["ObjectPlacement"]);
      /***/

    },

    /***/
    "pK8m":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/model/vsan-object-placement.ts ***!
      \****************************************************************************************/

    /*! exports provided: VsanObjectPlacement */

    /***/
    function pK8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanObjectPlacement", function () {
        return VsanObjectPlacement;
      });
      /* harmony import */


      var _component_placement_details_model_object_placement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/placement-details/model/object-placement */
      "91rh");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanObjectPlacement = /*#__PURE__*/function (_component_placement_2) {
        _inherits(VsanObjectPlacement, _component_placement_2);

        var _super2 = _createSuper(VsanObjectPlacement);

        function VsanObjectPlacement(vsanUuid, path, raidConfig, children) {
          var _this3;

          _classCallCheck(this, VsanObjectPlacement);

          _this3 = _super2.call(this, _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__["DatastoreType"].VSAN);
          _this3.vsanUuid = vsanUuid;
          _this3.path = path;
          _this3.raidConfig = raidConfig;
          _this3.children = children;
          return _this3;
        }

        _createClass(VsanObjectPlacement, [{
          key: "lastLevelComponents",
          get: function get() {
            var _this4 = this;

            var lastLevelComponents = [];
            this.children.forEach(function (child) {
              lastLevelComponents.push.apply(lastLevelComponents, _toConsumableArray(_this4.getNextLevelComponents(child)));
            });
            return lastLevelComponents;
          }
        }]);

        return VsanObjectPlacement;
      }(_component_placement_details_model_object_placement__WEBPACK_IMPORTED_MODULE_0__["ObjectPlacement"]);
      /***/

    },

    /***/
    "pOAa":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-flat.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PlacementDetailsFlatComponent */

    /***/
    function pOAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsFlatComponent", function () {
        return PlacementDetailsFlatComponent;
      });
      /* harmony import */


      var _component_datagrid_tree_datagrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/datagrid/tree-datagrid */
      "zgjC");
      /* harmony import */


      var _component_placement_details_placement_details_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/placement-details/placement-details-util */
      "PYpP");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var PlacementDetailsFlatComponent = /*#__PURE__*/function () {
        function PlacementDetailsFlatComponent() {
          _classCallCheck(this, PlacementDetailsFlatComponent);

          this.DatastoreType = _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"];
          this.detailsProvider = new _component_datagrid_tree_datagrid__WEBPACK_IMPORTED_MODULE_0__["TreeDatagrid"](function (item) {
            return item.children;
          });
          this.footerText = "";
        }

        _createClass(PlacementDetailsFlatComponent, [{
          key: "data",
          get: function get() {
            return this._data;
          },
          set: function set(data) {
            this._data = data;

            if (!data) {
              this.detailsProvider.rootItems = [];
              this.footerText = "";
              return;
            }

            var placements = this.constructPlacements(data);
            this.detailsProvider.rootItems = placements;
            this.footerText = this.getFooter(placements);
          }
        }, {
          key: "getFooter",
          value: function getFooter(placements) {
            var vsanPlacementsSummary = new VirtualObjectPlacementsSummary("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.footer.vsan");
            var vsanDirectPlacementsSummary = new VirtualObjectPlacementsSummary("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.footer.vsanDirect");
            var pmemPlacementsSummary = new VirtualObjectPlacementsSummary("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.footer.pmem");
            placements.forEach(function (placement) {
              switch (placement.datastoreType) {
                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN:
                  vsanPlacementsSummary.count(placement.lastLevelComponents);
                  break;

                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN_DIRECT:
                  vsanDirectPlacementsSummary.count(placement.lastLevelComponents);
                  break;

                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].PMEM:
                  pmemPlacementsSummary.count(placement.lastLevelComponents);
                  break;
              }
            });
            return [vsanPlacementsSummary, vsanDirectPlacementsSummary, pmemPlacementsSummary].filter(function (summary) {
              return summary.hasData;
            }).map(function (summary) {
              return summary.label;
            }).join(", ");
          }
        }, {
          key: "constructPlacements",
          value: function constructPlacements(data) {
            var _this5 = this;

            var placements = [];

            var _iterator = _createForOfIteratorHelper(data.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var uuid = _step.value;
                // deep clone the models, because the mergeSingleRaidConfig(invoked from getPlacement()) will move the
                // raid config children to the upper level and
                // we don't want to change the original data as well
                var components = JSON.parse(JSON.stringify(data.get(uuid)));
                placements.push(_component_placement_details_placement_details_util__WEBPACK_IMPORTED_MODULE_1__["PlacementDetailsUtil"].getPlacement(uuid, components, this.virtualObjects, function (id) {
                  return _this5.findPath(id);
                }));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return placements;
          }
          /**
           * Returns the path for the specified virtual objects.
           * Sample result is [vmModel, diskModel]
           */

        }, {
          key: "findPath",
          value: function findPath(vsanUuid) {
            var _iterator2 = _createForOfIteratorHelper(this.virtualObjects),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var model = _step2.value;

                if (vsanUuid === model.uid) {
                  return [model];
                }

                if (model.children) {
                  var _iterator3 = _createForOfIteratorHelper(model.children),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var child = _step3.value;

                      if (vsanUuid === child.uid) {
                        if (this.vmRef) {
                          return [child];
                        } else {
                          return [model, child];
                        }
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            throw new Error("Virtual object not found: " + vsanUuid);
          }
          /**
           * vsan-expand renders depth padding, so it must always be placed except for
           * non expandable items with depth 0 (e.g., vSAN Direct objects).
           */

        }, {
          key: "isExpandable",
          value: function isExpandable(row) {
            return !row.data.datastoreType
            /* Nested rows (e.g., RAID config)*/
            || row.data.datastoreType === _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN;
          }
        }, {
          key: "getDiskColumnLabel",
          value: function getDiskColumnLabel() {
            return this.isVsanMaxEnabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.vSANMaxDisk") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.capacityDisk");
          }
        }, {
          key: "getDiskUUIDColumnLabel",
          value: function getDiskUUIDColumnLabel() {
            return this.isVsanMaxEnabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.vSANMaxDiskUUID") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.capacityDiskUUID");
          }
        }]);

        return PlacementDetailsFlatComponent;
      }();
      /**
       * This class is being used only in this component.
       * It contains summary information for displayed object:
       *  - (components for vSAN) because one object could be stored on multiple disks
       *  - (objects for vSAN Direct) because one object is always stored on one disk
       *  and unique host counts
       */


      var VirtualObjectPlacementsSummary = /*#__PURE__*/function () {
        function VirtualObjectPlacementsSummary(labelKey) {
          _classCallCheck(this, VirtualObjectPlacementsSummary);

          this.labelKey = labelKey;
          this.objects = 0;
          this.uniqueHosts = {};
        }

        _createClass(VirtualObjectPlacementsSummary, [{
          key: "count",
          value: function count(objects) {
            var _this6 = this;

            objects.forEach(function (object) {
              _this6.incrementCounts(object);

              if (object.children) {
                _this6.count(object.children);
              }
            });
          }
        }, {
          key: "objectCount",
          get: function get() {
            return this.objects;
          }
        }, {
          key: "hostCount",
          get: function get() {
            return Object.keys(this.uniqueHosts).length;
          }
        }, {
          key: "hasData",
          get: function get() {
            return this.objectCount > 0 && this.hostCount > 0;
          }
        }, {
          key: "label",
          get: function get() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString(this.labelKey, this.objectCount, this.hostCount);
          }
        }, {
          key: "incrementCounts",
          value: function incrementCounts(object) {
            if (object.nodeUuid) {
              this.objects++;
            }

            if (object.host) {
              this.uniqueHosts[object.host.nodeUuid] = {};
            }
          }
        }]);

        return VirtualObjectPlacementsSummary;
      }();
      /***/

    },

    /***/
    "uVXB":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/physical-placement-property-box.scss.shim.ngstyle.js ***!
      \**************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function uVXB(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  align-items: center;\n}\n.state-label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\nclr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3BsYWNlbWVudC1kZXRhaWxzL3BoeXNpY2FsLXBsYWNlbWVudC1wcm9wZXJ0eS1ib3guc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxFQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFlSDtBQWJBO0VBQ0csc0JBQUE7QUFnQkg7QUFiQTtFQUNHLG9CR09PO0FIU1YiLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvcGxhY2VtZW50LWRldGFpbHMvcGh5c2ljYWwtcGxhY2VtZW50LXByb3BlcnR5LWJveC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMSAwIDByZW07XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXRlLWxhYmVse1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuY2xyLWljb24ge1xuICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZztcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "zpoR":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: PlacementDetailsModule */

    /***/
    function zpoR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsModule", function () {
        return PlacementDetailsModule;
      });

      var PlacementDetailsModule = /*#__PURE__*/_createClass(function PlacementDetailsModule() {
        _classCallCheck(this, PlacementDetailsModule);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=44-es5.js.map