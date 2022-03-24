(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "QOW4":
/*!******************************************************************************************************!*\
  !*** ./src/app/vsan/disk-management/views/validation/disk-management-action-availability.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: DiskManagementActionAvailabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskManagementActionAvailabilityService", function() { return DiskManagementActionAvailabilityService; });
/* harmony import */ var _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/claim-option */ "WfVG");
/* harmony import */ var _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @generated/connection-state */ "dOyF");
/* harmony import */ var _generated_disk_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generated/disk-data */ "1yrm");
/* harmony import */ var _generated_disk_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generated/disk-type */ "3GN0");
/* harmony import */ var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/disk-mgmt-disk.util */ "EW68");
/* harmony import */ var _util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/disk-mgmt-host.util */ "715e");
/* harmony import */ var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @util/disk-mgmt.util */ "dSru");
/* harmony import */ var _util_validation_action_available_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @util/validation/action-available-status */ "klmU");
/* harmony import */ var _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @util/validation/validator */ "/rwm");
/* harmony import */ var _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @util/validation/validators-group */ "baj+");
/* harmony import */ var _util_vsan_disk_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @util/vsan-disk-util */ "YzqT");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _disk_group_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./disk-group-error */ "vrMH");














var DeviceState = _generated_disk_data__WEBPACK_IMPORTED_MODULE_2__["DiskData"].DeviceState;
/**
 * This service holds:
 *    1) The validation logic related to disk management actions. It stores action ids and mappings between them and
 *    the validations. Based on the specified actionId and context this class validates the action availability.
 *    2) Subjects and observables to facilitate sending and subscribing to the actions' result between components.
 */
let DiskManagementActionAvailabilityService = /*@__PURE__*/ (() => {
    class DiskManagementActionAvailabilityService {
        constructor(spaceEfficiencyService) {
            this.spaceEfficiencyService = spaceEfficiencyService;
            this.taskStarted = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            this.onTaskStarted = this.taskStarted.asObservable();
            this.objectsViewSelected = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            this.onObjectsViewSelected = this.objectsViewSelected.asObservable();
            this.hostDetailsViewSelected = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
            this.onHostDetailsViewSelected = this.hostDetailsViewSelected.asObservable();
            /*
             * Permission checks
             */
            this.hasEditPermission = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !context.hasEditPermission, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.common.nopermissions"));
            /*
             * Validates that vSAN Max is enabled on the cluster.
             */
            this.isVsanMaxEnabled = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((ctx) => { var _a; return !((_a = ctx.vsanConfig) === null || _a === void 0 ? void 0 : _a.isVsanMaxEnabled); }, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.services.vsan.max.disabled.reason"));
            /*
             * Whether the cluster is empty when checking for vSAN managed disk claim.
             * Not a required validation if the vSAN managed disk claim is already enabled,
             * as we want to allow the users to disable it.
             */
            this.isNotEmptyCluster = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"](
            // When the cluster is empty do not allow enabling this setting,
            // however if it was already enabled we should let the user disable it.
            (ctx) => { var _a; return !((_a = ctx.vsanConfig) === null || _a === void 0 ? void 0 : _a.isDiskClaimVsanManaged) && ctx.isEmptyCluster; }, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.services.vsan.max.emptyCluster.reason"));
            /*
             * Validates that auto claim mode is not enabled.
             */
            this.isNotAutoClaimMode = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.autoClaimMode, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.autoclaimMode"));
            /*
             * Validates that the cluster has eligible disks for claiming.
             */
            this.hasClusterEligibleDisks = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !_util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_5__["DiskMgmtHostUtil"].getEligibleDiskCount(context.allHosts), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.actions.semiAutoClaimDisks.description.disabled"));
            /*
             * Validates that the cluster has the disk group pre-check capability enabled and the host can be placed in MM
             * with the current user's permissions.
             */
            this.isDiskGroupPreCheckAllowed = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.clusterCapabilities.isDiskResourcePrecheckSupported && !context.hasHostMaintenancePermission, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.common.nopermissions"));
            /*
             * Validates that the cluster has the host pre-check capability enabled and the host can be placed in MM
             * with the current user's permissions.
             */
            this.isHostPreCheckAllowed = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.clusterCapabilities.isHostResourcePrecheckSupported && !context.hasHostMaintenancePermission, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.common.nopermissions"));
            /*
             * Validates that the cluster has the disk pre-check capability enabled and the host can be placed in MM
             * with the current user's permissions.
             */
            this.isDiskPreCheckAllowed = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.clusterCapabilities.isDiskResourcePrecheckSupported && !context.hasHostMaintenancePermission, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.common.nopermissions"));
            /*
             * Validates that the cluster has objects on its hosts.
             */
            this.clusterHasObjectUuids = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !(context.allHosts && context.allHosts.some(this.hasObjectUuids)), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.actions.viewClusterObjects.description.disabled"));
            /*
             * Host related checks
             */
            this.hostIsConnected = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.host.state !== _generated_connection_state__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].connected, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.hostDisconnected"));
            this.hostIsNotInMaintenanceMode = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.host.isInMaintenanceMode, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.hostInMaintenanceMode"));
            this.isNotWitnessHost = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.host.isWitnessHost, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.unsupportedWitness"));
            this.hostHasObjectUuids = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !this.hasObjectUuids(context.host), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.actions.viewHostObjects.description.disabled"));
            this.hostHasEligibleDisks = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !_util_disk_mgmt_host_util__WEBPACK_IMPORTED_MODULE_5__["DiskMgmtHostUtil"].getClaimDistribution(context.host).get(_util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_6__["ClaimableState"].USABLE), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.actions.semiAutoClaimDisks.description.disabled"));
            /*
             * Disk group related checks
             */
            this.diskGroupIsNotLocked = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.diskGroup.isLocked, (context) => context.actionId !== DiskManagementActionAvailabilityService.PRE_CHECK_ID
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.lockedDiskGroup")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.unsupportedLockedDiskGroup"));
            this.diskGroupIsNotMounted = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.diskGroup.isMounted, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.mountedDiskGroup"));
            this.diskGroupIsMounted = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !context.diskGroup.isMounted, (context) => context.actionId !== DiskManagementActionAvailabilityService.PRE_CHECK_ID
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.unmountedDiskGroups")
                : _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.unsupportedUnmountedDiskGroup"));
            this.diskGroupRecreationIsPossible = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => this.checkDiskGroup(context) !== null, (context) => {
                switch (this.checkDiskGroup(context)) {
                    case _disk_group_error__WEBPACK_IMPORTED_MODULE_13__["DiskGroupError"].ALL_CAPACITY_DISKS_ARE_UNHEALTHY:
                        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.unhealthyCapacityDisks");
                    case _disk_group_error__WEBPACK_IMPORTED_MODULE_13__["DiskGroupError"].CACHE_DISK_IS_UNHEALTHY:
                        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.unhealthyCacheDisk");
                }
            });
            this.diskGroupHasObjectUuids = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !this.hasObjectUuids(context.diskGroup), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.actions.viewGroupObjects.description.disabled"));
            /**
             * Disk related checks
             */
            this.diskIsMounted = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !_util_vsan_disk_util__WEBPACK_IMPORTED_MODULE_10__["VsanDiskUtil"].isVsanDiskMounted(context.storageData.storage), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.unsupportedUnmountedDiskGroup"));
            this.diskIsUnMounted = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => _util_vsan_disk_util__WEBPACK_IMPORTED_MODULE_10__["VsanDiskUtil"].isVsanDiskMounted(context.storageData.storage), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.mountedDiskGroup"));
            this.diskIsNotDeadOrWithError = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.storageData.storage.deviceState === DeviceState.ERROR, _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.diskInDeadOrError"));
            this.isVsanCapacityDisk = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => context.storageData.storage.isMappedAsCache, (context) => {
                return context.actionId === DiskManagementActionAvailabilityService.DISK_PRE_CHECK_ID
                    ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.unsupportedCacheDisk")
                    : _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.diskmanagement.action.unsupportedReason.cacheDisk");
            });
            this.spaceEfficiencySupportDiskPreCheck = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !this.spaceEfficiencyService.isDiskPreCheckEvacuationSupported(context.spaceEfficiencyConfig), _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString("vsan.dialog.precheckEvacuation.deduplicationEnabled"));
            this.storageHasObjectUuids = new _util_validation_validator__WEBPACK_IMPORTED_MODULE_8__["Validator"]((context) => !this.hasObjectUuids(context.storageData.storage), (context) => _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString(this.isPmem(context)
                ? "vsan.actions.viewDeviceObjects.description.disabled"
                : "vsan.actions.viewDiskObjects.description.disabled"));
            this.hasObjectUuids = (entity) => !_util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].isEmpty(entity.objectUuids);
            this.isPmem = (context) => context.storageData.type === _generated_disk_type__WEBPACK_IMPORTED_MODULE_3__["DiskType"].PMEM;
            this.checkAvailability = (ctx) => {
                switch (ctx.actionId) {
                    case DiskManagementActionAvailabilityService.VIEW_HOST_STORAGE_AND_GROUPS_ID:
                        return this.validate(this.viewDisksAndGroupsAvailability, ctx, "vsan.actions.viewDisksAndGroups.description");
                    case DiskManagementActionAvailabilityService.VIEW_CLUSTER_OBJECTS_ID:
                        return this.validate(this.viewClusterObjectsAvailability, ctx, "vsan.actions.viewClusterObjects.description");
                    case DiskManagementActionAvailabilityService.VIEW_HOST_OBJECTS_ID:
                        return this.validate(this.viewHostObjectsAvailability, ctx, "vsan.actions.viewHostObjects.description");
                    case DiskManagementActionAvailabilityService.VIEW_GROUP_OBJECTS_ID:
                        return this.validate(this.viewDiskGroupObjectsAvailability, ctx, "vsan.actions.viewGroupObjects.description");
                    case DiskManagementActionAvailabilityService.ADD_DISKS_TO_DISK_GROUP_ID:
                        return this.validate(this.addDisksToDiskGroupAvailability, ctx, "vsan.actions.addDiskToDiskGroup.description");
                    case DiskManagementActionAvailabilityService.DELETE_DISK_GROUP_ID:
                        return this.validate(this.removeDiskGroupAvailability, ctx, "vsan.actions.deleteDiskGroup.description");
                    case DiskManagementActionAvailabilityService.RECREATE_DISK_GROUP_ID:
                        return this.validate(this.recreateDiskGroupAvailability, ctx, "vsan.actions.recreateDiskGroup.description");
                    case DiskManagementActionAvailabilityService.MOUNT_DISK_GROUP_ID:
                        return this.validate(this.mountDiskGroupAvailability, ctx, "vsan.actions.mountDiskGroup.description");
                    case DiskManagementActionAvailabilityService.UNMOUNT_DISK_GROUP_ID:
                        return this.validate(this.unmountDiskGroupAvailability, ctx, "vsan.actions.unmountDiskGroup.description");
                    case DiskManagementActionAvailabilityService.SEMI_AUTO_CLAIM_DISKS_ID:
                        return this.validate(this.semiAutoClaimDisksAvailability, ctx, "vsan.actions.semiAutoClaimDisks.description");
                    case DiskManagementActionAvailabilityService.CREATE_DISK_GROUP_ID:
                        return this.validate(this.createDiskGroupAvailability, ctx, "vsan.actions.createDiskGroup.description");
                    case DiskManagementActionAvailabilityService.PRE_CHECK_ID:
                        return ctx.diskGroup
                            ? this.validate(this.diskGroupPreCheckAvailability, ctx, this.diskGroupPreCheckSuccessKey(ctx))
                            : this.validate(this.hostPreCheckAvailability, ctx, this.hostPreCheckSuccessKey(ctx));
                    case DiskManagementActionAvailabilityService.ADD_DISK_TO_DISK_GROUP_ID:
                        return this.validate(this.addDiskToDiskGroupAvailability, ctx, "vsan.actions.addDiskToDiskGroup.description");
                    case DiskManagementActionAvailabilityService.DISK_PRE_CHECK_ID:
                        return this.validate(this.diskPreCheckAvailability, ctx, this.diskPreCheckSuccessKey(ctx));
                    case DiskManagementActionAvailabilityService.DELETE_VSAN_DISK_ID:
                        return this.validate(this.deleteVsanDiskAvailability, ctx, "vsan.actions.deleteDiskFromDiskGroup.description");
                    case DiskManagementActionAvailabilityService.DELETE_VSAN_DIRECT_DISK_ID:
                        return this.validate(this.deleteVsanDirectDiskAvailability, ctx, "vsan.actions.deleteVsanDirectDisk.description");
                    case DiskManagementActionAvailabilityService.VIEW_STORAGE_OBJECTS_ID:
                        return this.validate(this.viewStorageObjectsAvailability, ctx, this.viewStorageObjectsSuccessKey(ctx));
                    case DiskManagementActionAvailabilityService.TURN_LED_ON_ID:
                        return this.validate(this.toggleDiskLedAvailability, ctx, "vsan.actions.turnLedOn.description");
                    case DiskManagementActionAvailabilityService.TURN_LED_OFF_ID:
                        return this.validate(this.toggleDiskLedAvailability, ctx, "vsan.actions.turnLedOff.description");
                    case DiskManagementActionAvailabilityService.MARK_DISK_AS_SSD_ID:
                        return this.validate(this.changeDiskTypeAvailability, ctx, "storage.adapters.devices.action.tagAsSsd");
                    case DiskManagementActionAvailabilityService.MARK_DISK_AS_HDD_ID:
                        return this.validate(this.changeDiskTypeAvailability, ctx, "storage.adapters.devices.action.untagAsSsd");
                    case DiskManagementActionAvailabilityService.MARK_DISK_AS_LOCAL_ID:
                        return this.validate(this.changeDiskTypeAvailability, ctx, "storage.adapters.devices.action.markAsLocal");
                    case DiskManagementActionAvailabilityService.MARK_DISK_AS_REMOTE_ID:
                        return this.validate(this.changeDiskTypeAvailability, ctx, "storage.adapters.devices.action.markAsRemote");
                    case DiskManagementActionAvailabilityService.ERASE_DISK_PARTITIONS_ID:
                        return this.validate(this.eraseDiskPartitionsAvailability, ctx, "storage.adapters.devices.action.erasePartitions");
                    case DiskManagementActionAvailabilityService.STOP_MANAGING_PMEM_ID:
                        return this.validate(this.stopManagingPmemAvailability, ctx, "vsan.actions.stopManagingPmem.description");
                    case DiskManagementActionAvailabilityService.VIEW_DUPLICATE_PCI_ID_DEVICES:
                        return this.validate(this.viewDuplicatePciIdDevicesAvailability, ctx, "vsan.cluster.duplicatePciIdDevices.diskMgmt.dialog.label");
                    case DiskManagementActionAvailabilityService.ADD_DISKS_TO_STORAGE_POOL_ID:
                        return this.validate(this.addDisksToStoragePoolAvailability, ctx, "vsan.dialog.addDisksToStoragePool.title");
                    case DiskManagementActionAvailabilityService.MOUNT_DISK_ID:
                        return this.validate(this.mountDiskToStoragePoolAvailability, ctx, "vsan.dialog.mountDisk.dialogTitle");
                    case DiskManagementActionAvailabilityService.UNMOUNT_DISK_ID:
                        return this.validate(this.unmountDiskFromStoragePoolAvailability, ctx, "vsan.actions.unmountDisk.label");
                    case DiskManagementActionAvailabilityService.EDIT_VSAN_MANAGED_DISK_CLAIM_ID:
                        return this.validate(this.editVsanManagedDiskClaimAvailability, ctx);
                }
            };
            // Cluster level action availabilities
            this.semiAutoClaimDisksAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hasClusterEligibleDisks,
            ]);
            this.stopManagingPmemAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
            ]);
            this.viewClusterObjectsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.clusterHasObjectUuids,
            ]);
            this.viewDuplicatePciIdDevicesAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([this.hasEditPermission]);
            this.editVsanManagedDiskClaimAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.isVsanMaxEnabled,
                this.isNotEmptyCluster,
            ]);
            this.addDisksToStoragePoolAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.hostHasEligibleDisks,
            ]);
            this.unmountDiskFromStoragePoolAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.diskIsMounted,
            ]);
            this.mountDiskToStoragePoolAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.diskIsUnMounted,
            ]);
            // Host action availabilities
            this.createDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.hostPreCheckAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
                this.hostIsNotInMaintenanceMode,
                this.isNotWitnessHost,
                this.isHostPreCheckAllowed,
            ]);
            this.viewDisksAndGroupsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
            ]);
            this.viewHostObjectsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
                this.hostHasObjectUuids,
            ]);
            // Disk group action availabilities
            this.addDisksToDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
                this.diskGroupIsNotLocked,
            ]);
            this.diskGroupPreCheckAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
                this.hostIsNotInMaintenanceMode,
                this.isNotWitnessHost,
                this.isDiskGroupPreCheckAllowed,
                this.diskGroupIsNotLocked,
                this.diskGroupIsMounted,
            ]);
            this.removeDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.recreateDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
                this.diskGroupIsNotLocked,
                this.diskGroupRecreationIsPossible,
                this.diskGroupIsMounted,
            ]);
            this.mountDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.diskGroupIsNotMounted,
            ]);
            this.unmountDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.diskGroupIsMounted,
            ]);
            this.viewDiskGroupObjectsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
                this.diskGroupHasObjectUuids,
            ]);
            // Disk action availabilities
            this.addDiskToDiskGroupAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.diskPreCheckAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
                this.hostIsNotInMaintenanceMode,
                this.isNotWitnessHost,
                this.isDiskPreCheckAllowed,
                this.diskIsMounted,
                this.diskIsNotDeadOrWithError,
                this.isVsanCapacityDisk,
                this.spaceEfficiencySupportDiskPreCheck,
            ]);
            this.deleteVsanDiskAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
                this.isVsanCapacityDisk,
            ]);
            this.deleteVsanDirectDiskAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.toggleDiskLedAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.changeDiskTypeAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.eraseDiskPartitionsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hasEditPermission,
                this.hostIsConnected,
                this.isNotAutoClaimMode,
            ]);
            this.viewStorageObjectsAvailability = new _util_validation_validators_group__WEBPACK_IMPORTED_MODULE_9__["ValidatorsGroup"]([
                this.hostIsConnected,
                this.storageHasObjectUuids,
            ]);
            this.diskPreCheckSuccessKey = (context) => {
                return context.clusterCapabilities.isDiskResourcePrecheckSupported
                    ? "vsan.actions.goToPrecheckDataMigration.disk.description"
                    : "vsan.actions.precheckDiskEvacuation.description";
            };
            this.diskGroupPreCheckSuccessKey = (context) => {
                return context.clusterCapabilities.isDiskResourcePrecheckSupported
                    ? "vsan.actions.goToPrecheckDataMigration.diskGroup.description"
                    : "vsan.actions.precheckDiskGroupEvacuation.description";
            };
            this.hostPreCheckSuccessKey = (context) => {
                return context.clusterCapabilities.isHostResourcePrecheckSupported
                    ? "vsan.actions.goToPrecheckDataMigration.host.description"
                    : "vsan.actions.precheckHostEvacuation.description";
            };
            this.viewStorageObjectsSuccessKey = (context) => {
                return this.isPmem(context)
                    ? "vsan.actions.viewDeviceObjects.description"
                    : "vsan.actions.viewDiskObjects.description";
            };
        }
        checkDiskGroup(context) {
            const capacityDisks = context.diskGroup.disks.filter(disk => disk.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForStorage);
            const unhealthyCapacityDisks = capacityDisks.filter(disk => !_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].isHealthy(disk));
            if (capacityDisks.length === unhealthyCapacityDisks.length) {
                return _disk_group_error__WEBPACK_IMPORTED_MODULE_13__["DiskGroupError"].ALL_CAPACITY_DISKS_ARE_UNHEALTHY;
            }
            const cacheDiskIsUnhealthy = !_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_4__["DiskMgmtDiskUtil"].isHealthy(context.diskGroup.disks.find(disk => disk.claimOption === _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].ClaimForCache));
            if (cacheDiskIsUnhealthy) {
                return _disk_group_error__WEBPACK_IMPORTED_MODULE_13__["DiskGroupError"].CACHE_DISK_IS_UNHEALTHY;
            }
            return null;
        }
        validate(validatorsGroup, context, successMessageKey = "") {
            const errorMessage = validatorsGroup.getFirstError(context);
            const isActionAvailable = errorMessage === null;
            const statusMessage = isActionAvailable
                ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_11__["VsanUiUtils"].getString(successMessageKey)
                : errorMessage;
            return new _util_validation_action_available_status__WEBPACK_IMPORTED_MODULE_7__["ActionAvailableStatus"](isActionAvailable, statusMessage);
        }
    }
    // Cluster level action IDs
    DiskManagementActionAvailabilityService.SEMI_AUTO_CLAIM_DISKS_ID = "vsphere.core.cluster.vsan.semiAutoClaimDisks";
    DiskManagementActionAvailabilityService.STOP_MANAGING_PMEM_ID = "vsphere.core.cluster.vsan.stopManagingPmemAction";
    DiskManagementActionAvailabilityService.VIEW_CLUSTER_OBJECTS_ID = "vsphere.core.cluster.vsan.viewObjects";
    DiskManagementActionAvailabilityService.VIEW_DUPLICATE_PCI_ID_DEVICES = "viewDuplicatePciIdDevices";
    DiskManagementActionAvailabilityService.EDIT_VSAN_MANAGED_DISK_CLAIM_ID = "editVsanManagedDiskClaim";
    // Host and disk group common action IDs
    DiskManagementActionAvailabilityService.PRE_CHECK_ID = "vsphere.core.cluster.vsan.preCheckEvacuationAction";
    // Host action IDs
    DiskManagementActionAvailabilityService.CREATE_DISK_GROUP_ID = "vsphere.core.cluster.vsan.createDiskGroupAction";
    DiskManagementActionAvailabilityService.VIEW_HOST_OBJECTS_ID = "vsphere.core.cluster.vsan.host.viewObjects";
    DiskManagementActionAvailabilityService.VIEW_HOST_STORAGE_AND_GROUPS_ID = "vsphere.core.cluster.vsan.host.viewDisksAndGroups";
    // Disk group action IDs
    DiskManagementActionAvailabilityService.ADD_DISKS_TO_DISK_GROUP_ID = "vsphere.core.cluster.vsan.addDiskToDiskGroupAction";
    DiskManagementActionAvailabilityService.DELETE_DISK_GROUP_ID = "vsphere.core.cluster.vsan.deleteDiskGroupAction";
    DiskManagementActionAvailabilityService.RECREATE_DISK_GROUP_ID = "vsphere.core.cluster.vsan.recreateDiskGroupAction";
    DiskManagementActionAvailabilityService.MOUNT_DISK_GROUP_ID = "vsphere.core.cluster.vsan.mountDiskGroupAction";
    DiskManagementActionAvailabilityService.UNMOUNT_DISK_GROUP_ID = "vsphere.core.cluster.vsan.unmountDiskGroupAction";
    DiskManagementActionAvailabilityService.VIEW_GROUP_OBJECTS_ID = "vsphere.core.cluster.vsan.group.viewObjects";
    DiskManagementActionAvailabilityService.COPY_GROUP_UUID_ID = "vsphere.core.cluster.vsan.group.copyGroupUuid";
    // Disk action IDs
    DiskManagementActionAvailabilityService.ADD_DISK_TO_DISK_GROUP_ID = "vsphere.core.cluster.vsan.disk.addDiskToDiskGroupAction";
    DiskManagementActionAvailabilityService.ADD_DISKS_TO_STORAGE_POOL_ID = "vsphere.core.cluster.vsan.disk.addDisksToStoragePoolAction";
    DiskManagementActionAvailabilityService.DISK_PRE_CHECK_ID = "vsphere.core.cluster.vsan.disk.preCheckEvacuationAction";
    DiskManagementActionAvailabilityService.DELETE_VSAN_DISK_ID = "vsphere.core.cluster.vsan.disk.deleteDiskAction";
    DiskManagementActionAvailabilityService.DELETE_VSAN_DIRECT_DISK_ID = "vsphere.core.cluster.vsan.disk.deleteDiskAction.vsanDirect";
    DiskManagementActionAvailabilityService.UNMOUNT_DISK_ID = "vsphere.core.cluster.vsan.unmountDiskAction";
    DiskManagementActionAvailabilityService.MOUNT_DISK_ID = "vsphere.core.cluster.vsan.mountDiskAction";
    DiskManagementActionAvailabilityService.TURN_LED_ON_ID = "vsphere.core.cluster.vsan.turnLedOn";
    DiskManagementActionAvailabilityService.TURN_LED_OFF_ID = "vsphere.core.cluster.vsan.turnLedOff";
    DiskManagementActionAvailabilityService.MARK_DISK_AS_SSD_ID = "vsphere.core.cluster.vsan.tagAsSsd";
    DiskManagementActionAvailabilityService.MARK_DISK_AS_HDD_ID = "vsphere.core.cluster.vsan.tagAsHdd";
    DiskManagementActionAvailabilityService.MARK_DISK_AS_LOCAL_ID = "vsphere.core.cluster.vsan.markAsLocal";
    DiskManagementActionAvailabilityService.MARK_DISK_AS_REMOTE_ID = "vsphere.core.cluster.vsan.markAsRemote";
    DiskManagementActionAvailabilityService.ERASE_DISK_PARTITIONS_ID = "vsphere.core.cluster.vsan.erasePartitions";
    DiskManagementActionAvailabilityService.VIEW_STORAGE_OBJECTS_ID = "vsphere.core.cluster.vsan.storage.viewObjects";
    return DiskManagementActionAvailabilityService;
})();



/***/ }),

/***/ "vrMH":
/*!***************************************************************************!*\
  !*** ./src/app/vsan/disk-management/views/validation/disk-group-error.ts ***!
  \***************************************************************************/
/*! exports provided: DiskGroupError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskGroupError", function() { return DiskGroupError; });
/* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */
var DiskGroupError = /*@__PURE__*/ (function (DiskGroupError) {
    DiskGroupError[DiskGroupError["ALL_CAPACITY_DISKS_ARE_UNHEALTHY"] = 0] = "ALL_CAPACITY_DISKS_ARE_UNHEALTHY";
    DiskGroupError[DiskGroupError["CACHE_DISK_IS_UNHEALTHY"] = 1] = "CACHE_DISK_IS_UNHEALTHY";
    return DiskGroupError;
})({});



/***/ })

}]);
//# sourceMappingURL=66-es2015.js.map