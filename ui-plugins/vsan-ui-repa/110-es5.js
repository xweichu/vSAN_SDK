(function () {
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

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110], {
    /***/
    "/Ifq":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/overview/fault-domains-summary.component.ts ***!
      \******************************************************************/

    /*! exports provided: FaultDomainsSummaryComponent */

    /***/
    function Ifq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainsSummaryComponent", function () {
        return FaultDomainsSummaryComponent;
      });
      /* harmony import */


      var _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/fault-domains-util */
      "JwBD");
      /* harmony import */


      var _model_fault_domain_consumption_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @model/fault-domain-consumption-data */
      "SG96");

      var FaultDomainsSummaryComponent = /*#__PURE__*/function () {
        function FaultDomainsSummaryComponent() {
          _classCallCheck(this, FaultDomainsSummaryComponent);

          this.faultDomainModels = [];
          this.standaloneModels = [];
        }

        _createClass(FaultDomainsSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preferredDomain = _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_0__["FaultDomainsUtil"].getPreferredDomain(this.witnessInfos);
            this.standaloneModels = _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_0__["FaultDomainsUtil"].getStandaloneModels(this.availableDomains, this.witnessInfos);
            this.faultDomainModels = _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_0__["FaultDomainsUtil"].getFaultDomainModels(this.availableDomains, this.preferredDomain);
            this.faultToleranceInfo = _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_0__["FaultDomainsUtil"].getFaultToleranceInfo(this.availableDomains, this.witnessInfos, this.standaloneModels, this.faultDomainModels, this.storageConsumption);
          }
        }, {
          key: "getDomainConsumption",
          value: function getDomainConsumption(model) {
            return _model_fault_domain_consumption_data__WEBPACK_IMPORTED_MODULE_1__["FaultDomainConsumptionData"].getDomainConsumptionData(model, this.storageConsumption);
          }
        }]);

        return FaultDomainsSummaryComponent;
      }();
      /***/

    },

    /***/
    "1Lgs":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/overview/capacity-card.scss.shim.ngstyle.js ***!
      \******************************************************************/

    /*! exports provided: styles */

    /***/
    function Lgs(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 auto;\n}\n.card-block[_ngcontent-%COMP%] {\n  min-height: 3.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9jYXBhY2l0eS1jYXJkLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMSUE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQWFIO0FBVkE7RUFDRyxrQkFQdUI7QUFvQjFCIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9vdmVydmlldy9jYXBhY2l0eS1jYXJkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJGNhcmQtY29udGVudC1taW4taGVpZ2h0OiAzLjZyZW07XG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMSAwIGF1dG87XG59XG5cbi5jYXJkLWJsb2NrIHtcbiAgIG1pbi1oZWlnaHQ6ICRjYXJkLWNvbnRlbnQtbWluLWhlaWdodDtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "3+6m":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/overview/health-card.component.ngfactory.js ***!
      \******************************************************************/

    /*! exports provided: RenderType_HealthCardComponent, View_HealthCardComponent_0, View_HealthCardComponent_Host_0, HealthCardComponentNgFactory */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HealthCardComponent", function () {
        return RenderType_HealthCardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HealthCardComponent_0", function () {
        return View_HealthCardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HealthCardComponent_Host_0", function () {
        return View_HealthCardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthCardComponentNgFactory", function () {
        return HealthCardComponentNgFactory;
      });
      /* harmony import */


      var _health_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./health-card.scss.shim.ngstyle */
      "j04M");
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


      var _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/component/health/health-check-item.component.ngfactory */
      "Dh4T");
      /* harmony import */


      var _common_component_health_health_check_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/component/health/health-check-item.component */
      "y2Kt");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _health_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./health-card.component */
      "ftT8");
      /* harmony import */


      var _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../generated/vsan-health-property-provider */
      "6s13");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HealthCardComponent = [_health_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HealthCardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HealthCardComponent,
        data: {}
      });

      function View_HealthCardComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "health-error"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.error;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_HealthCardComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-md central-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_HealthCardComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "health-check-item", [], null, [[null, "onInlineHealthViewDisplay"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onInlineHealthViewDisplay" === en) {
            var pd_0 = _co.showHealthView($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthCheckItem_0"], _common_component_health_health_check_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthCheckItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_health_health_check_item_component__WEBPACK_IMPORTED_MODULE_5__["HealthCheckItem"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]], {
          healthCheck: [0, "healthCheck"],
          canNavigateToHealthView: [1, "canNavigateToHealthView"],
          inlineHealthView: [2, "inlineHealthView"],
          clusterRef: [3, "clusterRef"]
        }, {
          onInlineHealthViewDisplay: "onInlineHealthViewDisplay"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit;
          var currVal_1 = true;
          var currVal_2 = true;
          var currVal_3 = _co.clusterRef;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_HealthCardComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthCardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.healthTestData;

          _ck(_v, 7, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.home.health.overview.description"));

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_HealthCardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_8__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "div", [["class", "card"], ["id", "health-overview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "h4", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.error;

          _ck(_v, 3, 0, currVal_0);

          var currVal_2 = _co.loading;

          _ck(_v, 14, 0, currVal_2);

          var currVal_3 = !_co.loading;

          _ck(_v, 17, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.home.health.overview.title"));

          _ck(_v, 8, 0, currVal_1);
        });
      }

      function View_HealthCardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "health-card", [], null, null, null, View_HealthCardComponent_0, RenderType_HealthCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _health_card_component__WEBPACK_IMPORTED_MODULE_9__["HealthCardComponent"], [_generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_10__["VsanHealthPropertyProvider"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var HealthCardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("health-card", _health_card_component__WEBPACK_IMPORTED_MODULE_9__["HealthCardComponent"], View_HealthCardComponent_Host_0, {
        clusterRef: "clusterRef"
      }, {
        onShowDetails: "onShowDetails"
      }, []);
      /***/

    },

    /***/
    "4KNf":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/overview/configurations-card.component.ngfactory.js ***!
      \**************************************************************************/

    /*! exports provided: RenderType_ConfigurationsCardComponent, View_ConfigurationsCardComponent_0, View_ConfigurationsCardComponent_Host_0, ConfigurationsCardComponentNgFactory */

    /***/
    function KNf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ConfigurationsCardComponent", function () {
        return RenderType_ConfigurationsCardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigurationsCardComponent_0", function () {
        return View_ConfigurationsCardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ConfigurationsCardComponent_Host_0", function () {
        return View_ConfigurationsCardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationsCardComponentNgFactory", function () {
        return ConfigurationsCardComponentNgFactory;
      });
      /* harmony import */


      var _configurations_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configurations-card.scss.shim.ngstyle */
      "Q/4x");
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


      var _common_component_configurations_data_services_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/component/configurations/data-services-configuration.component.ngfactory */
      "VwVQ");
      /* harmony import */


      var _common_component_configurations_data_services_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/component/configurations/data-services-configuration.component */
      "s2Uo");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _common_component_configurations_capacity_reservation_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/component/configurations/capacity-reservation-configuration.component.ngfactory */
      "ojaL");
      /* harmony import */


      var _common_component_configurations_capacity_reservation_configuration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/component/configurations/capacity-reservation-configuration.component */
      "IePN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _fault_domains_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./fault-domains-summary.component.ngfactory */
      "la9d");
      /* harmony import */


      var _fault_domains_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./fault-domains-summary.component */
      "/Ifq");
      /* harmony import */


      var _common_component_configurations_perf_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/component/configurations/perf-configuration.component.ngfactory */
      "u1bW");
      /* harmony import */


      var _common_component_configurations_perf_configuration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/component/configurations/perf-configuration.component */
      "oSbY");
      /* harmony import */


      var _common_component_configurations_iscsi_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/component/configurations/iscsi-configuration.component.ngfactory */
      "mAUA");
      /* harmony import */


      var _common_component_configurations_iscsi_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/component/configurations/iscsi-configuration.component */
      "P5GZ");
      /* harmony import */


      var _common_component_configurations_file_service_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../common/component/configurations/file-service-configuration.component.ngfactory */
      "MGE/");
      /* harmony import */


      var _common_component_configurations_file_service_configuration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../common/component/configurations/file-service-configuration.component */
      "m1ZG");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _historical_health_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./historical-health.component.ngfactory */
      "on9/");
      /* harmony import */


      var _historical_health_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./historical-health.component */
      "wZyU");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _configurations_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./configurations-card.component */
      "pMUE");
      /* harmony import */


      var _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../common/component/general-settings/vsan-general-config.service */
      "b8qf");
      /* harmony import */


      var _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../generated/capacity-management-service */
      "4YMb");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../generated/vsan-stretched-cluster-service */
      "bxEx");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ConfigurationsCardComponent = [_configurations_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ConfigurationsCardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ConfigurationsCardComponent,
        data: {}
      });

      function View_ConfigurationsCardComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "services-validation"]], null, [[null, "alertsChange"], [null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.errorMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onClosed" === en) {
            var pd_1 = (_co.errorMessages = []) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alerts: [0, "alerts"],
          allowClose: [1, "allowClose"]
        }, {
          onClosed: "onClosed",
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessages;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_ConfigurationsCardComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-md central-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_ConfigurationsCardComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[3, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "data-services-configuration", [], null, null, null, _common_component_configurations_data_services_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DataServicesConfigurationComponent_0"], _common_component_configurations_data_services_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DataServicesConfigurationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _common_component_configurations_data_services_configuration_component__WEBPACK_IMPORTED_MODULE_7__["DataServicesConfigurationComponent"], [_common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_8__["SpaceEfficiencyService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]], {
          clusterRef: [0, "clusterRef"],
          vsanConfig: [1, "vsanConfig"],
          clusterCapabilityData: [2, "clusterCapabilityData"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;
          var currVal_1 = _co.vsanConfig;
          var currVal_2 = _co.clusterCapabilityData;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ConfigurationsCardComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "spinner spinner-md central-spinner"], ["id", "loading-capacity-reservation-settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], null, null);
      }

      function View_ConfigurationsCardComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "capacity-reservation-configuration", [], null, null, null, _common_component_configurations_capacity_reservation_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CapacityReservationConfigurationComponent_0"], _common_component_configurations_capacity_reservation_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CapacityReservationConfigurationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_configurations_capacity_reservation_configuration_component__WEBPACK_IMPORTED_MODULE_11__["CapacityReservationConfigurationComponent"], [], {
          isSlackSpaceCapacitySupported: [0, "isSlackSpaceCapacitySupported"],
          isCapacityCustomizableThresholdsSupportedOnVc: [1, "isCapacityCustomizableThresholdsSupportedOnVc"],
          capacityManagementData: [2, "capacityManagementData"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterCapabilityData == null ? null : _co.clusterCapabilityData.isSlackSpaceReservationSupported;
          var currVal_1 = _co.vcCapabilityData == null ? null : _co.vcCapabilityData.isCapacityCustomizableThresholdsSupported;
          var currVal_2 = _co.capacityManagementData;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ConfigurationsCardComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.capacityManagementData;

          _ck(_v, 5, 0, currVal_0);

          var currVal_1 = _co.capacityManagementData;

          _ck(_v, 8, 0, currVal_1);
        }, null);
      }

      function View_ConfigurationsCardComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "spinner spinner-md central-spinner"], ["id", "loading-fault-domain-settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], null, null);
      }

      function View_ConfigurationsCardComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "fault-domains-summary", [], null, null, null, _fault_domains_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_FaultDomainsSummaryComponent_0"], _fault_domains_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_FaultDomainsSummaryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _fault_domains_summary_component__WEBPACK_IMPORTED_MODULE_14__["FaultDomainsSummaryComponent"], [], {
          availableDomains: [0, "availableDomains"],
          storageConsumption: [1, "storageConsumption"],
          witnessInfos: [2, "witnessInfos"],
          isStretchedCluster: [3, "isStretchedCluster"],
          isSharedWitnessAllowed: [4, "isSharedWitnessAllowed"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.availableDomains;
          var currVal_1 = _co.storageConsumption;
          var currVal_2 = _co.witnessInfos;
          var currVal_3 = _co.isStretchedCluster;
          var currVal_4 = _co.isSharedWitnessAllowed;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_ConfigurationsCardComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[7, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.loadingFaultDomains;

          _ck(_v, 6, 0, currVal_0);

          var currVal_1 = !_co.loadingFaultDomains;

          _ck(_v, 9, 0, currVal_1);
        }, null);
      }

      function View_ConfigurationsCardComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "perf-configuration", [], null, null, null, _common_component_configurations_perf_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_PerfConfigurationComponent_0"], _common_component_configurations_perf_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_PerfConfigurationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _common_component_configurations_perf_configuration_component__WEBPACK_IMPORTED_MODULE_16__["PerfConfigurationComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]], {
          vcPermissions: [0, "vcPermissions"],
          status: [1, "status"],
          config: [2, "config"],
          vcCapabilityData: [3, "vcCapabilityData"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.vcPermissions;
          var currVal_1 = _co.perfSvcStatus;
          var currVal_2 = _co.perfSvcConfig;
          var currVal_3 = _co.vcCapabilityData;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_ConfigurationsCardComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "spinner spinner-md central-spinner"], ["id", "loading-iscsi-settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], null, null);
      }

      function View_ConfigurationsCardComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "iscsi-configuration", [], null, null, null, _common_component_configurations_iscsi_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_IscsiConfigurationComponent_0"], _common_component_configurations_iscsi_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_IscsiConfigurationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_configurations_iscsi_configuration_component__WEBPACK_IMPORTED_MODULE_18__["IscsiConfigurationComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]], {
          status: [0, "status"],
          config: [1, "config"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.iscsiSvcStatus;
          var currVal_1 = _co.iscsiSvcConfig;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_ConfigurationsCardComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[11, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.iscsiSvcConfig;

          _ck(_v, 5, 0, currVal_0);

          var currVal_1 = _co.iscsiSvcConfig;

          _ck(_v, 8, 0, currVal_1);
        }, null);
      }

      function View_ConfigurationsCardComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "file-service-configuration", [], null, null, null, _common_component_configurations_file_service_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_FileServiceConfigurationComponent_0"], _common_component_configurations_file_service_configuration_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_FileServiceConfigurationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _common_component_configurations_file_service_configuration_component__WEBPACK_IMPORTED_MODULE_20__["FileServiceConfigurationComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_21__["TaskMonitorService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_22__["VsanConfigService"]], {
          clusterRef: [0, "clusterRef"],
          vcCapabilityData: [1, "vcCapabilityData"],
          availableDomains: [2, "availableDomains"],
          isStretchedCluster: [3, "isStretchedCluster"],
          isPerfServiceEnabled: [4, "isPerfServiceEnabled"],
          editClusterPermission: [5, "editClusterPermission"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;
          var currVal_1 = _co.vcCapabilityData;
          var currVal_2 = _co.availableDomains;
          var currVal_3 = _co.isStretchedCluster;
          var currVal_4 = _co.perfSvcEnabled;
          var currVal_5 = _co.hasEditClusterPermission;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_ConfigurationsCardComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "clr-tab-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[15, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "historical-health-configuration", [], null, null, null, _historical_health_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_HistoricalHealthComponent_0"], _historical_health_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_HistoricalHealthComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _historical_health_component__WEBPACK_IMPORTED_MODULE_24__["HistoricalHealthComponent"], [], {
          config: [0, "config"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.vsanConfig == null ? null : _co.vsanConfig.historicalHealthConfig;

          _ck(_v, 5, 0, currVal_0);
        }, null);
      }

      function View_ConfigurationsCardComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 127, "clr-tabs", [["class", "tab-container"]], [[2, "tabs-vertical", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTabs_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵec"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabs"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          tabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "data-services-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, [[2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "capacity-reservation-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).activate() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.queryCapacityMgmtSettings() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, [[4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](37, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "fault-domain-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).activate() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.queryStretchedClusterSettings() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](54, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrIfActiveChange" === en) {
            var pd_0 = (_co.faultDomainTabActive = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_ConfigurationsCardComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, {
          activeChange: "clrIfActiveChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "perf-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](70, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](71, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "iscsi-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).activate() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.queryIscsiTargetConfig() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](88, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 12, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "file-service-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, [[12, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](105, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 15, "clr-tab", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTab_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 180224, [[1, 4]], 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, {
          tabLink: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, {
          tabContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 16777216, null, 0, 4, "button", [["clrTabLink", ""], ["id", "historical-health-configuration"], ["role", "tab"], ["type", "button"]], [[1, "aria-hidden", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [1, "aria-controls", 0], [8, "id", 0], [2, "active", null], [1, "aria-selected", 0], [1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).activate() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 16384, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbr"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵea"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵeb"]], {
          tabLinkId: [0, "tabLinkId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](120, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](121, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](122, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ConfigurationsCardComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          active: [0, "active"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_10 = "data-services-configuration";

          _ck(_v, 17, 0, currVal_10);

          var currVal_12 = null;

          _ck(_v, 23, 0, currVal_12);

          var currVal_22 = "capacity-reservation-configuration";

          _ck(_v, 34, 0, currVal_22);

          var currVal_24 = null;

          _ck(_v, 40, 0, currVal_24);

          var currVal_34 = "fault-domain-configuration";

          _ck(_v, 51, 0, currVal_34);

          var currVal_36 = _co.faultDomainTabActive;

          _ck(_v, 57, 0, currVal_36);

          var currVal_46 = "perf-configuration";

          _ck(_v, 68, 0, currVal_46);

          var currVal_48 = null;

          _ck(_v, 74, 0, currVal_48);

          var currVal_58 = "iscsi-configuration";

          _ck(_v, 85, 0, currVal_58);

          var currVal_60 = null;

          _ck(_v, 91, 0, currVal_60);

          var currVal_70 = "file-service-configuration";

          _ck(_v, 102, 0, currVal_70);

          var currVal_72 = null;

          _ck(_v, 108, 0, currVal_72);

          var currVal_82 = "historical-health-configuration";

          _ck(_v, 119, 0, currVal_82);

          var currVal_84 = null;

          _ck(_v, 125, 0, currVal_84);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).isVertical;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = false;
          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).addLinkClasses;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).addLinkClasses;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ariaControls;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tabLinkId;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).active;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).active;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tabindex;

          _ck(_v, 16, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.data.management.label"));

          _ck(_v, 19, 0, currVal_11);

          var currVal_13 = false;
          var currVal_14 = true;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).addLinkClasses;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).addLinkClasses;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ariaControls;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).tabLinkId;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).active;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).active;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).tabindex;

          _ck(_v, 33, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _ck(_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.enforcereservation.title"));

          _ck(_v, 36, 0, currVal_23);

          var currVal_25 = false;
          var currVal_26 = true;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).addLinkClasses;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).addLinkClasses;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).ariaControls;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).tabLinkId;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).active;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).active;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).tabindex;

          _ck(_v, 50, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 53, 0, _ck(_v, 54, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.cluster.configure.summary.faultDomains"));

          _ck(_v, 53, 0, currVal_35);

          var currVal_37 = false;
          var currVal_38 = true;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).addLinkClasses;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).addLinkClasses;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ariaControls;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).tabLinkId;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).active;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).active;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).tabindex;

          _ck(_v, 67, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45);

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 70, 0, _ck(_v, 71, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.perf.monitor.label"));

          _ck(_v, 70, 0, currVal_47);

          var currVal_49 = false;
          var currVal_50 = true;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).addLinkClasses;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).addLinkClasses;

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).ariaControls;

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).tabLinkId;

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).active;

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).active;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).tabindex;

          _ck(_v, 84, 0, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57);

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 87, 0, _ck(_v, 88, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.iscsiTargets"));

          _ck(_v, 87, 0, currVal_59);

          var currVal_61 = false;
          var currVal_62 = true;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).addLinkClasses;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).addLinkClasses;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ariaControls;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).tabLinkId;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).active;

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).active;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).tabindex;

          _ck(_v, 101, 0, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69);

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 104, 0, _ck(_v, 105, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.fileservices.title"));

          _ck(_v, 104, 0, currVal_71);

          var currVal_73 = false;
          var currVal_74 = true;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).addLinkClasses;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).addLinkClasses;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).ariaControls;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).tabLinkId;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).active;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).active;

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).tabindex;

          _ck(_v, 118, 0, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81);

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 121, 0, _ck(_v, 122, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.historicalhealth.title"));

          _ck(_v, 121, 0, currVal_83);
        });
      }

      function View_ConfigurationsCardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_25__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfigurationsCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 21, "div", [["class", "card"], ["id", "capacity-overview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "h4", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfigurationsCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfigurationsCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "button", [["class", "btn btn-sm btn-link"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showDetail() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessages.length > 0;

          _ck(_v, 3, 0, currVal_0);

          var currVal_2 = _co.loading;

          _ck(_v, 14, 0, currVal_2);

          var currVal_3 = !_co.loading;

          _ck(_v, 17, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.home.configurations.card.title"));

          _ck(_v, 8, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.generalConfig.button.edit"));

          _ck(_v, 23, 0, currVal_4);
        });
      }

      function View_ConfigurationsCardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "configurations-card", [], null, null, null, View_ConfigurationsCardComponent_0, RenderType_ConfigurationsCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _configurations_card_component__WEBPACK_IMPORTED_MODULE_26__["ConfigurationsCardComponent"], [_generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_22__["VsanConfigService"], _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_27__["VsanGeneralConfigService"], _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_28__["CapacityManagementService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_29__["VsanCapabilityProvider"], _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_30__["CapacityDataService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_31__["VsanStretchedClusterService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ConfigurationsCardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("configurations-card", _configurations_card_component__WEBPACK_IMPORTED_MODULE_26__["ConfigurationsCardComponent"], View_ConfigurationsCardComponent_Host_0, {
        clusterRef: "clusterRef",
        vcCapabilityData: "vcCapabilityData",
        clusterCapabilityData: "clusterCapabilityData",
        vcPermissions: "vcPermissions",
        clusterPermissions: "clusterPermissions"
      }, {
        onShowDetails: "onShowDetails"
      }, []);
      /***/

    },

    /***/
    "4S7D":
    /*!**********************************************************************!*\
      !*** ./src/app/vsan/overview/historical-health.scss.shim.ngstyle.js ***!
      \**********************************************************************/

    /*! exports provided: styles */

    /***/
    function S7D(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9oaXN0b3JpY2FsLWhlYWx0aC5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBSGtERztFQUNHLGdDQUFBO0FGakNOO0FFbUNHOztFQUdHLGdDQUFBO0FGbENOO0FFb0NHO0VBQ0csOEJBQUE7QUZsQ04iLCJmaWxlIjoic3JjL2FwcC92c2FuL292ZXJ2aWV3L2hpc3RvcmljYWwtaGVhbHRoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmcoKTtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "4xZu":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/overview/fault-domains-summary.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function xZu(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.fault-domains[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-wrap: wrap;\n}\n.fault-domains[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 18rem !important;\n  margin-right: 0.6rem;\n  margin-top: 0.6rem;\n  padding: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9mYXVsdC1kb21haW5zLXN1bW1hcnkuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUhrREc7RUFDRyxnQ0FBQTtBRmpDTjtBRW1DRzs7RUFHRyxnQ0FBQTtBRmxDTjtBRW9DRztFQUNHLDhCQUFBO0FGbENOO0FBaEJBO0VBQ0csZ0JBQUE7QUFtQkg7QUFoQkE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFtQkg7QUFsQkc7RUFDRyx1QkFBQTtFQUNBLG9CR0ZJO0VIR0osa0JHSEk7RUhJSixhQUFBO0FBb0JOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9vdmVydmlldy9mYXVsdC1kb21haW5zLXN1bW1hcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kZmF1bHQtZG9tYWluLWNhcmQtd2lkdGg6IDE4cmVtO1xuXG46aG9zdCB7XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuaDUge1xuICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZhdWx0LWRvbWFpbnMge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgJiA+ICoge1xuICAgICAgd2lkdGg6ICRmYXVsdC1kb21haW4tY2FyZC13aWR0aCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICAgICBwYWRkaW5nOiAwcmVtO1xuICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "6CTa":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/overview/resyncing-data-card.component.ngfactory.js ***!
      \**************************************************************************/

    /*! exports provided: RenderType_ResyncingDataCardComponent, View_ResyncingDataCardComponent_0, View_ResyncingDataCardComponent_Host_0, ResyncingDataCardComponentNgFactory */

    /***/
    function CTa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ResyncingDataCardComponent", function () {
        return RenderType_ResyncingDataCardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ResyncingDataCardComponent_0", function () {
        return View_ResyncingDataCardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ResyncingDataCardComponent_Host_0", function () {
        return View_ResyncingDataCardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResyncingDataCardComponentNgFactory", function () {
        return ResyncingDataCardComponentNgFactory;
      });
      /* harmony import */


      var _resyncing_data_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resyncing-data-card.scss.shim.ngstyle */
      "WKp+");
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


      var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_pipe_TimePipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/pipe/TimePipe */
      "TkoF");
      /* harmony import */


      var _resyncing_data_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./resyncing-data-card.component */
      "jW9d");
      /* harmony import */


      var _generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../generated/vsan-resyncing-components-provider */
      "b+8E");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ResyncingDataCardComponent = [_resyncing_data_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ResyncingDataCardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ResyncingDataCardComponent,
        data: {}
      });

      function View_ResyncingDataCardComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "resyncing-error"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.error;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_ResyncingDataCardComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-md central-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_ResyncingDataCardComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.monitor.resyncSummary.resyncSuspended"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ResyncingDataCardComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _co.totalResyncingEta));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ResyncingDataCardComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "label", [["class", "clr-col-5"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "div", [["class", "clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResyncingDataCardComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResyncingDataCardComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "label", [["class", "clr-col-5"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 5, 0);

          var currVal_2 = _co.suspendedResync;

          _ck(_v, 12, 0, currVal_2);

          var currVal_3 = !_co.suspendedResync;

          _ck(_v, 15, 0, currVal_3);

          _ck(_v, 22, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).forAttr;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.resyncSummary.totalResyncingEta"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).forAttr;

          _ck(_v, 21, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.resyncSummary.scheduledResync.label"));

          _ck(_v, 23, 0, currVal_5);

          var currVal_6 = _co.scheduledResyncing;

          _ck(_v, 27, 0, currVal_6);
        });
      }

      function View_ResyncingDataCardComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "label", [["class", "clr-col-5"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "label", [["class", "clr-col-5"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResyncingDataCardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 5, 0);

          _ck(_v, 16, 0);

          var currVal_6 = _co.isResyncETAImprovementSupported;

          _ck(_v, 25, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).forAttr;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.resyncSummary.resyncingComponents"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.resyncingComponents;

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).forAttr;

          _ck(_v, 15, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.resyncSummary.bytesToResync"));

          _ck(_v, 17, 0, currVal_4);

          var currVal_5 = _co.bytesLeft;

          _ck(_v, 21, 0, currVal_5);
        });
      }

      function View_ResyncingDataCardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_TimePipe__WEBPACK_IMPORTED_MODULE_7__["TimePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResyncingDataCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 21, "div", [["class", "card"], ["id", "resyncing-objects"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "h4", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 7, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResyncingDataCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResyncingDataCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "button", [["class", "btn btn-sm btn-link"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showDetail() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](25, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.error;

          _ck(_v, 4, 0, currVal_0);

          var currVal_2 = _co.loading;

          _ck(_v, 15, 0, currVal_2);

          var currVal_3 = !_co.loading;

          _ck(_v, 18, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.resyncingComponents"));

          _ck(_v, 9, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _ck(_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.cluster.summary.portlet.details.label"));

          _ck(_v, 24, 0, currVal_4);
        });
      }

      function View_ResyncingDataCardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "resyncing-data-card", [], null, null, null, View_ResyncingDataCardComponent_0, RenderType_ResyncingDataCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _resyncing_data_card_component__WEBPACK_IMPORTED_MODULE_8__["ResyncingDataCardComponent"], [_generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_9__["VsanResyncingComponentsProvider"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ResyncingDataCardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("resyncing-data-card", _resyncing_data_card_component__WEBPACK_IMPORTED_MODULE_8__["ResyncingDataCardComponent"], View_ResyncingDataCardComponent_Host_0, {
        clusterRef: "clusterRef",
        isResyncETAImprovementSupported: "isResyncETAImprovementSupported"
      }, {
        onShowDetails: "onShowDetails"
      }, []);
      /***/

    },

    /***/
    "9zv6":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/overview/detail-view-wrapper.scss.shim.ngstyle.js ***!
      \************************************************************************/

    /*! exports provided: styles */

    /***/
    function zv6(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9kZXRhaWwtdmlldy13cmFwcGVyLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQWNIO0FFK0JHO0VBQ0csZ0NBQUE7QUY3Qk47QUUrQkc7O0VBR0csZ0NBQUE7QUY5Qk47QUVnQ0c7RUFDRyw4QkFBQTtBRjlCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vb3ZlcnZpZXcvZGV0YWlsLXZpZXctd3JhcHBlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgYXV0bztcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCk7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "HuoJ":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/overview/vsan-cluster-overview.component.ts ***!
      \******************************************************************/

    /*! exports provided: VsanClusterOverviewComponent */

    /***/
    function HuoJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanClusterOverviewComponent", function () {
        return VsanClusterOverviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_drag_and_drop_card_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/drag-and-drop/card-view */
      "wim2");
      /* harmony import */


      var _component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/drag-and-drop/drag-card-position */
      "gJL6");
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _generated_cluster_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/cluster-mode */
      "ByNx");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/client/dataservice/data-service-property */
      "GENi");
      /* harmony import */


      var _service_client_dataservice_data_service_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/client/dataservice/data-service-util */
      "cG0i");
      /* harmony import */


      var _service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @service/flow/error-handler.decorator */
      "7oHn");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var VsanClusterOverviewComponent = /*@__PURE__*/function () {
        var VsanClusterOverviewComponent = /*#__PURE__*/function () {
          function VsanClusterOverviewComponent(dataService, vsanGeneralConfigService, ceipSvc, taskService, quickstartStatusNotification, upgradeService) {
            var _this = this;

            _classCallCheck(this, VsanClusterOverviewComponent);

            this.dataService = dataService;
            this.vsanGeneralConfigService = vsanGeneralConfigService;
            this.ceipSvc = ceipSvc;
            this.taskService = taskService;
            this.quickstartStatusNotification = quickstartStatusNotification;
            this.upgradeService = upgradeService; // cards

            this.CAPACITY_CARD = "capacityService";
            this.HEALTH_CARD = "healthSummaryService";
            this.CONFIGURATION_CARD = "configurationService";
            this.RESYNCING_OBJECTS_CARD = "resyncingObjectService";
            this.editClusterPermission = false;
            this.configureStoragePermission = false;
            this.isVsanUpgradeVisible = false;
            this.showCards = true;
            this.errorMessages = [];

            this.getViewCards = function () {
              var result = new Map();
              result.set(_this.CAPACITY_CARD, new _component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["DragCardPosition"](_component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["CardContainer"].LEFT, 0));
              result.set(_this.CONFIGURATION_CARD, new _component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["DragCardPosition"](_component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["CardContainer"].LEFT, 1));
              result.set(_this.HEALTH_CARD, new _component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["DragCardPosition"](_component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["CardContainer"].RIGHT, 0));
              result.set(_this.RESYNCING_OBJECTS_CARD, new _component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["DragCardPosition"](_component_drag_and_drop_drag_card_position__WEBPACK_IMPORTED_MODULE_2__["CardContainer"].RIGHT, 1));
              return result;
            };

            this.cardsView = new _component_drag_and_drop_card_view__WEBPACK_IMPORTED_MODULE_1__["CardView"](_component_drag_and_drop_card_view__WEBPACK_IMPORTED_MODULE_1__["CardName"].VSAN_HOME_CARD_VIEW, this.getViewCards);
          }

          _createClass(VsanClusterOverviewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.getVmCluster();

                      case 2:
                        this.clusterRef = _context.sent;

                        if (!this.showCards) {
                          _context.next = 6;
                          break;
                        }

                        _context.next = 6;
                        return this.refresh();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "getVmCluster",
            value: function getVmCluster() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var clusterId;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].repa) {
                          _context2.next = 7;
                          break;
                        }

                        _context2.next = 3;
                        return this.dataService.getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_6__["VirtualMachine"].cluster, _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject);

                      case 3:
                        clusterId = _context2.sent;
                        return _context2.abrupt("return", _service_client_dataservice_data_service_util__WEBPACK_IMPORTED_MODULE_7__["DataServiceUtil"].moIdToManagedObject(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_6__["ClusterComputeResource"].type, clusterId));

                      case 7:
                        _context2.next = 9;
                        return this.dataService.getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_6__["VirtualMachine"].cluster, _service_managed_object__WEBPACK_IMPORTED_MODULE_12__["ManagedObject"].contextObject);

                      case 9:
                        return _context2.abrupt("return", _context2.sent);

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "refresh",
            value: function refresh() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.reset();
                        _context3.next = 3;
                        return this.queryVsanGeneralConfig();

                      case 3:
                        if (this.vsanConfig) {
                          _context3.next = 6;
                          break;
                        }

                        this.errorMessages = [_util_vsan_util__WEBPACK_IMPORTED_MODULE_13__["VsanUiUtils"].getString("vsan.services.configuration.not.available")];
                        return _context3.abrupt("return");

                      case 6:
                        if (!this.isComputeOnlyCluster) {
                          this.fetchDisksUpgradeData();
                        }

                      case 7:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "handleError",
            value: function handleError(error) {
              this.errorMessages = [error];
            }
          }, {
            key: "fetchPrecheckUpgradeData",
            value: function fetchPrecheckUpgradeData() {
              var _this2 = this;

              this.upgradeService.getUpgradeStatus(this.clusterRef).then(function (upgradeStatus) {
                // Create a new instance to trigger the upgrade component's refresh
                _this2.upgradeData = _this2.upgradeData.getNewInstance(upgradeStatus);
              })["catch"](function (e) {
                return _this2.errorMessages.push(e);
              });
            }
          }, {
            key: "vsanUpgradeComplete",
            value: function vsanUpgradeComplete() {
              this.isVsanUpgradeVisible = true;
              this.fetchDisksUpgradeData();
            }
          }, {
            key: "fetchDisksUpgradeData",
            value: function fetchDisksUpgradeData() {
              var _this3 = this;

              this.upgradeData = null;
              this.upgradeService.getUpgradeData(this.clusterRef).then(function (data) {
                return _this3.upgradeData = data;
              })["catch"](function (e) {
                return _this3.errorMessages.push(e);
              });
            }
          }, {
            key: "queryVsanGeneralConfig",
            value: function queryVsanGeneralConfig() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var generalConfig;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return this.vsanGeneralConfigService.getVsanGeneralConfigData(this.clusterRef);

                      case 3:
                        generalConfig = _context4.sent;
                        this.vsanConfig = generalConfig.cloneVsanConfigSpec();
                        this.vcCapabilityData = generalConfig.vcCapabilityData;
                        this.clusterCapabilityData = generalConfig.clusterCapabilityData;
                        this.clusterPermissions = generalConfig.clusterPermissions;
                        this.vcPermissions = generalConfig.vcPermissions;
                        this.editClusterPermission = this.clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_5__["Privileges"].EDIT_CLUSTER());
                        this.configureStoragePermission = this.clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_5__["Privileges"].CONFIG_STORAGE());
                        this.isComputeOnlyCluster = this.vsanConfig && this.vsanConfig.clusterMode === _generated_cluster_mode__WEBPACK_IMPORTED_MODULE_4__["ClusterMode"].COMPUTE;
                        _context4.next = 17;
                        break;

                      case 14:
                        _context4.prev = 14;
                        _context4.t0 = _context4["catch"](0);
                        this.errorMessages.push(_context4.t0);

                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this, [[0, 14]]);
              }));
            }
          }, {
            key: "showDetailsView",
            value: function showDetailsView(context) {
              this.detailViewContext = context;
              this.showCards = false;
            }
          }, {
            key: "reset",
            value: function reset() {
              this.errorMessages = [];
              this.upgradeData = null;
            }
          }]);

          return VsanClusterOverviewComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_10__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], VsanClusterOverviewComponent.prototype, "isLoading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_11__["RefreshHandler"], Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_9__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], VsanClusterOverviewComponent.prototype, "refresh", null);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], VsanClusterOverviewComponent.prototype, "handleError", null);
        return VsanClusterOverviewComponent;
      }();
      /***/

    },

    /***/
    "IJVO":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/overview/vsan-cluster-overview.module.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: VsanClusterOverviewModuleNgFactory */

    /***/
    function IJVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanClusterOverviewModuleNgFactory", function () {
        return VsanClusterOverviewModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vsan-cluster-overview.module */
      "t4MA");
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


      var _common_component_upgrade_upgrade_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade-action.component.ngfactory */
      "Eh4K");
      /* harmony import */


      var _vsan_cluster_overview_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./vsan-cluster-overview.component.ngfactory */
      "j2o5");
      /* harmony import */


      var _detail_view_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./detail-view-wrapper.component.ngfactory */
      "h9nA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-property-collector-client.service */
      "L7/z");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-vc-config-system.service */
      "yGTn");
      /* harmony import */


      var _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../common/service/client/vpxd/vpxd-model-factory.service */
      "VM2Y");
      /* harmony import */


      var _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-model-factory.service */
      "gswu");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../generated/datacenter-inventory-service */
      "uoMP");
      /* harmony import */


      var _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../generated/network-inventory-service */
      "Ot8i");
      /* harmony import */


      var _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../generated/compute-inventory-service */
      "+xjW");
      /* harmony import */


      var _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../generated/io-insight-inventory-service */
      "fhiF");
      /* harmony import */


      var _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../generated/vsan-inventory-helper */
      "2HhS");
      /* harmony import */


      var _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../generated/io-insight-service */
      "lBrK");
      /* harmony import */


      var _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../common/service/client/vsan/capability-system/vsan-capability.service */
      "jAET");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.service */
      "Tq4R");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker-intl.service */
      "rAFq");
      /* harmony import */


      var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../common/component/datetime-picker/localize-picker-labels */
      "EUIg");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time-picker.component */
      "4D9t");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */
      "bMPK");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */
      "UiI2");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../common/service/theme-listener.service */
      "AWEo");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../common/component/chart/capacity-bar-chart/bar-chart.service */
      "aiKe");
      /* harmony import */


      var _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ../common/util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _generated_vsan_iscsi_property_provider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../../generated/vsan-iscsi-property-provider */
      "i0iP");
      /* harmony import */


      var _common_service_client_vsan_vsan_file_service_system_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-file-service-system.service */
      "3lq/");
      /* harmony import */


      var _vspherejs_services_vsan_config_utils_vsan_config_spec_factory__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../../vspherejs-services/vsan-config-utils/vsan-config-spec.factory */
      "HMcI");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _generated_csd_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ../../generated/csd-service */
      "dwYa");
      /* harmony import */


      var _generated_reduced_capacity_messages_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../../generated/reduced-capacity-messages-service */
      "29uf");
      /* harmony import */


      var _common_service_client_vsan_vsan_cluster_health_system_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-cluster-health-system.service */
      "D+SO");
      /* harmony import */


      var _common_service_client_vsan_vsan_space_report_system_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-space-report-system.service */
      "sQkM");
      /* harmony import */


      var _common_service_client_vsan_vsan_space_report_system_client_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-space-report-system-client.service */
      "dv51");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_disk_management_system_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-vc-disk-management-system.service */
      "ROr8");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ../common/service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../common/component/capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _common_component_upgrade_upgrade_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade.service */
      "Ndfo");
      /* harmony import */


      var _generated_vsan_upgrade_property_provider__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ../../generated/vsan-upgrade-property-provider */
      "E9kw");
      /* harmony import */


      var _generated_vsan_upgrade_mutation_provider__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ../../generated/vsan-upgrade-mutation-provider */
      "h1nB");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ../../generated/disk-management-service */
      "a6dL");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ng-drag-drop/src/services/ng-drag-drop.service */
      "ZbGM");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_66__);
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ../common/component/general-settings/vsan-general-config.service */
      "b8qf");
      /* harmony import */


      var _generated_encryption_property_provider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ../../generated/encryption-property-provider */
      "xbxZ");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! ../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _generated_cluster_power_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ../../generated/cluster-power-service */
      "bbY6");
      /* harmony import */


      var _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! ../common/service/browser-storage.service */
      "mJDh");
      /* harmony import */


      var _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! ../../generated/capacity-management-service */
      "4YMb");
      /* harmony import */


      var _generated_advanced_options_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! ../../generated/advanced-options-service */
      "Bgik");
      /* harmony import */


      var _vspherejs_services_capacity_health_threshold_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! ../../vspherejs-services/capacity-health-threshold-service */
      "/Ynf");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! ../../generated/vsan-stretched-cluster-service */
      "bxEx");
      /* harmony import */


      var _common_service_client_vsan_vsan_vc_stretched_cluster_system_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-vc-stretched-cluster-system.service */
      "mUFw");
      /* harmony import */


      var _vspherejs_services_disk_data_service__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! ../../vspherejs-services/disk-data-service */
      "vs3Q");
      /* harmony import */


      var _vspherejs_services_shared_witness_helper__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! ../../vspherejs-services/shared-witness-helper */
      "JmYh");
      /* harmony import */


      var _generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! ../../generated/vsan-resyncing-components-provider */
      "b+8E");
      /* harmony import */


      var _common_service_client_vsan_vsan_object_system_service__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-object-system.service */
      "aP1i");
      /* harmony import */


      var _common_service_client_vsan_vsan_system_ex_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! ../common/service/client/vsan/vsan-system-ex.service */
      "kSRJ");
      /* harmony import */


      var _generated_pbm_data_provider__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! ../../generated/pbm-data-provider */
      "9L1J");
      /* harmony import */


      var _generated_vsan_iscsi_target_property_provider__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! ../../generated/vsan-iscsi-target-property-provider */
      "o7l6");
      /* harmony import */


      var _generated_vsan_file_service_config_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! ../../generated/vsan-file-service-config-service */
      "khfO");
      /* harmony import */


      var _generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! ../../generated/vsan-file-shares-service */
      "DiBh");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! ../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! ../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! ../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! ../common/component/action-button/action-button.module */
      "wQOa");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
      /*! ../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
      /*! ../common/component/cell/common-cells.module */
      "e724");
      /* harmony import */


      var _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
      /*! ../common/component/search/search.module */
      "v8iv");
      /* harmony import */


      var _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
      /*! ../common/component/inventory/inventory-browser.module */
      "jkFw");
      /* harmony import */


      var _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
      /*! ../common/component/datagrid/tree-datagrid.module */
      "6BUe");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
      /*! ng-pick-datetime/dialog/dialog.module */
      "jRYl");
      /* harmony import */


      var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/date-time.module */
      "KL2N");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/native-date-time.module */
      "QX+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(
      /*! ../common/component/datetime-picker/datetime-picker.module */
      "UaEa");
      /* harmony import */


      var _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(
      /*! ../common/component/popup-list/popup-list.module */
      "JCZN");
      /* harmony import */


      var _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(
      /*! ../common/component/navigation/vsan-breadcrumb.module */
      "U2P7");
      /* harmony import */


      var _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(
      /*! ../common/vsan-common.module */
      "uDMx");
      /* harmony import */


      var _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(
      /*! ../common/component/unavailable-view/unavailable-view.module */
      "YUlR");
      /* harmony import */


      var _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(
      /*! ../common/component/chart/chart.module */
      "1+Dr");
      /* harmony import */


      var _common_component_capacity_capacity_common_module__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(
      /*! ../common/component/capacity/capacity-common.module */
      "3USP");
      /* harmony import */


      var angular_resize_event__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(
      /*! angular-resize-event */
      "o+s5");
      /* harmony import */


      var _common_component_drag_and_drop_drag_and_drop_module__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(
      /*! ../common/component/drag-and-drop/drag-and-drop.module */
      "1yOm");
      /* harmony import */


      var _common_component_card_card_module__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(
      /*! ../common/component/card/card.module */
      "NzC8");
      /* harmony import */


      var _common_component_upgrade_upgrade_module__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade.module */
      "BDBr");
      /* harmony import */


      var _common_component_health_health_check_item_module__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(
      /*! ../common/component/health/health-check-item.module */
      "2Fdh");
      /* harmony import */


      var ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(
      /*! ng-drag-drop/src/ng-drag-drop.module */
      "xHUD");
      /* harmony import */


      var ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_115___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_115__);
      /* harmony import */


      var _common_component_configurations_configurations_module__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(
      /*! ../common/component/configurations/configurations.module */
      "3io1");
      /* harmony import */


      var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(
      /*! ng-pick-datetime/date-time/adapter/date-time-format.class */
      "EFU/");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */
      "vRnr");
      /* harmony import */


      var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(
      /*! ../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */
      "oRW+");
      /* harmony import */


      var _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(
      /*! ../common/component/chart/performance/perf-chart-dialog.component */
      "xuXY");
      /* harmony import */


      var _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(
      /*! ../common/component/chart/performance/set-threshold-dialog.component */
      "AYan");
      /* harmony import */


      var _common_component_upgrade_upgrade_action_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade-action.component */
      "+7Nn");
      /* harmony import */


      var _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(
      /*! ./vsan-cluster-overview.component */
      "HuoJ");
      /* harmony import */


      var _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(
      /*! ./detail-view-wrapper.component */
      "r/z2");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var VsanClusterOverviewModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["VsanClusterOverviewModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_lNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DeleteRangeConfirmDialogComponentNgFactory"], _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["PerfChartDialogComponentNgFactory"], _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SetThresholdDialogComponentNgFactory"], _common_component_upgrade_upgrade_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["UpgradeActionComponentNgFactory"], _vsan_cluster_overview_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["VsanClusterOverviewComponentNgFactory"], _detail_view_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["DetailViewWrapperComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_17__["WitnessCandidateInventoryService"], _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_17__["WitnessCandidateInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__["VpxdPropertyCollectorClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_20__["VsanVcClusterConfigSystem"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_21__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_24__["DatacenterInventoryService"], _generated_datacenter_inventory_service__WEBPACK_IMPORTED_MODULE_24__["DatacenterInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_21__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_25__["NetworkInventoryService"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_25__["NetworkInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_21__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_26__["ComputeInventoryService"], _generated_compute_inventory_service__WEBPACK_IMPORTED_MODULE_26__["ComputeInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_21__["VpxdModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_27__["IoInsightInventoryService"], _generated_io_insight_inventory_service__WEBPACK_IMPORTED_MODULE_27__["IoInsightInventoryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__["VpxdPropertyCollectorClient"], _common_service_client_vpxd_vpxd_model_factory_service__WEBPACK_IMPORTED_MODULE_21__["VpxdModelFactory"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"], _generated_io_insight_service__WEBPACK_IMPORTED_MODULE_29__["IoInsightService"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__["VsanCapabilityService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_33__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_34__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_35__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_36__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_36__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_37__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_38__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_37__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_40__["HighchartsThemeService"], _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_40__["HighchartsThemeService"], [_common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_41__["ThemeListenerService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_42__["ReferenceWatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_43__["BarChartService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_43__["BarChartService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_40__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_44__["HighchartsPropertiesService"], _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_44__["HighchartsPropertiesService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_40__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_45__["PerfOrchestratorService"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_45__["PerfOrchestratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_46__["VsanConfigService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_46__["VsanConfigService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _generated_network_inventory_service__WEBPACK_IMPORTED_MODULE_25__["NetworkInventoryService"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__["VsanCapabilityService"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_20__["VsanVcClusterConfigSystem"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_47__["VsanPerfPropertyProvider"], _generated_vsan_iscsi_property_provider__WEBPACK_IMPORTED_MODULE_48__["VsanIscsiPropertyProvider"], _common_service_client_vsan_vsan_file_service_system_service__WEBPACK_IMPORTED_MODULE_49__["VsanFileServiceSystem"], _common_service_client_vpxd_vpxd_property_collector_client_service__WEBPACK_IMPORTED_MODULE_19__["VpxdPropertyCollectorClient"], _vspherejs_services_vsan_config_utils_vsan_config_spec_factory__WEBPACK_IMPORTED_MODULE_50__["VsanConfigSpecFactory"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_51__["CapacityDataService"], _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_51__["CapacityDataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"], _generated_csd_service__WEBPACK_IMPORTED_MODULE_52__["CsdService"], _generated_reduced_capacity_messages_service__WEBPACK_IMPORTED_MODULE_53__["ReducedCapacityMessagesService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"], _common_service_client_vsan_vsan_cluster_health_system_service__WEBPACK_IMPORTED_MODULE_54__["VsanClusterHealthSystem"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__["VsanCapabilityService"], _common_service_client_vsan_vsan_space_report_system_service__WEBPACK_IMPORTED_MODULE_55__["VsanSpaceReportSystem"], _common_service_client_vsan_vsan_space_report_system_client_service__WEBPACK_IMPORTED_MODULE_56__["VsanSpaceReportSystemClient"], _common_service_client_vsan_vsan_vc_disk_management_system_service__WEBPACK_IMPORTED_MODULE_57__["VsanVcDiskManagementSystem"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_46__["VsanConfigService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_58__["SpaceEfficiencyService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_58__["SpaceEfficiencyService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_59__["VsanCapacityService"], _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_59__["VsanCapacityService"], [_generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_51__["CapacityDataService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_43__["BarChartService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_58__["SpaceEfficiencyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_upgrade_upgrade_service__WEBPACK_IMPORTED_MODULE_62__["UpgradeService"], _common_component_upgrade_upgrade_service__WEBPACK_IMPORTED_MODULE_62__["UpgradeService"], [_generated_vsan_upgrade_property_provider__WEBPACK_IMPORTED_MODULE_63__["VsanUpgradePropertyProvider"], _generated_vsan_upgrade_mutation_provider__WEBPACK_IMPORTED_MODULE_64__["VsanUpgradeMutationProvider"], _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_65__["DiskManagementService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_66__["NgDragDropService"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_66__["NgDragDropService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_67__["VsanCapabilityProvider"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_67__["VsanCapabilityProvider"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__["VsanCapabilityService"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_68__["VsanGeneralConfigService"], _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_68__["VsanGeneralConfigService"], [_generated_encryption_property_provider__WEBPACK_IMPORTED_MODULE_69__["EncryptionPropertyProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_70__["PermissionService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_46__["VsanConfigService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_67__["VsanCapabilityProvider"], _generated_cluster_power_service__WEBPACK_IMPORTED_MODULE_71__["ClusterPowerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_72__["PersistentStorageService"], _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_72__["PersistentStorageService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_73__["CapacityManagementService"], _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_73__["CapacityManagementService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_51__["CapacityDataService"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"], _generated_advanced_options_service__WEBPACK_IMPORTED_MODULE_74__["AdvancedOptionsService"], _vspherejs_services_capacity_health_threshold_service__WEBPACK_IMPORTED_MODULE_75__["CapacityHealthThresholdService"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_20__["VsanVcClusterConfigSystem"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_76__["VsanStretchedClusterService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_76__["VsanStretchedClusterService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _common_service_client_vsan_vsan_vc_stretched_cluster_system_service__WEBPACK_IMPORTED_MODULE_77__["VsanVcStretchedClusterSystem"], _common_service_client_vsan_vsan_vc_disk_management_system_service__WEBPACK_IMPORTED_MODULE_57__["VsanVcDiskManagementSystem"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"], _generated_vsan_inventory_helper__WEBPACK_IMPORTED_MODULE_28__["VsanInventoryHelper"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__["VsanCapabilityService"], _vspherejs_services_disk_data_service__WEBPACK_IMPORTED_MODULE_78__["DiskDataService"], _vspherejs_services_shared_witness_helper__WEBPACK_IMPORTED_MODULE_79__["SharedWitnessHelper"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_80__["VsanResyncingComponentsProvider"], _generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_80__["VsanResyncingComponentsProvider"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _common_service_client_vsan_vsan_vc_config_system_service__WEBPACK_IMPORTED_MODULE_20__["VsanVcClusterConfigSystem"], _common_service_client_vsan_vsan_model_factory_service__WEBPACK_IMPORTED_MODULE_22__["VsanModelFactory"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_23__["DataServiceClient"], _common_service_client_vsan_capability_system_vsan_capability_service__WEBPACK_IMPORTED_MODULE_30__["VsanCapabilityService"], _common_service_client_vsan_vsan_object_system_service__WEBPACK_IMPORTED_MODULE_81__["VsanObjectSystem"], _common_service_client_vsan_vsan_system_ex_service__WEBPACK_IMPORTED_MODULE_82__["VsanSystemEx"], _generated_pbm_data_provider__WEBPACK_IMPORTED_MODULE_83__["PbmDataProvider"], _common_service_client_vsan_vsan_vc_stretched_cluster_system_service__WEBPACK_IMPORTED_MODULE_77__["VsanVcStretchedClusterSystem"], _generated_vsan_iscsi_target_property_provider__WEBPACK_IMPORTED_MODULE_84__["VsanIscsiTargetPropertyProvider"], _generated_vsan_file_service_config_service__WEBPACK_IMPORTED_MODULE_85__["VsanFileServiceConfigService"], _generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_86__["VsanFileSharesService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_76__["VsanStretchedClusterService"], _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_65__["DiskManagementService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_87__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_88__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_88__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_89__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_89__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_90__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_90__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_91__["ActionButtonModule"], _common_component_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_91__["ActionButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_92__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_92__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_92__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_93__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_93__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_94__["CommonCellsModule"], _common_component_cell_common_cells_module__WEBPACK_IMPORTED_MODULE_94__["CommonCellsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_95__["SearchModule"], _common_component_search_search_module__WEBPACK_IMPORTED_MODULE_95__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_96__["InventoryBrowserModule"], _common_component_inventory_inventory_browser_module__WEBPACK_IMPORTED_MODULE_96__["InventoryBrowserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_97__["TreeDatagridModule"], _common_component_datagrid_tree_datagrid_module__WEBPACK_IMPORTED_MODULE_97__["TreeDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_98__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_98__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_31__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_99__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_99__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_100__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_100__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_101__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_101__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_101__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_101__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_102__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_102__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_102__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_102__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_103__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_103__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_104__["PopupListModule"], _common_component_popup_list_popup_list_module__WEBPACK_IMPORTED_MODULE_104__["PopupListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_105__["VsanBreadcrumbModule"], _common_component_navigation_vsan_breadcrumb_module__WEBPACK_IMPORTED_MODULE_105__["VsanBreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_106__["VsanCommonModule"], _common_vsan_common_module__WEBPACK_IMPORTED_MODULE_106__["VsanCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_107__["UnavailableViewModule"], _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_107__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_108__["VsanChartModule"], _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_108__["VsanChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_capacity_capacity_common_module__WEBPACK_IMPORTED_MODULE_109__["CapacityCommonModule"], _common_component_capacity_capacity_common_module__WEBPACK_IMPORTED_MODULE_109__["CapacityCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_resize_event__WEBPACK_IMPORTED_MODULE_110__["AngularResizedEventModule"], angular_resize_event__WEBPACK_IMPORTED_MODULE_110__["AngularResizedEventModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_drag_and_drop_drag_and_drop_module__WEBPACK_IMPORTED_MODULE_111__["DragAndDropModule"], _common_component_drag_and_drop_drag_and_drop_module__WEBPACK_IMPORTED_MODULE_111__["DragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_card_card_module__WEBPACK_IMPORTED_MODULE_112__["CardModule"], _common_component_card_card_module__WEBPACK_IMPORTED_MODULE_112__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_upgrade_upgrade_module__WEBPACK_IMPORTED_MODULE_113__["UpgradeModule"], _common_component_upgrade_upgrade_module__WEBPACK_IMPORTED_MODULE_113__["UpgradeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_health_health_check_item_module__WEBPACK_IMPORTED_MODULE_114__["HealthCheckItemModule"], _common_component_health_health_check_item_module__WEBPACK_IMPORTED_MODULE_114__["HealthCheckItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_115__["NgDragDropModule"], ng_drag_drop_src_ng_drag_drop_module__WEBPACK_IMPORTED_MODULE_115__["NgDragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_configurations_configurations_module__WEBPACK_IMPORTED_MODULE_116__["ConfigurationsModule"], _common_component_configurations_configurations_module__WEBPACK_IMPORTED_MODULE_116__["ConfigurationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["VsanClusterOverviewModule"], _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["VsanClusterOverviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_87__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_117__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_103__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_102__["ROUTES"], function () {
          return [[{
            path: "addTimeRange",
            component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_118__["AddTimeRangeDialogComponent"]
          }, {
            path: "deleteTimeRange",
            component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_119__["DeleteRangeConfirmDialogComponent"]
          }], [{
            path: "expandChart",
            component: _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_120__["PerfChartDialogComponent"]
          }, {
            path: "setThreshold",
            component: _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_121__["SetThresholdDialogComponent"]
          }], [{
            path: "upgrade",
            component: _common_component_upgrade_upgrade_action_component__WEBPACK_IMPORTED_MODULE_122__["UpgradeActionComponent"]
          }], [{
            path: "",
            component: _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_123__["VsanClusterOverviewComponent"]
          }, {
            path: "details",
            component: _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_124__["DetailViewWrapperComponent"],
            children: [{
              path: "capacity",
              loadChildren: _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"],
              outlet: "details"
            }, {
              path: "health",
              loadChildren: _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["ɵ1"],
              outlet: "details"
            }, {
              path: "services",
              loadChildren: _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["ɵ2"],
              outlet: "details"
            }, {
              path: "faultDomains",
              loadChildren: _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["ɵ3"],
              outlet: "details"
            }, {
              path: "resyncingComponents",
              loadChildren: _vsan_cluster_overview_module__WEBPACK_IMPORTED_MODULE_1__["ɵ4"],
              outlet: "details"
            }]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "Q/4x":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/overview/configurations-card.scss.shim.ngstyle.js ***!
      \************************************************************************/

    /*! exports provided: styles */

    /***/
    function Q4x(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9jb25maWd1cmF0aW9ucy1jYXJkLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQWNIO0FFK0JHO0VBQ0csZ0NBQUE7QUY3Qk47QUUrQkc7O0VBR0csZ0NBQUE7QUY5Qk47QUVnQ0c7RUFDRyw4QkFBQTtBRjlCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vb3ZlcnZpZXcvY29uZmlndXJhdGlvbnMtY2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgYXV0bztcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCk7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "UzY/":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/overview/vsan-cluster-overview.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function UzY(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy92c2FuLWNsdXN0ZXItb3ZlcnZpZXcuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0FBY0g7QUUrQkc7RUFDRyxnQ0FBQTtBRjdCTjtBRStCRzs7RUFHRyxnQ0FBQTtBRjlCTjtBRWdDRztFQUNHLDhCQUFBO0FGOUJOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9vdmVydmlldy92c2FuLWNsdXN0ZXItb3ZlcnZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZygpO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "WKp+":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/overview/resyncing-data-card.scss.shim.ngstyle.js ***!
      \************************************************************************/

    /*! exports provided: styles */

    /***/
    function WKp(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n}\n.card-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .card-block[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9yZXN5bmNpbmctZGF0YS1jYXJkLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQWNIO0FFK0JHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vb3ZlcnZpZXcvcmVzeW5jaW5nLWRhdGEtY2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbn1cblxuLmNhcmQtYmxvY2sge1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "YJBw":
    /*!************************************************!*\
      !*** ./src/app/generated/vsan-health-check.ts ***!
      \************************************************/

    /*! exports provided: VsanHealthCheck */

    /***/
    function YJBw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanHealthCheck", function () {
        return VsanHealthCheck;
      });

      var VsanHealthCheck;

      (function (VsanHealthCheck) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (perspective, healthGroup, healthTestId, healthTest, healthCheckLabel, status, isHardwareCheck) {
          return {
            perspective: perspective,
            healthGroup: healthGroup,
            healthTestId: healthTestId,
            healthTest: healthTest,
            healthCheckLabel: healthCheckLabel,
            status: status,
            isHardwareCheck: isHardwareCheck
          };
        };

        VsanHealthCheck.Factory = Factory;
      })(VsanHealthCheck || (VsanHealthCheck = {})); //module VsanHealthCheck

      /***/

    },

    /***/
    "Ysea":
    /*!**********************************************************!*\
      !*** ./src/app/vsan/overview/capacity-card.component.ts ***!
      \**********************************************************/

    /*! exports provided: CapacityCardComponent */

    /***/
    function Ysea(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacityCardComponent", function () {
        return CapacityCardComponent;
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


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./vsan-overview-details-view */
      "vnvA");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var CapacityCardComponent = /*@__PURE__*/function () {
        var CapacityCardComponent = /*#__PURE__*/function () {
          function CapacityCardComponent(capacityService, capabilitiesService, navigationService) {
            _classCallCheck(this, CapacityCardComponent);

            this.capacityService = capacityService;
            this.capabilitiesService = capabilitiesService;
            this.navigationService = navigationService;
            this.onShowDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(CapacityCardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return this.refresh();

                      case 2:
                        this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].getString("vsan.screenReader.message.page.loaded", _util_vsan_util__WEBPACK_IMPORTED_MODULE_8__["VsanUiUtils"].getString("vsan.monitor.capacity.overview.title"));

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            }
          }, {
            key: "refresh",
            value: function refresh() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _yield$Promise$all, _yield$Promise$all2;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return Promise.all([this.capacityService.getCapacityDataPerDatastore(this.clusterRef, false), this.capabilitiesService.getClusterCapabilityData(this.clusterRef)]);

                      case 2:
                        _yield$Promise$all = _context6.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        this.datastoresCapacityData = _yield$Promise$all2[0];
                        this.clusterCapabilityData = _yield$Promise$all2[1];
                        this.capacityData = this.datastoresCapacityData.get(_generated_datastore_type__WEBPACK_IMPORTED_MODULE_2__["DatastoreType"].VSAN);

                      case 7:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }
          }, {
            key: "showDetail",
            value: function showDetail() {
              var context = {
                view: _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_9__["VsanOverviewDetailsView"].CAPACITY
              };
              this.onShowDetails.emit(context);
            }
          }]);

          return CapacityCardComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CapacityCardComponent.prototype, "loading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CapacityCardComponent.prototype, "error", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_7__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CapacityCardComponent.prototype, "srOnlyMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_6__["RefreshHandler"], Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_4__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], CapacityCardComponent.prototype, "refresh", null);
        return CapacityCardComponent;
      }();
      /***/

    },

    /***/
    "ZP7e":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/overview/capacity-card.component.ngfactory.js ***!
      \********************************************************************/

    /*! exports provided: RenderType_CapacityCardComponent, View_CapacityCardComponent_0, View_CapacityCardComponent_Host_0, CapacityCardComponentNgFactory */

    /***/
    function ZP7e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CapacityCardComponent", function () {
        return RenderType_CapacityCardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CapacityCardComponent_0", function () {
        return View_CapacityCardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CapacityCardComponent_Host_0", function () {
        return View_CapacityCardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacityCardComponentNgFactory", function () {
        return CapacityCardComponentNgFactory;
      });
      /* harmony import */


      var _capacity_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./capacity-card.scss.shim.ngstyle */
      "1Lgs");
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


      var _common_component_capacity_capacity_overview_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/component/capacity/capacity-overview-chart.component.ngfactory */
      "hiFv");
      /* harmony import */


      var _common_component_capacity_capacity_overview_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/component/capacity/capacity-overview-chart.component */
      "GcIc");
      /* harmony import */


      var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/component/capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/component/chart/highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _capacity_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./capacity-card.component */
      "Ysea");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CapacityCardComponent = [_capacity_card_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CapacityCardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CapacityCardComponent,
        data: {}
      });

      function View_CapacityCardComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "services-validation"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.error;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_CapacityCardComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-md central-spinner"]], null, null, null, null, null))], null, null);
      }

      function View_CapacityCardComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-capacity-overview-chart", [], null, null, null, _common_component_capacity_capacity_overview_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CapacityOverviewChartComponent_0"], _common_component_capacity_capacity_overview_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CapacityOverviewChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _common_component_capacity_capacity_overview_chart_component__WEBPACK_IMPORTED_MODULE_5__["CapacityOverviewChartComponent"], [_common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_6__["VsanCapacityService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_7__["SpaceEfficiencyService"], _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_8__["HighchartsThemeService"]], {
          capacityData: [0, "capacityData"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.capacityData;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_CapacityCardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CapacityCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 21, "div", [["class", "card"], ["id", "capacity-overview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "h4", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CapacityCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CapacityCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "button", [["class", "btn btn-sm btn-link"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showDetail() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.error;

          _ck(_v, 3, 0, currVal_0);

          var currVal_2 = _co.loading;

          _ck(_v, 14, 0, currVal_2);

          var currVal_3 = !_co.loading;

          _ck(_v, 17, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.capacity.overview.title"));

          _ck(_v, 8, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.home.capacity.btn.details.label"));

          _ck(_v, 23, 0, currVal_4);
        });
      }

      function View_CapacityCardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "capacity-card", [], null, null, null, View_CapacityCardComponent_0, RenderType_CapacityCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _capacity_card_component__WEBPACK_IMPORTED_MODULE_11__["CapacityCardComponent"], [_common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_6__["VsanCapacityService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_12__["VsanCapabilityProvider"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_13__["NavigationService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CapacityCardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("capacity-card", _capacity_card_component__WEBPACK_IMPORTED_MODULE_11__["CapacityCardComponent"], View_CapacityCardComponent_Host_0, {
        clusterRef: "clusterRef"
      }, {
        onShowDetails: "onShowDetails"
      }, []);
      /***/

    },

    /***/
    "ftT8":
    /*!********************************************************!*\
      !*** ./src/app/vsan/overview/health-card.component.ts ***!
      \********************************************************/

    /*! exports provided: HealthCardComponent */

    /***/
    function ftT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HealthCardComponent", function () {
        return HealthCardComponent;
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


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/vsan-health-status */
      "bur7");
      /* harmony import */


      var _service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/flow/error-handler.decorator */
      "7oHn");
      /* harmony import */


      var _generated_vsan_health_check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/vsan-health-check */
      "YJBw");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./vsan-overview-details-view */
      "vnvA");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var HealthCardComponent = /*@__PURE__*/function () {
        var HealthCardComponent = /*#__PURE__*/function () {
          function HealthCardComponent(healthProvider) {
            _classCallCheck(this, HealthCardComponent);

            this.healthProvider = healthProvider;
            this.onShowDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(HealthCardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.refresh();

                      case 2:
                        this.srOnlyMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].getString("vsan.screenReader.message.page.loaded", _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].getString("vsan.monitor.capacity.overview.title"));

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }
          }, {
            key: "refresh",
            value: function refresh() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var _this4 = this;

                var healthData;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.healthProvider.getVsanHealthSummaryFromCache(this.clusterRef);

                      case 2:
                        healthData = _context8.sent;
                        this.healthTestData = [];
                        healthData.testsData.filter(function (test) {
                          return _this4.isUnhealthyItem(test);
                        }).filter(function (test) {
                          return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].isEmpty(test.subtests);
                        }).forEach(function (test) {
                          var _this4$healthTestData;

                          var subtests = test.subtests.filter(function (subtest) {
                            return _this4.isUnhealthyItem(subtest);
                          }).map(function (subtest) {
                            return _this4.createVsahHealthCheck(test, subtest);
                          });

                          (_this4$healthTestData = _this4.healthTestData).push.apply(_this4$healthTestData, _toConsumableArray(subtests));
                        });

                      case 5:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }
          }, {
            key: "showHealthView",
            value: function showHealthView(healthContext) {
              var context = {
                view: _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_11__["VsanOverviewDetailsView"].HEALTH,
                content: healthContext
              };
              this.onShowDetails.emit(context);
            }
          }, {
            key: "createVsahHealthCheck",
            value: function createVsahHealthCheck(test, subtest) {
              return _generated_vsan_health_check__WEBPACK_IMPORTED_MODULE_7__["VsanHealthCheck"].Factory.create("defaultView", test.testName, subtest.testId, subtest.testName, subtest.testName, subtest.status, false);
            }
          }, {
            key: "isUnhealthyItem",
            value: function isUnhealthyItem(item) {
              return item.status === _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_5__["VsanHealthStatus"].red || item.status === _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_5__["VsanHealthStatus"].yellow;
            }
          }, {
            key: "handleError",
            value: function handleError(error) {
              this.error = error;
            }
          }]);

          return HealthCardComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], HealthCardComponent.prototype, "loading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], HealthCardComponent.prototype, "error", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_9__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], HealthCardComponent.prototype, "srOnlyMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_4__["RefreshHandler"], Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], HealthCardComponent.prototype, "refresh", null);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HealthCardComponent.prototype, "handleError", null);
        return HealthCardComponent;
      }();
      /***/

    },

    /***/
    "h9nA":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/overview/detail-view-wrapper.component.ngfactory.js ***!
      \**************************************************************************/

    /*! exports provided: RenderType_DetailViewWrapperComponent, View_DetailViewWrapperComponent_0, View_DetailViewWrapperComponent_Host_0, DetailViewWrapperComponentNgFactory */

    /***/
    function h9nA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DetailViewWrapperComponent", function () {
        return RenderType_DetailViewWrapperComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DetailViewWrapperComponent_0", function () {
        return View_DetailViewWrapperComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DetailViewWrapperComponent_Host_0", function () {
        return View_DetailViewWrapperComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailViewWrapperComponentNgFactory", function () {
        return DetailViewWrapperComponentNgFactory;
      });
      /* harmony import */


      var _detail_view_wrapper_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./detail-view-wrapper.scss.shim.ngstyle */
      "9zv6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./detail-view-wrapper.component */
      "r/z2");
      /* harmony import */


      var _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/service/browser-storage.service */
      "mJDh");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DetailViewWrapperComponent = [_detail_view_wrapper_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DetailViewWrapperComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DetailViewWrapperComponent,
        data: {}
      });

      function View_DetailViewWrapperComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "action-btn-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "button", [["class", "btn btn-sm btn-link no-spacing"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.backToOverview() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 1, "router-outlet", [["name", "details"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, "details"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          _ck(_v, 10, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.home.overview.btn.back.label"));

          _ck(_v, 5, 0, currVal_0);
        });
      }

      function View_DetailViewWrapperComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "detail-view-wrapper", [], null, null, null, View_DetailViewWrapperComponent_0, RenderType_DetailViewWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["DetailViewWrapperComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_5__["PersistentStorageService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var DetailViewWrapperComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("detail-view-wrapper", _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["DetailViewWrapperComponent"], View_DetailViewWrapperComponent_Host_0, {
        clusterRef: "clusterRef",
        context: "context"
      }, {}, []);
      /***/

    },

    /***/
    "j04M":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/overview/health-card.scss.shim.ngstyle.js ***!
      \****************************************************************/

    /*! exports provided: styles */

    /***/
    function j04M(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: row;\n}\n.card-block[_ngcontent-%COMP%] {\n  min-height: 3.6rem;\n}\n.card-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .card-block[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9vdmVydmlldy9oZWFsdGgtY2FyZC5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEtBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVlIO0FBVEE7RUFDRyxrQkFUdUI7QUFxQjFCO0FFMEJHO0VBQ0csZ0NBQUE7QUZ4Qk47QUUwQkc7O0VBR0csZ0NBQUE7QUZ6Qk47QUUyQkc7RUFDRyw4QkFBQTtBRnpCTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vb3ZlcnZpZXcvaGVhbHRoLWNhcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kY2FyZC1jb250ZW50LW1pbi1oZWlnaHQ6IDMuNnJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNhcmQtYmxvY2sge1xuICAgbWluLWhlaWdodDogJGNhcmQtY29udGVudC1taW4taGVpZ2h0O1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "j2o5":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/overview/vsan-cluster-overview.component.ngfactory.js ***!
      \****************************************************************************/

    /*! exports provided: RenderType_VsanClusterOverviewComponent, View_VsanClusterOverviewComponent_0, View_VsanClusterOverviewComponent_Host_0, VsanClusterOverviewComponentNgFactory */

    /***/
    function j2o5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_VsanClusterOverviewComponent", function () {
        return RenderType_VsanClusterOverviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VsanClusterOverviewComponent_0", function () {
        return View_VsanClusterOverviewComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VsanClusterOverviewComponent_Host_0", function () {
        return View_VsanClusterOverviewComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanClusterOverviewComponentNgFactory", function () {
        return VsanClusterOverviewComponentNgFactory;
      });
      /* harmony import */


      var _vsan_cluster_overview_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vsan-cluster-overview.scss.shim.ngstyle */
      "UzY/");
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


      var _common_component_upgrade_upgrade_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade.component.ngfactory */
      "hH9Q");
      /* harmony import */


      var _common_component_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade.component */
      "RncG");
      /* harmony import */


      var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/service/client/dataservice/data-service.service */
      "QIo8");
      /* harmony import */


      var _common_component_upgrade_upgrade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/component/upgrade/upgrade.service */
      "Ndfo");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _common_component_drag_and_drop_drag_and_drop_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/component/drag-and-drop/drag-and-drop.component.ngfactory */
      "ZAON");
      /* harmony import */


      var _common_component_drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/component/drag-and-drop/drag-and-drop.component */
      "XtPu");
      /* harmony import */


      var _detail_view_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./detail-view-wrapper.component.ngfactory */
      "h9nA");
      /* harmony import */


      var _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./detail-view-wrapper.component */
      "r/z2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/service/browser-storage.service */
      "mJDh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _capacity_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./capacity-card.component.ngfactory */
      "ZP7e");
      /* harmony import */


      var _capacity_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./capacity-card.component */
      "Ysea");
      /* harmony import */


      var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/component/capacity/capacity.service */
      "RmO3");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _configurations_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./configurations-card.component.ngfactory */
      "4KNf");
      /* harmony import */


      var _configurations_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./configurations-card.component */
      "pMUE");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../common/component/general-settings/vsan-general-config.service */
      "b8qf");
      /* harmony import */


      var _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../generated/capacity-management-service */
      "4YMb");
      /* harmony import */


      var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../generated/capacity-data-service */
      "0wU0");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../generated/vsan-stretched-cluster-service */
      "bxEx");
      /* harmony import */


      var _resyncing_data_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./resyncing-data-card.component.ngfactory */
      "6CTa");
      /* harmony import */


      var _resyncing_data_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./resyncing-data-card.component */
      "jW9d");
      /* harmony import */


      var _generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../generated/vsan-resyncing-components-provider */
      "b+8E");
      /* harmony import */


      var _health_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./health-card.component.ngfactory */
      "3+6m");
      /* harmony import */


      var _health_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./health-card.component */
      "ftT8");
      /* harmony import */


      var _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../generated/vsan-health-property-provider */
      "6s13");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../common/directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _common_component_drag_and_drop_draggable_card_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../common/component/drag-and-drop/draggable-card.directive */
      "IbbQ");
      /* harmony import */


      var _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./vsan-cluster-overview.component */
      "HuoJ");
      /* harmony import */


      var _generated_ceip_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../../generated/ceip-service */
      "eoXN");
      /* harmony import */


      var _hci_status_quickstart_notification_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../hci/status/quickstart-notification.service */
      "eTKc");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_VsanClusterOverviewComponent = [_vsan_cluster_overview_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_VsanClusterOverviewComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_VsanClusterOverviewComponent,
        data: {}
      });

      function View_VsanClusterOverviewComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner central-spinner"], ["id", "loading-indicator"]], null, null, null, null, null))], null, null);
      }

      function View_VsanClusterOverviewComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "services-validation"]], null, [[null, "alertsChange"], [null, "onClosed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.errorMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onClosed" === en) {
            var pd_1 = (_co.errorMessages = []) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alerts: [0, "alerts"],
          allowClose: [1, "allowClose"]
        }, {
          onClosed: "onClosed",
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessages;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_VsanClusterOverviewComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-upgrade", [], [[4, "display", null]], [[null, "precheckComplete"], [null, "upgradeComplete"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("precheckComplete" === en) {
            var pd_0 = _co.fetchPrecheckUpgradeData() !== false;
            ad = pd_0 && ad;
          }

          if ("upgradeComplete" === en) {
            var pd_1 = _co.vsanUpgradeComplete() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_upgrade_upgrade_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_UpgradeComponent_0"], _common_component_upgrade_upgrade_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_UpgradeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_5__["UpgradeComponent"], [_common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceClient"], _common_component_upgrade_upgrade_service__WEBPACK_IMPORTED_MODULE_7__["UpgradeService"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_8__["TaskMonitorService"]], {
          hasUpgradePermission: [0, "hasUpgradePermission"],
          showCompatibilityWarning: [1, "showCompatibilityWarning"],
          visibleWhenUpToDate: [2, "visibleWhenUpToDate"],
          upgradeData: [3, "upgradeData"]
        }, {
          upgradeComplete: "upgradeComplete",
          precheckComplete: "precheckComplete"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.editClusterPermission && _co.configureStoragePermission;
          var currVal_2 = true;
          var currVal_3 = _co.isVsanUpgradeVisible;
          var currVal_4 = _co.upgradeData;

          _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).display;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_VsanClusterOverviewComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-drag-and-drop", [], null, null, null, _common_component_drag_and_drop_drag_and_drop_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_DragAndDropComponent_0"], _common_component_drag_and_drop_drag_and_drop_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_DragAndDropComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_10__["DragAndDropComponent"], [], {
          view: [0, "view"],
          cardTemplates: [1, "cardTemplates"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.cardsView;
          var currVal_1 = _co.serviceTemplates;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_VsanClusterOverviewComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "detail-view-wrapper", [], null, null, null, _detail_view_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DetailViewWrapperComponent_0"], _detail_view_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DetailViewWrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["DetailViewWrapperComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_14__["PersistentStorageService"]], {
          clusterRef: [0, "clusterRef"],
          context: [1, "context"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;
          var currVal_1 = _co.detailViewContext;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_VsanClusterOverviewComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.upgradeData;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.showCards;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = !_co.showCards;

          _ck(_v, 10, 0, currVal_2);
        }, null);
      }

      function View_VsanClusterOverviewComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = (_co.vsanConfig == null ? null : _co.vsanConfig.isEnabled) || _co.isComputeOnlyCluster;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_VsanClusterOverviewComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "capacity-card", [], null, [[null, "onShowDetails"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onShowDetails" === en) {
            var pd_0 = _co.showDetailsView($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _capacity_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_CapacityCardComponent_0"], _capacity_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_CapacityCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _capacity_card_component__WEBPACK_IMPORTED_MODULE_17__["CapacityCardComponent"], [_common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_18__["VsanCapacityService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_19__["VsanCapabilityProvider"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_20__["NavigationService"]], {
          clusterRef: [0, "clusterRef"]
        }, {
          onShowDetails: "onShowDetails"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_VsanClusterOverviewComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "configurations-card", [], null, [[null, "onShowDetails"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onShowDetails" === en) {
            var pd_0 = _co.showDetailsView($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _configurations_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ConfigurationsCardComponent_0"], _configurations_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ConfigurationsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _configurations_card_component__WEBPACK_IMPORTED_MODULE_22__["ConfigurationsCardComponent"], [_generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_23__["VsanConfigService"], _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_24__["VsanGeneralConfigService"], _generated_capacity_management_service__WEBPACK_IMPORTED_MODULE_25__["CapacityManagementService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_19__["VsanCapabilityProvider"], _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_26__["CapacityDataService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_27__["VsanStretchedClusterService"]], {
          clusterRef: [0, "clusterRef"],
          vcCapabilityData: [1, "vcCapabilityData"],
          clusterCapabilityData: [2, "clusterCapabilityData"],
          vcPermissions: [3, "vcPermissions"],
          clusterPermissions: [4, "clusterPermissions"]
        }, {
          onShowDetails: "onShowDetails"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;
          var currVal_1 = _co.vcCapabilityData;
          var currVal_2 = _co.clusterCapabilityData;
          var currVal_3 = _co.vcPermissions;
          var currVal_4 = _co.clusterPermissions;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_VsanClusterOverviewComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "resyncing-data-card", [], null, [[null, "onShowDetails"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onShowDetails" === en) {
            var pd_0 = _co.showDetailsView($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _resyncing_data_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_ResyncingDataCardComponent_0"], _resyncing_data_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_ResyncingDataCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _resyncing_data_card_component__WEBPACK_IMPORTED_MODULE_29__["ResyncingDataCardComponent"], [_generated_vsan_resyncing_components_provider__WEBPACK_IMPORTED_MODULE_30__["VsanResyncingComponentsProvider"]], {
          clusterRef: [0, "clusterRef"],
          isResyncETAImprovementSupported: [1, "isResyncETAImprovementSupported"]
        }, {
          onShowDetails: "onShowDetails"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;
          var currVal_1 = _co.clusterCapabilityData == null ? null : _co.clusterCapabilityData.isResyncETAImprovementSupported;

          _ck(_v, 2, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_VsanClusterOverviewComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "health-card", [], null, [[null, "onShowDetails"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onShowDetails" === en) {
            var pd_0 = _co.showDetailsView($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _health_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["View_HealthCardComponent_0"], _health_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["RenderType_HealthCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _health_card_component__WEBPACK_IMPORTED_MODULE_32__["HealthCardComponent"], [_generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_33__["VsanHealthPropertyProvider"]], {
          clusterRef: [0, "clusterRef"]
        }, {
          onShowDetails: "onShowDetails"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_VsanClusterOverviewComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_34__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          serviceTemplates: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "h5", [["vsan-auto-focus", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_35__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_35__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_36__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_8__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_35__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanClusterOverviewComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VsanClusterOverviewComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, [[1, 4]], 0, _common_component_drag_and_drop_draggable_card_directive__WEBPACK_IMPORTED_MODULE_37__["DraggableCardDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"],
          isVisible: [1, "isVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VsanClusterOverviewComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, [[1, 4]], 0, _common_component_drag_and_drop_draggable_card_directive__WEBPACK_IMPORTED_MODULE_37__["DraggableCardDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"],
          isVisible: [1, "isVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VsanClusterOverviewComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, [[1, 4]], 0, _common_component_drag_and_drop_draggable_card_directive__WEBPACK_IMPORTED_MODULE_37__["DraggableCardDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"],
          isVisible: [1, "isVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VsanClusterOverviewComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, [[1, 4]], 0, _common_component_drag_and_drop_draggable_card_directive__WEBPACK_IMPORTED_MODULE_37__["DraggableCardDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          name: [0, "name"],
          isVisible: [1, "isVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "";

          _ck(_v, 5, 0, currVal_0);

          var currVal_2 = _co.isLoading;

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _co.errorMessages.length > 0;

          _ck(_v, 13, 0, currVal_3);

          var currVal_4 = !_co.isLoading;

          _ck(_v, 16, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.CAPACITY_CARD, "");

          var currVal_6 = !_co.isComputeOnlyCluster;

          _ck(_v, 19, 0, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.CONFIGURATION_CARD, "");

          var currVal_8 = !_co.isComputeOnlyCluster;

          _ck(_v, 22, 0, currVal_7, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.RESYNCING_OBJECTS_CARD, "");

          var currVal_10 = !_co.isComputeOnlyCluster;

          _ck(_v, 25, 0, currVal_9, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.HEALTH_CARD, "");

          var currVal_12 = !_co.isComputeOnlyCluster;

          _ck(_v, 28, 0, currVal_11, currVal_12);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.home.overview.title"));

          _ck(_v, 6, 0, currVal_1);
        });
      }

      function View_VsanClusterOverviewComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-cluster-overview", [], null, null, null, View_VsanClusterOverviewComponent_0, RenderType_VsanClusterOverviewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_38__["VsanClusterOverviewComponent"], [_common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceClient"], _common_component_general_settings_vsan_general_config_service__WEBPACK_IMPORTED_MODULE_24__["VsanGeneralConfigService"], _generated_ceip_service__WEBPACK_IMPORTED_MODULE_39__["CeipService"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_8__["TaskMonitorService"], _hci_status_quickstart_notification_service__WEBPACK_IMPORTED_MODULE_40__["QuickstartNotificationService"], _common_component_upgrade_upgrade_service__WEBPACK_IMPORTED_MODULE_7__["UpgradeService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var VsanClusterOverviewComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-cluster-overview", _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_38__["VsanClusterOverviewComponent"], View_VsanClusterOverviewComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "jW9d":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/overview/resyncing-data-card.component.ts ***!
      \****************************************************************/

    /*! exports provided: ResyncingDataCardComponent */

    /***/
    function jW9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResyncingDataCardComponent", function () {
        return ResyncingDataCardComponent;
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


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _resync_resync_objects_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../resync/resync-objects-util */
      "fzMa");
      /* harmony import */


      var _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./vsan-overview-details-view */
      "vnvA");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ResyncingDataCardComponent = /*@__PURE__*/function () {
        var ResyncingDataCardComponent = /*#__PURE__*/function () {
          function ResyncingDataCardComponent(vsanResyncProvider) {
            _classCallCheck(this, ResyncingDataCardComponent);

            this.vsanResyncProvider = vsanResyncProvider;
            this.onShowDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(ResyncingDataCardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        this.refresh();

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            }
          }, {
            key: "showDetail",
            value: function showDetail() {
              var context = {
                view: _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_8__["VsanOverviewDetailsView"].RESYNCINGOBJECTS,
                content: this.clusterRef
              };
              this.onShowDetails.emit(context);
            }
          }, {
            key: "refresh",
            value: function refresh() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return this.fetch();

                      case 2:
                        this.resyncingComponents = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isUnset(this.resyncData.componentsToSync) ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.na.label") : this.resyncData.componentsToSync.toString();
                        this.bytesLeft = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isUnset(this.resyncData.bytesToResync) ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.na.label") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].formatFileSize(this.resyncData.bytesToResync); // show suspended resync status label if there are only suspended bytes to resync and the returned ETA is 0

                        this.suspendedResync = !!this.resyncData.suspendedBytesToResync && !this.resyncData.suspendedETA && !this.resyncData.activeBytesToResync && !this.resyncData.queuedBytesToResync;
                        this.totalResyncingEta = this.calculateTotalResyncingEta();
                        this.scheduledResyncing = _resync_resync_objects_util__WEBPACK_IMPORTED_MODULE_7__["ResyncObjectsUtil"].getScheduledResync(this.resyncData, this.isResyncETAImprovementSupported);

                      case 7:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }
          }, {
            key: "calculateTotalResyncingEta",
            value: function calculateTotalResyncingEta() {
              var _a, _b, _c;

              var hasTotalResyncObjects = !!((_a = this.resyncData) === null || _a === void 0 ? void 0 : _a.bytesToResync) && (!!((_b = this.resyncData) === null || _b === void 0 ? void 0 : _b.activeBytesToResync) || !!((_c = this.resyncData) === null || _c === void 0 ? void 0 : _c.queuedBytesToResync));
              return hasTotalResyncObjects ? 0 : this.resyncData.etaToResync;
            }
          }, {
            key: "fetch",
            value: function fetch() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!this.isResyncETAImprovementSupported) {
                          _context11.next = 6;
                          break;
                        }

                        _context11.next = 3;
                        return this.vsanResyncProvider.getResyncingDataForAutoRefresh(this.clusterRef);

                      case 3:
                        this.resyncData = _context11.sent;
                        _context11.next = 9;
                        break;

                      case 6:
                        _context11.next = 8;
                        return this.vsanResyncProvider.getResyncingData(this.clusterRef, 100);

                      case 8:
                        this.resyncData = _context11.sent;

                      case 9:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }
          }]);

          return ResyncingDataCardComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ResyncingDataCardComponent.prototype, "loading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ResyncingDataCardComponent.prototype, "error", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_2__["RefreshHandler"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], ResyncingDataCardComponent.prototype, "refresh", null);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], ResyncingDataCardComponent.prototype, "fetch", null);
        return ResyncingDataCardComponent;
      }();
      /***/

    },

    /***/
    "la9d":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/overview/fault-domains-summary.component.ngfactory.js ***!
      \****************************************************************************/

    /*! exports provided: RenderType_FaultDomainsSummaryComponent, View_FaultDomainsSummaryComponent_0, View_FaultDomainsSummaryComponent_Host_0, FaultDomainsSummaryComponentNgFactory */

    /***/
    function la9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FaultDomainsSummaryComponent", function () {
        return RenderType_FaultDomainsSummaryComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaultDomainsSummaryComponent_0", function () {
        return View_FaultDomainsSummaryComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaultDomainsSummaryComponent_Host_0", function () {
        return View_FaultDomainsSummaryComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainsSummaryComponentNgFactory", function () {
        return FaultDomainsSummaryComponentNgFactory;
      });
      /* harmony import */


      var _fault_domains_summary_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fault-domains-summary.scss.shim.ngstyle */
      "4xZu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_configurations_fault_domain_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/component/configurations/fault-domain-card.component.ngfactory */
      "z5k0");
      /* harmony import */


      var _common_component_configurations_fault_domain_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/component/configurations/fault-domain-card.component */
      "LHgQ");
      /* harmony import */


      var _common_component_configurations_standalone_host_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/component/configurations/standalone-host-card.component.ngfactory */
      "iAeN");
      /* harmony import */


      var _common_component_configurations_standalone_host_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/component/configurations/standalone-host-card.component */
      "z/Ed");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_configurations_fault_domain_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/component/configurations/fault-domain-config.component.ngfactory */
      "BJIt");
      /* harmony import */


      var _common_component_configurations_fault_domain_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/component/configurations/fault-domain-config.component */
      "Y7SI");
      /* harmony import */


      var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _fault_domains_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./fault-domains-summary.component */
      "/Ifq");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FaultDomainsSummaryComponent = [_fault_domains_summary_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FaultDomainsSummaryComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FaultDomainsSummaryComponent,
        data: {}
      });

      function View_FaultDomainsSummaryComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "fault-domain-card", [], null, null, null, _common_component_configurations_fault_domain_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_FaultDomainCardComponent_0"], _common_component_configurations_fault_domain_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_FaultDomainCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_configurations_fault_domain_card_component__WEBPACK_IMPORTED_MODULE_3__["FaultDomainCardComponent"], [], {
          isVsanMaxEnabled: [0, "isVsanMaxEnabled"],
          model: [1, "model"],
          storageConsumption: [2, "storageConsumption"],
          hostReservedCapacitySupported: [3, "hostReservedCapacitySupported"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isVsanMaxEnabled;
          var currVal_1 = _v.context.$implicit;
          var currVal_2 = _co.storageConsumption;
          var currVal_3 = _co.clusterCapabilityData == null ? null : _co.clusterCapabilityData.isHostReservedCapacitySupported;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_FaultDomainsSummaryComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.card.category.standalone", _co.standaloneModels == null ? null : _co.standaloneModels.length));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_FaultDomainsSummaryComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "standalone-host-card", [], null, null, null, _common_component_configurations_standalone_host_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_StandaloneHostCardComponent_0"], _common_component_configurations_standalone_host_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_StandaloneHostCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_configurations_standalone_host_card_component__WEBPACK_IMPORTED_MODULE_5__["StandaloneHostCardComponent"], [], {
          isVsanMaxEnabled: [0, "isVsanMaxEnabled"],
          host: [1, "host"],
          consumption: [2, "consumption"],
          hostReservedCapacitySupported: [3, "hostReservedCapacitySupported"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isVsanMaxEnabled;
          var currVal_1 = _v.context.$implicit;

          var currVal_2 = _co.getDomainConsumption(_v.context.$implicit);

          var currVal_3 = _co.clusterCapabilityData == null ? null : _co.clusterCapabilityData.isHostReservedCapacitySupported;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_FaultDomainsSummaryComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "fault-domains"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaultDomainsSummaryComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.standaloneModels;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_FaultDomainsSummaryComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "vsan-fault-domains-config", [], null, null, null, _common_component_configurations_fault_domain_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FaultDomainConfigComponent_0"], _common_component_configurations_fault_domain_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FaultDomainConfigComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _common_component_configurations_fault_domain_config_component__WEBPACK_IMPORTED_MODULE_9__["FaultDomainConfigComponent"], [_common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"]], {
          displayConfigureButtons: [0, "displayConfigureButtons"],
          witnessInfos: [1, "witnessInfos"],
          isSharedWitnessAllowed: [2, "isSharedWitnessAllowed"],
          isStretchedCluster: [3, "isStretchedCluster"],
          faultToleranceInfo: [4, "faultToleranceInfo"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "fault-domains"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaultDomainsSummaryComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaultDomainsSummaryComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaultDomainsSummaryComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = false;
          var currVal_1 = _co.witnessInfos;
          var currVal_2 = _co.isSharedWitnessAllowed;
          var currVal_3 = _co.isStretchedCluster;
          var currVal_4 = _co.faultToleranceInfo;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _co.faultDomainModels;

          _ck(_v, 9, 0, currVal_5);

          var currVal_6 = !_co.isStretchedCluster || _co.standaloneModels.length > 0;

          _ck(_v, 13, 0, currVal_6);

          var currVal_7 = !_co.isStretchedCluster || _co.standaloneModels.length > 0;

          _ck(_v, 16, 0, currVal_7);
        }, null);
      }

      function View_FaultDomainsSummaryComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "fault-domains-summary", [], null, null, null, View_FaultDomainsSummaryComponent_0, RenderType_FaultDomainsSummaryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _fault_domains_summary_component__WEBPACK_IMPORTED_MODULE_11__["FaultDomainsSummaryComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var FaultDomainsSummaryComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("fault-domains-summary", _fault_domains_summary_component__WEBPACK_IMPORTED_MODULE_11__["FaultDomainsSummaryComponent"], View_FaultDomainsSummaryComponent_Host_0, {
        isVsanMaxEnabled: "isVsanMaxEnabled",
        availableDomains: "availableDomains",
        storageConsumption: "storageConsumption",
        witnessInfos: "witnessInfos",
        clusterCapabilityData: "clusterCapabilityData",
        isStretchedCluster: "isStretchedCluster",
        isSharedWitnessAllowed: "isSharedWitnessAllowed"
      }, {}, []);
      /***/

    },

    /***/
    "on9/":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/overview/historical-health.component.ngfactory.js ***!
      \************************************************************************/

    /*! exports provided: RenderType_HistoricalHealthComponent, View_HistoricalHealthComponent_0, View_HistoricalHealthComponent_Host_0, HistoricalHealthComponentNgFactory */

    /***/
    function on9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HistoricalHealthComponent", function () {
        return RenderType_HistoricalHealthComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalHealthComponent_0", function () {
        return View_HistoricalHealthComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HistoricalHealthComponent_Host_0", function () {
        return View_HistoricalHealthComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalHealthComponentNgFactory", function () {
        return HistoricalHealthComponentNgFactory;
      });
      /* harmony import */


      var _historical_health_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./historical-health.scss.shim.ngstyle */
      "4S7D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _historical_health_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./historical-health.component */
      "wZyU");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HistoricalHealthComponent = [_historical_health_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HistoricalHealthComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HistoricalHealthComponent,
        data: {}
      });

      function View_HistoricalHealthComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "label", [["class", "clr-col-5"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          _ck(_v, 5, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).forAttr;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.services.historicalhealth.title"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.getStatusLabel();

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_HistoricalHealthComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "historical-health-configuration", [], null, null, null, View_HistoricalHealthComponent_0, RenderType_HistoricalHealthComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _historical_health_component__WEBPACK_IMPORTED_MODULE_4__["HistoricalHealthComponent"], [], null, null)], null, null);
      }

      var HistoricalHealthComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("historical-health-configuration", _historical_health_component__WEBPACK_IMPORTED_MODULE_4__["HistoricalHealthComponent"], View_HistoricalHealthComponent_Host_0, {
        config: "config"
      }, {}, []);
      /***/

    },

    /***/
    "pMUE":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/overview/configurations-card.component.ts ***!
      \****************************************************************/

    /*! exports provided: ConfigurationsCardComponent */

    /***/
    function pMUE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationsCardComponent", function () {
        return ConfigurationsCardComponent;
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


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _generated_vsan_service_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/vsan-service-status */
      "dSdE");
      /* harmony import */


      var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/global-refresh.service */
      "2U9H");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./vsan-overview-details-view */
      "vnvA");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @service/flow/error-handler.decorator */
      "7oHn");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ConfigurationsCardComponent = /*@__PURE__*/function () {
        var ConfigurationsCardComponent = /*#__PURE__*/function () {
          function ConfigurationsCardComponent(configService, vsanGeneralConfigService, capacityManagementService, capabilityProvider, capacityDataService, stretchedClusterService) {
            _classCallCheck(this, ConfigurationsCardComponent);

            this.configService = configService;
            this.vsanGeneralConfigService = vsanGeneralConfigService;
            this.capacityManagementService = capacityManagementService;
            this.capabilityProvider = capabilityProvider;
            this.capacityDataService = capacityDataService;
            this.stretchedClusterService = stretchedClusterService;
            this.onShowDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.witnessInfos = null; // will be null if stretched cluster/metadata only node is disabled

            this.errorMessages = [];
          }

          _createClass(ConfigurationsCardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.srOnlyMessage = "";
              this.hasEditClusterPermission = this.clusterPermissions.get(_generated_privileges__WEBPACK_IMPORTED_MODULE_10__["Privileges"].EDIT_CLUSTER());
              this.fetch();
            }
          }, {
            key: "fetch",
            value: function fetch() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        this.reset();
                        _context12.next = 3;
                        return Promise.all([this.queryVsanGeneralConfig(), this.queryPerfServiceConfig(), this.fetchStretchedClusterData(), this.fetchIsStretchedCluster()]);

                      case 3:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }
          }, {
            key: "queryVsanGeneralConfig",
            value: function queryVsanGeneralConfig() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var generalConfig;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return this.vsanGeneralConfigService.getVsanGeneralConfigData(this.clusterRef);

                      case 2:
                        generalConfig = _context13.sent;
                        this.vsanConfig = generalConfig.cloneVsanConfigSpec();

                      case 4:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            }
          }, {
            key: "queryPerfServiceConfig",
            value: function queryPerfServiceConfig() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                var result;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return this.configService.getPerformanceStatus(this.clusterRef);

                      case 2:
                        result = _context14.sent;
                        this.perfSvcStatus = result.status;
                        this.perfSvcConfig = result.details;
                        this.perfSvcEnabled = result.status === _generated_vsan_service_status__WEBPACK_IMPORTED_MODULE_6__["VsanServiceStatus"].ENABLED;

                      case 6:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            }
          }, {
            key: "fetchStretchedClusterData",
            value: function fetchStretchedClusterData() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return this.stretchedClusterService.getAvailableDomains(this.clusterRef);

                      case 2:
                        this.availableDomains = _context15.sent;

                      case 3:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            }
          }, {
            key: "fetchIsStretchedCluster",
            value: function fetchIsStretchedCluster() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return this.stretchedClusterService.getIsVsanStretchedCluster(this.clusterRef);

                      case 2:
                        this.isStretchedCluster = _context16.sent;

                      case 3:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            }
          }, {
            key: "queryIscsiTargetConfig",
            value: function queryIscsiTargetConfig() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var result;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        if (!this.iscsiSvcConfig) {
                          _context17.next = 2;
                          break;
                        }

                        return _context17.abrupt("return");

                      case 2:
                        _context17.next = 4;
                        return this.configService.getIscsiTargetStatus(this.clusterRef);

                      case 4:
                        result = _context17.sent;
                        this.iscsiSvcConfig = result.details;
                        this.iscsiSvcStatus = result.status;

                      case 7:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));
            }
          }, {
            key: "queryCapacityMgmtSettings",
            value: function queryCapacityMgmtSettings() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        _context18.next = 2;
                        return this.capacityManagementService.getCapacityManagementData(this.clusterRef);

                      case 2:
                        this.capacityManagementData = _context18.sent;

                      case 3:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));
            }
          }, {
            key: "queryStretchedClusterSettings",
            value: function queryStretchedClusterSettings() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                var hostsStorageData;
                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return this.capacityDataService.getStorageConsumptionByHost(this.clusterRef);

                      case 2:
                        hostsStorageData = _context19.sent;
                        this.storageConsumption = this.processHostsCapacity(hostsStorageData);
                        _context19.next = 6;
                        return this.stretchedClusterService.getWitnessHostData(this.clusterRef);

                      case 6:
                        this.witnessInfos = _context19.sent;

                        if (!this.vcCapabilityData.isSharedWitnessSupported) {
                          _context19.next = 11;
                          break;
                        }

                        _context19.next = 10;
                        return this.checkIfSharedWitnessIsAllowed();

                      case 10:
                        this.isSharedWitnessAllowed = _context19.sent;

                      case 11:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, this);
              }));
            }
          }, {
            key: "handleError",
            value: function handleError(error) {
              this.errorMessages.push(error);
            }
          }, {
            key: "checkIfSharedWitnessIsAllowed",
            value: function checkIfSharedWitnessIsAllowed() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                var allHostsCount, hostRef;
                return regeneratorRuntime.wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        if (this.isStretchedCluster) {
                          _context20.next = 2;
                          break;
                        }

                        return _context20.abrupt("return", false);

                      case 2:
                        allHostsCount = this.availableDomains.reduce(function (sum, item) {
                          return sum += item.isHost ? 1 : item.children.length;
                        }, 0);

                        if (!(allHostsCount === 2)) {
                          _context20.next = 8;
                          break;
                        }

                        hostRef = this.witnessInfos[0].witnessHost;
                        _context20.next = 7;
                        return this.capabilityProvider.getIsSharedWitnessSupported(hostRef);

                      case 7:
                        return _context20.abrupt("return", _context20.sent);

                      case 8:
                        return _context20.abrupt("return", false);

                      case 9:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20, this);
              }));
            }
          }, {
            key: "processHostsCapacity",
            value: function processHostsCapacity(hostsStorageData) {
              var storageConsumption = {};
              hostsStorageData.forEach(function (item) {
                if (item.hostRef) {
                  storageConsumption[_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].uid(item.hostRef)] = item;
                }
              });
              return storageConsumption;
            }
          }, {
            key: "reset",
            value: function reset() {
              this.errorMessages = [];
              this.perfSvcStatus = null;
              this.perfSvcConfig = null;
              this.iscsiSvcStatus = null;
              this.iscsiSvcConfig = null;
              this.availableDomains = [];
              this.capacityManagementData = null;
              this.isStretchedCluster = false;
            }
          }, {
            key: "showDetail",
            value: function showDetail() {
              var context = {
                view: this.faultDomainTabActive ? _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_9__["VsanOverviewDetailsView"].FAULTDOMAINS : _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_9__["VsanOverviewDetailsView"].SERVICES,
                content: this.clusterRef
              };
              this.onShowDetails.emit(context);
            }
          }]);

          return ConfigurationsCardComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_3__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfigurationsCardComponent.prototype, "loading", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfigurationsCardComponent.prototype, "error", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_5__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfigurationsCardComponent.prototype, "srOnlyMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_3__["LoadingIndicator"])({
          name: "fault-domains"
        }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfigurationsCardComponent.prototype, "loadingFaultDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([_service_global_refresh_service__WEBPACK_IMPORTED_MODULE_7__["RefreshHandler"], Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_8__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], ConfigurationsCardComponent.prototype, "fetch", null);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_8__["Loader"])({
          name: "fault-domains"
        }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], ConfigurationsCardComponent.prototype, "queryStretchedClusterSettings", null);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_11__["ErrorHandler"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ConfigurationsCardComponent.prototype, "handleError", null);
        return ConfigurationsCardComponent;
      }();
      /***/

    },

    /***/
    "r/z2":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/overview/detail-view-wrapper.component.ts ***!
      \****************************************************************/

    /*! exports provided: DetailViewWrapperComponent */

    /***/
    function rZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailViewWrapperComponent", function () {
        return DetailViewWrapperComponent;
      });
      /* harmony import */


      var _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vsan-overview-details-view */
      "vnvA");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../vsan-routes */
      "w9V1");
      /* harmony import */


      var _model_inline_view_context_key_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @model/inline-view-context-key.data */
      "jpQQ");

      var DetailViewWrapperComponent = /*#__PURE__*/function () {
        function DetailViewWrapperComponent(router, storageService) {
          _classCallCheck(this, DetailViewWrapperComponent);

          this.router = router;
          this.storageService = storageService;
          this.OVERVIEW_DETAILS_PATH = "details";
        }

        _createClass(DetailViewWrapperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.expandDetailsView();
          }
        }, {
          key: "backToOverview",
          value: function backToOverview() {
            this.router.navigate(["/" + _vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].CLUSTER_OVERVIEW_VIEW]);
          }
        }, {
          key: "expandDetailsView",
          value: function expandDetailsView() {
            var _a;

            switch ((_a = this.context) === null || _a === void 0 ? void 0 : _a.view) {
              case _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_0__["VsanOverviewDetailsView"].HEALTH:
                this.setHealthContext();
                this.navigateToDetails(_vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].HEALTH_VIEW);
                break;

              case _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_0__["VsanOverviewDetailsView"].CAPACITY:
                this.navigateToDetails(_vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].CAPACITY_VIEW);
                break;

              case _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_0__["VsanOverviewDetailsView"].SERVICES:
                this.setGeneralContext(_model_inline_view_context_key_data__WEBPACK_IMPORTED_MODULE_2__["InlineViewContextKey"].SERVICES_CONTEXT_KEY);
                this.navigateToDetails(_vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].SERVICES_VIEW);
                break;

              case _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_0__["VsanOverviewDetailsView"].FAULTDOMAINS:
                this.setGeneralContext(_model_inline_view_context_key_data__WEBPACK_IMPORTED_MODULE_2__["InlineViewContextKey"].FAULT_DOMAINS_CONTEXT_KEY);
                this.navigateToDetails(_vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].FAULT_DOMAINS_VIEW);
                break;

              case _vsan_overview_details_view__WEBPACK_IMPORTED_MODULE_0__["VsanOverviewDetailsView"].RESYNCINGOBJECTS:
                this.setGeneralContext(_model_inline_view_context_key_data__WEBPACK_IMPORTED_MODULE_2__["InlineViewContextKey"].RESYNCING_OBJECTS_CONTEXT_KEY);
                this.navigateToDetails(_vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].RESYNCING_COMPONENTS_VIEW);
                break;
            }
          }
        }, {
          key: "setHealthContext",
          value: function setHealthContext() {
            this.storageService.set(_model_inline_view_context_key_data__WEBPACK_IMPORTED_MODULE_2__["InlineViewContextKey"].HEALTH_CHECK_CONTEXT_KEY, this.healthContext);
          }
        }, {
          key: "navigateToDetails",
          value: function navigateToDetails(details) {
            this.router.navigate(["/" + _vsan_routes__WEBPACK_IMPORTED_MODULE_1__["VsanRoutes"].CLUSTER_OVERVIEW_VIEW + "/" + this.OVERVIEW_DETAILS_PATH, {
              outlets: {
                "details": [details]
              }
            }]);
          }
        }, {
          key: "healthContext",
          get: function get() {
            var healthContext = this.context.content;
            healthContext.clusterRef = this.clusterRef;
            return healthContext;
          }
        }, {
          key: "setGeneralContext",
          value: function setGeneralContext(key) {
            this.storageService.set(key, this.clusterRef);
          }
        }]);

        return DetailViewWrapperComponent;
      }();
      /***/

    },

    /***/
    "t4MA":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/overview/vsan-cluster-overview.module.ts ***!
      \***************************************************************/

    /*! exports provided: VsanClusterOverviewModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */

    /***/
    function t4MA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanClusterOverviewModule", function () {
        return VsanClusterOverviewModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
        return ɵ3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
        return ɵ4;
      });
      /* harmony import */


      var _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vsan-cluster-overview.component */
      "HuoJ");
      /* harmony import */


      var _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./detail-view-wrapper.component */
      "r/z2");

      var ɵ0 = function ɵ0() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(18), __webpack_require__.e(25), __webpack_require__.e(51), __webpack_require__.e(64), __webpack_require__.e(68)]).then(__webpack_require__.bind(null,
        /*! ./../capacity/capacity.module.ngfactory */
        "ynpk")).then(function (mod) {
          return mod.CapacityModuleNgFactory;
        });
      },
          ɵ1 = function ɵ1() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e(20), __webpack_require__.e(24), __webpack_require__.e(27), __webpack_require__.e(32), __webpack_require__.e(34), __webpack_require__.e(35), __webpack_require__.e(36), __webpack_require__.e(38), __webpack_require__.e(41), __webpack_require__.e(53), __webpack_require__.e(86)]).then(__webpack_require__.bind(null,
        /*! ./../health/health.module.ngfactory */
        "sEd4")).then(function (mod) {
          return mod.HealthModuleNgFactory;
        });
      },
          ɵ2 = function ɵ2() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(16), __webpack_require__.e(38), __webpack_require__.e(54), __webpack_require__.e(57), __webpack_require__.e(66), __webpack_require__.e(67)]).then(__webpack_require__.bind(null,
        /*! ./../services/services.module.ngfactory */
        "L6MZ")).then(function (mod) {
          return mod.ServicesModuleNgFactory;
        });
      },
          ɵ3 = function ɵ3() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(15), __webpack_require__.e(26), __webpack_require__.e(72)]).then(__webpack_require__.bind(null,
        /*! ./../faultdomains/fault-domains.module.ngfactory */
        "rAsp")).then(function (mod) {
          return mod.FaultDomainsModuleNgFactory;
        });
      },
          ɵ4 = function ɵ4() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e(19), __webpack_require__.e(37), __webpack_require__.e(77)]).then(__webpack_require__.bind(null,
        /*! ./../resync/resync-monitor.module.ngfactory */
        "y0SV")).then(function (mod) {
          return mod.ResyncMonitorModuleNgFactory;
        });
      };

      var routes = [{
        path: "",
        component: _vsan_cluster_overview_component__WEBPACK_IMPORTED_MODULE_0__["VsanClusterOverviewComponent"]
      }, {
        path: "details",
        component: _detail_view_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["DetailViewWrapperComponent"],
        children: [{
          path: "capacity",
          loadChildren: ɵ0,
          outlet: "details"
        }, {
          path: "health",
          loadChildren: ɵ1,
          outlet: "details"
        }, {
          path: "services",
          loadChildren: ɵ2,
          outlet: "details"
        }, {
          path: "faultDomains",
          loadChildren: ɵ3,
          outlet: "details"
        }, {
          path: "resyncingComponents",
          loadChildren: ɵ4,
          outlet: "details"
        }]
      }];

      var VsanClusterOverviewModule = /*#__PURE__*/_createClass(function VsanClusterOverviewModule() {
        _classCallCheck(this, VsanClusterOverviewModule);
      });
      /***/

    },

    /***/
    "vnvA":
    /*!*************************************************************!*\
      !*** ./src/app/vsan/overview/vsan-overview-details-view.ts ***!
      \*************************************************************/

    /*! exports provided: VsanOverviewDetailsView */

    /***/
    function vnvA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanOverviewDetailsView", function () {
        return VsanOverviewDetailsView;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanOverviewDetailsView = /*@__PURE__*/function (VsanOverviewDetailsView) {
        VsanOverviewDetailsView[VsanOverviewDetailsView["CAPACITY"] = 0] = "CAPACITY";
        VsanOverviewDetailsView[VsanOverviewDetailsView["HEALTH"] = 1] = "HEALTH";
        VsanOverviewDetailsView[VsanOverviewDetailsView["SERVICES"] = 2] = "SERVICES";
        VsanOverviewDetailsView[VsanOverviewDetailsView["FAULTDOMAINS"] = 3] = "FAULTDOMAINS";
        VsanOverviewDetailsView[VsanOverviewDetailsView["RESYNCINGOBJECTS"] = 4] = "RESYNCINGOBJECTS";
        return VsanOverviewDetailsView;
      }({});
      /***/

    },

    /***/
    "wZyU":
    /*!**************************************************************!*\
      !*** ./src/app/vsan/overview/historical-health.component.ts ***!
      \**************************************************************/

    /*! exports provided: HistoricalHealthComponent */

    /***/
    function wZyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricalHealthComponent", function () {
        return HistoricalHealthComponent;
      });
      /* harmony import */


      var _services_service_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/service.utils */
      "Tl2E");

      var HistoricalHealthComponent = /*#__PURE__*/function () {
        function HistoricalHealthComponent() {
          _classCallCheck(this, HistoricalHealthComponent);
        }

        _createClass(HistoricalHealthComponent, [{
          key: "getStatusLabel",
          value: function getStatusLabel() {
            return _services_service_utils__WEBPACK_IMPORTED_MODULE_0__["ServiceUtils"].enabledStateLabel(this.config.isEnabled);
          }
        }]);

        return HistoricalHealthComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=110-es5.js.map