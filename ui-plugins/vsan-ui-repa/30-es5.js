(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30], {
    /***/
    "1pCA":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/select-disks.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SelectDisksComponent */

    /***/
    function pCA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDisksComponent", function () {
        return SelectDisksComponent;
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


      var _util_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var SelectDisksComponent = /*@__PURE__*/function () {
        var SelectDisksComponent = /*#__PURE__*/function () {
          function SelectDisksComponent(diskMgmtService) {
            _classCallCheck(this, SelectDisksComponent);

            this.diskMgmtService = diskMgmtService;
            this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
            this.selectedDisksChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.disksLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.selectedDisks = [];
          }

          _createClass(SelectDisksComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.diskMgmtService.listEligibleDisks(this.clusterRef, this.hostRef, this.isAllFlashDiskGroup, this.isVsanMaxEnabled);

                      case 2:
                        this.eligibleDisks = _context.sent;
                        this.disksLoaded.emit(true);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "diskSelectionChange",
            value: function diskSelectionChange() {
              this.selectedDisksChange.emit(this.selectedDisks);
              this.hasVsanMaxWarning = this.isVsanMaxEnabled && this.selectedDisks.some(function (disk) {
                return !disk.isVsanMaxCompatible;
              });
            }
          }, {
            key: "getIcon",
            value: function getIcon(disk) {
              return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskUtil"].getIcon(disk);
            }
          }, {
            key: "getDriveType",
            value: function getDriveType(disk) {
              return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_3__["DiskMgmtDiskUtil"].getScsiDiskType(disk.isFlash);
            }
          }, {
            key: "getIsVsanMaxCompatibleLabel",
            value: function getIsVsanMaxCompatibleLabel(disk) {
              return disk.isVsanMaxCompatible ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].getString("vsan.disk.list.vsanMax.compatible") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].getString("vsan.disk.list.vsanMax.incompatible");
            }
          }, {
            key: "getIsVsanMaxCompatibleIconShape",
            value: function getIsVsanMaxCompatibleIconShape(disk) {
              return disk.isVsanMaxCompatible ? _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].CLR_SUCCESS_STANDARD_ICON_SHAPE : _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].CLR_WARN_STANDARD_ICON_SHAPE;
            }
          }]);

          return SelectDisksComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SelectDisksComponent.prototype, "busy", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SelectDisksComponent.prototype, "errorMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_6__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], SelectDisksComponent.prototype, "ngOnInit", null);
        return SelectDisksComponent;
      }();
      /***/

    },

    /***/
    "4ro6":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/perspective/disks-group-by-perspective.ts ***!
      \******************************************************************************************/

    /*! exports provided: DisksGroupByPerspective */

    /***/
    function ro6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisksGroupByPerspective", function () {
        return DisksGroupByPerspective;
      });
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DisksGroupByPerspective = /*@__PURE__*/function (DisksGroupByPerspective) {
        DisksGroupByPerspective[DisksGroupByPerspective["DISKS_BY_VENDOR"] = 0] = "DISKS_BY_VENDOR";
        DisksGroupByPerspective[DisksGroupByPerspective["DISKS_BY_HOST"] = 1] = "DISKS_BY_HOST";
        return DisksGroupByPerspective;
      }({});
      /***/

    },

    /***/
    "G/TU":
    /*!****************************************************!*\
      !*** ./src/app/vsan/common/pipe/disk-type.pipe.ts ***!
      \****************************************************/

    /*! exports provided: DiskTypePipe */

    /***/
    function GTU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskTypePipe", function () {
        return DiskTypePipe;
      });
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /*
       * Returns the localization label for the disk type.
       */


      var DiskTypePipe = /*#__PURE__*/function () {
        function DiskTypePipe() {
          _classCallCheck(this, DiskTypePipe);
        }

        _createClass(DiskTypePipe, [{
          key: "transform",
          value: function transform(type) {
            return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__["DiskMgmtDiskUtil"].getDiskType(type);
          }
        }]);

        return DiskTypePipe;
      }();
      /***/

    },

    /***/
    "I0Pd":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/action-button/button-title.directive.ts ***!
      \*******************************************************************************/

    /*! exports provided: ButtonTitleDirective */

    /***/
    function I0Pd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonTitleDirective", function () {
        return ButtonTitleDirective;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * Attribute directive for detecting button title change and storing title.
       * Only used for clr-button in clr-button-group.
       * @title - The title of clr-button
       */


      var ButtonTitleDirective = /*#__PURE__*/function () {
        function ButtonTitleDirective(host) {
          _classCallCheck(this, ButtonTitleDirective);

          this.host = host;
          this.titleChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        }

        _createClass(ButtonTitleDirective, [{
          key: "title",
          get: function get() {
            return this._title;
          },
          set: function set(value) {
            if (this._title !== value) {
              this.titleChange.next(value);
            }

            this._title = value;
          }
        }, {
          key: "titleChangeEvent",
          get: function get() {
            return this.titleChange.asObservable();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
            // attribute of the markup button. Later the name is used to match the generated markup with the directive.
            if (!this.host.name) {
              this.host.name = Math.random().toString();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.titleChange.unsubscribe();
          }
        }]);

        return ButtonTitleDirective;
      }();
      /***/

    },

    /***/
    "Ju17":
    /*!*********************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-group-common.directive.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ClrButtonGroupCommonDirective */

    /***/
    function Ju17(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonGroupCommonDirective", function () {
        return ClrButtonGroupCommonDirective;
      });
      /**
       * Applies on every clr-button-group and help to link the clr-button with directive applieds on it,  which extends
       * {@link ClrButtonBaseDirective}, to the actual rendered html button.
       */


      var ClrButtonGroupCommonDirective = /*#__PURE__*/function () {
        function ClrButtonGroupCommonDirective(elRef) {
          _classCallCheck(this, ClrButtonGroupCommonDirective);

          this.elRef = elRef;
        }

        _createClass(ClrButtonGroupCommonDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            setTimeout(function () {
              var allButtons = _this.elRef.nativeElement.querySelectorAll("button"); // match button with clrButton and notify directives


              _this.clrButtons.filter(function (clrButton) {
                return !!clrButton.directives;
              }).forEach(function (clrButton, index) {
                var buttonFound = _this.findButtonByName(clrButton.name, allButtons);

                if (buttonFound) {
                  clrButton.directives.forEach(function (directive) {
                    directive.resolveButton(clrButton, buttonFound, index);
                  });
                }
              });
            });
          }
        }, {
          key: "findButtonByName",
          value: function findButtonByName(name, buttons) {
            for (var i = 0; i < buttons.length; i++) {
              if (buttons.item(i).name === name) {
                return buttons.item(i);
              }
            }

            return null;
          }
        }]);

        return ClrButtonGroupCommonDirective;
      }();
      /***/

    },

    /***/
    "Lguz":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/drive-type.data.ts ***!
      \*************************************************************************/

    /*! exports provided: DriveType */

    /***/
    function Lguz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriveType", function () {
        return DriveType;
      });
      /* Copyright 2019 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DriveType = /*@__PURE__*/function (DriveType) {
        DriveType[DriveType["HDD"] = 0] = "HDD";
        DriveType[DriveType["FLASH"] = 1] = "FLASH";
        DriveType[DriveType["MARKED_AS_HDD"] = 2] = "MARKED_AS_HDD";
        DriveType[DriveType["MARKED_AS_FLASH"] = 3] = "MARKED_AS_FLASH";
        DriveType[DriveType["CUSTOM"] = 4] = "CUSTOM"; // Indicates that the drive type of the disks is different.

        return DriveType;
      }({});
      /***/

    },

    /***/
    "NHGt":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/select-disks.scss.shim.ngstyle.js ***!
      \**********************************************************************************/

    /*! exports provided: styles */

    /***/
    function NHGt(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.name-column[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L3NlbGVjdC1kaXNrcy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FFOEJHO0VBQ0csZ0NBQUE7QUY1Qk47QUU4Qkc7O0VBR0csZ0NBQUE7QUY3Qk47QUUrQkc7RUFDRyw4QkFBQTtBRjdCTjtBQXBCQTtFQUNHLFlBQUE7QUF1QkgiLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvZGlza21nbXQvc2VsZWN0LWRpc2tzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLm5hbWUtY29sdW1uIHtcbiAgIHdpZHRoOiAxNXJlbTtcbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "S7F7":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/claim-disks-util.ts ***!
      \********************************************************************/

    /*! exports provided: ClaimDisksUtil */

    /***/
    function S7F7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDisksUtil", function () {
        return ClaimDisksUtil;
      });
      /* harmony import */


      var _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/diskmgmt/model/drive-type.data */
      "Lguz");
      /* harmony import */


      var _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/diskmgmt/perspective/disks-group-by-perspective */
      "4ro6");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var ClaimDisksUtil = /*@__PURE__*/function () {
        var ClaimDisksUtil = /*#__PURE__*/function () {
          function ClaimDisksUtil() {
            _classCallCheck(this, ClaimDisksUtil);
          }

          _createClass(ClaimDisksUtil, null, [{
            key: "getLocalizedClaimOption",
            value: function getLocalizedClaimOption(claimOption) {
              switch (claimOption) {
                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForCache:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.claimOption.ClaimForCache");

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForStorage:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.claimOption.ClaimForStorage");

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].VMFS:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.claimOption.VMFS");

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].Custom:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.claimOption.Custom");

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].DoNotClaim:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.claimOption.DoNotClaim");

                default:
                  _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].warn("Invalid claim option");

                  return "";
              }
            }
          }, {
            key: "getClaimOptionIcon",
            value: function getClaimOptionIcon(claimOption) {
              switch (claimOption) {
                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForCache:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].CLAIM_AS_CACHE;

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].ClaimForStorage:
                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].VMFS:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].CLAIM_AS_CAPACITY;

                case _generated_claim_option__WEBPACK_IMPORTED_MODULE_2__["ClaimOption"].DoNotClaim:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].DO_NOT_CLAIM;

                default:
                  return _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].EMPTY_ICON;
              }
            }
          }, {
            key: "getLocalizedDriveType",
            value: function getLocalizedDriveType(driveType) {
              switch (driveType) {
                case _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_0__["DriveType"].HDD:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.nonSsd");

                case _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_0__["DriveType"].FLASH:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.ssd");

                case _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_0__["DriveType"].MARKED_AS_HDD:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.markedAsHdd");

                case _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_0__["DriveType"].MARKED_AS_FLASH:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.markedAsFlash");

                case _component_diskmgmt_model_drive_type_data__WEBPACK_IMPORTED_MODULE_0__["DriveType"].CUSTOM:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.driveType.custom");

                default:
                  _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].warn("Invalid drive type");

                  return "";
              }
            }
          }, {
            key: "changePerspective",
            value: function changePerspective(groupByPerspective, datagrid, hostsInCluster, disksByVendor) {
              switch (groupByPerspective) {
                case _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_VENDOR:
                  datagrid.refreshGrid(disksByVendor.filter(function (vendor) {
                    return vendor.eligibleDisksInDatastoreContext.length;
                  })); // setTimeout fixes ExpressionChangedAfterItHasBeenCheckedError

                  setTimeout(function () {
                    return datagrid.collapseAll();
                  }, 0);
                  break;

                case _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_HOST:
                  datagrid.refreshGrid(hostsInCluster.filter(function (host) {
                    return host.eligibleDisksInDatastoreContext.length;
                  }));
                  datagrid.expandAll();
                  break;
              }
            }
          }, {
            key: "getNameColumnTitle",
            value: function getNameColumnTitle(groupByPerspective) {
              switch (groupByPerspective) {
                case _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_VENDOR:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.diskModelSerialNumber");

                case _component_diskmgmt_perspective_disks_group_by_perspective__WEBPACK_IMPORTED_MODULE_1__["DisksGroupByPerspective"].DISKS_BY_HOST:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.disk.list.name");

                default:
                  _util_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].warn("Invalid perspective: " + groupByPerspective);

                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.na.label");
              }
            }
          }]);

          return ClaimDisksUtil;
        }();

        ClaimDisksUtil.DISKS_PER_DATAGRID_PAGE = 10;
        return ClaimDisksUtil;
      }();
      /***/

    },

    /***/
    "SRn5":
    /*!*****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/create-disk-group.component.ngfactory.js ***!
      \*****************************************************************************************/

    /*! exports provided: RenderType_CreateDiskGroupComponent, View_CreateDiskGroupComponent_0, View_CreateDiskGroupComponent_Host_0, CreateDiskGroupComponentNgFactory */

    /***/
    function SRn5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateDiskGroupComponent", function () {
        return RenderType_CreateDiskGroupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateDiskGroupComponent_0", function () {
        return View_CreateDiskGroupComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateDiskGroupComponent_Host_0", function () {
        return View_CreateDiskGroupComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateDiskGroupComponentNgFactory", function () {
        return CreateDiskGroupComponentNgFactory;
      });
      /* harmony import */


      var _create_disk_group_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-disk-group.scss.shim.ngstyle */
      "zXnO");
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


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _create_disk_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./create-disk-group.component */
      "uJrr");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../generated/disk-management-service */
      "a6dL");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../service/space-efficiency-service */
      "1Ga+");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateDiskGroupComponent = [_create_disk_group_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateDiskGroupComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateDiskGroupComponent,
        data: {}
      });

      function View_CreateDiskGroupComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "witness-disk-group-alert"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"],
          isSmall: [2, "isSmall"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;
          var currVal_1 = false;
          var currVal_2 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_CreateDiskGroupComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 46, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onCacheDiskSelectionChanged(_v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 147456, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 114688, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 114688, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 147456, [[13, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          _ck(_v, 24, 0);

          _ck(_v, 30, 0);

          _ck(_v, 36, 0);

          _ck(_v, 42, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _v.context.$implicit.image;

          _ck(_v, 18, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.name;

          _ck(_v, 21, 0, currVal_10);

          var currVal_11 = true;
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).signpost.length > 0;

          _ck(_v, 23, 0, currVal_11, currVal_12);

          var currVal_13 = _v.context.$implicit.driveTypeLabel;

          _ck(_v, 27, 0, currVal_13);

          var currVal_14 = true;
          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).signpost.length > 0;

          _ck(_v, 29, 0, currVal_14, currVal_15);

          var currVal_16 = _v.context.$implicit.capacity;

          _ck(_v, 33, 0, currVal_16);

          var currVal_17 = true;
          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).signpost.length > 0;

          _ck(_v, 35, 0, currVal_17, currVal_18);

          var currVal_19 = _v.context.$implicit.transportType;

          _ck(_v, 39, 0, currVal_19);

          var currVal_20 = true;
          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).signpost.length > 0;

          _ck(_v, 41, 0, currVal_20, currVal_21);

          var currVal_22 = _v.context.$implicit.diskAdapter;

          _ck(_v, 45, 0, currVal_22);
        });
      }

      function View_CreateDiskGroupComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n         ", "\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.perspectives.indexOf(_v.context.$implicit), "");

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.perspectives.indexOf(_v.context.$implicit), "");

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.perspectives.indexOf(_v.context.$implicit) == _co.selectedPerspective;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _v.context.$implicit;

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_CreateDiskGroupComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 46, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[28, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[30, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[36, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[37, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_7__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_6__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, [[36, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, [[37, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, [[36, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 147456, [[37, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 114688, [[36, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, [[37, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 114688, [[36, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 147456, [[37, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          _ck(_v, 24, 0);

          _ck(_v, 30, 0);

          _ck(_v, 36, 0);

          _ck(_v, 42, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _v.context.$implicit.image;

          _ck(_v, 18, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.name;

          _ck(_v, 21, 0, currVal_10);

          var currVal_11 = true;
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).signpost.length > 0;

          _ck(_v, 23, 0, currVal_11, currVal_12);

          var currVal_13 = _v.context.$implicit.driveTypeLabel;

          _ck(_v, 27, 0, currVal_13);

          var currVal_14 = true;
          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).signpost.length > 0;

          _ck(_v, 29, 0, currVal_14, currVal_15);

          var currVal_16 = _v.context.$implicit.capacity;

          _ck(_v, 33, 0, currVal_16);

          var currVal_17 = true;
          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).signpost.length > 0;

          _ck(_v, 35, 0, currVal_17, currVal_18);

          var currVal_19 = _v.context.$implicit.transportType;

          _ck(_v, 39, 0, currVal_19);

          var currVal_20 = true;
          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).signpost.length > 0;

          _ck(_v, 41, 0, currVal_20, currVal_21);

          var currVal_22 = _v.context.$implicit.diskAdapter;

          _ck(_v, 45, 0, currVal_22);
        });
      }

      function View_CreateDiskGroupComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateDiskGroupComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "h6", [["class", "header-label"], ["id", "selectCacheDiskLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 99, "clr-datagrid", [["id", "cacheDisksDatagrid"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          loading: [0, "loading"],
          singleSelected: [1, "singleSelected"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 16777216, null, null, 10, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](48, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](49, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](61, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](72, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](73, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](84, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](85, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](96, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](97, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateDiskGroupComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, 2, 3, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](107, 1, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 2, "h6", [["class", "header-label"], ["id", "selectCapacityDiskLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](111, null, ["\n   ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](112, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 28, "clr-select-container", [["class", "horizontal-layout label-auto-size"], ["id", "optionList"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, 0, 3, "label", [["for", "perspective-dropdown"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 212992, [[20, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](128, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](129, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 16777216, [["perspectiveDropDown", 1]], 1, 10, "select", [["clrSelect", ""], ["id", "perspective-dropdown"], ["name", "currentPerspective"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.selectedPerspective = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _co.updateCapacityDisks() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateDiskGroupComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 99, "clr-datagrid", [["id", "capacityDisksDatagrid"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], [[null, "clrDgSelectedChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrDgSelectedChange" === en) {
            var pd_0 = (_co.selectedCapacityDisks = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](158, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          loading: [0, "loading"],
          selected: [1, "selected"]
        }, {
          selectedChanged: "clrDgSelectedChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](170, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](171, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 16777216, null, null, 10, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 770048, [[27, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](182, 147456, [[29, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](183, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](184, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](190, 770048, [[27, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 147456, [[29, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](195, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](196, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](202, 770048, [[27, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](206, 147456, [[29, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](207, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](208, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 770048, [[27, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](218, 147456, [[29, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](219, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](220, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](226, 770048, [[27, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](230, 147456, [[29, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](231, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](232, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateDiskGroupComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](236, 409600, [[25, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, 2, 3, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](240, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](242, 1, ["\n      ", "\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.alertMessage;

          _ck(_v, 3, 0, currVal_0);

          var currVal_4 = _co.busy;
          var currVal_5 = _co.selectedCacheDisk;

          _ck(_v, 23, 0, currVal_4, currVal_5);

          var currVal_8 = "name";

          _ck(_v, 43, 0, currVal_8);

          var currVal_12 = "driveTypeLabel";

          _ck(_v, 55, 0, currVal_12);

          var currVal_16 = "capacity";

          _ck(_v, 67, 0, currVal_16);

          var currVal_20 = "transportType";

          _ck(_v, 79, 0, currVal_20);

          var currVal_24 = "diskAdapter";

          _ck(_v, 91, 0, currVal_24);

          var currVal_26 = _co.cacheDisks;

          _ck(_v, 101, 0, currVal_26);

          _ck(_v, 118, 0);

          var currVal_34 = "perspective-dropdown";

          _ck(_v, 127, 0, currVal_34);

          var currVal_45 = "currentPerspective";
          var currVal_46 = !_co.isAllFlashAvailable;
          var currVal_47 = _co.selectedPerspective;

          _ck(_v, 134, 0, currVal_45, currVal_46, currVal_47);

          var currVal_48 = "perspective-dropdown";

          _ck(_v, 137, 0, currVal_48);

          var currVal_49 = _co.perspectives;

          _ck(_v, 140, 0, currVal_49);

          var currVal_52 = _co.busy;
          var currVal_53 = _co.selectedCapacityDisks;

          _ck(_v, 158, 0, currVal_52, currVal_53);

          var currVal_56 = "name";

          _ck(_v, 178, 0, currVal_56);

          var currVal_60 = "driveTypeLabel";

          _ck(_v, 190, 0, currVal_60);

          var currVal_64 = "capacity";

          _ck(_v, 202, 0, currVal_64);

          var currVal_68 = "transportType";

          _ck(_v, 214, 0, currVal_68);

          var currVal_72 = "diskAdapter";

          _ck(_v, 226, 0, currVal_72);

          var currVal_74 = _co.capacityDisks;

          _ck(_v, 236, 0, currVal_74);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.claimDisks.cacheTierInfo"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = true;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).detailService.isOpen;

          _ck(_v, 9, 0, currVal_2, currVal_3);

          var currVal_6 = true;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ariaSort;

          _ck(_v, 39, 0, currVal_6, currVal_7);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 48, 0, _ck(_v, 49, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.name"));

          _ck(_v, 48, 0, currVal_9);

          var currVal_10 = true;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ariaSort;

          _ck(_v, 51, 0, currVal_10, currVal_11);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 60, 0, _ck(_v, 61, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.driveType"));

          _ck(_v, 60, 0, currVal_13);

          var currVal_14 = true;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).ariaSort;

          _ck(_v, 63, 0, currVal_14, currVal_15);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 72, 0, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.capacity"));

          _ck(_v, 72, 0, currVal_17);

          var currVal_18 = true;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ariaSort;

          _ck(_v, 75, 0, currVal_18, currVal_19);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 84, 0, _ck(_v, 85, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.transportType"));

          _ck(_v, 84, 0, currVal_21);

          var currVal_22 = true;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ariaSort;

          _ck(_v, 87, 0, currVal_22, currVal_23);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 96, 0, _ck(_v, 97, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.diskAdapter"));

          _ck(_v, 96, 0, currVal_25);

          var currVal_27 = true;

          _ck(_v, 104, 0, currVal_27);

          var currVal_28 = _co.getDatagridFooterText(_co.cacheDisks);

          _ck(_v, 107, 0, currVal_28);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 111, 0, _ck(_v, 112, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.claimDisks.capacityTierInfo"));

          _ck(_v, 111, 0, currVal_29);

          var currVal_30 = true;
          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).control.disabled;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).addGrid();

          _ck(_v, 114, 0, currVal_30, currVal_31, currVal_32);

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).forAttr;

          _ck(_v, 126, 0, currVal_33);

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 128, 0, _ck(_v, 129, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.claimDisks.filterLabel"));

          _ck(_v, 128, 0, currVal_35);

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassUntouched;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassTouched;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassPristine;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassDirty;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassValid;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassInvalid;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassPending;

          var currVal_43 = true;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).id;

          _ck(_v, 131, 0, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44);

          var currVal_50 = true;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158).detailService.isOpen;

          _ck(_v, 144, 0, currVal_50, currVal_51);

          var currVal_54 = true;

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ariaSort;

          _ck(_v, 174, 0, currVal_54, currVal_55);

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 183, 0, _ck(_v, 184, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.name"));

          _ck(_v, 183, 0, currVal_57);

          var currVal_58 = true;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).ariaSort;

          _ck(_v, 186, 0, currVal_58, currVal_59);

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 195, 0, _ck(_v, 196, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.driveType"));

          _ck(_v, 195, 0, currVal_61);

          var currVal_62 = true;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202).ariaSort;

          _ck(_v, 198, 0, currVal_62, currVal_63);

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 207, 0, _ck(_v, 208, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.capacity"));

          _ck(_v, 207, 0, currVal_65);

          var currVal_66 = true;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).ariaSort;

          _ck(_v, 210, 0, currVal_66, currVal_67);

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 219, 0, _ck(_v, 220, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.transportType"));

          _ck(_v, 219, 0, currVal_69);

          var currVal_70 = true;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).ariaSort;

          _ck(_v, 222, 0, currVal_70, currVal_71);

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 231, 0, _ck(_v, 232, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.diskAdapter"));

          _ck(_v, 231, 0, currVal_73);

          var currVal_75 = true;

          _ck(_v, 239, 0, currVal_75);

          var currVal_76 = _co.getDatagridFooterText(_co.capacityDisks);

          _ck(_v, 242, 0, currVal_76);
        });
      }

      function View_CreateDiskGroupComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-create-disk-group-page", [], null, null, null, View_CreateDiskGroupComponent_0, RenderType_CreateDiskGroupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_disk_group_component__WEBPACK_IMPORTED_MODULE_12__["CreateDiskGroupComponent"], [_generated_disk_management_service__WEBPACK_IMPORTED_MODULE_13__["DiskManagementService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_14__["VsanCapabilityProvider"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_15__["VsanConfigService"], _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_16__["SpaceEfficiencyService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CreateDiskGroupComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-create-disk-group-page", _create_disk_group_component__WEBPACK_IMPORTED_MODULE_12__["CreateDiskGroupComponent"], View_CreateDiskGroupComponent_Host_0, {
        isWitnessHost: "isWitnessHost",
        hostRef: "hostRef",
        clusterRef: "clusterRef"
      }, {
        dataLoaded: "dataLoaded",
        configChanged: "configChanged",
        validateConfig: "validateConfig"
      }, []);
      /***/

    },

    /***/
    "Xbvm":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/action-button/button-group.directive.ts ***!
      \*******************************************************************************/

    /*! exports provided: ButtonGroupDirective */

    /***/
    function Xbvm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonGroupDirective", function () {
        return ButtonGroupDirective;
      });
      /**
       * Attribute directive used to dynamically arrange child buttons, align some horizontally and
       * put the others into the drop-down list, this directive also add title attribute to the buttons.
       * It can only used on clr-button-group and there should be clr-button in the button group.
       * @maximumInlineActions - The maximum value of inline buttons.
       */


      var ButtonGroupDirective = /*@__PURE__*/function () {
        var ButtonGroupDirective = /*#__PURE__*/function () {
          function ButtonGroupDirective(elRef) {
            var _this2 = this;

            _classCallCheck(this, ButtonGroupDirective);

            this.elRef = elRef; // Set the maximum value to 10 to display all buttons inline when there is enough space.

            this._maximumInlineActions = 10;
            this._buttonTitleDirectives = [];

            this.updateButtonTitles = function () {
              var allButtons = _this2.getVisibleButtons().concat(_this2.getInMenuButtons());

              if (!allButtons.length) {
                return;
              } // if there is a rendered button for the directive - update its title.


              _this2._buttonTitleDirectives.forEach(function (titleDirective) {
                allButtons.forEach(function (button) {
                  if (button.getAttribute("name") === titleDirective.host.name) {
                    button.title = titleDirective.title;
                  }
                });
              });
            };
          }

          _createClass(ButtonGroupDirective, [{
            key: "maximumInlineActions",
            set: function set(value) {
              if (!!value) {
                this._maximumInlineActions = value;
              }
            }
          }, {
            key: "buttons",
            set: function set(value) {
              var _this3 = this;

              this._buttonTitleDirectives = value;

              this._buttonTitleDirectives.forEach(function (titleDirective) {
                // Update button title when its title in directive changes.
                titleDirective.titleChangeEvent.subscribe(function () {
                  setTimeout(_this3.updateButtonTitles);
                });
              }); // when action buttons with directive are changed (added / removed) some of them may go to the menu with
              // additional actions. There is no other way found to handle toggle menu event, but click on the toggle button.


              this.subscribeToggleButtonClick();
            }
          }, {
            key: "clrButtons",
            set: function set(btns) {
              this._btns = btns;
              this.updateInMenuButtons();
            }
          }, {
            key: "updateInMenuButtons",
            value: function updateInMenuButtons() {
              var _this4 = this;

              var groupWithMenu = this._btns.length > this._maximumInlineActions;

              this._btns.forEach(function (btn, index) {
                if (groupWithMenu) {
                  // When the number of buttons exceeds the maximum and the button overflows, place the button in the menu.
                  btn.inMenu = index >= _this4._maximumInlineActions - 1;
                } else {
                  btn.inMenu = false;
                }
              });
            }
          }, {
            key: "subscribeToggleButtonClick",
            value: function subscribeToggleButtonClick() {
              var _this5 = this;

              // If there is menu with additional buttons, find the toggle button and update button names on click.
              setTimeout(function () {
                var toggleButton = _this5.getToggleButton(); // if there is a toggle button set function to handle the click event only once.


                if (toggleButton && !toggleButton.onclick) {
                  toggleButton.onclick = _this5.updateButtonTitles;
                }
              });
            } // the buttons are visible buttons in button group, toggle menu button

          }, {
            key: "getVisibleButtons",
            value: function getVisibleButtons() {
              return Array.from(this.elRef.nativeElement.querySelectorAll(ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR));
            } // inMenu buttons are rendered outside of the elRef, get them directly from the document

          }, {
            key: "getInMenuButtons",
            value: function getInMenuButtons() {
              return Array.from(this.elRef.nativeElement.ownerDocument.querySelectorAll(ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR));
            }
          }, {
            key: "getToggleButton",
            value: function getToggleButton() {
              return this.elRef.nativeElement.querySelector(ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR);
            }
          }]);

          return ButtonGroupDirective;
        }();

        ButtonGroupDirective.TOGGLE_MENU_BUTTON_SELECTOR = "button.btn.dropdown-toggle";
        ButtonGroupDirective.VISIBLE_BUTTON_ELEMENTS_SELECTOR = "button";
        ButtonGroupDirective.IN_MENU_BUTTON_ELEMENTS_SELECTOR = "div.clr-button-group-menu > button";
        return ButtonGroupDirective;
      }();
      /***/

    },

    /***/
    "cmhn":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/disk-management/views/pipes/transport-type.pipe.ts ***!
      \*************************************************************************/

    /*! exports provided: TransportTypePipe */

    /***/
    function cmhn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransportTypePipe", function () {
        return TransportTypePipe;
      });
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");

      var TransportTypePipe = /*#__PURE__*/function () {
        function TransportTypePipe() {
          _classCallCheck(this, TransportTypePipe);
        }

        _createClass(TransportTypePipe, [{
          key: "transform",
          value: function transform(value) {
            return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_0__["DiskMgmtDiskUtil"].getTransportTypeText(value);
          }
        }], [{
          key: "instance",
          value: function instance() {
            if (!this._instance) {
              this._instance = new TransportTypePipe();
            }

            return this._instance;
          }
        }]);

        return TransportTypePipe;
      }();
      /***/

    },

    /***/
    "jNlN":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/vsan-base-list-item.data.ts ***!
      \**********************************************************************************/

    /*! exports provided: VsanBaseListItem */

    /***/
    function jNlN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanBaseListItem", function () {
        return VsanBaseListItem;
      });
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/diskmgmt/claim-disks-util */
      "S7F7");
      /* Copyright 2017-2019 VMware, Inc. All rights reserved. -- VMware Confidential */


      var VsanBaseListItem = /*#__PURE__*/function () {
        function VsanBaseListItem() {
          _classCallCheck(this, VsanBaseListItem);

          /* Whether the item is a root.*/
          this.isRoot = true;
          this._claimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"].DoNotClaim;
          this._capacity = "";
        }

        _createClass(VsanBaseListItem, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(newName) {
            this._name = newName;
          }
          /**
           * Gets the claim option for the root item
           */

        }, {
          key: "claimOption",
          get: function get() {
            return this._claimOption;
          },
          set: function set(newValue) {
            this._claimOption = newValue;
          }
          /**
           * Returns the icon corresponding to the current claim option
           */

        }, {
          key: "claimOptionIcon",
          get: function get() {
            if (this.claimOption) {
              return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_2__["ClaimDisksUtil"].getClaimOptionIcon(_generated_claim_option__WEBPACK_IMPORTED_MODULE_0__["ClaimOption"][this.claimOption.toString()]);
            }

            return _util_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].EMPTY_ICON;
          }
        }, {
          key: "possibleClaimOptions",
          get: function get() {
            return null;
          }
        }, {
          key: "image",
          get: function get() {
            return "";
          }
          /**
           * Total capacity of the item.
           */

        }, {
          key: "capacity",
          get: function get() {
            return this._capacity;
          }
          /**
           * Total capacity of the item.
           */
          ,
          set: function set(newValue) {
            this._capacity = newValue;
          }
          /**
           * Number representation of  the capacity.
           */

        }, {
          key: "capacityNum",
          get: function get() {
            return 0;
          }
          /**
           * Children's drive type.
           */

        }, {
          key: "driveTypeLabel",
          get: function get() {
            return "";
          }
          /**
           * The hostName of the item
           */

        }, {
          key: "hostName",
          get: function get() {
            return "";
          }
          /**
           * Is the item flash-based
           */

        }, {
          key: "isFlash",
          get: function get() {
            return false;
          }
          /**
           * Is the item hdd-based
           */

        }, {
          key: "isHdd",
          get: function get() {
            return false;
          }
          /**
           * Flag denoting if the item is marked as Flash or not
           */

        }, {
          key: "markedAsFlash",
          get: function get() {
            return this.isFlash && !this.isHdd;
          },
          set: function set(newValue) {// Don't do anything here
          }
        }]);

        return VsanBaseListItem;
      }();
      /***/

    },

    /***/
    "raSY":
    /*!*****************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/model/vsan-disk-list-item.ts ***!
      \*****************************************************************************/

    /*! exports provided: VsanDiskListItem */

    /***/
    function raSY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanDiskListItem", function () {
        return VsanDiskListItem;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/claim-option */
      "WfVG");
      /* harmony import */


      var _util_vsan_disk_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-disk-util */
      "YzqT");
      /* harmony import */


      var _vsan_base_list_item_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vsan-base-list-item.data */
      "jNlN");
      /* harmony import */


      var _drive_type_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./drive-type.data */
      "Lguz");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/disk-mgmt-disk.util */
      "EW68");
      /* harmony import */


      var _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @component/diskmgmt/claim-disks-util */
      "S7F7");

      var VsanDiskListItem = /*#__PURE__*/function (_vsan_base_list_item_) {
        _inherits(VsanDiskListItem, _vsan_base_list_item_);

        var _super = _createSuper(VsanDiskListItem);

        function VsanDiskListItem(data, useRecommendedClaimOption) {
          var _this6;

          var isAllFlashAvailable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          _classCallCheck(this, VsanDiskListItem);

          _this6 = _super.call(this);
          /* vSAN File System Version of the disk. Applicable only for disks in use. */

          _this6.fileSystemVersion = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.na.label");
          /**
           * Flag indicating whether there is an error on the disk group's SSD disk.
           */

          _this6.hasErrorOnSsd = false;

          if (!data.disk) {
            return _possibleConstructorReturn(_this6);
          }

          _this6.vsanUuid = data.vsanUuid;
          _this6.isRoot = false;
          _this6._rawDiskData = data;
          _this6._disk = data.disk;
          _this6.isCacheDisk = data.isCacheDisk;
          _this6._isInDiskGroup = !!data.diskGroupUuid;
          _this6.isVsanMaxCompatible = data.isVsanMaxCompatible;
          _this6._diskStatus = data.diskStatus;
          _this6.markedAsFlash = _this6.isFlash;
          _this6._possibleClaimOptions = data.possibleClaimOptions;
          _this6._possibleClaimOptionsIfMarkedAsOppositeType = data.possibleClaimOptionsIfMarkedAsOppositeType;
          _this6.claimOption = _this6.getInitialClaimOption(data, useRecommendedClaimOption, isAllFlashAvailable);
          return _this6;
        }
        /**
         * Gets disk's name
         */


        _createClass(VsanDiskListItem, [{
          key: "name",
          get: function get() {
            if (this._name) {
              return this._name;
            }

            return this._name = _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_6__["DiskMgmtDiskUtil"].getScsiDiskName(this._disk);
          },
          set: function set(newName) {
            this._name = newName;
          }
          /**
           * Disk's capacity.
           */

        }, {
          key: "capacity",
          get: function get() {
            if (this._capacity) {
              return this._capacity;
            }

            return this._capacity = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(this.capacityNum);
          },
          set: function set(newValue) {
            this._capacity = newValue;
          }
        }, {
          key: "capacityNum",
          get: function get() {
            return _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_5__["DiskMgmtUtil"].lbaToBytes(this._disk.capacity);
          }
        }, {
          key: "initialDriveType",
          get: function get() {
            return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_7__["ClaimDisksUtil"].getLocalizedDriveType(this.isFlash ? _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].FLASH : _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].HDD);
          }
          /**
           * Disk's drive type label.
           */

        }, {
          key: "driveTypeLabel",
          get: function get() {
            return _component_diskmgmt_claim_disks_util__WEBPACK_IMPORTED_MODULE_7__["ClaimDisksUtil"].getLocalizedDriveType(this.driveType);
          }
          /**
           * Disk's drive type.
           */

        }, {
          key: "driveType",
          get: function get() {
            if (this.isFlash) {
              return !this.markedAsFlash ? _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].MARKED_AS_HDD : _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].FLASH;
            } else {
              return this.markedAsFlash ? _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].MARKED_AS_FLASH : _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].HDD;
            }
          }
          /**
           * Return possible drive types of a disk.
           */

        }, {
          key: "possibleDriveTypes",
          get: function get() {
            return this.isFlash ? [_drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].FLASH, _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].MARKED_AS_HDD] : [_drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].HDD, _drive_type_data__WEBPACK_IMPORTED_MODULE_4__["DriveType"].MARKED_AS_FLASH];
          }
          /**
           * Disk's transport type.
           */

        }, {
          key: "transportType",
          get: function get() {
            if (this._transportType) {
              return this._transportType;
            }

            this._transportType = "";

            if (!this.transport) {
              return this._transportType;
            }

            var transportArray = this._transport;

            for (var i = 0; i < transportArray.length; i++) {
              var transportElement = transportArray[i];

              if (transportElement) {
                this._transportType = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.disk.list.transport." + transportElement);
              }
            }

            if (!this._transportType.length) {
              this._transportType = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.disk.list.transport.unknownTransport");
            }

            return this._transportType;
          }
        }, {
          key: "hostName",
          get: function get() {
            return this._hostName;
          },
          set: function set(newHostName) {
            this._hostName = newHostName;
          }
          /**
           * Is the item flash-based
           */

        }, {
          key: "isFlash",
          get: function get() {
            return !!this.disk.ssd;
          }
          /**
           * Is the item hdd-based
           */

        }, {
          key: "isHdd",
          get: function get() {
            return !this.isFlash;
          }
        }, {
          key: "markedAsFlash",
          get: function get() {
            return this._markedAsFlash;
          },
          set: function set(newValue) {
            if (this._markedAsFlash !== newValue) {
              if (_util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_6__["DiskMgmtDiskUtil"].isClaimedForVsan(this.claimOption)) {
                this.claimOption = _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim;
              }

              this._markedAsFlash = newValue;
            }
          }
          /**
           * Gets the disk item's image.
           */

        }, {
          key: "image",
          get: function get() {
            return _util_vsan_disk_util__WEBPACK_IMPORTED_MODULE_2__["VsanDiskUtil"].getDiskImage(this.hasError(), this.isFlash);
          }
        }, {
          key: "possibleClaimOptions",
          get: function get() {
            var claimOptions = this.markedAsFlash === this.isFlash ? this._possibleClaimOptions : this._possibleClaimOptionsIfMarkedAsOppositeType;

            if (!claimOptions) {
              return [];
            }

            return claimOptions;
          },
          set: function set(values) {
            this._possibleClaimOptions = values;
          }
        }, {
          key: "transport",
          get: function get() {
            return this._transport;
          }
          /**
           * Set disk's transport
           */
          ,
          set: function set(transport) {
            this._transport = transport;
          }
          /**
           * Gets a scsi disk
           */

        }, {
          key: "disk",
          get: function get() {
            return this._disk;
          }
          /**
           * Gets vsan uuid
           */

        }, {
          key: "uuid",
          get: function get() {
            return this._rawDiskData.vsanUuid;
          }
          /**
           * Gets disk's uuid.
           */

        }, {
          key: "diskUuid",
          get: function get() {
            return this._disk.uuid;
          }
          /**
           * Gets the issues for the current disk.
           */

        }, {
          key: "issue",
          get: function get() {
            if (this._issue) {
              return this._issue;
            }

            this._issue = _util_vsan_disk_util__WEBPACK_IMPORTED_MODULE_2__["VsanDiskUtil"].getVsanPhysicalDiskIssue(this._rawDiskData);
            return this._issue;
          }
          /**
           * Disk's physical location.
           */

        }, {
          key: "physicalLocation",
          get: function get() {
            if (this._physicalLocation) {
              return this._physicalLocation;
            }

            this._physicalLocation = _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_6__["DiskMgmtDiskUtil"].getPhysicalLocation(this._disk.physicalLocation);
            return this._physicalLocation;
          }
          /**
           * Gets if the item is selected.
           */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /**
           * Set item to selected state.
           */
          ,
          set: function set(value) {
            this._selected = value;
          }
          /**
           * Get the disk health status of the disk.
           */

        }, {
          key: "healthStatus",
          get: function get() {
            if (!this.isFlash && this.hasErrorOnSsd) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.disk.list.healthStatus.ssdDown");
            }

            return _util_disk_mgmt_disk_util__WEBPACK_IMPORTED_MODULE_6__["DiskMgmtDiskUtil"].getHealth(this._diskStatus);
          }
          /**
           * Return true if there is a vsan issue on the disk
           */

        }, {
          key: "hasVsanIssue",
          get: function get() {
            return this.issue !== _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.na.label");
          }
          /**
           * Combines the issue and disk health properties of the
           * disk into single error string.
           */

        }, {
          key: "aggregatedIssue",
          get: function get() {
            var diskHealthStatus = this.healthStatus;

            if (!this.isDiskHealthy && this.hasVsanIssue) {
              return [this.issue, diskHealthStatus].join("; ");
            }

            if (this.hasVsanIssue) {
              return this.issue;
            }

            return diskHealthStatus;
          }
          /**
           * Gets the Vendor Model, Capacity information of the disk
           */

        }, {
          key: "model",
          get: function get() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.disk.list.diskModelSerialNumber.format", this.vendor, this.diskModel, this.capacity);
          }
          /**
           * Gets the role of the disk in the current disk group if any.
           */

        }, {
          key: "role",
          get: function get() {
            if (this._isInDiskGroup) {
              return this.isCacheDisk ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.disk.list.diskRole.cache") : _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.disk.list.diskRole.capacity");
            }

            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.na.label");
          }
        }, {
          key: "vendor",
          get: function get() {
            return this.disk.vendor && this.disk.vendor.trim();
          }
        }, {
          key: "diskModel",
          get: function get() {
            return this.disk.model && this.disk.model.trim();
          }
        }, {
          key: "hasError",
          value: function hasError() {
            return !this.isDiskHealthy || this.hasVsanIssue;
          }
        }, {
          key: "isDiskHealthy",
          get: function get() {
            return this._diskStatus && this._diskStatus.isDiskHealthy;
          }
        }, {
          key: "getInitialClaimOption",
          value: function getInitialClaimOption(diskData, useRecommendedClaimOption, isAllFlashAvailable) {
            if (!useRecommendedClaimOption) {
              return _generated_claim_option__WEBPACK_IMPORTED_MODULE_1__["ClaimOption"].DoNotClaim;
            }

            if (isAllFlashAvailable) {
              return diskData.recommendedAllFlashClaimOption;
            } else {
              return diskData.recommendedHybridClaimOption;
            }
          }
        }]);

        return VsanDiskListItem;
      }(_vsan_base_list_item_data__WEBPACK_IMPORTED_MODULE_3__["VsanBaseListItem"]);
      /***/

    },

    /***/
    "uJrr":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/create-disk-group.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CapacityType, CreateDiskGroupComponent */

    /***/
    function uJrr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacityType", function () {
        return CapacityType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateDiskGroupComponent", function () {
        return CreateDiskGroupComponent;
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


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_vsan_disk_mapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/vsan-disk-mapping */
      "6B2Y");
      /* harmony import */


      var _component_diskmgmt_model_vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/diskmgmt/model/vsan-disk-list-item */
      "raSY");
      /* harmony import */


      var _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/space-efficiency-config */
      "j0c3");
      /* harmony import */


      var _service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @service/flow/loading-indicator.decorator */
      "2BwX");
      /* harmony import */


      var _service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @service/flow/loader.decorator */
      "8V30");
      /* harmony import */


      var _service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @service/flow/error-message.decorator */
      "puuD");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var CapacityType = /*@__PURE__*/function (CapacityType) {
        CapacityType[CapacityType["HDD"] = 0] = "HDD";
        CapacityType[CapacityType["FLASH"] = 1] = "FLASH";
        return CapacityType;
      }({});

      var CreateDiskGroupComponent = /*@__PURE__*/function () {
        var CreateDiskGroupComponent = /*#__PURE__*/function () {
          function CreateDiskGroupComponent(diskManagementService, capabilityProvider, vsanConfigService, spaceEfficiencyService) {
            _classCallCheck(this, CreateDiskGroupComponent);

            this.diskManagementService = diskManagementService;
            this.capabilityProvider = capabilityProvider;
            this.vsanConfigService = vsanConfigService;
            this.spaceEfficiencyService = spaceEfficiencyService;
            this.dataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.configChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.validateConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.cacheDisks = [];
            this.capacityDisks = [];
            this.capacityHdds = [];
            this.capacityFlashDisks = [];
            this.capacityFlashDisksToShow = [];
            this.isAllFlashAvailable = false;
            this.spaceEfficiencyConfig = _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_5__["SpaceEfficiencyConfig"].NONE;
            this.perspectives = [_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.claimDisks.hdd"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.claimDisks.flash")];
            this._selectedCapacityDisks = [];
          }

          _createClass(CreateDiskGroupComponent, [{
            key: "selectedCapacityDisks",
            get: function get() {
              return this._selectedCapacityDisks;
            },
            set: function set(values) {
              this._selectedCapacityDisks = values;
              this.configChanged.emit(this.getDiskMapping());
              this.validate();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.reset();
                        _context2.next = 3;
                        return this.requestData();

                      case 3:
                        data = _context2.sent;
                        this.onDisksDataRetrieved(data);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "reset",
            value: function reset() {
              this.alertMessage = null;
              this.selectedCacheDisk = null;
              this.selectedCapacityDisks = [];
              this.cacheDisks = [];
              this.capacityHdds = [];
              this.capacityFlashDisks = [];
              this.capacityFlashDisksToShow = [];
            }
          }, {
            key: "requestData",
            value: function requestData() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var promises;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        promises = [];
                        promises.push(this.capabilityProvider.getIsAllFlashSupportedOnHost(this.hostRef));
                        promises.push(this.diskManagementService.getEligibleDisks(this.hostRef)); // Only request this, when the current host is not a witness

                        if (!this.isWitnessHost) {
                          promises.push(this.vsanConfigService.getSpaceEfficiencyStatus(this.clusterRef));
                        }

                        return _context3.abrupt("return", Promise.all(promises));

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "onDisksDataRetrieved",
            value: function onDisksDataRetrieved(result) {
              this.isAllFlashAvailable = result[0];
              var eligibleDisks = result[1];

              var _iterator = _createForOfIteratorHelper(eligibleDisks),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var diskData = _step.value;

                  // if disk is flash
                  if (diskData.disk.ssd) {
                    this.cacheDisks.push(this.createVsanDiskListItem(diskData)); // Populate capacity flash disks only if all-flash is supported

                    if (this.isAllFlashAvailable) {
                      this.capacityFlashDisks.push(this.createVsanDiskListItem(diskData));
                      this.capacityFlashDisksToShow.push(this.createVsanDiskListItem(diskData));
                    }
                  } else {
                    this.capacityHdds.push(this.createVsanDiskListItem(diskData));
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!this.isWitnessHost) {
                this.spaceEfficiencyConfig = result[2];
              }

              this.updatePerspective();
              this.dataLoaded.emit();
            }
          }, {
            key: "createVsanDiskListItem",
            value: function createVsanDiskListItem(diskData) {
              return new _component_diskmgmt_model_vsan_disk_list_item__WEBPACK_IMPORTED_MODULE_4__["VsanDiskListItem"](diskData, CreateDiskGroupComponent.USE_RECOMMENDED_CLAIM_OPTIONS);
            }
          }, {
            key: "updatePerspective",
            value: function updatePerspective() {
              if (this.isAllFlashAvailable) {
                this.selectedPerspective = this.capacityHdds.length < 1 ? CapacityType.FLASH : CapacityType.HDD;
              } else {
                this.selectedPerspective = CapacityType.HDD;
              }

              this.updateCapacityDisks();
            }
          }, {
            key: "updateCapacityDisks",
            value: function updateCapacityDisks() {
              // Note: use "==" here as the select's value is a string "0"/"1", which is not matching the enum if using ===
              // tslint:disable-next-line
              this.capacityDisks = this.selectedPerspective == CapacityType.FLASH ? this.capacityFlashDisksToShow : this.capacityHdds;
              this.validate();
              this.configChanged.emit(this.getDiskMapping());
            }
          }, {
            key: "validate",
            value: function validate() {
              var errors = [];

              if (this.selectedCacheDisk == null) {
                errors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.dialog.createDiskGroup.error.selectSsd"));
              }

              if (this.selectedCapacityDisks.length < 1) {
                errors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.dialog.createDiskGroup.error.selectDisks"));
              }

              if (this.spaceEfficiencyService.isOnlyAllFlashSupportedForClaimingDisks(this.spaceEfficiencyConfig) && !this.isWitnessHost && this.selectedCapacityDisks.some(function (storageDisk) {
                return !storageDisk.disk.ssd;
              })) {
                errors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.dialog.semiAutoClaimDialog.confError.dataEfficiencyWithHdds", this.spaceEfficiencyService.toLabel(this.spaceEfficiencyConfig)));
              }

              this.validateConfig.emit(errors);
            }
          }, {
            key: "getDiskMapping",
            value: function getDiskMapping() {
              if (!this.selectedCacheDisk || !this.selectedCapacityDisks) {
                return null;
              }

              var capacityDisks = [];

              var _iterator2 = _createForOfIteratorHelper(this.selectedCapacityDisks),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var diskItem = _step2.value;
                  capacityDisks.push(diskItem.disk);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return _generated_vsan_disk_mapping__WEBPACK_IMPORTED_MODULE_3__["VsanDiskMapping"].Factory.create(this.selectedCacheDisk.disk, capacityDisks);
            }
          }, {
            key: "getDatagridFooterText",
            value: function getDatagridFooterText(items) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getDatagridFooterLabel(items);
            }
          }, {
            key: "onCacheDiskSelectionChanged",
            value: function onCacheDiskSelectionChanged(selectedDisk) {
              this.selectedCacheDisk = selectedDisk; // filter the capacity flash disks

              this.capacityFlashDisksToShow = this.capacityFlashDisks.filter(function (item) {
                return item.disk !== selectedDisk.disk;
              });
              this.updateCapacityDisks();
            }
          }]);

          return CreateDiskGroupComponent;
        }();

        CreateDiskGroupComponent.USE_RECOMMENDED_CLAIM_OPTIONS = false;
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loading_indicator_decorator__WEBPACK_IMPORTED_MODULE_6__["LoadingIndicator"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateDiskGroupComponent.prototype, "busy", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_error_message_decorator__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CreateDiskGroupComponent.prototype, "alertMessage", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_service_flow_loader_decorator__WEBPACK_IMPORTED_MODULE_7__["Loader"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)], CreateDiskGroupComponent.prototype, "ngOnInit", null);
        return CreateDiskGroupComponent;
      }();
      /***/

    },

    /***/
    "unWr":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/select-disks.component.ngfactory.js ***!
      \************************************************************************************/

    /*! exports provided: RenderType_SelectDisksComponent, View_SelectDisksComponent_0, View_SelectDisksComponent_Host_0, SelectDisksComponentNgFactory */

    /***/
    function unWr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SelectDisksComponent", function () {
        return RenderType_SelectDisksComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SelectDisksComponent_0", function () {
        return View_SelectDisksComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SelectDisksComponent_Host_0", function () {
        return View_SelectDisksComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDisksComponentNgFactory", function () {
        return SelectDisksComponentNgFactory;
      });
      /* harmony import */


      var _select_disks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-disks.scss.shim.ngstyle */
      "NHGt");
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


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../cell/icon-item.component.ngfactory */
      "ErWV");
      /* harmony import */


      var _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../cell/icon-item.component */
      "yJ+k");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directive/show-title/show-title.directive */
      "XpuD");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _pipe_disk_type_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../pipe/disk-type.pipe */
      "G/TU");
      /* harmony import */


      var _pipe_FileSizePipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../pipe/FileSizePipe */
      "96Ie");
      /* harmony import */


      var _disk_management_views_pipes_transport_type_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../disk-management/views/pipes/transport-type.pipe */
      "cmhn");
      /* harmony import */


      var _select_disks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./select-disks.component */
      "1pCA");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../generated/disk-management-service */
      "a6dL");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SelectDisksComponent = [_select_disks_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SelectDisksComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SelectDisksComponent,
        data: {}
      });

      function View_SelectDisksComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-validation", [], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alert: [0, "alert"],
          allowClose: [1, "allowClose"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;
          var currVal_1 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_SelectDisksComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_2 = "isVsanMaxCompatible";

          _ck(_v, 4, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaSort;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.disk.list.isVsanMaxCompatible"));

          _ck(_v, 9, 0, currVal_3);
        });
      }

      function View_SelectDisksComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "vsan-icon-item", [], null, null, null, _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_IconItemComponent_0"], _cell_icon_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_IconItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _cell_icon_item_component__WEBPACK_IMPORTED_MODULE_8__["IconItemComponent"], [], {
          label: [0, "label"],
          iconClass: [1, "iconClass"],
          shape: [2, "shape"],
          isIconSolid: [3, "isIconSolid"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 1, 0);

          var currVal_2 = _co.getIsVsanMaxCompatibleLabel(_v.parent.context.$implicit);

          var currVal_3 = _co.Icon.clrIconShapeClassMap[_co.getIsVsanMaxCompatibleIconShape(_v.parent.context.$implicit)];

          var currVal_4 = _co.getIsVsanMaxCompatibleIconShape(_v.parent.context.$implicit);

          var currVal_5 = true;

          _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).signpost.length > 0;

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_SelectDisksComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 52, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 10, "clr-dg-cell", [["role", "gridcell"], ["vsan-show-title", ""]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null], [4, "overflow", null], [4, "text-overflow", null], [4, "white-space", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4407296, null, 0, _directive_show_title_show_title_directive__WEBPACK_IMPORTED_MODULE_10__["ShowTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_11__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, 0, ["\n         ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_SelectDisksComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 16777216, null, 2, 5, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](31, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 16777216, null, 2, 5, "clr-dg-cell", [["class", "right-align-cell"], ["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](38, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 16777216, null, 2, 5, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](44, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](45, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 114688, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](51, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          _ck(_v, 16, 0);

          var currVal_11 = _co.isVsanMaxEnabled;

          _ck(_v, 24, 0, currVal_11);

          _ck(_v, 27, 0);

          _ck(_v, 34, 0);

          _ck(_v, 41, 0);

          _ck(_v, 48, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;
          var currVal_6 = "hidden";
          var currVal_7 = "ellipsis";
          var currVal_8 = "nowrap";

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _co.getIcon(_v.context.$implicit);

          _ck(_v, 18, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.name;

          _ck(_v, 21, 0, currVal_10);

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).signpost.length > 0;

          _ck(_v, 26, 0, currVal_12, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _ck(_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.getDriveType(_v.context.$implicit)));

          _ck(_v, 30, 0, currVal_14);

          var currVal_15 = true;
          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).signpost.length > 0;

          _ck(_v, 33, 0, currVal_15, currVal_16);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _ck(_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 2), _v.context.$implicit.capacity.total));

          _ck(_v, 37, 0, currVal_17);

          var currVal_18 = true;
          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).signpost.length > 0;

          _ck(_v, 40, 0, currVal_18, currVal_19);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 44, 0, _ck(_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 3), _v.context.$implicit.transportType));

          _ck(_v, 44, 0, currVal_20);

          var currVal_21 = true;
          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).signpost.length > 0;

          _ck(_v, 47, 0, currVal_21, currVal_22);

          var currVal_23 = _v.context.$implicit.diskAdapter;

          _ck(_v, 51, 0, currVal_23);
        });
      }

      function View_SelectDisksComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.datagrid.item", _co.eligibleDisks.length));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SelectDisksComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.datagrid.items", _co.eligibleDisks.length));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SelectDisksComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "vsan-max-disk-selection-warning"]], null, null, null, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = "warning";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.dialog.semiAutoClaimDialog.warning.vsanMaxIncompatibleDisks"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_SelectDisksComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_disk_type_pipe__WEBPACK_IMPORTED_MODULE_13__["DiskTypePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_FileSizePipe__WEBPACK_IMPORTED_MODULE_14__["FileSizePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _disk_management_views_pipes_transport_type_pipe__WEBPACK_IMPORTED_MODULE_15__["TransportTypePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectDisksComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 108, "clr-datagrid", [["id", "disksDatagrid"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], [[null, "clrDgSelectedChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrDgSelectedChange" === en) {
            var pd_0 = (_co.selectedDisks = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("clrDgSelectedChange" === en) {
            var pd_1 = _co.diskSelectionChange() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          loading: [0, "loading"],
          selected: [1, "selected"]
        }, {
          selectedChanged: "clrDgSelectedChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 16777216, null, null, 10, "clr-dg-column", [["class", "name-column"], ["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](48, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectDisksComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](62, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](63, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](74, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](75, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](86, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](87, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](98, 1, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](99, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectDisksComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, 2, 9, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_SelectDisksComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_SelectDisksComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SelectDisksComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.errorMessage;

          _ck(_v, 6, 0, currVal_0);

          var currVal_3 = _co.busy;
          var currVal_4 = _co.selectedDisks;

          _ck(_v, 22, 0, currVal_3, currVal_4);

          var currVal_7 = "name";

          _ck(_v, 42, 0, currVal_7);

          var currVal_9 = _co.isVsanMaxEnabled;

          _ck(_v, 51, 0, currVal_9);

          _ck(_v, 57, 0);

          var currVal_15 = "capacity";

          _ck(_v, 69, 0, currVal_15);

          var currVal_19 = "transportType";

          _ck(_v, 81, 0, currVal_19);

          var currVal_23 = "diskAdapter";

          _ck(_v, 93, 0, currVal_23);

          var currVal_25 = _co.eligibleDisks;

          _ck(_v, 103, 0, currVal_25);

          var currVal_27 = (_co.eligibleDisks == null ? null : _co.eligibleDisks.length) === 1;

          _ck(_v, 111, 0, currVal_27);

          var currVal_28 = (_co.eligibleDisks == null ? null : _co.eligibleDisks.length) > 1;

          _ck(_v, 114, 0, currVal_28);

          var currVal_29 = _co.hasVsanMaxWarning;

          _ck(_v, 119, 0, currVal_29);
        }, function (_ck, _v) {
          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).detailService.isOpen;

          _ck(_v, 8, 0, currVal_1, currVal_2);

          var currVal_5 = true;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ariaSort;

          _ck(_v, 38, 0, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 47, 0, _ck(_v, 48, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.name"));

          _ck(_v, 47, 0, currVal_8);

          var currVal_10 = true;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).ariaSort;

          _ck(_v, 53, 0, currVal_10, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 62, 0, _ck(_v, 63, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.driveType"));

          _ck(_v, 62, 0, currVal_12);

          var currVal_13 = true;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).ariaSort;

          _ck(_v, 65, 0, currVal_13, currVal_14);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 74, 0, _ck(_v, 75, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.capacity"));

          _ck(_v, 74, 0, currVal_16);

          var currVal_17 = true;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ariaSort;

          _ck(_v, 77, 0, currVal_17, currVal_18);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 86, 0, _ck(_v, 87, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.transportType"));

          _ck(_v, 86, 0, currVal_20);

          var currVal_21 = true;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).ariaSort;

          _ck(_v, 89, 0, currVal_21, currVal_22);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 98, 0, _ck(_v, 99, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.disk.list.diskAdapter"));

          _ck(_v, 98, 0, currVal_24);

          var currVal_26 = true;

          _ck(_v, 106, 0, currVal_26);
        });
      }

      function View_SelectDisksComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-select-disks", [], null, null, null, View_SelectDisksComponent_0, RenderType_SelectDisksComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _select_disks_component__WEBPACK_IMPORTED_MODULE_16__["SelectDisksComponent"], [_generated_disk_management_service__WEBPACK_IMPORTED_MODULE_17__["DiskManagementService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var SelectDisksComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-select-disks", _select_disks_component__WEBPACK_IMPORTED_MODULE_16__["SelectDisksComponent"], View_SelectDisksComponent_Host_0, {
        clusterRef: "clusterRef",
        hostRef: "hostRef",
        isVsanMaxEnabled: "isVsanMaxEnabled",
        isAllFlashDiskGroup: "isAllFlashDiskGroup"
      }, {
        selectedDisksChange: "selectedDisksChange",
        disksLoaded: "disksLoaded"
      }, []);
      /***/

    },

    /***/
    "zXnO":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/common/component/diskmgmt/create-disk-group.scss.shim.ngstyle.js ***!
      \***************************************************************************************/

    /*! exports provided: styles */

    /***/
    function zXnO(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.header-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n#optionList[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  width: calc(40%);\n}\n.name-column[_ngcontent-%COMP%] {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2Rpc2ttZ210L2NyZWF0ZS1kaXNrLWdyb3VwLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMR0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBY0g7QUU4Qkc7RUFDRyxnQ0FBQTtBRjVCTjtBRThCRzs7RUFHRyxnQ0FBQTtBRjdCTjtBRStCRztFQUNHLDhCQUFBO0FGN0JOO0FBcEJBO0VBQ0csZ0JHMkgwQjtBSHBHN0I7QUFwQkE7RUFDRyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBdUJIO0FBcEJBO0VBQ0csWUFBQTtBQXVCSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC9kaXNrbWdtdC9jcmVhdGUtZGlzay1ncm91cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBAaW5jbHVkZSBjaGlsZC1ib3R0b20tc3BhY2luZztcbn1cblxuLmhlYWRlci1sYWJlbCB7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0O1xufVxuXG4jb3B0aW9uTGlzdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG4gICB3aWR0aDogY2FsYyg0MCUpO1xufVxuXG4ubmFtZS1jb2x1bW4ge1xuICAgd2lkdGg6IDI1MHB4O1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=30-es5.js.map