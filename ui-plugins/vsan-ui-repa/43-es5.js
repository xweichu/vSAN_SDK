(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43], {
    /***/
    "0hTA":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/filter/enum-filter.component.ts ***!
      \********************************************************************************/

    /*! exports provided: EnumFilterComponent */

    /***/
    function hTA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnumFilterComponent", function () {
        return EnumFilterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/datagrid/filter/enumerated-filter.component */
      "EcRx");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var EnumFilterComponent = /*#__PURE__*/function () {
        function EnumFilterComponent() {
          _classCallCheck(this, EnumFilterComponent);

          this.selectedFilterValuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(EnumFilterComponent, [{
          key: "field",
          get: function get() {
            return this._field;
          },
          set: function set(field) {
            this._field = field;
            this.filterSelectionResolver = this.createFilterSelectionResolver(field);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // If etiher "objects" or "field" props are changed, the groups map needs to be rebuilt
            if (changes.objects && changes.objects.currentValue || changes.field && changes.field.currentValue) {
              this.objectGroups = this.generateGroupsMap();
            }
          }
        }, {
          key: "generateGroupsMap",
          value: function generateGroupsMap() {
            var groups = this.groupObjectsByField(this.objects);

            if (!groups || !groups.size) {
              return groups;
            } // filter empty types, sort alphabetically. a[0], b[0] compare keys; a[1], b[1] compare values


            return new Map(_toConsumableArray(groups.entries()).sort(function (a, b) {
              return a[0].toString().localeCompare(b[0].toString());
            }));
          }
          /**
           * Creates a FilterSelectionResolver that is used when a filter is applied.
           */

        }, {
          key: "createFilterSelectionResolver",
          value: function createFilterSelectionResolver(prop) {
            return new ( /*#__PURE__*/function (_component_datagrid_f) {
              _inherits(_class, _component_datagrid_f);

              var _super = _createSuper(_class);

              function _class(field) {
                var _this;

                _classCallCheck(this, _class);

                _this = _super.call(this);
                _this.field = field;
                return _this;
              }

              _createClass(_class, [{
                key: "isSelected",
                value: function isSelected(item, filters) {
                  var _this2 = this;

                  // If the given object matches the filter, show it
                  if (filters.some(function (filter) {
                    return filter === item[_this2.field];
                  })) {
                    return true;
                  } // If any of the object's children matches the filter, show the whole object (not only the child)


                  var children = item.children;

                  if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(children) && filters.some(function (filter) {
                    return children.some(function (child) {
                      return child[_this2.field] === filter;
                    });
                  })) {
                    return true;
                  } // Otherwise - hide the object


                  return false;
                }
              }]);

              return _class;
            }(_component_datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_1__["EnumeratedFilterSelectionResolver"]))(prop);
          }
          /**
           * Returns the label to be shown in the filter's dropdown.
           */

        }, {
          key: "getLabel",
          value: function getLabel(type) {
            return "".concat(this.enumToLabelConverter(type.key), " (").concat(type.value, ")");
          }
          /**
           * Recursively traverse all the objects and their children and groups them by the filter field. Then returns
           * a report about how many objects each group has.
           * @param objects The objects to be traversed
           * @param groups The initial map holding the groups
           */

        }, {
          key: "groupObjectsByField",
          value: function groupObjectsByField(objects) {
            var _this3 = this;

            var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
            var childrenProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "children";
            objects.forEach(function (obj) {
              var key = obj[_this3.field];

              if (!!key) {
                if (!groups.has(key)) {
                  groups.set(key, 0);
                }

                var count = groups.get(key);
                groups.set(key, ++count);
              } // recursively traverse all children if any


              var children = obj[childrenProp];

              if (children && children.length) {
                _this3.groupObjectsByField(children, groups);
              }
            });
            return groups;
          }
        }, {
          key: "onSelectedFilterValuesChange",
          value: function onSelectedFilterValuesChange(value) {
            if (this.selectedFilterValues === value) {
              return;
            }

            this.selectedFilterValues = value;
            this.selectedFilterValuesChange.emit(this.selectedFilterValues);
          }
        }]);

        return EnumFilterComponent;
      }();
      /***/

    },

    /***/
    "13kE":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/export/virtual-objects-data-source-adapter.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: VirtualObjectsDataSourceAdapter */

    /***/
    function kE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectsDataSourceAdapter", function () {
        return VirtualObjectsDataSourceAdapter;
      });
      /* harmony import */


      var _component_virtual_objects_table_export_virtual_object_model_with_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/virtual-objects-table/export/virtual-object-model-with-parent */
      "u1/2");

      var VirtualObjectsDataSourceAdapter = /*#__PURE__*/function () {
        function VirtualObjectsDataSourceAdapter(datagridAdapter, isSelectionSupported, loadAllVirtualObjects, isVirtualObjectSelected, isChildVirtualObjectFiltered) {
          _classCallCheck(this, VirtualObjectsDataSourceAdapter);

          this.datagridAdapter = datagridAdapter;
          this.isSelectionSupported = isSelectionSupported;
          this.loadAllVirtualObjects = loadAllVirtualObjects;
          this.isVirtualObjectSelected = isVirtualObjectSelected;
          this.isChildVirtualObjectFiltered = isChildVirtualObjectFiltered;
        }

        _createClass(VirtualObjectsDataSourceAdapter, [{
          key: "allItems",
          get: function get() {
            var allVirtualObjects = this.loadAllVirtualObjects();
            return (allVirtualObjects === null || allVirtualObjects === void 0 ? void 0 : allVirtualObjects.length) > 0 ? this.flat(allVirtualObjects) : this.flat(this.allVirtualObjectsByDatagrid);
          }
        }, {
          key: "allItemsCount",
          get: function get() {
            return this.allItems.length;
          }
        }, {
          key: "filteredItems",
          get: function get() {
            var _this4 = this;

            return this.flat(this.filteredVirtualObjectsByDatagrid).filter(function (vo) {
              return _this4.isParentOrFilteredChild(vo);
            });
          }
        }, {
          key: "filteredItemsCount",
          get: function get() {
            return this.filteredItems.length;
          }
        }, {
          key: "isSelectionEnabled",
          get: function get() {
            return this.isSelectionSupported;
          }
        }, {
          key: "selectedItems",
          get: function get() {
            var _this5 = this;

            return this.filteredItems.filter(function (vo) {
              return _this5.isVirtualObjectSelected(vo.self);
            });
          }
        }, {
          key: "selectedItemsCount",
          get: function get() {
            return this.selectedItems.length;
          }
        }, {
          key: "flat",
          value: function flat(virtualObjects) {
            if (!(virtualObjects === null || virtualObjects === void 0 ? void 0 : virtualObjects.length)) {
              return [];
            }

            return virtualObjects.reduce(function (accumulator, virtualObject) {
              var _accumulator$concat;

              return (_accumulator$concat = accumulator.concat(_component_virtual_objects_table_export_virtual_object_model_with_parent__WEBPACK_IMPORTED_MODULE_0__["VirtualObjectModelWithParent"].createParent(virtualObject))).concat.apply(_accumulator$concat, _toConsumableArray(_component_virtual_objects_table_export_virtual_object_model_with_parent__WEBPACK_IMPORTED_MODULE_0__["VirtualObjectModelWithParent"].createChildren(virtualObject, virtualObject.children)));
            }, []);
          }
        }, {
          key: "allVirtualObjectsByDatagrid",
          get: function get() {
            return this.datagridAdapter.allItems;
          }
        }, {
          key: "filteredVirtualObjectsByDatagrid",
          get: function get() {
            return this.datagridAdapter.filteredItems;
          }
          /**
           * Parent virtual objects are already filtered by the datagrid filters.
           * We need to filter child virtual objects because they are manually handled in the virtual objects table.
           */

        }, {
          key: "isParentOrFilteredChild",
          value: function isParentOrFilteredChild(virtualObject) {
            return virtualObject.isParent || this.isChildVirtualObjectFiltered(virtualObject.parent, virtualObject.self);
          }
        }]);

        return VirtualObjectsDataSourceAdapter;
      }();
      /***/

    },

    /***/
    "1RE0":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-table.component.ngfactory.js ***!
      \**********************************************************************************************************/

    /*! exports provided: RenderType_VirtualObjectsTableComponent, View_VirtualObjectsTableComponent_0, View_VirtualObjectsTableComponent_Host_0, VirtualObjectsTableComponentNgFactory */

    /***/
    function RE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_VirtualObjectsTableComponent", function () {
        return RenderType_VirtualObjectsTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VirtualObjectsTableComponent_0", function () {
        return View_VirtualObjectsTableComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VirtualObjectsTableComponent_Host_0", function () {
        return View_VirtualObjectsTableComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectsTableComponentNgFactory", function () {
        return VirtualObjectsTableComponentNgFactory;
      });
      /* harmony import */


      var _virtual_objects_table_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./virtual-objects-table.scss.shim.ngstyle */
      "aFr8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../datagrid/filter/enum-filter.component.ngfactory */
      "F8An");
      /* harmony import */


      var _datagrid_filter_enum_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../datagrid/filter/enum-filter.component */
      "0hTA");
      /* harmony import */


      var _directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directive/external-link/external-link.directive */
      "tsUx");
      /* harmony import */


      var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _directive_grid_scroll_scroll_to_current_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../directive/grid-scroll/scroll-to-current.directive */
      "OWW+");
      /* harmony import */


      var _vm_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./vm-cell.component.ngfactory */
      "y7Cl");
      /* harmony import */


      var _vm_cell_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./vm-cell.component */
      "hsFi");
      /* harmony import */


      var _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../cell/icon-item.component.ngfactory */
      "ErWV");
      /* harmony import */


      var _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../cell/icon-item.component */
      "yJ+k");
      /* harmony import */


      var _cell_health_state_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../cell/health-state-item.component.ngfactory */
      "3eJY");
      /* harmony import */


      var _cell_health_state_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../cell/health-state-item.component */
      "EuVs");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _whatIf_state_label_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./whatIf-state-label.pipe */
      "66A/");
      /* harmony import */


      var _whatIf_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./whatIf-state-icon-class.pipe */
      "srXJ");
      /* harmony import */


      var _whatIf_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./whatIf-state-icon-shape.pipe */
      "sz7u");
      /* harmony import */


      var _pipe_virtual_objects_durability_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../pipe/virtual-objects/durability-state-icon-shape.pipe */
      "OvlE");
      /* harmony import */


      var _pipe_virtual_objects_durability_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../pipe/virtual-objects/durability-state-icon-class.pipe */
      "Os1L");
      /* harmony import */


      var _pipe_virtual_objects_durability_state_label_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../pipe/virtual-objects/durability-state-label.pipe */
      "zizU");
      /* harmony import */


      var _directive_grid_scroll_datagrid_scroll_to_row_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../directive/grid-scroll/datagrid-scroll-to-row.directive */
      "98Vj");
      /* harmony import */


      var _filter_virtual_objects_type_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./filter/virtual-objects-type-filter.component.ngfactory */
      "Fhh9");
      /* harmony import */


      var _filter_virtual_objects_type_filter_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./filter/virtual-objects-type-filter.component */
      "9X/2");
      /* harmony import */


      var _export_export_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../export/export.component.ngfactory */
      "NLU3");
      /* harmony import */


      var _export_export_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../export/export.component */
      "mC7S");
      /* harmony import */


      var _virtual_objects_table_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./virtual-objects-table.component */
      "qGLI");
      /* harmony import */


      var _generated_permission_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../../../generated/permission-service */
      "B+sv");
      /* harmony import */


      var _virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./virtual-objects-table.service */
      "LAuz");
      /* harmony import */


      var _virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./virtual-objects-table-state.service */
      "eh32");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_VirtualObjectsTableComponent = [_virtual_objects_table_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_VirtualObjectsTableComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_VirtualObjectsTableComponent,
        data: {}
      });

      function View_VirtualObjectsTableComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 17, "clr-dg-column", [["class", "selector-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 16777216, null, 1, 6, "input", [["clrCheckbox", ""], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.allSelected = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_10 = _co.allSelected;

          _ck(_v, 13, 0, currVal_10);

          _ck(_v, 16, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).id;

          _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
        });
      }

      function View_VirtualObjectsTableComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 22, "clr-dg-column", [["class", "primary-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 8, "clr-dg-filter", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "vsan-enum-filter", [], null, null, null, _datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_EnumFilterComponent_0"], _datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_EnumFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 573440, null, 0, _datagrid_filter_enum_filter_component__WEBPACK_IMPORTED_MODULE_9__["EnumFilterComponent"], [], {
          objects: [0, "objects"],
          field: [1, "field"],
          enumToLabelConverter: [2, "enumToLabelConverter"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = "whatIfComplianceStatus";

          _ck(_v, 3, 0, currVal_5);

          _ck(_v, 9, 0);

          var currVal_7 = _co.virtualObjects;
          var currVal_8 = "whatIfComplianceStatus";
          var currVal_9 = _co.VirtualObjectsTypeUtil.getComplianceStatusLabel;

          _ck(_v, 19, 0, currVal_7, currVal_8, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSort;

          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.column.whatIfResult"));

          _ck(_v, 11, 0, currVal_6);
        });
      }

      function View_VirtualObjectsTableComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-column", [["class", "health-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.column.placementAndAvailabilityHealth"));

          _ck(_v, 9, 0, currVal_2);
        });
      }

      function View_VirtualObjectsTableComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "clr-signpost-content", [], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "a", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4210688, null, 0, _directive_external_link_external_link_directive__WEBPACK_IMPORTED_MODULE_10__["ExternalLinkDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"], [8, null]], {
          articleId: [0, "articleId"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = "bottom-middle";

          _ck(_v, 2, 0, currVal_3);

          var currVal_5 = _co.ENHANCED_DURABILITY_KB;

          _ck(_v, 9, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.column.durability.info"));

          _ck(_v, 5, 0, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 41, "clr-dg-column", [["class", "primary-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 17, "clr-signpost", [], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4210688, null, 0, _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_12__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 3, "clr-icon", [["class", "signpost-trigger"], ["clrSignpostTrigger", ""], ["shape", "info-circle"], ["size", "20"]], [[1, "aria-label", 0], [1, "aria-expanded", 0], [1, "aria-controls", 0], [2, "active", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onSignpostTriggerClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 212992, [[18, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpostTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_13__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 8, "clr-dg-filter", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[17, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 2, "vsan-enum-filter", [], null, null, null, _datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_EnumFilterComponent_0"], _datagrid_filter_enum_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_EnumFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 573440, null, 0, _datagrid_filter_enum_filter_component__WEBPACK_IMPORTED_MODULE_9__["EnumFilterComponent"], [], {
          objects: [0, "objects"],
          field: [1, "field"],
          enumToLabelConverter: [2, "enumToLabelConverter"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 3, 0);

          _ck(_v, 9, 0);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.column.durability.signpost.label"));

          _ck(_v, 17, 0, currVal_7);

          _ck(_v, 25, 0);

          var currVal_12 = null;

          _ck(_v, 29, 0, currVal_12);

          var currVal_13 = _co.virtualObjects;
          var currVal_14 = "durabilityState";
          var currVal_15 = _co.getDurabilityLabel;

          _ck(_v, 38, 0, currVal_13, currVal_14, currVal_15);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSort;

          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.column.durability"));

          _ck(_v, 11, 0, currVal_5);

          var currVal_6 = true;

          _ck(_v, 13, 0, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).commonStrings.keys.signpostToggle;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ariaExpanded;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ariaControl;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).isOpen;

          _ck(_v, 23, 0, currVal_8, currVal_9, currVal_10, currVal_11);
        });
      }

      function View_VirtualObjectsTableComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 17, "clr-dg-column", [["class", "primary-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 3, "clr-dg-string-filter", [], null, [[null, "clrFilterValueChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrFilterValueChange" === en) {
            var pd_0 = (_co.storagePolicyNameFilterValue = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrFilterValueChange" === en) {
            var pd_1 = _co.notifyFilterChange() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DatagridStringFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DatagridStringFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          customStringFilter: [0, "customStringFilter"],
          value: [1, "value"]
        }, {
          filterValueChange: "clrFilterValueChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = "storagePolicy";

          _ck(_v, 3, 0, currVal_5);

          _ck(_v, 9, 0);

          var currVal_7 = _co.storagePolicyNameFilter;
          var currVal_8 = _co.storagePolicyNameFilterValue;

          _ck(_v, 14, 0, currVal_7, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSort;

          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.column.storagePolicy"));

          _ck(_v, 11, 0, currVal_6);
        });
      }

      function View_VirtualObjectsTableComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.column.storagePolicy.pftt"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 20, "clr-dg-column", [["class", "primary-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_VirtualObjectsTableComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 3, "clr-dg-string-filter", [], null, [[null, "clrFilterValueChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrFilterValueChange" === en) {
            var pd_0 = (_co.storagePolicyPFTTFilterValue = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrFilterValueChange" === en) {
            var pd_1 = _co.notifyFilterChange() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DatagridStringFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DatagridStringFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          customStringFilter: [0, "customStringFilter"],
          value: [1, "value"]
        }, {
          filterValueChange: "clrFilterValueChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[20, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = "storagePolicy";

          _ck(_v, 3, 0, currVal_5);

          _ck(_v, 9, 0);

          var currVal_6 = _ck(_v, 14, 0, true);

          _ck(_v, 13, 0, currVal_6);

          var currVal_7 = _co.storagePolicyPFTTFilter;
          var currVal_8 = _co.storagePolicyPFTTFilterValue;

          _ck(_v, 17, 0, currVal_7, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSort;

          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.column.storagePolicy.sftt"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 20, "clr-dg-column", [["class", "primary-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_VirtualObjectsTableComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]]], {
          clrDgHideableColumn: [0, "clrDgHideableColumn"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, {
          hidden: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 3, "clr-dg-string-filter", [], null, [[null, "clrFilterValueChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrFilterValueChange" === en) {
            var pd_0 = (_co.storagePolicySFTTFilterValue = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrFilterValueChange" === en) {
            var pd_1 = _co.notifyFilterChange() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DatagridStringFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DatagridStringFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          customStringFilter: [0, "customStringFilter"],
          value: [1, "value"]
        }, {
          filterValueChange: "clrFilterValueChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[21, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = "storagePolicy";

          _ck(_v, 3, 0, currVal_5);

          _ck(_v, 9, 0);

          var currVal_6 = _ck(_v, 14, 0, true);

          _ck(_v, 13, 0, currVal_6);

          var currVal_7 = _co.storagePolicySFTTFilter;
          var currVal_8 = _co.storagePolicySFTTFilterValue;

          _ck(_v, 17, 0, currVal_7, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaSort;

          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["class", "selector-cell"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 146);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 154);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["class", "health-column"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 156);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 158);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _ck(_v, 9, 0, _v.parent.context.$implicit);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 160);

          _ck(_v, 8, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _ck(_v, 9, 0, _v.parent.context.$implicit);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 162);

          _ck(_v, 8, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _ck(_v, 9, 0, _v.parent.context.$implicit);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 164);

          _ck(_v, 8, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_33(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_32(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["class", "selector-cell indented-content"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 146);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_34(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_35(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_37(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_36(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 154);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_39(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_38(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["class", "health-column"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 156);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_41(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_40(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          var currVal_2 = _ck(_v, 7, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 158);

          _ck(_v, 6, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_43(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_42(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_43)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _ck(_v, 9, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 160);

          _ck(_v, 8, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_45(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_44(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _ck(_v, 9, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 162);

          _ck(_v, 8, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_47(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_46(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_47)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](9, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 1, 0);

          _ck(_v, 5, 0);

          var currVal_5 = _ck(_v, 9, 0, _v.parent.parent.parent.context.$implicit);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent.parent, 164);

          _ck(_v, 8, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;
          var currVal_2 = "hidden";
          var currVal_3 = "ellipsis";
          var currVal_4 = "nowrap";

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_VirtualObjectsTableComponent_48(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_31(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 63, "clr-dg-row-detail", [], [[2, "datagrid-row-flex", null], [2, "datagrid-row-detail", null], [2, "datagrid-container", null], [1, "id", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRowDetail_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRowDetail"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRowDetail"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1196032, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[11, 4]], 0, _directive_grid_scroll_scroll_to_current_directive__WEBPACK_IMPORTED_MODULE_14__["ScrollToCurrent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          isSelectedElement: [0, "isSelectedElement"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 16777216, null, 0, 10, "clr-dg-cell", [["class", "indented-content"], ["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 16777216, null, 0, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](31, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_46)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 16777216, null, 0, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 114688, [[35, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 46, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 147456, [[36, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_48)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](61, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_4 = _co.tableState.isSelected(_v.parent.parent.context.$implicit);

          _ck(_v, 5, 0, currVal_4);

          var currVal_5 = !_co.isWhatIfData && !_co.hideRowSelection;

          _ck(_v, 8, 0, currVal_5);

          _ck(_v, 11, 0);

          _ck(_v, 15, 0);

          var currVal_11 = _ck(_v, 19, 0, _v.parent.parent.context.$implicit);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 148);

          _ck(_v, 18, 0, currVal_11, currVal_12);

          _ck(_v, 23, 0);

          _ck(_v, 27, 0);

          var currVal_18 = _ck(_v, 31, 0, _v.parent.parent.context.$implicit);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 152);

          _ck(_v, 30, 0, currVal_18, currVal_19);

          var currVal_20 = _co.isWhatIfData;

          _ck(_v, 35, 0, currVal_20);

          var currVal_21 = !_co.isWhatIfData;

          _ck(_v, 38, 0, currVal_21);

          var currVal_22 = _co.isWhatIfData && _co.isDurabilitySupported;

          _ck(_v, 41, 0, currVal_22);

          var currVal_23 = _co.showPolicyColumns;

          _ck(_v, 44, 0, currVal_23);

          var currVal_24 = _co.showPolicyColumns;

          _ck(_v, 47, 0, currVal_24);

          var currVal_25 = _co.showPolicyColumns;

          _ck(_v, 50, 0, currVal_25);

          _ck(_v, 53, 0);

          _ck(_v, 57, 0);

          var currVal_31 = _ck(_v, 61, 0, _v.parent.parent.context.$implicit);

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 166);

          _ck(_v, 60, 0, currVal_31, currVal_32);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = true;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).cells.length === 0;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).expand.expandableId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_6 = true;
          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).signpost.length > 0;
          var currVal_8 = "hidden";
          var currVal_9 = "ellipsis";
          var currVal_10 = "nowrap";

          _ck(_v, 10, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_13 = true;
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).signpost.length > 0;
          var currVal_15 = "hidden";
          var currVal_16 = "ellipsis";
          var currVal_17 = "nowrap";

          _ck(_v, 22, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

          var currVal_26 = true;
          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).signpost.length > 0;
          var currVal_28 = "hidden";
          var currVal_29 = "ellipsis";
          var currVal_30 = "nowrap";

          _ck(_v, 52, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);
        });
      }

      function View_VirtualObjectsTableComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_VirtualObjectsTableComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridDetailRegisterer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfExpanded"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]], {
          expanded: [0, "expanded"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var currVal_0 = null;

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_VirtualObjectsTableComponent_29(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isMatchingTextSearch(_v.parent.context.$implicit, _v.context.$implicit);

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_VirtualObjectsTableComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 70, "clr-dg-row", [["class", "signpost-row-height-fix"], ["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[7, 4], [10, 4], [3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[11, 4]], 0, _directive_grid_scroll_scroll_to_current_directive__WEBPACK_IMPORTED_MODULE_14__["ScrollToCurrent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          isSelectedElement: [0, "isSelectedElement"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 16777216, null, 2, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](23, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](35, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_VirtualObjectsTableComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 114688, [[23, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 147456, [[24, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_VirtualObjectsTableComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](65, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTableComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          var currVal_4 = _co.tableState.isSelected(_v.context.$implicit);

          _ck(_v, 10, 0, currVal_4);

          var currVal_5 = !_co.hideRowSelection;

          _ck(_v, 14, 0, currVal_5);

          _ck(_v, 17, 0);

          var currVal_8 = _ck(_v, 23, 0, _v.context.$implicit);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 148);

          _ck(_v, 22, 0, currVal_8, currVal_9);

          _ck(_v, 27, 0);

          _ck(_v, 31, 0);

          var currVal_15 = _ck(_v, 35, 0, _v.context.$implicit);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 152);

          _ck(_v, 34, 0, currVal_15, currVal_16);

          var currVal_17 = _co.isWhatIfData;

          _ck(_v, 39, 0, currVal_17);

          var currVal_18 = !_co.isWhatIfData;

          _ck(_v, 42, 0, currVal_18);

          var currVal_19 = _co.isWhatIfData && _co.isDurabilitySupported;

          _ck(_v, 45, 0, currVal_19);

          var currVal_20 = _co.showPolicyColumns;

          _ck(_v, 48, 0, currVal_20);

          var currVal_21 = _co.showPolicyColumns;

          _ck(_v, 51, 0, currVal_21);

          var currVal_22 = _co.showPolicyColumns;

          _ck(_v, 54, 0, currVal_22);

          _ck(_v, 57, 0);

          _ck(_v, 61, 0);

          var currVal_28 = _ck(_v, 65, 0, _v.context.$implicit);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 166);

          _ck(_v, 64, 0, currVal_28, currVal_29);

          var currVal_30 = _v.context.$implicit.children || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵEMPTY_ARRAY"];

          _ck(_v, 69, 0, currVal_30);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_6 = true;
          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).signpost.length > 0;

          _ck(_v, 16, 0, currVal_6, currVal_7);

          var currVal_10 = true;
          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).signpost.length > 0;
          var currVal_12 = "hidden";
          var currVal_13 = "ellipsis";
          var currVal_14 = "nowrap";

          _ck(_v, 26, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_23 = true;
          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).signpost.length > 0;
          var currVal_25 = "hidden";
          var currVal_26 = "ellipsis";
          var currVal_27 = "nowrap";

          _ck(_v, 56, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);
        });
      }

      function View_VirtualObjectsTableComponent_49(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, [["selector", 1]], null, 6, "input", [["clrCheckbox", ""], ["type", "checkbox"]], [[8, "indeterminate", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("change" === en) {
            var pd_3 = _co.tableState.toggleSelection(_v.context.item, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).checked) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_9 = _co.tableState.isSelected(_v.context.item);

          _ck(_v, 4, 0, currVal_9);

          _ck(_v, 7, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.tableState.isIndeterminate(_v.context.item);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).id;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        });
      }

      function View_VirtualObjectsTableComponent_51(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
      }

      function View_VirtualObjectsTableComponent_50(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_VirtualObjectsTableComponent_51)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
          ngTemplateOutlet: [1, "ngTemplateOutlet"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
          item: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _ck(_v, 3, 0, _v.context.item);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 150);

          _ck(_v, 2, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_VirtualObjectsTableComponent_52(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-vm-cell", [], null, [[null, "linkClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("linkClick" === en) {
            var pd_0 = _co.navigate(_v.context.item) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _vm_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_VsanVmCell_0"], _vm_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_VsanVmCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _vm_cell_component__WEBPACK_IMPORTED_MODULE_16__["VsanVmCell"], [], {
          item: [0, "item"],
          isLink: [1, "isLink"]
        }, {
          linkClick: "linkClick"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.item;

          var currVal_1 = _co.isLink(_v.context.item);

          _ck(_v, 2, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_VirtualObjectsTableComponent_53(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](0, null, ["\n   ", "\n"]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getTypeLabel(_v.context.item.type);

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_55(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "vsan-icon-item", [], null, null, null, _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_IconItemComponent_0"], _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_18__["IconItemComponent"], [], {
          label: [0, "label"],
          iconClass: [1, "iconClass"],
          shape: [2, "shape"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _v.parent.context.item.whatIfComplianceStatus));

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 2), _v.parent.context.item.whatIfComplianceStatus));

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 2, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 3), _v.parent.context.item.whatIfComplianceStatus));

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_VirtualObjectsTableComponent_54(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_55)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _v.context.item.whatIfComplianceStatus;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_VirtualObjectsTableComponent_56(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "vsan-health-state-item", [], null, null, null, _cell_health_state_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_HealthStateItemComponent_0"], _cell_health_state_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_HealthStateItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _cell_health_state_item_component__WEBPACK_IMPORTED_MODULE_20__["HealthStateItemComponent"], [], {
          compositeHealth: [0, "compositeHealth"],
          healthState: [1, "healthState"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.expandShowHideAggregationStyle(_v.context.item);

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.item.compositeHealth;
          var currVal_2 = _v.context.item.healthState;

          _ck(_v, 3, 0, currVal_1, currVal_2);
        }, null);
      }

      function View_VirtualObjectsTableComponent_58(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "vsan-icon-item", [], null, null, null, _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_IconItemComponent_0"], _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_18__["IconItemComponent"], [], {
          label: [0, "label"],
          iconClass: [1, "iconClass"],
          shape: [2, "shape"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 6), _v.parent.context.item.durabilityState));

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 5), _v.parent.context.item.durabilityState));

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 2, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 4), _v.parent.context.item.durabilityState));

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_VirtualObjectsTableComponent_57(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_58)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _v.context.item.durabilityState;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_VirtualObjectsTableComponent_60(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "clr-icon", [["aria-hidden", "true"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_13__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["href", "javascript://"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onPolicyClicked() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.Icon.VM_STORAGE_PROFILE_IMAGE;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.parent.context.item.storagePolicy.name;

          _ck(_v, 7, 0, currVal_1);
        });
      }

      function View_VirtualObjectsTableComponent_61(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.na.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_59(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_60)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_61)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.expandShowHideAggregationStyle(_v.context.item);

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.item.storagePolicy == null ? null : _v.context.item.storagePolicy.name;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = !(_v.context.item.storagePolicy == null ? null : _v.context.item.storagePolicy.name) && !_co.isContainerItem(_v.context.item);

          _ck(_v, 8, 0, currVal_2);
        }, null);
      }

      function View_VirtualObjectsTableComponent_63(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.item.storagePolicy.pFtt;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_64(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.na.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_62(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_63)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_64)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.expandShowHideAggregationStyle(_v.context.item);

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.VsanUiUtils.isSet(_v.context.item.storagePolicy == null ? null : _v.context.item.storagePolicy.pFtt);

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.VsanUiUtils.isUnset(_v.context.item.storagePolicy == null ? null : _v.context.item.storagePolicy.pFtt) && !_co.isContainerItem(_v.context.item);

          _ck(_v, 8, 0, currVal_2);
        }, null);
      }

      function View_VirtualObjectsTableComponent_66(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.item.storagePolicy.sFtt;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_67(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.na.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_65(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_66)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_67)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.expandShowHideAggregationStyle(_v.context.item);

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.VsanUiUtils.isSet(_v.context.item.storagePolicy == null ? null : _v.context.item.storagePolicy.sFtt);

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.VsanUiUtils.isUnset(_v.context.item.storagePolicy == null ? null : _v.context.item.storagePolicy.sFtt) && !_co.isContainerItem(_v.context.item);

          _ck(_v, 8, 0, currVal_2);
        }, null);
      }

      function View_VirtualObjectsTableComponent_69(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.item.uid;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTableComponent_68(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_69)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = _v.context.item.uid;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_VirtualObjectsTableComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_21__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _whatIf_state_label_pipe__WEBPACK_IMPORTED_MODULE_22__["VirtualObjectWhatIfStateLabelPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _whatIf_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_23__["VirtualObjectWhatIfStateIconClassPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _whatIf_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_24__["VirtualObjectWhatIfStateIconShapePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_virtual_objects_durability_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_25__["DurabilityStateIconShapePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_virtual_objects_durability_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_26__["DurabilityStateIconClassPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_virtual_objects_durability_state_label_pipe__WEBPACK_IMPORTED_MODULE_27__["DurabilityStateLabelPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          datagrid: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, {
          pagination: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, {
          rows: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 132, "clr-datagrid", [["id", "data"], ["vsan-datagrid-scroll-to-row", ""]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 5423104, [[1, 4], ["dataGrid", 4]], 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          loading: [0, "loading"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 2, _directive_grid_scroll_datagrid_scroll_to_row_directive__WEBPACK_IMPORTED_MODULE_28__["DatagridScrollToRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          tableRows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          markedForScrollingRows: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 16777216, null, null, 17, "clr-dg-column", [["class", "primary-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](58, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](59, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, 0, 3, "clr-dg-string-filter", [], null, [[null, "clrFilterValueChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrFilterValueChange" === en) {
            var pd_0 = (_co.nameFilterValue = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrFilterValueChange" === en) {
            var pd_1 = _co.notifyFilterChange() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DatagridStringFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DatagridStringFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          customStringFilter: [0, "customStringFilter"],
          value: [1, "value"]
        }, {
          filterValueChange: "clrFilterValueChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[13, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 16777216, null, null, 22, "clr-dg-column", [["class", "type-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](77, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](78, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, 0, 8, "clr-dg-filter", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[14, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, 0, 2, "vsan-virtual-objects-type-filter", [], null, [[null, "selectedFilterValuesChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedFilterValuesChange" === en) {
            var pd_0 = _co.onSelectedFilterTypeChanged($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _filter_virtual_objects_type_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_VirtualObjectsTypeFilterComponent_0"], _filter_virtual_objects_type_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_VirtualObjectsTypeFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 114688, null, 0, _filter_virtual_objects_type_filter_component__WEBPACK_IMPORTED_MODULE_30__["VirtualObjectsTypeFilterComponent"], [], {
          labelFunction: [0, "labelFunction"],
          virtualObjects: [1, "virtualObjects"],
          selectedFilterValues: [2, "selectedFilterValues"]
        }, {
          selectedFilterValuesChange: "selectedFilterValuesChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 16777216, null, null, 17, "clr-dg-column", [["class", "vsan-uuid-column"], ["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 770048, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 147456, [[8, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](119, 1, ["\n      ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](120, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, 0, 3, "clr-dg-string-filter", [], null, [[null, "clrFilterValueChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrFilterValueChange" === en) {
            var pd_0 = (_co.vsanUuidFilterValue = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrFilterValueChange" === en) {
            var pd_1 = _co.notifyFilterChange() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DatagridStringFilter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DatagridStringFilter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 4374528, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          customStringFilter: [0, "customStringFilter"],
          value: [1, "value"]
        }, {
          filterValueChange: "clrFilterValueChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[22, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdd"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["DatagridStringFilter"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_VirtualObjectsTableComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 409600, [[4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, 2, 11, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 47, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, 1, 2, "vsan-export", [], null, null, null, _export_export_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["View_ExportComponent_0"], _export_export_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["RenderType_ExportComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 49152, null, 0, _export_export_component__WEBPACK_IMPORTED_MODULE_32__["ExportComponent"], [], {
          filename: [0, "filename"],
          source: [1, "source"],
          dataExtractors: [2, "dataExtractors"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](138, 1, ["\n      ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, 2, 2, "clr-dg-pagination", [], [[2, "pagination", null]], [[null, "clrDgPageChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrDgPageChange" === en) {
            var pd_0 = (_co.currentPage = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridPagination_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 245760, [[2, 4], ["pagination", 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]], {
          pageSize: [0, "pageSize"],
          currentPage: [1, "currentPage"]
        }, {
          currentChanged: "clrDgPageChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 48, {
          _pageSizeComponent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colSelector", 2]], null, 0, null, View_VirtualObjectsTableComponent_49)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colName", 2]], null, 0, null, View_VirtualObjectsTableComponent_50)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["cellName", 2]], null, 0, null, View_VirtualObjectsTableComponent_52)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colType", 2]], null, 0, null, View_VirtualObjectsTableComponent_53)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colComplianceStatus", 2]], null, 0, null, View_VirtualObjectsTableComponent_54)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colHealthState", 2]], null, 0, null, View_VirtualObjectsTableComponent_56)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colDurabilityState", 2]], null, 0, null, View_VirtualObjectsTableComponent_57)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colStorageProfileName", 2]], null, 0, null, View_VirtualObjectsTableComponent_59)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colStorageProfilePFTT", 2]], null, 0, null, View_VirtualObjectsTableComponent_62)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colStorageProfileSFTT", 2]], null, 0, null, View_VirtualObjectsTableComponent_65)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["colVsanUuid", 2]], null, 0, null, View_VirtualObjectsTableComponent_68)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.loading;

          _ck(_v, 25, 0, currVal_2);

          var currVal_3 = !_co.hideRowSelection;

          _ck(_v, 45, 0, currVal_3);

          _ck(_v, 50, 0);

          _ck(_v, 56, 0);

          var currVal_10 = _co.nameFilter;
          var currVal_11 = _co.nameFilterValue;

          _ck(_v, 61, 0, currVal_10, currVal_11);

          var currVal_17 = "type";

          _ck(_v, 69, 0, currVal_17);

          _ck(_v, 75, 0);

          var currVal_19 = _co.getTypeLabel;
          var currVal_20 = _co.virtualObjects;
          var currVal_21 = _co.typeFilterValue;

          _ck(_v, 85, 0, currVal_19, currVal_20, currVal_21);

          var currVal_22 = _co.isWhatIfData;

          _ck(_v, 91, 0, currVal_22);

          var currVal_23 = !_co.isWhatIfData;

          _ck(_v, 94, 0, currVal_23);

          var currVal_24 = _co.isWhatIfData && _co.isDurabilitySupported;

          _ck(_v, 97, 0, currVal_24);

          var currVal_25 = _co.showPolicyColumns;

          _ck(_v, 100, 0, currVal_25);

          var currVal_26 = _co.showPolicyColumns;

          _ck(_v, 103, 0, currVal_26);

          var currVal_27 = _co.showPolicyColumns;

          _ck(_v, 106, 0, currVal_27);

          var currVal_33 = "uid";

          _ck(_v, 111, 0, currVal_33);

          _ck(_v, 117, 0);

          var currVal_35 = _co.vsanUuidFilter;
          var currVal_36 = _co.vsanUuidFilterValue;

          _ck(_v, 122, 0, currVal_35, currVal_36);

          var currVal_37 = _co.virtualObjects;

          _ck(_v, 129, 0, currVal_37);

          var currVal_39 = _co.VirtualObjectsExportConfig.fileName;
          var currVal_40 = _co.exportDataSource;

          var currVal_41 = _co.VirtualObjectsExportConfig.getVirtualObjectDataExtractors(_co.isWhatIfData, _co.showPolicyColumns, _co.isDurabilitySupported);

          _ck(_v, 136, 0, currVal_39, currVal_40, currVal_41);

          var currVal_44 = _co.pageSize;
          var currVal_45 = _co.currentPage;

          _ck(_v, 140, 0, currVal_44, currVal_45);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).detailService.isOpen;

          _ck(_v, 11, 0, currVal_0, currVal_1);

          var currVal_4 = true;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ariaSort;

          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 47, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 58, 0, _ck(_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.cluster.virtualObjects.column.name"));

          _ck(_v, 58, 0, currVal_9);

          var currVal_12 = true;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ariaSort;

          var currVal_14 = "hidden";
          var currVal_15 = "ellipsis";
          var currVal_16 = "nowrap";

          _ck(_v, 66, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 77, 0, _ck(_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.cluster.virtualObjects.column.type"));

          _ck(_v, 77, 0, currVal_18);

          var currVal_28 = true;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).ariaSort;

          var currVal_30 = "hidden";
          var currVal_31 = "ellipsis";
          var currVal_32 = "nowrap";

          _ck(_v, 108, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 119, 0, _ck(_v, 120, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.cluster.virtualObjects.column.uuid"));

          _ck(_v, 119, 0, currVal_34);

          var currVal_38 = true;

          _ck(_v, 131, 0, currVal_38);

          var currVal_42 = _co.getDatagridFooterLabel();

          _ck(_v, 138, 0, currVal_42);

          var currVal_43 = true;

          _ck(_v, 139, 0, currVal_43);
        });
      }

      function View_VirtualObjectsTableComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-virtual-objects-table", [], null, null, null, View_VirtualObjectsTableComponent_0, RenderType_VirtualObjectsTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _virtual_objects_table_component__WEBPACK_IMPORTED_MODULE_33__["VirtualObjectsTableComponent"], [_generated_permission_service__WEBPACK_IMPORTED_MODULE_34__["PermissionService"], _virtual_objects_table_service__WEBPACK_IMPORTED_MODULE_35__["VirtualObjectsTableService"], _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_11__["NavigationService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _virtual_objects_table_state_service__WEBPACK_IMPORTED_MODULE_36__["VirtualObjectsTableStateService"]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, null);
      }

      var VirtualObjectsTableComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-virtual-objects-table", _virtual_objects_table_component__WEBPACK_IMPORTED_MODULE_33__["VirtualObjectsTableComponent"], View_VirtualObjectsTableComponent_Host_0, {
        loading: "loading",
        clusterId: "clusterId",
        isWhatIfData: "isWhatIfData",
        isDurabilitySupported: "isDurabilitySupported",
        hideRowSelection: "hideRowSelection",
        presentVirtualObjectUuids: "presentVirtualObjectUuids",
        nameFilterValue: "nameFilterValue",
        typeFilterValue: "typeFilterValue",
        appliedHealthStateFilters: "appliedHealthStateFilters",
        allVirtualObjects: "allVirtualObjects",
        virtualObjects: "virtualObjects"
      }, {
        selectionChanged: "selectionChanged",
        filterChanged: "filterChanged"
      }, []);
      /***/

    },

    /***/
    "3I+f":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/export/downloaders/csv-downloader.ts ***!
      \****************************************************************************/

    /*! exports provided: CsvDownloader */

    /***/
    function IF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CsvDownloader", function () {
        return CsvDownloader;
      });
      /* harmony import */


      var _component_export_downloaders_downloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/export/downloaders/downloader */
      "EZSG");
      /* harmony import */


      var _component_export_files_file_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/export/files/file-extension */
      "BZdf");

      var CsvDownloader = /*@__PURE__*/function () {
        var CsvDownloader = /*#__PURE__*/function (_component_export_dow) {
          _inherits(CsvDownloader, _component_export_dow);

          var _super2 = _createSuper(CsvDownloader);

          function CsvDownloader() {
            _classCallCheck(this, CsvDownloader);

            return _super2.call(this, CsvDownloader.FILE_TYPE, _component_export_files_file_extension__WEBPACK_IMPORTED_MODULE_1__["FileExtension"].CSV);
          }

          _createClass(CsvDownloader, [{
            key: "formatContent",
            value: function formatContent(content) {
              var _this6 = this;

              return [this.formatAsCsvRow(content.labels)].concat(_toConsumableArray(content.values.map(function (values) {
                return _this6.formatAsCsvRow(values);
              }))).join(CsvDownloader.ROW_TERMINATOR);
            }
          }, {
            key: "formatAsCsvRow",
            value: function formatAsCsvRow(strings) {
              var _this7 = this;

              return strings.map(function (str) {
                return _this7.escape(str);
              }).join(CsvDownloader.VALUE_SEPARATOR);
            }
          }, {
            key: "escape",
            value: function escape(unescapedStr) {
              var escapedStr = !!unescapedStr ? unescapedStr.replace('"', '""') : "";
              return "\"".concat(escapedStr, "\"");
            }
          }]);

          return CsvDownloader;
        }(_component_export_downloaders_downloader__WEBPACK_IMPORTED_MODULE_0__["Downloader"]);

        CsvDownloader.FILE_TYPE = "text/csv";
        CsvDownloader.VALUE_SEPARATOR = ",";
        CsvDownloader.ROW_TERMINATOR = "\n";
        return CsvDownloader;
      }();
      /***/

    },

    /***/
    "3qcF":
    /*!***********************************************!*\
      !*** ./src/app/generated/durability-state.ts ***!
      \***********************************************/

    /*! exports provided: DurabilityState */

    /***/
    function qcF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DurabilityState", function () {
        return DurabilityState;
      });

      var DurabilityState = /*@__PURE__*/function (DurabilityState) {
        DurabilityState["GUARANTEED"] = "GUARANTEED";
        DurabilityState["EXCEEDED_COMP_LIMIT"] = "EXCEEDED_COMP_LIMIT";
        DurabilityState["NO_SPACE"] = "NO_SPACE";
        DurabilityState["NO_RESOURCE"] = "NO_RESOURCE";
        DurabilityState["STALE_DURABILITY_COMP"] = "STALE_DURABILITY_COMP";
        DurabilityState["UNKNOWN"] = "UNKNOWN";
        return DurabilityState;
      }({});
      /***/

    },

    /***/
    "66A/":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/whatIf-state-label.pipe.ts ***!
      \****************************************************************************************/

    /*! exports provided: VirtualObjectWhatIfStateLabelPipe */

    /***/
    function A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectWhatIfStateLabelPipe", function () {
        return VirtualObjectWhatIfStateLabelPipe;
      });
      /* harmony import */


      var _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/virtual-objects-table/virtual-objects-type.util */
      "wjnQ");

      var VirtualObjectWhatIfStateLabelPipe = /*#__PURE__*/function () {
        function VirtualObjectWhatIfStateLabelPipe() {
          _classCallCheck(this, VirtualObjectWhatIfStateLabelPipe);
        }

        _createClass(VirtualObjectWhatIfStateLabelPipe, [{
          key: "transform",
          value: function transform(status) {
            return _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_0__["VirtualObjectsTypeUtil"].getComplianceStatusLabel(status);
          }
        }]);

        return VirtualObjectWhatIfStateLabelPipe;
      }();
      /***/

    },

    /***/
    "98Vj":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/grid-scroll/datagrid-scroll-to-row.directive.ts ***!
      \***************************************************************************************/

    /*! exports provided: DatagridScrollToRowDirective */

    /***/
    function Vj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatagridScrollToRowDirective", function () {
        return DatagridScrollToRowDirective;
      });
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /**
       * A directive, applied on datagrid, which will scroll content to the first row, marked with [scroll-to-current] set
       * to true
       */


      var DatagridScrollToRowDirective = /*@__PURE__*/function () {
        var DatagridScrollToRowDirective = /*#__PURE__*/function () {
          function DatagridScrollToRowDirective(el) {
            _classCallCheck(this, DatagridScrollToRowDirective);

            this.el = el;
            this.previousMarkedForScrollingRowsCount = 0;
          }

          _createClass(DatagridScrollToRowDirective, [{
            key: "tableRows",
            set: function set(rows) {
              // if table rows are reset, scroll again
              if (!rows || !rows.length) {
                this.isDetectionTriggered = false;
              }
            }
          }, {
            key: "markedForScrollingRows",
            set: function set(markedForScrollingRows) {
              this._markedForScrollingRows = markedForScrollingRows;

              if (!this.isDetectionTriggered && markedForScrollingRows && markedForScrollingRows.length) {
                // once detection change is triggered, do not trigger it again
                this.detectMarkedForScrollingRowsChange();
                this.isDetectionTriggered = true;
              }
            }
            /**
             * Detect if marked for scrolling rows count is changed (new rows are added). If so, postpone check.
             */

          }, {
            key: "detectMarkedForScrollingRowsChange",
            value: function detectMarkedForScrollingRowsChange() {
              var _this8 = this;

              if (this.previousMarkedForScrollingRowsCount === this._markedForScrollingRows.length) {
                // no new rows added - the view is fully rendered. Time to scroll.
                var scrollToElement = this.findFirstRowToScrollTo();

                if (!scrollToElement) {
                  return;
                }

                this.scrollToRow(scrollToElement.element);
              } else {
                // postpone check
                this.previousMarkedForScrollingRowsCount = this._markedForScrollingRows.length;
                setTimeout(function () {
                  return _this8.detectMarkedForScrollingRowsChange();
                });
              }
            }
          }, {
            key: "findFirstRowToScrollTo",
            value: function findFirstRowToScrollTo() {
              return this._markedForScrollingRows.find(function (item) {
                return item.isSelectedElement;
              });
            }
          }, {
            key: "scrollToRow",
            value: function scrollToRow(element) {
              var scrollableWrapper = this.el.nativeElement.querySelector(DatagridScrollToRowDirective.ROWS_SCROLLABLE_CONTAINER_SELECTOR);
              scrollableWrapper.scrollTop = this.getScrollToPosition(element.nativeElement);
            }
          }, {
            key: "getScrollToPosition",
            value: function getScrollToPosition(row) {
              if (row.tagName.toLowerCase() === DatagridScrollToRowDirective.DETAIL_ROW_SELECTOR.toLowerCase()) {
                // scroll to previous element bottom.
                return row.previousElementSibling.offsetTop + DatagridScrollToRowDirective.DETAILS_SCROLL_FIX;
              }

              if (row.tagName.toLowerCase() === DatagridScrollToRowDirective.PARENT_ROW_SELECTOR.toLowerCase()) {
                // Parent row always contains at least one child element. Scroll to it.
                var refElement = row.firstElementChild;
                return refElement.offsetTop - refElement.offsetHeight;
              }

              _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn("getScrollToPosition for " + row.tagName + " is not handled.");

              return 0;
            }
          }]);

          return DatagridScrollToRowDirective;
        }();

        DatagridScrollToRowDirective.PARENT_ROW_SELECTOR = "clr-dg-row";
        DatagridScrollToRowDirective.DETAIL_ROW_SELECTOR = "clr-dg-row-detail";
        DatagridScrollToRowDirective.ROWS_SCROLLABLE_CONTAINER_SELECTOR = "div.datagrid"; // there is no padding for row details. When scroll to it without current fix, the upper part of the text is
        // overlapped
        // on the border

        DatagridScrollToRowDirective.DETAILS_SCROLL_FIX = -12;
        return DatagridScrollToRowDirective;
      }();
      /***/

    },

    /***/
    "9X/2":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/filter/virtual-objects-type-filter.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: VirtualObjectsTypeFilterComponent, FilterTypeItem */

    /***/
    function X2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectsTypeFilterComponent", function () {
        return VirtualObjectsTypeFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTypeItem", function () {
        return FilterTypeItem;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/datagrid/filter/enumerated-filter.component */
      "EcRx");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VirtualObjectsTypeFilterComponent = /*#__PURE__*/function () {
        function VirtualObjectsTypeFilterComponent() {
          _classCallCheck(this, VirtualObjectsTypeFilterComponent);

          this.FIELD_NAME = "type";
          this.filterItems = [];
          this.filterSelectionResolver = this.createFilterSelectionResolver(this.FIELD_NAME);
          this.selectedFilterValuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isInit = false;
        }

        _createClass(VirtualObjectsTypeFilterComponent, [{
          key: "virtualObjects",
          get: function get() {
            return this._virtualObjects;
          },
          set: function set(objects) {
            this._virtualObjects = objects;

            if (this.isInit) {
              this.setFilterItems(objects);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFilterItems(this.virtualObjects);
            this.isInit = true;
          }
        }, {
          key: "onSelectedFilterValuesChange",
          value: function onSelectedFilterValuesChange(value) {
            this.selectedFilterValues = value;
            this.selectedFilterValuesChange.emit(this.selectedFilterValues);
          }
        }, {
          key: "getTypeFilterLabel",
          value: function getTypeFilterLabel(type) {
            return "".concat(this.labelFunction(type.filter), " ").concat(type.count);
          }
        }, {
          key: "setFilterItems",
          value: function setFilterItems(objects) {
            var _this9 = this;

            this.filterItems = [];

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(objects)) {
              return;
            } // loop only through root virtual objects. We need only their types in the filter.


            objects.forEach(function (obj) {
              var filterItem = _this9.findFilter(obj.type);

              if (filterItem) {
                filterItem.count++;
              } else {
                _this9.filterItems.push(new FilterTypeItem(obj.type));
              }
            });
            this.filterItems.sort(function (a, b) {
              // descending sort by count
              var countCompare = b.count - a.count;

              if (countCompare !== 0) {
                return countCompare;
              } // if counts are equal ascending sort by name


              return _this9.labelFunction(a.filter).localeCompare(_this9.labelFunction(b.filter));
            });
          }
          /**
           * Creates a FilterSelectionResolver that is used when a filter is applied.
           */

        }, {
          key: "createFilterSelectionResolver",
          value: function createFilterSelectionResolver(prop) {
            return new ( /*#__PURE__*/function (_component_datagrid_f2) {
              _inherits(_class2, _component_datagrid_f2);

              var _super3 = _createSuper(_class2);

              function _class2(field) {
                var _this10;

                _classCallCheck(this, _class2);

                _this10 = _super3.call(this);
                _this10.field = field;
                return _this10;
              } // only root objects are passed to the filter. For this filter we filter only by them - no need to loop
              // through the children


              _createClass(_class2, [{
                key: "isSelected",
                value: function isSelected(item, filters) {
                  var _this11 = this;

                  // If the given object matches the filter, show it
                  if (filters.some(function (filter) {
                    return _this11.areEquals(filter, item[_this11.field]);
                  })) {
                    return true;
                  } // Otherwise - hide the object


                  return false;
                }
              }, {
                key: "areEquals",
                value: function areEquals(filterValue1, filterValue2) {
                  if (!filterValue1.extendedTypeId && !filterValue2.extendedTypeId) {
                    return filterValue1.displayType === filterValue2.displayType;
                  }

                  return filterValue1.extendedTypeId === filterValue2.extendedTypeId;
                }
              }]);

              return _class2;
            }(_component_datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_1__["EnumeratedFilterSelectionResolver"]))(prop);
          }
        }, {
          key: "findFilter",
          value: function findFilter(type) {
            var _this12 = this;

            return this.filterItems.find(function (value) {
              return _this12.filterSelectionResolver.areEquals(type, value.filter);
            });
          }
        }]);

        return VirtualObjectsTypeFilterComponent;
      }();

      var FilterTypeItem = /*#__PURE__*/_createClass(function FilterTypeItem(filter) {
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        _classCallCheck(this, FilterTypeItem);

        this.filter = filter;
        this.count = count;
      });
      /***/

    },

    /***/
    "EZSG":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/component/export/downloaders/downloader.ts ***!
      \************************************************************************/

    /*! exports provided: Downloader */

    /***/
    function EZSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Downloader", function () {
        return Downloader;
      });
      /* harmony import */


      var _component_export_files_file_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/export/files/file-utils */
      "Ux+j");

      var Downloader = /*#__PURE__*/function () {
        function Downloader(fileType, fileExtension) {
          _classCallCheck(this, Downloader);

          this.fileType = fileType;
          this.fileExtension = fileExtension;
        }

        _createClass(Downloader, [{
          key: "download",
          value: function download(content, fileName) {
            _component_export_files_file_utils__WEBPACK_IMPORTED_MODULE_0__["FileUtils"].download(this.createBlob(content), this.buildFileNameWithExtension(fileName, true));
          }
        }, {
          key: "createBlob",
          value: function createBlob(content) {
            return _component_export_files_file_utils__WEBPACK_IMPORTED_MODULE_0__["FileUtils"].createBlob(this.formatContent(content), this.fileType);
          }
        }, {
          key: "buildFileNameWithExtension",
          value: function buildFileNameWithExtension(fileName) {
            var addTimeStamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _component_export_files_file_utils__WEBPACK_IMPORTED_MODULE_0__["FileUtils"].buildFileNameWithExtension(fileName, this.fileExtension, addTimeStamp);
          }
        }]);

        return Downloader;
      }();
      /***/

    },

    /***/
    "F8An":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/filter/enum-filter.component.ngfactory.js ***!
      \******************************************************************************************/

    /*! exports provided: RenderType_EnumFilterComponent, View_EnumFilterComponent_0, View_EnumFilterComponent_Host_0, EnumFilterComponentNgFactory */

    /***/
    function F8An(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_EnumFilterComponent", function () {
        return RenderType_EnumFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EnumFilterComponent_0", function () {
        return View_EnumFilterComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EnumFilterComponent_Host_0", function () {
        return View_EnumFilterComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnumFilterComponentNgFactory", function () {
        return EnumFilterComponentNgFactory;
      });
      /* harmony import */


      var _enum_filter_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enum-filter.scss.shim.ngstyle */
      "fIGc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _enumerated_filter_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enumerated-filter-item.component.ngfactory */
      "UaNb");
      /* harmony import */


      var _enumerated_filter_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enumerated-filter-item.component */
      "iZnE");
      /* harmony import */


      var _enumerated_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./enumerated-filter.component */
      "EcRx");
      /* harmony import */


      var _enumerated_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./enumerated-filter.component.ngfactory */
      "A2lY");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _enum_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./enum-filter.component */
      "0hTA");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_EnumFilterComponent = [_enum_filter_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_EnumFilterComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_EnumFilterComponent,
        data: {}
      });

      function View_EnumFilterComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-enumerated-filter-item", [], [[2, "selected-filter", null], [1, "id", 0]], null, null, _enumerated_filter_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EnumeratedFilterItemComponent_0"], _enumerated_filter_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EnumeratedFilterItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _enumerated_filter_item_component__WEBPACK_IMPORTED_MODULE_3__["EnumeratedFilterItemComponent"], [_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_4__["EnumeratedFilterComponent"]], {
          value: [0, "value"],
          iconVisible: [1, "iconVisible"],
          label: [2, "label"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _v.context.$implicit.key;
          var currVal_3 = false;

          var currVal_4 = _co.getLabel(_v.context.$implicit);

          _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isSelected();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_EnumFilterComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "vsan-enumerated-filter", [["vsanDgField", "type"]], [[4, "column-count", null]], [[null, "selectedFilterValuesChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedFilterValuesChange" === en) {
            var pd_0 = _co.onSelectedFilterValuesChange($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _enumerated_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_EnumeratedFilterComponent_0"], _enumerated_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_EnumeratedFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _enumerated_filter_component__WEBPACK_IMPORTED_MODULE_4__["EnumeratedFilterComponent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridFilter"]], {
          vsanDgField: [0, "vsanDgField"],
          selectMultiple: [1, "selectMultiple"],
          selectionResolver: [2, "selectionResolver"],
          selectedFilterValues: [3, "selectedFilterValues"],
          filtersCount: [4, "filtersCount"]
        }, {
          selectedFilterValuesChange: "selectedFilterValuesChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_EnumFilterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "type";
          var currVal_2 = true;
          var currVal_3 = _co.filterSelectionResolver;
          var currVal_4 = _co.selectedFilterValues;
          var currVal_5 = _co.objectGroups.size;

          _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform(_co.objectGroups));

          _ck(_v, 5, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).numberOfColumns;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_EnumFilterComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-enum-filter", [], null, null, null, View_EnumFilterComponent_0, RenderType_EnumFilterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _enum_filter_component__WEBPACK_IMPORTED_MODULE_8__["EnumFilterComponent"], [], null, null)], null, null);
      }

      var EnumFilterComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-enum-filter", _enum_filter_component__WEBPACK_IMPORTED_MODULE_8__["EnumFilterComponent"], View_EnumFilterComponent_Host_0, {
        objects: "objects",
        field: "field",
        selectedFilterValues: "selectedFilterValues",
        enumToLabelConverter: "enumToLabelConverter"
      }, {
        selectedFilterValuesChange: "selectedFilterValuesChange"
      }, []);
      /***/

    },

    /***/
    "Fhh9":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/filter/virtual-objects-type-filter.component.ngfactory.js ***!
      \***********************************************************************************************************************/

    /*! exports provided: RenderType_VirtualObjectsTypeFilterComponent, View_VirtualObjectsTypeFilterComponent_0, View_VirtualObjectsTypeFilterComponent_Host_0, VirtualObjectsTypeFilterComponentNgFactory */

    /***/
    function Fhh9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_VirtualObjectsTypeFilterComponent", function () {
        return RenderType_VirtualObjectsTypeFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VirtualObjectsTypeFilterComponent_0", function () {
        return View_VirtualObjectsTypeFilterComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_VirtualObjectsTypeFilterComponent_Host_0", function () {
        return View_VirtualObjectsTypeFilterComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectsTypeFilterComponentNgFactory", function () {
        return VirtualObjectsTypeFilterComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _datagrid_filter_enumerated_filter_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../datagrid/filter/enumerated-filter-item.component.ngfactory */
      "UaNb");
      /* harmony import */


      var _datagrid_filter_enumerated_filter_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../datagrid/filter/enumerated-filter-item.component */
      "iZnE");
      /* harmony import */


      var _datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../datagrid/filter/enumerated-filter.component */
      "EcRx");
      /* harmony import */


      var _datagrid_filter_enumerated_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../datagrid/filter/enumerated-filter.component.ngfactory */
      "A2lY");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _virtual_objects_type_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./virtual-objects-type-filter.component */
      "9X/2");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       * Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_VirtualObjectsTypeFilterComponent = [];

      var RenderType_VirtualObjectsTypeFilterComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_VirtualObjectsTypeFilterComponent,
        data: {}
      });

      function View_VirtualObjectsTypeFilterComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "vsan-enumerated-filter-item", [], [[2, "selected-filter", null], [1, "id", 0]], null, null, _datagrid_filter_enumerated_filter_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_EnumeratedFilterItemComponent_0"], _datagrid_filter_enumerated_filter_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_EnumeratedFilterItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _datagrid_filter_enumerated_filter_item_component__WEBPACK_IMPORTED_MODULE_2__["EnumeratedFilterItemComponent"], [_datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_3__["EnumeratedFilterComponent"]], {
          value: [0, "value"],
          iconVisible: [1, "iconVisible"],
          label: [2, "label"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _v.context.$implicit.filter;
          var currVal_3 = false;

          var currVal_4 = _co.getTypeFilterLabel(_v.context.$implicit);

          _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isSelected();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).value;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_VirtualObjectsTypeFilterComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "vsan-enumerated-filter", [], [[4, "column-count", null]], [[null, "selectedFilterValuesChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedFilterValuesChange" === en) {
            var pd_0 = _co.onSelectedFilterValuesChange($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _datagrid_filter_enumerated_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EnumeratedFilterComponent_0"], _datagrid_filter_enumerated_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EnumeratedFilterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _datagrid_filter_enumerated_filter_component__WEBPACK_IMPORTED_MODULE_3__["EnumeratedFilterComponent"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFilter"]], {
          vsanDgField: [0, "vsanDgField"],
          selectMultiple: [1, "selectMultiple"],
          selectionResolver: [2, "selectionResolver"],
          selectedFilterValues: [3, "selectedFilterValues"],
          filtersCount: [4, "filtersCount"]
        }, {
          selectedFilterValuesChange: "selectedFilterValuesChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_VirtualObjectsTypeFilterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.FIELD_NAME;
          var currVal_2 = true;
          var currVal_3 = _co.filterSelectionResolver;
          var currVal_4 = _co.selectedFilterValues;
          var currVal_5 = _co.filterItems.length;

          _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.filterItems;

          _ck(_v, 5, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).numberOfColumns;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_VirtualObjectsTypeFilterComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-virtual-objects-type-filter", [], null, null, null, View_VirtualObjectsTypeFilterComponent_0, RenderType_VirtualObjectsTypeFilterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _virtual_objects_type_filter_component__WEBPACK_IMPORTED_MODULE_7__["VirtualObjectsTypeFilterComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var VirtualObjectsTypeFilterComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-virtual-objects-type-filter", _virtual_objects_type_filter_component__WEBPACK_IMPORTED_MODULE_7__["VirtualObjectsTypeFilterComponent"], View_VirtualObjectsTypeFilterComponent_Host_0, {
        labelFunction: "labelFunction",
        virtualObjects: "virtualObjects",
        selectedFilterValues: "selectedFilterValues"
      }, {
        selectedFilterValuesChange: "selectedFilterValuesChange"
      }, []);
      /***/

    },

    /***/
    "NLU3":
    /*!****************************************************************************!*\
      !*** ./src/app/vsan/common/component/export/export.component.ngfactory.js ***!
      \****************************************************************************/

    /*! exports provided: RenderType_ExportComponent, View_ExportComponent_0, View_ExportComponent_Host_0, ExportComponentNgFactory */

    /***/
    function NLU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ExportComponent", function () {
        return RenderType_ExportComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ExportComponent_0", function () {
        return View_ExportComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ExportComponent_Host_0", function () {
        return View_ExportComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportComponentNgFactory", function () {
        return ExportComponentNgFactory;
      });
      /* harmony import */


      var _export_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./export.component.scss.shim.ngstyle */
      "OSiK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _export_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./export.component */
      "mC7S");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ExportComponent = [_export_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ExportComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ExportComponent,
        data: {}
      });

      function View_ExportComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "a", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co["export"](_co.source.filteredItems, _co.getFileName("filtered")) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"]], {
          disabledDeprecated: [0, "disabledDeprecated"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_6 = _co.isLoading;

          _ck(_v, 3, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled;

          var currVal_1 = true;
          var currVal_2 = "menuitem";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).setByDeprecatedDisabled ? "" : null;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).dropdownItemId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.export.filtered.label", _co.filteredItemsCount));

          _ck(_v, 4, 0, currVal_7);
        });
      }

      function View_ExportComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "a", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co["export"](_co.source.selectedItems, _co.getFileName("selected")) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"]], {
          disabledDeprecated: [0, "disabledDeprecated"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_6 = _co.isLoading || _co.selectedItemsCount === 0;

          _ck(_v, 3, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled;

          var currVal_1 = true;
          var currVal_2 = "menuitem";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).setByDeprecatedDisabled ? "" : null;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).dropdownItemId;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.export.selected.label", _co.selectedItemsCount));

          _ck(_v, 4, 0, currVal_7);
        });
      }

      function View_ExportComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "clr-dropdown-menu", [["clrPosition", "top-left"]], [[1, "aria-label", 0], [2, "dropdown-menu", null], [1, "role", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrDropdownMenu_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrDropdownMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 9617408, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵh"]], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownMenu"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"]], {
          position: [0, "position"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 5, "a", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co["export"](_co.source.allItems, _co.getFileName("all")) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[1, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"]], {
          disabledDeprecated: [0, "disabledDeprecated"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExportComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExportComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = "top-left";

          _ck(_v, 2, 0, currVal_4);

          var currVal_11 = _co.isLoading || _co.allItemsCount === 0;

          _ck(_v, 9, 0, currVal_11);

          var currVal_13 = _co.filteredItemsCount > 0 && _co.filteredItemsCount < _co.allItemsCount;

          _ck(_v, 14, 0, currVal_13);

          var currVal_14 = _co.source.isSelectionEnabled && _co.selectedItemsCount < _co.allItemsCount;

          _ck(_v, 17, 0, currVal_14);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.export.expanded.label"));

          var currVal_1 = true;
          var currVal_2 = "menu";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled;

          var currVal_6 = true;
          var currVal_7 = "menuitem";

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).setByDeprecatedDisabled ? "" : null;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).dropdownItemId;

          _ck(_v, 6, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.export.all.label", _co.allItemsCount));

          _ck(_v, 10, 0, currVal_12);
        });
      }

      function View_ExportComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 19, "clr-dropdown", [], [[2, "dropdown", null], [2, "open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ClrDropdown_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ClrDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵr"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵe"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵf"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵe"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵe"]], {
          isMenuClosable: [0, "isMenuClosable"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵi"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵj"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵi"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵi"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 5, "button", [["clrDropdownTrigger", ""], ["type", "button"]], [[2, "dropdown-toggle", null], [2, "dropdown-item", null], [2, "expandable", null], [2, "active", null], [1, "aria-haspopup", 0], [1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onDropdownTriggerClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.open() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "clr-icon", [["shape", "export"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExportComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var currVal_2 = false;

          _ck(_v, 7, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).toggleService.open;

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isRootLevelToggle;

          var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isRootLevelToggle;
          var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isRootLevelToggle;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).active;

          var currVal_7 = "menu";

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).active;

          _ck(_v, 12, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        });
      }

      function View_ExportComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-export", [], null, null, null, View_ExportComponent_0, RenderType_ExportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"], [], null, null)], null, null);
      }

      var ExportComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-export", _export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"], View_ExportComponent_Host_0, {
        filename: "filename",
        source: "source",
        dataExtractors: "dataExtractors"
      }, {
        onLoadingStateChange: "onLoadingStateChange",
        onLoadingError: "onLoadingError"
      }, []);
      /***/

    },

    /***/
    "OSiK":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/common/component/export/export.component.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function OSiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  float: left;\n  padding: 0 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2V4cG9ydC9leHBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBY0giLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvZXhwb3J0L2V4cG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxvYXQ6IGxlZnQ7XG4gICBwYWRkaW5nOiAwICR2c2FuLWVsZW1lbnQtc3BhY2luZyAvIDI7XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "OWW+":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/grid-scroll/scroll-to-current.directive.ts ***!
      \**********************************************************************************/

    /*! exports provided: ScrollToCurrent */

    /***/
    function OWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollToCurrent", function () {
        return ScrollToCurrent;
      });
      /**
       * Marks a datagrid row. The content of the datagrid with applied [vsan-datagrid-scroll] directive will scroll
       * to the first row with directive set to true
       */


      var ScrollToCurrent = /*#__PURE__*/function () {
        function ScrollToCurrent(el) {
          _classCallCheck(this, ScrollToCurrent);

          this.el = el;
        }

        _createClass(ScrollToCurrent, [{
          key: "element",
          get: function get() {
            return this.el;
          }
        }]);

        return ScrollToCurrent;
      }();
      /***/

    },

    /***/
    "OqE3":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/export/virtual-objects-export-config.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: VirtualObjectsExportConfig */

    /***/
    function OqE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectsExportConfig", function () {
        return VirtualObjectsExportConfig;
      });
      /* harmony import */


      var _component_export_adapters_datagrid_export_data_source_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/export/adapters/datagrid-export-data-source-adapter */
      "Q7B8");
      /* harmony import */


      var _component_virtual_objects_table_export_virtual_objects_data_source_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/virtual-objects-table/export/virtual-objects-data-source-adapter */
      "13kE");
      /* harmony import */


      var _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/virtual-objects-table/virtual-objects-type.util */
      "wjnQ");
      /* harmony import */


      var _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/object-health-compliance-state */
      "609m");
      /* harmony import */


      var _pipe_virtual_objects_durability_state_label_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @pipe/virtual-objects/durability-state-label.pipe */
      "zizU");
      /* harmony import */


      var _util_string_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/string-util */
      "WqAr");
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var VirtualObjectsExportConfig = /*@__PURE__*/function () {
        var VirtualObjectsExportConfig = /*#__PURE__*/function () {
          function VirtualObjectsExportConfig() {
            _classCallCheck(this, VirtualObjectsExportConfig);
          }

          _createClass(VirtualObjectsExportConfig, null, [{
            key: "createExportDataSource",
            value: function createExportDataSource(datagrid, isSelectionSupported, loadAllVirtualObjects, isVirtualObjectSelected, isChildVirtualObjectFiltered) {
              return new _component_virtual_objects_table_export_virtual_objects_data_source_adapter__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectsDataSourceAdapter"](new _component_export_adapters_datagrid_export_data_source_adapter__WEBPACK_IMPORTED_MODULE_0__["DatagridExportDataSourceAdapter"](datagrid), isSelectionSupported, loadAllVirtualObjects, isVirtualObjectSelected, isChildVirtualObjectFiltered);
            }
          }, {
            key: "getVirtualObjectDataExtractors",
            value: function getVirtualObjectDataExtractors(isWhatIfData, showPolicy, isDurabilitySupported) {
              return [VirtualObjectsExportConfig.parent, VirtualObjectsExportConfig.objectName, VirtualObjectsExportConfig.type, isWhatIfData ? VirtualObjectsExportConfig.whatIfResult : null, !isWhatIfData ? VirtualObjectsExportConfig.health : null, isWhatIfData && isDurabilitySupported ? VirtualObjectsExportConfig.durability : null, showPolicy ? VirtualObjectsExportConfig.storagePolicyName : null, showPolicy ? VirtualObjectsExportConfig.storagePolicyPFTT : null, showPolicy ? VirtualObjectsExportConfig.storagePolicySFTT : null, VirtualObjectsExportConfig.uuid].filter(function (dataExtractor) {
                return !!dataExtractor;
              });
            }
          }, {
            key: "toString",
            value: function toString(o) {
              var defaultVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
              return typeof (o === null || o === void 0 ? void 0 : o.toString) === "function" ? o.toString() : _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].getString(defaultVal);
            }
          }, {
            key: "stringifyHealth",
            value: function stringifyHealth(virtualObject) {
              if (virtualObject.compositeHealth) {
                var compositeHealth = virtualObject.compositeHealth;
                return [compositeHealth.complianceState && compositeHealth.complianceState !== _generated_object_health_compliance_state__WEBPACK_IMPORTED_MODULE_3__["ObjectHealthComplianceState"].NON_COMPLIANT ? _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].getVsanObjectHealthStatusText(compositeHealth.complianceState) : null, compositeHealth.incomplianceReason ? _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].getVsanObjectHealthStatusText(compositeHealth.incomplianceReason) : null, compositeHealth.rebuildState ? _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].getVsanObjectHealthStatusText(compositeHealth.rebuildState) : null, compositeHealth.policyState ? _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].getVsanObjectHealthStatusText(compositeHealth.policyState) : null].filter(function (healthStatus) {
                  return !_util_string_util__WEBPACK_IMPORTED_MODULE_5__["StringUtil"].isEmpty(healthStatus);
                }).join(";");
              } else {
                return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_6__["VsanHealthUtil"].getVsanObjectHealthStatusText(virtualObject.healthState);
              }
            }
          }]);

          return VirtualObjectsExportConfig;
        }();

        VirtualObjectsExportConfig.durabilityStateFormatter = new _pipe_virtual_objects_durability_state_label_pipe__WEBPACK_IMPORTED_MODULE_4__["DurabilityStateLabelPipe"]();
        VirtualObjectsExportConfig.fileName = "virtual_objects";
        VirtualObjectsExportConfig.parent = {
          label: "vsan.monitor.cluster.virtualObjects.column.parent",
          value: function value(vo) {
            return vo.isParent ? "" : _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectsTypeUtil"].getDisplayName(vo.parent);
          }
        };
        VirtualObjectsExportConfig.objectName = {
          label: "vsan.monitor.cluster.virtualObjects.column.name",
          value: function value(vo) {
            return _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectsTypeUtil"].getDisplayName(vo.self);
          }
        };
        VirtualObjectsExportConfig.type = {
          label: "vsan.monitor.cluster.virtualObjects.column.type",
          value: function value(vo) {
            return _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectsTypeUtil"].getTypeLabel(vo.self.type);
          }
        };
        VirtualObjectsExportConfig.whatIfResult = {
          label: "vsan.monitor.cluster.virtualObjects.column.whatIfResult",
          value: function value(vo) {
            return _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectsTypeUtil"].getComplianceStatusLabel(vo.self.whatIfComplianceStatus);
          }
        };
        VirtualObjectsExportConfig.health = {
          label: "vsan.monitor.cluster.virtualObjects.column.placementAndAvailabilityHealth",
          value: function value(vo) {
            return VirtualObjectsExportConfig.stringifyHealth(vo.self);
          }
        };
        VirtualObjectsExportConfig.durability = {
          label: "vsan.monitor.cluster.virtualObjects.column.durability",
          value: function value(vo) {
            return VirtualObjectsExportConfig.durabilityStateFormatter.transform(vo.self.durabilityState);
          }
        };
        VirtualObjectsExportConfig.storagePolicyName = {
          label: "vsan.monitor.cluster.virtualObjects.column.storagePolicy",
          value: function value(vo) {
            var _a;

            return vo.isParent ? "" : VirtualObjectsExportConfig.toString((_a = vo.self.storagePolicy) === null || _a === void 0 ? void 0 : _a.name, "vsan.na.label");
          }
        };
        VirtualObjectsExportConfig.storagePolicyPFTT = {
          label: "vsan.monitor.cluster.virtualObjects.column.storagePolicy.pftt",
          value: function value(vo) {
            var _a;

            return vo.isParent ? "" : VirtualObjectsExportConfig.toString((_a = vo.self.storagePolicy) === null || _a === void 0 ? void 0 : _a.pFtt, "vsan.na.label");
          }
        };
        VirtualObjectsExportConfig.storagePolicySFTT = {
          label: "vsan.monitor.cluster.virtualObjects.column.storagePolicy.sftt",
          value: function value(vo) {
            var _a;

            return vo.isParent ? "" : VirtualObjectsExportConfig.toString((_a = vo.self.storagePolicy) === null || _a === void 0 ? void 0 : _a.sFtt, "vsan.na.label");
          }
        };
        VirtualObjectsExportConfig.uuid = {
          label: "vsan.monitor.cluster.virtualObjects.column.uuid",
          value: function value(vo) {
            return vo.self.uid;
          }
        };
        return VirtualObjectsExportConfig;
      }();
      /***/

    },

    /***/
    "Os1L":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/pipe/virtual-objects/durability-state-icon-class.pipe.ts ***!
      \**************************************************************************************/

    /*! exports provided: DurabilityStateIconClassPipe */

    /***/
    function Os1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DurabilityStateIconClassPipe", function () {
        return DurabilityStateIconClassPipe;
      });
      /* harmony import */


      var _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/durability-state */
      "3qcF");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");

      var DurabilityStateIconClassPipe = /*#__PURE__*/function () {
        function DurabilityStateIconClassPipe() {
          _classCallCheck(this, DurabilityStateIconClassPipe);
        }

        _createClass(DurabilityStateIconClassPipe, [{
          key: "transform",
          value: function transform(state) {
            switch (state) {
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].GUARANTEED:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SUCCESS_ICON_CLASS;

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].EXCEEDED_COMP_LIMIT:
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].NO_RESOURCE:
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].NO_SPACE:
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].STALE_DURABILITY_COMP:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_ICON_CLASS;

              default:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].NO_ICON_CLASS;
            }
          }
        }]);

        return DurabilityStateIconClassPipe;
      }();
      /***/

    },

    /***/
    "OvlE":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/common/pipe/virtual-objects/durability-state-icon-shape.pipe.ts ***!
      \**************************************************************************************/

    /*! exports provided: DurabilityStateIconShapePipe */

    /***/
    function OvlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DurabilityStateIconShapePipe", function () {
        return DurabilityStateIconShapePipe;
      });
      /* harmony import */


      var _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/durability-state */
      "3qcF");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");

      var DurabilityStateIconShapePipe = /*#__PURE__*/function () {
        function DurabilityStateIconShapePipe() {
          _classCallCheck(this, DurabilityStateIconShapePipe);
        }

        _createClass(DurabilityStateIconShapePipe, [{
          key: "transform",
          value: function transform(state) {
            switch (state) {
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].GUARANTEED:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE;

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].EXCEEDED_COMP_LIMIT:
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].NO_RESOURCE:
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].NO_SPACE:
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].STALE_DURABILITY_COMP:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;

              default:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].EMPTY_ICON;
            }
          }
        }]);

        return DurabilityStateIconShapePipe;
      }();
      /***/

    },

    /***/
    "Q7B8":
    /*!**********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/export/adapters/datagrid-export-data-source-adapter.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DatagridExportDataSourceAdapter */

    /***/
    function Q7B8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatagridExportDataSourceAdapter", function () {
        return DatagridExportDataSourceAdapter;
      });

      var DatagridExportDataSourceAdapter = /*#__PURE__*/function () {
        function DatagridExportDataSourceAdapter(datagrid) {
          _classCallCheck(this, DatagridExportDataSourceAdapter);

          this.datagrid = datagrid;
          this.DATAGRID_ALL_ITEMS_PROP = "_all";
          this.DATAGRID_FILTERED_ITEMS_PROP = "_filtered";
        }

        _createClass(DatagridExportDataSourceAdapter, [{
          key: "allItems",
          get: function get() {
            return this.datagrid.items[this.DATAGRID_ALL_ITEMS_PROP] || [];
          }
        }, {
          key: "allItemsCount",
          get: function get() {
            return this.allItems.length;
          }
        }, {
          key: "filteredItems",
          get: function get() {
            return this.datagrid.items[this.DATAGRID_FILTERED_ITEMS_PROP] || [];
          }
        }, {
          key: "filteredItemsCount",
          get: function get() {
            return this.filteredItems.length;
          }
        }, {
          key: "isSelectionEnabled",
          get: function get() {
            return this.dgSelection.selectionType !== this.dgSelectionType.None;
          }
        }, {
          key: "selectedItems",
          get: function get() {
            if (this.dgSelection.selectionType === this.dgSelectionType.Multi) {
              return this.dgSelection.current || [];
            } else if (this.dgSelection.selectionType === this.dgSelectionType.Single && this.dgSelection.currentSingle) {
              return [this.dgSelection.currentSingle];
            } else {
              return [];
            }
          }
        }, {
          key: "selectedItemsCount",
          get: function get() {
            return this.selectedItems.length;
          }
        }, {
          key: "dgSelection",
          get: function get() {
            return this.datagrid.selection;
          }
        }, {
          key: "dgSelectionType",
          get: function get() {
            return this.datagrid.SELECTION_TYPE;
          }
        }]);

        return DatagridExportDataSourceAdapter;
      }();
      /***/

    },

    /***/
    "Xflx":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/pipe/virtual-objects/health-state-label.pipe.ts ***!
      \*****************************************************************************/

    /*! exports provided: VirtualObjectHealthStateLabelPipe */

    /***/
    function Xflx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectHealthStateLabelPipe", function () {
        return VirtualObjectHealthStateLabelPipe;
      });
      /* harmony import */


      var _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-health-util */
      "MGNl");

      var VirtualObjectHealthStateLabelPipe = /*#__PURE__*/function () {
        function VirtualObjectHealthStateLabelPipe() {
          _classCallCheck(this, VirtualObjectHealthStateLabelPipe);
        }

        _createClass(VirtualObjectHealthStateLabelPipe, [{
          key: "transform",
          value: function transform(state) {
            return _util_vsan_health_util__WEBPACK_IMPORTED_MODULE_0__["VsanHealthUtil"].getVsanObjectHealthStatusText(state);
          }
        }]);

        return VirtualObjectHealthStateLabelPipe;
      }();
      /***/

    },

    /***/
    "aFr8":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-table.scss.shim.ngstyle.js ***!
      \********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function aFr8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.indented-content[_ngcontent-%COMP%] {\n  padding-left: 1.2rem;\n}\n.primary-column[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n.type-column[_ngcontent-%COMP%] {\n  width: 7.2rem;\n}\n.health-column[_ngcontent-%COMP%] {\n  width: 15.6rem;\n  overflow: hidden;\n}\n.vsan-uuid-column[_ngcontent-%COMP%] {\n  width: 12rem !important;\n}\n.selector-column[_ngcontent-%COMP%], .selector-cell[_ngcontent-%COMP%] {\n  width: 50px;\n  min-width: 1.2rem !important;\n  flex: 0 0 auto;\n}\n  clr-signpost .signpost-content .signpost-wrap .signpost-content-body {\n  max-height: 12rem !important;\n}\n.expand-show-hide[_ngcontent-%COMP%] {\n  transition: opacity 0.1s ease-in;\n}\n.expand-show-hide.expanded[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3ZpcnR1YWwtb2JqZWN0cy10YWJsZS92aXJ0dWFsLW9iamVjdHMtdGFibGUuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxJQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFhSDtBQVZBO0VBQ0csb0JHSU87QUhTVjtBQVRBO0VBQ0csWUFBQTtBQVlIO0FBVEE7RUFDRyxhQUFBO0FBWUg7QUFUQTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtBQVlIO0FBVEE7RUFDRyx1QkFBQTtBQVlIO0FBUkE7RUFDRyxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBV0g7QUFSQTtFQUNHLDRCQUFBO0FBV0g7QUFSQTtFQUNHLGdDQUFBO0FBV0g7QUFWRztFQUNHLFVBQUE7QUFZTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC92aXJ0dWFsLW9iamVjdHMtdGFibGUvdmlydHVhbC1vYmplY3RzLXRhYmxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcbiRzaWducG9zdC1tYXgtaGVpZ2h0OiAxMnJlbTtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbn1cblxuLmluZGVudGVkLWNvbnRlbnQge1xuICAgcGFkZGluZy1sZWZ0OiAkdnNhbi1uZXN0ZWQtaW5kZW50YXRpb247XG59XG5cbi8vIFNpbmNlIHdlIGhhdmUgbmVzdGVkIGRldGFpbHMgcm93cyBvdmVycmlkZSB0aGlzIENsYXJpdHkgc3R5bGUgdG8gYXZvaWQgdHJ1bmNhdGluZyBpY29ucycgZWRnZXMuXG4ucHJpbWFyeS1jb2x1bW4ge1xuICAgd2lkdGg6IDE1cmVtO1xufVxuXG4udHlwZS1jb2x1bW4ge1xuICAgd2lkdGg6IDcuMnJlbTtcbn1cblxuLmhlYWx0aC1jb2x1bW4ge1xuICAgd2lkdGg6IDE1LjZyZW07XG4gICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udnNhbi11dWlkLWNvbHVtbiB7XG4gICB3aWR0aDogMTJyZW0gIWltcG9ydGFudDtcbn1cblxuLy8gQWxpZ24gc2VsZWN0b3IgY29sdW1uIHdpdGggdGhlIHJlc3Qgb2YgdGhlIGdyaWQgc3R5bGluZ1xuLnNlbGVjdG9yLWNvbHVtbiwgLnNlbGVjdG9yLWNlbGwge1xuICAgd2lkdGg6IDUwcHg7XG4gICBtaW4td2lkdGg6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgZmxleDogMCAwIGF1dG87XG59XG5cbjo6bmctZGVlcCBjbHItc2lnbnBvc3QgLnNpZ25wb3N0LWNvbnRlbnQgLnNpZ25wb3N0LXdyYXAgLnNpZ25wb3N0LWNvbnRlbnQtYm9keSB7XG4gICBtYXgtaGVpZ2h0OiAkc2lnbnBvc3QtbWF4LWhlaWdodCAhaW1wb3J0YW50O1xufVxuXG4uZXhwYW5kLXNob3ctaGlkZSB7XG4gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbjtcbiAgICYuZXhwYW5kZWQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "fIGc":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/filter/enum-filter.scss.shim.ngstyle.js ***!
      \****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function fIGc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2RhdGFncmlkL2ZpbHRlci9lbnVtLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtGQUFBO0FBQ0E7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvZGF0YWdyaWQvZmlsdGVyL2VudW0tZmlsdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuOmhvc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "hOVR":
    /*!****************************************************************!*\
      !*** ./src/app/vsan/common/component/export/export-content.ts ***!
      \****************************************************************/

    /*! exports provided: ExportContent */

    /***/
    function hOVR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportContent", function () {
        return ExportContent;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ExportContent = /*#__PURE__*/function () {
        /**
         * Content in a generic format that we can use to export in different formats (CSV, XLSX, etc.)
         * @param labels All labels
         * @param values Each element is array of values for the corresponding label
         */
        function ExportContent(labels, values) {
          _classCallCheck(this, ExportContent);

          this.labels = labels;
          this.values = values;
        }

        _createClass(ExportContent, null, [{
          key: "create",
          value: function create(items, dataExtractors) {
            var labels = ExportContent.getLabels(dataExtractors);
            var values = items.map(function (item) {
              return ExportContent.getValues(dataExtractors, item);
            });
            return new ExportContent(labels, values);
          }
        }, {
          key: "getLabels",
          value: function getLabels(dataExtractors) {
            return dataExtractors.map(function (dataExtractor) {
              var label = typeof dataExtractor.label === "string" ? dataExtractor.label : dataExtractor.label();
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(label);
            });
          }
        }, {
          key: "getValues",
          value: function getValues(dataExtractors, item) {
            return dataExtractors.map(function (dataExtractor) {
              return dataExtractor.value(item) || "";
            });
          }
        }]);

        return ExportContent;
      }();
      /***/

    },

    /***/
    "mC7S":
    /*!******************************************************************!*\
      !*** ./src/app/vsan/common/component/export/export.component.ts ***!
      \******************************************************************/

    /*! exports provided: ExportComponent */

    /***/
    function mC7S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportComponent", function () {
        return ExportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_export_export_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/export/export-content */
      "hOVR");
      /* harmony import */


      var _component_export_downloaders_csv_downloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/export/downloaders/csv-downloader */
      "3I+f");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ExportComponent = /*#__PURE__*/function () {
        function ExportComponent() {
          _classCallCheck(this, ExportComponent);

          this.downloader = new _component_export_downloaders_csv_downloader__WEBPACK_IMPORTED_MODULE_2__["CsvDownloader"]();
          this.onLoadingStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onLoadingError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isLoading = false;
          this.allItemsCount = 0;
          this.filteredItemsCount = 0;
          this.selectedItemsCount = 0;
        }
        /**
         * Keep all counts locally because if the ExportDataSource implementation use getters they will be evaluated multiple times.
         * The drawback is that if those counts change while the dropdown is open, we won't dynamically update them.
         * However we don't expect such scenarios, because if someone click on something else to filter or select
         * the items, we will close the dropdown and next time they will be the correct ones.
         */


        _createClass(ExportComponent, [{
          key: "open",
          value: function open() {
            var _a, _b, _c, _d;

            this.allItemsCount = ((_a = this.source) === null || _a === void 0 ? void 0 : _a.allItemsCount) || 0;
            this.filteredItemsCount = ((_b = this.source) === null || _b === void 0 ? void 0 : _b.filteredItemsCount) || 0;
            this.selectedItemsCount = ((_c = this.source) === null || _c === void 0 ? void 0 : _c.isSelectionEnabled) ? ((_d = this.source) === null || _d === void 0 ? void 0 : _d.selectedItemsCount) || 0 : 0;
          }
        }, {
          key: "getFileName",
          value: function getFileName(downloadingType) {
            return "".concat(this.filename, "_").concat(downloadingType);
          }
        }, {
          key: "export",
          value: function _export(items, fileName) {
            var _this13 = this;

            var _a;

            if (!((_a = this.dataExtractors) === null || _a === void 0 ? void 0 : _a.length)) {
              return;
            }

            if (items instanceof Promise) {
              this.changeLoadingState(true);
              items.then(function (loadedItems) {
                return _this13.download(loadedItems, fileName);
              })["catch"](function (error) {
                return _this13.onLoadingError.emit(error);
              })["finally"](function () {
                return _this13.changeLoadingState(false);
              });
            } else {
              this.download(items, fileName);
            }
          }
        }, {
          key: "changeLoadingState",
          value: function changeLoadingState(isLoading) {
            this.isLoading = isLoading;
            this.onLoadingStateChange.emit(isLoading);
          }
        }, {
          key: "download",
          value: function download(items, fileName) {
            if (!(items === null || items === void 0 ? void 0 : items.length)) {
              return;
            }

            this.downloader.download(_component_export_export_content__WEBPACK_IMPORTED_MODULE_1__["ExportContent"].create(items, this.dataExtractors), fileName);
          }
        }]);

        return ExportComponent;
      }();
      /***/

    },

    /***/
    "owna":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/filter/virtual-object-filter.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VirtualObjectFilter */

    /***/
    function owna(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectFilter", function () {
        return VirtualObjectFilter;
      });
      /* harmony import */


      var _util_reflection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/reflection */
      "bM2O");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _component_datagrid_filter_base_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/datagrid/filter/base-filter */
      "idV8");
      /**
       * Used to filter VirtualObjectModel. It also searches children to see if its children contain specified objects.
       */


      var VirtualObjectFilter = /*@__PURE__*/function () {
        var VirtualObjectFilter = /*#__PURE__*/function (_component_datagrid_f3) {
          _inherits(VirtualObjectFilter, _component_datagrid_f3);

          var _super4 = _createSuper(VirtualObjectFilter);

          function VirtualObjectFilter(dataField, pipe) {
            var _this14;

            _classCallCheck(this, VirtualObjectFilter);

            _this14 = _super4.call(this);
            _this14.dataField = dataField;
            _this14.pipe = pipe;
            _this14.CHILDREN_FIELD = "children";
            return _this14;
          }

          _createClass(VirtualObjectFilter, [{
            key: "accepts",
            value: function accepts(data, search) {
              var _this15 = this;

              if (VirtualObjectFilter.areMatching(this.getFieldValue(data), search)) {
                return true;
              }

              var children = data[this.CHILDREN_FIELD];

              if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(children)) {
                return children.some(function (child) {
                  return VirtualObjectFilter.areMatching(_this15.getFieldValue(child), search);
                });
              }

              return false;
            }
          }, {
            key: "match",
            value: function match(data, search) {
              return this.accepts(data, search);
            }
          }, {
            key: "getFieldValue",
            value: function getFieldValue(virtualObject) {
              return VirtualObjectFilter.stringifyFieldValue(virtualObject, this.dataField, this.pipe);
            }
          }], [{
            key: "areMatching",
            value: function areMatching(fieldValue, search) {
              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(search)) {
                return true;
              }

              return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(fieldValue) && (fieldValue == search || fieldValue.toLowerCase().includes(search));
            }
          }, {
            key: "stringifyFieldValue",
            value: function stringifyFieldValue(virtualObject, dataField, pipe) {
              var fieldValue = _util_reflection__WEBPACK_IMPORTED_MODULE_0__["Reflection"].getFieldValue(virtualObject, dataField);

              if (pipe) {
                return pipe.transform(fieldValue);
              }

              if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isUnset(fieldValue)) {
                return "" + fieldValue;
              }

              return VirtualObjectFilter.hasNotApplicableValue(dataField) ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.na.label") : "";
            }
          }, {
            key: "hasNotApplicableValue",
            value: function hasNotApplicableValue(dataField) {
              return dataField === VirtualObjectFilter.STORAGE_POLICY_NAME_FIELD || dataField === VirtualObjectFilter.STORAGE_POLICY_PFTT_FIELD || dataField === VirtualObjectFilter.STORAGE_POLICY_SFTT_FIELD;
            }
          }]);

          return VirtualObjectFilter;
        }(_component_datagrid_filter_base_filter__WEBPACK_IMPORTED_MODULE_2__["BaseFilter"]);

        VirtualObjectFilter.STORAGE_POLICY_NAME_FIELD = "storagePolicy.name";
        VirtualObjectFilter.STORAGE_POLICY_PFTT_FIELD = "storagePolicy.pFtt";
        VirtualObjectFilter.STORAGE_POLICY_SFTT_FIELD = "storagePolicy.sFtt";
        return VirtualObjectFilter;
      }();
      /***/

    },

    /***/
    "qGLI":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/virtual-objects-table.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: VirtualObjectsTableComponent */

    /***/
    function qGLI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectsTableComponent", function () {
        return VirtualObjectsTableComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/virtual-objects-table/filter/virtual-object-filter */
      "owna");
      /* harmony import */


      var _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/virtual-objects-table/virtual-objects-type.util */
      "wjnQ");
      /* harmony import */


      var _component_virtual_objects_table_whatIf_state_label_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/virtual-objects-table/whatIf-state-label.pipe */
      "66A/");
      /* harmony import */


      var _generated_display_object_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/display-object-type */
      "YNij");
      /* harmony import */


      var _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/durability-state */
      "3qcF");
      /* harmony import */


      var _generated_privileges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/privileges */
      "JLRK");
      /* harmony import */


      var _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/vsan-object-type */
      "SZrt");
      /* harmony import */


      var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _export_virtual_objects_export_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./export/virtual-objects-export-config */
      "OqE3");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /* tslint:disable:no-string-literal */


      var VirtualObjectsTableComponent = /*#__PURE__*/function () {
        function VirtualObjectsTableComponent(permissionService, virtualObjectsTableService, navigationService, referenceWatcher, tableState) {
          var _this16 = this;

          _classCallCheck(this, VirtualObjectsTableComponent);

          this.permissionService = permissionService;
          this.virtualObjectsTableService = virtualObjectsTableService;
          this.navigationService = navigationService;
          this.referenceWatcher = referenceWatcher;
          this.tableState = tableState;
          this.VirtualObjectsExportConfig = _export_virtual_objects_export_config__WEBPACK_IMPORTED_MODULE_14__["VirtualObjectsExportConfig"];
          this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"];
          this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_11__["Icon"];
          this.VirtualObjectsTypeUtil = _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"];
          this.pageSize = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].defaultGridPageSize;
          this.NAME_FIELD = "name";
          this.WHAT_IF_COMPLIANCE_FIELD = "whatIfComplianceStatus";
          this.STORAGE_POLICY_NAME_FIELD = "storagePolicy.name";
          this.STORAGE_POLICY_PFTT_FIELD = "storagePolicy.pFtt";
          this.STORAGE_POLICY_SFTT_FIELD = "storagePolicy.sFtt";
          this.UID_FIELD = "uid"; // todo georgig: add KB article id when provided. Bug 2676152

          this.ENHANCED_DURABILITY_KB = "";
          this.EXPANSION_STATE_SHOW_HIDE_CLASS = "expand-show-hide";
          this.EXPANSION_STATE_CLASS = "expanded";
          this.currentPage = 1; // Whether to show the storage policies column. Can be false if the user lacks permission to read the policies

          this.showPolicyColumns = false; // holds subscribtion for auto expand of each row. Used to manage subscriptions

          this.autoExpandRowSubscriptions = new Map();
          this.autoExpandRowSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.filterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._virtualObjects = [];
          this.allVirtualObjects = []; // Filters

          this.nameFilter = new _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"](this.NAME_FIELD);
          this.whatIfComplianceStatusFilter = new _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"](this.WHAT_IF_COMPLIANCE_FIELD, new _component_virtual_objects_table_whatIf_state_label_pipe__WEBPACK_IMPORTED_MODULE_4__["VirtualObjectWhatIfStateLabelPipe"]());
          this.storagePolicyNameFilter = new _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"](this.STORAGE_POLICY_NAME_FIELD);
          this.storagePolicyPFTTFilter = new _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"](this.STORAGE_POLICY_PFTT_FIELD);
          this.storagePolicySFTTFilter = new _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"](this.STORAGE_POLICY_SFTT_FIELD);
          this.vsanUuidFilter = new _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"](this.UID_FIELD);
          this.selectionSnapshot = new Map();

          this.onSelectionChanged = function () {
            _this16.selectionChanged.emit(_this16.getSelectedVirtualObjects());
          };

          this.toggleRowExpansion = function (row) {
            // stop animation while auto expanding to avoid flickering.
            row.expand["_animate"].isStopped = true;
            row.expand.expanded = _this16.tableState.isExpanded(row.item);
            row.expand["_animate"].isStopped = false;
          };

          this.onPolicyClicked = function () {
            _this16.navigationService.navigateWithoutContextObject(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["PlatformExtension"].VM_STORAGE_POLICIES_VIEW);
          };

          this.referenceWatcher.watchSubscriptionRef(this.tableState.selectionChanged.subscribe(function () {
            return _this16.onSelectionChanged();
          }));
        }

        _createClass(VirtualObjectsTableComponent, [{
          key: "appliedHealthStateFilters",
          get: function get() {
            return this._appliedHealthStateFilters;
          },
          set: function set(value) {
            if (JSON.stringify(value) === JSON.stringify(this._appliedHealthStateFilters)) {
              this.hasChangedHealthStateFilters = false;
              return;
            }

            this._appliedHealthStateFilters = value;
            this.hasChangedHealthStateFilters = true;
            this.notifyFilterChange();
          }
        }, {
          key: "virtualObjects",
          get: function get() {
            return this._virtualObjects;
          },
          set: function set(value) {
            var _this17 = this;

            var isLastVirtualObjectsDataEmpty = _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this._virtualObjects);

            this._virtualObjects = value ? JSON.parse(JSON.stringify(value)) : [];

            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this._virtualObjects)) {
              this.prepareSnapShotSelection();
            } else {
              this._virtualObjects.forEach(function (virtualObject) {
                if (_this17.selectionSnapshot.get(virtualObject.uid)) {
                  _this17.tableState.toggleSelection(virtualObject, true);

                  if (_this17.hasAppliedFilters) {
                    _this17.tableState.toggleAutoExpand(virtualObject, true);
                  }
                }

                if (virtualObject.children) {
                  virtualObject.children.forEach(function (child) {
                    if (_this17.selectionSnapshot.get(child.uid)) {
                      _this17.tableState.toggleSelection(child, true); // Expand parent item


                      _this17.tableState.toggleAutoExpand(virtualObject, true);
                    }
                  });
                }
              });

              this.selectionSnapshot.clear(); // If the data was empty till now, try to go to the first selection page, if any

              if (isLastVirtualObjectsDataEmpty) {
                this._virtualObjects.forEach(function (virtualObject) {
                  if (_this17.tableState.isSelected(virtualObject)) {
                    _this17.currentPage = Math.floor(_this17._virtualObjects.indexOf(virtualObject) / _this17.pageSize) + 1;
                    return;
                  }
                });
              }
            } // Emit selection in order to update actions on init when there is navigation data.


            this.onSelectionChanged();
          }
        }, {
          key: "rows",
          get: function get() {
            return this.gridRows;
          },
          set: function set(value) {
            var _this18 = this;

            this.unsubscribeRemovedRows(value); // Data grid rows are injected here by Angular upon creation

            this.gridRows = value;

            if (!value) {
              return;
            }

            value.forEach(function (row) {
              if (!row.displayCells) {
                // during datagrid calculation some rows are returned twice. Ignore them.
                return;
              }

              _this18.registerForAutoExpandEvent(row); // Angular can inject the same row several times.
              // We use a flag to avoid registering the listener twice.


              if (!row["vsanSubscription"]) {
                // Listener that saves the last state of the row in the selection object.
                // Needed to restore the rows state when user changes pages,
                // because rows get re-created when page is changed.
                _this18.referenceWatcher.watchSubscriptionRef(row.expandedChange.subscribe(function (isExpanded) {
                  _this18.tableState.toggleManualExpand(row.item, isExpanded);
                }));

                row["vsanSubscription"] = true;
              }

              if (_this18.tableState.isExpanded(row.item)) {
                setTimeout(function () {
                  _this18.toggleRowExpansion(row);
                });
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this19 = this;

              var managedObject;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.prepareSnapShotSelection();
                      managedObject = this.clusterId ? _service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].fromUid(this.clusterId) : _service_managed_object__WEBPACK_IMPORTED_MODULE_10__["ManagedObject"].contextObject;
                      _context.next = 4;
                      return this.permissionService.hasVcPermissions(managedObject, [_generated_privileges__WEBPACK_IMPORTED_MODULE_7__["Privileges"].READ_POLICIES()]);

                    case 4:
                      this.showPolicyColumns = _context.sent;
                      this.notifyFilterChange();
                      this.referenceWatcher.watchSubscriptionRef(this.virtualObjectsTableService.onResetFilters.subscribe(function () {
                        return _this19.clearFilters();
                      }));
                      this.initExportDataSource();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initExportDataSource",
          value: function initExportDataSource() {
            var _this20 = this;

            this.exportDataSource = _export_virtual_objects_export_config__WEBPACK_IMPORTED_MODULE_14__["VirtualObjectsExportConfig"].createExportDataSource(this.datagrid, !this.hideRowSelection, function () {
              return _this20.allVirtualObjects;
            }, function (vo) {
              return _this20.tableState.isSelected(vo);
            }, function (parent, child) {
              return _this20.isMatchingTextSearch(parent, child);
            });
          }
        }, {
          key: "prepareSnapShotSelection",
          value: function prepareSnapShotSelection() {
            var _this21 = this;

            var selectedUuids = new Map();
            this.getSelectedVirtualObjects().forEach(function (model) {
              return selectedUuids.set(model.uid, true);
            });
            this.selectionSnapshot = selectedUuids;

            if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.presentVirtualObjectUuids)) {
              this.presentVirtualObjectUuids.forEach(function (uuid) {
                _this21.selectionSnapshot.set(uuid, true);
              });
            }
          }
        }, {
          key: "isLink",
          value: function isLink(item) {
            return this.isVM(item) || this.isExtensionApp(item) || this.isIscsiTarget(item);
          }
        }, {
          key: "navigate",
          value: function navigate(item) {
            if (this.isVM(item)) {
              this.navigationService.navigateTo(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["PlatformExtension"].VM_SUMMARY, item.vmRef);
            } else if (this.isExtensionApp(item)) {
              this.navigationService.navigateToPersistenceServiceExtension(item.type.extendedTypeId, item.applicationInstanceId, item.vmRef);
            } else if (this.isIscsiTarget(item)) {
              var iscsiTargetsContext = {
                targetAlias: item.name
              };
              this.navigationService.navigateTo(_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["PlatformExtension"].CLUSTER_ISCSI_TARGETS, null, iscsiTargetsContext);
            }
          }
        }, {
          key: "registerForAutoExpandEvent",
          value: function registerForAutoExpandEvent(row) {
            var _this22 = this;

            if (this.autoExpandRowSubscriptions.has(row.id)) {
              // already registered
              return;
            }

            var expandableStateRowSubscription = this.autoExpandRowSubject.subscribe(function (isExpanded) {
              setTimeout(function () {
                _this22.tableState.toggleAutoExpand(row.item, isExpanded);

                _this22.toggleRowExpansion(row);
              });
            });
            this.referenceWatcher.watchSubscriptionRef(expandableStateRowSubscription);
            this.autoExpandRowSubscriptions.set(row.id, expandableStateRowSubscription);
          }
        }, {
          key: "unsubscribeRemovedRows",
          value: function unsubscribeRemovedRows() {
            var newRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
            this.autoExpandRowSubscriptions.forEach(function (value, key, map) {
              if (!newRows.find(function (row) {
                return row.id === key;
              })) {
                value.unsubscribe();
                map["delete"](key);
              }
            });
          }
        }, {
          key: "clearFilters",
          value: function clearFilters() {
            this.nameFilterValue = "";
            this.complianceFilterValue = "";
            this.storagePolicyNameFilterValue = "";
            this.storagePolicyPFTTFilterValue = "";
            this.storagePolicySFTTFilterValue = "";
            this.typeFilterValue = [];
            this.notifyFilterChange();
          }
        }, {
          key: "isVM",
          value: function isVM(item) {
            return item.vmRef !== null && item.type.displayType === _generated_display_object_type__WEBPACK_IMPORTED_MODULE_5__["DisplayObjectType"].VM;
          }
        }, {
          key: "isExtensionApp",
          value: function isExtensionApp(item) {
            return item.vmRef != null && item.applicationInstanceId !== null && item.type.displayType === _generated_display_object_type__WEBPACK_IMPORTED_MODULE_5__["DisplayObjectType"].EXTENSION_APP;
          }
        }, {
          key: "isIscsiTarget",
          value: function isIscsiTarget(item) {
            return item.type.vmodlType === _generated_vsan_object_type__WEBPACK_IMPORTED_MODULE_8__["VsanObjectType"].iscsiTarget && item.type.displayType === _generated_display_object_type__WEBPACK_IMPORTED_MODULE_5__["DisplayObjectType"].ISCSI_TARGET;
          }
        }, {
          key: "allSelected",
          get: function get() {
            return this.tableState.areAllSelected(this.virtualObjects);
          },
          set: function set(value) {
            this.tableState.toggleSelectionOnAll(this.virtualObjects, value);
          }
          /**
           * Returns a flat list of all selected virtual objects
           */

        }, {
          key: "getSelectedVirtualObjects",
          value: function getSelectedVirtualObjects() {
            var _this23 = this;

            return this.tableState.getSelectedVirtualObjects(this.virtualObjects, function (parent, child) {
              return _this23.isMatchingTextSearch(parent, child);
            });
          }
        }, {
          key: "isContainerItem",
          value: function isContainerItem(item) {
            return !item.uid;
          }
        }, {
          key: "isMatchingTextSearch",
          value: function isMatchingTextSearch(parent, child) {
            if (this.nameFilterValue) {
              return this.containSearch(parent, child, this.NAME_FIELD, this.nameFilterValue);
            }

            if (this.complianceFilterValue) {
              return this.containSearch(parent, child, this.WHAT_IF_COMPLIANCE_FIELD, this.complianceFilterValue, new _component_virtual_objects_table_whatIf_state_label_pipe__WEBPACK_IMPORTED_MODULE_4__["VirtualObjectWhatIfStateLabelPipe"]());
            }

            if (this.storagePolicyNameFilterValue) {
              return this.containSearch(parent, child, this.STORAGE_POLICY_NAME_FIELD, this.storagePolicyNameFilterValue);
            }

            if (this.storagePolicyPFTTFilterValue) {
              return this.containSearch(parent, child, this.STORAGE_POLICY_PFTT_FIELD, this.storagePolicyPFTTFilterValue);
            }

            if (this.storagePolicySFTTFilterValue) {
              return this.containSearch(parent, child, this.STORAGE_POLICY_SFTT_FIELD, this.storagePolicySFTTFilterValue);
            }

            if (this.vsanUuidFilterValue) {
              return this.containSearch(parent, child, this.UID_FIELD, this.vsanUuidFilterValue);
            }

            return true;
          }
        }, {
          key: "containSearch",
          value: function containSearch(parent, child, dataField, search, pipe) {
            return parent && this.match(parent, dataField, search, pipe) || child && this.match(child, dataField, search, pipe);
          }
        }, {
          key: "match",
          value: function match(virtualObject, dataField, search, pipe) {
            var fieldValue = _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"].stringifyFieldValue(virtualObject, dataField, pipe);

            return _component_virtual_objects_table_filter_virtual_object_filter__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectFilter"].areMatching(fieldValue, search);
          }
        }, {
          key: "onSelectedFilterTypeChanged",
          value: function onSelectedFilterTypeChanged(value) {
            this.typeFilterValue = value;
            this.notifyFilterChange();
          }
        }, {
          key: "notifyFilterChange",
          value: function notifyFilterChange() {
            var _this24 = this;

            // We must invoke onSelectionChanged because otherwise we will work with the old selection
            this.onSelectionChanged();
            var hasAppliedFilters = !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.appliedHealthStateFilters) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.nameFilterValue) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.complianceFilterValue) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.storagePolicyNameFilterValue) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.storagePolicyPFTTFilterValue) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.storagePolicySFTTFilterValue) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.vsanUuidFilterValue) || !_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].isEmpty(this.typeFilterValue);

            if (this.hasAppliedFilters === hasAppliedFilters && !this.hasChangedHealthStateFilters) {
              return;
            }

            this.hasAppliedFilters = hasAppliedFilters;
            this.filterChanged.emit(hasAppliedFilters);
            setTimeout(function () {
              _this24.autoExpandRowSubject.next(hasAppliedFilters);
            });
          }
        }, {
          key: "getDatagridFooterLabel",
          value: function getDatagridFooterLabel() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getDatagridFooterLabel(this.virtualObjects, this.pagination, this.pageSize);
          }
        }, {
          key: "getTypeLabel",
          value: function getTypeLabel(type) {
            return _component_virtual_objects_table_virtual_objects_type_util__WEBPACK_IMPORTED_MODULE_3__["VirtualObjectsTypeUtil"].getTypeLabel(type);
          }
        }, {
          key: "expandShowHideAggregationStyle",
          value: function expandShowHideAggregationStyle(item) {
            var resultStyle = []; // apply the class if the row expansion state should switch visibility

            if (!item.uid) {
              resultStyle.push(this.EXPANSION_STATE_SHOW_HIDE_CLASS);
            } else {
              // without marker class no need to set actual state
              return resultStyle;
            } // apply expand state


            if (this.tableState.isExpanded(item)) {
              resultStyle.push(this.EXPANSION_STATE_CLASS);
            }

            return resultStyle;
          }
        }, {
          key: "getDurabilityLabel",
          value: function getDurabilityLabel(durabilityState) {
            switch (durabilityState) {
              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__["DurabilityState"].GUARANTEED:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.durability.guaranteed");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__["DurabilityState"].NO_RESOURCE:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.no.resource");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__["DurabilityState"].EXCEEDED_COMP_LIMIT:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.exeeded.comp.limit");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__["DurabilityState"].NO_SPACE:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.no.space");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__["DurabilityState"].STALE_DURABILITY_COMP:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.stale.durability.space");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_6__["DurabilityState"].UNKNOWN:
              default:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.durability.unknown");
            }
          }
        }]);

        return VirtualObjectsTableComponent;
      }();
      /***/

    },

    /***/
    "srXJ":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/whatIf-state-icon-class.pipe.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VirtualObjectWhatIfStateIconClassPipe */

    /***/
    function srXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectWhatIfStateIconClassPipe", function () {
        return VirtualObjectWhatIfStateIconClassPipe;
      });
      /* harmony import */


      var _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-what-if-compliance-status */
      "8siK");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");

      var VirtualObjectWhatIfStateIconClassPipe = /*#__PURE__*/function () {
        function VirtualObjectWhatIfStateIconClassPipe() {
          _classCallCheck(this, VirtualObjectWhatIfStateIconClassPipe);
        }

        _createClass(VirtualObjectWhatIfStateIconClassPipe, [{
          key: "transform",
          value: function transform(state) {
            if (!state) {
              return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SOLID_ICON_CLASS;
            }

            return this.getColorClass(state) + " " + _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_SOLID_ICON_CLASS;
          }
        }, {
          key: "getColorClass",
          value: function getColorClass(state) {
            switch (state) {
              case _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_0__["VsanWhatIfComplianceStatus"].INACCESSIBLE:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_ICON_CLASS;

              case _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_0__["VsanWhatIfComplianceStatus"].NOT_COMPLIANT:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_ICON_CLASS;

              default:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_HIGHLIGHT_ICON_CLASS;
            }
          }
        }]);

        return VirtualObjectWhatIfStateIconClassPipe;
      }();
      /***/

    },

    /***/
    "sz7u":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/whatIf-state-icon-shape.pipe.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VirtualObjectWhatIfStateIconShapePipe */

    /***/
    function sz7u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectWhatIfStateIconShapePipe", function () {
        return VirtualObjectWhatIfStateIconShapePipe;
      });
      /* harmony import */


      var _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/vsan-what-if-compliance-status */
      "8siK");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");

      var VirtualObjectWhatIfStateIconShapePipe = /*#__PURE__*/function () {
        function VirtualObjectWhatIfStateIconShapePipe() {
          _classCallCheck(this, VirtualObjectWhatIfStateIconShapePipe);
        }

        _createClass(VirtualObjectWhatIfStateIconShapePipe, [{
          key: "transform",
          value: function transform(state) {
            switch (state) {
              case _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_0__["VsanWhatIfComplianceStatus"].INACCESSIBLE:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_ERROR_STANDARD_ICON_SHAPE;

              case _generated_vsan_what_if_compliance_status__WEBPACK_IMPORTED_MODULE_0__["VsanWhatIfComplianceStatus"].NOT_COMPLIANT:
                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;

              default:
                _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("Unknown VsanWhatIfComplianceStatus status: " + status);

                return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].CLR_INFO_STANDARD_ICON_SHAPE;
            }
          }
        }]);

        return VirtualObjectWhatIfStateIconShapePipe;
      }();
      /***/

    },

    /***/
    "u1/2":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/virtual-objects-table/export/virtual-object-model-with-parent.ts ***!
      \********************************************************************************************************/

    /*! exports provided: VirtualObjectModelWithParent */

    /***/
    function u12(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectModelWithParent", function () {
        return VirtualObjectModelWithParent;
      });

      var VirtualObjectModelWithParent = /*#__PURE__*/function () {
        function VirtualObjectModelWithParent(parent, self) {
          _classCallCheck(this, VirtualObjectModelWithParent);

          this.parent = parent;
          this.self = self;
        }

        _createClass(VirtualObjectModelWithParent, [{
          key: "isParent",
          get: function get() {
            return !this.parent;
          }
        }], [{
          key: "createParent",
          value: function createParent(virtualObject) {
            return new VirtualObjectModelWithParent(null, virtualObject);
          }
        }, {
          key: "createChildren",
          value: function createChildren(parentVirtualObject, childrenVirtualObjects) {
            return !(childrenVirtualObjects === null || childrenVirtualObjects === void 0 ? void 0 : childrenVirtualObjects.length) ? [] : childrenVirtualObjects.map(function (child) {
              return new VirtualObjectModelWithParent(parentVirtualObject, child);
            });
          }
        }]);

        return VirtualObjectModelWithParent;
      }();
      /***/

    },

    /***/
    "zizU":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/common/pipe/virtual-objects/durability-state-label.pipe.ts ***!
      \*********************************************************************************/

    /*! exports provided: DurabilityStateLabelPipe */

    /***/
    function zizU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DurabilityStateLabelPipe", function () {
        return DurabilityStateLabelPipe;
      });
      /* harmony import */


      var _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/durability-state */
      "3qcF");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var DurabilityStateLabelPipe = /*#__PURE__*/function () {
        function DurabilityStateLabelPipe() {
          _classCallCheck(this, DurabilityStateLabelPipe);
        }

        _createClass(DurabilityStateLabelPipe, [{
          key: "transform",
          value: function transform(state) {
            switch (state) {
              case null:
                return "";

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].GUARANTEED:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.durability.guaranteed");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].NO_RESOURCE:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.no.resource");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].EXCEEDED_COMP_LIMIT:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.exeeded.comp.limit");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].NO_SPACE:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.no.space");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].STALE_DURABILITY_COMP:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.durability.notGuaranteed.stale.durability.space");

              case _generated_durability_state__WEBPACK_IMPORTED_MODULE_0__["DurabilityState"].UNKNOWN:
              default:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.durability.unknown");
            }
          }
        }]);

        return DurabilityStateLabelPipe;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=43-es5.js.map