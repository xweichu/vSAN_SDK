(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83], {
    /***/
    "3fk9":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/auto-claim-summary.data.ts ***!
      \*********************************************************************************/

    /*! exports provided: AutoClaimSummaryData */

    /***/
    function fk9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoClaimSummaryData", function () {
        return AutoClaimSummaryData;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Holds data for the total claimed capacity and disk count
       * when using vSAN managed claiming, e.g. vSAN MAX auto claim.
       */


      var AutoClaimSummaryData = /*#__PURE__*/_createClass(function AutoClaimSummaryData(disksCount, totalClaimedCapacity) {
        _classCallCheck(this, AutoClaimSummaryData);

        this.disksCount = disksCount;
        this.totalClaimedCapacity = totalClaimedCapacity;
      });
      /***/

    },

    /***/
    "74bw":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/auto-claim-disks.data.ts ***!
      \*******************************************************************************/

    /*! exports provided: AutoClaimDisksData */

    /***/
    function bw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoClaimDisksData", function () {
        return AutoClaimDisksData;
      });
      /**
       * Holds data for disks with the same vendor, model and size.
       * It is used to represent the auto Claim disks information for vSAN MAX.
       * .
       */


      var AutoClaimDisksData = /*#__PURE__*/function () {
        function AutoClaimDisksData(modelName, diskCapacity, diskType) {
          _classCallCheck(this, AutoClaimDisksData);

          this.modelName = modelName;
          this.diskCapacity = diskCapacity;
          this.diskType = diskType;
          this.disksCount = 0;
          this.totalCapacity = 0;
        }

        _createClass(AutoClaimDisksData, [{
          key: "incrementDisks",
          value: function incrementDisks() {
            this.disksCount++;
            this.totalCapacity += this.diskCapacity;
          }
        }]);

        return AutoClaimDisksData;
      }();
      /***/

    },

    /***/
    "7oR1":
    /*!*****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-mode-toggle.component.ngfactory.js ***!
      \*****************************************************************************************/

    /*! exports provided: RenderType_ClaimModeToggleComponent, View_ClaimModeToggleComponent_0, View_ClaimModeToggleComponent_Host_0, ClaimModeToggleComponentNgFactory */

    /***/
    function oR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimModeToggleComponent", function () {
        return RenderType_ClaimModeToggleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimModeToggleComponent_0", function () {
        return View_ClaimModeToggleComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimModeToggleComponent_Host_0", function () {
        return View_ClaimModeToggleComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimModeToggleComponentNgFactory", function () {
        return ClaimModeToggleComponentNgFactory;
      });
      /* harmony import */


      var _claim_mode_toggle_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./claim-mode-toggle.scss.shim.ngstyle */
      "gTHk");
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


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _claim_mode_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./claim-mode-toggle.component */
      "x+Ta");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimModeToggleComponent = [_claim_mode_toggle_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ClaimModeToggleComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_ClaimModeToggleComponent,
        data: {}
      });

      function View_ClaimModeToggleComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.cluster.hci.configureHciCluster.wizard.claimDisksPage.autoClaimToggle.signpost.part1"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.cluster.hci.configureHciCluster.wizard.claimDisksPage.autoClaimToggle.signpost.part2"));

          _ck(_v, 7, 0, currVal_1);
        });
      }

      function View_ClaimModeToggleComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.cluster.hci.configureHciCluster.wizard.claimDisksPage.autoClaimToggle.signpost.notAllowed"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_ClaimModeToggleComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 9, "clr-signpost-content", [["clrPosition", "bottom-middle"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??h"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??dg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??df"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_ClaimModeToggleComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_ClaimModeToggleComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = "bottom-middle";

          _ck(_v, 2, 0, currVal_3);

          var currVal_4 = _co.isAutoClaimAllowed;

          _ck(_v, 5, 0, currVal_4);

          var currVal_5 = !_co.isAutoClaimAllowed;

          _ck(_v, 8, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      function View_ClaimModeToggleComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 18, "clr-toggle-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 16777216, null, 0, 6, "input", [["clrToggle", ""], ["id", "auto-claim"], ["name", "auto-claim"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.isAutoClaim = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, ""]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](16, 0, null, 1, 3, "label", [["for", "auto-claim"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](17, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??b"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??bd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](18, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](22, 0, null, null, 11, "clr-signpost", [["id", "auto-claim-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??h"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??dg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??dg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??df"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["??df"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](26, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 2, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](28, 4210688, null, 0, _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_7__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_ClaimModeToggleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](32, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_10 = "auto-claim";
          var currVal_11 = !_co.isAutoClaimAllowed;
          var currVal_12 = _co.isAutoClaim;

          _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12);

          var currVal_13 = "auto-claim";

          _ck(_v, 14, 0, currVal_13);

          var currVal_15 = "auto-claim";

          _ck(_v, 17, 0, currVal_15);

          var currVal_18 = null;

          _ck(_v, 32, 0, currVal_18);
        }, function (_ck, _v) {
          var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).toggle;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).toggle;

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassPending;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).id;

          _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 17).forAttr;

          _ck(_v, 16, 0, currVal_14);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 18, 0, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.cluster.hci.configureHciCluster.wizard.claimDisksPage.autoClaimToggle.title"));

          _ck(_v, 18, 0, currVal_16);

          var currVal_17 = true;

          _ck(_v, 22, 0, currVal_17);
        });
      }

      function View_ClaimModeToggleComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-claim-mode-toggle", [], null, null, null, View_ClaimModeToggleComponent_0, RenderType_ClaimModeToggleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _claim_mode_toggle_component__WEBPACK_IMPORTED_MODULE_8__["ClaimModeToggleComponent"], [], null, null)], null, null);
      }

      var ClaimModeToggleComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-claim-mode-toggle", _claim_mode_toggle_component__WEBPACK_IMPORTED_MODULE_8__["ClaimModeToggleComponent"], View_ClaimModeToggleComponent_Host_0, {
        isAutoClaim: "isAutoClaim",
        isAutoClaimAllowed: "isAutoClaimAllowed"
      }, {
        isAutoClaimChange: "isAutoClaimChange"
      }, []);
      /***/

    },

    /***/
    "Lhp/":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/auto-claim-disks.scss.shim.ngstyle.js ***!
      \**************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Lhp(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%], .disks-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%], .disks-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%], .disks-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .disks-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child, .disks-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.disks-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.card-header[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.card-header[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.card-header[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.card-header[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.card-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .card-block[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.card-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.compatible-capacity[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--clarity-v4-label-success-text-color);\n}\n.incompatible-capacity[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--clarity-v4-label-danger-text-color);\n}\n.disk-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n.disk-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 1.2rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.9rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.9rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.disk-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2F1dG8tY2xhaW0tZGlza3Muc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFjSDtBRThCRztFQUNHLGdDQUFBO0FGNUJOO0FFOEJHOzs7RUFHRyxnQ0FBQTtBRjVCTjtBRThCRztFQUNHLDhCQUFBO0FGNUJOO0FBckJBO0VBQ0csZ0JBQUE7QUF3Qkg7QUFyQkE7RUFFRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXVCSDtBRXFCRztFQUNLLCtCQUFBO0FGbkJSO0FFcUJHO0VBSUcsK0JBQUE7QUZ0Qk47QUV1Qk07RUFDRyw0QkFBQTtBRnJCVDtBRXdCRztFQUVHLCtCQUFBO0FGdkJOO0FFeUJNO0VBQ0csNEJBQUE7QUZ2QlQ7QUUwQkc7RUFDRyw2QkFBQTtBRnhCTjtBRVhHO0VBQ0csZ0NBQUE7QUZjTjtBRVpHOztFQUdHLGdDQUFBO0FGYU47QUVYRztFQUNHLDhCQUFBO0FGYU47QUEzQ0E7RUFDRyxnQkd3RzBCO0VIdkcxQixpREcyQ3dCO0FIRzNCO0FBM0NBO0VBQ0csZ0JHbUcwQjtFSGxHMUIsZ0RHNEN1QjtBSEUxQjtBQTNDQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0FBOENIO0FFdkJHO0VBQ0ssK0JBQUE7QUZ5QlI7QUV2Qkc7RUFJRywrQkFBQTtBRnNCTjtBRXJCTTtFQUNHLCtCQUFBO0FGdUJUO0FFcEJHO0VBRUcsK0JBQUE7QUZxQk47QUVuQk07RUFDRywrQkFBQTtBRnFCVDtBRWxCRztFQUNHLDZCQUFBO0FGb0JOO0FBOURHO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWdFTjtBRTlDRztFQUNLLCtCQUFBO0FGZ0RSO0FFOUNHO0VBSUcsK0JBQUE7QUY2Q047QUU1Q007RUFDRyw0QkFBQTtBRjhDVDtBRTNDRztFQUVHLCtCQUFBO0FGNENOO0FFMUNNO0VBQ0csNEJBQUE7QUY0Q1Q7QUV6Q0c7RUFDRyw2QkFBQTtBRjJDTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9kaXNrbWdtdC9hdXRvLWNsYWltLWRpc2tzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3QsIC5kaXNrcy1jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4uZGlza3MtY29udGFpbmVyIHtcbiAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAvLyBBbGlnbiBhbnkgaXRlbXMgaW5zaWRlIGEgY2FyZCBoZWFkZXIgc3VjaCBhcyBzaWducG9zdCwgbGFiZWwsIGV0Yy5cbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgLy8gQWRkIHNwYWNlIGJldHdlZW4gb3ZlcmZsb3dpbmcgdGV4dChpLmUuLCBlbGxpcHNlcykgYW5kIGxhYmVsXG4gICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcpO1xufVxuXG4uY2FyZC1ibG9jayB7XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLmNvbXBhdGlibGUtY2FwYWNpdHkge1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDtcbiAgIGNvbG9yOiAkbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yO1xufVxuXG4uaW5jb21wYXRpYmxlLWNhcGFjaXR5IHtcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ7XG4gICBjb2xvcjogJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yO1xufVxuXG4uZGlzay1kZXRhaWxzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZygkdnNhbi1lbGVtZW50LXNwYWNpbmcqMik7XG4gICA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgQGluY2x1ZGUgc2libGluZy1yaWdodC1zcGFjaW5nKCR2c2FuLWVsZW1lbnQtc3BhY2luZy8yKTtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "dEj3":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/auto-claim-disks.component.ngfactory.js ***!
      \****************************************************************************************/

    /*! exports provided: RenderType_AutoClaimDisksComponent, View_AutoClaimDisksComponent_0, View_AutoClaimDisksComponent_Host_0, AutoClaimDisksComponentNgFactory */

    /***/
    function dEj3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AutoClaimDisksComponent", function () {
        return RenderType_AutoClaimDisksComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AutoClaimDisksComponent_0", function () {
        return View_AutoClaimDisksComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AutoClaimDisksComponent_Host_0", function () {
        return View_AutoClaimDisksComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoClaimDisksComponentNgFactory", function () {
        return AutoClaimDisksComponentNgFactory;
      });
      /* harmony import */


      var _auto_claim_disks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auto-claim-disks.scss.shim.ngstyle */
      "Lhp/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validation/validation.component */
      "ie44");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _pipe_FileSizePipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../pipe/FileSizePipe */
      "96Ie");
      /* harmony import */


      var _pipe_disk_type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../pipe/disk-type.pipe */
      "G/TU");
      /* harmony import */


      var _auto_claim_disks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./auto-claim-disks.component */
      "gfRN");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AutoClaimDisksComponent = [_auto_claim_disks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AutoClaimDisksComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_AutoClaimDisksComponent,
        data: {}
      });

      function View_AutoClaimDisksComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_AutoClaimDisksComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_AutoClaimDisksComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "vsan-validation", [], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.AlertType.WARNING;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.disk.auto.claim.vsanMax.alert.label"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_AutoClaimDisksComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 43, "div", [["class", "card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 8, "div", [["class", "icon-name-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 2, "clr-icon", [["shape", "hard-drive-disks"], ["size", "24"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_5__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](12, 0, null, null, 30, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](14, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](18, 0, null, null, 23, "div", [["class", "disk-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](20, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](22, 0, null, null, 2, "span", [["class", "p4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](23, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](26, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](27, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](28, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](31, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](33, 0, null, null, 2, "span", [["class", "p4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](34, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](35, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](37, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](38, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](39, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getClaimLabel(_v.parent.parent.context.compatible, _v.parent.parent.context.disksData.get(_v.parent.context.$implicit).get(_v.context.$implicit).disksCount);

          _ck(_v, 9, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.disk.auto.claim.vsanMax.disk.details.label"));

          _ck(_v, 15, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.disk.auto.claim.vsanMax.disk.capacity.label"));

          _ck(_v, 23, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 27, 0, _ck(_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 1), _v.context.$implicit));

          _ck(_v, 27, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 34, 0, _ck(_v, 35, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 0), "vsan.disk.auto.claim.vsanMax.disk.type.label"));

          _ck(_v, 34, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 38, 0, _ck(_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent, 2), _v.parent.parent.context.disksData.get(_v.parent.context.$implicit).get(_v.context.$implicit).diskType));

          _ck(_v, 38, 0, currVal_5);
        });
      }

      function View_AutoClaimDisksComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 26, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 20, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 16777216, null, null, 3, "h4", [["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](9, 0, null, null, 12, "div", [["class", "horizontally-centered-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](11, 0, null, null, 4, "span", [["class", "label"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](13, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](14, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](17, 0, null, null, 3, "h4", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](19, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](20, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_AutoClaimDisksComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          _ck(_v, 6, 0);

          var currVal_4 = "label";
          var currVal_5 = _v.parent.context.compatible ? "label-success" : "label-danger";

          _ck(_v, 12, 0, currVal_4, currVal_5);

          var currVal_7 = _v.parent.context.compatible ? "compatible-capacity" : "incompatible-capacity";

          _ck(_v, 18, 0, currVal_7);

          var currVal_9 = _v.parent.context.disksData.get(_v.context.$implicit).keys();

          _ck(_v, 25, 0, currVal_9);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "hidden";
          var currVal_1 = "ellipsis";
          var currVal_2 = "nowrap";

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _v.context.$implicit;

          _ck(_v, 7, 0, currVal_3);

          var currVal_6 = _v.parent.context.compatible ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.disk.auto.claim.vsanMax.compatible.label")) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 13, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 0), "vsan.disk.auto.claim.vsanMax.incompatible.label"));

          _ck(_v, 13, 0, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent, 1), _co.getTotalCapacityForDiskModel(_v.parent.context.disksData.get(_v.context.$implicit))));

          _ck(_v, 19, 0, currVal_8);
        });
      }

      function View_AutoClaimDisksComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_AutoClaimDisksComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _v.context.disksData.keys();

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_AutoClaimDisksComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_FileSizePipe__WEBPACK_IMPORTED_MODULE_10__["FileSizePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_disk_type_pipe__WEBPACK_IMPORTED_MODULE_11__["DiskTypePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 9, "div", [["class", "disks-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 2, null, View_AutoClaimDisksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](8, {
          disksData: 0,
          compatible: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 2, null, View_AutoClaimDisksComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](12, {
          disksData: 0,
          compatible: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_AutoClaimDisksComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, [["disks", 2]], null, 0, null, View_AutoClaimDisksComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 8, 0, _co.compatibleDisks, true);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 19);

          _ck(_v, 7, 0, currVal_0, currVal_1);

          var currVal_2 = _ck(_v, 12, 0, _co.incompatibleDisks, false);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 19);

          _ck(_v, 11, 0, currVal_2, currVal_3);

          var currVal_4 = (_co.compatibleDisks == null ? null : _co.compatibleDisks.size) > 0 && (_co.incompatibleDisks == null ? null : _co.incompatibleDisks.size) > 0;

          _ck(_v, 17, 0, currVal_4);
        }, null);
      }

      function View_AutoClaimDisksComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-auto-claim-disks", [], null, null, null, View_AutoClaimDisksComponent_0, RenderType_AutoClaimDisksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 114688, null, 0, _auto_claim_disks_component__WEBPACK_IMPORTED_MODULE_12__["AutoClaimDisksComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AutoClaimDisksComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-auto-claim-disks", _auto_claim_disks_component__WEBPACK_IMPORTED_MODULE_12__["AutoClaimDisksComponent"], View_AutoClaimDisksComponent_Host_0, {
        hostsClaimingData: "hostsClaimingData"
      }, {
        claimedDisksChange: "claimedDisksChange"
      }, []);
      /***/

    },

    /***/
    "gTHk":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-mode-toggle.scss.shim.ngstyle.js ***!
      \***************************************************************************************/

    /*! exports provided: styles */

    /***/
    function gTHk(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n  clr-signpost .signpost-content .signpost-wrap .signpost-content-body {\n  max-height: 15rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NsYWltLW1vZGUtdG9nZ2xlLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQWNIO0FFNkNHO0VBQ0ssK0JBQUE7QUYzQ1I7QUU2Q0c7RUFJRywrQkFBQTtBRjlDTjtBRStDTTtFQUNHLCtCQUFBO0FGN0NUO0FFZ0RHO0VBRUcsK0JBQUE7QUYvQ047QUVpRE07RUFDRywrQkFBQTtBRi9DVDtBRWtERztFQUNHLDZCQUFBO0FGaEROO0FBM0JHO0VBRUcsNEJBQUE7QUE2Qk4iLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvZGlza21nbXQvY2xhaW0tbW9kZS10b2dnbGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmc7XG59XG5cbjo6bmctZGVlcCB7XG4gICBjbHItc2lnbnBvc3QgLnNpZ25wb3N0LWNvbnRlbnQgLnNpZ25wb3N0LXdyYXAgLnNpZ25wb3N0LWNvbnRlbnQtYm9keSB7XG4gICAgICAvLyBXZSBoYXZlIGxvdHMgb2Ygc3BhY2UgZm9yIHRoaXMgc2lnbnBvc3QsIG5vIG5lZWQgdG8gdHJ1bmNhdGUgaXRcbiAgICAgIG1heC1oZWlnaHQ6IDE1cmVtICFpbXBvcnRhbnQ7XG4gICB9XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "gfRN":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/auto-claim-disks.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AutoClaimDisksComponent */

    /***/
    function gfRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoClaimDisksComponent", function () {
        return AutoClaimDisksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_diskmgmt_model_auto_claim_disks_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/diskmgmt/model/auto-claim-disks.data */
      "74bw");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _component_diskmgmt_model_vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/diskmgmt/model/vsan-disk-list-item */
      "raSY");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @component/validation/alert-type */
      "4KIt");
      /* harmony import */


      var _component_diskmgmt_model_auto_claim_summary_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @component/diskmgmt/model/auto-claim-summary.data */
      "3fk9");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var AutoClaimDisksComponent = /*#__PURE__*/function () {
        function AutoClaimDisksComponent() {
          _classCallCheck(this, AutoClaimDisksComponent);

          this.AlertType = _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_5__["AlertType"];
          this.claimedDisksChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Group the disks per model+vendor name, compatibility and size

          this.compatibleDisks = new Map();
          this.incompatibleDisks = new Map();
        }

        _createClass(AutoClaimDisksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a; // Map the incoming hostsClaimingData into collections of disks grouped by disk model and size


            if (!((_a = this.hostsClaimingData) === null || _a === void 0 ? void 0 : _a.size)) {
              // TODO dtsvetkova: Implement no disks view - I asked the UX for this, will update when available.
              return;
            }

            this.populateViewData();
          }
        }, {
          key: "populateViewData",
          value: function populateViewData() {
            var _this = this;

            var totalClaimedCapacity = 0;
            var totalClaimedDisks = 0; // We do not care for the hosts in the auto claim view, so only processing the values.

            var _iterator = _createForOfIteratorHelper(this.hostsClaimingData.values()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var claimData = _step.value;

                if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(claimData.notInUseDisks)) {
                  return;
                }

                claimData.notInUseDisks.filter(function (diskData) {
                  return !!diskData.disk;
                }).map(function (diskData) {
                  return new _component_diskmgmt_model_vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_3__["VsanDiskListItem"](diskData, false, false);
                }).forEach(function (disk) {
                  if (disk.isVsanMaxCompatible) {
                    _this.updateDisksData(disk, _this.compatibleDisks);

                    ++totalClaimedDisks;
                    totalClaimedCapacity += disk.capacityNum;
                    disk.claimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__["ClaimOption"].SingleTier;
                  } else {
                    _this.updateDisksData(disk, _this.incompatibleDisks);

                    disk.claimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_7__["ClaimOption"].DoNotClaim;
                  }
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.claimedDisksChange.emit(new _component_diskmgmt_model_auto_claim_summary_data__WEBPACK_IMPORTED_MODULE_6__["AutoClaimSummaryData"](totalClaimedDisks, totalClaimedCapacity));
          }
        }, {
          key: "updateDisksData",
          value: function updateDisksData(disk, disksToUpdate) {
            var diskModel = disk.vendor.concat(" ", disk.diskModel);

            if (!disksToUpdate.has(diskModel)) {
              disksToUpdate.set(diskModel, new Map());
            }

            var sameModelDisks = disksToUpdate.get(diskModel);
            var diskCapacity = disk.capacityNum;

            if (!sameModelDisks.has(diskCapacity)) {
              sameModelDisks.set(diskCapacity, new _component_diskmgmt_model_auto_claim_disks_data__WEBPACK_IMPORTED_MODULE_1__["AutoClaimDisksData"](diskModel, disk.capacityNum, _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].getScsiDiskType(disk.isFlash)));
            }

            sameModelDisks.get(diskCapacity).incrementDisks();
          }
        }, {
          key: "getTotalCapacityForDiskModel",
          value: function getTotalCapacityForDiskModel(diskModelData) {
            return Array.from(diskModelData.values()).reduce(function (acc, diskData) {
              return acc += diskData.totalCapacity;
            }, 0);
          }
        }, {
          key: "getClaimLabel",
          value: function getClaimLabel(compatible, disksCount) {
            if (compatible) {
              return disksCount === 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.auto.claim.vsanMax.compatible.claim.label.singular") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.auto.claim.vsanMax.compatible.claim.label.plural", disksCount);
            }

            return disksCount === 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.auto.claim.vsanMax.incompatible.claim.label.singular") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.disk.auto.claim.vsanMax.incompatible.claim.label.plural", disksCount);
          }
        }]);

        return AutoClaimDisksComponent;
      }();
      /***/

    },

    /***/
    "kE5S":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/service/fault-domain-validation.service.ts ***!
      \************************************************************************/

    /*! exports provided: FaultDomainValidationService */

    /***/
    function kE5S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainValidationService", function () {
        return FaultDomainValidationService;
      });
      /* harmony import */


      var _generated_connection_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/connection-state */
      "dOyF");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * Service to validate if the user is able to create/edit fault domain
       */


      var FaultDomainValidationService = /*#__PURE__*/function () {
        function FaultDomainValidationService() {
          _classCallCheck(this, FaultDomainValidationService);
        }

        _createClass(FaultDomainValidationService, [{
          key: "getFaultDomainValidationErrors",
          value: function getFaultDomainValidationErrors(clusterHostFaultDomainData) {
            var errors = [];
            clusterHostFaultDomainData.filter(function (faultDomainData) {
              return faultDomainData.faultDomainName && !faultDomainData.canChangeFaultDomain;
            }).forEach(function (faultDomainData) {
              if (faultDomainData.connectionState !== _generated_connection_state__WEBPACK_IMPORTED_MODULE_0__["ConnectionState"].connected) {
                errors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.generalConfig.fdError.disconnected", faultDomainData.name));
              }
            });
            return errors;
          }
        }]);

        return FaultDomainValidationService;
      }();
      /***/

    },

    /***/
    "tMpm":
    /*!*******************************************************!*\
      !*** ./src/app/vsan/common/util/witness-host.util.ts ***!
      \*******************************************************/

    /*! exports provided: WitnessHostUtil */

    /***/
    function tMpm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostUtil", function () {
        return WitnessHostUtil;
      });
      /* harmony import */


      var _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-cluster-type */
      "ZIzF");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var WitnessHostUtil = /*#__PURE__*/function () {
        function WitnessHostUtil() {
          _classCallCheck(this, WitnessHostUtil);
        }

        _createClass(WitnessHostUtil, null, [{
          key: "isClaimDisksPageVisible",
          value:
          /**
           * Used to check if the claim disks page for a witness host must be shown to the user in various wizards.
           */
          function isClaimDisksPageVisible(configType, hasClaimedDisks, isWitnessDeployedFromOvf, isVsanMaxWorkflow) {
            if (configType !== _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_0__["VsanClusterType"].STRETCHED_CLUSTER && configType !== _generated_vsan_cluster_type__WEBPACK_IMPORTED_MODULE_0__["VsanClusterType"].TWO_HOST_VSAN_CLUSTER) {
              return false;
            } // Show the claim disks page if it doesn't already have claimed disks or if it is deployed from OVF


            return isVsanMaxWorkflow && !hasClaimedDisks && !isWitnessDeployedFromOvf || !isVsanMaxWorkflow && !hasClaimedDisks;
          }
        }]);

        return WitnessHostUtil;
      }();
      /***/

    },

    /***/
    "x+Ta":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-mode-toggle.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ClaimModeToggleComponent */

    /***/
    function xTa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimModeToggleComponent", function () {
        return ClaimModeToggleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ClaimModeToggleComponent = /*#__PURE__*/function () {
        function ClaimModeToggleComponent() {
          _classCallCheck(this, ClaimModeToggleComponent);

          this.isAutoClaimChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ClaimModeToggleComponent, [{
          key: "isAutoClaim",
          get: function get() {
            return this._isAutoClaim;
          },
          set: function set(value) {
            this._isAutoClaim = value;
            this.isAutoClaimChange.emit(this.isAutoClaim);
          }
        }]);

        return ClaimModeToggleComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=83-es5.js.map