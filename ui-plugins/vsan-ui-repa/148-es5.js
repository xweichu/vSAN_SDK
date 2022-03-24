(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148], {
    /***/
    "+u6b":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-base.directive.ts ***!
      \*************************************************************************************/

    /*! exports provided: ClrButtonBaseDirective */

    /***/
    function u6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonBaseDirective", function () {
        return ClrButtonBaseDirective;
      });
      /**
       * Use this class as base class for directive, which handles clr-button. It will help to link the rendered button with
       * the clr-button on which the directive is applied.
       */


      var ClrButtonBaseDirective = /*#__PURE__*/_createClass(function ClrButtonBaseDirective(clrButton) {
        _classCallCheck(this, ClrButtonBaseDirective);

        this.clrButton = clrButton;

        if (!clrButton) {
          return;
        } // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.


        if (!clrButton.name) {
          clrButton.name = Math.random().toString();
        }

        var directiveHolder = clrButton;
        directiveHolder.directives = directiveHolder.directives || [];
        directiveHolder.directives.push(this);
      });
      /***/

    },

    /***/
    "0mRq":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/signpost-title/signpost-title.directive.ts ***!
      \**********************************************************************************/

    /*! exports provided: SignpostTitleDirective */

    /***/
    function mRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignpostTitleDirective", function () {
        return SignpostTitleDirective;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * Attribute directive for setting a custom title to the clr-icon inside a clr-signpost.
       * It also adds aria-label with the same value and aria-expanded="false" to the button, holding the icon.
       * Used for changing the title when a clr-icon is not explicitly added inside a clr-signpost.
       */


      var SignpostTitleDirective = /*#__PURE__*/function () {
        function SignpostTitleDirective(el, renderer) {
          _classCallCheck(this, SignpostTitleDirective);

          this.el = el;
          this.renderer = renderer;
          this.BUTTON_TAG_NAME = "button";
          this.CLR_ICON_TAG_NAME = "clr-icon";
          this.TITLE_ATTRIBUTE = "title";
          this.ARIA_EXPANDED_ATTRIBUTE = "aria-expanded";
          this.ARIA_LABEL_ATTRIBUTE = "aria-label";
        }

        _createClass(SignpostTitleDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this.signpostTitle) {
              return;
            }

            var signpostIcon = this.el.nativeElement.getElementsByTagName(this.CLR_ICON_TAG_NAME).item(0);

            if (signpostIcon) {
              this.renderer.setAttribute(signpostIcon, this.TITLE_ATTRIBUTE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this.signpostTitle));
            }

            var button = this.el.nativeElement.getElementsByTagName(this.BUTTON_TAG_NAME).item(0);

            if (button) {
              this.renderer.setAttribute(button, this.ARIA_EXPANDED_ATTRIBUTE, "false");
              this.renderer.setAttribute(button, this.ARIA_LABEL_ATTRIBUTE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(this.signpostTitle));
            }
          }
        }]);

        return SignpostTitleDirective;
      }();
      /***/

    },

    /***/
    "2voF":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/common/component/upgrade/upgrade.module.ngfactory.js ***!
      \***************************************************************************/

    /*! exports provided: UpgradeModuleNgFactory */

    /***/
    function voF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpgradeModuleNgFactory", function () {
        return UpgradeModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _upgrade_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./upgrade.module */
      "BDBr");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _upgrade_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./upgrade-action.component.ngfactory */
      "Eh4K");
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


      var _upgrade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./upgrade.service */
      "Ndfo");
      /* harmony import */


      var _generated_vsan_upgrade_property_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../generated/vsan-upgrade-property-provider */
      "E9kw");
      /* harmony import */


      var _generated_vsan_upgrade_mutation_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../generated/vsan-upgrade-mutation-provider */
      "h1nB");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../generated/disk-management-service */
      "a6dL");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _validation_validation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../validation/validation.module */
      "90Ln");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _upgrade_action_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./upgrade-action.component */
      "+7Nn");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var UpgradeModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_upgrade_module__WEBPACK_IMPORTED_MODULE_1__["UpgradeModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _upgrade_action_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["UpgradeActionComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _upgrade_service__WEBPACK_IMPORTED_MODULE_9__["UpgradeService"], _upgrade_service__WEBPACK_IMPORTED_MODULE_9__["UpgradeService"], [_generated_vsan_upgrade_property_provider__WEBPACK_IMPORTED_MODULE_10__["VsanUpgradePropertyProvider"], _generated_vsan_upgrade_mutation_provider__WEBPACK_IMPORTED_MODULE_11__["VsanUpgradeMutationProvider"], _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_12__["DiskManagementService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_13__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_14__["CommonPipeModule"], _pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_14__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_15__["CommonDirectiveModule"], _directive_common_directive_module__WEBPACK_IMPORTED_MODULE_15__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _validation_validation_module__WEBPACK_IMPORTED_MODULE_16__["ValidationModule"], _validation_validation_module__WEBPACK_IMPORTED_MODULE_16__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_19__["PromptModule"], _dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_19__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _upgrade_module__WEBPACK_IMPORTED_MODULE_1__["UpgradeModule"], _upgrade_module__WEBPACK_IMPORTED_MODULE_1__["UpgradeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_13__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ROUTES"], function () {
          return [[{
            path: "upgrade",
            component: _upgrade_action_component__WEBPACK_IMPORTED_MODULE_21__["UpgradeActionComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "tsUx":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/external-link/external-link.directive.ts ***!
      \********************************************************************************/

    /*! exports provided: ExternalLinkDirective */

    /***/
    function tsUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalLinkDirective", function () {
        return ExternalLinkDirective;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @directive/clr-button-group/clr-button-base.directive */
      "+u6b");
      /**
       * Decorates a button or an anchor as external link. Requires one of the optional parameters articleId, helpId or url.
       *
       * @param external-link: Optional. Localization key of the text label of the external link. If omitted default label
       * will be used - "Learn more" for anchors or "Ask VMWare" for buttons.
       * @param articleId - Optional. Id of article in knowledge base.
       * @param helpId - Optional. Help id which will redirect to Knowledge Base.
       * @param url - Optional. External URL.
       */


      var ExternalLinkDirective = /*#__PURE__*/function (_directive_clr_button) {
        _inherits(ExternalLinkDirective, _directive_clr_button);

        var _super = _createSuper(ExternalLinkDirective);

        function ExternalLinkDirective(el, resolver, renderer, navigationService, // this variable will be initialized only if the host is clr-button
        clrButton) {
          var _this;

          _classCallCheck(this, ExternalLinkDirective);

          _this = _super.call(this, clrButton);
          _this.el = el;
          _this.resolver = resolver;
          _this.renderer = renderer;
          _this.navigationService = navigationService;
          _this.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
          _this.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
          _this.CONTAINER_CLASS = "icon-name-container";
          _this.NAVIGATION_EVENT_TYPE = "click";
          _this.LEAD_TO_NOWHERE_URL = "javascript://";
          _this.HTML_ELEMENT_SPAN_NAME = "span";
          _this.HTML_ELEMENT_ICON_NAME = "clr-icon";
          _this.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
          _this.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
          _this.ICON_SHAPE_ATTR_NAME = "shape";
          _this.ICON_SHAPE_ATTR_VALUE = "pop-out";
          _this.ICON_SIZE_ATTR_NAME = "size";
          _this.ICON_SIZE_ATTR_VALUE = "16";
          _this.ICON_CLASS_ATTR_NAME = "class";
          _this.ICON_CLASS_ATTR_VALUE = "link";
          _this.ICON_TITLE_ATTR_NAME = "title";
          _this.KB_URL = "http://kb.vmware.com/kb/";
          return _this;
        }

        _createClass(ExternalLinkDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var element = this.el.nativeElement; // continue only if element is HTML link or button

            if (!this.isLink(element) && !this.isButton(element)) {
              // element is clr-button, wait until html button for it is resolved - handled by resloveButton
              return;
            }

            this.prepareExternalLink(element);
          }
        }, {
          key: "resolveButton",
          value: function resolveButton(clrButton, button, index) {
            // only if element is clr-button. At this point the html button is already resolved. Apply on it.
            this.prepareExternalLink(button);
          }
        }, {
          key: "prepareExternalLink",
          value: function prepareExternalLink(element) {
            this.renderer.addClass(element, this.CONTAINER_CLASS);
            this.setText(element);

            if (this.isLink(element)) {
              this.decorateLink(element);
            } else {
              this.addLinkRole(element);
            }

            this.initializeNavigationHandler(element);
          }
        }, {
          key: "isButton",
          value: function isButton(element) {
            return element instanceof HTMLButtonElement;
          }
        }, {
          key: "isLink",
          value: function isLink(element) {
            return element instanceof HTMLAnchorElement;
          }
        }, {
          key: "setText",
          value: function setText(element) {
            var span = this.renderer.createElement(this.HTML_ELEMENT_SPAN_NAME);
            span.innerText = this.getText(element);
            this.renderer.appendChild(element, span);
            var icon = this.renderer.createElement(this.HTML_ELEMENT_ICON_NAME);
            icon.setAttribute(this.ICON_SHAPE_ATTR_NAME, this.ICON_SHAPE_ATTR_VALUE);
            icon.setAttribute(this.ICON_SIZE_ATTR_NAME, this.ICON_SIZE_ATTR_VALUE);
            icon.setAttribute(this.ICON_CLASS_ATTR_NAME, this.ICON_CLASS_ATTR_VALUE); // Set title of the icon for screen readers clarity

            icon.setAttribute(this.ICON_TITLE_ATTR_NAME, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.label.externalLink.icon"));
            this.renderer.appendChild(element, icon);
          }
        }, {
          key: "getText",
          value: function getText(element) {
            if (this.anchorText) {
              return this.anchorText;
            }

            var key = this.isButton(element) ? this.ASK_VMWARE_DEFAULT_TEXT_KEY : this.LEARN_MORE_DEFAULT_TEXT_KEY;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key);
          }
        }, {
          key: "decorateLink",
          value: function decorateLink(element) {
            var linkElement = element; // don't use href attribute. If omitted, the link will be not visualized properly.

            linkElement.href = this.LEAD_TO_NOWHERE_URL; // display link on same line

            linkElement.style.display = "inline-flex";
          }
        }, {
          key: "initializeNavigationHandler",
          value: function initializeNavigationHandler(element) {
            var _this2 = this;

            element.addEventListener(this.NAVIGATION_EVENT_TYPE, function () {
              if (_this2.helpId) {
                _this2.navigationService.askVMware(_this2.helpId);

                return;
              }

              if (_this2.articleId) {
                _this2.navigationService.navigateToAddress("".concat(_this2.KB_URL).concat(_this2.articleId));

                return;
              }

              if (_this2.url) {
                _this2.navigationService.navigateToAddress(_this2.url);
              }
            });
          } // Indicate external navigation by assigning "link" role

        }, {
          key: "addLinkRole",
          value: function addLinkRole(element) {
            this.renderer.setAttribute(element, this.HTML_ELEMENT_ROLE_ATTR_NAME, this.HTML_ELEMENT_ROLE_ATTR_VALUE);
          }
        }]);

        return ExternalLinkDirective;
      }(_directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__["ClrButtonBaseDirective"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=148-es5.js.map