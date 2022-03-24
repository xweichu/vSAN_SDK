(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "1rB6":
/*!*******************************************************************!*\
  !*** ./src/app/vsan/health/view/model/health-perspective-data.ts ***!
  \*******************************************************************/
/*! exports provided: HealthPerspectiveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthPerspectiveData", function() { return HealthPerspectiveData; });
/* harmony import */ var _component_datetime_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/datetime-picker/date-range-picker.component */ "LqLG");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* Copyright 2019-2020 VMware, Inc. All rights reserved. -- VMware Confidential */


/**
 * Information about the perspective for presenting the health view.
 */
class HealthPerspectiveData {
    constructor(isHistoricalHealthPerspective, rangeEndDate, rangeStartDate) {
        this.isHistoricalHealthPerspective = isHistoricalHealthPerspective;
        if (!rangeEndDate) {
            rangeEndDate = new Date().getTime();
        }
        this.to = rangeEndDate;
        if (!rangeStartDate) {
            rangeStartDate = rangeEndDate - _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].DAY_IN_MILLISECONDS;
        }
        this.from = rangeStartDate;
    }
    set from(value) {
        if (!value) {
            this._from = null;
            return;
        }
        this._from = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].roundToMinuteStart(value);
    }
    get from() {
        return this._from;
    }
    set to(value) {
        if (!value) {
            this._to = null;
            return;
        }
        this._to = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].roundToMinuteEnd(value);
    }
    get to() {
        return this._to;
    }
    set dateRange(range) {
        this.from = range.from;
        this.to = range.to;
    }
    get dateRange() {
        return new _component_datetime_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_0__["DateRangeData"](this.from, this.to);
    }
    equals(value) {
        return value &&
            value.isHistoricalHealthPerspective == this.isHistoricalHealthPerspective &&
            value.from == this.from &&
            value.to == this.to;
    }
    clone() {
        return new HealthPerspectiveData(this.isHistoricalHealthPerspective, this.to, this.from);
    }
}



/***/ }),

/***/ "4Nty":
/*!********************************************************!*\
  !*** ./src/app/vsan/common/util/reactive-form-util.ts ***!
  \********************************************************/
/*! exports provided: ReactiveFormUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormUtil", function() { return ReactiveFormUtil; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */

let ReactiveFormUtil = /*@__PURE__*/ (() => {
    class ReactiveFormUtil {
    }
    ReactiveFormUtil.FORM_CONTROLS_DELIMITER = ".";
    /*
     * Trigger validation on all controls in a form group and mark them as touched to display errors
     */
    ReactiveFormUtil.validateAllFormFields = (formGroup) => {
        formGroup.markAsTouched();
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                ReactiveFormUtil.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
                control.controls.forEach((childControl) => ReactiveFormUtil.validateAllFormFields(childControl));
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
                ReactiveFormUtil.validateControls([control]);
            }
        });
    };
    ReactiveFormUtil.validateControls = (controls) => {
        controls.forEach((control) => {
            control.markAsTouched({ onlySelf: true });
            control.updateValueAndValidity({
                onlySelf: false,
                emitEvent: true
            });
        });
    };
    /**
     * Trigger updateValueAndValidity() to call ValidatorFn and update validity of all controls in a form group.
     */
    ReactiveFormUtil.updateFormControlsValueAndValidity = (formGroup) => {
        Object.keys(formGroup.controls).forEach(control => {
            if (formGroup.get(control) instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
                formGroup.get(control).updateValueAndValidity();
            }
        });
    };
    ReactiveFormUtil.getFormControlPath = (...parts) => {
        return parts.join(ReactiveFormUtil.FORM_CONTROLS_DELIMITER);
    };
    return ReactiveFormUtil;
})();



/***/ }),

/***/ "4TXX":
/*!***************************************************************************!*\
  !*** ./src/app/vsan/health/view/card/health-nav-tab.scss.shim.ngstyle.js ***!
  \***************************************************************************/
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
var styles = [".nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 0 0 auto;\n  margin: 0 0 0.3rem 0;\n  padding: 0;\n  background-color: var(--vsan-background-color);\n  border: 0.05rem solid var(--vsan-border-color);\n  border-radius: 0.15rem;\n  width: 270px;\n  cursor: pointer;\n  position: relative;\n}\n.nav-item.selected[_ngcontent-%COMP%] {\n  border-color: var(--vsan-link-color);\n}\n.nav-item.selected[_ngcontent-%COMP%]:after, .nav-item.selected[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 100%;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.nav-item.selected[_ngcontent-%COMP%]:after {\n  top: 9px;\n  border-color: transparent transparent transparent var(--vsan-background-color);\n  border-width: 7px;\n}\n.nav-item.selected[_ngcontent-%COMP%]:before {\n  top: 8px;\n  border-color: transparent transparent transparent var(--vsan-link-color);\n  border-width: 8px;\n}\n.nav-item.selected[_ngcontent-%COMP%]:focus {\n  outline-style: none;\n}\n.selected[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n.nav-item-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 24px;\n  align-items: center;\n  padding: 6px;\n  border: none !important;\n}\n.nav-item-left[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  min-height: 18px;\n}\n.nav-item-left.alert[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.nav-item-right[_ngcontent-%COMP%] {\n  flex: 1 0 0rem;\n  color: var(--vsan-color);\n  background-color: var(--vsan-background-color);\n  padding: 3px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-right-radius: 0.15rem;\n  border-bottom-right-radius: 0.15rem;\n}\n.alert.alert-warning.nav-item-left[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: var(--vsan-status-warning-border-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9jYXJkL2hlYWx0aC1uYXYtdGFiLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMUUE7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsOENHNkNnQjtFSDVDaEIsOENHbUNXO0VIbENYLHNCR0lRO0VISFIsWUFkYztFQWVkLGVBQUE7RUFDQSxrQkFBQTtBQVNIO0FBUkc7RUFDRyxvQ0c0Q1k7QUhsQ2xCO0FBUk07RUFDRyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFVVDtBQVJNO0VBQ0csUUFBQTtFQUNBLDhFQUFBO0VBQ0EsaUJBQUE7QUFVVDtBQVJNO0VBQ0csUUFBQTtFQUNBLHdFQUFBO0VBQ0EsaUJBQUE7QUFVVDtBQVBNO0VBQ0csbUJBQUE7QUFTVDtBQUpBO0VBQ0csMkJBQUE7QUFPSDtBQUpBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBcERtQjtFQXFEbkIsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFPSDtBQU5HO0VBQ0csb0JBQUE7RUFDQSxXQXpEZTtFQTBEZixZQTFEZTtFQTJEZixlQTNEZTtFQTREZixnQkE1RGU7QUFvRXJCO0FBTkc7RUFDRywwQkFBQTtFQUNBLDZCQUFBO0FBUU47QUFKQTtFQUNHLGNBQUE7RUFDQSx3QkdpRHVCO0VIaER2Qiw4Q0dsQmdCO0VIbUJoQixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0cvRFE7RUhnRVIsbUNHaEVRO0FIdUVYO0FBSkE7RUFDRyw4Q0dpQjJCO0FIVjlCIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9jYXJkL2hlYWx0aC1uYXYtdGFiLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxNy0yMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHNcIjtcblxuJG5hdi1pdGVtLXdpZHRoOiAyNzBweDtcbiRuYXYtaXRlbS1oZWlnaHQ6IDMwcHg7XG4kbmF2LWl0ZW0tbGVmdC13aWR0aDogMjRweDtcbiRuYXYtaXRlbS1pY29uLXNpemU6IDE4cHg7XG5cbi5uYXYtaXRlbSB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWFyZ2luOiAwIDAgJHZzYW4teHMgMDtcbiAgIHBhZGRpbmc6IDA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyO1xuICAgYm9yZGVyLXJhZGl1czogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU7XG4gICB3aWR0aDogJG5hdi1pdGVtLXdpZHRoO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgJi5zZWxlY3RlZCB7XG4gICAgICBib3JkZXItY29sb3I6ICR2c2FuLWxpbmstY29sb3I7XG4gICAgICAvLyBkcmF3cyB0cmlhbmdsZSBvbiByaWdodCBzaWRlXG4gICAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJHZzYW4tbGluay1jb2xvcjtcbiAgICAgICAgIGJvcmRlci13aWR0aDogOHB4O1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIGZvY3VzIGVmZmVjdCBmcm9tIHNlbGVjdGVkIGVsZW1lbnRcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgIH1cbiAgIH1cbn1cblxuLnNlbGVjdGVkIHtcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmcgIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtLWxlZnQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIHdpZHRoOiAkbmF2LWl0ZW0tbGVmdC13aWR0aDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBwYWRkaW5nOiAoJG5hdi1pdGVtLWhlaWdodCAtICRuYXYtaXRlbS1pY29uLXNpemUpIC8gMjsgLy8ga2VlcHMgdGhlIHdyYXBwZXIgZGl2IGV4cGFuZGVkXG4gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgIGNsci1pY29uIHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6ICRuYXYtaXRlbS1pY29uLXNpemU7XG4gICAgICBoZWlnaHQ6ICRuYXYtaXRlbS1pY29uLXNpemU7XG4gICAgICBtaW4td2lkdGg6ICRuYXYtaXRlbS1pY29uLXNpemU7XG4gICAgICBtaW4taGVpZ2h0OiAkbmF2LWl0ZW0taWNvbi1zaXplO1xuICAgfVxuICAgJi5hbGVydCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgfVxufVxuXG4ubmF2LWl0ZW0tcmlnaHQge1xuICAgZmxleDogMSAwIDByZW07XG4gICBjb2xvcjogJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gICBwYWRkaW5nOiAzcHggO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU7XG4gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU7XG59XG5cbi5hbGVydC5hbGVydC13YXJuaW5nLm5hdi1pdGVtLWxlZnQgLmFsZXJ0LWljb24ge1xuICAgY29sb3I6ICRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I7XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];




/***/ }),

/***/ "54G5":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/health/view/card/health-nav-tab.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_HealthNavTabComponent, View_HealthNavTabComponent_0, View_HealthNavTabComponent_Host_0, HealthNavTabComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HealthNavTabComponent", function() { return RenderType_HealthNavTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HealthNavTabComponent_0", function() { return View_HealthNavTabComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HealthNavTabComponent_Host_0", function() { return View_HealthNavTabComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthNavTabComponentNgFactory", function() { return HealthNavTabComponentNgFactory; });
/* harmony import */ var _health_nav_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-nav-tab.scss.shim.ngstyle */ "4TXX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/directive/icon-title/icon-title.directive */ "wLY2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _health_nav_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-nav-tab.component */ "5ywy");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */






var styles_HealthNavTabComponent = [_health_nav_tab_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HealthNavTabComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HealthNavTabComponent, data: {} });

function View_HealthNavTabComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "nav-item-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "clr-icon", [["class", "is-solid"]], [[1, "shape", 0], [4, "color", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shape; var currVal_1 = _co.shapeColor.getColor(); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_HealthNavTabComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "nav-item-left"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "clr-icon", [["class", "alert-icon is-solid"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "nav-item-left"; var currVal_1 = _co.statusClass; _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.statusIconShape; _ck(_v, 3, 0, currVal_2); }); }
function View_HealthNavTabComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "button", [["class", "nav-item"], ["role", "tab"]], [[8, "id", 0], [2, "selected", null], [1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthNavTabComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthNavTabComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "nav-item-right"]], [[8, "title", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.isCustomIconPassed; _ck(_v, 5, 0, currVal_3); var currVal_4 = !_co.isCustomIconPassed; _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.id, ""); var currVal_1 = _co.isSelected; var currVal_2 = _co.isSelected; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.name, ""); _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.name; _ck(_v, 12, 0, currVal_6); });
}
function View_HealthNavTabComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-health-nav-tab", [], null, null, null, View_HealthNavTabComponent_0, RenderType_HealthNavTabComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _health_nav_tab_component__WEBPACK_IMPORTED_MODULE_5__["HealthNavTabComponent"], [], null, null)], null, null); }
var HealthNavTabComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-health-nav-tab", _health_nav_tab_component__WEBPACK_IMPORTED_MODULE_5__["HealthNavTabComponent"], View_HealthNavTabComponent_Host_0, { id: "id", name: "name", shape: "shape", shapeColor: "shapeColor", status: "status", isSelected: "isSelected" }, { onClicked: "onClicked" }, []);




/***/ }),

/***/ "5m9N":
/*!***********************************************************!*\
  !*** ./src/app/vsan/common/util/promise/promise-baton.ts ***!
  \***********************************************************/
/*! exports provided: PromiseBaton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseBaton", function() { return PromiseBaton; });
/* harmony import */ var _util_promise_cancelable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/promise/cancelable-promise */ "77xb");
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

class PromiseBaton {
    constructor() {
        this.ongoingPromise = null;
    }
    /**
     * Only the last passed promise will be resolved. Others will be canceled.
     * @param promise - The only pending promise that we want to resolve.
     * @param rejectOnCancel - Whether we want to rethrow the cancellation of the returned promise.
     * @example
     * ```ts
     * // If later we cancel the returned promise it will be rejected with the following error: { canceled: true }.
     * resolveOnly(promise, true);
     * ```
     * ```ts
     * // If later we cancel the returned promise it won't be rejected and the 'catch' callback won't be invoked.
     * resolveOnly(promise, false);
     * ```
     */
    resolveOnly(promise, rejectOnCancel = false) {
        this.cancelLastOne();
        // We wrap it into CancelablePromise to be able to cancel this one without affecting the original promise.
        // Original promise subscribers still will be able to get the result.
        this.ongoingPromise = new _util_promise_cancelable_promise__WEBPACK_IMPORTED_MODULE_0__["CancelablePromise"](promise, rejectOnCancel);
        return this.ongoingPromise.promise;
    }
    /**
     * Reject the currently running promise.
     */
    cancelLastOne() {
        if (this.ongoingPromise) {
            this.ongoingPromise.cancel();
        }
    }
}



/***/ }),

/***/ "5ywy":
/*!*******************************************************************!*\
  !*** ./src/app/vsan/health/view/card/health-nav-tab.component.ts ***!
  \*******************************************************************/
/*! exports provided: HealthNavTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthNavTabComponent", function() { return HealthNavTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");
/* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


class HealthNavTabComponent {
    constructor() {
        this.isSelected = false;
        this.onClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = () => {
            this.onClicked.emit(this.id);
        };
    }
    get isCustomIconPassed() {
        return this.shape != null;
    }
    get statusClass() {
        const statusClass = _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_1__["VsanHealthUtil"].getVsanHealthStatusBackgroundClass(this.status);
        return statusClass ? `alert ${statusClass}` : "";
    }
    get statusIconShape() {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_1__["VsanHealthUtil"].getVsanHealthStatusIconShape(this.status);
    }
}



/***/ }),

/***/ "9C63":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/health/view/health-checks.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_HealthChecksComponent, View_HealthChecksComponent_0, View_HealthChecksComponent_Host_0, HealthChecksComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HealthChecksComponent", function() { return RenderType_HealthChecksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HealthChecksComponent_0", function() { return View_HealthChecksComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HealthChecksComponent_Host_0", function() { return View_HealthChecksComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthChecksComponentNgFactory", function() { return HealthChecksComponentNgFactory; });
/* harmony import */ var _health_checks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-checks.scss.shim.ngstyle */ "ERnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _common_component_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/datetime-picker/datetime-picker.component.ngfactory */ "Ey0u");
/* harmony import */ var _common_component_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/component/datetime-picker/datetime-picker.component */ "WlEE");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */ "bMPK");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/health-nav-tab.component.ngfactory */ "54G5");
/* harmony import */ var _card_health_nav_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/health-nav-tab.component */ "5ywy");
/* harmony import */ var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/directive/icon-title/icon-title.directive */ "wLY2");
/* harmony import */ var _card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card/details-card.component.ngfactory */ "hbBm");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _card_details_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card/details-card.component */ "mhsP");
/* harmony import */ var _generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../generated/vsan-health-mutation-provider */ "HuxE");
/* harmony import */ var _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../generated/vsan-health-property-provider */ "6s13");
/* harmony import */ var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/service/task-monitor-service */ "81c+");
/* harmony import */ var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../generated/vsan-capability-provider */ "y/yc");
/* harmony import */ var _generated_permission_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../generated/permission-service */ "B+sv");
/* harmony import */ var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/service/navigation/navigation.service */ "Qw2S");
/* harmony import */ var _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/service/telemetry.service */ "U2+J");
/* harmony import */ var _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/service/client/dataservice/data-service.service */ "QIo8");
/* harmony import */ var _health_overview_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./health-overview.component.ngfactory */ "pKFV");
/* harmony import */ var _health_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./health-overview.component */ "LlSX");
/* harmony import */ var _generated_vsan_historical_health_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../generated/vsan-historical-health-service */ "8sKW");
/* harmony import */ var _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../common/component/illustrated-message/illustrated-message.component.ngfactory */ "hjgy");
/* harmony import */ var _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../common/component/illustrated-message/illustrated-message.component */ "GNkU");
/* harmony import */ var _common_directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../common/directive/show-hide/show-hide.directive */ "l+cV");
/* harmony import */ var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/pipe/LocalizationPipe */ "jOVY");
/* harmony import */ var _health_checks_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./health-checks.component */ "NMgx");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */































var styles_HealthChecksComponent = [_health_checks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HealthChecksComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HealthChecksComponent, data: {} });

function View_HealthChecksComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_HealthChecksComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "title-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.titleHealder; _ck(_v, 3, 0, currVal_0); }, null); }
function View_HealthChecksComponent_4(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-datetime-picker", [["aria-labelledby", "health-perspective-switch-label"], ["role", "group"]], null, [[null, "datetimeChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("datetimeChange" === en)) {
                var pd_0 = (_co.onDateRangeChange($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _common_component_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DatetimePickerComponent_0"], _common_component_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DatetimePickerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_component_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_4__["DatetimePickerComponent"], [ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_5__["DateTimeAdapter"]], { selectMode: [0, "selectMode"], errorMessage: [1, "errorMessage"], max: [2, "max"], datetime: [3, "datetime"] }, { datetimeChange: "datetimeChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.DateTimeSelectMode.RANGE; var currVal_1 = _co.dateRangeError; var currVal_2 = _co.getCurrentDate(); var currVal_3 = _co.dateRange; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null);
}
function View_HealthChecksComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "perspective-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 18, "clr-toggle-wrapper", [["class", "toggle-wrapper"]], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { label: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 16777216, null, 0, 6, "input", [["clrToggle", ""], ["id", "health-perspective-switch"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("change" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onChange($event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (("blur" === en)) {
                var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).triggerValidation() !== false);
                ad = (pd_2 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_3 = (_co.onPerspectiveSwitch($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, ""]], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 3, "label", [["id", "health-perspective-switch-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 4, 0); var currVal_10 = _co.isHistoricalHealth; _ck(_v, 11, 0, currVal_10); var currVal_11 = "health-perspective-switch"; _ck(_v, 14, 0, currVal_11); _ck(_v, 17, 0); var currVal_14 = _co.isHistoricalHealth; _ck(_v, 23, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).toggle; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).toggle; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).id; _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).forAttr; _ck(_v, 16, 0, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 0, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.health.historical.switch.label")); _ck(_v, 18, 0, currVal_13); });
}
function View_HealthChecksComponent_7(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-nav-tab", [["role", "presentation"]], null, [[null, "onClicked"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onClicked" === en)) {
                var pd_0 = (_co.onOverviewPageSelected() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_HealthNavTabComponent_0"], _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_HealthNavTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _card_health_nav_tab_component__WEBPACK_IMPORTED_MODULE_10__["HealthNavTabComponent"], [], { name: [0, "name"], shape: [1, "shape"], shapeColor: [2, "shapeColor"], isSelected: [3, "isSelected"] }, { onClicked: "onClicked" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.title")); var currVal_1 = _co.Icon.DASHBOARD.shape; var currVal_2 = _co.Icon.DASHBOARD.color; var currVal_3 = _co.showOverviewPage; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null);
}
function View_HealthChecksComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner spinner-sm spinner-inline"]], null, null, null, null, null))], null, null); }
function View_HealthChecksComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "clr-icon", [["size", "18"]], [[1, "shape", 0], [8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getIconShape(_v.parent.context.$implicit.testData); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "is-solid ", _co.getIconClass(_v.parent.context.$implicit.testData), ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HealthChecksComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "]))], null, null); }
function View_HealthChecksComponent_8(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "clr-accordion-panel", [], [[8, "id", 0], [2, "clr-accordion-panel", null]], [[null, "clrAccordionPanelOpenChange"]], function (_v, en, $event) {
            var ad = true;
            if (("clrAccordionPanelOpenChange" === en)) {
                var pd_0 = ((_v.context.$implicit.isCollapsed = !$event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrAccordionPanel_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrAccordionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 638976, [[2, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrAccordionPanel"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵen"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵo"]], { disabled: [0, "disabled"], panelOpen: [1, "panelOpen"] }, { panelOpenChange: "clrAccordionPanelOpenChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { accordionDescription: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ÇlrAccordionOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ÇlrAccordionWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 12, "clr-accordion-title", [], [[2, "clr-accordion-title", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrAccordionTitle_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrAccordionTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrAccordionTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "label", [], [[8, "id", 0], [8, "title", 0], [1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["\n                        ", "\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HealthChecksComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HealthChecksComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 2, 6, "clr-accordion-content", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrAccordionContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrAccordionContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrAccordionContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_HealthChecksComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](26, { test: 0, selectedSubtestId: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["\n               "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _v.context.$implicit.testData.inProgress; var currVal_3 = !_v.context.$implicit.isCollapsed; _ck(_v, 3, 0, currVal_2, currVal_3); _ck(_v, 11, 0); var currVal_9 = _v.context.$implicit.testData.inProgress; _ck(_v, 15, 0, currVal_9); var currVal_10 = _co.isCategoryIconVisible(_v.context.$implicit); _ck(_v, 18, 0, currVal_10); var currVal_11 = _ck(_v, 26, 0, _v.context.$implicit, _co.selectedSubTestId); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 25); _ck(_v, 25, 0, currVal_11, currVal_12); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "test-category-", ((_v.context.$implicit.testData == null) ? null : _v.context.$implicit.testData.testId), ""); var currVal_1 = true; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = true; _ck(_v, 7, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "check-", _v.context.index, ""); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.testData.testDescription, ""); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).forAttr; _ck(_v, 10, 0, currVal_5, currVal_6, currVal_7); var currVal_8 = _v.context.$implicit.testData.testName; _ck(_v, 12, 0, currVal_8); });
}
function View_HealthChecksComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "sidenav-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "clr-accordion", [], [[2, "clr-accordion", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrAccordion_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrAccordion"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵen"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵen"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4964352, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrAccordion"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵen"]], { multiPanel: [0, "multiPanel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { panels: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ÇlrAccordionWillyWonka"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HealthChecksComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.overviewTestsData; _ck(_v, 5, 0, currVal_0); var currVal_2 = true; _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.healthTests; _ck(_v, 14, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = true; _ck(_v, 7, 0, currVal_1); }); }
function View_HealthChecksComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], null, null); }
function View_HealthChecksComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_HealthChecksComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { test: 0, selectedSubtestId: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _co.healthTests[0], _co.selectedSubTestId); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 25); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_HealthChecksComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isFlat; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.isFlat; _ck(_v, 6, 0, currVal_1); }, null); }
function View_HealthChecksComponent_15(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-details-card", [["class", "details-card"]], [[2, "has-border", null]], [[null, "onHealthTestNavigation"], [null, "onRetest"], [null, "onSilentChange"], [null, "onError"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onHealthTestNavigation" === en)) {
                var pd_0 = (_co.navigateToHealthTest($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("onRetest" === en)) {
                var pd_1 = (_co.retest.emit($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("onSilentChange" === en)) {
                var pd_2 = (_co.silentChange($event) !== false);
                ad = (pd_2 && ad);
            }
            if (("onError" === en)) {
                var pd_3 = (_co.error.emit($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, _card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_DetailsCardComponent_0"], _card_details_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_DetailsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _card_details_card_component__WEBPACK_IMPORTED_MODULE_14__["DetailsCardComponent"], [_generated_vsan_health_mutation_provider__WEBPACK_IMPORTED_MODULE_15__["VsanHealthMutationProvider"], _generated_vsan_health_property_provider__WEBPACK_IMPORTED_MODULE_16__["VsanHealthPropertyProvider"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_17__["TaskMonitorService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_18__["VsanCapabilityProvider"], _generated_permission_service__WEBPACK_IMPORTED_MODULE_19__["PermissionService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_20__["NavigationService"], _common_service_telemetry_service__WEBPACK_IMPORTED_MODULE_21__["TelemetryService"], _common_service_client_dataservice_data_service_service__WEBPACK_IMPORTED_MODULE_22__["DataServiceClient"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], { isVirtualObjectsLinkShown: [0, "isVirtualObjectsLinkShown"], isDiskSpaceActionShown: [1, "isDiskSpaceActionShown"], hasEditPermissions: [2, "hasEditPermissions"], showTestName: [3, "showTestName"], isSilentCheck: [4, "isSilentCheck"], isOnlineTest: [5, "isOnlineTest"], silentCheckSupported: [6, "silentCheckSupported"], isVsphereHealth: [7, "isVsphereHealth"], isHistoricalTestData: [8, "isHistoricalTestData"], preselectTimestamp: [9, "preselectTimestamp"], showHealthCorrelationMessages: [10, "showHealthCorrelationMessages"], data: [11, "data"] }, { onRetest: "onRetest", onSilentChange: "onSilentChange", onHealthTestNavigation: "onHealthTestNavigation", onError: "onError" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isVirtualObjectsLinkShown; var currVal_2 = _co.isDiskSpaceActionShown; var currVal_3 = _co.hasEditPermissions; var currVal_4 = !_co.isFlat; var currVal_5 = _co.isSilentCheck(_co.selectedSubtest); var currVal_6 = _co.isOnlineTestSelected; var currVal_7 = _co.silentCheckSupported; var currVal_8 = _co.isVsphereHealth; var currVal_9 = _co.healthPerspective.isHistoricalHealthPerspective; var currVal_10 = _co.preselectTimestamp; var currVal_11 = true; var currVal_12 = _co.selectedSubtest; _ck(_v, 2, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.includeBorderToDetails; _ck(_v, 0, 0, currVal_0); });
}
function View_HealthChecksComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "checks-details"], ["role", "tabpanel"]], [[1, "aria-labelledby", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.hasErrors; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.selectedSubtest == null) ? null : _co.selectedSubtest.testId); _ck(_v, 0, 0, currVal_0); }); }
function View_HealthChecksComponent_16(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "checks-details"], ["role", "tabpanel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "vsan-health-overview", [], null, [[null, "onTestSelection"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onTestSelection" === en)) {
                var pd_0 = (_co.navigateToHealthTest($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _health_overview_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_HealthOverviewComponent_0"], _health_overview_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_HealthOverviewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _health_overview_component__WEBPACK_IMPORTED_MODULE_24__["HealthOverviewComponent"], [_generated_vsan_historical_health_service__WEBPACK_IMPORTED_MODULE_25__["VsanHistoricalHealthService"]], { overviewData: [0, "overviewData"], selectedSilenceChecks: [1, "selectedSilenceChecks"], isHistoricalHealth: [2, "isHistoricalHealth"], historicalDateRange: [3, "historicalDateRange"] }, { onTestSelection: "onTestSelection" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.overviewTestsData; var currVal_1 = _co.selectedSilenceChecks; var currVal_2 = _co.isHistoricalHealth; var currVal_3 = _co.dateRange; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null);
}
function View_HealthChecksComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-illustrated-message", [], null, null, null, _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_IllustratedMessageComponent_0"], _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_IllustratedMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_27__["IllustratedMessageComponent"], [], { type: [0, "type"], message: [1, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.noDataMessageType; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.health.historical.details.test.data.missing")); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_HealthChecksComponent_20(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-health-nav-tab", [["role", "presentation"]], null, [[null, "onClicked"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onClicked" === en)) {
                var pd_0 = (_co.summaryCardClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_HealthNavTabComponent_0"], _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_HealthNavTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _card_health_nav_tab_component__WEBPACK_IMPORTED_MODULE_10__["HealthNavTabComponent"], [], { id: [0, "id"], name: [1, "name"], status: [2, "status"], isSelected: [3, "isSelected"] }, { onClicked: "onClicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.testId; var currVal_1 = _v.context.$implicit.testName; var currVal_2 = _v.context.$implicit.status; var currVal_3 = (_v.parent.parent.context.selectedSubtestId == _v.context.$implicit.testId); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null);
}
function View_HealthChecksComponent_22(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-health-nav-tab", [["role", "presentation"]], null, [[null, "onClicked"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onClicked" === en)) {
                var pd_0 = (_co.summaryCardClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_HealthNavTabComponent_0"], _card_health_nav_tab_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_HealthNavTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _card_health_nav_tab_component__WEBPACK_IMPORTED_MODULE_10__["HealthNavTabComponent"], [], { id: [0, "id"], name: [1, "name"], status: [2, "status"], isSelected: [3, "isSelected"] }, { onClicked: "onClicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.testId; var currVal_1 = _v.context.$implicit.testName; var currVal_2 = _v.context.$implicit.status; var currVal_3 = (_v.parent.parent.parent.context.selectedSubtestId == _v.context.$implicit.testId); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null);
}
function View_HealthChecksComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 6, "div", [["class", "healthy-tests-wrapper"], ["role", "presentation"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _common_directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_28__["ShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], { state: [0, "state"], showTriggerElement: [1, "showTriggerElement"], hideTriggerElement: [2, "hideTriggerElement"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getHealthyTestWrapperState(_v.parent.parent.context.test.testData.subtests); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 8); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 10); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.getHealthySubtests(_v.parent.parent.context.test.testData.subtests); _ck(_v, 5, 0, currVal_3); }, null); }
function View_HealthChecksComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "button", [["aria-expanded", "false"], ["class", "healthy-test-trigger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.monitor.health.expand.healthy.tests", _co.getHealthySubtests(_v.parent.parent.context.test.testData.subtests).length.toString())); _ck(_v, 2, 0, currVal_0); }); }
function View_HealthChecksComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "button", [["aria-expanded", "true"], ["class", "healthy-test-trigger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.monitor.health.collapse.healthy.tests", _co.getHealthySubtests(_v.parent.parent.context.test.testData.subtests).length.toString())); _ck(_v, 2, 0, currVal_0); }); }
function View_HealthChecksComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "nav-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["showTrigger", 2]], null, 0, null, View_HealthChecksComponent_23)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["hideTrigger", 2]], null, 0, null, View_HealthChecksComponent_24)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getUnhealthySubtests(_v.parent.context.test.testData.subtests); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.getHealthySubtests(_v.parent.context.test.testData.subtests).length; _ck(_v, 6, 0, currVal_1); }, null); }
function View_HealthChecksComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = ((_v.context.test == null) ? null : _v.context.test.testData); _ck(_v, 2, 0, currVal_0); }, null); }
function View_HealthChecksComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_29__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "nav-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthChecksComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["section", 2]], null, 0, null, View_HealthChecksComponent_18)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.titleHealder; _ck(_v, 5, 0, currVal_0); var currVal_1 = (!_co.isFlat && _co.includeHistoricalHealth); _ck(_v, 8, 0, currVal_1); var currVal_2 = (!_co.hasErrors && !_co.hasNoTestData); _ck(_v, 11, 0, currVal_2); var currVal_3 = (!_co.hasNoTestData && !_co.showOverviewPage); _ck(_v, 15, 0, currVal_3); var currVal_4 = (!_co.hasNoTestData && _co.showOverviewPage); _ck(_v, 19, 0, currVal_4); var currVal_5 = ((!_co.hasErrors && _co.isHistoricalHealth) && _co.hasNoTestData); _ck(_v, 23, 0, currVal_5); }, null); }
function View_HealthChecksComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-health-checks", [], [[2, "no-sidenav-layout", null]], null, null, View_HealthChecksComponent_0, RenderType_HealthChecksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _health_checks_component__WEBPACK_IMPORTED_MODULE_30__["HealthChecksComponent"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasNoTestData; _ck(_v, 0, 0, currVal_0); }); }
var HealthChecksComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-health-checks", _health_checks_component__WEBPACK_IMPORTED_MODULE_30__["HealthChecksComponent"], View_HealthChecksComponent_Host_0, { titleHealder: "titleHealder", isVirtualObjectsLinkShown: "isVirtualObjectsLinkShown", isDiskSpaceActionShown: "isDiskSpaceActionShown", hasEditPermissions: "hasEditPermissions", isFlat: "isFlat", includeHistoricalHealth: "includeHistoricalHealth", selectedSubTestId: "selectedSubTestId", lastCheckedTimestamp: "lastCheckedTimestamp", includeBorderToDetails: "includeBorderToDetails", hasErrors: "hasErrors", showOverviewPage: "showOverviewPage", vsanHealthData: "vsanHealthData", silentCheckSupported: "silentCheckSupported", selectedSilenceChecks: "selectedSilenceChecks", isVsphereHealth: "isVsphereHealth", healthPerspective: "healthPerspective" }, { selectedSubTestIdChange: "selectedSubTestIdChange", showOverviewPageChange: "showOverviewPageChange", healthPerspectiveChange: "healthPerspectiveChange", retest: "retest", error: "error" }, []);




/***/ }),

/***/ "ERnJ":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/health/view/health-checks.scss.shim.ngstyle.js ***!
  \*********************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: row;\n}\n.no-sidenav-layout[_nghost-%COMP%] {\n  flex-direction: column !important;\n}\n.nav-container[_ngcontent-%COMP%] {\n  width: 15.6rem;\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  overflow-y: hidden;\n}\n.nav-container[_ngcontent-%COMP%]   clr-toggle-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0.15rem;\n}\n.nav-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.nav-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .nav-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.nav-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.title-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n.perspective-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n}\n.perspective-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.perspective-wrapper[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .perspective-wrapper[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.perspective-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nvsan-datetime-picker[_ngcontent-%COMP%] {\n  padding-bottom: 0.15rem;\n}\n.sidenav-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .sidenav-wrapper[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.healthy-tests-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n}\n.checks-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  overflow: auto;\n  padding: 0 0 0 0.6rem;\n}\n.checks-details[_ngcontent-%COMP%]   .details-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.checks-details[_ngcontent-%COMP%]   vsan-health-details-card[_ngcontent-%COMP%], .checks-details[_ngcontent-%COMP%]   vsan-health-overview[_ngcontent-%COMP%] {\n  padding: 0 0.6rem 0.6rem 0.6rem;\n}\n  clr-accordion {\n  padding: 0.05rem;\n}\n  clr-accordion .clr-accordion-panel {\n  padding-bottom: 0.6rem;\n}\n  clr-accordion .clr-accordion-panel-open .clr-accordion-header {\n  background-color: inherit !important;\n}\n  clr-accordion .clr-accordion-header {\n  border-width: 0px !important;\n}\n  clr-accordion .clr-accordion-header .clr-accordion-header-button {\n  padding: 0.15rem !important;\n}\n  clr-accordion .clr-accordion-header .clr-accordion-header-button label {\n  color: var(--health-test-category-color) !important;\n}\n  clr-accordion .clr-accordion-header .clr-accordion-header-button clr-icon.clr-accordion-angle {\n  fill: var(--health-test-category-color) !important;\n}\n  clr-accordion clr-accordion-title {\n  font-size: 0.7rem !important;\n}\n  clr-accordion clr-accordion-title > * {\n  margin-right: 0.15rem !important;\n}\n  clr-accordion clr-accordion-title > clr-signpost {\n  margin-right: 0.3rem !important;\n}\n  clr-accordion clr-accordion-title > clr-signpost:not(:first-child) {\n  margin-left: 0.15rem !important;\n}\n  clr-accordion clr-accordion-title > clr-icon {\n  margin-right: 0.3rem !important;\n}\n  clr-accordion clr-accordion-title > clr-icon:not(:first-child) {\n  margin-left: 0.15rem !important;\n}\n  clr-accordion clr-accordion-title > *:last-child {\n  margin-right: 0rem !important;\n}\n  clr-accordion .clr-accordion-content {\n  background-color: inherit !important;\n  border-width: 0px !important;\n}\n  clr-accordion .clr-accordion-inner-content {\n  padding: 0.15rem 0.15rem 0 0.15rem !important;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n}\n.healthy-test-trigger[_ngcontent-%COMP%] {\n  color: var(--vsan-link-color);\n  padding: 0;\n  background: transparent;\n  border-width: 0;\n  text-align: left;\n  margin-bottom: 0.05rem;\n}\n.has-border[_ngcontent-%COMP%] {\n  border: 0.05rem solid var(--vsan-border-color);\n  border-radius: 0.15rem;\n}\n.no-test-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  align-items: center;\n  justify-content: center;\n}\n.no-test-data[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.no-test-data[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .no-test-data[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.no-test-data[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.no-test-data[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.no-test-data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oZWFsdGgtY2hlY2tzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMTUE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBV0g7QUFWRztFQUNHLGlDQUFBO0FBWU47QUFSQTtFQUNHLGNBWmdCO0VBYWhCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVdIO0FBVkc7RUFDRyxvQkdGSztBSGNYO0FFZ0JHO0VBQ0csZ0NBQUE7QUZkTjtBRWdCRzs7RUFHRyxnQ0FBQTtBRmZOO0FFaUJHO0VBQ0csOEJBQUE7QUZmTjtBQWpCQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFvQkg7QUFqQkE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBb0JIO0FFTkc7RUFDRyxnQ0FBQTtBRlFOO0FFTkc7O0VBR0csZ0NBQUE7QUZPTjtBRUxHO0VBQ0csOEJBQUE7QUZPTjtBQTFCQTtFQUNHLHVCR3JCUTtBSGtEWDtBQTFCQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQTZCSDtBRTNCRztFQUNHLGdDQUFBO0FGNkJOO0FFM0JHOztFQUdHLGdDQUFBO0FGNEJOO0FFMUJHO0VBQ0csOEJBQUE7QUY0Qk47QUFuQ0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBc0NIO0FBbkNBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFzQ0g7QUFyQ0c7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBdUNOO0FBckNHO0VBQ0csK0JBQUE7QUF1Q047QUFsQ0E7RUFHRyxnQkd4RFM7QUgyRlo7QUFqQ0c7RUFDRyxzQkcvREk7QUhrR1Y7QUFqQ0c7RUFDRyxvQ0FBQTtBQW1DTjtBQWpDRztFQUNHLDRCQUFBO0FBbUNOO0FBbENNO0VBQ0csMkJBQUE7QUFvQ1Q7QUFsQ1M7RUFDRyxtREFBQTtBQW9DWjtBQWxDUztFQUNHLGtEQUFBO0FBb0NaO0FBaENHO0VBQ0csNEJBQUE7QUFrQ047QUVyRUc7RUFDSyxnQ0FBQTtBRnVFUjtBRXJFRztFQUlHLCtCQUFBO0FGb0VOO0FFbkVNO0VBQ0csK0JBQUE7QUZxRVQ7QUVsRUc7RUFFRywrQkFBQTtBRm1FTjtBRWpFTTtFQUNHLCtCQUFBO0FGbUVUO0FFaEVHO0VBQ0csNkJBQUE7QUZrRU47QUFqREc7RUFDRyxvQ0FBQTtFQUNBLDRCQUFBO0FBbUROO0FBakRHO0VBQ0csNkNBQUE7QUFtRE47QUEvQ0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBa0RIO0FBL0NBO0VBQ0csNkJHckRlO0VIc0RmLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCR3ZHUztBSHdKWjtBQTlDQTtFQUNHLDhDRzlFVztFSCtFWCxzQkc3R1E7QUg4Slg7QUE5Q0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWlESDtBRXhJRztFQUNHLGdDQUFBO0FGMElOO0FFeElHOztFQUdHLGdDQUFBO0FGeUlOO0FFdklHO0VBQ0csOEJBQUE7QUZ5SU47QUF4REc7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQTBETjtBQXZERztFQUNHLGtCQUFBO0FBeUROIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oZWFsdGgtY2hlY2tzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kdGVzdC1jYXRlZ29yeS1jb2xvcjogdmFyKC0taGVhbHRoLXRlc3QtY2F0ZWdvcnktY29sb3IpO1xuJG5hdmlnYXRpb25fd2lkdGg6IDE1LjZyZW07XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAmLm5vLXNpZGVuYXYtbGF5b3V0IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgd2lkdGg6ICRuYXZpZ2F0aW9uX3dpZHRoO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgIGNsci10b2dnbGUtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogJHZzYW4tb3V0bGluZS1zaXplO1xuICAgfVxuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi50aXRsZS1oZWFkZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLnBlcnNwZWN0aXZlLXdyYXBwZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG52c2FuLWRhdGV0aW1lLXBpY2tlciB7XG4gICBwYWRkaW5nLWJvdHRvbTogJHZzYW4tb3V0bGluZS1zaXplOyAvLyBrZWVwIGlub3V0IGJvdHRvbSBib3JkZXIgdmlzaWJsZSB3aGVuIGl0IGlzIGxhc3QgZWxlbWVudCBvZiBuYXYtY29udGFpbmVyXG59XG5cbi5zaWRlbmF2LXdyYXBwZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIG92ZXJmbG93LXk6IGF1dG87XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLmhlYWx0aHktdGVzdHMtd3JhcHBlciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4uY2hlY2tzLWRldGFpbHMge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgb3ZlcmZsb3c6IGF1dG87XG4gICBwYWRkaW5nOiAwIDAgMCAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICAuZGV0YWlscy1jYXJkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMSAwIDByZW07XG4gICB9XG4gICB2c2FuLWhlYWx0aC1kZXRhaWxzLWNhcmQsIHZzYW4taGVhbHRoLW92ZXJ2aWV3IHtcbiAgICAgIHBhZGRpbmc6IDAgJHZzYW4tZWxlbWVudC1zcGFjaW5nICR2c2FuLWVsZW1lbnQtc3BhY2luZyAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICB9XG59XG5cbi8vIG92ZXJyaWRlIGFjY29yZGlvbiBzdHlsZSBpbiBvcmRlciB0byBhY2hpZXZlIHRlc3QgY2F0ZWdvcmllcyAvIHRlc3RzIGxvb2sgYW5kIGZlZWxcbjo6bmctZGVlcCBjbHItYWNjb3JkaW9uIHtcblxuICAgLy8gcmVzZXJ2ZSBzcGFjZSB0byBkaXNwbGF5IG91dGxpbmUgZm9yIGZvY3VzZWQgZWxlbWVudFxuICAgcGFkZGluZzogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsO1xuXG4gICAuY2xyLWFjY29yZGlvbi1wYW5lbCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xuICAgfVxuICAgLmNsci1hY2NvcmRpb24tcGFuZWwtb3BlbiAuY2xyLWFjY29yZGlvbi1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgfVxuICAgLmNsci1hY2NvcmRpb24taGVhZGVyIHtcbiAgICAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAuY2xyLWFjY29yZGlvbi1oZWFkZXItYnV0dG9uIHtcbiAgICAgICAgIHBhZGRpbmc6ICR2c2FuLW91dGxpbmUtc2l6ZSAhaW1wb3J0YW50O1xuICAgICAgICAgLy8gb3ZlcnJpZGUgc3R5bGVzIHNldCBieSBjbHItdWktYTExeTogc2V0IHNhbWUgY29sb3IgZm9yIG9wZW5lZCBhbmQgY2xvc2VkIHN0YXRlXG4gICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHRlc3QtY2F0ZWdvcnktY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgIH1cbiAgICAgICAgIGNsci1pY29uLmNsci1hY2NvcmRpb24tYW5nbGUge1xuICAgICAgICAgICAgZmlsbDogJHRlc3QtY2F0ZWdvcnktY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cbiAgIGNsci1hY2NvcmRpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAkdnNhbi1mb250LXNpemUtbWQgIWltcG9ydGFudDtcbiAgICAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZygkdnNhbi14eHMpO1xuICAgfVxuICAgLmNsci1hY2NvcmRpb24tY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgfVxuICAgLmNsci1hY2NvcmRpb24taW5uZXItY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAkdnNhbi1vdXRsaW5lLXNpemUgJHZzYW4tb3V0bGluZS1zaXplIDAgJHZzYW4tb3V0bGluZS1zaXplICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi5uYXYtbGlzdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4uaGVhbHRoeS10ZXN0LXRyaWdnZXIge1xuICAgY29sb3I6ICR2c2FuLWxpbmstY29sb3I7XG4gICBwYWRkaW5nOiAwO1xuICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICBib3JkZXItd2lkdGg6IDA7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgLy8gcmVzZXJ2ZSBzcGFjZSB0byBkaXNwbGF5IG91dGxpbmUgZm9yIGZvY3VzZWQgZWxlbWVudFxuICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsO1xufVxuXG4uaGFzLWJvcmRlciB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlcjtcbiAgIGJvcmRlci1yYWRpdXM6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplO1xufVxuXG4ubm8tdGVzdC1kYXRhIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcblxuICAgY2xyLWljb24ge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICB9XG5cbiAgIGRpdiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];




/***/ }),

/***/ "I0Pd":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/common/component/action-button/button-title.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTitleDirective", function() { return ButtonTitleDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

/**
 * Attribute directive for detecting button title change and storing title.
 * Only used for clr-button in clr-button-group.
 * @title - The title of clr-button
 */
class ButtonTitleDirective {
    constructor(host) {
        this.host = host;
        this.titleChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
    }
    set title(value) {
        if (this._title !== value) {
            this.titleChange.next(value);
        }
        this._title = value;
    }
    get title() {
        return this._title;
    }
    get titleChangeEvent() {
        return this.titleChange.asObservable();
    }
    ngOnInit() {
        // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.
        if (!this.host.name) {
            this.host.name = Math.random().toString();
        }
    }
    ngOnDestroy() {
        this.titleChange.unsubscribe();
    }
}



/***/ }),

/***/ "Ju17":
/*!*********************************************************************************************!*\
  !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-group-common.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: ClrButtonGroupCommonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrButtonGroupCommonDirective", function() { return ClrButtonGroupCommonDirective; });
/**
 * Applies on every clr-button-group and help to link the clr-button with directive applieds on it,  which extends
 * {@link ClrButtonBaseDirective}, to the actual rendered html button.
 */
class ClrButtonGroupCommonDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            const allButtons = this.elRef.nativeElement.querySelectorAll("button");
            // match button with clrButton and notify directives
            this.clrButtons.filter(clrButton => !!clrButton.directives)
                .forEach((clrButton, index) => {
                const buttonFound = this.findButtonByName(clrButton.name, allButtons);
                if (buttonFound) {
                    clrButton.directives.forEach(directive => {
                        directive.resolveButton(clrButton, buttonFound, index);
                    });
                }
            });
        });
    }
    findButtonByName(name, buttons) {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons.item(i).name === name) {
                return buttons.item(i);
            }
        }
        return null;
    }
}



/***/ }),

/***/ "LlSX":
/*!***************************************************************!*\
  !*** ./src/app/vsan/health/view/health-overview.component.ts ***!
  \***************************************************************/
/*! exports provided: HealthOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthOverviewComponent", function() { return HealthOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/illustrated-message/illustrated-message.component */ "GNkU");
/* harmony import */ var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/vsan-health-status */ "bur7");
/* harmony import */ var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @service/flow/loader.decorator */ "8V30");
/* harmony import */ var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/flow/loading-indicator.decorator */ "2BwX");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _util_cache_cached_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @util/cache/cached.decorator */ "rH0J");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _util_promise_race_condition_safe_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @util/promise/race-condition-safe.decorator */ "akgu");
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _model_health_test_nav_params__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/health-test-nav-params */ "fLgZ");

/* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */












let HealthOverviewComponent = /*@__PURE__*/ (() => {
    class HealthOverviewComponent {
        constructor(historicalHealthService) {
            this.historicalHealthService = historicalHealthService;
            this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"];
            this.IllustratedMessageType = _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_2__["IllustratedMessageType"];
            this.onTestSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.isHistoricalHealth) {
                    yield this.fetchHistoricalInstances();
                }
            });
        }
        fetchHistoricalInstances() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_6__["ManagedObject"].contextObject;
                this.historicalInstances =
                    yield this.getHistoricalOverallHealth(this.historicalDateRange.from, this.historicalDateRange.to);
            });
        }
        getHistoricalOverallHealth(from, to) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return yield this.historicalHealthService.getHistoricalOverallHealth(this.clusterRef, from, to);
            });
        }
        instanceSelected(instanceTimestamp) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.overviewData = null;
                this.isTimestampSelected = !!instanceTimestamp;
                if (instanceTimestamp) {
                    this.selectedHistoricalTimestamp = instanceTimestamp;
                    this.overviewData = yield this.getHistoricalOverallHealthForInstance(instanceTimestamp);
                }
            });
        }
        getHistoricalOverallHealthForInstance(instanceTimestamp) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.historicalHealthService.getHistoricalOverallHealthForInstance(this.clusterRef, instanceTimestamp);
            });
        }
        onTestSelected(testId) {
            const params = new _model_health_test_nav_params__WEBPACK_IMPORTED_MODULE_12__["HealthTestNavParams"](testId);
            if (this.isHistoricalHealth) {
                params.timestamp = this.selectedHistoricalTimestamp;
            }
            this.onTestSelection.emit(params);
        }
        get otherIssuesTitle() {
            return this.overviewData.coreIssues && this.overviewData.coreIssues.length > 0
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.overview.other.issues.label")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.overview.issues.label");
        }
        get noIssuesMessage() {
            return this.isHistoricalHealth
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.overview.historical.noIssues")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.overview.normal.noIssues");
        }
        get showOverallCounts() {
            return this.isHistoricalHealth
                ? this.overviewData && !this.isHistoricalCorrelationsLoading && this.isTimestampSelected
                : !!this.overviewData;
        }
        get showIssues() {
            return this.isHistoricalHealth
                ? !this.isHistoricalInstancesLoading && !this.isHistoricalCorrelationsLoading && this.isTimestampSelected
                : !!this.overviewData;
        }
        getChildren(test) {
            return test.relatedHealthTests;
        }
        getOverallCount(silentTestIds) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].isEmpty(silentTestIds)) {
                return 0;
            }
            return silentTestIds.filter(testId => _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].isEmpty(this.selectedSilenceChecks)
                || !this.isSilentTest(testId)).length;
        }
        getStatusIconClass(testData) {
            if (testData.isSkipped) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].SKIPPED_CHECK;
            }
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_10__["VsanHealthUtil"].getVsanHealthStatusIconClass(this.isSilentTest(testData.testId)
                ? _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__["VsanHealthStatus"].skipped
                : testData.testStatus);
        }
        getStatusIconShape(testData) {
            if (testData.isSkipped) {
                return _util_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"].SKIPPED_CHECK;
            }
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_10__["VsanHealthUtil"].getVsanHealthStatusIconShape(this.isSilentTest(testData.testId)
                ? _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_3__["VsanHealthStatus"].skipped
                : testData.testStatus);
        }
        isSilentTest(testId) {
            var _a;
            if (this.isHistoricalHealth) {
                // Don't show the currently silenced test as silencedwhen dealing with older versions of the test (historical).
                return false;
            }
            return (_a = this.selectedSilenceChecks) === null || _a === void 0 ? void 0 : _a.some(silenceId => testId.indexOf(silenceId) !== -1);
        }
    }
    HealthOverviewComponent.INSTANCES_LOADING_KEY = "instances-loading";
    HealthOverviewComponent.CORRELATIONS_LOADING_KEY = "correlations-loading";
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicator"])({ name: HealthOverviewComponent.INSTANCES_LOADING_KEY }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], HealthOverviewComponent.prototype, "isHistoricalInstancesLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicator"])({ name: HealthOverviewComponent.CORRELATIONS_LOADING_KEY }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], HealthOverviewComponent.prototype, "isHistoricalCorrelationsLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_4__["Loader"])({ name: HealthOverviewComponent.INSTANCES_LOADING_KEY }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], HealthOverviewComponent.prototype, "fetchHistoricalInstances", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_util_promise_race_condition_safe_decorator__WEBPACK_IMPORTED_MODULE_9__["RaceConditionSafe"])(),
        Object(_util_cache_cached_decorator__WEBPACK_IMPORTED_MODULE_7__["Cached"])({ trackBy: _util_cache_cached_decorator__WEBPACK_IMPORTED_MODULE_7__["TrackBy"].INPUT_VALUES }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number, Number]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], HealthOverviewComponent.prototype, "getHistoricalOverallHealth", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_4__["Loader"])({ name: HealthOverviewComponent.CORRELATIONS_LOADING_KEY }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], HealthOverviewComponent.prototype, "instanceSelected", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_util_promise_race_condition_safe_decorator__WEBPACK_IMPORTED_MODULE_9__["RaceConditionSafe"])(),
        Object(_util_cache_cached_decorator__WEBPACK_IMPORTED_MODULE_7__["Cached"])({ trackBy: _util_cache_cached_decorator__WEBPACK_IMPORTED_MODULE_7__["TrackBy"].INPUT_VALUES }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], HealthOverviewComponent.prototype, "getHistoricalOverallHealthForInstance", null);
    return HealthOverviewComponent;
})();



/***/ }),

/***/ "MCPo":
/*!********************************************************!*\
  !*** ./src/app/vsan/health/model/health-tests.data.ts ***!
  \********************************************************/
/*! exports provided: HealthTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthTests", function() { return HealthTests; });
/* Copyright 2019-2020 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * Data model used to display health tests summary cards.
 */
class HealthTests {
    constructor(testData, isCollapsed = true) {
        this.testData = testData;
        this.isCollapsed = isCollapsed;
    }
}



/***/ }),

/***/ "NMgx":
/*!*************************************************************!*\
  !*** ./src/app/vsan/health/view/health-checks.component.ts ***!
  \*************************************************************/
/*! exports provided: HealthChecksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthChecksComponent", function() { return HealthChecksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/vsan-health-util */ "MGNl");
/* harmony import */ var _model_health_tests_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/health-tests.data */ "MCPo");
/* harmony import */ var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/vsan-health-status */ "bur7");
/* harmony import */ var _component_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/datetime-picker/datetime-picker.component */ "WlEE");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @directive/show-hide/show-hide.directive */ "l+cV");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* harmony import */ var _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @component/illustrated-message/illustrated-message.component */ "GNkU");
/* harmony import */ var _model_health_retest_event_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/health-retest-event.data */ "jiVK");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _model_health_perspective_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/health-perspective-data */ "1rB6");

/* Copyright 2018-2021 VMware, Inc. All rights reserved. -- VMware Confidential */












class HealthChecksComponent {
    constructor() {
        this.DateTimeSelectMode = _component_datetime_picker_datetime_picker_component__WEBPACK_IMPORTED_MODULE_5__["DateTimeSelectMode"];
        this.VsanHealthStatus = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"];
        this.ShowHideState = _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"];
        this.VsanHealthUtil = _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"];
        this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_11__["Icon"];
        this.HEALTH_STATUS_ORDER = [
            _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].red, _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].yellow, _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].info,
            _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].green, _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].skipped, _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].unknown,
        ];
        this.MAX_HISTORICAL_HEALTH_INTERVAL_DAYS = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_8__["VsanDateTimeUtils"].DAYS_IN_MONTH_DEFAULT;
        this.healthTests = [];
        this.isVirtualObjectsLinkShown = true;
        this.isDiskSpaceActionShown = true;
        this.hasEditPermissions = false;
        this.isFlat = false;
        this.selectedSubTestId = "";
        this.selectedSubTestIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.preselectTimestamp = null;
        this.showOverviewPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isTestDataInitialised = false;
        this.silentCheckSupported = false;
        this.selectedSilenceChecks = [];
        this._healthPerspective = new _model_health_perspective_data__WEBPACK_IMPORTED_MODULE_12__["HealthPerspectiveData"](false);
        this.healthPerspectiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.retest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSilentCheck = (testData) => {
            if (!testData) {
                return false;
            }
            // for a test category, if all of the subtests are silence, the category is marked as silence
            if (testData.subtests) {
                const silentItems = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(this.selectedSilenceChecks) &&
                    this.selectedSilenceChecks.filter(check => testData.subtests.some(test => check === test.silenceTestId));
                return (silentItems.length === testData.subtests.length);
            }
            return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(this.selectedSilenceChecks) &&
                this.selectedSilenceChecks.some(check => check === testData.silenceTestId);
        };
    }
    set showOverviewPage(val) {
        this._showOverviewPage = val;
        if (this.showOverviewPage) {
            // If the overview page is selected, hide the test details.
            this.selectedSubTestIdChange.emit(null);
        }
        this.showOverviewPageChange.emit(this.showOverviewPage);
    }
    get showOverviewPage() {
        return this._showOverviewPage;
    }
    set vsanHealthData(data) {
        this._vsanHealthData = data;
        if (!data || _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(data.testsData)) {
            this.healthTests = [];
            this.selectedSubTestId = null;
            this.preselectTimestamp = null;
            this.hasNoTestData = true;
            return;
        }
        this.overviewTestsData = this._vsanHealthData.overviewData;
        if (!this.isTestDataInitialised) {
            this.initTestGroups(this._vsanHealthData);
            this.isTestDataInitialised = true;
            return;
        }
        this.updateTestGroups(this._vsanHealthData);
    }
    get vsanHealthData() {
        return this._vsanHealthData;
    }
    set healthPerspective(value) {
        // the object is two-way bound between parent and child. If the same object is passed back and forth it is
        // impossible to detect a change (difference from the cached one). To address this issue always work with a clone
        // of the object (new object)
        const newValue = value.clone();
        if (!newValue || newValue.equals(this._healthPerspective)) {
            return;
        }
        this._healthPerspective = newValue;
        this.isHistoricalHealth = this._healthPerspective.isHistoricalHealthPerspective;
        this.dateRange = this._healthPerspective.dateRange;
    }
    get healthPerspective() {
        return this._healthPerspective;
    }
    get selectedSubtest() {
        if (!this.selectedSubTestId) {
            return null;
        }
        return [].concat(...this.healthTests.map(healthTest => healthTest.testData.subtests))
            .find(subtest => subtest.testId === this.selectedSubTestId);
    }
    get isOnlineTestSelected() {
        const selectedTest = this.selectedSubtest;
        if (!selectedTest) {
            return false;
        }
        const testCategory = this.vsanHealthData.testsData.find(t => t.subtests && t.subtests.some(s => s.testId === selectedTest.testId));
        if (!testCategory) {
            return false;
        }
        return testCategory.subtests &&
            testCategory.subtests.some(subtest => subtest.testId === _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].CEIP_TEST_ID
                || subtest.testId === _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].SUPPORT_INSIGHT_TEST_ID);
    }
    getHealthySubtests(subtests) {
        if (!subtests) {
            return [];
        }
        return subtests.filter(subtest => !this.isUnhealthyStatus(subtest.status));
    }
    getUnhealthySubtests(subtests) {
        if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(subtests)) {
            return [];
        }
        return subtests.filter(subtest => this.isUnhealthyStatus(subtest.status));
    }
    silentChange(data) {
        if (data.isSilent) {
            this.selectedSilenceChecks.push(this.selectedSubtest.silenceTestId);
            this.selectedSubtest.status = _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].skipped;
            // get selected test category and resort subtests, because there is new skipped subtest
            const selectedCategory = this.getSelectedCategory(this.vsanHealthData.testsData, this.selectedSubtest.testId);
            if (selectedCategory) {
                this.sortSubtests(selectedCategory.subtests);
            }
        }
        else {
            this.selectedSilenceChecks.splice(this.selectedSilenceChecks.indexOf(this.selectedSubtest.silenceTestId), 1);
            if (data.settings.runRetest) {
                this.retest.emit(new _model_health_retest_event_data__WEBPACK_IMPORTED_MODULE_10__["HealthRetestEventData"](data.settings.retestOnlineHealth));
            }
        }
    }
    navigateToHealthTest(params) {
        this.showOverviewPage = false;
        this.selectedSubTestId = params.testId;
        this.preselectTimestamp = params.timestamp;
        const group = this.healthTests.find(test => test.testData && test.testData.subtests &&
            test.testData.subtests.some(subtest => subtest.helpId === this.selectedSubTestId));
        if (group) {
            group.isCollapsed = false;
        }
    }
    getSelectedCategory(testCategiries, subtestId) {
        return testCategiries.find(testCategory => testCategory.subtests.some(subtest => subtest.testId === subtestId));
    }
    initTestGroups(healthData) {
        if (this.isFlat) {
            this.healthTests = healthData.testsData.map(item => new _model_health_tests_data__WEBPACK_IMPORTED_MODULE_3__["HealthTests"](item, false));
        }
        else {
            this.healthTests = healthData.testsData.map((item) => {
                this.sortSubtests(item.subtests);
                return new _model_health_tests_data__WEBPACK_IMPORTED_MODULE_3__["HealthTests"](item, item.inProgress ? true : this.getLoadedGroupCollapseState(item));
            });
        }
        // once healthTests are initialized, try to get selected subtest from the persisted id. If not found reset
        // selected test id. This may happen if the selected test is not present any more or has no historical data
        // for the selected period.
        // Also preselecting the first test should be done only if "Overview" page is not currently shown.
        if (!this.selectedSubtest && !this.showOverviewPage) {
            this.preselectFirstAvailableCheck();
        }
    }
    preselectFirstAvailableCheck() {
        const firstCategoryWithTests = this.healthTests.find(category => !_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(category.testData.subtests));
        if (!firstCategoryWithTests) {
            return;
        }
        firstCategoryWithTests.isCollapsed = false;
        this.selectedSubTestId = firstCategoryWithTests.testData.subtests[0].testId;
        this.changeSummaryCard(this.selectedSubTestId);
    }
    updateTestGroups(newHealthData) {
        this.healthTests.forEach((currentGroup) => {
            const updatedTest = newHealthData.testsData.find(test => test.testId === currentGroup.testData.testId);
            if (updatedTest.inProgress) {
                return; // group is still loading or has loaded in previous poll
            }
            // if the test is ready, update its data
            // NOTE: the test will remain collapsed in order to avoid scroll jumping
            currentGroup.testData = updatedTest;
            this.sortSubtests(currentGroup.testData.subtests);
        });
    }
    getLoadedGroupCollapseState(testData) {
        const isUnhealthy = this.isUnhealthyStatus(testData.status);
        const isSelected = (testData.subtests.some(subTest => subTest.testId === this.selectedSubTestId));
        return !isUnhealthy && !isSelected;
    }
    sortSubtests(subtests) {
        subtests.sort((a, b) => this.getElementPosition(a) - this.getElementPosition(b));
    }
    getElementPosition(element) {
        if (!element || !element.status) {
            return this.HEALTH_STATUS_ORDER.length;
        }
        // put all not known statuses at the end - return index greater than the last element of the order array;
        const result = this.HEALTH_STATUS_ORDER.indexOf(element.status);
        return result < 0 ? this.HEALTH_STATUS_ORDER.length : result;
    }
    summaryCardClick(selectedSubtestId) {
        this.changeSummaryCard(selectedSubtestId);
    }
    changeSummaryCard(selectedSubtestId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showOverviewPage = false;
            this.selectedSubTestId = selectedSubtestId;
            this.preselectTimestamp = null;
            if (!this.selectedSubtest) {
                return;
            }
            this.selectedSubTestIdChange.emit(this.selectedSubtest.testId);
        });
    }
    onOverviewPageSelected() {
        this.selectedSubTestId = null;
        this.showOverviewPage = true;
    }
    getIconShape(test) {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].getVsanHealthStatusIconShape(test.status);
    }
    getIconClass(test) {
        return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_2__["VsanHealthUtil"].getVsanHealthStatusIconClass(test.status);
    }
    onPerspectiveSwitch(isHistoricalPerspective) {
        this.isHistoricalHealth = isHistoricalPerspective;
        this._healthPerspective.isHistoricalHealthPerspective = isHistoricalPerspective;
        this.notifyHistoricalHealthRangeChanged();
    }
    onDateRangeChange(range) {
        this.dateRangeError = undefined;
        if (!range.from || !range.to) {
            this.dateRangeError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.health.historical.daterange.empty");
            return;
        }
        // from before to
        if (range.from > range.to) {
            this.dateRangeError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.health.historical.daterange.not.valid");
            return;
        }
        // more than 30 days back
        const earliestAvailableTimestamp = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_8__["VsanDateTimeUtils"].getEarliestAvailableTimestamp(this.lastCheckedTimestamp, this.MAX_HISTORICAL_HEALTH_INTERVAL_DAYS * _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_8__["VsanDateTimeUtils"].DAY_IN_MILLISECONDS);
        if (range.from < earliestAvailableTimestamp) {
            this.dateRangeError = _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.health.historical.daterange.older.than.allowed", this.MAX_HISTORICAL_HEALTH_INTERVAL_DAYS);
            return;
        }
        this._healthPerspective.dateRange = range;
        this.notifyHistoricalHealthRangeChanged();
    }
    notifyHistoricalHealthRangeChanged() {
        this.healthPerspectiveChange.emit(this._healthPerspective);
    }
    getCurrentDate() {
        return new Date();
    }
    getHealthyTestWrapperState(subtests) {
        // if all tests are healthy do not add option to hide / show
        if (!this.getUnhealthySubtests(subtests).length) {
            return _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].DISABLED;
        }
        // show healthy tests only if one of them is selected
        return this.getHealthySubtests(subtests).some(subtest => subtest.testId === this.selectedSubTestId) ?
            _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].SHOWN : _directive_show_hide_show_hide_directive__WEBPACK_IMPORTED_MODULE_7__["ShowHideState"].HIDDEN;
    }
    get noDataMessageType() {
        return _component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_9__["IllustratedMessageType"].MISSING_DATA;
    }
    isUnhealthyStatus(status) {
        return status === _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].red || status === _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_4__["VsanHealthStatus"].yellow;
    }
    isCategoryIconVisible(test) {
        if (!test || test.testData.inProgress) {
            return false;
        }
        return test.isCollapsed && this.isUnhealthyStatus(test.testData.status);
    }
}



/***/ }),

/***/ "OJRk":
/*!*****************************************************!*\
  !*** ./src/app/vsan/health/health-checks.module.ts ***!
  \*****************************************************/
/*! exports provided: HealthChecksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthChecksModule", function() { return HealthChecksModule; });
class HealthChecksModule {
}



/***/ }),

/***/ "Xbvm":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/common/component/action-button/button-group.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonGroupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupDirective", function() { return ButtonGroupDirective; });
/**
 * Attribute directive used to dynamically arrange child buttons, align some horizontally and
 * put the others into the drop-down list, this directive also add title attribute to the buttons.
 * It can only used on clr-button-group and there should be clr-button in the button group.
 * @maximumInlineActions - The maximum value of inline buttons.
 */
let ButtonGroupDirective = /*@__PURE__*/ (() => {
    class ButtonGroupDirective {
        constructor(elRef) {
            this.elRef = elRef;
            // Set the maximum value to 10 to display all buttons inline when there is enough space.
            this._maximumInlineActions = 10;
            this._buttonTitleDirectives = [];
            this.updateButtonTitles = () => {
                const allButtons = this.getVisibleButtons().concat(this.getInMenuButtons());
                if (!allButtons.length) {
                    return;
                }
                // if there is a rendered button for the directive - update its title.
                this._buttonTitleDirectives.forEach(titleDirective => {
                    allButtons.forEach((button) => {
                        if (button.getAttribute("name") === titleDirective.host.name) {
                            button.title = titleDirective.title;
                        }
                    });
                });
            };
        }
        set maximumInlineActions(value) {
            if (!!value) {
                this._maximumInlineActions = value;
            }
        }
        set buttons(value) {
            this._buttonTitleDirectives = value;
            this._buttonTitleDirectives.forEach(titleDirective => {
                // Update button title when its title in directive changes.
                titleDirective.titleChangeEvent.subscribe(() => {
                    setTimeout(this.updateButtonTitles);
                });
            });
            // when action buttons with directive are changed (added / removed) some of them may go to the menu with
            // additional actions. There is no other way found to handle toggle menu event, but click on the toggle button.
            this.subscribeToggleButtonClick();
        }
        set clrButtons(btns) {
            this._btns = btns;
            this.updateInMenuButtons();
        }
        updateInMenuButtons() {
            const groupWithMenu = this._btns.length > this._maximumInlineActions;
            this._btns.forEach((btn, index) => {
                if (groupWithMenu) {
                    // When the number of buttons exceeds the maximum and the button overflows, place the button in the menu.
                    btn.inMenu = index >= this._maximumInlineActions - 1;
                }
                else {
                    btn.inMenu = false;
                }
            });
        }
        subscribeToggleButtonClick() {
            // If there is menu with additional buttons, find the toggle button and update button names on click.
            setTimeout(() => {
                const toggleButton = this.getToggleButton();
                // if there is a toggle button set function to handle the click event only once.
                if (toggleButton && !toggleButton.onclick) {
                    toggleButton.onclick = this.updateButtonTitles;
                }
            });
        }
        // the buttons are visible buttons in button group, toggle menu button
        getVisibleButtons() {
            return Array.from(this.elRef.nativeElement.querySelectorAll(ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR));
        }
        // inMenu buttons are rendered outside of the elRef, get them directly from the document
        getInMenuButtons() {
            return Array.from(this.elRef.nativeElement.ownerDocument.querySelectorAll(ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR));
        }
        getToggleButton() {
            return this.elRef.nativeElement.querySelector(ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR);
        }
    }
    ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR = "button.btn.dropdown-toggle";
    ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR = "button";
    ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR = "div.clr-button-group-menu > button";
    return ButtonGroupDirective;
})();



/***/ }),

/***/ "akgu":
/*!***************************************************************************!*\
  !*** ./src/app/vsan/common/util/promise/race-condition-safe.decorator.ts ***!
  \***************************************************************************/
/*! exports provided: RaceConditionSafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceConditionSafe", function() { return RaceConditionSafe; });
/* harmony import */ var _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @service/global-refresh.service */ "2U9H");
/* harmony import */ var _util_id_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/id-generator */ "UTh9");
/* harmony import */ var _util_promise_promise_baton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/promise/promise-baton */ "5m9N");
/* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */



/**
 * This decorator solve the race condition problem.
 * - Problem - Call single async method multiple times and we can't be sure which result will come last.
 * - Solution - It will resolve/reject only the last promise. On global refresh we cancel the ongoing promise.
 */
function RaceConditionSafe() {
    return function (targetClass, functionName, descriptor) {
        // Prototype level
        const id = _util_id_generator__WEBPACK_IMPORTED_MODULE_1__["IdGenerator"].getUniqueId();
        const func = descriptor.value;
        const promiseBaton = new _util_promise_promise_baton__WEBPACK_IMPORTED_MODULE_2__["PromiseBaton"]();
        // Instance level
        descriptor.value = function (...args) {
            addEventListeners(id, promiseBaton);
            return promiseBaton.resolveOnly.call(promiseBaton, func.apply(this, args));
        };
    };
    function addEventListeners(id, promiseBaton) {
        _service_global_refresh_service__WEBPACK_IMPORTED_MODULE_0__["GlobalRefreshService"].Instance.registerRefreshHandler(id, () => promiseBaton.cancelLastOne(), null, false);
    }
}



/***/ }),

/***/ "pKFV":
/*!*************************************************************************!*\
  !*** ./src/app/vsan/health/view/health-overview.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_HealthOverviewComponent, View_HealthOverviewComponent_0, View_HealthOverviewComponent_Host_0, HealthOverviewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HealthOverviewComponent", function() { return RenderType_HealthOverviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HealthOverviewComponent_0", function() { return View_HealthOverviewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HealthOverviewComponent_Host_0", function() { return View_HealthOverviewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthOverviewComponentNgFactory", function() { return HealthOverviewComponentNgFactory; });
/* harmony import */ var _health_overview_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-overview.scss.shim.ngstyle */ "xhyz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _historical_historical_test_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historical/historical-test-details.component.ngfactory */ "K5cP");
/* harmony import */ var _historical_historical_test_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historical/historical-test-details.component */ "k7EJ");
/* harmony import */ var _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/component/cell/health-status-cell.component.ngfactory */ "xcCc");
/* harmony import */ var _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/cell/health-status-cell.component */ "2TcV");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/directive/signpost-title/signpost-title.directive */ "0mRq");
/* harmony import */ var _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component/illustrated-message/illustrated-message.component.ngfactory */ "hjgy");
/* harmony import */ var _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component/illustrated-message/illustrated-message.component */ "GNkU");
/* harmony import */ var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/directive/icon-title/icon-title.directive */ "wLY2");
/* harmony import */ var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/pipe/LocalizationPipe */ "jOVY");
/* harmony import */ var _health_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./health-overview.component */ "LlSX");
/* harmony import */ var _generated_vsan_historical_health_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../generated/vsan-historical-health-service */ "8sKW");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */
















var styles_HealthOverviewComponent = [_health_overview_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HealthOverviewComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HealthOverviewComponent, data: {} });

function View_HealthOverviewComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-historical-test-details", [], null, [[null, "onInstanceSelect"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onInstanceSelect" === en)) {
                var pd_0 = (_co.instanceSelected($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _historical_historical_test_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HistoricalTestDetailsComponent_0"], _historical_historical_test_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HistoricalTestDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _historical_historical_test_details_component__WEBPACK_IMPORTED_MODULE_3__["HistoricalTestDetailsComponent"], [], { isOverviewCorrelationsDisplayed: [0, "isOverviewCorrelationsDisplayed"], instances: [1, "instances"] }, { onInstanceSelect: "onInstanceSelect" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.historicalInstances; _ck(_v, 1, 0, currVal_0, currVal_1); }, null);
}
function View_HealthOverviewComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__["HealthStatusCell"], [], { iconClass: [0, "iconClass"], shape: [1, "shape"], label: [2, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Icon.CLR_SUCCESS_ICON_CLASS; var currVal_1 = _co.Icon.CLR_SUCCESS_STANDARD_ICON_SHAPE; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 2, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.healthy.overall.label", _co.getOverallCount(_co.overviewData.healthyTestsIds))); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_HealthOverviewComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__["HealthStatusCell"], [], { iconClass: [0, "iconClass"], shape: [1, "shape"], label: [2, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Icon.CLR_ERROR_ICON_CLASS; var currVal_1 = _co.Icon.CLR_ERROR_STANDARD_ICON_SHAPE; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 2, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.error.overall.label", _co.getOverallCount(_co.overviewData.errorTestsIds))); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_HealthOverviewComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__["HealthStatusCell"], [], { iconClass: [0, "iconClass"], shape: [1, "shape"], label: [2, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Icon.CLR_WARN_ICON_CLASS; var currVal_1 = _co.Icon.CLR_WARN_STANDARD_ICON_SHAPE; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 2, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.warning.overall.label", _co.getOverallCount(_co.overviewData.warningTestsIds))); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_HealthOverviewComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__["HealthStatusCell"], [], { iconClass: [0, "iconClass"], shape: [1, "shape"], label: [2, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Icon.CLR_INFO_ICON_CLASS; var currVal_1 = _co.Icon.CLR_INFO_STANDARD_ICON_SHAPE; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 2, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.info.overall.label", _co.getOverallCount(_co.overviewData.infoTestsIds))); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_HealthOverviewComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__["HealthStatusCell"], [], { shape: [0, "shape"], label: [1, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Icon.SILENT_CHECK; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.silenced.overall.label", ((_co.selectedSilenceChecks == null) ? null : _co.selectedSilenceChecks.length))); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_HealthOverviewComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "bottom-middle"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], { position: [0, "position"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) { var currVal_3 = "bottom-middle"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = true; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.health.overview.skipped.overall.description")); _ck(_v, 3, 0, currVal_4); }); }
function View_HealthOverviewComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "tooltip-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "vsan-health-status-cell", [], null, null, null, _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HealthStatusCell_0"], _common_component_cell_health_status_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HealthStatusCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _common_component_cell_health_status_cell_component__WEBPACK_IMPORTED_MODULE_5__["HealthStatusCell"], [], { shape: [0, "shape"], label: [1, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "clr-signpost", [], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { customTrigger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_9__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { signpostTitle: [0, "signpostTitle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HealthOverviewComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { open: [0, "open"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Icon.SKIPPED_CHECK; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 1, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.skipped.overall.label", _co.getOverallCount(_co.overviewData.skippedTestsIds))); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.skipped.overall.signpost.label")); _ck(_v, 13, 0, currVal_3); var currVal_4 = null; _ck(_v, 18, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = true; _ck(_v, 7, 0, currVal_2); }); }
function View_HealthOverviewComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "overall-statuses card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.getOverallCount(((_co.overviewData == null) ? null : _co.overviewData.healthyTestsIds)) > 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.getOverallCount(((_co.overviewData == null) ? null : _co.overviewData.errorTestsIds)) > 0); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_co.getOverallCount(((_co.overviewData == null) ? null : _co.overviewData.warningTestsIds)) > 0); _ck(_v, 9, 0, currVal_2); var currVal_3 = (_co.getOverallCount(((_co.overviewData == null) ? null : _co.overviewData.infoTestsIds)) > 0); _ck(_v, 12, 0, currVal_3); var currVal_4 = (((_co.selectedSilenceChecks == null) ? null : _co.selectedSilenceChecks.length) > 0); _ck(_v, 15, 0, currVal_4); var currVal_5 = (_co.getOverallCount(((_co.overviewData == null) ? null : _co.overviewData.skippedTestsIds)) > 0); _ck(_v, 18, 0, currVal_5); }, null); }
function View_HealthOverviewComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isHistoricalHealth && ((_co.historicalInstances == null) ? null : _co.historicalInstances.length)); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.showOverallCounts; _ck(_v, 6, 0, currVal_1); }, null); }
function View_HealthOverviewComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "spinner central-spinner"]], null, null, null, null, null))], null, null); }
function View_HealthOverviewComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "loading-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_HealthOverviewComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-illustrated-message", [], null, null, null, _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_IllustratedMessageComponent_0"], _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_IllustratedMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_11__["IllustratedMessageComponent"], [], { type: [0, "type"], message: [1, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.IllustratedMessageType.MISSING_SELECTION; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.health.historical.details.select.instance")); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_HealthOverviewComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-illustrated-message", [], null, null, null, _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_IllustratedMessageComponent_0"], _common_component_illustrated_message_illustrated_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_IllustratedMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _common_component_illustrated_message_illustrated_message_component__WEBPACK_IMPORTED_MODULE_11__["IllustratedMessageComponent"], [], { type: [0, "type"], message: [1, "message"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.IllustratedMessageType.MISSING_DATA; var currVal_1 = _co.noIssuesMessage; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_HealthOverviewComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_HealthOverviewComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_HealthOverviewComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "clr-tree-node", [], [[1, "role", 0], [2, "clr-tree-node", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrTreeNode_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrTreeNode"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, [[2, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTreeNode"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTreeNode"]], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { expanded: [0, "expanded"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { treeNodeLinkList: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_HealthOverviewComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, { test: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "]))], function (_ck, _v) { var currVal_2 = true; _ck(_v, 5, 0, currVal_2); var currVal_3 = _ck(_v, 10, 0, _v.context.$implicit); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 22); _ck(_v, 9, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = "treeitem"; var currVal_1 = true; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_HealthOverviewComponent_19(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "clr-tree", [], [[1, "tabindex", 0], [1, "role", 0], [1, "aria-multiselectable", 0]], [[null, "focusin"]], function (_v, en, $event) {
            var ad = true;
            if (("focusin" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onFocusIn($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrTree_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrTree"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵds"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵds"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrTree"], [_clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { rootNodes: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, 0, 1, null, View_HealthOverviewComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrRecursiveForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { nodes: [0, "nodes"], getChildren: [1, "getChildren"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _v.parent.context.$implicit.relatedHealthTests; var currVal_5 = _co.getChildren; _ck(_v, 13, 0, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.health.overview.possible.impact.label")); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).tabindex; var currVal_2 = "tree"; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).isMultiSelectable; _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3); });
}
function View_HealthOverviewComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 18, "div", [["class", "core-issue card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "core-issue-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_HealthOverviewComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, { test: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "div", [["class", "core-issue-children"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_1 = _ck(_v, 12, 0, _v.context.$implicit); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 22); _ck(_v, 11, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.relatedHealthTests.length; _ck(_v, 18, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.health.overview.core.issue.label")); _ck(_v, 7, 0, currVal_0); }); }
function View_HealthOverviewComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.overviewData == null) ? null : _co.overviewData.coreIssues); _ck(_v, 3, 0, currVal_0); }, null); }
function View_HealthOverviewComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_HealthOverviewComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_HealthOverviewComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { test: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 22); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_HealthOverviewComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "other-issues card-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "other-issues-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.overviewData.otherIssues; _ck(_v, 10, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.otherIssuesTitle; _ck(_v, 5, 0, currVal_0); }); }
function View_HealthOverviewComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!((_co.overviewData == null) ? null : ((_co.overviewData.coreIssues == null) ? null : _co.overviewData.coreIssues.length)) && !((_co.overviewData == null) ? null : ((_co.overviewData.otherIssues == null) ? null : _co.overviewData.otherIssues.length))); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.overviewData == null) ? null : ((_co.overviewData.coreIssues == null) ? null : _co.overviewData.coreIssues.length)); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_co.overviewData == null) ? null : ((_co.overviewData.otherIssues == null) ? null : _co.overviewData.otherIssues.length)); _ck(_v, 9, 0, currVal_2); }, null); }
function View_HealthOverviewComponent_25(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "icon-name-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "clr-icon", [["class", "is-solid"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_12__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "pointer"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.onTestSelected(_v.context.test.testId) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "is-solid"; var currVal_2 = _co.getStatusIconClass(_v.context.test); _ck(_v, 4, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getStatusIconShape(_v.context.test); _ck(_v, 3, 0, currVal_0); var currVal_3 = _v.context.test.testId; _ck(_v, 9, 0, currVal_3); var currVal_4 = _v.context.test.testName; _ck(_v, 10, 0, currVal_4); });
}
function View_HealthOverviewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_13__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HealthOverviewComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["testRow", 2]], null, 0, null, View_HealthOverviewComponent_25)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.isHistoricalInstancesLoading; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.isHistoricalInstancesLoading; _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.isHistoricalCorrelationsLoading; _ck(_v, 14, 0, currVal_3); var currVal_4 = (_co.isHistoricalHealth && !_co.isTimestampSelected); _ck(_v, 17, 0, currVal_4); var currVal_5 = _co.showIssues; _ck(_v, 20, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.health.overview.title")); _ck(_v, 3, 0, currVal_0); }); }
function View_HealthOverviewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-health-overview", [], null, null, null, View_HealthOverviewComponent_0, RenderType_HealthOverviewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _health_overview_component__WEBPACK_IMPORTED_MODULE_14__["HealthOverviewComponent"], [_generated_vsan_historical_health_service__WEBPACK_IMPORTED_MODULE_15__["VsanHistoricalHealthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HealthOverviewComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-health-overview", _health_overview_component__WEBPACK_IMPORTED_MODULE_14__["HealthOverviewComponent"], View_HealthOverviewComponent_Host_0, { overviewData: "overviewData", selectedSilenceChecks: "selectedSilenceChecks", isHistoricalHealth: "isHistoricalHealth", historicalDateRange: "historicalDateRange" }, { onTestSelection: "onTestSelection" }, []);




/***/ }),

/***/ "xhyz":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/health/view/health-overview.scss.shim.ngstyle.js ***!
  \***********************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0;\n}\n.overall-statuses[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 1.2rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.9rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.9rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.overall-statuses[_ngcontent-%COMP%]   .tooltip-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0;\n}\n.core-issue[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%] {\n  padding-top: 1.2rem;\n  padding-bottom: 1.2rem;\n}\n.core-issue[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.core-issue[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .core-issue[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.core-issue[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, .other-issues[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.core-issue[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.core-issue[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .core-issue[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .other-issues[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.core-issue[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, .other-issues[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9oZWFsdGgvdmlldy9oZWFsdGgtb3ZlcnZpZXcuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtBQWFIO0FFNkJHO0VBQ0csZ0NBQUE7QUYzQk47QUU2Qkc7O0VBR0csZ0NBQUE7QUY1Qk47QUU4Qkc7RUFDRyw4QkFBQTtBRjVCTjtBQXBCQTtFQUNHLGFBQUE7RUFDQSxXQUFBO0FBdUJIO0FFNEJHO0VBQ0ssK0JBQUE7QUYxQlI7QUU0Qkc7RUFJRywrQkFBQTtBRjdCTjtBRThCTTtFQUNHLCtCQUFBO0FGNUJUO0FFK0JHO0VBRUcsK0JBQUE7QUY5Qk47QUVnQ007RUFDRywrQkFBQTtBRjlCVDtBRWlDRztFQUNHLDZCQUFBO0FGL0JOO0FBdkNHO0VBQ0csYUFBQTtFQUNBLFdBQUE7QUF5Q047QUFyQ0E7RUFDRyxtQkdHc0I7RUhGdEIsc0JHRXNCO0FIc0N6QjtBRWJHO0VBQ0csZ0NBQUE7QUZlTjtBRWJHOzs7RUFHRyxnQ0FBQTtBRmVOO0FFYkc7RUFDRyw4QkFBQTtBRmVOO0FFeEJHO0VBQ0csZ0NBQUE7QUYwQk47QUV4Qkc7OztFQUdHLGdDQUFBO0FGMEJOO0FFeEJHO0VBQ0csOEJBQUE7QUYwQk4iLCJmaWxlIjoic3JjL2FwcC92c2FuL2hlYWx0aC92aWV3L2hlYWx0aC1vdmVydmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDA7XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbiAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vdmVyYWxsLXN0YXR1c2VzIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMDtcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZygkdnNhbi1jb250YWluZXItc3BhY2luZyk7XG4gICAudG9vbHRpcC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDEgMCAwO1xuICAgfVxufVxuXG4uY29yZS1pc3N1ZSwgLm90aGVyLWlzc3VlcyB7XG4gICBwYWRkaW5nLXRvcDogJHZzYW4tY29udGFpbmVyLXNwYWNpbmc7XG4gICBwYWRkaW5nLWJvdHRvbTogJHZzYW4tY29udGFpbmVyLXNwYWNpbmc7XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbiAgID4gZGl2IHtcbiAgICAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCR2c2FuLWVsZW1lbnQtc3BhY2luZyAvIDIpO1xuICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];




/***/ })

}]);
//# sourceMappingURL=53-es2015.js.map