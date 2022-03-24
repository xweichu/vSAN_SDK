(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
    /***/
    "Pl05":
    /*!*****************************************************!*\
      !*** ./src/app/generated/vsan-fault-domain-spec.ts ***!
      \*****************************************************/

    /*! exports provided: VsanFaultDomainSpec */

    /***/
    function Pl05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanFaultDomainSpec", function () {
        return VsanFaultDomainSpec;
      });

      var VsanFaultDomainSpec;

      (function (VsanFaultDomainSpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (faultDomain, hostRef) {
          return {
            faultDomain: faultDomain,
            hostRef: hostRef
          };
        };

        VsanFaultDomainSpec.Factory = Factory;
      })(VsanFaultDomainSpec || (VsanFaultDomainSpec = {})); //module VsanFaultDomainSpec

      /***/

    },

    /***/
    "QcRc":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/diskmgmt-common.module.ts ***!
      \**************************************************************************/

    /*! exports provided: DiskmgmtCommonModule */

    /***/
    function QcRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskmgmtCommonModule", function () {
        return DiskmgmtCommonModule;
      });

      var DiskmgmtCommonModule = /*#__PURE__*/_createClass(function DiskmgmtCommonModule() {
        _classCallCheck(this, DiskmgmtCommonModule);
      });
      /***/

    },

    /***/
    "l0nN":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/disks-property-retriever.ts ***!
      \****************************************************************************/

    /*! exports provided: DisksPropertyRetriever */

    /***/
    function l0nN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksPropertyRetriever", function () {
        return DisksPropertyRetriever;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/client/dataservice/data-service-property */
      "GENi");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm"); // TODO (REPA) After switch to remote plugin:
      //  * move to a proper service
      //  * create proper UI models for all the data being retrieved. Currently we cannot do so because the data in the local
      //  plugin is retrieved from H5C provider which returns its own model.


      var DisksPropertyRetriever = /*@__PURE__*/function () {
        var DisksPropertyRetriever = /*#__PURE__*/function () {
          function DisksPropertyRetriever(dataService, vpxdModelFactory) {
            _classCallCheck(this, DisksPropertyRetriever);

            this.dataService = dataService;
            this.vpxdModelFactory = vpxdModelFactory;
          }

          _createClass(DisksPropertyRetriever, [{
            key: "getPropertiesForHosts",
            value: function getPropertiesForHosts(clusterRef) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var hostRefs, storageSystemRefs, hostPropertiesResult, storageDevicesPropertiesResult, _yield$Promise$all, _yield$Promise$all2;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.dataService.getProperty(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["ClusterComputeResource"].host.id, clusterRef);

                      case 2:
                        hostRefs = _context.sent;
                        storageSystemRefs = hostRefs.map(this.hostRefToStorateSystemRef);
                        _context.next = 6;
                        return Promise.all([this.getHostProperties(hostRefs), this.getStorageDeviceProperties(storageSystemRefs)]);

                      case 6:
                        _yield$Promise$all = _context.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        hostPropertiesResult = _yield$Promise$all2[0];
                        storageDevicesPropertiesResult = _yield$Promise$all2[1];
                        return _context.abrupt("return", [].concat(_toConsumableArray(hostPropertiesResult), _toConsumableArray(storageDevicesPropertiesResult)));

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "getStorageDevicePropertiesByHost",
            value: function getStorageDevicePropertiesByHost(hostRef) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", this.getStorageDeviceProperties([this.hostRefToStorateSystemRef(hostRef)]));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "getStorageDeviceProperties",
            value: function getStorageDeviceProperties(storageSystemRefs) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this$dataService$sel,
                    _this = this;

                var storageDevices;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return (_this$dataService$sel = this.dataService.select(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.hostBusAdapter, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.scsiLun, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.path, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.adapter, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.target, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.device)).fromMoRef.apply(_this$dataService$sel, _toConsumableArray(storageSystemRefs)).execute();

                      case 2:
                        storageDevices = _context3.sent;
                        return _context3.abrupt("return", storageDevices.resultItems.map(function (ri) {
                          var adapters = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.hostBusAdapter);
                          var luns = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.scsiLun); // The PlugStoreTopology property contains the mapping between LUNs and other objects
                          // https://opengrok.eng.vmware.com/source/xref/main.perforce.1666/bora/vim/vmodl/vim/host/PlugStoreTopology.java#15

                          // The PlugStoreTopology property contains the mapping between LUNs and other objects
                          // https://opengrok.eng.vmware.com/source/xref/main.perforce.1666/bora/vim/vmodl/vim/host/PlugStoreTopology.java#15
                          var topologyDevices = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.device);
                          var topologyAdapters = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.adapter);
                          var topologyPaths = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.path);
                          var topologyTargets = ri.get(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].storageDeviceInfo.plugStoreTopology.target); // LUN-to-TRANSPORT mapping
                          // topologyDevice.path[] -> topologyPath.key
                          // topologyPath.target -> topologyTargets.key
                          // topologyTarget.transport
                          // LUN-to-ADAPTER mapping
                          // lun.key -> topologyDevices.lun
                          // topologyDevices.key -> topologyPath.device
                          // topologyPath.adapter -> topologyAdapters.key
                          // topologyAdapters.adapter -> adapter.key

                          // LUN-to-TRANSPORT mapping
                          // topologyDevice.path[] -> topologyPath.key
                          // topologyPath.target -> topologyTargets.key
                          // topologyTarget.transport
                          // LUN-to-ADAPTER mapping
                          // lun.key -> topologyDevices.lun
                          // topologyDevices.key -> topologyPath.device
                          // topologyPath.adapter -> topologyAdapters.key
                          // topologyAdapters.adapter -> adapter.key
                          var storageDeviceData = luns.map(function (lun) {
                            var topologyDevice = topologyDevices.find(function (td) {
                              return td.lun === lun.key;
                            });
                            var topologyPath = topologyPaths.find(function (p) {
                              return p.device === topologyDevice.key;
                            });
                            var topologyAdapter = topologyAdapters.find(function (ta) {
                              return ta.key === topologyPath.adapter;
                            });
                            var adapter = adapters.find(function (a) {
                              return a.key === topologyAdapter.adapter;
                            });
                            var topologyTarget = topologyTargets.find(function (t) {
                              return t.key === topologyPath.target;
                            }); // This model is defined in the H5C code base. We need to stick to it as long as we have the local
                            // plugin part supported.

                            // This model is defined in the H5C code base. We need to stick to it as long as we have the local
                            // plugin part supported.
                            return {
                              underlyingLun: lun,
                              transport: _this.getTransport(topologyTarget === null || topologyTarget === void 0 ? void 0 : topologyTarget.transport),
                              adapter: adapter.device
                            };
                          });
                          var storageSystemRef = ri.resourceObject;

                          var hostRef = _this.storageSystemRefToHostRef(storageSystemRef);

                          return _this.createDataServiceResult(hostRef, DisksPropertyRetriever.PROP_VSAN_STORAGE_ADAPTER_DEVICES, storageDeviceData);
                        }));

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "getHostProperties",
            value: function getHostProperties(hostRefs) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this$dataService$sel2,
                    _this2 = this;

                var hostProps, result;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return (_this$dataService$sel2 = this.dataService.select(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostSystem"].name, _service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostSystem"].config.product.version)).fromMoRef.apply(_this$dataService$sel2, _toConsumableArray(hostRefs)).execute();

                      case 2:
                        hostProps = _context4.sent;
                        result = [];
                        hostProps.resultItems.forEach(function (ri) {
                          var hostRef = ri.resourceObject;
                          result.push(_this2.createDataServiceResult(hostRef, DisksPropertyRetriever.ICON_ID, _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObjectUtils"].getObjectTypeIcon(hostRef)));
                          ri.propertyValues.forEach(function (value, key) {
                            result.push(_this2.createDataServiceResult(hostRef, key, value));
                          });
                        });
                        return _context4.abrupt("return", result);

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }
          }, {
            key: "storageSystemRefToHostRef",
            value: function storageSystemRefToHostRef(storageSystemRef) {
              return _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].create(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostSystem"].type, storageSystemRef.value.replace(DisksPropertyRetriever.MO_PREFIX_STORAGE_SYSTEM, DisksPropertyRetriever.MO_PREFIX_HOST), storageSystemRef.serverGuid);
            }
          }, {
            key: "hostRefToStorateSystemRef",
            value: function hostRefToStorateSystemRef(mo) {
              return _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].create(_service_client_dataservice_data_service_property__WEBPACK_IMPORTED_MODULE_1__["HostStorageSystem"].type, mo.value.replace(DisksPropertyRetriever.MO_PREFIX_HOST, DisksPropertyRetriever.MO_PREFIX_STORAGE_SYSTEM), mo.serverGuid);
            }
          }, {
            key: "createDataServiceResult",
            value: function createDataServiceResult(obj, propertyName, value) {
              return {
                resourceObject: obj,
                value: value,
                propertyName: propertyName
              };
            }
          }, {
            key: "getTransport",
            value: function getTransport(transport) {
              if (!transport) {
                return [];
              } // https://opengrok.eng.vmware.com/source/xref/vim-clients.h5c-main.perforce.1666/h5c-main/applications/vsphere-client/server/modules-api/src/main/java/com/vmware/vsphere/client/storage/adapters/StorageDeviceTransport.java#37


              var clazz = this.vpxdModelFactory.getObjectType(transport);

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
          }]);

          return DisksPropertyRetriever;
        }();

        DisksPropertyRetriever.ICON_ID = "primaryIconId";
        DisksPropertyRetriever.MO_PREFIX_HOST = "host";
        DisksPropertyRetriever.MO_PREFIX_STORAGE_SYSTEM = "storageSystem";
        DisksPropertyRetriever.PROP_VSAN_STORAGE_ADAPTER_DEVICES = "vsanStorageAdapterDevices";
        return DisksPropertyRetriever;
      }();

      var TransportType = /*@__PURE__*/function (TransportType) {
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
      }({});
      /***/

    }
  }]);
})();
//# sourceMappingURL=26-es5.js.map