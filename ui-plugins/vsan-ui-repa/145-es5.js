(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145], {
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
    "HAmR":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/file-analytics/edit-file-analytics-dialog.component.ngfactory.js ***!
      \*****************************************************************************************************/

    /*! exports provided: RenderType_EditFileAnalyticsDialogComponent, View_EditFileAnalyticsDialogComponent_0, View_EditFileAnalyticsDialogComponent_Host_0, EditFileAnalyticsDialogComponentNgFactory */

    /***/
    function HAmR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_EditFileAnalyticsDialogComponent", function () {
        return RenderType_EditFileAnalyticsDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EditFileAnalyticsDialogComponent_0", function () {
        return View_EditFileAnalyticsDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EditFileAnalyticsDialogComponent_Host_0", function () {
        return View_EditFileAnalyticsDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFileAnalyticsDialogComponentNgFactory", function () {
        return EditFileAnalyticsDialogComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_edit_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/edit-file-analytics.component.ngfactory */
      "zCuF");
      /* harmony import */


      var _shared_edit_file_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/edit-file-analytics.component */
      "WUZr");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component.ngfactory */
      "0JAx");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/component/dialog/prompt/prompt-edit.component */
      "ACap");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./edit-file-analytics-dialog.component */
      "sCig");
      /* harmony import */


      var _generated_vsan_file_service_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../generated/vsan-file-service-config-service */
      "khfO");
      /* harmony import */


      var _generated_file_analytics_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../generated/file-analytics-config-service */
      "uNtu");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_EditFileAnalyticsDialogComponent = [];

      var RenderType_EditFileAnalyticsDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??crt"]({
        encapsulation: 2,
        styles: styles_EditFileAnalyticsDialogComponent,
        data: {}
      });

      function View_EditFileAnalyticsDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 2, "vsan-edit-file-analytics", [], null, [[null, "fileServiceConfigChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("fileServiceConfigChange" === en) {
            var pd_0 = (_co.fileServiceConfig = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _shared_edit_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_EditFileAnalyticsComponent_0"], _shared_edit_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_EditFileAnalyticsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](1, 49152, null, 0, _shared_edit_file_analytics_component__WEBPACK_IMPORTED_MODULE_2__["EditFileAnalyticsComponent"], [], {
          isFileAnalyticsRuntimeSupported: [0, "isFileAnalyticsRuntimeSupported"],
          fileServiceConfig: [1, "fileServiceConfig"],
          isEdit: [2, "isEdit"]
        }, {
          fileServiceConfigChange: "fileServiceConfigChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;
          var currVal_1 = _co.fileServiceConfig;
          var currVal_2 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_EditFileAnalyticsDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_3__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](2, 0, null, null, 7, "vsan-edit-prompt", [], null, [[null, "alertMessagesChange"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.alertMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirm" === en) {
            var pd_1 = _co.ok() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EditPrompt_0"], _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EditPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"]], {
          title: [0, "title"],
          alertMessages: [1, "alertMessages"],
          blockButton: [2, "blockButton"],
          blockContent: [3, "blockContent"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, 0, 1, null, View_EditFileAnalyticsDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 0), "vsan.cluster.dialog.file.analytics.enable.title"));

          var currVal_1 = _co.alertMessages;
          var currVal_2 = _co.loading;
          var currVal_3 = _co.loading;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = _co.fileServiceConfig;

          _ck(_v, 8, 0, currVal_4);
        }, null);
      }

      function View_EditFileAnalyticsDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 1, "vsan-edit-file-analytics-dialog", [], null, null, null, View_EditFileAnalyticsDialogComponent_0, RenderType_EditFileAnalyticsDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](1, 114688, null, 0, _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditFileAnalyticsDialogComponent"], [_generated_vsan_file_service_config_service__WEBPACK_IMPORTED_MODULE_9__["VsanFileServiceConfigService"], _generated_file_analytics_config_service__WEBPACK_IMPORTED_MODULE_10__["FileAnalyticsConfigService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var EditFileAnalyticsDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??ccf"]("vsan-edit-file-analytics-dialog", _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditFileAnalyticsDialogComponent"], View_EditFileAnalyticsDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "UolP":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/file-services/file-analytics/edit-file-analytics.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: EditFileAnalyticsModule */

    /***/
    function UolP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFileAnalyticsModule", function () {
        return EditFileAnalyticsModule;
      });
      /* harmony import */


      var _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-file-analytics-dialog.component */
      "sCig");

      var routes = [{
        path: "",
        component: _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_0__["EditFileAnalyticsDialogComponent"]
      }];

      var EditFileAnalyticsModule = /*#__PURE__*/_createClass(function EditFileAnalyticsModule() {
        _classCallCheck(this, EditFileAnalyticsModule);
      });
      /***/

    },

    /***/
    "f0y+":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/file-services/file-analytics/edit-file-analytics.module.ngfactory.js ***!
      \*******************************************************************************************/

    /*! exports provided: EditFileAnalyticsModuleNgFactory */

    /***/
    function f0y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFileAnalyticsModuleNgFactory", function () {
        return EditFileAnalyticsModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _edit_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-file-analytics.module */
      "UolP");
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


      var _edit_file_analytics_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-file-analytics-dialog.component.ngfactory */
      "HAmR");
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


      var _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./edit-file-analytics-dialog.component */
      "sCig");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var EditFileAnalyticsModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??cmf"](_edit_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__["EditFileAnalyticsModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["??CodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??blNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??dzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_router_router_lNgFactory"], _edit_file_analytics_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["EditFileAnalyticsDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bk"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bm"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ce"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ch"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??dx"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??dx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_16__["FileServicesCommonModule"], _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_16__["FileServicesCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["??angular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _edit_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__["EditFileAnalyticsModule"], _edit_file_analytics_module__WEBPACK_IMPORTED_MODULE_1__["EditFileAnalyticsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () {
          return [[{
            path: "",
            component: _edit_file_analytics_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EditFileAnalyticsDialogComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "sCig":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/file-services/file-analytics/edit-file-analytics-dialog.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: EditFileAnalyticsDialogComponent */

    /***/
    function sCig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFileAnalyticsDialogComponent", function () {
        return EditFileAnalyticsDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var EditFileAnalyticsDialogComponent = /*#__PURE__*/function () {
        function EditFileAnalyticsDialogComponent(fileServicesConfigService, fileAnalyticsService) {
          _classCallCheck(this, EditFileAnalyticsDialogComponent);

          this.fileServicesConfigService = fileServicesConfigService;
          this.fileAnalyticsService = fileAnalyticsService;
          this.loading = true;
        }

        _createClass(EditFileAnalyticsDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObject;
                      _context.prev = 1;
                      _context.next = 4;
                      return this.fileAnalyticsService.getFileAnalyticsConfigData(this.clusterRef);

                    case 4:
                      this.fileServiceConfig = _context.sent;
                      this.originalFileAnalyticsEnabled = this.fileServiceConfig.isFileAnalyticsEnabled;
                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](1);
                      this.handleError(_context.t0);

                    case 11:
                      _context.prev = 11;
                      this.loading = false;
                      return _context.finish(11);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 8, 11, 14]]);
            }));
          }
        }, {
          key: "ok",
          value: function ok() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var taskRef;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.isConfigChanged()) {
                        _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].closeModalDialog();
                      }

                      this.alertMessages = [];
                      this.loading = true;
                      _context2.prev = 3;
                      _context2.next = 6;
                      return this.fileServicesConfigService.configureFileService(this.clusterRef, this.fileServiceConfig);

                    case 6:
                      taskRef = _context2.sent;

                      _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].closeModalDialog(taskRef);

                      _context2.next = 13;
                      break;

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2["catch"](3);
                      this.handleError(_context2.t0);

                    case 13:
                      _context2.prev = 13;
                      this.loading = false;
                      return _context2.finish(13);

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 10, 13, 16]]);
            }));
          }
        }, {
          key: "isConfigChanged",
          value: function isConfigChanged() {
            return this.originalFileAnalyticsEnabled !== this.fileServiceConfig.isFileAnalyticsEnabled;
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.alertMessages.push(error);
          }
        }]);

        return EditFileAnalyticsDialogComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=145-es5.js.map