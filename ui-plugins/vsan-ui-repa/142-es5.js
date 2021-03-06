(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142], {
    /***/
    "4OfF":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/cluster/configure/action/disable-vsan/turn-off-vsan.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TurnOffVsanComponent */

    /***/
    function OfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnOffVsanComponent", function () {
        return TurnOffVsanComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_status_updates_vsan_status_change_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/status-updates/vsan-status-change.data */
      "nKbY");

      var TurnOffVsanComponent = /*#__PURE__*/function () {
        function TurnOffVsanComponent(configureVsanClusterMutationProvider, csdService, vsanStatusService) {
          var _this = this;

          _classCallCheck(this, TurnOffVsanComponent);

          this.configureVsanClusterMutationProvider = configureVsanClusterMutationProvider;
          this.csdService = csdService;
          this.vsanStatusService = vsanStatusService;
          this.alertMessages = [];
          this.loading = false;
          this.actionDisabled = false;

          this.canProceed = function () {
            return !_this.actionDisabled && !_this.loading;
          };
        }

        _createClass(TurnOffVsanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clusterName = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext().clusterName;
            this.isComputeOnlyCluster = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext().isComputeOnlyCluster || false;
            this.loadCsdData();
          }
        }, {
          key: "loadCsdData",
          value: function loadCsdData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var clusterRef, _yield$Promise$all, _yield$Promise$all2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      clusterRef = _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject;
                      this.loading = true;
                      _context.prev = 2;
                      _context.next = 5;
                      return this.csdService.isCsdSupported(clusterRef);

                    case 5:
                      if (!_context.sent) {
                        _context.next = 14;
                        break;
                      }

                      _context.next = 8;
                      return Promise.all([this.csdService.getMountedDatastores(clusterRef).then(function (res) {
                        return res.filter(function (ds) {
                          return !ds.isLocal;
                        }).map(function (ds) {
                          return ds.shareableDatastore.serverCluster;
                        });
                      }), this.csdService.getClientClusters(clusterRef)]);

                    case 8:
                      _yield$Promise$all = _context.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                      this.serverClusters = _yield$Promise$all2[0];
                      this.clientClusters = _yield$Promise$all2[1];

                      if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(this.serverClusters)) {
                        this.alertMessages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.generalConfig.disableVsan.error.mountsClusters", this.serverClusters.map(function (cls) {
                          return cls.name;
                        }).join(", ")));
                        this.actionDisabled = true;
                      }

                      if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(this.clientClusters)) {
                        this.alertMessages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.generalConfig.disableVsan.error.exportsToClusters", this.clientClusters.map(function (cls) {
                          return cls.name;
                        }).join(", ")));
                        this.actionDisabled = true;
                      }

                    case 14:
                      _context.next = 19;
                      break;

                    case 16:
                      _context.prev = 16;
                      _context.t0 = _context["catch"](2);
                      this.handleError(_context.t0);

                    case 19:
                      _context.prev = 19;
                      this.loading = false;
                      return _context.finish(19);

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 16, 19, 22]]);
            }));
          }
        }, {
          key: "apply",
          value: function apply() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var taskRef;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loading = true;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return this.configureVsanClusterMutationProvider.turnOffVsan(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject);

                    case 4:
                      taskRef = _context2.sent;
                      this.vsanStatusService.storeChange(new _service_status_updates_vsan_status_change_data__WEBPACK_IMPORTED_MODULE_3__["VsanStatusChangeData"](taskRef, _service_status_updates_vsan_status_change_data__WEBPACK_IMPORTED_MODULE_3__["StatusChangeType"].VSAN_SERVICE_DISABLED));

                      _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].closeModalDialog(taskRef);

                      _context2.next = 12;
                      break;

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](1);
                      this.handleError(_context2.t0);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[1, 9]]);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.loading = false;
            this.alertMessages = [error];
          }
        }]);

        return TurnOffVsanComponent;
      }();
      /***/

    },

    /***/
    "9qj7":
    /*!*************************************************************************************************!*\
      !*** ./src/app/vsan/cluster/configure/action/disable-vsan/turn-off-vsan.component.ngfactory.js ***!
      \*************************************************************************************************/

    /*! exports provided: RenderType_TurnOffVsanComponent, View_TurnOffVsanComponent_0, View_TurnOffVsanComponent_Host_0, TurnOffVsanComponentNgFactory */

    /***/
    function qj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_TurnOffVsanComponent", function () {
        return RenderType_TurnOffVsanComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_TurnOffVsanComponent_0", function () {
        return View_TurnOffVsanComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_TurnOffVsanComponent_Host_0", function () {
        return View_TurnOffVsanComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnOffVsanComponentNgFactory", function () {
        return TurnOffVsanComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_delete_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../common/component/dialog/prompt/prompt-delete.component.ngfactory */
      "ip3r");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../common/component/dialog/prompt/prompt-delete.component */
      "RxBq");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./turn-off-vsan.component */
      "4OfF");
      /* harmony import */


      var _generated_configure_vsan_cluster_mutation_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../generated/configure-vsan-cluster-mutation-provider */
      "79T5");
      /* harmony import */


      var _generated_csd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../generated/csd-service */
      "dwYa");
      /* harmony import */


      var _common_service_status_updates_vsan_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../common/service/status-updates/vsan-status.service */
      "Mm5E");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_TurnOffVsanComponent = [];

      var RenderType_TurnOffVsanComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??crt"]({
        encapsulation: 2,
        styles: styles_TurnOffVsanComponent,
        data: {}
      });

      function View_TurnOffVsanComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent.parent, 0), "vsan.generalConfig.disableVsan.warning"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_TurnOffVsanComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent.parent, 0), "vsan.generalConfig.disableVsan.warning.computeOnly"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_TurnOffVsanComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 14, "div", [["class", "dialog-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](2, 0, null, null, 7, "div", [["id", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, null, 1, null, View_TurnOffVsanComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, null, 1, null, View_TurnOffVsanComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](11, 0, null, null, 2, "div", [["id", "confirmation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](12, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.isComputeOnlyCluster;

          _ck(_v, 5, 0, currVal_0);

          var currVal_1 = _co.isComputeOnlyCluster;

          _ck(_v, 8, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v.parent, 0), "vsan.generalConfig.disableVsan.confirmation", _co.clusterName));

          _ck(_v, 12, 0, currVal_2);
        });
      }

      function View_TurnOffVsanComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["??pid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](2, 0, null, null, 7, "vsan-delete-prompt", [], null, [[null, "alertMessagesChange"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.alertMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirm" === en) {
            var pd_1 = _co.apply() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _common_component_dialog_prompt_prompt_delete_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DeletePrompt_0"], _common_component_dialog_prompt_prompt_delete_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DeletePrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](3, 114688, null, 0, _common_component_dialog_prompt_prompt_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeletePrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          confirmText: [2, "confirmText"],
          alertMessages: [3, "alertMessages"],
          allowAlertClose: [4, "allowAlertClose"],
          blockButton: [5, "blockButton"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??and"](16777216, null, 0, 1, null, View_TurnOffVsanComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??ted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 0), "vsan.generalConfig.disableVsan.warning.title"));

          var currVal_1 = _co.clusterName;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??unv"](_v, 3, 2, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??nov"](_v, 0), "vsan.generalConfig.disableVsan.turn.off"));

          var currVal_3 = _co.alertMessages;
          var currVal_4 = !_co.actionDisabled;
          var currVal_5 = !_co.canProceed();

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.canProceed();

          _ck(_v, 8, 0, currVal_6);
        }, null);
      }

      function View_TurnOffVsanComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??eld"](0, 0, null, null, 1, "vsan-disable-dialog", [], null, null, null, View_TurnOffVsanComponent_0, RenderType_TurnOffVsanComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??did"](1, 114688, null, 0, _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_6__["TurnOffVsanComponent"], [_generated_configure_vsan_cluster_mutation_provider__WEBPACK_IMPORTED_MODULE_7__["ConfigureVsanClusterMutationProvider"], _generated_csd_service__WEBPACK_IMPORTED_MODULE_8__["CsdService"], _common_service_status_updates_vsan_status_service__WEBPACK_IMPORTED_MODULE_9__["VsanStatusService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var TurnOffVsanComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??ccf"]("vsan-disable-dialog", _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_6__["TurnOffVsanComponent"], View_TurnOffVsanComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "AfcU":
    /*!**********************************************************************************************!*\
      !*** ./src/app/vsan/cluster/configure/action/disable-vsan/turn-off-vsan.module.ngfactory.js ***!
      \**********************************************************************************************/

    /*! exports provided: TurnOffVsanModuleNgFactory */

    /***/
    function AfcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnOffVsanModuleNgFactory", function () {
        return TurnOffVsanModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _turn_off_vsan_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./turn-off-vsan.module */
      "O97u");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _turn_off_vsan_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./turn-off-vsan.component.ngfactory */
      "9qj7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../common/component/dialog/prompt/prompt.module */
      "usKm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./turn-off-vsan.component */
      "4OfF");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var TurnOffVsanModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["??cmf"](_turn_off_vsan_module__WEBPACK_IMPORTED_MODULE_1__["TurnOffVsanModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["??CodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??blNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??lrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??dzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_router_router_lNgFactory"], _turn_off_vsan_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TurnOffVsanComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bk"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bm"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??bm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??lrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ce"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ch"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??ch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??dx"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["??dx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_13__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_14__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], _common_component_dialog_prompt_prompt_module__WEBPACK_IMPORTED_MODULE_15__["PromptModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["??angular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _turn_off_vsan_module__WEBPACK_IMPORTED_MODULE_1__["TurnOffVsanModule"], _turn_off_vsan_module__WEBPACK_IMPORTED_MODULE_1__["TurnOffVsanModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_9__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
          return [[{
            path: "",
            component: _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_17__["TurnOffVsanComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "O97u":
    /*!************************************************************************************!*\
      !*** ./src/app/vsan/cluster/configure/action/disable-vsan/turn-off-vsan.module.ts ***!
      \************************************************************************************/

    /*! exports provided: TurnOffVsanModule */

    /***/
    function O97u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnOffVsanModule", function () {
        return TurnOffVsanModule;
      });
      /* harmony import */


      var _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./turn-off-vsan.component */
      "4OfF");

      var routes = [{
        path: "",
        component: _turn_off_vsan_component__WEBPACK_IMPORTED_MODULE_0__["TurnOffVsanComponent"]
      }];

      var TurnOffVsanModule = /*#__PURE__*/_createClass(function TurnOffVsanModule() {
        _classCallCheck(this, TurnOffVsanModule);
      });
      /***/

    },

    /***/
    "nKbY":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/service/status-updates/vsan-status-change.data.ts ***!
      \*******************************************************************************/

    /*! exports provided: VsanStatusChangeData, StatusChangeType */

    /***/
    function nKbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanStatusChangeData", function () {
        return VsanStatusChangeData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusChangeType", function () {
        return StatusChangeType;
      });
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Holds info for a status change initiated by the current user on the vSAN cluster.
       * This data is stored in the Browser local storage, check <code>VsanStatusService</code>
       * and is accessible across iframes.
       */


      var VsanStatusChangeData = /*#__PURE__*/_createClass(function VsanStatusChangeData(taskRef, status) {
        var clusterRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _service_managed_object__WEBPACK_IMPORTED_MODULE_0__["ManagedObject"].contextObject;

        _classCallCheck(this, VsanStatusChangeData);

        this.taskRef = taskRef;
        this.changeType = status;
        this.clusterRef = clusterRef;
      });
      /**
       * Enum with codes, used to differentiate different vSAN configuration events like
       * vSAN enabled, cluster shutdown, etc.
       */


      var StatusChangeType = /*@__PURE__*/function (StatusChangeType) {
        /**
         * A cluster has had the vSAN service enabled.
         */
        StatusChangeType[StatusChangeType["VSAN_SERVICE_ENABLED"] = 0] = "VSAN_SERVICE_ENABLED";
        /**
         * A cluster has had the vSAN service disabled.
         */

        StatusChangeType[StatusChangeType["VSAN_SERVICE_DISABLED"] = 1] = "VSAN_SERVICE_DISABLED";
        /**
         * A vSAN cluster has been powered on.
         */

        StatusChangeType[StatusChangeType["VSAN_CLUSTER_POWER_ON"] = 2] = "VSAN_CLUSTER_POWER_ON";
        /**
         * A vSAN cluster has been shut down.
         */

        StatusChangeType[StatusChangeType["VSAN_CLUSTER_POWER_OFF"] = 3] = "VSAN_CLUSTER_POWER_OFF";
        return StatusChangeType;
      }({});
      /***/

    }
  }]);
})();
//# sourceMappingURL=142-es5.js.map