(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "36iK":
    /*!**************************************************************!*\
      !*** ./src/app/vsan/common/util/vsan-data-migration-util.ts ***!
      \**************************************************************/

    /*! exports provided: VsanDataMigrationUtil */

    /***/
    function iK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDataMigrationUtil", function () {
        return VsanDataMigrationUtil;
      });
      /* harmony import */


      var _vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_decommission_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/decommission-mode */
      "yaIQ");
      /* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * vSAN data migration utilities.
       */


      var VsanDataMigrationUtil = /*@__PURE__*/function () {
        var VsanDataMigrationUtil = /*#__PURE__*/_createClass(function VsanDataMigrationUtil() {
          _classCallCheck(this, VsanDataMigrationUtil);
        });

        VsanDataMigrationUtil.getLocalizedDecommissionMode = function (decommissionMode) {
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
      }();
      /***/

    },

    /***/
    "ROmN":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/vm/io-diagnostics/graph-view/model/graph-node-details.ts ***!
      \*******************************************************************************/

    /*! exports provided: GraphNodeDetails, GraphNodeType */

    /***/
    function ROmN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphNodeDetails", function () {
        return GraphNodeDetails;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphNodeType", function () {
        return GraphNodeType;
      });
      /* harmony import */


      var _generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/graph-classes */
      "QieO");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Contains all needed data for fetching the object details data.
       */


      var GraphNodeDetails = /*#__PURE__*/function () {
        function GraphNodeDetails(id, entityName, hostName, hostUuid, type) {
          _classCallCheck(this, GraphNodeDetails);

          this.id = id;
          this.entityName = entityName;
          this.hostName = hostName;
          this.hostUuid = hostUuid;
          this.type = type;
        }

        _createClass(GraphNodeDetails, null, [{
          key: "fromGraphNode",
          value: function fromGraphNode(node) {
            var _a, _b, _c, _d;

            var nodeData = node.data();
            var nodeClasses = node.classes();
            var nodeType = GraphNodeDetails.getGraphNodeType(nodeClasses);
            var entityName = nodeType === GraphNodeType.DISK ? (_a = nodeData.detailedInfo) === null || _a === void 0 ? void 0 : _a.physicalDiskUuid : (_b = nodeData.detailedInfo) === null || _b === void 0 ? void 0 : _b.diskGroupUuid;
            return new GraphNodeDetails(nodeData.id, entityName, (_c = nodeData.detailedInfo) === null || _c === void 0 ? void 0 : _c.hostName, (_d = nodeData.detailedInfo) === null || _d === void 0 ? void 0 : _d.hostUuid, nodeType);
          }
        }, {
          key: "getGraphNodeType",
          value: function getGraphNodeType(nodeClasses) {
            if (nodeClasses.includes(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__["GraphClasses"].NIC_NODE())) {
              return GraphNodeType.NIC;
            } else if (nodeClasses.includes(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__["GraphClasses"].DISK_GROUP_NODE())) {
              return GraphNodeType.DISK_GROUP;
            } else if (nodeClasses.includes(_generated_graph_classes__WEBPACK_IMPORTED_MODULE_0__["GraphClasses"].DISK_NODE())) {
              return GraphNodeType.DISK;
            }
          }
        }]);

        return GraphNodeDetails;
      }();

      var GraphNodeType = /*@__PURE__*/function (GraphNodeType) {
        GraphNodeType[GraphNodeType["DISK_GROUP"] = 0] = "DISK_GROUP";
        GraphNodeType[GraphNodeType["DISK"] = 1] = "DISK";
        GraphNodeType[GraphNodeType["NIC"] = 2] = "NIC";
        return GraphNodeType;
      }({});
      /***/

    },

    /***/
    "TkoF":
    /*!**********************************************!*\
      !*** ./src/app/vsan/common/pipe/TimePipe.ts ***!
      \**********************************************/

    /*! exports provided: TimePipe */

    /***/
    function TkoF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePipe", function () {
        return TimePipe;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
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


      var TimePipe = /*#__PURE__*/function () {
        function TimePipe() {
          _classCallCheck(this, TimePipe);
        }

        _createClass(TimePipe, [{
          key: "transform",
          value: function transform(time) {
            if (typeof time === "string") {
              return time;
            }

            if (time < 0) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.unknown");
            }

            var s = time % 60;
            time = (time - s) / 60;
            var m = time % 60;
            time = (time - m) / 60;
            var h = time % 24;
            time = (time - h) / 24;
            var d = time; // return seconds up to 119

            if (m < 2 && h < 1 && d < 1) {
              s = s + m * 60;
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(s === 1 ? "vsan.common.second" : "vsan.common.seconds", s);
            } // return minutes up to 119


            if (h < 2 && d < 1) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.minutes", m + h * 60);
            } // return hours up to 24


            if (d < 1) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.common.hours", h + d * 24);
            }

            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(d === 1 ? "vsan.common.day" : "vsan.common.days", d);
          }
        }]);

        return TimePipe;
      }();
      /***/

    },

    /***/
    "Tsf2":
    /*!********************************************************!*\
      !*** ./src/app/generated/ip-addresses-request-spec.ts ***!
      \********************************************************/

    /*! exports provided: IpAddressesRequestSpec */

    /***/
    function Tsf2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IpAddressesRequestSpec", function () {
        return IpAddressesRequestSpec;
      });

      var IpAddressesRequestSpec;

      (function (IpAddressesRequestSpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (ipAddress, subnetMask, hostsNumber) {
          return {
            ipAddress: ipAddress,
            subnetMask: subnetMask,
            hostsNumber: hostsNumber
          };
        };

        IpAddressesRequestSpec.Factory = Factory;
      })(IpAddressesRequestSpec || (IpAddressesRequestSpec = {})); //module IpAddressesRequestSpec

      /***/

    },

    /***/
    "VXdP":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-accordion/clr-accordion-panel.directive.ts ***!
      \**************************************************************************************/

    /*! exports provided: ClrAccordionPanelDirective, AccordionPanelToggleExpandEventArg */

    /***/
    function VXdP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrAccordionPanelDirective", function () {
        return ClrAccordionPanelDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccordionPanelToggleExpandEventArg", function () {
        return AccordionPanelToggleExpandEventArg;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
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


      var ClrAccordionPanelDirective = /*@__PURE__*/function () {
        var ClrAccordionPanelDirective = /*#__PURE__*/function () {
          function ClrAccordionPanelDirective(accordionPanel, el) {
            var _this = this;

            _classCallCheck(this, ClrAccordionPanelDirective);

            this.accordionPanel = accordionPanel;
            this.el = el;
            this.accordionPanelToggleExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.accordionPanel.panelOpenChange.subscribe(function (isExpanded) {
              _this.onExpandCollapse(isExpanded, _this.model);
            });
          }

          _createClass(ClrAccordionPanelDirective, [{
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              this.el.nativeElement.id = this.panelId;
            }
          }, {
            key: "onExpandCollapse",
            value: function onExpandCollapse(isExpanded, model) {
              var panelIdDOM = this.findAccordionPanelId(event.currentTarget, 5);

              if (this.panelId === panelIdDOM) {
                this.accordionPanelToggleExpand.emit(new AccordionPanelToggleExpandEventArg(isExpanded, model));
              }
            }
          }, {
            key: "findAccordionPanelId",
            value: function findAccordionPanelId(targetEl, parentCount) {
              if (targetEl.nodeName === ClrAccordionPanelDirective.ACCORDION_PANEL_TAG) {
                return targetEl.getAttribute("id");
              }

              if (targetEl && targetEl.parentElement && parentCount) {
                return this.findAccordionPanelId(targetEl.parentElement, --parentCount);
              }
            }
          }]);

          return ClrAccordionPanelDirective;
        }();

        ClrAccordionPanelDirective.ACCORDION_PANEL_TAG = "CLR-ACCORDION-PANEL";
        return ClrAccordionPanelDirective;
      }();

      var AccordionPanelToggleExpandEventArg = /*#__PURE__*/_createClass(function AccordionPanelToggleExpandEventArg(isExpanded, model) {
        _classCallCheck(this, AccordionPanelToggleExpandEventArg);

        this.isExpanded = isExpanded;
        this.model = model;
      });
      /***/

    },

    /***/
    "WmGx":
    /*!*******************************************************!*\
      !*** ./src/app/vsan/common/model/host-action.data.ts ***!
      \*******************************************************/

    /*! exports provided: HostActionData */

    /***/
    function WmGx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HostActionData", function () {
        return HostActionData;
      });
      /**
       * Host data required for disk and group actions.
       */


      var HostActionData = /*@__PURE__*/function () {
        var HostActionData = /*#__PURE__*/function () {
          function HostActionData() {
            _classCallCheck(this, HostActionData);
          }

          _createClass(HostActionData, null, [{
            key: "fromHostData",
            value: function fromHostData(host) {
              var hostData = new HostActionData();
              hostData.hostRef = host.hostRef;
              hostData.isWitnessHost = host.isWitnessHost;
              hostData.isInMaintenanceMode = host.isInMaintenanceMode;
              hostData.isWhatIfSupported = true;
              return hostData;
            }
          }]);

          return HostActionData;
        }();

        HostActionData.fromPrecheckEntity = function (entity) {
          var hostData = new HostActionData();
          hostData.isWitnessHost = false;
          hostData.isWhatIfSupported = true;
          hostData.hostRef = entity.hostRef;
          hostData.isInMaintenanceMode = entity.isInMaintenanceMode;
          return hostData;
        };

        return HostActionData;
      }();
      /***/

    },

    /***/
    "Xmgb":
    /*!**********************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/filter/pipe-filter.ts ***!
      \**********************************************************************/

    /*! exports provided: PipeFilter */

    /***/
    function Xmgb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipeFilter", function () {
        return PipeFilter;
      });
      /* harmony import */


      var _base_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-filter */
      "idV8");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Extends BaseFilter by allowing the consumer to provide a
       pipe that will be used in the comparison process.
       */


      var PipeFilter = /*#__PURE__*/function (_base_filter__WEBPACK) {
        _inherits(PipeFilter, _base_filter__WEBPACK);

        var _super = _createSuper(PipeFilter);

        function PipeFilter(pipe) {
          var _this2;

          var dataField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, PipeFilter);

          _this2 = _super.call(this);
          _this2.pipe = pipe;
          _this2.dataField = dataField;
          return _this2;
        }

        _createClass(PipeFilter, [{
          key: "stringify",
          value: function stringify(data) {
            if (this.dataField && data) {
              return this.pipe.transform(data[this.dataField]);
            }

            return this.pipe.transform(data);
          }
        }]);

        return PipeFilter;
      }(_base_filter__WEBPACK_IMPORTED_MODULE_0__["BaseFilter"]);
      /***/

    },

    /***/
    "fUyY":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/storage-group-identifier.ts ***!
      \**********************************************************************************/

    /*! exports provided: StorageGroupIdentifier */

    /***/
    function fUyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageGroupIdentifier", function () {
        return StorageGroupIdentifier;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Disk group identifier by type and name, used for passing preselection context from
       * other pages' navigation or page refresh. vSAN Direct, PMEM and Unused groups have null name.
       */


      var StorageGroupIdentifier = /*#__PURE__*/function () {
        function StorageGroupIdentifier() {
          var diskGroupType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, StorageGroupIdentifier);

          this.diskGroupType = diskGroupType;
          this.name = name;
        }

        _createClass(StorageGroupIdentifier, null, [{
          key: "fromDiskGroupName",
          value: function fromDiskGroupName(name) {
            return new StorageGroupIdentifier(null, name);
          }
        }, {
          key: "fromDiskGroup",
          value: function fromDiskGroup(diskGroup) {
            return new StorageGroupIdentifier(diskGroup.diskGroupType, diskGroup.name);
          }
        }, {
          key: "areEqual",
          value: function areEqual(value1, value2) {
            // Disk group type is an optional argument,
            // so it should be taken into account only if both diskGroupTypes are not null.
            var diskGroupTypeOptionalCheck = !value1.diskGroupType || !value2.diskGroupType || value1.diskGroupType === value2.diskGroupType;
            return value1 && value2 && diskGroupTypeOptionalCheck && value1.name === value2.name;
          }
        }]);

        return StorageGroupIdentifier;
      }();
      /***/

    },

    /***/
    "fzMa":
    /*!****************************************************!*\
      !*** ./src/app/vsan/resync/resync-objects-util.ts ***!
      \****************************************************/

    /*! exports provided: ResyncObjectsUtil */

    /***/
    function fzMa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResyncObjectsUtil", function () {
        return ResyncObjectsUtil;
      });
      /* harmony import */


      var _util_date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/date-time */
      "oVzh");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ResyncObjectsUtil = /*#__PURE__*/function () {
        function ResyncObjectsUtil() {
          _classCallCheck(this, ResyncObjectsUtil);
        }

        _createClass(ResyncObjectsUtil, null, [{
          key: "getScheduledResync",
          value: function getScheduledResync(resyncData, isResyncETAImprovementSupported) {
            if (!resyncData) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.loading");
            } else if (!resyncData.repairTimerData) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.na.label");
            } else if (!resyncData.repairTimerData.isSupported) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.notSupported");
            }

            var repairTimerData = resyncData.repairTimerData;

            if (isResyncETAImprovementSupported) {
              if (!repairTimerData.objectsCount) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.none");
              }

              return repairTimerData.objectsCount === 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.total.one.object") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.total.many.objects", repairTimerData.objectsCount);
            }

            return this.getFormattedScheduledResync(repairTimerData.objectsCount, resyncData.repairTimerData.minTimer, resyncData.repairTimerData.maxTimer);
          }
        }, {
          key: "getFormattedScheduledResync",
          value: function getFormattedScheduledResync(objectsCount, minTimer, maxTimer) {
            if (!objectsCount) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.resyncSummary.scheduledResync.message.none");
            }

            var startTime;
            var endTime; // handle the case when only 1 object is scheduled for resync

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
            } // when minTimer === maxTimer, or maxTimer < 0, consider only minTimer for displaying the scheduled resync


            var isSameTime = _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].getNoSecondsTime(minTimer) === _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_1__["VsanDateTimeUtils"].getNoSecondsTime(maxTimer);

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
            } // display the scheduled resync in the form "between minTimer and maxTimer"


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
        }]);

        return ResyncObjectsUtil;
      }();
      /***/

    },

    /***/
    "hT5P":
    /*!****************************************************!*\
      !*** ./src/app/vsan/common/pipe/not-empty.pipe.ts ***!
      \****************************************************/

    /*! exports provided: NotEmptyPipe */

    /***/
    function hT5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotEmptyPipe", function () {
        return NotEmptyPipe;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * If the original value is null or an empty string, shows "--" instead.
       */


      var NotEmptyPipe = /*#__PURE__*/function () {
        function NotEmptyPipe() {
          _classCallCheck(this, NotEmptyPipe);
        }

        _createClass(NotEmptyPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value != null && value.toString().trim().length != 0) {
              return value;
            } else {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.na.label");
            }
          }
        }]);

        return NotEmptyPipe;
      }();
      /***/

    },

    /***/
    "hsab":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/comparator/string-comparator.ts ***!
      \********************************************************************************/

    /*! exports provided: StringComparator */

    /***/
    function hsab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StringComparator", function () {
        return StringComparator;
      });
      /* harmony import */


      var _component_datagrid_comparator_base_comparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/datagrid/comparator/base-comparator */
      "M9+R");
      /* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */


      var StringComparator = /*#__PURE__*/function (_component_datagrid_c) {
        _inherits(StringComparator, _component_datagrid_c);

        var _super2 = _createSuper(StringComparator);

        function StringComparator(dataField) {
          var _this3;

          _classCallCheck(this, StringComparator);

          _this3 = _super2.call(this);
          _this3.dataField = dataField;
          return _this3;
        }

        _createClass(StringComparator, [{
          key: "compareValue",
          value: function compareValue(a, b) {
            return this.stringify(a, this.dataField).toLowerCase().localeCompare(this.stringify(b, this.dataField).toLowerCase());
          }
        }]);

        return StringComparator;
      }(_component_datagrid_comparator_base_comparator__WEBPACK_IMPORTED_MODULE_0__["BaseComparator"]);
      /***/

    },

    /***/
    "lFN8":
    /*!*************************************************************!*\
      !*** ./src/app/vsan/common/model/disk-group-action.data.ts ***!
      \*************************************************************/

    /*! exports provided: DiskGroupActionData */

    /***/
    function lFN8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskGroupActionData", function () {
        return DiskGroupActionData;
      });
      /* harmony import */


      var _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-disk-mgmt-actions-util */
      "g4ok");
      /**
       * The disk group data required for disk and disk group actions,
       * such as: remove/recreate/unmount disk group and remove disks.
       */


      var DiskGroupActionData = /*@__PURE__*/function () {
        var DiskGroupActionData = /*#__PURE__*/_createClass(function DiskGroupActionData() {
          _classCallCheck(this, DiskGroupActionData);
        });

        DiskGroupActionData.fromDiskGroupData = function (group) {
          var groupData = new DiskGroupActionData();
          groupData.isLocked = group.isLocked;
          groupData.diskGroupName = group.name;
          groupData.isMounted = group.isMounted;
          groupData.diskMapping = _util_vsan_disk_mgmt_actions_util__WEBPACK_IMPORTED_MODULE_0__["VsanDiskMgmtActionsUtil"].getVsanDiskMapping(group);
          groupData.vsanUuid = group.disks.find(function (disk) {
            return disk.isMappedAsCache;
          }).vsanUuid;
          return groupData;
        };

        DiskGroupActionData.fromPrecheckEntity = function (precheckEntity) {
          var groupData = new DiskGroupActionData();
          groupData.vsanUuid = precheckEntity.uuid;
          groupData.diskGroupName = precheckEntity.name;
          groupData.isLocked = precheckEntity.diskGroupData.isLocked;
          groupData.isMounted = precheckEntity.diskGroupData.isMounted;
          groupData.diskMapping = precheckEntity.diskGroupData.diskMapping;
          return groupData;
        };

        return DiskGroupActionData;
      }();
      /***/

    },

    /***/
    "nxO0":
    /*!***************************************************!*\
      !*** ./src/app/generated/perf-states-obj-spec.ts ***!
      \***************************************************/

    /*! exports provided: PerfStatesObjSpec */

    /***/
    function nxO0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfStatesObjSpec", function () {
        return PerfStatesObjSpec;
      });

      var PerfStatesObjSpec;

      (function (PerfStatesObjSpec) {
        var Factory = /*#__PURE__*/_createClass(function Factory() {
          _classCallCheck(this, Factory);
        }); //class Factory


        Factory.create = function (clusterRef, profileId, isVerboseEnabled, isNetworkDiagnosticModeEnabled) {
          return {
            clusterRef: clusterRef,
            profileId: profileId,
            isVerboseEnabled: isVerboseEnabled,
            isNetworkDiagnosticModeEnabled: isNetworkDiagnosticModeEnabled
          };
        };

        PerfStatesObjSpec.Factory = Factory;
      })(PerfStatesObjSpec || (PerfStatesObjSpec = {})); //module PerfStatesObjSpec

      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map