(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
    /***/
    "Hg5h":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/common/component/unavailable-view/unavailable-view-spec.ts ***!
      \*********************************************************************************/

    /*! exports provided: ReasonToBeUnavailable, RequiredServicesData, RequiredService, UnavailableViewSpec */

    /***/
    function Hg5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReasonToBeUnavailable", function () {
        return ReasonToBeUnavailable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequiredServicesData", function () {
        return RequiredServicesData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequiredService", function () {
        return RequiredService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnavailableViewSpec", function () {
        return UnavailableViewSpec;
      });
      /* harmony import */


      var _navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @navigation/model/knowledge-base-id */
      "9lKY");
      /* harmony import */


      var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-dialog-util */
      "cMmx");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _vsan_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../vsan-routes */
      "w9V1");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ReasonToBeUnavailable = /*@__PURE__*/function (ReasonToBeUnavailable) {
        ReasonToBeUnavailable[ReasonToBeUnavailable["VSAN_DISABLED"] = 0] = "VSAN_DISABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["SERVICES_VIEW_COMPUTE_ONLY_CLUSTER"] = 1] = "SERVICES_VIEW_COMPUTE_ONLY_CLUSTER";
        ReasonToBeUnavailable[ReasonToBeUnavailable["SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_HOSTS"] = 2] = "SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_MOUNTED_REMOTE_DATASTORE"] = 3] = "SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_MOUNTED_REMOTE_DATASTORE";
        ReasonToBeUnavailable[ReasonToBeUnavailable["SERVICES_VIEW_CLUSTER_SHUT_DOWN"] = 4] = "SERVICES_VIEW_CLUSTER_SHUT_DOWN";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERFORMANCE_DISABLED"] = 5] = "PERFORMANCE_DISABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERFORMANCE_NOT_HEALTHY"] = 6] = "PERFORMANCE_NOT_HEALTHY";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_VIEW_NO_DATA"] = 7] = "PERF_VIEW_NO_DATA";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD"] = 8] = "PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_VIEW_NO_HOSTS"] = 9] = "PERF_VIEW_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_VIEW_COMPUTE_ONLY_NO_MOUNTED_DATASTORES"] = 10] = "PERF_VIEW_COMPUTE_ONLY_NO_MOUNTED_DATASTORES";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_VIEW_COMPUTE_ONLY_SERVER_PERFSVC_DISABLED"] = 11] = "PERF_VIEW_COMPUTE_ONLY_SERVER_PERFSVC_DISABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_NOT_ATTACHED_BLOCK_VOLUME"] = 12] = "PERF_NOT_ATTACHED_BLOCK_VOLUME";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_NOT_VM_READ_PERMISSIONS"] = 13] = "PERF_NOT_VM_READ_PERMISSIONS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA"] = 14] = "PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA_FOR_SELECTED_PERIOD"] = 15] = "PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA_FOR_SELECTED_PERIOD";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_HOST_COMPUTE_ONLY_CLUSTER_NOT_SUPPORTED"] = 16] = "PERF_HOST_COMPUTE_ONLY_CLUSTER_NOT_SUPPORTED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_VM_COMPUTE_ONLY_CLUSTER_NOT_SUPPORTED"] = 17] = "PERF_VM_COMPUTE_ONLY_CLUSTER_NOT_SUPPORTED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_NO_VSAN_DIRECT_DISKS_CLAIMED"] = 18] = "PERF_NO_VSAN_DIRECT_DISKS_CLAIMED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PROACTIVE_TESTS_NO_DATASTORE"] = 19] = "PROACTIVE_TESTS_NO_DATASTORE";
        ReasonToBeUnavailable[ReasonToBeUnavailable["DISK_MGMT_VIEW_NO_HOSTS"] = 20] = "DISK_MGMT_VIEW_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["DATA_MIGRATION_PRECHECK_VIEW_NO_HOSTS"] = 21] = "DATA_MIGRATION_PRECHECK_VIEW_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["DATA_MIGRATION_PRECHECK_VIEW_OLD_HOSTS"] = 22] = "DATA_MIGRATION_PRECHECK_VIEW_OLD_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["FAULT_DOMAINS_VIEW_NO_HOSTS"] = 23] = "FAULT_DOMAINS_VIEW_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["DATASTORE_SHARING_VIEW_NO_HOSTS"] = 24] = "DATASTORE_SHARING_VIEW_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["CAPACITY_USAGE_VIEW_NO_HOSTS"] = 25] = "CAPACITY_USAGE_VIEW_NO_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["CAPACITY_USAGE_VIEW_NO_ELIGIBLE_HOSTS"] = 26] = "CAPACITY_USAGE_VIEW_NO_ELIGIBLE_HOSTS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["CAPACITY_USAGE_VIEW_NO_CLAIMED_DISKS"] = 27] = "CAPACITY_USAGE_VIEW_NO_CLAIMED_DISKS";
        ReasonToBeUnavailable[ReasonToBeUnavailable["CAPACITY_USAGE_VIEW_NO_MOUNTED_DATASTORES"] = 28] = "CAPACITY_USAGE_VIEW_NO_MOUNTED_DATASTORES";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_DIAGNOSTICS_VIEW_CEIP_DISABLED"] = 29] = "PERF_DIAGNOSTICS_VIEW_CEIP_DISABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["PERF_DIAGNOSTICS_VIEW_DISABLED_SERVICES"] = 30] = "PERF_DIAGNOSTICS_VIEW_DISABLED_SERVICES";
        ReasonToBeUnavailable[ReasonToBeUnavailable["FILE_ANALYTICS_DISABLED"] = 31] = "FILE_ANALYTICS_DISABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["FILE_ANALYTICS_NO_DATA"] = 32] = "FILE_ANALYTICS_NO_DATA";
        ReasonToBeUnavailable[ReasonToBeUnavailable["FILE_ANALYTICS_NO_SHARE_ENABLED"] = 33] = "FILE_ANALYTICS_NO_SHARE_ENABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["FILE_ANALYTICS_ON_SHARE_NOT_ENABLED"] = 34] = "FILE_ANALYTICS_ON_SHARE_NOT_ENABLED";
        ReasonToBeUnavailable[ReasonToBeUnavailable["IO_DIAGNOSTICS_NOT_SUPPORTED_CONFIG"] = 35] = "IO_DIAGNOSTICS_NOT_SUPPORTED_CONFIG";
        ReasonToBeUnavailable[ReasonToBeUnavailable["SHARED_WITNESS_NOT_SUPPORTED"] = 36] = "SHARED_WITNESS_NOT_SUPPORTED";
        return ReasonToBeUnavailable;
      }({});

      var RequiredServicesData = /*#__PURE__*/_createClass(function RequiredServicesData() {
        _classCallCheck(this, RequiredServicesData);
      });

      var RequiredService = /*#__PURE__*/_createClass(function RequiredService(name, isEnabled, unavailableViewSpec) {
        _classCallCheck(this, RequiredService);

        this.name = name;
        this.isEnabled = isEnabled;
        this.unavailableViewSpec = unavailableViewSpec;
      });

      var UnavailableViewSpec = /*@__PURE__*/function () {
        var UnavailableViewSpec = /*#__PURE__*/function () {
          function UnavailableViewSpec(reason, lightThemeImage, darkThemeImage, statusLabel) {
            _classCallCheck(this, UnavailableViewSpec);

            this.reason = reason;
            this.lightThemeImage = lightThemeImage;
            this.darkThemeImage = darkThemeImage;
            this.statusLabel = statusLabel;
            this.featureDescription = null;
            this.kbArticleId = null;
            this.statusDescription = null;
            this.actionLabel = null;
            this.actionModuleId = null; // used to open vSAN dialog

            this.actionDialogWidth = 0;
            this.actionDialogHeight = 0;
            this.externalExtensionId = null; // used to navigate to other pages
          }

          _createClass(UnavailableViewSpec, [{
            key: "multipleServicesRequired",
            get: function get() {
              return this.requiredServicesData && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].isEmpty(this.requiredServicesData.requiredServices);
            }
          }, {
            key: "allRequiredServicesAreEnabled",
            get: function get() {
              return this.multipleServicesRequired && this.requiredServicesData.requiredServices.every(function (service) {
                return service.isEnabled;
              });
            }
            /**
             * Disable the action button based on some reason determined at runtime.
             */

          }, {
            key: "disableActionButton",
            value: function disableActionButton(reason) {
              this.actionDisable = true;
              this.actionDisableReason = reason;
            }
          }, {
            key: "setRequiredServiceStatus",
            value: function setRequiredServiceStatus(unavailableViewSpec, isEnabled) {
              if (this.multipleServicesRequired) {
                this.requiredServicesData.requiredServices.forEach(function (service) {
                  if (service.unavailableViewSpec === unavailableViewSpec) {
                    service.isEnabled = isEnabled;
                  }
                });
              }
            }
          }], [{
            key: "createInternalInstance",
            value: function createInternalInstance(reason, lightThemeImage, darkThemeImage, statusLabel, featureDescription, kbArticleId, statusDescription, actionLabel, actionModuleId, actionDialogWidth, actionDialogHeight, requiredServicesData) {
              var spec = new UnavailableViewSpec(reason, lightThemeImage, darkThemeImage, statusLabel);
              spec.featureDescription = featureDescription;
              spec.kbArticleId = kbArticleId;
              spec.statusDescription = statusDescription;
              spec.actionLabel = actionLabel;
              spec.actionModuleId = actionModuleId;
              spec.actionDialogWidth = actionDialogWidth;
              spec.actionDialogHeight = actionDialogHeight;
              spec.requiredServicesData = requiredServicesData;
              return spec;
            }
          }, {
            key: "createExternalInstance",
            value: function createExternalInstance(reason, lightThemeImage, darkThemeImage, statusLabel, actionLabel, externalExtensionId, featureDescription, kbArticleId, statusDescription) {
              var spec = new UnavailableViewSpec(reason, lightThemeImage, darkThemeImage, statusLabel);
              spec.actionLabel = actionLabel;
              spec.externalExtensionId = externalExtensionId;
              spec.featureDescription = featureDescription;
              spec.kbArticleId = kbArticleId;
              spec.statusDescription = statusDescription;
              return spec;
            }
          }, {
            key: "createRequiredService",
            value: function createRequiredService(reason, externalExtensionId, actionLabel) {
              var spec = new UnavailableViewSpec(reason, null, null, null);
              spec.actionLabel = actionLabel;
              spec.externalExtensionId = externalExtensionId;
              return spec;
            }
          }, {
            key: "getPerformanceDiagnosticsViewRequiredServicesData",
            value: function getPerformanceDiagnosticsViewRequiredServicesData() {
              var requiredServicesData = new RequiredServicesData();
              requiredServicesData.multipleServicesDescription = _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performanceDiagnosticsView.multipleServicesDescription");
              requiredServicesData.requiredServices = [new RequiredService(_util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performanceDiagnosticsView.perfServiceName"), false, UnavailableViewSpec.PERF_DISABLED), new RequiredService(_util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performanceDiagnosticsView.ceipName"), false, UnavailableViewSpec.PERF_DIAGNOSTICS_VIEW_CEIP_DISABLED)];
              return requiredServicesData;
            }
          }]);

          return UnavailableViewSpec;
        }();
        /**
         * This spec should be used when vSAN was disabled.
         */


        UnavailableViewSpec.VSAN_DISABLED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.VSAN_DISABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.generalConfig.turnedOffHeaderLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.disabled.featureDescription"), null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.disabled.statusDescription"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.disabled.actionLabel"), _vsan_routes__WEBPACK_IMPORTED_MODULE_4__["VsanRoutes"].CONFIGURE_WIZARD, 1200, 700);
        /**
         * This spec should be used for compute only cluster with hosts and mounted remote datastore
         */

        UnavailableViewSpec.SERVICES_VIEW_COMPUTE_ONLY_CLUSTER = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.SERVICES_VIEW_COMPUTE_ONLY_CLUSTER, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.unavailableView.computeCluster.statusLabel"), "", null);
        /**
         * This spec should be used for compute only cluster with no mounted remote datastore
         */

        UnavailableViewSpec.SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_MOUNTED_REMOTE_DATASTORE = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_MOUNTED_REMOTE_DATASTORE, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.unavailableView.computeCluster.statusLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.unavailableView.computeCluster.actionLabel"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].CLUSTER_REMOTE_DATASTORES);
        /**
         * This spec should be used for compute only cluster without hosts
         */

        UnavailableViewSpec.SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.SERVICES_VIEW_COMPUTE_ONLY_CLUSTER_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART);
        /**
         * This spec should be used when the cluster has been shut down.
         */

        UnavailableViewSpec.SERVICES_VIEW_CLUSTER_SHUT_DOWN = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.SERVICES_VIEW_CLUSTER_SHUT_DOWN, "robot_maintenance.svg", "robot_maintenance_dark.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.unavailableView.clusterHasBeenShutDown.statusLabel"), null, null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.powerOn.title"), "clusterPowerOn", _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].CLUSTER_POWER_ON_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].CLUSTER_POWER_ON_DIALOG.height);
        /**
         * This spec should be used when vSAN was disabled and there are no hosts in this cluster.
         */

        UnavailableViewSpec.VSAN_DISABLED_NO_HOSTS = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.VSAN_DISABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.generalConfig.turnedOffHeaderLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.disabled.featureDescription"), null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.disabled.statusDescription"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.services.disabled.actionLabel"), "configureWizard/emptyCluster", 700, 530);
        /**
         * This spec should be used when performance service was disabled.
         */

        UnavailableViewSpec.PERF_DISABLED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERFORMANCE_DISABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.statusLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.featureDescription"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.enable"), _vsan_routes__WEBPACK_IMPORTED_MODULE_4__["VsanRoutes"].PERFORMANCE_CONFIG, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.height);
        /**
         * This spec should be used when block volume is not attached to a vm.
         */

        UnavailableViewSpec.PERF_NOT_ATTACHED_BLOCK_VOLUME = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_NOT_ATTACHED_BLOCK_VOLUME, "robot-no-data.svg", "robot-no-data-dark.svg", null, null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("cns.volumes.not.attached.volume.statusLabel"));
        /**
         * This spec should be used when block volume is not attached to a vm.
         */

        UnavailableViewSpec.PERF_NOT_VM_READ_PERMISSIONS = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_NOT_VM_READ_PERMISSIONS, "robot-no-data.svg", "robot-no-data-dark.svg", null, null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("cns.volumes.performance.not.vm.read.permissions.statusLabel"));
        /**
         * This spec should be used when performance service was just enabled.
         */

        UnavailableViewSpec.PERF_VIEW_NO_DATA = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_VIEW_NO_DATA, "filter-no-results.svg", "filter-no-results-dk.svg", null, null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfViewNoData.statusDescription"));
        /**
         * Spec used when performance service is in unhealthy state, respectively no perf metrics can be loaded.
         */

        UnavailableViewSpec.PERF_UNHEALTHY = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.PERFORMANCE_NOT_HEALTHY, "admin-workstation.svg", "admin-workstation-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.unhealthy.statusLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.unhealthy.actionLabel"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].CLUSTER_SERVICES, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.unhealthy.description"));
        /**
         * Used in cluster > monitor > performance when the cluster is compute-only and there are no mounted datastores.
         */

        UnavailableViewSpec.PERF_COMPUTE_ONLY_NO_MOUNTED_DATASTORES = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_VIEW_COMPUTE_ONLY_NO_MOUNTED_DATASTORES, "admin-workstation.svg", "admin-workstation-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.computeOnlyCluster.noMountedDatastores.statusLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.computeOnlyCluster.featureDescription"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.computeOnlyCluster.noMountedDatastores.actionLabel"), "mountRemoteDatastore", 1200, 605);
        /**
         * This spec should be used when performance of compute cluster is observed
         * and the selected server cluster has its performance service disabled.
         */

        UnavailableViewSpec.PERF_COMPUTE_ONLY_SERVER_PERFSVC_DISABLED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_VIEW_COMPUTE_ONLY_SERVER_PERFSVC_DISABLED, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfView.computeOnly.disabledServerPerfsvc.statusLabel"));
        /**
         * This spec should be used when performance service was disabled during the selected period.
         */

        UnavailableViewSpec.PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_VIEW_NO_DATA_FOR_SELECTED_PERIOD, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfViewNoDataForSelectedPeriod.statusLabel"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfViewNoDataForSelectedPeriod.statusDescription"));
        /**
         * This spec should be used on Performance for support view when selecting CMMDS
         * and performance service was just enabled.
         */

        UnavailableViewSpec.PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA, "admin-workstation.svg", null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfViewNoData.statusLabel"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfForSupportViewCmmdsNoData.statusDescription"));
        /**
         * This spec should be used on Performance for support view when selecting CMMDS
         * and performance service was disabled during the selected period.
         */

        UnavailableViewSpec.PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA_FOR_SELECTED_PERIOD = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_FOR_SUPPORT_VIEW_CMMDS_NO_DATA_FOR_SELECTED_PERIOD, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfViewNoDataForSelectedPeriod.statusLabel"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.perfForSupportViewCmmdsNoDataForSelectedPeriod.statusDescription"));
        /**
         * This spec should be used on Capacity history view when performance service was disabled.
         */

        UnavailableViewSpec.PERF_DISABLED_ON_CAPACITY_VIEW = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERFORMANCE_DISABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.statusLabel"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.statusDescription"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.enable"), _vsan_routes__WEBPACK_IMPORTED_MODULE_4__["VsanRoutes"].PERFORMANCE_CONFIG, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.height);
        /**
         * This spec should be used on file analytics view when performance service was disabled.
         */

        UnavailableViewSpec.PERF_DISABLED_ON_ANALYTICS_VIEW = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERFORMANCE_DISABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.statusLabel"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.analytics.statusDescription"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.enable"), _vsan_routes__WEBPACK_IMPORTED_MODULE_4__["VsanRoutes"].PERFORMANCE_CONFIG, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.width, _util_vsan_dialog_util__WEBPACK_IMPORTED_MODULE_2__["VsanDialogUtil"].PERF_SVC_EDIT_ACTION_DIALOG.height);
        /**
         * This spec should be used on Performance view when no hosts are in this cluster.
         */

        UnavailableViewSpec.PERF_VIEW_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.PERF_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.service.performance.disabled.featureDescription"));
        /**
         * This spec should be used on Performance view when no hosts are in this cluster and the cluster is compute-only.
         */

        UnavailableViewSpec.PERF_VIEW_COMPUTE_ONLY_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.PERF_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.computeOnlyCluster.featureDescription"));
        /**
         * Host from compute-only clusters do not support vSAN performance monitoring.
         */

        UnavailableViewSpec.HOST_PERF_COMPUTE_ONLY_NOT_SUPPORTED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_HOST_COMPUTE_ONLY_CLUSTER_NOT_SUPPORTED, "performance-not-supported-dark.svg", "performance-not-supported-light.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.vm.performance.computeOnlyHostUnsupported"));
        /**
         * VM using the compute of a compute-only cluster does not support performance monitoring.
         */

        UnavailableViewSpec.VM_PERF_COMPUTE_ONLY_NOT_SUPPORTED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_VM_COMPUTE_ONLY_CLUSTER_NOT_SUPPORTED, "performance-not-supported-dark.svg", "performance-not-supported-light.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.monitor.vm.performance.computeOnlyVmUnsupported"));
        /**
         * Host from compute-only clusters do not support vSAN performance monitoring.
         */

        UnavailableViewSpec.PROACTIVE_TESTS_NO_DATASTORE = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PROACTIVE_TESTS_NO_DATASTORE, "admin-workstation.svg", "admin-workstation-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.health.monitor.proactive.noDatastoreMessage"));
        /**
         * This spec should be used on disk management page when no hosts are in this cluster.
         */

        UnavailableViewSpec.DISK_MGMT_VIEW_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.DISK_MGMT_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.diskMgmtViewNoDisks.featureDescription"));
        /**
         * This spec should be used on data migration pre-check page when no hosts are in this cluster.
         */

        UnavailableViewSpec.DATA_MIGRATION_PRECHECK_VIEW_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.DATA_MIGRATION_PRECHECK_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.dataMigrationPrecheckViewNoHosts.featureDescription"));
        /**
         * This spec should be used on data migration pre-check page
         * when there are hosts in the cluster with ESXi version prior to 6.7 U3.
         */

        UnavailableViewSpec.DATA_MIGRATION_PRECHECK_VIEW_OLD_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.DATA_MIGRATION_PRECHECK_VIEW_OLD_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.dataMigrationPrecheck.notSupported"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.dataMigrationPrecheckViewNoHosts.featureDescription"));
        /**
         * This spec should be used on fault domains page when no hosts in this cluster.
         */

        UnavailableViewSpec.FAULT_DOMAINS_VIEW_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.FAULT_DOMAINS_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.faultDomainsViewNoHosts.featureDescription"));
        /**
         * This spec should be used on datastore sharing page when no hosts are in this cluster.
         */

        UnavailableViewSpec.DATASTORE_SHARING_VIEW_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.DATASTORE_SHARING_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART);
        /**
         * This spec should be used on capacity usage view when no hosts are in cluster.
         */

        UnavailableViewSpec.CAPACITY_USAGE_VIEW_NO_HOSTS = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.CAPACITY_USAGE_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.featureDescription"));
        /**
         * This spec should be used on capacity usage view when there are no hosts in a compute vSAN cluster.
         */

        UnavailableViewSpec.CAPACITY_USAGE_VIEW_NO_HOSTS_COMPUTE = UnavailableViewSpec.createExternalInstance(ReasonToBeUnavailable.CAPACITY_USAGE_VIEW_NO_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.noHostsLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.common.goToQuickstart"), _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].QUICKSTART, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.featureDescription.computeOnly"));
        /**
         * This spec should be used on capacity usage view when there are no eligible hosts in cluster.
         */

        UnavailableViewSpec.CAPACITY_USAGE_VIEW_NO_ELIGIBLE_HOSTS = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.CAPACITY_USAGE_VIEW_NO_ELIGIBLE_HOSTS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.noCapacityDataAvailable"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.noEligibleHosts"));
        /**
         * This spec should be used on capacity usage view when no disks are claimed.
         */

        UnavailableViewSpec.CAPACITY_USAGE_VIEW_NO_CLAIMED_DISKS = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.CAPACITY_USAGE_VIEW_NO_CLAIMED_DISKS, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.noCapacityDataAvailable"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.featureDescription"), null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.noClaimedDisks"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.actions.semiAutoClaimDisks.label"), "diskManagement/semiAutoClaim", 1200, 650);
        /**
         * This spec should be used on capacity usage view when there are no mounted datastores on a compute cluster
         */

        UnavailableViewSpec.CAPACITY_USAGE_NO_MOUNTED_DATASTORES = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.CAPACITY_USAGE_VIEW_NO_MOUNTED_DATASTORES, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.noMountedDatastores"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.featureDescription.computeOnly"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.capacityUsageView.mountRemoteDatastores"), "mountRemoteDatastore", 1200, 605);
        /**
         * This spec should be used on performance diagnostics page when CEIP is disabled.
         */

        UnavailableViewSpec.PERF_DIAGNOSTICS_VIEW_CEIP_DISABLED = UnavailableViewSpec.createRequiredService(ReasonToBeUnavailable.PERF_DIAGNOSTICS_VIEW_CEIP_DISABLED, _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["PlatformExtension"].CEIP_VIEW, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.enable"));
        /**
         * This spec should be used on performance diagnostics page when performance service or CEIP is disabled.
         */

        UnavailableViewSpec.PERF_DIAGNOSTICS_VIEW_DISABLED_SERVICES = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_DIAGNOSTICS_VIEW_DISABLED_SERVICES, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performanceDiagnosticsView.statusLabel"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performanceDiagnosticsView.featureDescription"), _navigation_model_knowledge_base_id__WEBPACK_IMPORTED_MODULE_0__["KnowledgeBaseId"].PERFORMANCE_DIAGNOSTICS, null, null, null, null, null, UnavailableViewSpec.getPerformanceDiagnosticsViewRequiredServicesData());
        /**
         * This spec should be used when file analytics service is disabled.
         */

        UnavailableViewSpec.FILE_ANALYTICS_DISABLED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.FILE_ANALYTICS_DISABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.monitor.file.analytics.disabled.label"), null, null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.enable"), "enableFileAnalytics", 800, 500);
        /**
         * This spec should be used when file analytics service is enabled, but hasn't collected any data yet.
         */

        UnavailableViewSpec.FILE_ANALYTICS_NO_DATA = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.FILE_ANALYTICS_NO_DATA, "admin-workstation.svg", "admin-workstation-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.monitor.file.analytics.no.data.label"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.monitor.file.analytics.no.data.description"));
        /**
         * This spec should be used when file analytics service is not enabled on any file share.
         */

        UnavailableViewSpec.FILE_ANALYTICS_NO_SHARE_ENABLED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.FILE_ANALYTICS_NO_SHARE_ENABLED, "robot-no-data.svg", "robot-no-data-dark.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.monitor.file.analytics.no.share.indexing.enabled.label"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.monitor.file.analytics.no.share.indexing.enabled.description"));
        /**
         * This spec should be used when file analytics service is not enabled on a specific file share.
         * It provides action for enabling analytics on the share.
         */

        UnavailableViewSpec.FILE_ANALYTICS_ON_SHARE_NOT_ENABLED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.FILE_ANALYTICS_ON_SHARE_NOT_ENABLED, "robot_enable_service.svg", "robot_enable_service_dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.cluster.monitor.file.analytics.share.disabled.label"), null, null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.common.enable"), "editShareFileAnalytics", 800, 300);
        /**
         * This spec should be used when no vSAN Direct disks are claimed, but the vSAN Direct Performance tab is selected.
         */

        UnavailableViewSpec.PERF_NO_VSAN_DIRECT_DISKS_CLAIMED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.PERF_NO_VSAN_DIRECT_DISKS_CLAIMED, "admin-workstation.svg", "admin-workstation-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performance.vsanDirect.noDiskClaimed.label"), null, null, _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.disabledService.performance.vsanDirect.noDiskClaimed.description"));
        /**
         * This spec should be used on VM IO Diagnostics page when cluster configuration is not supported.
         */

        UnavailableViewSpec.IO_DIAGNOSTICS_NOT_SUPPORTED_CONFIG = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.IO_DIAGNOSTICS_NOT_SUPPORTED_CONFIG, "404-robot-detective.svg", "404-robot-detective-dk.svg", null);
        /**
         * This spec should be used on shared witness specific pages when the host doesn't support shared witness.
         */

        UnavailableViewSpec.SHARED_WITNESS_NOT_SUPPORTED = UnavailableViewSpec.createInternalInstance(ReasonToBeUnavailable.SHARED_WITNESS_NOT_SUPPORTED, "404-robot-detective.svg", "404-robot-detective-dk.svg", _util_vsan_util__WEBPACK_IMPORTED_MODULE_3__["VsanUiUtils"].getString("vsan.sharedWitness.notSupported"));
        return UnavailableViewSpec;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=9-es5.js.map