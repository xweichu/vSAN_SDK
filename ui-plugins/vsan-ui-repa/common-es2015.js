(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "36iK":
/*!**************************************************************!*\
  !*** ./src/app/vsan/common/util/vsan-data-migration-util.ts ***!
  \**************************************************************/
/*! exports provided: VsanDataMigrationUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanDataMigrationUtil", function() { return VsanDataMigrationUtil; });
/* harmony import */ var _vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vsan-util */ "UODZ");
/* harmony import */ var _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/decommission-mode */ "yaIQ");
/* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */


/**
 * vSAN data migration utilities.
 */
let VsanDataMigrationUtil = /*@__PURE__*/ (() => {
    class VsanDataMigrationUtil {
    }
    VsanDataMigrationUtil.getLocalizedDecommissionMode = (decommissionMode) => {
        if (!decommissionMode) {
            return "";
        }
        switch (decommissionMode) {
            case _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_1__["DecommissionMode"].noAction:
                return _vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.noDataMigration");
            case _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_1__["DecommissionMode"].ensureObjectAccessibility:
                return _vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.ensureAccessibility");
            case _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_1__["DecommissionMode"].evacuateAllData:
                return _vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.fullDataMigration");
        }
    };
    return VsanDataMigrationUtil;
})();



/***/ }),

/***/ "ROmN":
/*!*******************************************************************************!*\
  !*** ./src/app/vsan/vm/io-diagnostics/graph-view/model/graph-node-details.ts ***!
  \*******************************************************************************/
/*! exports provided: GraphNodeDetails, GraphNodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphNodeDetails", function() { return GraphNodeDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphNodeType", function() { return GraphNodeType; });
/* harmony import */ var _generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/graph-classes */ "QieO");
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * Contains all needed data for fetching the object details data.
 */
class GraphNodeDetails {
    constructor(id, entityName, hostName, hostUuid, type) {
        this.id = id;
        this.entityName = entityName;
        this.hostName = hostName;
        this.hostUuid = hostUuid;
        this.type = type;
    }
    static fromGraphNode(node) {
        var _a, _b, _c, _d;
        const nodeData = node.data();
        const nodeClasses = node.classes();
        const nodeType = GraphNodeDetails.getGraphNodeType(nodeClasses);
        const entityName = nodeType === GraphNodeType.DISK
            ? (_a = nodeData.detailedInfo) === null || _a === void 0 ? void 0 : _a.physicalDiskUuid : (_b = nodeData.detailedInfo) === null || _b === void 0 ? void 0 : _b.diskGroupUuid;
        return new GraphNodeDetails(nodeData.id, entityName, (_c = nodeData.detailedInfo) === null || _c === void 0 ? void 0 : _c.hostName, (_d = nodeData.detailedInfo) === null || _d === void 0 ? void 0 : _d.hostUuid, nodeType);
    }
    static getGraphNodeType(nodeClasses) {
        if (nodeClasses.includes(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__["GraphClasses"].NIC_NODE())) {
            return GraphNodeType.NIC;
        }
        else if (nodeClasses.includes(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__["GraphClasses"].DISK_GROUP_NODE())) {
            return GraphNodeType.DISK_GROUP;
        }
        else if (nodeClasses.includes(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__["GraphClasses"].DISK_NODE())) {
            return GraphNodeType.DISK;
        }
    }
}
var GraphNodeType = /*@__PURE__*/ (function (GraphNodeType) {
    GraphNodeType[GraphNodeType["DISK_GROUP"] = 0] = "DISK_GROUP";
    GraphNodeType[GraphNodeType["DISK"] = 1] = "DISK";
    GraphNodeType[GraphNodeType["NIC"] = 2] = "NIC";
    return GraphNodeType;
})({});



/***/ }),

/***/ "TkoF":
/*!**********************************************!*\
  !*** ./src/app/vsan/common/pipe/TimePipe.ts ***!
  \**********************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");

/**
 * Returns the time as a single integer in the closest largest unit.
 *
 * @param seconds
 *    time in seconds.
 * @return
 *    String like "Unknown" if t &lt; 0.
 *    time in seconds if t &lt; 119 seconds.
 *    time in minutes if 119 seconds &lt; t &lt; 119 minutes.
 *    time in hours if 119 minutes &lt; t &lt; 24 hours.
 *    time in days if 24 hours &lt; t
 */
class TimePipe {
    transform(time, ...args) {
        if (typeof time === "string") {
            return time;
        }
        if (time < 0) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.unknown");
        }
        let s = time % 60;
        time = (time - s) / 60;
        let m = time % 60;
        time = (time - m) / 60;
        let h = time % 24;
        time = (time - h) / 24;
        let d = time;
        // return seconds up to 119
        if (m < 2 && h < 1 && d < 1) {
            s = s + (m * 60);
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(s === 1 ? "vsan.common.second" : "vsan.common.seconds", s);
        }
        // return minutes up to 119
        if (h < 2 && d < 1) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.minutes", m + (h * 60));
        }
        // return hours up to 24
        if (d < 1) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.hours", h + (d * 24));
        }
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(d === 1 ? "vsan.common.day" : "vsan.common.days", d);
    }
}



/***/ }),

/***/ "Tsf2":
/*!********************************************************!*\
  !*** ./src/app/generated/ip-addresses-request-spec.ts ***!
  \********************************************************/
/*! exports provided: IpAddressesRequestSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpAddressesRequestSpec", function() { return IpAddressesRequestSpec; });
var IpAddressesRequestSpec;
(function (IpAddressesRequestSpec) {
    class Factory {
    } //class Factory
    Factory.create = (ipAddress, subnetMask, hostsNumber) => {
        return { ipAddress: ipAddress, subnetMask: subnetMask, hostsNumber: hostsNumber, };
    };
    IpAddressesRequestSpec.Factory = Factory;
})(IpAddressesRequestSpec || (IpAddressesRequestSpec = {})); //module IpAddressesRequestSpec



/***/ }),

/***/ "VXdP":
/*!**************************************************************************************!*\
  !*** ./src/app/vsan/common/directive/clr-accordion/clr-accordion-panel.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: ClrAccordionPanelDirective, AccordionPanelToggleExpandEventArg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrAccordionPanelDirective", function() { return ClrAccordionPanelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelToggleExpandEventArg", function() { return AccordionPanelToggleExpandEventArg; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * Generally, panelOpenChange event is triggered for all the accordion's panels, no matter which panel is
 * collapsed/expanded. This directive provides {@link accordionPanelToggleExpand} event that is triggered
 * only by the target panel. Directive requires to set an id of the panel via vsan-panel-id property.
 * How it works:
 *    - Directive attaches to the panelOpenChange event where:
 *    - The panel DOM element's id is obtained by traversing parent elements of the clicked target.
 *    - If the panel's model id equals the id of the DOM element then the custom event is emitted.
 */
let ClrAccordionPanelDirective = /*@__PURE__*/ (() => {
    class ClrAccordionPanelDirective {
        constructor(accordionPanel, el) {
            this.accordionPanel = accordionPanel;
            this.el = el;
            this.accordionPanelToggleExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.accordionPanel.panelOpenChange.subscribe(isExpanded => {
                this.onExpandCollapse(isExpanded, this.model);
            });
        }
        ngAfterContentInit() {
            this.el.nativeElement.id = this.panelId;
        }
        onExpandCollapse(isExpanded, model) {
            const panelIdDOM = this.findAccordionPanelId(event.currentTarget, 5);
            if (this.panelId === panelIdDOM) {
                this.accordionPanelToggleExpand.emit(new AccordionPanelToggleExpandEventArg(isExpanded, model));
            }
        }
        findAccordionPanelId(targetEl, parentCount) {
            if (targetEl.nodeName === ClrAccordionPanelDirective.ACCORDION_PANEL_TAG) {
                return targetEl.getAttribute("id");
            }
            if (targetEl && targetEl.parentElement && parentCount) {
                return this.findAccordionPanelId(targetEl.parentElement, --parentCount);
            }
        }
    }
    ClrAccordionPanelDirective.ACCORDION_PANEL_TAG = "CLR-ACCORDION-PANEL";
    return ClrAccordionPanelDirective;
})();
class AccordionPanelToggleExpandEventArg {
    constructor(isExpanded, model) {
        this.isExpanded = isExpanded;
        this.model = model;
    }
}



/***/ }),

/***/ "WmGx":
/*!*******************************************************!*\
  !*** ./src/app/vsan/common/model/host-action.data.ts ***!
  \*******************************************************/
/*! exports provided: HostActionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostActionData", function() { return HostActionData; });
/**
 * Host data required for disk and group actions.
 */
let HostActionData = /*@__PURE__*/ (() => {
    class HostActionData {
        static fromHostData(host) {
            const hostData = new HostActionData();
            hostData.hostRef = host.hostRef;
            hostData.isWitnessHost = host.isWitnessHost;
            hostData.isInMaintenanceMode = host.isInMaintenanceMode;
            hostData.isWhatIfSupported = true;
            return hostData;
        }
    }
    HostActionData.fromPrecheckEntity = (entity) => {
        const hostData = new HostActionData();
        hostData.isWitnessHost = false;
        hostData.isWhatIfSupported = true;
        hostData.hostRef = entity.hostRef;
        hostData.isInMaintenanceMode = entity.isInMaintenanceMode;
        return hostData;
    };
    return HostActionData;
})();



/***/ }),

/***/ "Xmgb":
/*!**********************************************************************!*\
  !*** ./src/app/vsan/common/component/datagrid/filter/pipe-filter.ts ***!
  \**********************************************************************/
/*! exports provided: PipeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeFilter", function() { return PipeFilter; });
/* harmony import */ var _base_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-filter */ "idV8");
/* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * Extends BaseFilter by allowing the consumer to provide a
 pipe that will be used in the comparison process.
 */
class PipeFilter extends _base_filter__WEBPACK_IMPORTED_MODULE_0__["BaseFilter"] {
    constructor(pipe, dataField = null) {
        super();
        this.pipe = pipe;
        this.dataField = dataField;
    }
    stringify(data) {
        if (this.dataField && data) {
            return this.pipe.transform(data[this.dataField]);
        }
        return this.pipe.transform(data);
    }
}



/***/ }),

/***/ "fUyY":
/*!**********************************************************************************!*\
  !*** ./src/app/vsan/common/component/diskmgmt/model/storage-group-identifier.ts ***!
  \**********************************************************************************/
/*! exports provided: StorageGroupIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageGroupIdentifier", function() { return StorageGroupIdentifier; });
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * Disk group identifier by type and name, used for passing preselection context from
 * other pages' navigation or page refresh. vSAN Direct, PMEM and Unused groups have null name.
 */
class StorageGroupIdentifier {
    constructor(diskGroupType = null, name = null) {
        this.diskGroupType = diskGroupType;
        this.name = name;
    }
    static fromDiskGroupName(name) {
        return new StorageGroupIdentifier(null, name);
    }
    static fromDiskGroup(diskGroup) {
        return new StorageGroupIdentifier(diskGroup.diskGroupType, diskGroup.name);
    }
    static areEqual(value1, value2) {
        // Disk group type is an optional argument,
        // so it should be taken into account only if both diskGroupTypes are not null.
        const diskGroupTypeOptionalCheck = (!value1.diskGroupType || !value2.diskGroupType)
            || value1.diskGroupType === value2.diskGroupType;
        return value1 && value2 && diskGroupTypeOptionalCheck && (value1.name === value2.name);
    }
}



/***/ }),

/***/ "fzMa":
/*!****************************************************!*\
  !*** ./src/app/vsan/resync/resync-objects-util.ts ***!
  \****************************************************/
/*! exports provided: ResyncObjectsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResyncObjectsUtil", function() { return ResyncObjectsUtil; });
/* harmony import */ var _util_date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/date-time */ "oVzh");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");



class ResyncObjectsUtil {
    static getScheduledResync(resyncData, isResyncETAImprovementSupported) {
        if (!resyncData) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.loading");
        }
        else if (!resyncData.repairTimerData) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.na.label");
        }
        else if (!resyncData.repairTimerData.isSupported) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.notSupported");
        }
        const repairTimerData = resyncData.repairTimerData;
        if (isResyncETAImprovementSupported) {
            if (!repairTimerData.objectsCount) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.none");
            }
            return repairTimerData.objectsCount === 1
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.total.one.object")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.total.many.objects", repairTimerData.objectsCount);
        }
        return this.getFormattedScheduledResync(repairTimerData.objectsCount, resyncData.repairTimerData.minTimer, resyncData.repairTimerData.maxTimer);
    }
    static getFormattedScheduledResync(objectsCount, minTimer, maxTimer) {
        if (!objectsCount) {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.none");
        }
        let startTime;
        let endTime;
        // handle the case when only 1 object is scheduled for resync
        if (objectsCount === 1) {
            if (_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isToday(minTimer)) {
                startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.one.today", startTime);
            }
            if (_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isTomorrow(minTimer)) {
                startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.one.tomorrow", startTime);
            }
            startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].FULL_DATE_TIME);
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.one.differentDays", startTime);
        }
        // when minTimer === maxTimer, or maxTimer < 0, consider only minTimer for displaying the scheduled resync
        const isSameTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].getNoSecondsTime(minTimer) === _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].getNoSecondsTime(maxTimer);
        if (isSameTime || maxTimer < 0) {
            if (_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isToday(minTimer)) {
                startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.many.today", objectsCount, startTime);
            }
            if (_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isTomorrow(minTimer)) {
                startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.many.tomorrow", objectsCount, startTime);
            }
            startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].FULL_DATE_TIME);
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.many.differentDays", objectsCount, startTime);
        }
        // display the scheduled resync in the form "between minTimer and maxTimer"
        if (_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isToday(minTimer) && _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isToday(maxTimer)) {
            startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
            endTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(maxTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.some.today", objectsCount, startTime, endTime);
        }
        if (_util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isTomorrow(minTimer) && _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].isTomorrow(maxTimer)) {
            startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
            endTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(maxTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].SHORT_TIME);
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.some.tomorrow", objectsCount, startTime, endTime);
        }
        startTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(minTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].FULL_DATE_TIME);
        endTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].applyFormatting(maxTimer, _util_date_time__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].FULL_DATE_TIME);
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.some.differentDays", objectsCount, startTime, endTime);
    }
}



/***/ }),

/***/ "hT5P":
/*!****************************************************!*\
  !*** ./src/app/vsan/common/pipe/not-empty.pipe.ts ***!
  \****************************************************/
/*! exports provided: NotEmptyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEmptyPipe", function() { return NotEmptyPipe; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");

/**
 * If the original value is null or an empty string, shows "--" instead.
 */
class NotEmptyPipe {
    transform(value) {
        if (value != null && value.toString().trim().length != 0) {
            return value;
        }
        else {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.na.label");
        }
    }
}



/***/ }),

/***/ "hsab":
/*!********************************************************************************!*\
  !*** ./src/app/vsan/common/component/datagrid/comparator/string-comparator.ts ***!
  \********************************************************************************/
/*! exports provided: StringComparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringComparator", function() { return StringComparator; });
/* harmony import */ var _component_datagrid_comparator_base_comparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/datagrid/comparator/base-comparator */ "M9+R");
/* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */

class StringComparator extends _component_datagrid_comparator_base_comparator__WEBPACK_IMPORTED_MODULE_0__["BaseComparator"] {
    constructor(dataField) {
        super();
        this.dataField = dataField;
    }
    compareValue(a, b) {
        return this.stringify(a, this.dataField).toLowerCase()
            .localeCompare(this.stringify(b, this.dataField).toLowerCase());
    }
}



/***/ }),

/***/ "lFN8":
/*!*************************************************************!*\
  !*** ./src/app/vsan/common/model/disk-group-action.data.ts ***!
  \*************************************************************/
/*! exports provided: DiskGroupActionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskGroupActionData", function() { return DiskGroupActionData; });
/* harmony import */ var _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-disk-mgmt-actions-util */ "g4ok");

/**
 * The disk group data required for disk and disk group actions,
 * such as: remove/recreate/unmount disk group and remove disks.
 */
let DiskGroupActionData = /*@__PURE__*/ (() => {
    class DiskGroupActionData {
    }
    DiskGroupActionData.fromDiskGroupData = (group) => {
        const groupData = new DiskGroupActionData();
        groupData.isLocked = group.isLocked;
        groupData.diskGroupName = group.name;
        groupData.isMounted = group.isMounted;
        groupData.diskMapping = _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_0__["VsanDiskMgmtActionsUtil"].getVsanDiskMapping(group);
        groupData.vsanUuid = group.disks.find(disk => disk.isMappedAsCache).vsanUuid;
        return groupData;
    };
    DiskGroupActionData.fromPrecheckEntity = (precheckEntity) => {
        const groupData = new DiskGroupActionData();
        groupData.vsanUuid = precheckEntity.uuid;
        groupData.diskGroupName = precheckEntity.name;
        groupData.isLocked = precheckEntity.diskGroupData.isLocked;
        groupData.isMounted = precheckEntity.diskGroupData.isMounted;
        groupData.diskMapping = precheckEntity.diskGroupData.diskMapping;
        return groupData;
    };
    return DiskGroupActionData;
})();



/***/ }),

/***/ "nxO0":
/*!***************************************************!*\
  !*** ./src/app/generated/perf-states-obj-spec.ts ***!
  \***************************************************/
/*! exports provided: PerfStatesObjSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfStatesObjSpec", function() { return PerfStatesObjSpec; });
var PerfStatesObjSpec;
(function (PerfStatesObjSpec) {
    class Factory {
    } //class Factory
    Factory.create = (clusterRef, profileId, isVerboseEnabled, isNetworkDiagnosticModeEnabled) => {
        return { clusterRef: clusterRef, profileId: profileId, isVerboseEnabled: isVerboseEnabled, isNetworkDiagnosticModeEnabled: isNetworkDiagnosticModeEnabled, };
    };
    PerfStatesObjSpec.Factory = Factory;
})(PerfStatesObjSpec || (PerfStatesObjSpec = {})); //module PerfStatesObjSpec



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map