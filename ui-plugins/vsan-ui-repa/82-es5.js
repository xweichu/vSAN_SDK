(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82], {
    /***/
    "5I9o":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PlacementDetailsComponent */

    /***/
    function I9o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsComponent", function () {
        return PlacementDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _generated_virtual_object_basic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/virtual-object-basic-model */
      "tVDx");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _util_map_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/map-util */
      "VGG7");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var PlacementDetailsComponent = /*@__PURE__*/function () {
        var PlacementDetailsComponent = /*#__PURE__*/function () {
          function PlacementDetailsComponent(physicalPlacementService, configService) {
            _classCallCheck(this, PlacementDetailsComponent);

            this.physicalPlacementService = physicalPlacementService;
            this.configService = configService;
            this.isGrouped = false;
          }

          _createClass(PlacementDetailsComponent, [{
            key: "loadingObjects",
            get: function get() {
              return this._loadingObjects;
            },
            set: function set(loadingObjects) {
              this._loadingObjects = loadingObjects;

              if (!loadingObjects) {
                this.queryPlacementData();
              }
            }
          }, {
            key: "selectedVirtualObjects",
            get: function get() {
              return this._selectedVirtualObjects;
            },
            set: function set(objects) {
              this._selectedVirtualObjects = objects;

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].isEmpty(objects)) {
                return;
              }

              this.queryPlacementData();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.queryPlacementData();

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "queryPlacementData",
            value: function queryPlacementData() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var placementData, _yield$Promise$all, _yield$Promise$all2, physicalPlacementDetails;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(this.loadingObjects || !this.clusterRef || this.getObjectsUuids().size === 0)) {
                          _context2.next = 2;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 2:
                        _context2.next = 4;
                        return Promise.all([this.configService.isVsanMaxEnabled(this.clusterRef), this.physicalPlacementService.getPhysicalPlacement(this.clusterRef, this.getVsanObjectUuids(), this.vsanDirectObjects)]);

                      case 4:
                        _yield$Promise$all = _context2.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        this.isVsanMaxEnabled = _yield$Promise$all2[0];
                        placementData = _yield$Promise$all2[1];
                        physicalPlacementDetails = _util_map_util__WEBPACK_IMPORTED_MODULE_4__["MapUtil"].toMap(placementData);
                        this.savePhysicalPlacementDetails(physicalPlacementDetails);

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "getObjectsUuids",
            value: function getObjectsUuids() {
              var _a;

              return new Set((_a = this.selectedVirtualObjects) === null || _a === void 0 ? void 0 : _a.map(function (virtualObject) {
                return virtualObject.uid;
              }));
            }
          }, {
            key: "getVsanObjectUuids",
            value: function getVsanObjectUuids() {
              var _a;

              return _toConsumableArray(new Set((_a = this.selectedVirtualObjects) === null || _a === void 0 ? void 0 : _a.filter(function (vo) {
                return vo.diskUuid === null;
              }).map(function (vo) {
                return vo.uid;
              })));
            }
          }, {
            key: "vsanDirectObjects",
            get: function get() {
              var _a;

              return (_a = this.selectedVirtualObjects) === null || _a === void 0 ? void 0 : _a.filter(function (vo) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].isSet(vo.diskUuid);
              }).map(function (vo) {
                return _generated_virtual_object_basic_model__WEBPACK_IMPORTED_MODULE_1__["VirtualObjectBasicModel"].Factory.create(vo.uid, vo.name, vo.diskUuid);
              });
            }
          }, {
            key: "savePhysicalPlacementDetails",
            value: function savePhysicalPlacementDetails(physicalPlacementDetails) {
              var _this = this;

              this.data = new Map(); // Keep the original order of the selected virtual objects

              this.selectedVirtualObjects.filter(function (virtualObject) {
                return physicalPlacementDetails.has(virtualObject.uid);
              }).forEach(function (virtualObject) {
                return _this.data.set(virtualObject.uid, physicalPlacementDetails.get(virtualObject.uid));
              });
            }
          }]);

          return PlacementDetailsComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PlacementDetailsComponent.prototype, "errorMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_3__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], PlacementDetailsComponent.prototype, "queryPlacementData", null);
        return PlacementDetailsComponent;
      }();
      /***/

    },

    /***/
    "9sZt":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-grouped.scss.shim.ngstyle.js ***!
      \********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function sZt(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 0rem;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n[_nghost-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.grid-row-selected[_ngcontent-%COMP%] {\n  background: var(--vsan-background-color-selected);\n}\n  .stack-view {\n  overflow: hidden;\n}\n  .stack-view > clr-stack-block > .stack-block-label > .stack-block-content {\n  display: none;\n}\n  .stack-view .stack-view-key {\n  max-width: 60%;\n  flex: 0 0 60%;\n}\n  .stack-view .stack-block-content {\n  width: 40%;\n}\n.path-entry[_ngcontent-%COMP%] {\n  display: flex;\n}\n.path-entry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.state-label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3BsYWNlbWVudC1kZXRhaWxzL3BsYWNlbWVudC1kZXRhaWxzLWdyb3VwZWQuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBY0g7QUFiRztFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFlTjtBRXdCRztFQUNHLGdDQUFBO0FGdEJOO0FFd0JHOztFQUdHLGdDQUFBO0FGdkJOO0FFeUJHO0VBQ0csOEJBQUE7QUZ2Qk47QUU0Qkc7RUFDSywrQkFBQTtBRjFCUjtBRTRCRztFQUlHLCtCQUFBO0FGN0JOO0FFOEJNO0VBQ0csK0JBQUE7QUY1QlQ7QUUrQkc7RUFFRywrQkFBQTtBRjlCTjtBRWdDTTtFQUNHLCtCQUFBO0FGOUJUO0FFaUNHO0VBQ0csNkJBQUE7QUYvQk47QUFyQ0E7RUFDRyxpREcwQ3lCO0FIRjVCO0FBckNBO0VBQ0csZ0JBQUE7QUF3Q0g7QUFyQ0c7RUFDRyxhQUFBO0FBdUNOO0FBckNHO0VBQ0csY0FBQTtFQUNBLGFBQUE7QUF1Q047QUFyQ0c7RUFDRyxVQUFBO0FBdUNOO0FBbkNBO0VBQ0csYUFBQTtBQXNDSDtBQXJDRztFQUNHLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBdUNOO0FBbkNBO0VBQ0csc0JBQUE7QUFzQ0giLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvcGxhY2VtZW50LWRldGFpbHMvcGxhY2VtZW50LWRldGFpbHMtZ3JvdXBlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgZmxleDogMSAwIDByZW07XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gICA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDEgMCAwcmVtO1xuICAgICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG4gICB9XG4gICBAaW5jbHVkZSBzaWJsaW5nLXJpZ2h0LXNwYWNpbmc7XG59XG5cbi5ncmlkLXJvdy1zZWxlY3RlZCB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDtcbn1cblxuOjpuZy1kZWVwIC5zdGFjay12aWV3IHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgIC8vIEhpZGUgdGhlIGNvbnRlbnQgb2YgdGhlIGZpcnN0IGJsb2NrIGxhYmVsIGluIG9yZGVyIHRvIGV4cGFuZCB0aGUgbGFiZWwgaXRzZWxmXG4gICAmID4gY2xyLXN0YWNrLWJsb2NrID4gLnN0YWNrLWJsb2NrLWxhYmVsID4gLnN0YWNrLWJsb2NrLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cbiAgIC5zdGFjay12aWV3LWtleSB7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgIGZsZXg6IDAgMCA2MCU7XG4gICB9XG4gICAuc3RhY2stYmxvY2stY29udGVudCB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgfVxufVxuXG4ucGF0aC1lbnRyeSB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgc3BhbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgfVxufVxuXG4uc3RhdGUtbGFiZWx7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "L/tv":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-grouped.component.ngfactory.js ***!
      \**********************************************************************************************************/

    /*! exports provided: RenderType_PlacementDetailsGroupedComponent, View_PlacementDetailsGroupedComponent_0, View_PlacementDetailsGroupedComponent_Host_0, PlacementDetailsGroupedComponentNgFactory */

    /***/
    function LTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PlacementDetailsGroupedComponent", function () {
        return RenderType_PlacementDetailsGroupedComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsGroupedComponent_0", function () {
        return View_PlacementDetailsGroupedComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsGroupedComponent_Host_0", function () {
        return View_PlacementDetailsGroupedComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsGroupedComponentNgFactory", function () {
        return PlacementDetailsGroupedComponentNgFactory;
      });
      /* harmony import */


      var _placement_details_grouped_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./placement-details-grouped.scss.shim.ngstyle */
      "9sZt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component.ngfactory */
      "2CYb");
      /* harmony import */


      var _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../datagrid/tree-expander.component */
      "8Y4q");
      /* harmony import */


      var _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./physical-placement-property-box.component.ngfactory */
      "lxEh");
      /* harmony import */


      var _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./physical-placement-property-box.component */
      "AsUN");
      /* harmony import */


      var _service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../service/navigation/navigation.service */
      "Qw2S");
      /* harmony import */


      var _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./placement-details-path.component.ngfactory */
      "Iagu");
      /* harmony import */


      var _placement_details_path_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./placement-details-path.component */
      "6TUJ");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _pipe_component_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pipe/component-state-icon-shape.pipe */
      "ayaZ");
      /* harmony import */


      var _pipe_component_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pipe/component-state-icon-class.pipe */
      "/vX8");
      /* harmony import */


      var _placement_details_grouped_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./placement-details-grouped.component */
      "ZEp6");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PlacementDetailsGroupedComponent = [_placement_details_grouped_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PlacementDetailsGroupedComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_PlacementDetailsGroupedComponent,
        data: {}
      });

      function View_PlacementDetailsGroupedComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "div", [["class", "spinner central-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.loading"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsGroupedComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.iconId;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PlacementDetailsGroupedComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](1, null, ["(", ")"]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.faultDomain;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PlacementDetailsGroupedComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 13, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 6, "clr-icon", [["class", "is-solid"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](10, 0, null, null, 2, "span", [["class", "state-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](11, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](12, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var currVal_1 = "is-solid";

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 3, 1, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 2), _v.parent.parent.context.$implicit.data.incrementedIssue));

          _ck(_v, 3, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 2, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 1), _v.parent.parent.context.$implicit.data.incrementedIssue));

          _ck(_v, 2, 0, currVal_0);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 0), _v.parent.parent.context.$implicit.data.issues > 1 ? "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.unhealthy.manyIssues" : "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.unhealthy.oneIssue", _v.parent.parent.context.$implicit.data.issues));

          _ck(_v, 11, 0, currVal_3);
        });
      }

      function View_PlacementDetailsGroupedComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](1, 0, null, null, 2, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid is-success"], ["shape", "success-standard"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](5, 0, null, null, 2, "span", [["class", "state-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](6, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent.parent.parent.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state.healthy"));

          _ck(_v, 6, 0, currVal_0);
        });
      }

      function View_PlacementDetailsGroupedComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, [["noErrors", 2]], null, 0, null, View_PlacementDetailsGroupedComponent_8)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.data.issues > 0;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 5);

          _ck(_v, 3, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PlacementDetailsGroupedComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 16777216, null, null, 42, "clr-dg-row", [["role", "rowgroup"]], [[2, "grid-row-selected", null], [2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.select(_v.context.$implicit.data) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??z"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??de"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??de"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??de"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??de"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??de"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??db"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 9, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 10, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](11, 16777216, null, 2, 19, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 114688, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 11, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 147456, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](18, 0, null, 0, 1, "vsan-expand", [], null, null, null, _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TreeExpanderComponent_0"], _datagrid_tree_expander_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TreeExpanderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](19, 49152, null, 0, _datagrid_tree_expander_component__WEBPACK_IMPORTED_MODULE_9__["TreeExpanderComponent"], [], {
          row: [0, "row"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_PlacementDetailsGroupedComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](24, 0, null, 0, 2, "span", [], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](26, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_PlacementDetailsGroupedComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](32, 16777216, null, 2, 9, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](33, 114688, [[9, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 12, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](35, 147456, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](37, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 0, 1, null, View_PlacementDetailsGroupedComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 19, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.data.iconId;

          _ck(_v, 22, 0, currVal_10);

          var currVal_12 = _v.context.$implicit.data.navigationTarget ? "highlight-text" : "";

          _ck(_v, 25, 0, currVal_12);

          var currVal_14 = _v.context.$implicit.data.faultDomain;

          _ck(_v, 29, 0, currVal_14);

          _ck(_v, 33, 0);

          _ck(_v, 37, 0);

          var currVal_20 = _v.context.$implicit.data.hasState;

          _ck(_v, 40, 0, currVal_20);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.isSelected(_v.context.$implicit.data);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_11 = _v.context.$implicit.data.tooltip;

          _ck(_v, 24, 0, currVal_11);

          var currVal_13 = _v.context.$implicit.data.label;

          _ck(_v, 26, 0, currVal_13);

          var currVal_15 = true;
          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 33).signpost.length > 0;
          var currVal_17 = "hidden";
          var currVal_18 = "ellipsis";
          var currVal_19 = "nowrap";

          _ck(_v, 32, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);
        });
      }

      function View_PlacementDetailsGroupedComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 59, "clr-datagrid", [], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cs"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??co"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cy"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??db"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??db"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??co"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cy"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??db"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??a"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cz"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??da"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??da"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](22, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cz"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??da"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](25, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](26, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](27, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](29, 16777216, null, null, 12, "clr-dg-column", [["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](33, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??di"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](37, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??da"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??di"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](39, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](40, 1, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](41, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](43, 16777216, null, null, 12, "clr-dg-column", [["role", "columnheader"], ["vsan-show-title", ""]], [[2, "datagrid-column", null], [1, "aria-sort", 0], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](47, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??di"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](51, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??lrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??cu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??ci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??dh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??da"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??di"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](53, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](54, 1, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](55, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](58, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 33, 0);

          _ck(_v, 39, 0);

          _ck(_v, 47, 0);

          _ck(_v, 53, 0);

          var currVal_14 = _co.physicalObjects.rows;

          _ck(_v, 58, 0, currVal_14);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).detailService.isOpen;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 33).ariaSort;

          var currVal_4 = "hidden";
          var currVal_5 = "ellipsis";
          var currVal_6 = "nowrap";

          _ck(_v, 29, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 40, 0, _ck(_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.name"));

          _ck(_v, 40, 0, currVal_7);

          var currVal_8 = true;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 47).ariaSort;

          var currVal_10 = "hidden";
          var currVal_11 = "ellipsis";
          var currVal_12 = "nowrap";

          _ck(_v, 43, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 54, 0, _ck(_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.state"));

          _ck(_v, 54, 0, currVal_13);
        });
      }

      function View_PlacementDetailsGroupedComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 14, "clr-stack-block", [], [[2, "stack-block", null], [2, "stack-block-expanded", null], [2, "stack-block-expandable", null], [2, "stack-block-changed", null], [2, "on-focus", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrStackBlock_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrStackBlock"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 114688, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackBlock"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackBlock"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 2, "clr-stack-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](6, null, ["\n               ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 0, null, 1, 5, "clr-stack-content", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](11, 0, null, null, 1, "physical-placement-property-box", [], null, null, null, _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_PhysicalPlacementPropertyBoxComponent_0"], _physical_placement_property_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_PhysicalPlacementPropertyBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](12, 49152, null, 0, _physical_placement_property_box_component__WEBPACK_IMPORTED_MODULE_11__["PhysicalPlacementPropertyBoxComponent"], [_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]], {
          model: [0, "model"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n         "]))], function (_ck, _v) {
          _ck(_v, 2, 0);

          var currVal_6 = _v.context.$implicit;

          _ck(_v, 12, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).expanded;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).expandable;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).getChangedValue;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).onStackLabelFocus;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _v.context.$implicit.label;

          _ck(_v, 6, 0, currVal_5);
        });
      }

      function View_PlacementDetailsGroupedComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 15, "clr-stack-block", [], [[2, "stack-block", null], [2, "stack-block-expanded", null], [2, "stack-block-expandable", null], [2, "stack-block-changed", null], [2, "on-focus", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrStackBlock_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrStackBlock"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 114688, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackBlock"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackBlock"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], {
          expanded: [0, "expanded"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 6, "clr-stack-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, null, 2, "virtual-objects-placement-details-path", [], null, null, null, _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_PlacementDetailsPathComponent_0"], _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_PlacementDetailsPathComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 49152, null, 0, _placement_details_path_component__WEBPACK_IMPORTED_MODULE_14__["PlacementDetailsPathComponent"], [], {
          path: [0, "path"],
          isTooltipVisible: [1, "isTooltipVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 2, 1, null, View_PlacementDetailsGroupedComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n      "]))], function (_ck, _v) {
          var currVal_5 = true;

          _ck(_v, 2, 0, currVal_5);

          var currVal_6 = _v.parent.context.$implicit.path;
          var currVal_7 = false;

          _ck(_v, 8, 0, currVal_6, currVal_7);

          var currVal_8 = _v.parent.context.$implicit.lastLevelComponents;

          _ck(_v, 14, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).expanded;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).expandable;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).getChangedValue;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).onStackLabelFocus;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_PlacementDetailsGroupedComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _v.parent.parent.parent.context.$implicit.iconId;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PlacementDetailsGroupedComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.iconId;

          _ck(_v, 4, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _v.parent.parent.context.$implicit.label;

          _ck(_v, 7, 0, currVal_1);
        });
      }

      function View_PlacementDetailsGroupedComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](3, 0, null, null, 2, "virtual-objects-placement-details-path", [], null, null, null, _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_PlacementDetailsPathComponent_0"], _placement_details_path_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_PlacementDetailsPathComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 49152, null, 0, _placement_details_path_component__WEBPACK_IMPORTED_MODULE_14__["PlacementDetailsPathComponent"], [], {
          path: [0, "path"],
          isTooltipVisible: [1, "isTooltipVisible"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.path;
          var currVal_1 = false;

          _ck(_v, 4, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PlacementDetailsGroupedComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 13, "clr-stack-block", [], [[2, "stack-block", null], [2, "stack-block-expanded", null], [2, "stack-block-expandable", null], [2, "stack-block-changed", null], [2, "on-focus", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrStackBlock_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrStackBlock"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](2, 114688, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackBlock"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackBlock"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["??o"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], {
          expanded: [0, "expanded"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, 0, 8, "clr-stack-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](5, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackViewCustomTags"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n      "]))], function (_ck, _v) {
          var currVal_5 = true;

          _ck(_v, 2, 0, currVal_5);

          var currVal_6 = _v.parent.context.$implicit.label && !_v.parent.context.$implicit.path;

          _ck(_v, 8, 0, currVal_6);

          var currVal_7 = _v.parent.context.$implicit.path && !_v.parent.context.$implicit.label;

          _ck(_v, 11, 0, currVal_7);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).expanded;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).expandable;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).getChangedValue;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 2).onStackLabelFocus;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_PlacementDetailsGroupedComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 8, "clr-stack-view", [], null, null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrStackView_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrStackView"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrStackView"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 1, 1, null, View_PlacementDetailsGroupedComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, 1, 1, null, View_PlacementDetailsGroupedComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, 1, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit.datastoreType === _co.DatastoreType.VSAN;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.datastoreType !== _co.DatastoreType.VSAN;

          _ck(_v, 7, 0, currVal_1);
        }, null);
      }

      function View_PlacementDetailsGroupedComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_component_state_icon_shape_pipe__WEBPACK_IMPORTED_MODULE_16__["ComponentStateIconShapePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_component_state_icon_class_pipe__WEBPACK_IMPORTED_MODULE_17__["ComponentStateIconClassPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 11, "div", [["id", "hosts-and-disks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](7, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](17, 0, null, null, 8, "div", [["id", "virtual-components"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](19, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](20, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](21, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsGroupedComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = !(_co.physicalObjects == null ? null : _co.physicalObjects.rootItems == null ? null : _co.physicalObjects.rootItems.length);

          _ck(_v, 11, 0, currVal_1);

          var currVal_2 = _co.physicalObjects == null ? null : _co.physicalObjects.rootItems.length;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _co.virtualComponents;

          _ck(_v, 24, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.hostsAndDisksLabel"));

          _ck(_v, 7, 0, currVal_0);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 20, 0, _ck(_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.virtualComponentsLabel"));

          _ck(_v, 20, 0, currVal_3);
        });
      }

      function View_PlacementDetailsGroupedComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "virtual-objects-placement-details-grouped", [], null, null, null, View_PlacementDetailsGroupedComponent_0, RenderType_PlacementDetailsGroupedComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _placement_details_grouped_component__WEBPACK_IMPORTED_MODULE_18__["PlacementDetailsGroupedComponent"], [], null, null)], null, null);
      }

      var PlacementDetailsGroupedComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("virtual-objects-placement-details-grouped", _placement_details_grouped_component__WEBPACK_IMPORTED_MODULE_18__["PlacementDetailsGroupedComponent"], View_PlacementDetailsGroupedComponent_Host_0, {
        isVsanMaxEnabled: "isVsanMaxEnabled",
        data: "data",
        virtualObjects: "virtualObjects"
      }, {
        onError: "onError"
      }, []);
      /***/

    },

    /***/
    "Pb0a":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details.scss.shim.ngstyle.js ***!
      \************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Pb0a(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\nclr-checkbox-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0.15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3BsYWNlbWVudC1kZXRhaWxzL3BsYWNlbWVudC1kZXRhaWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBY0g7QUU4Qkc7RUFDRyxnQ0FBQTtBRjVCTjtBRThCRzs7RUFHRyxnQ0FBQTtBRjdCTjtBRStCRztFQUNHLDhCQUFBO0FGN0JOO0FBcEJBO0VBRUcscUJHUVE7QUhjWCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9wbGFjZW1lbnQtZGV0YWlscy9wbGFjZW1lbnQtZGV0YWlscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbmNsci1jaGVja2JveC13cmFwcGVyIHtcbiAgIC8vIFRvIGF2b2lkIHRyaW1taW5nIHRoZSBjaGVja2JveCBzaGFkb3dcbiAgIHBhZGRpbmctbGVmdDogJHZzYW4tb3V0bGluZS1zaXplO1xufVxuXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "ZEp6":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details-grouped.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: PlacementDetailsGroupedComponent */

    /***/
    function ZEp6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsGroupedComponent", function () {
        return PlacementDetailsGroupedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_datagrid_tree_datagrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/datagrid/tree-datagrid */
      "zgjC");
      /* harmony import */


      var _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/placement-details/model/virtual-object-branch-model */
      "xyIz");
      /* harmony import */


      var _component_placement_details_placement_details_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/placement-details/placement-details-util */
      "PYpP");
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/vsan-component-state */
      "vCtO");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PlacementDetailsGroupedComponent = /*#__PURE__*/function () {
        function PlacementDetailsGroupedComponent() {
          var _this2 = this;

          _classCallCheck(this, PlacementDetailsGroupedComponent);

          this.DatastoreType = _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__["DatastoreType"];
          this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.physicalObjects = new _component_datagrid_tree_datagrid__WEBPACK_IMPORTED_MODULE_1__["TreeDatagrid"](function (model) {
            return model.children;
          });
          this.pathByVsanUuid = {}; // vsanUuid => VirtualObjectModel[]

          this.loadData = function () {
            if (!_this2.virtualObjects) {
              return;
            }

            var hostAndDisksData = _this2.prepareHostsAndDisksTree();

            _this2.physicalObjects.rootItems = hostAndDisksData;

            if (hostAndDisksData.length > 0) {
              _this2.select(hostAndDisksData[0]);
            }
          };

          this.select = function (model) {
            var _a, _b;

            if (!((_b = (_a = _this2.physicalObjects) === null || _a === void 0 ? void 0 : _a.rootItems) === null || _b === void 0 ? void 0 : _b.length)) {
              return;
            }

            _this2.selectedModel = model;
            _this2.virtualComponents = [];

            if (!model) {
              return;
            }

            var _iterator = _createForOfIteratorHelper(_this2.data.keys()),
                _step;

            try {
              var _loop = function _loop() {
                var uuid = _step.value;
                // deep clone the models, because the mergeSingleRaidConfig will move the
                // raid config children to the upper level and
                // we don't want to change the original data as well
                var models = JSON.parse(JSON.stringify(_this2.data.get(uuid)));

                _this2.applyFilter(models, model);

                if (models.length) {
                  _this2.virtualComponents.push(_component_placement_details_placement_details_util__WEBPACK_IMPORTED_MODULE_3__["PlacementDetailsUtil"].getPlacement(uuid, models, _this2.virtualObjects, function (id) {
                    return _this2.pathByVsanUuid[uuid];
                  }));
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          };

          this.isSelected = function (model) {
            return _this2.selectedModel === model;
          };
        }

        _createClass(PlacementDetailsGroupedComponent, [{
          key: "data",
          get: function get() {
            return this.componentsByVirtualObject;
          },
          set: function set(value) {
            this.componentsByVirtualObject = value;

            if (!value) {
              this.physicalObjects.rootItems = [];
              return;
            }

            this.loadData();
          }
        }, {
          key: "virtualObjects",
          get: function get() {
            return this._virtualObjects;
          },
          set: function set(models) {
            var _this3 = this;

            models.forEach(function (model) {
              if (model.uid) {
                _this3.pathByVsanUuid[model.uid] = [model];
              }

              if (model.children) {
                model.children.forEach(function (child) {
                  if (child.uid) {
                    _this3.pathByVsanUuid[child.uid] = [model, child];
                  }
                });
              }
            });
            this._virtualObjects = models;
            this.loadData();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(models, filterModel) {
            var predicate = function predicate(comp, filterBy) {
              if (filterBy.hostUuid) {
                return filterBy.hostUuid === (comp.host ? comp.host.nodeUuid : "");
              } else if (filterBy.cacheUuid) {
                return filterBy.cacheUuid === (comp.cacheDisk ? comp.cacheDisk.nodeUuid : "");
              } else if (filterBy.capacityUuid) {
                return filterBy.capacityUuid === (comp.capacityDisk ? comp.capacityDisk.nodeUuid : "");
              } else if (filterBy.capacityUuids) {
                return filterBy.capacityUuids.includes(comp.capacityDisk.nodeUuid);
              } else if (filterBy.children) {
                var _iterator2 = _createForOfIteratorHelper(filterBy.children),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var child = _step2.value;

                    if (predicate(comp, child)) {
                      return true;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              return false;
            }; // apply the filter to the last level components


            this.filterChildren(models, filterModel, predicate);
          }
        }, {
          key: "filterChildren",
          value: function filterChildren(models, filterModel, filterFunction) {
            for (var i = models.length - 1; i >= 0; i--) {
              if (models[i].children) {
                this.filterChildren(models[i].children, filterModel, filterFunction);
              } else {
                if (!filterFunction(models[i], filterModel)) {
                  models.splice(i, 1);
                }
              } // when all children are filtered out, remove the parent element


              if (models[i] && models[i].children && models[i].children.length === 0) {
                models.splice(i, 1);
              }
            }
          }
        }, {
          key: "prepareHostsAndDisksTree",
          value: function prepareHostsAndDisksTree() {
            var _this4 = this;

            var hostByUuid = {};
            var groupByUuid = {};
            var unknownDisks = {}; // Set DEGRADED or ABSENT aggregate state per object, so we can show warning or error icon if there are issues.

            var incrementIssue = function incrementIssue(model, issue) {
              var issueCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              model.issues += issueCount;

              if (!model.incrementedIssue) {
                model.incrementedIssue = issue === _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].DEGRADED ? _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].DEGRADED : _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].ABSENT;
              } else if (model.incrementedIssue !== issue && issue === _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].DEGRADED) {
                model.incrementedIssue = _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].DEGRADED;
              }
            };

            var acceptPartialModel = function acceptPartialModel(model) {
              var hasDisk = function hasDisk(disk) {
                return disk && disk.nodeUuid;
              };

              if (hasDisk(model.cacheDisk)) {
                var unknownDisk = unknownDisks[model.cacheDisk.nodeUuid];

                if (!unknownDisk) {
                  unknownDisk = _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectBranchModel"].createDisk(model.cacheDisk, true);
                  unknownDisks[model.cacheDisk.nodeUuid] = unknownDisk;
                }

                if (model.state !== _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].ACTIVE) {
                  incrementIssue(unknownDisk, model.state);
                }
              }

              if (hasDisk(model.capacityDisk)) {
                var _unknownDisk = unknownDisks[model.capacityDisk.nodeUuid];

                if (!_unknownDisk) {
                  _unknownDisk = _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectBranchModel"].createDisk(model.capacityDisk, true);
                  _unknownDisk.capacityUuid = model.capacityDisk.nodeUuid;
                  unknownDisks[model.capacityDisk.nodeUuid] = _unknownDisk;
                }

                if (model.state !== _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].ACTIVE) {
                  incrementIssue(_unknownDisk, model.state);
                }
              }
            };

            var acceptModel = function acceptModel(placement) {
              var _a, _b, _c;

              if (placement.children) {
                return placement.children.forEach(function (c) {
                  return acceptModel(c);
                });
              }

              if (!placement.host) {
                return acceptPartialModel(placement);
              }

              var hostData = hostByUuid[placement.host.nodeUuid];

              if (!hostData) {
                hostData = _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectBranchModel"].createHost(placement.host);
                hostByUuid[placement.host.nodeUuid] = hostData;
              }

              var hasState = placement.datastoreType === _generated_datastore_type__WEBPACK_IMPORTED_MODULE_4__["DatastoreType"].VSAN;

              if (hasState) {
                // If at least one object placed on that host has state, then the host also has a state
                hostData.hasState = true;
              }

              var groupUuid = _component_placement_details_placement_details_util__WEBPACK_IMPORTED_MODULE_3__["PlacementDetailsUtil"].getGroupUuid(placement, _this4.isVsanMaxEnabled);

              var capacityDisk = _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectBranchModel"].createCapacityDisk(placement, hasState);

              var group = groupByUuid[groupUuid];

              if (!group) {
                group = _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectBranchModel"].createGroup(placement, capacityDisk, _this4.isVsanMaxEnabled);
                groupByUuid[groupUuid] = group;
                hostData.children.push(group);
              } else if (((_a = group.capacityUuids) === null || _a === void 0 ? void 0 : _a.indexOf((_b = placement.capacityDisk) === null || _b === void 0 ? void 0 : _b.nodeUuid)) < 0) {
                group.children.push(capacityDisk);
                group.capacityUuids.push(capacityDisk.capacityUuid);
              }

              if (hasState && placement.state !== _generated_vsan_component_state__WEBPACK_IMPORTED_MODULE_5__["VsanComponentState"].ACTIVE) {
                incrementIssue(hostData, placement.state);
                incrementIssue(group, placement.state); // Find the concrete disk and increment its issues number

                var disk = (_c = group.children) === null || _c === void 0 ? void 0 : _c.find(function (vo) {
                  return vo.capacityUuid === placement.capacityDisk.nodeUuid;
                });

                if (disk) {
                  incrementIssue(disk, placement.state);
                }
              }
            };

            var _iterator3 = _createForOfIteratorHelper(this.componentsByVirtualObject.values()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var components = _step3.value;
                components.forEach(function (component) {
                  return acceptModel(component);
                });
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (Object.keys(unknownDisks).length > 0) {
              var unknownDisksEntry = _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.unknownGroup");

              var unknownGroup = new _component_placement_details_model_virtual_object_branch_model__WEBPACK_IMPORTED_MODULE_2__["VirtualObjectBranchModel"](null, unknownDisksEntry, [], unknownDisksEntry);
              Object.keys(unknownDisks).forEach(function (diskId) {
                var disk = unknownDisks[diskId];
                unknownGroup.children.push(disk);
                incrementIssue(unknownGroup, disk.incrementedIssue, disk.issues);
              });
              hostByUuid[unknownDisksEntry] = unknownGroup;
            }

            var hostUuids = Object.keys(hostByUuid);
            return hostUuids.map(function (uid) {
              _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_6__["DiskMgmtUtil"].sortDiskGroups(hostByUuid[uid].children, function (diskGroup) {
                return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].isEmpty(diskGroup.cacheUuid) && diskGroup.hasState && diskGroup.children.every(function (disk) {
                  return disk.hasState;
                });
              });

              return hostByUuid[uid];
            });
          }
        }]);

        return PlacementDetailsGroupedComponent;
      }();
      /***/

    },

    /***/
    "idV8":
    /*!**********************************************************************!*\
      !*** ./src/app/vsan/common/component/datagrid/filter/base-filter.ts ***!
      \**********************************************************************/

    /*! exports provided: BaseFilter */

    /***/
    function idV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseFilter", function () {
        return BaseFilter;
      });
      /* harmony import */


      var _tree_datagrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../tree-datagrid */
      "zgjC");
      /* Copyright 2017-2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Abstract filter class that needs to be extended in order to implement custom filtration.
       * The class has a single abstract method that takes an object of type T and returns its
       * string representation.
       */


      var BaseFilter = /*#__PURE__*/function () {
        function BaseFilter() {
          _classCallCheck(this, BaseFilter);
        }

        _createClass(BaseFilter, [{
          key: "accepts",
          value: function accepts(data, search) {
            // Handle correctly TreeDatagrid components
            if (data instanceof _tree_datagrid__WEBPACK_IMPORTED_MODULE_0__["TreeDatagridRow"]) {
              data = data.data;
            }

            var label = this.stringify(data);

            if (label) {
              // Compare ignoring the case
              return label.toLowerCase().indexOf(search.toLowerCase()) != -1;
            } else {
              return false;
            }
          }
        }, {
          key: "match",
          value: function match(data, search) {
            return this.accepts(data, search);
          }
        }, {
          key: "stringify",
          value: function stringify(data) {
            return data + "";
          }
        }]);

        return BaseFilter;
      }();
      /***/

    },

    /***/
    "jkFw":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/inventory/inventory-browser.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: InventoryBrowserModule */

    /***/
    function jkFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryBrowserModule", function () {
        return InventoryBrowserModule;
      });

      var InventoryBrowserModule = /*#__PURE__*/_createClass(function InventoryBrowserModule() {
        _classCallCheck(this, InventoryBrowserModule);
      });
      /***/

    },

    /***/
    "r2Mv":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/placement-details.component.ngfactory.js ***!
      \**************************************************************************************************/

    /*! exports provided: RenderType_PlacementDetailsComponent, View_PlacementDetailsComponent_0, View_PlacementDetailsComponent_Host_0, PlacementDetailsComponentNgFactory */

    /***/
    function r2Mv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PlacementDetailsComponent", function () {
        return RenderType_PlacementDetailsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsComponent_0", function () {
        return View_PlacementDetailsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PlacementDetailsComponent_Host_0", function () {
        return View_PlacementDetailsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementDetailsComponentNgFactory", function () {
        return PlacementDetailsComponentNgFactory;
      });
      /* harmony import */


      var _placement_details_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./placement-details.scss.shim.ngstyle */
      "Pb0a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validation/validation.component */
      "ie44");
      /* harmony import */


      var _placement_details_flat_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./placement-details-flat.component.ngfactory */
      "a51F");
      /* harmony import */


      var _placement_details_flat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./placement-details-flat.component */
      "pOAa");
      /* harmony import */


      var _placement_details_grouped_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./placement-details-grouped.component.ngfactory */
      "L/tv");
      /* harmony import */


      var _placement_details_grouped_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./placement-details-grouped.component */
      "ZEp6");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _placement_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./placement-details.component */
      "5I9o");
      /* harmony import */


      var _generated_physical_placement_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../generated/physical-placement-service */
      "oAEp");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../generated/vsan-config-service */
      "UKIB");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PlacementDetailsComponent = [_placement_details_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PlacementDetailsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
        encapsulation: 0,
        styles: styles_PlacementDetailsComponent,
        data: {}
      });

      function View_PlacementDetailsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "vsan-validation", [["id", "validation-message"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_PlacementDetailsComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "virtual-objects-placement-details-flat", [], null, null, null, _placement_details_flat_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PlacementDetailsFlatComponent_0"], _placement_details_flat_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PlacementDetailsFlatComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _placement_details_flat_component__WEBPACK_IMPORTED_MODULE_5__["PlacementDetailsFlatComponent"], [], {
          vmRef: [0, "vmRef"],
          virtualObjects: [1, "virtualObjects"],
          data: [2, "data"],
          isVsanMaxEnabled: [3, "isVsanMaxEnabled"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.vmRef;
          var currVal_1 = _co.virtualObjects;
          var currVal_2 = _co.data;
          var currVal_3 = _co.isVsanMaxEnabled;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_PlacementDetailsComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 2, "virtual-objects-placement-details-grouped", [], null, null, null, _placement_details_grouped_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PlacementDetailsGroupedComponent_0"], _placement_details_grouped_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PlacementDetailsGroupedComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 49152, null, 0, _placement_details_grouped_component__WEBPACK_IMPORTED_MODULE_7__["PlacementDetailsGroupedComponent"], [], {
          isVsanMaxEnabled: [0, "isVsanMaxEnabled"],
          data: [1, "data"],
          virtualObjects: [2, "virtualObjects"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isVsanMaxEnabled;
          var currVal_1 = _co.data;
          var currVal_2 = _co.virtualObjects;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PlacementDetailsComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 27, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, null, 18, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](4, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_9__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??qud"](335544320, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bc"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["id", "toggleGrouped"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 9).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.isGrouped = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](14, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](16, 0, null, 1, 3, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](17, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??b"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](18, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ppd"](19, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_10 = _co.isGrouped;

          _ck(_v, 11, 0, currVal_10);

          var currVal_11 = "toggleGrouped";

          _ck(_v, 14, 0, currVal_11);

          _ck(_v, 17, 0);

          var currVal_14 = !_co.isGrouped;

          _ck(_v, 23, 0, currVal_14);

          var currVal_15 = _co.isGrouped;

          _ck(_v, 26, 0, currVal_15);
        }, function (_ck, _v) {
          var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).toggle;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 4).toggle;

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 13).ngClassPending;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 14).id;

          _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 17).forAttr;

          _ck(_v, 16, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??unv"](_v, 18, 0, _ck(_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v.parent, 0), "vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.groupingSwitch"));

          _ck(_v, 18, 0, currVal_13);
        });
      }

      function View_PlacementDetailsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["??pid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??and"](16777216, null, null, 1, null, View_PlacementDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = !_co.errorMessage;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_PlacementDetailsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "vsan-placement-details", [], null, null, null, View_PlacementDetailsComponent_0, RenderType_PlacementDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 114688, null, 0, _placement_details_component__WEBPACK_IMPORTED_MODULE_13__["PlacementDetailsComponent"], [_generated_physical_placement_service__WEBPACK_IMPORTED_MODULE_14__["PhysicalPlacementService"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_15__["VsanConfigService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PlacementDetailsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("vsan-placement-details", _placement_details_component__WEBPACK_IMPORTED_MODULE_13__["PlacementDetailsComponent"], View_PlacementDetailsComponent_Host_0, {
        isGrouped: "isGrouped",
        vmRef: "vmRef",
        loadingObjects: "loadingObjects",
        selectedVirtualObjects: "selectedVirtualObjects",
        virtualObjects: "virtualObjects",
        clusterRef: "clusterRef"
      }, {}, []);
      /***/

    },

    /***/
    "v8iv":
    /*!***************************************************************!*\
      !*** ./src/app/vsan/common/component/search/search.module.ts ***!
      \***************************************************************/

    /*! exports provided: SearchModule */

    /***/
    function v8iv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
        return SearchModule;
      });

      var SearchModule = /*#__PURE__*/_createClass(function SearchModule() {
        _classCallCheck(this, SearchModule);
      });
      /***/

    },

    /***/
    "xyIz":
    /*!**********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/placement-details/model/virtual-object-branch-model.ts ***!
      \**********************************************************************************************/

    /*! exports provided: VirtualObjectBranchModel */

    /***/
    function xyIz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VirtualObjectBranchModel", function () {
        return VirtualObjectBranchModel;
      });
      /* harmony import */


      var _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/datastore-type */
      "9mn3");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */
      // Represents a node from the hierarchical path to a virtual object (e.g. Host, Cache disk)


      var VirtualObjectBranchModel = /*@__PURE__*/function () {
        var VirtualObjectBranchModel = /*#__PURE__*/function () {
          function VirtualObjectBranchModel(iconId, label) {
            var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var tooltip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var faultDomain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var navigationTarget = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var issues = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            var hasState = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

            _classCallCheck(this, VirtualObjectBranchModel);

            this.iconId = iconId;
            this.label = label;
            this.children = children;
            this.tooltip = tooltip;
            this.faultDomain = faultDomain;
            this.navigationTarget = navigationTarget;
            this.issues = issues;
            this.hasState = hasState;
          }

          _createClass(VirtualObjectBranchModel, null, [{
            key: "createCapacityDisk",
            value: function createCapacityDisk(placement, hasState) {
              var disk = VirtualObjectBranchModel.createDisk(placement.capacityDisk, hasState);
              disk.capacityUuid = placement.capacityDisk.nodeUuid;
              return disk;
            }
          }, {
            key: "createGroup",
            value: function createGroup(placement, capacityDisk, isVsanMaxEnabled) {
              switch (placement.datastoreType) {
                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__["DatastoreType"].VSAN:
                  return isVsanMaxEnabled ? capacityDisk : VirtualObjectBranchModel.createVsanDiskGroup(placement.cacheDisk, capacityDisk);

                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__["DatastoreType"].VSAN_DIRECT:
                case _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__["DatastoreType"].PMEM:
                  return VirtualObjectBranchModel.createManagedByVsanDiskGroup(capacityDisk, placement.datastoreType);
              }
            }
          }]);

          return VirtualObjectBranchModel;
        }();

        VirtualObjectBranchModel.createHost = function (host) {
          var result = new VirtualObjectBranchModel(host.iconId, host.label, [], host.nodeUuid, host.faultDomain, host.navigationTarget);
          result.hostUuid = host.nodeUuid;
          return result;
        };

        VirtualObjectBranchModel.createDisk = function (placement, hasState) {
          var disk = new VirtualObjectBranchModel(placement.iconId, placement.label, null, placement.nodeUuid);
          disk.hasState = hasState; // vSAN disks have state based on the component states

          return disk;
        };

        VirtualObjectBranchModel.createVsanDiskGroup = function (cacheModel, capacityModel) {
          var result = new VirtualObjectBranchModel(_util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].DISK_GROUP_IMAGE, _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.monitor.cluster.virtualObjects.action.viewDetails.tabs.placement.diskGroup", cacheModel.label), [capacityModel]);
          result.cacheUuid = cacheModel.nodeUuid;
          result.capacityUuids = [capacityModel.capacityUuid];
          result.hasState = true; // vSAN DG has state based on the component states

          return result;
        };

        VirtualObjectBranchModel.createManagedByVsanDiskGroup = function (capacityModel, datastoreType) {
          var group = new VirtualObjectBranchModel("", datastoreType === _generated_datastore_type__WEBPACK_IMPORTED_MODULE_0__["DatastoreType"].VSAN_DIRECT ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.diskGroup.type.vsanDirect") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.diskGroup.type.pmem"), [capacityModel]);
          group.capacityUuids = [capacityModel.capacityUuid];
          return group;
        };

        return VirtualObjectBranchModel;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=82-es5.js.map