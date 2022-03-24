(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144], {
    /***/
    "6EMn":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/edit-share-file-analytics/edit-share-file-analytics.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: EditShareFileAnalyticsComponent */

    /***/
    function EMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditShareFileAnalyticsComponent", function () {
        return EditShareFileAnalyticsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var EditShareFileAnalyticsComponent = /*#__PURE__*/function () {
        function EditShareFileAnalyticsComponent(fileSharesService) {
          _classCallCheck(this, EditShareFileAnalyticsComponent);

          this.fileSharesService = fileSharesService;
        }

        _createClass(EditShareFileAnalyticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext(); // Clone the share data to avoid the shares list getting changed.

            this.share = JSON.parse(JSON.stringify(this.context.share));
            this.originalIsFileAnalyticsEnabled = this.share.isFileAnalyticsEnabled;
          }
        }, {
          key: "confirm",
          value: function confirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var task;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      this.loading = true;
                      _context.next = 4;
                      return this.fileSharesService.updateShare(this.context.clusterRef, this.context.shareUuid, this.share, null, this.context.isSmbAbeSupported);

                    case 4:
                      task = _context.sent;

                      _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].closeModalDialog(task);

                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](0);
                      this.errors = [_context.t0];

                    case 11:
                      _context.prev = 11;
                      this.loading = false;
                      return _context.finish(11);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 8, 11, 14]]);
            }));
          }
        }]);

        return EditShareFileAnalyticsComponent;
      }();
      /***/

    },

    /***/
    "8MBn":
    /*!************************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/edit-share-file-analytics/edit-share-file-analytics.module.ngfactory.js ***!
      \************************************************************************************************************/

    /*! exports provided: EditShareFileAnalyticsModuleNgFactory */

    /***/
    function MBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditShareFileAnalyticsModuleNgFactory", function () {
        return EditShareFileAnalyticsModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _edit_share_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-share-file-analytics.module */
      "CgFj");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-share-file-analytics.component.ngfactory */
      "k5FR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../shared/file-services-common.module */
      "DwxB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./edit-share-file-analytics.component */
      "6EMn");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var EditShareFileAnalyticsModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_edit_share_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__["EditShareFileAnalyticsModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["EditShareFileAnalyticsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_16__["FileServicesCommonModule"], _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_16__["FileServicesCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _edit_share_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__["EditShareFileAnalyticsModule"], _edit_share_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__["EditShareFileAnalyticsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () {
          return [[{
            path: "",
            component: _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_18__["EditShareFileAnalyticsComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "CgFj":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/edit-share-file-analytics/edit-share-file-analytics.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: EditShareFileAnalyticsModule */

    /***/
    function CgFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditShareFileAnalyticsModule", function () {
        return EditShareFileAnalyticsModule;
      });
      /* harmony import */


      var _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-share-file-analytics.component */
      "6EMn");

      var routes = [{
        path: "",
        component: _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_0__["EditShareFileAnalyticsComponent"]
      }];

      var EditShareFileAnalyticsModule = /*#__PURE__*/_createClass(function EditShareFileAnalyticsModule() {
        _classCallCheck(this, EditShareFileAnalyticsModule);
      });
      /***/

    },

    /***/
    "DwxB":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/file-services/shared/file-services-common.module.ts ***!
      \**************************************************************************/

    /*! exports provided: FileServicesCommonModule */

    /***/
    function DwxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileServicesCommonModule", function () {
        return FileServicesCommonModule;
      });

      var FileServicesCommonModule = /*#__PURE__*/_createClass(function FileServicesCommonModule() {
        _classCallCheck(this, FileServicesCommonModule);
      });
      /***/

    },

    /***/
    "k5FR":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/edit-share-file-analytics/edit-share-file-analytics.component.ngfactory.js ***!
      \***************************************************************************************************************/

    /*! exports provided: RenderType_EditShareFileAnalyticsComponent, View_EditShareFileAnalyticsComponent_0, View_EditShareFileAnalyticsComponent_Host_0, EditShareFileAnalyticsComponentNgFactory */

    /***/
    function k5FR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_EditShareFileAnalyticsComponent", function () {
        return RenderType_EditShareFileAnalyticsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EditShareFileAnalyticsComponent_0", function () {
        return View_EditShareFileAnalyticsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EditShareFileAnalyticsComponent_Host_0", function () {
        return View_EditShareFileAnalyticsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditShareFileAnalyticsComponentNgFactory", function () {
        return EditShareFileAnalyticsComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component.ngfactory */
      "0JAx");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component */
      "ACap");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _shared_edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/edit-share-file-analytics.component.ngfactory */
      "EFX+");
      /* harmony import */


      var _shared_edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/edit-share-file-analytics.component */
      "vnkt");
      /* harmony import */


      var _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-share-file-analytics.component */
      "6EMn");
      /* harmony import */


      var _generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../generated/vsan-file-shares-service */
      "DiBh");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_EditShareFileAnalyticsComponent = [];

      var RenderType_EditShareFileAnalyticsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_EditShareFileAnalyticsComponent,
        data: {}
      });

      function View_EditShareFileAnalyticsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 6, "vsan-edit-prompt", [], null, [[null, "alertMessagesChange"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.errors = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirm" === en) {
            var pd_1 = _co.confirm() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EditPrompt_0"], _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EditPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          alertMessages: [2, "alertMessages"],
          blockButton: [3, "blockButton"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "vsan-edit-share-file-analytics", [], null, null, null, _shared_edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_EditShareFileAnalyticsComponent_0"], _shared_edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_EditShareFileAnalyticsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _shared_edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_6__["EditShareFileAnalyticsComponent"], [], {
          share: [0, "share"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.fileAnalytics.title"));

          var currVal_1 = _co.share.name;
          var currVal_2 = _co.errors;
          var currVal_3 = _co.loading || _co.originalIsFileAnalyticsEnabled === _co.share.isFileAnalyticsEnabled;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = _co.share;

          _ck(_v, 7, 0, currVal_4);
        }, null);
      }

      function View_EditShareFileAnalyticsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EditShareFileAnalyticsComponent_0, RenderType_EditShareFileAnalyticsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_7__["EditShareFileAnalyticsComponent"], [_generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_8__["VsanFileSharesService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var EditShareFileAnalyticsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_7__["EditShareFileAnalyticsComponent"], View_EditShareFileAnalyticsComponent_Host_0, {}, {}, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=144-es5.js.map