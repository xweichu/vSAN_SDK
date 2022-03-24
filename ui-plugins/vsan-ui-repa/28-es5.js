(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28], {
    /***/
    "GjTp":
    /*!*********************************************************!*\
      !*** ./src/app/vsan/common/model/fault-domain.model.ts ***!
      \*********************************************************/

    /*! exports provided: FaultDomainModel */

    /***/
    function GjTp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainModel", function () {
        return FaultDomainModel;
      });
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2018-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Wraps a DomainOrHostData object.
       * Controls the behavior and look of a fault domain card.
       */


      var FaultDomainModel = /*@__PURE__*/function () {
        var FaultDomainModel = /*#__PURE__*/function () {
          function FaultDomainModel() {
            _classCallCheck(this, FaultDomainModel);

            this.isLoading = false;
            this.isDragging = false;
            this.hosts = [];
            this.isPreferred = false;
            this.isSelected = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectedState"].UNSELECTED;
            this.validTargets = [];
            this.validTargetDomains = [];
          }

          _createClass(FaultDomainModel, null, [{
            key: "createDomain",
            value: function createDomain(domain, allDomains) {
              var result = new FaultDomainModel();
              result.data = domain;
              result.dropScope = domain.uid;
              result.title = domain.uid;
              result.hosts = domain.children.map(function (host) {
                return FaultDomainModel.createHost(host, result, allDomains);
              });
              result.validTargets = result.hosts.length > 0 ? result.hosts[0].validTargets : [];
              result.validTargetDomains = result.hosts.length > 0 ? result.hosts[0].validTargetDomains : [];
              return result;
            }
          }, {
            key: "createPreferredDomain",
            value: function createPreferredDomain(domain, allDomains) {
              var result = FaultDomainModel.createDomain(domain, allDomains);
              result.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.card.preferred", result.title);
              result.isPreferred = true;
              return result;
            }
          }, {
            key: "createHost",
            value: function createHost(host, domainModel, allDomains) {
              var result = new FaultDomainModel();
              result.data = host;
              result.domain = domainModel;
              result.validTargetDomains = allDomains.map(function (domain) {
                return domain.uid;
              });

              if (domainModel) {
                result.validTargetDomains = result.validTargetDomains.filter(function (uid) {
                  return uid !== domainModel.data.uid;
                });
              }

              result.validTargets = [FaultDomainModel.CREATE_DOMAIN_PLACEHOLDER, FaultDomainModel.STANDALONE_PLACEHOLDER].concat(_toConsumableArray(result.validTargetDomains));
              return result;
            }
            /**
             * Returns true if all of the specified hosts belong to the same domain
             * and there are no other hosts in it.
             */

          }, {
            key: "allAffected",
            value: function allAffected(hosts) {
              if (!hosts || hosts.length === 0 || !hosts[0].domain || !hosts[0].domain.data) {
                return false;
              }

              if (hosts.find(function (item) {
                return item.domain !== hosts[0].domain;
              })) {
                return false;
              }

              return hosts.length === hosts[0].domain.hosts.length;
            }
          }]);

          return FaultDomainModel;
        }();

        FaultDomainModel.STANDALONE_PLACEHOLDER = "__standalone_hosts_#_";
        FaultDomainModel.CREATE_DOMAIN_PLACEHOLDER = "__create_domain_#_";
        return FaultDomainModel;
      }();
      /***/

    },

    /***/
    "JwBD":
    /*!********************************************************!*\
      !*** ./src/app/vsan/common/util/fault-domains-util.ts ***!
      \********************************************************/

    /*! exports provided: FaultDomainsUtil */

    /***/
    function JwBD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainsUtil", function () {
        return FaultDomainsUtil;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @model/fault-domain.model */
      "GjTp");
      /* harmony import */


      var _model_fault_domain_consumption_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @model/fault-domain-consumption-data */
      "SG96");
      /**
       * Provide utility methods for moving hosts or fault domains from a source to a target destination.
       */


      var FaultDomainsUtil = /*@__PURE__*/function () {
        var FaultDomainsUtil = /*#__PURE__*/function () {
          function FaultDomainsUtil() {
            _classCallCheck(this, FaultDomainsUtil);
          }

          _createClass(FaultDomainsUtil, null, [{
            key: "move",
            value:
            /**
             * Move host or fault domain from source to destination list
             * @param item - The fault domain or standalone host being moved.
             * @param sourceItems - The list from which the item is being removed. E.g. preferred or secondary domain.
             * @param targetItems - The list to which the item is being added E.g. preferred or secondary domain.
             */
            function move(item, sourceItems, targetItems) {
              if (!item) {
                return;
              }

              if (item.isHost) {
                this.moveHost(item, sourceItems, targetItems);
              } else {
                this.moveDomain(item, sourceItems, targetItems);
              }
            }
          }, {
            key: "moveHost",
            value: function moveHost(host, sourceItems, targetItems) {
              var hostDomain = this.removeHostFromSource(host, sourceItems);
              this.addHostToTarget(host, hostDomain, targetItems);
            }
          }, {
            key: "removeHostFromSource",
            value: function removeHostFromSource(host, sourceItems) {
              if (this.remove(host, sourceItems)) {
                // Host is not part of any domain, nothing else to do
                return null;
              } else {
                return this.removeHostFromContainingDomain(host, sourceItems);
              }
            }
          }, {
            key: "removeHostFromContainingDomain",
            value: function removeHostFromContainingDomain(host, sourceItems) {
              var _this = this;

              var hostDomain = sourceItems.filter(function (item) {
                return !item.isHost && _this.removeFromDomain(host, item);
              }).find(function (item) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(item.children);
              });

              if (hostDomain) {
                // The host was the only item under this domain, remove it from source side
                this.remove(hostDomain, sourceItems);
              }

              return hostDomain;
            }
          }, {
            key: "removeFromDomain",
            value: function removeFromDomain(host, domain) {
              return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(domain.children) && this.remove(host, domain.children);
            }
          }, {
            key: "addHostToTarget",
            value: function addHostToTarget(host, hostDomain, targetItems) {
              if (hostDomain) {
                var foundDomain = this.findDomain(hostDomain.uid, targetItems);

                if (foundDomain) {
                  foundDomain.children.push(host);
                } else {
                  targetItems.push(this.cloneDomainAndMoveHost(host, hostDomain));
                }
              } else {
                targetItems.push(host);
              }
            }
          }, {
            key: "cloneDomainAndMoveHost",
            value: function cloneDomainAndMoveHost(host, hostDomain) {
              var copiedDomain = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects({}, hostDomain); // Host is no longer part of that domain object + there might be other hosts in that domain


              copiedDomain.children = [host];
              return copiedDomain;
            }
          }, {
            key: "moveDomain",
            value: function moveDomain(domain, sourceItems, targetItems) {
              this.remove(domain, sourceItems);
              this.addDomainToTarget(domain, targetItems);
            }
          }, {
            key: "addDomainToTarget",
            value: function addDomainToTarget(domain, targetItems) {
              var foundDomain = this.findDomain(domain.uid, targetItems);

              if (foundDomain) {
                foundDomain.children = foundDomain.children.concat(domain.children);
              } else {
                targetItems.push(domain);
              }
            }
            /**
             * If the item is removed from the items array return TRUE. Otherwise return FALSE
             */

          }, {
            key: "remove",
            value: function remove(item, items) {
              var index = items.indexOf(item);

              if (index > -1) {
                items.splice(index, 1);
                return true;
              }

              return false;
            }
          }, {
            key: "findDomain",
            value: function findDomain(domainUid, hostsAndDomains) {
              return hostsAndDomains.find(function (i) {
                return !i.isHost && i.uid === domainUid;
              });
            }
          }, {
            key: "calculateFailuresToTolerate",
            value: function calculateFailuresToTolerate(standaloneHostsCount, domainsCount, witnessHostsCount) {
              var standaloneHostsAndDomainsCount = standaloneHostsCount + domainsCount;

              if (standaloneHostsAndDomainsCount < witnessHostsCount) {
                // when there are more metadata nodes than data nodes, the formula is:
                // tolerance = x-1, where x is the count of data nodes
                return standaloneHostsAndDomainsCount > 0 ? Math.min(FaultDomainsUtil.MAX_SUPPORTED_FAILERS, standaloneHostsAndDomainsCount - 1) : 0;
              } else {
                var allNodesCount = standaloneHostsAndDomainsCount + witnessHostsCount; // else the formula is:
                // (x+y-1)/2 where x is the count of data nodes, y is the count of metadata nodes

                return allNodesCount > 0 ? Math.min(FaultDomainsUtil.MAX_SUPPORTED_FAILERS, Math.floor((allNodesCount - 1) / 2)) : 0;
              }
            }
          }, {
            key: "getPreferredDomain",
            value: function getPreferredDomain(witnessInfos) {
              // Preferred domain name should be the same for all witness hosts, retrieve it from the first.
              return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(witnessInfos) ? witnessInfos[0].preferredFaultDomainName : null;
            }
          }, {
            key: "getStandaloneModels",
            value: function getStandaloneModels(availableDomains, witnessInfos) {
              var domains = availableDomains.filter(function (item) {
                return !item.isHost;
              });
              var standaloneHosts = availableDomains.filter(function (item) {
                return item.isHost;
              });

              if (!witnessInfos || !witnessInfos.length || standaloneHosts.length > 0) {
                return standaloneHosts.map(function (hostData) {
                  return _model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__["FaultDomainModel"].createHost(hostData, null, domains);
                });
              }

              return [];
            }
          }, {
            key: "getFaultDomainModels",
            value: function getFaultDomainModels(availableDomains, preferredDomain) {
              availableDomains.sort(function (item1, item2) {
                return item1.label.localeCompare(item2.label);
              });
              var models = [];
              var domains = availableDomains.filter(function (item) {
                return !item.isHost;
              });
              domains.forEach(function (domain) {
                if (domain.uid === preferredDomain) {
                  // preferred domain, insert at index 0
                  models.splice(0, 0, _model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__["FaultDomainModel"].createPreferredDomain(domain, domains));
                } else {
                  models.push(_model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__["FaultDomainModel"].createDomain(domain, domains));
                }
              });
              models.sort(function (model1, model2) {
                return model1.data.uid.localeCompare(model2.data.uid);
              });
              return models;
            }
          }, {
            key: "getFaultToleranceInfo",
            value: function getFaultToleranceInfo(availableDomains, witnessInfos, standaloneModels, faultDomainModels, storageConsumption) {
              var _this2 = this;

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(availableDomains) || _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(standaloneModels) && _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(faultDomainModels)) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.numOfHostFailures", 0);
              }

              var witnessHostsCount = witnessInfos && witnessInfos.length ? witnessInfos.filter(function (witness) {
                return !witness.inMaintenanceMode;
              }).length : 0;
              var standaloneHostsCount = 0;
              var domainsCount = 0;
              availableDomains.forEach(function (root) {
                if (!_this2.notComputeOnlyNode(root, standaloneModels, faultDomainModels, storageConsumption)) {
                  return;
                }

                if (root.isHost && !root.inMaintenanceMode) {
                  // count standalone hosts which are not in mmode and not a compute-only node
                  standaloneHostsCount++;
                } else if (!root.isHost) {
                  // count fault domain if at least one of its hosts is not in mmode and not a compute-only node
                  if (root.children.some(function (host) {
                    return !host.inMaintenanceMode;
                  })) {
                    domainsCount++;
                  }
                }
              });
              var key = availableDomains.find(function (item) {
                return !item.isHost;
              }) ? "vsan.faultDomains.stretchedCluster.numOfDomainFailures" : "vsan.faultDomains.stretchedCluster.numOfHostFailures";
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key, FaultDomainsUtil.calculateFailuresToTolerate(standaloneHostsCount, domainsCount, witnessHostsCount));
            }
          }, {
            key: "notComputeOnlyNode",
            value: function notComputeOnlyNode(item, standaloneModels, faultDomainModels, storageConsumption) {
              var fdModel;

              if (item.isHost) {
                fdModel = standaloneModels.find(function (host) {
                  return host.data.uid === item.uid;
                });
              } else {
                fdModel = faultDomainModels.find(function (faultDomain) {
                  return faultDomain.data.uid === item.uid;
                });
              }

              return this.getDomainConsumption(fdModel, storageConsumption).totalBytes > 0;
            }
          }, {
            key: "getDomainConsumption",
            value: function getDomainConsumption(model, storageConsumption) {
              return _model_fault_domain_consumption_data__WEBPACK_IMPORTED_MODULE_2__["FaultDomainConsumptionData"].getDomainConsumptionData(model, storageConsumption);
            }
          }]);

          return FaultDomainsUtil;
        }();

        FaultDomainsUtil.MAX_SUPPORTED_FAILERS = 3;
        return FaultDomainsUtil;
      }();
      /***/

    },

    /***/
    "SG96":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/common/model/fault-domain-consumption-data.ts ***!
      \********************************************************************/

    /*! exports provided: FaultDomainConsumptionData */

    /***/
    function SG96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainConsumptionData", function () {
        return FaultDomainConsumptionData;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var FaultDomainConsumptionData = /*#__PURE__*/function () {
        function FaultDomainConsumptionData(hostData) {
          _classCallCheck(this, FaultDomainConsumptionData);

          this.usedBytes = 0;
          this.reservedBytes = 0;
          this.totalBytes = 0;
          this.freeBytes = 0;

          var _iterator = _createForOfIteratorHelper(hostData),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var data = _step.value;

              // Data will be missing if the host is disconnected.
              if (data) {
                this.usedBytes += data.userCapacity;
                this.reservedBytes += data.reservedCapacity;
                this.totalBytes += data.totalCapacity;
                var freeCapacity = data.totalCapacity - data.userCapacity;
                this.freeBytes += freeCapacity > 0 ? freeCapacity : 0;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        _createClass(FaultDomainConsumptionData, [{
          key: "consumptionInfo",
          get: function get() {
            if (this.totalBytes === 0) {
              return "";
            }

            var percentageValue = this.usedBytes / this.totalBytes * 100;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getPercentage(percentageValue);
          }
        }], [{
          key: "getDomainConsumptionData",
          value: function getDomainConsumptionData(model, storageConsumption) {
            var hosts = model.hosts;

            if (!hosts || hosts.length === 0) {
              hosts = [model];
            }

            var hostData = hosts.map(function (host) {
              return storageConsumption[host.data.uid];
            }).filter(function (data) {
              return data !== null;
            });
            return new FaultDomainConsumptionData(hostData);
          }
        }]);

        return FaultDomainConsumptionData;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=28-es5.js.map