(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106], {
    /***/
    "2BwX":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loading-indicator.decorator.ts ***!
      \*************************************************************************/

    /*! exports provided: LoadingIndicator */

    /***/
    function BwX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function () {
        return LoadingIndicator;
      });
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This property decorator is supposed to be used along with the @Loader decorator.
       * As the @Loader decorator keeps track of all the active loading operations,
       * we can easily know if all the loading is completed. If there are any ongoing loading
       * operations, the property decorated with @LoadingIndicator will be set to "true", otherwise - it will be "false".
       * You can have as many properties decorated with @LoadingIndicator as you want, but they need to have different names.
       * The LoadingIndicator will show the loading state of the Loader methods with the same name.
       *
       * <pre>
       * @Loader()
       * loadDataSync(): any {
       *    // Load some data
       * }
       *
       * @Loader()
       * loadDataAsync(): Promise<any> {
       *    // Load some data
       * }
       *
       * @LoadingIndicator
       * isLoading: boolean; // The field will be set to "false" when the both the methods are complete and the Promise is resolved.
       * </pre>
       */


      function LoadingIndicator(props) {
        props = props || {};
        return function (targetClass, propertyKey) {
          Object.defineProperty(targetClass, propertyKey, {
            get: function get() {
              var _this = this;

              if (Array.isArray(props.name)) {
                return props.name.some(function (loaderName) {
                  return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](_this, loaderName).isLoading;
                });
              }

              return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, props.name).isLoading;
            }
          });
        };
      }
      /***/

    },

    /***/
    "3UtR":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-tab.scss.shim.ngstyle.js ***!
      \******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function UtR(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.capacity-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.capacity-label[_ngcontent-%COMP%] {\n  line-height: initial;\n  margin-right: 0.6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.capacity-label[_ngcontent-%COMP%]   .selected-entity[_ngcontent-%COMP%] {\n  font-family: \"Metropolis\";\n  font-weight: 600;\n  font-style: italic;\n}\n.capacity-label[_ngcontent-%COMP%]   div.p7[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.capacity-error-summary-icon[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\nclr-datagrid[_ngcontent-%COMP%]   .primary-column[_ngcontent-%COMP%] {\n  width: 300px;\n}\nclr-datagrid[_ngcontent-%COMP%]   .host-cell-indent[_ngcontent-%COMP%] {\n  padding-left: 0.6rem;\n}\nclr-datagrid[_ngcontent-%COMP%]   clr-dg-cell[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  height: 36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nclr-datagrid[_ngcontent-%COMP%]   clr-dg-cell[_ngcontent-%COMP%]   .selected-entity[_ngcontent-%COMP%] {\n  font-family: \"Metropolis\";\n  font-weight: 600;\n  font-style: italic;\n}\nclr-datagrid[_ngcontent-%COMP%]   clr-dg-row-detail[_ngcontent-%COMP%] {\n  border-top: 0.05rem solid var(--vsan-border-color);\n}\n.color-legend-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.color-legend-container[_ngcontent-%COMP%]   .color-legend-label[_ngcontent-%COMP%] {\n  margin-right: 0.6rem;\n}\n.color-legend-container[_ngcontent-%COMP%]   .color-legend[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n  width: 12px;\n  height: 12px;\n}\n.color-legend-container[_ngcontent-%COMP%]   .color-legend.no-capacity-legend[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, transparent 34%, var(--vsan-color) 34%, var(--vsan-color) 51%, transparent 51%, transparent 84%, var(--vsan-color) 84%, var(--vsan-color) 100%);\n  background-size: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9yZXBvcnQvY2FwYWNpdHkvcHJlY2hlY2stY2FwYWNpdHktdGFiLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMS0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBWUg7QUU4Qkc7RUFDRyxnQ0FBQTtBRjVCTjtBRThCRzs7RUFHRyxnQ0FBQTtBRjdCTjtBRStCRztFQUNHLDhCQUFBO0FGN0JOO0FBbEJBO0VBQ0csYUFBQTtBQXFCSDtBQWxCQTtFQUNHLG9CQUFBO0VBQ0Esb0JHRE87RUhFUCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXFCSDtBQW5CRztFRXlFQSx5QkFBQTtFQUNBLGdCQ29DdUI7RURuQ3ZCLGtCQUFBO0FGbkRIO0FBcEJHO0VBQ0csYUFBQTtBQXNCTjtBQWpCQTtFQUNHLG1CQUFBO0FBb0JIO0FBaEJHO0VBQ0csWUFBQTtBQW1CTjtBQWhCRztFQUNHLG9CRzFCSTtBSDRDVjtBQWZHO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWlCTjtBQWhCTTtFRXlDSCx5QkFBQTtFQUNBLGdCQ29DdUI7RURuQ3ZCLGtCQUFBO0FGdEJIO0FBZkc7RUFDRyxrREdaUTtBSDZCZDtBQWJBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFnQkg7QUFmRztFQUNHLG9CR3RESTtBSHVFVjtBQWZHO0VBQ0csb0JHdkRJO0VId0RKLFdBeEV1QjtFQXlFdkIsWUF6RXVCO0FBMEY3QjtBQWhCTTtFRWNILHdMQUFBO0VBQ0Esd0JBQUE7QUZLSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcHJlY2hlY2svcmVwb3J0L2NhcGFjaXR5L3ByZWNoZWNrLWNhcGFjaXR5LXRhYi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJGNhcGFjaXR5LWNvbG9yLWxlZ2VuZC1zaXplOiAxMnB4O1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi5jYXBhY2l0eS1yb3cge1xuICAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcGFjaXR5LWxhYmVsIHtcbiAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgLnNlbGVjdGVkLWVudGl0eSB7XG4gICAgICBAaW5jbHVkZSBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpO1xuICAgfVxuXG4gICBkaXYucDcge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgIH1cbn1cblxuLy8gYWxpZ24gY2xhcml0eSBpY29uIHdpdGggdGV4dFxuLmNhcGFjaXR5LWVycm9yLXN1bW1hcnktaWNvbiB7XG4gICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xufVxuXG5jbHItZGF0YWdyaWQge1xuICAgLnByaW1hcnktY29sdW1uIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgIH1cblxuICAgLmhvc3QtY2VsbC1pbmRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICB9XG4gICAvLyBzdHJldGNoIHRoZSBjb250ZW50IG9mIHRoZSBjZWxsIHRvIGluY3JlYXNlIHJlYWRhYmlsaXR5XG4gICBjbHItZGctY2VsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIC5zZWxlY3RlZC1lbnRpdHkge1xuICAgICAgICAgQGluY2x1ZGUgc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gYWRkIGJvcmRlciBhYm92ZSBlYWNoIGRldGFpbCByb3dcbiAgIGNsci1kZy1yb3ctZGV0YWlsIHtcbiAgICAgIGJvcmRlci10b3A6ICR2c2FuLWJvcmRlcjtcbiAgIH1cbn1cblxuLmNvbG9yLWxlZ2VuZC1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgLmNvbG9yLWxlZ2VuZC1sYWJlbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgIH1cbiAgIC5jb2xvci1sZWdlbmQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZztcbiAgICAgIHdpZHRoOiAkY2FwYWNpdHktY29sb3ItbGVnZW5kLXNpemU7XG4gICAgICBoZWlnaHQ6ICRjYXBhY2l0eS1jb2xvci1sZWdlbmQtc2l6ZTtcbiAgICAgICYubm8tY2FwYWNpdHktbGVnZW5kIHtcbiAgICAgICAgIEBpbmNsdWRlIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoKTtcbiAgICAgIH1cbiAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "7oHn":
    /*!*********************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/error-handler.decorator.ts ***!
      \*********************************************************************/

    /*! exports provided: ErrorHandler */

    /***/
    function oHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandler", function () {
        return ErrorHandler;
      });
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This property decorator is supposed to be used along with the @Loader decorator.
       * If an exception is thrown during the execution of the method decorated with @Loader
       * the ErrorHandler method will be invoked. You can define as many ErrorHandlers as you want,
       * but they must be with different names. The name can be provided as input to the decorator.
       * If a name is set to the ErrorHandler it will handle only the errors thrown by Loader functions
       * with the same name. If no name is passed to the ErrorHandler, it will handle only the errors
       * from Loader functions with no name.
       *
       * <pre>
       * // Example 1:
       * @Loader()
       * loadSyncData(): any {
       *    throw new Error("Failed to load sync data");
       * }
       *
       * @ErrorHandler()
       * handleError(err: any) {
       *    // handle the error.
       * }
       *...
       *
       * // Example 2
       *
       * @Loader({name: "data-loading-flow})
       * async loadAsyncData(): Promise<any> {
       *    return Promise.reject("Failed to load async data");
       * }
       *
       * @ErrorHandler({name: "data-loading-flow})
       * handleError(err: any) {
       *    // handle the error.
       * }
       * ...
       * </pre>
       */


      function ErrorHandler(props) {
        props = props || {};
        return function (targetClass, functionName, descriptor) {
          new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](targetClass, props.name).errorHandler = descriptor.value;
        };
      }
      /***/

    },

    /***/
    "8V30":
    /*!**************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loader.decorator.ts ***!
      \**************************************************************/

    /*! exports provided: Loader */

    /***/
    function V30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Loader", function () {
        return Loader;
      });
      /* harmony import */


      var _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/function-wrapper */
      "7ZNc");
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_reflection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/reflection */
      "bM2O");
      /* harmony import */


      var _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../vsan-app.module */
      "Uag/");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Method decorator that does the following:
       *  - watches for errors and if such appear:
       *       - the error is logged in the browser's console
       *       - the error is logged in the H5C server log
       *       - the related @ErrorMessage fields are populated
       *       - the related @ErrorHandler methods are invoked
       *  - Updates the @LoadingIndicator decorated fields
       *  - Invokes the screen reader service once the loading operation completes successfully
       */


      function Loader(params) {
        // If no params are passed, initialize the variable in order to avoid multiple null-checks
        params = params || {};
        return function (targetClass, functionName, descriptor) {
          // Use the component name as tag in order easily find where the error was thrown.
          var tag = _util_reflection__WEBPACK_IMPORTED_MODULE_3__["Reflection"].getClassName(targetClass);

          var loaderName = params.name;
          var originalFn = descriptor.value;

          descriptor.value = function () {
            var loadingFlowWrapper = new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__["LoadingFlowWrapper"](this, loaderName);
            return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["FunctionWrapper"](originalFn).preExecute(function () {
              loadingFlowWrapper.error = undefined;
              loadingFlowWrapper.incrementLoads();

              _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.preLoadSrMessage || params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADING);
            }).postExecute(function () {
              _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADED);
            }).onError(function (ex) {
              processError(loadingFlowWrapper, tag, ex);
              var rethrow = shouldRethrow(loadingFlowWrapper, params);

              if (!rethrow) {
                ex = invokeErrorHandler(loadingFlowWrapper, ex);
              }

              return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["ErrorContext"](rethrow, ex);
            })["finally"](function () {
              loadingFlowWrapper.decrementLoads();
            }).invoke(loadingFlowWrapper.backingObject, arguments);
          };
        };
      }
      /**
       * Handles the given error by:
       *  - logging the error in the browsers console
       *  - logging the error in the H5C backend log
       *  - updates all @ErrorMessage fields
       */


      function processError(wrapper, tag, ex) {
        // Log the error to the backend
        _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__["GlobalLogger"].error(tag, ex); // Cache the error so it can be retrieved by @ErrorMessage decorated fields


        wrapper.error = ex;
      }
      /**
       * Invokes the error handler (if defined)
       */


      function invokeErrorHandler(wrapper, ex) {
        var handler = wrapper.errorHandler;
        return !!handler ? handler.call(wrapper.backingObject, ex) : null;
      }
      /**
       * Reject the promise only if:
       * 1. there are no handlers declared
       * 2. the components has explicitly requested the error to be rethrown
       */


      function shouldRethrow(wrapper, params) {
        return !wrapper.errorHandler && !wrapper.errorMessageGetter || !!params.rethrow;
      }
      /***/

    },

    /***/
    "8qVz":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/psp/precheck-persistence-tab.component.ngfactory.js ***!
      \******************************************************************************************/

    /*! exports provided: RenderType_PrecheckPersistenceTabComponent, View_PrecheckPersistenceTabComponent_0, View_PrecheckPersistenceTabComponent_Host_0, PrecheckPersistenceTabComponentNgFactory */

    /***/
    function qVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckPersistenceTabComponent", function () {
        return RenderType_PrecheckPersistenceTabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckPersistenceTabComponent_0", function () {
        return View_PrecheckPersistenceTabComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckPersistenceTabComponent_Host_0", function () {
        return View_PrecheckPersistenceTabComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckPersistenceTabComponentNgFactory", function () {
        return PrecheckPersistenceTabComponentNgFactory;
      });
      /* harmony import */


      var _precheck_persistence_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-persistence-tab.scss.shim.ngstyle */
      "PPZ6");
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


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/component/cell/icon-item.component.ngfactory */
      "ErWV");
      /* harmony import */


      var _common_component_cell_icon_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/component/cell/icon-item.component */
      "yJ+k");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_component_datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/component/datagrid/filter/enum-filter.component.ngfactory */
      "F8An");
      /* harmony import */


      var _common_component_datagrid_filter_enum_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../common/component/datagrid/filter/enum-filter.component */
      "0hTA");
      /* harmony import */


      var _precheck_persistence_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./precheck-persistence-tab.component */
      "rWU4");
      /* harmony import */


      var _precheck_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../precheck-report.service */
      "CWZg");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckPersistenceTabComponent = [_precheck_persistence_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckPersistenceTabComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckPersistenceTabComponent,
        data: {}
      });

      function View_PrecheckPersistenceTabComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 44, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[11, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[12, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_5__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 16777216, null, 2, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 114688, [[11, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 147456, [[12, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_5__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 16777216, null, 2, 6, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 114688, [[11, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 147456, [[12, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 4407296, null, 0, _common_directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_5__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_4__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 16777216, null, 2, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 114688, [[11, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, [[12, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 2, "vsan-icon-item", [], null, null, null, _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IconItemComponent_0"], _common_component_cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _common_component_cell_icon_item_component__WEBPACK_IMPORTED_MODULE_7__["IconItemComponent"], [], {
          label: [0, "label"],
          iconClass: [1, "iconClass"],
          shape: [2, "shape"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          _ck(_v, 20, 0);

          _ck(_v, 24, 0);

          _ck(_v, 28, 0);

          _ck(_v, 32, 0);

          _ck(_v, 36, 0);

          var currVal_24 = _co.getPersistenceStateLabel(_v.context.$implicit.state);

          var currVal_25 = _co.getPersistenceStateIconClasses(_v.context.$implicit.state);

          var currVal_26 = _co.getPersistenceStateIcon(_v.context.$implicit.state);

          _ck(_v, 41, 0, currVal_24, currVal_25, currVal_26);
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

          var currVal_9 = _v.context.$implicit.name;

          _ck(_v, 17, 0, currVal_9);

          var currVal_10 = true;
          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).signpost.length > 0;
          var currVal_12 = "hidden";
          var currVal_13 = "ellipsis";
          var currVal_14 = "nowrap";

          _ck(_v, 19, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_15 = _v.context.$implicit.namespace;

          _ck(_v, 25, 0, currVal_15);

          var currVal_16 = true;
          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).signpost.length > 0;
          var currVal_18 = "hidden";
          var currVal_19 = "ellipsis";
          var currVal_20 = "nowrap";

          _ck(_v, 27, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);

          var currVal_21 = _v.context.$implicit.service;

          _ck(_v, 33, 0, currVal_21);

          var currVal_22 = true;
          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).signpost.length > 0;

          _ck(_v, 35, 0, currVal_22, currVal_23);
        });
      }

      function View_PrecheckPersistenceTabComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_8__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 103, "clr-datagrid", [["id", "persistenceInstancesDatagrid"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](41, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](53, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](64, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](65, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 16777216, null, null, 20, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](76, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](77, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, 0, 8, "clr-dg-filter", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, 0, 2, "vsan-enum-filter", [], null, [[null, "selectedFilterValuesChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedFilterValuesChange" === en) {
            var pd_0 = _co.onSelectedFilterTypeChanged($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_EnumFilterComponent_0"], _common_component_datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_EnumFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 573440, [["typeFilterComponent", 4]], 0, _common_component_datagrid_filter_enum_filter_component__WEBPACK_IMPORTED_MODULE_11__["EnumFilterComponent"], [], {
          objects: [0, "objects"],
          field: [1, "field"],
          selectedFilterValues: [2, "selectedFilterValues"],
          enumToLabelConverter: [3, "enumToLabelConverter"]
        }, {
          selectedFilterValuesChange: "selectedFilterValuesChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckPersistenceTabComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, 2, 9, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, 2, 4, "clr-dg-pagination", [], [[8, "hidden", 0], [2, "pagination", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridPagination_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 245760, [["pagination", 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]], {
          pageSize: [0, "pageSize"],
          totalItems: [1, "totalItems"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          _pageSizeComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](101, 1, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](102, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = "name";

          _ck(_v, 35, 0, currVal_4);

          var currVal_8 = "namespace";

          _ck(_v, 47, 0, currVal_8);

          var currVal_12 = "service";

          _ck(_v, 59, 0, currVal_12);

          var currVal_16 = "state";

          _ck(_v, 70, 0, currVal_16);

          var currVal_18 = _co.persistentInstances;
          var currVal_19 = "state";
          var currVal_20 = _co.stateFilterValue;
          var currVal_21 = _co.getPersistenceStateLabel;

          _ck(_v, 84, 0, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_22 = _co.persistentInstances;

          _ck(_v, 91, 0, currVal_22);

          var currVal_26 = _co.DEFAULT_ITEMS_PER_PAGE;
          var currVal_27 = _co.persistentInstances.length;

          _ck(_v, 99, 0, currVal_26, currVal_27);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).detailService.isOpen;

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ariaSort;

          _ck(_v, 31, 0, currVal_2, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 40, 0, _ck(_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.nameHeader"));

          _ck(_v, 40, 0, currVal_5);

          var currVal_6 = true;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ariaSort;

          _ck(_v, 43, 0, currVal_6, currVal_7);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _ck(_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.namespaceHeader"));

          _ck(_v, 52, 0, currVal_9);

          var currVal_10 = true;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ariaSort;

          _ck(_v, 55, 0, currVal_10, currVal_11);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 64, 0, _ck(_v, 65, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.serviceHeader"));

          _ck(_v, 64, 0, currVal_13);

          var currVal_14 = true;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ariaSort;

          _ck(_v, 67, 0, currVal_14, currVal_15);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 76, 0, _ck(_v, 77, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.predictedStateHeader"));

          _ck(_v, 76, 0, currVal_17);

          var currVal_23 = true;

          _ck(_v, 94, 0, currVal_23);

          var currVal_24 = !_co.persistentInstances.length;
          var currVal_25 = true;

          _ck(_v, 98, 0, currVal_24, currVal_25);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 101, 0, _ck(_v, 102, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.pagination.label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).firstItem + 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).lastItem + 1, _co.persistentInstances.length));

          _ck(_v, 101, 0, currVal_28);
        });
      }

      function View_PrecheckPersistenceTabComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck-persistence-tab", [], null, null, null, View_PrecheckPersistenceTabComponent_0, RenderType_PrecheckPersistenceTabComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _precheck_persistence_tab_component__WEBPACK_IMPORTED_MODULE_12__["PrecheckPersistenceTabComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_13__["PrecheckReportService"]], null, null)], null, null);
      }

      var PrecheckPersistenceTabComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-persistence-tab", _precheck_persistence_tab_component__WEBPACK_IMPORTED_MODULE_12__["PrecheckPersistenceTabComponent"], View_PrecheckPersistenceTabComponent_Host_0, {
        persistentInstances: "persistentInstances"
      }, {
        filterChanged: "filterChanged"
      }, []);
      /***/

    },

    /***/
    "9Rpg":
    /*!************************************************!*\
      !*** ./src/app/vsan/precheck/precheck-util.ts ***!
      \************************************************/

    /*! exports provided: PrecheckUtil */

    /***/
    function Rpg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckUtil", function () {
        return PrecheckUtil;
      });
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/precheck-entity-type */
      "wzkD");
      /* Copyright 2019-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PrecheckUtil = /*@__PURE__*/function () {
        var PrecheckUtil = /*#__PURE__*/_createClass(function PrecheckUtil() {
          _classCallCheck(this, PrecheckUtil);
        });
        /**
         * Extracts the specified precheck entity from entities based on uuid.
         */


        PrecheckUtil.extractPrecheckEntityByUuid = function (uuid, entities) {
          if (!uuid || _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(entities)) {
            return null;
          }

          for (var index = 0; index < entities.length; index++) {
            if (entities[index].uuid === uuid) {
              return entities[index];
            } else {
              var selectedEntity = PrecheckUtil.extractPrecheckEntityByUuid(uuid, entities[index].children);

              if (selectedEntity) {
                return selectedEntity;
              }
            }
          }

          return null;
        };
        /**
         * Extracts the specified precheck host entity from entities based on host reference.
         */


        PrecheckUtil.extractHostEntity = function (hostRef, entities) {
          if (!hostRef || _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(entities)) {
            return null;
          }

          return entities.find(function (entity) {
            return entity.type === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_2__["PrecheckEntityType"].HOST && _service_managed_object__WEBPACK_IMPORTED_MODULE_0__["ManagedObject"].areEqual(hostRef, entity.hostRef);
          });
        };
        /**
         * Extracts the parent entity of the specified uuid.
         */


        PrecheckUtil.extractParentEntityByUuid = function (uuid, entities) {
          if (!uuid || _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(entities)) {
            return null;
          }

          for (var parentIndex = 0; parentIndex < entities.length; parentIndex++) {
            var children = entities[parentIndex].children;

            if (!children || children.length === 0) {
              continue;
            }

            if (children.find(function (element) {
              return uuid === element.uuid;
            })) {
              return entities[parentIndex];
            }

            var parentOfGrandChild = PrecheckUtil.extractParentEntityByUuid(uuid, children);

            if (parentOfGrandChild) {
              return parentOfGrandChild;
            }
          }

          return null;
        };

        return PrecheckUtil;
      }();
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
    "Ar20":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/precheck/guard-rails/precheck-guard-rails.scss.shim.ngstyle.js ***!
      \*************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Ar20(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.no-bottom-spacing[_nghost-%COMP%] {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9ndWFyZC1yYWlscy9wcmVjaGVjay1ndWFyZC1yYWlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBQXJCRztFQUNHLDJCQUFBO0FBdUJOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9wcmVjaGVjay9ndWFyZC1yYWlscy9wcmVjaGVjay1ndWFyZC1yYWlscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTktMjAyMCBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xuXG4gICAmLm5vLWJvdHRvbS1zcGFjaW5nIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "B7Mh":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/precheck/enter-maintenance-mode-dialog.component.ngfactory.js ***!
      \************************************************************************************/

    /*! exports provided: RenderType_EnterMaintenanceModeDialogComponent, View_EnterMaintenanceModeDialogComponent_0, View_EnterMaintenanceModeDialogComponent_Host_0, EnterMaintenanceModeDialogComponentNgFactory */

    /***/
    function B7Mh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_EnterMaintenanceModeDialogComponent", function () {
        return RenderType_EnterMaintenanceModeDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EnterMaintenanceModeDialogComponent_0", function () {
        return View_EnterMaintenanceModeDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EnterMaintenanceModeDialogComponent_Host_0", function () {
        return View_EnterMaintenanceModeDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnterMaintenanceModeDialogComponentNgFactory", function () {
        return EnterMaintenanceModeDialogComponentNgFactory;
      });
      /* harmony import */


      var _enter_maintenance_mode_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enter-maintenance-mode-dialog.scss.shim.ngstyle */
      "W7p2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/directive/external-link/external-link.directive */
      "tsUx");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/component/dialog/prompt/prompt.component.ngfactory */
      "3rpD");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/component/dialog/prompt/prompt.component */
      "eCeK");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./enter-maintenance-mode-dialog.component */
      "h8dQ");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _generated_precheck_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../generated/precheck-service */
      "lbO9");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_EnterMaintenanceModeDialogComponent = [_enter_maintenance_mode_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_EnterMaintenanceModeDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_EnterMaintenanceModeDialogComponent,
        data: {}
      });

      function View_EnterMaintenanceModeDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "enter-maintenance-mode-dialog-powered-on-vms-warning"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = "warning";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.enterMaintenanceModeDialog.poweredOnVmsWarning"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_EnterMaintenanceModeDialogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["id", "move-powered-off-vms"], ["name", "move-powered-off-vms"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.movePoweredOffVms = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 1, 3, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_10 = "move-powered-off-vms";
          var currVal_11 = _co.movePoweredOffVms;

          _ck(_v, 9, 0, currVal_10, currVal_11);

          var currVal_12 = "move-powered-off-vms";

          _ck(_v, 12, 0, currVal_12);

          _ck(_v, 15, 0);
        }, function (_ck, _v) {
          var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).toggle;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).toggle;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).id;

          _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).forAttr;

          _ck(_v, 14, 0, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.enterMaintenanceModeDialog.movePoweredOffVMs"));

          _ck(_v, 16, 0, currVal_14);
        });
      }

      function View_EnterMaintenanceModeDialogComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "form-group no-left-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 18, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["id", "ensure-durability"], ["name", "ensure-durability"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.ensureDurability = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 3, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 212992, [[2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_10 = "ensure-durability";
          var currVal_11 = !_co.isDurabilityGuaranteed;
          var currVal_12 = _co.ensureDurability;

          _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12);

          var currVal_13 = "ensure-durability";

          _ck(_v, 14, 0, currVal_13);

          _ck(_v, 17, 0);
        }, function (_ck, _v) {
          var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).toggle;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).toggle;

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).id;

          _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).forAttr;

          _ck(_v, 16, 0, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 0, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.enterMaintenanceModeDialog.ensureDurabilityConfirmation"));

          _ck(_v, 18, 0, currVal_15);
        });
      }

      function View_EnterMaintenanceModeDialogComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "clr-alert", [["id", "ensure-durability-banner"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlert_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlert"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          closable: [0, "closable"],
          alertType: [1, "alertType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 11, "clr-alert-item", [["class", "alert-item"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlertItem_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlertItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 7, "div", [["class", "durability-alert-message-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "a", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4210688, null, 0, _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_7__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"], [8, null]], {
          articleId: [0, "articleId"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;

          var currVal_1 = _co.getDurabilityAlertType();

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_3 = _co.ENHANCED_DURABILITY_KB;

          _ck(_v, 13, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.getDurabilityAlertMessage();

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_EnterMaintenanceModeDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 53, "vsan-prompt", [["id", "enter-maintenance-mode-dialog"]], null, [[null, "alertMessagesChange"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.alertMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirm" === en) {
            var pd_1 = _co.onConfirm() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PromptComponent_0"], _common_component_dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PromptComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_11__["PromptComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusTrapFactory"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          confirmText: [2, "confirmText"],
          cancelText: [3, "cancelText"],
          alertMessages: [4, "alertMessages"],
          blockContent: [5, "blockContent"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EnterMaintenanceModeDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 43, "form", [["class", "container"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "span", [["id", "enter-maintenance-mode-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "form-group no-left-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EnterMaintenanceModeDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 12, "div", [["class", "form-group clr-form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 9, "div", [["class", "clr-form-control"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 3, "label", [["class", "clr-control-label no-margin"], ["for", "enter-maintenance-mode-vsan-data-migration"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](37, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [["class", "clr-control-container"], ["id", "enter-maintenance-mode-vsan-data-migration"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EnterMaintenanceModeDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EnterMaintenanceModeDialogComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "span", [["id", "enter-maintenance-mode-confirmation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](53, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.enterMaintenanceModeDialog.title"));

          var currVal_1 = _co.secondaryTitle;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 2, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.ok"));

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 3, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.cancel"));

          var currVal_4 = _co.alertMessages;
          var currVal_5 = _co.loading;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.hasPoweredOnVms;

          _ck(_v, 9, 0, currVal_6);

          var currVal_15 = _co.isDrsEnabled;

          _ck(_v, 26, 0, currVal_15);

          var currVal_17 = "enter-maintenance-mode-vsan-data-migration";

          _ck(_v, 35, 0, currVal_17);

          var currVal_20 = _co.isDurabilityPossible && _co.isDurabilityGuaranteed;

          _ck(_v, 45, 0, currVal_20);

          var currVal_21 = _co.isDurabilityPossible;

          _ck(_v, 48, 0, currVal_21);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

          _ck(_v, 11, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.enterMaintenanceModeDialog.text"));

          _ck(_v, 19, 0, currVal_14);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).forAttr;

          _ck(_v, 34, 0, currVal_16);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _ck(_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.dialog.precheckEvacuation.label"));

          _ck(_v, 36, 0, currVal_18);

          var currVal_19 = _co.decommissionModeLocalized;

          _ck(_v, 40, 0, currVal_19);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _ck(_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.evacuationStatus.report.enterMaintenanceModeDialog.confirmationText"));

          _ck(_v, 52, 0, currVal_22);
        });
      }

      function View_EnterMaintenanceModeDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EnterMaintenanceModeDialogComponent_0, RenderType_EnterMaintenanceModeDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EnterMaintenanceModeDialogComponent"], [_common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_15__["DataServiceClient"], _generated_precheck_service__WEBPACK_IMPORTED_MODULE_16__["PrecheckService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var EnterMaintenanceModeDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EnterMaintenanceModeDialogComponent"], View_EnterMaintenanceModeDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "CWZg":
    /*!*****************************************************************!*\
      !*** ./src/app/vsan/precheck/report/precheck-report.service.ts ***!
      \*****************************************************************/

    /*! exports provided: PrecheckReportService */

    /***/
    function CWZg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckReportService", function () {
        return PrecheckReportService;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-data-migration-util */
      "36iK");
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* harmony import */


      var _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/precheck-task-type */
      "4fOM");
      /* harmony import */


      var _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/precheck-persistent-instance-state */
      "Dw8v");
      /* harmony import */


      var _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/precheck-result-status-type */
      "ZKv+");
      /* harmony import */


      var _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/precheck-entity-type */
      "wzkD");

      var PrecheckReportService = /*@__PURE__*/function () {
        var PrecheckReportService = /*#__PURE__*/function () {
          function PrecheckReportService() {
            _classCallCheck(this, PrecheckReportService);

            this.getObjectsMessage = function (inaccessibleObjectsCount, nonCompliantObjectsCount, noDurabilityObjectsCount) {
              var hasInaccessibleObjects = inaccessibleObjectsCount > 0;
              var hasNonCompliantObjects = nonCompliantObjectsCount > 0;

              if (!hasInaccessibleObjects && !hasNonCompliantObjects) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.accessibleAndCompliantObjectsMessage");
              }

              var messages = [];

              if (hasInaccessibleObjects) {
                messages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inaccessibleObjectsMessage", inaccessibleObjectsCount));
              }

              if (hasNonCompliantObjects) {
                if (noDurabilityObjectsCount > 0) {
                  messages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.nonCompliantWithoutDurabilityObjectsMessage", nonCompliantObjectsCount, noDurabilityObjectsCount));
                } else {
                  messages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.nonCompliantObjectsMessage", nonCompliantObjectsCount));
                }
              }

              return messages.join(PrecheckReportService.EMPTY_SPACE);
            };
          }

          _createClass(PrecheckReportService, [{
            key: "getPostOperationCapacityLabel",
            value: function getPostOperationCapacityLabel(postOperationCapacity, isThinBar, selectedEntityType) {
              if (selectedEntityType === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__["PrecheckEntityType"].HOST) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.table.maintenanceMode");
              }

              return this.getCapacityLabel(postOperationCapacity, isThinBar, true, selectedEntityType);
            }
          }, {
            key: "getCapacityLabel",
            value: function getCapacityLabel(capacity, isThinBar, hasCapacityDifference, selectedEntityType) {
              if (!capacity.usedCapacity && !capacity.totalCapacity) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.noCapacity");
              }

              var messageKey;

              if (isThinBar) {
                if (hasCapacityDifference) {
                  var isChildEntitySelected = selectedEntityType === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__["PrecheckEntityType"].DISK_GROUP || selectedEntityType === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__["PrecheckEntityType"].DISK;
                  messageKey = isChildEntitySelected ? "vsan.evacuationStatus.report.predictedOverview.capacityTab.tableCapacityInfoReducedCapacity" : "vsan.evacuationStatus.report.predictedOverview.capacityTab.tableCapacityInfo";
                } else {
                  messageKey = "vsan.evacuationStatus.report.predictedOverview.capacityTab.tableCapacityInfoNoChange";
                }
              } else {
                messageKey = "vsan.evacuationStatus.report.predictedOverview.capacityTab.generalCapacityInfo";
              }

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(messageKey, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(capacity.usedCapacity), _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(capacity.totalCapacity), _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getPercentage(this.getBarPercentage(capacity.usedCapacity, capacity.totalCapacity)));
            }
          }, {
            key: "hasCapacityDifference",
            value: function hasCapacityDifference(preOperationalCapacity, postOperationCapacity) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(preOperationalCapacity.usedCapacity) !== _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(postOperationCapacity.usedCapacity) || _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(preOperationalCapacity.totalCapacity) !== _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(postOperationCapacity.totalCapacity);
            }
          }, {
            key: "getBarChartWidth",
            value: function getBarChartWidth(beforeTotalCapacity, afterTotalCapacity) {
              return afterTotalCapacity / beforeTotalCapacity * PrecheckReportService.PERCENTAGE_MULTIPLIER;
            }
          }, {
            key: "getBarPercentage",
            value: function getBarPercentage(usedCapacity, totalCapacity) {
              return usedCapacity / totalCapacity * PrecheckReportService.PERCENTAGE_MULTIPLIER;
            } // decommission mode helper functions

          }, {
            key: "getSummaryMessage",
            value: function getSummaryMessage(status, precheckEntity, dataToMove, persistenceDataToRebuild, isVsanMaxEnabled) {
              var message;
              var hasError = _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckResultStatusType"].RED === status;

              switch (precheckEntity) {
                case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__["PrecheckEntityType"].HOST:
                  if (hasError) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckFailed.host");
                  }

                  message = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckSucceeded.host");
                  break;

                case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__["PrecheckEntityType"].DISK_GROUP:
                  if (hasError) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckFailed.diskGroup");
                  }

                  message = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckSucceeded.diskGroup");
                  break;

                case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_7__["PrecheckEntityType"].DISK:
                  if (hasError) {
                    return isVsanMaxEnabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckFailed.disk.vsanMax") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckFailed.disk");
                  }

                  message = isVsanMaxEnabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckSucceeded.disk.vsanMax") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.preCheckSucceeded.disk");
                  break;
              }

              if (dataToMove) {
                message = message.concat(PrecheckReportService.EMPTY_SPACE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.dataToMoveMessage", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(dataToMove)));
              }

              if (persistenceDataToRebuild) {
                message = message.concat(PrecheckReportService.EMPTY_SPACE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.persistenceDataToRebuildMessage", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(persistenceDataToRebuild)));
              }

              return message.trim();
            }
          }, {
            key: "parseReportStatusToIcon",
            value: function parseReportStatusToIcon(report) {
              switch (report.status) {
                case _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckResultStatusType"].GREEN:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;

                case _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckResultStatusType"].YELLOW:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;

                case _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckResultStatusType"].RED:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
              }
            }
          }, {
            key: "getVirtualObjectsTabIcon",
            value: function getVirtualObjectsTabIcon(report) {
              if (report.inaccessibleObjects && report.inaccessibleObjects.length) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
              }

              if (report.nonCompliantObjects && report.nonCompliantObjects.length) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
              }

              return "";
            }
          }, {
            key: "getCapacityTabIcon",
            value: function getCapacityTabIcon(clusterCapacity) {
              var faultDomainErrors = clusterCapacity.faultDomains.some(function (faultDomain) {
                return faultDomain.isAdditionalHostNeeded || faultDomain.hasInsufficientSpace || faultDomain.isComponentLimitReached;
              });
              var standaloneHostErrors = clusterCapacity.standaloneHosts.some(function (host) {
                return !!host.capacityNeeded || host.isComponentLimitReached;
              });

              if (clusterCapacity.faultDomainsNeeded || faultDomainErrors || standaloneHostErrors) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
              }

              var initialPercentage = this.getBarPercentage(clusterCapacity.preOperationCapacity.usedCapacity, clusterCapacity.preOperationCapacity.totalCapacity);
              var finalPercentage = this.getBarPercentage(clusterCapacity.postOperationCapacity.usedCapacity, clusterCapacity.postOperationCapacity.totalCapacity);

              if (initialPercentage >= clusterCapacity.warningThreshold || finalPercentage >= clusterCapacity.warningThreshold) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
              }

              return "";
            }
          }, {
            key: "getHealthTabIcon",
            value: function getHealthTabIcon(healthData) {
              switch (healthData.status) {
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__["VsanHealthStatus"].green:
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__["VsanHealthStatus"].info:
                  return "";

                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__["VsanHealthStatus"].red:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;

                default:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
              }
            }
          }, {
            key: "getPersistenceTabIcon",
            value: function getPersistenceTabIcon(persistenceData) {
              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(persistenceData)) {
                return "";
              } else if (persistenceData.find(function (p) {
                return p.state === _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].INACCESSIBLE;
              })) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
              } else if (persistenceData.find(function (p) {
                return p.state === _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].REDUCED_AVAILABILITY;
              }) || persistenceData.find(function (p) {
                return p.state === _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].REBUILD;
              })) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
              }

              return "";
            }
          }, {
            key: "getPersistenceStateLabel",
            value: function getPersistenceStateLabel(state) {
              switch (state) {
                case _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].INACCESSIBLE:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.predictedState.inaccessible");

                case _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].REDUCED_AVAILABILITY:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.predictedState.reducedAvailability");

                case _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].REBUILD:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.persistenceTab.table.predictedState.rebuild");

                default:
                  return "";
              }
            }
          }, {
            key: "getPersistenceStateIcon",
            value: function getPersistenceStateIcon(state) {
              switch (state) {
                case _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].INACCESSIBLE:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;

                case _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].REDUCED_AVAILABILITY:
                case _generated_precheck_persistent_instance_state__WEBPACK_IMPORTED_MODULE_5__["PrecheckPersistentInstanceState"].REBUILD:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;

                default:
                  return "";
              }
            }
          }, {
            key: "getPersistenceIconClass",
            value: function getPersistenceIconClass(state) {
              var iconShape = this.getPersistenceStateIcon(state);
              return this.getIconClasses(iconShape);
            }
          }, {
            key: "getIconClasses",
            value: function getIconClasses(shape) {
              return "is-solid ".concat(_util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].clrIconShapeClassMap[shape]);
            }
          }, {
            key: "getRunningTaskMessage",
            value: function getRunningTaskMessage(runningTask, isDiskResourcePrecheckSupported, isVsanMaxEnabled) {
              if (!runningTask) {
                return "";
              }

              return isDiskResourcePrecheckSupported ? this.getRunningTaskMessageForAllObjects(runningTask, isVsanMaxEnabled) : this.getRunningTaskMessageForHost(runningTask);
            }
          }, {
            key: "getRunningTaskMessageForHost",
            value: function getRunningTaskMessageForHost(runningTask) {
              switch (runningTask.taskType) {
                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].HOST_PRECHECK:
                  return runningTask.hostName ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.precheck", runningTask.hostName, _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_2__["VsanDataMigrationUtil"].getLocalizedDecommissionMode(runningTask.decommissionMode)) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.precheck.unknownHost", _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_2__["VsanDataMigrationUtil"].getLocalizedDecommissionMode(runningTask.decommissionMode));

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].HOST_ENTER_MAINTENANCE_MODE:
                  return runningTask.hostName ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.maintenanceMode", runningTask.hostName) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.maintenanceMode.unknownHost");
              }
            }
          }, {
            key: "getRunningTaskMessageForAllObjects",
            value: function getRunningTaskMessageForAllObjects(runningTask, isVsanMaxEnabled) {
              var decommissionMode = _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_2__["VsanDataMigrationUtil"].getLocalizedDecommissionMode(runningTask.decommissionMode);

              var commonMessage = isVsanMaxEnabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.commonMessage.vSanMax") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.commonMessage");

              switch (runningTask.taskType) {
                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].HOST_PRECHECK:
                  return runningTask.hostName ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.host.precheck", runningTask.hostName, decommissionMode, commonMessage) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.host.precheck.unknownHost", decommissionMode, commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].HOST_ENTER_MAINTENANCE_MODE:
                  return runningTask.hostName ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.host.maintenanceMode", runningTask.hostName, commonMessage) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.host.maintenanceMode.unknownHost", commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_REMOVAL:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.removeGroup", decommissionMode, commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_RECREATE:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.recreateGroup", decommissionMode, commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_UNMOUNT:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.unmountGroup", decommissionMode, commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISK_REMOVAL:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.removeDisks", decommissionMode, commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISK_UNMOUNT:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.unmountDisk", decommissionMode, commonMessage);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_PRECHECK:
                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISK_PRECHECK:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.diskOrGroup.precheck", runningTask.name, runningTask.hostName, decommissionMode, commonMessage);

                default:
                  // Handle the rare case when UI doesn't know host information and if the entity is a disk or disk group.
                  // Additional info in https://bugzilla.eng.vmware.com/show_bug.cgi?id=2391487
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskInProgress.unknownEntityType.unknownHost", commonMessage);
              }
            }
          }, {
            key: "isTaskForSelectedEntity",
            value: function isTaskForSelectedEntity(runningTask, selectedEntityUuid, selectedDecommissionMode) {
              return selectedEntityUuid === runningTask.uuid && selectedDecommissionMode === runningTask.decommissionMode;
            }
          }, {
            key: "getFailedTaskMessage",
            value: function getFailedTaskMessage(taskType, entityName) {
              switch (taskType) {
                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].HOST_ENTER_MAINTENANCE_MODE:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.eMMTaskFailed", entityName);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_REMOVAL:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.removeGroupFailed", entityName);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_RECREATE:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.recreateGroupFailed", entityName);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISKGROUP_UNMOUNT:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.unmountGroupFailed", entityName);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISK_REMOVAL:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.removeDiskFailed", entityName);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckTaskType"].DISK_UNMOUNT:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.unmountDiskFailed", entityName);

                default:
                  // Failed to run data migration precheck for host, disk group or disk.
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.taskFailed", entityName);
              }
            }
          }, {
            key: "getClusterLevelCapacityErrorMessage",
            value: function getClusterLevelCapacityErrorMessage(clusterCapacity) {
              var messages = [_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.requiredStandaloneHost")];
              var hasComponentLimitError = clusterCapacity.faultDomains.some(function (faultDomain) {
                return faultDomain.isComponentLimitReached;
              }) || clusterCapacity.standaloneHosts.some(function (standAloneHost) {
                return standAloneHost.isComponentLimitReached;
              });

              if (hasComponentLimitError) {
                messages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.table.componentLimitReached"));
              } else {
                messages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.storagePolicyIncompliance"));
              }

              return messages.join(" ");
            }
          }]);

          return PrecheckReportService;
        }();

        PrecheckReportService.PERCENTAGE_MULTIPLIER = 100;
        PrecheckReportService.EMPTY_SPACE = " ";
        return PrecheckReportService;
      }();
      /***/

    },

    /***/
    "EJQp":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-breakdown.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PrecheckCapacityBreakdownComponent */

    /***/
    function EJQp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckCapacityBreakdownComponent", function () {
        return PrecheckCapacityBreakdownComponent;
      });
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/precheck-entity-type */
      "wzkD");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var PrecheckCapacityBreakdownComponent = /*#__PURE__*/function () {
        function PrecheckCapacityBreakdownComponent(barChartService) {
          var _this2 = this;

          _classCallCheck(this, PrecheckCapacityBreakdownComponent);

          this.barChartService = barChartService;
          this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
          this.PrecheckEntityType = _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_1__["PrecheckEntityType"];
          this.hasError = false;
          this.datastoreType = _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__["DatastoreType"].VSAN;

          this.getGreenColor = function () {
            return _this2.barChartService.getGreenPallete()[0];
          };

          this.getYellowColor = function () {
            return _this2.barChartService.getYellowPallete()[0];
          };

          this.getRedColor = function () {
            return _this2.barChartService.getRedPallete()[0];
          };

          this.getCapacityColumnHeader = function () {
            return _this2.datastoreType === _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__["DatastoreType"].VSAN_DIRECT ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.table.capacityHeader.vsanDirect") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.table.capacityHeader");
          };

          this.getInsufficientSpaceLabel = function (insufficientSpace) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.evacuationStatus.report.predictedOverview.capacityTab.table.insufficientSpaceOnHost", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].formatFileSize(insufficientSpace));
          };

          this.showCapacityTable = function () {
            return !_this2.clusterCapacity.faultDomainsNeeded && _this2.hasEntities();
          };

          this.hasFaultDomainErrors = function (faultDomainCapacityData) {
            return faultDomainCapacityData.hasInsufficientSpace || faultDomainCapacityData.isAdditionalHostNeeded || faultDomainCapacityData.isComponentLimitReached;
          };

          this.hasHostErrors = function (hostsCapacityData) {
            return _this2.hasError && !!hostsCapacityData.selectedEntityType || !!hostsCapacityData.capacityNeeded || hostsCapacityData.isComponentLimitReached;
          };
        }

        _createClass(PrecheckCapacityBreakdownComponent, [{
          key: "hasEntities",
          value: function hasEntities() {
            var hasFaultDomains = !!(this.clusterCapacity.faultDomains && this.clusterCapacity.faultDomains.length);
            var hasStandaloneHosts = !!(this.clusterCapacity.standaloneHosts && this.clusterCapacity.standaloneHosts.length);
            return hasFaultDomains || hasStandaloneHosts;
          }
        }]);

        return PrecheckCapacityBreakdownComponent;
      }();
      /***/

    },

    /***/
    "GQLm":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-bar-chart.component.ngfactory.js ***!
      \**************************************************************************************************/

    /*! exports provided: RenderType_PrecheckCapacityBarChartComponent, View_PrecheckCapacityBarChartComponent_0, View_PrecheckCapacityBarChartComponent_Host_0, PrecheckCapacityBarChartComponentNgFactory */

    /***/
    function GQLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckCapacityBarChartComponent", function () {
        return RenderType_PrecheckCapacityBarChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckCapacityBarChartComponent_0", function () {
        return View_PrecheckCapacityBarChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckCapacityBarChartComponent_Host_0", function () {
        return View_PrecheckCapacityBarChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckCapacityBarChartComponentNgFactory", function () {
        return PrecheckCapacityBarChartComponentNgFactory;
      });
      /* harmony import */


      var _precheck_capacity_bar_chart_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-capacity-bar-chart.scss.shim.ngstyle */
      "SmrV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./precheck-capacity-bar-chart.component */
      "VfF2");
      /* harmony import */


      var _precheck_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../precheck-report.service */
      "CWZg");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckCapacityBarChartComponent = [_precheck_capacity_bar_chart_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckCapacityBarChartComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckCapacityBarChartComponent,
        data: {}
      });

      function View_PrecheckCapacityBarChartComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "progress-static"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
          "thin-bar": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "progress-meter"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, {
          "empty-bar": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "inner-bar"]], [[4, "width", null], [4, "backgroundColor", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "progress-static";

          var currVal_1 = _ck(_v, 2, 0, _co.isThinBar);

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_2 = "progress-meter";

          var currVal_3 = _ck(_v, 6, 0, !_co.preOperationCapacity.totalCapacity);

          _ck(_v, 5, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.beforeUsedCapacityWidth, "%");

          var currVal_5 = _co.beforeBarColor;

          _ck(_v, 8, 0, currVal_4, currVal_5);
        });
      }

      function View_PrecheckCapacityBarChartComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "progress-static"]], [[4, "width", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
          "thin-bar": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "progress-meter"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, {
          "empty-bar": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "inner-bar"]], [[4, "width", null], [4, "backgroundColor", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "progress-static";

          var currVal_2 = _ck(_v, 2, 0, _co.isThinBar);

          _ck(_v, 1, 0, currVal_1, currVal_2);

          var currVal_3 = "progress-meter";

          var currVal_4 = _ck(_v, 6, 0, !_co.postOperationCapacity.totalCapacity);

          _ck(_v, 5, 0, currVal_3, currVal_4);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.afterBarWidth, "%");

          _ck(_v, 0, 0, currVal_0);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.afterUsedCapacityWidth, "%");

          var currVal_6 = _co.afterBarColor;

          _ck(_v, 8, 0, currVal_5, currVal_6);
        });
      }

      function View_PrecheckCapacityBarChartComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "p8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getPreOperationCapacityLabel();

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBarChartComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "p8"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
          "selected-entity": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n      ", "\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "p8";

          var currVal_1 = _ck(_v, 2, 0, !!_co.selectedEntityType);

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.getPostOperationCapacityLabel();

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_PrecheckCapacityBarChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "div", [["class", "bar-chart"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
          "table-bar-chart": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "progress-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBarChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBarChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "div", [["class", "bar-chart-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBarChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBarChartComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "bar-chart";

          var currVal_1 = _ck(_v, 4, 0, _co.isThinBar);

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_2 = _co.hasBeforeBar();

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = _co.hasAfterBar();

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.hasBeforeBar();

          _ck(_v, 20, 0, currVal_4);

          var currVal_5 = _co.hasAfterBar();

          _ck(_v, 23, 0, currVal_5);
        }, null);
      }

      function View_PrecheckCapacityBarChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck-capacity-bar-chart", [], null, null, null, View_PrecheckCapacityBarChartComponent_0, RenderType_PrecheckCapacityBarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["PrecheckCapacityBarChartComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_4__["PrecheckReportService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_5__["BarChartService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PrecheckCapacityBarChartComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-capacity-bar-chart", _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["PrecheckCapacityBarChartComponent"], View_PrecheckCapacityBarChartComponent_Host_0, {
        preOperationCapacity: "preOperationCapacity",
        postOperationCapacity: "postOperationCapacity",
        warningThreshold: "warningThreshold",
        errorThreshold: "errorThreshold",
        isThinBar: "isThinBar",
        selectedEntityType: "selectedEntityType"
      }, {}, []);
      /***/

    },

    /***/
    "Ghu/":
    /*!*************************************************************!*\
      !*** ./src/app/vsan/precheck/precheck.scss.shim.ngstyle.js ***!
      \*************************************************************/

    /*! exports provided: styles */

    /***/
    function Ghu(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.general-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  align-items: center;\n  justify-content: center;\n}\n  .signpost-content .signpost-flex-wrap .signpost-content-body {\n  max-height: none !important;\n}\n.quick-pre-check-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.quick-pre-check-info[_ngcontent-%COMP%]   .evacuation-status-action-button[_ngcontent-%COMP%] {\n  margin: 0 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9wcmVjaGVjay5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBQXBCQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBdUJIO0FBcEJBO0VBQ0csMkJBQUE7QUF1Qkg7QUFwQkE7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7QUF1Qkg7QUF0Qkc7RUFDRyxnQkFBQTtBQXdCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcHJlY2hlY2svcHJlY2hlY2suc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLmdlbmVyYWwtbWVzc2FnZSB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLnNpZ25wb3N0LWNvbnRlbnQgLnNpZ25wb3N0LWZsZXgtd3JhcCAuc2lnbnBvc3QtY29udGVudC1ib2R5IHtcbiAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnF1aWNrLXByZS1jaGVjay1pbmZvIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgLmV2YWN1YXRpb24tc3RhdHVzLWFjdGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "Hgj/":
    /*!**********************************************!*\
      !*** ./src/app/generated/precheck-entity.ts ***!
      \**********************************************/

    /*! exports provided: PrecheckEntity */

    /***/
    function Hgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckEntity", function () {
        return PrecheckEntity;
      });

      var PrecheckEntity;

      (function (PrecheckEntity) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (hostRef, type, name, primaryIconId, uuid, isHostConnected, isInMaintenanceMode, diskGroupData, diskData, children) {
          return {
            hostRef: hostRef,
            type: type,
            name: name,
            primaryIconId: primaryIconId,
            uuid: uuid,
            isHostConnected: isHostConnected,
            isInMaintenanceMode: isInMaintenanceMode,
            diskGroupData: diskGroupData,
            diskData: diskData,
            children: children
          };
        };

        PrecheckEntity.Factory = Factory;
      })(PrecheckEntity || (PrecheckEntity = {})); //module PrecheckEntity

      /***/

    },

    /***/
    "Iw/b":
    /*!*********************************************************!*\
      !*** ./src/app/vsan/precheck/precheck-report.module.ts ***!
      \*********************************************************/

    /*! exports provided: PrecheckReportModule */

    /***/
    function IwB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckReportModule", function () {
        return PrecheckReportModule;
      });
      /* harmony import */


      var _precheck_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck.component */
      "S5sa");
      /* harmony import */


      var _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./enter-maintenance-mode-dialog.component */
      "h8dQ");

      var precheckRoutes = [{
        path: "",
        component: _precheck_component__WEBPACK_IMPORTED_MODULE_0__["PrecheckComponent"]
      }, {
        path: "enterMaintenanceModeDialog",
        component: _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EnterMaintenanceModeDialogComponent"]
      }];

      var PrecheckReportModule = /*#__PURE__*/_createClass(function PrecheckReportModule() {
        _classCallCheck(this, PrecheckReportModule);
      });
      /***/

    },

    /***/
    "J8aq":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/precheck/precheck-report.module.ngfactory.js ***!
      \*******************************************************************/

    /*! exports provided: PrecheckReportModuleNgFactory */

    /***/
    function J8aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckReportModuleNgFactory", function () {
        return PrecheckReportModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _precheck_report_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./precheck-report.module */
      "Iw/b");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */
      "No7X");
      /* harmony import */


      var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */
      "bIR2");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */
      "Wfa3");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */
      "PBGP");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/component/chart/performance/perf-chart-dialog.component.ngfactory */
      "vx4U");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/component/chart/performance/set-threshold-dialog.component.ngfactory */
      "Gg4+");
      /* harmony import */


      var _health_action_vum_login_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../health/action/vum-login-action.component.ngfactory */
      "RYsO");
      /* harmony import */


      var _health_action_not_supported_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../health/action/not-supported-action.component.ngfactory */
      "G2vh");
      /* harmony import */


      var _health_action_relayout_relayout_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../health/action/relayout/relayout-objects.component.ngfactory */
      "HDOc");
      /* harmony import */


      var _health_action_mark_silent_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../health/action/mark-silent-health-action.component.ngfactory */
      "vM6x");
      /* harmony import */


      var _health_action_restore_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../health/action/restore-health-action.component.ngfactory */
      "TwKt");
      /* harmony import */


      var _health_action_remediate_cluster_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../health/action/remediate-cluster-config.component.ngfactory */
      "5e3F");
      /* harmony import */


      var _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../health/action/purge-inaccessible-objects/purge-inaccessible-swap-objects-action.component.ngfactory */
      "YTBJ");
      /* harmony import */


      var _health_action_remediate_file_service_imbalance_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../health/action/remediate-file-service-imbalance.component.ngfactory */
      "WPoM");
      /* harmony import */


      var _health_config_historical_health_settings_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../health/config/historical-health-settings-dialog.component.ngfactory */
      "x79c");
      /* harmony import */


      var _precheck_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./precheck.component.ngfactory */
      "g2v7");
      /* harmony import */


      var _enter_maintenance_mode_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./enter-maintenance-mode-dialog.component.ngfactory */
      "B7Mh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-property-collector-client.service */
      "L7/z");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-vc-config-system.service */
      "yGTn");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-model-factory.service */
      "VM2Y");
      /* harmony import */


      var _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-model-factory.service */
      "gswu");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../generated/datacenter-inventory-service */
      "uoMP");
      /* harmony import */


      var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../generated/network-inventory-service */
      "Ot8i");
      /* harmony import */


      var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../generated/compute-inventory-service */
      "+xjW");
      /* harmony import */


      var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../generated/io-insight-inventory-service */
      "fhiF");
      /* harmony import */


      var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../generated/vsan-inventory-helper */
      "2HhS");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../common/service/client/vsan/capability-system/vsan-capability.service */
      "jAET");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.service */
      "Tq4R");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker-intl.service */
      "rAFq");
      /* harmony import */


      var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../common/component/datetime-picker/localize-picker-labels */
      "EUIg");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker.component */
      "4D9t");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */
      "bMPK");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */
      "UiI2");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../common/component/virtual-objects-table/virtual-objects-table.service */
      "LAuz");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../common/component/virtual-objects-table/virtual-objects-table-state.service */
      "eh32");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../common/component/virtual-objects-table/actions/validation/virtual-objects-action-availability.service */
      "Kdx0");
      /* harmony import */


      var _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../common/service/theme-listener.service */
      "AWEo");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../common/service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ../common/component/capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ../common/service/telemetry.service */
      "U2+J");
      /* harmony import */


      var _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./report/precheck-report.service */
      "CWZg");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ../common/component/action-button/action-button.module */
      "wQOa");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ../common/component/cell/common-cells.module */
      "e724");
      /* harmony import */


      var _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ../common/component/search/search.module */
      "v8iv");
      /* harmony import */


      var _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ../common/component/inventory/inventory-browser.module */
      "jkFw");
      /* harmony import */


      var _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! ../common/component/datagrid/tree-datagrid.module */
      "6BUe");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.module */
      "jRYl");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time.module */
      "KL2N");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time.module */
      "QX+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! ../common/component/datetime-picker/datetime-picker.module */
      "UaEa");
      /* harmony import */


      var _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! ../common/component/popup-list/popup-list.module */
      "JCZN");
      /* harmony import */


      var _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! ../common/component/navigation/vsan-breadcrumb.module */
      "U2P7");
      /* harmony import */


      var _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! ../common/vsan-common.module */
      "uDMx");
      /* harmony import */


      var _common_component_export_export_module__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! ../common/component/export/export.module */
      "wi+p");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! ../common/component/virtual-objects-table/virtual-objects-table.module */
      "ktFr");
      /* harmony import */


      var _common_component_precheck_pre_check_module__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! ../common/component/precheck/pre-check.module */
      "yCpS");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! ../common/component/unavailable-view/unavailable-view.module */
      "YUlR");
      /* harmony import */


      var _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! ../common/component/chart/chart.module */
      "1+Dr");
      /* harmony import */


      var _update_action_update_actions_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! ../update/action/update-actions.module */
      "G+D7");
      /* harmony import */


      var _health_action_health_actions_module__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! ../health/action/health-actions.module */
      "enEu");
      /* harmony import */


      var _common_component_illustrated_message_illustrated_message_module__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! ../common/component/illustrated-message/illustrated-message.module */
      "LgXg");
      /* harmony import */


      var _health_health_details_card_module__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! ../health/health-details-card.module */
      "8fTY");
      /* harmony import */


      var _health_config_health_config_module__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
      /*! ../health/config/health-config.module */
      "g4GE");
      /* harmony import */


      var _health_health_checks_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
      /*! ../health/health-checks.module */
      "OJRk");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-format.class */
      "EFU/");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */
      "vRnr");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */
      "oRW+");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
      /*! ../common/component/chart/performance/perf-chart-dialog.component */
      "xuXY");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
      /*! ../common/component/chart/performance/set-threshold-dialog.component */
      "AYan");
      /* harmony import */


      var _health_action_vum_login_action_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
      /*! ../health/action/vum-login-action.component */
      "9KJB");
      /* harmony import */


      var _health_action_not_supported_action_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
      /*! ../health/action/not-supported-action.component */
      "IS3Q");
      /* harmony import */


      var _health_action_relayout_relayout_objects_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
      /*! ../health/action/relayout/relayout-objects.component */
      "1qPT");
      /* harmony import */


      var _health_action_mark_silent_health_action_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
      /*! ../health/action/mark-silent-health-action.component */
      "lSeR");
      /* harmony import */


      var _health_action_restore_health_action_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(
      /*! ../health/action/restore-health-action.component */
      "Zy9P");
      /* harmony import */


      var _health_action_remediate_cluster_config_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(
      /*! ../health/action/remediate-cluster-config.component */
      "Dr0A");
      /* harmony import */


      var _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(
      /*! ../health/action/purge-inaccessible-objects/purge-inaccessible-swap-objects-action.component */
      "Wu7B");
      /* harmony import */


      var _health_action_remediate_file_service_imbalance_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(
      /*! ../health/action/remediate-file-service-imbalance.component */
      "6Wi+");
      /* harmony import */


      var _health_config_historical_health_settings_dialog_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(
      /*! ../health/config/historical-health-settings-dialog.component */
      "+JE7");
      /* harmony import */


      var _precheck_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(
      /*! ./precheck.component */
      "S5sa");
      /* harmony import */


      var _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(
      /*! ./enter-maintenance-mode-dialog.component */
      "h8dQ");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var PrecheckReportModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_precheck_report_module__WEBPACK_IMPORTED_MODULE_1__["PrecheckReportModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_lNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DeleteRangeConfirmDialogComponentNgFactory"], _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["PerfChartDialogComponentNgFactory"], _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SetThresholdDialogComponentNgFactory"], _health_action_vum_login_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["VumLoginDialogComponentNgFactory"], _health_action_not_supported_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NotSupportedActionComponentNgFactory"], _health_action_relayout_relayout_objects_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RelayoutVsanObjectsComponentNgFactory"], _health_action_mark_silent_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["MarkSilentHealthActionComponentNgFactory"], _health_action_restore_health_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RestoreHealthActionComponentNgFactory"], _health_action_remediate_cluster_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RemediateClusterConfigDialogComponentNgFactory"], _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["PurgeInaccessibleSwapObjectsActionComponentNgFactory"], _health_action_remediate_file_service_imbalance_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RemediateFileServiceImbalanceComponentNgFactory"], _health_config_historical_health_settings_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["HistoricalHealthSettingsDialogComponentNgFactory"], _precheck_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["PrecheckComponentNgFactory"], _enter_maintenance_mode_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["EnterMaintenanceModeDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_25__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_25__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_27__["VpxdPropertyCollectorClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_28__["VsanVcClusterConfigSystem"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_31__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_32__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_32__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_27__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_31__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_33__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_33__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_27__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_31__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_34__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_34__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_27__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_31__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_35__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_35__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_27__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_29__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_30__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_31__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_36__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_37__["IoInsightService"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_38__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_41__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_42__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_43__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_44__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_44__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_45__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_46__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_45__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_47__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_48__["VirtualObjectsTableService"], _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_48__["VirtualObjectsTableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_49__["VirtualObjectsTableStateService"], _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_49__["VirtualObjectsTableStateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_50__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_50__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_51__["VirtualObjectsActionAvailabilityService"], _common_component_virtual_objects_table_actions_validation_virtual_objects_action_availability_service__WEBPACK_IMPORTED_MODULE_51__["VirtualObjectsActionAvailabilityService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_52__["HighchartsThemeService"], _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_52__["HighchartsThemeService"], [_common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_53__["ThemeListenerService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_50__["ReferenceWatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_54__["BarChartService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_54__["BarChartService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_52__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_55__["HighchartsPropertiesService"], _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_55__["HighchartsPropertiesService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_52__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_56__["PerfOrchestratorService"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_56__["PerfOrchestratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_57__["SpaceEfficiencyService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_57__["SpaceEfficiencyService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_58__["VsanCapacityService"], _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_58__["VsanCapacityService"], [_generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_59__["CapacityDataService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_54__["BarChartService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_57__["SpaceEfficiencyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_60__["TelemetryService"], _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_60__["TelemetryService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_61__["PrecheckReportService"], _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_61__["PrecheckReportService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_62__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_63__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_63__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_64__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_64__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_65__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_65__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_66__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_66__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_47__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_47__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_67__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_67__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_67__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_68__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_68__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_69__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_69__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_70__["SearchModule"], _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_70__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_71__["InventoryBrowserModule"], _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_71__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_72__["TreeDatagridModule"], _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_72__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_73__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_73__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_74__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_74__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_74__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_74__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_75__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_75__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_76__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_76__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_77__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_77__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_77__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_77__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_78__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_78__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_78__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_78__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_79__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_79__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_80__["PopupListModule"], _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_80__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_81__["VsanBreadcrumbModule"], _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_81__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_82__["VsanCommonModule"], _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_82__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_export_export_module__WEBPACK_IMPORTED_MODULE_83__["ExportModule"], _common_component_export_export_module__WEBPACK_IMPORTED_MODULE_83__["ExportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_84__["VirtualObjectsTableModule"], _common_component_virtual_objects_table_virtual_objects_table_module__WEBPACK_IMPORTED_MODULE_84__["VirtualObjectsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_precheck_pre_check_module__WEBPACK_IMPORTED_MODULE_85__["PrecheckModule"], _common_component_precheck_pre_check_module__WEBPACK_IMPORTED_MODULE_85__["PrecheckModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_86__["UnavailableViewModule"], _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_86__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_87__["VsanChartModule"], _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_87__["VsanChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _update_action_update_actions_module__WEBPACK_IMPORTED_MODULE_88__["UpdateActionsModule"], _update_action_update_actions_module__WEBPACK_IMPORTED_MODULE_88__["UpdateActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_action_health_actions_module__WEBPACK_IMPORTED_MODULE_89__["HealthActionsModule"], _health_action_health_actions_module__WEBPACK_IMPORTED_MODULE_89__["HealthActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_illustrated_message_illustrated_message_module__WEBPACK_IMPORTED_MODULE_90__["IllustratedMessageModule"], _common_component_illustrated_message_illustrated_message_module__WEBPACK_IMPORTED_MODULE_90__["IllustratedMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_health_details_card_module__WEBPACK_IMPORTED_MODULE_91__["HealthDetailsCardModule"], _health_health_details_card_module__WEBPACK_IMPORTED_MODULE_91__["HealthDetailsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_config_health_config_module__WEBPACK_IMPORTED_MODULE_92__["HealthConfigModule"], _health_config_health_config_module__WEBPACK_IMPORTED_MODULE_92__["HealthConfigModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _health_health_checks_module__WEBPACK_IMPORTED_MODULE_93__["HealthChecksModule"], _health_health_checks_module__WEBPACK_IMPORTED_MODULE_93__["HealthChecksModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _precheck_report_module__WEBPACK_IMPORTED_MODULE_1__["PrecheckReportModule"], _precheck_report_module__WEBPACK_IMPORTED_MODULE_1__["PrecheckReportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_62__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_94__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_79__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_78__["ROUTES"], function () {
          return [[{
            path: "addTimeRange",
            component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_95__["AddTimeRangeDialogComponent"]
          }, {
            path: "deleteTimeRange",
            component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_96__["DeleteRangeConfirmDialogComponent"]
          }], [{
            path: "expandChart",
            component: _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_97__["PerfChartDialogComponent"]
          }, {
            path: "setThreshold",
            component: _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_98__["SetThresholdDialogComponent"]
          }], [{
            path: "loginVumDepot",
            component: _health_action_vum_login_action_component__WEBPACK_IMPORTED_MODULE_99__["VumLoginDialogComponent"]
          }, {
            path: "notSupportedAction",
            component: _health_action_not_supported_action_component__WEBPACK_IMPORTED_MODULE_100__["NotSupportedActionComponent"]
          }, {
            path: "relayoutVsanObjects",
            component: _health_action_relayout_relayout_objects_component__WEBPACK_IMPORTED_MODULE_101__["RelayoutVsanObjectsComponent"]
          }, {
            path: "markSilent",
            component: _health_action_mark_silent_health_action_component__WEBPACK_IMPORTED_MODULE_102__["MarkSilentHealthActionComponent"]
          }, {
            path: "restoreAlert",
            component: _health_action_restore_health_action_component__WEBPACK_IMPORTED_MODULE_103__["RestoreHealthActionComponent"]
          }, {
            path: "remediateCluster",
            component: _health_action_remediate_cluster_config_component__WEBPACK_IMPORTED_MODULE_104__["RemediateClusterConfigDialogComponent"]
          }, {
            path: "purgeInaccessibleSwapObjs",
            component: _health_action_purge_inaccessible_objects_purge_inaccessible_swap_objects_action_component__WEBPACK_IMPORTED_MODULE_105__["PurgeInaccessibleSwapObjectsActionComponent"]
          }, {
            path: "remediateFileServiceImbalance",
            component: _health_action_remediate_file_service_imbalance_component__WEBPACK_IMPORTED_MODULE_106__["RemediateFileServiceImbalanceComponent"]
          }], [{
            path: "historicalHealthSettingsDialog",
            component: _health_config_historical_health_settings_dialog_component__WEBPACK_IMPORTED_MODULE_107__["HistoricalHealthSettingsDialogComponent"]
          }], [{
            path: "",
            component: _precheck_component__WEBPACK_IMPORTED_MODULE_108__["PrecheckComponent"]
          }, {
            path: "enterMaintenanceModeDialog",
            component: _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_109__["EnterMaintenanceModeDialogComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "LnT5":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/precheck-report.component.ngfactory.js ***!
      \*****************************************************************************/

    /*! exports provided: RenderType_PrecheckReportComponent, View_PrecheckReportComponent_0, View_PrecheckReportComponent_Host_0, PrecheckReportComponentNgFactory */

    /***/
    function LnT5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckReportComponent", function () {
        return RenderType_PrecheckReportComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckReportComponent_0", function () {
        return View_PrecheckReportComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckReportComponent_Host_0", function () {
        return View_PrecheckReportComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckReportComponentNgFactory", function () {
        return PrecheckReportComponentNgFactory;
      });
      /* harmony import */


      var _precheck_report_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-report.scss.shim.ngstyle */
      "YWa1");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _virtual_objects_precheck_virtual_objects_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./virtual-objects/precheck-virtual-objects-tab.component.ngfactory */
      "pqfg");
      /* harmony import */


      var _virtual_objects_precheck_virtual_objects_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./virtual-objects/precheck-virtual-objects-tab.component */
      "cibP");
      /* harmony import */


      var _precheck_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./precheck-report.service */
      "CWZg");
      /* harmony import */


      var _health_view_health_checks_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../health/view/health-checks.component.ngfactory */
      "9C63");
      /* harmony import */


      var _health_view_health_checks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../health/view/health-checks.component */
      "NMgx");
      /* harmony import */


      var _psp_precheck_persistence_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./psp/precheck-persistence-tab.component.ngfactory */
      "8qVz");
      /* harmony import */


      var _psp_precheck_persistence_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./psp/precheck-persistence-tab.component */
      "rWU4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _capacity_precheck_capacity_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./capacity/precheck-capacity-tab.component.ngfactory */
      "m/ai");
      /* harmony import */


      var _capacity_precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./capacity/precheck-capacity-tab.component */
      "r9zi");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_pipe_VsanDateFormatterPipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../common/pipe/VsanDateFormatterPipe */
      "4kIe");
      /* harmony import */


      var _precheck_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./precheck-report.component */
      "aK/t");
      /* harmony import */


      var _generated_precheck_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../generated/precheck-service */
      "lbO9");
      /* harmony import */


      var _generated_what_if_property_provider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../../generated/what-if-property-provider */
      "C0Wn");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../generated/vsan-config-service */
      "UKIB");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckReportComponent = [_precheck_report_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckReportComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckReportComponent,
        data: {}
      });

      function View_PrecheckReportComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["class", "alert-view"], ["id", "evacuation-status-validation-message"]], null, [[null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onClosed" === en) {
            var pd_0 = (_co.alertMessage = undefined) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, {
          onClosed: "onClosed"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PrecheckReportComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckReportComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["id", "evacuation-report-no-valid-test-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.report.noResult"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckReportComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline btn-sm"], ["id", "enter-maintenance-mode-action"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onEnterMaintenanceModeClicked() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.enterMaintenanceModeDisabledReason;
          var currVal_1 = _co.enterMaintenanceModeDisabledReason;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.enterMaintenanceModeButtonLabel"));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_PrecheckReportComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline btn-sm"], ["id", "remove-disk-group-action"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteDiskGroup() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isDiskAndGroupActionDisabled;
          var currVal_1 = _co.diskAndGroupActionDisabledReason;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.removeDiskgroupButtonLabel"));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_PrecheckReportComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline btn-sm"], ["id", "recreate-disk-group-action"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.recreateDiskGroup() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isDiskAndGroupActionDisabled;
          var currVal_1 = _co.diskAndGroupActionDisabledReason;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.recreateDiskgroupButtonLabel"));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_PrecheckReportComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline btn-sm"], ["id", "unmount-disk-group-action"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.unmountDiskGroup() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isDiskAndGroupActionDisabled || !(_co.precheckEntity == null ? null : _co.precheckEntity.diskGroupData == null ? null : _co.precheckEntity.diskGroupData.isMounted);
          var currVal_1 = _co.diskAndGroupActionDisabledReason;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.unmountDiskgroupButtonLabel"));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_PrecheckReportComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline btn-sm"], ["id", "remove-disk-action"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteDisk() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isDiskAndGroupActionDisabled;
          var currVal_1 = _co.diskAndGroupActionDisabledReason;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.removeDiskButtonLabel"));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_PrecheckReportComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-outline btn-sm"], ["id", "unmount-disk-action"]], [[8, "disabled", 0], [1, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.unmountVsanMaxDisk() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isDiskAndGroupActionDisabled;
          var currVal_1 = _co.diskAndGroupActionDisabledReason;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.unmountDiskgroupButtonLabel"));

          _ck(_v, 1, 0, currVal_2);
        });
      }

      function View_PrecheckReportComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "clr-col-12"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n                  ", "\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "report-warning-message-", _v.context.index, "");

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.$implicit;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_PrecheckReportComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.report.messages;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PrecheckReportComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _co.getIconClasses(_co.virtualObjectsTabStatusIcon);

          _ck(_v, 1, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.virtualObjectsTabStatusIcon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PrecheckReportComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "clr-tab-content", [["class", "display-flex-column"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[3, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "vsan-precheck-virtual-objects-tab", [["class", "display-flex-column"]], null, null, null, _virtual_objects_precheck_virtual_objects_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_PrecheckVirtualObjectsTabComponent_0"], _virtual_objects_precheck_virtual_objects_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_PrecheckVirtualObjectsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _virtual_objects_precheck_virtual_objects_tab_component__WEBPACK_IMPORTED_MODULE_9__["PrecheckVirtualObjectsTabComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_10__["PrecheckReportService"]], {
          statusIcon: [0, "statusIcon"],
          inaccessibleObjectsCount: [1, "inaccessibleObjectsCount"],
          nonCompliantObjectsCount: [2, "nonCompliantObjectsCount"],
          noDurabilityObjectsCount: [3, "noDurabilityObjectsCount"],
          durableVirtualObjects: [4, "durableVirtualObjects"],
          delayTimer: [5, "delayTimer"],
          isDurabilitySupported: [6, "isDurabilitySupported"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.virtualObjectsTabStatusIcon;

          var currVal_1 = _co.getInaccessibleObjectsCount();

          var currVal_2 = _co.getNonCompliantObjectsCount();

          var currVal_3 = _co.getObjectsWithoutEnhancedDurabilityCount();

          var currVal_4 = _co.durableVirtualObjects;
          var currVal_5 = _co.report.clusterRepairTime;

          var currVal_6 = _co.displayDurabilityColumn();

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        }, null);
      }

      function View_PrecheckReportComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var currVal_0 = null;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_PrecheckReportComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _co.getIconClasses(_co.capacityTabStatusIcon);

          _ck(_v, 1, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.capacityTabStatusIcon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PrecheckReportComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_PrecheckReportComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "clr-tab-content", [["class", "evacuation-report-capacity-tab display-flex-column"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PrecheckReportComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 9);

          _ck(_v, 6, 0, currVal_0);
        }, null);
      }

      function View_PrecheckReportComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _co.getIconClasses(_co.healthTabStatusIcon);

          _ck(_v, 1, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.healthTabStatusIcon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PrecheckReportComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "clr-tab-content", [["class", "display-flex-column"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[7, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n                        ", "\n                     "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "vsan-health-checks", [], [[2, "no-sidenav-layout", null]], null, null, _health_view_health_checks_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_HealthChecksComponent_0"], _health_view_health_checks_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_HealthChecksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _health_view_health_checks_component__WEBPACK_IMPORTED_MODULE_12__["HealthChecksComponent"], [], {
          isVirtualObjectsLinkShown: [0, "isVirtualObjectsLinkShown"],
          isDiskSpaceActionShown: [1, "isDiskSpaceActionShown"],
          isFlat: [2, "isFlat"],
          includeBorderToDetails: [3, "includeBorderToDetails"],
          vsanHealthData: [4, "vsanHealthData"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = false;
          var currVal_3 = false;
          var currVal_4 = true;
          var currVal_5 = true;
          var currVal_6 = _co.report == null ? null : _co.report.healthSummary;

          _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.healthTab.generalInfo"));

          _ck(_v, 6, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).hasNoTestData;

          _ck(_v, 9, 0, currVal_1);
        });
      }

      function View_PrecheckReportComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
          "display-flex-column": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, 0, 11, "button", [["class", "btn btn-link"], ["clrTabLink", ""], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "span", [["class", "tab-label text-nowrap"]], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["\n                     ", "\n                 "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrIfActiveChange" === en) {
            var pd_0 = (_co.isHealthTabActive = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_PrecheckReportComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, {
          activeChange: "clrIfActiveChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 2, 0, _co.isHealthTabActive);

          _ck(_v, 1, 0, currVal_0);

          var currVal_12 = !!_co.healthTabStatusIcon;

          _ck(_v, 19, 0, currVal_12);

          var currVal_13 = _co.isHealthTabActive;

          _ck(_v, 23, 0, currVal_13);
        }, function (_ck, _v) {
          var currVal_1 = false;
          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).addLinkClasses;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).addLinkClasses;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ariaControls;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tabLinkId;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).active;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).active;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tabindex;

          _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.healthTab.label")), "");

          _ck(_v, 13, 0, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.healthTab.label"));

          _ck(_v, 15, 0, currVal_11);
        });
      }

      function View_PrecheckReportComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _co.getIconClasses(_co.persistenceTabStatusIcon);

          _ck(_v, 1, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.persistenceTabStatusIcon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PrecheckReportComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "clr-tab-content", [["class", "display-flex-column"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "vsan-precheck-persistence-tab", [], null, null, null, _psp_precheck_persistence_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_PrecheckPersistenceTabComponent_0"], _psp_precheck_persistence_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_PrecheckPersistenceTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _psp_precheck_persistence_tab_component__WEBPACK_IMPORTED_MODULE_14__["PrecheckPersistenceTabComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_10__["PrecheckReportService"]], {
          persistentInstances: [0, "persistentInstances"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.report.persistenceData == null ? null : _co.report.persistenceData.persistentInstances;

          _ck(_v, 6, 0, currVal_0);
        }, null);
      }

      function View_PrecheckReportComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
          "display-flex-column": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, 0, 11, "button", [["class", "btn btn-link"], ["clrTabLink", ""], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "span", [["class", "tab-label text-nowrap"]], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrIfActiveChange" === en) {
            var pd_0 = (_co.isPersistenceTabActive = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_PrecheckReportComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, {
          activeChange: "clrIfActiveChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 2, 0, _co.isPersistenceTabActive);

          _ck(_v, 1, 0, currVal_0);

          var currVal_12 = !!_co.persistenceTabStatusIcon;

          _ck(_v, 19, 0, currVal_12);

          var currVal_13 = _co.isPersistenceTabActive;

          _ck(_v, 23, 0, currVal_13);
        }, function (_ck, _v) {
          var currVal_1 = false;
          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).addLinkClasses;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).addLinkClasses;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ariaControls;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tabLinkId;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).active;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).active;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tabindex;

          _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.label")), "");

          _ck(_v, 13, 0, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.persistenceTab.label"));

          _ck(_v, 15, 0, currVal_11);
        });
      }

      function View_PrecheckReportComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 73, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 70, "clr-tabs", [["class", "evacuation-report-tabs display-flex-column"]], [[2, "tabs-vertical", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTabs_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵec"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabs"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          tabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 24, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, {
          "display-flex-column": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 16777216, null, 0, 11, "button", [["class", "btn btn-link"], ["clrTabLink", ""], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, [[2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "span", [["class", "tab-label text-nowrap"]], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](26, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](28, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrIfActiveChange" === en) {
            var pd_0 = (_co.isVirtualObjectsTabActive = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_PrecheckReportComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, {
          activeChange: "clrIfActiveChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 24, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](41, {
          "display-flex-column": 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 16777216, null, 0, 11, "button", [["class", "btn btn-link"], ["clrTabLink", ""], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, [[4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 3, "span", [["class", "tab-label text-nowrap"]], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](53, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](55, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrIfActiveChange" === en) {
            var pd_0 = (_co.isCapacityTabActive = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_PrecheckReportComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, {
          activeChange: "clrIfActiveChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _ck(_v, 14, 0, _co.isVirtualObjectsTabActive);

          _ck(_v, 13, 0, currVal_1);

          var currVal_13 = !!_co.virtualObjectsTabStatusIcon;

          _ck(_v, 31, 0, currVal_13);

          var currVal_14 = _co.isVirtualObjectsTabActive;

          _ck(_v, 35, 0, currVal_14);

          var currVal_15 = _ck(_v, 41, 0, _co.isCapacityTabActive);

          _ck(_v, 40, 0, currVal_15);

          var currVal_27 = !!_co.capacityTabStatusIcon;

          _ck(_v, 58, 0, currVal_27);

          var currVal_28 = _co.isCapacityTabActive;

          _ck(_v, 62, 0, currVal_28);

          var currVal_29 = _co.report == null ? null : _co.report.healthSummary;

          _ck(_v, 67, 0, currVal_29);

          var currVal_30 = _co.report.persistenceData == null ? null : _co.report.persistenceData.persistentInstances == null ? null : _co.report.persistenceData.persistentInstances.length;

          _ck(_v, 71, 0, currVal_30);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).isVertical;

          _ck(_v, 2, 0, currVal_0);

          var currVal_2 = false;
          var currVal_3 = true;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).addLinkClasses;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).addLinkClasses;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ariaControls;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).tabLinkId;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).active;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).active;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).tabindex;

          _ck(_v, 21, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 25, 0, _ck(_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.virtualObjectsTab.label")), "");

          _ck(_v, 25, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 27, 0, _ck(_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.virtualObjectsTab.label"));

          _ck(_v, 27, 0, currVal_12);

          var currVal_16 = false;
          var currVal_17 = true;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).addLinkClasses;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).addLinkClasses;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ariaControls;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).tabLinkId;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).active;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).active;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).tabindex;

          _ck(_v, 48, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _ck(_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.label")), "");

          _ck(_v, 52, 0, currVal_25);

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 54, 0, _ck(_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.label"));

          _ck(_v, 54, 0, currVal_26);
        });
      }

      function View_PrecheckReportComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 71, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 30, "div", [["class", "report-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h5", [["id", "evacuation-report-last-test-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 23, "div", [["class", "actions-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 33, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 26, "form", [["class", "clr-form clr-form-horizontal"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 19, "div", [["class", "clr-form-control"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "label", [["class", "clr-control-label"], ["for", "last-report-summary-message"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, null, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](48, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 10, "div", [["class", "clr-control-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 4, "clr-icon", [["id", "selected-decommission-mode-summary-icon"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "span", [["id", "last-report-summary-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](59, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.enterMaintenanceModeVisible;

          _ck(_v, 12, 0, currVal_1);

          var currVal_2 = _co.removeDiskGroupVisible;

          _ck(_v, 16, 0, currVal_2);

          var currVal_3 = _co.recreateDiskGroupVisible;

          _ck(_v, 19, 0, currVal_3);

          var currVal_4 = _co.unmountDiskGroupVisible;

          _ck(_v, 22, 0, currVal_4);

          var currVal_5 = _co.removeDiskVisible;

          _ck(_v, 26, 0, currVal_5);

          var currVal_6 = _co.unmountVsanMaxDiskVisible;

          _ck(_v, 30, 0, currVal_6);

          var currVal_15 = "last-report-summary-message";

          _ck(_v, 46, 0, currVal_15);

          var currVal_18 = _co.getIconClasses(_co.statusIcon);

          _ck(_v, 53, 0, currVal_18);

          var currVal_20 = _co.report == null ? null : _co.report.messages == null ? null : _co.report.messages.length;

          _ck(_v, 66, 0, currVal_20);

          var currVal_21 = !_co.hasReportError;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 9);

          _ck(_v, 70, 0, currVal_21, currVal_22);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.report.label"));

          _ck(_v, 5, 0, currVal_0);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending;

          _ck(_v, 36, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).forAttr;

          _ck(_v, 45, 0, currVal_14);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 47, 0, _ck(_v, 48, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.report.reportDate));

          _ck(_v, 47, 0, currVal_16);

          var currVal_17 = _co.statusIcon;

          _ck(_v, 52, 0, currVal_17);

          var currVal_19 = _co.getSummaryReportMessage();

          _ck(_v, 59, 0, currVal_19);
        });
      }

      function View_PrecheckReportComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-precheck-capacity-tab", [], null, null, null, _capacity_precheck_capacity_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_PrecheckCapacityTabComponent_0"], _capacity_precheck_capacity_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_PrecheckCapacityTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _capacity_precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_17__["PrecheckCapacityTabComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_10__["PrecheckReportService"]], {
          capacityReports: [0, "capacityReports"],
          hasPersistenceDataToRebuild: [1, "hasPersistenceDataToRebuild"],
          hasError: [2, "hasError"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.getCapacityReports;
          var currVal_1 = _co.hasPersistenceDataToRebuild;
          var currVal_2 = _co.hasReportError;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PrecheckReportComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["capacityData", 2]], null, 0, null, View_PrecheckReportComponent_27)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.report.hasPrecheckReport && !_co.isTaskForSelectedEntity;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.report.hasPrecheckReport;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PrecheckReportComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_18__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_VsanDateFormatterPipe__WEBPACK_IMPORTED_MODULE_19__["VsanDateFormatterPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckReportComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.loadingReport || _co.loadingInitialInfo;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = !_co.loadingReport && !_co.loadingInitialInfo && _co.report;

          _ck(_v, 10, 0, currVal_2);
        }, null);
      }

      function View_PrecheckReportComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck-report", [], null, null, null, View_PrecheckReportComponent_0, RenderType_PrecheckReportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _precheck_report_component__WEBPACK_IMPORTED_MODULE_20__["PrecheckReportComponent"], [_generated_precheck_service__WEBPACK_IMPORTED_MODULE_21__["PrecheckService"], _precheck_report_service__WEBPACK_IMPORTED_MODULE_10__["PrecheckReportService"], _generated_what_if_property_provider__WEBPACK_IMPORTED_MODULE_22__["WhatIfPropertyProvider"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_23__["VsanCapabilityProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_24__["PermissionService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_25__["VsanConfigService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PrecheckReportComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-report", _precheck_report_component__WEBPACK_IMPORTED_MODULE_20__["PrecheckReportComponent"], View_PrecheckReportComponent_Host_0, {
        diskGroupOfSelectedDisk: "diskGroupOfSelectedDisk",
        precheckEntity: "precheckEntity",
        decommissionMode: "decommissionMode",
        isVsanMaxEnabled: "isVsanMaxEnabled",
        reportRefreshed: "reportRefreshed"
      }, {
        precheckTaskStarted: "precheckTaskStarted",
        refreshReport: "refreshReport"
      }, []);
      /***/

    },

    /***/
    "PK2p":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-breakdown.component.ngfactory.js ***!
      \**************************************************************************************************/

    /*! exports provided: RenderType_PrecheckCapacityBreakdownComponent, View_PrecheckCapacityBreakdownComponent_0, View_PrecheckCapacityBreakdownComponent_Host_0, PrecheckCapacityBreakdownComponentNgFactory */

    /***/
    function PK2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckCapacityBreakdownComponent", function () {
        return RenderType_PrecheckCapacityBreakdownComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckCapacityBreakdownComponent_0", function () {
        return View_PrecheckCapacityBreakdownComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckCapacityBreakdownComponent_Host_0", function () {
        return View_PrecheckCapacityBreakdownComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckCapacityBreakdownComponentNgFactory", function () {
        return PrecheckCapacityBreakdownComponentNgFactory;
      });
      /* harmony import */


      var _precheck_capacity_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-capacity-tab.scss.shim.ngstyle */
      "3UtR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./precheck-capacity-bar-chart.component.ngfactory */
      "GQLm");
      /* harmony import */


      var _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./precheck-capacity-bar-chart.component */
      "VfF2");
      /* harmony import */


      var _precheck_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../precheck-report.service */
      "CWZg");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _precheck_capacity_breakdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./precheck-capacity-breakdown.component */
      "EJQp");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckCapacityBreakdownComponent = [_precheck_capacity_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckCapacityBreakdownComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckCapacityBreakdownComponent,
        data: {}
      });

      function View_PrecheckCapacityBreakdownComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["class", "capacity-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "label", [["class", "capacity-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "p7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "p7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "vsan-precheck-capacity-bar-chart", [["class", "capacity-bar-chart"]], null, null, null, _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_PrecheckCapacityBarChartComponent_0"], _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_PrecheckCapacityBarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["PrecheckCapacityBarChartComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_5__["PrecheckReportService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__["BarChartService"]], {
          preOperationCapacity: [0, "preOperationCapacity"],
          postOperationCapacity: [1, "postOperationCapacity"],
          warningThreshold: [2, "warningThreshold"],
          errorThreshold: [3, "errorThreshold"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 3, 0);

          var currVal_3 = _co.clusterCapacity.preOperationCapacity;
          var currVal_4 = _co.clusterCapacity.postOperationCapacity;
          var currVal_5 = _co.clusterCapacity.warningThreshold;
          var currVal_6 = _co.clusterCapacity.errorThreshold;

          _ck(_v, 15, 0, currVal_3, currVal_4, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.before"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.after"));

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.additionalHostNeeded"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.insufficientSpace"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.componentLimitReached"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid is-error capacity-error-summary-icon"], ["shape", "error-standard"]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_1 = _v.parent.context.$implicit.isAdditionalHostNeeded;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.hasInsufficientSpace;

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = _v.parent.context.$implicit.isComponentLimitReached;

          _ck(_v, 14, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fault-domains-cell-", _v.parent.context.index, "");

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "capacity-cell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "vsan-precheck-capacity-bar-chart", [], null, null, null, _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_PrecheckCapacityBarChartComponent_0"], _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_PrecheckCapacityBarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["PrecheckCapacityBarChartComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_5__["PrecheckReportService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__["BarChartService"]], {
          preOperationCapacity: [0, "preOperationCapacity"],
          postOperationCapacity: [1, "postOperationCapacity"],
          warningThreshold: [2, "warningThreshold"],
          errorThreshold: [3, "errorThreshold"],
          isThinBar: [4, "isThinBar"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.$implicit.preOperationCapacity;
          var currVal_1 = _v.parent.context.$implicit.postOperationCapacity;
          var currVal_2 = _co.clusterCapacity.warningThreshold;
          var currVal_3 = _co.clusterCapacity.errorThreshold;
          var currVal_4 = "true";

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_PrecheckCapacityBreakdownComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_PrecheckCapacityBreakdownComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 34, "clr-dg-row-detail", [], [[2, "datagrid-row-flex", null], [2, "datagrid-row-detail", null], [2, "datagrid-container", null], [1, "id", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridRowDetail_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridRowDetail"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRowDetail"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          cells: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 16777216, null, 0, 17, "clr-dg-cell", [["role", "gridcell"]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 11, "span", [["class", "host-cell-indent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "clr-icon", [], [[8, "id", 0], [1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](21, {
          "selected-entity": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["\n                        ", "\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 16777216, null, 0, 8, "clr-dg-cell", [["role", "gridcell"]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_PrecheckCapacityBreakdownComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](33, {
          item: 0,
          idx: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          _ck(_v, 8, 0);

          var currVal_9 = _ck(_v, 21, 0, !!_v.parent.context.$implicit.selectedEntityType);

          _ck(_v, 20, 0, currVal_9);

          _ck(_v, 27, 0);

          var currVal_14 = _ck(_v, 33, 0, _v.parent.context.$implicit, _v.parent.context.index);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 11);

          _ck(_v, 32, 0, currVal_14, currVal_15);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = true;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).cells.length === 0;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).expand.expandableId;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "host-name-cell-", _v.parent.context.index, "");

          var currVal_5 = true;
          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).signpost.length > 0;

          _ck(_v, 7, 0, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "host-cell-icon-", _v.parent.context.index, "");

          var currVal_8 = _v.parent.context.$implicit.iconId;

          _ck(_v, 14, 0, currVal_7, currVal_8);

          var currVal_10 = _v.parent.context.$implicit.hostName;

          _ck(_v, 22, 0, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "predicted-capcity-host-cell-", _v.parent.context.index, "");

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).signpost.length > 0;

          _ck(_v, 26, 0, currVal_11, currVal_12, currVal_13);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_PrecheckCapacityBreakdownComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridDetailRegisterer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIfExpanded"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵz"]], {
          expanded: [0, "expanded"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.hasFaultDomainErrors(_v.parent.context.$implicit);

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_PrecheckCapacityBreakdownComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 44, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 15, "clr-dg-cell", [["role", "gridcell"]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "clr-icon", [["aria-hidden", "true"]], [[8, "id", 0], [1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 114688, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 147456, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PrecheckCapacityBreakdownComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PrecheckCapacityBreakdownComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PrecheckCapacityBreakdownComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          _ck(_v, 29, 0);

          var currVal_12 = _co.hasFaultDomainErrors(_v.context.$implicit);

          _ck(_v, 34, 0, currVal_12);

          var currVal_13 = !_co.hasFaultDomainErrors(_v.context.$implicit);

          _ck(_v, 37, 0, currVal_13);

          var currVal_14 = _v.context.$implicit.hostsCapacityData;

          _ck(_v, 43, 0, currVal_14);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fault-domain-name-cell-", _v.context.index, "");

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;

          _ck(_v, 11, 0, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fault-domains-cell-icon-", _v.context.index, "");

          var currVal_7 = _co.Icon.FAULT_DOMAIN;

          _ck(_v, 18, 0, currVal_6, currVal_7);

          var currVal_8 = _v.context.$implicit.faultDomainName;

          _ck(_v, 24, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "predicted-capcity-cell-", _v.context.index, "");

          var currVal_10 = true;
          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).signpost.length > 0;

          _ck(_v, 28, 0, currVal_9, currVal_10, currVal_11);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_PrecheckCapacityBreakdownComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 39, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 17, "clr-dg-cell", [["role", "gridcell"]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[17, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[18, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "clr-icon", [], [[8, "id", 0], [1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, {
          "selected-entity": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 16777216, null, 2, 8, "clr-dg-cell", [["role", "gridcell"]], [[8, "id", 0], [2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 114688, [[17, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 147456, [[18, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_PrecheckCapacityBreakdownComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](37, {
          item: 0,
          idx: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          var currVal_8 = _ck(_v, 25, 0, !!_v.context.$implicit.selectedEntityType);

          _ck(_v, 24, 0, currVal_8);

          _ck(_v, 31, 0);

          var currVal_13 = _ck(_v, 37, 0, _v.context.$implicit, _v.context.index);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 11);

          _ck(_v, 36, 0, currVal_13, currVal_14);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "host-name-cell-", _v.context.index, "");

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;

          _ck(_v, 11, 0, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "host-name-cell-icon-", _v.context.index, "");

          var currVal_7 = _v.context.$implicit.iconId;

          _ck(_v, 18, 0, currVal_6, currVal_7);

          var currVal_9 = _v.context.$implicit.hostName;

          _ck(_v, 26, 0, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "host-predicted-capcity-cell-", _v.context.index, "");

          var currVal_11 = true;
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).signpost.length > 0;

          _ck(_v, 30, 0, currVal_10, currVal_11, currVal_12);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 93, "clr-datagrid", [["id", "evacuation-report-capacity-table"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 16777216, null, null, 10, "clr-dg-column", [["class", "primary-column"], ["id", "object-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](40, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 16777216, null, null, 9, "clr-dg-column", [["id", "capacity-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](51, 1, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 2, 30, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, 1, 25, "div", [["class", "color-legend-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 0, "div", [["class", "color-legend"]], [[4, "background-color", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 2, "span", [["class", "color-legend-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](71, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](72, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 0, "div", [["class", "color-legend"]], [[4, "background-color", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "span", [["class", "color-legend-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](77, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](78, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "div", [["class", "color-legend"]], [[4, "background-color", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 2, "span", [["class", "color-legend-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](84, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 0, "div", [["class", "color-legend no-capacity-legend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 2, "span", [["class", "color-legend-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](89, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](90, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 34, 0);

          _ck(_v, 46, 0);

          var currVal_8 = _co.clusterCapacity.faultDomains;

          _ck(_v, 56, 0, currVal_8);

          var currVal_9 = _co.clusterCapacity.standaloneHosts;

          _ck(_v, 60, 0, currVal_9);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).detailService.isOpen;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ariaSort;

          _ck(_v, 30, 0, currVal_2, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 39, 0, _ck(_v, 40, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.objectHeader"));

          _ck(_v, 39, 0, currVal_4);

          var currVal_5 = true;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ariaSort;

          _ck(_v, 42, 0, currVal_5, currVal_6);

          var currVal_7 = _co.getCapacityColumnHeader();

          _ck(_v, 51, 0, currVal_7);

          var currVal_10 = true;

          _ck(_v, 62, 0, currVal_10);

          var currVal_11 = _co.getGreenColor();

          _ck(_v, 68, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 71, 0, _ck(_v, 72, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.ok"));

          _ck(_v, 71, 0, currVal_12);

          var currVal_13 = _co.getYellowColor();

          _ck(_v, 74, 0, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 77, 0, _ck(_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.warningThreshold", _co.clusterCapacity.warningThreshold));

          _ck(_v, 77, 0, currVal_14);

          var currVal_15 = _co.getRedColor();

          _ck(_v, 80, 0, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 0, _ck(_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.dangerThreshold", _co.clusterCapacity.errorThreshold));

          _ck(_v, 83, 0, currVal_16);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 89, 0, _ck(_v, 90, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.noCapacity"));

          _ck(_v, 89, 0, currVal_17);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.hostDecommissionedFailure"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.diskGroupDecommissionedFailure"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.diskDecommissionedFailure"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.parent.context.item.selectedEntityType === _co.PrecheckEntityType.HOST;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.parent.parent.context.item.selectedEntityType === _co.PrecheckEntityType.DISK_GROUP;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _v.parent.parent.context.item.selectedEntityType === _co.PrecheckEntityType.DISK;

          _ck(_v, 9, 0, currVal_2);
        }, null);
      }

      function View_PrecheckCapacityBreakdownComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getInsufficientSpaceLabel(_v.parent.parent.context.item.capacityNeeded);

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.table.componentLimitReachedOnHost"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid is-error capacity-error-summary-icon"], ["shape", "error-standard"]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.hasError && !!_v.parent.context.item.selectedEntityType;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _v.parent.context.item.capacityNeeded;

          _ck(_v, 11, 0, currVal_2);

          var currVal_3 = _v.parent.context.item.isComponentLimitReached;

          _ck(_v, 14, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "host-cell-error-", _v.parent.context.idx, "");

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityBreakdownComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "vsan-precheck-capacity-bar-chart", [], null, null, null, _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_PrecheckCapacityBarChartComponent_0"], _precheck_capacity_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_PrecheckCapacityBarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _precheck_capacity_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["PrecheckCapacityBarChartComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_5__["PrecheckReportService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__["BarChartService"]], {
          preOperationCapacity: [0, "preOperationCapacity"],
          postOperationCapacity: [1, "postOperationCapacity"],
          warningThreshold: [2, "warningThreshold"],
          errorThreshold: [3, "errorThreshold"],
          isThinBar: [4, "isThinBar"],
          selectedEntityType: [5, "selectedEntityType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.item.preOperationCapacity;
          var currVal_1 = _v.parent.context.item.postOperationCapacity;
          var currVal_2 = _co.clusterCapacity.warningThreshold;
          var currVal_3 = _co.clusterCapacity.errorThreshold;
          var currVal_4 = "true";
          var currVal_5 = _v.parent.context.item.selectedEntityType;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_PrecheckCapacityBreakdownComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.hasHostErrors(_v.context.item);

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = !_co.hasHostErrors(_v.context.item);

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_PrecheckCapacityBreakdownComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityBreakdownComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["hostCell", 2]], null, 0, null, View_PrecheckCapacityBreakdownComponent_14))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.hasError;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.showCapacityTable();

          _ck(_v, 8, 0, currVal_1);
        }, null);
      }

      function View_PrecheckCapacityBreakdownComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck-capacity-breakdown", [], null, null, null, View_PrecheckCapacityBreakdownComponent_0, RenderType_PrecheckCapacityBreakdownComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _precheck_capacity_breakdown_component__WEBPACK_IMPORTED_MODULE_11__["PrecheckCapacityBreakdownComponent"], [_common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_6__["BarChartService"]], null, null)], null, null);
      }

      var PrecheckCapacityBreakdownComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-capacity-breakdown", _precheck_capacity_breakdown_component__WEBPACK_IMPORTED_MODULE_11__["PrecheckCapacityBreakdownComponent"], View_PrecheckCapacityBreakdownComponent_Host_0, {
        clusterCapacity: "clusterCapacity",
        hasError: "hasError",
        datastoreType: "datastoreType"
      }, {}, []);
      /***/

    },

    /***/
    "PPZ6":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/psp/precheck-persistence-tab.scss.shim.ngstyle.js ***!
      \****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function PPZ6(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9yZXBvcnQvcHNwL3ByZWNoZWNrLXBlcnNpc3RlbmNlLXRhYi5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcHJlY2hlY2svcmVwb3J0L3BzcC9wcmVjaGVjay1wZXJzaXN0ZW5jZS10YWIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIwLTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "Ps3O":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/virtual-objects/precheck-virtual-objects-tab.scss.shim.ngstyle.js ***!
      \********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Ps3O(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.general-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  align-items: center;\n  justify-content: center;\n}\n.virtual-objects-summary-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.virtual-objects-summary-message[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n}\n.p7[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9yZXBvcnQvdmlydHVhbC1vYmplY3RzL3ByZWNoZWNrLXZpcnR1YWwtb2JqZWN0cy10YWIuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFjSDtBRThCRztFQUNHLGdDQUFBO0FGNUJOO0FFOEJHOztFQUdHLGdDQUFBO0FGN0JOO0FFK0JHO0VBQ0csOEJBQUE7QUY3Qk47QUFwQkE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXVCSDtBQXBCQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtBQXVCSDtBQXRCRztFQUNHLG9CR0hJO0FIMkJWO0FBcEJBO0VBQ0csd0JBQUE7QUF1QkgiLCJmaWxlIjoic3JjL2FwcC92c2FuL3ByZWNoZWNrL3JlcG9ydC92aXJ0dWFsLW9iamVjdHMvcHJlY2hlY2stdmlydHVhbC1vYmplY3RzLXRhYi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4uZ2VuZXJhbC1tZXNzYWdlIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52aXJ0dWFsLW9iamVjdHMtc3VtbWFyeS1tZXNzYWdlIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgY2xyLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZztcbiAgIH1cbn1cblxuLnA3IHtcbiAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "S5sa":
    /*!*****************************************************!*\
      !*** ./src/app/vsan/precheck/precheck.component.ts ***!
      \*****************************************************/

    /*! exports provided: PrecheckComponent */

    /***/
    function S5sa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckComponent", function () {
        return PrecheckComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_inventory_tree_view_tree_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/inventory/tree-view/tree-node */
      "cFlq");
      /* harmony import */


      var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/unavailable-view/unavailable-view-spec */
      "Hg5h");
      /* harmony import */


      var _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/decommission-mode */
      "yaIQ");
      /* harmony import */


      var _generated_disk_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/disk-data */
      "1yrm");
      /* harmony import */


      var _generated_precheck_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/precheck-entity */
      "Hgj/");
      /* harmony import */


      var _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/precheck-entity-type */
      "wzkD");
      /* harmony import */


      var _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/precheck-operation */
      "l/W2");
      /* harmony import */


      var _generated_precheck_task_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/precheck-task-data */
      "tCE3");
      /* harmony import */


      var _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/precheck-task-type */
      "4fOM");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _service_task_monitor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @util/vsan-data-migration-util */
      "36iK");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _precheck_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./precheck-util */
      "9Rpg");

      var PrecheckComponent = /*@__PURE__*/function () {
        var PrecheckComponent = /*#__PURE__*/function () {
          function PrecheckComponent(precheckService, precheckReportService, taskService, permissionService, spaceEfficiencyService) {
            var _this3 = this;

            _classCallCheck(this, PrecheckComponent);

            this.precheckService = precheckService;
            this.precheckReportService = precheckReportService;
            this.taskService = taskService;
            this.permissionService = permissionService;
            this.spaceEfficiencyService = spaceEfficiencyService;
            this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject; // Whether the pre-check report is refreshed, mark it to false to load report.

            this.reportRefreshed = false;

            this.onPrecheckRetrieved = function (result) {
              if (!result) {
                return;
              }

              if (!result.isHostResourcePrecheckSupported) {
                _this3.unavailableView = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_2__["UnavailableViewSpec"].DATA_MIGRATION_PRECHECK_VIEW_OLD_HOSTS;

                _this3.announceToScreenReader();

                return;
              }

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].isEmpty(result.precheckEntities)) {
                _this3.unavailableView = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_2__["UnavailableViewSpec"].DATA_MIGRATION_PRECHECK_VIEW_NO_HOSTS;

                _this3.announceToScreenReader();

                return;
              }

              _this3.alertMessage = result.errorMessage;
              _this3.spaceEfficiencyConfig = result.spaceEfficiencyConfig;
              _this3.isHostResourcePrecheckSupported = result.isHostResourcePrecheckSupported;
              _this3.isDiskResourcePrecheckSupported = result.isDiskResourcePrecheckSupported;
              _this3.isVsanMaxEnabled = result.isVsanMaxEnabled;
              _this3.precheckEntities = result.precheckEntities;
              _this3.precheckEntitiesTreeNodes = _this3.convertToTreeNodes(_this3.precheckEntities);

              _this3.selectPrecheckEntity();

              if (_this3.selectedDecommissionMode === undefined || _this3.selectedDecommissionMode === null) {
                _this3.selectedDecommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__["DecommissionMode"].ensureObjectAccessibility;
              }

              _this3.showReport = _this3.precheckSupported;
              _this3.reportRefreshed = false;

              _this3.announceToScreenReader();
            };

            this.onError = function (error) {
              _this3.alertMessage = error;
              _this3.isRunningTaskForSelectedEntity = false;
              _this3.isPrecheckInProgress = false;
              _this3.isClusterOperationInProgress = false; // even when the task fails we want to show the last valid report

              _this3.showReport = true;
              _this3.reportRefreshed = false;
            };
          }

          _createClass(PrecheckComponent, [{
            key: "selectedPrecheckEntity",
            get: function get() {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].isEmpty(this.selectedPrecheckEntities) ? null : this.selectedPrecheckEntities[0];
            },
            set: function set(entity) {
              this.selectedPrecheckEntities = entity ? [entity] : [];
              this.precheckUnsupportedLabel = this.getPrecheckUnsupportedLabel(); // Update disk group if new entity is a capacity disk.

              this.diskGroupOfSelectedDisk = !!entity && entity.type === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].DISK ? _precheck_util__WEBPACK_IMPORTED_MODULE_18__["PrecheckUtil"].extractParentEntityByUuid(entity.uuid, this.precheckEntities) : null;
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this4 = this;

              this.loading = true;
              this.permissionService.hasPermissions(this.clusterRef, [_generated_privileges__WEBPACK_IMPORTED_MODULE_10__["Privileges"].EDIT_CLUSTER()]).then(function (result) {
                return _this4.hasEditPrivilege = result;
              })["catch"](function (error) {
                _util_logger__WEBPACK_IMPORTED_MODULE_15__["Logger"].warn("Unable to check edit cluster privilege: ", error);
              });

              var context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getNavigationData();

              if (context) {
                if (context.selectedEntity) {
                  this.selectedPrecheckEntity = _generated_precheck_entity__WEBPACK_IMPORTED_MODULE_5__["PrecheckEntity"].Factory.create(_service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].fromUid(context.selectedEntity), null, null, null, null, true, false, null, null, null);

                  if (context.objectUuid) {
                    this.selectedPrecheckEntity.uuid = context.objectUuid;
                  }

                  if (context.selectedEvacuationType) {
                    this.selectedDecommissionMode = context.selectedEvacuationType;
                  }
                } else {
                  _util_logger__WEBPACK_IMPORTED_MODULE_15__["Logger"].error("Missing selected entity when context is populated for Data migration pre-check view");
                }
              }

              this.refresh();
            }
          }, {
            key: "refresh",
            value: function refresh() {
              var _this5 = this;

              this.loading = true;
              this.unavailableView = null;
              this.precheckService.getPrecheckData(this.clusterRef).then(this.onPrecheckRetrieved)["catch"](this.onError)["finally"](function () {
                return _this5.loading = false;
              });
            }
          }, {
            key: "onPrecheckEntityChange",
            value: function onPrecheckEntityChange(entity) {
              this.selectedPrecheckEntity = entity;
              this.selectedDecommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_3__["DecommissionMode"].ensureObjectAccessibility; // show report only when the resource pre-check can be run for the selected entity.

              this.showReport = this.precheckSupported;
              this.reportRefreshed = false;
              this.isPrecheckInProgress = false;
              this.isRunningTaskForSelectedEntity = false;
            }
          }, {
            key: "precheckSupported",
            get: function get() {
              return this.selectedPrecheckEntity && !this.precheckUnsupportedLabel;
            }
          }, {
            key: "onDecommissionModeSummaryChanged",
            value: function onDecommissionModeSummaryChanged(event) {
              this.selectedDecommissionMode = event;
              this.reportRefreshed = false;
              this.showReport = true;
              this.isPrecheckInProgress = false;
              this.isRunningTaskForSelectedEntity = false;
            }
          }, {
            key: "onReportRefreshed",
            value: function onReportRefreshed() {
              this.reportRefreshed = true;
            } // override this flag only when it is regarding another entity in the cluster

          }, {
            key: "onHasRunningTask",
            value: function onHasRunningTask(event) {
              if (!this.isRunningTaskForSelectedEntity) {
                this.isClusterOperationInProgress = event;
              }
            }
          }, {
            key: "onPrecheckClicked",
            value: function onPrecheckClicked() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var taskType, operation, precheckTaskRef;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.t0 = this.selectedPrecheckEntity.type;
                        _context.next = _context.t0 === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].HOST ? 4 : _context.t0 === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].DISK_GROUP ? 7 : _context.t0 === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].DISK ? 10 : 13;
                        break;

                      case 4:
                        taskType = _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].HOST_PRECHECK;
                        operation = _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_7__["PrecheckOperation"].ENTER_MAINTENANCE_MODE;
                        return _context.abrupt("break", 13);

                      case 7:
                        taskType = _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_PRECHECK;
                        operation = _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_7__["PrecheckOperation"].DISK_DATA_EVACUATION;
                        return _context.abrupt("break", 13);

                      case 10:
                        taskType = _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISK_PRECHECK;
                        operation = _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_7__["PrecheckOperation"].DISK_DATA_EVACUATION;
                        return _context.abrupt("break", 13);

                      case 13:
                        _context.next = 15;
                        return this.precheckService.runDataMigrationPrecheck(this.clusterRef, this.selectedPrecheckEntity.uuid, this.selectedDecommissionMode.toString(), operation);

                      case 15:
                        precheckTaskRef = _context.sent;
                        this.precheckTask = _generated_precheck_task_data__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskData"].Factory.create(precheckTaskRef, // task MoRef
                        this.selectedPrecheckEntity.name, // entity name
                        this.selectedPrecheckEntity.uuid, // enitty uuid
                        null, // host name
                        this.selectedDecommissionMode, // decommission mode
                        taskType); // pre-check type

                        _context.next = 19;
                        return this.onPrecheckTaskStarted(this.precheckTask);

                      case 19:
                        _context.next = 24;
                        break;

                      case 21:
                        _context.prev = 21;
                        _context.t1 = _context["catch"](0);
                        this.onError(_context.t1);

                      case 24:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[0, 21]]);
              }));
            }
          }, {
            key: "onPrecheckTaskStarted",
            value: function onPrecheckTaskStarted(precheckTaskData) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var taskInfo, errorMessage, refreshNeeded;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.alertMessage = undefined;

                        if (precheckTaskData) {
                          _context2.next = 3;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 3:
                        this.showReport = false;
                        this.isRunningTaskForSelectedEntity = this.precheckReportService.isTaskForSelectedEntity(precheckTaskData, this.selectedPrecheckEntity.uuid, this.selectedDecommissionMode);
                        this.isClusterOperationInProgress = true;

                        if (this.isRunningTaskForSelectedEntity) {
                          _context2.next = 9;
                          break;
                        }

                        // show the report if the selection is changed
                        this.showReport = true;
                        return _context2.abrupt("return");

                      case 9:
                        this.taskProgress = 0;
                        this.isPrecheckInProgress = true;
                        this.precheckTask = precheckTaskData; // Await task completion

                        _context2.prev = 12;

                      case 13:
                        if (!true) {
                          _context2.next = 30;
                          break;
                        }

                        if (this.isPrecheckInProgress) {
                          _context2.next = 16;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 16:
                        _context2.next = 18;
                        return this.taskService.getInfo(this.precheckTask.taskMoRef);

                      case 18:
                        taskInfo = _context2.sent;

                        if (!(!taskInfo || taskInfo.status === _service_task_monitor_service__WEBPACK_IMPORTED_MODULE_14__["TaskStatus"].SUCCESS)) {
                          _context2.next = 21;
                          break;
                        }

                        return _context2.abrupt("break", 30);

                      case 21:
                        if (!(taskInfo.status === _service_task_monitor_service__WEBPACK_IMPORTED_MODULE_14__["TaskStatus"].ERROR)) {
                          _context2.next = 25;
                          break;
                        }

                        errorMessage = this.precheckReportService.getFailedTaskMessage(this.precheckTask.taskType, this.selectedPrecheckEntity.name);
                        this.onError(errorMessage);
                        return _context2.abrupt("return");

                      case 25:
                        this.taskProgress = taskInfo.progress; // repeat on every 2 seconds

                        _context2.next = 28;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, PrecheckComponent.TIMEOUT_IN_MS);
                        });

                      case 28:
                        _context2.next = 13;
                        break;

                      case 30:
                        _context2.next = 36;
                        break;

                      case 32:
                        _context2.prev = 32;
                        _context2.t0 = _context2["catch"](12);
                        this.onError(_context2.t0);
                        return _context2.abrupt("return");

                      case 36:
                        this.isPrecheckInProgress = false;
                        this.isClusterOperationInProgress = false;
                        refreshNeeded = PrecheckComponent.NEED_REFRESH_ACTIONS.indexOf(precheckTaskData.taskType) > -1;

                        if (refreshNeeded) {
                          this.selectedPrecheckEntity = undefined;
                          this.refresh();
                        } else {
                          this.showReport = true;
                          this.reportRefreshed = false;
                        }

                      case 40:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[12, 32]]);
              }));
            }
          }, {
            key: "onSelectedObjectInfosChange",
            value: function onSelectedObjectInfosChange(objectInfos) {
              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].isEmpty(objectInfos) || this.selectedPrecheckEntity && objectInfos[0].uuid === this.selectedPrecheckEntity.uuid) {
                return;
              }

              this.onPrecheckEntityChange(objectInfos[0]);
              this.selectedPrecheckEntities = objectInfos;
            }
          }, {
            key: "convertToTreeNodes",
            value: function convertToTreeNodes(entities) {
              var _this6 = this;

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].isEmpty(entities)) {
                return [];
              }

              return entities.map(function (entity) {
                return new _component_inventory_tree_view_tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNode"](entity, _this6.convertToTreeNodes(entity.children));
              });
            }
          }, {
            key: "getPrecheckUnsupportedLabel",
            value: function getPrecheckUnsupportedLabel() {
              if (!this.selectedPrecheckEntity) {
                return "";
              }

              switch (this.selectedPrecheckEntity.type) {
                case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].HOST:
                  if (!this.selectedPrecheckEntity.isHostConnected) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.host.disconnected");
                  } else if (this.selectedPrecheckEntity.isInMaintenanceMode) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.host.maintenanceMode");
                  }

                  break;

                case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].DISK_GROUP:
                  if (this.selectedPrecheckEntity.isInMaintenanceMode) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.diskgroup.maintenanceMode");
                  }

                  if (this.selectedPrecheckEntity.diskGroupData) {
                    if (this.selectedPrecheckEntity.diskGroupData.isLocked) {
                      return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.diskgroup.locked");
                    } else if (!this.selectedPrecheckEntity.diskGroupData.isMounted) {
                      return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.diskgroup.unmounted");
                    }
                  }

                  break;

                case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckEntityType"].DISK:
                  if (this.selectedPrecheckEntity.isInMaintenanceMode) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.disk.maintenanceMode");
                  }

                  if (!this.spaceEfficiencyService.isDiskPreCheckEvacuationSupported(this.spaceEfficiencyConfig)) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.disk.dedupEnabled");
                  }

                  if (this.selectedPrecheckEntity.diskData) {
                    if (this.selectedPrecheckEntity.diskData.deviceState === _generated_disk_data__WEBPACK_IMPORTED_MODULE_4__["DiskData"].DeviceState.OFF) {
                      return this.isVsanMaxEnabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.disk.unmounted") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.disk.unmountedDiskGroup");
                    } else if (this.selectedPrecheckEntity.diskData.deviceState === _generated_disk_data__WEBPACK_IMPORTED_MODULE_4__["DiskData"].DeviceState.ERROR) {
                      return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported.disk.deadOrError");
                    }
                  }

                  break;

                default:
                  return "";
              }
            }
          }, {
            key: "getOperationInProgressLabel",
            value: function getOperationInProgressLabel() {
              if (!this.precheckTask) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress", this.taskProgress);
              }

              switch (this.precheckTask.taskType) {
                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].HOST_ENTER_MAINTENANCE_MODE:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress.maintenanceMode", this.taskProgress);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_REMOVAL:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress.removeGroup", this.taskProgress);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_RECREATE:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress.recreateGroup", this.taskProgress);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_UNMOUNT:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress.unmountGroup", this.taskProgress);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISK_REMOVAL:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress.removeDisk", this.taskProgress);

                case _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISK_UNMOUNT:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress.unmountDisk", this.taskProgress);

                default:
                  // Running data migration pre-check for host, disk group or disk.
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.inProgress", this.taskProgress);
              }
            }
          }, {
            key: "getGeneralMessageLabel",
            value: function getGeneralMessageLabel() {
              if (this.isVsanMaxEnabled) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.hostDisk.resourcePrecheck.generalMessage");
              }

              return this.isDiskResourcePrecheckSupported ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.hostDiskGroupDisk.resourcePrecheck.generalMessage") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.host.resourcePrecheck.generalMessage");
            }
          }, {
            key: "selectPrecheckEntity",
            value: function selectPrecheckEntity() {
              if (!this.selectedPrecheckEntity || _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].isEmpty(this.precheckEntities)) {
                return;
              }

              if (this.selectedPrecheckEntity.uuid) {
                // Update selected evacuation entity based on uuid after refreshing entities.
                this.selectedPrecheckEntity = _precheck_util__WEBPACK_IMPORTED_MODULE_18__["PrecheckUtil"].extractPrecheckEntityByUuid(this.selectedPrecheckEntity.uuid, this.precheckEntities);
              } else {
                // When we navigate the user from Enter Maintenance Mode dialog to this page, it only passes hostRef,
                // we need to use the hostRef to extract the entire host entity data.
                this.selectedPrecheckEntity = _precheck_util__WEBPACK_IMPORTED_MODULE_18__["PrecheckUtil"].extractHostEntity(this.selectedPrecheckEntity.hostRef, this.precheckEntities);
              }
            }
          }, {
            key: "announceToScreenReader",
            value: function announceToScreenReader() {
              if (this.selectedPrecheckEntity && this.selectedDecommissionMode) {
                this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.evacuationStatus.report.srMessage", this.selectedPrecheckEntity.name, _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_16__["VsanDataMigrationUtil"].getLocalizedDecommissionMode(this.selectedDecommissionMode));
              } else {
                this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.screenReader.message.page.loaded", _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.monitor.evacuationStatus.label"));
              }
            }
          }]);

          return PrecheckComponent;
        }();

        PrecheckComponent.TIMEOUT_IN_MS = 2000;
        PrecheckComponent.NEED_REFRESH_ACTIONS = [_generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].HOST_ENTER_MAINTENANCE_MODE, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_REMOVAL, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_UNMOUNT, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISKGROUP_RECREATE, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISK_REMOVAL, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_9__["PrecheckTaskType"].DISK_UNMOUNT];
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_13__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PrecheckComponent.prototype, "srOnlyMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_11__["RefreshHandler"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], PrecheckComponent.prototype, "refresh", null);
        return PrecheckComponent;
      }();
      /***/

    },

    /***/
    "SmrV":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-bar-chart.scss.shim.ngstyle.js ***!
      \************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function SmrV(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n}\n.progress-static[_ngcontent-%COMP%] {\n  border-radius: 0.15rem;\n  height: 12px;\n}\n.progress-static[_ngcontent-%COMP%]   .progress-meter[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n.progress-static[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 0.3rem;\n}\n.thin-bar[_ngcontent-%COMP%] {\n  height: 9px;\n}\n.thin-bar[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 1px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.table-bar-chart[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.empty-bar[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  background-image: linear-gradient(45deg, transparent 34%, var(--vsan-color) 34%, var(--vsan-color) 51%, transparent 51%, transparent 84%, var(--vsan-color) 84%, var(--vsan-color) 100%);\n  background-size: 5px 5px;\n}\n.bar-chart-info[_ngcontent-%COMP%] {\n  padding-left: 0.6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bar-chart-info[_ngcontent-%COMP%]   .p8[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n.bar-chart-info[_ngcontent-%COMP%]   .selected-entity[_ngcontent-%COMP%] {\n  font-family: \"Metropolis\";\n  font-weight: 600;\n  font-style: italic;\n}\n.inner-bar[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  display: block;\n  content: \" \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9yZXBvcnQvY2FwYWNpdHkvcHJlY2hlY2stY2FwYWNpdHktYmFyLWNoYXJ0LnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMT0E7RUFDRyxhQUFBO0FBVUg7QUFQQTtFQUNHLHNCR1FRO0VIUFIsWUFUbUI7QUFtQnRCO0FBUkc7RUFDRyxzQklUc0I7QUptQjVCO0FBUkc7RUFDRyxxQkFBQTtBQVVOO0FBTkE7RUFDRyxXQW5Cd0I7QUE0QjNCO0FBUkc7RUFDRyxrQkFBQTtBQVVOO0FBTkE7RUFDRyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNIO0FBTkE7RUFDRyxZQUFBO0FBU0g7QUFOQTtFQUNHLHdDQUFBO0VFa0RBLHdMQUFBO0VBQ0Esd0JBQUE7QUZ4Q0g7QUFQQTtFQUNHLG9CRzdCTztFSDhCUCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVVIO0FBUkc7RUFDRyx3QkFBQTtBQVVOO0FBUEc7RUV1Q0EseUJBQUE7RUFDQSxnQkNvQ3VCO0VEbkN2QixrQkFBQTtBRjdCSDtBQUpBO0VBQ0csTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQU9IIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9wcmVjaGVjay9yZXBvcnQvY2FwYWNpdHkvcHJlY2hlY2stY2FwYWNpdHktYmFyLWNoYXJ0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kYmFzZS1iYXItY29sb3I6ICR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5O1xuJGNhcGFjaXR5LWJhci1oZWlnaHQ6IDEycHg7XG4kY2FwYWNpdHktdGhpbi1iYXItaGVpZ2h0OiA5cHg7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9ncmVzcy1zdGF0aWMge1xuICAgYm9yZGVyLXJhZGl1czogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU7XG4gICBoZWlnaHQ6ICRjYXBhY2l0eS1iYXItaGVpZ2h0O1xuICAgLy8gY2hhbmdlIGRlZmF1bHQgYmFja2dyb3VuZC1jb2xvciBvZiB0aGUgYmFyXG4gICAucHJvZ3Jlc3MtbWV0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtYmFyLWNvbG9yO1xuICAgfVxuICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuICAgfVxufVxuXG4udGhpbi1iYXIge1xuICAgaGVpZ2h0OiAkY2FwYWNpdHktdGhpbi1iYXItaGVpZ2h0O1xuICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgIH1cbn1cblxuLmJhci1jaGFydCB7XG4gICB3aWR0aDogNTAwcHg7XG4gICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnRhYmxlLWJhci1jaGFydCB7XG4gICB3aWR0aDogMjAwcHg7XG59XG5cbi5lbXB0eS1iYXIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgIEBpbmNsdWRlIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoKTtcbn1cblxuLmJhci1jaGFydC1pbmZvIHtcbiAgIHBhZGRpbmctbGVmdDogJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBtYXJnaW4tdG9wOiAwO1xuICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgLnA4IHtcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgIH1cblxuICAgLnNlbGVjdGVkLWVudGl0eSB7XG4gICAgICBAaW5jbHVkZSBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpO1xuICAgfVxufVxuXG4vLyBjb3B5IENsYXJpdHkgc3R5bGUgb2YgdGhlIGJhciA6OmJlZm9yZSBwc2V1ZG8tc2VsZWN0b3IgYW5kIGluc3RlYWQgcmVuZGVyIGEgZGl2LlxuLy8gSXNzdWUgaXMgdGhhdCB0aGUgYmFja2dyb3VuZCBjb2xvciBjYW5ub3QgYmUgb3ZlcnJpZGRlbiBmcm9tIHRoZSB0ZW1wbGF0ZSAoaW4gSUUpIGZvciBwc2V1ZG8tc2VsZWN0b3JzLlxuLy8gTm8gbmVlZCB0byByZW1vdmUvcmVmYWN0b3IgXCJJRSByZW5kZXJpbmdcIiBhcyBpdCB3b3JrcyBwcm9wZXJseSBpbiBhbGwgYnJvd3NlcnMuXG4uaW5uZXItYmFyIHtcbiAgIHRvcDogMDtcbiAgIGJvdHRvbTogMDtcbiAgIGxlZnQ6IDA7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGNvbnRlbnQ6ICcgJztcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "VfF2":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-bar-chart.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PrecheckCapacityBarChartComponent */

    /***/
    function VfF2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckCapacityBarChartComponent", function () {
        return PrecheckCapacityBarChartComponent;
      });

      var PrecheckCapacityBarChartComponent = /*#__PURE__*/function () {
        function PrecheckCapacityBarChartComponent(precheckReportService, barChartService) {
          _classCallCheck(this, PrecheckCapacityBarChartComponent);

          this.precheckReportService = precheckReportService;
          this.barChartService = barChartService;
        }

        _createClass(PrecheckCapacityBarChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.afterBarWidth = this.precheckReportService.getBarChartWidth(this.preOperationCapacity.totalCapacity, this.postOperationCapacity.totalCapacity) || 100;
            this.beforeBarColor = this.barChartService.getColorPalette(this.preOperationCapacity.usedCapacity, this.preOperationCapacity.totalCapacity, this.warningThreshold, this.errorThreshold)[0];
            this.afterBarColor = this.barChartService.getColorPalette(this.postOperationCapacity.usedCapacity, this.postOperationCapacity.totalCapacity, this.warningThreshold, this.errorThreshold)[0];
            this.beforeUsedCapacityWidth = this.barChartService.asPercentage(this.preOperationCapacity.usedCapacity, this.preOperationCapacity.totalCapacity);
            this.afterUsedCapacityWidth = this.barChartService.asPercentage(this.postOperationCapacity.usedCapacity, this.postOperationCapacity.totalCapacity);
          }
        }, {
          key: "hasBeforeBar",
          value: function hasBeforeBar() {
            return !this.selectedEntityType || !!this.preOperationCapacity.totalCapacity;
          } // display the after bar when either there is capacity difference, cluster level bars are displayed,
          // or the bar is for the selected entity

        }, {
          key: "hasAfterBar",
          value: function hasAfterBar() {
            return this.hasCapacityDifference() || !this.isThinBar || !!this.selectedEntityType;
          }
        }, {
          key: "getPreOperationCapacityLabel",
          value: function getPreOperationCapacityLabel() {
            return this.precheckReportService.getCapacityLabel(this.preOperationCapacity, this.isThinBar, this.hasCapacityDifference());
          }
        }, {
          key: "getPostOperationCapacityLabel",
          value: function getPostOperationCapacityLabel() {
            return this.precheckReportService.getPostOperationCapacityLabel(this.postOperationCapacity, this.isThinBar, this.selectedEntityType);
          }
        }, {
          key: "hasCapacityDifference",
          value: function hasCapacityDifference() {
            return this.precheckReportService.hasCapacityDifference(this.preOperationCapacity, this.postOperationCapacity);
          }
        }]);

        return PrecheckCapacityBarChartComponent;
      }();
      /***/

    },

    /***/
    "W7p2":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/precheck/enter-maintenance-mode-dialog.scss.shim.ngstyle.js ***!
      \**********************************************************************************/

    /*! exports provided: styles */

    /***/
    function W7p2(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".no-left-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.container[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: row;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 1.2rem !important;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.9rem !important;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.9rem !important;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  flex: 1 0 0rem;\n}\n.durability-alert-message-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9lbnRlci1tYWludGVuYW5jZS1tb2RlLWRpYWxvZy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csZUFBQTtBQWNIO0FBWEE7RUFDRyxpQkFBQTtBQWNIO0FBWEE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBY0g7QUVvQ0c7RUFDSywrQkFBQTtBRmxDUjtBRW9DRztFQUlHLCtCQUFBO0FGckNOO0FFc0NNO0VBQ0csK0JBQUE7QUZwQ1Q7QUV1Q0c7RUFFRywrQkFBQTtBRnRDTjtBRXdDTTtFQUNHLCtCQUFBO0FGdENUO0FFeUNHO0VBQ0csNkJBQUE7QUZ2Q047QUE3Qkc7RUFDRyxzQkFBQTtFQUNBLGNBQUE7QUErQk47QUE1Qkc7RUFDRyxzQkFBQTtBQThCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcHJlY2hlY2svZW50ZXItbWFpbnRlbmFuY2UtbW9kZS1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE4LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbi5uby1sZWZ0LXBhZGRpbmcge1xuICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgIHBhZGRpbmctbGVmdDogMnB4OyAvLyBGaXhlcyB0aGUgY2hlY2tib3ggc2hhZG93IGJlaW5nIHRyaW1tbWVkXG59XG5cbi5kdXJhYmlsaXR5LWFsZXJ0LW1lc3NhZ2Utd3JhcHBlciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMSAwIDByZW07XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgQGluY2x1ZGUgc2libGluZy1yaWdodC1zcGFjaW5nKCR2c2FuLWNvbnRhaW5lci1zcGFjaW5nKTtcblxuICAgc3BhbiB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgZmxleDogMSAwIDByZW07XG4gICB9XG5cbiAgIGEge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "XiPD":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/precheck/guard-rails/precheck-guard-rails.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PrecheckGuardRailsComponent */

    /***/
    function XiPD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckGuardRailsComponent", function () {
        return PrecheckGuardRailsComponent;
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


      var _generated_guard_rail_message_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/guard-rail-message-status */
      "OLFL");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* Copyright 2018-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PrecheckGuardRailsComponent = /*@__PURE__*/function () {
        var PrecheckGuardRailsComponent = /*#__PURE__*/function () {
          function PrecheckGuardRailsComponent(precheckService, precheckReportService, guardRailService, refWatcher) {
            var _this7 = this;

            _classCallCheck(this, PrecheckGuardRailsComponent);

            this.precheckService = precheckService;
            this.precheckReportService = precheckReportService;
            this.guardRailService = guardRailService;
            this.refWatcher = refWatcher;
            this.hasRunningTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.warningMessages = [];

            this.populateRunningTaskMessage = function (precheckReport) {
              if (!precheckReport || !precheckReport.runningTask) {
                _this7.hasRunningTask.emit(false);

                _this7.runningTaskMessage = undefined;
                return;
              }

              _this7.hasRunningTask.emit(true);

              _this7.runningTaskMessage = _this7.precheckReportService.getRunningTaskMessage(precheckReport.runningTask, _this7.isDiskResourcePrecheckSupported, _this7.isVsanMaxEnabled);
            };

            this.populateGuardRailMessages = function (guardRailMessages) {
              _this7.warningMessages = guardRailMessages[_generated_guard_rail_message_status__WEBPACK_IMPORTED_MODULE_2__["GuardRailMessageStatus"].WARNING];
            };
          }

          _createClass(PrecheckGuardRailsComponent, [{
            key: "noContentDisplayed",
            get: function get() {
              return this.warningMessages && this.warningMessages.length > 0 || this.runningTaskMessage || this.alertMessage ? "" : PrecheckGuardRailsComponent.NO_BOTTOM_SPACING_CLASS;
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this8 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return this.fetch();

                      case 2:
                        this.refWatcher.setInterval(function () {
                          return _this8.fetch();
                        }, PrecheckGuardRailsComponent.TIMEOUT_IN_MS);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "fetch",
            value: function fetch() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var result;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return Promise.all([this.precheckService.getPrecheckReport(_service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].contextObject, null, null, null), this.guardRailService.getGuardRailsMessages(_service_managed_object__WEBPACK_IMPORTED_MODULE_4__["ManagedObject"].contextObject)]);

                      case 3:
                        result = _context4.sent;

                        if (result && result.length === 2) {
                          this.populateRunningTaskMessage(result[0]);
                          this.populateGuardRailMessages(result[1]);
                        }

                        _context4.next = 13;
                        break;

                      case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4["catch"](0);

                        _util_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"].error("Unexpected error ".concat(_context4.t0, " encountered while querying Cluster guard rail messages"));

                        this.warningMessages = [];
                        this.runningTaskMessage = undefined;
                        this.alertMessage = _context4.t0;

                      case 13:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this, [[0, 7]]);
              }));
            }
          }]);

          return PrecheckGuardRailsComponent;
        }();

        PrecheckGuardRailsComponent.GUARD_RAIL_MESSAGES_PROPERTY = "clusterGuardRailMessages";
        PrecheckGuardRailsComponent.NO_BOTTOM_SPACING_CLASS = "no-bottom-spacing";
        PrecheckGuardRailsComponent.TIMEOUT_IN_MS = 5000;
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_3__["RefreshHandler"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], PrecheckGuardRailsComponent.prototype, "fetch", null);
        return PrecheckGuardRailsComponent;
      }();
      /***/

    },

    /***/
    "YWa1":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/precheck-report.scss.shim.ngstyle.js ***!
      \***************************************************************************/

    /*! exports provided: styles */

    /***/
    function YWa1(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  position: relative;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.report-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  align-items: center;\n}\n.report-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--vsan-font-color-emphasize);\n}\n.report-header[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.report-header[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.report-header[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.report-header[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.report-header[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.report-header[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.display-flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: inherit;\n}\ndiv[id*=report-warning-message][_ngcontent-%COMP%] {\n  padding-left: 1.2rem;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     ng-component {\n  flex-grow: 0;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .nav-item {\n  overflow: hidden;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .nav-item .btn {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: none;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .nav-item .btn .tab-label {\n  padding-right: 0.3rem;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .nav-item .btn clr-icon {\n  flex-shrink: 0;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .tab-content {\n  min-height: 24.6rem;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .tab-content > * {\n  margin-bottom: 0.6rem !important;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .tab-content > clr-button-group, .evacuation-report-tabs[_ngcontent-%COMP%]     .tab-content > .vsan-actions {\n  margin-bottom: 0.3rem !important;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     .tab-content > *:last-child {\n  margin-bottom: 0rem !important;\n}\n.evacuation-report-tabs[_ngcontent-%COMP%]     vsan-health-checks .checks-details vsan-health-details-card {\n  padding-top: 0.6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9wcmVjaGVjay9yZXBvcnQvcHJlY2hlY2stcmVwb3J0LnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMT0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFVSDtBRTZCRztFQUNHLGdDQUFBO0FGM0JOO0FFNkJHOztFQUdHLGdDQUFBO0FGNUJOO0FFOEJHO0VBQ0csOEJBQUE7QUY1Qk47QUFoQkE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFtQkg7QUFsQkc7RUFDRyx1Q0c2Q3NCO0FIekI1QjtBRXVCRztFQUNLLCtCQUFBO0FGckJSO0FFdUJHO0VBSUcsK0JBQUE7QUZ4Qk47QUV5Qk07RUFDRywrQkFBQTtBRnZCVDtBRTBCRztFQUVHLCtCQUFBO0FGekJOO0FFMkJNO0VBQ0csK0JBQUE7QUZ6QlQ7QUU0Qkc7RUFDRyw2QkFBQTtBRjFCTjtBQS9CQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBa0NIO0FBOUJBO0VBQ0csb0JHckJPO0FIc0RWO0FBNUJHO0VBQ0csWUFBQTtBQStCTjtBQTVCRztFQUNHLGdCQUFBO0FBOEJOO0FBNUJNO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUE4QlQ7QUE1QlM7RUFDRyxxQkFBQTtBQThCWjtBQTNCUztFQUNHLGNBQUE7QUE2Qlo7QUF4Qkc7RUFDRyxtQkE1RG1CO0FBc0Z6QjtBRXpDRztFQUNHLGdDQUFBO0FGMkNOO0FFekNHOztFQUdHLGdDQUFBO0FGMENOO0FFeENHO0VBQ0csOEJBQUE7QUYwQ047QUFoQ0c7RUFDRyw4QkFBQTtBQWtDTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vcHJlY2hlY2svcmVwb3J0L3ByZWNoZWNrLXJlcG9ydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJGV2YWN1YXRpb24tc3RhdHVzLWluZGVudGF0aW9uOiAkdnNhbi1uZXN0ZWQtaW5kZW50YXRpb247XG4vLyBoZWlnaHQgbmVlZGVkIHRvIGRpc3BsYXkgMTAgaXRlbXMgb24gRGF0YSBwZXJzaXN0ZW5jZSBwbGF0Zm9ybSB0YWIgdGFibGVcbiRyZXBvcnQtdGFicy1taW4taGVpZ2h0OiAyNC42cmVtO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi5yZXBvcnQtaGVhZGVyIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBoNSB7XG4gICAgICBjb2xvcjogJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU7XG4gICB9XG4gICAuYWN0aW9ucy1jb250YWluZXIge1xuICAgICAgQGluY2x1ZGUgc2libGluZy1yaWdodC1zcGFjaW5nKCR2c2FuLWVsZW1lbnQtc3BhY2luZyk7XG4gICB9XG59XG5cbi5kaXNwbGF5LWZsZXgtY29sdW1uIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleC1ncm93OiBpbmhlcml0O1xufVxuXG4vLyBhbGlnbiB3YXJuaW5nIG1lc3NhZ2VzIHdpdGggc3VtbWFyeSB0ZXh0XG5kaXZbaWQqPSdyZXBvcnQtd2FybmluZy1tZXNzYWdlJ10ge1xuICAgcGFkZGluZy1sZWZ0OiAkZXZhY3VhdGlvbi1zdGF0dXMtaW5kZW50YXRpb247XG59XG5cbi5ldmFjdWF0aW9uLXJlcG9ydC10YWJzIHtcbiAgIC8vIE92ZXJyaWRlIGZsZXgtZ3JvdyBwcm9wZXJ0eSBzbyB0aGUgdGFicyBjb250ZW50IHRha2VzIHRoZSB3aG9sZSBzcGFjZSBhbmQgZGlzcmVnYXJkcyB0aGUgYG5nLWNvbXBvbmVudGAgdGhhdCBpcyBhbHdheXMgcmVuZGVyZWRcbiAgIDo6bmctZGVlcCBuZy1jb21wb25lbnQge1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgfVxuXG4gICA6Om5nLWRlZXAgLm5hdi1pdGVtIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5idG4ge1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIG1heC13aWR0aDogbm9uZTtcblxuICAgICAgICAgLnRhYi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbiAgICAgICAgIH1cblxuICAgICAgICAgY2xyLWljb24ge1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIDo6bmctZGVlcCAudGFiLWNvbnRlbnQge1xuICAgICAgbWluLWhlaWdodDogJHJlcG9ydC10YWJzLW1pbi1oZWlnaHQ7XG4gICAgICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbiAgIH1cblxuICAgOjpuZy1kZWVwIHZzYW4taGVhbHRoLWNoZWNrcyAuY2hlY2tzLWRldGFpbHMgdnNhbi1oZWFsdGgtZGV0YWlscy1jYXJkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "ZQyJ":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/precheck/guard-rails/precheck-guard-rails.component.ngfactory.js ***!
      \***************************************************************************************/

    /*! exports provided: RenderType_PrecheckGuardRailsComponent, View_PrecheckGuardRailsComponent_0, View_PrecheckGuardRailsComponent_Host_0, PrecheckGuardRailsComponentNgFactory */

    /***/
    function ZQyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckGuardRailsComponent", function () {
        return RenderType_PrecheckGuardRailsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckGuardRailsComponent_0", function () {
        return View_PrecheckGuardRailsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckGuardRailsComponent_Host_0", function () {
        return View_PrecheckGuardRailsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckGuardRailsComponentNgFactory", function () {
        return PrecheckGuardRailsComponentNgFactory;
      });
      /* harmony import */


      var _precheck_guard_rails_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-guard-rails.scss.shim.ngstyle */
      "Ar20");
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


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _precheck_guard_rails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./precheck-guard-rails.component */
      "XiPD");
      /* harmony import */


      var _generated_precheck_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../generated/precheck-service */
      "lbO9");
      /* harmony import */


      var _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../report/precheck-report.service */
      "CWZg");
      /* harmony import */


      var _generated_guard_rail_property_provider_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../generated/guard-rail-property-provider-adapter */
      "OdJm");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckGuardRailsComponent = [_precheck_guard_rails_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckGuardRailsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckGuardRailsComponent,
        data: {}
      });

      function View_PrecheckGuardRailsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "evacuation-status-guard-rails-error-message"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PrecheckGuardRailsComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "clr-alert-item", [["class", "alert-item"], ["id", "evacuation-status-guard-rails-running-task-message"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlertItem_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlertItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 2, "span", [["class", "alert-text"], ["role", "alert"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertText"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.runningTaskMessage;

          _ck(_v, 5, 0, currVal_0);
        });
      }

      function View_PrecheckGuardRailsComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "clr-alert-item", [["class", "alert-item"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlertItem_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlertItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 2, "span", [["class", "alert-text"], ["role", "alert"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertText"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 5, 0, currVal_0);
        });
      }

      function View_PrecheckGuardRailsComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "clr-alert", [["id", "evacuation-status-guard-rails-warning-messages"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrAlert_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlert"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵba"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          closable: [0, "closable"],
          alertType: [1, "alertType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PrecheckGuardRailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PrecheckGuardRailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;
          var currVal_1 = "warning";

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _co.runningTaskMessage;

          _ck(_v, 6, 0, currVal_2);

          var currVal_3 = _co.warningMessages;

          _ck(_v, 10, 0, currVal_3);
        }, null);
      }

      function View_PrecheckGuardRailsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckGuardRailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckGuardRailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = (_co.warningMessages == null ? null : _co.warningMessages.length) || _co.runningTaskMessage;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PrecheckGuardRailsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-precheck-guard-rails", [], [[8, "className", 0]], null, null, View_PrecheckGuardRailsComponent_0, RenderType_PrecheckGuardRailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _precheck_guard_rails_component__WEBPACK_IMPORTED_MODULE_8__["PrecheckGuardRailsComponent"], [_generated_precheck_service__WEBPACK_IMPORTED_MODULE_9__["PrecheckService"], _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_10__["PrecheckReportService"], _generated_guard_rail_property_provider_adapter__WEBPACK_IMPORTED_MODULE_11__["GuardRailPropertyProviderAdapter"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).noContentDisplayed;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      var PrecheckGuardRailsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-guard-rails", _precheck_guard_rails_component__WEBPACK_IMPORTED_MODULE_8__["PrecheckGuardRailsComponent"], View_PrecheckGuardRailsComponent_Host_0, {
        isDiskResourcePrecheckSupported: "isDiskResourcePrecheckSupported",
        isVsanMaxEnabled: "isVsanMaxEnabled"
      }, {
        hasRunningTask: "hasRunningTask"
      }, []);
      /***/

    },

    /***/
    "aK/t":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/precheck/report/precheck-report.component.ts ***!
      \*******************************************************************/

    /*! exports provided: PrecheckReportComponent */

    /***/
    function aKT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckReportComponent", function () {
        return PrecheckReportComponent;
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


      var _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/decommission-mode */
      "yaIQ");
      /* harmony import */


      var _generated_durability_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/durability-state */
      "3qcF");
      /* harmony import */


      var _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/precheck-entity-type */
      "wzkD");
      /* harmony import */


      var _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/precheck-operation */
      "l/W2");
      /* harmony import */


      var _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/precheck-result-status-type */
      "ZKv+");
      /* harmony import */


      var _generated_precheck_task_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/precheck-task-data */
      "tCE3");
      /* harmony import */


      var _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/precheck-task-type */
      "4fOM");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _model_disk_group_action_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @model/disk-group-action.data */
      "lFN8");
      /* harmony import */


      var _model_host_action_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @model/host-action.data */
      "WmGx");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @util/vsan-disk-mgmt-actions-util */
      "g4ok");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../vsan-routes */
      "w9V1");
      /* harmony import */


      var _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../enter-maintenance-mode-dialog.component */
      "h8dQ");
      /* harmony import */


      var _capacity_precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./capacity/precheck-capacity-tab.component */
      "r9zi");
      /* Copyright 2018-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PrecheckReportComponent = /*#__PURE__*/function () {
        function PrecheckReportComponent(precheckService, precheckReportService, whatIfPropertyProvider, capabilityProvider, permissionService, vsanConfigService) {
          _classCallCheck(this, PrecheckReportComponent);

          this.precheckService = precheckService;
          this.precheckReportService = precheckReportService;
          this.whatIfPropertyProvider = whatIfPropertyProvider;
          this.capabilityProvider = capabilityProvider;
          this.permissionService = permissionService;
          this.vsanConfigService = vsanConfigService;
          this.NO_DURABILITY_STATES = [_generated_durability_state__WEBPACK_IMPORTED_MODULE_3__["DurabilityState"].EXCEEDED_COMP_LIMIT, _generated_durability_state__WEBPACK_IMPORTED_MODULE_3__["DurabilityState"].NO_RESOURCE, _generated_durability_state__WEBPACK_IMPORTED_MODULE_3__["DurabilityState"].NO_SPACE, _generated_durability_state__WEBPACK_IMPORTED_MODULE_3__["DurabilityState"].STALE_DURABILITY_COMP];
          this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_13__["Icon"];
          this.durableVirtualObjects = [];
          this.precheckTaskStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.refreshReport = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(PrecheckReportComponent, [{
          key: "reportRefreshed",
          get: function get() {
            return this._reportRefreshed;
          },
          set: function set(refreshed) {
            this._reportRefreshed = refreshed;

            if (!refreshed && this.isInit) {
              this.loadReport();
              this.updateActionsStatus();
            }
          }
        }, {
          key: "hasReportError",
          get: function get() {
            return this._hasReportError;
          },
          set: function set(value) {
            if (this._hasReportError !== value) {
              this._hasReportError = value;
              this.updateActionsStatus();
            }
          }
        }, {
          key: "getCapacityReports",
          get: function get() {
            var capacityReports = new Map();

            if (this.report.clusterCapacity != null) {
              capacityReports.set(_capacity_precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_20__["CapacityReport"].VSAN, this.report.clusterCapacity);
            }

            if (this.report.vsanDirectClusterCapacity != null) {
              capacityReports.set(_capacity_precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_20__["CapacityReport"].VSAN_DIRECT, this.report.vsanDirectClusterCapacity);
            }

            return capacityReports;
          }
        }, {
          key: "hasPersistenceDataToRebuild",
          get: function get() {
            return this.report.persistenceData && this.report.persistenceData.dataToRebuild > 0;
          }
        }, {
          key: "isRecreateDiskGroupSupported",
          get: function get() {
            return this.capabilities && this.capabilities.isRecreateDiskGroupSupported;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var clusterRef, privileges, vsanConfigSpec, _yield$Promise$all, _yield$Promise$all2;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject;
                      this.loadingInitialInfo = true;
                      _context5.prev = 2;
                      _context5.next = 5;
                      return Promise.all([this.permissionService.queryPermissions(clusterRef, [_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].EDIT_CLUSTER(), _generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].CONFIG_STORAGE(), _generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].HOST_MAINTENANCE()]), this.capabilityProvider.getClusterCapabilityData(clusterRef), this.vsanConfigService.getVsanConfigSpec(clusterRef)]);

                    case 5:
                      _yield$Promise$all = _context5.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                      privileges = _yield$Promise$all2[0];
                      this.capabilities = _yield$Promise$all2[1];
                      vsanConfigSpec = _yield$Promise$all2[2];
                      this.hasEditPermission = privileges[_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].EDIT_CLUSTER()];
                      this.hasEMMPermissions = privileges[_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].HOST_MAINTENANCE()];
                      this.hasStoragePermission = privileges[_generated_privileges__WEBPACK_IMPORTED_MODULE_9__["Privileges"].CONFIG_STORAGE()];
                      this.autoClaimMode = vsanConfigSpec.autoClaimDisks;
                      _context5.next = 22;
                      break;

                    case 16:
                      _context5.prev = 16;
                      _context5.t0 = _context5["catch"](2);
                      this.hasEditPermission = true;
                      this.hasEMMPermissions = true;
                      this.hasStoragePermission = true;

                      _util_logger__WEBPACK_IMPORTED_MODULE_14__["Logger"].error("Unable to query the permissions or basic information required for precheck report operations. " + _context5.t0);

                    case 22:
                      _context5.prev = 22;
                      this.loadingInitialInfo = false;
                      return _context5.finish(22);

                    case 25:
                      if (this.reportRefreshed) {
                        _context5.next = 28;
                        break;
                      }

                      _context5.next = 28;
                      return this.loadReport();

                    case 28:
                      this.updateActionsStatus();
                      this.isInit = true;

                    case 30:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[2, 16, 22, 25]]);
            }));
          }
        }, {
          key: "loadReport",
          value: function loadReport() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var operation;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.loadingReport = true;
                      _context6.prev = 1;
                      operation = this.precheckEntity.type === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].HOST ? _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_5__["PrecheckOperation"].ENTER_MAINTENANCE_MODE : _generated_precheck_operation__WEBPACK_IMPORTED_MODULE_5__["PrecheckOperation"].DISK_DATA_EVACUATION;
                      _context6.next = 5;
                      return this.precheckService.getPrecheckReport(_service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject, this.precheckEntity, this.decommissionMode.toString(), operation);

                    case 5:
                      this.report = _context6.sent;
                      _context6.next = 11;
                      break;

                    case 8:
                      _context6.prev = 8;
                      _context6.t0 = _context6["catch"](1);
                      this.alertMessage = _context6.t0;

                    case 11:
                      this.loadingReport = false;
                      this.refreshReport.emit(); // If the report is null or it doesn't belong to the selected entity and decommission mode, return.

                      if (!(!this.report || this.report.uuid !== this.precheckEntity.uuid || this.report.decommissionMode !== this.decommissionMode.toString())) {
                        _context6.next = 15;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 15:
                      if (!this.report.runningTask) {
                        _context6.next = 19;
                        break;
                      }

                      this.isTaskForSelectedEntity = this.precheckReportService.isTaskForSelectedEntity(this.report.runningTask, this.precheckEntity.uuid, this.decommissionMode);
                      this.precheckTaskStarted.emit(this.report.runningTask);
                      return _context6.abrupt("return");

                    case 19:
                      if (this.report.hasPrecheckReport) {
                        this.statusIcon = this.precheckReportService.parseReportStatusToIcon(this.report);
                        this.hasReportError = this.report.status === _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_6__["PrecheckResultStatusType"].RED;
                        this.capacityTabStatusIcon = this.precheckReportService.getCapacityTabIcon(this.report.clusterCapacity); // in case of an error we only show capacity related information

                        if (!this.hasReportError) {
                          this.virtualObjectsTabStatusIcon = this.precheckReportService.getVirtualObjectsTabIcon(this.report);
                          this.durableVirtualObjects = this.report.virtualObjects;
                          this.healthTabStatusIcon = this.precheckReportService.getHealthTabIcon(this.report.healthSummary);
                          this.persistenceTabStatusIcon = this.getPersistenceTabIcon();
                        } else {
                          this.durableVirtualObjects = [];
                        }
                      }

                    case 20:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[1, 8]]);
            }));
          }
        }, {
          key: "displayDurabilityColumn",
          value: function displayDurabilityColumn() {
            return this.precheckEntity.type === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].HOST && this.capabilities.isEnsureDurabilitySupported && this.decommissionMode === _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_2__["DecommissionMode"].ensureObjectAccessibility;
          }
        }, {
          key: "onEnterMaintenanceModeClicked",
          value: function onEnterMaintenanceModeClicked() {
            var _this9 = this;

            var context = {
              decommissionMode: this.decommissionMode,
              precheckEntity: this.precheckEntity,
              clusterRef: _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject,
              isDurabilityPossible: this.report.isDurabilityPossible,
              isDurabilityGuaranteed: this.report.isDurabilityGuaranteed
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("evacuationStatus/enterMaintenanceModeDialog").setSize(_enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_19__["EnterMaintenanceModeDialogComponent"].EMM_DIALOG_WIDTH, _enter_maintenance_mode_dialog_component__WEBPACK_IMPORTED_MODULE_19__["EnterMaintenanceModeDialogComponent"].EMM_DIALOG_HEIGHT).open(context).then(function (taskRef) {
              _this9.handleTask(taskRef, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskType"].HOST_ENTER_MAINTENANCE_MODE);
            });
          }
        }, {
          key: "deleteDiskGroup",
          value: function deleteDiskGroup() {
            var _this10 = this;

            if (!this.isDiskGroupSelected()) {
              return;
            }

            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("".concat(_vsan_routes__WEBPACK_IMPORTED_MODULE_18__["VsanRoutes"].DISK_MANAGEMENT_VIEW, "/deleteDiskGroup")).setSize(_util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].DELETE_DISK_GROUP_WIDTH, _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].DELETE_DISK_GROUP_HEIGHT_SMALL).open(this.getDiskGroupActionContext()).then(function (taskRef) {
              _this10.handleTask(taskRef, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskType"].DISKGROUP_REMOVAL);
            });
          }
        }, {
          key: "recreateDiskGroup",
          value: function recreateDiskGroup() {
            var _this11 = this;

            if (!this.isDiskGroupSelected()) {
              return;
            }

            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("".concat(_vsan_routes__WEBPACK_IMPORTED_MODULE_18__["VsanRoutes"].DISK_MANAGEMENT_VIEW, "/recreateDiskGroup")).setSize(_util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].RECREATE_DIALOG_WIDTH, _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].RECREATE_DIALOG_HEIGHT_SMALL).open(this.getDiskGroupActionContext()).then(function (taskRef) {
              _this11.handleTask(taskRef, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskType"].DISKGROUP_RECREATE);
            });
          }
        }, {
          key: "unmountDiskGroup",
          value: function unmountDiskGroup() {
            var _this12 = this;

            if (!this.isDiskGroupSelected()) {
              return;
            }

            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("".concat(_vsan_routes__WEBPACK_IMPORTED_MODULE_18__["VsanRoutes"].DISK_MANAGEMENT_VIEW, "/unmountDiskGroup")).setSize(_util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].UNMOUNT_DISK_GROUP_DIALOG_WIDTH, _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].UNMOUNT_DISK_GROUP_DIALOG_HEIGHT_SMALL).open(this.getDiskGroupActionContext()).then(function (taskRef) {
              _this12.handleTask(taskRef, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskType"].DISKGROUP_UNMOUNT);
            });
          }
        }, {
          key: "isDiskGroupSelected",
          value: function isDiskGroupSelected() {
            return this.precheckEntity.type === _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].DISK_GROUP;
          }
        }, {
          key: "getDiskGroupActionContext",
          value: function getDiskGroupActionContext() {
            return {
              decommissionMode: this.decommissionMode,
              host: _model_host_action_data__WEBPACK_IMPORTED_MODULE_11__["HostActionData"].fromPrecheckEntity(this.precheckEntity),
              diskGroup: _model_disk_group_action_data__WEBPACK_IMPORTED_MODULE_10__["DiskGroupActionData"].fromPrecheckEntity(this.precheckEntity)
            };
          }
        }, {
          key: "handleTask",
          value: function handleTask(taskRef, precheckTaskType) {
            var precheckTask = _generated_precheck_task_data__WEBPACK_IMPORTED_MODULE_7__["PrecheckTaskData"].Factory.create(taskRef, this.precheckEntity.name, this.precheckEntity.uuid, null, this.decommissionMode, precheckTaskType);

            this.precheckTaskStarted.emit(precheckTask);
          }
        }, {
          key: "getPersistenceTabIcon",
          value: function getPersistenceTabIcon() {
            return this.report.persistenceData ? this.precheckReportService.getPersistenceTabIcon(this.report.persistenceData.persistentInstances) : "";
          }
        }, {
          key: "deleteDisk",
          value: function deleteDisk() {
            var _this13 = this;

            if (this.precheckEntity.type !== _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].DISK) {
              return;
            }

            var context = {
              disks: [this.precheckEntity.diskData],
              decommissionMode: this.decommissionMode,
              host: _model_host_action_data__WEBPACK_IMPORTED_MODULE_11__["HostActionData"].fromPrecheckEntity(this.precheckEntity),
              diskGroups: this.getDiskGroupActionData(),
              isVsanMaxEnabled: this.isVsanMaxEnabled
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("".concat(_vsan_routes__WEBPACK_IMPORTED_MODULE_18__["VsanRoutes"].DISK_MANAGEMENT_VIEW, "/deleteDisks")).setSize(_util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].DELETE_DISKS_WIDTH, _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].DELETE_DISKS_HEIGHT_SMALL).open(context).then(function (taskRefs) {
              _this13.handleTask(taskRefs[0], _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskType"].DISK_REMOVAL);
            });
          }
        }, {
          key: "unmountVsanMaxDisk",
          value: function unmountVsanMaxDisk() {
            var _this14 = this;

            if (this.precheckEntity.type !== _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].DISK) {
              return;
            }

            var context = {
              disk: this.precheckEntity.diskData,
              decommissionMode: this.decommissionMode,
              host: _model_host_action_data__WEBPACK_IMPORTED_MODULE_11__["HostActionData"].fromPrecheckEntity(this.precheckEntity)
            };
            new _util_modal_builder__WEBPACK_IMPORTED_MODULE_15__["ModalBuilder"]("".concat(_vsan_routes__WEBPACK_IMPORTED_MODULE_18__["VsanRoutes"].DISK_MANAGEMENT_VIEW, "/unmountDisk")).setSize(_util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].UNMOUNT_DISK_DIALOG_WIDTH, _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_16__["VsanDiskMgmtActionsUtil"].UNMOUNT_DISK_DIALOG_HEIGHT_SMALL).open(context).then(function (task) {
              _this14.handleTask(task, _generated_precheck_task_type__WEBPACK_IMPORTED_MODULE_8__["PrecheckTaskType"].DISK_UNMOUNT);
            });
          }
        }, {
          key: "getSummaryReportMessage",
          value: function getSummaryReportMessage() {
            var persistenceDataToRebuild = this.report.persistenceData && this.report.persistenceData.dataToRebuild;
            return this.precheckReportService.getSummaryMessage(this.report.status, this.precheckEntity.type, this.report.dataToMove, persistenceDataToRebuild, this.isVsanMaxEnabled);
          }
        }, {
          key: "updateActionsStatus",
          value: function updateActionsStatus() {
            this.enterMaintenanceModeVisible = false;
            this.removeDiskGroupVisible = false;
            this.recreateDiskGroupVisible = false;
            this.unmountDiskGroupVisible = false;
            this.removeDiskVisible = false;
            this.unmountVsanMaxDiskVisible = false;

            if (this.hasReportError) {
              return;
            }

            switch (this.precheckEntity.type) {
              case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].HOST:
                this.enterMaintenanceModeVisible = true;
                this.enterMaintenanceModeDisabledReason = !this.hasEditPermission || !this.hasEMMPermissions ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.common.nopermissions") : "";
                break;

              case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].DISK_GROUP:
                this.removeDiskGroupVisible = !this.autoClaimMode;
                this.recreateDiskGroupVisible = !this.autoClaimMode && this.isRecreateDiskGroupSupported && this.precheckEntity.diskGroupData.isHealthy;
                this.unmountDiskGroupVisible = true;
                break;

              case _generated_precheck_entity_type__WEBPACK_IMPORTED_MODULE_4__["PrecheckEntityType"].DISK:
                this.removeDiskVisible = !this.autoClaimMode;
                this.unmountVsanMaxDiskVisible = this.isVsanMaxEnabled;
                this.isDiskAndGroupActionDisabled = !this.hasEditPermission || !this.hasStoragePermission;
                this.diskAndGroupActionDisabledReason = this.isDiskAndGroupActionDisabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_17__["VsanUiUtils"].getString("vsan.common.nopermissions") : "";
                break;
            }
          }
        }, {
          key: "getIconClasses",
          value: function getIconClasses(shape) {
            return this.precheckReportService.getIconClasses(shape);
          }
        }, {
          key: "getInaccessibleObjectsCount",
          value: function getInaccessibleObjectsCount() {
            var _a;

            return !((_a = this.report) === null || _a === void 0 ? void 0 : _a.inaccessibleObjects) ? 0 : this.report.inaccessibleObjects.length;
          }
        }, {
          key: "getNonCompliantObjectsCount",
          value: function getNonCompliantObjectsCount() {
            var _a;

            return !((_a = this.report) === null || _a === void 0 ? void 0 : _a.nonCompliantObjects) ? 0 : this.report.nonCompliantObjects.length;
          }
        }, {
          key: "getObjectsWithoutEnhancedDurabilityCount",
          value: function getObjectsWithoutEnhancedDurabilityCount() {
            return !this.report ? 0 : this.countObjectsWithoutDurability(this.report.virtualObjects);
          }
        }, {
          key: "countObjectsWithoutDurability",
          value: function countObjectsWithoutDurability(virtualObjects) {
            var _this15 = this;

            if (!(virtualObjects === null || virtualObjects === void 0 ? void 0 : virtualObjects.length)) {
              return 0;
            } // 1. get count of virtual objects, for which the durability state is not guaranteed.


            var objectsWithoutDurabilityState = virtualObjects.filter(function (obj) {
              return _this15.NO_DURABILITY_STATES.find(function (state) {
                return state === obj.durabilityState;
              });
            });
            var count = objectsWithoutDurabilityState.length; // 2. count children of each object, for which the durability state is not guaranteed

            virtualObjects.forEach(function (obj) {
              return count += _this15.countObjectsWithoutDurability(obj.children);
            });
            return count;
          }
        }, {
          key: "getDiskGroupActionData",
          value: function getDiskGroupActionData() {
            return this.isVsanMaxEnabled ? [] : [_model_disk_group_action_data__WEBPACK_IMPORTED_MODULE_10__["DiskGroupActionData"].fromPrecheckEntity(this.diskGroupOfSelectedDisk)];
          }
        }]);

        return PrecheckReportComponent;
      }();
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
    "cibP":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/virtual-objects/precheck-virtual-objects-tab.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: PrecheckVirtualObjectsTabComponent */

    /***/
    function cibP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckVirtualObjectsTabComponent", function () {
        return PrecheckVirtualObjectsTabComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");

      var PrecheckVirtualObjectsTabComponent = /*#__PURE__*/function () {
        function PrecheckVirtualObjectsTabComponent(precheckReportService) {
          _classCallCheck(this, PrecheckVirtualObjectsTabComponent);

          this.precheckReportService = precheckReportService;
          this.inaccessibleObjectsCount = 0;
          this.nonCompliantObjectsCount = 0;
          this.noDurabilityObjectsCount = 0;
        }

        _createClass(PrecheckVirtualObjectsTabComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.loading = true;
                      this.reportMessage = this.precheckReportService.getObjectsMessage(this.inaccessibleObjectsCount, this.nonCompliantObjectsCount, this.noDurabilityObjectsCount);

                      if (this.statusIcon) {
                        _context7.next = 6;
                        break;
                      }

                      this.areAllObjectsAccessibleAndCompliant = true;
                      this.loading = false;
                      return _context7.abrupt("return");

                    case 6:
                      this.loading = false;

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getIconClass",
          value: function getIconClass() {
            return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].clrIconShapeClassMap[this.statusIcon];
          }
        }]);

        return PrecheckVirtualObjectsTabComponent;
      }();
      /***/

    },

    /***/
    "dmSP":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loading-flow-wrapper.data.ts ***!
      \***********************************************************************/

    /*! exports provided: LoadingFlowWrapper */

    /***/
    function dmSP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingFlowWrapper", function () {
        return LoadingFlowWrapper;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This class is used internally by the @Loader decorator and the decorators related to it.
       * It encapsulates the logic for accessing internal properties needed for the decorators to work.
       * The state of this class is kept in the "backingObject" passed to the constructor. This allows
       * the wrapper class to be easily recreated wherever it is needed without worrying about keeping its reference.
       *
       * <pre>
       * const obj: any = {};
       *
       * // Create a new LoadingFlowWrapper over obj
       * const wrapper1: LoadingFlowWrapper = new LoadingFlowWrapper(obj);
       * // Set the error field to "alabala" string
       * wrapper1.error = "alabala";
       *
       * // Create a new LoadingFlowWrapper over obj
       * const wrapper2: LoadingFlowWrapper = new LoadingFlowWrapper(obj);
       * console.log(wrapper2.error); // Prints "alabala" because the backing object is the same
       * </pre>
       */


      var LoadingFlowWrapper = /*@__PURE__*/function () {
        var LoadingFlowWrapper = /*#__PURE__*/function () {
          function LoadingFlowWrapper(_backingObject, loaderName) {
            _classCallCheck(this, LoadingFlowWrapper);

            this._backingObject = _backingObject;
            this.loaderName = loaderName;
            this.loaderName = loaderName || LoadingFlowWrapper.DEFAULT_NAME; // Init all collections

            this.initCollection(LoadingFlowWrapper.ERROR_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.LOADS_COUNT_HOLDER);
          }

          _createClass(LoadingFlowWrapper, [{
            key: "initCollection",
            value: function initCollection(collectionName) {
              // Check first if the collection hasn't been initialized by another wrapper.
              // If so, do nothing as we don't want to override the data already set.
              if (!this.backingObject[collectionName]) {
                this.backingObject[collectionName] = [];
              }
            }
            /**
             * The original object which methods/properties were decorated
             */

          }, {
            key: "backingObject",
            get: function get() {
              return this._backingObject;
            }
            /**
             * Returns the thrown error
             */

          }, {
            key: "error",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName];
            }
            /**
             * Sets the thrown error
             */
            ,
            set: function set(val) {
              this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName] = val;
            }
            /**
             * Returns the number of active loading operations
             */

          }, {
            key: "loadsCount",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName];
            }
            /**
             * Returns true if there are running loader methods or promises.
             */

          }, {
            key: "isLoading",
            get: function get() {
              return !!this.loadsCount;
            }
            /**
             * Increase the number of active loading operations by one
             */

          }, {
            key: "incrementLoads",
            value: function incrementLoads() {
              // Initialize the counter if it hasn't been initialized yet
              if (!this.loadsCount) {
                this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] = 0;
              }

              this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] += 1;
            }
            /**
             * Decreases the number of active loading operations by one
             */

          }, {
            key: "decrementLoads",
            value: function decrementLoads() {
              this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] -= 1;
            }
          }, {
            key: "errorHandler",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName];
            }
            /**
             * Registers a new error handler.
             */
            ,
            set: function set(errorHandler) {
              if (!!this.errorHandler) {
                throw new Error("ErrorHandler for loader \"".concat(this.loaderName, "\" already registered!"));
              }

              this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName] = errorHandler;
            }
          }, {
            key: "errorMessageGetter",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName];
            },
            set: function set(getter) {
              if (!!this.errorMessageGetter) {
                throw new Error("ErrorMessage for loader \"".concat(this.loaderName, "\" already registered!"));
              }

              this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName] = getter;
            }
          }]);

          return LoadingFlowWrapper;
        }();

        LoadingFlowWrapper.ERROR_HOLDER = "__ex__";
        LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER = "__errorHandlers__";
        LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER = "__errorMessageGetters__";
        LoadingFlowWrapper.LOADS_COUNT_HOLDER = "__loadsCount__";
        LoadingFlowWrapper.DEFAULT_NAME = "default-loader";
        return LoadingFlowWrapper;
      }();
      /***/

    },

    /***/
    "g2v7":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/precheck/precheck.component.ngfactory.js ***!
      \***************************************************************/

    /*! exports provided: RenderType_PrecheckComponent, View_PrecheckComponent_0, View_PrecheckComponent_Host_0, PrecheckComponentNgFactory */

    /***/
    function g2v7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckComponent", function () {
        return RenderType_PrecheckComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckComponent_0", function () {
        return View_PrecheckComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckComponent_Host_0", function () {
        return View_PrecheckComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckComponentNgFactory", function () {
        return PrecheckComponentNgFactory;
      });
      /* harmony import */


      var _precheck_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck.scss.shim.ngstyle */
      "Ghu/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/component/unavailable-view/unavailable-view.component.ngfactory */
      "Kfm7");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/component/unavailable-view/unavailable-view.component */
      "hlBw");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../generated/hci-quickstart-status-service */
      "KbWe");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _common_component_precheck_pre_check_evacuation_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/component/precheck/pre-check-evacuation-select.component.ngfactory */
      "S+kc");
      /* harmony import */


      var _common_component_precheck_pre_check_evacuation_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/component/precheck/pre-check-evacuation-select.component */
      "ZnqN");
      /* harmony import */


      var _report_precheck_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./report/precheck-report.component.ngfactory */
      "LnT5");
      /* harmony import */


      var _report_precheck_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./report/precheck-report.component */
      "aK/t");
      /* harmony import */


      var _generated_precheck_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../generated/precheck-service */
      "lbO9");
      /* harmony import */


      var _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./report/precheck-report.service */
      "CWZg");
      /* harmony import */


      var _generated_what_if_property_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../generated/what-if-property-provider */
      "C0Wn");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _guard_rails_precheck_guard_rails_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./guard-rails/precheck-guard-rails.component.ngfactory */
      "ZQyJ");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _guard_rails_precheck_guard_rails_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./guard-rails/precheck-guard-rails.component */
      "XiPD");
      /* harmony import */


      var _generated_guard_rail_property_provider_adapter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../generated/guard-rail-property-provider-adapter */
      "OdJm");
      /* harmony import */


      var _common_component_inventory_dropdown_object_selector_dropdown_object_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../common/component/inventory/dropdown-object-selector/dropdown-object-selector.component.ngfactory */
      "6Dvv");
      /* harmony import */


      var _common_component_inventory_dropdown_object_selector_dropdown_object_selector_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../common/component/inventory/dropdown-object-selector/dropdown-object-selector.component */
      "bCF2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../common/directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _precheck_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./precheck.component */
      "S5sa");
      /* harmony import */


      var _generated_task_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../generated/task-service */
      "jFfn");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../common/service/space-efficiency-service */
      "1Ga+");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckComponent = [_precheck_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckComponent,
        data: {}
      });

      function View_PrecheckComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "evacuation-status-error-message"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PrecheckComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_5__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_8__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_9__["VsanPerfPropertyProvider"]], {
          unavailableViewSpec: [0, "unavailableViewSpec"],
          hasEditPrivilege: [1, "hasEditPrivilege"],
          clusterRef: [2, "clusterRef"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.unavailableView;
          var currVal_1 = _co.hasEditPrivilege;
          var currVal_2 = _co.clusterRef;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PrecheckComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "quick-pre-check-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "vsan-pre-check-evacuation-select", [], null, [[null, "selectedDecommisionModeChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedDecommisionModeChange" === en) {
            var pd_0 = _co.onDecommissionModeSummaryChanged($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_precheck_pre_check_evacuation_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PreCheckEvacuationSelectComponent_0"], _common_component_precheck_pre_check_evacuation_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PreCheckEvacuationSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _common_component_precheck_pre_check_evacuation_select_component__WEBPACK_IMPORTED_MODULE_11__["PreCheckEvacuationSelectComponent"], [], {
          selectedDecommissionMode: [0, "selectedDecommissionMode"]
        }, {
          selectedDecommisionModeChange: "selectedDecommisionModeChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "button", [["class", "btn btn-primary evacuation-status-action-button"]], [[8, "disabled", 0], [8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onPrecheckClicked() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.selectedDecommissionMode;

          _ck(_v, 4, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.isClusterOperationInProgress;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 1, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _co.isClusterOperationInProgress ? "vsan.evacuationStatus.precheckButton.title.inProgress" : null)), "");

          _ck(_v, 7, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.precheckButtonLabel"));

          _ck(_v, 9, 0, currVal_3);
        });
      }

      function View_PrecheckComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "general-message bold-no-selection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.precheckUnsupportedLabel;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "spinner spinner-sm spinner-inline"], ["id", "evacuation-status-test-in-progress-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["id", "evacuation-status-test-in-progress-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getOperationInProgressLabel();

          _ck(_v, 6, 0, currVal_0);
        });
      }

      function View_PrecheckComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-precheck-report", [], null, [[null, "precheckTaskStarted"], [null, "refreshReport"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("precheckTaskStarted" === en) {
            var pd_0 = _co.onPrecheckTaskStarted($event) !== false;
            ad = pd_0 && ad;
          }

          if ("refreshReport" === en) {
            var pd_1 = _co.onReportRefreshed() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _report_precheck_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_PrecheckReportComponent_0"], _report_precheck_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_PrecheckReportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [["precheckReport", 4]], 0, _report_precheck_report_component__WEBPACK_IMPORTED_MODULE_13__["PrecheckReportComponent"], [_generated_precheck_service__WEBPACK_IMPORTED_MODULE_14__["PrecheckService"], _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_15__["PrecheckReportService"], _generated_what_if_property_provider__WEBPACK_IMPORTED_MODULE_16__["WhatIfPropertyProvider"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_17__["VsanCapabilityProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_18__["PermissionService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_19__["VsanConfigService"]], {
          diskGroupOfSelectedDisk: [0, "diskGroupOfSelectedDisk"],
          precheckEntity: [1, "precheckEntity"],
          decommissionMode: [2, "decommissionMode"],
          isVsanMaxEnabled: [3, "isVsanMaxEnabled"],
          reportRefreshed: [4, "reportRefreshed"]
        }, {
          precheckTaskStarted: "precheckTaskStarted",
          refreshReport: "refreshReport"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.diskGroupOfSelectedDisk;
          var currVal_1 = _co.selectedPrecheckEntity;
          var currVal_2 = _co.selectedDecommissionMode;
          var currVal_3 = _co.isVsanMaxEnabled;
          var currVal_4 = _co.reportRefreshed;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_PrecheckComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 31, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "vsan-precheck-guard-rails", [], [[8, "className", 0]], [[null, "hasRunningTask"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("hasRunningTask" === en) {
            var pd_0 = _co.onHasRunningTask($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _guard_rails_precheck_guard_rails_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_PrecheckGuardRailsComponent_0"], _guard_rails_precheck_guard_rails_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_PrecheckGuardRailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _guard_rails_precheck_guard_rails_component__WEBPACK_IMPORTED_MODULE_22__["PrecheckGuardRailsComponent"], [_generated_precheck_service__WEBPACK_IMPORTED_MODULE_14__["PrecheckService"], _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_15__["PrecheckReportService"], _generated_guard_rail_property_provider_adapter__WEBPACK_IMPORTED_MODULE_23__["GuardRailPropertyProviderAdapter"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__["ReferenceWatcher"]], {
          isDiskResourcePrecheckSupported: [0, "isDiskResourcePrecheckSupported"],
          isVsanMaxEnabled: [1, "isVsanMaxEnabled"]
        }, {
          hasRunningTask: "hasRunningTask"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "vsan-dropdown-object-selector", [], null, [[null, "selectedObjectInfosChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedObjectInfosChange" === en) {
            var pd_0 = _co.onSelectedObjectInfosChange($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_inventory_dropdown_object_selector_dropdown_object_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_DropdownObjectSelectorComponent_0"], _common_component_inventory_dropdown_object_selector_dropdown_object_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_DropdownObjectSelectorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _common_component_inventory_dropdown_object_selector_dropdown_object_selector_component__WEBPACK_IMPORTED_MODULE_25__["DropdownObjectSelectorComponent"], [], {
          label: [0, "label"],
          nodes: [1, "nodes"],
          searchInputAriaLabelKey: [2, "searchInputAriaLabelKey"],
          selectedObjectInfos: [3, "selectedObjectInfos"]
        }, {
          selectedObjectInfosChange: "selectedObjectInfosChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.isDiskResourcePrecheckSupported;
          var currVal_2 = _co.isVsanMaxEnabled;

          _ck(_v, 5, 0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.decomTestOnLabel"));

          var currVal_5 = _co.precheckEntitiesTreeNodes;
          var currVal_6 = "vsan.evacuationStatus.decomTestOnLabel.searchInputAriaLabel";
          var currVal_7 = _co.selectedPrecheckEntities;

          _ck(_v, 13, 0, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_8 = _co.precheckSupported;

          _ck(_v, 18, 0, currVal_8);

          var currVal_9 = _co.precheckUnsupportedLabel;

          _ck(_v, 22, 0, currVal_9);

          var currVal_10 = _co.isPrecheckInProgress;

          _ck(_v, 26, 0, currVal_10);

          var currVal_11 = _co.showReport;

          _ck(_v, 30, 0, currVal_11);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).noContentDisplayed;

          _ck(_v, 3, 0, currVal_0);

          var currVal_3 = _co.getGeneralMessageLabel();

          _ck(_v, 9, 0, currVal_3);
        });
      }

      function View_PrecheckComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.unavailableView;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.unavailableView;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PrecheckComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_27__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "h5", [["vsan-auto-focus", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_28__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_6__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_21__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "";

          _ck(_v, 4, 0, currVal_0);

          var currVal_2 = _co.alertMessage;

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = _co.loading;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = !_co.loading;

          _ck(_v, 15, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.evacuationStatus.label"));

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_PrecheckComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck", [], null, null, null, View_PrecheckComponent_0, RenderType_PrecheckComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _precheck_component__WEBPACK_IMPORTED_MODULE_29__["PrecheckComponent"], [_generated_precheck_service__WEBPACK_IMPORTED_MODULE_14__["PrecheckService"], _report_precheck_report_service__WEBPACK_IMPORTED_MODULE_15__["PrecheckReportService"], _generated_task_service__WEBPACK_IMPORTED_MODULE_30__["TaskService"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_18__["PermissionService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_31__["SpaceEfficiencyService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PrecheckComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck", _precheck_component__WEBPACK_IMPORTED_MODULE_29__["PrecheckComponent"], View_PrecheckComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "h8dQ":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/precheck/enter-maintenance-mode-dialog.component.ts ***!
      \**************************************************************************/

    /*! exports provided: EnterMaintenanceModeDialogComponent */

    /***/
    function h8dQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnterMaintenanceModeDialogComponent", function () {
        return EnterMaintenanceModeDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/decommission-mode */
      "yaIQ");
      /* harmony import */


      var _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/client/dataservice/data-service-property */
      "GENi");
      /* harmony import */


      var _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-data-migration-util */
      "36iK");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var EnterMaintenanceModeDialogComponent = /*@__PURE__*/function () {
        var EnterMaintenanceModeDialogComponent = /*#__PURE__*/function () {
          function EnterMaintenanceModeDialogComponent(dataService, precheckService) {
            var _this16 = this;

            _classCallCheck(this, EnterMaintenanceModeDialogComponent);

            this.dataService = dataService;
            this.precheckService = precheckService; // todo georgig: add KB article id when provided. Bug 2676152

            this.ENHANCED_DURABILITY_KB = "";

            this.onPropertiesRetrieved = function (results) {
              _this16.isDrsEnabled = !!results[0];

              if (_this16.isDrsEnabled) {
                // when DRS is enabled, the option to move powered off VMs is enabled by default
                _this16.movePoweredOffVms = true;
              }

              _this16.hasPoweredOnVms = !!results[1]; // enlarge dialog according to the properties shown

              var height = EnterMaintenanceModeDialogComponent.EMM_DIALOG_HEIGHT;

              if (_this16.isDrsEnabled) {
                height += EnterMaintenanceModeDialogComponent.HEIGHT_ADDITION_DRS;
              }

              if (_this16.hasPoweredOnVms) {
                height += EnterMaintenanceModeDialogComponent.HEIGHT_ADDITION_POWERED_ON_VMS;
              }

              if (_this16.isDurabilityPossible) {
                height += EnterMaintenanceModeDialogComponent.HEIGHT_ADDITION_DURABILITY;
              }

              _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].setModalDialogHeight(height);

              _this16.loading = false;
            };

            this.onError = function (error) {
              _this16.alertMessages = [error];
              _this16.loading = false;
            };
          }

          _createClass(EnterMaintenanceModeDialogComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.loading = true;

              var context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getModalContext();

              this.secondaryTitle = context.precheckEntity.name;
              this.decommissionMode = context.decommissionMode;
              this.decommissionModeLocalized = _util_vsan_data_migration_util__WEBPACK_IMPORTED_MODULE_4__["VsanDataMigrationUtil"].getLocalizedDecommissionMode(this.decommissionMode);
              this.hostRef = context.precheckEntity.hostRef;
              this.isDurabilityPossible = context.isDurabilityPossible;
              this.isDurabilityGuaranteed = context.isDurabilityGuaranteed;
              Promise.all([this.dataService.getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_3__["ClusterComputeResource"].configurationEx.drsConfig.enabled, context.clusterRef), this.getNumberOfPowerOnVmsOnHost()]).then(this.onPropertiesRetrieved)["catch"](this.onError);
            }
          }, {
            key: "getNumberOfPowerOnVmsOnHost",
            value: function getNumberOfPowerOnVmsOnHost() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var result, _result;

                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (!_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].repa) {
                          _context8.next = 7;
                          break;
                        }

                        _context8.next = 3;
                        return this.dataService.select().fromType(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_3__["VirtualMachine"].type).where().propertyEqualsMoRef(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_3__["VirtualMachine"].runtime.host, this.hostRef).and().propertyEquals(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_3__["VirtualMachine"].runtime.powerState, "poweredOn").execute();

                      case 3:
                        result = _context8.sent;
                        return _context8.abrupt("return", result.resultItems.length);

                      case 7:
                        _context8.next = 9;
                        return this.dataService.getProperty(EnterMaintenanceModeDialogComponent.HOST_POWERED_ON_VMS_PROPERTY, this.hostRef);

                      case 9:
                        _result = _context8.sent;
                        return _context8.abrupt("return", !_result ? 0 : _result.length);

                      case 11:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }
          }, {
            key: "onConfirm",
            value: function onConfirm() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var precheckTask;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        this.loading = true; // pass EMM task to parent component

                        _context9.prev = 1;

                        if (this.isDurabilityGuaranteed && this.ensureDurability) {
                          this.decommissionMode = _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_2__["DecommissionMode"].ensureEnhancedDurability;
                        }

                        _context9.next = 5;
                        return this.precheckService.runEnterMaintenanceMode(this.hostRef, this.decommissionMode.toString(), this.movePoweredOffVms);

                      case 5:
                        precheckTask = _context9.sent;
                        _context9.next = 11;
                        break;

                      case 8:
                        _context9.prev = 8;
                        _context9.t0 = _context9["catch"](1);
                        this.onError(_context9.t0);

                      case 11:
                        _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].closeModalDialog(precheckTask);

                      case 12:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this, [[1, 8]]);
              }));
            }
          }, {
            key: "getDurabilityAlertType",
            value: function getDurabilityAlertType() {
              if (!this.isDurabilityPossible) {
                return;
              }

              return this.isDurabilityGuaranteed ? "info" : "warning";
            }
          }, {
            key: "getDurabilityAlertMessage",
            value: function getDurabilityAlertMessage() {
              if (!this.isDurabilityPossible) {
                return;
              }

              return this.isDurabilityGuaranteed ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.evacuationStatus.report.enterMaintenanceModeDialog.ensureDurabilityInfo") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.evacuationStatus.report.enterMaintenanceModeDialog.ensureDurabilityWarn");
            }
          }]);

          return EnterMaintenanceModeDialogComponent;
        }(); // DataService properties


        EnterMaintenanceModeDialogComponent.CLUSTER_DRS_ENABLED_PROPERTY = "configurationEx.drsConfig.enabled";
        EnterMaintenanceModeDialogComponent.HOST_POWERED_ON_VMS_PROPERTY = "poweredOnVMs"; // Dialog size

        EnterMaintenanceModeDialogComponent.EMM_DIALOG_WIDTH = 700;
        EnterMaintenanceModeDialogComponent.EMM_DIALOG_HEIGHT = 320;
        EnterMaintenanceModeDialogComponent.HEIGHT_ADDITION_POWERED_ON_VMS = 70;
        EnterMaintenanceModeDialogComponent.HEIGHT_ADDITION_DRS = 50;
        EnterMaintenanceModeDialogComponent.HEIGHT_ADDITION_DURABILITY = 100;
        return EnterMaintenanceModeDialogComponent;
      }();
      /***/

    },

    /***/
    "idV8":
    /*!**********************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/filter/base-filter.ts ***!
      \**********************************************************************/

    /*! exports provided: BaseFilter */

    /***/
    function idV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseFilter", function () {
        return BaseFilter;
      });
      /* harmony import */


      var _tree_datagrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../tree-datagrid */
      "zgjC");
      /* Copyright 2017-2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Abstract filter class that needs to be extended in order to implement custom filtration.
       * The class has a single abstract method that takes an object of type T and returns its
       * string representation.
       */


      var BaseFilter = /*#__PURE__*/function () {
        function BaseFilter() {
          _classCallCheck(this, BaseFilter);
        }

        _createClass(BaseFilter, [{
          key: "accepts",
          value: function accepts(data, search) {
            // Handle correctly TreeDatagrid components
            if (data instanceof _tree_datagrid__WEBPACK_IMPORTED_MODULE_0__["TreeDatagridRow"]) {
              data = data.data;
            }

            var label = this.stringify(data);

            if (label) {
              // Compare ignoring the case
              return label.toLowerCase().indexOf(search.toLowerCase()) != -1;
            } else {
              return false;
            }
          }
        }, {
          key: "match",
          value: function match(data, search) {
            return this.accepts(data, search);
          }
        }, {
          key: "stringify",
          value: function stringify(data) {
            return data + "";
          }
        }]);

        return BaseFilter;
      }();
      /***/

    },

    /***/
    "l/W2":
    /*!*************************************************!*\
      !*** ./src/app/generated/precheck-operation.ts ***!
      \*************************************************/

    /*! exports provided: PrecheckOperation */

    /***/
    function lW2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckOperation", function () {
        return PrecheckOperation;
      });

      var PrecheckOperation = /*@__PURE__*/function (PrecheckOperation) {
        PrecheckOperation["ENTER_MAINTENANCE_MODE"] = "EnterMaintenanceMode";
        PrecheckOperation["DISK_DATA_EVACUATION"] = "DiskDataEvacuation";
        return PrecheckOperation;
      }({});
      /***/

    },

    /***/
    "m/ai":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-tab.component.ngfactory.js ***!
      \********************************************************************************************/

    /*! exports provided: RenderType_PrecheckCapacityTabComponent, View_PrecheckCapacityTabComponent_0, View_PrecheckCapacityTabComponent_Host_0, PrecheckCapacityTabComponentNgFactory */

    /***/
    function mAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckCapacityTabComponent", function () {
        return RenderType_PrecheckCapacityTabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckCapacityTabComponent_0", function () {
        return View_PrecheckCapacityTabComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckCapacityTabComponent_Host_0", function () {
        return View_PrecheckCapacityTabComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckCapacityTabComponentNgFactory", function () {
        return PrecheckCapacityTabComponentNgFactory;
      });
      /* harmony import */


      var _precheck_capacity_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-capacity-tab.scss.shim.ngstyle */
      "3UtR");
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


      var _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../common/directive/external-link/external-link.directive */
      "tsUx");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _precheck_capacity_breakdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./precheck-capacity-breakdown.component.ngfactory */
      "PK2p");
      /* harmony import */


      var _precheck_capacity_breakdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./precheck-capacity-breakdown.component */
      "EJQp");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./precheck-capacity-tab.component */
      "r9zi");
      /* harmony import */


      var _precheck_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../precheck-report.service */
      "CWZg");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckCapacityTabComponent = [_precheck_capacity_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckCapacityTabComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckCapacityTabComponent,
        data: {}
      });

      function View_PrecheckCapacityTabComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "evacuation-status-vsan-direct-error-message"]], null, [[null, "alertsChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.capacityReports.get(_co.CapacityReport.VSAN_DIRECT).errorMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alerts: [1, "alerts"]
        }, {
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.AlertType.DANGER;

          var currVal_1 = _co.capacityReports.get(_co.CapacityReport.VSAN_DIRECT).errorMessages;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "vsan-validation", [["id", "evacuation-status-vsan-direct-info-message"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 5, "div", [["class", "external-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "a", [["class", "alert-action"], ["id", "learn-more-link"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4210688, null, 0, _common_directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_4__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], [8, null]], {
          articleId: [0, "articleId"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.AlertType.INFO;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.vSanDirectInfo"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _co.KnowledgeBaseId.PRECHECK_PCP;

          _ck(_v, 7, 0, currVal_3);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_PrecheckCapacityTabComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutlet: [0, "ngTemplateOutlet"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 8);

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-precheck-capacity-breakdown", [["id", "vsan-direct-capacity-breakdown"]], null, null, null, _precheck_capacity_breakdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PrecheckCapacityBreakdownComponent_0"], _precheck_capacity_breakdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PrecheckCapacityBreakdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _precheck_capacity_breakdown_component__WEBPACK_IMPORTED_MODULE_8__["PrecheckCapacityBreakdownComponent"], [_common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_9__["BarChartService"]], {
          clusterCapacity: [0, "clusterCapacity"],
          datastoreType: [1, "datastoreType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.vsanDirectCapacity;
          var currVal_1 = _co.DatastoreType.VSAN_DIRECT;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "div", [["class", "btn-group btn-outline-primary btn-sm"], ["id", "vsan-capacity-tabs"], ["role", "tablist"]], [[1, "aria-label", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "button", [["aria-controls", "vsan-capacity-breakdown"], ["class", "btn"], ["id", "vsan-capacity-tab"], ["role", "tab"]], [[1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.currentCapacityReport = _co.CapacityReport.VSAN) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, {
          "btn-primary": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "button", [["aria-controls", "vsan-direct-capacity-breakdown"], ["class", "btn"], ["id", "vsan-direct-capacity-tab"], ["role", "tab"]], [[1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.currentCapacityReport = _co.CapacityReport.VSAN_DIRECT) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, {
          "btn-primary": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hasPersistenceDataToRebuild;

          _ck(_v, 3, 0, currVal_0);

          var currVal_3 = "btn";

          var currVal_4 = _ck(_v, 10, 0, _co.CapacityReport.VSAN == _co.currentCapacityReport);

          _ck(_v, 9, 0, currVal_3, currVal_4);

          var currVal_7 = "btn";

          var currVal_8 = _ck(_v, 16, 0, _co.CapacityReport.VSAN_DIRECT == _co.currentCapacityReport);

          _ck(_v, 15, 0, currVal_7, currVal_8);

          var currVal_10 = _co.currentCapacityReport === _co.CapacityReport.VSAN;

          _ck(_v, 22, 0, currVal_10);

          var currVal_11 = _co.currentCapacityReport === _co.CapacityReport.VSAN_DIRECT;

          _ck(_v, 25, 0, currVal_11);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.tabList"));

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.CapacityReport.VSAN === _co.currentCapacityReport;

          _ck(_v, 8, 0, currVal_2);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.vSanButton"));

          _ck(_v, 11, 0, currVal_5);

          var currVal_6 = _co.CapacityReport.VSAN_DIRECT === _co.currentCapacityReport;

          _ck(_v, 14, 0, currVal_6);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.capacityTab.vSanDirectButton"));

          _ck(_v, 17, 0, currVal_9);
        });
      }

      function View_PrecheckCapacityTabComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid is-error capacity-error-summary-icon"], ["id", "fault-domains-needed-error-message-icon"], ["shape", "error-standard"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_10__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getClusterLevelErrorMessageLabel();

          _ck(_v, 6, 0, currVal_0);
        });
      }

      function View_PrecheckCapacityTabComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "vsan-precheck-capacity-breakdown", [["id", "vsan-capacity-breakdown"]], null, null, null, _precheck_capacity_breakdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PrecheckCapacityBreakdownComponent_0"], _precheck_capacity_breakdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PrecheckCapacityBreakdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _precheck_capacity_breakdown_component__WEBPACK_IMPORTED_MODULE_8__["PrecheckCapacityBreakdownComponent"], [_common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_9__["BarChartService"]], {
          clusterCapacity: [0, "clusterCapacity"],
          hasError: [1, "hasError"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var tmp_0_0 = null;
          var currVal_0 = (tmp_0_0 = _co.capacityReports.get(_co.CapacityReport.VSAN)) == null ? null : tmp_0_0.faultDomainsNeeded;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.vsanCapacity;
          var currVal_2 = _co.hasError;

          _ck(_v, 5, 0, currVal_1, currVal_2);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["vsanCapacityTemplate", 2]], null, 0, null, View_PrecheckCapacityTabComponent_8)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var tmp_0_0 = null;
          var currVal_0 = (tmp_0_0 = _co.capacityReports.get(_co.CapacityReport.VSAN_DIRECT)) == null ? null : tmp_0_0.errorMessages == null ? null : tmp_0_0.errorMessages.length;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.showVsanDirectCapacity();

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8);

          _ck(_v, 6, 0, currVal_1, currVal_2);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckCapacityTabComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.showCapacity();

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PrecheckCapacityTabComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck-capacity-tab", [], null, null, null, View_PrecheckCapacityTabComponent_0, RenderType_PrecheckCapacityTabComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_13__["PrecheckCapacityTabComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_14__["PrecheckReportService"]], null, null)], null, null);
      }

      var PrecheckCapacityTabComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-capacity-tab", _precheck_capacity_tab_component__WEBPACK_IMPORTED_MODULE_13__["PrecheckCapacityTabComponent"], View_PrecheckCapacityTabComponent_Host_0, {
        capacityReports: "capacityReports",
        hasPersistenceDataToRebuild: "hasPersistenceDataToRebuild",
        hasError: "hasError"
      }, {}, []);
      /***/

    },

    /***/
    "pqfg":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/virtual-objects/precheck-virtual-objects-tab.component.ngfactory.js ***!
      \**********************************************************************************************************/

    /*! exports provided: RenderType_PrecheckVirtualObjectsTabComponent, View_PrecheckVirtualObjectsTabComponent_0, View_PrecheckVirtualObjectsTabComponent_Host_0, PrecheckVirtualObjectsTabComponentNgFactory */

    /***/
    function pqfg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PrecheckVirtualObjectsTabComponent", function () {
        return RenderType_PrecheckVirtualObjectsTabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckVirtualObjectsTabComponent_0", function () {
        return View_PrecheckVirtualObjectsTabComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PrecheckVirtualObjectsTabComponent_Host_0", function () {
        return View_PrecheckVirtualObjectsTabComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckVirtualObjectsTabComponentNgFactory", function () {
        return PrecheckVirtualObjectsTabComponentNgFactory;
      });
      /* harmony import */


      var _precheck_virtual_objects_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./precheck-virtual-objects-tab.scss.shim.ngstyle */
      "Ps3O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../common/component/virtual-objects-table/virtual-objects-table.component.ngfactory */
      "1RE0");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../common/component/virtual-objects-table/virtual-objects-table.component */
      "qGLI");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../common/component/virtual-objects-table/virtual-objects-table.service */
      "LAuz");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../common/component/virtual-objects-table/virtual-objects-table-state.service */
      "eh32");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _precheck_virtual_objects_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./precheck-virtual-objects-tab.component */
      "cibP");
      /* harmony import */


      var _precheck_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../precheck-report.service */
      "CWZg");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PrecheckVirtualObjectsTabComponent = [_precheck_virtual_objects_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PrecheckVirtualObjectsTabComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PrecheckVirtualObjectsTabComponent,
        data: {}
      });

      function View_PrecheckVirtualObjectsTabComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckVirtualObjectsTabComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "general-message bold-no-selection"], ["id", "evacuation-status-virtual-objects-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.reportMessage;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckVirtualObjectsTabComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p", [["class", "p7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.virtualObjectsTab.delayTimerInfo", _co.delayTimer));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PrecheckVirtualObjectsTabComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 10, "div", [["class", "virtual-objects-summary-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "clr-icon", [["id", "selected-decommission-mode-summary-icon"]], [[1, "shape", 0], [1, "class", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "label", [["class", "summary-label"], ["id", "selected-decommision-mode-summary-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckVirtualObjectsTabComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "vsan-virtual-objects-table", [["class", "evacuation-status-virtual-objects-table"], ["id", "virtual-objects-table"]], null, null, null, _common_component_virtual_objects_table_virtual_objects_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_VirtualObjectsTableComponent_0"], _common_component_virtual_objects_table_virtual_objects_table_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_VirtualObjectsTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, null, 0, _common_component_virtual_objects_table_virtual_objects_table_component__WEBPACK_IMPORTED_MODULE_7__["VirtualObjectsTableComponent"], [_generated_permission_service__WEBPACK_IMPORTED_MODULE_8__["PermissionService"], _common_component_virtual_objects_table_virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_9__["VirtualObjectsTableService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _common_component_virtual_objects_table_virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_11__["VirtualObjectsTableStateService"]], {
          isWhatIfData: [0, "isWhatIfData"],
          isDurabilitySupported: [1, "isDurabilitySupported"],
          hideRowSelection: [2, "hideRowSelection"],
          virtualObjects: [3, "virtualObjects"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 16, 0);

          var currVal_5 = _co.delayTimer;

          _ck(_v, 22, 0, currVal_5);

          var currVal_6 = true;
          var currVal_7 = _co.isDurabilitySupported;
          var currVal_8 = true;
          var currVal_9 = _co.durableVirtualObjects;

          _ck(_v, 27, 0, currVal_6, currVal_7, currVal_8, currVal_9);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.evacuationStatus.report.predictedOverview.virtualObjectsTab.generalInfo"));

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.statusIcon;

          var currVal_2 = "is-solid " + _co.getIconClass();

          _ck(_v, 10, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).forAttr;

          _ck(_v, 15, 0, currVal_3);

          var currVal_4 = _co.reportMessage;

          _ck(_v, 17, 0, currVal_4);
        });
      }

      function View_PrecheckVirtualObjectsTabComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckVirtualObjectsTabComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckVirtualObjectsTabComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.areAllObjectsAccessibleAndCompliant;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = !_co.areAllObjectsAccessibleAndCompliant;

          _ck(_v, 8, 0, currVal_1);
        }, null);
      }

      function View_PrecheckVirtualObjectsTabComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckVirtualObjectsTabComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PrecheckVirtualObjectsTabComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.loading;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = !_co.loading;

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_PrecheckVirtualObjectsTabComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-precheck-virtual-objects-tab", [], null, null, null, View_PrecheckVirtualObjectsTabComponent_0, RenderType_PrecheckVirtualObjectsTabComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _precheck_virtual_objects_tab_component__WEBPACK_IMPORTED_MODULE_13__["PrecheckVirtualObjectsTabComponent"], [_precheck_report_service__WEBPACK_IMPORTED_MODULE_14__["PrecheckReportService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PrecheckVirtualObjectsTabComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-precheck-virtual-objects-tab", _precheck_virtual_objects_tab_component__WEBPACK_IMPORTED_MODULE_13__["PrecheckVirtualObjectsTabComponent"], View_PrecheckVirtualObjectsTabComponent_Host_0, {
        statusIcon: "statusIcon",
        inaccessibleObjectsCount: "inaccessibleObjectsCount",
        nonCompliantObjectsCount: "nonCompliantObjectsCount",
        noDurabilityObjectsCount: "noDurabilityObjectsCount",
        durableVirtualObjects: "durableVirtualObjects",
        delayTimer: "delayTimer",
        isDurabilitySupported: "isDurabilitySupported"
      }, {}, []);
      /***/

    },

    /***/
    "r9zi":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/capacity/precheck-capacity-tab.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PrecheckCapacityTabComponent, CapacityReport */

    /***/
    function r9zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckCapacityTabComponent", function () {
        return PrecheckCapacityTabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacityReport", function () {
        return CapacityReport;
      });
      /* harmony import */


      var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/validation/alert-type */
      "4KIt");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/precheck-result-status-type */
      "ZKv+");
      /* harmony import */


      var _service_navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/navigation/model/knowledge-base-id */
      "9lKY");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var PrecheckCapacityTabComponent = /*#__PURE__*/function () {
        function PrecheckCapacityTabComponent(precheckReportService) {
          var _this17 = this;

          _classCallCheck(this, PrecheckCapacityTabComponent);

          this.precheckReportService = precheckReportService;
          this.CapacityReport = CapacityReport;
          this.AlertType = _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"];
          this.DatastoreType = _generated_datastore_type__WEBPACK_IMPORTED_MODULE_1__["DatastoreType"];
          this.KnowledgeBaseId = _service_navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_3__["KnowledgeBaseId"];
          this.currentCapacityReport = CapacityReport.VSAN;

          this.getClusterLevelErrorMessageLabel = function () {
            return _this17.precheckReportService.getClusterLevelCapacityErrorMessage(_this17.capacityReports.get(CapacityReport.VSAN));
          };
        }

        _createClass(PrecheckCapacityTabComponent, [{
          key: "vsanCapacity",
          get: function get() {
            return this.capacityReports.get(CapacityReport.VSAN);
          }
        }, {
          key: "vsanDirectCapacity",
          get: function get() {
            return this.capacityReports.get(CapacityReport.VSAN_DIRECT);
          } // Capacity information is shown when there is a vSAN capacity error with recommendations
          // or when there is no vSAN direct capacity
          // or there is vSAN direct capacity without an error

        }, {
          key: "showCapacity",
          value: function showCapacity() {
            return this.vsanCapacity.status === _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_2__["PrecheckResultStatusType"].RED || !(this.vsanDirectCapacity && this.vsanDirectCapacity.status === _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_2__["PrecheckResultStatusType"].RED);
          }
        }, {
          key: "showVsanDirectCapacity",
          value: function showVsanDirectCapacity() {
            return !!this.vsanDirectCapacity && _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].isEmpty(this.vsanDirectCapacity.errorMessages) && this.vsanCapacity.status !== _generated_precheck_result_status_type__WEBPACK_IMPORTED_MODULE_2__["PrecheckResultStatusType"].RED;
          }
        }]);

        return PrecheckCapacityTabComponent;
      }();

      var CapacityReport = /*@__PURE__*/function (CapacityReport) {
        CapacityReport[CapacityReport["VSAN"] = 0] = "VSAN";
        CapacityReport[CapacityReport["VSAN_DIRECT"] = 1] = "VSAN_DIRECT";
        return CapacityReport;
      }({});
      /***/

    },

    /***/
    "rWU4":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/precheck/report/psp/precheck-persistence-tab.component.ts ***!
      \********************************************************************************/

    /*! exports provided: PrecheckPersistenceTabComponent */

    /***/
    function rWU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckPersistenceTabComponent", function () {
        return PrecheckPersistenceTabComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PrecheckPersistenceTabComponent = /*#__PURE__*/function () {
        function PrecheckPersistenceTabComponent(precheckReportService) {
          var _this18 = this;

          _classCallCheck(this, PrecheckPersistenceTabComponent);

          this.precheckReportService = precheckReportService;
          this.filterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.DEFAULT_ITEMS_PER_PAGE = 10;

          this.getPersistenceStateLabel = function (state) {
            return _this18.precheckReportService.getPersistenceStateLabel(state);
          };

          this.getPersistenceStateIcon = function (state) {
            return _this18.precheckReportService.getPersistenceStateIcon(state);
          };

          this.getPersistenceStateIconClasses = function (state) {
            return _this18.precheckReportService.getPersistenceIconClass(state);
          };
        }

        _createClass(PrecheckPersistenceTabComponent, [{
          key: "onSelectedFilterTypeChanged",
          value: function onSelectedFilterTypeChanged(value) {
            this.stateFilterValue = value;
            this.notifyFilterChange();
          }
        }, {
          key: "notifyFilterChange",
          value: function notifyFilterChange() {
            var hasAppliedFilters = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(this.stateFilterValue);
            this.filterChanged.emit(hasAppliedFilters);
          }
        }]);

        return PrecheckPersistenceTabComponent;
      }();
      /***/

    },

    /***/
    "tCE3":
    /*!*************************************************!*\
      !*** ./src/app/generated/precheck-task-data.ts ***!
      \*************************************************/

    /*! exports provided: PrecheckTaskData */

    /***/
    function tCE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrecheckTaskData", function () {
        return PrecheckTaskData;
      });

      var PrecheckTaskData;

      (function (PrecheckTaskData) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (taskMoRef, name, uuid, hostName, decommissionMode, taskType) {
          return {
            taskMoRef: taskMoRef,
            name: name,
            uuid: uuid,
            hostName: hostName,
            decommissionMode: decommissionMode,
            taskType: taskType
          };
        };

        PrecheckTaskData.Factory = Factory;
      })(PrecheckTaskData || (PrecheckTaskData = {})); //module PrecheckTaskData

      /***/

    },

    /***/
    "zgjC":
    /*!*****************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/tree-datagrid.ts ***!
      \*****************************************************************/

    /*! exports provided: TreeDatagrid, TreeDatagridRow, TreeFilter */

    /***/
    function zgjC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDatagrid", function () {
        return TreeDatagrid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDatagridRow", function () {
        return TreeDatagridRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeFilter", function () {
        return TreeFilter;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* Copyright 2016 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Hierarchical data provider.
       * This is a additional structure to the Clarity Datagrid that supports hierarchical data rendering.
       */


      var TreeDatagrid = /*#__PURE__*/function () {
        /**
         * @param childItems lambda for extracting the children of a given data object
         * @param rootItems (optional) the initial data objects
         */
        function TreeDatagrid(childItems, rootItems) {
          var _this19 = this;

          _classCallCheck(this, TreeDatagrid);

          this.childItems = childItems;
          /**
           * List of filters to be applied on the data.
           */

          this.filters = [];
          /**
           * Removes all items.
           */

          this.clear = function () {
            return _this19.rootItems = [];
          };
          /**
           * Sets the given data objects as content.
           */


          this.refreshGrid = function (rowData) {
            return _this19.rootItems = rowData;
          };

          this.collapseAll = function () {
            return _this19.rows.forEach(function (r) {
              return _this19.collapse(r);
            });
          };

          this.expandAll = function () {
            return _this19.rows.forEach(function (r) {
              return _this19.expand(r);
            });
          };

          this.rootItems = rootItems;
        }

        _createClass(TreeDatagrid, [{
          key: "rootItems",
          get:
          /**
           * root data objects
           */
          function get() {
            return this.roots;
          }
          /**
           * The flat row structure consisting of the root objects and their children
           * in case the parents are expanded. Sorting and filtering are reflected here.
           */
          ,
          set: function set(value) {
            this.roots = value ? value : [];
            this.content = this.flatten(this.roots);
          }
        }, {
          key: "rows",
          get: function get() {
            return this.content;
          }
          /**
           * Registers a new filter in the data provider.
           * Initially the filter will accept all items.
           * The consumer can assign a predicate to the TreeFilter object
           * to add filtering rule. All registered filters' predicates are
           * evaluated using AND operator.
           */

        }, {
          key: "registerFilter",
          value: function registerFilter() {
            var _this20 = this;

            var filter = new TreeFilter(function () {
              return _this20.content = _this20.flatten(_this20.rootItems);
            });
            this.filters.push(filter);
            return filter;
          }
        }, {
          key: "unregisterFilter",
          value: function unregisterFilter(value) {
            var index = this.filters.indexOf(value);

            if (index != -1) {
              this.filters.splice(index, 1);
            }
          }
          /**
           * Applies sorting comparator and direction for the data provider.
           */

        }, {
          key: "sort",
          value: function sort(comparator) {
            var ascending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.comparator = comparator;
            this.sortAscending = ascending; // refresh content, will expand all nodes

            this.content = this.flatten(this.rootItems);
          }
        }, {
          key: "expand",
          value: function expand(row) {
            if (row.isExpanded) {
              // already expanded
              return;
            }

            var rowIndex = this.content.indexOf(row);

            if (rowIndex == -1) {
              // row is filtered out
              return;
            }

            var flattenedChildren = this.flatten(this.childItems(row.data), row.depth + 1);

            if (flattenedChildren.length > 0) {
              var _this$content;

              (_this$content = this.content).splice.apply(_this$content, [rowIndex + 1, 0].concat(_toConsumableArray(flattenedChildren)));
            }

            row.isExpanded = true;
          }
        }, {
          key: "collapse",
          value: function collapse(row) {
            if (!row.isExpanded) {
              // already collapsed
              row.isExpanded = false;
              return;
            }

            var rowIndex = this.content.indexOf(row);

            if (rowIndex == -1) {
              // row is filtered out
              return;
            }

            var removeCount = 0;

            for (var i = rowIndex + 1; i < this.content.length && row.depth < this.content[i].depth; i++) {
              removeCount++;
            }

            this.content.splice(rowIndex + 1, removeCount);
            row.isExpanded = false;
          } // returns flattened list of the specified items and their children (and their children);
          // sorting and filter are applied;
          // items are returned in expanded state

        }, {
          key: "flatten",
          value: function flatten(items) {
            var _this21 = this;

            var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var parent = arguments.length > 2 ? arguments[2] : undefined;

            if (!items) {
              return [];
            }

            var sortedItems = _toConsumableArray(items);

            if (this.comparator) {
              sortedItems.sort(function (item1, item2) {
                return (_this21.sortAscending ? 1 : -1) * _this21.comparator(item1, item2);
              });
            }

            var result = [];

            var _iterator = _createForOfIteratorHelper(sortedItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var childItems = this.childItems(item); // flattened children, including their children

                var children = this.flatten(childItems, depth + 1, item);
                var filteredOut = false;

                var _iterator2 = _createForOfIteratorHelper(this.filters),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var filter = _step2.value;
                    // filter out items only if the filter is not applicable for the item or it's parent
                    var matchFilter = filter.predicate(item) || !!parent && filter.predicate(parent);

                    if (!matchFilter) {
                      filteredOut = true;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                if (!filteredOut || children.length > 0) {
                  (function () {
                    var row = new TreeDatagridRow();
                    row.data = item;

                    row.toggle = function () {
                      return row.isExpanded ? _this21.collapse(row) : _this21.expand(row);
                    };

                    row.depth = depth;
                    row.isExpanded = true;
                    row.isExpandable = childItems && childItems.length > 0;
                    result.push.apply(result, [row].concat(_toConsumableArray(children)));
                  })();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return result;
          }
        }], [{
          key: "forChildProperty",
          value: function forChildProperty(childField, rowData) {
            return new TreeDatagrid(function (item) {
              return item[childField];
            }, rowData);
          }
        }]);

        return TreeDatagrid;
      }();
      /**
       * Represents a single row in a flattened tree data provider.
       */


      var TreeDatagridRow = /*#__PURE__*/_createClass(function TreeDatagridRow() {
        _classCallCheck(this, TreeDatagridRow);
      });
      /**
       * Allows specifying filtering predicate for the data provider.
       * @see TreeDatagrid.registerFilter
       */


      var TreeFilter = /*#__PURE__*/function () {
        function TreeFilter(apply) {
          _classCallCheck(this, TreeFilter);

          this.apply = apply;
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.clear();
        }

        _createClass(TreeFilter, [{
          key: "clear",
          value: function clear() {
            this._predicate = function (item) {
              return true;
            };

            this.apply();
          }
        }, {
          key: "predicate",
          get: function get() {
            return this._predicate;
          } // Used by clarity filter
          ,
          set: function set(predicate) {
            if (!predicate) {
              this.clear();
            } else {
              this._predicate = predicate;
              this.apply();
            }
          }
        }, {
          key: "isActive",
          value: function isActive() {
            return this.changes.getValue();
          } // Used by clarity filter

        }, {
          key: "accepts",
          value: function accepts(val) {
            return true;
          }
        }]);

        return TreeFilter;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=106-es5.js.map