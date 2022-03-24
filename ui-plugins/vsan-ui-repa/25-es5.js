(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25], {
    /***/
    "9IbX":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/service/navigation/model/ask-vmware-id.ts ***!
      \***********************************************************************/

    /*! exports provided: AskVmwareId */

    /***/
    function IbX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AskVmwareId", function () {
        return AskVmwareId;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * IDs used in external navigation to Ask VMware pages
       */


      var AskVmwareId = /*@__PURE__*/function (AskVmwareId) {
        AskVmwareId["CLUSTER_SHUTDOWN"] = "com.vmware.vsan.clustershutdown.vmshutdown";
        AskVmwareId["FILE_SERVICE"] = "fileservice.user.guide";
        AskVmwareId["FILE_SERVICE_IMBALANCE"] = "com.vmware.vsan.fileservice.remediate.imbalance";
        AskVmwareId["TOP_CONTRIBUTORS"] = "com.vmware.vsan.perf.graph.topn";
        AskVmwareId["OBFUSCATED_DATA"] = "com.vmware.vsan.obfuscation.data.map";
        AskVmwareId["VM_CONSUMPTION_IOPS"] = "com.vmware.vsan.perf.graph.cluster-domclient.iops";
        return AskVmwareId;
      }({});
      /***/

    },

    /***/
    "D+MT":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-export-data.ts ***!
      \*****************************************************************************/

    /*! exports provided: PerfExportData */

    /***/
    function DMT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfExportData", function () {
        return PerfExportData;
      });
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * The data needed for the export all charts functionality
       */


      var PerfExportData = /*#__PURE__*/_createClass(function PerfExportData() {
        _classCallCheck(this, PerfExportData);
      });
      /***/

    },

    /***/
    "Ju17":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-group-common.directive.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ClrButtonGroupCommonDirective */

    /***/
    function Ju17(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonGroupCommonDirective", function () {
        return ClrButtonGroupCommonDirective;
      });
      /**
       * Applies on every clr-button-group and help to link the clr-button with directive applieds on it,  which extends
       * {@link ClrButtonBaseDirective}, to the actual rendered html button.
       */


      var ClrButtonGroupCommonDirective = /*#__PURE__*/function () {
        function ClrButtonGroupCommonDirective(elRef) {
          _classCallCheck(this, ClrButtonGroupCommonDirective);

          this.elRef = elRef;
        }

        _createClass(ClrButtonGroupCommonDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            setTimeout(function () {
              var allButtons = _this.elRef.nativeElement.querySelectorAll("button"); // match button with clrButton and notify directives


              _this.clrButtons.filter(function (clrButton) {
                return !!clrButton.directives;
              }).forEach(function (clrButton, index) {
                var buttonFound = _this.findButtonByName(clrButton.name, allButtons);

                if (buttonFound) {
                  clrButton.directives.forEach(function (directive) {
                    directive.resolveButton(clrButton, buttonFound, index);
                  });
                }
              });
            });
          }
        }, {
          key: "findButtonByName",
          value: function findButtonByName(name, buttons) {
            for (var i = 0; i < buttons.length; i++) {
              if (buttons.item(i).name === name) {
                return buttons.item(i);
              }
            }

            return null;
          }
        }]);

        return ClrButtonGroupCommonDirective;
      }();
      /***/

    },

    /***/
    "PSrv":
    /*!****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-charts-container.scss.shim.ngstyle.js ***!
      \****************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function PSrv(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nsection[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\nsection[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\nsection[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.buttons-group[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 0;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n#charts[_ngcontent-%COMP%], #consolidated-charts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%], #consolidated-charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  background-color: var(--vsan-background-color);\n  cursor: crosshair;\n  width: calc(50% - 0.3rem);\n}\n#charts[_ngcontent-%COMP%]   .chart-container.full-width[_ngcontent-%COMP%], #consolidated-charts[_ngcontent-%COMP%]   .chart-container.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]:nth-child(odd), #consolidated-charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]:nth-child(odd) {\n  margin-right: 0.6rem !important;\n}\n#charts.small-charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%], #consolidated-charts.small-charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  width: 12rem;\n  min-width: 12rem;\n  margin-right: 0.6rem !important;\n}\n#charts.small-charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%], #consolidated-charts.small-charts[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2NoYXJ0L3BlcmZvcm1hbmNlL3BlcmYtY2hhcnRzLWNvbnRhaW5lci5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEtBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVlIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBRW9CRztFQUNHLGdDQUFBO0FGakJOO0FFbUJHOztFQUdHLGdDQUFBO0FGbEJOO0FFb0JHO0VBQ0csOEJBQUE7QUZsQk47QUF6QkE7RUFDRyxpQkFBQTtFQUNBLGVBQUE7QUE0Qkg7QUF6QkE7RUFDRyxhQUFBO0VBQ0EsOEJBQUE7QUE0Qkg7QUF6QkE7RUFDRyxhQUFBO0VBQ0EsZUFBQTtBQTRCSDtBQTNCRztFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSw4Q0cwQmE7RUh6QmIsaUJBQUE7RUFHQSx5QkFBQTtBQTJCTjtBQTFCTTtFQUNHLFdBQUE7QUE0QlQ7QUF4Qkc7RUFDRywrQkFBQTtBQTBCTjtBQXZCTTtFQUNHLFlBN0NXO0VBOENYLGdCQTlDVztFQWdEWCwrQkFBQTtBQXdCVDtBQXRCUztFQUNHLGFBQUE7RUFDQSxjQUFBO0FBd0JaIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2NoYXJ0L3BlcmZvcm1hbmNlL3BlcmYtY2hhcnRzLWNvbnRhaW5lci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTctMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuJHNtYWxsLWNoYXJ0LXdpZHRoOiAxMnJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgYXV0bztcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG5zZWN0aW9uIHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4uYnV0dG9ucy1ncm91cCB7XG4gICBtYXJnaW4tbGVmdDogYXV0bztcbiAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRpdGxlIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNjaGFydHMsICNjb25zb2xpZGF0ZWQtY2hhcnRzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgICAgLy8gVGhlIHJpZ2h0IG1hcmdpbiBvZiBjaGFydCBpcyAwLjZyZW0gd2hpY2ggaXMgc2V0IGluIHNpYmxpbmctcmlnaHQtc3BhY2luZyBhbmQgdGhlcmUgY2FuIGJlIDIgY2hhcnRzIGluIGEgcm93LFxuICAgICAgLy8gZmlsbCB0aGUgY2hhcnQgdG8gaGFsZiB0aGUgd2lkdGggZXhjZXB0IHRoZSBtYXJnaW4uXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAjeyR2c2FuLWVsZW1lbnQtc3BhY2luZy8yfSk7XG4gICAgICAmLmZ1bGwtd2lkdGgge1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICB9XG4gICAvLyBPbmx5IGFkZCBtYXJnaW4gYWZ0ZXIgdGhlIGVsZW1lbnRzIG9uIHRoZSBsZWZ0IHNpZGUgY29sdW1uXG4gICAuY2hhcnQtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4tZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmLnNtYWxsLWNoYXJ0cyB7XG4gICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgIHdpZHRoOiAkc21hbGwtY2hhcnQtd2lkdGg7XG4gICAgICAgICBtaW4td2lkdGg6ICRzbWFsbC1jaGFydC13aWR0aDtcbiAgICAgICAgIC8vIGluIHNtYWxsLWNoYXJ0cyBjYXNlKHBlcmYgZm9yIHN1cHBvcnQpIHdlIGhhdmUgMy00IGNoYXJ0cyBwZXIgcm93LCBzbyBhZGQgcmlnaHQgbWFyZ2luIGFmdGVyIGVhY2ggY2hhcnRcbiAgICAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4tZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMSAwIDByZW07XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "RSFA":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-charts-container.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: PerfChartsContainerComponent */

    /***/
    function RSFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartsContainerComponent", function () {
        return PerfChartsContainerComponent;
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


      var _component_chart_model_perf_graph_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/model/perf-graph-id */
      "Xlmv");
      /* harmony import */


      var _component_chart_performance_perf_export_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/performance/perf-export-data */
      "D+MT");
      /* harmony import */


      var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/unavailable-view/unavailable-view-spec */
      "Hg5h");
      /* harmony import */


      var _service_navigation_model_ask_vmware_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/navigation/model/ask-vmware-id */
      "9IbX");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_id_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @util/id-generator */
      "UTh9");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _chart_zoom_option__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./chart-zoom-option */
      "wAmQ");
      /* harmony import */


      var _flat_graph_metric__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./flat-graph-metric */
      "vjFZ");
      /* harmony import */


      var _perf_chart_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./perf-chart-util */
      "3For");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PerfChartsContainerComponent = /*@__PURE__*/function () {
        var PerfChartsContainerComponent = /*#__PURE__*/function () {
          function PerfChartsContainerComponent(perfOrchestrator, changeDetector, refWatcher) {
            var _this2 = this;

            _classCallCheck(this, PerfChartsContainerComponent);

            this.perfOrchestrator = perfOrchestrator;
            this.changeDetector = changeDetector;
            this.refWatcher = refWatcher;
            this.BOTTOM_MIDDLE_POSITION = "bottom-middle";
            this.BOTTOM_LEFT_POSITION = "bottom-left";
            this.BOTTOM_RIGHT_POSITION = "bottom-right";
            this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"];
            this.PefGraphId = _component_chart_model_perf_graph_id__WEBPACK_IMPORTED_MODULE_2__["PefGraphId"];
            this.AskVmwareId = _service_navigation_model_ask_vmware_id__WEBPACK_IMPORTED_MODULE_5__["AskVmwareId"];
            this.loadedCharts = [];
            this.flatData = [];
            this.looseXAxisLabel = false;
            this.isZoomButtonVisible = true;
            this.isEmptyChartsVisible = true;
            this.isShowGraphDescription = true;
            this.showHeaderSection = true;
            this.clickShowAllLink = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.zoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
            this.chartLegendPosition = _perf_chart_util__WEBPACK_IMPORTED_MODULE_13__["PerfChartUtil"].LEGEND_BOTTOM;
            /**
             * compact mode means we need to display the small charts and keep them in one line
             * currently only "performance for support" view has compact mode
             */

            this.compactMode = false;
            this.keepPlotLineOnClick = false;
            this.allChartsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onPlotLineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onTooltipActionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

            this.graphTooltipVisible = function (entry) {
              return _this2.isShowGraphDescription && !!entry.graph.description;
            };

            this.refreshZoomOnCollapseChart = function (zoomOptions) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (zoomOptions) {
                          this.onChartZoomIn(zoomOptions);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            };
            /**
             * Calculates the popup position of the signpost to avoid been cut off by the small screens
             */


            this.getPopUpPosition = function (chartIndex) {
              if (_this2.useFullWidth) {
                return _this2.BOTTOM_MIDDLE_POSITION;
              }

              if (!_this2.compactMode && chartIndex % 2 === 0) {
                return _this2.BOTTOM_RIGHT_POSITION;
              }

              return _this2.BOTTOM_LEFT_POSITION;
            };
          }

          _createClass(PerfChartsContainerComponent, [{
            key: "data",
            set: function set(value) {
              if (value === this._graphMetrics) {
                return;
              }

              if (value) {
                this._graphMetrics = value;
              } else {
                if (this._graphMetrics && this._graphMetrics.length === 0) {
                  return;
                } else {
                  this._graphMetrics = [];
                }
              }

              this.loadedCharts = []; // Update the flat collection

              var metrics = [];

              this._graphMetrics.forEach(function (entry) {
                metrics.push.apply(metrics, _toConsumableArray(entry.graphs.map(function (graph) {
                  return new _flat_graph_metric__WEBPACK_IMPORTED_MODULE_12__["FlatGraphMetric"](entry.entityRefId, entry.metrics, graph, entry.entityIdentifier);
                })));
              });

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].isEmpty(this.flatData) || !this.isRealtime) {
                this.flatData = metrics;
              } else {
                this.flatData.forEach(function (oldMetric, index) {
                  var newMetric = metrics[index];
                  oldMetric.metrics = newMetric.metrics;
                  oldMetric.graph.metrics = newMetric.graph.metrics;
                  oldMetric.graph.secondGraph = newMetric.graph.secondGraph;
                  oldMetric.entityIdentifier = newMetric.entityIdentifier;
                });
              } // If there is no chart data available, PerfChartComponent.load.emit() cannot be triggered,
              // we need to manually call this.allChartsLoaded.emit() to update the data of PerfChartExportComponent.


              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].isEmpty(this.flatData)) {
                this.allChartsLoaded.emit(null);
              }

              this.setSecondGraphData();
            }
          }, {
            key: "setSecondGraphData",
            value: function setSecondGraphData() {
              var _this3 = this;

              // Passed second graph metrics
              this.flatData.forEach(function (flatMetric) {
                var _flatMetric$metrics$m;

                if (flatMetric.graph.secondGraph == null) {
                  return;
                }

                var data = _this3.flatData.find(function (metric) {
                  return metric.graph.id === flatMetric.graph.secondGraph.id;
                });

                if (!data) {
                  return;
                }

                flatMetric.graph.secondGraph = data.graph;
                var series = data.metrics.metricsSeries;

                (_flatMetric$metrics$m = flatMetric.metrics.metricsSeries).push.apply(_flatMetric$metrics$m, _toConsumableArray(series));
              });
            }
          }, {
            key: "consolidatedData",
            set: function set(value) {
              var _this4 = this;

              this.loadedCharts = [];
              var consolidatedFlatDataMap = {};
              this.differentConsolidatedGraphs = [];
              value.forEach(function (entry) {
                entry.graphs.forEach(function (graph) {
                  var _consolidatedFlatData;

                  if (_this4.visibleGraphId && graph.id !== _this4.visibleGraphId) {
                    return;
                  }

                  if (consolidatedFlatDataMap[graph.id] == null) {
                    consolidatedFlatDataMap[graph.id] = [];

                    _this4.differentConsolidatedGraphs.push(graph);
                  } // Set all metrics for current graph in map object


                  (_consolidatedFlatData = consolidatedFlatDataMap[graph.id]).push.apply(_consolidatedFlatData, _toConsumableArray(_this4.perfOrchestrator.data.entitiesFlatData.filter(function (x) {
                    return x.graph.id === graph.id;
                  })));
                });
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this5 = this;

              this.id = _util_id_generator__WEBPACK_IMPORTED_MODULE_7__["IdGenerator"].getGuid();
              this.refWatcher.watchSubscriptionRef(this.perfOrchestrator.consolidatedViewHelper.change.subscribe(function () {
                if (_this5.perfOrchestrator.isShowSpecificModeEnabled && _this5.perfOrchestrator.isConsolidatedViewStateEnabled) {
                  _this5.consolidatedData = _this5.perfOrchestrator.data.entitiesGraphData;
                }
              }));
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              /**
               * If view state is changed (from "Show specific vms" to "Cluster level metrics for example")
               * while some entity perf data is still fetching, then loading has to be stopped because
               * this entity perf data is not needed and wouldn't be loaded.
               */
              if (this.perfOrchestrator.isLoading) {
                this.perfOrchestrator.remainingEntitiesToLoad = 0;
              }
            }
          }, {
            key: "onChartZoomIn",
            value: function onChartZoomIn(opt) {
              this.isZoomed = !opt.isZoomOut;
              this.zoomOutOptions = opt;
              this.zoom.emit(opt);

              if (!this.changeDetector.destroyed) {
                this.changeDetector.detectChanges();
              }
            }
          }, {
            key: "onPointHovered",
            value: function onPointHovered(value) {
              this.pointHoveredOption = value;
            }
          }, {
            key: "onChartLoad",
            value: function onChartLoad(chart, graph) {
              var exportChartData = new _component_chart_performance_perf_export_data__WEBPACK_IMPORTED_MODULE_3__["PerfExportData"]();
              exportChartData.chart = chart;
              exportChartData.graphName = graph.label;
              this.loadedCharts.push(exportChartData);
              var chartsNumber = this.getExpectedChartsCount(); // Announce messages for screen reader users when all charts finish loading.

              if (this.loadedCharts.length === chartsNumber) {
                this.allChartsLoaded.emit(this.loadedCharts);
                var message = chartsNumber === 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].getString("vsan.monitor.performance.chart.loaded.singular") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].getString("vsan.monitor.performance.chart.loaded.plural", chartsNumber);
                this.srOnlyMessage = message;
              }
            }
          }, {
            key: "getExpectedChartsCount",
            value: function getExpectedChartsCount() {
              var chartsNumber = 0;

              if (this.flatData && this.flatData.length > 0) {
                // we expect only one graph to be visible
                if (this.visibleGraphId) {
                  chartsNumber = 1;
                } else {
                  chartsNumber = this.flatData.length;
                }
              } else if (this.differentConsolidatedGraphs && this.differentConsolidatedGraphs.length > 0) {
                chartsNumber = this.differentConsolidatedGraphs.length;
              }

              return chartsNumber;
            }
          }, {
            key: "noDataView",
            get: function get() {
              return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_9__["VsanDateTimeUtils"].isRecentTimeRange(this.currentTimeRange) ? _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_VIEW_NO_DATA : _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD;
            }
          }, {
            key: "emptyChartsVisible",
            get: function get() {
              // in composite chart case if no vm is selected or all vms are unchecked the view should be empty without
              // unavailable view shown. differentConsolidatedGraphs in this case is [], so check it only for null.
              return this.currentTimeRange && this.isEmptyChartsVisible && _util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].isEmpty(this.flatData) && this.differentConsolidatedGraphs == null;
            }
            /**
             * Expand the charts to full screen width when the screen
             * size is small or we only have one chart
             */

          }, {
            key: "useFullWidth",
            get: function get() {
              var smallResolution = document.body.scrollWidth < 1000;
              var isOnlyOneChart = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_10__["VsanUiUtils"].isEmpty(this.flatData) && this.flatData.length === 1;
              return !!this.visibleGraphId || smallResolution || isOnlyOneChart;
            }
            /**
             * Reset the zoom level to default
             * @param event
             */

          }, {
            key: "onZoomOut",
            value: function onZoomOut() {
              var zoomOut = new _chart_zoom_option__WEBPACK_IMPORTED_MODULE_11__["ChartZoomOption"]();
              zoomOut.isZoomOut = true;
              this.zoomOutOptions = zoomOut;
            }
            /**
             * Open dialog with expanded graphic
             * @param event
             */

          }, {
            key: "onExpand",
            value: function onExpand(entry) {
              var context = {
                entry: entry,
                isShowZoomButton: this.isZoomButtonVisible,
                isShowGraphDescription: this.isShowGraphDescription,
                looseXAxisLabel: this.looseXAxisLabel,
                chartLegendPosition: this.chartLegendPosition,
                zoomOptions: this.zoomOutOptions,
                customizableThresholds: this.customizableThresholds
              };
              new _util_modal_builder__WEBPACK_IMPORTED_MODULE_8__["ModalBuilder"]("chart/expandChart").setSize(1200, 600).open(context).then(this.refreshZoomOnCollapseChart);
            }
          }, {
            key: "isHeaderSectionVisible",
            value: function isHeaderSectionVisible() {
              return !this.emptyChartsVisible && (!!this.title || !!this.subtitle || this.isAskVmwareLinkVisible || this.isShowAllLinkVisible || this.isZoomButtonVisible) && this.showHeaderSection;
            }
          }, {
            key: "getSpecifiedEntitiesFlatDataByGraph",
            value: function getSpecifiedEntitiesFlatDataByGraph(graph) {
              return this.perfOrchestrator.getSpecifiedEntitiesFlatDataByGraph(graph);
            }
          }]);

          return PerfChartsContainerComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_6__["ScreenReaderAnnouncer"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PerfChartsContainerComponent.prototype, "srOnlyMessage", void 0);
        return PerfChartsContainerComponent;
      }();
      /***/

    },

    /***/
    "b7pI":
    /*!******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-charts-container.component.ngfactory.js ***!
      \******************************************************************************************************/

    /*! exports provided: RenderType_PerfChartsContainerComponent, View_PerfChartsContainerComponent_0, View_PerfChartsContainerComponent_Host_0, PerfChartsContainerComponentNgFactory */

    /***/
    function b7pI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerfChartsContainerComponent", function () {
        return RenderType_PerfChartsContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartsContainerComponent_0", function () {
        return View_PerfChartsContainerComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartsContainerComponent_Host_0", function () {
        return View_PerfChartsContainerComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartsContainerComponentNgFactory", function () {
        return PerfChartsContainerComponentNgFactory;
      });
      /* harmony import */


      var _perf_charts_container_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./perf-charts-container.scss.shim.ngstyle */
      "PSrv");
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
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../directive/external-link/external-link.directive */
      "tsUx");
      /* harmony import */


      var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../directive/clr-button-group/clr-button-group-common.directive */
      "Ju17");
      /* harmony import */


      var _unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../unavailable-view/unavailable-view.component.ngfactory */
      "Kfm7");
      /* harmony import */


      var _unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../unavailable-view/unavailable-view.component */
      "hlBw");
      /* harmony import */


      var _service_task_monitor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../generated/hci-quickstart-status-service */
      "KbWe");
      /* harmony import */


      var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../generated/vsan-perf-property-provider */
      "Oyqh");
      /* harmony import */


      var _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./perf-chart.component.ngfactory */
      "qY5k");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _perf_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./perf-chart.component */
      "q8Rp");
      /* harmony import */


      var _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _perf_charts_container_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./perf-charts-container.component */
      "RSFA");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerfChartsContainerComponent = [_perf_charts_container_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerfChartsContainerComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerfChartsContainerComponent,
        data: {}
      });

      function View_PerfChartsContainerComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.icon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "h6", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.title;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "clr-button", [["class", "btn btn-sm"], ["id", "ask-vmware"], ["name", "ask-vmware"]], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, [[1, 4], [2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, null, 0, _directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_5__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"], [6, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"]]], {
          anchorText: [0, "anchorText"],
          helpId: [1, "helpId"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "ask-vmware";
          var currVal_2 = "ask-vmware";

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.perf.chart.link"));

          var currVal_4 = _co.AskVmwareId.VM_CONSUMPTION_IOPS;

          _ck(_v, 3, 0, currVal_3, currVal_4);
        }, null);
      }

      function View_PerfChartsContainerComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"], ["id", "show-all-btn"], ["name", "show-all-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.clickShowAllLink.emit() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, [[1, 4], [2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "show-all-btn";
          var currVal_2 = "show-all-btn";

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.perf.diagnostics.fullPerormanceDetailsLink"));

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_PerfChartsContainerComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-button", [["class", "btn btn-sm"], ["id", "zoom-btn"], ["name", "zoom-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onZoomOut() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, [[1, 4], [2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"]
        }, {
          _click: "click"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "zoom-btn";
          var currVal_2 = "zoom-btn";

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.perf.chart.zoom"));

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_PerfChartsContainerComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["id", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.subtitle;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "div", [["class", "vsan-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 31, "div", [["class", "title"], ["id", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "icon-name-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "clr-button-group", [["class", "btn-link buttons-group"]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 1064960, null, 1, _directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_8__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.icon;

          _ck(_v, 7, 0, currVal_0);

          var currVal_1 = _co.title;

          _ck(_v, 10, 0, currVal_1);

          var currVal_3 = _co.isAskVmwareLinkVisible;

          _ck(_v, 25, 0, currVal_3);

          var currVal_4 = _co.isShowAllLinkVisible;

          _ck(_v, 28, 0, currVal_4);

          var currVal_5 = _co.isZoomButtonVisible && _co.isZoomed;

          _ck(_v, 31, 0, currVal_5);

          var currVal_6 = _co.subtitle;

          _ck(_v, 36, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_2 = true;

          _ck(_v, 13, 0, currVal_2);
        });
      }

      function View_PerfChartsContainerComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_UnavailableViewComponent_0"], _unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_10__["UnavailableViewComponent"], [_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_11__["TaskMonitorService"], _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_12__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_13__["VsanPerfPropertyProvider"]], {
          unavailableViewSpec: [0, "unavailableViewSpec"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.noDataView;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_PerfChartsContainerComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "chart-container"]], [[2, "full-width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "vsan-perf-chart", [], null, [[null, "zoom"], [null, "load"], [null, "pointHovered"], [null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).clickout($event) !== false;
            ad = pd_0 && ad;
          }

          if ("zoom" === en) {
            var pd_1 = _co.onChartZoomIn($event) !== false;
            ad = pd_1 && ad;
          }

          if ("load" === en) {
            var pd_2 = _co.onChartLoad($event, _v.context.$implicit) !== false;
            ad = pd_2 && ad;
          }

          if ("pointHovered" === en) {
            var pd_3 = _co.onPointHovered($event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartComponent_0"], _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4374528, null, 0, _perf_chart_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartComponent"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_17__["HighchartsThemeService"], _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_18__["HighchartsPropertiesService"], _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_19__["PerfOrchestratorService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          graph: [0, "graph"],
          containerId: [1, "containerId"],
          showSmall: [2, "showSmall"],
          index: [3, "index"],
          tooltipPopUpPosition: [4, "tooltipPopUpPosition"],
          showExpandButton: [5, "showExpandButton"],
          showExportButton: [6, "showExportButton"],
          consolidatedMetrics: [7, "consolidatedMetrics"],
          consolidatedEntitiesData: [8, "consolidatedEntitiesData"],
          customizableThresholds: [9, "customizableThresholds"],
          chartWidth: [10, "chartWidth"],
          chartHeight: [11, "chartHeight"],
          extremes: [12, "extremes"],
          looseXAxisLabel: [13, "looseXAxisLabel"],
          legendPosition: [14, "legendPosition"],
          pointHoveredOption: [15, "pointHoveredOption"]
        }, {
          zoom: "zoom",
          load: "load",
          pointHovered: "pointHovered"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _v.context.$implicit;
          var currVal_2 = _co.id;
          var currVal_3 = _co.compactMode;
          var currVal_4 = _v.context.index;

          var currVal_5 = _co.getPopUpPosition(_v.context.index);

          var currVal_6 = false;
          var currVal_7 = false;

          var currVal_8 = _co.getSpecifiedEntitiesFlatDataByGraph(_v.context.$implicit);

          var currVal_9 = _co.consolidatedEntitiesData;
          var currVal_10 = _co.customizableThresholds;
          var currVal_11 = _co.chartWidth;
          var currVal_12 = _co.chartHeight;
          var currVal_13 = _co.zoomOutOptions;
          var currVal_14 = _co.looseXAxisLabel;
          var currVal_15 = _co.chartLegendPosition;
          var currVal_16 = _co.pointHoveredOption;

          _ck(_v, 4, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.useFullWidth;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "section", [["id", "consolidated-charts"]], [[2, "small-charts", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.differentConsolidatedGraphs;

          _ck(_v, 3, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.compactMode;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "chart-container"]], [[2, "full-width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "vsan-perf-chart", [], null, [[null, "zoom"], [null, "expand"], [null, "load"], [null, "onPlotLineChanged"], [null, "onTooltipActionClicked"], [null, "pointHovered"], [null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).clickout($event) !== false;
            ad = pd_0 && ad;
          }

          if ("zoom" === en) {
            var pd_1 = _co.onChartZoomIn($event) !== false;
            ad = pd_1 && ad;
          }

          if ("expand" === en) {
            var pd_2 = _co.onExpand(_v.context.$implicit) !== false;
            ad = pd_2 && ad;
          }

          if ("load" === en) {
            var pd_3 = _co.onChartLoad($event, _v.context.$implicit.graph) !== false;
            ad = pd_3 && ad;
          }

          if ("onPlotLineChanged" === en) {
            var pd_4 = _co.onPlotLineChanged.emit($event) !== false;
            ad = pd_4 && ad;
          }

          if ("onTooltipActionClicked" === en) {
            var pd_5 = _co.onTooltipActionClicked.emit($event) !== false;
            ad = pd_5 && ad;
          }

          if ("pointHovered" === en) {
            var pd_6 = _co.onPointHovered($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartComponent_0"], _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4374528, null, 0, _perf_chart_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartComponent"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_17__["HighchartsThemeService"], _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_18__["HighchartsPropertiesService"], _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_19__["PerfOrchestratorService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          graph: [0, "graph"],
          entityRefId: [1, "entityRefId"],
          containerId: [2, "containerId"],
          showSmall: [3, "showSmall"],
          index: [4, "index"],
          tooltipVisible: [5, "tooltipVisible"],
          tooltipPopUpPosition: [6, "tooltipPopUpPosition"],
          metrics: [7, "metrics"],
          customizableThresholds: [8, "customizableThresholds"],
          selectedPlotLineValue: [9, "selectedPlotLineValue"],
          isRealtime: [10, "isRealtime"],
          extremes: [11, "extremes"],
          looseXAxisLabel: [12, "looseXAxisLabel"],
          legendPosition: [13, "legendPosition"],
          isZoomAllowed: [14, "isZoomAllowed"],
          keepPlotLineOnClick: [15, "keepPlotLineOnClick"],
          actionLink: [16, "actionLink"],
          pointHoveredOption: [17, "pointHoveredOption"]
        }, {
          zoom: "zoom",
          expand: "expand",
          onPlotLineChanged: "onPlotLineChanged",
          onTooltipActionClicked: "onTooltipActionClicked",
          load: "load",
          pointHovered: "pointHovered"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _v.context.$implicit.graph;
          var currVal_2 = _v.context.$implicit.entityRefId ? _v.context.$implicit.entityRefId : _v.context.$implicit.metrics.entityRefId;
          var currVal_3 = _co.id;
          var currVal_4 = _co.compactMode;
          var currVal_5 = _v.context.index;

          var currVal_6 = _co.graphTooltipVisible(_v.context.$implicit);

          var currVal_7 = _co.getPopUpPosition(_v.context.index);

          var currVal_8 = _v.context.$implicit.metrics;
          var currVal_9 = _co.customizableThresholds;
          var currVal_10 = _co.selectedPlotLineValue;
          var currVal_11 = _co.isRealtime;
          var currVal_12 = _co.zoomOutOptions;
          var currVal_13 = _co.looseXAxisLabel;
          var currVal_14 = _co.chartLegendPosition;
          var currVal_15 = !_co.isRealtime;
          var currVal_16 = _co.keepPlotLineOnClick;
          var currVal_17 = _co.actionLink;
          var currVal_18 = _co.pointHoveredOption;

          _ck(_v, 4, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18]);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.useFullWidth;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "section", [["id", "charts"]], [[2, "small-charts", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.flatData;

          _ck(_v, 3, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.compactMode;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartsContainerComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-perf-chart", [], null, [[null, "zoom"], [null, "expand"], [null, "load"], [null, "onPlotLineChanged"], [null, "onTooltipActionClicked"], [null, "pointHovered"], [null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).clickout($event) !== false;
            ad = pd_0 && ad;
          }

          if ("zoom" === en) {
            var pd_1 = _co.onChartZoomIn($event) !== false;
            ad = pd_1 && ad;
          }

          if ("expand" === en) {
            var pd_2 = _co.onExpand(_v.parent.context.$implicit) !== false;
            ad = pd_2 && ad;
          }

          if ("load" === en) {
            var pd_3 = _co.onChartLoad($event, _v.parent.context.$implicit.graph) !== false;
            ad = pd_3 && ad;
          }

          if ("onPlotLineChanged" === en) {
            var pd_4 = _co.onPlotLineChanged.emit($event) !== false;
            ad = pd_4 && ad;
          }

          if ("onTooltipActionClicked" === en) {
            var pd_5 = _co.onTooltipActionClicked.emit($event) !== false;
            ad = pd_5 && ad;
          }

          if ("pointHovered" === en) {
            var pd_6 = _co.onPointHovered($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PerfChartComponent_0"], _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PerfChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4374528, null, 0, _perf_chart_component__WEBPACK_IMPORTED_MODULE_16__["PerfChartComponent"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_17__["HighchartsThemeService"], _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_18__["HighchartsPropertiesService"], _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_19__["PerfOrchestratorService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], {
          graph: [0, "graph"],
          entityRefId: [1, "entityRefId"],
          containerId: [2, "containerId"],
          showSmall: [3, "showSmall"],
          index: [4, "index"],
          tooltipVisible: [5, "tooltipVisible"],
          tooltipPopUpPosition: [6, "tooltipPopUpPosition"],
          metrics: [7, "metrics"],
          customizableThresholds: [8, "customizableThresholds"],
          selectedPlotLineValue: [9, "selectedPlotLineValue"],
          extremes: [10, "extremes"],
          looseXAxisLabel: [11, "looseXAxisLabel"],
          legendPosition: [12, "legendPosition"],
          keepPlotLineOnClick: [13, "keepPlotLineOnClick"],
          actionLink: [14, "actionLink"],
          pointHoveredOption: [15, "pointHoveredOption"]
        }, {
          zoom: "zoom",
          expand: "expand",
          onPlotLineChanged: "onPlotLineChanged",
          onTooltipActionClicked: "onTooltipActionClicked",
          load: "load",
          pointHovered: "pointHovered"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.$implicit.graph;
          var currVal_1 = _v.parent.context.$implicit.entityRefId ? _v.parent.context.$implicit.entityRefId : _v.parent.context.$implicit.metrics.entityRefId;
          var currVal_2 = _co.id;
          var currVal_3 = _co.compactMode;
          var currVal_4 = 0;

          var currVal_5 = _co.graphTooltipVisible(_v.parent.context.$implicit);

          var currVal_6 = _co.getPopUpPosition(0);

          var currVal_7 = _v.parent.context.$implicit.metrics;
          var currVal_8 = _co.customizableThresholds;
          var currVal_9 = _co.selectedPlotLineValue;
          var currVal_10 = _co.zoomOutOptions;
          var currVal_11 = _co.looseXAxisLabel;
          var currVal_12 = _co.chartLegendPosition;
          var currVal_13 = _co.keepPlotLineOnClick;
          var currVal_14 = _co.actionLink;
          var currVal_15 = _co.pointHoveredOption;

          _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]);
        }, null);
      }

      function View_PerfChartsContainerComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.visibleGraphId === _v.context.$implicit.graph.id;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PerfChartsContainerComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "section", [["id", "filteredCharts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.flatData;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_PerfChartsContainerComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_20__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartsContainerComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isHeaderSectionVisible();

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.emptyChartsVisible;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.differentConsolidatedGraphs != null;

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = (_co.flatData == null ? null : _co.flatData.length) > 0 && !_co.visibleGraphId;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = (_co.flatData == null ? null : _co.flatData.length) > 0 && _co.visibleGraphId;

          _ck(_v, 15, 0, currVal_4);
        }, null);
      }

      function View_PerfChartsContainerComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-perf-charts-container", [], null, null, null, View_PerfChartsContainerComponent_0, RenderType_PerfChartsContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, _perf_charts_container_component__WEBPACK_IMPORTED_MODULE_21__["PerfChartsContainerComponent"], [_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_19__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_15__["ReferenceWatcher"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, null);
      }

      var PerfChartsContainerComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-perf-charts-container", _perf_charts_container_component__WEBPACK_IMPORTED_MODULE_21__["PerfChartsContainerComponent"], View_PerfChartsContainerComponent_Host_0, {
        title: "title",
        icon: "icon",
        subtitle: "subtitle",
        parentLoading: "parentLoading",
        isShowAllLinkVisible: "isShowAllLinkVisible",
        isAskVmwareLinkVisible: "isAskVmwareLinkVisible",
        looseXAxisLabel: "looseXAxisLabel",
        isZoomButtonVisible: "isZoomButtonVisible",
        isEmptyChartsVisible: "isEmptyChartsVisible",
        isShowGraphDescription: "isShowGraphDescription",
        showHeaderSection: "showHeaderSection",
        currentTimeRange: "currentTimeRange",
        zoomOutOptions: "zoomOutOptions",
        chartLegendPosition: "chartLegendPosition",
        collapsible: "collapsible",
        compactMode: "compactMode",
        customizableThresholds: "customizableThresholds",
        visibleGraphId: "visibleGraphId",
        keepPlotLineOnClick: "keepPlotLineOnClick",
        selectedPlotLineValue: "selectedPlotLineValue",
        actionLink: "actionLink",
        consolidatedEntitiesData: "consolidatedEntitiesData",
        data: "data",
        chartWidth: "chartWidth",
        chartHeight: "chartHeight",
        isRealtime: "isRealtime",
        consolidatedData: "consolidatedData"
      }, {
        clickShowAllLink: "clickShowAllLink",
        zoom: "zoom",
        allChartsLoaded: "allChartsLoaded",
        onPlotLineChanged: "onPlotLineChanged",
        onTooltipActionClicked: "onTooltipActionClicked"
      }, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=25-es5.js.map