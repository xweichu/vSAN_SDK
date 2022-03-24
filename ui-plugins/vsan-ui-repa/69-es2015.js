(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "+dSE":
/*!**********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-disk-group.data.ts ***!
  \**********************************************************************/
/*! exports provided: PerfDashboardDiskgroupData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardDiskgroupData", function() { return PerfDashboardDiskgroupData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardDiskgroupData = /*@__PURE__*/ (() => {
    class PerfDashboardDiskgroupData {
    }
    PerfDashboardDiskgroupData.LSOM_DISK_GROUP_CHARTS = [
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.iopsFrontend", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsFrontend.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsFrontend.iopsRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsFrontend.iopsWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRcRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsFrontend.iopsRcRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWbWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsFrontend.iopsWbWrite.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.throughputFrontend", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.throughputFrontend.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.throughputFrontend.throughputRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.throughputFrontend.throughputWrite.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.latencyFrontend", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyFrontend.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyFrontend.latencyAvgRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyFrontend.latencyAvgWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRcRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyFrontend.latencyRcRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWbWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyFrontend.latencyWbWrite.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.iopsOverhead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsOverhead.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRcWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsOverhead.iopsRcWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWbRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsOverhead.iopsWbRead.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.latencyOverhead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyOverhead.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRcWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyOverhead.latencyRcWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWbRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latencyOverhead.latencyWbRead.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // Disk Group Congestion
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.congestions", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("memCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.memCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("slabCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.slabCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ssdCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.ssdCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.iopsCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("logCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.logCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("compCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.congestions.compCongestion.label")),
        ]),
        // Disk Group IOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupIOPS.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupIOPS.iopsRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupIOPS.iopsWrite.label")),
        ], null, false),
        // Disk Group Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupThroughput.throughputRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupThroughput.throughputWrite.label")),
        ], null, false),
        // Disk Group Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupLatency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupLatency.latencyAvgRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.diskGroupLatency.latencyAvgWrite.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.rcHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.rcHitRate.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rcHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.rcHitRate.rcHitRate.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.evictions", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.evictions.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("warEvictions", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.evictions.warEvictions.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("quotaEvictions", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.evictions.quotaEvictions.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.wbFreePct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.wbFreePct.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("wbFreePct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.wbFreePct.wbFreePct.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.capacity", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.capacity.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("capacity", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.capacity.capacity.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("capacityUsed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.capacity.capacityUsed.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("capacityReserved", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.capacity.capacityReserved.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rcSize", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.capacity.rcSize.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("wbSize", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.capacity.wbSize.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.destage", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.destage.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ssdBytesDrained", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.destage.ssdBytesDrained.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("zeroBytesDrained", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.destage.zeroBytesDrained.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.oio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oioWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.oio.oioWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oioRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.oio.oioRecWrite.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.oioSize", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.oioSize.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oioWriteSize", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.oioSize.oioWriteSize.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oioRecWriteSize", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.oioSize.oioRecWriteSize.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.schedulerIOPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPct.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDelayPctSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPct.iopsDelayPctSched.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.schedulerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerLatency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDelaySched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerLatency.latencyDelaySched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueNS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerLatency.latencySchedQueueNS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueRec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerLatency.latencySchedQueueRec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueVM", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerLatency.latencySchedQueueVM.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueMeta", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerLatency.latencySchedQueueMeta.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.schedulerIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPS.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPS.iopsSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueNS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPS.iopsSchedQueueNS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueRec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPS.iopsSchedQueueRec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueVM", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPS.iopsSchedQueueVM.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueMeta", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerIOPS.iopsSchedQueueMeta.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.schedulerTput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerTput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerTput.throughputSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueNS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerTput.throughputSchedQueueNS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueRec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerTput.throughputSchedQueueRec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueVM", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerTput.throughputSchedQueueVM.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueMeta", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.schedulerTput.throughputSchedQueueMeta.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.iopsResync", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncReadPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncReadDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncReadRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncReadFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncWritePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncWriteDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncWriteRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.iopsResync.iopsResyncWriteFixComp.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.tputResync", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncReadPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncReadDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncReadRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncReadFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncWritePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncWriteDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncWriteRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.tputResync.tputResyncWriteFixComp.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.disk-group.latResync", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncReadPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncReadDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncReadRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncReadFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncWritePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncWriteDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncWriteRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.diskgroup.latResync.latResyncWriteFixComp.label")),
        ], null, false),
        // Space Efficiency Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("dedupedBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyThroughput.dedupedBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("hashedBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyThroughput.hashedBytes.label")),
        ], null, false),
        // Space Efficiency Run Time
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txnBuildTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.txnBuildTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txnWriteTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.txnWriteTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txnReplayTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.txnReplayTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("hashCalcTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.hashCalcTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("compressionTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.compressionTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("dataWriteTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyRunTime.dataWriteTime.label")),
        ], null, false),
        // Space Efficiency Metadata IO
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numHashmapRd", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.numHashmapRd.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numHashmapWrt", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.numHashmapWrt.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numBitmapRd", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.numBitmapRd.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numBitmapWrt", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.numBitmapWrt.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numXMapRd", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.numXMapRd.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numXMapWrt", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyMetadataIO.numXMapWrt.label")),
        ], null, false),
        // Space Efficiency Percentages
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyPct.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("dedupPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyPct.dedupPct.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("compressPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyPct.compressPct.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("dedupHmapHitRt", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyPct.dedupHmapHitRt.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("dedupXmapHitRt", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyPct.dedupXmapHitRt.label")),
        ], null, false),
        // Space Efficiency Capacity
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyCap", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyCap.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ddpTotalCap", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyCap.ddpTotalCap.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ddpFreeCap", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.spaceEfficiencyCap.ddpFreeCap.label")),
        ], null, false),
    ];
    return PerfDashboardDiskgroupData;
})();



/***/ }),

/***/ "1luW":
/*!************************************************************************!*\
  !*** ./src/app/vsan/support/view/advanced-perf-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: AdvancedPerfDashboard, SubEntityInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPerfDashboard", function() { return AdvancedPerfDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubEntityInfo", function() { return SubEntityInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _component_chart_performance_chart_zoom_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/chart/performance/chart-zoom-option */ "wAmQ");
/* harmony import */ var _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/chart/performance/graph-metrics.data */ "H1HU");
/* harmony import */ var _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/unavailable-view/unavailable-view-spec */ "Hg5h");
/* harmony import */ var _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @generated/entity-ref-type */ "OTki");
/* harmony import */ var _generated_perf_entity_state_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @generated/perf-entity-state-data */ "NDMj");
/* harmony import */ var _generated_perf_graph_metrics_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @generated/perf-graph-metrics-data */ "eBAK");
/* harmony import */ var _generated_perf_query_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @generated/perf-query-errors */ "oBnK");
/* harmony import */ var _generated_perf_query_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @generated/perf-query-spec */ "0ebl");
/* harmony import */ var _service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @service/flow/error-handler.decorator */ "7oHn");
/* harmony import */ var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @service/flow/error-message.decorator */ "puuD");
/* harmony import */ var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @service/flow/loader.decorator */ "8V30");
/* harmony import */ var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @service/flow/loading-indicator.decorator */ "2BwX");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @service/screen-reader-announcer.service */ "wnqS");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @util/logger */ "a0OL");
/* harmony import */ var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @util/vsan-dateteime-util */ "MAgC");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../model/perf-dashboard-view.data */ "3LVF");
/* harmony import */ var _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../model/perf-dashboard.data */ "WpOO");

/* Copyright 2018-2022 VMware, Inc. All rights reserved. -- VMware Confidential */




















let AdvancedPerfDashboard = /*@__PURE__*/ (() => {
    class AdvancedPerfDashboard {
        constructor(perfDataProvider, perfPersistenceService) {
            this.perfDataProvider = perfDataProvider;
            this.perfPersistenceService = perfPersistenceService;
            this.allowReloadWhenError = true;
            /**
             * Lists out all the dashboard links that should be out of the dropdown list
             * The link label should {category_label} | {dashboard_label}
             */
            this.outlineDashboardLinks = _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].PIVOTAL_DASHBOARDS;
            /**
             * Gets the categoried dashboard links which are displayed in the dropdown list
             * If any category has only one child item left,
             * then the child item replaces the category to avoid the secondary dropdown menu
             */
            this.dropdownDashboardCategories = _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].CATEGORIED_DASHBOARDS;
            this.isZoomed = false;
            this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.errorMessage = null;
            /**
             * The entity data user selected to view the detailed charts
             */
            this.currentPerfEntityStateData = null;
            this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_14__["ManagedObject"].contextObject;
            /**
             * This cache is for each entity, with it browser side doesn't need to calculate the graphMetric frequently
             */
            this.entityGraphsDataMap = new Map();
            /**
             * This cache is for each dashboard.
             * We cache the data so we don't have to send duplicated requests when user navigates between dashboards
             */
            this.entitiesStateDataMap = new Map();
            this.graphMap = new Map();
            this.getDisplayedGraphCacheKey = () => {
                return this.currentDashboardView.view + (this.pivotalOnly ? "_pivotal" : "_all");
            };
            this.getDashboardGraphs = (dashboardView) => {
                if (!dashboardView.children) {
                    return [];
                }
                /**
                 * when no entity is selected, we list the privotal graphs only;
                 * if user is viewing all the graphs of an entity, we should list all the graphs
                 */
                return this.pivotalOnly ? dashboardView.children.filter(graph => graph.isPivotalGraph) : dashboardView.children;
            };
            this.selectDashboard = (dashboardView, itemLabel) => {
                if (this.currentDashboardView && this.currentDashboardView.view === dashboardView.view) {
                    return;
                }
                this.currentPerfEntityStateData = null;
                this.currentDashboardView = dashboardView;
                this.currentDashboardLabel = itemLabel;
                this.queryDashboardData(dashboardView.view, this.currentTimeRange);
            };
            /**
             * For domclient and domcompmgr we need to cover both cluster and hosts level,
             * because cluster and hosts are different entity id, so we need an array type
             */
            this.getSelectedPerfEntityTypes = (selectedDashboard) => {
                switch (selectedDashboard) {
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DOMCLIENT:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CLUSTER_DOMCLIENT(), _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_DOMCLIENT()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DOMOWNER:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_DOMOWNER()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DOMCOMPMGR:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CLUSTER_DOMCOMPMGR(), _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_DOMCOMPMGR()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].TCPIP: // This entry shares the same entity type with vnic
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].VNIC:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].VSAN_VNIC_NET()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CACHEDISK:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CACHE_DISK()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CAPACITYDISK:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CAPACITY_DISK()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DISKGROUP:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].DISK_GROUP()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].SPARSEHOST:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_VSANSPARSE()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DDHDISK:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].DDH_DISK_STATS()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].PNIC:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].VSAN_PNIC_NET()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].HOSTNETWORK:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].VSAN_HOST_NET()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CLOMHOST:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CLOM_HOST_STATS()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CLOMDISK:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CLOM_DISK_STATS()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CMMDS:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CMMDS()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].NET:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CMMDS_NET()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].WORKLOAD:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CMMDS_WORKLOADSTATS()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].HOSTMEMORY:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_MEMORY_SLAB(), _generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_MEMORY_HEAP()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].SYSMEMORY:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].SYSTEM_MEM()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].VSANDISTRIBUTION:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].VSAN_DISTRIBUTION()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DOMCOMPSCHEDULER:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].DISK_GROUP()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DOMWORLDCPU:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].DOM_WORLD_CPU()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].HOSTCPU:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].HOST_CPU()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].VSANCPU:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].VSAN_CPU()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].LSOMWORLDCPU:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].LSOM_WORLD_CPU()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CLUSTERRESYNC:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].CLUSTER_RESYNC()];
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].VSANMEMORY:
                        return [_generated_entity_ref_type__WEBPACK_IMPORTED_MODULE_5__["EntityRefType"].VSAN_MEMORY()];
                    default:
                        throw new Error("Unsupported dashboard view");
                }
            };
            this.createQuerySpecs = (entityTypes, timeRange) => {
                return entityTypes.map(entityType => _generated_perf_query_spec__WEBPACK_IMPORTED_MODULE_9__["PerfQuerySpec"].Factory.create(entityType, "*", // wild card query, * to match all the entityIds
                null, /* group:string, not used*/ timeRange.from, timeRange.to, null, /* interval:number , not used*/ null /* labels:string[], not used*/));
            };
            this.aggregateEntitiesGraphData = (perfEntitiesStateData) => {
                return this.managedObjectExInfo
                    .map(serverObj => {
                    const entityStateData = _generated_perf_entity_state_data__WEBPACK_IMPORTED_MODULE_6__["PerfEntityStateData"].Factory.create([], [], null, "");
                    perfEntitiesStateData.filter(entityData => entityData.entityRefId.indexOf(serverObj.vsanUuid) !== -1)
                        .forEach(entityData => {
                        entityStateData.entityRefId =
                            entityData.entityRefId.split(AdvancedPerfDashboard.ENTITY_REFID_SUBKEY_SEPERATOR)[0];
                        entityStateData.timeStamps = entityData.timeStamps;
                        entityStateData.metricsSeries.push(...entityData.metricsSeries.map(series => {
                            return _generated_perf_graph_metrics_data__WEBPACK_IMPORTED_MODULE_7__["PerfGraphMetricsData"].Factory.create(series.values, series.threshold, series.key, entityData.entityRefId.split(AdvancedPerfDashboard.ENTITY_REFID_SUBKEY_SEPERATOR)[1]);
                        }));
                    });
                    return entityStateData;
                });
            };
            this.getGraphsByEntityData = (perfData) => {
                const cacheKey = this.getGraphDataCacheKey(perfData.entityRefId);
                if (!this.entityGraphsDataMap[cacheKey]) {
                    const graphs = this.displayedGraphs;
                    const seriesKeys = perfData.metricsSeries.map(series => series.key);
                    const noDataSeries = [];
                    // We should do this for host level data only, otherwise these graphs are displayed at cluster level
                    const clusterObj = this.managedObjectExInfo.find(serverObj => serverObj.isCluster);
                    if (!clusterObj || cacheKey.indexOf(clusterObj.vsanUuid) === -1) {
                        // Find the graph metric keys which don't have values in perfData
                        graphs.forEach(graph => {
                            noDataSeries.push(...graph.metrics.map(metric => {
                                if (seriesKeys.indexOf(metric.key) === -1) {
                                    return metric;
                                }
                            }).filter(key => key));
                        });
                        // Fill these metric series values with null otherwise these graph won't be displayed
                        noDataSeries.forEach(metric => {
                            let aggregated;
                            if (metric.aggregatedBy && metric.aggregatedBy.length > 0) {
                                // calculate aggregated value when metric is should be aggregated from other metrics
                                perfData.metricsSeries.forEach(series => {
                                    if (metric.aggregatedBy.indexOf(series.key) !== -1) {
                                        if (!aggregated) {
                                            aggregated = series.values.slice();
                                        }
                                        else {
                                            series.values.forEach((val, index) => {
                                                // if both val are null, the aggregated result remains unchanged.
                                                // otherwise sum them as the new value
                                                if (aggregated[index] !== null || val !== null) {
                                                    aggregated[index] = (aggregated[index] || 0) + (val || 0);
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                            else {
                                aggregated = perfData.timeStamps.map(() => null);
                            }
                            perfData.metricsSeries.push(_generated_perf_graph_metrics_data__WEBPACK_IMPORTED_MODULE_7__["PerfGraphMetricsData"].Factory.create(aggregated, null, metric.key, null));
                        });
                    }
                    const graphsData = [new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_3__["GraphMetric"](perfData, graphs, _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_3__["GraphMetric"].ENTITY_REF_ID_TOKEN_SEPARATOR + perfData.entityRefId)];
                    this.entityGraphsDataMap[cacheKey] = graphsData;
                    return graphsData;
                }
                return this.entityGraphsDataMap[cacheKey];
            };
            this.getGraphDataCacheKey = (vsanUuid) => {
                return this.currentDashboardView.view + vsanUuid + (this.pivotalOnly ? "_pivotal" : "_all");
            };
            this.getPerfStateData = (serverObjectInfo) => {
                return this.perfEntitiesStateData
                    .find(entityData => entityData.entityRefId.indexOf(serverObjectInfo.vsanUuid) !== -1);
            };
            this.getEntityDataRelatedServerObjectInfo = (perfData) => {
                return this.managedObjectExInfo
                    .find(mangedObjectInfo => perfData.entityRefId.indexOf(mangedObjectInfo.vsanUuid) !== -1);
            };
            /**
             * Accepts the chart zoom options when user selects a range on the chart
             */
            this.onChartZoomIn = (opt) => {
                this.isZoomed = !opt.isZoomOut;
                this.zoomOption = opt;
            };
            /**
             * Reset the chart zoom level to default
             */
            this.onZoomOut = () => {
                this.isZoomed = false;
                const zoomOut = new _component_chart_performance_chart_zoom_option__WEBPACK_IMPORTED_MODULE_2__["ChartZoomOption"]();
                zoomOut.isZoomOut = true;
                this.zoomOption = zoomOut;
            };
            this.showAllCharts = (serverObjectInfo) => {
                const perfData = this.getPerfStateData(serverObjectInfo);
                this.currentPerfEntityStateData = perfData;
                this.resetSelectedEntityCache(perfData);
                this.selectedPerfEntityName = serverObjectInfo.name;
                this.selectedPerfEntityIcon = serverObjectInfo.icon;
                this.selectedPerfEntityParentHost = null;
                this.isZoomed = false;
            };
            this.showLessCharts = () => {
                this.currentPerfEntityStateData = null;
                this.selectedPerfEntityName = null;
                this.selectedPerfEntityIcon = null;
                this.selectedPerfEntityParentHost = null;
            };
            this.resetSelectedEntityCache = (perfData) => {
                // reset the cached graph config before redrawing the graphs
                const cacheKey = this.getGraphDataCacheKey(this.getEntityDataRelatedServerObjectInfo(perfData).vsanUuid);
                this.entityGraphsDataMap[cacheKey] = null;
            };
            this.isGraphDisplayed = (graphId) => {
                return this.displayedGraphs.some(graph => graph.id === graphId);
            };
            this.toggleGraphDisplay = (graph) => {
                if (this.isGraphDisplayed(graph.id)) {
                    // remove this chart from the displayed graphs list
                    this.displayedGraphs = this.displayedGraphs.filter(displayedGraph => graph.id !== displayedGraph.id);
                }
                else {
                    // add the chart into the displayed graphs list
                    this.displayedGraphs = this.getDashboardGraphs(this.currentDashboardView)
                        .filter(displayedGraph => this.isGraphDisplayed(displayedGraph.id) || graph.id === displayedGraph.id);
                }
                // reset the graph data cache
                this.entityGraphsDataMap = new Map();
            };
            this.onTimeRangeChange = (timeRange, isOnInit) => {
                // View might not be ready yet.
                if (!this.currentDashboardView || (isOnInit && !this.isPersistedSelectionInitialized)) {
                    return;
                }
                // clear the cached data so the charts can be refreshed
                this.entityGraphsDataMap = new Map();
                this.perfEntitiesStateData = null;
                this.entitiesStateDataMap[this.currentDashboardView.view] = null;
                this.currentTimeRange = timeRange;
                this.queryDashboardData(this.currentDashboardView.view, timeRange);
                if (!isOnInit) {
                    this.perfPersistenceService.saveSelection(timeRange, this.timeRangePickerComponent.currentPickerState);
                }
            };
            this.isNestedDashboard = (selectedDashboard) => {
                return _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].NESTED_DASHBOARDS.indexOf(selectedDashboard) !== -1;
            };
            this.onSubEntitySelected = (data) => {
                this.selectedPerfEntityIcon = data.entityIcon;
                this.selectedPerfEntityName = data.entityName;
                this.currentPerfEntityStateData = data.perfData;
                this.selectedPerfEntityParentHost = data.parentHost;
            };
        }
        get displayedGraphs() {
            const cacheKey = this.getDisplayedGraphCacheKey();
            if (!this.graphMap[cacheKey]) {
                this.graphMap[cacheKey] = this.pivotalOnly ?
                    this.currentDashboardView.children.filter(graph => graph.isPivotalGraph) :
                    this.currentDashboardView.children;
            }
            return this.graphMap[cacheKey];
        }
        set displayedGraphs(graphs) {
            const cacheKey = this.getDisplayedGraphCacheKey();
            this.graphMap[cacheKey] = graphs;
        }
        ngOnInit() {
            var _a;
            this.outlineDashboardLinks = this.isVsanMaxEnabled
                ? _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].getVsanMaxDashboardViews(_model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].PIVOTAL_DASHBOARDS)
                : _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].PIVOTAL_DASHBOARDS;
            this.dropdownDashboardCategories = this.isVsanMaxEnabled
                ? _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].getVsanMaxDashboardCategories(_model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].CATEGORIED_DASHBOARDS)
                : _model_perf_dashboard_data__WEBPACK_IMPORTED_MODULE_20__["VsanPerfDashboardCategory"].CATEGORIED_DASHBOARDS;
            this.preselectSubEntityName = (_a = this.preselectData) === null || _a === void 0 ? void 0 : _a.objectIdentifier;
            const selectedView = this.preselectData
                ? this.preselectData.dashboardView
                : _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].DOMCLIENT;
            this.currentDashboardView = this.getDashboardView(selectedView);
            this.currentDashboardLabel = this.currentDashboardView.label;
        }
        ngAfterViewInit() {
            this.initializePersistedSelections();
            this.queryDashboardData(this.currentDashboardView.view, this.currentTimeRange);
        }
        getDashboardView(view) {
            const mainDashboardView = this.outlineDashboardLinks.find(dashboard => dashboard.view === view);
            return mainDashboardView
                ? mainDashboardView
                : this.getCategoryDashboardView(view);
        }
        getCategoryDashboardView(view) {
            const matchingDashboardViewPredicate = dashboard => dashboard.view === view;
            return this.dropdownDashboardCategories
                .find(category => category.children.some(matchingDashboardViewPredicate))
                .children.find(matchingDashboardViewPredicate);
        }
        initializePersistedSelections() {
            // Try to get persisted selection.
            const persistedSelection = this.perfPersistenceService.getPersistedSelection();
            /*
             * If there is persisted time range selection, then wait for time-range-picker component
             * initialization and pass the cached range into it.
            * */
            if (persistedSelection != null) {
                const timeRange = persistedSelection.timeRange;
                const state = persistedSelection.state;
                if (this.timeRangePickerComponent.currentTimeRange.from !== timeRange.from ||
                    this.timeRangePickerComponent.currentTimeRange.to !== timeRange.to) {
                    this.timeRangePickerComponent.setTimerange(timeRange, state);
                    this.currentTimeRange = timeRange;
                }
            }
        }
        get isPersistedSelectionInitialized() {
            const persistedSelection = this.perfPersistenceService.getPersistedSelection();
            // If there is no persisted selection. it's replaced by view's default one
            if (persistedSelection == null) {
                return true;
            }
            return this.currentTimeRange === persistedSelection.timeRange;
        }
        queryDashboardData(selectedDashboard, timeRange) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!timeRange) {
                    return;
                }
                this.perfEntitiesStateData = this.entitiesStateDataMap[selectedDashboard];
                if (this.perfEntitiesStateData) {
                    return;
                }
                const entityTypes = this.getSelectedPerfEntityTypes(selectedDashboard);
                const querySpecs = this.createQuerySpecs(entityTypes, timeRange);
                const results = yield this.perfDataProvider.getEntityPerfStateForWildcards(this.clusterRef, querySpecs);
                if (this.isNestedDashboard(this.currentDashboardView.view)) {
                    this.perfEntitiesStateData = results;
                }
                else {
                    this.perfEntitiesStateData = this.aggregateEntitiesGraphData(results);
                }
                this.entitiesStateDataMap[selectedDashboard] = this.perfEntitiesStateData;
            });
        }
        get noDataView() {
            if (!this.currentDashboardView) {
                return null;
            }
            if (!this.hasGraphMetricsData) {
                const isRecentTimeRange = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_17__["VsanDateTimeUtils"].isRecentTimeRange(this.currentTimeRange);
                if (this.currentDashboardView.view === _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardView"].CMMDS && !this.verboseModeEnabled) {
                    return isRecentTimeRange ? _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA :
                        _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA_FOR_SELECTED_PERIOD;
                }
                return isRecentTimeRange ? _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_VIEW_NO_DATA :
                    _component_unavailable_view_unavailable_view_spec__WEBPACK_IMPORTED_MODULE_4__["UnavailableViewSpec"].PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD;
            }
            return null;
        }
        /**
         * Use this method to check if there is no metrics at all
         */
        get hasGraphMetricsData() {
            return this.perfEntitiesStateData &&
                this.perfEntitiesStateData.some(entityData => entityData.timeStamps.length > 0);
        }
        get pivotalOnly() {
            return this.currentPerfEntityStateData === null;
        }
        handleError(err) {
            _util_logger__WEBPACK_IMPORTED_MODULE_16__["Logger"].error(err);
            this.perfEntitiesStateData = [];
            if (err.message === _generated_perf_query_errors__WEBPACK_IMPORTED_MODULE_8__["PerfQueryErrors"].INVALID_ENTITY_REF_ID_KEY()) {
                this.allowReloadWhenError = false;
                this.errorMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.service.chart.unsupportedEntityType.error");
            }
            else {
                this.allowReloadWhenError = true;
                this.errorMessage = _util_vsan_util__WEBPACK_IMPORTED_MODULE_18__["VsanUiUtils"].getString("vsan.perf.service.chart.common.error");
            }
        }
        get graphsForClusterAndHosts() {
            const clusterObj = this.managedObjectExInfo.find(serverObj => serverObj.isCluster);
            if (!clusterObj) {
                return [];
            }
            const clusterStateData = this.getPerfStateData(clusterObj);
            if (!clusterStateData) {
                return [];
            }
            const graphMetrics = new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_3__["GraphMetric"](clusterStateData, this.getDashboardGraphs(this.currentDashboardView), _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_3__["GraphMetric"].ENTITY_REF_ID_TOKEN_SEPARATOR + clusterStateData.entityRefId);
            return graphMetrics.graphs;
        }
        get graphsForHostsOnly() {
            const clusterGraphs = this.graphsForClusterAndHosts;
            return this.getDashboardGraphs(this.currentDashboardView)
                .filter(graph => !clusterGraphs.find(clusterGraph => clusterGraph.id === graph.id));
        }
        get graphsForSelectedEntity() {
            const serverObj = this.managedObjectExInfo
                .find(obj => this.currentPerfEntityStateData.entityRefId.indexOf(obj.vsanUuid) > -1);
            const isClusterSelected = serverObj && serverObj.isCluster;
            if (isClusterSelected) {
                return this.graphsForClusterAndHosts;
            }
            return this.getDashboardGraphs(this.currentDashboardView);
        }
    }
    AdvancedPerfDashboard.ENTITY_REFID_SUBKEY_SEPERATOR = "|";
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_13__["LoadingIndicator"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AdvancedPerfDashboard.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_11__["ErrorMessage"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], AdvancedPerfDashboard.prototype, "errorMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_12__["Loader"])({ srMessage: "vsan.perf.advanced.dashboards.dropdown.label", srMessageType: _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_15__["SrMessageType"].DATA }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], AdvancedPerfDashboard.prototype, "queryDashboardData", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_10__["ErrorHandler"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Error]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AdvancedPerfDashboard.prototype, "handleError", null);
    return AdvancedPerfDashboard;
})();
class SubEntityInfo {
    constructor(parentHost, entityIcon, entityName, perfData) {
        this.parentHost = parentHost;
        this.entityIcon = entityIcon;
        this.entityName = entityName;
        this.perfData = perfData;
    }
}



/***/ }),

/***/ "3AON":
/*!****************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-pnic.data.ts ***!
  \****************************************************************/
/*! exports provided: PerfDashboardPnicData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardPnicData", function() { return PerfDashboardPnicData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardPnicData = /*@__PURE__*/ (() => {
    class PerfDashboardPnicData {
    }
    PerfDashboardPnicData.PNIC_CHARTS = [
        // Packets/sec chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.pnic.packets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.rxPackets.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.txPackets.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.pnic.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.rxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.txThroughput.label")),
        ]),
        // Error Rate (per-mille)
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.pnic.loss.rate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.pnic.errorRate.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxPacketsLossRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.pnic.errorRate.rxPacketsLossRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txPacketsLossRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.pnic.errorRate.txPacketsLossRate.label")),
        ]),
        // vSwitch Port Drops (per-mille)
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.pnic.packet.drops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("portRxDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.portRxDrops.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("portTxDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.portTxDrops.label")),
        ]),
        // IO Chain Drops (per-mille)
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.pnic.ioChainDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.io.chain.drops.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioChainRxdrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.hostnet.ioChainRxdrops.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioChainTxdrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.hostnet.ioChainTxdrops.label")),
        ], null, false),
        // Flow Control (per-mille)
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.pnic.pauseCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.pnic.pauseCount.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("pauseCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.pnic.metrics.pauseCount.label")),
        ], null, false),
    ];
    return PerfDashboardPnicData;
})();



/***/ }),

/***/ "3LVF":
/*!****************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-view.data.ts ***!
  \****************************************************************/
/*! exports provided: PerfDashboardView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardView", function() { return PerfDashboardView; });
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */
var PerfDashboardView = /*@__PURE__*/ (function (PerfDashboardView) {
    PerfDashboardView[PerfDashboardView["DOMCLIENT"] = 0] = "DOMCLIENT";
    PerfDashboardView[PerfDashboardView["DOMOWNER"] = 1] = "DOMOWNER";
    PerfDashboardView[PerfDashboardView["DOMCOMPMGR"] = 2] = "DOMCOMPMGR";
    PerfDashboardView[PerfDashboardView["DOMCOMPSCHEDULER"] = 3] = "DOMCOMPSCHEDULER";
    PerfDashboardView[PerfDashboardView["CACHEDISK"] = 4] = "CACHEDISK";
    PerfDashboardView[PerfDashboardView["CAPACITYDISK"] = 5] = "CAPACITYDISK";
    PerfDashboardView[PerfDashboardView["DISKGROUP"] = 6] = "DISKGROUP";
    PerfDashboardView[PerfDashboardView["DDHDISK"] = 7] = "DDHDISK";
    PerfDashboardView[PerfDashboardView["SPARSEHOST"] = 8] = "SPARSEHOST";
    PerfDashboardView[PerfDashboardView["PNIC"] = 9] = "PNIC";
    PerfDashboardView[PerfDashboardView["VNIC"] = 10] = "VNIC";
    PerfDashboardView[PerfDashboardView["TCPIP"] = 11] = "TCPIP";
    PerfDashboardView[PerfDashboardView["HOSTNETWORK"] = 12] = "HOSTNETWORK";
    PerfDashboardView[PerfDashboardView["CLOMHOST"] = 13] = "CLOMHOST";
    PerfDashboardView[PerfDashboardView["CLOMDISK"] = 14] = "CLOMDISK";
    PerfDashboardView[PerfDashboardView["HOSTMEMORY"] = 15] = "HOSTMEMORY";
    PerfDashboardView[PerfDashboardView["SYSMEMORY"] = 16] = "SYSMEMORY";
    PerfDashboardView[PerfDashboardView["VSANMEMORY"] = 17] = "VSANMEMORY";
    PerfDashboardView[PerfDashboardView["NET"] = 18] = "NET";
    PerfDashboardView[PerfDashboardView["WORKLOAD"] = 19] = "WORKLOAD";
    PerfDashboardView[PerfDashboardView["DOMWORLDCPU"] = 20] = "DOMWORLDCPU";
    PerfDashboardView[PerfDashboardView["LSOMWORLDCPU"] = 21] = "LSOMWORLDCPU";
    PerfDashboardView[PerfDashboardView["HOSTCPU"] = 22] = "HOSTCPU";
    PerfDashboardView[PerfDashboardView["VSANCPU"] = 23] = "VSANCPU";
    PerfDashboardView[PerfDashboardView["VSANDISTRIBUTION"] = 24] = "VSANDISTRIBUTION";
    PerfDashboardView[PerfDashboardView["CMMDS"] = 25] = "CMMDS";
    PerfDashboardView[PerfDashboardView["CLUSTERRESYNC"] = 26] = "CLUSTERRESYNC";
    PerfDashboardView[PerfDashboardView["DISK"] = 27] = "DISK";
    return PerfDashboardView;
})({});



/***/ }),

/***/ "3iwT":
/*!****************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-vnic.data.ts ***!
  \****************************************************************/
/*! exports provided: PerfDashboardVnicData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardVnicData", function() { return PerfDashboardVnicData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardVnicData = /*@__PURE__*/ (() => {
    class PerfDashboardVnicData {
    }
    PerfDashboardVnicData.VNIC_CHARTS = [
        // Packets/sec chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.vnic.packets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.rxPackets.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.txPackets.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.vnic.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.rxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.txThroughput.label")),
        ]),
        // Discards Rate (per-mille) chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.vnic.loss.rate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxPacketsLossRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.rxPacketsLossRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txPacketsLossRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.txPacketsLossRate.label")),
        ]),
        // vSwitch Port Drops (per-mille) chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.vnic.packet.drops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("portRxDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.portRxDrops.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("portTxDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.portTxDrops.label")),
        ]),
        // IO Chain Drops (per-mille)
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.vnic.ioChainDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.io.chain.drops.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioChainRxdrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.hostnet.ioChainRxdrops.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioChainTxdrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.hostnet.ioChainTxdrops.label")),
        ], null, false),
    ];
    return PerfDashboardVnicData;
})();



/***/ }),

/***/ "6ArB":
/*!********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-host-net.data.ts ***!
  \********************************************************************/
/*! exports provided: PerfDashboardHostNetworkData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardHostNetworkData", function() { return PerfDashboardHostNetworkData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardHostNetworkData = /*@__PURE__*/ (() => {
    class PerfDashboardHostNetworkData {
    }
    PerfDashboardHostNetworkData.HOST_NETWORK_CHARTS = [
        // Packets/sec chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.packets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.rxPackets.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.txPackets.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.rxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.txThroughput.label")),
        ]),
        // Discards Rate (per-mille) chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.loss.rate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxPacketsLossRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.rxPacketsLossRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txPacketsLossRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.txPacketsLossRate.label")),
        ]),
        // vSwitch Port Drops
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.vswitchDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("portRxDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.portRxDrops.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("portTxDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packet.drops.portTxDrops.label")),
        ]),
        // IO Chain Drops
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.ioChainDrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.io.chain.drops.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioChainRxdrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.hostnet.ioChainRxdrops.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioChainTxdrops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.hostnet.ioChainTxdrops.label")),
        ]),
    ];
    return PerfDashboardHostNetworkData;
})();



/***/ }),

/***/ "6fco":
/*!*********************************************************************************************!*\
  !*** ./src/app/vsan/support/view/advanced-perf-sub-entity-dashboard.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! exports provided: RenderType_AdvancedPerfSubentityDashboard, View_AdvancedPerfSubentityDashboard_0, View_AdvancedPerfSubentityDashboard_Host_0, AdvancedPerfSubentityDashboardNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedPerfSubentityDashboard", function() { return RenderType_AdvancedPerfSubentityDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedPerfSubentityDashboard_0", function() { return View_AdvancedPerfSubentityDashboard_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedPerfSubentityDashboard_Host_0", function() { return View_AdvancedPerfSubentityDashboard_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPerfSubentityDashboardNgFactory", function() { return AdvancedPerfSubentityDashboardNgFactory; });
/* harmony import */ var _advanced_perf_sub_entity_dashboard_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-perf-sub-entity-dashboard.scss.shim.ngstyle */ "cG15");
/* harmony import */ var _advanced_perf_dashboard_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-perf-dashboard.scss.shim.ngstyle */ "CazJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/directive/icon-title/icon-title.directive */ "wLY2");
/* harmony import */ var _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-charts-container.component.ngfactory */ "b7pI");
/* harmony import */ var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/util/reference-watcher */ "gyvr");
/* harmony import */ var _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-charts-container.component */ "RSFA");
/* harmony import */ var _common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/util/performance/perf-orchestrator-service */ "5xE9");
/* harmony import */ var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/pipe/LocalizationPipe */ "jOVY");
/* harmony import */ var _advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-perf-sub-entity-dashboard.component */ "6wxb");
/* harmony import */ var _util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/perf-dashboard-sub-entities-data-query.service */ "rcCH");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */













var styles_AdvancedPerfSubentityDashboard = [_advanced_perf_sub_entity_dashboard_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _advanced_perf_dashboard_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_AdvancedPerfSubentityDashboard = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({ encapsulation: 0, styles: styles_AdvancedPerfSubentityDashboard, data: {} });

function View_AdvancedPerfSubentityDashboard_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 0, "div", [["class", "spinner central-spinner"]], null, null, null, null, null))], null, null); }
function View_AdvancedPerfSubentityDashboard_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                     "]))], null, null); }
function View_AdvancedPerfSubentityDashboard_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 2, null, View_AdvancedPerfSubentityDashboard_7)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](4, { host: 0, graphMetric: 1, i: 2, j: 3 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.parent.parent.context.$implicit, _v.parent.context.$implicit, _v.parent.parent.context.index, _v.parent.context.index); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent.parent.parent.parent.parent, 8); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_AdvancedPerfSubentityDashboard_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "]))], null, null); }
function View_AdvancedPerfSubentityDashboard_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 9, "div", [["class", "sub-entity-dashboard nav-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 2, null, View_AdvancedPerfSubentityDashboard_8)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](10, { host: 0, graphMetric: 1, i: 2, j: 3 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sub-entity-dashboard nav-content"; var currVal_1 = (_co.isNested ? "nested-dashboard" : ""); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = (_co.displayEntityInfo === _co.displayEntityInfoType.ONLY_SUB_ENTITIES); _ck(_v, 6, 0, currVal_2); var currVal_3 = _ck(_v, 10, 0, _v.parent.context.$implicit, _v.context.$implicit, _v.parent.context.index, _v.context.index); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent.parent.parent.parent, 10); _ck(_v, 9, 0, currVal_3, currVal_4); }, null); }
function View_AdvancedPerfSubentityDashboard_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 7, "nav", [["class", "sidenav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 4, "section", [["class", "nav-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_5)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.graphsDataMap[_v.context.$implicit.hostName]; _ck(_v, 5, 0, currVal_0); }, null); }
function View_AdvancedPerfSubentityDashboard_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_4)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hostSubEntities; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AdvancedPerfSubentityDashboard_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "]))], null, null); }
function View_AdvancedPerfSubentityDashboard_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "]))], null, null); }
function View_AdvancedPerfSubentityDashboard_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 13, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 10, "div", [["class", "sub-entity-dashboard nav-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 2, null, View_AdvancedPerfSubentityDashboard_12)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](7, { host: 0, graphMetric: 1, i: 2, j: 3 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 2, null, View_AdvancedPerfSubentityDashboard_13)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](11, { host: 0, graphMetric: 1, i: 2, j: 3 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "sub-entity-dashboard nav-content"; var currVal_1 = (_co.isNested ? "nested-dashboard" : ""); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 7, 0, _v.parent.context.$implicit, _v.context.$implicit, _v.parent.context.index, _v.context.index); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent.parent.parent.parent, 8); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = _ck(_v, 11, 0, _v.parent.context.$implicit, _v.context.$implicit, _v.parent.context.index, _v.context.index); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent.parent.parent.parent, 10); _ck(_v, 10, 0, currVal_4, currVal_5); }, null); }
function View_AdvancedPerfSubentityDashboard_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 20, "nav", [["class", "sidenav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 17, "section", [["class", "nav-group collapsible"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, null, 9, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], { forAttr: [0, "forAttr"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, null, 2, "clr-icon", [["class", "is-info"], ["shape", "vsphere-icon-host"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_5__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, null, 1, "span", [["class", "entity-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_11)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵinlineInterpolate"](1, "check-", _v.context.index, ""); _ck(_v, 7, 0, currVal_2); var currVal_4 = _co.graphsDataMap[_v.context.$implicit.hostName]; _ck(_v, 18, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵinlineInterpolate"](1, "check-", _v.context.index, ""); _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7).forAttr; _ck(_v, 6, 0, currVal_1); var currVal_3 = _v.context.$implicit.hostName; _ck(_v, 14, 0, currVal_3); }); }
function View_AdvancedPerfSubentityDashboard_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_10)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hostSubEntities; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AdvancedPerfSubentityDashboard_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_9)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.displayEntityInfo !== _co.displayEntityInfoType.ALL); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.displayEntityInfo === _co.displayEntityInfoType.ALL); _ck(_v, 6, 0, currVal_1); }, null); }
function View_AdvancedPerfSubentityDashboard_15(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-sm btn-link"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showAllCharts(_v.parent.context.host, _v.parent.context.graphMetric.metrics, _co.getEntityName(_v.parent.context.host, _v.parent.context.j)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵinlineInterpolate"](2, "show-all-btn-", _v.parent.context.i, "-", _v.parent.context.j, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent.parent, 0), "vsan.perf.advanced.dashboards.entity.graphs.showAll.label")); _ck(_v, 1, 0, currVal_1); });
}
function View_AdvancedPerfSubentityDashboard_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 11, "div", [["class", "sub-entity-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, null, 2, "clr-icon", [["class", "is-info"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_5__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, null, 1, "span", [["class", "entity-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_15)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.showAllSupported; _ck(_v, 11, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getEntityIcon(); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.getEntityName(_v.context.host, _v.context.j); _ck(_v, 8, 0, currVal_1); }); }
function View_AdvancedPerfSubentityDashboard_17(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 4, "vsan-perf-charts-container", [], [[8, "id", 0]], [[null, "zoom"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("zoom" === en)) {
                var pd_0 = (_co.zoom.emit($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PerfChartsContainerComponent_0"], _common_component_chart_performance_perf_charts_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PerfChartsContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 4308992, null, 0, _common_component_chart_performance_perf_charts_container_component__WEBPACK_IMPORTED_MODULE_8__["PerfChartsContainerComponent"], [_common_util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_9__["PerfOrchestratorService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_7__["ReferenceWatcher"]], { isShowAllLinkVisible: [0, "isShowAllLinkVisible"], looseXAxisLabel: [1, "looseXAxisLabel"], isZoomButtonVisible: [2, "isZoomButtonVisible"], isShowGraphDescription: [3, "isShowGraphDescription"], zoomOutOptions: [4, "zoomOutOptions"], compactMode: [5, "compactMode"], data: [6, "data"] }, { zoom: "zoom" }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = false; var currVal_2 = true; var currVal_3 = false; var currVal_4 = false; var currVal_5 = _co.zoomOption; var currVal_6 = _co.compactMode; var currVal_7 = _ck(_v, 3, 0, _v.parent.context.graphMetric); _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵinlineInterpolate"](3, "charts-container-", _v.parent.context.host.hostName, "-", _v.parent.context.i, "-", _v.parent.context.j, ""); _ck(_v, 0, 0, currVal_0); });
}
function View_AdvancedPerfSubentityDashboard_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_17)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = _v.context.graphMetric; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AdvancedPerfSubentityDashboard_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_AdvancedPerfSubentityDashboard_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](0, [["subEntityInfo", 2]], null, 0, null, View_AdvancedPerfSubentityDashboard_14)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](0, [["graphics", 2]], null, 0, null, View_AdvancedPerfSubentityDashboard_16))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loading; _ck(_v, 3, 0, currVal_0); var currVal_1 = !_co.loading; _ck(_v, 6, 0, currVal_1); }, null); }
function View_AdvancedPerfSubentityDashboard_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "vsan-advanced-perf-sub-entity-dashboard", [], null, null, null, View_AdvancedPerfSubentityDashboard_0, RenderType_AdvancedPerfSubentityDashboard)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdvancedPerfSubentityDashboard"], [_util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_12__["PerfDashboardSubEntitiesDataQueryService"]], null, null)], null, null); }
var AdvancedPerfSubentityDashboardNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("vsan-advanced-perf-sub-entity-dashboard", _advanced_perf_sub_entity_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdvancedPerfSubentityDashboard"], View_AdvancedPerfSubentityDashboard_Host_0, { perfEntitiesStateData: "perfEntitiesStateData", displayedGraphs: "displayedGraphs", zoomOption: "zoomOption", clusterRef: "clusterRef", showAllSupported: "showAllSupported", filterObjects: "filterObjects", filterMetrics: "filterMetrics", preselectSubEntityName: "preselectSubEntityName", displayEntityInfo: "displayEntityInfo", isNested: "isNested", compactMode: "compactMode", view: "view" }, { preselectSubEntityNameChange: "preselectSubEntityNameChange", onError: "onError", zoom: "zoom", entitySelected: "entitySelected" }, []);




/***/ }),

/***/ "6wxb":
/*!***********************************************************************************!*\
  !*** ./src/app/vsan/support/view/advanced-perf-sub-entity-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdvancedPerfSubentityDashboard, DisplayEntityInfoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPerfSubentityDashboard", function() { return AdvancedPerfSubentityDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayEntityInfoType", function() { return DisplayEntityInfoType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/chart/performance/graph-metrics.data */ "H1HU");
/* harmony import */ var _advanced_perf_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-perf-dashboard.component */ "1luW");
/* harmony import */ var _util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/perf-dashboard-sub-entities-data-query.service */ "rcCH");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/managed-object */ "sNBm");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _util_perf_for_support_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/perf-for-support-util */ "JywT");
/* harmony import */ var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @service/flow/loading-indicator.decorator */ "2BwX");
/* harmony import */ var _service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @service/flow/error-handler.decorator */ "7oHn");
/* harmony import */ var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @service/flow/loader.decorator */ "8V30");

/* Copyright 2018-2021 VMware, Inc. All rights reserved. -- VMware Confidential */










let AdvancedPerfSubentityDashboard = /*@__PURE__*/ (() => {
    class AdvancedPerfSubentityDashboard {
        constructor(perfDashboardQueryService) {
            this.perfDashboardQueryService = perfDashboardQueryService;
            this.displayEntityInfoType = DisplayEntityInfoType;
            this.clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObject"].contextObject;
            this.showAllSupported = true;
            this.filterObjects = null;
            this.filterMetrics = null;
            this.preselectSubEntityName = null;
            this.preselectSubEntityNameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.displayEntityInfo = DisplayEntityInfoType.ALL;
            this.isNested = true;
            this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.zoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.entitySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.resetGraphsDataMap = () => {
                if (this.hostSubEntities) {
                    this.graphsDataMap = new Map();
                    this.hostSubEntities.forEach(hostSubEntitiesData => this.getAggregatedHostLevelEntitiesData(hostSubEntitiesData));
                }
            };
            /**
             * For some dashboards like diskgroup, vNic, etc. A host may have several these entities,
             * we need to aggregate/group the data by hosts so the dashboards can be displayed clearly.
             */
            this.getAggregatedHostLevelEntitiesData = (hostSubEntitiesData) => {
                if (this.graphsDataMap.hasOwnProperty(hostSubEntitiesData.hostName)) {
                    return;
                }
                const subentities = hostSubEntitiesData.subentites;
                if (!subentities) {
                    return null;
                }
                this.graphsDataMap[hostSubEntitiesData.hostName] = subentities.map(entity => {
                    const entityUuid = entity.uuid;
                    return new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"](this.perfEntitiesStateData.find(entityData => entityData.entityRefId.indexOf(entityUuid) !== -1), this.displayedGraphs, _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_2__["GraphMetric"].ENTITY_REF_ID_TOKEN_SEPARATOR + entityUuid);
                });
            };
            this.getEntityName = (hostSubEntitiesData, index) => {
                return hostSubEntitiesData.subentites[index].name;
            };
            this.showAllCharts = (host, perfData, entityName) => {
                const subEntity = new _advanced_perf_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["SubEntityInfo"](host.hostName, _util_perf_for_support_util__WEBPACK_IMPORTED_MODULE_7__["PerfForSupportUtil"].getEntityIcon(this.view), entityName, perfData);
                this.entitySelected.emit(subEntity);
            };
        }
        set displayedGraphs(val) {
            this._displayedGraphs = val;
            this.resetGraphsDataMap();
        }
        get displayedGraphs() {
            return this._displayedGraphs;
        }
        set compactMode(val) {
            this._compactMode = val;
        }
        // Charts are compact when:
        // 1) Explicitly defined via compactMode property
        // 2) Or compactMode property is not defined and charts are more than 2
        get compactMode() {
            var _a;
            return this._compactMode === true || (((_a = this.displayedGraphs) === null || _a === void 0 ? void 0 : _a.length) > 2 && _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isUnset(this._compactMode));
        }
        set view(val) {
            if (this._view === val) {
                return;
            }
            this._view = val;
            this.loadView();
        }
        get view() {
            return this._view;
        }
        loadView() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const subentitiesData = yield this.perfDashboardQueryService.querySubEntities(this.clusterRef, this.view);
                this.hostSubEntities = this.filterEntities(subentitiesData);
                this.resetGraphsDataMap();
                if (this.preselectSubEntityName) {
                    this.showMetricsForPreselectedEntity();
                }
            });
        }
        handleError(err) {
            this.onError.emit(err);
        }
        /**
         * Show all metrics for already preselected sub entity.
         */
        showMetricsForPreselectedEntity() {
            const selectedHost = this.hostSubEntities.find(host => host.subentites.some(entity => entity.name === this.preselectSubEntityName));
            if (!selectedHost) {
                return;
            }
            const entityGraphMetric = this.graphsDataMap[selectedHost.hostName]
                .find(graphMetric => graphMetric.entityRefId.indexOf(this.preselectSubEntityName) !== -1);
            this.showAllCharts(selectedHost, entityGraphMetric.metrics, this.preselectSubEntityName);
            this.preselectSubEntityNameChange.emit(null);
        }
        /**
         * Filter the fetched entities by the passed "@Input() filterObjects".
         */
        filterEntities(subentitiesData) {
            if (!this.filterObjects || _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(this.filterObjects)) {
                return subentitiesData;
            }
            const filteredEntitiesData = [];
            this.filterObjects.forEach(entity => {
                const filteredEntityData = subentitiesData.find(e => e.hostName === entity.hostName);
                let filteredSubEntitiesData = [];
                if (filteredEntityData && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(entity.subentites)) {
                    entity.subentites.forEach(subEntity => {
                        const newSubEntityData = filteredEntityData.subentites.find(e => e.name === subEntity.name && e.uuid === subEntity.uuid);
                        if (newSubEntityData) {
                            filteredSubEntitiesData.push(newSubEntityData);
                        }
                    });
                }
                else {
                    filteredSubEntitiesData = filteredEntityData.subentites;
                }
                filteredEntitiesData.push(new _util_perf_dashboard_sub_entities_data_query_service__WEBPACK_IMPORTED_MODULE_4__["HostSubEntitiesData"](entity.hostName, filteredSubEntitiesData));
            });
            return filteredEntitiesData;
        }
        getEntityIcon() {
            return _util_perf_for_support_util__WEBPACK_IMPORTED_MODULE_7__["PerfForSupportUtil"].getEntityIcon(this.view);
        }
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_10__["Loader"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], AdvancedPerfSubentityDashboard.prototype, "loadView", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_error_handler_decorator__WEBPACK_IMPORTED_MODULE_9__["ErrorHandler"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AdvancedPerfSubentityDashboard.prototype, "handleError", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_8__["LoadingIndicator"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AdvancedPerfSubentityDashboard.prototype, "loading", void 0);
    return AdvancedPerfSubentityDashboard;
})();
/**
 * Indicates what part of the entities/sub-entities info to be shown.
 */
var DisplayEntityInfoType = /*@__PURE__*/ (function (DisplayEntityInfoType) {
    DisplayEntityInfoType[DisplayEntityInfoType["ALL"] = 0] = "ALL";
    DisplayEntityInfoType[DisplayEntityInfoType["ONLY_SUB_ENTITIES"] = 1] = "ONLY_SUB_ENTITIES";
    DisplayEntityInfoType[DisplayEntityInfoType["NONE"] = 2] = "NONE";
    return DisplayEntityInfoType;
})({});



/***/ }),

/***/ "7L6Q":
/*!**********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-cache-disk.data.ts ***!
  \**********************************************************************/
/*! exports provided: PerfDashboardCacheDiskData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardCacheDiskData", function() { return PerfDashboardCacheDiskData; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018-2021 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardCacheDiskData = /*@__PURE__*/ (() => {
    class PerfDashboardCacheDiskData {
    }
    PerfDashboardCacheDiskData.LSOM_CACHE_DISK_CHARTS = [
        // Device IOPS
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDevRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.iopsDevRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDevWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.iopsDevWrite.label")),
        ]),
        // Device Throughput
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputDevRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.throughputDevRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputDevWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.throughputDevWrite.label")),
        ]),
        // Device Latency
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevDAvg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevDAvg.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevKAvg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevKAvg.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevGAvg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevGAvg.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevWrite.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // Write buffer usage (percentage)
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("wbFreePct", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.wbFreePct.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("llogLogSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.llogLogSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("llogDataSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.llogDataSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogLogSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.plogLogSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogDataSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.plogDataSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("elevStartThresh", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.elevStartThresh.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("elevUnthrottleThresh", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.writeBufferUsagePct.elevUnthrottleThresh.label")),
        ]),
        // PLOG Elev Throughput
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesDrained", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.plogTotalBytesDrained.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogSsdBytesDrained", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.plogSsdBytesDrained.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogZeroBytesDrained", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.plogZeroBytesDrained.label")),
        ]),
        // RC Hit Rate
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.rcHitRate", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.rcHitRate.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rcHitRate", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.rcHitRate.rcHitRate.label")),
        ], null, false),
        // Evictions
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.evictions", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.evictions.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("quotaEvictions", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.evictions.quotaEvictions.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("warEvictions", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.evictions.warEvictions.label")),
        ], null, false),
        // Write Buffer
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("wbFreePct", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb.wbFreePct.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("llogLogSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb.llogLogSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("llogDataSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb.llogDataSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogLogSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb.plogLogSpace.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogDataSpace", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.wb.plogDataSpace.label")),
        ], null, false),
        // PLOG Latency
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogReadQLatency", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogReadQLatency.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogWriteQLatency", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogWriteQLatency.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogtotalRdLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogtotalRdLat.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogtotalWrLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogtotalWrLat.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpRdQLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogHelpRdQLat.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpWrQLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogHelpWrQLat.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        // PLOG Cumulative Enc Latency
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogCumlEncRdLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat.plogCumlEncRdLat.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogCumlEncWrLat", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat.plogCumlEncWrLat.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        // PLOG Average Queue Depth
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpRdQDepth", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth.plogHelpRdQDepth.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpWrQDepth", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth.plogHelpWrQDepth.label")),
        ], null, false),
        // PLOG Read Throughput
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadFromMD", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadFromMD.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadFromSSD", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadFromSSD.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadByRC", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadByRC.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadByVMFS", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadByVMFS.label")),
        ], null, false),
        // PLOG ReadOPS
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumTotalReads", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumTotalReads.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumMDReads", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumMDReads.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumSSDReads", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumSSDReads.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumRCReads", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumRCReads.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumVMFSReads", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumVMFSReads.label")),
        ], null, false),
        // PLOG Data Usage
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogDataUsage", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogDataUsage.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogDGDataUsage", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogDataUsage.plogDGDataUsage.label")),
        ], null, false),
        // PLOG Write Throughput
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalCSBytes", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalCSBytes.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalZeroBytes", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalZeroBytes.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalDelBytes", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalDelBytes.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalFSBytes", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalFSBytes.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalCFBytes", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalCFBytes.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalFSUnmapBytes", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalFSUnmapBytes.label")),
        ], null, false),
        // PLOG Elev IOPs
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumElevSSDReads", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.plogNumElevSSDReads.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumElevMDWrites", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.plogNumElevMDWrites.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogElevCycles", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.plogElevCycles.label")),
        ], null, false),
        // PLOG Logs
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLogs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLogs.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumWriteLogs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLogs.plogNumWriteLogs.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumCommitLogs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLogs.plogNumCommitLogs.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumFreedLogs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLogs.plogNumFreedLogs.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumFreedCommitLogs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLogs.plogNumFreedCommitLogs.label")),
        ], null, false),
        // LLOG Latency
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRcRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyRcRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWbRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyWbRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRcWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyRcWrite.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWbWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyWbWrite.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRcRdQ", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyRcRdQ.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRcWrtQ", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyRcWrtQ.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWbRdQ", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyWbRdQ.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWbWrtQ", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogLatency.latencyWbWrtQ.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        // LLOG IOPs
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogIOPs", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogIOPs.label"), null, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRcRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogIOPs.iopsRcRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWbRead", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogIOPs.iopsWbRead.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRcWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogIOPs.iopsRcWrite.label")),
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWbWrite", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.llogIOPs.iopsWbWrite.label")),
        ], null, false),
        // Block attribute cache size
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.blkAttrCcheSz", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.blkAttrCcheSz.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("blkAttrCcheSz", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.blkAttrCcheSz.blkAttrCcheSz.label")),
        ], null, false),
        // Blk Attr cache hit rate
        _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.cache.blkAttrCcheHitRt", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.blkAttrCcheHitRt.label"), _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("blkAttrCcheHitRt", _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.blkAttrCcheHitRt.blkAttrCcheHitRt.label")),
        ], null, false),
    ];
    return PerfDashboardCacheDiskData;
})();



/***/ }),

/***/ "7oHn":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/common/service/flow/error-handler.decorator.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @service/flow/loading-flow-wrapper.data */ "dmSP");
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

/**
 * This property decorator is supposed to be used along with the @Loader decorator.
 * If an exception is thrown during the execution of the method decorated with @Loader
 * the ErrorHandler method will be invoked. You can define as many ErrorHandlers as you want,
 * but they must be with different names. The name can be provided as input to the decorator.
 * If a name is set to the ErrorHandler it will handle only the errors thrown by Loader functions
 * with the same name. If no name is passed to the ErrorHandler, it will handle only the errors
 * from Loader functions with no name.
 *
 * <pre>
 * // Example 1:
 * @Loader()
 * loadSyncData(): any {
 *    throw new Error("Failed to load sync data");
 * }
 *
 * @ErrorHandler()
 * handleError(err: any) {
 *    // handle the error.
 * }
 *...
 *
 * // Example 2
 *
 * @Loader({name: "data-loading-flow})
 * async loadAsyncData(): Promise<any> {
 *    return Promise.reject("Failed to load async data");
 * }
 *
 * @ErrorHandler({name: "data-loading-flow})
 * handleError(err: any) {
 *    // handle the error.
 * }
 * ...
 * </pre>
 */
function ErrorHandler(props) {
    props = props || {};
    return (targetClass, functionName, descriptor) => {
        (new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](targetClass, props.name)).errorHandler = descriptor.value;
    };
}



/***/ }),

/***/ "9lKY":
/*!***************************************************************************!*\
  !*** ./src/app/vsan/common/service/navigation/model/knowledge-base-id.ts ***!
  \***************************************************************************/
/*! exports provided: KnowledgeBaseId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseId", function() { return KnowledgeBaseId; });
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */
/**
 * IDs used in external KB link navigation
 */
var KnowledgeBaseId = /*@__PURE__*/ (function (KnowledgeBaseId) {
    KnowledgeBaseId["PRECHECK_PCP"] = "83954";
    KnowledgeBaseId["VIRTUAL_OBJECTS"] = "2108319";
    KnowledgeBaseId["UPGRADE"] = "2148493";
    KnowledgeBaseId["PERFORMANCE_DIAGNOSTICS"] = "2148770";
    KnowledgeBaseId["SUPPORT_INSIGHT"] = "60206";
    return KnowledgeBaseId;
})({});



/***/ }),

/***/ "Bqjv":
/*!*************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-capacity-disk.data.ts ***!
  \*************************************************************************/
/*! exports provided: PerfDashboardCapacityDiskData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardCapacityDiskData", function() { return PerfDashboardCapacityDiskData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardCapacityDiskData = /*@__PURE__*/ (() => {
    class PerfDashboardCapacityDiskData {
    }
    PerfDashboardCapacityDiskData.LSOM_CAPACITY_DISK_CHARTS = [
        // Device IOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.deviceIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.iopsDevRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.deviceIOPS.iopsDevWrite.label")),
        ]),
        // Device Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.devThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputDevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.throughputDevRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputDevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devThroughput.throughputDevWrite.label")),
        ]),
        // Device Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.devLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevDAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevDAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevKAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevKAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevGAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevGAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.devLatency.latencyDevWrite.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // PLOG Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogReadQLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogReadQLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogWriteQLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogWriteQLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpRdQLat", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogHelpRdQLat.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpWrQLat", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogLatency.plogHelpWrQLat.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        // PLOG Cumulative Enc Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogCumlEncLat", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogCumlEncRdLat", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat.plogCumlEncRdLat.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogCumlEncWrLat", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogCumlEncLat.plogCumlEncWrLat.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
        // PLOG Average Queue Depth
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogHelpQDepth", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpRdQDepth", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth.plogHelpRdQDepth.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogHelpWrQDepth", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogHelpQDepth.plogHelpWrQDepth.label")),
        ], null, false),
        // Capactiy
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.capacity", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.capacity.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("capacityUsed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.capacity.capacityUsed.label"))
        ], null, false),
        // PLOG Read Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogReadThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadFromMD", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadFromMD.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadFromSSD", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadFromSSD.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadByRC", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadByRC.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesReadByVMFS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadThroughput.plogTotalBytesReadByVMFS.label")),
        ], null, false),
        // PLOG ReadOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogReadOps", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumTotalReads", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumTotalReads.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumMDReads", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumMDReads.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumSSDReads", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumSSDReads.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumRCReads", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumRCReads.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumVMFSReads", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogReadOps.plogNumVMFSReads.label")),
        ], null, false),
        // PLOG Data Usage
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogDataUsage", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogDataUsage.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogDGDataUsage", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogDataUsage.plogDGDataUsage.label")),
        ], null, false),
        // PLOG Write Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogWriteThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalCSBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalCSBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalZeroBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalZeroBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalDelBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalDelBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalFSBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalFSBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalCFBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalCFBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalFSUnmapBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalFSUnmapBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalCFUnmapBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogWriteThroughput.plogTotalCFUnmapBytes.label")),
        ], null, false),
        // PLOG Elev Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogElevThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogTotalBytesDrained", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.plogTotalBytesDrained.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogSsdBytesDrained", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.plogSsdBytesDrained.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogZeroBytesDrained", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevThroughput.plogZeroBytesDrained.label")),
        ]),
        // PLOG Elev IOPs
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.plogElevIOPs", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumElevSSDReads", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.plogNumElevSSDReads.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogNumElevMDWrites", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.plogNumElevMDWrites.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogElevCycles", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.plogElevIOPs.plogElevCycles.label")),
        ], null, false),
        // Virsto Map Blocks
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.virstoMapBlocks", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlock.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoValidMapBlocks", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlock.virstoValidMapBlocks.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoInvalidMapBlocks", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlock.virstoInvalidMapBlocks.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoDirtyMapBlocks", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlock.virstoDirtyMapBlocks.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoFreeMapBlocks", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlock.virstoFreeMapBlocks.label")),
        ], null, false),
        // Virsto Map Block Cache
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.virstoMapBlockCache", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlockCache.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoMapBlockCacheHitsPerSec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlockCache.virstoMapBlockCacheHitsPerSec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoMapBlockCacheMissesPerSec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlockCache.virstoMapBlockCacheMissesPerSec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoMapBlockCacheEvictionsPerSec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMapBlockCache.virstoMapBlockCacheEvictionsPerSec.label")),
        ], null, false),
        // Virsto Metadata Flusher Runs
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.virstoMetadataFlusherRuns", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMetadataFlusherRuns.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoMetadataFlusherRunsPerSec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMetadataFlusherRunsPerSec.label")),
        ], null, false),
        // Virsto Metadata Pending data
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.virstoMetadataFlusherPendingData", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMetadataFlusherPendingData.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoMetadataFlusherPendingBuffers", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMetadataFlusherPendingBuffers.label")),
        ], null, false),
        // Virsto Metadata Flush Tput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.virstoMetadataFlushedPerRun", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMetadataFlushed.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoMetadataFlushedPerRun", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoMetadataFlushedPerRun.label")),
        ], null, false),
        // Virsto Instance
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.virstoInstance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoInstance.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("virstoInstanceHeapUtilization", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.virstoInstanceHeapUtilization.label")),
        ], null, false),
        // Commit Flusher Components
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.commitFlusherComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.commitFlusherComp.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("commitFlusherComponentsToFlush", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.commitFlusherComponentsToFlush.label")),
        ], null, false),
        // Commit Flusher Extents
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.commitFlusherExtents", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.commitFlusherExtents.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("commitFlusherExtentsProcessed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.commitFlusherExtentsProcessed.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("commitFlusherExtentSizeProcessed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.commitFlusherExtentSizeProcessed.label")),
        ], null, false),
        // Time in commit flusher
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.timeInCommitFlusher", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.timeInCommitFlusher.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cfTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.cfTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("blkAttrFlshTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.blkAttrFlshTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("vrstBarrTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.vrstBarrTime.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogIOTime", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.plogIOTime.label")),
        ], null, false),
        // Commit flusher run breakdown
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.commitFlusherRunBreakdown", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.commitFlusherRunBreakdown.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numCFAct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.numCFAct.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numCksumFlsh", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.numCksumFlsh.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numVrstBar", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.numVrstBar.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("numPlogIOs", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.numPlogIOs.label")),
        ], null, false),
        // Checksum Error
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.capacity.checksumErrors", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.checksumErrors.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("checksumErrors", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.checksumErrors.label")),
        ], null, false),
    ];
    return PerfDashboardCapacityDiskData;
})();



/***/ }),

/***/ "CazJ":
/*!********************************************************************************!*\
  !*** ./src/app/vsan/support/view/advanced-perf-dashboard.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n.chart-labels-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 0 0 auto;\n}\n.chart-labels-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.chart-labels-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.chart-labels-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.chart-labels-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.chart-labels-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.chart-labels-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.chart-labels-container[_ngcontent-%COMP%]   .chart-toggle[_ngcontent-%COMP%] {\n  min-width: 240px;\n  display: inline-flex;\n}\n.chart-labels-container[_ngcontent-%COMP%]   .chart-toggle[_ngcontent-%COMP%]     label {\n  width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.sidenav[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  max-width: 100%;\n  width: 100%;\n  border: 0;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%] {\n  margin-top: 0rem !important;\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  align-items: center;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 0 0 1.2rem;\n  width: auto;\n}\n  .sidenav .nav-group .nav-label label:after {\n  position: absolute;\n  top: 0;\n  left: 0.6rem;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .nav-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidenav[_ngcontent-%COMP%]   .nav-group[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  margin: 0;\n}\n#action-button-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0 !important;\n}\n#action-button-bar[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9zdXBwb3J0L3ZpZXcvYWR2YW5jZWQtcGVyZi1kYXNoYm9hcmQuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFjSDtBRThCRztFQUNHLGdDQUFBO0FGNUJOO0FFOEJHOztFQUdHLGdDQUFBO0FGN0JOO0FFK0JHO0VBQ0csOEJBQUE7QUY3Qk47QUFwQkE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQXVCSDtBQXBCQTtFQUNHLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXVCSDtBRXVCRztFQUNLLCtCQUFBO0FGckJSO0FFdUJHO0VBSUcsK0JBQUE7QUZ4Qk47QUV5Qk07RUFDRywrQkFBQTtBRnZCVDtBRTBCRztFQUVHLCtCQUFBO0FGekJOO0FFMkJNO0VBQ0csK0JBQUE7QUZ6QlQ7QUU0Qkc7RUFDRyw2QkFBQTtBRjFCTjtBQXZDRztFQUNHLGdCQUFBO0VBQ0Esb0JBQUE7QUF5Q047QUF2Q007RUFDRyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBeUNUO0FBcENBO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQXVDSDtBQXRDRztFQUNHLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQXdDTjtBRWhDRztFQUNHLGdDQUFBO0FGa0NOO0FFaENHOztFQUdHLGdDQUFBO0FGaUNOO0FFL0JHO0VBQ0csOEJBQUE7QUZpQ047QUFoRE07RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBa0RUO0FBakRTO0VBQ0csa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFtRFo7QUFsRFk7RUFDRyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZR3RDTDtBSDBGVjtBQWpEUztFQUNHLGFBQUE7QUFtRFo7QUFqRFM7RUFDRyxTQUFBO0FBbURaO0FBN0NBO0VBQ0csYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFnREg7QUEvQ0c7RUFDRyxTQUFBO0FBaUROIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9zdXBwb3J0L3ZpZXcvYWR2YW5jZWQtcGVyZi1kYXNoYm9hcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG59XG5cbi5jaGFydC1sYWJlbHMtY29udGFpbmVyIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZztcbiAgIC5jaGFydC10b2dnbGUge1xuICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgICA6Om5nLWRlZXAgbGFiZWwge1xuICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgIH1cbn1cblxuLnNpZGVuYXYge1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtYXgtd2lkdGg6IDEwMCU7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJvcmRlcjogMDtcbiAgIC5uYXYtZ3JvdXAge1xuICAgICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDEgMCAwcmVtO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xuICAgICAgLm5hdi1sYWJlbCB7XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgZmxleDogMSAwIDByZW07XG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIDo6bmctZGVlcCAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgIGxlZnQ6ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLm5hdi1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICB9XG4gICAgICAgICAuYnRuLWxpbmsge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxufVxuXG4jYWN0aW9uLWJ1dHRvbi1iYXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAuYnRuLWxpbmsge1xuICAgICAgbWFyZ2luOiAwO1xuICAgfVxufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];




/***/ }),

/***/ "DqeJ":
/*!**********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-dom-client.data.ts ***!
  \**********************************************************************/
/*! exports provided: PerfDashboardDomClientData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardDomClientData", function() { return PerfDashboardDomClientData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardDomClientData = /*@__PURE__*/ (() => {
    class PerfDashboardDomClientData {
    }
    PerfDashboardDomClientData.DOM_CLIENT_CHARTS = [
        // Latency chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latency.metrics.read.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latency.metrics.write.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // IOPS chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.iops.metrics.read.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.iops.metrics.write.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.throughput.metrics.read.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.throughput.metrics.write.label")),
        ]),
        // Congestion chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.congestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.congestion.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("congestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.congestion.metrics.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30, 60, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // Outstanding IO chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.oio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.oio.metrics.label")),
        ]),
        // LatencyStddev chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.latencyStddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddev.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddev.metrics.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevUnmap", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latencyStddev.latencyStddevUnmap.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddevWrite.metrics.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddevRead.metrics.label"))
        ]),
        // clientCacheHits chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domClient.clientCacheHits", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.clientCacheHits.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.iops.metrics.read.label")),
        ], null, false),
    ];
    return PerfDashboardDomClientData;
})();



/***/ }),

/***/ "DwXc":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-clom-disk.data.ts ***!
  \*********************************************************************/
/*! exports provided: PerfDashboardClomDiskData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardClomDiskData", function() { return PerfDashboardClomDiskData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardClomDiskData = /*@__PURE__*/ (() => {
    class PerfDashboardClomDiskData {
    }
    PerfDashboardClomDiskData.CLOM_DISK_CHARTS = [
        // Disk Component Count Ratio
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.diskCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.diskCompCntRatio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("diskCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.diskCompCntRatio.label")),
        ]),
        // Disk Data Component Count Ratio
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.diskDataCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.diskDataCompCntRatio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("diskDataCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.diskDataCompCntRatio.label")),
        ]),
        // Diskgroup data Component Count Ratio
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.diskgrpDataCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.diskgrpDataCompCntRatio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("diskgrpDataCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.diskgrpDataCompCntRatio.label")),
        ]),
        // Disk Fullness
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.diskFullness", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.diskFullness.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("diskFullness", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.diskFullness.label")),
        ], null, false),
        // Fitness
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.fitness", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.fitness.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("fitness", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.fitness.label")),
        ], null, false),
        // Max Actual Reserved Space Utilization
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.maxActResvSpaceUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.maxActResvSpaceUtil.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("maxActResvSpaceUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.maxActResvSpaceUtil.label")),
        ], null, false),
        // Read Cache Reservation Utilization
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.rcResvUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.rcResvUtil.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rcResvUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.rcResvUtil.label")),
        ], null, false),
        // Resource Standard Deviation Change
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.resourceStddevChange", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.resourceStddevChange.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("resourceStddevChange", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.resourceStddevChange.label")),
        ], null, false),
        // Unreserved Address Space Utilization
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.unresvAddrSpaceUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.unresvAddrSpaceUtil.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("unresvAddrSpaceUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.unresvAddrSpaceUtil.label")),
        ], null, false),
        // Usage Variance
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.usageVariance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.usageVariance.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("usageVariance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.usageVariance.label")),
        ], null, false),
        // Version Weight
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.versionWeight", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.versionWeight.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("versionWeight", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.versionWeight.label")),
        ], null, false),
    ];
    return PerfDashboardClomDiskData;
})();



/***/ }),

/***/ "FBt7":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-memory-host.data.ts ***!
  \***********************************************************************/
/*! exports provided: PerfDashboardMemoryHostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardMemoryHostData", function() { return PerfDashboardMemoryHostData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardMemoryHostData = /*@__PURE__*/ (() => {
    class PerfDashboardMemoryHostData {
    }
    PerfDashboardMemoryHostData.MEMORY_HOST_CHARTS = [
        // Slab Utilization
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.memory.slabUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.slabUtil.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("slabUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.metrics.slabUtil.label")),
        ], null, true),
        // Heap Utilization
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.memory.heapUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.heapUtil.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("heapUtil", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.metrics.heapUtil.label")),
        ], null, true),
    ];
    return PerfDashboardMemoryHostData;
})();



/***/ }),

/***/ "GT9z":
/*!**************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-host-net-tcpip.data.ts ***!
  \**************************************************************************/
/*! exports provided: PerfDashboardHostNetworkTcpipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardHostNetworkTcpipData", function() { return PerfDashboardHostNetworkTcpipData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardHostNetworkTcpipData = /*@__PURE__*/ (() => {
    class PerfDashboardHostNetworkTcpipData {
    }
    PerfDashboardHostNetworkTcpipData.HOST_NETWORK_TCPIP_CHARTS = [
        // Packets/sec chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.packets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpRxPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.rxPackets.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpTxPackets", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.packets.txPackets.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpRxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.rxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpTxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.throughput.txThroughput.label")),
        ]),
        // TCP Connections
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.connections", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.connections.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpHalfopenDropRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.halfopenDropRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpTimeoutDropRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.timeoutDropRate.label")),
        ]),
        // TCP Transmission
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.transmission", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.transmission.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpTxRexmitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.vnic.loss.rate.tcpTxRexmitRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpRcvdupackRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpRcvdupackRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpRcvoopackRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpRcvoopackRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpRcvduppackRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpRcvduppackRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpSackSendBlocksRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpSackSendBlocksRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpSackRcvBlocksRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpSackRcvBlocksRate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpSackRexmitsRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpSackRexmitsRate.label")),
        ]),
        // TCP/IP Errors
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.error.rate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.errorRate.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERMILLE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpErrs", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.errorRate.tcpError.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ipErrs", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.errorRate.ipv4Error.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ip6Errs", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.errorRate.ipv6Error.label")),
        ]),
        // TCP Congestion
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.network.hostnetwork.tcpip.congestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.congestion.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tcpSndZeroWin", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.network.tcpip.tcpSndZeroWin.label")),
        ]),
    ];
    return PerfDashboardHostNetworkTcpipData;
})();



/***/ }),

/***/ "JywT":
/*!************************************************************!*\
  !*** ./src/app/vsan/support/util/perf-for-support-util.ts ***!
  \************************************************************/
/*! exports provided: PerfForSupportUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfForSupportUtil", function() { return PerfForSupportUtil; });
/* harmony import */ var _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/perf-dashboard-view.data */ "3LVF");
/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/icon */ "cbfQ");
/* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


class PerfForSupportUtil {
    static getEntityIcon(view) {
        switch (view) {
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMCOMPSCHEDULER:
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CACHEDISK:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLAIM_AS_CACHE;
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CLOMDISK:
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CAPACITYDISK:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLAIM_AS_CAPACITY;
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DISKGROUP:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].DISK_GROUP_IMAGE;
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DDHDISK:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].DISK;
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].VNIC:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].VIRTUAL_ADAPTER;
            case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].PNIC:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].PHYSICAL_ADAPTER;
            default:
                return "";
        }
    }
}



/***/ }),

/***/ "NsBV":
/*!******************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-dom-comp-scheduler.data.ts ***!
  \******************************************************************************/
/*! exports provided: PerfDashboardDomCompSchedulerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardDomCompSchedulerData", function() { return PerfDashboardDomCompSchedulerData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardDomCompSchedulerData = /*@__PURE__*/ (() => {
    class PerfDashboardDomCompSchedulerData {
    }
    PerfDashboardDomCompSchedulerData.DOM_COMP_SCHEDULER_CHARTS = [
        // Latency chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domScheduler.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latencySched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncReadPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncWritePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncReadDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncWriteDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncReadRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncWriteRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncReadFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.latency.latResyncWriteFixComp.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // IOPS chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompScheduler.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDirectSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsDirectSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncReadPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncWritePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncReadDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncWriteDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncReadRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncWriteRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncReadFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.iops.iopsResyncWriteFixComp.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompScheduler.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncReadPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncWritePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncReadDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncWriteDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncReadRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncWriteRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncReadFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.throughput.tputResyncWriteFixComp.label")),
        ]),
        // Outstanding Bytes chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domScheduler.outstandingBytesSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.outstandingBytesSched.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("outstandingBytesSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domScheduler.outstandingBytesSched.label")),
        ]),
        // Percentage IO Delay
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domScheduler.iopsDelayPctSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.iopsDelayPctSched.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsDelayPctSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.iopsDelayPctSched.label")),
        ]),
        // Disk Level Congestion
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domScheduler.diskLevelCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.diskLevelCongestion.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("componentCongestionReadSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.congestion.componentCongestionReadSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("componentCongestionWriteSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.congestion.componentCongestionWriteSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("diskgroupCongestionReadSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.congestion.diskgroupCongestionReadSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("diskgroupCongestionWriteSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domScheduler.congestion.diskgroupCongestionWriteSched.label")),
        ]),
        // Delayed IO Average Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyDelaySched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg.latencyDelaySched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueNS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg.latencySchedQueueNS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueRec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg.latencySchedQueueRec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueVM", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg.latencySchedQueueVM.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencySchedQueueMeta", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedLatencyAvg.latencySchedQueueMeta.label")),
        ], null, false),
        // Delayed IOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domSchedular.delayedIops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedIops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedIops.iopsSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueNS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedIops.iopsSchedQueueNS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueRec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedIops.iopsSchedQueueRec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueVM", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedIops.iopsSchedQueueVM.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsSchedQueueMeta", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedIops.iopsSchedQueueMeta.label")),
        ], null, false),
        // Delayed IO Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSched", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput.throughputSched.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueNS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput.throughputSchedQueueNS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueRec", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput.throughputSchedQueueRec.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueVM", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput.throughputSchedQueueVM.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputSchedQueueMeta", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domSchedular.delayedThroughput.throughputSchedQueueMeta.label")),
        ], null, false),
    ];
    return PerfDashboardDomCompSchedulerData;
})();



/***/ }),

/***/ "ONk4":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-dom-owner.data.ts ***!
  \*********************************************************************/
/*! exports provided: PerfDashboardDomOwnerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardDomOwnerData", function() { return PerfDashboardDomOwnerData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018-2019 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardDomOwnerData = /*@__PURE__*/ (() => {
    class PerfDashboardDomOwnerData {
    }
    PerfDashboardDomOwnerData.DOM_OWNER_CHARTS = [
        // Latency chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latency.latencyAvgRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latency.latencyAvgWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latency.latencyAvgResyncRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latency.latencyAvgRecWrite.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // IOPS chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.iops.iopsRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.iops.iopsWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.iops.iopsResyncRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.iops.iopsRecWrite.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.throughput.tputRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.throughput.tputWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.throughput.tputResyncRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.throughput.tputRecWrite.label")),
        ]),
        // Congestion chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.congestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.congestion.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("readCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.congestion.readCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("writeCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.congestion.writeCongestion.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("recoveryWriteCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.congestion.recoveryWriteCongestion.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30, 60, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // Outstanding IO cahrt
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.oio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.oio.oio.label")),
        ]),
        // latencyStddev chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.latencyStddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latencyStddev.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latencyStddev.latencyStddev.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevUnmap", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latencyStddev.latencyStddevUnmap.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddevWrite.metrics.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddevRead.metrics.label"))
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domOwner.leafOwnerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domOwner.leafOwnerLatency.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("readLeafOwnerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domOwner.readLeafOwnerLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("writeLeafOwnerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domOwner.writeLeafOwnerLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("recoveryWriteLeafOwnerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domOwner.recoveryWriteLeafOwnerLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("unmapLeafOwnerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domOwner.unmapLeafOwnerLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("recoveryUnmapLeafOwnerLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.domOwner.recoveryUnmapLeafOwnerLatency.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper), false),
    ];
    return PerfDashboardDomOwnerData;
})();



/***/ }),

/***/ "P7xE":
/*!********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-ddh-disk.data.ts ***!
  \********************************************************************/
/*! exports provided: PerfDashboardDdhDiskData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardDdhDiskData", function() { return PerfDashboardDdhDiskData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardDdhDiskData = /*@__PURE__*/ (() => {
    class PerfDashboardDdhDiskData {
    }
    PerfDashboardDdhDiskData.LSOM_DDH_DISK_CHARTS = [
        // IOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgReadIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.iops.avgReadIOPS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgWriteIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.iops.avgWriteIOPS.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgUnmapIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.iops.avgUnmapIOPS.label")),
        ]),
        // Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.throughput.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgReadTPut", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.avgReadTPut.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgWriteTPut", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.avgWriteTPut.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgUnmapIOPS", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.avgUnmapTput.label")),
        ]),
        // Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.latency.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgReadLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.avgReadLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgWriteLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.avgWriteLatency.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("avgUnmapLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.avgUnmapLatency.label")),
        ]),
        // Log Congestion
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.logCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.logCongestion.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("logCongestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.logCongestion.label"))
        ]),
        // PLOG IORetry Unweighted Moving Avg Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioavglatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioavglatency.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryReadLatencyUnwtdMvgAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryReadLatencyUnwtdMvgAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryWriteLatencyUnwtdMvgAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryWriteLatencyUnwtdMvgAvg.label")),
        ], null, false),
        // PLOG IORetry Unweighted Moving Avg Latency Std Dev
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioavglatencystddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioavglatencystddev.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryReadLatencyUnwtdMvgStdDev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryReadLatencyUnwtdMvgStdDev.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryWriteLatencyUnwtdMvgStdDev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryWriteLatencyUnwtdMvgStdDev.label")),
        ], null, false),
        // PLOG IORetry IOPS
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioretryiops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioretryiops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryReadIopsAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryReadIopsAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryWriteIopsAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryWriteIopsAvg.label")),
        ], null, false),
        // PLOG IORetry IOPS Moving Avg
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioretryiopsavg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogioretryiopsavg.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryReadIopsMvgAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryReadIopsMvgAvg.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioretryWriteIopsMvgAvg", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.ioretryWriteIopsMvgAvg.label")),
        ], null, false),
        // Log Segment Number
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.logsegmentnum", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.logsegmentnum.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("llogStartSegNo", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.llogStartSegNo.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("llogCurrentSegNo", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.llogCurrentSegNo.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogStartSegNo", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogStartSegNo.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("plogCurrentSegNo", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.plogCurrentSegNo.label")),
        ], null, false),
        // Interval
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.interval", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.interval.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("intervalCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.intervalCount.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyIntervalSecs", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.latencyIntervalSecs.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("elapsedSecsInInterval", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.elapsedSecsInInterval.label")),
        ], null, false),
        // Exceed counts
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.exceedcounts", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.exceedcounts.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("readLatencyExCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.readLatencyExCount.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("writeLatencyExCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.writeLatencyExCount.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("minimumReadIOsExceededCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.minimumReadIOsExceededCount.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("minimumWriteIOsExceededCount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.minimumWriteIOsExceededCount.label")),
        ], null, false),
        // Mean Latency
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.meanlatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.meanlatency.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("currentReadLatencyMean", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.currentReadLatencyMean.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("currentWriteLatencyMean", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.currentWriteLatencyMean.label")),
        ], null, false),
    ];
    return PerfDashboardDdhDiskData;
})();



/***/ }),

/***/ "Pig1":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-host-sparse.data.ts ***!
  \***********************************************************************/
/*! exports provided: PerfDashboardHostSparseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardHostSparseData", function() { return PerfDashboardHostSparseData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardHostSparseData = /*@__PURE__*/ (() => {
    class PerfDashboardHostSparseData {
    }
    PerfDashboardHostSparseData.LSOM_HOST_SPARSE_CHARTS = [
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.latency.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyCacheLookup", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.latencyCacheLookup.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyGwe", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.latencyGwe.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.latencyRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.latencyWrite.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsGwe", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.iopsGwe.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.iopsRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRmw", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.iopsRmw.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.iopsWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWriteConflicts", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.iopsWriteConflicts.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.throughput.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.throughputRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.throughputWrite.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheHitRate.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheHitRate.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheAllocFails", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheAllocFails.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheAllocFails.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheEntries", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheEntries.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheEntries.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheEvictAttempts", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheEvictAttempts.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheEvictAttempts.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheInserts", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheInserts.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheInserts.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheLockContentions", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheLockContentions.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheLockContentions.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheRemoves", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheRemoves.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheRemoves.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.cacheUpdateLatency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheUpdateLatency.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.cacheUpdateLatency.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.lruLockContentions", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.lruLockContentions.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.lruLockContentions.label")),
        ], null, false),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("vsan.perf.advanced.dashboards.lsom.sparse.readsToLayer", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.readsToLayer.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("cacheHitRate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.lsom.sparse.readsToLayer.label")),
        ], null, false),
    ];
    return PerfDashboardHostSparseData;
})();



/***/ }),

/***/ "UeHB":
/*!************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-distribution.data.ts ***!
  \************************************************************************/
/*! exports provided: PerfDashboardVsanDistributionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardVsanDistributionData", function() { return PerfDashboardVsanDistributionData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardVsanDistributionData = /*@__PURE__*/ (() => {
    class PerfDashboardVsanDistributionData {
    }
    PerfDashboardVsanDistributionData.VSAN_DISTRIBUTION_CHARTS = [
        // Components
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.distribution.components", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.components.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("components", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.components.label")),
        ]),
        // IO Components
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.distribution.ioComponents", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.ioComponents.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("ioComponents", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.ioComponents.label")),
        ]),
        // DOM Clients
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.distribution.domClients", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.domClients.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("domClients", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.domClients.label")),
        ]),
        // DOM Owners
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.distribution.domOwners", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.domOwners.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("domOwners", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.domOwners.label")),
        ]),
        // DOM Colocated
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.distribution.domColocated", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.domColocated.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("domColocated", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.distribution.domColocated.label")),
        ]),
    ];
    return PerfDashboardVsanDistributionData;
})();



/***/ }),

/***/ "WpOO":
/*!***********************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard.data.ts ***!
  \***********************************************************/
/*! exports provided: VsanPerfDashboardView, VsanPerfDashboardCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanPerfDashboardView", function() { return VsanPerfDashboardView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanPerfDashboardCategory", function() { return VsanPerfDashboardCategory; });
/* harmony import */ var _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perf-dashboard-view.data */ "3LVF");
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _perf_dashboard_disk_group_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf-dashboard-disk-group.data */ "+dSE");
/* harmony import */ var _perf_dashboard_dom_client_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perf-dashboard-dom-client.data */ "DqeJ");
/* harmony import */ var _perf_dashboard_dom_owner_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perf-dashboard-dom-owner.data */ "ONk4");
/* harmony import */ var _perf_dashboard_dom_comp_mgr_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perf-dashboard-dom-comp-mgr.data */ "bePD");
/* harmony import */ var _perf_dashboard_vnic_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perf-dashboard-vnic.data */ "3iwT");
/* harmony import */ var _perf_dashboard_cache_disk_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perf-dashboard-cache-disk.data */ "7L6Q");
/* harmony import */ var _perf_dashboard_capacity_disk_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perf-dashboard-capacity-disk.data */ "Bqjv");
/* harmony import */ var _perf_dashboard_ddh_disk_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./perf-dashboard-ddh-disk.data */ "P7xE");
/* harmony import */ var _perf_dashboard_host_sparse_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./perf-dashboard-host-sparse.data */ "Pig1");
/* harmony import */ var _perf_dashboard_pnic_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./perf-dashboard-pnic.data */ "3AON");
/* harmony import */ var _perf_dashboard_host_net_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./perf-dashboard-host-net.data */ "6ArB");
/* harmony import */ var _perf_dashboard_clom_host_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./perf-dashboard-clom-host.data */ "lCPd");
/* harmony import */ var _perf_dashboard_clom_disk_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./perf-dashboard-clom-disk.data */ "DwXc");
/* harmony import */ var _perf_dashboard_memory_host_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./perf-dashboard-memory-host.data */ "FBt7");
/* harmony import */ var _perf_dashboard_memory_system_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./perf-dashboard-memory-system.data */ "jsRm");
/* harmony import */ var _perf_dashboard_memory_vsan_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./perf-dashboard-memory-vsan.data */ "l/M+");
/* harmony import */ var _perf_dashboard_cmmds_net_data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./perf-dashboard-cmmds-net.data */ "jT5n");
/* harmony import */ var _perf_dashboard_cmmds_workload_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./perf-dashboard-cmmds-workload.data */ "uEIl");
/* harmony import */ var _perf_dashboard_cmmds_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./perf-dashboard-cmmds.data */ "lPRD");
/* harmony import */ var _perf_dashboard_cpu_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./perf-dashboard-cpu.data */ "ly72");
/* harmony import */ var _perf_dashboard_distribution_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./perf-dashboard-distribution.data */ "UeHB");
/* harmony import */ var _perf_dashboard_dom_comp_scheduler_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./perf-dashboard-dom-comp-scheduler.data */ "NsBV");
/* harmony import */ var _perf_dashboard_host_net_tcpip_data__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./perf-dashboard-host-net-tcpip.data */ "GT9z");
/* harmony import */ var _perf_dashboard_cluster_resync_data__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./perf-dashboard-cluster-resync.data */ "e8zM");
/* Copyright 2018-2019 VMware, Inc. All rights reserved. -- VMware Confidential */


























/**
 * The dashboard view definition, isOutlineDashboard=true means this link should be outlined
 */
class VsanPerfDashboardView {
    constructor(view, label, children, isSupportedByVsanMax = true) {
        this.view = view;
        this.label = label;
        this.children = children;
        this.isSupportedByVsanMax = isSupportedByVsanMax;
    }
}
/**
 * The category definition of the dashboard views.
 */
let VsanPerfDashboardCategory = /*@__PURE__*/ (() => {
    class VsanPerfDashboardCategory {
        constructor(label, children) {
            this.label = label;
            this.children = children;
        }
        static getVsanMaxDashboardCategories(categories) {
            if (_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(categories)) {
                return [];
            }
            return categories.map(category => {
                category.children = this.getVsanMaxDashboardViews(category.children);
                return category;
            });
        }
        static getVsanMaxDashboardViews(views) {
            if (_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(views)) {
                return [];
            }
            return views.filter(view => view.isSupportedByVsanMax);
        }
    }
    /**
     * These dashboards are not directly aggregated by hosts, but the devices that belongs to a host
     */
    VsanPerfDashboardCategory.NESTED_DASHBOARDS = [
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DISKGROUP,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CACHEDISK,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CAPACITYDISK,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DDHDISK,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].VNIC,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].PNIC,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CLOMDISK,
        _perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMCOMPSCHEDULER,
    ];
    VsanPerfDashboardCategory.PIVOTAL_DASHBOARDS = [
        new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMCLIENT, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.dom.client.label"), _perf_dashboard_dom_client_data__WEBPACK_IMPORTED_MODULE_3__["PerfDashboardDomClientData"].DOM_CLIENT_CHARTS),
        new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMOWNER, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.dom.owner.label"), _perf_dashboard_dom_owner_data__WEBPACK_IMPORTED_MODULE_4__["PerfDashboardDomOwnerData"].DOM_OWNER_CHARTS),
        new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMCOMPMGR, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.dom.mgr.label"), _perf_dashboard_dom_comp_mgr_data__WEBPACK_IMPORTED_MODULE_5__["PerfDashboardDomCompMgrData"].DOM_COMP_MGR_CHARTS),
        new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DISKGROUP, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.diskgroup.label"), _perf_dashboard_disk_group_data__WEBPACK_IMPORTED_MODULE_2__["PerfDashboardDiskgroupData"].LSOM_DISK_GROUP_CHARTS, false),
        new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].VNIC, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.network.vnic.label"), _perf_dashboard_vnic_data__WEBPACK_IMPORTED_MODULE_6__["PerfDashboardVnicData"].VNIC_CHARTS),
    ];
    /**
     * Defines all the available dashboards and categories them.
     */
    VsanPerfDashboardCategory.CATEGORIED_DASHBOARDS = [
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.dom.scheduler.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMCOMPSCHEDULER, "", _perf_dashboard_dom_comp_scheduler_data__WEBPACK_IMPORTED_MODULE_23__["PerfDashboardDomCompSchedulerData"].DOM_COMP_SCHEDULER_CHARTS)]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CACHEDISK, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.cache.label"), _perf_dashboard_cache_disk_data__WEBPACK_IMPORTED_MODULE_7__["PerfDashboardCacheDiskData"].LSOM_CACHE_DISK_CHARTS, false),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CAPACITYDISK, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.capacity.label"), _perf_dashboard_capacity_disk_data__WEBPACK_IMPORTED_MODULE_8__["PerfDashboardCapacityDiskData"].LSOM_CAPACITY_DISK_CHARTS, false),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DDHDISK, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.ddh.label"), _perf_dashboard_ddh_disk_data__WEBPACK_IMPORTED_MODULE_9__["PerfDashboardDdhDiskData"].LSOM_DDH_DISK_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].SPARSEHOST, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.lsom.sparse.label"), _perf_dashboard_host_sparse_data__WEBPACK_IMPORTED_MODULE_10__["PerfDashboardHostSparseData"].LSOM_HOST_SPARSE_CHARTS),
        ]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.network.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].PNIC, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.network.pnic.label"), _perf_dashboard_pnic_data__WEBPACK_IMPORTED_MODULE_11__["PerfDashboardPnicData"].PNIC_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].TCPIP, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.network.tcpip.label"), _perf_dashboard_host_net_tcpip_data__WEBPACK_IMPORTED_MODULE_24__["PerfDashboardHostNetworkTcpipData"].HOST_NETWORK_TCPIP_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].HOSTNETWORK, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.network.host.label"), _perf_dashboard_host_net_data__WEBPACK_IMPORTED_MODULE_12__["PerfDashboardHostNetworkData"].HOST_NETWORK_CHARTS),
        ]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.clom.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CLOMHOST, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.clom.host.label"), _perf_dashboard_clom_host_data__WEBPACK_IMPORTED_MODULE_13__["PerfDashboardClomHostData"].CLOM_HOST_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CLOMDISK, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.clom.disk.label"), _perf_dashboard_clom_disk_data__WEBPACK_IMPORTED_MODULE_14__["PerfDashboardClomDiskData"].CLOM_DISK_CHARTS),
        ]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.memory.label"), [
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].HOSTMEMORY, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.memory.heap.label"), _perf_dashboard_memory_host_data__WEBPACK_IMPORTED_MODULE_15__["PerfDashboardMemoryHostData"].MEMORY_HOST_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].SYSMEMORY, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.memory.system.label"), _perf_dashboard_memory_system_data__WEBPACK_IMPORTED_MODULE_16__["PerfDashboardMemorySystemData"].MEMORY_SYSTEM_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].VSANMEMORY, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.memory.vsan.label"), _perf_dashboard_memory_vsan_data__WEBPACK_IMPORTED_MODULE_17__["PerfDashboardMemoryVsanData"].MEMORY_VSAN_CHARTS),
        ]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cmmds.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CMMDS, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cmmds.label"), _perf_dashboard_cmmds_data__WEBPACK_IMPORTED_MODULE_20__["PerfDashboardCmmdsData"].CMMDS_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].NET, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cmmds.net.label"), _perf_dashboard_cmmds_net_data__WEBPACK_IMPORTED_MODULE_18__["PerfDashboardCmmdsNetData"].CMMDS_NET_CHARTS),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].WORKLOAD, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cmmds.workload.label"), _perf_dashboard_cmmds_workload_data__WEBPACK_IMPORTED_MODULE_19__["PerfDashboardCmmdsWorkloadData"].CMMDS_WORKLOAD_CHARTS),
        ]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].DOMWORLDCPU, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.dom.label"), _perf_dashboard_cpu_data__WEBPACK_IMPORTED_MODULE_21__["PerfDashboardCpuData"].DOM_WORLD_CPU),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].LSOMWORLDCPU, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.lsom.label"), _perf_dashboard_cpu_data__WEBPACK_IMPORTED_MODULE_21__["PerfDashboardCpuData"].LSOM_WORLD_CPU),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].HOSTCPU, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.host.label"), _perf_dashboard_cpu_data__WEBPACK_IMPORTED_MODULE_21__["PerfDashboardCpuData"].HOST_CPU),
            new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].VSANCPU, _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.vsan.label"), _perf_dashboard_cpu_data__WEBPACK_IMPORTED_MODULE_21__["PerfDashboardCpuData"].VSAN_CPU),
        ]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.distribution.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].VSANDISTRIBUTION, "", _perf_dashboard_distribution_data__WEBPACK_IMPORTED_MODULE_22__["PerfDashboardVsanDistributionData"].VSAN_DISTRIBUTION_CHARTS)]),
        new VsanPerfDashboardCategory(_common_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cluster.resync.label"), [new VsanPerfDashboardView(_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_0__["PerfDashboardView"].CLUSTERRESYNC, "", _perf_dashboard_cluster_resync_data__WEBPACK_IMPORTED_MODULE_25__["PerfDashboardClusterResyncData"].CLUSTER_RESYNC_CHARTS)]),
    ];
    return VsanPerfDashboardCategory;
})();



/***/ }),

/***/ "bePD":
/*!************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-dom-comp-mgr.data.ts ***!
  \************************************************************************/
/*! exports provided: PerfDashboardDomCompMgrData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardDomCompMgrData", function() { return PerfDashboardDomCompMgrData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/perf-graph-threshold */ "/EAF");
/* harmony import */ var _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generated/perf-graph-threshold-direction */ "fNdd");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */





let PerfDashboardDomCompMgrData = /*@__PURE__*/ (() => {
    class PerfDashboardDomCompMgrData {
    }
    PerfDashboardDomCompMgrData.DOM_COMP_MGR_CHARTS = [
        // Latency chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompmgr.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latency.latencyAvgRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latency.latencyAvgWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyAvgRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latency.latencyAvgRecWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latAvgResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latency.latAvgResyncRead.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30000, 50000, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // IOPS chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompmgr.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.iops.iopsRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.iops.iopsWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.iops.iopsRecWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("iopsResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.iops.iopsResyncRead.label")),
        ]),
        // Throughput chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompmgr.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.throughput.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.throughput.throughputRead.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.throughput.throughputWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("throughputRecWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.throughput.throughputRecWrite.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("tputResyncRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.throughput.tputResyncRead.label")),
        ]),
        // Congestion chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompmgr.congestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.congestion.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("congestion", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.congestion.congestion.label")),
        ], _generated_perf_graph_threshold__WEBPACK_IMPORTED_MODULE_3__["PerfGraphThreshold"].Factory.create("", "", 30, 60, _generated_perf_graph_threshold_direction__WEBPACK_IMPORTED_MODULE_4__["PerfGraphThresholdDirection"].upper)),
        // Outstanding IO chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompmgr.oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.oio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("oio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.oio.oio.label")),
        ]),
        // latencyStddev chart
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.domCompmgr.latencyStddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latencyStddev.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].TIME_MS_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddev", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domCompmgr.latencyStddev.latencyStddev.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevUnmap", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domowner.latencyStddev.latencyStddevUnmap.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevWrite", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddevWrite.metrics.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("latencyStddevRead", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.domclient.latencyStddevRead.metrics.label"))
        ]),
    ];
    return PerfDashboardDomCompMgrData;
})();



/***/ }),

/***/ "cG15":
/*!*******************************************************************************************!*\
  !*** ./src/app/vsan/support/view/advanced-perf-sub-entity-dashboard.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
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
var styles = [".nested-dashboard[_ngcontent-%COMP%] {\n  padding-left: 1.2rem;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .sub-entity-dashboard[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.sub-entity-dashboard[_ngcontent-%COMP%]   .sub-entity-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9zdXBwb3J0L3ZpZXcvYWR2YW5jZWQtcGVyZi1zdWItZW50aXR5LWRhc2hib2FyZC5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csb0JHV087QUhHVjtBRWdDRztFQUNHLGdDQUFBO0FGN0JOO0FFK0JHOztFQUdHLGdDQUFBO0FGOUJOO0FFZ0NHO0VBQ0csOEJBQUE7QUY5Qk47QUFwQkc7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7QUFzQk47QUUrQkc7RUFDSywrQkFBQTtBRjdCUjtBRStCRztFQUlHLCtCQUFBO0FGaENOO0FFaUNNO0VBQ0csK0JBQUE7QUYvQlQ7QUVrQ0c7RUFFRywrQkFBQTtBRmpDTjtBRW1DTTtFQUNHLCtCQUFBO0FGakNUO0FFb0NHO0VBQ0csNkJBQUE7QUZsQ047QUF0Q007RUFDRyxZQUFBO0FBd0NUIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9zdXBwb3J0L3ZpZXcvYWR2YW5jZWQtcGVyZi1zdWItZW50aXR5LWRhc2hib2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuLm5lc3RlZC1kYXNoYm9hcmQge1xuICAgcGFkZGluZy1sZWZ0OiAkdnNhbi1uZXN0ZWQtaW5kZW50YXRpb247XG59XG5cbi5zdWItZW50aXR5LWRhc2hib2FyZCB7XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbiAgIC5zdWItZW50aXR5LWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmc7XG4gICAgICBidXR0b24ge1xuICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgfVxuICAgfVxufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];




/***/ }),

/***/ "e8zM":
/*!**************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-cluster-resync.data.ts ***!
  \**************************************************************************/
/*! exports provided: PerfDashboardClusterResyncData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardClusterResyncData", function() { return PerfDashboardClusterResyncData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardClusterResyncData = /*@__PURE__*/ (() => {
    class PerfDashboardClusterResyncData {
    }
    PerfDashboardClusterResyncData.CLUSTER_RESYNC_CHARTS = [
        // IOPS Resync
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cluster.resync.iops", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.readPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.writePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.readDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.writeDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.readRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.writeRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.readFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("iopsResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.iops.writeFixComp.label")),
        ]),
        // Throughput Resync
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cluster.resync.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.readPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.writePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.readDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.writeDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.readRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.writeRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.readFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("tputResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.throughput.writeFixComp.label")),
        ]),
        // Latency Resync
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cluster.resync.latency", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartUtil"].RATE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncReadPolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.readPolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncWritePolicy", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.writePolicy.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncReadDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.readDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncWriteDecom", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.writeDecom.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncReadRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.readRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncWriteRebalance", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.writeRebalance.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncReadFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.readFixComp.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_2__["PerfGraphMetrics"]("latResyncWriteFixComp", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cluster.resync.latency.writeFixComp.label")),
        ]),
    ];
    return PerfDashboardClusterResyncData;
})();



/***/ }),

/***/ "hwU3":
/*!*****************************************************!*\
  !*** ./src/app/vsan/support/support-perf.module.ts ***!
  \*****************************************************/
/*! exports provided: SupportPerfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPerfModule", function() { return SupportPerfModule; });
class SupportPerfModule {
}



/***/ }),

/***/ "jT5n":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-cmmds-net.data.ts ***!
  \*********************************************************************/
/*! exports provided: PerfDashboardCmmdsNetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardCmmdsNetData", function() { return PerfDashboardCmmdsNetData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardCmmdsNetData = /*@__PURE__*/ (() => {
    class PerfDashboardCmmdsNetData {
    }
    PerfDashboardCmmdsNetData.CMMDS_NET_CHARTS = [
        // Net Stats
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cmmds.net.rxtx", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.rxtx.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rdtRx", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.rdtRx.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rdtTx", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.rdtTx.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("groupRx", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.groupRx.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("groupTxUcast", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.groupTxUcast.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("groupTxMcast", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.groupTxMcast.label")),
        ]),
        // Throughput
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cmmds.net.throughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.throughput.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rdtRxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.rdtRxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rdtTxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.rdtTxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("groupRxThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.groupRxThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("groupTxUcastThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.groupTxUcastThroughput.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("groupTxMcastThroughput", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.net.metrics.groupTxMcastThroughput.label")),
        ]),
    ];
    return PerfDashboardCmmdsNetData;
})();



/***/ }),

/***/ "jsRm":
/*!*************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-memory-system.data.ts ***!
  \*************************************************************************/
/*! exports provided: PerfDashboardMemorySystemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardMemorySystemData", function() { return PerfDashboardMemorySystemData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardMemorySystemData = /*@__PURE__*/ (() => {
    class PerfDashboardMemorySystemData {
    }
    PerfDashboardMemorySystemData.MEMORY_SYSTEM_CHARTS = [
        // Total Mb Memory Used
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.memory.totalMbMemUsed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.totalMbMemUsed.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].MBYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("totalMbMemUsed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.metrics.totalMbMemUsed.label")),
        ]),
        // Percentage Memory Used
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.memory.pctMemUsed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.pctMemUsed.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].PERCENTAGE_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("pctMemUsed", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.metrics.pctMemUsed.label")),
        ]),
        // Over commit Ratio
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.memory.overcommitRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.overcommitRatio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("overcommitRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.memory.metrics.overcommitRatio.label")),
        ]),
    ];
    return PerfDashboardMemorySystemData;
})();



/***/ }),

/***/ "l/M+":
/*!***********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-memory-vsan.data.ts ***!
  \***********************************************************************/
/*! exports provided: PerfDashboardMemoryVsanData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardMemoryVsanData", function() { return PerfDashboardMemoryVsanData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* harmony import */ var _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-chart-util */ "3For");
/* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */



let PerfDashboardMemoryVsanData = /*@__PURE__*/ (() => {
    class PerfDashboardMemoryVsanData {
    }
    PerfDashboardMemoryVsanData.MEMORY_VSAN_CHARTS = [
        // vSAN Used
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.memory.vsanMemory", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.memory.vsan.label"), _common_component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_2__["PerfChartUtil"].SIZE_BYTES_TYPE, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("vsanUsedSize", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.memory.vsan.label"), null, null, ["kernelReservedSize", "uwReservedSize"]),
        ]),
    ];
    return PerfDashboardMemoryVsanData;
})();



/***/ }),

/***/ "lCPd":
/*!*********************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-clom-host.data.ts ***!
  \*********************************************************************/
/*! exports provided: PerfDashboardClomHostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardClomHostData", function() { return PerfDashboardClomHostData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardClomHostData = /*@__PURE__*/ (() => {
    class PerfDashboardClomHostData {
    }
    PerfDashboardClomHostData.CLOM_HOST_CHARTS = [
        // Node Component Count Ratio
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.nodeCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.nodeCompCntRatio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("nodeCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.nodeCompCntRatio.label")),
        ]),
        // Node Data Component Count Ratio
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.nodeDataCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.nodeDataCompCntRatio.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("nodeDataCompCntRatio", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.nodeDataCompCntRatio.label")),
        ]),
    ];
    return PerfDashboardClomHostData;
})();



/***/ }),

/***/ "lPRD":
/*!*****************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-cmmds.data.ts ***!
  \*****************************************************************/
/*! exports provided: PerfDashboardCmmdsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardCmmdsData", function() { return PerfDashboardCmmdsData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardCmmdsData = /*@__PURE__*/ (() => {
    class PerfDashboardCmmdsData {
    }
    PerfDashboardCmmdsData.CMMDS_CHARTS = [
        // Updates Applied
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.updatesApplied", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.updatesApplied.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("updatesApplied", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.updatesApplied.label")),
        ]),
        // Updates Requested
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.clom.updatesRequested", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.updatesRequested.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("updatesRequested", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.clom.metrics.updatesRequested.label")),
        ]),
    ];
    return PerfDashboardCmmdsData;
})();



/***/ }),

/***/ "ly72":
/*!***************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-cpu.data.ts ***!
  \***************************************************************/
/*! exports provided: PerfDashboardCpuData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardCpuData", function() { return PerfDashboardCpuData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018-2019 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardCpuData = /*@__PURE__*/ (() => {
    class PerfDashboardCpuData {
    }
    PerfDashboardCpuData.LSOM_WORLD_CPU = [
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.lsom.usedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.usedPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("usedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.metrics.usedPct.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.lsom.readyPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.readyPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("readyPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.metrics.readyPct.label")),
        ]),
    ];
    PerfDashboardCpuData.DOM_WORLD_CPU = [
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.dom.usedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.usedPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("usedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.metrics.usedPct.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.dom.readyPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.readyPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("readyPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.metrics.readyPct.label")),
        ]),
    ];
    PerfDashboardCpuData.HOST_CPU = [
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.host.coreUtilPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.host.coreUtilPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("coreUtilPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.host.metrics.coreUtilPct.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.host.pcpuUsedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.host.pcpuUsedPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("pcpuUsedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.host.metrics.pcpuUsedPct.label")),
        ]),
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.host.pcpuUtilPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.host.pcpuUtilPct.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("pcpuUtilPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cpu.lsom.metrics.pcpuUtilPct.label")),
        ]),
    ];
    PerfDashboardCpuData.VSAN_CPU = [
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cpu.vsan", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.vsan.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("usedPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.vsan.usedPct.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("readyPct", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.perf.advanced.dashboards.dropdown.cpu.vsan.readyPct.label")),
        ]),
    ];
    return PerfDashboardCpuData;
})();



/***/ }),

/***/ "rcCH":
/*!*************************************************************************************!*\
  !*** ./src/app/vsan/support/util/perf-dashboard-sub-entities-data-query.service.ts ***!
  \*************************************************************************************/
/*! exports provided: PerfDashboardSubEntitiesDataQueryService, SubEntityObject, HostSubEntitiesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardSubEntitiesDataQueryService", function() { return PerfDashboardSubEntitiesDataQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubEntityObject", function() { return SubEntityObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostSubEntitiesData", function() { return HostSubEntitiesData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/perf-dashboard-view.data */ "3LVF");


/**
 * Use this object to query the sub-entities of a host
 */
class PerfDashboardSubEntitiesDataQueryService {
    constructor(perfPropertyProvider) {
        this.perfPropertyProvider = perfPropertyProvider;
        /**
         * Parse the entities object array for diskgroup, cache-disk, and capaicity-disk
         */
        this.parseDiskGroupData = (view, hostDiskgroupsMapping) => {
            if (!hostDiskgroupsMapping) {
                return [];
            }
            return hostDiskgroupsMapping.map(hostDiskgroupsData => {
                const diskgroups = hostDiskgroupsData.diskgroups;
                let subentites = null;
                switch (view) {
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DISKGROUP:
                        subentites = this.getDiskgroupEntities(hostDiskgroupsData.diskgroups);
                        break;
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DOMCOMPSCHEDULER:
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].CACHEDISK:
                        subentites = this.getCacheDiskEntities(hostDiskgroupsData.diskgroups);
                        break;
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].CLOMDISK:
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].CAPACITYDISK:
                        subentites = this.getCapacityDiskEntites(hostDiskgroupsData.diskgroups);
                        break;
                    case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DDHDISK:
                        subentites = this.getCacheDiskEntities(hostDiskgroupsData.diskgroups)
                            .concat(this.getCapacityDiskEntites(hostDiskgroupsData.diskgroups));
                        break;
                }
                const hostSubEntitiesData = new HostSubEntitiesData(hostDiskgroupsData.hostName, subentites);
                return hostSubEntitiesData;
            });
        };
        this.getDiskgroupEntities = (diskgroups) => {
            return diskgroups.map(diskgroup => new SubEntityObject(diskgroup.diskGroupName, diskgroup.diskGroupUuid));
        };
        this.getCacheDiskEntities = (diskgroups) => {
            return diskgroups.map(diskgroup => new SubEntityObject(diskgroup.cacheDisk.diskName, diskgroup.cacheDisk.diskUuid));
        };
        this.getCapacityDiskEntites = (diskgroups) => {
            let diskinfo = [];
            diskgroups.forEach(diskgroup => diskinfo = diskinfo.concat(diskgroup.capacityDisks));
            return diskinfo.map(disk => new SubEntityObject(disk.diskName, disk.diskUuid));
        };
    }
    querySubEntities(clusterRef, view) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (view) {
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DOMCOMPSCHEDULER:
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DDHDISK:
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].CACHEDISK:
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].CAPACITYDISK:
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DISKGROUP:
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].CLOMDISK:
                    return this.parseDiskGroupData(view, yield this.perfPropertyProvider.getClusterDiskMappings(clusterRef));
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].PNIC:
                    return this.parsePnics(yield this.perfPropertyProvider.getHostPhysicalAdapterMapping(clusterRef));
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].VNIC:
                    return this.parseVnics(yield this.perfPropertyProvider.getHostVnicsMapping(clusterRef));
                case _model_perf_dashboard_view_data__WEBPACK_IMPORTED_MODULE_1__["PerfDashboardView"].DISK:
                    return this.parseDiskData(yield this.perfPropertyProvider.getClusterStoragePoolDisks(clusterRef));
            }
            return null;
        });
    }
    parsePnics(hostPnicsMapping) {
        if (!hostPnicsMapping) {
            return [];
        }
        return hostPnicsMapping.map(pnicsData => new HostSubEntitiesData(pnicsData.hostName, pnicsData.pnics.map(pnic => new SubEntityObject(pnic.deviceName, pnic.hostUuid + "|" + pnic.deviceName))));
    }
    parseVnics(hostVnicsMapping) {
        if (!hostVnicsMapping) {
            return [];
        }
        return hostVnicsMapping.map(vnicsData => new HostSubEntitiesData(vnicsData.hostName, vnicsData.vnics.map(vnic => new SubEntityObject(vnic.deviceName, vnic.hostUuid +
            "|" + vnic.netStackInstanceKey + "|" + vnic.deviceName))));
    }
    parseDiskData(hostsData) {
        if (!hostsData) {
            return [];
        }
        return hostsData.map(hostData => new HostSubEntitiesData(hostData.name, hostData.diskGroups.reduce((acc, diskGroup) => acc.concat(diskGroup.disks), [])
            // Uuid is set to disk name in IoVmMetricsDialogComponent.initializeDiskPerformance()
            .map(disk => new SubEntityObject(disk.uuid, disk.uuid)))); //
    }
}
class SubEntityObject {
    constructor(name, uuid) {
        this.name = name;
        this.uuid = uuid;
    }
}
class HostSubEntitiesData {
    constructor(hostName, subentites) {
        this.hostName = hostName;
        this.subentites = subentites;
    }
}



/***/ }),

/***/ "uEIl":
/*!**************************************************************************!*\
  !*** ./src/app/vsan/support/model/perf-dashboard-cmmds-workload.data.ts ***!
  \**************************************************************************/
/*! exports provided: PerfDashboardCmmdsWorkloadData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfDashboardCmmdsWorkloadData", function() { return PerfDashboardCmmdsWorkloadData; });
/* harmony import */ var _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/vsan-util */ "UODZ");
/* harmony import */ var _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/chart/performance/perf-graph */ "lXqx");
/* Copyright 2018 VMware, Inc. All rights reserved. -- VMware Confidential */


let PerfDashboardCmmdsWorkloadData = /*@__PURE__*/ (() => {
    class PerfDashboardCmmdsWorkloadData {
    }
    PerfDashboardCmmdsWorkloadData.CMMDS_WORKLOAD_CHARTS = [
        // Inbound Stats
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cmmds.workload.inbount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.inbound.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxAccept", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxAccept.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxAgentUpdateRequest", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxAgentUpdateRequest.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxHeartbeatRequest", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxHeartbeatRequest.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxMasterUpdate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxMasterUpdate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxRetransmitRequest", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxRetransmitRequest.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxSnapshot", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxSnapshot.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("rxMisc", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.rxMisc.label")),
        ]),
        // Outbound Stats
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cmmds.workload.outbount", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.outbound.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txAgentUpdateRequest", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txAgentUpdateRequest.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txHeartbeatRequest", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txHeartbeatRequest.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txMasterCheckpoint", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txMasterCheckpoint.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txMasterCkptTried", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txMasterCkptTried.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txRetransmitRequest", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txRetransmitRequest.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txSnapshot", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txSnapshot.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txSnapshotBytes", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txSnapshotBytes.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txSnapshotTried", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txSnapshotTried.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txMasterUpdate", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txMasterUpdate.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("txMasterUpdateTried", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.txMasterUpdateTried.label")),
        ]),
        // workload batch
        _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraph"].createPerfGraph("com.vmware.vsan.perf.graph.cmmds.workload.batch", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.batch.label"), null, [
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("agentBatchesSent", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.agentBatchesSent.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("totalUpdSentInAgentBatch", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.totalUpdSentInAgentBatch.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("checkPointBatchesSent", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.checkPointBatchesSent.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("totalUpdInBatchCkpt", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.totalUpdInBatchCkpt.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("masterBatchesRecved", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.masterBatchesRecved.label")),
            new _common_component_chart_performance_perf_graph__WEBPACK_IMPORTED_MODULE_1__["PerfGraphMetrics"]("totalUpdInMasterBatches", _common_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("com.vmware.vsan.perf.graph.cmmds.workload.metrics.totalUpdInMasterBatches.label")),
        ]),
    ];
    return PerfDashboardCmmdsWorkloadData;
})();



/***/ }),

/***/ "x4hb":
/*!*******************************************************************!*\
  !*** ./src/app/vsan/support/model/navigation/support-nav.data.ts ***!
  \*******************************************************************/
/*! exports provided: SupportNavData, PerfSelectionData, SupportView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportNavData", function() { return SupportNavData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfSelectionData", function() { return PerfSelectionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportView", function() { return SupportView; });
class SupportNavData {
    constructor(view, perfSelection) {
        this.view = view;
        this.perfSelection = perfSelection;
    }
}
class PerfSelectionData {
    constructor(dashboardView, objectIdentifier = null) {
        this.dashboardView = dashboardView;
        this.objectIdentifier = objectIdentifier;
    }
}
var SupportView = /*@__PURE__*/ (function (SupportView) {
    SupportView[SupportView["OBFUSCATION"] = 0] = "OBFUSCATION";
    SupportView[SupportView["ADVANCED_PERFORMANCE"] = 1] = "ADVANCED_PERFORMANCE";
    return SupportView;
})({});



/***/ })

}]);
//# sourceMappingURL=69-es2015.js.map