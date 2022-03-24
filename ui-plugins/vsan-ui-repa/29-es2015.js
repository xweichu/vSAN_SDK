(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "/rwm":
/*!**********************************************************!*\
  !*** ./src/app/vsan/common/util/validation/validator.ts ***!
  \**********************************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * Validator accept two functions as constructor parameters:
 * 1. errorCondition - predicate which is telling us when the validation must fail.
 * 2. errorMessage - function which build error message OR error message when the errorCondition return TRUE.
 */
class Validator {
    constructor(errorCondition, errorMessage) {
        this.errorCondition = errorCondition;
        this.errorMessage = errorMessage;
    }
    validate(instance) {
        return !this.errorCondition(instance);
    }
    getErrorMessage(instance) {
        return typeof this.errorMessage === "function"
            ? this.errorMessage(instance)
            : this.errorMessage;
    }
}



/***/ }),

/***/ "6BUe":
/*!************************************************************************!*\
  !*** ./src/app/vsan/common/component/datagrid/tree-datagrid.module.ts ***!
  \************************************************************************/
/*! exports provided: TreeDatagridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDatagridModule", function() { return TreeDatagridModule; });
class TreeDatagridModule {
}



/***/ }),

/***/ "JCZN":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/common/component/popup-list/popup-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: PopupListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupListModule", function() { return PopupListModule; });
class PopupListModule {
}



/***/ }),

/***/ "Kdx0":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/actions/validation/virtual-objects-action-availability.service.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: VirtualObjectsActionAvailabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsActionAvailabilityService", function() { return VirtualObjectsActionAvailabilityService; });
/* harmony import */ var _util_validation_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/validation/validator */ "/rwm");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/validation/validators-group */ "baj+");
/* harmony import */ var _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/virtual-objects-table/virtual-objects-type.util */ "wjnQ");
/* harmony import */ var _util_validation_action_available_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/validation/action-available-status */ "klmU");





let VirtualObjectsActionAvailabilityService = /*@__PURE__*/ (() => {
    class VirtualObjectsActionAvailabilityService {
        constructor() {
            this.isNotLoading = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]((context) => context.isLoading, _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.loading"));
            this.noneEmptySelection = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]((context) => _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(context.selectedObjects), (context) => {
                switch (context.actionId) {
                    case VirtualObjectsActionAvailabilityService.VIEW_PLACEMENT_DETAILS_ID:
                        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.description.disabled.noSelection");
                    case VirtualObjectsActionAvailabilityService.VIEW_PERFORMANCE_ID:
                        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewPerformance.description.disabled.noSelection");
                    case VirtualObjectsActionAvailabilityService.VIEW_VOLUME_ID:
                        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.navigateToCnsVolumes.description.disabled.noSelection");
                    case VirtualObjectsActionAvailabilityService.VIEW_FILE_SHARE:
                        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.navigateToFileShares.description.disabled.noSelection");
                }
            });
            this.isSingleVolumeObject = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]((context) => !_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isSingleElement(context.selectedObjects) ||
                !_component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].isVolume(context.selectedObjects[0]), (context) => {
                if (!context.selectedObjects.some(vo => _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].isVolume(vo))) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.navigateToCnsVolumes.description.disabled.noSelection");
                }
                else {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.navigateToCnsVolumes.description.disabled.multipleSelection");
                }
            });
            this.isSingleFileShareOrFileVolumeObject = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]((context) => !_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isSingleElement(context.selectedObjects) ||
                !_component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].isFileShareOrFileVolume(context.selectedObjects[0]), (context) => {
                if (!context.selectedObjects.some(vo => _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].isFileShareOrFileVolume(vo))) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.navigateToFileShares.description.disabled.noSelection");
                }
                else {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.navigateToFileShares.description.disabled.multipleSelection");
                }
            });
            this.isSingleObjectWithSupportedPerformance = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]((context) => !_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isSingleElement(context.selectedObjects) ||
                !_component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].isPerformanceSupported(context.selectedObjects[0]), (context) => {
                if (!context.selectedObjects.some(vo => _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].isPerformanceSupported(vo))) {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewPerformance.description.disabled.noSelection");
                }
                else {
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewPerformance.description.disabled.multipleSelection");
                }
            });
            this.viewPlacementDetailsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_2__["ValidatorsGroup"]([
                this.isNotLoading,
                this.noneEmptySelection,
            ]);
            this.viewPerformanceAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_2__["ValidatorsGroup"]([
                this.isNotLoading,
                this.noneEmptySelection,
                this.isSingleObjectWithSupportedPerformance,
            ]);
            this.viewVolumeAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_2__["ValidatorsGroup"]([
                this.isNotLoading,
                this.noneEmptySelection,
                this.isSingleVolumeObject,
            ]);
            this.viewFileShareOrFileVolumeAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_2__["ValidatorsGroup"]([
                this.isNotLoading,
                this.noneEmptySelection,
                this.isSingleFileShareOrFileVolumeObject,
            ]);
        }
        checkAvailability(ctx) {
            switch (ctx.actionId) {
                case VirtualObjectsActionAvailabilityService.VIEW_PLACEMENT_DETAILS_ID:
                    return this.validate(this.viewPlacementDetailsAvailability, ctx, this.viewPlacementDetailsSuccessKey(ctx));
                case VirtualObjectsActionAvailabilityService.VIEW_PERFORMANCE_ID:
                    return this.validate(this.viewPerformanceAvailability, ctx, "vsan.monitor.cluster.virtualObjects.action.viewPerformance.description.one");
                case VirtualObjectsActionAvailabilityService.VIEW_VOLUME_ID:
                    return this.validate(this.viewVolumeAvailability, ctx, "vsan.monitor.cluster.virtualObjects.action.navigateToCnsVolumes.description");
                case VirtualObjectsActionAvailabilityService.VIEW_FILE_SHARE:
                    return this.validate(this.viewFileShareOrFileVolumeAvailability, ctx, "vsan.monitor.cluster.virtualObjects.action.navigateToFileShares.description");
            }
        }
        validate(validatorsGroup, context, successMessageKey) {
            const errorMessage = validatorsGroup.getFirstError(context);
            const isActionAvailable = errorMessage === null;
            const statusMessage = isActionAvailable ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString(successMessageKey) : errorMessage;
            return new _util_validation_action_available_status__WEBPACK_IMPORTED_MODULE_4__["ActionAvailableStatus"](isActionAvailable, statusMessage);
        }
        viewPlacementDetailsSuccessKey(context) {
            return context.selectedObjects.length > 1
                ? "vsan.monitor.cluster.virtualObjects.action.viewDetails.description.many"
                : "vsan.monitor.cluster.virtualObjects.action.viewDetails.description.one";
        }
    }
    VirtualObjectsActionAvailabilityService.VIEW_PLACEMENT_DETAILS_ID = "view-placement-details";
    VirtualObjectsActionAvailabilityService.VIEW_PERFORMANCE_ID = "view-performance";
    VirtualObjectsActionAvailabilityService.VIEW_VOLUME_ID = "view-volumes";
    VirtualObjectsActionAvailabilityService.VIEW_FILE_SHARE = "view-file-shares";
    return VirtualObjectsActionAvailabilityService;
})();



/***/ }),

/***/ "LAuz":
/*!**********************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-table.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: VirtualObjectsTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsTableService", function() { return VirtualObjectsTableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class VirtualObjectsTableService {
    constructor() {
        this.resetFiltersEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onResetFilters = this.resetFiltersEvent.asObservable();
    }
    resetFilters() {
        this.resetFiltersEvent.next();
    }
}



/***/ }),

/***/ "Qdvx":
/*!******************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/vm-cell.scss.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 0rem;\n  align-items: center;\n}\nclr-icon[_ngcontent-%COMP%] {\n  min-width: 0.8rem;\n  min-height: 0.8rem;\n  margin-right: 0.3rem;\n}\n.no-read-permissions[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC92aXJ0dWFsLW9iamVjdHMtdGFibGUvdm0tY2VsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBQ0lBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBWUg7QUFUQTtFQUNHLGlCSDJCaUI7RUcxQmpCLGtCSDBCaUI7RUd6QmpCLG9CSEtPO0FHT1Y7QUFUQTtFQUNHLGtCQUFBO0FBWUgiLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvdmlydHVhbC1vYmplY3RzLXRhYmxlL3ZtLWNlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kaWNvbi1vZmZzZXQ6IDAuM3JlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmNsci1pY29uIHtcbiAgIG1pbi13aWR0aDogJHZzYW4taWNvbi1zaXplO1xuICAgbWluLWhlaWdodDogJHZzYW4taWNvbi1zaXplO1xuICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZztcbn1cblxuLm5vLXJlYWQtcGVybWlzc2lvbnMge1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIl19 */"];




/***/ }),

/***/ "U2P7":
/*!****************************************************************************!*\
  !*** ./src/app/vsan/common/component/navigation/vsan-breadcrumb.module.ts ***!
  \****************************************************************************/
/*! exports provided: VsanBreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanBreadcrumbModule", function() { return VsanBreadcrumbModule; });
class VsanBreadcrumbModule {
}



/***/ }),

/***/ "baj+":
/*!*****************************************************************!*\
  !*** ./src/app/vsan/common/util/validation/validators-group.ts ***!
  \*****************************************************************/
/*! exports provided: ValidatorsGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsGroup", function() { return ValidatorsGroup; });
class ValidatorsGroup {
    constructor(validators) {
        this.validators = validators;
    }
    validate(entity) {
        return this.validators
            .every(validator => validator.validate(entity));
    }
    getAllErrors(entity) {
        return this.validators
            .filter(validator => !validator.validate(entity))
            .map(validator => validator.getErrorMessage(entity));
    }
    getFirstError(entity) {
        var _a;
        return ((_a = this.validators
            .find(validator => !validator.validate(entity))) === null || _a === void 0 ? void 0 : _a.getErrorMessage(entity)) || null;
    }
}



/***/ }),

/***/ "eh32":
/*!****************************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-table-state.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: VirtualObjectsTableStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsTableStateService", function() { return VirtualObjectsTableStateService; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


/**
 * Holds the state of each virtual object (selected/expanded/indeterminate) displayed in the virtual objects datagrid
 */
class VirtualObjectsTableStateService {
    constructor() {
        /**
         * Holds the IDs of the virtual objects that are manually expanded by the user
         * E.g. User click to expand/collapse a parent item
         */
        this.manuallyExpandedObjects = new Set();
        /**
         * Holds the IDs of the virtual objects that are expanded because we have applied filter.
         * E.g. Filtering by name, filtering by health state
         */
        this.autoExpandedObjects = new Set();
        /**
         * Holds the IDs of the virtual objects that are selected
         */
        this.selectedObjects = new Set();
        this.selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    reset() {
        this.manuallyExpandedObjects.clear();
        this.autoExpandedObjects.clear();
        this.selectedObjects.clear();
        this.selectionChanged.next();
    }
    toggleManualExpand(virtualObject, isExpanded) {
        if (isExpanded) {
            this.manuallyExpandedObjects.add(this.getKey(virtualObject));
        }
        else {
            this.manuallyExpandedObjects.delete(this.getKey(virtualObject));
            // We need to do that because otherwise it still will be expanded because we check both
            this.toggleAutoExpand(virtualObject, false);
        }
    }
    toggleAutoExpand(virtualObject, isExpanded) {
        if (isExpanded) {
            this.autoExpandedObjects.add(this.getKey(virtualObject));
        }
        else {
            this.autoExpandedObjects.delete(this.getKey(virtualObject));
        }
    }
    toggleSelectionOnAll(virtualObjects, value) {
        if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(virtualObjects)) {
            return;
        }
        for (const virtualObject of virtualObjects) {
            this.toggleSelection(virtualObject, value);
            if (virtualObject.children) {
                for (const child of virtualObject.children) {
                    this.toggleSelection(child, value);
                }
            }
        }
    }
    toggleSelection(virtualObject, isSelected) {
        if (isSelected) {
            this.select(virtualObject);
        }
        else {
            this.deselect(virtualObject);
        }
    }
    select(virtualObject) {
        if (this.isVirtualObject(virtualObject)) {
            this.selectedObjects.add(this.getKey(virtualObject));
        }
        if (this.isParent(virtualObject)) {
            virtualObject.children.forEach(child => this.select(child));
        }
        this.selectionChanged.next();
    }
    deselect(virtualObject) {
        if (this.isVirtualObject(virtualObject)) {
            this.selectedObjects.delete(this.getKey(virtualObject));
        }
        if (this.isParent(virtualObject)) {
            virtualObject.children.forEach(child => this.deselect(child));
        }
        this.selectionChanged.next();
    }
    isExpanded(virtualObject) {
        return this.manuallyExpandedObjects.has(this.getKey(virtualObject)) ||
            this.autoExpandedObjects.has(this.getKey(virtualObject));
    }
    areAllSelected(virtualObjects) {
        if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(virtualObjects)) {
            return false;
        }
        for (const virtualObject of virtualObjects) {
            if (!this.isSelected(virtualObject)) {
                return false;
            }
            if (virtualObject.children) {
                for (const child of virtualObject.children) {
                    if (!this.isSelected(child)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    getSelectedVirtualObjects(virtualObjects, isMatchingTextSearch) {
        const selectedVirtualObjects = [];
        if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(virtualObjects)) {
            return selectedVirtualObjects;
        }
        virtualObjects.forEach(virtualObject => {
            if (virtualObject.uid && this.isSelected(virtualObject) && isMatchingTextSearch(virtualObject, null)) {
                selectedVirtualObjects.push(virtualObject);
            }
            if (virtualObject.children) {
                virtualObject.children.forEach(child => {
                    if (child.uid && this.isSelected(child) && isMatchingTextSearch(virtualObject, child)) {
                        selectedVirtualObjects.push(child);
                    }
                });
            }
        });
        return selectedVirtualObjects;
    }
    isSelected(virtualObject) {
        if (!this.isVirtualObject(virtualObject) && !this.isParent(virtualObject)) {
            return false;
        }
        const isSingleSelectedObject = !this.isParent(virtualObject) && this.selectedObjects.has(this.getKey(virtualObject));
        const isParentObjectWithSelectedChild = this.isParent(virtualObject) && virtualObject.children.some(child => this.isSelected(child));
        return isSingleSelectedObject || isParentObjectWithSelectedChild;
    }
    isIndeterminate(virtualObject) {
        if (!this.isParent(virtualObject)) {
            return false;
        }
        return virtualObject.children.some((child, i, children) => this.isSelected(child) !== this.isSelected(children[0]));
    }
    /**
     * Check if it is a real virtual object or a fake one (used to group multiple virtual objects - E.g. VM)
     */
    isVirtualObject(virtualObject) {
        return !!virtualObject.uid;
    }
    /**
     * Only objects that are not real objects and have children are parent items.
     */
    isParent(virtualObject) {
        return !this.isVirtualObject(virtualObject) && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(virtualObject.children);
    }
    /**
     * Unique id per virtual object
     */
    getKey(virtualObject) {
        // most of the root items have no uid
        return `${virtualObject.name}-${virtualObject.uid}${this.getChildrenKey(virtualObject)}`;
    }
    getChildrenKey(virtualObject) {
        return this.isParent(virtualObject)
            ? `-${virtualObject.children.map(child => this.getKey(child)).join("-")}`
            : "";
    }
}



/***/ }),

/***/ "hsFi":
/*!**********************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/vm-cell.component.ts ***!
  \**********************************************************************************/
/*! exports provided: VsanVmCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanVmCell", function() { return VsanVmCell; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/virtual-objects-table/virtual-objects-type.util */ "wjnQ");
/* harmony import */ var _generated_display_object_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/display-object-type */ "YNij");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */




class VsanVmCell {
    constructor() {
        this.isTooltipVisible = true;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get displayName() {
        return _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectsTypeUtil"].getDisplayName(this.item);
    }
    get isNoPermissionVm() {
        return !!this.item.vmRef
            && !!this.item.type
            && this.item.type.displayType === _generated_display_object_type__WEBPACK_IMPORTED_MODULE_2__["DisplayObjectType"].VM
            && !this.item.hasVmReadPermissions;
    }
    getTooltipText(vmRef) {
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.noReadPermissions", vmRef.value);
    }
}



/***/ }),

/***/ "klmU":
/*!************************************************************************!*\
  !*** ./src/app/vsan/common/util/validation/action-available-status.ts ***!
  \************************************************************************/
/*! exports provided: ActionAvailableStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAvailableStatus", function() { return ActionAvailableStatus; });
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */
class ActionAvailableStatus {
    constructor(available, message) {
        this.available = available;
        this.message = message;
    }
}



/***/ }),

/***/ "ktFr":
/*!*********************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-table.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: VirtualObjectsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsTableModule", function() { return VirtualObjectsTableModule; });
class VirtualObjectsTableModule {
}



/***/ }),

/***/ "uDMx":
/*!***************************************************!*\
  !*** ./src/app/vsan/common/vsan-common.module.ts ***!
  \***************************************************/
/*! exports provided: VsanCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanCommonModule", function() { return VsanCommonModule; });
class VsanCommonModule {
}



/***/ }),

/***/ "wQOa":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/common/component/action-button/action-button.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ActionButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonModule", function() { return ActionButtonModule; });
class ActionButtonModule {
}



/***/ }),

/***/ "wi+p":
/*!***************************************************************!*\
  !*** ./src/app/vsan/common/component/export/export.module.ts ***!
  \***************************************************************/
/*! exports provided: ExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportModule", function() { return ExportModule; });
class ExportModule {
}



/***/ }),

/***/ "wjnQ":
/*!******************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-type.util.ts ***!
  \******************************************************************************************/
/*! exports provided: VirtualObjectsTypeUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualObjectsTypeUtil", function() { return VirtualObjectsTypeUtil; });
/* harmony import */ var _generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/display-object-type */ "YNij");
/* harmony import */ var _generated_virtual_object_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/virtual-object-type */ "/Nyh");
/* harmony import */ var _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/vsan-object-type */ "SZrt");
/* harmony import */ var _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/vsan-what-if-compliance-status */ "8siK");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/logger */ "a0OL");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */






let VirtualObjectsTypeUtil = /*@__PURE__*/ (() => {
    class VirtualObjectsTypeUtil {
        static getVirtualObjectTypeFilter(displayType, extensionId, extensionName) {
            return _generated_virtual_object_type__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectType"].Factory.create(null, displayType, extensionId, extensionName);
        }
        static getDisplayName(virtualObject) {
            return virtualObject.displayName
                ? virtualObject.displayName
                : virtualObject.name;
        }
        static getComplianceStatusLabel(status) {
            if (!status) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.na.label");
            }
            switch (status) {
                case _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_3__["VsanWhatIfComplianceStatus"].INACCESSIBLE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.whatIfResult.inaccessible");
                case _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_3__["VsanWhatIfComplianceStatus"].NOT_COMPLIANT:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.whatIfResult.incompliant");
                default:
                    _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].warn("Unknown VsanWhatIfComplianceStatus status: " + status);
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.objectHealth.unknown");
            }
        }
        static getTypeLabel(type) {
            return type.extendedTypeName
                ? type.extendedTypeName
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString(VirtualObjectsTypeUtil.typeToLabelKey.get(type.displayType));
        }
        static isPerformanceSupported(item) {
            return VirtualObjectsTypeUtil.isAttachedBlockVolume(item) ||
                VirtualObjectsTypeUtil.isFileShareOrFileVolume(item) ||
                VirtualObjectsTypeUtil.isVmdkOrAttachedFCD(item);
        }
        static isVmWithAttachedVolume(item) {
            return item.vmRef &&
                item.children &&
                item.children.some(childItem => VirtualObjectsTypeUtil.isAttachedBlockVolume(childItem));
        }
        static isVolume(item) {
            return VirtualObjectsTypeUtil.isAttachedBlockVolume(item) ||
                VirtualObjectsTypeUtil.isDetachedBlockVolume(item) ||
                VirtualObjectsTypeUtil.isFileVolume(item);
        }
        static isAttachedBlockVolume(item) {
            return item.vmRef &&
                (this.isExtensionBlockVolume(item) || item.type.vmodlType === _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__["VsanObjectType"].attachedCnsVolBlock);
        }
        static isDetachedBlockVolume(item) {
            return !item.vmRef &&
                (this.isExtensionBlockVolume(item) || item.type.vmodlType === _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__["VsanObjectType"].detachedCnsVolBlock);
        }
        static isFileShareOrFileVolume(item) {
            return VirtualObjectsTypeUtil.isFileShare(item) ||
                VirtualObjectsTypeUtil.isFileVolume(item);
        }
        static isFileShare(item) {
            return [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_SHARE_OBJECT, _generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_SHARE].includes(item.type.displayType);
        }
        static isFileVolume(item) {
            return !item.vmRef &&
                [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_VOLUME, _generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_VOLUME_OBJECT].includes(item.type.displayType) &&
                item.type.vmodlType === _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__["VsanObjectType"].cnsVolFile;
        }
        static isExtensionBlockVolume(item) {
            return item.type.displayType === _generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].CNS_VOLUME &&
                item.type.vmodlType === _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__["VsanObjectType"].extension;
        }
        static isVmdkOrAttachedFCD(item) {
            return item.vmRef && [_generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__["VsanObjectType"].vdisk, _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_2__["VsanObjectType"].improvedVirtualDisk].includes(item.type.vmodlType);
        }
    }
    VirtualObjectsTypeUtil.typeToLabelKey = new Map([
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].CNS_VOLUME, "vsan.monitor.cluster.virtualObjects.type.cns_volume"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].DISK, "vsan.monitor.cluster.virtualObjects.type.disk"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].EXTENSION_APP, "vsan.monitor.cluster.virtualObjects.type.extension_app"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FCD_DISK, "vsan.monitor.cluster.virtualObjects.type.fcd_disk"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_SHARE, "vsan.monitor.cluster.virtualObjects.type.file_share"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_SHARE_OBJECT, "vsan.monitor.cluster.virtualObjects.type.file_share_object"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_VOLUME, "vsan.monitor.cluster.virtualObjects.type.file_volume"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FILE_VOLUME_OBJECT, "vsan.monitor.cluster.virtualObjects.type.file_volume_object"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].FOLDER, "vsan.monitor.cluster.virtualObjects.type.folder"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].ISCSI_LUN, "vsan.monitor.cluster.virtualObjects.type.iscsi_lun"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].ISCSI_TARGET, "vsan.monitor.cluster.virtualObjects.type.iscsi_target"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].OTHER, "vsan.monitor.cluster.virtualObjects.type.other"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].REPLICATION, "vsan.monitor.cluster.virtualObjects.type.replication"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].VM, "vsan.monitor.cluster.virtualObjects.type.vm"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].VM_MEMORY, "vsan.monitor.cluster.virtualObjects.type.vm_memory"],
        [_generated_display_object_type__WEBPACK_IMPORTED_MODULE_0__["DisplayObjectType"].VM_SWAP, "vsan.monitor.cluster.virtualObjects.type.vm_swap"],
    ]);
    return VirtualObjectsTypeUtil;
})();



/***/ }),

/***/ "y7Cl":
/*!********************************************************************************************!*\
  !*** ./src/app/vsan/common/component/virtual-objects-table/vm-cell.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_VsanVmCell, View_VsanVmCell_0, View_VsanVmCell_Host_0, VsanVmCellNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VsanVmCell", function() { return RenderType_VsanVmCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VsanVmCell_0", function() { return View_VsanVmCell_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VsanVmCell_Host_0", function() { return View_VsanVmCell_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanVmCellNgFactory", function() { return VsanVmCellNgFactory; });
/* harmony import */ var _vm_cell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-cell.scss.shim.ngstyle */ "Qdvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directive/icon-title/icon-title.directive */ "wLY2");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/reference-watcher */ "gyvr");
/* harmony import */ var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directive/show-title/show-title.directive */ "XpuD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _vm_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vm-cell.component */ "hsFi");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */









var styles_VsanVmCell = [_vm_cell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_VsanVmCell = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_VsanVmCell, data: {} });

function View_VsanVmCell_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.iconId; _ck(_v, 0, 0, currVal_0); }); }
function View_VsanVmCell_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-tooltip-content", [["clrPosition", "middle-right"], ["clrSize", "md"]], [[2, "tooltip-content", null], [4, "opacity", null], [1, "role", 0], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTooltipContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTooltipContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTooltipContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵei"]], { position: [0, "position"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["\n      ", "\n   "]))], function (_ck, _v) { var currVal_5 = "middle-right"; var currVal_6 = "md"; _ck(_v, 1, 0, currVal_5, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = 1; var currVal_2 = "tooltip"; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isOffScreen; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_7 = _co.getTooltipText(_co.item.vmRef); _ck(_v, 2, 0, currVal_7); }); }
function View_VsanVmCell_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 15, "clr-tooltip", [["vsan-show-title", ""]], [[2, "tooltip", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrTooltip_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrTooltip"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTooltip"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_6__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵei"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵei"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "span", [["class", "no-read-permissions path-label"], ["clrTooltipTrigger", ""], ["tabindex", "0"]], [[2, "tooltip-trigger", null], [1, "aria-describedby", 0], [1, "role", 0]], [[null, "mouseenter"], [null, "focus"], [null, "mouseleave"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            if (("mouseenter" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).showTooltip() !== false);
                ad = (pd_0 && ad);
            }
            if (("focus" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).showTooltip() !== false);
                ad = (pd_1 && ad);
            }
            if (("mouseleave" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).hideTooltip() !== false);
                ad = (pd_2 && ad);
            }
            if (("blur" === en)) {
                var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).hideTooltip() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTooltipTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵei"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VsanVmCell_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_8 = _co.isTooltipVisible; _ck(_v, 14, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = "hidden"; var currVal_2 = "ellipsis"; var currVal_3 = "nowrap"; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = true; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ariaDescribedBy; var currVal_6 = "button"; _ck(_v, 9, 0, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.item.name; _ck(_v, 11, 0, currVal_7); });
}
function View_VsanVmCell_5(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 3, "a", [["href", "javascript://"], ["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.linkClick.emit(_co.item) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_6__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = "hidden"; var currVal_1 = "ellipsis"; var currVal_2 = "nowrap"; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.displayName; _ck(_v, 3, 0, currVal_3); });
}
function View_VsanVmCell_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 3, "span", [["class", "path-label"], ["vsan-show-title", ""]], [[4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_6__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_5__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = "hidden"; var currVal_1 = "ellipsis"; var currVal_2 = "nowrap"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.displayName; _ck(_v, 4, 0, currVal_3); }); }
function View_VsanVmCell_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanVmCell_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noLink", 2]], null, 0, null, View_VsanVmCell_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLink; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_VsanVmCell_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanVmCell_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VsanVmCell_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["other", 2]], null, 0, null, View_VsanVmCell_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.iconId; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.isNoPermissionVm; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7); _ck(_v, 5, 0, currVal_1, currVal_2); }, null); }
function View_VsanVmCell_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-vm-cell", [], null, null, null, View_VsanVmCell_0, RenderType_VsanVmCell)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _vm_cell_component__WEBPACK_IMPORTED_MODULE_8__["VsanVmCell"], [], null, null)], null, null); }
var VsanVmCellNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-vm-cell", _vm_cell_component__WEBPACK_IMPORTED_MODULE_8__["VsanVmCell"], View_VsanVmCell_Host_0, { item: "item", isLink: "isLink", isTooltipVisible: "isTooltipVisible" }, { linkClick: "linkClick" }, []);




/***/ })

}]);
//# sourceMappingURL=29-es2015.js.map