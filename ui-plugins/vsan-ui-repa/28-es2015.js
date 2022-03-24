(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "GjTp":
/*!*********************************************************!*\
  !*** ./src/app/vsan/common/model/fault-domain.model.ts ***!
  \*********************************************************/
/*! exports provided: FaultDomainModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaultDomainModel", function() { return FaultDomainModel; });
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clr/angular */ "X69f");
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* Copyright 2018-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


/**
 * Wraps a DomainOrHostData object.
 * Controls the behavior and look of a fault domain card.
 */
let FaultDomainModel = /*@__PURE__*/ (() => {
    class FaultDomainModel {
        constructor() {
            this.isLoading = false;
            this.isDragging = false;
            this.hosts = [];
            this.isPreferred = false;
            this.isSelected = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectedState"].UNSELECTED;
            this.validTargets = [];
            this.validTargetDomains = [];
        }
        static createDomain(domain, allDomains) {
            const result = new FaultDomainModel();
            result.data = domain;
            result.dropScope = domain.uid;
            result.title = domain.uid;
            result.hosts = domain.children.map(host => FaultDomainModel.createHost(host, result, allDomains));
            result.validTargets = result.hosts.length > 0 ? result.hosts[0].validTargets : [];
            result.validTargetDomains = result.hosts.length > 0 ? result.hosts[0].validTargetDomains : [];
            return result;
        }
        static createPreferredDomain(domain, allDomains) {
            const result = FaultDomainModel.createDomain(domain, allDomains);
            result.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.card.preferred", result.title);
            result.isPreferred = true;
            return result;
        }
        static createHost(host, domainModel, allDomains) {
            const result = new FaultDomainModel();
            result.data = host;
            result.domain = domainModel;
            result.validTargetDomains = allDomains.map(domain => domain.uid);
            if (domainModel) {
                result.validTargetDomains = result.validTargetDomains
                    .filter(uid => uid !== domainModel.data.uid);
            }
            result.validTargets = [
                FaultDomainModel.CREATE_DOMAIN_PLACEHOLDER,
                FaultDomainModel.STANDALONE_PLACEHOLDER,
                ...result.validTargetDomains
            ];
            return result;
        }
        /**
         * Returns true if all of the specified hosts belong to the same domain
         * and there are no other hosts in it.
         */
        static allAffected(hosts) {
            if (!hosts || hosts.length === 0 || !hosts[0].domain || !hosts[0].domain.data) {
                return false;
            }
            if (hosts.find(item => item.domain !== hosts[0].domain)) {
                return false;
            }
            return hosts.length === hosts[0].domain.hosts.length;
        }
    }
    FaultDomainModel.STANDALONE_PLACEHOLDER = "__standalone_hosts_#_";
    FaultDomainModel.CREATE_DOMAIN_PLACEHOLDER = "__create_domain_#_";
    return FaultDomainModel;
})();



/***/ }),

/***/ "JwBD":
/*!********************************************************!*\
  !*** ./src/app/vsan/common/util/fault-domains-util.ts ***!
  \********************************************************/
/*! exports provided: FaultDomainsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaultDomainsUtil", function() { return FaultDomainsUtil; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");
/* harmony import */ var _model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @model/fault-domain.model */ "GjTp");
/* harmony import */ var _model_fault_domain_consumption_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @model/fault-domain-consumption-data */ "SG96");



/**
 * Provide utility methods for moving hosts or fault domains from a source to a target destination.
 */
let FaultDomainsUtil = /*@__PURE__*/ (() => {
    class FaultDomainsUtil {
        /**
         * Move host or fault domain from source to destination list
         * @param item - The fault domain or standalone host being moved.
         * @param sourceItems - The list from which the item is being removed. E.g. preferred or secondary domain.
         * @param targetItems - The list to which the item is being added E.g. preferred or secondary domain.
         */
        static move(item, sourceItems, targetItems) {
            if (!item) {
                return;
            }
            if (item.isHost) {
                this.moveHost(item, sourceItems, targetItems);
            }
            else {
                this.moveDomain(item, sourceItems, targetItems);
            }
        }
        static moveHost(host, sourceItems, targetItems) {
            const hostDomain = this.removeHostFromSource(host, sourceItems);
            this.addHostToTarget(host, hostDomain, targetItems);
        }
        static removeHostFromSource(host, sourceItems) {
            if (this.remove(host, sourceItems)) {
                // Host is not part of any domain, nothing else to do
                return null;
            }
            else {
                return this.removeHostFromContainingDomain(host, sourceItems);
            }
        }
        static removeHostFromContainingDomain(host, sourceItems) {
            const hostDomain = sourceItems.filter(item => !item.isHost && this.removeFromDomain(host, item))
                .find(item => _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(item.children));
            if (hostDomain) {
                // The host was the only item under this domain, remove it from source side
                this.remove(hostDomain, sourceItems);
            }
            return hostDomain;
        }
        static removeFromDomain(host, domain) {
            return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(domain.children) && this.remove(host, domain.children);
        }
        static addHostToTarget(host, hostDomain, targetItems) {
            if (hostDomain) {
                const foundDomain = this.findDomain(hostDomain.uid, targetItems);
                if (foundDomain) {
                    foundDomain.children.push(host);
                }
                else {
                    targetItems.push(this.cloneDomainAndMoveHost(host, hostDomain));
                }
            }
            else {
                targetItems.push(host);
            }
        }
        static cloneDomainAndMoveHost(host, hostDomain) {
            const copiedDomain = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects({}, hostDomain);
            // Host is no longer part of that domain object + there might be other hosts in that domain
            copiedDomain.children = [host];
            return copiedDomain;
        }
        static moveDomain(domain, sourceItems, targetItems) {
            this.remove(domain, sourceItems);
            this.addDomainToTarget(domain, targetItems);
        }
        static addDomainToTarget(domain, targetItems) {
            const foundDomain = this.findDomain(domain.uid, targetItems);
            if (foundDomain) {
                foundDomain.children = foundDomain.children.concat(domain.children);
            }
            else {
                targetItems.push(domain);
            }
        }
        /**
         * If the item is removed from the items array return TRUE. Otherwise return FALSE
         */
        static remove(item, items) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                return true;
            }
            return false;
        }
        static findDomain(domainUid, hostsAndDomains) {
            return hostsAndDomains.find(i => !i.isHost && i.uid === domainUid);
        }
        static calculateFailuresToTolerate(standaloneHostsCount, domainsCount, witnessHostsCount) {
            const standaloneHostsAndDomainsCount = standaloneHostsCount + domainsCount;
            if (standaloneHostsAndDomainsCount < witnessHostsCount) {
                // when there are more metadata nodes than data nodes, the formula is:
                // tolerance = x-1, where x is the count of data nodes
                return standaloneHostsAndDomainsCount > 0 ?
                    Math.min(FaultDomainsUtil.MAX_SUPPORTED_FAILERS, standaloneHostsAndDomainsCount - 1) : 0;
            }
            else {
                const allNodesCount = standaloneHostsAndDomainsCount + witnessHostsCount;
                // else the formula is:
                // (x+y-1)/2 where x is the count of data nodes, y is the count of metadata nodes
                return allNodesCount > 0 ?
                    Math.min(FaultDomainsUtil.MAX_SUPPORTED_FAILERS, Math.floor((allNodesCount - 1) / 2)) : 0;
            }
        }
        static getPreferredDomain(witnessInfos) {
            // Preferred domain name should be the same for all witness hosts, retrieve it from the first.
            return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(witnessInfos)
                ? witnessInfos[0].preferredFaultDomainName
                : null;
        }
        static getStandaloneModels(availableDomains, witnessInfos) {
            const domains = availableDomains.filter(item => !item.isHost);
            const standaloneHosts = availableDomains.filter(item => item.isHost);
            if (!witnessInfos || !witnessInfos.length || standaloneHosts.length > 0) {
                return standaloneHosts.map(hostData => _model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__["FaultDomainModel"].createHost(hostData, null, domains));
            }
            return [];
        }
        static getFaultDomainModels(availableDomains, preferredDomain) {
            availableDomains.sort((item1, item2) => item1.label.localeCompare(item2.label));
            const models = [];
            const domains = availableDomains.filter(item => !item.isHost);
            domains.forEach(domain => {
                if (domain.uid === preferredDomain) {
                    // preferred domain, insert at index 0
                    models.splice(0, 0, _model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__["FaultDomainModel"].createPreferredDomain(domain, domains));
                }
                else {
                    models.push(_model_fault_domain_model__WEBPACK_IMPORTED_MODULE_1__["FaultDomainModel"].createDomain(domain, domains));
                }
            });
            models.sort((model1, model2) => model1.data.uid.localeCompare(model2.data.uid));
            return models;
        }
        static getFaultToleranceInfo(availableDomains, witnessInfos, standaloneModels, faultDomainModels, storageConsumption) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(availableDomains) ||
                (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(standaloneModels) && _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(faultDomainModels))) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.numOfHostFailures", 0);
            }
            const witnessHostsCount = witnessInfos && witnessInfos.length ?
                witnessInfos.filter(witness => !witness.inMaintenanceMode).length : 0;
            let standaloneHostsCount = 0;
            let domainsCount = 0;
            availableDomains.forEach(root => {
                if (!this.notComputeOnlyNode(root, standaloneModels, faultDomainModels, storageConsumption)) {
                    return;
                }
                if (root.isHost && !root.inMaintenanceMode) {
                    // count standalone hosts which are not in mmode and not a compute-only node
                    standaloneHostsCount++;
                }
                else if (!root.isHost) {
                    // count fault domain if at least one of its hosts is not in mmode and not a compute-only node
                    if (root.children.some(host => !host.inMaintenanceMode)) {
                        domainsCount++;
                    }
                }
            });
            const key = availableDomains.find(item => !item.isHost)
                ? "vsan.faultDomains.stretchedCluster.numOfDomainFailures"
                : "vsan.faultDomains.stretchedCluster.numOfHostFailures";
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key, FaultDomainsUtil.calculateFailuresToTolerate(standaloneHostsCount, domainsCount, witnessHostsCount));
        }
        static notComputeOnlyNode(item, standaloneModels, faultDomainModels, storageConsumption) {
            let fdModel;
            if (item.isHost) {
                fdModel = (standaloneModels.find(host => host.data.uid === item.uid));
            }
            else {
                fdModel = (faultDomainModels.find(faultDomain => faultDomain.data.uid === item.uid));
            }
            return this.getDomainConsumption(fdModel, storageConsumption).totalBytes > 0;
        }
        static getDomainConsumption(model, storageConsumption) {
            return _model_fault_domain_consumption_data__WEBPACK_IMPORTED_MODULE_2__["FaultDomainConsumptionData"].getDomainConsumptionData(model, storageConsumption);
        }
    }
    FaultDomainsUtil.MAX_SUPPORTED_FAILERS = 3;
    return FaultDomainsUtil;
})();



/***/ }),

/***/ "SG96":
/*!********************************************************************!*\
  !*** ./src/app/vsan/common/model/fault-domain-consumption-data.ts ***!
  \********************************************************************/
/*! exports provided: FaultDomainConsumptionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaultDomainConsumptionData", function() { return FaultDomainConsumptionData; });
/* harmony import */ var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/vsan-util */ "UODZ");

class FaultDomainConsumptionData {
    constructor(hostData) {
        this.usedBytes = 0;
        this.reservedBytes = 0;
        this.totalBytes = 0;
        this.freeBytes = 0;
        for (const data of hostData) {
            // Data will be missing if the host is disconnected.
            if (data) {
                this.usedBytes += data.userCapacity;
                this.reservedBytes += data.reservedCapacity;
                this.totalBytes += data.totalCapacity;
                const freeCapacity = data.totalCapacity - data.userCapacity;
                this.freeBytes += (freeCapacity > 0 ? freeCapacity : 0);
            }
        }
    }
    get consumptionInfo() {
        if (this.totalBytes === 0) {
            return "";
        }
        const percentageValue = (this.usedBytes / this.totalBytes) * 100;
        return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getPercentage(percentageValue);
    }
    static getDomainConsumptionData(model, storageConsumption) {
        let hosts = model.hosts;
        if (!hosts || hosts.length === 0) {
            hosts = [model];
        }
        const hostData = hosts
            .map(host => storageConsumption[host.data.uid])
            .filter(data => data !== null);
        return new FaultDomainConsumptionData(hostData);
    }
}



/***/ })

}]);
//# sourceMappingURL=28-es2015.js.map