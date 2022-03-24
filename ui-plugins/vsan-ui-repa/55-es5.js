(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55], {
    /***/
    "32s1":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/performance/view/perf-detail-charts.scss.shim.ngstyle.js ***!
      \*******************************************************************************/

    /*! exports provided: styles */

    /***/
    function s1(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  position: relative;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   clr-button-group[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS92aWV3L3BlcmYtZGV0YWlsLWNoYXJ0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBY0g7QUU2Qkc7RUFDRyxnQ0FBQTtBRjNCTjtBRTZCRzs7RUFHRyxnQ0FBQTtBRjVCTjtBRThCRztFQUNHLDhCQUFBO0FGNUJOO0FBckJHO0VBQ0csYUFBQTtFQUNBLDhCQUFBO0FBdUJOO0FBckJNO0VBQ0csZ0JHdUhvQjtBSGhHN0I7QUFwQk07RUFDRyxpQkFBQTtFQUNBLGVBQUE7QUFzQlQiLCJmaWxlIjoic3JjL2FwcC92c2FuL3BlcmZvcm1hbmNlL3ZpZXcvcGVyZi1kZXRhaWwtY2hhcnRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xuXG4gICAudGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0O1xuICAgICAgfVxuXG4gICAgICBjbHItYnV0dG9uLWdyb3VwIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "8486":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/performance/view/perf-detail-charts.component.ngfactory.js ***!
      \*********************************************************************************/

    /*! exports provided: RenderType_PerfDetailChartsComponent, View_PerfDetailChartsComponent_0, View_PerfDetailChartsComponent_Host_0, PerfDetailChartsComponentNgFactory */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerfDetailChartsComponent", function () {
        return RenderType_PerfDetailChartsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfDetailChartsComponent_0", function () {
        return View_PerfDetailChartsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfDetailChartsComponent_Host_0", function () {
        return View_PerfDetailChartsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfDetailChartsComponentNgFactory", function () {
        return PerfDetailChartsComponentNgFactory;
      });
      /* harmony import */


      var _perf_detail_charts_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./perf-detail-charts.scss.shim.ngstyle */
      "32s1");
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


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/directive/clr-button-group/clr-button-group-common.directive */
      "Ju17");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/component/unavailable-view/unavailable-view.component.ngfactory */
      "Kfm7");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/component/unavailable-view/unavailable-view.component */
      "hlBw");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../generated/hci-quickstart-status-service */
      "KbWe");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/component/chart/performance/perf-charts-container.component.ngfactory */
      "b7pI");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../common/component/chart/performance/perf-charts-container.component */
      "RSFA");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./perf-detail-charts.component */
      "M9oc");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../generated/io-insight-service */
      "lBrK");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerfDetailChartsComponent = [_perf_detail_charts_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerfDetailChartsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerfDetailChartsComponent,
        data: {}
      });

      function View_PerfDetailChartsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "spinner spinner-lg central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null);
      }

      function View_PerfDetailChartsComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["alertType", "danger"], ["id", "details-error-msg"]], null, [[null, "onReload"], [null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onReload" === en) {
            var pd_0 = _co.reload() !== false;
            ad = pd_0 && ad;
          }

          if ("onClosed" === en) {
            var pd_1 = (_co.alertMessage = null) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowReload: [2, "allowReload"]
        }, {
          onClosed: "onClosed",
          onReload: "onReload"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "danger";
          var currVal_1 = _co.alertMessage;
          var currVal_2 = _co.allowReloadWhenError;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PerfDetailChartsComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"], ["id", "ask-vmware"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.askVMware() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, [[1, 4], [2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          id: [1, "id"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "ask-vmware";

          _ck(_v, 2, 0, currVal_0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 0), "vsan.perf.chart.link"));

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_PerfDetailChartsComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 13, "clr-button-group", [["class", "btn-link buttons-group"]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 1064960, null, 1, _common_directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_7__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.isAskVmwareLinkVisible;

          _ck(_v, 17, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.perfOrchestrator.entityGraph == null ? null : _co.perfOrchestrator.entityGraph.description;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = true;

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_PerfDetailChartsComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_9__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_10__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_12__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__["VsanPerfPropertyProvider"]], {
          unavailableViewSpec: [0, "unavailableViewSpec"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.separateViewNoDataAvailable;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PerfDetailChartsComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "section", [["class", "nav-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "vsan-perf-charts-container", [["class", "separately-chart"]], null, [[null, "allChartsLoaded"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("allChartsLoaded" === en) {
            var pd_0 = _co.onSpecifiedEntitiesChartsLoaded($event, _co.getEntityByVsanUuid(_v.context.$implicit.entityRefId).entityName) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_17__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          title: [0, "title"],
          icon: [1, "icon"],
          isShowAllLinkVisible: [2, "isShowAllLinkVisible"],
          isAskVmwareLinkVisible: [3, "isAskVmwareLinkVisible"],
          isZoomButtonVisible: [4, "isZoomButtonVisible"],
          isEmptyChartsVisible: [5, "isEmptyChartsVisible"],
          isShowGraphDescription: [6, "isShowGraphDescription"],
          currentTimeRange: [7, "currentTimeRange"],
          compactMode: [8, "compactMode"],
          customizableThresholds: [9, "customizableThresholds"],
          data: [10, "data"]
        }, {
          allChartsLoaded: "allChartsLoaded"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getEntityByVsanUuid(_v.context.$implicit.entityRefId).entityName;

          var currVal_1 = _co.getEntityByVsanUuid(_v.context.$implicit.entityRefId).icon;

          var currVal_2 = false;
          var currVal_3 = false;
          var currVal_4 = true;
          var currVal_5 = !_co.alertMessage;
          var currVal_6 = false;
          var currVal_7 = _co.timeRange;
          var currVal_8 = (_co.entity == null ? null : _co.entity.configSpec.graphs.length) > 2;
          var currVal_9 = _co.customizableThresholds;

          var currVal_10 = _co.perfOrchestrator.getEntityGraphDataById(_v.context.$implicit.entityRefId);

          _ck(_v, 4, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]);
        }, null);
      }

      function View_PerfDetailChartsComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.perfOrchestrator.data.specifiedEntitiesMetrics.length !== 0;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.perfOrchestrator.data.specifiedEntitiesMetrics.length === 0;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _co.perfOrchestrator.data.specifiedEntitiesMetrics;

          _ck(_v, 11, 0, currVal_2);
        }, null);
      }

      function View_PerfDetailChartsComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-perf-charts-container", [["id", "consolidated-charts-container"]], null, [[null, "allChartsLoaded"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("allChartsLoaded" === en) {
            var pd_0 = _co.onAllChartsLoaded($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_17__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          isShowAllLinkVisible: [2, "isShowAllLinkVisible"],
          isAskVmwareLinkVisible: [3, "isAskVmwareLinkVisible"],
          isEmptyChartsVisible: [4, "isEmptyChartsVisible"],
          showHeaderSection: [5, "showHeaderSection"],
          currentTimeRange: [6, "currentTimeRange"],
          customizableThresholds: [7, "customizableThresholds"],
          visibleGraphId: [8, "visibleGraphId"],
          consolidatedEntitiesData: [9, "consolidatedEntitiesData"],
          chartWidth: [10, "chartWidth"],
          chartHeight: [11, "chartHeight"],
          consolidatedData: [12, "consolidatedData"]
        }, {
          allChartsLoaded: "allChartsLoaded"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.perfOrchestrator.entityGraph == null ? null : _co.perfOrchestrator.entityGraph.description;
          var currVal_1 = _co.extraDesc;
          var currVal_2 = false;
          var currVal_3 = _co.isAskVmwareLinkVisible;
          var currVal_4 = !_co.alertMessage;
          var currVal_5 = _co.showHeaderSection;
          var currVal_6 = _co.timeRange;
          var currVal_7 = _co.customizableThresholds;
          var currVal_8 = _co.visibleGraphId;
          var currVal_9 = _co.consolidatedEntitiesData;
          var currVal_10 = _co.chartWidth;
          var currVal_11 = _co.chartHeight;
          var currVal_12 = _co.perfOrchestrator.data.entitiesGraphData;

          _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]);
        }, null);
      }

      function View_PerfDetailChartsComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.perfOrchestrator.isSeparatlyViewStateEnabled;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.perfOrchestrator.isConsolidatedViewStateEnabled;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PerfDetailChartsComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-perf-charts-container", [["id", "charts-container"]], null, [[null, "allChartsLoaded"], [null, "onPlotLineChanged"], [null, "onTooltipActionClicked"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("allChartsLoaded" === en) {
            var pd_0 = _co.onAllChartsLoaded($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onPlotLineChanged" === en) {
            var pd_1 = _co.onPlotLineChanged.emit($event) !== false;
            ad = pd_1 && ad;
          }

          if ("onTooltipActionClicked" === en) {
            var pd_2 = _co.onTooltipActionClicked.emit($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_17__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          parentLoading: [2, "parentLoading"],
          isShowAllLinkVisible: [3, "isShowAllLinkVisible"],
          isAskVmwareLinkVisible: [4, "isAskVmwareLinkVisible"],
          isEmptyChartsVisible: [5, "isEmptyChartsVisible"],
          showHeaderSection: [6, "showHeaderSection"],
          currentTimeRange: [7, "currentTimeRange"],
          collapsible: [8, "collapsible"],
          customizableThresholds: [9, "customizableThresholds"],
          visibleGraphId: [10, "visibleGraphId"],
          keepPlotLineOnClick: [11, "keepPlotLineOnClick"],
          selectedPlotLineValue: [12, "selectedPlotLineValue"],
          actionLink: [13, "actionLink"],
          data: [14, "data"],
          isRealtime: [15, "isRealtime"]
        }, {
          allChartsLoaded: "allChartsLoaded",
          onPlotLineChanged: "onPlotLineChanged",
          onTooltipActionClicked: "onTooltipActionClicked"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.collapsible ? null : _co.averageModeEntityDescription;
          var currVal_1 = _co.extraDesc;
          var currVal_2 = _co.loading && _co.parentLoading;
          var currVal_3 = false;
          var currVal_4 = _co.isAskVmwareLinkVisible;
          var currVal_5 = !_co.alertMessage;
          var currVal_6 = _co.showHeaderSection;
          var currVal_7 = _co.timeRange;
          var currVal_8 = _co.collapsible;
          var currVal_9 = _co.customizableThresholds;
          var currVal_10 = _co.visibleGraphId;
          var currVal_11 = _co.keepPlotLineOnClick;
          var currVal_12 = _co.selectedPlotLineValue;
          var currVal_13 = _co.actionLink;
          var currVal_14 = _co.graphsData;
          var currVal_15 = _co.isRealtime;

          _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]);
        }, null);
      }

      function View_PerfDetailChartsComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-perf-charts-container", [["id", "ioinsight-charts-container"]], null, [[null, "allChartsLoaded"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("allChartsLoaded" === en) {
            var pd_0 = _co.onAllChartsLoaded($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_17__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          isShowAllLinkVisible: [2, "isShowAllLinkVisible"],
          isAskVmwareLinkVisible: [3, "isAskVmwareLinkVisible"],
          isEmptyChartsVisible: [4, "isEmptyChartsVisible"],
          currentTimeRange: [5, "currentTimeRange"],
          collapsible: [6, "collapsible"],
          customizableThresholds: [7, "customizableThresholds"],
          data: [8, "data"]
        }, {
          allChartsLoaded: "allChartsLoaded"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getIoInsightInstances();

          var currVal_1 = _co.extraDesc;
          var currVal_2 = false;
          var currVal_3 = _co.isAskVmwareLinkVisible;
          var currVal_4 = !_co.alertMessage;
          var currVal_5 = _co.timeRange;
          var currVal_6 = _co.collapsible;
          var currVal_7 = _co.customizableThresholds;
          var currVal_8 = _co.ioInsightGraphsData;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        }, null);
      }

      function View_PerfDetailChartsComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.perfOrchestrator.isShowSpecificModeEnabled;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.perfOrchestrator.isShowAverageModeEnabled;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.perfOrchestrator.isShowAverageModeEnabled && _co.ioInsightGraphsData.length > 0;

          _ck(_v, 9, 0, currVal_2);
        }, null);
      }

      function View_PerfDetailChartsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_18__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfDetailChartsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.loading || _co.perfOrchestrator.isLoading;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.alertMessage;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = !_co.loading && !_co.parentLoading && !_co.perfOrchestrator.isLoading;

          _ck(_v, 9, 0, currVal_2);
        }, null);
      }

      function View_PerfDetailChartsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-perf-detail-charts", [], null, null, null, View_PerfDetailChartsComponent_0, RenderType_PerfDetailChartsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_19__["PerfDetailChartsComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__["VsanPerfPropertyProvider"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_17__["PerfOrchestratorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_20__["IoInsightService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, null);
      }

      var PerfDetailChartsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-perf-detail-charts", _perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_19__["PerfDetailChartsComponent"], View_PerfDetailChartsComponent_Host_0, {
        extraDesc: "extraDesc",
        parentLoading: "parentLoading",
        commonPerfData: "commonPerfData",
        customizableThresholds: "customizableThresholds",
        visibleGraphId: "visibleGraphId",
        showHeaderSection: "showHeaderSection",
        isAskVmwareLinkVisible: "isAskVmwareLinkVisible",
        keepPlotLineOnClick: "keepPlotLineOnClick",
        isRealtime: "isRealtime",
        selectedPlotLineValue: "selectedPlotLineValue",
        actionLink: "actionLink",
        consolidatedEntitiesData: "consolidatedEntitiesData",
        entity: "entity",
        chartMetrics: "chartMetrics",
        collapsible: "collapsible",
        currentTimeRange: "currentTimeRange",
        chartWidth: "chartWidth",
        chartHeight: "chartHeight"
      }, {
        allChartsLoaded: "allChartsLoaded",
        onPlotLineChanged: "onPlotLineChanged",
        onTooltipActionClicked: "onTooltipActionClicked"
      }, []);
      /***/

    },

    /***/
    "KIqC":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/performance/view/single-entity-data-perf.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function KIqC(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.export-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS92aWV3L3NpbmdsZS1lbnRpdHktZGF0YS1wZXJmLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBY0g7QUU4Qkc7RUFDRyxnQ0FBQTtBRjVCTjtBRThCRzs7RUFHRyxnQ0FBQTtBRjdCTjtBRStCRztFQUNHLDhCQUFBO0FGN0JOO0FBcEJBO0VBQ0csaUJBQUE7RUFDQSw4QkFBQTtBQXVCSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcGVyZm9ybWFuY2Uvdmlldy9zaW5nbGUtZW50aXR5LWRhdGEtcGVyZi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLmV4cG9ydC1idXR0b24ge1xuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "M9oc":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/performance/view/perf-detail-charts.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PerfDetailChartsComponent */

    /***/
    function M9oc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfDetailChartsComponent", function () {
        return PerfDetailChartsComponent;
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


      var _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/performance/graph-metrics.data */
      "H1HU");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/unavailable-view/unavailable-view-spec */
      "Hg5h");
      /* harmony import */


      var _generated_perf_query_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/perf-query-errors */
      "oBnK");
      /* harmony import */


      var _generated_perf_query_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/perf-query-spec */
      "0ebl");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_performance_perf_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @util/performance/perf-data */
      "nH3z");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../model/nested-perf-entity */
      "ZZcQ");
      /* harmony import */


      var _navigation_model_ask_vmware_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @navigation/model/ask-vmware-id */
      "9IbX");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PerfDetailChartsComponent = /*#__PURE__*/function () {
        function PerfDetailChartsComponent(perfPropProvider, perfOrchestrator, navigationService, ioInsightService, refWatcher) {
          var _this = this;

          _classCallCheck(this, PerfDetailChartsComponent);

          this.perfPropProvider = perfPropProvider;
          this.perfOrchestrator = perfOrchestrator;
          this.navigationService = navigationService;
          this.ioInsightService = ioInsightService;
          this.refWatcher = refWatcher;
          this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"];
          this.ioInsightGraphsData = [];
          this.allowReloadWhenError = true;
          this.ioInsightInstances = [];
          this.specifiedEntitiesExportData = [];
          this.loadedSpecifiedEntitiesCount = 0;
          this.parentLoading = false;
          this.showHeaderSection = true;
          this.allChartsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
          this.isAskVmwareLinkVisible = true;
          this.keepPlotLineOnClick = false;
          this.isRealtime = false;
          this.onPlotLineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTooltipActionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          this.handleError = function (err) {
            if (err.message === _generated_perf_query_errors__WEBPACK_IMPORTED_MODULE_5__["PerfQueryErrors"].INVALID_ENTITY_REF_ID_KEY()) {
              _this.allowReloadWhenError = false;
              _this.alertMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.perf.service.chart.unsupportedEntityType.error");
            } else {
              _this.allowReloadWhenError = true;
              _this.alertMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.perf.service.chart.common.error");
            }

            _this.graphsData = [];
            _this.ioInsightGraphsData = [];
            _this.ioInsightInstances = [];
            _this.loading = false;

            _util_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"].error(err);
          };

          this.updateGprahsData = function () {
            if (!_this.chartMetrics || !_this.entity) {
              return;
            }

            var graphs = _this.entity.configSpec.graphs.map(function (graph) {
              return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].getGraphDefinition(graph);
            });

            if (_this.entity instanceof _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_12__["NestedPerfEntity"]) {
              // for virtual disks we have combined entity for scsi graphs and additionalConfigSpecs for ioinsight graphs
              // which have to be handled too
              graphs.push.apply(graphs, _toConsumableArray(_this.entity.combinedEntity.configSpec.graphs.map(function (graph) {
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].getGraphDefinition(graph);
              })));

              _this.updateIoInsightGraphsData();

              _this.graphsData = _this.chartMetrics.filter(function (metric) {
                return !metric.entityRefId.startsWith(_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartDataConstants"].IOINSIGHT);
              }).map(function (metric) {
                return new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](metric, graphs);
              });
            } else {
              _this.graphsData = _this.chartMetrics.map(function (metric) {
                return new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](metric, graphs);
              });
            }
          };

          this.reload = function () {
            _this._chartMetrics = null;

            _this.queryChartsDataByTimeRange(_this.timeRange);
          };
        }

        _createClass(PerfDetailChartsComponent, [{
          key: "entity",
          get: function get() {
            return this._entity;
          },
          set: function set(val) {
            if (val && val.equals(this.entity)) {
              return;
            }

            this._entity = val;
            this.updateGprahsData();
          }
        }, {
          key: "chartMetrics",
          get: function get() {
            return this._chartMetrics;
          },
          set: function set(value) {
            this._chartMetrics = value;
            this.updateGprahsData();
          }
        }, {
          key: "currentTimeRange",
          set: function set(value) {
            this.queryChartsDataByTimeRange(value);
          }
          /**
           * Queries the chart data for the specified time range.
           * @param timeRange
           * @param targetCluster Which cluster should the API be invoked onto.
           *                      In the case of compute-only cluster, the API should be invoked onto the selected
           *                      server cluster. The compute-only cluster uuid should be passed as an argument.
           */

        }, {
          key: "queryChartsDataByTimeRange",
          value: function queryChartsDataByTimeRange(timeRange) {
            var targetCluster = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.commonPerfData.clusterRef;
            var showLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!this.isRealtime && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].isEmpty(this._chartMetrics))) {
                        _context.next = 3;
                        break;
                      }

                      this.updateGprahsData();
                      return _context.abrupt("return");

                    case 3:
                      this.loading = showLoading || !this.chartMetrics;
                      this.timeRange = timeRange;
                      this.alertMessage = "";
                      _context.next = 8;
                      return this.perfPropProvider.getEntityPerfState(targetCluster, this.getPerfMetricsQuerySpecs()).then(function (data) {
                        if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].isEmpty(data)) {
                          _this2.chartMetrics = data;
                        }

                        _this2.loading = false;
                      })["catch"](function (err) {
                        _this2.handleError(err);
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getEntityByVsanUuid",
          value: function getEntityByVsanUuid(uuid) {
            return this.perfOrchestrator.getEntityByVsanUuid(uuid);
          }
        }, {
          key: "averageModeEntityDescription",
          get: function get() {
            var _a, _b, _c, _d, _e, _f, _g;

            if (!(this.entity instanceof _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_12__["NestedPerfEntity"])) {
              return (_b = (_a = this.entity) === null || _a === void 0 ? void 0 : _a.configSpec) === null || _b === void 0 ? void 0 : _b.description;
            }

            return "".concat((_d = (_c = this.entity) === null || _c === void 0 ? void 0 : _c.configSpec) === null || _d === void 0 ? void 0 : _d.description, " ").concat((_g = (_f = (_e = this.entity) === null || _e === void 0 ? void 0 : _e.combinedEntity) === null || _f === void 0 ? void 0 : _f.configSpec) === null || _g === void 0 ? void 0 : _g.description);
          }
        }, {
          key: "getIoInsightInstances",
          value: function getIoInsightInstances() {
            if (this.ioInsightInstances.length === 1) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.monitor.vm.performance.virtualDisk.ioInsight.single", this.ioInsightInstances[0].name);
            } else if (this.ioInsightInstances.length > 1) {
              var instances = this.ioInsightInstances.map(function (instance) {
                return instance.name;
              }).join(", ");
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.monitor.vm.performance.virtualDisk.ioInsight.multy", instances);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            /*
            * When selection is changed, then load performance data
            */
            this.refWatcher.watchSubscriptionRef(this.perfOrchestrator.change.subscribe(function (change) {
              if (change == null || change === _util_performance_perf_data__WEBPACK_IMPORTED_MODULE_9__["PerfChangeContext"].METRICS_FETCHED) {
                _this3.resetSpecifiedEntitiesExportData();

                return;
              }

              if (_this3.perfOrchestrator.isShowSpecificModeEnabled && _this3.perfOrchestrator.data.timeRangeData) {
                _this3.requestConsolidatedMetrics();
              }
            }));
          }
        }, {
          key: "getPerfMetricsQuerySpecs",
          value: function getPerfMetricsQuerySpecs() {
            var querySpecs = [];
            querySpecs.push(this.createQuerySpec(this.entity, this.entity.entityType));

            if (this.entity instanceof _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_12__["NestedPerfEntity"]) {
              querySpecs.push(this.createQuerySpec(this.entity.combinedEntity, this.entity.combinedEntity.entityType));

              if (this.entity.additionalConfigSpecId) {
                // for virtual-disk charts request also ioinsight charts
                var entityType = this.commonPerfData.entityTypes[this.entity.additionalConfigSpecId].name;
                querySpecs.push(this.createQuerySpec(this.entity.combinedEntity, entityType));
              }
            }

            return querySpecs;
          }
        }, {
          key: "resetSpecifiedEntitiesExportData",
          value: function resetSpecifiedEntitiesExportData() {
            this.loadedSpecifiedEntitiesCount = 0;
            this.specifiedEntitiesExportData = [];
            this.allChartsLoaded.emit(null);
          }
        }, {
          key: "requestConsolidatedMetrics",
          value: function requestConsolidatedMetrics() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var querySpecs, data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loading = true;
                      this.resetSpecifiedEntitiesExportData();
                      this.timeRange = this.perfOrchestrator.data.timeRangeData;
                      querySpecs = [];
                      /*
                      * Create query spec for all selected entities in order to retrieve performance data for them
                      */

                      this.perfOrchestrator.data.selectedEntities.forEach(function (entity) {
                        querySpecs.push(_this4.createQuerySpec(entity, entity.entityType));
                      });

                      if (!(querySpecs.length === 0)) {
                        _context2.next = 10;
                        break;
                      }

                      this.perfOrchestrator.data.specifiedEntitiesMetrics = [];
                      this.perfOrchestrator.onEntityPerfDataLoaded();
                      this.loading = false;
                      return _context2.abrupt("return");

                    case 10:
                      _context2.prev = 10;
                      this.loading = true;
                      _context2.next = 14;
                      return this.perfPropProvider.getEntityPerfState(this.commonPerfData.clusterRef, querySpecs);

                    case 14:
                      data = _context2.sent;
                      this.perfOrchestrator.data.specifiedEntitiesMetrics = data;
                      this.perfOrchestrator.onEntityPerfDataLoaded(data.length);
                      _context2.next = 22;
                      break;

                    case 19:
                      _context2.prev = 19;
                      _context2.t0 = _context2["catch"](10);
                      this.handleError(_context2.t0);

                    case 22:
                      _context2.prev = 22;
                      this.loading = false;
                      return _context2.finish(22);

                    case 25:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[10, 19, 22, 25]]);
            }));
          }
        }, {
          key: "createQuerySpec",
          value: function createQuerySpec(entity, entityType) {
            return _generated_perf_query_spec__WEBPACK_IMPORTED_MODULE_6__["PerfQuerySpec"].Factory.create(entityType, entity.entityUuid, null,
            /* group:string, not used*/
            this.timeRange.from, this.timeRange.to, null,
            /* interval:number , not used*/
            null
            /* labels:string[], not used*/
            );
          }
        }, {
          key: "updateIoInsightGraphsData",
          value: function updateIoInsightGraphsData() {
            var _this5 = this;

            this.ioInsightGraphsData = [];
            var ioInsightGraphs = [];
            var additionalConfigSpec = this.commonPerfData.entityTypes[this.entity.additionalConfigSpecId];

            if (additionalConfigSpec) {
              var ioInsightMetrics = this.chartMetrics.filter(function (metric) {
                return metric.entityRefId.startsWith(_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartDataConstants"].IOINSIGHT);
              });

              if (additionalConfigSpec.name && additionalConfigSpec.name === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartDataConstants"].IOINSIGHT && ioInsightMetrics.length) {
                this.ioInsightService.getIoInsightInstancesByTime(_service_managed_object__WEBPACK_IMPORTED_MODULE_7__["ManagedObject"].contextObject, this.timeRange.from, this.timeRange.to).then(function (data) {
                  _this5.ioInsightInstances = data;
                })["catch"](this.handleError);
                ioInsightGraphs.push.apply(ioInsightGraphs, _toConsumableArray(additionalConfigSpec.graphs.map(function (graph) {
                  return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].getGraphDefinition(graph);
                })));

                if (ioInsightGraphs.length > 0) {
                  this.ioInsightGraphsData = ioInsightMetrics.map(function (metric) {
                    return new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](metric, ioInsightGraphs);
                  });
                }
              }
            }
          }
        }, {
          key: "onAllChartsLoaded",
          value: function onAllChartsLoaded(perfExportData) {
            var _this6 = this;

            if (this.entity && perfExportData) {
              perfExportData.forEach(function (data) {
                return data.subEntityName = _this6.entity.entityLabelName;
              });
            }

            this.allChartsLoaded.emit(perfExportData);
          }
          /**
           * The export data should be updated when all charts for the specified entities are loaded
           * in case of composite vm view with show separate charts by VMs is selected
           * @param perfExportData the export data(charts) for the specified entity(VM)
           * @param entityName the name of the VM
           */

        }, {
          key: "onSpecifiedEntitiesChartsLoaded",
          value: function onSpecifiedEntitiesChartsLoaded(perfExportData, entityName) {
            this.specifiedEntitiesExportData = this.specifiedEntitiesExportData.concat(perfExportData);
            this.loadedSpecifiedEntitiesCount++;
            perfExportData.forEach(function (exportData) {
              return exportData.subEntityName = entityName;
            });

            if (this.perfOrchestrator.data.specifiedEntitiesMetrics.length === this.loadedSpecifiedEntitiesCount) {
              this.allChartsLoaded.emit(this.specifiedEntitiesExportData);
            }
          }
        }, {
          key: "askVMware",
          value: function askVMware() {
            this.navigationService.askVMware(_navigation_model_ask_vmware_id__WEBPACK_IMPORTED_MODULE_13__["AskVmwareId"].VM_CONSUMPTION_IOPS);
          }
        }, {
          key: "separateViewNoDataAvailable",
          get: function get() {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].isRecentTimeRange(this.timeRange) ? _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_VIEW_NO_DATA : _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD;
          }
        }]);

        return PerfDetailChartsComponent;
      }();
      /***/

    },

    /***/
    "RThr":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/performance/export/perf-chart-export.component.ngfactory.js ***!
      \**********************************************************************************/

    /*! exports provided: RenderType_PerfChartExportComponent, View_PerfChartExportComponent_0, View_PerfChartExportComponent_Host_0, PerfChartExportComponentNgFactory */

    /***/
    function RThr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerfChartExportComponent", function () {
        return RenderType_PerfChartExportComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartExportComponent_0", function () {
        return View_PerfChartExportComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartExportComponent_Host_0", function () {
        return View_PerfChartExportComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartExportComponentNgFactory", function () {
        return PerfChartExportComponentNgFactory;
      });
      /* harmony import */


      var _perf_chart_export_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./perf-chart-export.scss.shim.ngstyle */
      "ZAZl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _view_perf_detail_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../view/perf-detail-charts.component.ngfactory */
      "8486");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _view_perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../view/perf-detail-charts.component */
      "M9oc");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _perf_chart_export_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./perf-chart-export.component */
      "r2od");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerfChartExportComponent = [_perf_chart_export_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerfChartExportComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerfChartExportComponent,
        data: {}
      });

      function View_PerfChartExportComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-link btn-sm"], ["id", "export-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onExportAllClicked() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.perf.chart.exportAll.button"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PerfChartExportComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "vsan-perf-detail-charts", [], null, [[null, "allChartsLoaded"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("allChartsLoaded" === en) {
            var pd_0 = (_co.data = _co.data.concat($event)) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _view_perf_detail_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PerfDetailChartsComponent_0"], _view_perf_detail_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PerfDetailChartsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _view_perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_4__["PerfDetailChartsComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_5__["VsanPerfPropertyProvider"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_6__["PerfOrchestratorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_8__["IoInsightService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_3__["ReferenceWatcher"]], {
          extraDesc: [0, "extraDesc"],
          commonPerfData: [1, "commonPerfData"],
          entity: [2, "entity"],
          chartMetrics: [3, "chartMetrics"],
          collapsible: [4, "collapsible"]
        }, {
          allChartsLoaded: "allChartsLoaded"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.extraDesc;
          var currVal_1 = _co.commonPerfData;
          var currVal_2 = _v.context.$implicit;

          var currVal_3 = _co.entityToMetricsMap.get(_v.context.$implicit);

          var currVal_4 = true;

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_PerfChartExportComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartExportComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.chartsEntities;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PerfChartExportComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartExportComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartExportComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.data == null ? null : _co.data.length;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.entityToMetricsMap == null ? null : _co.entityToMetricsMap.size;

          _ck(_v, 7, 0, currVal_1);
        }, null);
      }

      function View_PerfChartExportComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-perf-chart-export", [], null, null, null, View_PerfChartExportComponent_0, RenderType_PerfChartExportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _perf_chart_export_component__WEBPACK_IMPORTED_MODULE_11__["PerfChartExportComponent"], [], null, null)], null, null);
      }

      var PerfChartExportComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-perf-chart-export", _perf_chart_export_component__WEBPACK_IMPORTED_MODULE_11__["PerfChartExportComponent"], View_PerfChartExportComponent_Host_0, {
        data: "data",
        commonPerfData: "commonPerfData",
        entityToMetricsMap: "entityToMetricsMap",
        extraDesc: "extraDesc",
        entity: "entity",
        showSubEntities: "showSubEntities"
      }, {}, []);
      /***/

    },

    /***/
    "UyEO":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/performance/view/single-entity-data-perf.component.ts ***!
      \****************************************************************************/

    /*! exports provided: SingleEntityDataPerfComponent */

    /***/
    function UyEO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleEntityDataPerfComponent", function () {
        return SingleEntityDataPerfComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/unavailable-view/unavailable-view-spec */
      "Hg5h");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_dom_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/dom-util */
      "r+G3");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../model/base-perf-entity */
      "YGYr");
      /* harmony import */


      var _util_perf_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../util/perf-utils */
      "RAUQ");
      /* harmony import */


      var _base_entity_data_perf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./base-entity-data-perf.component */
      "cw9q");

      var SingleEntityDataPerfComponent = /*@__PURE__*/function () {
        var SingleEntityDataPerfComponent = /*#__PURE__*/function (_base_entity_data_per) {
          _inherits(SingleEntityDataPerfComponent, _base_entity_data_per);

          var _super = _createSuper(SingleEntityDataPerfComponent);

          function SingleEntityDataPerfComponent(vsanPerfPropertyProvider, diskMgmtService, dataService, changeDetector, refWatcher) {
            var _this7;

            _classCallCheck(this, SingleEntityDataPerfComponent);

            _this7 = _super.call(this);
            _this7.vsanPerfPropertyProvider = vsanPerfPropertyProvider;
            _this7.diskMgmtService = diskMgmtService;
            _this7.dataService = dataService;
            _this7.changeDetector = changeDetector;
            _this7.refWatcher = refWatcher;
            _this7.loading = false;
            _this7.exportData = [];
            _this7.isAskVmwareLinkVisible = true;
            _this7.showExportAllButton = true;
            _this7.showHeaderSection = true;
            /**
             * Caches which server clusters have perfsvc enabled,
             * in order to show unavailable view if the server perfsvc is disabled.
             */

            _this7.serverClusterRefToPersvcEnabledState = new Map();

            _this7.getQueryObject = function () {
              if (!_this7.isComputeOnlyCluster && _this7.monitoredServerCluster && !_service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].areEqual(_this7.monitoredServerCluster, _service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].contextObject)) {
                // If a server cluster is monitored and it is not the local one
                return _this7.monitoredServerCluster;
              } else {
                return _service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].contextObject;
              }
            };

            _this7.getQueryProperty = function (entityTypeId) {
              switch (entityTypeId) {
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_VM_CONSUMPTION_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_VM_CONSUMPTION_REMOTE_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_BACKEND_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].PMEM_CLUSTER_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_VSAN_DIRECT_ENTITY:
                  return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_VSAN_CONFIGINFO_UUID_PROPERTY;

                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_VM_CONSUMPTION_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_BACKEND_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_NETWORK_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_ISCSI_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_VSAN_DIRECT_ENTITY:
                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].PMEM_HOST_ENTITY:
                  return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_VSAN_CONFIGINFO_NODEUUID_PROPERTY;

                case _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].VM_CONSUMPTION_ENTITY:
                  return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].VM_CONFIG_INSTANCE_UUID_PROPERTY;

                default:
                  return null;
              }
            };

            _this7.handleError = function (err) {
              _this7.loading = false;

              _util_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"].error(err);
            };

            _this7.createBasePerfEntity = function (entityTypeId) {
              var entity = new _model_base_perf_entity__WEBPACK_IMPORTED_MODULE_8__["BasePerfEntity"]();
              entity.entityId = entityTypeId;
              entity.entityUuid = _this7.currentEntityId;
              entity.configSpec = _this7.commonPerfData.entityTypes[entityTypeId];
              return entity;
            };

            _this7.refWatcher.watchGlobalRefreshSubscription(SingleEntityDataPerfComponent.prototype.constructor.name);

            return _this7;
          }

          _createClass(SingleEntityDataPerfComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              // clear the chart when the first time user changes the time rage state
              if (changes.isRealtime && this.chartsView) {
                this.chartsView.chartMetrics = null;
              } // In case the entityType changed, we need to update the query


              if (changes.entityTypeId && changes.entityTypeId.currentValue || changes.monitoredServerCluster && changes.monitoredServerCluster.currentValue) {
                this.fetch();
              } else {
                this.fetchChartsData();
              }
            }
          }, {
            key: "fetch",
            value: function fetch() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var queryProperty, entityId;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.loading = true;
                        this.unavailableView = null;
                        _context3.t0 = this.isVsanDirectPerfView;

                        if (!_context3.t0) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.next = 6;
                        return this.diskMgmtService.hasVsanDirectDisks(_service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].contextObject);

                      case 6:
                        _context3.t0 = !_context3.sent;

                      case 7:
                        if (!_context3.t0) {
                          _context3.next = 11;
                          break;
                        }

                        this.unavailableView = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_2__["UnavailableViewSpec"].PERF_NO_VSAN_DIRECT_DISKS_CLAIMED;
                        this.loading = false;
                        return _context3.abrupt("return");

                      case 11:
                        _context3.t1 = this.isComputeOnlyCluster;

                        if (!_context3.t1) {
                          _context3.next = 16;
                          break;
                        }

                        _context3.next = 15;
                        return this.isServerClusterPerfsvcEnabled();

                      case 15:
                        _context3.t1 = !_context3.sent;

                      case 16:
                        if (!_context3.t1) {
                          _context3.next = 20;
                          break;
                        }

                        this.unavailableView = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_2__["UnavailableViewSpec"].PERF_COMPUTE_ONLY_SERVER_PERFSVC_DISABLED;
                        this.loading = false;
                        return _context3.abrupt("return");

                      case 20:
                        if (this.isShownInVolumeDetailedPerfView) {
                          this.loading = false;
                          this.currentEntityId = this.currentEntity.entityUuid;
                          this.fetchChartsData();
                        }

                        queryProperty = this.getQueryProperty(this.entityTypeId);

                        if (queryProperty) {
                          _context3.next = 25;
                          break;
                        }

                        this.loading = false;
                        return _context3.abrupt("return");

                      case 25:
                        _context3.prev = 25;
                        _context3.next = 28;
                        return this.getEntityId(queryProperty);

                      case 28:
                        entityId = _context3.sent;
                        this.loading = false;
                        this.handleEntityId(entityId);
                        _context3.next = 36;
                        break;

                      case 33:
                        _context3.prev = 33;
                        _context3.t2 = _context3["catch"](25);
                        this.handleError(_context3.t2);

                      case 36:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[25, 33]]);
              }));
            }
          }, {
            key: "isVsanDirectPerfView",
            get: function get() {
              return this.entityTypeId === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_VSAN_DIRECT_ENTITY || this.entityTypeId === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_VSAN_DIRECT_ENTITY;
            }
            /**
             * Returns true if the component is shown in volume's details performance tab.
             */

          }, {
            key: "isShownInVolumeDetailedPerfView",
            get: function get() {
              return this.isFileSharePerfView || this.isAttachedVolumePerfView;
            }
          }, {
            key: "isFileSharePerfView",
            get: function get() {
              return this.entityTypeId === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].CLUSTER_FILE_SERVICE_ENTITY;
            }
          }, {
            key: "isAttachedVolumePerfView",
            get: function get() {
              return this.entityTypeId === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].VM_VIRTUAL_DISK_ENTITY;
            }
          }, {
            key: "getEntityId",
            value: function getEntityId(queryProperty) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _yield$Promise$all, _yield$Promise$all2, clientUuid, serverUuid;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!this.isComputeOnlyCluster) {
                          _context4.next = 8;
                          break;
                        }

                        _context4.next = 3;
                        return Promise.all([this.dataService.getProperty(queryProperty, _service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].contextObject), this.dataService.getProperty(queryProperty, this.monitoredServerCluster)]);

                      case 3:
                        _yield$Promise$all = _context4.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        clientUuid = _yield$Promise$all2[0];
                        serverUuid = _yield$Promise$all2[1];
                        return _context4.abrupt("return", "".concat(serverUuid, "|").concat(clientUuid));

                      case 8:
                        _context4.next = 10;
                        return this.dataService.getProperty(queryProperty, this.getQueryObject());

                      case 10:
                        return _context4.abrupt("return", _context4.sent);

                      case 11:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }
          }, {
            key: "handleEntityId",
            value: function handleEntityId(entityId) {
              this.extraDesc = this.entityTypeId === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartDataConstants"].HOST_NETWORK_ENTITY ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].getString("vsan.perf.chart.host.network.description.extra") : null;
              this.currentEntityId = entityId;
              this.fetchChartsData();
            }
          }, {
            key: "fetchChartsData",
            value: function fetchChartsData() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return this.waitForChartsContainer();

                      case 2:
                        if (!(!this.commonPerfData.entityTypes || !this.commonPerfData.clusterRef || !this.currentEntityId || !this.currentTimeRange)) {
                          _context5.next = 4;
                          break;
                        }

                        return _context5.abrupt("return");

                      case 4:
                        if (!this.isRealtime) {
                          this.chartsView.chartMetrics = null;
                        }

                        if (this.isShownInVolumeDetailedPerfView) {
                          // the currentEntity is set outside of the view, so update only entity type here.
                          _util_perf_utils__WEBPACK_IMPORTED_MODULE_9__["PerformanceUtils"].updatePerfEntityType(this.currentEntity, this.commonPerfData);
                        } else {
                          this.currentEntity = this.createBasePerfEntity(this.entityTypeId);
                        }

                        this.chartsView.entity = this.currentEntity;
                        this.chartsView.queryChartsDataByTimeRange(this.currentTimeRange, this.getTargetCluster(), !this.isRealtime);

                      case 8:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            }
          }, {
            key: "waitForChartsContainer",
            value: function waitForChartsContainer() {
              var _this8 = this;

              if (_util_dom_util__WEBPACK_IMPORTED_MODULE_5__["DomUtil"].domElementExists("singleEntitiesChartsView")) {
                return Promise.resolve();
              }

              return new Promise(function (resolve) {
                _this8.refWatcher.setTimeout(function () {
                  resolve(_this8.waitForChartsContainer());
                }, 1000);
              });
            }
          }, {
            key: "getTargetCluster",
            value: function getTargetCluster() {
              return this.commonPerfData.isComputeOnlyCluster ? this.monitoredServerCluster : this.commonPerfData.clusterRef;
            }
          }, {
            key: "onAllChartsLoaded",
            value: function onAllChartsLoaded($event) {
              this.exportData = $event;

              if (!this.changeDetector.destroyed) {
                this.changeDetector.detectChanges();
              }
            }
            /**
             * Checks and caches the perfsvc status of the server cluster
             */

          }, {
            key: "isServerClusterPerfsvcEnabled",
            value: function isServerClusterPerfsvcEnabled() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var serverClusterRefString;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        serverClusterRefString = _service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].uid(this.monitoredServerCluster);

                        if (this.serverClusterRefToPersvcEnabledState.has(serverClusterRefString)) {
                          _context6.next = 9;
                          break;
                        }

                        _context6.t0 = this.serverClusterRefToPersvcEnabledState;
                        _context6.t1 = serverClusterRefString;
                        _context6.next = 7;
                        return this.vsanPerfPropertyProvider.getPerfServiceEnabled(this.monitoredServerCluster);

                      case 7:
                        _context6.t2 = _context6.sent;

                        _context6.t0.set.call(_context6.t0, _context6.t1, _context6.t2);

                      case 9:
                        return _context6.abrupt("return", this.serverClusterRefToPersvcEnabledState.get(serverClusterRefString));

                      case 12:
                        _context6.prev = 12;
                        _context6.t3 = _context6["catch"](0);
                        this.handleError(_context6.t3);

                      case 15:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this, [[0, 12]]);
              }));
            }
          }, {
            key: "onEntitySelect",
            value: function onEntitySelect(entity) {
              this.toggleHighResolutionSpecName(entity);
            }
          }]);

          return SingleEntityDataPerfComponent;
        }(_base_entity_data_perf_component__WEBPACK_IMPORTED_MODULE_10__["BaseEntityDataPerfComponent"]);

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_3__["RefreshHandler"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], SingleEntityDataPerfComponent.prototype, "fetch", null);
        return SingleEntityDataPerfComponent;
      }();
      /***/

    },

    /***/
    "ZAZl":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/performance/export/perf-chart-export.scss.shim.ngstyle.js ***!
      \********************************************************************************/

    /*! exports provided: styles */

    /***/
    function ZAZl(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["#export-btn[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS9leHBvcnQvcGVyZi1jaGFydC1leHBvcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQUNBO0VBQ0cscUJBQUE7RUFDQSxvQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9wZXJmb3JtYW5jZS9leHBvcnQvcGVyZi1jaGFydC1leHBvcnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIwIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4jZXhwb3J0LWJ0biB7XG4gICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn0iXX0= */"];
      /***/
    },

    /***/
    "cw9q":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/performance/view/base-entity-data-perf.component.ts ***!
      \**************************************************************************/

    /*! exports provided: BaseEntityDataPerfComponent */

    /***/
    function cw9q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseEntityDataPerfComponent", function () {
        return BaseEntityDataPerfComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/illustrated-message/illustrated-message.component */
      "GNkU");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../model/nested-perf-entity */
      "ZZcQ");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var BaseEntityDataPerfComponent = /*#__PURE__*/function () {
        function BaseEntityDataPerfComponent() {
          _classCallCheck(this, BaseEntityDataPerfComponent);

          this.IllustratedMessageType = _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_1__["IllustratedMessageType"];
          this.currentTimeRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.currentPickerStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.currentHourIntervalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Whether to show loading spinner. For auto refresh we don't want to show the spinner.
           */

          this.showLoading = true;
          this.onTooltipActionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(BaseEntityDataPerfComponent, [{
          key: "currentEntity",
          get: function get() {
            return this._currentEntity;
          },
          set: function set(val) {
            if (this._currentEntity === val) {
              return;
            }

            this._currentEntity = val;
            this.onEntitySelect(val);
          }
        }, {
          key: "currentTimeRange",
          get: function get() {
            return this._currentTimeRange;
          },
          set: function set(val) {
            if (!val) {
              return;
            }

            this._currentTimeRange = val;
            this.currentTimeRangeChange.emit(this._currentTimeRange);
          }
        }, {
          key: "currentPickerState",
          get: function get() {
            return this._currentPickerState;
          },
          set: function set(val) {
            if (val == null) {
              return;
            }

            this._currentPickerState = val;
            this.currentPickerStateChange.emit(this._currentPickerState);
          }
        }, {
          key: "currentHourInterval",
          get: function get() {
            return this._hourInterval;
          },
          set: function set(val) {
            if (val == null) {
              return;
            }

            this._hourInterval = val;
          }
          /**
           * Add "hr-" prefix to the entity.configSpec.name if it's realtime, or remove it if user leaves realtime chart mode
           */

        }, {
          key: "toggleHighResolutionSpecName",
          value: function toggleHighResolutionSpecName(entity) {
            if (!(entity === null || entity === void 0 ? void 0 : entity.configSpec)) {
              return entity;
            }

            if (entity instanceof _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_3__["NestedPerfEntity"]) {
              this.toggleHighResolutionSpecName(entity.combinedEntity);
            }

            if (this.isRealtime) {
              if (!this.hasHighResolutionPrefix(entity.configSpec.name)) {
                entity.configSpec.name = "".concat(_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartDataConstants"].HIGH_RESOLUTION_PREFIX).concat(entity.configSpec.name);
              }
            } else {
              if (this.hasHighResolutionPrefix(entity.configSpec.name)) {
                entity.configSpec.name = entity.configSpec.name.replace(_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartDataConstants"].HIGH_RESOLUTION_PREFIX, "");
              }
            }

            return entity;
          }
        }, {
          key: "hasHighResolutionPrefix",
          value: function hasHighResolutionPrefix(configSpecName) {
            return configSpecName.startsWith(_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartDataConstants"].HIGH_RESOLUTION_PREFIX);
          }
        }]);

        return BaseEntityDataPerfComponent;
      }();
      /***/

    },

    /***/
    "r2od":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/performance/export/perf-chart-export.component.ts ***!
      \************************************************************************/

    /*! exports provided: PerfChartExportComponent */

    /***/
    function r2od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartExportComponent", function () {
        return PerfChartExportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _component_export_downloaders_zip_downloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/export/downloaders/zip-downloader */
      "cIdg");

      var PerfChartExportComponent = /*#__PURE__*/function () {
        function PerfChartExportComponent() {
          var _this9 = this;

          _classCallCheck(this, PerfChartExportComponent);

          this.DEFAULT_ZIP_NAME = "results";
          this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"];
          this.data = [];
          this.showSubEntities = false;

          this.onSelectOptions = function (options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.options = options;
                      this.exportCharts();

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          };

          this.exportCharts = function () {
            var zip = new _component_export_downloaders_zip_downloader__WEBPACK_IMPORTED_MODULE_3__["ZipDownloader"]();

            _this9.data.filter(function (perfData) {
              return _this9.isDataRequested(perfData);
            }).forEach(function (perfData) {
              return zip.goToFolder(_this9.getFolder(perfData)).addSvg(perfData.graphName, perfData.chart.getSVG()).addCsvRaw(perfData.graphName, perfData.chart.getCSV(true));
            });

            zip.download(_this9.zipName);
          };
        }

        _createClass(PerfChartExportComponent, [{
          key: "entityToMetricsMap",
          get: function get() {
            if (!this._entityToMetricsMap) {
              return new Map();
            }

            return this._entityToMetricsMap;
          },
          set: function set(val) {
            this._entityToMetricsMap = val;
            this.chartsEntities = _toConsumableArray(val.keys());
          }
        }, {
          key: "onExportAllClicked",
          value: function onExportAllClicked() {
            var context = {
              exportData: this.data.filter(function (chartData) {
                return chartData;
              }),
              showSubEntities: this.showSubEntities
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_2__["ModalBuilder"]("performanceCommon/exportOptions").setSize(790, 300).open(context).then(this.onSelectOptions);
          }
        }, {
          key: "isDataRequested",
          value: function isDataRequested(perfData) {
            if (!this.options.selectedGraphs.includes(perfData.graphName)) {
              return false;
            }

            if (perfData.subEntityName && !this.options.selectedSubEntities.includes(perfData.subEntityName)) {
              return false;
            }

            return true;
          }
        }, {
          key: "getFolder",
          value: function getFolder(perfData) {
            return perfData.subEntityName ? perfData.subEntityName : null;
          }
        }, {
          key: "zipName",
          get: function get() {
            return this.entity.entityName ? this.entity.entityName : this.DEFAULT_ZIP_NAME;
          }
        }]);

        return PerfChartExportComponent;
      }();
      /***/

    },

    /***/
    "xQ+i":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/performance/view/single-entity-data-perf.component.ngfactory.js ***!
      \**************************************************************************************/

    /*! exports provided: RenderType_SingleEntityDataPerfComponent, View_SingleEntityDataPerfComponent_0, View_SingleEntityDataPerfComponent_Host_0, SingleEntityDataPerfComponentNgFactory */

    /***/
    function xQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SingleEntityDataPerfComponent", function () {
        return RenderType_SingleEntityDataPerfComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleEntityDataPerfComponent_0", function () {
        return View_SingleEntityDataPerfComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleEntityDataPerfComponent_Host_0", function () {
        return View_SingleEntityDataPerfComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleEntityDataPerfComponentNgFactory", function () {
        return SingleEntityDataPerfComponentNgFactory;
      });
      /* harmony import */


      var _single_entity_data_perf_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-entity-data-perf.scss.shim.ngstyle */
      "KIqC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/unavailable-view/unavailable-view.component.ngfactory */
      "Kfm7");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/unavailable-view/unavailable-view.component */
      "hlBw");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../generated/hci-quickstart-status-service */
      "KbWe");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _export_perf_chart_export_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../export/perf-chart-export.component.ngfactory */
      "RThr");
      /* harmony import */


      var _export_perf_chart_export_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../export/perf-chart-export.component */
      "r2od");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _perf_detail_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./perf-detail-charts.component.ngfactory */
      "8486");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./perf-detail-charts.component */
      "M9oc");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _single_entity_data_perf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./single-entity-data-perf.component */
      "UyEO");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../generated/disk-management-service */
      "a6dL");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../common/service/client/dataservice/data-service.service */
      "QIo8");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SingleEntityDataPerfComponent = [_single_entity_data_perf_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SingleEntityDataPerfComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SingleEntityDataPerfComponent,
        data: {}
      });

      function View_SingleEntityDataPerfComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "spinner spinner-lg central-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_SingleEntityDataPerfComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_3__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_4__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_6__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_7__["VsanPerfPropertyProvider"]], {
          unavailableViewSpec: [0, "unavailableViewSpec"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.unavailableView;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_SingleEntityDataPerfComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-perf-chart-export", [["class", "export-button"], ["extraDesc", "extraDesc"]], null, null, null, _export_perf_chart_export_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_PerfChartExportComponent_0"], _export_perf_chart_export_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_PerfChartExportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _export_perf_chart_export_component__WEBPACK_IMPORTED_MODULE_9__["PerfChartExportComponent"], [], {
          data: [0, "data"],
          commonPerfData: [1, "commonPerfData"],
          extraDesc: [2, "extraDesc"],
          entity: [3, "entity"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.exportData;
          var currVal_1 = _co.commonPerfData;
          var currVal_2 = "extraDesc";
          var currVal_3 = _co.currentEntity;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_SingleEntityDataPerfComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleEntityDataPerfComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleEntityDataPerfComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.unavailableView;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.unavailableView && _co.currentEntity && _co.showExportAllButton;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_SingleEntityDataPerfComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-perf-detail-charts", [["id", "singleEntitiesChartsView"]], null, [[null, "allChartsLoaded"], [null, "onTooltipActionClicked"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("allChartsLoaded" === en) {
            var pd_0 = _co.onAllChartsLoaded($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onTooltipActionClicked" === en) {
            var pd_1 = _co.onTooltipActionClicked.emit($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _perf_detail_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_PerfDetailChartsComponent_0"], _perf_detail_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_PerfDetailChartsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, [[1, 4]], 0, _perf_detail_charts_component__WEBPACK_IMPORTED_MODULE_13__["PerfDetailChartsComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_7__["VsanPerfPropertyProvider"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_14__["PerfOrchestratorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_15__["IoInsightService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"]], {
          extraDesc: [0, "extraDesc"],
          parentLoading: [1, "parentLoading"],
          commonPerfData: [2, "commonPerfData"],
          visibleGraphId: [3, "visibleGraphId"],
          showHeaderSection: [4, "showHeaderSection"],
          isAskVmwareLinkVisible: [5, "isAskVmwareLinkVisible"],
          isRealtime: [6, "isRealtime"],
          actionLink: [7, "actionLink"],
          consolidatedEntitiesData: [8, "consolidatedEntitiesData"],
          chartWidth: [9, "chartWidth"],
          chartHeight: [10, "chartHeight"]
        }, {
          allChartsLoaded: "allChartsLoaded",
          onTooltipActionClicked: "onTooltipActionClicked"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.extraDesc;
          var currVal_1 = _co.loading;
          var currVal_2 = _co.commonPerfData;
          var currVal_3 = _co.visibleGraphId;
          var currVal_4 = _co.showHeaderSection;
          var currVal_5 = _co.isAskVmwareLinkVisible;
          var currVal_6 = _co.isRealtime;
          var currVal_7 = _co.actionLink;
          var currVal_8 = _co.consolidatedEntitiesData;
          var currVal_9 = _co.chartWidth;
          var currVal_10 = _co.chartHeight;

          _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]);
        }, null);
      }

      function View_SingleEntityDataPerfComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartsView: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleEntityDataPerfComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleEntityDataPerfComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleEntityDataPerfComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.loading;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.loading;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = !_co.unavailableView;

          _ck(_v, 9, 0, currVal_2);
        }, null);
      }

      function View_SingleEntityDataPerfComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-single-entity-data-perf", [], null, null, null, View_SingleEntityDataPerfComponent_0, RenderType_SingleEntityDataPerfComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _single_entity_data_perf_component__WEBPACK_IMPORTED_MODULE_16__["SingleEntityDataPerfComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_7__["VsanPerfPropertyProvider"], _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_17__["DiskManagementService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_18__["DataServiceClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_12__["ReferenceWatcher"]], null, null)], null, null);
      }

      var SingleEntityDataPerfComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-single-entity-data-perf", _single_entity_data_perf_component__WEBPACK_IMPORTED_MODULE_16__["SingleEntityDataPerfComponent"], View_SingleEntityDataPerfComponent_Host_0, {
        currentEntity: "currentEntity",
        currentTimeRange: "currentTimeRange",
        currentPickerState: "currentPickerState",
        currentHourInterval: "currentHourInterval",
        commonPerfData: "commonPerfData",
        showLoading: "showLoading",
        isRealtime: "isRealtime",
        entityTypeId: "entityTypeId",
        actionLink: "actionLink",
        isComputeOnlyCluster: "isComputeOnlyCluster",
        monitoredServerCluster: "monitoredServerCluster",
        consolidatedEntitiesData: "consolidatedEntitiesData",
        visibleGraphId: "visibleGraphId",
        isAskVmwareLinkVisible: "isAskVmwareLinkVisible",
        showExportAllButton: "showExportAllButton",
        showHeaderSection: "showHeaderSection",
        chartWidth: "chartWidth",
        chartHeight: "chartHeight"
      }, {
        currentTimeRangeChange: "currentTimeRangeChange",
        currentPickerStateChange: "currentPickerStateChange",
        currentHourIntervalChange: "currentHourIntervalChange",
        onTooltipActionClicked: "onTooltipActionClicked"
      }, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=55-es5.js.map