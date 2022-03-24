(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "MGNl":
/*!******************************************************!*\
  !*** ./src/app/vsan/common/util/vsan-health-util.ts ***!
  \******************************************************/
/*! exports provided: VsanHealthUtil, VsanHealthTestId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanHealthUtil", function() { return VsanHealthUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanHealthTestId", function() { return VsanHealthTestId; });
/* harmony import */ var _generated_column_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/column-type */ "oaJ0");
/* harmony import */ var _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/object-health-compliance-state */ "609m");
/* harmony import */ var _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/object-health-incompliance-reason */ "7d1P");
/* harmony import */ var _generated_object_health_policy_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/object-health-policy-state */ "cUIN");
/* harmony import */ var _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/object-health-rebuild-state */ "Ukt1");
/* harmony import */ var _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @generated/psp-object-health-state */ "WvkL");
/* harmony import */ var _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @generated/vsan-health-status */ "bur7");
/* harmony import */ var _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @generated/vsan-object-health-state */ "6VxW");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */












/**
 * vSAN health utilities.
 */
let VsanHealthUtil = /*@__PURE__*/ (() => {
    class VsanHealthUtil {
        static getVsanHealthStatusIconClass(status) {
            switch (status) {
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].red:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_ERROR_ICON_CLASS;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].green:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_SUCCESS_ICON_CLASS;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].info:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_INFO_ICON_CLASS;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].yellow:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_WARN_ICON_CLASS;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].skipped:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].SILENT_CHECK;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].unknown:
                default:
                    return "";
            }
        }
        static getVsanHealthStatusIconShape(status) {
            switch (status) {
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].red:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].green:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].info:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_INFO_STANDARD_ICON_SHAPE;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].yellow:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].skipped:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].SILENT_CHECK;
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].unknown:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_HELP;
                default:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_CIRCLE_ICON_SHAPE;
            }
        }
        static getVsanHealthStatusBackgroundClass(status) {
            switch (status) {
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].red:
                    return "alert-danger";
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].green:
                    return "alert-success";
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].yellow:
                    return "alert-warning";
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].info:
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].skipped:
                    return "alert-info";
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].unknown:
                default:
                    return "";
            }
        }
        /** Returns verbose health status */
        static getVsanHealthStatusText(status) {
            switch (status) {
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].red:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.historical.details.status.error");
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].green:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.historical.details.status.success");
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].info:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.historical.details.status.info");
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].yellow:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.historical.details.status.warning");
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].skipped:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.historical.details.status.skipped");
                case _generated_vsan_health_status__WEBPACK_IMPORTED_MODULE_6__["VsanHealthStatus"].unknown:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.health.historical.details.status.unknown");
                default:
                    return "";
            }
        }
        static getVsanObjectHealthStatusIconClass(status) {
            switch (status) {
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].HEALTHY:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REMOTE_ACCESSIBLE:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_SUCCESS_ICON_CLASS;
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].DATA_MOVE:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_RECONFIG:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_ACTIVE_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING_FAILED:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_PAUSED_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_PAUSED_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].UNKNOWN:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_WARN_ICON_CLASS;
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].INACCESSIBLE:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD_DELAY_TIMER:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING_FAILED:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_ERROR_ICON_CLASS;
                default:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_WARN_ICON_CLASS;
            }
        }
        static getPspObjectHealthStatusText(status) {
            switch (status) {
                case _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].HEALTHY:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.pspObjectHealth.healthy");
                case _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].REDUCED_AVAILABILITY:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.pspObjectHealth.reducedavailability");
                case _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].REBUILD:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.pspObjectHealth.rebuild");
                case _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].INACCESSIBLE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.pspObjectHealth.inaccessible");
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.na.label");
            }
        }
        static getVsanObjectHealthStatusText(status) {
            switch (status) {
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].HEALTHY:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.healthy");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].DATA_MOVE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.datamove");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_RECONFIG:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.nonavailabilityrelatedreconfig");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.nonavailabilityrelatedincompliance");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_ACTIVE_REBUILD:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.reducedavailabilitywithactiverebuild");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].INACCESSIBLE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.inaccessible");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REMOTE_ACCESSIBLE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.remoteAccessible");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.reducedavailabilitywithnorebuild");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD_DELAY_TIMER:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.reducedavailabilitywithnorebuilddelaytimer");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.reducedavailabilitywithpolicypending");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING_FAILED:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.reducedavailabilitywithpolicypendingfailed");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.nonavailabilityrelatedincompliancewithpolicypending");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING_FAILED:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.nonavailabilityrelatedincompliancewithpolicypendingfailed");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_PAUSED_REBUILD:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.nonavailabilityrelatedincompliancewithpausedrebuild");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_PAUSED_REBUILD:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.reducedavailabilitywithpausedrebuild");
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].UNKNOWN:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.unknown");
                case _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].COMPLIANT:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.compliancestate.compliant");
                case _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].INACCESSIBLE_V2:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.compliancestate.inaccessible");
                case _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].REMOTE_ACCESSIBLE_V2:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.remoteAccessible");
                case _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].REDUCED_AVAILABILITY_WITH_DURABILITY:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.incompliancereason.reducedwithdurability");
                case _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].REDUCED_AVAILABILITY_WITHOUT_DURABILITY:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.incompliancereason.reducedwithoutdurability");
                case _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].OTHER:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.incompliancereason.other");
                case _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].ACTIVE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.rebuildstate.active");
                case _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].NONE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.rebuildstate.none");
                case _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].PAUSE:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.rebuildstate.pause");
                case _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].SCHEDULED:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.rebuildstate.scheduled");
                case _generated_object_health_policy_state__WEBPACK_IMPORTED_MODULE_3__["ObjectHealthPolicyState"].FAILED:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.policystate.failed");
                case _generated_object_health_policy_state__WEBPACK_IMPORTED_MODULE_3__["ObjectHealthPolicyState"].PENDING:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.objectHealth.policystate.pending");
                default:
                    return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.na.label");
            }
        }
        static getVsanObjectHealthStatusIconShape(status) {
            switch (status) {
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].HEALTHY:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REMOTE_ACCESSIBLE:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].DATA_MOVE:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_RECONFIG:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_ACTIVE_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING_FAILED:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_PAUSED_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_PAUSED_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].UNKNOWN:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].INACCESSIBLE:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD_DELAY_TIMER:
                case _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING_FAILED:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;
                default:
                    return _util_icon__WEBPACK_IMPORTED_MODULE_9__["Icon"].CLR_CIRCLE_ICON_SHAPE;
            }
        }
        static isDangerHealthState(state) {
            return VsanHealthUtil.HEALTH_STATES_DANGER_ORDER.indexOf(state) > -1;
        }
        static isWarningHealthState(state) {
            return VsanHealthUtil.HEALTH_STATES_WARNING_ORDER.indexOf(state) > -1;
        }
        static isSuccessHealthState(state) {
            return VsanHealthUtil.HEALTH_STATES_SUCCESS_ORDER.indexOf(state) > -1;
        }
        static getHealthStateLabelClass(status) {
            if (VsanHealthUtil.isDangerHealthState(status)) {
                return VsanHealthUtil.CLR_DANGER_LABEL_CLASS;
            }
            if (VsanHealthUtil.isWarningHealthState(status)) {
                return VsanHealthUtil.CLR_WARNING_LABEL_CLASS;
            }
            if (VsanHealthUtil.isSuccessHealthState(status)) {
                return VsanHealthUtil.CLR_SUCCESS_LABEL_CLASS;
            }
            return VsanHealthUtil.CLR_DANGER_LABEL_CLASS;
        }
        static getPspHealthStateLabelClass(status) {
            if (status === _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].INACCESSIBLE || status === _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].UNKNOWN) {
                return VsanHealthUtil.CLR_DANGER_LABEL_CLASS;
            }
            if (status === _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].REBUILD || status === _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].REDUCED_AVAILABILITY) {
                return VsanHealthUtil.CLR_WARNING_LABEL_CLASS;
            }
            if (status === _generated_psp_object_health_state__WEBPACK_IMPORTED_MODULE_5__["PspObjectHealthState"].HEALTHY) {
                return VsanHealthUtil.CLR_SUCCESS_LABEL_CLASS;
            }
            return VsanHealthUtil.CLR_DANGER_LABEL_CLASS;
        }
        static isTextCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].string
                || cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].vsanObjectUuid);
        }
        static isNumericCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].Float
                || cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].Long);
        }
        static isStatusCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].vsanObjectHealth);
        }
        static isPspHealthStateCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].pspHealth);
        }
        static isHealthV2StateCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].vsanObjectHealthv2);
        }
        static isMorCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].mor ||
                cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].HostReference ||
                cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].dynamic ||
                cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listMor);
        }
        static isPrimitiveListCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listFloat ||
                cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listLong ||
                cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listString);
        }
        static isLinkCell(cell) {
            return cell && cell.cellValue && cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].strWithLink;
        }
        static isDateCell(cell) {
            return cell && cell.cellValue && cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].date;
        }
        static isHealthStatusCell(cell) {
            return cell && cell.cellValue && (cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].health);
        }
        static isHealthInfoCell(cell) {
            return cell && cell.cellValue && cell.cellType === _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].healthWithString;
        }
        static formatedNumber(value, type) {
            if (_generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].Float === type) {
                const precisionDigits = value.split(".")[1];
                // Format the number with minimum 2 digits precision
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].localizeNumber(value, (precisionDigits && precisionDigits.length > 2)
                    ? precisionDigits.length
                    : 2);
            }
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].localizeNumber(value);
        }
        static getStatusLabel(cell) {
            return VsanHealthUtil.getVsanObjectHealthStatusText(cell.cellValue);
        }
        static getStatusShape(cell) {
            return VsanHealthUtil.getVsanObjectHealthStatusIconShape(cell.cellValue);
        }
        static getStatusClass(cell) {
            return VsanHealthUtil.getVsanObjectHealthStatusIconClass(cell.cellValue);
        }
        static getHealthStatusClass(cellValue) {
            return VsanHealthUtil.getVsanHealthStatusIconClass(cellValue);
        }
        static getHealthStatusShape(cellValue) {
            return VsanHealthUtil.getVsanHealthStatusIconShape(cellValue);
        }
        static getHealthInfoLabel(cellValue) {
            return cellValue.label;
        }
        static getListCellData(cell) {
            let values = cell.cellValue;
            switch (cell.cellType) {
                case _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listFloat:
                case _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listLong:
                    values = values.map(value => VsanHealthUtil.formatedNumber(value, cell.cellType));
            }
            return values;
        }
        static getMorCellData(cell) {
            const morCellArr = new Map();
            switch (cell.cellType) {
                case _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].listMor:
                    for (const value of cell.cellValue) {
                        const moUid = _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].uid(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].create(value.object.type, value.object.value, value.object.serverGuid));
                        morCellArr.set(moUid, value.objectName);
                    }
                    break;
                case _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].mor:
                case _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].dynamic:
                case _generated_column_type__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].HostReference:
                    const uid = _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].uid(_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].create(cell.cellValue.object.type, cell.cellValue.object.value, cell.cellValue.object.serverGuid));
                    morCellArr.set(uid, cell.cellValue.objectName);
                    break;
            }
            return morCellArr;
        }
        static formatInstanceTimestamp(timestamp) {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].formatDate(timestamp, VsanHealthUtil.INSTANCE_TIMESTAMP_OPTIONS);
        }
        static formatInstanceTitleTimestamp(timestamp) {
            return _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].formatDate(timestamp, VsanHealthUtil.INSTANCE_TITLE_TIMESTAMP_OPTIONS);
        }
    }
    VsanHealthUtil.CEIP_TEST_ID = "com.vmware.vsan.health.test.vsancloudhealthceipexception";
    VsanHealthUtil.SUPPORT_INSIGHT_TEST_ID = "com.vmware.vsan.health.test.vsanenablesupportinsight";
    VsanHealthUtil.HEALTH_STATES_DANGER_ORDER = [
        _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].INACCESSIBLE_V2,
        _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].REDUCED_AVAILABILITY_WITHOUT_DURABILITY, _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].NONE,
        _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].PAUSE, _generated_object_health_policy_state__WEBPACK_IMPORTED_MODULE_3__["ObjectHealthPolicyState"].FAILED,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].INACCESSIBLE, _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_NO_REBUILD_DELAY_TIMER,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING_FAILED,
    ];
    VsanHealthUtil.HEALTH_STATES_WARNING_ORDER = [
        _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].REDUCED_AVAILABILITY_WITH_DURABILITY, _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].OTHER,
        _generated_object_health_policy_state__WEBPACK_IMPORTED_MODULE_3__["ObjectHealthPolicyState"].PENDING, _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].DATA_MOVE,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_RECONFIG,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_ACTIVE_REBUILD,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_POLICY_PENDING,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_POLICY_PENDING_FAILED,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REDUCED_AVAILABILITY_WITH_PAUSED_REBUILD,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].NON_AVAILABILITY_RELATED_INCOMPLIANCE_WITH_PAUSED_REBUILD,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].UNKNOWN, _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].COMPLIANCE_UNKNOWN,
        _generated_object_health_incompliance_reason__WEBPACK_IMPORTED_MODULE_2__["ObjectHealthIncomplianceReason"].INCOMPLIANCE_UNKNOWN, _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].REBUILD_UNKNOWN,
        _generated_object_health_policy_state__WEBPACK_IMPORTED_MODULE_3__["ObjectHealthPolicyState"].POLICY_UNKNOWN,
    ];
    VsanHealthUtil.HEALTH_STATES_SUCCESS_ORDER = [
        _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].REMOTE_ACCESSIBLE_V2,
        _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_1__["ObjectHealthComplianceState"].COMPLIANT, _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].SCHEDULED, _generated_object_health_rebuild_state__WEBPACK_IMPORTED_MODULE_4__["ObjectHealthRebuildState"].ACTIVE,
        _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].HEALTHY, _generated_vsan_object_health_state__WEBPACK_IMPORTED_MODULE_7__["VsanObjectHealthState"].REMOTE_ACCESSIBLE,
    ];
    VsanHealthUtil.HEALTH_STATES_ORDER = VsanHealthUtil.HEALTH_STATES_DANGER_ORDER
        .concat(VsanHealthUtil.HEALTH_STATES_WARNING_ORDER)
        .concat(VsanHealthUtil.HEALTH_STATES_SUCCESS_ORDER);
    // health state label classes
    VsanHealthUtil.CLR_SUCCESS_LABEL_CLASS = "label-success";
    VsanHealthUtil.CLR_WARNING_LABEL_CLASS = "label-warning";
    VsanHealthUtil.CLR_DANGER_LABEL_CLASS = "label-danger";
    VsanHealthUtil.INSTANCE_MONTH_FORMAT = "short";
    VsanHealthUtil.INSTANCE_DAY_FORMAT = "numeric";
    VsanHealthUtil.INSTANCE_TIMESTAMP_OPTIONS = {
        month: VsanHealthUtil.INSTANCE_MONTH_FORMAT,
        day: VsanHealthUtil.INSTANCE_DAY_FORMAT,
        hour: _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].DEFAULT_HOUR_FORMAT,
        minute: _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].DEFAULT_MINUTE_FORMAT,
        second: _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].DEFAULT_SECOND_FORMAT,
    };
    VsanHealthUtil.INSTANCE_TITLE_TIMESTAMP_OPTIONS = {
        month: VsanHealthUtil.INSTANCE_MONTH_FORMAT,
        day: VsanHealthUtil.INSTANCE_DAY_FORMAT,
        hour: _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].DEFAULT_HOUR_FORMAT,
        minute: _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_10__["VsanDateTimeUtils"].DEFAULT_MINUTE_FORMAT,
    };
    return VsanHealthUtil;
})();
/**
 * Enum that stores health subtest ids
 */
var VsanHealthTestId = /*@__PURE__*/ (function (VsanHealthTestId) {
    VsanHealthTestId["NETWORK_LATENCY_CHECK"] = "com.vmware.vsan.health.test.hostlatencycheck";
    VsanHealthTestId["PHYSICAL_DISK_OPERATION_HEALTH"] = "com.vmware.vsan.health.test.physdiskoverall";
    return VsanHealthTestId;
})({});



/***/ })

}]);
//# sourceMappingURL=11-es2015.js.map