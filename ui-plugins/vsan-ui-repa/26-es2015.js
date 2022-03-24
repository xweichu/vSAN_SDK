(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "Pl05":
/*!*****************************************************!*\
  !*** ./src/app/generated/vsan-fault-domain-spec.ts ***!
  \*****************************************************/
/*! exports provided: VsanFaultDomainSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsanFaultDomainSpec", function() { return VsanFaultDomainSpec; });
var VsanFaultDomainSpec;
(function (VsanFaultDomainSpec) {
    class Factory {
    } //class Factory
    Factory.create = (faultDomain, hostRef) => {
        return { faultDomain: faultDomain, hostRef: hostRef, };
    };
    VsanFaultDomainSpec.Factory = Factory;
})(VsanFaultDomainSpec || (VsanFaultDomainSpec = {})); //module VsanFaultDomainSpec



/***/ }),

/***/ "QcRc":
/*!**************************************************************************!*\
  !*** ./src/app/vsan/common/component/diskmgmt/diskmgmt-common.module.ts ***!
  \**************************************************************************/
/*! exports provided: DiskmgmtCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskmgmtCommonModule", function() { return DiskmgmtCommonModule; });
class DiskmgmtCommonModule {
}



/***/ }),

/***/ "l0nN":
/*!****************************************************************************!*\
  !*** ./src/app/vsan/common/component/diskmgmt/disks-property-retriever.ts ***!
  \****************************************************************************/
/*! exports provided: DisksPropertyRetriever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisksPropertyRetriever", function() { return DisksPropertyRetriever; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @service/client/dataservice/data-service-property */ "GENi");
/* harmony import */ var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/managed-object */ "sNBm");



// TODO (REPA) After switch to remote plugin:
//  * move to a proper service
//  * create proper UI models for all the data being retrieved. Currently we cannot do so because the data in the local
//  plugin is retrieved from H5C provider which returns its own model.
let DisksPropertyRetriever = /*@__PURE__*/ (() => {
    class DisksPropertyRetriever {
        constructor(dataService, vpxdModelFactory) {
            this.dataService = dataService;
            this.vpxdModelFactory = vpxdModelFactory;
        }
        getPropertiesForHosts(clusterRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const hostRefs = yield this.dataService
                    .getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["ClusterComputeResource"].host.id, clusterRef);
                const storageSystemRefs = hostRefs.map(this.hostRefToStorateSystemRef);
                let hostPropertiesResult;
                let storageDevicesPropertiesResult;
                [hostPropertiesResult, storageDevicesPropertiesResult] = yield Promise.all([
                    this.getHostProperties(hostRefs),
                    this.getStorageDeviceProperties(storageSystemRefs),
                ]);
                return [...hostPropertiesResult, ...storageDevicesPropertiesResult];
            });
        }
        getStorageDevicePropertiesByHost(hostRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getStorageDeviceProperties([this.hostRefToStorateSystemRef(hostRef)]);
            });
        }
        getStorageDeviceProperties(storageSystemRefs) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const storageDevices = yield this.dataService
                    .select(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.hostBusAdapter, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.scsiLun, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.path, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.adapter, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.target, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.device)
                    .fromMoRef(...storageSystemRefs)
                    .execute();
                return storageDevices.resultItems.map((ri) => {
                    const adapters = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.hostBusAdapter);
                    const luns = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.scsiLun);
                    // The PlugStoreTopology property contains the mapping between LUNs and other objects
                    // https://opengrok.eng.vmware.com/source/xref/main.perforce.1666/bora/vim/vmodl/vim/host/PlugStoreTopology.java#15
                    const topologyDevices = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.device);
                    const topologyAdapters = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.adapter);
                    const topologyPaths = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.path);
                    const topologyTargets = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.target);
                    // LUN-to-TRANSPORT mapping
                    // topologyDevice.path[] -> topologyPath.key
                    // topologyPath.target -> topologyTargets.key
                    // topologyTarget.transport
                    // LUN-to-ADAPTER mapping
                    // lun.key -> topologyDevices.lun
                    // topologyDevices.key -> topologyPath.device
                    // topologyPath.adapter -> topologyAdapters.key
                    // topologyAdapters.adapter -> adapter.key
                    const storageDeviceData = luns.map(lun => {
                        const topologyDevice = topologyDevices.find(td => td.lun === lun.key);
                        const topologyPath = topologyPaths.find(p => p.device === topologyDevice.key);
                        const topologyAdapter = topologyAdapters.find(ta => ta.key === topologyPath.adapter);
                        const adapter = adapters.find(a => a.key === topologyAdapter.adapter);
                        const topologyTarget = topologyTargets.find(t => t.key === topologyPath.target);
                        // This model is defined in the H5C code base. We need to stick to it as long as we have the local
                        // plugin part supported.
                        return {
                            underlyingLun: lun,
                            transport: this.getTransport(topologyTarget === null || topologyTarget === void 0 ? void 0 : topologyTarget.transport),
                            adapter: adapter.device,
                        };
                    });
                    const storageSystemRef = ri.resourceObject;
                    const hostRef = this.storageSystemRefToHostRef(storageSystemRef);
                    return this.createDataServiceResult(hostRef, DisksPropertyRetriever.PROP_VSAN_STORAGE_ADAPTER_DEVICES, storageDeviceData);
                });
            });
        }
        getHostProperties(hostRefs) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const hostProps = yield this.dataService
                    .select(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostSystem"].name, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostSystem"].config.product.version)
                    .fromMoRef(...hostRefs)
                    .execute();
                const result = [];
                hostProps.resultItems.forEach((ri) => {
                    const hostRef = ri.resourceObject;
                    result.push(this.createDataServiceResult(hostRef, DisksPropertyRetriever.ICON_ID, _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObjectUtils"].getObjectTypeIcon(hostRef)));
                    ri.propertyValues.forEach(((value, key) => {
                        result.push(this.createDataServiceResult(hostRef, key, value));
                    }));
                });
                return result;
            });
        }
        storageSystemRefToHostRef(storageSystemRef) {
            return _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].create(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostSystem"].type, storageSystemRef.value.replace(DisksPropertyRetriever.MO_PREFIX_STORAGE_SYSTEM, DisksPropertyRetriever.MO_PREFIX_HOST), storageSystemRef.serverGuid);
        }
        hostRefToStorateSystemRef(mo) {
            return _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].create(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].type, mo.value.replace(DisksPropertyRetriever.MO_PREFIX_HOST, DisksPropertyRetriever.MO_PREFIX_STORAGE_SYSTEM), mo.serverGuid);
        }
        createDataServiceResult(obj, propertyName, value) {
            return {
                resourceObject: obj,
                value: value,
                propertyName: propertyName,
            };
        }
        getTransport(transport) {
            if (!transport) {
                return [];
            }
            // https://opengrok.eng.vmware.com/source/xref/vim-clients.h5c-main.perforce.1666/h5c-main/applications/vsphere-client/server/modules-api/src/main/java/com/vmware/vsphere/client/storage/adapters/StorageDeviceTransport.java#37
            const clazz = this.vpxdModelFactory.getObjectType(transport);
            switch (clazz) {
                case TransportType.HostFibreChannelOverEthernetTargetTransport:
                    return ["FCOETRANSPORT"];
                case TransportType.HostFibreChannelTargetTransport:
                    return ["FCTRANSPORT"];
                case TransportType.HostInternetScsiTargetTransport:
                    return ["ISCSITRANSPORT"];
                case TransportType.HostParallelScsiTargetTransport:
                    return ["PARALLELTRANSPORT"];
                case TransportType.HostBlockAdapterTargetTransport:
                    return ["BLOCKTRANSPORT"];
                case TransportType.HostSerialAttachedTargetTransport:
                    return ["SASTRANSPORT"];
                case TransportType.HostPcieTargetTransport:
                    return ["PCIETRANSPORT"];
                case TransportType.HostRdmaTargetTransport:
                    return ["RDMATRANSPORT"];
                case TransportType.HostTcpTargetTransport:
                    return ["TCPTRANSPORT"];
                default:
                    return [];
            }
        }
    }
    DisksPropertyRetriever.ICON_ID = "primaryIconId";
    DisksPropertyRetriever.MO_PREFIX_HOST = "host";
    DisksPropertyRetriever.MO_PREFIX_STORAGE_SYSTEM = "storageSystem";
    DisksPropertyRetriever.PROP_VSAN_STORAGE_ADAPTER_DEVICES = "vsanStorageAdapterDevices";
    return DisksPropertyRetriever;
})();
var TransportType = /*@__PURE__*/ (function (TransportType) {
    TransportType["HostFibreChannelOverEthernetTargetTransport"] = "HostFibreChannelOverEthernetTargetTransport";
    TransportType["HostFibreChannelTargetTransport"] = "HostFibreChannelTargetTransport";
    TransportType["HostInternetScsiTargetTransport"] = "HostInternetScsiTargetTransport";
    TransportType["HostParallelScsiTargetTransport"] = "HostParallelScsiTargetTransport";
    TransportType["HostBlockAdapterTargetTransport"] = "HostBlockAdapterTargetTransport";
    TransportType["HostSerialAttachedTargetTransport"] = "HostSerialAttachedTargetTransport";
    TransportType["HostPcieTargetTransport"] = "HostPcieTargetTransport";
    TransportType["HostRdmaTargetTransport"] = "HostRdmaTargetTransport";
    TransportType["HostTcpTargetTransport"] = "HostTcpTargetTransport";
    return TransportType;
})({});



/***/ })

}]);
//# sourceMappingURL=26-es2015.js.map