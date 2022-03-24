(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "+u6b":
/*!*************************************************************************************!*\
  !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-base.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: ClrButtonBaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrButtonBaseDirective", function() { return ClrButtonBaseDirective; });
/**
 * Use this class as base class for directive, which handles clr-button. It will help to link the rendered button with
 * the clr-button on which the directive is applied.
 */
class ClrButtonBaseDirective {
    constructor(clrButton) {
        this.clrButton = clrButton;
        if (!clrButton) {
            return;
        }
        // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.
        if (!clrButton.name) {
            clrButton.name = Math.random().toString();
        }
        const directiveHolder = clrButton;
        directiveHolder.directives = directiveHolder.directives || [];
        directiveHolder.directives.push(this);
    }
}



/***/ }),

/***/ "D0Ma":
/*!************************************************************************!*\
  !*** ./src/app/vsan/common/service/performance-persistence.service.ts ***!
  \************************************************************************/
/*! exports provided: PersistedSelection, PerformancePersistenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistedSelection", function() { return PersistedSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformancePersistenceService", function() { return PerformancePersistenceService; });
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");

class PersistedSelection {
}
/**
 * Persist data which is needed between multiple performance views.
 */
class PerformancePersistenceService {
    constructor(storageService) {
        this.storageService = storageService;
        /**
         * Cached time range selection is kept for 1 hour.
         */
        this.CACHE_DURATION_IN_MS = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_0__["VsanDateTimeUtils"].HOUR_IN_MILLISECONDS;
        this.CACHE_KEY = "performance-timerange-selection";
    }
    saveSelection(timeRange, state) {
        const expiresIn = new Date().getTime() + this.CACHE_DURATION_IN_MS;
        const fullTimeRangeData = {
            timeRange: timeRange,
            state: state,
        };
        const savedObject = {
            fullTimeRangeSelection: fullTimeRangeData,
            expiresIn: expiresIn,
        };
        this.storageService.set(this.CACHE_KEY, savedObject);
    }
    getPersistedSelection() {
        const persistedSelection = this.storageService.get(this.CACHE_KEY);
        if (persistedSelection == null || persistedSelection.fullTimeRangeSelection == null) {
            return null;
        }
        const isCacheExpired = this.clearCacheIfExpired(persistedSelection);
        if (isCacheExpired) {
            return null;
        }
        return persistedSelection.fullTimeRangeSelection;
    }
    /**
     * Check if deleted timeRange is persisted in the browser storage, if so then it should be removed as well.
     */
    onTimeRangeDeletion(timeRange) {
        const persistedTimeRange = this.getPersistedSelection();
        if (persistedTimeRange != null && timeRange.name === persistedTimeRange.timeRange.name) {
            this.storageService.remove(this.CACHE_KEY);
        }
    }
    clearCacheIfExpired(persistedSelection) {
        const nowTimestamp = new Date().getTime();
        // If more then 1 hour has passed, then delete persisted selection
        if (persistedSelection.expiresIn < nowTimestamp) {
            this.storageService.remove(this.CACHE_KEY);
            return true;
        }
        return false;
    }
}



/***/ }),

/***/ "HSLg":
/*!*********************************************************************************!*\
  !*** ./src/app/vsan/vm/io-diagnostics/dialog/io-vm-metrics-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IoVmMetricsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoVmMetricsDialogComponent", function() { return IoVmMetricsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _generated_perf_query_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/perf-query-spec */ "0ebl");
/* harmony import */ var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service/flow/loader.decorator */ "8V30");
/* harmony import */ var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @service/flow/loading-indicator.decorator */ "2BwX");
/* harmony import */ var _support_model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/model/perf-dashboard-view.data */ "3LVF");
/* harmony import */ var _support_model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../support/model/perf-dashboard.data */ "WpOO");
/* harmony import */ var _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../support/util/perf-dashboard-sub-entities-data-query.service */ "rcCH");
/* harmony import */ var _support_view_advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../support/view/advanced-perf-sub-entity-dashboard.component */ "6wxb");
/* harmony import */ var _graph_view_model_graph_node_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graph-view/model/graph-node-details */ "ROmN");
/* harmony import */ var _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @generated/entity-ref-type */ "OTki");
/* harmony import */ var _support_model_navigation_support_nav_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../support/model/navigation/support-nav.data */ "x4hb");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @navigation/navigation.service */ "Qw2S");
/* harmony import */ var _component_diskmgmt_model_storage_group_identifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @component/diskmgmt/model/storage-group-identifier */ "fUyY");
/* harmony import */ var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @service/flow/error-message.decorator */ "puuD");
/* harmony import */ var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @component/unavailable-view/unavailable-view-spec */ "Hg5h");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* harmony import */ var _generated_perf_time_range_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @generated/perf-time-range-data */ "Ds6g");
/* harmony import */ var _component_datetime_picker_time_range_picker_range_picker_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @component/datetime-picker/time-range-picker/range-picker-state */ "jmcr");
/* harmony import */ var _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @component/chart/performance/graph-metrics.data */ "H1HU");
/* harmony import */ var _support_util_perf_for_support_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../support/util/perf-for-support-util */ "JywT");
/* harmony import */ var _support_model_perf_dashboard_vsan2_disk_scsifw_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../support/model/perf-dashboard-vsan2-disk-scsifw.data */ "yhYM");






















let IoVmMetricsDialogComponent = /*@__PURE__*/ (() => {
    class IoVmMetricsDialogComponent {
        constructor(perfDataProvider, navigationService, perfPersistenceService) {
            this.perfDataProvider = perfDataProvider;
            this.navigationService = navigationService;
            this.perfPersistenceService = perfPersistenceService;
            this.PerfForSupportUtil = _support_util_perf_for_support_util__WEBPACK_IMPORTED_MODULE_20__["PerfForSupportUtil"];
            this.DISK_GROUP_GRAPHS_IDS = [
                "com.vmware.vsan.perf.graph.disk-group.iopsOverhead",
                "com.vmware.vsan.perf.graph.disk-group.latencyOverhead",
            ];
            this.PNIC_NETWORK_GRAPHS_IDS = [
                "com.vmware.vsan.perf.graph.network.pnic.throughput",
                "com.vmware.vsan.perf.graph.network.pnic.loss.rate",
            ];
            this.VSAN2_DISK_SCSIFW_GRAPHS_IDS = [
                "com.vmware.vsan.perf.graph.vsan2-disk-scsifw.iopsDev",
                "com.vmware.vsan.perf.graph.vsan2-disk-scsifw.throughputDev",
                "com.vmware.vsan.perf.graph.vsan2-disk-scsifw.latencyDev",
            ];
            this.displayEntityInfo = _support_view_advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DisplayEntityInfoType"].ALL;
            this.unavailableViewSpec = _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_15__["UnavailableViewSpec"].PERF_VIEW_NO_DATA;
        }
        get historicalGraphMetricsByRefId() {
            return this._historicalGraphMetricsByRefId;
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext();
                this.entityName = context.entityName;
                this.hostName = context.hostName;
                this.hostUuid = context.hostUuid;
                this.isHistoricalMode = context.isHistorical;
                this.startDate = context.startDate;
                this.endDate = context.endDate;
                this.clusterRef = context.clusterRef;
                switch (context.type) {
                    case _graph_view_model_graph_node_details__WEBPACK_IMPORTED_MODULE_9__["GraphNodeType"].NIC:
                        yield this.initializeNicPerformance();
                        break;
                    case _graph_view_model_graph_node_details__WEBPACK_IMPORTED_MODULE_9__["GraphNodeType"].DISK_GROUP:
                        yield this.initializeDiskGroupPerformance();
                        break;
                    case _graph_view_model_graph_node_details__WEBPACK_IMPORTED_MODULE_9__["GraphNodeType"].DISK:
                        yield this.initializeDiskPerformance();
                        break;
                }
            });
        }
        getPerfEntityName(entityRefId) {
            return entityRefId === null || entityRefId === void 0 ? void 0 : entityRefId.split("|")[1];
        }
        initializeNicPerformance() {
            var _a, _b, _c, _d;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.pNicNetwork.label");
                this.primaryActionLabel =
                    _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.pNicNetwork.perfDetails");
                this.primaryActionCallback = this.navigateToPerformance;
                this.dashboardView = _support_model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_5__["PerfDashboardView"].PNIC;
                this.graphs = this.getGraphs(this.PNIC_NETWORK_GRAPHS_IDS);
                this.entityType = _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_10__["EntityRefType"].VSAN_PNIC_NET();
                this.entitiesStateData =
                    yield this.perfDataProvider.getEntityPerfStateForWildcards(this.clusterRef, [this.preparePerfSpec()]);
                this.hasMetrics = !!((_a = this.graphs) === null || _a === void 0 ? void 0 : _a.length) && !!((_b = this.entitiesStateData) === null || _b === void 0 ? void 0 : _b.length) &&
                    !!((_d = (_c = this.entitiesStateData.find(data => { var _a; return (_a = data === null || data === void 0 ? void 0 : data.entityRefId) === null || _a === void 0 ? void 0 : _a.includes(this.hostUuid); })) === null || _c === void 0 ? void 0 : _c.metricsSeries) === null || _d === void 0 ? void 0 : _d.length);
                this.setNicPerformanceMode();
            });
        }
        setNicPerformanceMode() {
            if (!this.isHistoricalMode) {
                this.displayEntityInfo = _support_view_advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DisplayEntityInfoType"].ONLY_SUB_ENTITIES;
                this.filteredEntities = [new _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_7__["HostSubEntitiesData"](this.hostName, null)];
            }
            else {
                this.setHistoricalData(this.hostUuid);
            }
        }
        initializeDiskPerformance() {
            var _a, _b, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.disk.label");
                this.primaryActionLabel =
                    _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.diskGroup.diagnostics");
                // TODO: (REPA) (vasilevd) Test navigation once graph is implemented in perf view
                this.primaryActionCallback = this.navigateToPerformance;
                this.additionalActionLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.diskGroup.view");
                this.additionalActionCallback = this.navigateToDiskManagement;
                this.dashboardView = _support_model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_5__["PerfDashboardView"].DISK;
                this.graphs = _support_model_perf_dashboard_vsan2_disk_scsifw_data__WEBPACK_IMPORTED_MODULE_21__["PerfDashboardVsan2DiskScsifwData"].VSAN2_DISK_SCSIFW_CHARTS.filter(chart => this.VSAN2_DISK_SCSIFW_GRAPHS_IDS.includes(chart.id));
                this.entityType = _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_10__["EntityRefType"].VSAN2_DISK_SCSIFW();
                this.entitiesStateData =
                    yield this.perfDataProvider.getEntityPerfStateForWildcards(this.clusterRef, [this.preparePerfSpec()]);
                this.hasMetrics = !!((_a = this.graphs) === null || _a === void 0 ? void 0 : _a.length) && !!((_c = (_b = this.entitiesStateData
                    .find(data => { var _a; return (_a = data === null || data === void 0 ? void 0 : data.entityRefId) === null || _a === void 0 ? void 0 : _a.includes(this.entityName); })) === null || _b === void 0 ? void 0 : _b.metricsSeries) === null || _c === void 0 ? void 0 : _c.length);
                this.setDiskGroupPerformanceMode();
            });
        }
        initializeDiskGroupPerformance() {
            var _a, _b, _c, _d;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.diskGroup.label");
                this.primaryActionLabel =
                    _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.diskGroup.diagnostics");
                this.primaryActionCallback = this.navigateToPerformance;
                this.additionalActionLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.vm.iodiagnostics.metrics.diskGroup.view");
                this.additionalActionCallback = this.navigateToDiskManagement;
                this.dashboardView = _support_model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_5__["PerfDashboardView"].DISKGROUP;
                this.graphs = this.getGraphs(this.DISK_GROUP_GRAPHS_IDS);
                this.entityType = _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_10__["EntityRefType"].DISK_GROUP();
                this.entitiesStateData =
                    yield this.perfDataProvider.getEntityPerfStateForWildcards(this.clusterRef, [this.preparePerfSpec()]);
                this.hasMetrics = !!((_a = this.graphs) === null || _a === void 0 ? void 0 : _a.length) && !!((_b = this.entitiesStateData) === null || _b === void 0 ? void 0 : _b.length) &&
                    !!((_d = (_c = this.entitiesStateData
                        .find(data => { var _a; return (_a = data === null || data === void 0 ? void 0 : data.entityRefId) === null || _a === void 0 ? void 0 : _a.includes(this.entityName); })) === null || _c === void 0 ? void 0 : _c.metricsSeries) === null || _d === void 0 ? void 0 : _d.length);
                this.setDiskGroupPerformanceMode();
            });
        }
        setDiskGroupPerformanceMode() {
            if (!this.isHistoricalMode) {
                this.displayEntityInfo = _support_view_advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DisplayEntityInfoType"].NONE;
                this.filteredEntities = [new _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_7__["HostSubEntitiesData"](this.hostName, [{
                            name: this.entityName,
                            uuid: this.entityName,
                        }])];
            }
            else {
                this.setHistoricalData(this.entityName);
            }
        }
        setHistoricalData(objectUuid = null) {
            this._historicalGraphMetricsByRefId = new Map();
            this.entitiesStateData
                .filter(data => !objectUuid || data.entityRefId.includes(objectUuid))
                .forEach(data => {
                this._historicalGraphMetricsByRefId.set(data === null || data === void 0 ? void 0 : data.entityRefId, new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_19__["GraphMetric"](data, this.graphs));
            });
        }
        getGraphs(displayGraphs = null) {
            const pivotalDashboard = _support_model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_6__["VsanPerfDashboardCategory"].PIVOTAL_DASHBOARDS
                .find(dashboard => dashboard.view === this.dashboardView);
            if (pivotalDashboard) {
                return pivotalDashboard.children.filter(c => c.isPivotalGraph &&
                    (_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(displayGraphs) || displayGraphs.some(g => g === c.id)));
            }
            const dashboardCategory = _support_model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_6__["VsanPerfDashboardCategory"].CATEGORIED_DASHBOARDS
                .find(category => category.children.some(d => d.view === this.dashboardView));
            if (dashboardCategory) {
                return dashboardCategory.children.find(d => d.view === this.dashboardView)
                    .children.filter(c => c.isPivotalGraph &&
                    (_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(displayGraphs) || displayGraphs.some(g => g === c.id)));
            }
            return null;
        }
        preparePerfSpec() {
            return _generated_perf_query_spec__WEBPACK_IMPORTED_MODULE_2__["PerfQuerySpec"].Factory.create(this.entityType, "*", // wild card query, * to match all the entityIds
            null, /* group:string, not used*/ this.startDate, this.endDate, null, /* interval:number , not used*/ null /* labels:string[], not used*/);
        }
        navigateToPerformance() {
            const perfTimeRange = _generated_perf_time_range_data__WEBPACK_IMPORTED_MODULE_17__["PerfTimeRangeData"].Factory.create(null, this.startDate, _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_16__["VsanDateTimeUtils"].roundToMinuteStart(this.endDate), this.clusterRef);
            this.perfPersistenceService.saveSelection(perfTimeRange, _component_datetime_picker_time_range_picker_range_picker_state__WEBPACK_IMPORTED_MODULE_18__["RangePickerState"].CUSTOM_RANGE);
            const navData = new _support_model_navigation_support_nav_data__WEBPACK_IMPORTED_MODULE_11__["SupportNavData"](_support_model_navigation_support_nav_data__WEBPACK_IMPORTED_MODULE_11__["SupportView"].ADVANCED_PERFORMANCE, new _support_model_navigation_support_nav_data__WEBPACK_IMPORTED_MODULE_11__["PerfSelectionData"](this.dashboardView));
            if (!this.isHistoricalMode && this.entityName) {
                navData.perfSelection.objectIdentifier = this.entityName;
            }
            this.navigationService.navigateToAndCloseModal(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["PlatformExtension"].CLUSTER_SUPPORT, this.clusterRef, navData);
        }
        navigateToDiskManagement() {
            const groupIdentifier = _component_diskmgmt_model_storage_group_identifier__WEBPACK_IMPORTED_MODULE_13__["StorageGroupIdentifier"].fromDiskGroupName(this.entityName);
            const context = {
                hostRef: null,
                hostName: !this.isHistoricalMode ? this.hostName : null,
                diskGroup: !this.isHistoricalMode ? groupIdentifier : null,
                isHostDetailsLevel: !this.isHistoricalMode,
            };
            this.navigationService.navigateToAndCloseModal(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["PlatformExtension"].DISK_MANAGEMENT, this.clusterRef, context);
        }
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicator"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], IoVmMetricsDialogComponent.prototype, "isLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_14__["ErrorMessage"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], IoVmMetricsDialogComponent.prototype, "errorMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], IoVmMetricsDialogComponent.prototype, "ngOnInit", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], IoVmMetricsDialogComponent.prototype, "initializeNicPerformance", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], IoVmMetricsDialogComponent.prototype, "initializeDiskPerformance", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], IoVmMetricsDialogComponent.prototype, "initializeDiskGroupPerformance", null);
    return IoVmMetricsDialogComponent;
})();



/***/ }),

/***/ "KlwK":
/*!*******************************************************************************************!*\
  !*** ./src/app/vsan/vm/io-diagnostics/dialog/io-vm-metrics-dialog.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_IoVmMetricsDialogComponent, View_IoVmMetricsDialogComponent_0, View_IoVmMetricsDialogComponent_Host_0, IoVmMetricsDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IoVmMetricsDialogComponent", function() { return RenderType_IoVmMetricsDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IoVmMetricsDialogComponent_0", function() { return View_IoVmMetricsDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IoVmMetricsDialogComponent_Host_0", function() { return View_IoVmMetricsDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoVmMetricsDialogComponentNgFactory", function() { return IoVmMetricsDialogComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/component/unavailable-view/unavailable-view.component.ngfactory */ "Kfm7");
/* harmony import */ var _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/component/unavailable-view/unavailable-view.component */ "hlBw");
/* harmony import */ var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/service/task-monitor-service */ "81c+");
/* harmony import */ var _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/service/navigation/navigation.service */ "Qw2S");
/* harmony import */ var _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../generated/hci-quickstart-status-service */ "KbWe");
/* harmony import */ var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../generated/vsan-perf-property-provider */ "Oyqh");
/* harmony import */ var _support_view_advanced_perf_sub_entity_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../support/view/advanced-perf-sub-entity-dashboard.component.ngfactory */ "6fco");
/* harmony import */ var _support_view_advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../support/view/advanced-perf-sub-entity-dashboard.component */ "6wxb");
/* harmony import */ var _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../support/util/perf-dashboard-sub-entities-data-query.service */ "rcCH");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/component/chart/performance/perf-charts-container.component.ngfactory */ "b7pI");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/component/chart/performance/perf-charts-container.component */ "RSFA");
/* harmony import */ var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/performance/perf-orchestrator-service */ "5xE9");
/* harmony import */ var _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/component/dialog/prompt/prompt-edit.component.ngfactory */ "0JAx");
/* harmony import */ var _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/component/dialog/prompt/prompt-edit.component */ "ACap");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./io-vm-metrics-dialog.component */ "HSLg");
/* harmony import */ var _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/service/performance-persistence.service */ "D0Ma");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */





















var styles_IoVmMetricsDialogComponent = [];
var RenderType_IoVmMetricsDialogComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_IoVmMetricsDialogComponent, data: {} });

function View_IoVmMetricsDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "vsan-unavailable-view", [], null, null, null, _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_UnavailableViewComponent_0"], _common_component_unavailable_view_unavailable_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_UnavailableViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _common_component_unavailable_view_unavailable_view_component__WEBPACK_IMPORTED_MODULE_2__["UnavailableViewComponent"], [_common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_3__["TaskMonitorService"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"], _generated_hci_quickstart_status_service__WEBPACK_IMPORTED_MODULE_5__["HciQuickstartStatusService"], _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_6__["VsanPerfPropertyProvider"]], { unavailableViewSpec: [0, "unavailableViewSpec"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.unavailableViewSpec; _ck(_v, 1, 0, currVal_0); }, null); }
function View_IoVmMetricsDialogComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "vsan-advanced-perf-sub-entity-dashboard", [], null, null, null, _support_view_advanced_perf_sub_entity_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AdvancedPerfSubentityDashboard_0"], _support_view_advanced_perf_sub_entity_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AdvancedPerfSubentityDashboard"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _support_view_advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedPerfSubentityDashboard"], [_support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_9__["PerfDashboardSubEntitiesDataQueryService"]], { perfEntitiesStateData: [0, "perfEntitiesStateData"], displayedGraphs: [1, "displayedGraphs"], clusterRef: [2, "clusterRef"], showAllSupported: [3, "showAllSupported"], filterObjects: [4, "filterObjects"], displayEntityInfo: [5, "displayEntityInfo"], isNested: [6, "isNested"], compactMode: [7, "compactMode"], view: [8, "view"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.entitiesStateData; var currVal_1 = _co.graphs; var currVal_2 = _co.clusterRef; var currVal_3 = false; var currVal_4 = _co.filteredEntities; var currVal_5 = _co.displayEntityInfo; var currVal_6 = false; var currVal_7 = false; var currVal_8 = _co.dashboardView; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, null); }
function View_IoVmMetricsDialogComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "sub-entity-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "clr-icon", [["class", "is-info"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_10__["ClrIconCustomTag"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [["class", "entity-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.PerfForSupportUtil.getEntityIcon(_co.dashboardView); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.getPerfEntityName(((_v.parent.context.$implicit == null) ? null : _v.parent.context.$implicit.key)); _ck(_v, 6, 0, currVal_1); }); }
function View_IoVmMetricsDialogComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IoVmMetricsDialogComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "vsan-perf-charts-container", [], null, null, null, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_14__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_15__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_13__["ReferenceWatcher"]], { isEmptyChartsVisible: [0, "isEmptyChartsVisible"], isShowGraphDescription: [1, "isShowGraphDescription"], data: [2, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getPerfEntityName(((_v.context.$implicit == null) ? null : _v.context.$implicit.key)); _ck(_v, 3, 0, currVal_0); var currVal_1 = false; var currVal_2 = false; var currVal_3 = _ck(_v, 8, 0, ((_v.context.$implicit == null) ? null : _v.context.$implicit.value)); _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3); }, null); }
function View_IoVmMetricsDialogComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_IoVmMetricsDialogComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).transform(_co.historicalGraphMetricsByRefId)); _ck(_v, 3, 0, currVal_0); }, null); }
function View_IoVmMetricsDialogComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IoVmMetricsDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IoVmMetricsDialogComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isHistoricalMode; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.isHistoricalMode; _ck(_v, 6, 0, currVal_1); }, null); }
function View_IoVmMetricsDialogComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 8, "vsan-edit-prompt", [], null, [[null, "alertMessageChange"], [null, "onConfirm"], [null, "onAdditionalAction"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("alertMessageChange" === en)) {
                var pd_0 = ((_co.errorMessage = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (("onConfirm" === en)) {
                var pd_1 = (_co.primaryActionCallback() !== false);
                ad = (pd_1 && ad);
            }
            if (("onAdditionalAction" === en)) {
                var pd_2 = (_co.additionalActionCallback() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_EditPrompt_0"], _common_component_dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_EditPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _common_component_dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_17__["EditPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["FocusTrapFactory"]], { title: [0, "title"], subtitle: [1, "subtitle"], confirmText: [2, "confirmText"], additionalButtonText: [3, "additionalButtonText"], blockAdditionalButton: [4, "blockAdditionalButton"], alertMessage: [5, "alertMessage"], blockButton: [6, "blockButton"], blockContent: [7, "blockContent"] }, { alertMessageChange: "alertMessageChange", onConfirm: "onConfirm", onAdditionalAction: "onAdditionalAction" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_IoVmMetricsDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_IoVmMetricsDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; var currVal_1 = _co.entityName; var currVal_2 = _co.primaryActionLabel; var currVal_3 = (_co.additionalActionLabel ? _co.additionalActionLabel : null); var currVal_4 = (_co.isLoading || !_co.hasMetrics); var currVal_5 = _co.errorMessage; var currVal_6 = (_co.isLoading || !_co.hasMetrics); var currVal_7 = _co.isLoading; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = (!_co.isLoading && !_co.hasMetrics); _ck(_v, 5, 0, currVal_8); var currVal_9 = _co.hasMetrics; _ck(_v, 8, 0, currVal_9); }, null);
}
function View_IoVmMetricsDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-io-vm-metrics-dialog", [], null, null, null, View_IoVmMetricsDialogComponent_0, RenderType_IoVmMetricsDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_19__["IoVmMetricsDialogComponent"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_6__["VsanPerfPropertyProvider"], _common_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"], _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_20__["PerformancePersistenceService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IoVmMetricsDialogComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-io-vm-metrics-dialog", _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_19__["IoVmMetricsDialogComponent"], View_IoVmMetricsDialogComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "cMmx":
/*!******************************************************!*\
  !*** ./src/app/vsan/common/util/vsan-dialog-util.ts ***!
  \******************************************************/
/*! exports provided: VsanDialogUtil, VsanDialogProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanDialogUtil", function() { return VsanDialogUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanDialogProperties", function() { return VsanDialogProperties; });
/* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */
let VsanDialogUtil = /*@__PURE__*/ (() => {
    class VsanDialogUtil {
    }
    VsanDialogUtil.CAPACITY_MANAGEMENT_DIALOG = {
        width: 800,
        height: 700,
    };
    VsanDialogUtil.DELETE_VOLUME_DIALOG = {
        width: 500,
        height: 250,
    };
    VsanDialogUtil.MIGRATE_VOLUME_DIALOG = {
        width: 1030,
        height: 710,
    };
    VsanDialogUtil.REAPPLY_VOLUME_POLICY_DIALOG = {
        width: 700,
        height: 250,
    };
    VsanDialogUtil.DUPLICATE_PCI_ID_MODEL_SELECTION_DIALOG = {
        width: 800,
        height: 500,
    };
    VsanDialogUtil.HEALTH_RESTORE_ACTION_DIALOG = {
        width: 550,
        height: 250,
    };
    // Keep in sync with plugin.xml extension point
    VsanDialogUtil.CLUSTER_POWER_ON_DIALOG = {
        width: 600,
        height: 230,
    };
    VsanDialogUtil.VM_IO_DIAGNOSTICS_METRICS_DIALOG = {
        width: 900,
        height: 700,
    };
    VsanDialogUtil.VM_IO_DIAGNOSTICS_LATENCY_DIALOG = {
        width: 1000,
        height: 500,
    };
    VsanDialogUtil.VM_IO_DIAGNOSTICS_DOM_OWNER_LATENCY_DIALOG = {
        width: 1000,
        height: 400,
    };
    VsanDialogUtil.PERF_SVC_EDIT_ACTION_DIALOG = {
        width: 800,
        height: 450,
    };
    VsanDialogUtil.PERF_SVC_ENABLE_ACTION_DIALOG = {
        width: 800,
        height: 250,
    };
    VsanDialogUtil.CLAIM_DISKS_ACTION_DIALOG = {
        width: 1200,
        height: 650,
    };
    VsanDialogUtil.VSAN_DISK_CLAIM_ACTION_DIALOG = {
        width: 670,
        height: 300,
    };
    return VsanDialogUtil;
})();
class VsanDialogProperties {
}



/***/ }),

/***/ "tsUx":
/*!********************************************************************************!*\
  !*** ./src/app/vsan/common/directive/external-link/external-link.directive.ts ***!
  \********************************************************************************/
/*! exports provided: ExternalLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkDirective", function() { return ExternalLinkDirective; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @directive/clr-button-group/clr-button-base.directive */ "+u6b");


/**
 * Decorates a button or an anchor as external link. Requires one of the optional parameters articleId, helpId or url.
 *
 * @param external-link: Optional. Localization key of the text label of the external link. If omitted default label
 * will be used - "Learn more" for anchors or "Ask VMWare" for buttons.
 * @param articleId - Optional. Id of article in knowledge base.
 * @param helpId - Optional. Help id which will redirect to Knowledge Base.
 * @param url - Optional. External URL.
 */
class ExternalLinkDirective extends _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__["ClrButtonBaseDirective"] {
    constructor(el, resolver, renderer, navigationService, 
    // this variable will be initialized only if the host is clr-button
    clrButton) {
        super(clrButton);
        this.el = el;
        this.resolver = resolver;
        this.renderer = renderer;
        this.navigationService = navigationService;
        this.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
        this.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
        this.CONTAINER_CLASS = "icon-name-container";
        this.NAVIGATION_EVENT_TYPE = "click";
        this.LEAD_TO_NOWHERE_URL = "javascript://";
        this.HTML_ELEMENT_SPAN_NAME = "span";
        this.HTML_ELEMENT_ICON_NAME = "clr-icon";
        this.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
        this.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
        this.ICON_SHAPE_ATTR_NAME = "shape";
        this.ICON_SHAPE_ATTR_VALUE = "pop-out";
        this.ICON_SIZE_ATTR_NAME = "size";
        this.ICON_SIZE_ATTR_VALUE = "16";
        this.ICON_CLASS_ATTR_NAME = "class";
        this.ICON_CLASS_ATTR_VALUE = "link";
        this.ICON_TITLE_ATTR_NAME = "title";
        this.KB_URL = "http://kb.vmware.com/kb/";
    }
    ngAfterViewInit() {
        const element = this.el.nativeElement;
        // continue only if element is HTML link or button
        if (!this.isLink(element) && !this.isButton(element)) {
            // element is clr-button, wait until html button for it is resolved - handled by resloveButton
            return;
        }
        this.prepareExternalLink(element);
    }
    resolveButton(clrButton, button, index) {
        // only if element is clr-button. At this point the html button is already resolved. Apply on it.
        this.prepareExternalLink(button);
    }
    prepareExternalLink(element) {
        this.renderer.addClass(element, this.CONTAINER_CLASS);
        this.setText(element);
        if (this.isLink(element)) {
            this.decorateLink(element);
        }
        else {
            this.addLinkRole(element);
        }
        this.initializeNavigationHandler(element);
    }
    isButton(element) {
        return element instanceof HTMLButtonElement;
    }
    isLink(element) {
        return element instanceof HTMLAnchorElement;
    }
    setText(element) {
        const span = this.renderer.createElement(this.HTML_ELEMENT_SPAN_NAME);
        span.innerText = this.getText(element);
        this.renderer.appendChild(element, span);
        const icon = this.renderer.createElement(this.HTML_ELEMENT_ICON_NAME);
        icon.setAttribute(this.ICON_SHAPE_ATTR_NAME, this.ICON_SHAPE_ATTR_VALUE);
        icon.setAttribute(this.ICON_SIZE_ATTR_NAME, this.ICON_SIZE_ATTR_VALUE);
        icon.setAttribute(this.ICON_CLASS_ATTR_NAME, this.ICON_CLASS_ATTR_VALUE);
        // Set title of the icon for screen readers clarity
        icon.setAttribute(this.ICON_TITLE_ATTR_NAME, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.label.externalLink.icon"));
        this.renderer.appendChild(element, icon);
    }
    getText(element) {
        if (this.anchorText) {
            return this.anchorText;
        }
        const key = this.isButton(element) ? this.ASK_VMWARE_DEFAULT_TEXT_KEY : this.LEARN_MORE_DEFAULT_TEXT_KEY;
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key);
    }
    decorateLink(element) {
        const linkElement = element;
        // don't use href attribute. If omitted, the link will be not visualized properly.
        linkElement.href = this.LEAD_TO_NOWHERE_URL;
        // display link on same line
        linkElement.style.display = "inline-flex";
    }
    initializeNavigationHandler(element) {
        element.addEventListener(this.NAVIGATION_EVENT_TYPE, () => {
            if (this.helpId) {
                this.navigationService.askVMware(this.helpId);
                return;
            }
            if (this.articleId) {
                this.navigationService.navigateToAddress(`${this.KB_URL}${this.articleId}`);
                return;
            }
            if (this.url) {
                this.navigationService.navigateToAddress(this.url);
            }
        });
    }
    // Indicate external navigation by assigning "link" role
    addLinkRole(element) {
        this.renderer.setAttribute(element, this.HTML_ELEMENT_ROLE_ATTR_NAME, this.HTML_ELEMENT_ROLE_ATTR_VALUE);
    }
}



/***/ }),

/***/ "vfaH":
/*!****************************************************************************************!*\
  !*** ./src/app/vsan/vm/io-diagnostics/dialog/io-vm-metrics-dialog.module.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: IoVmMetricsDialogModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoVmMetricsDialogModuleNgFactory", function() { return IoVmMetricsDialogModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _io_vm_metrics_dialog_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io-vm-metrics-dialog.module */ "wTAW");
/* harmony import */ var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */ "zl1X");
/* harmony import */ var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/directive/show-title/clipboard-icon.component.ngfactory */ "1zpS");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/component/chart/performance/perf-chart-dialog.component.ngfactory */ "vx4U");
/* harmony import */ var _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/component/chart/performance/set-threshold-dialog.component.ngfactory */ "Gg4+");
/* harmony import */ var _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/ng-pick-datetime/dialog/dialog-container.component.ngfactory */ "No7X");
/* harmony import */ var _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.ngfactory */ "bIR2");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component.ngfactory */ "Wfa3");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component.ngfactory */ "PBGP");
/* harmony import */ var _io_vm_metrics_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./io-vm-metrics-dialog.component.ngfactory */ "KlwK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/component/chart/highcharts-theme.service */ "woOg");
/* harmony import */ var _common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/service/theme-listener.service */ "AWEo");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/component/chart/capacity-bar-chart/bar-chart.service */ "aiKe");
/* harmony import */ var _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/component/chart/highcharts-properties.service */ "Z7Pm");
/* harmony import */ var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/util/performance/perf-orchestrator-service */ "5xE9");
/* harmony import */ var _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/component/capacity/capacity.service */ "RmO3");
/* harmony import */ var _generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../generated/capacity-data-service */ "0wU0");
/* harmony import */ var _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/service/space-efficiency-service */ "1Ga+");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-pick-datetime/dialog/dialog.service */ "Tq4R");
/* harmony import */ var ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time-picker-intl.service */ "rAFq");
/* harmony import */ var _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../common/component/datetime-picker/localize-picker-labels */ "EUIg");
/* harmony import */ var ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time-picker.component */ "4D9t");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-adapter.class */ "bMPK");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */ "UiI2");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../support/util/perf-dashboard-sub-entities-data-query.service */ "rcCH");
/* harmony import */ var _generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../generated/vsan-perf-property-provider */ "Oyqh");
/* harmony import */ var _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../common/service/browser-storage.service */ "mJDh");
/* harmony import */ var _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../common/service/performance-persistence.service */ "D0Ma");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../common/pipe/common-pipe.module */ "yVHT");
/* harmony import */ var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../common/directive/common-directive.module */ "uf8S");
/* harmony import */ var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../common/component/validation/validation.module */ "90Ln");
/* harmony import */ var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../common/component/dialog/prompt/prompt.module */ "usKm");
/* harmony import */ var _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../common/component/unavailable-view/unavailable-view.module */ "YUlR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../common/component/chart/chart.module */ "1+Dr");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-pick-datetime/dialog/dialog.module */ "jRYl");
/* harmony import */ var ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-pick-datetime/date-time/date-time.module */ "KL2N");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time.module */ "QX+E");
/* harmony import */ var _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../common/component/datetime-picker/datetime-picker.module */ "UaEa");
/* harmony import */ var _support_support_perf_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../support/support-perf.module */ "hwU3");
/* harmony import */ var _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../../common/component/chart/performance/perf-chart-dialog.component */ "xuXY");
/* harmony import */ var _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../../common/component/chart/performance/set-threshold-dialog.component */ "AYan");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../../common/component/datetime-picker/time-range-picker/add-time-range-dialog.component */ "vRnr");
/* harmony import */ var _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../../common/component/datetime-picker/time-range-picker/delete-range-confirm-dialog.component */ "oRW+");
/* harmony import */ var _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./io-vm-metrics-dialog.component */ "HSLg");
/* harmony import */ var ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/date-time-format.class */ "EFU/");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */



























































var IoVmMetricsDialogModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_io_vm_metrics_dialog_module__WEBPACK_IMPORTED_MODULE_1__["IoVmMetricsDialogModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _common_component_chart_performance_perf_chart_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PerfChartDialogComponentNgFactory"], _common_component_chart_performance_set_threshold_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SetThresholdDialogComponentNgFactory"], _node_modules_ng_pick_datetime_dialog_dialog_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["OwlDialogContainerComponentNgFactory"], _node_modules_ng_pick_datetime_date_time_date_time_picker_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["OwlDateTimeContainerComponentNgFactory"], _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AddTimeRangeDialogComponentNgFactory"], _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["DeleteRangeConfirmDialogComponentNgFactory"], _io_vm_metrics_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["IoVmMetricsDialogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"], _common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"], [_common_service_theme_listener_service__WEBPACK_IMPORTED_MODULE_16__["ThemeListenerService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_17__["ReferenceWatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__["BarChartService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__["BarChartService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_19__["HighchartsPropertiesService"], _common_component_chart_highcharts_properties_service__WEBPACK_IMPORTED_MODULE_19__["HighchartsPropertiesService"], [_common_component_chart_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_15__["HighchartsThemeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_20__["PerfOrchestratorService"], _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_20__["PerfOrchestratorService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_21__["VsanCapacityService"], _common_component_capacity_capacity_service__WEBPACK_IMPORTED_MODULE_21__["VsanCapacityService"], [_generated_capacity_data_service__WEBPACK_IMPORTED_MODULE_22__["CapacityDataService"], _common_component_chart_capacity_bar_chart_bar_chart_service__WEBPACK_IMPORTED_MODULE_18__["BarChartService"], _common_service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_23__["SpaceEfficiencyService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["ɵangular_material_src_cdk_overlay_overlay_e"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["ɵangular_material_src_cdk_overlay_overlay_f"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OWL_DIALOG_SCROLL_STRATEGY"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OwlDialogService"], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OwlDialogService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]], ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OWL_DIALOG_SCROLL_STRATEGY"], [2, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OWL_DIALOG_DEFAULT_OPTIONS"]], [3, ng_pick_datetime_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_26__["OwlDialogService"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_date_time_picker_intl_service__WEBPACK_IMPORTED_MODULE_27__["OwlDateTimeIntl"], _common_component_datetime_picker_localize_picker_labels__WEBPACK_IMPORTED_MODULE_28__["LocalizePickerLabels"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_29__["OWL_DTPICKER_SCROLL_STRATEGY"], ng_pick_datetime_date_time_date_time_picker_component__WEBPACK_IMPORTED_MODULE_29__["OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_30__["DateTimeAdapter"], ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_31__["NativeDateTimeAdapter"], [[2, ng_pick_datetime_date_time_adapter_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_30__["OWL_DATE_TIME_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_33__["PerfDashboardSubEntitiesDataQueryService"], _support_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_33__["PerfDashboardSubEntitiesDataQueryService"], [_generated_vsan_perf_property_provider__WEBPACK_IMPORTED_MODULE_34__["VsanPerfPropertyProvider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_35__["PersistentStorageService"], _common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_35__["PersistentStorageService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_36__["PerformancePersistenceService"], _common_service_performance_persistence_service__WEBPACK_IMPORTED_MODULE_36__["PerformancePersistenceService"], [_common_service_browser_storage_service__WEBPACK_IMPORTED_MODULE_35__["PersistentStorageService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_37__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_39__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_39__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_40__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_40__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_41__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_41__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_42__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_42__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_43__["UnavailableViewModule"], _common_component_unavailable_view_unavailable_view_module__WEBPACK_IMPORTED_MODULE_43__["UnavailableViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_44__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_44__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_45__["VsanChartModule"], _common_component_chart_chart_module__WEBPACK_IMPORTED_MODULE_45__["VsanChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_48__["OwlDialogModule"], ng_pick_datetime_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_48__["OwlDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_49__["OwlDateTimeModule"], ng_pick_datetime_date_time_date_time_module__WEBPACK_IMPORTED_MODULE_49__["OwlDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_50__["NativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_50__["NativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_50__["OwlNativeDateTimeModule"], ng_pick_datetime_date_time_adapter_native_date_time_module__WEBPACK_IMPORTED_MODULE_50__["OwlNativeDateTimeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_51__["DatetimePickerModule"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_51__["DatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _support_support_perf_module__WEBPACK_IMPORTED_MODULE_52__["SupportPerfModule"], _support_support_perf_module__WEBPACK_IMPORTED_MODULE_52__["SupportPerfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _io_vm_metrics_dialog_module__WEBPACK_IMPORTED_MODULE_1__["IoVmMetricsDialogModule"], _io_vm_metrics_dialog_module__WEBPACK_IMPORTED_MODULE_1__["IoVmMetricsDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_37__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_44__["ROUTES"], function () { return [[{ path: "expandChart", component: _common_component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_53__["PerfChartDialogComponent"] }, { path: "setThreshold", component: _common_component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_54__["SetThresholdDialogComponent"] }], [{ path: "addTimeRange", component: _common_component_datetime_picker_time_range_picker_add_time_range_dialog_component__WEBPACK_IMPORTED_MODULE_55__["AddTimeRangeDialogComponent"] }, { path: "deleteTimeRange", component: _common_component_datetime_picker_time_range_picker_delete_range_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_56__["DeleteRangeConfirmDialogComponent"] }], [{ path: "", component: _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_57__["IoVmMetricsDialogComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_pick_datetime_date_time_adapter_date_time_format_class__WEBPACK_IMPORTED_MODULE_58__["OWL_DATE_TIME_FORMATS"], _common_component_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_51__["ɵ0"], [])]); });




/***/ }),

/***/ "wTAW":
/*!******************************************************************************!*\
  !*** ./src/app/vsan/vm/io-diagnostics/dialog/io-vm-metrics-dialog.module.ts ***!
  \******************************************************************************/
/*! exports provided: IoVmMetricsDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoVmMetricsDialogModule", function() { return IoVmMetricsDialogModule; });
/* harmony import */ var _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./io-vm-metrics-dialog.component */ "HSLg");

const routes = [
    {
        path: "",
        component: _io_vm_metrics_dialog_component__WEBPACK_IMPORTED_MODULE_0__["IoVmMetricsDialogComponent"],
    },
];
class IoVmMetricsDialogModule {
}



/***/ }),

/***/ "yhYM":
/*!*****************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-vsan2-disk-scsifw.data.ts ***!
  \*****************************************************************************/
/*! exports provided: PerfDashboardVsan2DiskScsifwData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardVsan2DiskScsifwData", function() { return PerfDashboardVsan2DiskScsifwData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardVsan2DiskScsifwData = /*@__PURE__*/ (() => {
    class PerfDashboardVsan2DiskScsifwData {
    }
    PerfDashboardVsan2DiskScsifwData.VSAN2_DISK_SCSIFW_CHARTS = [
        // Device IOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.vsan2-disk-scsifw.iopsDev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.iopsDevRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.iopsDevWrite.label")),
        ]),
        // Device Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.vsan2-disk-scsifw.throughputDev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputDevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.throughputDevRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputDevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.throughputDevWrite.label")),
        ]),
        // Device Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.vsan2-disk-scsifw.latencyDev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevGAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevGAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevDAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevDAvg.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
    ];
    return PerfDashboardVsan2DiskScsifwData;
})();



/***/ })

}]);
//# sourceMappingURL=135-es2015.js.map