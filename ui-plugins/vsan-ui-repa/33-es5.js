(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33], {
    /***/
    "+W3v":
    /*!*******************************************************************!*\
      !*** ./src/app/vsan/common/service/witness-validation.service.ts ***!
      \*******************************************************************/

    /*! exports provided: WitnessValidationService, WitnessHostValidation */

    /***/
    function W3v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessValidationService", function () {
        return WitnessValidationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostValidation", function () {
        return WitnessHostValidation;
      });
      /* harmony import */


      var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/validation/alert-type */
      "4KIt");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /**
       * Provides validation for a selected witness host.
       */


      var WitnessValidationService = /*#__PURE__*/function () {
        function WitnessValidationService() {
          _classCallCheck(this, WitnessValidationService);
        }

        _createClass(WitnessValidationService, [{
          key: "handleSharedWitnessHostValidationResult",
          value: function handleSharedWitnessHostValidationResult(hostValidationData) {
            return this.handleHostValidationResult(hostValidationData, null, true);
          }
        }, {
          key: "handleSingleClusterWitnessValidationResult",
          value: function handleSingleClusterWitnessValidationResult(hostValidationData, vsanConfig) {
            return this.handleHostValidationResult(hostValidationData, vsanConfig, false);
          }
          /**
           * Returns a single host level validation result.
           * @param hostValidationData - The java side validation result
           * @param vsanConfig - Contains the cluster's config. Used in single cluster scenarios like configure vSAN or HCI
           * @param aggregateClusterErrors - Whether to report the cluster level errors as a host level error or return an
           * aggregated error message.
           * This is needed in shared witness scenarios, in order to show a general error message at the top of the page.
           * We already show the per cluster error in the validation grid, so there is no information hiding.
           * In the single cluster scenarios we show the cluster error from backend as it is more informative.
           */

        }, {
          key: "handleHostValidationResult",
          value: function handleHostValidationResult(hostValidationData, vsanConfig, aggregateClusterErrors) {
            // First check the basics: is a connected host, is not in mm, has configured nic, etc.
            var validationMessages = this.validateWitnessCandidate(hostValidationData);

            if (validationMessages) {
              return validationMessages;
            } // If all looks good, check if the shared witness host validation has passed


            validationMessages = this.validateSharedWitnessHost(hostValidationData, vsanConfig, aggregateClusterErrors);

            if (validationMessages) {
              return validationMessages;
            } // Validate some conditions, to be reported as warnings


            validationMessages = this.validateWarningConditions(hostValidationData.isEncrypted);

            if (validationMessages) {
              return validationMessages;
            } // Validate some minor conditions reported as infos


            if (hostValidationData.vLCMToBeDisabled) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].INFO, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.sharedWitness.assign.vLCM.warning")]);
            } // All is good, return validation success


            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].SUCCESS, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.compatibleHostState")]);
          } // Checks the basic host properties, such as connection state, powered state, etc..

        }, {
          key: "validateWitnessCandidate",
          value: function validateWitnessCandidate(hostValidationResult) {
            if (hostValidationResult.isHostInTheSameCluster) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.internalHostSelectedError")]);
            } else if (hostValidationResult.isHostInVsanEnabledCluster) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.hostInVsanEnabledCluster")]);
            } else if (hostValidationResult.isHostDisconnected) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.disconnectedHostState")]);
            } else if (!hostValidationResult.isPoweredOn) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.notPoweredOnHostState")]);
            } else if (hostValidationResult.isHostInMaintenanceMode) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.maintenanceModeHostState")]);
            } else if (!hostValidationResult.hasVsanEnabledNic) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.noVsanNicEnabledOnHost")]);
            } else if (!hostValidationResult.isVsanMaxCompatible) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.vsanMax.hostNotSupported")]);
            }

            return null;
          }
        }, {
          key: "validateSharedWitnessHost",
          value: function validateSharedWitnessHost(hostValidationData, vsanConfig, aggregateClusterErrors) {
            if (hostValidationData.isWitnessHost && !hostValidationData.isStretchedClusterSupported) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.featureNotSupportedOnHost")]);
            }

            if (hostValidationData.witnessValidationResult) {
              // Check if any API validation errors are returned for the witness host
              if (!_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(hostValidationData.witnessValidationResult.witnessHostValidationErrors)) {
                return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, hostValidationData.witnessValidationResult.witnessHostValidationErrors);
              } // Check if any API validation errors are returned for the clusters. Aggregate them to a single host error


              if (hostValidationData.witnessValidationResult.clustersValidation) {
                var clusterValidationResults = Object.values(hostValidationData.witnessValidationResult.clustersValidation);
                var clusterValidationError = clusterValidationResults.find(function (result) {
                  return !result.compatible;
                });

                if (clusterValidationError) {
                  if (aggregateClusterErrors) {
                    return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.host.sharedWitness.reassign.wizard.selectClusters.validation.incompatibleClusters")]);
                  } else {
                    return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [clusterValidationError.validationMessage]);
                  }
                }
              }
            } // RDMA is not supported when shared witness host is used


            if ((vsanConfig === null || vsanConfig === void 0 ? void 0 : vsanConfig.enableRdma) && hostValidationData.isWitnessHost) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.sharedWitness.assign.rdma.error")]);
            } // Finally check that if a shared witness host (which don't support DIT) is used when the DiT encryption is
            // enabled


            if ((vsanConfig === null || vsanConfig === void 0 ? void 0 : vsanConfig.enableDataInTransitEncryption) && hostValidationData.isWitnessHost && !hostValidationData.isDitSharedWitnessInteroperabilitySupported) {
              /**
               * When Data-In-Transit Encryption is enabled, a shared witness host cannot be used.
               */
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.sharedWitness.assign.dit.error")]);
            }

            return null;
          }
        }, {
          key: "validateWarningConditions",
          value: function validateWarningConditions(isEncrypted) {
            if (isEncrypted) {
              return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].WARNING, [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.hostIsEncrypted")]);
            }

            return null;
          }
        }, {
          key: "handleHostValidationError",
          value: function handleHostValidationError(error) {
            return new WitnessHostValidation(_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_0__["AlertType"].DANGER, [error]);
          }
        }, {
          key: "updateClustersValidation",
          value: function updateClustersValidation(witnessValidationResult, clustersValidationData, twoNodeClusters) {
            if (!witnessValidationResult) {
              return clustersValidationData;
            }

            var validationData = witnessValidationResult.clustersValidation;

            if (!clustersValidationData) {
              // This is the first time we are doing the validation, just assign the result as is
              clustersValidationData = validationData; // If witness host validation is not passed cluster validation is null
            } else if (validationData) {
              // We need to only update the values, in case user deselected some of the clusters,
              // we are not getting them as part of the validation result, but still want to show the original errors
              var _iterator = _createForOfIteratorHelper(twoNodeClusters),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var clusterData = _step.value;
                  var updatedValidationResult = validationData[clusterData.moRef.value];

                  if (updatedValidationResult) {
                    clustersValidationData[clusterData.moRef.value] = updatedValidationResult;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return clustersValidationData;
          }
        }]);

        return WitnessValidationService;
      }();

      var WitnessHostValidation = /*#__PURE__*/_createClass(function WitnessHostValidation(validationAlertType, validationMessages) {
        _classCallCheck(this, WitnessHostValidation);

        this.validationAlertType = validationAlertType;
        this.validationMessages = validationMessages;
      });
      /***/

    },

    /***/
    "2tSO":
    /*!******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/delete-domain-warning.scss.shim.ngstyle.js ***!
      \******************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function tSO(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  padding: 0;\n}\n.modal[_ngcontent-%COMP%]   .collapsed-data[_ngcontent-%COMP%] {\n  height: 240px;\n}\n.modal[_ngcontent-%COMP%]   .expanded-data[_ngcontent-%COMP%] {\n  height: 485px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvZGVsZXRlLWRvbWFpbi13YXJuaW5nLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMSUc7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWFOO0FBVkc7RUFDRyxhQUFBO0FBWU47QUFURztFQUNHLGFBQUE7QUFXTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC93aXphcmQvc2hhcmVkLXBhZ2VzL2RlbGV0ZS1kb21haW4td2FybmluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbi5tb2RhbCB7XG4gICAubW9kYWwtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDEgMCAwcmVtO1xuICAgICAgcGFkZGluZzogMDtcbiAgIH1cblxuICAgLmNvbGxhcHNlZC1kYXRhIHtcbiAgICAgIGhlaWdodDogMjQwcHg7XG4gICB9XG5cbiAgIC5leHBhbmRlZC1kYXRhIHtcbiAgICAgIGhlaWdodDogNDg1cHg7XG4gICB9XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "4Nty":
    /*!********************************************************!*\
      !*** ./src/app/vsan/common/util/reactive-form-util.ts ***!
      \********************************************************/

    /*! exports provided: ReactiveFormUtil */

    /***/
    function Nty(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormUtil", function () {
        return ReactiveFormUtil;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ReactiveFormUtil = /*@__PURE__*/function () {
        var ReactiveFormUtil = /*#__PURE__*/_createClass(function ReactiveFormUtil() {
          _classCallCheck(this, ReactiveFormUtil);
        });

        ReactiveFormUtil.FORM_CONTROLS_DELIMITER = ".";
        /*
         * Trigger validation on all controls in a form group and mark them as touched to display errors
         */

        ReactiveFormUtil.validateAllFormFields = function (formGroup) {
          formGroup.markAsTouched();
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            control.markAsTouched({
              onlySelf: true
            });

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              ReactiveFormUtil.validateAllFormFields(control);
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]) {
              control.controls.forEach(function (childControl) {
                return ReactiveFormUtil.validateAllFormFields(childControl);
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              ReactiveFormUtil.validateControls([control]);
            }
          });
        };

        ReactiveFormUtil.validateControls = function (controls) {
          controls.forEach(function (control) {
            control.markAsTouched({
              onlySelf: true
            });
            control.updateValueAndValidity({
              onlySelf: false,
              emitEvent: true
            });
          });
        };
        /**
         * Trigger updateValueAndValidity() to call ValidatorFn and update validity of all controls in a form group.
         */


        ReactiveFormUtil.updateFormControlsValueAndValidity = function (formGroup) {
          Object.keys(formGroup.controls).forEach(function (control) {
            if (formGroup.get(control) instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              formGroup.get(control).updateValueAndValidity();
            }
          });
        };

        ReactiveFormUtil.getFormControlPath = function () {
          for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
            parts[_key] = arguments[_key];
          }

          return parts.join(ReactiveFormUtil.FORM_CONTROLS_DELIMITER);
        };

        return ReactiveFormUtil;
      }();
      /***/

    },

    /***/
    "5asQ":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/single-site-fault-domains-page.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SingleSiteFaultDomainsPage, TreeItem, DomainTreeItem, HostTreeItem */

    /***/
    function asQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleSiteFaultDomainsPage", function () {
        return SingleSiteFaultDomainsPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeItem", function () {
        return TreeItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomainTreeItem", function () {
        return DomainTreeItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HostTreeItem", function () {
        return HostTreeItem;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/wizard/flow-metadata */
      "ZRZh");
      /* harmony import */


      var _generated_vsan_fault_domain_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/vsan-fault-domain-spec */
      "Pl05");
      /* harmony import */


      var _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/fault-domains-util */
      "JwBD");

      var SingleSiteFaultDomainsPage = /*@__PURE__*/function () {
        var SingleSiteFaultDomainsPage = /*#__PURE__*/function () {
          function SingleSiteFaultDomainsPage() {
            var _this = this;

            _classCallCheck(this, SingleSiteFaultDomainsPage);

            this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"];
            this.createDomainDialogVisible = false;
            this.failuresToTolerate = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.na.label");
            this.treeContent = [];

            this.handleConfigChange = function () {
              _this.clearSelection();

              _this.sortTree();

              _this.updateFttText();
            };

            this.clearSelection = function () {
              _this.treeContent.forEach(function (item) {
                item.selected = false;

                if (item instanceof DomainTreeItem) {
                  item.hosts.forEach(function (host) {
                    host.selected = false;
                  });
                }
              });
            };

            this.sortTree = function () {
              // sort tree root elements
              _this.treeContent.sort(function (a, b) {
                if (a instanceof DomainTreeItem === b instanceof DomainTreeItem) {
                  // comparing either domains or hosts
                  return a.label > b.label ? 1 : -1;
                } else {
                  // comparing host to a domain
                  return a instanceof DomainTreeItem ? -1 : 1;
                }
              }); // sort domain hosts


              _this.treeContent.forEach(function (item) {
                if (item instanceof DomainTreeItem && item.hosts) {
                  item.hosts.sort(function (a, b) {
                    return a.label > b.label ? 1 : -1;
                  });
                }
              });
            };

            this.updateFttText = function () {
              var domainAndStandaloneHostsCount = _this.domainsAndStandaloneHostsCount;
              var domains = domainAndStandaloneHostsCount[0];
              var standaloneHosts = domainAndStandaloneHostsCount[1];
              _this.failuresToTolerate = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.configure.faultDomains.faultsToTolerateText", _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_6__["FaultDomainsUtil"].calculateFailuresToTolerate(standaloneHosts, domains, _this.availableWitnessHostsCount));
            };

            this.selectItem = function (itemName, event) {
              // if CTRL is not pressed select only current item
              if (!event.ctrlKey) {
                _this.treeContent.forEach(function (item) {
                  item.selected = item.label === itemName;

                  if (item instanceof DomainTreeItem) {
                    item.hosts.forEach(function (host) {
                      return host.selected = host.label === itemName;
                    });
                  }
                });
              } // if CTRL is pressed invert item selection and keep the rest of the selections


              if (event.ctrlKey) {
                _this.treeContent.forEach(function (item) {
                  if (item.label === itemName) {
                    item.selected = !item.selected;
                    return;
                  }

                  if (item instanceof DomainTreeItem) {
                    item.hosts.forEach(function (host) {
                      if (host.label === itemName) {
                        host.selected = !host.selected;
                      }
                    });
                  }
                });
              }
            };

            this.onlyDomainsSelected = function () {
              var hostSelected = false;
              var domainSelected = false;

              _this.treeContent.forEach(function (item) {
                if (item instanceof DomainTreeItem) {
                  if (item.selected) {
                    domainSelected = true;
                  }

                  item.hosts.forEach(function (host) {
                    if (host.selected) {
                      hostSelected = true;
                    }
                  });
                } else {
                  // host item
                  if (item.selected) {
                    hostSelected = true;
                  }
                }
              });

              return domainSelected && !hostSelected;
            };

            this.openCreateDomainDialog = function () {
              _this.createDomainDialogVisible = true;
            };

            this.deleteDomains = function () {
              // iterate root elements and if it is a selected domain remove it
              // and add its hosts to the end of the root elements list
              var index = _this.treeContent.length;

              while (index--) {
                var item = _this.treeContent[index];

                if (item.selected && item instanceof DomainTreeItem) {
                  var _this$treeContent;

                  item.hosts.forEach(function (host) {
                    return host.domainName = null;
                  });

                  (_this$treeContent = _this.treeContent).push.apply(_this$treeContent, _toConsumableArray(item.hosts));

                  _this.treeContent.splice(index, 1);
                }
              }

              _this.handleConfigChange();

              _this.pageControls.rebuildToc();
            };

            this.updateDomains = function (newDomain) {
              // Remove selected hosts out of the tree structure
              var index = _this.treeContent.length;

              while (index--) {
                var item = _this.treeContent[index];

                if (item instanceof DomainTreeItem) {
                  if (item.label !== newDomain.label && item.hosts.length !== 0) {
                    var domainHosts = item.hosts;
                    var hostsIndex = domainHosts.length;

                    while (hostsIndex--) {
                      var domainHost = domainHosts[hostsIndex];

                      if (newDomain.hosts.indexOf(domainHost) >= 0) {
                        domainHosts.splice(hostsIndex, 1);
                      }
                    }
                  }
                } else if (item instanceof HostTreeItem) {
                  if (newDomain.hosts.indexOf(item) >= 0) {
                    _this.treeContent.splice(index, 1);
                  }
                }
              } // delete empty fault domains


              var deleteIndex = _this.treeContent.length;

              while (deleteIndex--) {
                var _item = _this.treeContent[deleteIndex];

                if (_item instanceof DomainTreeItem && _item.hosts.length === 0) {
                  _this.treeContent.splice(deleteIndex, 1);
                }
              }

              if (newDomain.hosts.length > 0) {
                // add the new fault domain
                newDomain.hosts.forEach(function (i) {
                  return i.domainName = newDomain.label;
                });
                /**
                 * Search the new domain in the tree items,
                 * if a new fault domain, we simply push it into the list, otherwise we do nothing.
                 */

                if (!_this.treeContent.find(function (item) {
                  return item instanceof DomainTreeItem && item.label === newDomain.label;
                })) {
                  _this.treeContent.push(newDomain);
                }
              }

              _this.handleConfigChange();

              _this.pageControls.rebuildToc();
            };

            this.validate = function () {
              _this.faultDomainNames = [];
              _this.vsanConfigSpec.faultDomainSpecs = []; // prepare fault domains specs and list of fault domain names

              var _iterator2 = _createForOfIteratorHelper(_this.treeContent),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var item = _step2.value;

                  if (item instanceof DomainTreeItem) {
                    var faultDomain = item.label;

                    _this.faultDomainNames.push(faultDomain);

                    var _iterator3 = _createForOfIteratorHelper(item.hosts),
                        _step3;

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        var host = _step3.value;

                        _this.vsanConfigSpec.faultDomainSpecs.push(_generated_vsan_fault_domain_spec__WEBPACK_IMPORTED_MODULE_5__["VsanFaultDomainSpec"].Factory.create(faultDomain, host.hostRef));
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                  } else if (item instanceof HostTreeItem) {
                    _this.vsanConfigSpec.faultDomainSpecs.push(_generated_vsan_fault_domain_spec__WEBPACK_IMPORTED_MODULE_5__["VsanFaultDomainSpec"].Factory.create("", item.hostRef));
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return null;
            };
            /**
             * Invoked when a host is dragged over a valid target
             * in order to hint the user they can drop it.
             * @param targetItem the potential drop target, can be fault domain,
             *       other host or null (for header and footer)
             */


            this.hintDropTarget = function (targetItem) {
              if (!_this.draggedItem || _this.draggedItem instanceof DomainTreeItem) {
                return;
              }

              _this.draggedItem.badgeText = "";
              var domain = null;

              if (targetItem) {
                domain = targetItem instanceof DomainTreeItem ? targetItem : _this.findDomainByHost(targetItem);
              }

              if (domain != null) {
                if (domain !== _this.findDomainByHost(_this.draggedItem)) {
                  _this.draggedItem.badgeText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.action.moveHosts.hint.move", domain.label);
                }
              } else if (_this.draggedItem instanceof HostTreeItem && _this.draggedItem.domainName) {
                // Drag a host out of a domain
                domain = _this.findDomainByHost(_this.draggedItem);

                if (domain) {
                  _this.draggedItem.badgeText = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.action.moveHosts.hint.remove", domain.label);
                }
              }
            };

            this.findDomainByHost = function (host) {
              if (!host) {
                return null;
              }

              var matched = _this.treeContent.filter(function (item) {
                return item instanceof DomainTreeItem && item.hosts.indexOf(host) > -1;
              });

              if (matched.length > 0) {
                return matched[0];
              }

              return null;
            };

            this.itemDragged = function (item) {
              _this.draggedItem = item instanceof HostTreeItem ? item : null;
            };

            this.clearDraggedItem = function () {
              if (_this.draggedItem != null) {
                _this.draggedItem.badgeText = null;
              }

              _this.draggedItem = null;
            };

            this.itemDropped = function (event, targetItem) {
              if (!_this.draggedItem) {
                return;
              }

              var domain = null;

              if (targetItem) {
                domain = targetItem instanceof DomainTreeItem ? targetItem : _this.findDomainByHost(targetItem);
              }

              if (domain != null && domain !== _this.findDomainByHost(_this.draggedItem)) {
                domain.hosts.push(_this.draggedItem);
              } else if (domain == null) {
                // Drag a host out of a fault domain
                if (_this.draggedItem instanceof HostTreeItem && _this.draggedItem.domainName) {
                  domain = _this.findDomainByHost(_this.draggedItem);
                  domain.hosts.splice(domain.hosts.indexOf(_this.draggedItem), 1);

                  _this.treeContent.push(_this.draggedItem);

                  _this.draggedItem.domainName = null;
                }
              }

              _this.updateDomains(domain);

              _this.clearDraggedItem();
            };
          }

          _createClass(SingleSiteFaultDomainsPage, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this$treeContent2, _this$treeContent3;

              var domainChildren = {};
              var domains = [];
              var standAloneHosts = [];

              var _iterator4 = _createForOfIteratorHelper(this.clusterHostFaultDomainData),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var hostFaultDomainData = _step4.value;
                  var hostUid = hostFaultDomainData.hostUid;
                  var _domainName = hostFaultDomainData.faultDomainName;

                  if (_domainName != null && _domainName.length === 0) {
                    _domainName = null;
                  }

                  var hostItem = new HostTreeItem(_service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].fromUid(hostUid), hostFaultDomainData.name, hostFaultDomainData.primaryIconId, _domainName, false);

                  if (!_domainName) {
                    standAloneHosts.push(hostItem);
                  } else {
                    var domainHosts = domainChildren.hasOwnProperty(_domainName) ? domainChildren[_domainName] : [];
                    domainHosts.push(hostItem);
                    domainChildren[_domainName] = domainHosts;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              for (var _i = 0, _Object$keys = Object.keys(domainChildren); _i < _Object$keys.length; _i++) {
                var domainName = _Object$keys[_i];
                domains.push(new DomainTreeItem(domainName, _util_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"].FAULT_DOMAIN, false, domainChildren[domainName]));
              }

              (_this$treeContent2 = this.treeContent).push.apply(_this$treeContent2, domains);

              (_this$treeContent3 = this.treeContent).push.apply(_this$treeContent3, standAloneHosts);

              this.handleConfigChange();
            }
          }, {
            key: "domainsAndStandaloneHostsCount",
            get: function get() {
              var domainsCount = 0;
              var standaloneHostsCount = 0;
              this.treeContent.forEach(function (item) {
                if (item instanceof DomainTreeItem) {
                  domainsCount++;
                } else if (item instanceof HostTreeItem) {
                  standaloneHostsCount++;
                }
              });
              return [domainsCount, standaloneHostsCount];
            }
          }]);

          return SingleSiteFaultDomainsPage;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SingleSiteFaultDomainsPage.prototype, "pageControls", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SingleSiteFaultDomainsPage.prototype, "clusterHostFaultDomainData", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SingleSiteFaultDomainsPage.prototype, "vsanConfigSpec", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SingleSiteFaultDomainsPage.prototype, "faultDomainNames", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SingleSiteFaultDomainsPage.prototype, "availableWitnessHostsCount", void 0);
        SingleSiteFaultDomainsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_4__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.cluster.configure.wizard.faultDomains.title"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.cluster.configure.wizard.faultDomains.description"))], SingleSiteFaultDomainsPage);
        return SingleSiteFaultDomainsPage;
      }();

      var TreeItem = /*#__PURE__*/_createClass(function TreeItem(label, icon, selected) {
        var badgeText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, TreeItem);

        this.label = label;
        this.icon = icon;
        this.selected = selected;
        this.badgeText = badgeText;
      });

      var DomainTreeItem = /*#__PURE__*/function (_TreeItem) {
        _inherits(DomainTreeItem, _TreeItem);

        var _super = _createSuper(DomainTreeItem);

        function DomainTreeItem(label, icon, selected, hosts) {
          var _this2;

          _classCallCheck(this, DomainTreeItem);

          _this2 = _super.call(this, label, icon, selected);
          _this2.label = label;
          _this2.icon = icon;
          _this2.selected = selected;
          _this2.hosts = hosts;
          return _this2;
        }

        return _createClass(DomainTreeItem);
      }(TreeItem);

      var HostTreeItem = /*#__PURE__*/function (_TreeItem2) {
        _inherits(HostTreeItem, _TreeItem2);

        var _super2 = _createSuper(HostTreeItem);

        function HostTreeItem(hostRef, label, icon, domainName, selected) {
          var _this3;

          _classCallCheck(this, HostTreeItem);

          _this3 = _super2.call(this, label, icon, selected);
          _this3.hostRef = hostRef;
          _this3.label = label;
          _this3.icon = icon;
          _this3.domainName = domainName;
          _this3.selected = selected;
          return _this3;
        }

        return _createClass(HostTreeItem);
      }(TreeItem);
      /***/

    },

    /***/
    "7sC7":
    /*!******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/claim-disks-witness-host-page.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ClaimDisksWitnessHostPage */

    /***/
    function sC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDisksWitnessHostPage", function () {
        return ClaimDisksWitnessHostPage;
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


      var _component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/wizard/flow-metadata */
      "ZRZh");

      var ClaimDisksWitnessHostPage = /*@__PURE__*/function () {
        var ClaimDisksWitnessHostPage = /*#__PURE__*/function () {
          function ClaimDisksWitnessHostPage() {
            _classCallCheck(this, ClaimDisksWitnessHostPage);
          }

          _createClass(ClaimDisksWitnessHostPage, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // Block the Next button while host's disks are loading
                        this.pageControls.nextButtonIsDisabled = true;

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "onLoadingComplete",
            value: function onLoadingComplete() {
              this.pageControls.nextButtonIsDisabled = false;
            }
          }, {
            key: "configChange",
            value: function configChange(diskMapping) {
              this.witnessHostDiskMapping = diskMapping;
              this.pageControls.rebuildToc();
            }
          }, {
            key: "onStoragePoolDisksChange",
            value: function onStoragePoolDisksChange(storagePoolDisks) {
              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(storagePoolDisks)) {
                this.storagePoolDisks = null;
                return;
              }

              this.errors = null;
              this.storagePoolDisks = storagePoolDisks.map(function (storagePoolDisk) {
                return storagePoolDisk.disk.canonicalName;
              });
            }
          }, {
            key: "configValidate",
            value: function configValidate(errors) {
              this.errors = errors;
            }
          }, {
            key: "validate",
            value: function validate() {
              if (this.isVsanMaxWorkflow) {
                if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(this.storagePoolDisks)) {
                  this.errors = [_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.dialog.addDisksToStoragePool.error.selectDisks")];
                } else {
                  this.errors = null;
                }
              }

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].isEmpty(this.errors) ? null : this.errors;
            }
          }]);

          return ClaimDisksWitnessHostPage;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClaimDisksWitnessHostPage.prototype, "pageControls", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"])], ClaimDisksWitnessHostPage.prototype, "clusterRef", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"])], ClaimDisksWitnessHostPage.prototype, "witnessHost", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ClaimDisksWitnessHostPage.prototype, "isVsanMaxWorkflow", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClaimDisksWitnessHostPage.prototype, "witnessHostDiskMapping", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], ClaimDisksWitnessHostPage.prototype, "storagePoolDisks", void 0);
        ClaimDisksWitnessHostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_3__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.cluster.configure.wizard.claimDisksWitnessHost.title"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.cluster.configure.wizard.claimDisksWitnessHost.description"))], ClaimDisksWitnessHostPage);
        return ClaimDisksWitnessHostPage;
      }();
      /***/

    },

    /***/
    "9JTX":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/delete-domain-warning.component.ngfactory.js ***!
      \********************************************************************************************************/

    /*! exports provided: RenderType_DeleteDomainWarningComponent, View_DeleteDomainWarningComponent_0, View_DeleteDomainWarningComponent_Host_0, DeleteDomainWarningComponentNgFactory */

    /***/
    function JTX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DeleteDomainWarningComponent", function () {
        return RenderType_DeleteDomainWarningComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DeleteDomainWarningComponent_0", function () {
        return View_DeleteDomainWarningComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DeleteDomainWarningComponent_Host_0", function () {
        return View_DeleteDomainWarningComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteDomainWarningComponentNgFactory", function () {
        return DeleteDomainWarningComponentNgFactory;
      });
      /* harmony import */


      var _delete_domain_warning_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delete-domain-warning.scss.shim.ngstyle */
      "2tSO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
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


      var _dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../dialog/prompt/prompt.component.ngfactory */
      "3rpD");
      /* harmony import */


      var _dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../dialog/prompt/prompt.component */
      "eCeK");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _delete_domain_warning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./delete-domain-warning.component */
      "Zi5c");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DeleteDomainWarningComponent = [_delete_domain_warning_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DeleteDomainWarningComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DeleteDomainWarningComponent,
        data: {}
      });

      function View_DeleteDomainWarningComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "a", [["href", "javascript://"], ["id", "show-details-button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.detailsExpanded = true) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.faultDomain.emptyFaultDomainWarning.buttons.showDetails"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_DeleteDomainWarningComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "a", [["href", "javascript://"], ["id", "hide-details-button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = (_co.detailsExpanded = false) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.faultDomain.emptyFaultDomainWarning.buttons.hideDetails"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_DeleteDomainWarningComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 16, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[4, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[6, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 4, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[8, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          _ck(_v, 4, 0);

          _ck(_v, 12, 0);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = true;
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;

          _ck(_v, 11, 0, currVal_3, currVal_4);

          var currVal_5 = _v.context.$implicit.label;

          _ck(_v, 15, 0, currVal_5);
        });
      }

      function View_DeleteDomainWarningComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["id", "domains-datagrid-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 43, "clr-datagrid", [["id", "domains-datagrid"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 770048, [[3, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 147456, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](44, 1, ["\n                        ", "\n                     "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](45, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DeleteDomainWarningComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 409600, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = "label";

          _ck(_v, 39, 0, currVal_5);

          var currVal_7 = _co.domains;

          _ck(_v, 48, 0, currVal_7);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.faultDomain.emptyFaultDomainWarning.gridHeader"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).detailService.isOpen;

          _ck(_v, 6, 0, currVal_1, currVal_2);

          var currVal_3 = true;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ariaSort;

          _ck(_v, 35, 0, currVal_3, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 44, 0, _ck(_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.faultDomain.emptyFaultDomainWarning.gridColumn"));

          _ck(_v, 44, 0, currVal_6);
        });
      }

      function View_DeleteDomainWarningComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 44, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 41, "div", [["aria-hidden", "true"], ["class", "modal-dialog modal-md"], ["role", "dialog"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 37, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 34, "vsan-prompt", [], null, [[null, "onCancel"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onCancel" === en) {
            var pd_0 = _co.close() !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirm" === en) {
            var pd_1 = _co.apply() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_PromptComponent_0"], _dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_PromptComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_6__["PromptComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"],
          cancelText: [2, "cancelText"]
        }, {
          onConfirm: "onConfirm",
          onCancel: "onCancel"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 28, "div", [["class", "dialog-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "clr-icon", [["aria-hidden", "true"], ["class", "is-warning is-solid"], ["id", "warning-icon"], ["shape", "warning-standard"], ["size", "24"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "span", [["id", "warning-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "div", [["id", "warning-details-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DeleteDomainWarningComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DeleteDomainWarningComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DeleteDomainWarningComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "span", [["id", "delete-domains-question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](38, null, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](39, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "modal-dialog modal-md";
          var currVal_1 = _co.detailsExpanded ? "expanded-data" : "collapsed-data";

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_2 = _co.dialogTitle;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 1, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.ok"));

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 2, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.cancel"));

          _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4);

          var currVal_6 = !_co.detailsExpanded;

          _ck(_v, 28, 0, currVal_6);

          var currVal_7 = _co.detailsExpanded;

          _ck(_v, 31, 0, currVal_7);

          var currVal_8 = _co.detailsExpanded;

          _ck(_v, 35, 0, currVal_8);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = _co.warningDescription;

          _ck(_v, 22, 0, currVal_5);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _ck(_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomain.emptyFaultDomainWarning.confirm"));

          _ck(_v, 38, 0, currVal_9);
        });
      }

      function View_DeleteDomainWarningComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["aria-hidden", "true"], ["class", "modal-backdrop opaque-backdrop"]], null, null, null, null, null))], null, null);
      }

      function View_DeleteDomainWarningComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DeleteDomainWarningComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DeleteDomainWarningComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.visible;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.visible;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_DeleteDomainWarningComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-delete-domain-warning", [], null, null, null, View_DeleteDomainWarningComponent_0, RenderType_DeleteDomainWarningComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _delete_domain_warning_component__WEBPACK_IMPORTED_MODULE_10__["DeleteDomainWarningComponent"], [], null, null)], null, null);
      }

      var DeleteDomainWarningComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-delete-domain-warning", _delete_domain_warning_component__WEBPACK_IMPORTED_MODULE_10__["DeleteDomainWarningComponent"], View_DeleteDomainWarningComponent_Host_0, {
        domains: "domains",
        visible: "visible"
      }, {
        visibleChange: "visibleChange",
        onConfirmation: "onConfirmation"
      }, []);
      /***/

    },

    /***/
    "9gp2":
    /*!****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/witness-host-page.component.ngfactory.js ***!
      \****************************************************************************************************/

    /*! exports provided: RenderType_WitnessHostPageComponent, View_WitnessHostPageComponent_0, View_WitnessHostPageComponent_Host_0, WitnessHostPageComponentNgFactory */

    /***/
    function gp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_WitnessHostPageComponent", function () {
        return RenderType_WitnessHostPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_WitnessHostPageComponent_0", function () {
        return View_WitnessHostPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_WitnessHostPageComponent_Host_0", function () {
        return View_WitnessHostPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostPageComponentNgFactory", function () {
        return WitnessHostPageComponentNgFactory;
      });
      /* harmony import */


      var _witness_host_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./witness-host-page.scss.shim.ngstyle */
      "TsBT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _inventory_inventory_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../inventory/inventory-browser.component.ngfactory */
      "hrSO");
      /* harmony import */


      var _inventory_inventory_browser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../inventory/inventory-browser.component */
      "pgRW");
      /* harmony import */


      var _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _validation_validation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../validation/validation.component */
      "ie44");
      /* harmony import */


      var _witness_host_requirements_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./witness-host-requirements.component.ngfactory */
      "XIz6");
      /* harmony import */


      var _witness_host_requirements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./witness-host-requirements.component */
      "hAuY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _witness_host_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./witness-host-page.component */
      "qt2f");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _service_witness_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../service/witness-validation.service */
      "+W3v");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../generated/vsan-stretched-cluster-service */
      "bxEx");
      /* harmony import */


      var _generated_configure_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../generated/configure-stretched-cluster-service */
      "3rpZ");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../generated/disk-management-service */
      "a6dL");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_WitnessHostPageComponent = [_witness_host_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_WitnessHostPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_WitnessHostPageComponent,
        data: {}
      });

      function View_WitnessHostPageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-inventory-browser", [["id", "inventory-browser"]], [[2, "disable-action", null]], [[null, "nodeSelected"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("nodeSelected" === en) {
            var pd_0 = _co.hostSelected($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _inventory_inventory_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_InventoryBrowserComponent_0"], _inventory_inventory_browser_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_InventoryBrowserComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _inventory_inventory_browser_component__WEBPACK_IMPORTED_MODULE_3__["InventoryBrowserComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          searchInputAriaLabelKey: [0, "searchInputAriaLabelKey"],
          filterContext: [1, "filterContext"],
          objRefs: [2, "objRefs"],
          inventoryService: [3, "inventoryService"]
        }, {
          nodeSelected: "nodeSelected"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.searchInputAriaLabel";
          var currVal_2 = _co.filterContext;
          var currVal_3 = _co.inventoryRoot;
          var currVal_4 = _co.hostInventoryService;

          _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_WitnessHostPageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["id", "witness-host-validation"]], null, [[null, "alertsChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertsChange" === en) {
            var pd_0 = (_co.hostValidation.validationMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ValidationComponent_0"], _validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _validation_validation_component__WEBPACK_IMPORTED_MODULE_5__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alerts: [1, "alerts"],
          allowClose: [2, "allowClose"]
        }, {
          alertsChange: "alertsChange"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hostValidation.validationAlertType;
          var currVal_1 = _co.hostValidation.validationMessages;
          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_WitnessHostPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "vsan-witness-host-requirements", [], null, null, null, _witness_host_requirements_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_WitnessHostRequirementsComponent_0"], _witness_host_requirements_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_WitnessHostRequirementsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _witness_host_requirements_component__WEBPACK_IMPORTED_MODULE_7__["WitnessHostRequirementsComponent"], [], {
          headerKey: [0, "headerKey"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WitnessHostPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WitnessHostPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.description";

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.inventoryRoot;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _co.hostValidation;

          _ck(_v, 11, 0, currVal_2);
        }, null);
      }

      function View_WitnessHostPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_WitnessHostPageComponent_0, RenderType_WitnessHostPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _witness_host_page_component__WEBPACK_IMPORTED_MODULE_9__["WitnessHostPageComponent"], [_generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_10__["WitnessCandidateInventoryService"], _service_witness_validation_service__WEBPACK_IMPORTED_MODULE_11__["WitnessValidationService"], _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_12__["VsanStretchedClusterService"], _generated_configure_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_13__["ConfigureStretchedClusterService"], _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_14__["DiskManagementService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var WitnessHostPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _witness_host_page_component__WEBPACK_IMPORTED_MODULE_9__["WitnessHostPageComponent"], View_WitnessHostPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "AX7O":
    /*!***************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/create-fault-domain-host-filter.pipe.ts ***!
      \***************************************************************************************************/

    /*! exports provided: HostFilterPipe */

    /***/
    function AX7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HostFilterPipe", function () {
        return HostFilterPipe;
      });

      var HostFilterPipe = /*#__PURE__*/function () {
        function HostFilterPipe() {
          _classCallCheck(this, HostFilterPipe);
        }

        _createClass(HostFilterPipe, [{
          key: "transform",
          value:
          /**
           * Filters host items list.
           *
           * @param items                     list to be filtered
           * @param showOnlyStandaloneHosts   if only standalone hosts has to be left (standalone hosts are the ones that
           *                                  are not part of a domain)
           * @returns {HostTreeItem[]}        filtered list
           */
          function transform(items, showOnlyStandaloneHosts) {
            return showOnlyStandaloneHosts ? items.filter(function (item) {
              return !item.domainName;
            }) : items;
          }
        }]);

        return HostFilterPipe;
      }();
      /***/

    },

    /***/
    "Bh/q":
    /*!***************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/fault-domains-page.scss.shim.ngstyle.js ***!
      \***************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function BhQ(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".configure-fd[_ngcontent-%COMP%] {\n  flex: 1 0 0rem;\n  display: flex;\n  justify-content: space-between;\n}\n.fd-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n  width: 42%;\n}\n.fd-container[_ngcontent-%COMP%]   .flex-input-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.fd-move-button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 2.64rem;\n}\n.fd-move-btn[_ngcontent-%COMP%] {\n  margin-left: 0.6rem;\n  margin-right: 0.6rem;\n}\n.fd-tree-component[_ngcontent-%COMP%] {\n  border: 0.05rem solid var(--vsan-border-color);\n  overflow: auto;\n  flex: 1 0 0rem;\n  margin-top: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvZmF1bHQtZG9tYWlucy1wYWdlLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMTUE7RUFDRyxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBV0g7QUFSQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQVprQjtBQXVCckI7QUFURztFQUNHLG9CQUFBO0FBV047QUFQQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQXZCdUI7QUFpQzFCO0FBUEE7RUFDRyxtQkdiTztFSGNQLG9CR2RPO0FId0JWO0FBUEE7RUFDRyw4Q0dlVztFSGRYLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JHckJPO0FIK0JWIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvZmF1bHQtZG9tYWlucy1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kZmQtbW92ZS1idXR0b25zLXBhZGRpbmc6IDIuNjRyZW07XG4kZmQtY29udGFpbmVyLXdpZHRoOiA0MiU7XG5cbi5jb25maWd1cmUtZmQge1xuICAgZmxleDogMSAwIDByZW07XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmQtY29udGFpbmVyIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICB3aWR0aDogJGZkLWNvbnRhaW5lci13aWR0aDtcblxuICAgLmZsZXgtaW5wdXQtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgIH1cbn1cblxuLmZkLW1vdmUtYnV0dG9uLWdyb3VwIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgcGFkZGluZy10b3A6ICRmZC1tb3ZlLWJ1dHRvbnMtcGFkZGluZztcbn1cblxuLmZkLW1vdmUtYnRuIHtcbiAgIG1hcmdpbi1sZWZ0OiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG4gICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbn1cblxuLmZkLXRyZWUtY29tcG9uZW50IHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyO1xuICAgb3ZlcmZsb3c6IGF1dG87XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIG1hcmdpbi10b3A6ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "ENph":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/single-site-fault-domains-page.component.ngfactory.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: RenderType_SingleSiteFaultDomainsPage, View_SingleSiteFaultDomainsPage_0, View_SingleSiteFaultDomainsPage_Host_0, SingleSiteFaultDomainsPageNgFactory */

    /***/
    function ENph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SingleSiteFaultDomainsPage", function () {
        return RenderType_SingleSiteFaultDomainsPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleSiteFaultDomainsPage_0", function () {
        return View_SingleSiteFaultDomainsPage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleSiteFaultDomainsPage_Host_0", function () {
        return View_SingleSiteFaultDomainsPage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleSiteFaultDomainsPageNgFactory", function () {
        return SingleSiteFaultDomainsPageNgFactory;
      });
      /* harmony import */


      var _single_site_fault_domains_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-site-fault-domains-page.scss.shim.ngstyle */
      "S2lL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../action-button/button-title.directive */
      "I0Pd");
      /* harmony import */


      var _single_site_fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./single-site-fault-domain-nodes.component.ngfactory */
      "M+L7");
      /* harmony import */


      var _single_site_fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./single-site-fault-domain-nodes.component */
      "VYrB");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/draggable.directive */
      "UmOi");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-drag-drop/src/services/ng-drag-drop.service */
      "ZbGM");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/droppable.directive */
      "q6c6");
      /* harmony import */


      var ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../directive/clr-button-group/clr-button-group-common.directive */
      "Ju17");
      /* harmony import */


      var _action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../action-button/button-group.directive */
      "Xbvm");
      /* harmony import */


      var _create_fault_domain_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./create-fault-domain.component.ngfactory */
      "ucrt");
      /* harmony import */


      var _create_fault_domain_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./create-fault-domain.component */
      "zNxW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./single-site-fault-domains-page.component */
      "5asQ");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SingleSiteFaultDomainsPage = [_single_site_fault_domains_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SingleSiteFaultDomainsPage = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SingleSiteFaultDomainsPage,
        data: {}
      });

      function View_SingleSiteFaultDomainsPage_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "clr-button", [["class", "btn btn-sm"], ["id", "deleteDomainAction"], ["name", "deleteDomainAction"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deleteDomains() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, [[1, 4], [2, 4], [4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"]
        }, {
          _click: "click"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, [[3, 4]], 0, _action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"]], {
          title: [0, "title"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, 0, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1)], function (_ck, _v) {
          var currVal_0 = "btn btn-sm";
          var currVal_1 = "deleteDomainAction";
          var currVal_2 = "deleteDomainAction";

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.removeHost.tooltip"));

          _ck(_v, 3, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.removeHost.label"));

          _ck(_v, 5, 0, currVal_4);
        });
      }

      function View_SingleSiteFaultDomainsPage_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "badge badge-light-blue drop-hint-badge-opacity"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n            "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.badgeText;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SingleSiteFaultDomainsPage_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "vsan-single-site-fault-domain-nodes", [], null, [[null, "onSelectItem"], [null, "onDragEnter"], [null, "onDragStart"], [null, "onDrop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onSelectItem" === en) {
            var pd_0 = _co.selectItem($event.label, $event.event) !== false;
            ad = pd_0 && ad;
          }

          if ("onDragEnter" === en) {
            var pd_1 = _co.hintDropTarget($event) !== false;
            ad = pd_1 && ad;
          }

          if ("onDragStart" === en) {
            var pd_2 = _co.itemDragged($event) !== false;
            ad = pd_2 && ad;
          }

          if ("onDrop" === en) {
            var pd_3 = _co.itemDropped($event.event, $event.host) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _single_site_fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SingleSiteFaultDomainNodesComponent_0"], _single_site_fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SingleSiteFaultDomainNodesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridDetailRegisterer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfExpanded"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]], {
          expanded: [0, "expanded"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _single_site_fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_6__["SingleSiteFaultDomainNodesComponent"], [], {
          rootItem: [0, "rootItem"]
        }, {
          onSelectItem: "onSelectItem",
          onDragEnter: "onDragEnter",
          onDragStart: "onDragStart",
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.parent.context.$implicit;

          _ck(_v, 3, 0, currVal_1);
        }, null);
      }

      function View_SingleSiteFaultDomainsPage_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "clr-tree-node", [], [[1, "role", 0], [2, "clr-tree-node", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrTreeNode_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrTreeNode"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, [[5, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          treeNodeLinkList: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 11, "button", [["class", "clr-treenode-link"], ["draggable", "true"], ["droppable", "true"]], [[2, "active", null], [8, "draggable", 0]], [[null, "click"], [null, "onDragEnter"], [null, "onDragStart"], [null, "onDrop"], [null, "dragstart"], [null, "dragend"], [null, "mousedown"], [null, "touchstart"], [null, "drop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("dragstart" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragStart($event) !== false;
            ad = pd_0 && ad;
          }

          if ("dragend" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnd($event) !== false;
            ad = pd_1 && ad;
          }

          if ("mousedown" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("touchstart" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("drop" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).drop($event) !== false;
            ad = pd_4 && ad;
          }

          if ("click" === en) {
            var pd_5 = _co.selectItem(_v.context.$implicit.label, $event) !== false;
            ad = pd_5 && ad;
          }

          if ("onDragEnter" === en) {
            var pd_6 = _co.hintDropTarget(_v.context.$implicit) !== false;
            ad = pd_6 && ad;
          }

          if ("onDragStart" === en) {
            var pd_7 = _co.itemDragged(_v.context.$implicit) !== false;
            ad = pd_7 && ad;
          }

          if ("onDrop" === en) {
            var pd_8 = _co.itemDropped($event, _v.context.$implicit) !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNodeLink"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_7__["Draggable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_8__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dragData: [0, "dragData"]
        }, {
          onDragStart: "onDragStart"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_9__["Droppable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_8__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, {
          onDragEnter: "onDragEnter",
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_10__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["\n            ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleSiteFaultDomainsPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_SingleSiteFaultDomainsPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "]))], function (_ck, _v) {
          _ck(_v, 5, 0);

          var currVal_4 = _v.context.$implicit;

          _ck(_v, 10, 0, currVal_4);

          _ck(_v, 11, 0);

          var currVal_7 = _v.context.$implicit.badgeText;

          _ck(_v, 18, 0, currVal_7);

          var currVal_8 = _v.context.$implicit == null ? null : _v.context.$implicit.hosts;

          _ck(_v, 22, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = "treeitem";
          var currVal_1 = true;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit.selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnabled;

          _ck(_v, 8, 0, currVal_2, currVal_3);

          var currVal_5 = _v.context.$implicit.icon;

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.label;

          _ck(_v, 16, 0, currVal_6);
        });
      }

      function View_SingleSiteFaultDomainsPage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 24, "clr-button-group", [["class", "btn-link"], ["vsan-button-group", ""]], [[2, "btn-group", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrButtonGroup_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrButtonGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1097728, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButtonGroup"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 1064960, null, 1, _directive_clr_button_group_clr_button_group_common_directive__WEBPACK_IMPORTED_MODULE_13__["ClrButtonGroupCommonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          clrButtons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 2, _action_button_button_group_directive__WEBPACK_IMPORTED_MODULE_14__["ButtonGroupDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          maximumInlineActions: [0, "maximumInlineActions"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          buttons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          clrButtons: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 6, "clr-button", [["class", "btn btn-sm"], ["id", "createDomainAction"], ["name", "createDomainAction"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openCreateDomainDialog() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrButton_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 4243456, [[1, 4], [2, 4], [4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdv"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"]], {
          classNames: [0, "classNames"],
          name: [1, "name"],
          id: [2, "id"]
        }, {
          _click: "click"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 212992, [[3, 4]], 0, _action_button_button_title_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonTitleDirective"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrButton"]], {
          title: [0, "title"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](23, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, 0, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](25, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleSiteFaultDomainsPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 12, "div", [["droppable", "true"]], null, [[null, "onDrop"], [null, "drop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("drop" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).drop($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onDrop" === en) {
            var pd_1 = _co.itemDropped($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 212992, null, 0, ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_9__["Droppable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_8__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, {
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 8, "clr-tree", [], [[1, "tabindex", 0], [1, "role", 0], [1, "aria-multiselectable", 0]], [[null, "focusin"]], function (_v, en, $event) {
          var ad = true;

          if ("focusin" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onFocusIn($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrTree_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrTree"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTree"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          rootNodes: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SingleSiteFaultDomainsPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "vsan-create-fault-domain", [], null, [[null, "visibleChange"], [null, "onConfirmation"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("visibleChange" === en) {
            var pd_0 = (_co.createDomainDialogVisible = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirmation" === en) {
            var pd_1 = _co.updateDomains($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _create_fault_domain_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_CreateFaultDomainComponent_0"], _create_fault_domain_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_CreateFaultDomainComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 49152, null, 0, _create_fault_domain_component__WEBPACK_IMPORTED_MODULE_16__["CreateFaultDomainComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"]], {
          domainsAndHosts: [0, "domainsAndHosts"],
          visible: [1, "visible"]
        }, {
          visibleChange: "visibleChange",
          onConfirmation: "onConfirmation"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = "";

          _ck(_v, 15, 0, currVal_2);

          var currVal_3 = "btn btn-sm";
          var currVal_4 = "createDomainAction";
          var currVal_5 = "createDomainAction";

          _ck(_v, 21, 0, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.action.create.tooltip"));

          _ck(_v, 22, 0, currVal_6);

          var currVal_8 = _co.onlyDomainsSelected();

          _ck(_v, 28, 0, currVal_8);

          _ck(_v, 32, 0);

          var currVal_12 = _co.treeContent;

          _ck(_v, 41, 0, currVal_12);

          var currVal_13 = _co.treeContent;
          var currVal_14 = _co.createDomainDialogVisible;

          _ck(_v, 46, 0, currVal_13, currVal_14);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.failuresToTolerate;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = true;

          _ck(_v, 5, 0, currVal_1);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _ck(_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.action.create.label"));

          _ck(_v, 24, 0, currVal_7);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).tabindex;

          var currVal_10 = "tree";

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).isMultiSelectable;

          _ck(_v, 34, 0, currVal_9, currVal_10, currVal_11);
        });
      }

      function View_SingleSiteFaultDomainsPage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_SingleSiteFaultDomainsPage_0, RenderType_SingleSiteFaultDomainsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_18__["SingleSiteFaultDomainsPage"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var SingleSiteFaultDomainsPageNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_18__["SingleSiteFaultDomainsPage"], View_SingleSiteFaultDomainsPage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "FL3K":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/single-site-fault-domain-nodes.scss.shim.ngstyle.js ***!
      \***************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function FL3K(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvc2luZ2xlLXNpdGUtZmF1bHQtZG9tYWluLW5vZGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUFDQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC93aXphcmQvc2hhcmVkLXBhZ2VzL3NpbmdsZS1zaXRlLWZhdWx0LWRvbWFpbi1ub2Rlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"];
      /***/
    },

    /***/
    "FiSP":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/fault-domains-page.component.ngfactory.js ***!
      \*****************************************************************************************************/

    /*! exports provided: RenderType_FaultDomainsPageComponent, View_FaultDomainsPageComponent_0, View_FaultDomainsPageComponent_Host_0, FaultDomainsPageComponentNgFactory */

    /***/
    function FiSP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FaultDomainsPageComponent", function () {
        return RenderType_FaultDomainsPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaultDomainsPageComponent_0", function () {
        return View_FaultDomainsPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaultDomainsPageComponent_Host_0", function () {
        return View_FaultDomainsPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainsPageComponentNgFactory", function () {
        return FaultDomainsPageComponentNgFactory;
      });
      /* harmony import */


      var _fault_domains_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fault-domains-page.scss.shim.ngstyle */
      "Bh/q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fault-domain-nodes.component.ngfactory */
      "Q2Ow");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fault-domain-nodes.component */
      "bcGm");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/draggable.directive */
      "UmOi");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-drag-drop/src/services/ng-drag-drop.service */
      "ZbGM");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/droppable.directive */
      "q6c6");
      /* harmony import */


      var ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _fault_domains_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./fault-domains-page.component */
      "mKD/");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FaultDomainsPageComponent = [_fault_domains_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FaultDomainsPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FaultDomainsPageComponent,
        data: {}
      });

      function View_FaultDomainsPageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "vsan-fault-domain-nodes", [], null, [[null, "onSelect"], [null, "onDrop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onSelect" === en) {
            var pd_0 = _co.selectPreferred($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onDrop" === en) {
            var pd_1 = _co.dropToSecondary($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_FaultDomainNodesComponent_0"], _fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_FaultDomainNodesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridDetailRegisterer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfExpanded"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]], {
          expanded: [0, "expanded"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_4__["FaultDomainNodesComponent"], [], {
          domain: [0, "domain"],
          selectedItem: [1, "selectedItem"],
          dragScope: [2, "dragScope"]
        }, {
          onSelect: "onSelect",
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.parent.context.$implicit;
          var currVal_2 = _co.selectedPreferredItem;
          var currVal_3 = "preferred";

          _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_FaultDomainsPageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "clr-tree-node", [], [[1, "role", 0], [2, "clr-tree-node", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrTreeNode_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrTreeNode"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, [[5, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          treeNodeLinkList: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 10, "button", [["class", "clr-treenode-link"], ["draggable", "true"]], [[2, "active", null], [8, "draggable", 0]], [[null, "click"], [null, "dblclick"], [null, "dragstart"], [null, "dragend"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("dragstart" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragStart($event) !== false;
            ad = pd_0 && ad;
          }

          if ("dragend" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnd($event) !== false;
            ad = pd_1 && ad;
          }

          if ("mousedown" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("touchstart" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("click" === en) {
            var pd_4 = _co.selectPreferred(_v.context.$implicit) !== false;
            ad = pd_4 && ad;
          }

          if ("dblclick" === en) {
            var pd_5 = _co.dropToSecondary({
              dragData: _v.context.$implicit
            }) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[6, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNodeLink"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_6__["Draggable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dragData: [0, "dragData"],
          dragScope: [1, "dragScope"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_FaultDomainsPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          _ck(_v, 5, 0);

          var currVal_4 = _v.context.$implicit;
          var currVal_5 = "preferred";

          _ck(_v, 10, 0, currVal_4, currVal_5);

          var currVal_8 = _v.context.$implicit == null ? null : _v.context.$implicit.children;

          _ck(_v, 21, 0, currVal_8);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "treeitem";
          var currVal_1 = true;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit === _co.selectedPreferredItem;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnabled;

          _ck(_v, 8, 0, currVal_2, currVal_3);

          var currVal_6 = _v.context.$implicit.iconId;

          _ck(_v, 12, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.label;

          _ck(_v, 17, 0, currVal_7);
        });
      }

      function View_FaultDomainsPageComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 4, "vsan-fault-domain-nodes", [], null, [[null, "onSelect"], [null, "onDrop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onSelect" === en) {
            var pd_0 = _co.selectSecondary($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onDrop" === en) {
            var pd_1 = _co.dropToPreferred($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_FaultDomainNodesComponent_0"], _fault_domain_nodes_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_FaultDomainNodesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrDatagridDetailRegisterer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcw"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfExpanded"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]], {
          expanded: [0, "expanded"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_4__["FaultDomainNodesComponent"], [], {
          domain: [0, "domain"],
          selectedItem: [1, "selectedItem"],
          dragScope: [2, "dragScope"]
        }, {
          onSelect: "onSelect",
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.parent.context.$implicit;
          var currVal_2 = _co.selectedSecondaryItem;
          var currVal_3 = "secondary";

          _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_FaultDomainsPageComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "clr-tree-node", [], [[1, "role", 0], [2, "clr-tree-node", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrTreeNode_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrTreeNode"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, [[11, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          treeNodeLinkList: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 10, "button", [["class", "clr-treenode-link"], ["draggable", "true"]], [[2, "active", null], [8, "draggable", 0]], [[null, "click"], [null, "dblclick"], [null, "dragstart"], [null, "dragend"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("dragstart" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragStart($event) !== false;
            ad = pd_0 && ad;
          }

          if ("dragend" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnd($event) !== false;
            ad = pd_1 && ad;
          }

          if ("mousedown" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("touchstart" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("click" === en) {
            var pd_4 = _co.selectSecondary(_v.context.$implicit) !== false;
            ad = pd_4 && ad;
          }

          if ("dblclick" === en) {
            var pd_5 = _co.dropToPreferred({
              dragData: _v.context.$implicit
            }) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[12, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNodeLink"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_6__["Draggable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dragData: [0, "dragData"],
          dragScope: [1, "dragScope"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_FaultDomainsPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          _ck(_v, 5, 0);

          var currVal_4 = _v.context.$implicit;
          var currVal_5 = "secondary";

          _ck(_v, 10, 0, currVal_4, currVal_5);

          var currVal_8 = _v.context.$implicit == null ? null : _v.context.$implicit.children;

          _ck(_v, 21, 0, currVal_8);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "treeitem";
          var currVal_1 = true;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit === _co.selectedSecondaryItem;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnabled;

          _ck(_v, 8, 0, currVal_2, currVal_3);

          var currVal_6 = _v.context.$implicit.iconId;

          _ck(_v, 12, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.label;

          _ck(_v, 17, 0, currVal_7);
        });
      }

      function View_FaultDomainsPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 114, "div", [["class", "configure-fd"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 45, "div", [["class", "fd-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 28, "div", [["class", "flex-input-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 25, "clr-input-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrInputContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrInputContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 1228800, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbh"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 3, "label", [["for", "preferredNameInput"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](22, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 16777216, null, 1, 8, "input", [["class", "fd-name"], ["clrInput", ""], ["id", "preferredNameInput"], ["maxlength", "256"], ["type", "text"]], [[1, "maxlength", 0], [2, "clr-input", null], [8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("blur" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).triggerValidation() !== false;
            ad = pd_4 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_5 = (_co.preferredName = $event) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 12, "div", [["class", "fd-tree-component"], ["droppable", "true"]], null, [[null, "onDrop"], [null, "drop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("drop" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).drop($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onDrop" === en) {
            var pd_1 = _co.dropToPreferred($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 212992, null, 0, ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_12__["Droppable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dropScope: [0, "dropScope"]
        }, {
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 8, "clr-tree", [], [[1, "tabindex", 0], [1, "role", 0], [1, "aria-multiselectable", 0]], [[null, "focusin"]], function (_v, en, $event) {
          var ad = true;

          if ("focusin" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onFocusIn($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrTree_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrTree"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTree"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          rootNodes: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_FaultDomainsPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 17, "div", [["class", "fd-move-button-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 6, "button", [["class", "btn fd-move-btn"], ["id", "moveToSecondaryButton"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.moveToSecondary() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](54, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "clr-icon", [["shape", "collapse right"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 6, "button", [["class", "btn fd-move-btn"], ["id", "moveToPrimaryButton"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.moveToPreferred() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](62, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "clr-icon", [["shape", "collapse left"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_8__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 45, "div", [["class", "fd-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 28, "div", [["class", "flex-input-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 25, "clr-input-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrInputContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrInputContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 1228800, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbh"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, 0, 3, "label", [["for", "secondaryNameInput"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 212992, [[7, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](88, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 16777216, null, 1, 8, "input", [["class", "fd-name"], ["clrInput", ""], ["id", "secondaryNameInput"], ["maxlength", "256"], ["type", "text"]], [[1, "maxlength", 0], [2, "clr-input", null], [8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("blur" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).triggerValidation() !== false;
            ad = pd_4 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_5 = (_co.secondaryName = $event) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 12, "div", [["class", "fd-tree-component"], ["droppable", "true"]], null, [[null, "onDrop"], [null, "drop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("drop" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).drop($event) !== false;
            ad = pd_0 && ad;
          }

          if ("onDrop" === en) {
            var pd_1 = _co.dropToSecondary($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 212992, null, 0, ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_12__["Droppable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dropScope: [0, "dropScope"]
        }, {
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 8, "clr-tree", [], [[1, "tabindex", 0], [1, "role", 0], [1, "aria-multiselectable", 0]], [[null, "focusin"]], function (_v, en, $event) {
          var ad = true;

          if ("focusin" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).onFocusIn($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ClrTree_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ClrTree"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 1228800, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTree"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          rootNodes: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_FaultDomainsPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = "preferredNameInput";

          _ck(_v, 20, 0, currVal_4);

          var currVal_16 = "256";

          _ck(_v, 25, 0, currVal_16);

          var currVal_17 = _co.preferredName;

          _ck(_v, 29, 0, currVal_17);

          var currVal_18 = "preferredNameInput";

          _ck(_v, 31, 0, currVal_18);

          var currVal_19 = "secondary";

          _ck(_v, 37, 0, currVal_19);

          var currVal_23 = _co.preferredDomains;

          _ck(_v, 46, 0, currVal_23);

          var currVal_30 = "secondaryNameInput";

          _ck(_v, 86, 0, currVal_30);

          var currVal_42 = "256";

          _ck(_v, 91, 0, currVal_42);

          var currVal_43 = _co.secondaryName;

          _ck(_v, 95, 0, currVal_43);

          var currVal_44 = "secondaryNameInput";

          _ck(_v, 97, 0, currVal_44);

          var currVal_45 = "preferred";

          _ck(_v, 103, 0, currVal_45);

          var currVal_49 = _co.secondaryDomains;

          _ck(_v, 112, 0, currVal_49);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).addGrid();

          _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).forAttr;

          _ck(_v, 19, 0, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.preferredDomain.label"));

          _ck(_v, 21, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).maxlength : null;
          var currVal_7 = true;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).id;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending;

          _ck(_v, 24, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).tabindex;

          var currVal_21 = "tree";

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).isMultiSelectable;

          _ck(_v, 39, 0, currVal_20, currVal_21, currVal_22);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 53, 0, _ck(_v, 54, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.moveToSecondaryDomain.label"));

          _ck(_v, 53, 0, currVal_24);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 61, 0, _ck(_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.moveToPreferredDomain.label"));

          _ck(_v, 61, 0, currVal_25);

          var currVal_26 = true;
          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).control.disabled;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).addGrid();

          _ck(_v, 74, 0, currVal_26, currVal_27, currVal_28);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).forAttr;

          _ck(_v, 85, 0, currVal_29);

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 87, 0, _ck(_v, 88, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.secondaryDomain.label"));

          _ck(_v, 87, 0, currVal_31);

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).maxlength : null;
          var currVal_33 = true;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).id;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassUntouched;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassTouched;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassPristine;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassDirty;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassValid;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassInvalid;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassPending;

          _ck(_v, 90, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41);

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).tabindex;

          var currVal_47 = "tree";

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).isMultiSelectable;

          _ck(_v, 105, 0, currVal_46, currVal_47, currVal_48);
        });
      }

      function View_FaultDomainsPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_FaultDomainsPageComponent_0, RenderType_FaultDomainsPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _fault_domains_page_component__WEBPACK_IMPORTED_MODULE_13__["FaultDomainsPageComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var FaultDomainsPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _fault_domains_page_component__WEBPACK_IMPORTED_MODULE_13__["FaultDomainsPageComponent"], View_FaultDomainsPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "IzOX":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/witness-host-requirements.scss.shim.ngstyle.js ***!
      \**********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function IzOX(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: inline-block;\n}\nul[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n  padding-left: 1.2rem;\n}\nclr-signpost#witness-host-requirements[_ngcontent-%COMP%]   .signpost-content[_ngcontent-%COMP%] {\n  max-width: 30rem;\n}\nclr-signpost#witness-host-requirements[_ngcontent-%COMP%]   .signpost-content[_ngcontent-%COMP%]    .signpost-wrap .signpost-content-body {\n  max-height: 9.6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvd2l0bmVzcy1ob3N0LXJlcXVpcmVtZW50cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0cscUJBQUE7QUFjSDtBQVhBO0VBQ0csa0JHU087RUhSUCxvQkdNTztBSFFWO0FBVEE7RUFDRyxnQkFIa0I7QUFlckI7QUFYRztFQUNHLDZCQUFBO0FBYU4iLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvd2l6YXJkL3NoYXJlZC1wYWdlcy93aXRuZXNzLWhvc3QtcmVxdWlyZW1lbnRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMC0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnVsIHtcbiAgIG1hcmdpbi10b3A6ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgIHBhZGRpbmctbGVmdDogJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uO1xufVxuXG4kc2lnbnBvc3QtbWF4LXdpZHRoOiAzMHJlbTtcbiRzaWducG9zdC1tYXgtaGVpZ2h0OiA5LjZyZW07XG5jbHItc2lnbnBvc3Qjd2l0bmVzcy1ob3N0LXJlcXVpcmVtZW50cyAuc2lnbnBvc3QtY29udGVudCB7XG4gICBtYXgtd2lkdGg6ICRzaWducG9zdC1tYXgtd2lkdGg7XG4gICA6Om5nLWRlZXAuc2lnbnBvc3Qtd3JhcCAuc2lnbnBvc3QtY29udGVudC1ib2R5IHtcbiAgICAgIG1heC1oZWlnaHQ6ICRzaWducG9zdC1tYXgtaGVpZ2h0ICFpbXBvcnRhbnQ7XG4gICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "M+L7":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/single-site-fault-domain-nodes.component.ngfactory.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: RenderType_SingleSiteFaultDomainNodesComponent, View_SingleSiteFaultDomainNodesComponent_0, View_SingleSiteFaultDomainNodesComponent_Host_0, SingleSiteFaultDomainNodesComponentNgFactory */

    /***/
    function ML7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SingleSiteFaultDomainNodesComponent", function () {
        return RenderType_SingleSiteFaultDomainNodesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleSiteFaultDomainNodesComponent_0", function () {
        return View_SingleSiteFaultDomainNodesComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleSiteFaultDomainNodesComponent_Host_0", function () {
        return View_SingleSiteFaultDomainNodesComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleSiteFaultDomainNodesComponentNgFactory", function () {
        return SingleSiteFaultDomainNodesComponentNgFactory;
      });
      /* harmony import */


      var _single_site_fault_domain_nodes_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-site-fault-domain-nodes.scss.shim.ngstyle */
      "FL3K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/draggable.directive */
      "UmOi");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-drag-drop/src/services/ng-drag-drop.service */
      "ZbGM");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/droppable.directive */
      "q6c6");
      /* harmony import */


      var ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _single_site_fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./single-site-fault-domain-nodes.component */
      "VYrB");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SingleSiteFaultDomainNodesComponent = [_single_site_fault_domain_nodes_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SingleSiteFaultDomainNodesComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SingleSiteFaultDomainNodesComponent,
        data: {}
      });

      function View_SingleSiteFaultDomainNodesComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "badge badge-light-blue drop-hint-badge-opacity"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n      ", "\n   "]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.badgeText;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SingleSiteFaultDomainNodesComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "clr-tree-node", [], [[1, "role", 0], [2, "clr-tree-node", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrTreeNode_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrTreeNode"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          treeNodeLinkList: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 11, "button", [["class", "clr-treenode-link"], ["draggable", "true"], ["droppable", "true"]], [[2, "active", null], [8, "draggable", 0]], [[null, "click"], [null, "onDragEnter"], [null, "onDragStart"], [null, "onDrop"], [null, "dragstart"], [null, "dragend"], [null, "mousedown"], [null, "touchstart"], [null, "drop"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("dragstart" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragStart($event) !== false;
            ad = pd_0 && ad;
          }

          if ("dragend" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnd($event) !== false;
            ad = pd_1 && ad;
          }

          if ("mousedown" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("touchstart" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("drop" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).drop($event) !== false;
            ad = pd_4 && ad;
          }

          if ("click" === en) {
            var pd_5 = _co.onSelectItem.emit({
              label: _v.context.$implicit.label,
              event: $event
            }) !== false;
            ad = pd_5 && ad;
          }

          if ("onDragEnter" === en) {
            var pd_6 = _co.onDragEnter.emit(_v.context.$implicit) !== false;
            ad = pd_6 && ad;
          }

          if ("onDragStart" === en) {
            var pd_7 = _co.onDragStart.emit(_v.context.$implicit) !== false;
            ad = pd_7 && ad;
          }

          if ("onDrop" === en) {
            var pd_8 = _co.onDrop.emit({
              event: $event,
              host: _v.context.$implicit
            }) !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNodeLink"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4__["Draggable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dragData: [0, "dragData"]
        }, {
          onDragStart: "onDragStart"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, ng_drag_drop_src_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_6__["Droppable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, {
          onDragEnter: "onDragEnter",
          onDrop: "onDrop"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["\n      ", "\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleSiteFaultDomainNodesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          _ck(_v, 5, 0);

          var currVal_4 = _v.context.$implicit;

          _ck(_v, 10, 0, currVal_4);

          _ck(_v, 11, 0);

          var currVal_7 = _v.context.$implicit.badgeText;

          _ck(_v, 18, 0, currVal_7);
        }, function (_ck, _v) {
          var currVal_0 = "treeitem";
          var currVal_1 = true;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _v.context.$implicit.selected;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnabled;

          _ck(_v, 8, 0, currVal_2, currVal_3);

          var currVal_5 = _v.context.$implicit.icon;

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.label;

          _ck(_v, 16, 0, currVal_6);
        });
      }

      function View_SingleSiteFaultDomainNodesComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleSiteFaultDomainNodesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.rootItem.hosts;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_SingleSiteFaultDomainNodesComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-single-site-fault-domain-nodes", [], null, null, null, View_SingleSiteFaultDomainNodesComponent_0, RenderType_SingleSiteFaultDomainNodesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _single_site_fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_9__["SingleSiteFaultDomainNodesComponent"], [], null, null)], null, null);
      }

      var SingleSiteFaultDomainNodesComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-single-site-fault-domain-nodes", _single_site_fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_9__["SingleSiteFaultDomainNodesComponent"], View_SingleSiteFaultDomainNodesComponent_Host_0, {
        rootItem: "rootItem"
      }, {
        onSelectItem: "onSelectItem",
        onDragEnter: "onDragEnter",
        onDragStart: "onDragStart",
        onDrop: "onDrop"
      }, []);
      /***/

    },

    /***/
    "Q2Ow":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/fault-domain-nodes.component.ngfactory.js ***!
      \*****************************************************************************************************/

    /*! exports provided: RenderType_FaultDomainNodesComponent, View_FaultDomainNodesComponent_0, View_FaultDomainNodesComponent_Host_0, FaultDomainNodesComponentNgFactory */

    /***/
    function Q2Ow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FaultDomainNodesComponent", function () {
        return RenderType_FaultDomainNodesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaultDomainNodesComponent_0", function () {
        return View_FaultDomainNodesComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FaultDomainNodesComponent_Host_0", function () {
        return View_FaultDomainNodesComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainNodesComponentNgFactory", function () {
        return FaultDomainNodesComponentNgFactory;
      });
      /* harmony import */


      var _fault_domain_nodes_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fault-domain-nodes.scss.shim.ngstyle */
      "zZW2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-drag-drop/src/directives/draggable.directive */
      "UmOi");
      /* harmony import */


      var ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-drag-drop/src/services/ng-drag-drop.service */
      "ZbGM");
      /* harmony import */


      var ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./fault-domain-nodes.component */
      "bcGm");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FaultDomainNodesComponent = [_fault_domain_nodes_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FaultDomainNodesComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FaultDomainNodesComponent,
        data: {}
      });

      function View_FaultDomainNodesComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "clr-tree-node", [], [[1, "role", 0], [2, "clr-tree-node", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrTreeNode_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrTreeNode"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdq"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNode"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵds"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          treeNodeLinkList: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 10, "button", [["class", "clr-treenode-link"], ["draggable", "true"]], [[2, "active", null], [8, "draggable", 0]], [[null, "click"], [null, "dblclick"], [null, "dragstart"], [null, "dragend"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("dragstart" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragStart($event) !== false;
            ad = pd_0 && ad;
          }

          if ("dragend" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnd($event) !== false;
            ad = pd_1 && ad;
          }

          if ("mousedown" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_2 && ad;
          }

          if ("touchstart" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).mousedown($event) !== false;
            ad = pd_3 && ad;
          }

          if ("click" === en) {
            var pd_4 = _co.onSelect.emit(_v.context.$implicit) !== false;
            ad = pd_4 && ad;
          }

          if ("dblclick" === en) {
            var pd_5 = _co.onDrop.emit({
              dragData: _v.context.$implicit
            }) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTreeNodeLink"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, ng_drag_drop_src_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_4__["Draggable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_drag_drop_src_services_ng_drag_drop_service__WEBPACK_IMPORTED_MODULE_5__["NgDragDropService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          dragData: [0, "dragData"],
          dragScope: [1, "dragScope"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 5, 0);

          var currVal_4 = _v.context.$implicit;
          var currVal_5 = _co.dragScope;

          _ck(_v, 10, 0, currVal_4, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "treeitem";
          var currVal_1 = true;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _co.domain === _co.selectedItem || _v.context.$implicit === _co.selectedItem;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).dragEnabled;

          _ck(_v, 8, 0, currVal_2, currVal_3);

          var currVal_6 = _v.context.$implicit.iconId;

          _ck(_v, 12, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.label;

          _ck(_v, 17, 0, currVal_7);
        });
      }

      function View_FaultDomainNodesComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FaultDomainNodesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.domain.children;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_FaultDomainNodesComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-fault-domain-nodes", [], null, null, null, View_FaultDomainNodesComponent_0, RenderType_FaultDomainNodesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_8__["FaultDomainNodesComponent"], [], null, null)], null, null);
      }

      var FaultDomainNodesComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-fault-domain-nodes", _fault_domain_nodes_component__WEBPACK_IMPORTED_MODULE_8__["FaultDomainNodesComponent"], View_FaultDomainNodesComponent_Host_0, {
        domain: "domain",
        selectedItem: "selectedItem",
        dragScope: "dragScope"
      }, {
        onSelect: "onSelect",
        onDrop: "onDrop"
      }, []);
      /***/

    },

    /***/
    "S2lL":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/single-site-fault-domains-page.scss.shim.ngstyle.js ***!
      \***************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function S2lL(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvc2luZ2xlLXNpdGUtZmF1bHQtZG9tYWlucy1wYWdlLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FIa0RHO0VBQ0csZ0NBQUE7QUZqQ047QUVtQ0c7O0VBR0csZ0NBQUE7QUZsQ047QUVvQ0c7RUFDRyw4QkFBQTtBRmxDTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC93aXphcmQvc2hhcmVkLXBhZ2VzL3NpbmdsZS1zaXRlLWZhdWx0LWRvbWFpbnMtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "TsBT":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/witness-host-page.scss.shim.ngstyle.js ***!
      \**************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function TsBT(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvd2l0bmVzcy1ob3N0LXBhZ2Uuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUhrREc7RUFDRyxnQ0FBQTtBRmpDTjtBRW1DRzs7RUFHRyxnQ0FBQTtBRmxDTjtBRW9DRztFQUNHLDhCQUFBO0FGbENOIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvd2l0bmVzcy1ob3N0LXBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5LTIwMjAgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufSIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG4vLyBJbXBvcnQgdGhpcyBmaWxlIHRvIG90aGVyIHNjc3MgaWYgbmVlZGVkLiBUaGlzIGZpbGUgcmVmZXJzIGFsbCB0aGUgbmVlZGVkIHNjc3MgcmVzb3VyY2VzLlxuQGltcG9ydCBcIi4vdnNhbi1taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vdnNhbi1yZXNwb25zaXZlLnNjc3NcIjsiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1kZWZhdWx0cy5zY3NzXCI7XG5cbkBtaXhpbiBhZGQtYm9yZGVyLXJhZGl1cyAoJHJhZGl1cy10b3AtbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtdG9wLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSkge1xuICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cy10b3AtbGVmdCAkcmFkaXVzLXRvcC1yaWdodCAkcmFkaXVzLWJvdHRvbS1yaWdodCAkcmFkaXVzLWJvdHRvbS1sZWZ0O1xufVxuXG5AbWl4aW4gdGV4dC1lbGxpcHNpcyB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBBZGQgYnV0dG9uIGZvY3VzIHN0YXR1cyBpbmRpY2F0b3IuXG5AbWl4aW4gYnV0dG9uLWZvY3VzLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwIDAgJHZzYW4tb3V0bGluZS1zaXplICRjb2xvcjtcbn1cblxuLypcbiAgIEFkZCBidXR0b24gZm9jdXMgaW5kaWNhdG9yIHdpdGggb3V0bGluZS5cbiAgIEluIGhpZ2ggY29udHJhc3QgbW9kZSwgdGhlIGJvcmRlciBpcyBub3QgdmlzaWJsZS5cbiAgIFdlIHNob3VsZCB1c2UgYW4gb3V0bGluZSB0byBzaG93IGZvY3VzZWQgZWxlbWVudHMgaW4gdGhhdCBjYXNlLlxuKi9cbkBtaXhpbiBidG4tb3V0bGluZS1zdHlsZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIG91dGxpbmUtb2Zmc2V0OiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAqIDIgc29saWQgJGNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZCBjYXJkIGRyYWcgc3RhdGUgaW5kaWNhdG9yLlxuQG1peGluIGNhcmQtbW92ZS1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAkdnNhbi1vdXRsaW5lLXNpemUgMCAwICRjb2xvcjtcbn1cblxuQG1peGluIGRyYWdnYWJsZS1jYXJkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMCAwIGF1dG87XG4gICBtaW4td2lkdGg6ICR2c2FuLWNhcmQtd2lkdGg7XG59XG5cbi8qKlxuICAgSW5jbHVkZSB0aGlzIG1peGluIGF0IDpob3N0IGxldmVsIHRvIG1ha2UgZXZlcnkgdG9wIGxldmVsIGNvbXBvbmVudCBpbiB0aGUgdmlld1xuICAgaGF2ZSBhIGJvdHRvbSBtYXJnaW4sIGJlc2lkZXMgdGhlIGxhc3Qgb25lLlxuICovXG5AbWl4aW4gY2hpbGQtYm90dG9tLXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiBjbHItYnV0dG9uLWdyb3VwLFxuICAgPiAudnNhbi1hY3Rpb25zIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWJ1dHRvbi1ncm91cHNcbiAgICAgIG1hcmdpbi1ib3R0b206ICR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG5AbWl4aW4gc2libGluZy1yaWdodC1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgICYgPiBjbHItc2lnbnBvc3Qge1xuICAgICAgLy8gV2hlbiB0aGUgZWxlbWVudCBpcyBhIHNpZ25wb3N0IHJlZHVjZSB0aGUgc3BhY2luZyBwcmlvci9hZnRlciBpdC5cbiAgICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gXCJwcmV2aW91cyBzaWJsaW5nXCIgc2VsZWN0b3JcbiAgICAgIC8vIHNvIHRoZSBvbmx5IHdheSB0byBmaXggdGhlIHByZXZpb3VzIGVsZW1lbnQncyBzcGFjaW5nIGlzIHRvIGFkZCBuZWdhdGl2ZSBtYXJnaW4tbGVmdFxuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgICYgPiBjbHItaWNvbiB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1pY29uc1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gZWxlbWVudCBiZWZvcmUgdGhlIGljb24sIGtlZXAgaXQgY2xvc2VyIHRvIGl0LiBTYW1lIGFzIHJ1bGUgYWJvdmUuXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbi8vIEJhY2tncm91bmQgc3R5bGUgd2l0aCBsaW5lYXIgZ3JhZGllbnQgdG8gaW1pdGF0ZSBzdHJpcGVzXG5AbWl4aW4gbm8tY2FwYWNpdHktYmFja2dyb3VuZCgkc2l6ZTogNXB4LCAkY29sb3I6IHZhcigtLXZzYW4tY29sb3IpKSB7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDM0JSwgJGNvbG9yIDM0JSwgJGNvbG9yIDUxJSwgdHJhbnNwYXJlbnQgNTElLCB0cmFuc3BhcmVudCA4NCUsICRjb2xvciA4NCUsICAkY29sb3IgMTAwJSk7XG4gICBiYWNrZ3JvdW5kLXNpemU6ICRzaXplICRzaXplO1xufVxuXG5AbWl4aW4gc2VsZWN0ZWQtZW50aXR5LWZvbnQtc3R5bGUoKSB7XG4gICBmb250LWZhbWlseTogJ01ldHJvcG9saXMnO1xuICAgZm9udC13ZWlnaHQ6ICR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZztcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gQ3JlYXRlcyBhIGNpcmNsZVxuQG1peGluIGNpcmNsZSgkc2l6ZTogMC42cmVtLCAkYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWFpbiwgJGJvcmRlcjogJHZzYW4tYm9yZGVyKSB7XG4gICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgIGJvcmRlcjogJGJvcmRlcjtcbiAgIHdpZHRoOiAkc2l6ZTtcbiAgIGhlaWdodDogJHNpemU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tY29sb3JzLnNjc3NcIjtcblxuLyogRGVmYXVsdHMgKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEZWZhdWx0IGZvbnQtc2l6ZSBmcm9tIENsYXJpdHkgVUkgdi4zLjAuMFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICBodG1sIHtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGFjaW5nc1xuJHZzYW4teHhsOiAxLjhyZW0gIWRlZmF1bHQ7ICAgLy8gMzZweFxuJHZzYW4teGw6IDEuMnJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJHZzYW4tbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAgLy8gMThweFxuJHZzYW4tbWQ6IDAuNnJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuJHZzYW4tc206IDAuNDVyZW0gIWRlZmF1bHQ7ICAgLy8gOXB4XG4kdnNhbi14czogMC4zcmVtICFkZWZhdWx0OyAgICAvLyA2cHhcbiR2c2FuLXh4czogMC4xNXJlbSAhZGVmYXVsdDsgIC8vIDNweFxuJHZzYW4teHh4czogMC4wNXJlbSAhZGVmYXVsdDsgLy8gMXB4XG4kdnNhbi0wOiAwcmVtICFkZWZhdWx0O1xuXG4kdnNhbi1lbGVtZW50LXNwYWNpbmc6ICR2c2FuLW1kO1xuJHZzYW4tY29udGFpbmVyLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZyoyO1xuJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcvMjtcbi8vIEZvciBuZXN0aW5nIGVsZW1lbnRzIHdpdGhpbiBhIHZpZXdcbiR2c2FuLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teGw7XG4vLyBUaGUgZHJvcGRvd24gaXRlbXMgYWxyZWFkeSBoYXZlIDEuMnJlbSBwYWRkaW5nLCBzbyB0byBoYXZlIG5lc3RlZCBpdGVtcyB3ZSBuZWVkIDEuOHJlbSBpbmRlbnRhdGlvblxuJHZzYW4tZHJvcGRvd24tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14eGw7XG4vLyBVc2UgdGhpcyBvdXRsaW5lIHNpemUgaW4gZGlhbG9ncy9tb2RhbHMvcGFnZXMsIHdoZXJlIHdlIGhhdmUgYSBjb21wb25lbnQgbGlrZSBjaGVja2JveCwgdGhhdCBoYXMgYVxuLy8gYmFja2dyb3VuZCBjb2xvciwgd2hpY2ggb3RoZXJ3aXNlIGdldHMgdHJ1bmNhdGVkLlxuJHZzYW4tb3V0bGluZS1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1vdXRsaW5lLXNpemUtc21hbGw6ICR2c2FuLXh4eHM7XG5cbi8vIEljb25zXG4kdnNhbi1pY29uLXNpemUteHM6IDAuN3JlbSAhZGVmYXVsdDsgICAvLzE0cHhcbiR2c2FuLWljb24tc2l6ZS1zbTogMC44cmVtICFkZWZhdWx0OyAgIC8vMTZweFxuJHZzYW4taWNvbi1zaXplLW1kOiAxcmVtICFkZWZhdWx0OyAgICAgLy8yMHB4XG4kdnNhbi1pY29uLXNpemUtbGc6IDEuMnJlbSAhZGVmYXVsdDsgICAvLzI0cHhcbiR2c2FuLWljb24tc2l6ZTogJHZzYW4taWNvbi1zaXplLXNtICFkZWZhdWx0OyAgICAgLy8xNnB4XG4kdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZzogJHZzYW4teHM7ICAgICAgLy8gVGhlIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgcmVsYXRlZCB0ZXh0LCBldGMuXG5cbi8vIEJvcmRlcnNcbiR2c2FuLWJvcmRlci1wb3NpdGlvbi1hbGw6IGFsbCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemU6ICR2c2FuLXh4eHMgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuOiBzb2xpZCAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I7XG4kYm9yZGVyLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbi8vIEJvcmRlciBSYWRpdXNcbiR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplOiAkdnNhbi14eHM7XG4kdnNhbi1ib3JkZXItcmFkaXVzLW1lZGl1bS1zaXplOiAkdnNhbi1zbTtcbiR2c2FuLWJvcmRlci1yYWRpdXMtc21hbGwtc2l6ZTogJHZzYW4teHh4cztcblxuLy8gQmFja2dyb3VuZCAmIGNvbG9yc1xuJGJhY2tncm91bmQtY29sb3ItbWFpbjogdmFyKC0tdnNhbi1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZDogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItaG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3ItYnV0dG9uLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJhY2tkcm9wOiB2YXIoLS12c2FuLWJ1c3ktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcik7XG4kZGlzYWJsZWQtY29sb3I6ICR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTtcbiR2c2FuLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4kdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZTogdmFyKC0tdnNhbi1mb250LWNvbG9yLWVtcGhhc2l6ZSk7XG4kdnNhbi1ob3Zlci1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3ItaG92ZXIpO1xuJHZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yKTtcblxuLy8gQ2xhcml0eSB2NCBjb2xvcnMgaW4gb3JkZXIgdG8gcmVzb2x2ZSBzb21lIGFjY2Vzc2liaWxpdHkgaXNzdWVzXG4kbGFiZWwtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tdGV4dC1jb2xvcik7XG4kbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci1ib3JkZXItY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtc2VsZWN0ZWQtcm93LWNvbG9yKTtcblxuJGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLXRleHQtY29sb3IpO1xuJGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLXRleHQtY29sb3IpO1xuJGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLXRleHQtY29sb3IpO1xuJGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG5cbi8vIHN0YXR1cyBjb2xvcnNcbiRzdGF0dXMtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJnLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYmctY29sb3IpO1xuJHN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8taW5uZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8taW5uZXItY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYmctY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJnLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1iYWNrZ3JvdW5kLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1zZWNvbmRhcnktY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWRldGFpbHMtY29sb3IpO1xuXG4vLyBJY29uIGNvbG9yc1xuJGljb24tZmlsbC1jb2xvcjogdmFyKC0taWNvbi1maWxsLWNvbG9yKTtcblxuLy8gRm9udFxuJHZzYW4tZm9udC1zaXplLXh4czogMC41cmVtICFkZWZhdWx0OyAgLy8gMTBweFxuJHZzYW4tZm9udC1zaXplLXhzOiAwLjU1cmVtICFkZWZhdWx0OyAgLy8gMTFweFxuJHZzYW4tZm9udC1zaXplLXNtOiAwLjY1cmVtICFkZWZhdWx0OyAgLy8gMTNweFxuJHZzYW4tZm9udC1zaXplLW1kOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJHZzYW4tZm9udC1zaXplLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJHZzYW4tZm9udC1zaXplLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8gMjRweFxuJHZzYW4tZm9udC1kZWZhdWx0LWNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKTtcbiR2c2FuLWxpbmUtaGVpZ2h0LW1kOiAkdnNhbi14bDtcbiR2c2FuLWxpbmUtaGVpZ2h0LXNtOiAwLjhyZW07ICAgLy8xNnB4XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14czogMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtc206IDEuMWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQtbWQ6IDEuM2VtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteGw6IDEuNWVtO1xuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHhsOiAyZW07XG4kdnNhbi1mb250LXdlaWdodC1zdHJvbmc6IDYwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LWhpZ2hsaWdodDogNTAwO1xuJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG5cbi8vIFotaW5kZXhlc1xuJHZzYW4tei1pbmRleC1sYXllci0xOiAxMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTI6IDIwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMzogMzAwO1xuJHZzYW4tei1pbmRleC1sYXllci00OiA0MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTU6IDUwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNjogNjAwO1xuJHZzYW4tei1pbmRleC1sYXllci03OiA3MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTg6IDgwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItOTogOTAwO1xuLy8gVXNlZCB0byBrZWVwIHRoZSBlbGVtZW50IGFsd2F5cyBvbiB0aGUgdG9wIGxheWVyLiBEbyBub3QgY3JlYXRlIGNvbnN0YW50IHdpdGggYmlnZ2VyIHZhbHVlXG4kdnNhbi16LWluZGV4LWxheWVyLXRvcDogMTAwMDtcblxuLy8gT3BhY2l0eVxuJHZzYW4tZGlzYWJsZWQtZWxlbWVudC1vcGFjaXR5OiAwLjU0O1xuXG4vLyBTcGlubmVycyAtIHRoZSBzaXplIGlzIHRha2VuIGZyb20gQ2xhcml0eSdzIGRvY3VtZW50YXRpb24gdi4yLiBUaGV5IHdpbGwgY2hhbmdlIGluIHYuM1xuJHNwaW5uZXItc20tc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItaW5saW5lLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLW1kLXNpemU6IDEuOHJlbTtcbiRzcGlubmVyLWxhcmdlLXNpemU6IDMuNnJlbTtcblxuLy8gQ2FyZHMgbGF5b3V0IGRlZmF1bHRzXG4kdnNhbi1jYXJkLXdpZHRoOiAyNHJlbTtcbiR2c2FuLWNhcmQtbWF4LXdpZHRoOiAzNnJlbTtcblxuLy8gQ2hlY2tlZCByYWRpbyBidXR0b24gYm9yZGVyIHdpZHRoIGluIGhpZ2ggY29udHJhc3QgbW9kZVxuJGhpZ2gtY29udHJhc3QtcmFkaW8tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICogNTsgLy8gaGlnaCBjb250cmFzdCBtb2RlIGJvcmRlciBzaWRlIDAuMjVyZW1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4kdnNhbi13aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiR2c2FuLWJsYWNrOiAjMDAwICFkZWZhdWx0O1xuLy8gR3JleSBTY2FsZVxuJHZzYW4tbmVhci13aGl0ZTogI2ZhZmFmYSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LWdyYXk6ICNlZWUgIWRlZmF1bHQ7XG4kdnNhbi1saWdodGVyLW1pZHRvbmUtZ3JheTogI2RkZCAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0LW1pZHRvbmUtZ3JheTogI2NjYyAhZGVmYXVsdDtcbiR2c2FuLWRhcmstbWlkdG9uZS1ncmF5OiAjOWE5YTlhICFkZWZhdWx0O1xuJHZzYW4tZ3JheTogdmFyKC0tdnNhbi1ncmF5LWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWRhcmstZ3JheTogIzU2NTY1NiAhZGVmYXVsdDtcbiR2c2FuLW5lYXItYmxhY2s6ICMzMTMxMzEgIWRlZmF1bHQ7XG4vLyBHcmV5IEJsdWVcbiR2c2FuLWdyZXktYmx1ZS10aGUtbGlnaHRlc3Q6ICNmM2Y2ZmEgIWRlZmF1bHQ7XG4kdnNhbi1ncmV5LWJsdWUtbGlnaHRlc3Q6ICNEOUU0RUEgIWRlZmF1bHQ7XG4vLyBCbHVlXG4kdnNhbi1ibHVlOiAjMDA2NWFiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlc3Q6ICNlMWYxZjYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVyOiAjODljYmRmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQ6ICM0OWFmZDkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodC1taWR0b25lOiAjMDA5NWQzICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrLW1pZHRvbmU6ICMwMDdjYmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrOiAjMDA0YTcwICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VyOiAjMDAzZDc5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFya2VzdDogIzAwMjQzOCAhZGVmYXVsdDtcbi8vIFB1cnBsZVxuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVzdDogI2YzZTZmZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlcjogI2UxYzlmMSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQ6ICNiZTkwZDYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0LW1pZHRvbmU6ICM5YjU2YmIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrLW1pZHRvbmU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcms6ICM2NjAwOTIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlcjogIzRkMDA3YSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VzdDogIzI4MTMzNiAhZGVmYXVsdDtcbi8vIFJlZFxuJHZzYW4tcmVkLWxpZ2h0ZXN0OiAjZmZmMGVlICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0ZXI6ICNmNWRiZDkgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQ6ICNmOGI3YjYgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHQtbWlkdG9uZTogI2U2MjcwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZDogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrLW1pZHRvbmU6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyazogI2EzMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXI6ICM3ZDIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIFllbGxvd1xuJHZzYW4teWVsbG93LWxpZ2h0ZXN0OiAjZmZmY2U4ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0ZXI6ICNmZWYzYjUgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3c6ICNmZmRjMGIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHQtbWlkdG9uZTogI2ZmOWMzMiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrLW1pZHRvbmU6ICNkMzYwMDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyazogI2MyNTQwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXI6ICNhYTQ1MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VzdDogIzY0MjEwMCAhZGVmYXVsdDtcbi8vIEdyZWVuXG4kdnNhbi1ncmVlbi1saWdodGVzdDogI2RmZjBkMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0ZXI6ICNjN2U1OWMgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbjogIzYwYjUxNSAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWxpZ2h0LW1pZHRvbmU6ICM2MmE0MjAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrLW1pZHRvbmU6ICMzMTg3MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrOiAjMjY2OTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VyOiAjMWQ1MTAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFya2VzdDogIzBmMjkwMCAhZGVmYXVsdDtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuXG4vLyBUaGVzZSBjb3JyZXNwb25kIHRvIENsYXJpdHkncyBjbHItY29sIHNpemVzXG4kYnJlYWtwb2ludHMtc2hyaW5rOiAoXG4gICAgICAnc20nOiAobWF4LXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWF4LXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWF4LXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWF4LXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWF4LWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG4kYnJlYWtwb2ludHMtZXhwYW5kOiAoXG4gICAgICAnc20nOiAobWluLXdpZHRoOiA1NzZweCksXG4gICAgICAnbWQnOiAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAnbGcnOiAobWluLXdpZHRoOiA5OTJweCksXG4gICAgICAneGwnOiAobWluLXdpZHRoOiAxMjAwcHgpLFxuICAgICAgJ3NtLXYnOiAobWluLWhlaWdodDogNzY3cHgpXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gcmVzcG9uZC10by1zaHJpbmsoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1zaHJpbmspfS5cIjtcbiAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8tZXhwYW5kKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtZXhwYW5kKX0uXCI7XG4gICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "UhKm":
    /*!*****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/wizard-shared-pages.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: WizardSharedPagesModule */

    /***/
    function UhKm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardSharedPagesModule", function () {
        return WizardSharedPagesModule;
      });

      var WizardSharedPagesModule = /*#__PURE__*/_createClass(function WizardSharedPagesModule() {
        _classCallCheck(this, WizardSharedPagesModule);
      });
      /***/

    },

    /***/
    "V4jR":
    /*!****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/create-fault-domain.scss.shim.ngstyle.js ***!
      \****************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function V4jR(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  padding: 0;\n}\n.filter-dropdown[_ngcontent-%COMP%] {\n  min-width: 164px;\n}\n#select-host-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: normal;\n}\n#host-list[_ngcontent-%COMP%] {\n  flex: 1 0 0rem;\n}\nvsan-prompt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-bottom: 0.6rem;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvY3JlYXRlLWZhdWx0LWRvbWFpbi5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQWNIO0FBWEE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBY0g7QUFYQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBY0g7QUFYQTtFQUNHLGdCQUFBO0FBY0g7QUFYQTtFQUNHLGtCRzhGaUI7RUg3RmpCLHNCQUFBO0FBY0g7QUFYQTtFQUNHLGNBQUE7QUFjSDtBQVZHO0VBQ0csc0JHcEJJO0VIcUJKLFVBQUE7QUFhTiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC93aXphcmQvc2hhcmVkLXBhZ2VzL2NyZWF0ZS1mYXVsdC1kb21haW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCAwcmVtO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG4gICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgIG1pbi13aWR0aDogMTY0cHg7XG59XG5cbiNzZWxlY3QtaG9zdC1sYWJlbCB7XG4gICBmb250LXNpemU6ICR2c2FuLWZvbnQtc2l6ZS1zbTtcbiAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbiNob3N0LWxpc3Qge1xuICAgZmxleDogMSAwIDByZW07XG59XG5cbnZzYW4tcHJvbXB0IHtcbiAgIGZvcm0ge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR2c2FuLWVsZW1lbnQtc3BhY2luZztcbiAgICAgIHdpZHRoOiA1MCU7XG4gICB9XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "VYrB":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/single-site-fault-domain-nodes.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SingleSiteFaultDomainNodesComponent, FaultDomainItem */

    /***/
    function VYrB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleSiteFaultDomainNodesComponent", function () {
        return SingleSiteFaultDomainNodesComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainItem", function () {
        return FaultDomainItem;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _component_wizard_shared_pages_single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/wizard/shared-pages/single-site-fault-domains-page.component */
      "5asQ");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * A separate component is required because of https://github.com/vmware/clarity/issues/5514
       */


      var SingleSiteFaultDomainNodesComponent = /*#__PURE__*/_createClass(function SingleSiteFaultDomainNodesComponent() {
        _classCallCheck(this, SingleSiteFaultDomainNodesComponent);

        this.onSelectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      });

      var FaultDomainItem = /*#__PURE__*/function (_component_wizard_sha) {
        _inherits(FaultDomainItem, _component_wizard_sha);

        var _super3 = _createSuper(FaultDomainItem);

        function FaultDomainItem() {
          _classCallCheck(this, FaultDomainItem);

          return _super3.apply(this, arguments);
        }

        return _createClass(FaultDomainItem);
      }(_component_wizard_shared_pages_single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_1__["TreeItem"]);
      /***/

    },

    /***/
    "VeT6":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/claim-disks-witness-host-page.component.ngfactory.js ***!
      \****************************************************************************************************************/

    /*! exports provided: RenderType_ClaimDisksWitnessHostPage, View_ClaimDisksWitnessHostPage_0, View_ClaimDisksWitnessHostPage_Host_0, ClaimDisksWitnessHostPageNgFactory */

    /***/
    function VeT6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ClaimDisksWitnessHostPage", function () {
        return RenderType_ClaimDisksWitnessHostPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimDisksWitnessHostPage_0", function () {
        return View_ClaimDisksWitnessHostPage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ClaimDisksWitnessHostPage_Host_0", function () {
        return View_ClaimDisksWitnessHostPage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDisksWitnessHostPageNgFactory", function () {
        return ClaimDisksWitnessHostPageNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _diskmgmt_select_disks_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../diskmgmt/select-disks.component.ngfactory */
      "unWr");
      /* harmony import */


      var _diskmgmt_select_disks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../diskmgmt/select-disks.component */
      "1pCA");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../generated/disk-management-service */
      "a6dL");
      /* harmony import */


      var _diskmgmt_create_disk_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../diskmgmt/create-disk-group.component.ngfactory */
      "SRn5");
      /* harmony import */


      var _diskmgmt_create_disk_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../diskmgmt/create-disk-group.component */
      "uJrr");
      /* harmony import */


      var _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../generated/vsan-capability-provider */
      "y/yc");
      /* harmony import */


      var _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../generated/vsan-config-service */
      "UKIB");
      /* harmony import */


      var _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../service/space-efficiency-service */
      "1Ga+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _claim_disks_witness_host_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./claim-disks-witness-host-page.component */
      "7sC7");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ClaimDisksWitnessHostPage = [];

      var RenderType_ClaimDisksWitnessHostPage = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_ClaimDisksWitnessHostPage,
        data: {}
      });

      function View_ClaimDisksWitnessHostPage_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "vsan-select-disks", [], null, [[null, "disksLoaded"], [null, "selectedDisksChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("disksLoaded" === en) {
            var pd_0 = _co.onLoadingComplete() !== false;
            ad = pd_0 && ad;
          }

          if ("selectedDisksChange" === en) {
            var pd_1 = _co.onStoragePoolDisksChange($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _diskmgmt_select_disks_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_SelectDisksComponent_0"], _diskmgmt_select_disks_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_SelectDisksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _diskmgmt_select_disks_component__WEBPACK_IMPORTED_MODULE_2__["SelectDisksComponent"], [_generated_disk_management_service__WEBPACK_IMPORTED_MODULE_3__["DiskManagementService"]], {
          clusterRef: [0, "clusterRef"],
          hostRef: [1, "hostRef"],
          isVsanMaxEnabled: [2, "isVsanMaxEnabled"]
        }, {
          selectedDisksChange: "selectedDisksChange",
          disksLoaded: "disksLoaded"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.clusterRef;
          var currVal_1 = _co.witnessHost;
          var currVal_2 = _co.isVsanMaxWorkflow;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimDisksWitnessHostPage_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "vsan-create-disk-group-page", [], null, [[null, "dataLoaded"], [null, "validateConfig"], [null, "configChanged"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("dataLoaded" === en) {
            var pd_0 = _co.onLoadingComplete() !== false;
            ad = pd_0 && ad;
          }

          if ("validateConfig" === en) {
            var pd_1 = _co.configValidate($event) !== false;
            ad = pd_1 && ad;
          }

          if ("configChanged" === en) {
            var pd_2 = _co.configChange($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _diskmgmt_create_disk_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CreateDiskGroupComponent_0"], _diskmgmt_create_disk_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CreateDiskGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _diskmgmt_create_disk_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateDiskGroupComponent"], [_generated_disk_management_service__WEBPACK_IMPORTED_MODULE_3__["DiskManagementService"], _generated_vsan_capability_provider__WEBPACK_IMPORTED_MODULE_6__["VsanCapabilityProvider"], _generated_vsan_config_service__WEBPACK_IMPORTED_MODULE_7__["VsanConfigService"], _service_space_efficiency_service__WEBPACK_IMPORTED_MODULE_8__["SpaceEfficiencyService"]], {
          isWitnessHost: [0, "isWitnessHost"],
          hostRef: [1, "hostRef"],
          clusterRef: [2, "clusterRef"]
        }, {
          dataLoaded: "dataLoaded",
          configChanged: "configChanged",
          validateConfig: "validateConfig"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;
          var currVal_1 = _co.witnessHost;
          var currVal_2 = _co.clusterRef;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_ClaimDisksWitnessHostPage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksWitnessHostPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ClaimDisksWitnessHostPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.isVsanMaxWorkflow;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = !_co.isVsanMaxWorkflow;

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_ClaimDisksWitnessHostPage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ClaimDisksWitnessHostPage_0, RenderType_ClaimDisksWitnessHostPage)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _claim_disks_witness_host_page_component__WEBPACK_IMPORTED_MODULE_10__["ClaimDisksWitnessHostPage"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ClaimDisksWitnessHostPageNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _claim_disks_witness_host_page_component__WEBPACK_IMPORTED_MODULE_10__["ClaimDisksWitnessHostPage"], View_ClaimDisksWitnessHostPage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "XIz6":
    /*!************************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/witness-host-requirements.component.ngfactory.js ***!
      \************************************************************************************************************/

    /*! exports provided: RenderType_WitnessHostRequirementsComponent, View_WitnessHostRequirementsComponent_0, View_WitnessHostRequirementsComponent_Host_0, WitnessHostRequirementsComponentNgFactory */

    /***/
    function XIz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_WitnessHostRequirementsComponent", function () {
        return RenderType_WitnessHostRequirementsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_WitnessHostRequirementsComponent_0", function () {
        return View_WitnessHostRequirementsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_WitnessHostRequirementsComponent_Host_0", function () {
        return View_WitnessHostRequirementsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostRequirementsComponentNgFactory", function () {
        return WitnessHostRequirementsComponentNgFactory;
      });
      /* harmony import */


      var _witness_host_requirements_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./witness-host-requirements.scss.shim.ngstyle */
      "IzOX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
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


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _witness_host_requirements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./witness-host-requirements.component */
      "hAuY");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_WitnessHostRequirementsComponent = [_witness_host_requirements_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_WitnessHostRequirementsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_WitnessHostRequirementsComponent,
        data: {}
      });

      function View_WitnessHostRequirementsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "clr-signpost-content", [["clrPosition", "bottom-left"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 13, "ul", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "]))], function (_ck, _v) {
          var currVal_3 = "bottom-left";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.requirements"));

          _ck(_v, 5, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.req1"));

          _ck(_v, 11, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.req2"));

          _ck(_v, 15, 0, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.req3"));

          _ck(_v, 19, 0, currVal_7);
        });
      }

      function View_WitnessHostRequirementsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n   ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "clr-signpost", [["id", "witness-host-requirements"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4210688, null, 0, _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_6__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_WitnessHostRequirementsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_2 = null;

          _ck(_v, 15, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.headerKey));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = true;

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_WitnessHostRequirementsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-witness-host-requirements", [], null, null, null, View_WitnessHostRequirementsComponent_0, RenderType_WitnessHostRequirementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _witness_host_requirements_component__WEBPACK_IMPORTED_MODULE_7__["WitnessHostRequirementsComponent"], [], null, null)], null, null);
      }

      var WitnessHostRequirementsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-witness-host-requirements", _witness_host_requirements_component__WEBPACK_IMPORTED_MODULE_7__["WitnessHostRequirementsComponent"], View_WitnessHostRequirementsComponent_Host_0, {
        headerKey: "headerKey"
      }, {}, []);
      /***/

    },

    /***/
    "Zi5c":
    /*!**********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/delete-domain-warning.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DeleteDomainWarningComponent */

    /***/
    function Zi5c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteDomainWarningComponent", function () {
        return DeleteDomainWarningComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2017-2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var DeleteDomainWarningComponent = /*#__PURE__*/function () {
        function DeleteDomainWarningComponent() {
          var _this4 = this;

          _classCallCheck(this, DeleteDomainWarningComponent);

          this.domains = [];
          this.dialogVisible = false;
          this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onConfirmation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.detailsExpanded = false;

          this.apply = function () {
            _this4.detailsExpanded = false;
            _this4.visible = false;

            _this4.onConfirmation.emit(true);
          };

          this.close = function () {
            _this4.detailsExpanded = false;
            _this4.visible = false;

            _this4.onConfirmation.emit(false);
          };
        }

        _createClass(DeleteDomainWarningComponent, [{
          key: "visible",
          get: function get() {
            return this.dialogVisible;
          },
          set: function set(value) {
            this.dialogVisible = value;
            this.visibleChange.emit(value);
          }
        }, {
          key: "dialogTitle",
          get: function get() {
            return this.domains.length > 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomain.emptyFaultDomainWarning.titleMulti", this.domains.length) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomain.emptyFaultDomainWarning.titleSingle");
          }
        }, {
          key: "warningDescription",
          get: function get() {
            return this.domains.length > 1 ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomain.emptyFaultDomainWarning.headerMulti", this.domains.length) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomain.emptyFaultDomainWarning.headerSingle");
          }
        }]);

        return DeleteDomainWarningComponent;
      }();
      /***/

    },

    /***/
    "bcGm":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/fault-domain-nodes.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: FaultDomainNodesComponent */

    /***/
    function bcGm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainNodesComponent", function () {
        return FaultDomainNodesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * A separate component is required because of https://github.com/vmware/clarity/issues/5514
       */


      var FaultDomainNodesComponent = /*#__PURE__*/_createClass(function FaultDomainNodesComponent() {
        _classCallCheck(this, FaultDomainNodesComponent);

        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      });
      /***/

    },

    /***/
    "hAuY":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/witness-host-requirements.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: WitnessHostRequirementsComponent */

    /***/
    function hAuY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostRequirementsComponent", function () {
        return WitnessHostRequirementsComponent;
      });

      var WitnessHostRequirementsComponent = /*#__PURE__*/_createClass(function WitnessHostRequirementsComponent() {
        _classCallCheck(this, WitnessHostRequirementsComponent);

        this.headerKey = "";
      });
      /***/

    },

    /***/
    "mKD/":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/fault-domains-page.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: FaultDomainsPageComponent */

    /***/
    function mKD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaultDomainsPageComponent", function () {
        return FaultDomainsPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/wizard/flow-metadata */
      "ZRZh");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/fault-domains-util */
      "JwBD");

      var FaultDomainsPageComponent_1;

      var FaultDomainsPageComponent = /*@__PURE__*/function () {
        var FaultDomainsPageComponent = FaultDomainsPageComponent_1 = /*#__PURE__*/function () {
          function FaultDomainsPageComponent() {
            var _this5 = this;

            _classCallCheck(this, FaultDomainsPageComponent);

            this.availableDomains = [];
            this.preferredName = FaultDomainsPageComponent_1.DEFAULT_PREFERRED_NAME;
            this.preferredDomains = [];
            this.secondaryName = FaultDomainsPageComponent_1.DEFAULT_SECONDARY_NAME;
            this.secondaryDomains = [];
            this.hciWorkflow = false;

            this.selectPreferred = function (value) {
              return _this5.selectedPreferredItem = value;
            };

            this.selectSecondary = function (value) {
              return _this5.selectedSecondaryItem = value;
            };

            this.moveToPreferred = function () {
              return _this5.fromSecondaryToPreferred(_this5.selectedSecondaryItem);
            };

            this.moveToSecondary = function () {
              return _this5.fromPreferredToSecondary(_this5.selectedPreferredItem);
            };

            this.dropToPreferred = function (event) {
              return _this5.fromSecondaryToPreferred(event.dragData);
            };

            this.dropToSecondary = function (event) {
              return _this5.fromPreferredToSecondary(event.dragData);
            };
          }

          _createClass(FaultDomainsPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var preferredDomain = this.availableDomains.find(function (domain) {
                return domain.isPreferred;
              });

              if (preferredDomain) {
                var _this$preferredDomain, _this$secondaryDomain;

                // This is the "HCI extend" workflow. We have preferred and secondary fault domains already set.
                // Put the preferred fault domain and the standalone hosts into the first column.
                // Others should be in the second one.
                (_this$preferredDomain = this.preferredDomains).push.apply(_this$preferredDomain, _toConsumableArray(this.availableDomains.filter(function (domain) {
                  return domain.isPreferred || domain.isHost;
                })));

                (_this$secondaryDomain = this.secondaryDomains).push.apply(_this$secondaryDomain, _toConsumableArray(this.availableDomains.filter(function (domain) {
                  return !domain.isPreferred && !domain.isHost;
                })));
              } else {
                var _this$preferredDomain2;

                // This is the "configure Stretched Cluster" workflow and we don't have preferred fault domain set yet.
                // Put everything in the "preferred" section and let the user organize them
                (_this$preferredDomain2 = this.preferredDomains).push.apply(_this$preferredDomain2, _toConsumableArray(this.availableDomains));
              }

              var actualDomains = this.preferredDomains.filter(function (i) {
                return !i.isHost;
              });
              this.preferredName = actualDomains.length === 1 ? actualDomains[0].label : FaultDomainsPageComponent_1.DEFAULT_PREFERRED_NAME;
              this.secondaryName = FaultDomainsPageComponent_1.DEFAULT_SECONDARY_NAME;
            }
          }, {
            key: "fromPreferredToSecondary",
            value: function fromPreferredToSecondary(data) {
              _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_3__["FaultDomainsUtil"].move(data, this.preferredDomains, this.secondaryDomains);

              this.selectedPreferredItem = null;
              this.pageControls.rebuildToc();
            }
          }, {
            key: "fromSecondaryToPreferred",
            value: function fromSecondaryToPreferred(data) {
              _util_fault_domains_util__WEBPACK_IMPORTED_MODULE_3__["FaultDomainsUtil"].move(data, this.secondaryDomains, this.preferredDomains);

              this.selectedSecondaryItem = null;
              this.pageControls.rebuildToc();
            }
          }, {
            key: "validate",
            value: function validate() {
              if (!this.hciWorkflow && (!this.hasConnectedHosts(this.preferredDomains) || !this.hasConnectedHosts(this.secondaryDomains))) {
                return [_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.validation.noHosts")];
              }

              if (this.preferredName.trim() === this.secondaryName.trim()) {
                return [_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.validation.duplicateName")];
              }

              return null;
            }
            /**
             * Returns true if the list of domains and hosts contain at least one connected host.
             */

          }, {
            key: "hasConnectedHosts",
            value: function hasConnectedHosts(domainsAndHosts) {
              var allHosts = [];

              var _iterator5 = _createForOfIteratorHelper(domainsAndHosts),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var item = _step5.value;

                  if (item.isHost) {
                    allHosts.push(item);
                  } else {
                    allHosts.push.apply(allHosts, _toConsumableArray(item.children));
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var firstConnectedHost = allHosts.find(function (host) {
                return !host.inMaintenanceMode;
              });
              return !!firstConnectedHost;
            }
          }]);

          return FaultDomainsPageComponent;
        }();

        FaultDomainsPageComponent.DEFAULT_PREFERRED_NAME = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.defaultPreferredName");
        FaultDomainsPageComponent.DEFAULT_SECONDARY_NAME = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.defaultSecondaryName");
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FaultDomainsPageComponent.prototype, "pageControls", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], FaultDomainsPageComponent.prototype, "availableDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"].ifEmpty(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.validation.noName"))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FaultDomainsPageComponent.prototype, "preferredName", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"].ifEmpty(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.validation.noHosts"))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], FaultDomainsPageComponent.prototype, "preferredDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"].ifEmpty(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.validation.noName"))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FaultDomainsPageComponent.prototype, "secondaryName", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"].ifEmpty(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.validation.noHosts"))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], FaultDomainsPageComponent.prototype, "secondaryDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FaultDomainsPageComponent.prototype, "hciWorkflow", void 0);
        FaultDomainsPageComponent = FaultDomainsPageComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.title"), _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.faultDomains.description"))], FaultDomainsPageComponent);
        return FaultDomainsPageComponent;
      }();
      /***/

    },

    /***/
    "qt2f":
    /*!******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/witness-host-page.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: WitnessHostPageComponent */

    /***/
    function qt2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WitnessHostPageComponent", function () {
        return WitnessHostPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/validation/alert-type */
      "4KIt");
      /* harmony import */


      var _component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/wizard/flow-metadata */
      "ZRZh");
      /* harmony import */


      var _generated_configure_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/configure-stretched-cluster-service */
      "3rpZ");
      /* harmony import */


      var _generated_disk_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/disk-management-service */
      "a6dL");
      /* harmony import */


      var _generated_filter_context_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/filter-context-key */
      "/vq/");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/vsan-stretched-cluster-service */
      "bxEx");
      /* harmony import */


      var _generated_witness_candidate_inventory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/witness-candidate-inventory-service */
      "96pA");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _service_witness_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @service/witness-validation.service */
      "+W3v");
      /* harmony import */


      var _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @util/disk-mgmt.util */
      "dSru");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var WitnessHostPageComponent = /*@__PURE__*/function () {
        var WitnessHostPageComponent = /*#__PURE__*/function () {
          /*
           * Inject hostInventoryService as public as it is needed by the vsan-inventory-browser
           */
          function WitnessHostPageComponent(hostInventoryService, hostValidationService, stretchedClusterService, configureStretchedClusterService, diskManagementService) {
            _classCallCheck(this, WitnessHostPageComponent);

            this.hostInventoryService = hostInventoryService;
            this.hostValidationService = hostValidationService;
            this.stretchedClusterService = stretchedClusterService;
            this.configureStretchedClusterService = configureStretchedClusterService;
            this.diskManagementService = diskManagementService;
            this.hasDiskGroupsOnWitness = null;
            this.isWitnessDeployedFromOvf = false;
          }

          _createClass(WitnessHostPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.inventoryRoot = [_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].vcRoot(this.clusterRef.serverGuid)];
                        this.setInventoryFilterContext();

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "setInventoryFilterContext",
            value: function setInventoryFilterContext() {
              if (this.currentWitnessHostRef) {
                var filterContext = new Map();
                filterContext.set(_generated_filter_context_key__WEBPACK_IMPORTED_MODULE_5__["FilterContextKey"].CURRENT_WITNESS_HOST_REF, this.currentWitnessHostRef);
                this.filterContext = filterContext;
              }
            }
          }, {
            key: "hostSelected",
            value: function hostSelected(event) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!_service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"].areEqual(event.node.data.nodeRef, this.witnessHost)) {
                          _context3.next = 2;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 2:
                        this.resetValidation();
                        this.updateSelection(event.node.data);

                        if (this.witnessHost) {
                          _context3.next = 6;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 6:
                        _context3.next = 8;
                        return this.queryAndValidateSelectedHost();

                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "resetValidation",
            value: function resetValidation() {
              this.hostValidation = null;
              this.pageControls.clearValidationErrors();
            }
          }, {
            key: "updateSelection",
            value: function updateSelection(host) {
              this.hasDiskGroupsOnWitness = false;

              if (host.nodeRef.type === _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObjectUtils"].HOST || host.nodeRef.type === _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObjectUtils"].COMPUTE_RESOURCE) {
                this.witnessHost = host.nodeRef;
                this.witnessHostName = host.name;
              } else {
                this.witnessHost = null;
                this.witnessHostName = "";
              }
            }
          }, {
            key: "queryAndValidateSelectedHost",
            value: function queryAndValidateSelectedHost() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _yield$Promise$all, _yield$Promise$all2;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.pageControls.setBusyState();
                        _context4.next = 3;
                        return Promise.all([this.getHostValidationResult(), this.getIsWitnessDeployedFromOvf(), this.hasWitnessClaimedDisks()]);

                      case 3:
                        _yield$Promise$all = _context4.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                        this.hostValidation = _yield$Promise$all2[0];
                        this.isWitnessDeployedFromOvf = _yield$Promise$all2[1];
                        this.hasDiskGroupsOnWitness = _yield$Promise$all2[2];
                        this.pageControls.clearBusyState();
                        this.pageControls.rebuildToc();

                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }
          }, {
            key: "getHostValidationResult",
            value: function getHostValidationResult() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var hostValidationResult;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return this.configureStretchedClusterService.getNewWitnessHostValidationError(this.clusterRef, this.witnessHost, this.vsanConfigSpec.isVsanMaxEnabled);

                      case 3:
                        hostValidationResult = _context5.sent;
                        return _context5.abrupt("return", this.hostValidationService.handleSingleClusterWitnessValidationResult(hostValidationResult, this.vsanConfigSpec));

                      case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5["catch"](0);

                        _util_logger__WEBPACK_IMPORTED_MODULE_11__["Logger"].error("Unable to get host validation result: " + _context5.t0);

                        return _context5.abrupt("return", this.hostValidationService.handleHostValidationError(_context5.t0));

                      case 11:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[0, 7]]);
              }));
            }
          }, {
            key: "getIsWitnessDeployedFromOvf",
            value: function getIsWitnessDeployedFromOvf() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return this.stretchedClusterService.isWitnessDeployedFromOvf(this.witnessHost);

                      case 3:
                        return _context6.abrupt("return", _context6.sent);

                      case 6:
                        _context6.prev = 6;
                        _context6.t0 = _context6["catch"](0);

                        _util_logger__WEBPACK_IMPORTED_MODULE_11__["Logger"].error("Unable to determine if the selected host is a Virtual appliance deployed from an OVF: ", _context6.t0);

                        return _context6.abrupt("return", false);

                      case 10:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this, [[0, 6]]);
              }));
            }
          }, {
            key: "hasWitnessClaimedDisks",
            value: function hasWitnessClaimedDisks() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var witnessDisksData;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return this.diskManagementService.getHostDisksClaimingData(this.witnessHost, this.vsanConfigSpec.isVsanMaxEnabled);

                      case 3:
                        witnessDisksData = _context7.sent;
                        return _context7.abrupt("return", this.vsanConfigSpec.isVsanMaxEnabled ? _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_10__["DiskMgmtUtil"].hasVsanMaxClaimedDisks(witnessDisksData) : _util_disk_mgmt_util__WEBPACK_IMPORTED_MODULE_10__["DiskMgmtUtil"].hasDiskGroups(witnessDisksData));

                      case 7:
                        _context7.prev = 7;
                        _context7.t0 = _context7["catch"](0);

                        // TODO: dtsvetkova - remove this once 2927115 is resolved
                        _util_logger__WEBPACK_IMPORTED_MODULE_11__["Logger"].error("Unable to get witness host's claimed disks: " + _context7.t0);

                        return _context7.abrupt("return", false);

                      case 11:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this, [[0, 7]]);
              }));
            }
          }, {
            key: "validate",
            value: function validate() {
              if (this.hostValidation && [_component_validation_alert_type__WEBPACK_IMPORTED_MODULE_1__["AlertType"].DANGER, _component_validation_alert_type__WEBPACK_IMPORTED_MODULE_1__["AlertType"].WARNING].includes(this.hostValidation.validationAlertType)) {
                // Prevent the user from proceeding if the selected host had validation errors.
                return this.hostValidation.validationMessages;
              }

              return null;
            }
          }]);

          return WitnessHostPageComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], WitnessHostPageComponent.prototype, "vsanConfigSpec", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], WitnessHostPageComponent.prototype, "pageControls", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"])], WitnessHostPageComponent.prototype, "clusterRef", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["InputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["InputProperty"].required(false)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"])], WitnessHostPageComponent.prototype, "currentWitnessHostRef", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"].ifNull(_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.validation.noSelection"))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_8__["ManagedObject"])], WitnessHostPageComponent.prototype, "witnessHost", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], WitnessHostPageComponent.prototype, "witnessHostName", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], WitnessHostPageComponent.prototype, "hasDiskGroupsOnWitness", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], WitnessHostPageComponent.prototype, "witnessHostDiskMapping", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], WitnessHostPageComponent.prototype, "storagePoolDisks", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], WitnessHostPageComponent.prototype, "isWitnessDeployedFromOvf", void 0);
        WitnessHostPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_2__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_12__["VsanUiUtils"].getString("vsan.faultDomains.stretchedCluster.wizard.configure.page.witnessHost.title"))], WitnessHostPageComponent);
        return WitnessHostPageComponent;
      }();
      /***/

    },

    /***/
    "ucrt":
    /*!******************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/create-fault-domain.component.ngfactory.js ***!
      \******************************************************************************************************/

    /*! exports provided: RenderType_CreateFaultDomainComponent, View_CreateFaultDomainComponent_0, View_CreateFaultDomainComponent_Host_0, CreateFaultDomainComponentNgFactory */

    /***/
    function ucrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateFaultDomainComponent", function () {
        return RenderType_CreateFaultDomainComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateFaultDomainComponent_0", function () {
        return View_CreateFaultDomainComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateFaultDomainComponent_Host_0", function () {
        return View_CreateFaultDomainComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateFaultDomainComponentNgFactory", function () {
        return CreateFaultDomainComponentNgFactory;
      });
      /* harmony import */


      var _create_fault_domain_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-fault-domain.scss.shim.ngstyle */
      "V4jR");
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
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../dialog/prompt/prompt.component.ngfactory */
      "3rpD");
      /* harmony import */


      var _dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../dialog/prompt/prompt.component */
      "eCeK");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _service_task_monitor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _delete_domain_warning_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./delete-domain-warning.component.ngfactory */
      "9JTX");
      /* harmony import */


      var _delete_domain_warning_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./delete-domain-warning.component */
      "Zi5c");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _create_fault_domain_host_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./create-fault-domain-host-filter.pipe */
      "AX7O");
      /* harmony import */


      var _create_fault_domain_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./create-fault-domain.component */
      "zNxW");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateFaultDomainComponent = [_create_fault_domain_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateFaultDomainComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateFaultDomainComponent,
        data: {}
      });

      function View_CreateFaultDomainComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.icon;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_CreateFaultDomainComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "clr-icon", [["shape", "list"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_3__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null);
      }

      function View_CreateFaultDomainComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 28, "clr-dg-row", [["role", "rowgroup"]], [[2, "datagrid-row", null], [2, "datagrid-selected", null], [1, "aria-owns", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridRow_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵz"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingListener"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 5488640, [[13, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], {
          item: [0, "item"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          dgCells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, [[15, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          cells: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, 2, 7, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, [[18, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, [[19, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateFaultDomainComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, 0, ["\n                     ", "\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 16777216, null, 2, 7, "clr-dg-cell", [["role", "gridcell"]], [[2, "datagrid-cell", null], [2, "datagrid-signpost-trigger", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridCell_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridCell"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, [[18, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          signpost: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 147456, [[19, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateFaultDomainComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, 0, ["\n                     ", "\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var currVal_3 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_3);

          _ck(_v, 12, 0);

          var currVal_6 = _v.context.$implicit.icon;

          _ck(_v, 17, 0, currVal_6);

          _ck(_v, 21, 0);

          var currVal_10 = _v.context.$implicit.domainName;

          _ck(_v, 26, 0, currVal_10);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = true;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).signpost.length > 0;

          _ck(_v, 11, 0, currVal_4, currVal_5);

          var currVal_7 = _v.context.$implicit.label;

          _ck(_v, 18, 0, currVal_7);

          var currVal_8 = true;
          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).signpost.length > 0;

          _ck(_v, 20, 0, currVal_8, currVal_9);

          var currVal_11 = _v.context.$implicit.domainName;

          _ck(_v, 27, 0, currVal_11);
        });
      }

      function View_CreateFaultDomainComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.faultDomains.action.hostCountOne"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CreateFaultDomainComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.faultDomains.action.hostCount", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.allHosts, _co.showOnlyStandaloneHosts)).length));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CreateFaultDomainComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 165, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 162, "div", [["aria-hidden", "true"], ["class", "modal-dialog"], ["role", "dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 159, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 152, "vsan-prompt", [], null, [[null, "alertMessagesChange"], [null, "onCancel"], [null, "onConfirm"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("alertMessagesChange" === en) {
            var pd_0 = (_co.alertMessages = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onCancel" === en) {
            var pd_1 = _co.close() !== false;
            ad = pd_1 && ad;
          }

          if ("onConfirm" === en) {
            var pd_2 = _co.apply() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PromptComponent_0"], _dialog_prompt_prompt_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PromptComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _dialog_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_7__["PromptComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]], {
          title: [0, "title"],
          confirmText: [1, "confirmText"],
          cancelText: [2, "cancelText"],
          alertMessages: [3, "alertMessages"],
          blockButton: [4, "blockButton"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm",
          onCancel: "onCancel"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 70, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 29, "clr-input-container", [["class", "horizontal-layout label-auto-size control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrInputContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrInputContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1228800, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbh"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 3, "label", [["for", "domain-name-input"], ["id", "domain-name-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](32, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 16777216, null, 1, 8, "input", [["clrInput", ""], ["id", "domain-name-input"], ["name", "domainName"], ["type", "text"], ["vsan-auto-focus", ""]], [[2, "clr-input", null], [8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("blur" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).triggerValidation() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 4210688, null, 0, _directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_11__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _service_task_monitor_service__WEBPACK_IMPORTED_MODULE_12__["TaskMonitorService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_10__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 3, 2, "clr-control-error", [], [[2, "clr-subtext", null], [1, "id", 0]], [[null, "error"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("error" === en) {
            var pd_0 = _co.VALIDATION_ERROR !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrControlError_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrControlError"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 49152, [[3, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrControlError"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](46, 0, ["\n                     ", "\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 32, "clr-select-container", [["class", "horizontal-layout label-auto-size control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, 0, 3, "label", [["for", "host-filter"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 212992, [[5, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](63, null, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](64, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 16777216, null, 1, 14, "select", [["class", "filter-dropdown"], ["clrSelect", ""], ["id", "host-filter"]], [[2, "clr-select", null], [8, "id", 0]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("blur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).triggerValidation() !== false;
            ad = pd_0 && ad;
          }

          if ("change" === en) {
            var pd_1 = _co.applyFilter($event.target.selectedIndex == 0) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 4, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](72, null, ["\n                        ", "\n                     "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](73, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 4, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](78, null, ["\n                        ", "\n                     "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](79, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](85, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](86, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, 0, 69, "clr-datagrid", [["id", "host-list"]], [[2, "datagrid-host", null], [2, "datagrid-detail-open", null]], [[null, "clrDgSelectedChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("clrDgSelectedChange" === en) {
            var pd_0 = (_co.selectedHosts = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagrid_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcy"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcs"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 5423104, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcy"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], {
          selected: [0, "selected"]
        }, {
          selectedChanged: "clrDgSelectedChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          iterator: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          placeholder: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          columns: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcz"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 13778944, null, 2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcr"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcz"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          rows: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 8404992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcv"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 2244608, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"]], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcw"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 770048, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](126, 1, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](127, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 16777216, null, null, 10, "clr-dg-column", [["role", "columnheader"]], [[2, "datagrid-column", null], [1, "aria-sort", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridColumn_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridColumn"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](135680, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverToggleService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverPositionService"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrPopoverEventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](133, 770048, [[12, 4]], 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵct"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcq"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCommonStringsService"]], {
          field: [0, "field"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          projectedFilter: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdj"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 147456, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵci"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵdi"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](138, 1, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](139, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CreateFaultDomainComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](142, 409600, [[10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridItems"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcp"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          rawItems: [0, "rawItems"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](143, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, 2, 11, "clr-dg-footer", [], [[2, "datagrid-footer", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrDatagridFooter_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrDatagridFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridFooter"], [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵco"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcx"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵda"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          toggle: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_CreateFaultDomainComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](151, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 2, null, View_CreateFaultDomainComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](155, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 1, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 2, "vsan-delete-domain-warning", [], null, [[null, "visibleChange"], [null, "onConfirmation"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("visibleChange" === en) {
            var pd_0 = (_co.deleteDomainWarningVisible = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("onConfirmation" === en) {
            var pd_1 = _co.onCreateNewDomainConfirmation($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _delete_domain_warning_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_DeleteDomainWarningComponent_0"], _delete_domain_warning_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_DeleteDomainWarningComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 49152, null, 0, _delete_domain_warning_component__WEBPACK_IMPORTED_MODULE_14__["DeleteDomainWarningComponent"], [], {
          domains: [0, "domains"],
          visible: [1, "visible"]
        }, {
          visibleChange: "visibleChange",
          onConfirmation: "onConfirmation"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.title"));

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 1, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.ok"));

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 2, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.common.cancel"));

          var currVal_3 = _co.alertMessages;
          var currVal_4 = _co.isApplyButtonBlocked;

          _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_12 = _co.createFaultDomain;

          _ck(_v, 14, 0, currVal_12);

          var currVal_17 = "domain-name-input";

          _ck(_v, 30, 0, currVal_17);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.DOMAIN_NAME, "");

          _ck(_v, 37, 0, currVal_28);

          var currVal_29 = "domain-name-input";

          _ck(_v, 39, 0, currVal_29);

          var currVal_30 = "";

          _ck(_v, 42, 0, currVal_30);

          _ck(_v, 53, 0);

          var currVal_38 = "host-filter";

          _ck(_v, 62, 0, currVal_38);

          var currVal_42 = "host-filter";

          _ck(_v, 67, 0, currVal_42);

          var currVal_50 = _co.selectedHosts;

          _ck(_v, 102, 0, currVal_50);

          var currVal_53 = "label";

          _ck(_v, 121, 0, currVal_53);

          var currVal_57 = "domainName";

          _ck(_v, 133, 0, currVal_57);

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 142, 0, _ck(_v, 143, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.allHosts, _co.showOnlyStandaloneHosts));

          _ck(_v, 142, 0, currVal_59);

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 150, 0, _ck(_v, 151, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.allHosts, _co.showOnlyStandaloneHosts)).length == 1;

          _ck(_v, 150, 0, currVal_61);

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 154, 0, _ck(_v, 155, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.allHosts, _co.showOnlyStandaloneHosts)).length != 1;

          _ck(_v, 154, 0, currVal_62);

          var currVal_63 = _co.domainsForDelete;
          var currVal_64 = _co.deleteDomainWarningVisible;

          _ck(_v, 161, 0, currVal_63, currVal_64);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending;

          _ck(_v, 12, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);

          var currVal_13 = true;
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).control.disabled;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).addGrid();

          _ck(_v, 18, 0, currVal_13, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).forAttr;

          _ck(_v, 29, 0, currVal_16);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 0, _ck(_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.nameInputLabel"));

          _ck(_v, 31, 0, currVal_18);

          var currVal_19 = true;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).id;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending;

          _ck(_v, 34, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);

          var currVal_31 = true;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).id;

          _ck(_v, 44, 0, currVal_31, currVal_32);

          var currVal_33 = _co.invalidDomainNameMessage;

          _ck(_v, 46, 0, currVal_33);

          var currVal_34 = true;
          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).control.disabled;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).addGrid();

          _ck(_v, 49, 0, currVal_34, currVal_35, currVal_36);

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).forAttr;

          _ck(_v, 61, 0, currVal_37);

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 63, 0, _ck(_v, 64, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.hostFilter.label"));

          _ck(_v, 63, 0, currVal_39);

          var currVal_40 = true;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).id;

          _ck(_v, 66, 0, currVal_40, currVal_41);

          var currVal_43 = _co.showOnlyStandaloneHosts == true;

          _ck(_v, 69, 0, currVal_43);

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 72, 0, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.hostFilter.standaloneHosts"));

          _ck(_v, 72, 0, currVal_44);

          var currVal_45 = _co.showOnlyStandaloneHosts == false;

          _ck(_v, 75, 0, currVal_45);

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 78, 0, _ck(_v, 79, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.hostFilter.allHosts"));

          _ck(_v, 78, 0, currVal_46);

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 85, 0, _ck(_v, 86, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.selectHostsHint"));

          _ck(_v, 85, 0, currVal_47);

          var currVal_48 = true;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).detailService.isOpen;

          _ck(_v, 88, 0, currVal_48, currVal_49);

          var currVal_51 = true;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).ariaSort;

          _ck(_v, 117, 0, currVal_51, currVal_52);

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 126, 0, _ck(_v, 127, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.hostColumn"));

          _ck(_v, 126, 0, currVal_54);

          var currVal_55 = true;

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).ariaSort;

          _ck(_v, 129, 0, currVal_55, currVal_56);

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 138, 0, _ck(_v, 139, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.faultDomains.action.createDomain.domainColumn"));

          _ck(_v, 138, 0, currVal_58);

          var currVal_60 = true;

          _ck(_v, 145, 0, currVal_60);
        });
      }

      function View_CreateFaultDomainComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["aria-hidden", "true"], ["class", "modal-backdrop opaque-backdrop"]], null, null, null, null, null))], null, null);
      }

      function View_CreateFaultDomainComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _create_fault_domain_host_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["HostFilterPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateFaultDomainComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateFaultDomainComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.visible;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.visible;

          _ck(_v, 6, 0, currVal_1);
        }, null);
      }

      function View_CreateFaultDomainComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-create-fault-domain", [], null, null, null, View_CreateFaultDomainComponent_0, RenderType_CreateFaultDomainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _create_fault_domain_component__WEBPACK_IMPORTED_MODULE_17__["CreateFaultDomainComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]], null, null)], null, null);
      }

      var CreateFaultDomainComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-create-fault-domain", _create_fault_domain_component__WEBPACK_IMPORTED_MODULE_17__["CreateFaultDomainComponent"], View_CreateFaultDomainComponent_Host_0, {
        domainsAndHosts: "domainsAndHosts",
        visible: "visible"
      }, {
        visibleChange: "visibleChange",
        onConfirmation: "onConfirmation"
      }, []);
      /***/

    },

    /***/
    "zNxW":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/create-fault-domain.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CreateFaultDomainComponent */

    /***/
    function zNxW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateFaultDomainComponent", function () {
        return CreateFaultDomainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /* harmony import */


      var _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-site-fault-domains-page.component */
      "5asQ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _util_reactive_form_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/reactive-form-util */
      "4Nty");
      /* Copyright 2017, 2019 VMware, Inc. All rights reserved. -- VMware Confidential */


      var CreateFaultDomainComponent = /*#__PURE__*/function () {
        function CreateFaultDomainComponent(formBuilder) {
          var _this6 = this;

          _classCallCheck(this, CreateFaultDomainComponent);

          this.formBuilder = formBuilder;
          this.DOMAIN_NAME = "domainName";
          this.VALIDATION_ERROR = "validationError"; // Used to track if the dialog was modified or not

          this.initialState = true;
          this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onConfirmation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.alertMessages = [];
          this.showOnlyStandaloneHosts = true;
          this.deleteDomainWarningVisible = false;
          this.selectedHosts = [];
          this.allHosts = [];

          this.resetDialog = function () {
            _this6.showOnlyStandaloneHosts = true;
            _this6.allHosts = [];
            _this6.selectedHosts = [];
            _this6.initialState = true;

            _this6.createFaultDomain.markAsUntouched();

            _this6.clearValidation();
          };

          this.initData = function () {
            if (_this6.domainsAndHosts) {
              _this6.domainsAndHosts.forEach(function (item) {
                if (item instanceof _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_3__["DomainTreeItem"]) {
                  if (item.hosts) {
                    item.hosts.forEach(function (host) {
                      _this6.allHosts.push(host);

                      if (host.selected || item.selected) {
                        _this6.selectedHosts.push(host); // if a host in a fault domain is selected
                        // show all host in the datagrid


                        _this6.showOnlyStandaloneHosts = false;
                      }
                    });
                  }
                } else if (item instanceof _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_3__["HostTreeItem"]) {
                  _this6.allHosts.push(item);

                  if (item.selected) {
                    _this6.selectedHosts.push(item);
                  }
                }
              });
            }
          };

          this.apply = function () {
            if (!_this6.isValid()) {
              return;
            }

            if (_this6.domainsForDelete.length > 0) {
              _this6.deleteDomainWarningVisible = true;
            } else {
              _this6.createDomain();

              _this6.close();
            }
          };

          this.validateDomainName = function (control) {
            _this6.invalidDomainNameMessage = _this6.getDomainNameErrorMessage(control.value.trim());

            if (!_this6.invalidDomainNameMessage) {
              return null;
            }

            return _defineProperty({}, _this6.VALIDATION_ERROR, {
              value: _this6.invalidDomainNameMessage
            });
          };

          this.clearValidation = function () {
            _this6.alertMessages = [];
            _this6.invalidDomainNameMessage = null;
          };

          this.createDomain = function () {
            var domainName = _this6.createFaultDomain.get(_this6.DOMAIN_NAME).value.trim();

            _this6.createFaultDomain.get(_this6.DOMAIN_NAME).patchValue("");

            _this6.onConfirmation.emit(new _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_3__["DomainTreeItem"](domainName, _util_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"].FAULT_DOMAIN, false, _this6.selectedHosts));
          };

          this.close = function () {
            _this6.visible = false;
          };

          this.applyFilter = function (onlyStandalone) {
            _this6.showOnlyStandaloneHosts = onlyStandalone; // clear selected host if the datagrid perspective changes

            _this6.selectedHosts = [];
          };

          this.getExistingDomainNames = function () {
            var result = [];

            _this6.domainsAndHosts.forEach(function (item) {
              if (item instanceof _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_3__["DomainTreeItem"]) {
                result.push(item.label);
              }
            });

            return result;
          };
          /**
           * Handles user choice if a new domain has to be created or not.
           * This is invoked only if the domain's host were part of domains
           * that will be left empty. As there is no sense to keep empty domains,
           * all empty domains will be deleted.
           *
           * @param deleteEmptyDomains    if the user confirmed that the new domains has to be deleted
           *                              and all previously created domains without host will be wiped out
           */


          this.onCreateNewDomainConfirmation = function (deleteEmptyDomains) {
            if (deleteEmptyDomains) {
              _this6.createDomain();

              _this6.close();
            }

            _this6.deleteDomainWarningVisible = false;
          };

          this.createFaultDomain = this.formBuilder.group(_defineProperty({}, this.DOMAIN_NAME, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [this.validateDomainName])));
        }

        _createClass(CreateFaultDomainComponent, [{
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(value) {
            this._visible = value;
            this.visibleChange.emit(value);

            if (value) {
              this.resetDialog();
              this.initData();
            }
          }
        }, {
          key: "isValid",
          value: function isValid() {
            this.initialState = false;

            if (!this.createFaultDomain.valid) {
              // If form is not touched, validation should be triggered manually in order to show validation errors
              if (!this.createFaultDomain.touched) {
                _util_reactive_form_util__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormUtil"].validateAllFormFields(this.createFaultDomain);
              }

              return false;
            }

            if (this.selectedHosts.length === 0) {
              this.alertMessages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.action.createDomain.validation.noHost"));
              return false;
            }

            return true;
          }
        }, {
          key: "isApplyButtonBlocked",
          get: function get() {
            return this.createFaultDomain.touched && this.createFaultDomain.invalid;
          }
        }, {
          key: "getDomainNameErrorMessage",
          value: function getDomainNameErrorMessage(name) {
            if (!name) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.action.createDomain.validation.noName");
            } else if (name.length > 256) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.action.renameDomain.validation.nameTooLong");
            } else if (this.getExistingDomainNames().indexOf(name) >= 0) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.faultDomains.action.createDomain.validation.duplicateName");
            }

            return null;
          }
        }, {
          key: "domainsForDelete",
          get: function get() {
            var _this7 = this;

            var result = [];
            this.domainsAndHosts.forEach(function (item) {
              if (item instanceof _single_site_fault_domains_page_component__WEBPACK_IMPORTED_MODULE_3__["DomainTreeItem"] && item.hosts) {
                // check which of the hosts under the domain are part of the selected hosts list
                var hostHasToBeDeleted = item.hosts.every(function (host) {
                  return _this7.selectedHosts.indexOf(host) !== -1;
                });

                if (hostHasToBeDeleted) {
                  result.push(item);
                }
              }
            });
            return result;
          }
        }, {
          key: "createDomainDialogClass",
          get: function get() {
            return this.deleteDomainWarningVisible ? "disable-action" : "";
          }
        }]);

        return CreateFaultDomainComponent;
      }();
      /***/

    },

    /***/
    "zZW2":
    /*!***************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/wizard/shared-pages/fault-domain-nodes.scss.shim.ngstyle.js ***!
      \***************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function zZW2(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L3dpemFyZC9zaGFyZWQtcGFnZXMvZmF1bHQtZG9tYWluLW5vZGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUFDQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vY29tbW9uL2NvbXBvbmVudC93aXphcmQvc2hhcmVkLXBhZ2VzL2ZhdWx0LWRvbWFpbi1ub2Rlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=33-es5.js.map